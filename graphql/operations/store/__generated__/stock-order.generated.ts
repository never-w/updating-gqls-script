import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageStockOrderQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageStockOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.PageStockOrderInput>;
}>;


export type PageStockOrderQuery = { pageStockOrder?: { __typename?: 'PageStockOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'StockOrderDetailPayload', businessId?: string, businessType?: SchemaTypes.PitayaBusinessTypeEnum, businessTypeName?: string, createTime?: number, id?: string, stockOrderCode?: string, stockOrderType?: SchemaTypes.StockOrderType, stockOrderTypeName?: string, stockOrderStatus?: SchemaTypes.StockOrderStatusEnum, stockOrderStatusName?: string, isExceptional?: boolean, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, businessInfo?: { __typename?: 'BusinessInfo', businessCode?: string, businessStatus?: number, businessStatusName?: string, id?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customerList?: Array<{ __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }> }, commodities?: Array<{ __typename?: 'StockOrderItem', commodityTypeId?: number, commodityTypeName?: string, createTime?: number, stockOrderId?: string, totalQuantity?: number, unitQuantity?: number, waitTotalQuantity?: number, waitUnitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> }> } };

export type StockOrderBadgeQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type StockOrderBadgeQuery = { stockOrderBadge?: { __typename?: 'StockOrderBadgePayload', toBeInAudited?: number, toBeOutAudited?: number } };

export type StockOrderDetailQueryVariables = SchemaTypes.Exact<{
  stockOrderDetailInput?: SchemaTypes.InputMaybe<SchemaTypes.StockOrderDetailInput>;
}>;


export type StockOrderDetailQuery = { stockOrderDetail?: { __typename?: 'StockOrderDetailPayload', businessId?: string, businessType?: SchemaTypes.PitayaBusinessTypeEnum, businessTypeName?: string, createTime?: number, id?: string, stockOrderCode?: string, stockOrderType?: SchemaTypes.StockOrderType, stockOrderTypeName?: string, stockOrderStatus?: SchemaTypes.StockOrderStatusEnum, stockOrderStatusName?: string, isExceptional?: boolean, interval?: number, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, businessInfo?: { __typename?: 'BusinessInfo', businessCode?: string, businessStatus?: number, businessStatusName?: string, id?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customerList?: Array<{ __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }> }, commodities?: Array<{ __typename?: 'StockOrderItem', commodityTypeId?: number, commodityTypeName?: string, createTime?: number, stockOrderId?: string, totalQuantity?: number, unitQuantity?: number, waitTotalQuantity?: number, waitUnitQuantity?: number, itemId?: string, mark?: Array<SchemaTypes.ApplyMarkEnum>, markName?: Array<string>, applyTotalQuantity?: number, applyUnitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> } };

export type ConfirmStockOrderMutationVariables = SchemaTypes.Exact<{
  confirmStockOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.ConfirmStockOrderInput>;
}>;


export type ConfirmStockOrderMutation = { confirmStockOrder?: boolean };

export type RejectStockOrderMutationVariables = SchemaTypes.Exact<{
  rejectStockOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.RejectStockOrderInput>;
}>;


export type RejectStockOrderMutation = { rejectStockOrder?: boolean };

export type StockOrderListBadgeQueryVariables = SchemaTypes.Exact<{
  stockOrderListBadgeInput?: SchemaTypes.InputMaybe<SchemaTypes.StockOrderListBadgeInput>;
}>;


export type StockOrderListBadgeQuery = { stockOrderListBadge?: Array<{ __typename?: 'StockOrderListBadgePayload', count?: number, stockOrderType?: SchemaTypes.StockOrderType }> };

export type PageStockWmsOrderQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PageStockWmsOrderInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageStockWmsOrderQuery = { pageStockWmsOrder?: { __typename?: 'PageStockWmsOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'StockWmsOrderDetailPayload', businessId?: string, commodityTypeId?: number, id?: string, stockOrderCode?: string, stockOrderStatus?: SchemaTypes.StockWmsOrderStatus, stockOrderStatusName?: string, stockOrderType?: SchemaTypes.StockWmsOrderType, stockOrderTypeName?: string, isExceptional?: boolean, businessInfo?: { __typename?: 'StockWmsOrderBusinessInfo', businessCode?: string, businessId?: string, businessStatus?: number, businessStatusName?: string, businessType?: SchemaTypes.PitayaBusinessTypeEnum, businessTypeName?: string, stockWmsOrderType?: SchemaTypes.StockWmsOrderType, stockWmsOrderTypeName?: string, createTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }, commodities?: Array<{ __typename?: 'StockWmsOrderItem', index?: string, itemId?: string, pricePosition?: SchemaTypes.PricePositionEnum, stockOrderId?: string, totalQuantity?: number, unitQuantity?: number, waitTotalQuantity?: number, waitUnitQuantity?: number, markList?: Array<SchemaTypes.AcquireMarkEnum>, markListDesc?: Array<string>, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> } };

export type StockWmsOrderCommodityTypeBadgeQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.StockWmsOrderCommodityTypeBadgeInput>;
}>;


export type StockWmsOrderCommodityTypeBadgeQuery = { stockWmsOrderCommodityTypeBadge?: Array<{ __typename?: 'StockWmsOrderCommodityTypeBadgePayload', commodityTypeDesc?: string, commodityTypeId?: number, count?: number }> };

export type StockWmsOrderDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.StockWmsOrderDetailInput>;
}>;


export type StockWmsOrderDetailQuery = { stockWmsOrderDetail?: { __typename?: 'StockWmsOrderDetailPayload', businessId?: string, commodityTypeId?: number, id?: string, stockOrderCode?: string, stockOrderStatus?: SchemaTypes.StockWmsOrderStatus, stockOrderStatusName?: string, stockOrderType?: SchemaTypes.StockWmsOrderType, stockOrderTypeName?: string, commodityTypeName?: string, note?: string, isExceptional?: boolean, interval?: number, businessInfo?: { __typename?: 'StockWmsOrderBusinessInfo', businessCode?: string, businessId?: string, businessStatus?: number, businessStatusName?: string, businessType?: SchemaTypes.PitayaBusinessTypeEnum, businessTypeName?: string, stockWmsOrderType?: SchemaTypes.StockWmsOrderType, stockWmsOrderTypeName?: string, createTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }, commodities?: Array<{ __typename?: 'StockWmsOrderItem', index?: string, itemId?: string, pricePosition?: SchemaTypes.PricePositionEnum, stockOrderId?: string, totalQuantity?: number, unitQuantity?: number, waitTotalQuantity?: number, waitUnitQuantity?: number, markList?: Array<SchemaTypes.AcquireMarkEnum>, markListDesc?: Array<string>, price?: number, applyTotalQuantity?: number, applyUnitQuantity?: number, belongCustomerId?: number, belongCustomerName?: string, belongCustomerType?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string } }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } };

export type StockWmsOrderListBadgeQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.StockWmsOrderListBadgeInput>;
}>;


export type StockWmsOrderListBadgeQuery = { stockWmsOrderListBadge?: Array<{ __typename?: 'StockWmsOrderListBadgePayload', count?: number, stockInOrderType?: SchemaTypes.StockWmsOrderType }> };

export type ConfirmStockWmsOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ConfirmStockWmsOrderInput>;
}>;


