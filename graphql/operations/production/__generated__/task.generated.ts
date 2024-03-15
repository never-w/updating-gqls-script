import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TaskStatisticsQueryVariables = SchemaTypes.Exact<{
  date?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Long']>;
}>;


export type TaskStatisticsQuery = { taskStatistics?: { __typename?: 'TaskStatistics', toBeProduced?: number, inProduction?: number, completed?: number, canceled?: number } };

export type TasksQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  taskCondition?: SchemaTypes.InputMaybe<SchemaTypes.TaskCondition>;
}>;


export type TasksQuery = { tasks?: { __typename?: 'TaskPageResult', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'Tasks', taskId?: string, taskStatus?: number, taskStatusName?: string, taskCode?: string, startTime?: number, endTime?: number, schedule?: string, totalExpectNum?: number, totalCompletedNum?: number, customerName?: string, taskItems?: Array<{ __typename?: 'TaskItems', commodityName?: string, skuTextDescription?: Array<string>, totalTypeName?: string, expectNum?: number, planChangeNotice?: number, planCancelCount?: number }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> } };

export type KeywordTasksQueryVariables = SchemaTypes.Exact<{
  keyword?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['String']>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type KeywordTasksQuery = { keywordTasks?: { __typename?: 'TaskPageResult', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'Tasks', taskId?: string, taskStatus?: number, taskStatusName?: string, taskCode?: string, startTime?: number, endTime?: number, schedule?: string, totalExpectNum?: number, totalCompletedNum?: number, customerName?: string, taskItems?: Array<{ __typename?: 'TaskItems', commodityName?: string, skuTextDescription?: Array<string>, totalTypeName?: string, expectNum?: number, planCancelCount?: number, planChangeNotice?: number }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> } };

export type TaskQueryVariables = SchemaTypes.Exact<{
  taskId: SchemaTypes.Scalars['ID'];
}>;


export type TaskQuery = { task?: { __typename?: 'Task', planId?: string, taskId?: string, taskCode?: string, taskStatus?: number, taskStatusName?: string, leaderId?: number, leaderName?: string, line?: number, numberPlan?: number, numberActual?: number, tempWorkerQuantity?: number, cancelReason?: string, abnormalFlag?: boolean, plan?: { __typename?: 'Plan', planId?: string, planCode?: string, planStatus?: number, customerType?: number, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, planDate?: number, planStartTime?: number, planEndTime?: number, planDescription?: string, createType?: number, commodityType?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, taskItems?: Array<{ __typename?: 'TaskItem', taskItemId?: string, planId?: string, taskId?: string, commodityId?: number, commodityName?: string, commodityBomId?: number, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, expectNum?: number, completedNum?: number, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalType?: number, totalTypeName?: string, planChangeNotice?: number, changeQuantity?: number, changeType?: number, specificationLabel?: string, packageLabel?: string, quantityLabel?: string, outOrderItemId?: number, commodityStatus?: SchemaTypes.CommodityStatus, actualPickingQuantity?: number }> }, getProductionConfig?: { __typename?: 'ProductionConfigPayload', id?: number, configCode?: number, orgId?: number, createTime?: number, updateTime?: number, createBy?: number, updateBy?: number, configValue?: { __typename?: 'ProductionSwitchPayload', productionSwitch?: boolean } | { __typename?: 'WorkerSalaryPayload', workerSalary?: number } } };

export type TaskLogsQueryVariables = SchemaTypes.Exact<{
  taskId: SchemaTypes.Scalars['ID'];
}>;


export type TaskLogsQuery = { taskLogs?: Array<{ __typename?: 'TaskLog', taskLogId?: number, planId?: string, taskId?: string, taskLogType?: number, taskLogTypeText?: string, taskLogDescription?: string, createTime?: number, createBy?: number, createUserName?: string }> };

export type BeginTaskMutationVariables = SchemaTypes.Exact<{
  beginTask?: SchemaTypes.InputMaybe<SchemaTypes.BeginTask>;
}>;


export type BeginTaskMutation = { beginTask?: boolean };

export type CompleteTaskMutationVariables = SchemaTypes.Exact<{
  completeTaskInput?: SchemaTypes.InputMaybe<SchemaTypes.CompleteTaskInput>;
}>;


export type CompleteTaskMutation = { completeTask?: boolean };

export type TaskAcquireMaterialCommoditiesQueryVariables = SchemaTypes.Exact<{
  listTaskAcquireMaterialCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.ListTaskAcquireMaterialCommodityInput>;
}>;


export type TaskAcquireMaterialCommoditiesQuery = { taskAcquireMaterialCommodities?: Array<{ __typename?: 'TaskAcquireMaterialCommodityPayload', commodityId?: number, commodityName?: string, commodityTypeId?: number, commodityTypeName?: string, commodityCategoryId?: number, commodityCategoryName?: string, commodityVarietyId?: number, commodityVarietyName?: string, commodityPlaceOriginId?: number, commodityPlaceOriginName?: string, commoditySkuId?: number, status?: number, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, property?: Array<number>, bomId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, customerName?: string, customerId?: number, stockUnitTypeName?: string, stockUnitQuantity?: number, stockTotalTypeName?: string, stockTotalQuantity?: number, stockBatchCode?: string, stockBatchId?: string, outStockRecordItemId?: number, warehouseId?: string, warehouseName?: string, surplusQuantity?: number, operableQuantity?: number }> };

export type AddOutOrderMutationVariables = SchemaTypes.Exact<{
  outOrder?: SchemaTypes.InputMaybe<SchemaTypes.OutOrder>;
}>;


export type AddOutOrderMutation = { addOutOrder?: string };

export type ModifyOutOrderMutationVariables = SchemaTypes.Exact<{
  outOrderUpdateInput: SchemaTypes.OutOrderUpdateInput;
}>;


export type ModifyOutOrderMutation = { modifyOutOrder?: boolean };

export type TaskItemsQueryVariables = SchemaTypes.Exact<{
  taskId: SchemaTypes.Scalars['ID'];
}>;


export type TaskItemsQuery = { taskItems?: Array<{ __typename?: 'TaskItem', planId?: string, taskId?: string, commodityId?: number, commodityName?: string, commodityBomId?: number, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, expectNum?: number, completedNum?: number, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalType?: number, totalTypeName?: string }> };

export type AddInOrderMutationVariables = SchemaTypes.Exact<{
  inOrder?: SchemaTypes.InputMaybe<SchemaTypes.InOrder>;
}>;


export type AddInOrderMutation = { addInOrder?: string };

export type ModifyInOrderMutationVariables = SchemaTypes.Exact<{
  inOrderUpdate: SchemaTypes.InOrderUpdate;
}>;


export type ModifyInOrderMutation = { modifyInOrder?: string };

export type TaskReturnedMutationVariables = SchemaTypes.Exact<{
  taskId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type TaskReturnedMutation = { taskReturned?: boolean };

export type PageMoreCommoditiesQueryVariables = SchemaTypes.Exact<{
  pageMoreCommoditiesInput?: SchemaTypes.InputMaybe<SchemaTypes.PageMoreCommoditiesInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageMoreCommoditiesQuery = { pageMoreCommodities?: { __typename?: 'MoreCommoditiesPageResult', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'TaskAcquireMaterialCommodityPayload', commodityId?: number, commodityName?: string, commodityTypeId?: number, commodityTypeName?: string, commodityCategoryId?: number, commodityCategoryName?: string, commodityVarietyId?: number, commodityVarietyName?: string, commodityPlaceOriginId?: number, commodityPlaceOriginName?: string, commoditySkuId?: number, status?: number, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, property?: Array<number>, bomId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, customerName?: string, customerId?: number, stockUnitTypeName?: string, stockUnitQuantity?: number, stockTotalTypeName?: string, stockTotalQuantity?: number, stockBatchCode?: string, stockBatchId?: string, outStockRecordItemId?: number, warehouseId?: string, warehouseName?: string, surplusQuantity?: number, operableQuantity?: number }> } };

export type ConfirmTaskFinishQueryVariables = SchemaTypes.Exact<{
  taskId: SchemaTypes.Scalars['ID'];
}>;


export type ConfirmTaskFinishQuery = { confirmTaskFinish?: { __typename?: 'ConfirmTaskFinishPayload', interval?: number, productionOverview?: { __typename?: 'ProductionOverview', pickingSum?: number, returnSum?: number, damagedSum?: number, defectiveSum?: number, surplusSum?: number, productAndSemiSum?: number }, picking?: { __typename?: 'Picking', rawMaterialUnFinish?: number, rawMaterial?: number, accessoriesUnFinish?: number, accessories?: number, semiFinishedProductsUnFinish?: number, semiFinishedProducts?: number, returnedGoodsUnFinish?: number, returnedGoods?: number, undone?: number }, warehousing?: { __typename?: 'Warehousing', finishedProductUnFinish?: number, finishedProduct?: number, semiFinishedProductsUnFinish?: number, semiFinishedProducts?: number, defectiveUnFinish?: number, defective?: number, undone?: number, rawMaterial?: number, rawMaterialUnFinish?: number, damageGoodsUnFinish?: number, damageGoods?: number }, returnMaterial?: { __typename?: 'ReturnMaterial', rawMaterialUnFinish?: number, rawMaterial?: number, accessoriesUnFinish?: number, accessories?: number, semiFinishedProductsUnFinish?: number, semiFinishedProducts?: number, returnedGoodsUnFinish?: number, returnedGoods?: number, undone?: number, noReturn?: boolean }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } } };


export const TaskStatisticsDocument = gql`
    query taskStatistics($date: Long) {
  taskStatistics(date: $date) {
    toBeProduced
    inProduction
    completed
    canceled
  }
}
    `;

/**
 * __useTaskStatisticsQuery__
 *
 * To run a query within a React component, call `useTaskStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskStatisticsQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useTaskStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<TaskStatisticsQuery, TaskStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskStatisticsQuery, TaskStatisticsQueryVariables>(TaskStatisticsDocument, options);
      }
export function useTaskStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskStatisticsQuery, TaskStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskStatisticsQuery, TaskStatisticsQueryVariables>(TaskStatisticsDocument, options);
        }
export type TaskStatisticsQueryHookResult = ReturnType<typeof useTaskStatisticsQuery>;
export type TaskStatisticsLazyQueryHookResult = ReturnType<typeof useTaskStatisticsLazyQuery>;
export type TaskStatisticsQueryResult = Apollo.QueryResult<TaskStatisticsQuery, TaskStatisticsQueryVariables>;
export const TasksDocument = gql`
    query tasks($page: Page, $taskCondition: TaskCondition) {
  tasks(page: $page, taskCondition: $taskCondition) {
    records {
      taskId
      taskStatus
      taskStatusName
      taskCode
      startTime
      endTime
      schedule
      totalExpectNum
      totalCompletedNum
      customerName
      taskItems {
        commodityName
        skuTextDescription
        totalTypeName
        expectNum
        planChangeNotice
        planCancelCount
      }
      belongOrg {
        orgId
        orgName
      }
      warehouse {
        warehouseId
        warehouseName
      }
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *      page: // value for 'page'
 *      taskCondition: // value for 'taskCondition'
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;
export const KeywordTasksDocument = gql`
    query keywordTasks($keyword: String, $page: Page) {
  keywordTasks(keyword: $keyword, page: $page) {
    records {
      taskId
      taskStatus
      taskStatusName
      taskCode
      startTime
      endTime
      schedule
      totalExpectNum
      totalCompletedNum
      customerName
      taskItems {
        commodityName
        skuTextDescription
        totalTypeName
        expectNum
        planCancelCount
        planChangeNotice
      }
      belongOrg {
        orgId
        orgName
      }
      warehouse {
        warehouseId
        warehouseName
      }
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __useKeywordTasksQuery__
 *
 * To run a query within a React component, call `useKeywordTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeywordTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeywordTasksQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useKeywordTasksQuery(baseOptions?: Apollo.QueryHookOptions<KeywordTasksQuery, KeywordTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<KeywordTasksQuery, KeywordTasksQueryVariables>(KeywordTasksDocument, options);
      }
export function useKeywordTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KeywordTasksQuery, KeywordTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<KeywordTasksQuery, KeywordTasksQueryVariables>(KeywordTasksDocument, options);
        }
export type KeywordTasksQueryHookResult = ReturnType<typeof useKeywordTasksQuery>;
export type KeywordTasksLazyQueryHookResult = ReturnType<typeof useKeywordTasksLazyQuery>;
export type KeywordTasksQueryResult = Apollo.QueryResult<KeywordTasksQuery, KeywordTasksQueryVariables>;
export const TaskDocument = gql`
    query task($taskId: ID!) {
  task(taskId: $taskId) {
    planId
    taskId
    taskCode
    taskStatus
    taskStatusName
    leaderId
    leaderName
    line
    numberPlan
    numberActual
    tempWorkerQuantity
    cancelReason
    abnormalFlag
    plan {
      planId
      planCode
      planStatus
      customerType
      customerId
      customerName
      customerDistributionId
      customerDistributionName
      planDate
      planStartTime
      planEndTime
      planDescription
      createType
      commodityType
      belongOrg {
        orgId
        orgName
      }
      warehouse {
        warehouseId
        warehouseName
      }
    }
    taskItems {
      taskItemId
      planId
      taskId
      commodityId
      commodityName
      commodityBomId
      commoditySkuId
      commoditySpecOptionId
      skuTextDescription
      expectNum
      completedNum
      unitQuantity
      unitType
      unitTypeName
      totalType
      totalTypeName
      planChangeNotice
      changeQuantity
      changeType
      specificationLabel
      packageLabel
      quantityLabel
      outOrderItemId
      commodityStatus
      actualPickingQuantity
    }
  }
  getProductionConfig {
    id
    configCode
    orgId
    configValue {
      ... on WorkerSalaryPayload {
        workerSalary
      }
      ... on ProductionSwitchPayload {
        productionSwitch
      }
    }
    createTime
    updateTime
    createBy
    updateBy
  }
}
    `;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskQuery(baseOptions: Apollo.QueryHookOptions<TaskQuery, TaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
      }
export function useTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = Apollo.QueryResult<TaskQuery, TaskQueryVariables>;
export const TaskLogsDocument = gql`
    query taskLogs($taskId: ID!) {
  taskLogs(taskId: $taskId) {
    taskLogId
    planId
    taskId
    taskLogType
    taskLogTypeText
    taskLogDescription
    createTime
    createBy
    createUserName
  }
}
    `;

/**
 * __useTaskLogsQuery__
 *
 * To run a query within a React component, call `useTaskLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskLogsQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskLogsQuery(baseOptions: Apollo.QueryHookOptions<TaskLogsQuery, TaskLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskLogsQuery, TaskLogsQueryVariables>(TaskLogsDocument, options);
      }
export function useTaskLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskLogsQuery, TaskLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskLogsQuery, TaskLogsQueryVariables>(TaskLogsDocument, options);
        }
export type TaskLogsQueryHookResult = ReturnType<typeof useTaskLogsQuery>;
export type TaskLogsLazyQueryHookResult = ReturnType<typeof useTaskLogsLazyQuery>;
export type TaskLogsQueryResult = Apollo.QueryResult<TaskLogsQuery, TaskLogsQueryVariables>;
export const BeginTaskDocument = gql`
    mutation beginTask($beginTask: BeginTask) {
  beginTask(beginTask: $beginTask)
}
    `;
export type BeginTaskMutationFn = Apollo.MutationFunction<BeginTaskMutation, BeginTaskMutationVariables>;

/**
 * __useBeginTaskMutation__
 *
 * To run a mutation, you first call `useBeginTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBeginTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [beginTaskMutation, { data, loading, error }] = useBeginTaskMutation({
 *   variables: {
 *      beginTask: // value for 'beginTask'
 *   },
 * });
 */
export function useBeginTaskMutation(baseOptions?: Apollo.MutationHookOptions<BeginTaskMutation, BeginTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BeginTaskMutation, BeginTaskMutationVariables>(BeginTaskDocument, options);
      }
export type BeginTaskMutationHookResult = ReturnType<typeof useBeginTaskMutation>;
export type BeginTaskMutationResult = Apollo.MutationResult<BeginTaskMutation>;
export type BeginTaskMutationOptions = Apollo.BaseMutationOptions<BeginTaskMutation, BeginTaskMutationVariables>;
export const CompleteTaskDocument = gql`
    mutation completeTask($completeTaskInput: CompleteTaskInput) {
  completeTask(completeTaskInput: $completeTaskInput)
}
    `;
export type CompleteTaskMutationFn = Apollo.MutationFunction<CompleteTaskMutation, CompleteTaskMutationVariables>;

/**
 * __useCompleteTaskMutation__
 *
 * To run a mutation, you first call `useCompleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeTaskMutation, { data, loading, error }] = useCompleteTaskMutation({
 *   variables: {
 *      completeTaskInput: // value for 'completeTaskInput'
 *   },
 * });
 */
export function useCompleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<CompleteTaskMutation, CompleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteTaskMutation, CompleteTaskMutationVariables>(CompleteTaskDocument, options);
      }
export type CompleteTaskMutationHookResult = ReturnType<typeof useCompleteTaskMutation>;
export type CompleteTaskMutationResult = Apollo.MutationResult<CompleteTaskMutation>;
export type CompleteTaskMutationOptions = Apollo.BaseMutationOptions<CompleteTaskMutation, CompleteTaskMutationVariables>;
export const TaskAcquireMaterialCommoditiesDocument = gql`
    query taskAcquireMaterialCommodities($listTaskAcquireMaterialCommodityInput: ListTaskAcquireMaterialCommodityInput) {
  taskAcquireMaterialCommodities(
    listTaskAcquireMaterialCommodityInput: $listTaskAcquireMaterialCommodityInput
  ) {
    commodityId
    commodityName
    commodityTypeId
    commodityTypeName
    commodityCategoryId
    commodityCategoryName
    commodityVarietyId
    commodityVarietyName
    commodityPlaceOriginId
    commodityPlaceOriginName
    commoditySkuId
    status
    unitQuantity
    unitType
    unitTypeName
    totalQuantity
    totalType
    totalTypeName
    property
    bomId
    commoditySpecOptionId
    skuTextDescription
    customerName
    customerId
    stockUnitTypeName
    stockUnitQuantity
    stockTotalTypeName
    stockTotalQuantity
    stockBatchCode
    stockBatchId
    outStockRecordItemId
    warehouseId
    warehouseName
    surplusQuantity
    operableQuantity
  }
}
    `;

/**
 * __useTaskAcquireMaterialCommoditiesQuery__
 *
 * To run a query within a React component, call `useTaskAcquireMaterialCommoditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskAcquireMaterialCommoditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskAcquireMaterialCommoditiesQuery({
 *   variables: {
 *      listTaskAcquireMaterialCommodityInput: // value for 'listTaskAcquireMaterialCommodityInput'
 *   },
 * });
 */
export function useTaskAcquireMaterialCommoditiesQuery(baseOptions?: Apollo.QueryHookOptions<TaskAcquireMaterialCommoditiesQuery, TaskAcquireMaterialCommoditiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskAcquireMaterialCommoditiesQuery, TaskAcquireMaterialCommoditiesQueryVariables>(TaskAcquireMaterialCommoditiesDocument, options);
      }
export function useTaskAcquireMaterialCommoditiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskAcquireMaterialCommoditiesQuery, TaskAcquireMaterialCommoditiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskAcquireMaterialCommoditiesQuery, TaskAcquireMaterialCommoditiesQueryVariables>(TaskAcquireMaterialCommoditiesDocument, options);
        }
