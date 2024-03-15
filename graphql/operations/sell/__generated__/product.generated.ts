import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageSaleOrderQueryVariables = SchemaTypes.Exact<{
  queryQueryOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.QuerySaleOrderInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageSaleOrderQuery = { pageSaleOrder?: { __typename?: 'SaleOrderPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'SaleOrderPayload', outOrderId?: string, outOrderType?: number, outOrderTypeName?: string, outOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerType?: number, customerTypeName?: string, customerId?: number, customerName?: string, saleTime?: number, outOrderStatus?: number, outOrderStatusName?: string, warehouseId?: string, warehouseName?: string, createUserName?: string, createTime?: number, outOrderDescription?: string, errorDescription?: string, customerDistributionId?: number, customerDistributionName?: string, countReturnApply?: number, canSaleReturn?: boolean, rejectCount?: number, commodityList?: Array<{ __typename?: 'SaleOrderItemPayload', outOrderItemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, maxQuantity?: string, planQuantity?: string, realQuantity?: number, totalTypeName?: string, salePrice?: number, specificationLabel?: string, packageLabel?: string, quantityLabel?: string, categoryId?: number, commodityStatus?: SchemaTypes.CommodityStatus, saleTotalPrice?: number, totalQuantity?: number, unitQuantity?: number, packageRequireInfos?: Array<{ __typename?: 'OutOrderItemRequestPayload', commodityId?: number, requestText?: string }>, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type CountSaleOrderStatusQueryVariables = SchemaTypes.Exact<{
  countSaleOrderStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.CountSaleOrderStatusInput>;
}>;


export type CountSaleOrderStatusQuery = { countSaleOrderStatus?: { __typename?: 'SaleOrderStatusCountPayload', toSubmit?: number, toAudit?: number, producing?: number, toOutbound?: number, finished?: number } };

export type CreateSaleOrderMutationVariables = SchemaTypes.Exact<{
  createSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateSaleOrderInput>;
}>;


export type CreateSaleOrderMutation = { createSaleOrder?: string };

export type SaleOrderQueryVariables = SchemaTypes.Exact<{
  saleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.SaleOrderInput>;
}>;


export type SaleOrderQuery = { saleOrder?: { __typename?: 'SaleOrderPayload', outOrderId?: string, outOrderType?: number, outOrderTypeName?: string, outOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerType?: number, customerTypeName?: string, customerId?: number, customerName?: string, saleTime?: number, outOrderStatus?: number, outOrderStatusName?: string, warehouseId?: string, warehouseName?: string, createUserName?: string, createTime?: number, outOrderDescription?: string, errorDescription?: string, customerDistributionId?: number, customerDistributionName?: string, countReturnApply?: number, canSaleReturn?: boolean, rejectCount?: number, commodityList?: Array<{ __typename?: 'SaleOrderItemPayload', outOrderItemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, maxQuantity?: string, planQuantity?: string, realQuantity?: number, totalTypeName?: string, salePrice?: number, specificationLabel?: string, packageLabel?: string, quantityLabel?: string, categoryId?: number, commodityStatus?: SchemaTypes.CommodityStatus, saleTotalPrice?: number, totalQuantity?: number, unitQuantity?: number, summaryStockTotalQuantity?: number, summaryStockUnitQuantity?: number, conversion?: number, packageRequireInfos?: Array<{ __typename?: 'OutOrderItemRequestPayload', commodityId?: number, requestText?: string }>, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } } }>, plan?: { __typename?: 'Plan', planId?: string, planCode?: string, planStatus?: number, customerType?: number, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, planDate?: number, planStartTime?: number, planEndTime?: number, planDescription?: string, createType?: number, commodityType?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type CountOutStockRecordQueryVariables = SchemaTypes.Exact<{
  countOutStockRecordInput?: SchemaTypes.InputMaybe<SchemaTypes.CountOutStockRecordInput>;
}>;


export type CountOutStockRecordQuery = { countOutStockRecord?: number };

export type UpdateSaleOrderMutationVariables = SchemaTypes.Exact<{
  updateSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateSaleOrderInput>;
}>;


export type UpdateSaleOrderMutation = { updateSaleOrder?: boolean };

export type SubmitSaleOrderMutationVariables = SchemaTypes.Exact<{
  outOrderId: SchemaTypes.Scalars['ID'];
}>;


export type SubmitSaleOrderMutation = { submitSaleOrder?: boolean };

export type CopySaleOrderMutationVariables = SchemaTypes.Exact<{
  saleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.SaleOrderInput>;
}>;


export type CopySaleOrderMutation = { copySaleOrder?: string };

export type CancelSaleOrderMutationVariables = SchemaTypes.Exact<{
  cancelOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelOutOrderInput>;
}>;


export type CancelSaleOrderMutation = { cancelSaleOrder?: boolean };

export type UndoSaleOrderMutationVariables = SchemaTypes.Exact<{
  undoSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.UndoSaleOrderInput>;
}>;


export type UndoSaleOrderMutation = { undoSaleOrder?: boolean };

export type OutOrderLogsQueryVariables = SchemaTypes.Exact<{
  outOrderLogsInput?: SchemaTypes.InputMaybe<SchemaTypes.OutOrderLogsInput>;
}>;


export type OutOrderLogsQuery = { outOrderLogs?: Array<{ __typename?: 'OutOrderLogPayLoad', outOrderLogId?: number, outOrderId?: string, outOrderLogType?: number, outOrderLogTypeText?: string, outOrderLogDescription?: string, createTime?: number, createBy?: number, createUserName?: string }> };

export type UpdatePlanQuantityMutationVariables = SchemaTypes.Exact<{
  updatePlanQuantityInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdatePlanQuantityInput>;
}>;


export type UpdatePlanQuantityMutation = { updatePlanQuantity?: boolean };

export type CountSaleReturnRecordQueryVariables = SchemaTypes.Exact<{
  saleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.SaleOrderInput>;
}>;


export type CountSaleReturnRecordQuery = { countSaleReturnRecord?: number };

export type InboundRecordsQueryVariables = SchemaTypes.Exact<{
  outOrderId: SchemaTypes.Scalars['ID'];
}>;


export type InboundRecordsQuery = { inboundRecords?: Array<{ __typename?: 'InboundListPayload', inApplyCode?: string, toBeInBoundList?: Array<{ __typename?: 'ToBeInboundPayload', commodityName?: string, skuTextDescription?: Array<string>, unitQuantity?: number, unitTypeName?: string, totalQuantity?: number, totalTypeName?: string }>, inboundRecordList?: Array<{ __typename?: 'InboundRecordPayload', totalPrice?: number, inOrderCode?: string, createUserName?: string, inboundTime?: number, remark?: string, inboundRecordItems?: Array<{ __typename?: 'InboundRecordItemPayload', commodityName?: string, skuTextDescription?: Array<string>, unitQuantity?: number, unitTypeName?: string, totalQuantity?: number, totalTypeName?: string, unitPrice?: number, unitPriceTypeName?: string, totalPrice?: number, batchCode?: string }> }> }> };

export type RejectNoticeEmptiedMutationVariables = SchemaTypes.Exact<{
  rejectNoticeEmptiedInput?: SchemaTypes.InputMaybe<SchemaTypes.RejectNoticeEmptiedInput>;
}>;


export type RejectNoticeEmptiedMutation = { rejectNoticeEmptied?: { __typename?: 'RejectNoticeEmptiedPayload', result?: boolean } };

export type CancelSaleProductionMutationVariables = SchemaTypes.Exact<{
  cancelSaleProductionInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelSaleProductionInput>;
}>;


export type CancelSaleProductionMutation = { cancelSaleProduction?: { __typename?: 'CancelSaleProductionPayload', result?: boolean } };

export type CheckIfPickingQueryVariables = SchemaTypes.Exact<{
  checkIfPickingInput?: SchemaTypes.InputMaybe<SchemaTypes.CheckIfPickingInput>;
}>;


export type CheckIfPickingQuery = { checkIfPicking?: { __typename?: 'CheckIfPickingPayload', result?: boolean } };

export type CancelSaleOrderCommodityMutationVariables = SchemaTypes.Exact<{
  cancelSaleOrderCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelSaleOrderCommodityInput>;
}>;


export type CancelSaleOrderCommodityMutation = { cancelSaleOrderCommodity?: boolean };

export type UpdateSalePriceMutationVariables = SchemaTypes.Exact<{
  updateSalePriceInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateSalePriceInput>;
}>;


export type UpdateSalePriceMutation = { updateSalePrice?: boolean };


export const PageSaleOrderDocument = gql`
    query pageSaleOrder($queryQueryOrderInput: QuerySaleOrderInput, $page: Page) {
  pageSaleOrder(queryQueryOrderInput: $queryQueryOrderInput, page: $page) {
    records {
      outOrderId
      outOrderType
      outOrderTypeName
      outOrderCode
      commodityTypeId
      commodityTypeName
      customerType
      customerTypeName
      customerId
      customerName
      saleTime
      outOrderStatus
      outOrderStatusName
      warehouseId
      warehouseName
      createUserName
      createTime
      outOrderDescription
      errorDescription
      customerDistributionId
      customerDistributionName
      commodityList {
        outOrderItemId
        commodityId
        commodityName
        commoditySkuId
        commoditySpecOptionId
        skuTextDescription
        maxQuantity
        planQuantity
        realQuantity
        totalTypeName
        salePrice
        specificationLabel
        packageLabel
        packageRequireInfos {
          commodityId
          requestText
        }
        quantityLabel
        categoryId
        commodityStatus
        saleTotalPrice
        totalQuantity
        totalType {
          unitId
          unitName
        }
        unitQuantity
        unitType {
          unitId
          unitName
        }
      }
      countReturnApply
      canSaleReturn
      rejectCount
      belongOrg {
        orgId
        orgName
      }
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageSaleOrderQuery__
 *
 * To run a query within a React component, call `usePageSaleOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSaleOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSaleOrderQuery({
 *   variables: {
 *      queryQueryOrderInput: // value for 'queryQueryOrderInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageSaleOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageSaleOrderQuery, PageSaleOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageSaleOrderQuery, PageSaleOrderQueryVariables>(PageSaleOrderDocument, options);
      }
export function usePageSaleOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageSaleOrderQuery, PageSaleOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageSaleOrderQuery, PageSaleOrderQueryVariables>(PageSaleOrderDocument, options);
        }
export type PageSaleOrderQueryHookResult = ReturnType<typeof usePageSaleOrderQuery>;
export type PageSaleOrderLazyQueryHookResult = ReturnType<typeof usePageSaleOrderLazyQuery>;
export type PageSaleOrderQueryResult = Apollo.QueryResult<PageSaleOrderQuery, PageSaleOrderQueryVariables>;
export const CountSaleOrderStatusDocument = gql`
    query countSaleOrderStatus($countSaleOrderStatusInput: CountSaleOrderStatusInput) {
  countSaleOrderStatus(countSaleOrderStatusInput: $countSaleOrderStatusInput) {
    toSubmit
    toAudit
    producing
    toOutbound
    finished
  }
}
    `;

/**
 * __useCountSaleOrderStatusQuery__
 *
 * To run a query within a React component, call `useCountSaleOrderStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountSaleOrderStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountSaleOrderStatusQuery({
 *   variables: {
 *      countSaleOrderStatusInput: // value for 'countSaleOrderStatusInput'
 *   },
 * });
 */
export function useCountSaleOrderStatusQuery(baseOptions?: Apollo.QueryHookOptions<CountSaleOrderStatusQuery, CountSaleOrderStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountSaleOrderStatusQuery, CountSaleOrderStatusQueryVariables>(CountSaleOrderStatusDocument, options);
      }
export function useCountSaleOrderStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountSaleOrderStatusQuery, CountSaleOrderStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountSaleOrderStatusQuery, CountSaleOrderStatusQueryVariables>(CountSaleOrderStatusDocument, options);
        }
export type CountSaleOrderStatusQueryHookResult = ReturnType<typeof useCountSaleOrderStatusQuery>;
export type CountSaleOrderStatusLazyQueryHookResult = ReturnType<typeof useCountSaleOrderStatusLazyQuery>;
export type CountSaleOrderStatusQueryResult = Apollo.QueryResult<CountSaleOrderStatusQuery, CountSaleOrderStatusQueryVariables>;
export const CreateSaleOrderDocument = gql`
    mutation createSaleOrder($createSaleOrderInput: CreateSaleOrderInput) {
  createSaleOrder(createSaleOrderInput: $createSaleOrderInput)
}
    `;
export type CreateSaleOrderMutationFn = Apollo.MutationFunction<CreateSaleOrderMutation, CreateSaleOrderMutationVariables>;

/**
 * __useCreateSaleOrderMutation__
 *
 * To run a mutation, you first call `useCreateSaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSaleOrderMutation, { data, loading, error }] = useCreateSaleOrderMutation({
 *   variables: {
 *      createSaleOrderInput: // value for 'createSaleOrderInput'
 *   },
 * });
 */
export function useCreateSaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateSaleOrderMutation, CreateSaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSaleOrderMutation, CreateSaleOrderMutationVariables>(CreateSaleOrderDocument, options);
      }
export type CreateSaleOrderMutationHookResult = ReturnType<typeof useCreateSaleOrderMutation>;
export type CreateSaleOrderMutationResult = Apollo.MutationResult<CreateSaleOrderMutation>;
export type CreateSaleOrderMutationOptions = Apollo.BaseMutationOptions<CreateSaleOrderMutation, CreateSaleOrderMutationVariables>;
export const SaleOrderDocument = gql`
    query saleOrder($saleOrderInput: SaleOrderInput) {
  saleOrder(saleOrderInput: $saleOrderInput) {
    outOrderId
    outOrderType
    outOrderTypeName
    outOrderCode
    commodityTypeId
    commodityTypeName
    customerType
    customerTypeName
    customerId
    customerName
    saleTime
    outOrderStatus
    outOrderStatusName
    warehouseId
    warehouseName
    createUserName
    createTime
    outOrderDescription
    errorDescription
    customerDistributionId
    customerDistributionName
    commodityList {
      outOrderItemId
      commodityId
      commodityName
      commoditySkuId
      commoditySpecOptionId
      skuTextDescription
      maxQuantity
      planQuantity
      realQuantity
      totalTypeName
      salePrice
      specificationLabel
      packageLabel
      packageRequireInfos {
        commodityId
        requestText
      }
      quantityLabel
      categoryId
      commodityStatus
      saleTotalPrice
      totalQuantity
      totalType {
        unitId
        unitName
      }
      unitQuantity
      unitType {
        unitId
        unitName
      }
      salePriceType {
        unitId
        unitName
      }
      summaryStockTotalQuantity
      summaryStockUnitQuantity
      conversion
      stockBatchInfo {
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
        batchCode
        batchId
        createTime
        totalQuantity
        unitQuantity
      }
    }
    countReturnApply
    canSaleReturn
    rejectCount
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
    belongOrg {
      orgId
      orgName
    }
  }
}
    `;

/**
 * __useSaleOrderQuery__
 *
 * To run a query within a React component, call `useSaleOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleOrderQuery({
 *   variables: {
 *      saleOrderInput: // value for 'saleOrderInput'
 *   },
 * });
 */
export function useSaleOrderQuery(baseOptions?: Apollo.QueryHookOptions<SaleOrderQuery, SaleOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaleOrderQuery, SaleOrderQueryVariables>(SaleOrderDocument, options);
      }
export function useSaleOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaleOrderQuery, SaleOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaleOrderQuery, SaleOrderQueryVariables>(SaleOrderDocument, options);
        }
export type SaleOrderQueryHookResult = ReturnType<typeof useSaleOrderQuery>;
export type SaleOrderLazyQueryHookResult = ReturnType<typeof useSaleOrderLazyQuery>;
export type SaleOrderQueryResult = Apollo.QueryResult<SaleOrderQuery, SaleOrderQueryVariables>;
export const CountOutStockRecordDocument = gql`
    query countOutStockRecord($countOutStockRecordInput: CountOutStockRecordInput) {
  countOutStockRecord(countOutStockRecordInput: $countOutStockRecordInput)
}
    `;

/**
 * __useCountOutStockRecordQuery__
 *
 * To run a query within a React component, call `useCountOutStockRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountOutStockRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountOutStockRecordQuery({
 *   variables: {
 *      countOutStockRecordInput: // value for 'countOutStockRecordInput'
 *   },
 * });
 */
export function useCountOutStockRecordQuery(baseOptions?: Apollo.QueryHookOptions<CountOutStockRecordQuery, CountOutStockRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountOutStockRecordQuery, CountOutStockRecordQueryVariables>(CountOutStockRecordDocument, options);
      }
export function useCountOutStockRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountOutStockRecordQuery, CountOutStockRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountOutStockRecordQuery, CountOutStockRecordQueryVariables>(CountOutStockRecordDocument, options);
        }
