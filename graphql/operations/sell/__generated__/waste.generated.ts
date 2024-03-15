import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageWasteSaleOrderQueryVariables = SchemaTypes.Exact<{
  pageWasteSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.PageWasteSaleOrderInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageWasteSaleOrderQuery = { pageWasteSaleOrder?: { __typename?: 'PageWasteSaleOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'WasteSaleOrder', saleOrderId?: string, saleOrderCode?: string, saleOrderStatus?: SchemaTypes.WasteSaleOrderStatusEnum, payMode?: SchemaTypes.OutOrderPayModeEnum, remark?: string, createTime?: number, reason?: string, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, wasteSaleOrderItemList?: Array<{ __typename?: 'WasteSaleOrderItemList', saleOrderItemId?: string, commodityName?: string, unitQuantity?: number, saleAmount?: number, totalSaleAmount?: number, photos?: Array<string>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, wasteSaleOrderLogList?: Array<{ __typename?: 'WasteSaleOrderLogList', saleOrderLogId?: string, saleOrderId?: string, type?: string, typeText?: string, remark?: string, createTime?: number, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type WasteSaleOrderQueryVariables = SchemaTypes.Exact<{
  getWasteSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.GetWasteSaleOrderInput>;
}>;


export type WasteSaleOrderQuery = { wasteSaleOrder?: { __typename?: 'WasteSaleOrder', saleOrderId?: string, saleOrderCode?: string, saleOrderStatus?: SchemaTypes.WasteSaleOrderStatusEnum, payMode?: SchemaTypes.OutOrderPayModeEnum, remark?: string, createTime?: number, reason?: string, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, wasteSaleOrderItemList?: Array<{ __typename?: 'WasteSaleOrderItemList', saleOrderItemId?: string, commodityName?: string, unitQuantity?: number, saleAmount?: number, totalSaleAmount?: number, photos?: Array<string>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, wasteSaleOrderLogList?: Array<{ __typename?: 'WasteSaleOrderLogList', saleOrderLogId?: string, saleOrderId?: string, type?: string, typeText?: string, remark?: string, createTime?: number, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }>, saleIncome?: { __typename?: 'SaleIncomeOrderPayload', incomeId?: string, incomeStatus?: SchemaTypes.IncomeStatus, incomeStatusName?: string, incomeCode?: string, sourceId?: string, sourceType?: SchemaTypes.SaleIncomeSourceType, sourceTypeName?: string, remark?: string, rejectReason?: string, createTime?: number, saleCostOrderId?: string, totalAmount?: number, commodityTypeName?: string, payMode?: SchemaTypes.OutOrderPayModeEnum, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commoditiesList?: Array<{ __typename?: 'SaleIncomeOrderItemPayload', incomeItemId?: string, incomeId?: string, commodityName?: string, unitQuantity?: number, saleMoney?: number, photosList?: Array<string>, outOrderItemId?: string, salePrice?: number, remark?: string, totalQuantity?: number, batchId?: number, batchCode?: string, totalSalePrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, saleCostOrderItems?: Array<{ __typename?: 'SaleCostOrderItemPayload', saleCostOrderItemId?: string, saleCostOrderId?: string, outOrderItemId?: string, packagingFee?: number, materialFee?: number, commodity?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, logs?: Array<{ __typename?: 'SaleIncomeOrderLogPayload', incomeLogId?: string, incomeId?: string, type?: SchemaTypes.SaleIncomeLogType, typeText?: string, remark?: string, createTime?: number, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }>, functionalField?: { __typename?: 'FunctionalField', saleTotalPrice?: number, saleTotalCost?: number }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type WasteSaleOrderStatsQueryVariables = SchemaTypes.Exact<{
  wasteSaleOrderStatsInput?: SchemaTypes.InputMaybe<SchemaTypes.WasteSaleOrderStatsInput>;
}>;


export type WasteSaleOrderStatsQuery = { wasteSaleOrderStats?: { __typename?: 'WasteSaleOrderStatsPayload', finished?: number, reject?: number, canceled?: number } };

export type CreateWasteSaleOrderMutationVariables = SchemaTypes.Exact<{
  createWasteSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateWasteSaleOrderInput>;
}>;


export type CreateWasteSaleOrderMutation = { createWasteSaleOrder?: string };

export type UpdateWasteSaleOrderPriceMutationVariables = SchemaTypes.Exact<{
  updateWasteSaleOrderPriceInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateWasteSaleOrderPriceInput>;
}>;


export type UpdateWasteSaleOrderPriceMutation = { updateWasteSaleOrderPrice?: string };

export type CancelWasteSaleOrderMutationVariables = SchemaTypes.Exact<{
  cancelWasteSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelWasteSaleOrderInput>;
}>;


export type CancelWasteSaleOrderMutation = { cancelWasteSaleOrder?: string };

export type SubmitWasteSaleOrderMutationVariables = SchemaTypes.Exact<{
  submitWasteSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.SubmitWasteSaleOrderInput>;
}>;


export type SubmitWasteSaleOrderMutation = { submitWasteSaleOrder?: string };

export type ListCommodityUnitOptionQueryVariables = SchemaTypes.Exact<{
  listCommodityUnitOptionInput?: SchemaTypes.InputMaybe<SchemaTypes.ListCommodityUnitOptionInput>;
}>;


export type ListCommodityUnitOptionQuery = { listCommodityUnitOption?: Array<{ __typename?: 'Option', label?: string, value?: number }> };


export const PageWasteSaleOrderDocument = gql`
    query pageWasteSaleOrder($pageWasteSaleOrderInput: PageWasteSaleOrderInput, $page: Page) {
  pageWasteSaleOrder(
    pageWasteSaleOrderInput: $pageWasteSaleOrderInput
    page: $page
  ) {
    records {
      saleOrderId
      saleOrderCode
      saleOrderStatus
      org {
        orgId
        orgName
      }
      warehouse {
        warehouseId
        warehouseName
      }
      payMode
      remark
      user {
        userId
        userName
        phoneNum
      }
      createTime
      wasteSaleOrderItemList {
        saleOrderItemId
        commodityName
        unitQuantity
        unit {
          unitId
          unitName
        }
        saleAmount
        totalSaleAmount
        photos
      }
      wasteSaleOrderLogList {
        saleOrderLogId
        saleOrderId
        type
        typeText
        remark
        user {
          userId
          userName
          phoneNum
        }
        createTime
      }
      reason
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
 * __usePageWasteSaleOrderQuery__
 *
 * To run a query within a React component, call `usePageWasteSaleOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageWasteSaleOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageWasteSaleOrderQuery({
 *   variables: {
 *      pageWasteSaleOrderInput: // value for 'pageWasteSaleOrderInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageWasteSaleOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageWasteSaleOrderQuery, PageWasteSaleOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageWasteSaleOrderQuery, PageWasteSaleOrderQueryVariables>(PageWasteSaleOrderDocument, options);
      }
export function usePageWasteSaleOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageWasteSaleOrderQuery, PageWasteSaleOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageWasteSaleOrderQuery, PageWasteSaleOrderQueryVariables>(PageWasteSaleOrderDocument, options);
        }
export type PageWasteSaleOrderQueryHookResult = ReturnType<typeof usePageWasteSaleOrderQuery>;
export type PageWasteSaleOrderLazyQueryHookResult = ReturnType<typeof usePageWasteSaleOrderLazyQuery>;
export type PageWasteSaleOrderQueryResult = Apollo.QueryResult<PageWasteSaleOrderQuery, PageWasteSaleOrderQueryVariables>;
export const WasteSaleOrderDocument = gql`
    query wasteSaleOrder($getWasteSaleOrderInput: GetWasteSaleOrderInput) {
  wasteSaleOrder(getWasteSaleOrderInput: $getWasteSaleOrderInput) {
    saleOrderId
    saleOrderCode
    saleOrderStatus
    org {
      orgId
      orgName
    }
    warehouse {
      warehouseId
      warehouseName
    }
    payMode
    remark
    user {
      userId
      userName
      phoneNum
    }
    createTime
    wasteSaleOrderItemList {
      saleOrderItemId
      commodityName
      unitQuantity
      unit {
        unitId
        unitName
      }
      saleAmount
      totalSaleAmount
      photos
    }
    wasteSaleOrderLogList {
      saleOrderLogId
      saleOrderId
      type
      typeText
      remark
      user {
        userId
        userName
        phoneNum
      }
      createTime
    }
    reason
    saleIncome {
      incomeId
      incomeStatus
      incomeStatusName
      incomeCode
      sourceId
      sourceType
      sourceTypeName
      warehouse {
        warehouseId
        warehouseName
      }
      remark
      rejectReason
      user {
        userId
        userName
        phoneNum
      }
      customer {
        customerId
        customerName
        customerType
      }
      createTime
      commoditiesList {
        incomeItemId
        incomeId
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
        commodityName
        unitQuantity
        unitType {
          unitId
          unitName
        }
        saleMoney
        photosList
        outOrderItemId
        salePrice
        remark
        totalQuantity
        totalType {
          unitId
          unitName
        }
        batchId
        batchCode
        totalSalePrice
        priceType {
          unitId
          unitName
        }
      }
      saleCostOrderItems {
        saleCostOrderItemId
        saleCostOrderId
        outOrderItemId
        commodity {
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
        packagingFee
        materialFee
      }
      logs {
        incomeLogId
        incomeId
        type
        typeText
        remark
        createTime
        user {
          userId
          userName
          phoneNum
        }
      }
      saleCostOrderId
      functionalField {
        saleTotalPrice
        saleTotalCost
      }
      totalAmount
      commodityTypeName
      payMode
      belongOrg {
        orgId
        orgName
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
 * __useWasteSaleOrderQuery__
 *
 * To run a query within a React component, call `useWasteSaleOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useWasteSaleOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWasteSaleOrderQuery({
 *   variables: {
 *      getWasteSaleOrderInput: // value for 'getWasteSaleOrderInput'
 *   },
 * });
 */
export function useWasteSaleOrderQuery(baseOptions?: Apollo.QueryHookOptions<WasteSaleOrderQuery, WasteSaleOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WasteSaleOrderQuery, WasteSaleOrderQueryVariables>(WasteSaleOrderDocument, options);
      }
export function useWasteSaleOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WasteSaleOrderQuery, WasteSaleOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WasteSaleOrderQuery, WasteSaleOrderQueryVariables>(WasteSaleOrderDocument, options);
        }
export type WasteSaleOrderQueryHookResult = ReturnType<typeof useWasteSaleOrderQuery>;
export type WasteSaleOrderLazyQueryHookResult = ReturnType<typeof useWasteSaleOrderLazyQuery>;
export type WasteSaleOrderQueryResult = Apollo.QueryResult<WasteSaleOrderQuery, WasteSaleOrderQueryVariables>;
export const WasteSaleOrderStatsDocument = gql`
    query wasteSaleOrderStats($wasteSaleOrderStatsInput: WasteSaleOrderStatsInput) {
  wasteSaleOrderStats(wasteSaleOrderStatsInput: $wasteSaleOrderStatsInput) {
    finished
    reject
    canceled
  }
}
    `;

/**
 * __useWasteSaleOrderStatsQuery__
 *
 * To run a query within a React component, call `useWasteSaleOrderStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWasteSaleOrderStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWasteSaleOrderStatsQuery({
 *   variables: {
 *      wasteSaleOrderStatsInput: // value for 'wasteSaleOrderStatsInput'
 *   },
 * });
 */
export function useWasteSaleOrderStatsQuery(baseOptions?: Apollo.QueryHookOptions<WasteSaleOrderStatsQuery, WasteSaleOrderStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WasteSaleOrderStatsQuery, WasteSaleOrderStatsQueryVariables>(WasteSaleOrderStatsDocument, options);
      }
export function useWasteSaleOrderStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WasteSaleOrderStatsQuery, WasteSaleOrderStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WasteSaleOrderStatsQuery, WasteSaleOrderStatsQueryVariables>(WasteSaleOrderStatsDocument, options);
        }
export type WasteSaleOrderStatsQueryHookResult = ReturnType<typeof useWasteSaleOrderStatsQuery>;
export type WasteSaleOrderStatsLazyQueryHookResult = ReturnType<typeof useWasteSaleOrderStatsLazyQuery>;
export type WasteSaleOrderStatsQueryResult = Apollo.QueryResult<WasteSaleOrderStatsQuery, WasteSaleOrderStatsQueryVariables>;
export const CreateWasteSaleOrderDocument = gql`
    mutation createWasteSaleOrder($createWasteSaleOrderInput: CreateWasteSaleOrderInput) {
  createWasteSaleOrder(createWasteSaleOrderInput: $createWasteSaleOrderInput)
}
    `;
export type CreateWasteSaleOrderMutationFn = Apollo.MutationFunction<CreateWasteSaleOrderMutation, CreateWasteSaleOrderMutationVariables>;

/**
 * __useCreateWasteSaleOrderMutation__
 *
 * To run a mutation, you first call `useCreateWasteSaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWasteSaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWasteSaleOrderMutation, { data, loading, error }] = useCreateWasteSaleOrderMutation({
 *   variables: {
 *      createWasteSaleOrderInput: // value for 'createWasteSaleOrderInput'
 *   },
 * });
 */
export function useCreateWasteSaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateWasteSaleOrderMutation, CreateWasteSaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWasteSaleOrderMutation, CreateWasteSaleOrderMutationVariables>(CreateWasteSaleOrderDocument, options);
      }
export type CreateWasteSaleOrderMutationHookResult = ReturnType<typeof useCreateWasteSaleOrderMutation>;
export type CreateWasteSaleOrderMutationResult = Apollo.MutationResult<CreateWasteSaleOrderMutation>;
export type CreateWasteSaleOrderMutationOptions = Apollo.BaseMutationOptions<CreateWasteSaleOrderMutation, CreateWasteSaleOrderMutationVariables>;
export const UpdateWasteSaleOrderPriceDocument = gql`
    mutation updateWasteSaleOrderPrice($updateWasteSaleOrderPriceInput: UpdateWasteSaleOrderPriceInput) {
  updateWasteSaleOrderPrice(
    updateWasteSaleOrderPriceInput: $updateWasteSaleOrderPriceInput
  )
}
    `;
export type UpdateWasteSaleOrderPriceMutationFn = Apollo.MutationFunction<UpdateWasteSaleOrderPriceMutation, UpdateWasteSaleOrderPriceMutationVariables>;

/**
 * __useUpdateWasteSaleOrderPriceMutation__
 *
 * To run a mutation, you first call `useUpdateWasteSaleOrderPriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWasteSaleOrderPriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWasteSaleOrderPriceMutation, { data, loading, error }] = useUpdateWasteSaleOrderPriceMutation({
 *   variables: {
 *      updateWasteSaleOrderPriceInput: // value for 'updateWasteSaleOrderPriceInput'
 *   },
 * });
 */
export function useUpdateWasteSaleOrderPriceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWasteSaleOrderPriceMutation, UpdateWasteSaleOrderPriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWasteSaleOrderPriceMutation, UpdateWasteSaleOrderPriceMutationVariables>(UpdateWasteSaleOrderPriceDocument, options);
      }
export type UpdateWasteSaleOrderPriceMutationHookResult = ReturnType<typeof useUpdateWasteSaleOrderPriceMutation>;
export type UpdateWasteSaleOrderPriceMutationResult = Apollo.MutationResult<UpdateWasteSaleOrderPriceMutation>;
export type UpdateWasteSaleOrderPriceMutationOptions = Apollo.BaseMutationOptions<UpdateWasteSaleOrderPriceMutation, UpdateWasteSaleOrderPriceMutationVariables>;
export const CancelWasteSaleOrderDocument = gql`
    mutation cancelWasteSaleOrder($cancelWasteSaleOrderInput: CancelWasteSaleOrderInput) {
  cancelWasteSaleOrder(cancelWasteSaleOrderInput: $cancelWasteSaleOrderInput)
}
    `;
export type CancelWasteSaleOrderMutationFn = Apollo.MutationFunction<CancelWasteSaleOrderMutation, CancelWasteSaleOrderMutationVariables>;

/**
 * __useCancelWasteSaleOrderMutation__
 *
 * To run a mutation, you first call `useCancelWasteSaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelWasteSaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelWasteSaleOrderMutation, { data, loading, error }] = useCancelWasteSaleOrderMutation({
 *   variables: {
 *      cancelWasteSaleOrderInput: // value for 'cancelWasteSaleOrderInput'
 *   },
 * });
 */
export function useCancelWasteSaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelWasteSaleOrderMutation, CancelWasteSaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelWasteSaleOrderMutation, CancelWasteSaleOrderMutationVariables>(CancelWasteSaleOrderDocument, options);
      }
export type CancelWasteSaleOrderMutationHookResult = ReturnType<typeof useCancelWasteSaleOrderMutation>;
export type CancelWasteSaleOrderMutationResult = Apollo.MutationResult<CancelWasteSaleOrderMutation>;
export type CancelWasteSaleOrderMutationOptions = Apollo.BaseMutationOptions<CancelWasteSaleOrderMutation, CancelWasteSaleOrderMutationVariables>;
export const SubmitWasteSaleOrderDocument = gql`
    mutation submitWasteSaleOrder($submitWasteSaleOrderInput: SubmitWasteSaleOrderInput) {
  submitWasteSaleOrder(submitWasteSaleOrderInput: $submitWasteSaleOrderInput)
}
    `;
export type SubmitWasteSaleOrderMutationFn = Apollo.MutationFunction<SubmitWasteSaleOrderMutation, SubmitWasteSaleOrderMutationVariables>;

/**
 * __useSubmitWasteSaleOrderMutation__
 *
 * To run a mutation, you first call `useSubmitWasteSaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitWasteSaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitWasteSaleOrderMutation, { data, loading, error }] = useSubmitWasteSaleOrderMutation({
 *   variables: {
 *      submitWasteSaleOrderInput: // value for 'submitWasteSaleOrderInput'
 *   },
 * });
 */
export function useSubmitWasteSaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitWasteSaleOrderMutation, SubmitWasteSaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitWasteSaleOrderMutation, SubmitWasteSaleOrderMutationVariables>(SubmitWasteSaleOrderDocument, options);
      }
export type SubmitWasteSaleOrderMutationHookResult = ReturnType<typeof useSubmitWasteSaleOrderMutation>;
export type SubmitWasteSaleOrderMutationResult = Apollo.MutationResult<SubmitWasteSaleOrderMutation>;
export type SubmitWasteSaleOrderMutationOptions = Apollo.BaseMutationOptions<SubmitWasteSaleOrderMutation, SubmitWasteSaleOrderMutationVariables>;
export const ListCommodityUnitOptionDocument = gql`
    query listCommodityUnitOption($listCommodityUnitOptionInput: ListCommodityUnitOptionInput) {
  listCommodityUnitOption(
    listCommodityUnitOptionInput: $listCommodityUnitOptionInput
  ) {
    label
    value
  }
}
    `;

/**
 * __useListCommodityUnitOptionQuery__
 *
 * To run a query within a React component, call `useListCommodityUnitOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCommodityUnitOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCommodityUnitOptionQuery({
 *   variables: {
 *      listCommodityUnitOptionInput: // value for 'listCommodityUnitOptionInput'
 *   },
 * });
 */
export function useListCommodityUnitOptionQuery(baseOptions?: Apollo.QueryHookOptions<ListCommodityUnitOptionQuery, ListCommodityUnitOptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCommodityUnitOptionQuery, ListCommodityUnitOptionQueryVariables>(ListCommodityUnitOptionDocument, options);
      }
export function useListCommodityUnitOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCommodityUnitOptionQuery, ListCommodityUnitOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCommodityUnitOptionQuery, ListCommodityUnitOptionQueryVariables>(ListCommodityUnitOptionDocument, options);
        }
export type ListCommodityUnitOptionQueryHookResult = ReturnType<typeof useListCommodityUnitOptionQuery>;
export type ListCommodityUnitOptionLazyQueryHookResult = ReturnType<typeof useListCommodityUnitOptionLazyQuery>;
export type ListCommodityUnitOptionQueryResult = Apollo.QueryResult<ListCommodityUnitOptionQuery, ListCommodityUnitOptionQueryVariables>;