import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageProductionPlanQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  planQueryInput?: SchemaTypes.InputMaybe<SchemaTypes.PlanQueryInput>;
}>;


export type PageProductionPlanQuery = { pageProductionPlan?: { __typename?: 'PlanPageResult', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'ProductionPlanPayload', planId?: string, planCode?: string, planStatus?: number, planStatusName?: string, outOrderId?: string, categorySum?: number, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, planDate?: number, planStartTime?: number, planEndTime?: number, planDescription?: string, createTime?: number, createTypeName?: string, expectNumSum?: number, completedNumSum?: number, saleChangeNotice?: number, saleCancelCount?: number, taskPauses?: number, customerType?: number, commodityType?: number, createType?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> } };

export type DoInsertPlanMutationVariables = SchemaTypes.Exact<{
  planInfoInput?: SchemaTypes.InputMaybe<SchemaTypes.PlanInfoInput>;
}>;


export type DoInsertPlanMutation = { doInsertPlan?: string };

export type PauseOrContinueTaskMutationVariables = SchemaTypes.Exact<{
  pauseOrContinueTaskInput?: SchemaTypes.InputMaybe<SchemaTypes.PauseOrContinueTaskInput>;
}>;


export type PauseOrContinueTaskMutation = { pauseOrContinueTask?: boolean };

