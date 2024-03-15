import { globSync } from "glob"
import path from "path"
import fs from "fs"
import { parseOperationWithDescriptions, printWithComments, updateOperationDefAst } from "@fruits-chain/qiufen-pro-helpers"
import { DefinitionNode, DocumentNode } from "graphql"

type GqlsASTNodeAndPath = {
  absoluteGqlFilePath: string
  operationASTNodes: DefinitionNode[]
}

function updateWorkspaceGqls(relativeFolderPathOfGqls: string) {
  const gqlsFiles = getGqlsFiles(relativeFolderPathOfGqls)
  const gqlsASTNodeAndPathList = gqlsFiles
    .map((gqlFile) => {
      const content = fs.readFileSync(gqlFile, "utf8")
      if (!content) return null

      let workspaceDocumentAst: DocumentNode
      try {
        workspaceDocumentAst = parseOperationWithDescriptions(content)
      } catch {
        return null
      }

      return {
        absoluteGqlFilePath: gqlFile,
        operationASTNodes: workspaceDocumentAst.definitions,
      }
    })
    .filter(Boolean) as GqlsASTNodeAndPath[]

  console.dir(gqlsASTNodeAndPathList[0]?.operationASTNodes)
}

function getGqlsFiles(relativeFolderPathOfGqls: string) {
  const cwdPath = path.join(process.cwd(), relativeFolderPathOfGqls)
  const gqlFiles = globSync("**/*.gql", { cwd: cwdPath })

  const absoluteGqlFiles = gqlFiles.map((file) => path.join(cwdPath, file))
  return absoluteGqlFiles
}

updateWorkspaceGqls("./graphql/operations/commodity-convert/")