export type ConfirmStockWmsOrderMutation = { confirmStockWmsOrder?: boolean };

export type FinishStockWmsOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.FinishStockWmsOrderInput>;
}>;


export type FinishStockWmsOrderMutation = { finishStockWmsOrder?: boolean };

export type RejectStockWmsOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.RejectStockWmsOrderInput>;
}>;


export type RejectStockWmsOrderMutation = { rejectStockWmsOrder?: boolean };


export const PageStockOrderDocument = gql`
    query pageStockOrder($page: Page, $pageStockOrderInput: PageStockOrderInput) {
  pageStockOrder(page: $page, pageStockOrderInput: $pageStockOrderInput) {
    pageCurrent
    pageSize
    records {
      createBy {
        phoneNum
        userId
        userName
      }
      org {
        orgId
        orgName
      }
      businessId
      businessInfo {
        belongOrg {
          orgId
          orgName
        }
        customerList {
          customerId
          customerName
          customerType
          lastLevelId
        }
        businessCode
        businessStatus
        businessStatusName
        id
      }
      businessType
      businessTypeName
      commodities {
        commoditySku {
          totalType {
            unitId
            unitName
          }
          unitType {
            unitId
            unitName
          }
          categoryId
          categoryName
          commodityId
          commodityName
          commoditySkuId
          commoditySkuName
          commoditySpecOptionId
          commoditySpecOptionName
          conversion
        }
        createBy {
          phoneNum
          userId
          userName
        }
        batch {
          batchCode
          batchId
          createTime
          totalQuantity
          unitQuantity
        }
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
        warehouse {
          warehouseId
          warehouseName
        }
        commodityTypeId
        commodityTypeName
        createTime
        stockOrderId
        totalQuantity
        unitQuantity
        waitTotalQuantity
        waitUnitQuantity
      }
      createTime
      id
      stockOrderCode
      stockOrderType
      stockOrderTypeName
      stockOrderStatus
      stockOrderStatusName
      isExceptional
    }
    totalRecords
  }
}
    `;