export type RestartPlanMutationVariables = SchemaTypes.Exact<{
  planId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type RestartPlanMutation = { restartPlan?: boolean };

export type ListCommodityStockQueryVariables = SchemaTypes.Exact<{
  commoditySkuStockInput?: SchemaTypes.InputMaybe<SchemaTypes.CommoditySkuStockInput>;
}>;


export type ListCommodityStockQuery = { listCommodityStock?: Array<{ __typename?: 'CommoditySkuStockPayload', unitQuantity?: number, totalQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> };

export type GetProductionPlanDetailQueryVariables = SchemaTypes.Exact<{
  planId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type GetProductionPlanDetailQuery = { getProductionPlanDetail?: { __typename?: 'ProductionPlanDetailPayload', planId?: string, planCode?: string, outOrderId?: string, planStatus?: number, planStatusName?: string, customerType?: number, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, planDate?: number, planStartTime?: number, planEndTime?: number, planDescription?: string, planLogDescription?: string, createType?: number, createTypeName?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, task?: Array<{ __typename?: 'TaskPayload', taskId?: string, leaderId?: number, leaderName?: string, taskStatus?: number, taskStatusName?: string, taskCode?: string, line?: number, numberPlan?: number, commodities?: Array<{ __typename?: 'TaskItemPayload', taskItemId?: string, commodityId?: number, commodityName?: string, commodityBomId?: number, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, expectNum?: number, completedNum?: number, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalType?: number, totalTypeName?: string, planChangeNotice?: number, specificationLabel?: string, packageLabel?: string, quantityLabel?: string, planQuantity?: number, stockQuantity?: number, outOrderItemId?: string, commodityStatus?: SchemaTypes.CommodityStatus, actualPickingQuantity?: number, saleChangePayload?: Array<{ __typename?: 'SaleChangePayload', changeId?: string, outOrderId?: string, outOrderItemId?: string, commoditySkuId?: number, planId?: string, taskId?: string, saleChangeQuantity?: number, planChangeQuantity?: number, changeType?: number, changeRemark?: string, status?: number, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number }>, packageRequireInfos?: Array<{ __typename?: 'OutOrderItemRequestPayload', commodityId?: number, requestText?: string }> }> }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } };

export type AddOrDeleteRecordsQueryVariables = SchemaTypes.Exact<{
  addOrDeleteRecordsInput?: SchemaTypes.InputMaybe<SchemaTypes.AddOrDeleteRecordsInput>;
}>;


export type AddOrDeleteRecordsQuery = { addOrDeleteRecords?: Array<{ __typename?: 'AddOrDeleteRecords', taskItemChangeId?: string, planId?: string, taskId?: string, taskItemId?: string, beforeQuantity?: number, afterQuantity?: number, changeQuantity?: number, changeType?: number, changeRemark?: string, createTime?: number, createBy?: number, createByName?: string }> };

export type IgnoreTaskSaleChangeMutationVariables = SchemaTypes.Exact<{
  ignoreTaskSaleChangeInput?: SchemaTypes.InputMaybe<SchemaTypes.IgnoreTaskSaleChangeInput>;
}>;


export type IgnoreTaskSaleChangeMutation = { ignoreTaskSaleChange?: string };

export type GetProductionPlanLogsQueryVariables = SchemaTypes.Exact<{
  planId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type GetProductionPlanLogsQuery = { productionPlanLogs?: Array<{ __typename?: 'ProductionPlanLogPayLoad', planLogId?: string, planId?: string, planLogType?: number, planLogTypeText?: string, planLogDescription?: string, createTime?: number, createBy?: number, createUserName?: string }> };

export type DoUpdatePlanInfoMutationVariables = SchemaTypes.Exact<{
  updateProductionPlanInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateProductionPlanInput>;
}>;


export type DoUpdatePlanInfoMutation = { doUpdatePlanInfo?: string };

export type DoUpdatePlanBaseInfoMutationVariables = SchemaTypes.Exact<{
  planBaseInfoInput?: SchemaTypes.InputMaybe<SchemaTypes.PlanBaseInfoInput>;
}>;


export type DoUpdatePlanBaseInfoMutation = { doUpdatePlanBaseInfo?: string };

export type DoUpdatePlanTaskInfoMutationVariables = SchemaTypes.Exact<{
  planTaskInfoInput?: SchemaTypes.InputMaybe<SchemaTypes.PlanTaskInfoInput>;
}>;


export type DoUpdatePlanTaskInfoMutation = { doUpdatePlanTaskInfo?: string };

export type DoDeletePlanTaskMutationVariables = SchemaTypes.Exact<{
  taskId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type DoDeletePlanTaskMutation = { doDeletePlanTask?: string };

export type RequestDoCancelPlanStatusMutationVariables = SchemaTypes.Exact<{
  cancelPlanInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelPlanInput>;
}>;


export type RequestDoCancelPlanStatusMutation = { doCancelPlanStatus?: string };

export type DoPublishPlanMutationVariables = SchemaTypes.Exact<{
  planId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type DoPublishPlanMutation = { doPublishPlan?: string };

export type ProductionPlanStatusOptionQueryVariables = SchemaTypes.Exact<{
  planDate?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Long']>;
}>;


export type ProductionPlanStatusOptionQuery = { productionPlanStatusOption?: { __typename?: 'ProductionPlanStatus', pendingReviewNum?: number, processingNum?: number, completedNum?: number } };

export type DoInsertPlanTaskMutationVariables = SchemaTypes.Exact<{
  taskInput?: SchemaTypes.InputMaybe<SchemaTypes.TaskInput>;
}>;


export type DoInsertPlanTaskMutation = { doInsertPlanTask?: string };

export type PlanCommoditesQueryVariables = SchemaTypes.Exact<{
  listPlanCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.ListPlanCommoditySkuInput>;
}>;


export type PlanCommoditesQuery = { planCommodites?: Array<{ __typename?: 'PitayaCommoditySkuPayload', commoditySkuId?: number, commodityId?: number, status?: number, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, property?: Array<number>, bomId?: number, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, Deleted?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, commodityPayload?: { __typename?: 'CommodityPayload', commodityId?: number, commodityName?: string, commodityTypeId?: number, commodityTypeName?: string, commodityCategoryId?: number, commodityCategoryName?: string, commodityVarietyId?: number, commodityVarietyName?: string, commodityPlaceOriginId?: number, commodityPlaceOriginName?: string } }> };

export type CompletePlanMutationVariables = SchemaTypes.Exact<{
  planId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type CompletePlanMutation = { completePlan?: boolean };

export type CancelPlanMutationVariables = SchemaTypes.Exact<{
  planId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type CancelPlanMutation = { cancelPlan?: boolean };

export type CancelTaskMutationVariables = SchemaTypes.Exact<{
  cancelTaskInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelTaskInput>;
}>;


export type CancelTaskMutation = { cancelTask?: { __typename?: 'CancelTaskPayload', result?: boolean } };

export type RequestRejectionMutationVariables = SchemaTypes.Exact<{
  requestRejectionInput?: SchemaTypes.InputMaybe<SchemaTypes.RequestRejectionInput>;
}>;


export type RequestRejectionMutation = { requestRejection?: { __typename?: 'RequestRejectionPayload', result?: boolean } };

export type ConfirmCancelProductionMutationVariables = SchemaTypes.Exact<{
  confirmCancelProductionInput?: SchemaTypes.InputMaybe<SchemaTypes.ConfirmCancelProductionInput>;
}>;


export type ConfirmCancelProductionMutation = { confirmCancelProduction?: { __typename?: 'ConfirmCancelProductionPayload', result?: boolean } };


export const PageProductionPlanDocument = gql`
    query pageProductionPlan($page: Page, $planQueryInput: PlanQueryInput) {
  pageProductionPlan(page: $page, planQueryInput: $planQueryInput) {
    records {
      planId
      planCode
      planStatus
      planStatusName
      outOrderId
      categorySum
      customerId
      customerName
      customerDistributionId
      customerDistributionName
      planDate
      planStartTime
      planEndTime
      planDescription
      createTime
      createTypeName
      expectNumSum
      completedNumSum
      saleChangeNotice
      saleCancelCount
      taskPauses
      belongOrg {
        orgId
        orgName
      }
      createBy {
        phoneNum
        userId
        userName
      }
      customerType
      org {
        orgId
        orgName
      }
      warehouse {
        warehouseId
        warehouseName
      }
      commodityType
      createType
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageProductionPlanQuery__
 *
 * To run a query within a React component, call `usePageProductionPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageProductionPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageProductionPlanQuery({
 *   variables: {
 *      page: // value for 'page'
 *      planQueryInput: // value for 'planQueryInput'
 *   },
 * });
 */
export function usePageProductionPlanQuery(baseOptions?: Apollo.QueryHookOptions<PageProductionPlanQuery, PageProductionPlanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageProductionPlanQuery, PageProductionPlanQueryVariables>(PageProductionPlanDocument, options);
      }
export function usePageProductionPlanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageProductionPlanQuery, PageProductionPlanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageProductionPlanQuery, PageProductionPlanQueryVariables>(PageProductionPlanDocument, options);
        }
export type PageProductionPlanQueryHookResult = ReturnType<typeof usePageProductionPlanQuery>;
export type PageProductionPlanLazyQueryHookResult = ReturnType<typeof usePageProductionPlanLazyQuery>;
export type PageProductionPlanQueryResult = Apollo.QueryResult<PageProductionPlanQuery, PageProductionPlanQueryVariables>;
export const DoInsertPlanDocument = gql`
    mutation doInsertPlan($planInfoInput: PlanInfoInput) {
  doInsertPlan(planInfoInput: $planInfoInput)
}
    `;
export type DoInsertPlanMutationFn = Apollo.MutationFunction<DoInsertPlanMutation, DoInsertPlanMutationVariables>;

/**
 * __useDoInsertPlanMutation__
 *
 * To run a mutation, you first call `useDoInsertPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoInsertPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doInsertPlanMutation, { data, loading, error }] = useDoInsertPlanMutation({
 *   variables: {
 *      planInfoInput: // value for 'planInfoInput'
 *   },
 * });
 */
export function useDoInsertPlanMutation(baseOptions?: Apollo.MutationHookOptions<DoInsertPlanMutation, DoInsertPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DoInsertPlanMutation, DoInsertPlanMutationVariables>(DoInsertPlanDocument, options);
      }
export type DoInsertPlanMutationHookResult = ReturnType<typeof useDoInsertPlanMutation>;
export type DoInsertPlanMutationResult = Apollo.MutationResult<DoInsertPlanMutation>;
export type DoInsertPlanMutationOptions = Apollo.BaseMutationOptions<DoInsertPlanMutation, DoInsertPlanMutationVariables>;
export const PauseOrContinueTaskDocument = gql`
    mutation pauseOrContinueTask($pauseOrContinueTaskInput: PauseOrContinueTaskInput) {
  pauseOrContinueTask(pauseOrContinueTaskInput: $pauseOrContinueTaskInput)
}
    `;
export type PauseOrContinueTaskMutationFn = Apollo.MutationFunction<PauseOrContinueTaskMutation, PauseOrContinueTaskMutationVariables>;

/**
 * __usePauseOrContinueTaskMutation__
 *
 * To run a mutation, you first call `usePauseOrContinueTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePauseOrContinueTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pauseOrContinueTaskMutation, { data, loading, error }] = usePauseOrContinueTaskMutation({
 *   variables: {
 *      pauseOrContinueTaskInput: // value for 'pauseOrContinueTaskInput'
 *   },
 * });
 */
export function usePauseOrContinueTaskMutation(baseOptions?: Apollo.MutationHookOptions<PauseOrContinueTaskMutation, PauseOrContinueTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PauseOrContinueTaskMutation, PauseOrContinueTaskMutationVariables>(PauseOrContinueTaskDocument, options);
      }
export type PauseOrContinueTaskMutationHookResult = ReturnType<typeof usePauseOrContinueTaskMutation>;
export type PauseOrContinueTaskMutationResult = Apollo.MutationResult<PauseOrContinueTaskMutation>;
export type PauseOrContinueTaskMutationOptions = Apollo.BaseMutationOptions<PauseOrContinueTaskMutation, PauseOrContinueTaskMutationVariables>;
export const RestartPlanDocument = gql`
    mutation restartPlan($planId: ID) {
  restartPlan(planId: $planId)
}
    `;
export type RestartPlanMutationFn = Apollo.MutationFunction<RestartPlanMutation, RestartPlanMutationVariables>;

/**
 * __useRestartPlanMutation__
 *
 * To run a mutation, you first call `useRestartPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestartPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restartPlanMutation, { data, loading, error }] = useRestartPlanMutation({
 *   variables: {
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function useRestartPlanMutation(baseOptions?: Apollo.MutationHookOptions<RestartPlanMutation, RestartPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RestartPlanMutation, RestartPlanMutationVariables>(RestartPlanDocument, options);
      }
export type RestartPlanMutationHookResult = ReturnType<typeof useRestartPlanMutation>;
export type RestartPlanMutationResult = Apollo.MutationResult<RestartPlanMutation>;
export type RestartPlanMutationOptions = Apollo.BaseMutationOptions<RestartPlanMutation, RestartPlanMutationVariables>;
export const ListCommodityStockDocument = gql`
    query listCommodityStock($commoditySkuStockInput: CommoditySkuStockInput) {
  listCommodityStock(commoditySkuStockInput: $commoditySkuStockInput) {
    commoditySku {
      commoditySkuId
      commoditySkuName
      commodityId
      commodityName
      commoditySpecOptionId
      commoditySpecOptionName
      conversion
      totalType {
        unitId
        unitName
      }
      unitType {
        unitId
        unitName
      }
    }
    unitQuantity
    totalQuantity
  }
}
    `;

/**
 * __useListCommodityStockQuery__
 *
 * To run a query within a React component, call `useListCommodityStockQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCommodityStockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCommodityStockQuery({
 *   variables: {
 *      commoditySkuStockInput: // value for 'commoditySkuStockInput'
 *   },
 * });
 */
export function useListCommodityStockQuery(baseOptions?: Apollo.QueryHookOptions<ListCommodityStockQuery, ListCommodityStockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCommodityStockQuery, ListCommodityStockQueryVariables>(ListCommodityStockDocument, options);
      }
export function useListCommodityStockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCommodityStockQuery, ListCommodityStockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCommodityStockQuery, ListCommodityStockQueryVariables>(ListCommodityStockDocument, options);
        }
export type ListCommodityStockQueryHookResult = ReturnType<typeof useListCommodityStockQuery>;
export type ListCommodityStockLazyQueryHookResult = ReturnType<typeof useListCommodityStockLazyQuery>;
export type ListCommodityStockQueryResult = Apollo.QueryResult<ListCommodityStockQuery, ListCommodityStockQueryVariables>;
export const GetProductionPlanDetailDocument = gql`
    query getProductionPlanDetail($planId: ID) {
  getProductionPlanDetail(planId: $planId) {
    planId
    planCode
    outOrderId
    planStatus
    planStatusName
    customerType
    customerId
    customerName
    customerDistributionId
    customerDistributionName
    planDate
    planStartTime
    planEndTime
    planDescription
    planLogDescription
    createType
    createTypeName
    commodityType
    commodityTypeName
    createTime
    task {
      taskId
      leaderId
      leaderName
      taskStatus
      taskStatusName
      taskCode
      line
      numberPlan
      commodities {
        taskItemId
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
        saleChangePayload {
          changeId
          outOrderId
          outOrderItemId
          commoditySkuId
          planId
          taskId
          saleChangeQuantity
          planChangeQuantity
          changeType
          changeRemark
          status
          createTime
          createBy
          updateTime
          updateBy
        }
        specificationLabel
        packageRequireInfos {
          commodityId
          requestText
        }
        packageLabel
        quantityLabel
        planQuantity
        stockQuantity
        outOrderItemId
        commodityStatus
        actualPickingQuantity
      }
    }
    belongOrg {
      orgId
      orgName
    }
    createBy {
      phoneNum
      userId
      userName
    }
    warehouse {
      warehouseId
      warehouseName
    }
  }
}
    `;

/**
 * __useGetProductionPlanDetailQuery__
 *
 * To run a query within a React component, call `useGetProductionPlanDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductionPlanDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductionPlanDetailQuery({
 *   variables: {
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function useGetProductionPlanDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetProductionPlanDetailQuery, GetProductionPlanDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductionPlanDetailQuery, GetProductionPlanDetailQueryVariables>(GetProductionPlanDetailDocument, options);
      }
export function useGetProductionPlanDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductionPlanDetailQuery, GetProductionPlanDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductionPlanDetailQuery, GetProductionPlanDetailQueryVariables>(GetProductionPlanDetailDocument, options);
        }
export type GetProductionPlanDetailQueryHookResult = ReturnType<typeof useGetProductionPlanDetailQuery>;
export type GetProductionPlanDetailLazyQueryHookResult = ReturnType<typeof useGetProductionPlanDetailLazyQuery>;
export type GetProductionPlanDetailQueryResult = Apollo.QueryResult<GetProductionPlanDetailQuery, GetProductionPlanDetailQueryVariables>;
export const AddOrDeleteRecordsDocument = gql`
    query addOrDeleteRecords($addOrDeleteRecordsInput: AddOrDeleteRecordsInput) {
  addOrDeleteRecords(addOrDeleteRecordsInput: $addOrDeleteRecordsInput) {
    taskItemChangeId
    planId
    taskId
    taskItemId
    beforeQuantity
    afterQuantity
    changeQuantity
    changeType
    changeRemark
    createTime
    createBy
    createByName
  }
}
    `;

/**
 * __useAddOrDeleteRecordsQuery__
 *
 * To run a query within a React component, call `useAddOrDeleteRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddOrDeleteRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddOrDeleteRecordsQuery({
 *   variables: {
 *      addOrDeleteRecordsInput: // value for 'addOrDeleteRecordsInput'
 *   },
 * });
 */
export function useAddOrDeleteRecordsQuery(baseOptions?: Apollo.QueryHookOptions<AddOrDeleteRecordsQuery, AddOrDeleteRecordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AddOrDeleteRecordsQuery, AddOrDeleteRecordsQueryVariables>(AddOrDeleteRecordsDocument, options);
      }
export function useAddOrDeleteRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AddOrDeleteRecordsQuery, AddOrDeleteRecordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AddOrDeleteRecordsQuery, AddOrDeleteRecordsQueryVariables>(AddOrDeleteRecordsDocument, options);
        }
export type AddOrDeleteRecordsQueryHookResult = ReturnType<typeof useAddOrDeleteRecordsQuery>;
export type AddOrDeleteRecordsLazyQueryHookResult = ReturnType<typeof useAddOrDeleteRecordsLazyQuery>;
export type AddOrDeleteRecordsQueryResult = Apollo.QueryResult<AddOrDeleteRecordsQuery, AddOrDeleteRecordsQueryVariables>;
export const IgnoreTaskSaleChangeDocument = gql`
    mutation ignoreTaskSaleChange($ignoreTaskSaleChangeInput: IgnoreTaskSaleChangeInput) {
  ignoreTaskSaleChange(ignoreTaskSaleChangeInput: $ignoreTaskSaleChangeInput)
}
    `;
export type IgnoreTaskSaleChangeMutationFn = Apollo.MutationFunction<IgnoreTaskSaleChangeMutation, IgnoreTaskSaleChangeMutationVariables>;

/**
 * __useIgnoreTaskSaleChangeMutation__
 *
 * To run a mutation, you first call `useIgnoreTaskSaleChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIgnoreTaskSaleChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ignoreTaskSaleChangeMutation, { data, loading, error }] = useIgnoreTaskSaleChangeMutation({
 *   variables: {
 *      ignoreTaskSaleChangeInput: // value for 'ignoreTaskSaleChangeInput'
 *   },
 * });
 */
export function useIgnoreTaskSaleChangeMutation(baseOptions?: Apollo.MutationHookOptions<IgnoreTaskSaleChangeMutation, IgnoreTaskSaleChangeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IgnoreTaskSaleChangeMutation, IgnoreTaskSaleChangeMutationVariables>(IgnoreTaskSaleChangeDocument, options);
      }
export type IgnoreTaskSaleChangeMutationHookResult = ReturnType<typeof useIgnoreTaskSaleChangeMutation>;
export type IgnoreTaskSaleChangeMutationResult = Apollo.MutationResult<IgnoreTaskSaleChangeMutation>;
export type IgnoreTaskSaleChangeMutationOptions = Apollo.BaseMutationOptions<IgnoreTaskSaleChangeMutation, IgnoreTaskSaleChangeMutationVariables>;
export const GetProductionPlanLogsDocument = gql`
    query getProductionPlanLogs($planId: ID) {
  productionPlanLogs(planId: $planId) {
    planLogId
    planId
    planLogType
    planLogTypeText
    planLogDescription
    createTime
    createBy
    createUserName
  }
}
    `;

/**
 * __useGetProductionPlanLogsQuery__
 *
 * To run a query within a React component, call `useGetProductionPlanLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductionPlanLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductionPlanLogsQuery({
 *   variables: {
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function useGetProductionPlanLogsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductionPlanLogsQuery, GetProductionPlanLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductionPlanLogsQuery, GetProductionPlanLogsQueryVariables>(GetProductionPlanLogsDocument, options);
      }
export function useGetProductionPlanLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductionPlanLogsQuery, GetProductionPlanLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductionPlanLogsQuery, GetProductionPlanLogsQueryVariables>(GetProductionPlanLogsDocument, options);
        }
export type GetProductionPlanLogsQueryHookResult = ReturnType<typeof useGetProductionPlanLogsQuery>;
export type GetProductionPlanLogsLazyQueryHookResult = ReturnType<typeof useGetProductionPlanLogsLazyQuery>;
export type GetProductionPlanLogsQueryResult = Apollo.QueryResult<GetProductionPlanLogsQuery, GetProductionPlanLogsQueryVariables>;
export const DoUpdatePlanInfoDocument = gql`
    mutation doUpdatePlanInfo($updateProductionPlanInput: UpdateProductionPlanInput) {
  doUpdatePlanInfo(updateProductionPlanInput: $updateProductionPlanInput)
}
    `;
export type DoUpdatePlanInfoMutationFn = Apollo.MutationFunction<DoUpdatePlanInfoMutation, DoUpdatePlanInfoMutationVariables>;

/**
 * __useDoUpdatePlanInfoMutation__
 *
 * To run a mutation, you first call `useDoUpdatePlanInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoUpdatePlanInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doUpdatePlanInfoMutation, { data, loading, error }] = useDoUpdatePlanInfoMutation({
 *   variables: {
 *      updateProductionPlanInput: // value for 'updateProductionPlanInput'
 *   },
 * });
 */
export function useDoUpdatePlanInfoMutation(baseOptions?: Apollo.MutationHookOptions<DoUpdatePlanInfoMutation, DoUpdatePlanInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DoUpdatePlanInfoMutation, DoUpdatePlanInfoMutationVariables>(DoUpdatePlanInfoDocument, options);
      }
export type DoUpdatePlanInfoMutationHookResult = ReturnType<typeof useDoUpdatePlanInfoMutation>;
export type DoUpdatePlanInfoMutationResult = Apollo.MutationResult<DoUpdatePlanInfoMutation>;
export type DoUpdatePlanInfoMutationOptions = Apollo.BaseMutationOptions<DoUpdatePlanInfoMutation, DoUpdatePlanInfoMutationVariables>;
export const DoUpdatePlanBaseInfoDocument = gql`
    mutation doUpdatePlanBaseInfo($planBaseInfoInput: PlanBaseInfoInput) {
  doUpdatePlanBaseInfo(planBaseInfoInput: $planBaseInfoInput)
}
    `;
export type DoUpdatePlanBaseInfoMutationFn = Apollo.MutationFunction<DoUpdatePlanBaseInfoMutation, DoUpdatePlanBaseInfoMutationVariables>;

/**
 * __useDoUpdatePlanBaseInfoMutation__
 *
 * To run a mutation, you first call `useDoUpdatePlanBaseInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoUpdatePlanBaseInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doUpdatePlanBaseInfoMutation, { data, loading, error }] = useDoUpdatePlanBaseInfoMutation({
 *   variables: {
 *      planBaseInfoInput: // value for 'planBaseInfoInput'
 *   },
 * });
 */
export function useDoUpdatePlanBaseInfoMutation(baseOptions?: Apollo.MutationHookOptions<DoUpdatePlanBaseInfoMutation, DoUpdatePlanBaseInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DoUpdatePlanBaseInfoMutation, DoUpdatePlanBaseInfoMutationVariables>(DoUpdatePlanBaseInfoDocument, options);
      }
export type DoUpdatePlanBaseInfoMutationHookResult = ReturnType<typeof useDoUpdatePlanBaseInfoMutation>;
export type DoUpdatePlanBaseInfoMutationResult = Apollo.MutationResult<DoUpdatePlanBaseInfoMutation>;
export type DoUpdatePlanBaseInfoMutationOptions = Apollo.BaseMutationOptions<DoUpdatePlanBaseInfoMutation, DoUpdatePlanBaseInfoMutationVariables>;
export const DoUpdatePlanTaskInfoDocument = gql`
    mutation doUpdatePlanTaskInfo($planTaskInfoInput: PlanTaskInfoInput) {
  doUpdatePlanTaskInfo(planTaskInfoInput: $planTaskInfoInput)
}
    `;
export type DoUpdatePlanTaskInfoMutationFn = Apollo.MutationFunction<DoUpdatePlanTaskInfoMutation, DoUpdatePlanTaskInfoMutationVariables>;

/**
 * __useDoUpdatePlanTaskInfoMutation__
 *
 * To run a mutation, you first call `useDoUpdatePlanTaskInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoUpdatePlanTaskInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doUpdatePlanTaskInfoMutation, { data, loading, error }] = useDoUpdatePlanTaskInfoMutation({
 *   variables: {
 *      planTaskInfoInput: // value for 'planTaskInfoInput'
 *   },
 * });
 */
export function useDoUpdatePlanTaskInfoMutation(baseOptions?: Apollo.MutationHookOptions<DoUpdatePlanTaskInfoMutation, DoUpdatePlanTaskInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DoUpdatePlanTaskInfoMutation, DoUpdatePlanTaskInfoMutationVariables>(DoUpdatePlanTaskInfoDocument, options);
      }
export type DoUpdatePlanTaskInfoMutationHookResult = ReturnType<typeof useDoUpdatePlanTaskInfoMutation>;
export type DoUpdatePlanTaskInfoMutationResult = Apollo.MutationResult<DoUpdatePlanTaskInfoMutation>;
export type DoUpdatePlanTaskInfoMutationOptions = Apollo.BaseMutationOptions<DoUpdatePlanTaskInfoMutation, DoUpdatePlanTaskInfoMutationVariables>;
export const DoDeletePlanTaskDocument = gql`
    mutation doDeletePlanTask($taskId: ID) {
  doDeletePlanTask(taskId: $taskId)
}
    `;
export type DoDeletePlanTaskMutationFn = Apollo.MutationFunction<DoDeletePlanTaskMutation, DoDeletePlanTaskMutationVariables>;

/**
 * __useDoDeletePlanTaskMutation__
 *
 * To run a mutation, you first call `useDoDeletePlanTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoDeletePlanTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doDeletePlanTaskMutation, { data, loading, error }] = useDoDeletePlanTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useDoDeletePlanTaskMutation(baseOptions?: Apollo.MutationHookOptions<DoDeletePlanTaskMutation, DoDeletePlanTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DoDeletePlanTaskMutation, DoDeletePlanTaskMutationVariables>(DoDeletePlanTaskDocument, options);
      }
export type DoDeletePlanTaskMutationHookResult = ReturnType<typeof useDoDeletePlanTaskMutation>;
export type DoDeletePlanTaskMutationResult = Apollo.MutationResult<DoDeletePlanTaskMutation>;
export type DoDeletePlanTaskMutationOptions = Apollo.BaseMutationOptions<DoDeletePlanTaskMutation, DoDeletePlanTaskMutationVariables>;
export const RequestDoCancelPlanStatusDocument = gql`
    mutation requestDoCancelPlanStatus($cancelPlanInput: CancelPlanInput) {
  doCancelPlanStatus(cancelPlanInput: $cancelPlanInput)
}
    `;
export type RequestDoCancelPlanStatusMutationFn = Apollo.MutationFunction<RequestDoCancelPlanStatusMutation, RequestDoCancelPlanStatusMutationVariables>;

/**
 * __useRequestDoCancelPlanStatusMutation__
 *
 * To run a mutation, you first call `useRequestDoCancelPlanStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestDoCancelPlanStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestDoCancelPlanStatusMutation, { data, loading, error }] = useRequestDoCancelPlanStatusMutation({
 *   variables: {
 *      cancelPlanInput: // value for 'cancelPlanInput'
 *   },
 * });
 */
export function useRequestDoCancelPlanStatusMutation(baseOptions?: Apollo.MutationHookOptions<RequestDoCancelPlanStatusMutation, RequestDoCancelPlanStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestDoCancelPlanStatusMutation, RequestDoCancelPlanStatusMutationVariables>(RequestDoCancelPlanStatusDocument, options);
      }
export type RequestDoCancelPlanStatusMutationHookResult = ReturnType<typeof useRequestDoCancelPlanStatusMutation>;
export type RequestDoCancelPlanStatusMutationResult = Apollo.MutationResult<RequestDoCancelPlanStatusMutation>;
export type RequestDoCancelPlanStatusMutationOptions = Apollo.BaseMutationOptions<RequestDoCancelPlanStatusMutation, RequestDoCancelPlanStatusMutationVariables>;
export const DoPublishPlanDocument = gql`
    mutation doPublishPlan($planId: ID) {
  doPublishPlan(planId: $planId)
}
    `;
export type DoPublishPlanMutationFn = Apollo.MutationFunction<DoPublishPlanMutation, DoPublishPlanMutationVariables>;

/**
 * __useDoPublishPlanMutation__
 *
 * To run a mutation, you first call `useDoPublishPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoPublishPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doPublishPlanMutation, { data, loading, error }] = useDoPublishPlanMutation({
 *   variables: {
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function useDoPublishPlanMutation(baseOptions?: Apollo.MutationHookOptions<DoPublishPlanMutation, DoPublishPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DoPublishPlanMutation, DoPublishPlanMutationVariables>(DoPublishPlanDocument, options);
      }
export type DoPublishPlanMutationHookResult = ReturnType<typeof useDoPublishPlanMutation>;
export type DoPublishPlanMutationResult = Apollo.MutationResult<DoPublishPlanMutation>;
export type DoPublishPlanMutationOptions = Apollo.BaseMutationOptions<DoPublishPlanMutation, DoPublishPlanMutationVariables>;
export const ProductionPlanStatusOptionDocument = gql`
    query productionPlanStatusOption($planDate: Long) {
  productionPlanStatusOption(planDate: $planDate) {
    pendingReviewNum
    processingNum
    completedNum
  }
}
    `;

/**
 * __useProductionPlanStatusOptionQuery__
 *
 * To run a query within a React component, call `useProductionPlanStatusOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductionPlanStatusOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductionPlanStatusOptionQuery({
 *   variables: {
 *      planDate: // value for 'planDate'
 *   },
 * });
 */
export function useProductionPlanStatusOptionQuery(baseOptions?: Apollo.QueryHookOptions<ProductionPlanStatusOptionQuery, ProductionPlanStatusOptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductionPlanStatusOptionQuery, ProductionPlanStatusOptionQueryVariables>(ProductionPlanStatusOptionDocument, options);
      }
export function useProductionPlanStatusOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductionPlanStatusOptionQuery, ProductionPlanStatusOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductionPlanStatusOptionQuery, ProductionPlanStatusOptionQueryVariables>(ProductionPlanStatusOptionDocument, options);
        }
export type ProductionPlanStatusOptionQueryHookResult = ReturnType<typeof useProductionPlanStatusOptionQuery>;
export type ProductionPlanStatusOptionLazyQueryHookResult = ReturnType<typeof useProductionPlanStatusOptionLazyQuery>;
export type ProductionPlanStatusOptionQueryResult = Apollo.QueryResult<ProductionPlanStatusOptionQuery, ProductionPlanStatusOptionQueryVariables>;
export const DoInsertPlanTaskDocument = gql`
    mutation doInsertPlanTask($taskInput: TaskInput) {
  doInsertPlanTask(taskInput: $taskInput)
}
    `;
export type DoInsertPlanTaskMutationFn = Apollo.MutationFunction<DoInsertPlanTaskMutation, DoInsertPlanTaskMutationVariables>;

/**
 * __useDoInsertPlanTaskMutation__
 *
 * To run a mutation, you first call `useDoInsertPlanTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoInsertPlanTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doInsertPlanTaskMutation, { data, loading, error }] = useDoInsertPlanTaskMutation({
 *   variables: {
 *      taskInput: // value for 'taskInput'
 *   },
 * });
 */
export function useDoInsertPlanTaskMutation(baseOptions?: Apollo.MutationHookOptions<DoInsertPlanTaskMutation, DoInsertPlanTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DoInsertPlanTaskMutation, DoInsertPlanTaskMutationVariables>(DoInsertPlanTaskDocument, options);
      }
export type DoInsertPlanTaskMutationHookResult = ReturnType<typeof useDoInsertPlanTaskMutation>;
export type DoInsertPlanTaskMutationResult = Apollo.MutationResult<DoInsertPlanTaskMutation>;
export type DoInsertPlanTaskMutationOptions = Apollo.BaseMutationOptions<DoInsertPlanTaskMutation, DoInsertPlanTaskMutationVariables>;
export const PlanCommoditesDocument = gql`
    query planCommodites($listPlanCommodityInput: ListPlanCommoditySkuInput) {
  planCommodites(listPlanCommodityInput: $listPlanCommodityInput) {
    commodityPayload {
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
    }
    commoditySkuId
    commodityId
    status
    unitQuantity
    unitType
    unitTypeName
    totalQuantity
    totalType
    totalTypeName
    property
    bomId
    createTime
    createBy
    updateTime
    updateBy
    Deleted
    commoditySpecOptionId
    skuTextDescription
  }
}
    `;

/**
 * __usePlanCommoditesQuery__
 *
 * To run a query within a React component, call `usePlanCommoditesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlanCommoditesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlanCommoditesQuery({
 *   variables: {
 *      listPlanCommodityInput: // value for 'listPlanCommodityInput'
 *   },
 * });
 */
export function usePlanCommoditesQuery(baseOptions?: Apollo.QueryHookOptions<PlanCommoditesQuery, PlanCommoditesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlanCommoditesQuery, PlanCommoditesQueryVariables>(PlanCommoditesDocument, options);
      }
export function usePlanCommoditesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlanCommoditesQuery, PlanCommoditesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlanCommoditesQuery, PlanCommoditesQueryVariables>(PlanCommoditesDocument, options);
        }
export type PlanCommoditesQueryHookResult = ReturnType<typeof usePlanCommoditesQuery>;
export type PlanCommoditesLazyQueryHookResult = ReturnType<typeof usePlanCommoditesLazyQuery>;
export type PlanCommoditesQueryResult = Apollo.QueryResult<PlanCommoditesQuery, PlanCommoditesQueryVariables>;
export const CompletePlanDocument = gql`
    mutation completePlan($planId: ID) {
  completePlan(planId: $planId)
}
    `;
export type CompletePlanMutationFn = Apollo.MutationFunction<CompletePlanMutation, CompletePlanMutationVariables>;

/**
 * __useCompletePlanMutation__
 *
 * To run a mutation, you first call `useCompletePlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompletePlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completePlanMutation, { data, loading, error }] = useCompletePlanMutation({
 *   variables: {
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function useCompletePlanMutation(baseOptions?: Apollo.MutationHookOptions<CompletePlanMutation, CompletePlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompletePlanMutation, CompletePlanMutationVariables>(CompletePlanDocument, options);
      }
export type CompletePlanMutationHookResult = ReturnType<typeof useCompletePlanMutation>;
export type CompletePlanMutationResult = Apollo.MutationResult<CompletePlanMutation>;
export type CompletePlanMutationOptions = Apollo.BaseMutationOptions<CompletePlanMutation, CompletePlanMutationVariables>;
export const CancelPlanDocument = gql`
    mutation cancelPlan($planId: ID) {
  cancelPlan(planId: $planId)
}
    `;
export type CancelPlanMutationFn = Apollo.MutationFunction<CancelPlanMutation, CancelPlanMutationVariables>;

/**
 * __useCancelPlanMutation__
 *
 * To run a mutation, you first call `useCancelPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelPlanMutation, { data, loading, error }] = useCancelPlanMutation({
 *   variables: {
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function useCancelPlanMutation(baseOptions?: Apollo.MutationHookOptions<CancelPlanMutation, CancelPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelPlanMutation, CancelPlanMutationVariables>(CancelPlanDocument, options);
      }
export type CancelPlanMutationHookResult = ReturnType<typeof useCancelPlanMutation>;
export type CancelPlanMutationResult = Apollo.MutationResult<CancelPlanMutation>;
export type CancelPlanMutationOptions = Apollo.BaseMutationOptions<CancelPlanMutation, CancelPlanMutationVariables>;
export const CancelTaskDocument = gql`
    mutation cancelTask($cancelTaskInput: CancelTaskInput) {
  cancelTask(cancelTaskInput: $cancelTaskInput) {
    result
  }
}
    `;
export type CancelTaskMutationFn = Apollo.MutationFunction<CancelTaskMutation, CancelTaskMutationVariables>;

/**
 * __useCancelTaskMutation__
 *
 * To run a mutation, you first call `useCancelTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelTaskMutation, { data, loading, error }] = useCancelTaskMutation({
 *   variables: {
 *      cancelTaskInput: // value for 'cancelTaskInput'
 *   },
 * });
 */
export function useCancelTaskMutation(baseOptions?: Apollo.MutationHookOptions<CancelTaskMutation, CancelTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelTaskMutation, CancelTaskMutationVariables>(CancelTaskDocument, options);
      }
export type CancelTaskMutationHookResult = ReturnType<typeof useCancelTaskMutation>;
export type CancelTaskMutationResult = Apollo.MutationResult<CancelTaskMutation>;
export type CancelTaskMutationOptions = Apollo.BaseMutationOptions<CancelTaskMutation, CancelTaskMutationVariables>;
export const RequestRejectionDocument = gql`
    mutation requestRejection($requestRejectionInput: RequestRejectionInput) {
  requestRejection(requestRejectionInput: $requestRejectionInput) {
    result
  }
}
    `;
export type RequestRejectionMutationFn = Apollo.MutationFunction<RequestRejectionMutation, RequestRejectionMutationVariables>;

/**
 * __useRequestRejectionMutation__
 *
 * To run a mutation, you first call `useRequestRejectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestRejectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestRejectionMutation, { data, loading, error }] = useRequestRejectionMutation({
 *   variables: {
 *      requestRejectionInput: // value for 'requestRejectionInput'
 *   },
 * });
 */
export function useRequestRejectionMutation(baseOptions?: Apollo.MutationHookOptions<RequestRejectionMutation, RequestRejectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestRejectionMutation, RequestRejectionMutationVariables>(RequestRejectionDocument, options);
      }
export type RequestRejectionMutationHookResult = ReturnType<typeof useRequestRejectionMutation>;
export type RequestRejectionMutationResult = Apollo.MutationResult<RequestRejectionMutation>;
export type RequestRejectionMutationOptions = Apollo.BaseMutationOptions<RequestRejectionMutation, RequestRejectionMutationVariables>;
export const ConfirmCancelProductionDocument = gql`
    mutation confirmCancelProduction($confirmCancelProductionInput: ConfirmCancelProductionInput) {
  confirmCancelProduction(
    confirmCancelProductionInput: $confirmCancelProductionInput
  ) {
    result
  }
}
    `;
export type ConfirmCancelProductionMutationFn = Apollo.MutationFunction<ConfirmCancelProductionMutation, ConfirmCancelProductionMutationVariables>;

/**
 * __useConfirmCancelProductionMutation__
 *
 * To run a mutation, you first call `useConfirmCancelProductionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmCancelProductionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmCancelProductionMutation, { data, loading, error }] = useConfirmCancelProductionMutation({
 *   variables: {
 *      confirmCancelProductionInput: // value for 'confirmCancelProductionInput'
 *   },
 * });
 */
export function useConfirmCancelProductionMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmCancelProductionMutation, ConfirmCancelProductionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmCancelProductionMutation, ConfirmCancelProductionMutationVariables>(ConfirmCancelProductionDocument, options);
      }
export type ConfirmCancelProductionMutationHookResult = ReturnType<typeof useConfirmCancelProductionMutation>;
export type ConfirmCancelProductionMutationResult = Apollo.MutationResult<ConfirmCancelProductionMutation>;
export type ConfirmCancelProductionMutationOptions = Apollo.BaseMutationOptions<ConfirmCancelProductionMutation, ConfirmCancelProductionMutationVariables>;