export type TaskAcquireMaterialCommoditiesQueryHookResult = ReturnType<typeof useTaskAcquireMaterialCommoditiesQuery>;
export type TaskAcquireMaterialCommoditiesLazyQueryHookResult = ReturnType<typeof useTaskAcquireMaterialCommoditiesLazyQuery>;
export type TaskAcquireMaterialCommoditiesQueryResult = Apollo.QueryResult<TaskAcquireMaterialCommoditiesQuery, TaskAcquireMaterialCommoditiesQueryVariables>;
export const AddOutOrderDocument = gql`
    mutation addOutOrder($outOrder: OutOrder) {
  addOutOrder(outOrder: $outOrder)
}
    `;
export type AddOutOrderMutationFn = Apollo.MutationFunction<AddOutOrderMutation, AddOutOrderMutationVariables>;

/**
 * __useAddOutOrderMutation__
 *
 * To run a mutation, you first call `useAddOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOutOrderMutation, { data, loading, error }] = useAddOutOrderMutation({
 *   variables: {
 *      outOrder: // value for 'outOrder'
 *   },
 * });
 */
export function useAddOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<AddOutOrderMutation, AddOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOutOrderMutation, AddOutOrderMutationVariables>(AddOutOrderDocument, options);
      }
export type AddOutOrderMutationHookResult = ReturnType<typeof useAddOutOrderMutation>;
export type AddOutOrderMutationResult = Apollo.MutationResult<AddOutOrderMutation>;
export type AddOutOrderMutationOptions = Apollo.BaseMutationOptions<AddOutOrderMutation, AddOutOrderMutationVariables>;
export const ModifyOutOrderDocument = gql`
    mutation modifyOutOrder($outOrderUpdateInput: OutOrderUpdateInput!) {
  modifyOutOrder(outOrderUpdateInput: $outOrderUpdateInput)
}
    `;
