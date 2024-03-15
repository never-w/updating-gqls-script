import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageStockQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  stockConditionInput?: SchemaTypes.InputMaybe<SchemaTypes.StockConditionInput>;
}>;


export type PageStockQuery = { pageStock?: { __typename?: 'StockPageResultPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'StockPayload', commoditySkuId?: number, commodityTypeId?: number, commodityName?: string, batchCode?: string, unitQuantity?: number, unitTypeName?: string, totalQuantity?: number, totalTypeName?: string, belongType?: number, belongId?: number, belongName?: string, warehouseName?: string, specOptionList?: Array<string>, createTime?: number, inTime?: number, commodityStatus?: number, displayBelongName?: string }> } };


export const PageStockDocument = gql`
    query pageStock($page: Page, $stockConditionInput: StockConditionInput) {
  pageStock(page: $page, stockConditionInput: $stockConditionInput) {
    records {
      commoditySkuId
      commodityTypeId
      commodityName
      batchCode
      unitQuantity
      unitTypeName
      totalQuantity
      totalTypeName
      belongType
      belongId
      belongName
      warehouseName
      specOptionList
      createTime
      inTime
      commodityStatus
      displayBelongName
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageStockQuery__
 *
 * To run a query within a React component, call `usePageStockQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageStockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageStockQuery({
 *   variables: {
 *      page: // value for 'page'
 *      stockConditionInput: // value for 'stockConditionInput'
 *   },
 * });
 */
export function usePageStockQuery(baseOptions?: Apollo.QueryHookOptions<PageStockQuery, PageStockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageStockQuery, PageStockQueryVariables>(PageStockDocument, options);
      }
export function usePageStockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageStockQuery, PageStockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageStockQuery, PageStockQueryVariables>(PageStockDocument, options);
        }
export type PageStockQueryHookResult = ReturnType<typeof usePageStockQuery>;
export type PageStockLazyQueryHookResult = ReturnType<typeof usePageStockLazyQuery>;
export type PageStockQueryResult = Apollo.QueryResult<PageStockQuery, PageStockQueryVariables>;