export type CountOutStockRecordQueryHookResult = ReturnType<typeof useCountOutStockRecordQuery>;
export type CountOutStockRecordLazyQueryHookResult = ReturnType<typeof useCountOutStockRecordLazyQuery>;
export type CountOutStockRecordQueryResult = Apollo.QueryResult<CountOutStockRecordQuery, CountOutStockRecordQueryVariables>;
export const UpdateSaleOrderDocument = gql`
    mutation updateSaleOrder($updateSaleOrderInput: UpdateSaleOrderInput) {
  updateSaleOrder(updateSaleOrderInput: $updateSaleOrderInput)
}
    `;
export type UpdateSaleOrderMutationFn = Apollo.MutationFunction<UpdateSaleOrderMutation, UpdateSaleOrderMutationVariables>;

/**
 * __useUpdateSaleOrderMutation__
 *
 * To run a mutation, you first call `useUpdateSaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSaleOrderMutation, { data, loading, error }] = useUpdateSaleOrderMutation({
 *   variables: {
 *      updateSaleOrderInput: // value for 'updateSaleOrderInput'
 *   },
 * });
 */
export function useUpdateSaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSaleOrderMutation, UpdateSaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSaleOrderMutation, UpdateSaleOrderMutationVariables>(UpdateSaleOrderDocument, options);
      }