export type ModifyOutOrderMutationFn = Apollo.MutationFunction<ModifyOutOrderMutation, ModifyOutOrderMutationVariables>;

/**
 * __useModifyOutOrderMutation__
 *
 * To run a mutation, you first call `useModifyOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModifyOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modifyOutOrderMutation, { data, loading, error }] = useModifyOutOrderMutation({
 *   variables: {
 *      outOrderUpdateInput: // value for 'outOrderUpdateInput'
 *   },
 * });
 */
export function useModifyOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<ModifyOutOrderMutation, ModifyOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ModifyOutOrderMutation, ModifyOutOrderMutationVariables>(ModifyOutOrderDocument, options);
      }
export type ModifyOutOrderMutationHookResult = ReturnType<typeof useModifyOutOrderMutation>;
export type ModifyOutOrderMutationResult = Apollo.MutationResult<ModifyOutOrderMutation>;
export type ModifyOutOrderMutationOptions = Apollo.BaseMutationOptions<ModifyOutOrderMutation, ModifyOutOrderMutationVariables>;
export const TaskItemsDocument = gql`
    query taskItems($taskId: ID!) {
  taskItems(taskId: $taskId) {
    planId
    taskId
    commodityId
    commodityName
    commodityBomId
    commoditySkuId
    commoditySpecOptionId
    skuTextDescription
    expectNum
    completedNum
    unitQuantity
    unitType
    unitTypeName
    totalType
    totalTypeName
  }
}
    `;