/**
 * __usePageStockOrderQuery__
 *
 * To run a query within a React component, call `usePageStockOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageStockOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageStockOrderQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageStockOrderInput: // value for 'pageStockOrderInput'
 *   },
 * });
 */
export function usePageStockOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageStockOrderQuery, PageStockOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageStockOrderQuery, PageStockOrderQueryVariables>(PageStockOrderDocument, options);
      }
export function usePageStockOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageStockOrderQuery, PageStockOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageStockOrderQuery, PageStockOrderQueryVariables>(PageStockOrderDocument, options);
        }
export type PageStockOrderQueryHookResult = ReturnType<typeof usePageStockOrderQuery>;
export type PageStockOrderLazyQueryHookResult = ReturnType<typeof usePageStockOrderLazyQuery>;
export type PageStockOrderQueryResult = Apollo.QueryResult<PageStockOrderQuery, PageStockOrderQueryVariables>;
export const StockOrderBadgeDocument = gql`
    query stockOrderBadge {
  stockOrderBadge {
    toBeInAudited
    toBeOutAudited
  }
}
    `;

/**
 * __useStockOrderBadgeQuery__
 *
 * To run a query within a React component, call `useStockOrderBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockOrderBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockOrderBadgeQuery({
 *   variables: {
 *   },
 * });
 */
export function useStockOrderBadgeQuery(baseOptions?: Apollo.QueryHookOptions<StockOrderBadgeQuery, StockOrderBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockOrderBadgeQuery, StockOrderBadgeQueryVariables>(StockOrderBadgeDocument, options);
      }
export function useStockOrderBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockOrderBadgeQuery, StockOrderBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockOrderBadgeQuery, StockOrderBadgeQueryVariables>(StockOrderBadgeDocument, options);
        }