export type UpdateSaleOrderMutationHookResult = ReturnType<typeof useUpdateSaleOrderMutation>;
export type UpdateSaleOrderMutationResult = Apollo.MutationResult<UpdateSaleOrderMutation>;
export type UpdateSaleOrderMutationOptions = Apollo.BaseMutationOptions<UpdateSaleOrderMutation, UpdateSaleOrderMutationVariables>;
export const SubmitSaleOrderDocument = gql`
    mutation submitSaleOrder($outOrderId: ID!) {
  submitSaleOrder(outOrderId: $outOrderId)
}
    `;
export type SubmitSaleOrderMutationFn = Apollo.MutationFunction<SubmitSaleOrderMutation, SubmitSaleOrderMutationVariables>;

/**
 * __useSubmitSaleOrderMutation__
 *
 * To run a mutation, you first call `useSubmitSaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitSaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitSaleOrderMutation, { data, loading, error }] = useSubmitSaleOrderMutation({
 *   variables: {
 *      outOrderId: // value for 'outOrderId'
 *   },
 * });
 */
export function useSubmitSaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitSaleOrderMutation, SubmitSaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitSaleOrderMutation, SubmitSaleOrderMutationVariables>(SubmitSaleOrderDocument, options);
      }
export type SubmitSaleOrderMutationHookResult = ReturnType<typeof useSubmitSaleOrderMutation>;
export type SubmitSaleOrderMutationResult = Apollo.MutationResult<SubmitSaleOrderMutation>;
export type SubmitSaleOrderMutationOptions = Apollo.BaseMutationOptions<SubmitSaleOrderMutation, SubmitSaleOrderMutationVariables>;
export const CopySaleOrderDocument = gql`
    mutation copySaleOrder($saleOrderInput: SaleOrderInput) {
  copySaleOrder(saleOrderInput: $saleOrderInput)
}
    `;
