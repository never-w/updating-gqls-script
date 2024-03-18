import { globSync } from "glob"
import path from "path"
import fs from "fs"
import { parseOperationWithDescriptions, printWithComments, getOperationNodesForFieldAstBySchema, fetchSchema } from "@fruits-chain/qiufen-pro-helpers"
import { DefinitionNode, DocumentNode, ExecutableDefinitionNode, FieldNode, GraphQLSchema, Kind, OperationDefinitionNode } from "graphql"
import _ from "lodash"
import { updateOperationDefAst } from "./src/utils/updateOperationDefAst"

type GqlsASTNodeAndPath = {
  operationNames: string[]
  absoluteGqlFilePath: string
  operationASTNodes: DocumentNode
}

updateWorkspaceGqls("http://192.168.10.235:4001/graphql", "./graphql/operations/")

async function updateWorkspaceGqls(url: string, relativeFolderPathOfGqls: string) {
  let schema: GraphQLSchema | undefined
  try {
    schema = await fetchSchema(url)
  } catch (error) {
    console.error(error)
    process.exit(0)
  }

  const operationNodesForFieldAST = getOperationNodesForFieldAstBySchema(schema)
  const gqlsFiles = getGqlsFiles(relativeFolderPathOfGqls)
  const gqlsASTNodeAndPathList = getGqlsASTNodeAndPath(gqlsFiles)

  gqlsASTNodeAndPathList.forEach((item) => {
    const { absoluteGqlFilePath, operationASTNodes, operationNames } = item
    let updateWorkspaceDocumentStr: string = ""

    operationNames.forEach((name) => {
      const foundOperationAst = operationNodesForFieldAST.find((val) => val?.operationDefNodeAst?.name?.value === name)

      if (foundOperationAst) {
        const operationStr = printWithComments(foundOperationAst.operationDefNodeAst)
        const newDocumentNodes = fillOperationInWorkspace(absoluteGqlFilePath, operationStr, operationASTNodes, true)
        updateWorkspaceDocumentStr = printWithComments(newDocumentNodes, true)
      } else {
        console.log(operationNames, "----")
        operationASTNodes.definitions.map((defNode: any) => {
          defNode.selectionSet.selections = defNode.selectionSet.selections.filter((selectionNode: any) => {
            if (defNode.kind === Kind.FRAGMENT_DEFINITION) {
              return true
            }
            const newSelectionNode = selectionNode as FieldNode
            return newSelectionNode.name.value !== name
          })
        })
      }
    })

    fs.writeFileSync(absoluteGqlFilePath, updateWorkspaceDocumentStr)
  })
}

function getGqlsASTNodeAndPath(gqlsFiles: string[]) {
  const result = gqlsFiles.map((gqlFile) => {
    const content = fs.readFileSync(gqlFile, "utf8")
    if (!content) return null

    let workspaceDocumentAst: DocumentNode
    try {
      workspaceDocumentAst = parseOperationWithDescriptions(content)
    } catch {
      return null
    }

    // 得到本地每个gql文件的operations names
    const fileItemOperationNames: string[] = []
    workspaceDocumentAst.definitions.forEach((operationDefNode) => {
      const newOperationDefNode = operationDefNode as OperationDefinitionNode
      newOperationDefNode.selectionSet.selections.forEach((selectionNode) => {
        const newSelectionNode = selectionNode as FieldNode
        fileItemOperationNames.push(newSelectionNode.name.value)
      })
    })

    return {
      operationNames: fileItemOperationNames,
      absoluteGqlFilePath: gqlFile,
      operationASTNodes: workspaceDocumentAst,
    }
  })

  return result.filter(Boolean) as GqlsASTNodeAndPath[]
}

function getGqlsFiles(relativeFolderPathOfGqls: string) {
  const cwdPath = path.join(process.cwd(), relativeFolderPathOfGqls)
  const gqlFiles = globSync("**/*.gql", { cwd: cwdPath })

  const absoluteGqlFiles = gqlFiles.map((file) => path.join(cwdPath, file))
  return absoluteGqlFiles
}

/**
 * 填充远程最新的operation到工作区对应文件里面
 */
function fillOperationInWorkspace(filePath: string, gql: string, documentAst: DocumentNode, isAllAddComment = false) {
  const workspaceDocumentAst = documentAst
  const remoteDocumentAst = parseOperationWithDescriptions(gql)

  // 更新本地AST
  const updatedWorkspaceAst: DocumentNode = {
    ...workspaceDocumentAst,
    definitions: workspaceDocumentAst.definitions
      .map((workspaceDefinition) => {
        const remoteDefinition = remoteDocumentAst.definitions.find(
          // eslint-disable-next-line @typescript-eslint/no-shadow
          (remoteDefinition) => {
            const workspaceDefinitionSelections = (workspaceDefinition as ExecutableDefinitionNode).selectionSet.selections as FieldNode[]
            const remoteDefinitionSelections = (remoteDefinition as ExecutableDefinitionNode).selectionSet.selections as FieldNode[]
            const isTheWorkspaceDefinitionExist = workspaceDefinitionSelections.some((itemSelection) => itemSelection.name.value === remoteDefinitionSelections[0].name.value)
            return remoteDefinition.kind === workspaceDefinition.kind && isTheWorkspaceDefinitionExist
          }
        )

        if (!remoteDefinition || workspaceDefinition.kind === Kind.FRAGMENT_DEFINITION || workspaceDefinition.loc?.source?.body?.includes("...")) {
          return workspaceDefinition
        }
        return updateOperationDefAst(workspaceDefinition, remoteDefinition)
      })
      .filter(Boolean) as DefinitionNode[],
  }

  return updatedWorkspaceAst
}