export type StockOrderBadgeQueryHookResult = ReturnType<typeof useStockOrderBadgeQuery>;
export type StockOrderBadgeLazyQueryHookResult = ReturnType<typeof useStockOrderBadgeLazyQuery>;
export type StockOrderBadgeQueryResult = Apollo.QueryResult<StockOrderBadgeQuery, StockOrderBadgeQueryVariables>;
export const StockOrderDetailDocument = gql`
    query stockOrderDetail($stockOrderDetailInput: StockOrderDetailInput) {
  stockOrderDetail(stockOrderDetailInput: $stockOrderDetailInput) {
    createBy {
      phoneNum
      userId
      userName
    }
    org {
      orgId
      orgName
    }
    businessId
    businessInfo {
      belongOrg {
        orgId
        orgName
      }
      customerList {
        customerId
        customerName
        customerType
        lastLevelId
      }
      businessCode
      businessStatus
      businessStatusName
      id
    }
    businessType
    businessTypeName
    commodities {
      commoditySku {
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
        categoryId
        categoryName
        commodityId
        commodityName
        commoditySkuId
        commoditySkuName
        commoditySpecOptionId
        commoditySpecOptionName
        conversion
      }
      createBy {
        phoneNum
        userId
        userName
      }
      batch {
        batchCode
        batchId
        createTime
        totalQuantity
        unitQuantity
      }
      totalType {
        unitId
        unitName
      }
      unitType {
        unitId
        unitName
      }
      warehouse {
        warehouseId
        warehouseName
      }
      commodityTypeId
      commodityTypeName
      createTime
      stockOrderId
      totalQuantity
      unitQuantity
      waitTotalQuantity
      waitUnitQuantity
      itemId
      mark
      markName
      applyTotalQuantity
      applyUnitQuantity
    }
    createTime
    id
    stockOrderCode
    stockOrderType
    stockOrderTypeName
    stockOrderStatus
    stockOrderStatusName
    isExceptional
    interval
  }
}
    `;

/**
 * __useStockOrderDetailQuery__
 *
 * To run a query within a React component, call `useStockOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockOrderDetailQuery({
 *   variables: {
 *      stockOrderDetailInput: // value for 'stockOrderDetailInput'
 *   },
 * });
 */
export function useStockOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<StockOrderDetailQuery, StockOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockOrderDetailQuery, StockOrderDetailQueryVariables>(StockOrderDetailDocument, options);
      }
export function useStockOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockOrderDetailQuery, StockOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockOrderDetailQuery, StockOrderDetailQueryVariables>(StockOrderDetailDocument, options);
        }
export type StockOrderDetailQueryHookResult = ReturnType<typeof useStockOrderDetailQuery>;
export type StockOrderDetailLazyQueryHookResult = ReturnType<typeof useStockOrderDetailLazyQuery>;
export type StockOrderDetailQueryResult = Apollo.QueryResult<StockOrderDetailQuery, StockOrderDetailQueryVariables>;
export const ConfirmStockOrderDocument = gql`
    mutation confirmStockOrder($confirmStockOrderInput: ConfirmStockOrderInput) {
  confirmStockOrder(confirmStockOrderInput: $confirmStockOrderInput)
}
    `;
export type ConfirmStockOrderMutationFn = Apollo.MutationFunction<ConfirmStockOrderMutation, ConfirmStockOrderMutationVariables>;

/**
 * __useConfirmStockOrderMutation__
 *
 * To run a mutation, you first call `useConfirmStockOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmStockOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmStockOrderMutation, { data, loading, error }] = useConfirmStockOrderMutation({
 *   variables: {
 *      confirmStockOrderInput: // value for 'confirmStockOrderInput'
 *   },
 * });
 */
export function useConfirmStockOrderMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmStockOrderMutation, ConfirmStockOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmStockOrderMutation, ConfirmStockOrderMutationVariables>(ConfirmStockOrderDocument, options);
      }
export type ConfirmStockOrderMutationHookResult = ReturnType<typeof useConfirmStockOrderMutation>;
export type ConfirmStockOrderMutationResult = Apollo.MutationResult<ConfirmStockOrderMutation>;
export type ConfirmStockOrderMutationOptions = Apollo.BaseMutationOptions<ConfirmStockOrderMutation, ConfirmStockOrderMutationVariables>;
export const RejectStockOrderDocument = gql`
    mutation rejectStockOrder($rejectStockOrderInput: RejectStockOrderInput) {
  rejectStockOrder(rejectStockOrderInput: $rejectStockOrderInput)
}
    `;