/**
 * __useTaskItemsQuery__
 *
 * To run a query within a React component, call `useTaskItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskItemsQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskItemsQuery(baseOptions: Apollo.QueryHookOptions<TaskItemsQuery, TaskItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskItemsQuery, TaskItemsQueryVariables>(TaskItemsDocument, options);
      }
export function useTaskItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskItemsQuery, TaskItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskItemsQuery, TaskItemsQueryVariables>(TaskItemsDocument, options);
        }
export type TaskItemsQueryHookResult = ReturnType<typeof useTaskItemsQuery>;
export type TaskItemsLazyQueryHookResult = ReturnType<typeof useTaskItemsLazyQuery>;
export type TaskItemsQueryResult = Apollo.QueryResult<TaskItemsQuery, TaskItemsQueryVariables>;
export const AddInOrderDocument = gql`
    mutation addInOrder($inOrder: InOrder) {
  addInOrder(inOrder: $inOrder)
}
    `;
export type AddInOrderMutationFn = Apollo.MutationFunction<AddInOrderMutation, AddInOrderMutationVariables>;

/**
 * __useAddInOrderMutation__
 *
 * To run a mutation, you first call `useAddInOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddInOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addInOrderMutation, { data, loading, error }] = useAddInOrderMutation({
 *   variables: {
 *      inOrder: // value for 'inOrder'
 *   },
 * });
 */