export type CopySaleOrderMutationFn = Apollo.MutationFunction<CopySaleOrderMutation, CopySaleOrderMutationVariables>;

/**
 * __useCopySaleOrderMutation__
 *
 * To run a mutation, you first call `useCopySaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopySaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copySaleOrderMutation, { data, loading, error }] = useCopySaleOrderMutation({
 *   variables: {
 *      saleOrderInput: // value for 'saleOrderInput'
 *   },
 * });
 */
export function useCopySaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<CopySaleOrderMutation, CopySaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopySaleOrderMutation, CopySaleOrderMutationVariables>(CopySaleOrderDocument, options);
      }
export type CopySaleOrderMutationHookResult = ReturnType<typeof useCopySaleOrderMutation>;
export type CopySaleOrderMutationResult = Apollo.MutationResult<CopySaleOrderMutation>;
export type CopySaleOrderMutationOptions = Apollo.BaseMutationOptions<CopySaleOrderMutation, CopySaleOrderMutationVariables>;
export const CancelSaleOrderDocument = gql`
    mutation cancelSaleOrder($cancelOutOrderInput: CancelOutOrderInput) {
  cancelSaleOrder(cancelOutOrderInput: $cancelOutOrderInput)
}
    `;
export type CancelSaleOrderMutationFn = Apollo.MutationFunction<CancelSaleOrderMutation, CancelSaleOrderMutationVariables>;