export type RejectStockOrderMutationFn = Apollo.MutationFunction<RejectStockOrderMutation, RejectStockOrderMutationVariables>;

/**
 * __useRejectStockOrderMutation__
 *
 * To run a mutation, you first call `useRejectStockOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectStockOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectStockOrderMutation, { data, loading, error }] = useRejectStockOrderMutation({
 *   variables: {
 *      rejectStockOrderInput: // value for 'rejectStockOrderInput'
 *   },
 * });
 */
export function useRejectStockOrderMutation(baseOptions?: Apollo.MutationHookOptions<RejectStockOrderMutation, RejectStockOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectStockOrderMutation, RejectStockOrderMutationVariables>(RejectStockOrderDocument, options);
      }
export type RejectStockOrderMutationHookResult = ReturnType<typeof useRejectStockOrderMutation>;
export type RejectStockOrderMutationResult = Apollo.MutationResult<RejectStockOrderMutation>;
export type RejectStockOrderMutationOptions = Apollo.BaseMutationOptions<RejectStockOrderMutation, RejectStockOrderMutationVariables>;
export const StockOrderListBadgeDocument = gql`
    query stockOrderListBadge($stockOrderListBadgeInput: StockOrderListBadgeInput) {
  stockOrderListBadge(stockOrderListBadgeInput: $stockOrderListBadgeInput) {
    count
    stockOrderType
  }
}
    `;

/**
 * __useStockOrderListBadgeQuery__
 *
 * To run a query within a React component, call `useStockOrderListBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockOrderListBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockOrderListBadgeQuery({
 *   variables: {
 *      stockOrderListBadgeInput: // value for 'stockOrderListBadgeInput'
 *   },
 * });
 */
export function useStockOrderListBadgeQuery(baseOptions?: Apollo.QueryHookOptions<StockOrderListBadgeQuery, StockOrderListBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockOrderListBadgeQuery, StockOrderListBadgeQueryVariables>(StockOrderListBadgeDocument, options);
      }
export function useStockOrderListBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockOrderListBadgeQuery, StockOrderListBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockOrderListBadgeQuery, StockOrderListBadgeQueryVariables>(StockOrderListBadgeDocument, options);
        }
export type StockOrderListBadgeQueryHookResult = ReturnType<typeof useStockOrderListBadgeQuery>;
export type StockOrderListBadgeLazyQueryHookResult = ReturnType<typeof useStockOrderListBadgeLazyQuery>;
export type StockOrderListBadgeQueryResult = Apollo.QueryResult<StockOrderListBadgeQuery, StockOrderListBadgeQueryVariables>;
export const PageStockWmsOrderDocument = gql`
    query pageStockWmsOrder($input: PageStockWmsOrderInput, $page: Page) {
  pageStockWmsOrder(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      businessId
      businessInfo {
        belongOrg {
          orgId
          orgName
        }
        customer {
          customerId
          customerName
          customerType
          lastLevelId
        }
        supplier {
          supplierId
          supplierName
        }
        businessCode
        businessId
        businessStatus
        businessStatusName
        businessType
        businessTypeName
        stockWmsOrderType
        stockWmsOrderTypeName
        warehouse {
          warehouseId
          warehouseName
        }
        createBy {
          phoneNum
          userId
          userName
        }
        createTime
      }
      commodities {
        batchInfo {
          warehouse {
            warehouseId
            warehouseName
          }
          batchCode
          batchId
          commodityTypeId
          commodityTypeName
          createTime
          totalQuantity
          unitQuantity
        }
        commoditySku {
          totalType {
            unitId
            unitName
          }
          unitType {
            unitId
            unitName
          }
          categoryId
          categoryName
          commodityId
          commodityName
          commoditySkuId
          commoditySkuName
          commoditySpecOptionId
          commoditySpecOptionName
          conversion
        }
        index
        itemId
        pricePosition
        stockOrderId
        totalQuantity
        unitQuantity
        waitTotalQuantity
        waitUnitQuantity
        markList
        markListDesc
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
      }
      commodityTypeId
      id
      stockOrderCode
      stockOrderStatus
      stockOrderStatusName
      stockOrderType
      stockOrderTypeName
      isExceptional
    }
    totalRecords
  }
}
    `;

