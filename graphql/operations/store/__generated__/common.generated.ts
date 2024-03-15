import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CommodityStockBatchesQueryVariables = SchemaTypes.Exact<{
  listCommodityStockBatchInput?: SchemaTypes.InputMaybe<SchemaTypes.ListCommodityStockBatchInput>;
}>;


export type CommodityStockBatchesQuery = { commodityStockBatches?: Array<{ __typename?: 'CommodityStockBatchPayload', batchId?: string, batchCode?: string, categoryId?: number, inStockTime?: number, quantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> };

export type SkuStocksQueryVariables = SchemaTypes.Exact<{
  stockSkuInput?: SchemaTypes.InputMaybe<SchemaTypes.ListSkuStockInput>;
}>;


export type SkuStocksQuery = { skuStocks?: Array<{ __typename?: 'SkuStockPayload', quantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, dynamicQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> };

export type ListFlowLogQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListFlowLogInput>;
}>;


export type ListFlowLogQuery = { listFlowLog?: Array<{ __typename?: 'FlowLogPayload', createTime?: number, flowId?: string, note?: string, type?: number, typeDesc?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }> };

export type CountApplyOrderStatusQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CountApplyOrderStatusInput>;
}>;


export type CountApplyOrderStatusQuery = { countApplyOrderStatus?: Array<{ __typename?: 'CountApplyOrderStatusPayload', count?: number, status?: number }> };


export const CommodityStockBatchesDocument = gql`
    query commodityStockBatches($listCommodityStockBatchInput: ListCommodityStockBatchInput) {
  commodityStockBatches(
    listCommodityStockBatchInput: $listCommodityStockBatchInput
  ) {
    batchId
    batchCode
    categoryId
    inStockTime
    commoditySku {
      availableSkuQuantity {
        businessUnit {
          unitId
          unitName
        }
        unit {
          unitId
          unitName
        }
        conversion
      }
      baseUnit {
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
    }
    customer {
      customerId
      customerName
      customerType
      lastLevelId
      lastLevelName
    }
    unit {
      unitId
      unitName
    }
    quantity
    quantityItem {
      unit {
        unitId
        unitName
      }
      quantity
    }
  }
}
    `;

/**
 * __useCommodityStockBatchesQuery__
 *
 * To run a query within a React component, call `useCommodityStockBatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommodityStockBatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommodityStockBatchesQuery({
 *   variables: {
 *      listCommodityStockBatchInput: // value for 'listCommodityStockBatchInput'
 *   },
 * });
 */
export function useCommodityStockBatchesQuery(baseOptions?: Apollo.QueryHookOptions<CommodityStockBatchesQuery, CommodityStockBatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommodityStockBatchesQuery, CommodityStockBatchesQueryVariables>(CommodityStockBatchesDocument, options);
      }
export function useCommodityStockBatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommodityStockBatchesQuery, CommodityStockBatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommodityStockBatchesQuery, CommodityStockBatchesQueryVariables>(CommodityStockBatchesDocument, options);
        }
export type CommodityStockBatchesQueryHookResult = ReturnType<typeof useCommodityStockBatchesQuery>;
export type CommodityStockBatchesLazyQueryHookResult = ReturnType<typeof useCommodityStockBatchesLazyQuery>;
export type CommodityStockBatchesQueryResult = Apollo.QueryResult<CommodityStockBatchesQuery, CommodityStockBatchesQueryVariables>;
export const SkuStocksDocument = gql`
    query skuStocks($stockSkuInput: ListSkuStockInput) {
  skuStocks(stockSkuInput: $stockSkuInput) {
    commoditySku {
      categoryId
      categoryName
      commodityId
      commodityName
      commoditySkuId
      commoditySkuName
      commoditySpecOptionId
      commoditySpecOptionName
      availableSkuQuantity {
        businessUnit {
          unitId
          unitName
        }
        unit {
          unitId
          unitName
        }
        conversion
      }
      baseUnit {
        unitId
        unitName
      }
    }
    warehouse {
      warehouseId
      warehouseName
    }
    unit {
      unitId
      unitName
    }
    dynamicQuantity {
      unit {
        unitId
        unitName
      }
      quantity
    }
    quantity
  }
}
    `;

/**
 * __useSkuStocksQuery__
 *
 * To run a query within a React component, call `useSkuStocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkuStocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkuStocksQuery({
 *   variables: {
 *      stockSkuInput: // value for 'stockSkuInput'
 *   },
 * });
 */
export function useSkuStocksQuery(baseOptions?: Apollo.QueryHookOptions<SkuStocksQuery, SkuStocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkuStocksQuery, SkuStocksQueryVariables>(SkuStocksDocument, options);
      }
export function useSkuStocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkuStocksQuery, SkuStocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkuStocksQuery, SkuStocksQueryVariables>(SkuStocksDocument, options);
        }
export type SkuStocksQueryHookResult = ReturnType<typeof useSkuStocksQuery>;
export type SkuStocksLazyQueryHookResult = ReturnType<typeof useSkuStocksLazyQuery>;
export type SkuStocksQueryResult = Apollo.QueryResult<SkuStocksQuery, SkuStocksQueryVariables>;
export const ListFlowLogDocument = gql`
    query listFlowLog($input: ListFlowLogInput) {
  listFlowLog(input: $input) {
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    flowId
    note
    type
    typeDesc
  }
}
    `;

/**
 * __useListFlowLogQuery__
 *
 * To run a query within a React component, call `useListFlowLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFlowLogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFlowLogQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListFlowLogQuery(baseOptions?: Apollo.QueryHookOptions<ListFlowLogQuery, ListFlowLogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListFlowLogQuery, ListFlowLogQueryVariables>(ListFlowLogDocument, options);
      }
export function useListFlowLogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListFlowLogQuery, ListFlowLogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListFlowLogQuery, ListFlowLogQueryVariables>(ListFlowLogDocument, options);
        }
export type ListFlowLogQueryHookResult = ReturnType<typeof useListFlowLogQuery>;
export type ListFlowLogLazyQueryHookResult = ReturnType<typeof useListFlowLogLazyQuery>;
export type ListFlowLogQueryResult = Apollo.QueryResult<ListFlowLogQuery, ListFlowLogQueryVariables>;
export const CountApplyOrderStatusDocument = gql`
    query countApplyOrderStatus($input: CountApplyOrderStatusInput) {
  countApplyOrderStatus(input: $input) {
    count
    status
  }
}
    `;

/**
 * __useCountApplyOrderStatusQuery__
 *
 * To run a query within a React component, call `useCountApplyOrderStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountApplyOrderStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountApplyOrderStatusQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCountApplyOrderStatusQuery(baseOptions?: Apollo.QueryHookOptions<CountApplyOrderStatusQuery, CountApplyOrderStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountApplyOrderStatusQuery, CountApplyOrderStatusQueryVariables>(CountApplyOrderStatusDocument, options);
      }
export function useCountApplyOrderStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountApplyOrderStatusQuery, CountApplyOrderStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountApplyOrderStatusQuery, CountApplyOrderStatusQueryVariables>(CountApplyOrderStatusDocument, options);
        }
export type CountApplyOrderStatusQueryHookResult = ReturnType<typeof useCountApplyOrderStatusQuery>;
export type CountApplyOrderStatusLazyQueryHookResult = ReturnType<typeof useCountApplyOrderStatusLazyQuery>;
export type CountApplyOrderStatusQueryResult = Apollo.QueryResult<CountApplyOrderStatusQuery, CountApplyOrderStatusQueryVariables>;