/**
 * __useCancelSaleOrderMutation__
 *
 * To run a mutation, you first call `useCancelSaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelSaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelSaleOrderMutation, { data, loading, error }] = useCancelSaleOrderMutation({
 *   variables: {
 *      cancelOutOrderInput: // value for 'cancelOutOrderInput'
 *   },
 * });
 */
export function useCancelSaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelSaleOrderMutation, CancelSaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelSaleOrderMutation, CancelSaleOrderMutationVariables>(CancelSaleOrderDocument, options);
      }
export type CancelSaleOrderMutationHookResult = ReturnType<typeof useCancelSaleOrderMutation>;
export type CancelSaleOrderMutationResult = Apollo.MutationResult<CancelSaleOrderMutation>;
export type CancelSaleOrderMutationOptions = Apollo.BaseMutationOptions<CancelSaleOrderMutation, CancelSaleOrderMutationVariables>;
export const UndoSaleOrderDocument = gql`
    mutation undoSaleOrder($undoSaleOrderInput: UndoSaleOrderInput) {
  undoSaleOrder(undoSaleOrderInput: $undoSaleOrderInput)
}
    `;
export type UndoSaleOrderMutationFn = Apollo.MutationFunction<UndoSaleOrderMutation, UndoSaleOrderMutationVariables>;

/**
 * __useUndoSaleOrderMutation__
 *
 * To run a mutation, you first call `useUndoSaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoSaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoSaleOrderMutation, { data, loading, error }] = useUndoSaleOrderMutation({
 *   variables: {
 *      undoSaleOrderInput: // value for 'undoSaleOrderInput'
 *   },
 * });
 */