export function useAddInOrderMutation(baseOptions?: Apollo.MutationHookOptions<AddInOrderMutation, AddInOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddInOrderMutation, AddInOrderMutationVariables>(AddInOrderDocument, options);
      }
export type AddInOrderMutationHookResult = ReturnType<typeof useAddInOrderMutation>;
export type AddInOrderMutationResult = Apollo.MutationResult<AddInOrderMutation>;
export type AddInOrderMutationOptions = Apollo.BaseMutationOptions<AddInOrderMutation, AddInOrderMutationVariables>;
export const ModifyInOrderDocument = gql`
    mutation modifyInOrder($inOrderUpdate: InOrderUpdate!) {
  modifyInOrder(inOrderUpdate: $inOrderUpdate)
}
    `;
export type ModifyInOrderMutationFn = Apollo.MutationFunction<ModifyInOrderMutation, ModifyInOrderMutationVariables>;

/**
 * __useModifyInOrderMutation__
 *
 * To run a mutation, you first call `useModifyInOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModifyInOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modifyInOrderMutation, { data, loading, error }] = useModifyInOrderMutation({
 *   variables: {
 *      inOrderUpdate: // value for 'inOrderUpdate'
 *   },
 * });
 */
export function useModifyInOrderMutation(baseOptions?: Apollo.MutationHookOptions<ModifyInOrderMutation, ModifyInOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ModifyInOrderMutation, ModifyInOrderMutationVariables>(ModifyInOrderDocument, options);
      }