/**
 * __usePageStockWmsOrderQuery__
 *
 * To run a query within a React component, call `usePageStockWmsOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageStockWmsOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageStockWmsOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageStockWmsOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageStockWmsOrderQuery, PageStockWmsOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageStockWmsOrderQuery, PageStockWmsOrderQueryVariables>(PageStockWmsOrderDocument, options);
      }
export function usePageStockWmsOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageStockWmsOrderQuery, PageStockWmsOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageStockWmsOrderQuery, PageStockWmsOrderQueryVariables>(PageStockWmsOrderDocument, options);
        }
export type PageStockWmsOrderQueryHookResult = ReturnType<typeof usePageStockWmsOrderQuery>;
export type PageStockWmsOrderLazyQueryHookResult = ReturnType<typeof usePageStockWmsOrderLazyQuery>;
export type PageStockWmsOrderQueryResult = Apollo.QueryResult<PageStockWmsOrderQuery, PageStockWmsOrderQueryVariables>;
export const StockWmsOrderCommodityTypeBadgeDocument = gql`
    query stockWmsOrderCommodityTypeBadge($input: StockWmsOrderCommodityTypeBadgeInput) {
  stockWmsOrderCommodityTypeBadge(input: $input) {
    commodityTypeDesc
    commodityTypeId
    count
  }
}
    `;

/**
 * __useStockWmsOrderCommodityTypeBadgeQuery__
 *
 * To run a query within a React component, call `useStockWmsOrderCommodityTypeBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockWmsOrderCommodityTypeBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockWmsOrderCommodityTypeBadgeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStockWmsOrderCommodityTypeBadgeQuery(baseOptions?: Apollo.QueryHookOptions<StockWmsOrderCommodityTypeBadgeQuery, StockWmsOrderCommodityTypeBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockWmsOrderCommodityTypeBadgeQuery, StockWmsOrderCommodityTypeBadgeQueryVariables>(StockWmsOrderCommodityTypeBadgeDocument, options);
      }
export function useStockWmsOrderCommodityTypeBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockWmsOrderCommodityTypeBadgeQuery, StockWmsOrderCommodityTypeBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockWmsOrderCommodityTypeBadgeQuery, StockWmsOrderCommodityTypeBadgeQueryVariables>(StockWmsOrderCommodityTypeBadgeDocument, options);
        }
export type StockWmsOrderCommodityTypeBadgeQueryHookResult = ReturnType<typeof useStockWmsOrderCommodityTypeBadgeQuery>;
export type StockWmsOrderCommodityTypeBadgeLazyQueryHookResult = ReturnType<typeof useStockWmsOrderCommodityTypeBadgeLazyQuery>;
export type StockWmsOrderCommodityTypeBadgeQueryResult = Apollo.QueryResult<StockWmsOrderCommodityTypeBadgeQuery, StockWmsOrderCommodityTypeBadgeQueryVariables>;
export const StockWmsOrderDetailDocument = gql`
    query stockWmsOrderDetail($input: StockWmsOrderDetailInput) {
  stockWmsOrderDetail(input: $input) {
    businessId
    businessInfo {
      belongOrg {
        orgId
        orgName
      }
      customer {
        customerId
        customerName
        customerType
        lastLevelId
        lastLevelName
      }
      supplier {
        supplierId
        supplierName
      }
      businessCode
      businessId
      businessStatus
      businessStatusName
      businessType
      businessTypeName
      stockWmsOrderType
      stockWmsOrderTypeName
      warehouse {
        warehouseId
        warehouseName
      }
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
    }
    commodities {
      batchInfo {
        warehouse {
          warehouseId
          warehouseName
        }
        batchCode
        batchId
        commodityTypeId
        commodityTypeName
        createTime
        totalQuantity
        unitQuantity
        customer {
          customerId
          customerName
          customerType
          lastLevelId
          lastLevelName
        }
      }
      commoditySku {
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
        categoryId
        categoryName
        commodityId
        commodityName
        commoditySkuId
        commoditySkuName
        commoditySpecOptionId
        commoditySpecOptionName
        conversion
      }
      index
      itemId
      pricePosition
      stockOrderId
      totalQuantity
      unitQuantity
      waitTotalQuantity
      waitUnitQuantity
      markList
      markListDesc
      totalType {
        unitId
        unitName
      }
      unitType {
        unitId
        unitName
      }
      priceType {
        unitId
        unitName
      }
      price
      applyTotalQuantity
      applyUnitQuantity
      belongCustomerId
      belongCustomerName
      belongCustomerType
    }
    commodityTypeId
    id
    stockOrderCode
    stockOrderStatus
    stockOrderStatusName
    stockOrderType
    stockOrderTypeName
    commodityTypeName
    note
    isExceptional
    interval
  }
}
    `;

/**
 * __useStockWmsOrderDetailQuery__
 *
 * To run a query within a React component, call `useStockWmsOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockWmsOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockWmsOrderDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStockWmsOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<StockWmsOrderDetailQuery, StockWmsOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockWmsOrderDetailQuery, StockWmsOrderDetailQueryVariables>(StockWmsOrderDetailDocument, options);
      }
export function useStockWmsOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockWmsOrderDetailQuery, StockWmsOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockWmsOrderDetailQuery, StockWmsOrderDetailQueryVariables>(StockWmsOrderDetailDocument, options);
        }
export type StockWmsOrderDetailQueryHookResult = ReturnType<typeof useStockWmsOrderDetailQuery>;
export type StockWmsOrderDetailLazyQueryHookResult = ReturnType<typeof useStockWmsOrderDetailLazyQuery>;
export type StockWmsOrderDetailQueryResult = Apollo.QueryResult<StockWmsOrderDetailQuery, StockWmsOrderDetailQueryVariables>;
export const StockWmsOrderListBadgeDocument = gql`
    query stockWmsOrderListBadge($input: stockWmsOrderListBadgeInput) {
  stockWmsOrderListBadge(input: $input) {
    count
    stockInOrderType
  }
}
    `;

/**
 * __useStockWmsOrderListBadgeQuery__
 *
 * To run a query within a React component, call `useStockWmsOrderListBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockWmsOrderListBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockWmsOrderListBadgeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStockWmsOrderListBadgeQuery(baseOptions?: Apollo.QueryHookOptions<StockWmsOrderListBadgeQuery, StockWmsOrderListBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockWmsOrderListBadgeQuery, StockWmsOrderListBadgeQueryVariables>(StockWmsOrderListBadgeDocument, options);
      }
export function useStockWmsOrderListBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockWmsOrderListBadgeQuery, StockWmsOrderListBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockWmsOrderListBadgeQuery, StockWmsOrderListBadgeQueryVariables>(StockWmsOrderListBadgeDocument, options);
        }
export type StockWmsOrderListBadgeQueryHookResult = ReturnType<typeof useStockWmsOrderListBadgeQuery>;
export type StockWmsOrderListBadgeLazyQueryHookResult = ReturnType<typeof useStockWmsOrderListBadgeLazyQuery>;
export type StockWmsOrderListBadgeQueryResult = Apollo.QueryResult<StockWmsOrderListBadgeQuery, StockWmsOrderListBadgeQueryVariables>;
export const ConfirmStockWmsOrderDocument = gql`
    mutation confirmStockWmsOrder($input: ConfirmStockWmsOrderInput) {
  confirmStockWmsOrder(input: $input)
}
    `;
export type ConfirmStockWmsOrderMutationFn = Apollo.MutationFunction<ConfirmStockWmsOrderMutation, ConfirmStockWmsOrderMutationVariables>;

/**
 * __useConfirmStockWmsOrderMutation__
 *
 * To run a mutation, you first call `useConfirmStockWmsOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmStockWmsOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmStockWmsOrderMutation, { data, loading, error }] = useConfirmStockWmsOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmStockWmsOrderMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmStockWmsOrderMutation, ConfirmStockWmsOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmStockWmsOrderMutation, ConfirmStockWmsOrderMutationVariables>(ConfirmStockWmsOrderDocument, options);
      }
export type ConfirmStockWmsOrderMutationHookResult = ReturnType<typeof useConfirmStockWmsOrderMutation>;
export type ConfirmStockWmsOrderMutationResult = Apollo.MutationResult<ConfirmStockWmsOrderMutation>;
export type ConfirmStockWmsOrderMutationOptions = Apollo.BaseMutationOptions<ConfirmStockWmsOrderMutation, ConfirmStockWmsOrderMutationVariables>;
export const FinishStockWmsOrderDocument = gql`
    mutation finishStockWmsOrder($input: FinishStockWmsOrderInput) {
  finishStockWmsOrder(input: $input)
}
    `;
export type FinishStockWmsOrderMutationFn = Apollo.MutationFunction<FinishStockWmsOrderMutation, FinishStockWmsOrderMutationVariables>;

/**
 * __useFinishStockWmsOrderMutation__
 *
 * To run a mutation, you first call `useFinishStockWmsOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFinishStockWmsOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [finishStockWmsOrderMutation, { data, loading, error }] = useFinishStockWmsOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFinishStockWmsOrderMutation(baseOptions?: Apollo.MutationHookOptions<FinishStockWmsOrderMutation, FinishStockWmsOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FinishStockWmsOrderMutation, FinishStockWmsOrderMutationVariables>(FinishStockWmsOrderDocument, options);
      }
export type FinishStockWmsOrderMutationHookResult = ReturnType<typeof useFinishStockWmsOrderMutation>;
export type FinishStockWmsOrderMutationResult = Apollo.MutationResult<FinishStockWmsOrderMutation>;
export type FinishStockWmsOrderMutationOptions = Apollo.BaseMutationOptions<FinishStockWmsOrderMutation, FinishStockWmsOrderMutationVariables>;
export const RejectStockWmsOrderDocument = gql`
    mutation rejectStockWmsOrder($input: RejectStockWmsOrderInput) {
  rejectStockWmsOrder(input: $input)
}
    `;
export type RejectStockWmsOrderMutationFn = Apollo.MutationFunction<RejectStockWmsOrderMutation, RejectStockWmsOrderMutationVariables>;

/**
 * __useRejectStockWmsOrderMutation__
 *
 * To run a mutation, you first call `useRejectStockWmsOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectStockWmsOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectStockWmsOrderMutation, { data, loading, error }] = useRejectStockWmsOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRejectStockWmsOrderMutation(baseOptions?: Apollo.MutationHookOptions<RejectStockWmsOrderMutation, RejectStockWmsOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectStockWmsOrderMutation, RejectStockWmsOrderMutationVariables>(RejectStockWmsOrderDocument, options);
      }
export type RejectStockWmsOrderMutationHookResult = ReturnType<typeof useRejectStockWmsOrderMutation>;
export type RejectStockWmsOrderMutationResult = Apollo.MutationResult<RejectStockWmsOrderMutation>;
export type RejectStockWmsOrderMutationOptions = Apollo.BaseMutationOptions<RejectStockWmsOrderMutation, RejectStockWmsOrderMutationVariables>;