export function useUndoSaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<UndoSaleOrderMutation, UndoSaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UndoSaleOrderMutation, UndoSaleOrderMutationVariables>(UndoSaleOrderDocument, options);
      }
export type UndoSaleOrderMutationHookResult = ReturnType<typeof useUndoSaleOrderMutation>;
export type UndoSaleOrderMutationResult = Apollo.MutationResult<UndoSaleOrderMutation>;
export type UndoSaleOrderMutationOptions = Apollo.BaseMutationOptions<UndoSaleOrderMutation, UndoSaleOrderMutationVariables>;
export const OutOrderLogsDocument = gql`
    query outOrderLogs($outOrderLogsInput: OutOrderLogsInput) {
  outOrderLogs(outOrderLogsInput: $outOrderLogsInput) {
    outOrderLogId
    outOrderId
    outOrderLogType
    outOrderLogTypeText
    outOrderLogDescription
    createTime
    createBy
    createUserName
  }
}
    `;

/**
 * __useOutOrderLogsQuery__
 *
 * To run a query within a React component, call `useOutOrderLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOutOrderLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOutOrderLogsQuery({
 *   variables: {
 *      outOrderLogsInput: // value for 'outOrderLogsInput'
 *   },
 * });
 */
export function useOutOrderLogsQuery(baseOptions?: Apollo.QueryHookOptions<OutOrderLogsQuery, OutOrderLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OutOrderLogsQuery, OutOrderLogsQueryVariables>(OutOrderLogsDocument, options);
      }
export function useOutOrderLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OutOrderLogsQuery, OutOrderLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OutOrderLogsQuery, OutOrderLogsQueryVariables>(OutOrderLogsDocument, options);
        }
export type OutOrderLogsQueryHookResult = ReturnType<typeof useOutOrderLogsQuery>;
export type OutOrderLogsLazyQueryHookResult = ReturnType<typeof useOutOrderLogsLazyQuery>;
export type OutOrderLogsQueryResult = Apollo.QueryResult<OutOrderLogsQuery, OutOrderLogsQueryVariables>;
export const UpdatePlanQuantityDocument = gql`
    mutation updatePlanQuantity($updatePlanQuantityInput: UpdatePlanQuantityInput) {
  updatePlanQuantity(updatePlanQuantityInput: $updatePlanQuantityInput)
}
    `;
export type UpdatePlanQuantityMutationFn = Apollo.MutationFunction<UpdatePlanQuantityMutation, UpdatePlanQuantityMutationVariables>;

/**
 * __useUpdatePlanQuantityMutation__
 *
 * To run a mutation, you first call `useUpdatePlanQuantityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlanQuantityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlanQuantityMutation, { data, loading, error }] = useUpdatePlanQuantityMutation({
 *   variables: {
 *      updatePlanQuantityInput: // value for 'updatePlanQuantityInput'
 *   },
 * });
 */
export function useUpdatePlanQuantityMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlanQuantityMutation, UpdatePlanQuantityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlanQuantityMutation, UpdatePlanQuantityMutationVariables>(UpdatePlanQuantityDocument, options);
      }
export type UpdatePlanQuantityMutationHookResult = ReturnType<typeof useUpdatePlanQuantityMutation>;
export type UpdatePlanQuantityMutationResult = Apollo.MutationResult<UpdatePlanQuantityMutation>;
export type UpdatePlanQuantityMutationOptions = Apollo.BaseMutationOptions<UpdatePlanQuantityMutation, UpdatePlanQuantityMutationVariables>;
export const CountSaleReturnRecordDocument = gql`
    query countSaleReturnRecord($saleOrderInput: SaleOrderInput) {
  countSaleReturnRecord(saleOrderInput: $saleOrderInput)
}
    `;

/**
 * __useCountSaleReturnRecordQuery__
 *
 * To run a query within a React component, call `useCountSaleReturnRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountSaleReturnRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountSaleReturnRecordQuery({
 *   variables: {
 *      saleOrderInput: // value for 'saleOrderInput'
 *   },
 * });
 */
export function useCountSaleReturnRecordQuery(baseOptions?: Apollo.QueryHookOptions<CountSaleReturnRecordQuery, CountSaleReturnRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountSaleReturnRecordQuery, CountSaleReturnRecordQueryVariables>(CountSaleReturnRecordDocument, options);
      }
export function useCountSaleReturnRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountSaleReturnRecordQuery, CountSaleReturnRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountSaleReturnRecordQuery, CountSaleReturnRecordQueryVariables>(CountSaleReturnRecordDocument, options);
        }