export type ModifyInOrderMutationHookResult = ReturnType<typeof useModifyInOrderMutation>;
export type ModifyInOrderMutationResult = Apollo.MutationResult<ModifyInOrderMutation>;
export type ModifyInOrderMutationOptions = Apollo.BaseMutationOptions<ModifyInOrderMutation, ModifyInOrderMutationVariables>;
export const TaskReturnedDocument = gql`
    mutation taskReturned($taskId: ID) {
  taskReturned(taskId: $taskId)
}
    `;
export type TaskReturnedMutationFn = Apollo.MutationFunction<TaskReturnedMutation, TaskReturnedMutationVariables>;

/**
 * __useTaskReturnedMutation__
 *
 * To run a mutation, you first call `useTaskReturnedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskReturnedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskReturnedMutation, { data, loading, error }] = useTaskReturnedMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskReturnedMutation(baseOptions?: Apollo.MutationHookOptions<TaskReturnedMutation, TaskReturnedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TaskReturnedMutation, TaskReturnedMutationVariables>(TaskReturnedDocument, options);
      }
export type TaskReturnedMutationHookResult = ReturnType<typeof useTaskReturnedMutation>;
export type TaskReturnedMutationResult = Apollo.MutationResult<TaskReturnedMutation>;
export type TaskReturnedMutationOptions = Apollo.BaseMutationOptions<TaskReturnedMutation, TaskReturnedMutationVariables>;
export const PageMoreCommoditiesDocument = gql`
    query pageMoreCommodities($pageMoreCommoditiesInput: PageMoreCommoditiesInput, $page: Page) {
  pageMoreCommodities(
    pageMoreCommoditiesInput: $pageMoreCommoditiesInput
    page: $page
  ) {
    records {
      commodityId
      commodityName
      commodityTypeId
      commodityTypeName
      commodityCategoryId
      commodityCategoryName
      commodityVarietyId
      commodityVarietyName
      commodityPlaceOriginId
      commodityPlaceOriginName
      commoditySkuId
      status
      unitQuantity
      unitType
      unitTypeName
      totalQuantity
      totalType
      totalTypeName
      property
      bomId
      commoditySpecOptionId
      skuTextDescription
      customerName
      customerId
      stockUnitTypeName
      stockUnitQuantity
      stockTotalTypeName
      stockTotalQuantity
      stockBatchCode
      stockBatchId
      outStockRecordItemId
      warehouseId
      warehouseName
      surplusQuantity
      operableQuantity
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageMoreCommoditiesQuery__
 *
 * To run a query within a React component, call `usePageMoreCommoditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageMoreCommoditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageMoreCommoditiesQuery({
 *   variables: {
 *      pageMoreCommoditiesInput: // value for 'pageMoreCommoditiesInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageMoreCommoditiesQuery(baseOptions?: Apollo.QueryHookOptions<PageMoreCommoditiesQuery, PageMoreCommoditiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageMoreCommoditiesQuery, PageMoreCommoditiesQueryVariables>(PageMoreCommoditiesDocument, options);
      }
export function usePageMoreCommoditiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageMoreCommoditiesQuery, PageMoreCommoditiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageMoreCommoditiesQuery, PageMoreCommoditiesQueryVariables>(PageMoreCommoditiesDocument, options);
        }
export type PageMoreCommoditiesQueryHookResult = ReturnType<typeof usePageMoreCommoditiesQuery>;
export type PageMoreCommoditiesLazyQueryHookResult = ReturnType<typeof usePageMoreCommoditiesLazyQuery>;
export type PageMoreCommoditiesQueryResult = Apollo.QueryResult<PageMoreCommoditiesQuery, PageMoreCommoditiesQueryVariables>;
export const ConfirmTaskFinishDocument = gql`
    query confirmTaskFinish($taskId: ID!) {
  confirmTaskFinish(taskId: $taskId) {
    interval
    productionOverview {
      pickingSum
      returnSum
      damagedSum
      defectiveSum
      surplusSum
      productAndSemiSum
    }
    picking {
      rawMaterialUnFinish
      rawMaterial
      accessoriesUnFinish
      accessories
      semiFinishedProductsUnFinish
      semiFinishedProducts
      returnedGoodsUnFinish
      returnedGoods
      undone
    }
    warehousing {
      finishedProductUnFinish
      finishedProduct
      semiFinishedProductsUnFinish
      semiFinishedProducts
      defectiveUnFinish
      defective
      undone
      rawMaterial
      rawMaterialUnFinish
      damageGoodsUnFinish
      damageGoods
    }
    returnMaterial {
      rawMaterialUnFinish
      rawMaterial
      accessoriesUnFinish
      accessories
      semiFinishedProductsUnFinish
      semiFinishedProducts
      returnedGoodsUnFinish
      returnedGoods
      undone
      noReturn
    }
    unit {
      unitId
      unitName
    }
  }
}
    `;

/**
 * __useConfirmTaskFinishQuery__
 *
 * To run a query within a React component, call `useConfirmTaskFinishQuery` and pass it any options that fit your needs.
 * When your component renders, `useConfirmTaskFinishQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConfirmTaskFinishQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useConfirmTaskFinishQuery(baseOptions: Apollo.QueryHookOptions<ConfirmTaskFinishQuery, ConfirmTaskFinishQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConfirmTaskFinishQuery, ConfirmTaskFinishQueryVariables>(ConfirmTaskFinishDocument, options);
      }
export function useConfirmTaskFinishLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConfirmTaskFinishQuery, ConfirmTaskFinishQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConfirmTaskFinishQuery, ConfirmTaskFinishQueryVariables>(ConfirmTaskFinishDocument, options);
        }
export type ConfirmTaskFinishQueryHookResult = ReturnType<typeof useConfirmTaskFinishQuery>;
export type ConfirmTaskFinishLazyQueryHookResult = ReturnType<typeof useConfirmTaskFinishLazyQuery>;
export type ConfirmTaskFinishQueryResult = Apollo.QueryResult<ConfirmTaskFinishQuery, ConfirmTaskFinishQueryVariables>;