export type CountSaleReturnRecordQueryHookResult = ReturnType<typeof useCountSaleReturnRecordQuery>;
export type CountSaleReturnRecordLazyQueryHookResult = ReturnType<typeof useCountSaleReturnRecordLazyQuery>;
export type CountSaleReturnRecordQueryResult = Apollo.QueryResult<CountSaleReturnRecordQuery, CountSaleReturnRecordQueryVariables>;
export const InboundRecordsDocument = gql`
    query inboundRecords($outOrderId: ID!) {
  inboundRecords(outOrderId: $outOrderId) {
    inApplyCode
    toBeInBoundList {
      commodityName
      skuTextDescription
      unitQuantity
      unitTypeName
      totalQuantity
      totalTypeName
    }
    inboundRecordList {
      inboundRecordItems {
        commodityName
        skuTextDescription
        unitQuantity
        unitTypeName
        totalQuantity
        totalTypeName
        unitPrice
        unitPriceTypeName
        totalPrice
        batchCode
      }
      totalPrice
      inOrderCode
      createUserName
      inboundTime
      remark
    }
  }
}
    `;

/**
 * __useInboundRecordsQuery__
 *
 * To run a query within a React component, call `useInboundRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInboundRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInboundRecordsQuery({
 *   variables: {
 *      outOrderId: // value for 'outOrderId'
 *   },
 * });
 */
export function useInboundRecordsQuery(baseOptions: Apollo.QueryHookOptions<InboundRecordsQuery, InboundRecordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InboundRecordsQuery, InboundRecordsQueryVariables>(InboundRecordsDocument, options);
      }
export function useInboundRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InboundRecordsQuery, InboundRecordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InboundRecordsQuery, InboundRecordsQueryVariables>(InboundRecordsDocument, options);
        }
export type InboundRecordsQueryHookResult = ReturnType<typeof useInboundRecordsQuery>;
export type InboundRecordsLazyQueryHookResult = ReturnType<typeof useInboundRecordsLazyQuery>;
export type InboundRecordsQueryResult = Apollo.QueryResult<InboundRecordsQuery, InboundRecordsQueryVariables>;
export const RejectNoticeEmptiedDocument = gql`
    mutation rejectNoticeEmptied($rejectNoticeEmptiedInput: RejectNoticeEmptiedInput) {
  rejectNoticeEmptied(rejectNoticeEmptiedInput: $rejectNoticeEmptiedInput) {
    result
  }
}
    `;
export type RejectNoticeEmptiedMutationFn = Apollo.MutationFunction<RejectNoticeEmptiedMutation, RejectNoticeEmptiedMutationVariables>;

/**
 * __useRejectNoticeEmptiedMutation__
 *
 * To run a mutation, you first call `useRejectNoticeEmptiedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectNoticeEmptiedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectNoticeEmptiedMutation, { data, loading, error }] = useRejectNoticeEmptiedMutation({
 *   variables: {
 *      rejectNoticeEmptiedInput: // value for 'rejectNoticeEmptiedInput'
 *   },
 * });
 */
export function useRejectNoticeEmptiedMutation(baseOptions?: Apollo.MutationHookOptions<RejectNoticeEmptiedMutation, RejectNoticeEmptiedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectNoticeEmptiedMutation, RejectNoticeEmptiedMutationVariables>(RejectNoticeEmptiedDocument, options);
      }
export type RejectNoticeEmptiedMutationHookResult = ReturnType<typeof useRejectNoticeEmptiedMutation>;
export type RejectNoticeEmptiedMutationResult = Apollo.MutationResult<RejectNoticeEmptiedMutation>;
export type RejectNoticeEmptiedMutationOptions = Apollo.BaseMutationOptions<RejectNoticeEmptiedMutation, RejectNoticeEmptiedMutationVariables>;
export const CancelSaleProductionDocument = gql`
    mutation cancelSaleProduction($cancelSaleProductionInput: CancelSaleProductionInput) {
  cancelSaleProduction(cancelSaleProductionInput: $cancelSaleProductionInput) {
    result
  }
}
    `;
export type CancelSaleProductionMutationFn = Apollo.MutationFunction<CancelSaleProductionMutation, CancelSaleProductionMutationVariables>;

/**
 * __useCancelSaleProductionMutation__
 *
 * To run a mutation, you first call `useCancelSaleProductionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelSaleProductionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelSaleProductionMutation, { data, loading, error }] = useCancelSaleProductionMutation({
 *   variables: {
 *      cancelSaleProductionInput: // value for 'cancelSaleProductionInput'
 *   },
 * });
 */
export function useCancelSaleProductionMutation(baseOptions?: Apollo.MutationHookOptions<CancelSaleProductionMutation, CancelSaleProductionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelSaleProductionMutation, CancelSaleProductionMutationVariables>(CancelSaleProductionDocument, options);
      }
export type CancelSaleProductionMutationHookResult = ReturnType<typeof useCancelSaleProductionMutation>;
export type CancelSaleProductionMutationResult = Apollo.MutationResult<CancelSaleProductionMutation>;
export type CancelSaleProductionMutationOptions = Apollo.BaseMutationOptions<CancelSaleProductionMutation, CancelSaleProductionMutationVariables>;
export const CheckIfPickingDocument = gql`
    query checkIfPicking($checkIfPickingInput: CheckIfPickingInput) {
  checkIfPicking(checkIfPickingInput: $checkIfPickingInput) {
    result
  }
}
    `;

/**
 * __useCheckIfPickingQuery__
 *
 * To run a query within a React component, call `useCheckIfPickingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckIfPickingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckIfPickingQuery({
 *   variables: {
 *      checkIfPickingInput: // value for 'checkIfPickingInput'
 *   },
 * });
 */
export function useCheckIfPickingQuery(baseOptions?: Apollo.QueryHookOptions<CheckIfPickingQuery, CheckIfPickingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckIfPickingQuery, CheckIfPickingQueryVariables>(CheckIfPickingDocument, options);
      }
export function useCheckIfPickingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckIfPickingQuery, CheckIfPickingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckIfPickingQuery, CheckIfPickingQueryVariables>(CheckIfPickingDocument, options);
        }
export type CheckIfPickingQueryHookResult = ReturnType<typeof useCheckIfPickingQuery>;
export type CheckIfPickingLazyQueryHookResult = ReturnType<typeof useCheckIfPickingLazyQuery>;
export type CheckIfPickingQueryResult = Apollo.QueryResult<CheckIfPickingQuery, CheckIfPickingQueryVariables>;
export const CancelSaleOrderCommodityDocument = gql`
    mutation cancelSaleOrderCommodity($cancelSaleOrderCommodityInput: CancelSaleOrderCommodityInput) {
  cancelSaleOrderCommodity(
    cancelSaleOrderCommodityInput: $cancelSaleOrderCommodityInput
  )
}
    `;
export type CancelSaleOrderCommodityMutationFn = Apollo.MutationFunction<CancelSaleOrderCommodityMutation, CancelSaleOrderCommodityMutationVariables>;

/**
 * __useCancelSaleOrderCommodityMutation__
 *
 * To run a mutation, you first call `useCancelSaleOrderCommodityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelSaleOrderCommodityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelSaleOrderCommodityMutation, { data, loading, error }] = useCancelSaleOrderCommodityMutation({
 *   variables: {
 *      cancelSaleOrderCommodityInput: // value for 'cancelSaleOrderCommodityInput'
 *   },
 * });
 */
export function useCancelSaleOrderCommodityMutation(baseOptions?: Apollo.MutationHookOptions<CancelSaleOrderCommodityMutation, CancelSaleOrderCommodityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelSaleOrderCommodityMutation, CancelSaleOrderCommodityMutationVariables>(CancelSaleOrderCommodityDocument, options);
      }
export type CancelSaleOrderCommodityMutationHookResult = ReturnType<typeof useCancelSaleOrderCommodityMutation>;
export type CancelSaleOrderCommodityMutationResult = Apollo.MutationResult<CancelSaleOrderCommodityMutation>;
export type CancelSaleOrderCommodityMutationOptions = Apollo.BaseMutationOptions<CancelSaleOrderCommodityMutation, CancelSaleOrderCommodityMutationVariables>;
export const UpdateSalePriceDocument = gql`
    mutation updateSalePrice($updateSalePriceInput: UpdateSalePriceInput) {
  updateSalePrice(updateSalePriceInput: $updateSalePriceInput)
}
    `;
export type UpdateSalePriceMutationFn = Apollo.MutationFunction<UpdateSalePriceMutation, UpdateSalePriceMutationVariables>;

/**
 * __useUpdateSalePriceMutation__
 *
 * To run a mutation, you first call `useUpdateSalePriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSalePriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSalePriceMutation, { data, loading, error }] = useUpdateSalePriceMutation({
 *   variables: {
 *      updateSalePriceInput: // value for 'updateSalePriceInput'
 *   },
 * });
 */
export function useUpdateSalePriceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSalePriceMutation, UpdateSalePriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSalePriceMutation, UpdateSalePriceMutationVariables>(UpdateSalePriceDocument, options);
      }
export type UpdateSalePriceMutationHookResult = ReturnType<typeof useUpdateSalePriceMutation>;
export type UpdateSalePriceMutationResult = Apollo.MutationResult<UpdateSalePriceMutation>;
export type UpdateSalePriceMutationOptions = Apollo.BaseMutationOptions<UpdateSalePriceMutation, UpdateSalePriceMutationVariables>;