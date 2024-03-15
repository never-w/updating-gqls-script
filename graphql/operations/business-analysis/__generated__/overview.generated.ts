import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ListOrgChannelQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListOrgChannelQuery = { listOrgChannel?: Array<{ __typename?: 'Option', label?: string, value?: number }> };

export type GetOverviewDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.OverviewDetailInput>;
}>;


export type GetOverviewDetailQuery = { getOverviewDetail?: { __typename?: 'OverviewPayload', createType?: number, createTypeName?: string, customerName?: string, planStatusName?: string, productionTypeNum?: number, completedNumSum?: number, expectNumSum?: number, expectSaleNumSum?: number, outStockNumSum?: number, createUserName?: string, createTime?: number, customerDistributionName?: string, planId?: string, overviewDetail?: Array<{ __typename?: 'OverviewDetailPayload', commodityTypeId?: number, commodityName?: string, commoditySpecOptionName?: string, expectSaleNum?: number, completedNum?: number, expectNum?: number, outStockNum?: number, leaderName?: string, line?: string, totalTypeName?: string }> } };

export type OverviewStatusOptionQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.OverviewStatusInput>;
}>;


export type OverviewStatusOptionQuery = { overviewStatusOption?: { __typename?: 'OverviewStatusPayload', pendingReviewNum?: number, processingNum?: number, completedNum?: number } };

export type ListBusinessControlQueryVariables = SchemaTypes.Exact<{
  listBusinessControlInput?: SchemaTypes.InputMaybe<SchemaTypes.ListBusinessControlInput>;
}>;


export type ListBusinessControlQuery = { listBusinessControl?: Array<{ __typename?: 'BusinessControlPayload', completedNumSum?: number, expectNumSum?: number, expectSalePrice?: number, finishDeliveryNumSum?: number, platformNum?: number, receivedNumSum?: number, returnedNumSum?: number, waitForDeliveryNumSum?: number, labelId?: number, labelName?: string, realSalePrice?: number, selfPickedNumSum?: number, waitSelfPickNumSum?: number, channelDetail?: Array<{ __typename?: 'ChannelDetailPayload', completedNum?: number, expectNum?: number, finishDeliveryNum?: number, receivedNum?: number, returnedNum?: number, saleOrderType?: SchemaTypes.AllBusinessType, waitForDeliveryNum?: number, saleOrderTypeName?: string, selfPickedNumSum?: number, waitSelfPickNumSum?: number }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> };

export type PageBusinessOverviewQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageBusinessOverviewInput?: SchemaTypes.InputMaybe<SchemaTypes.PageBusinessOverviewInput>;
}>;


export type PageBusinessOverviewQuery = { pageBusinessOverview?: { __typename?: 'PageBusinessOverviewPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'BusinessOverviewPayload', finishDeliveryNumSum?: number, receivedNumSum?: number, returnedNumSum?: number, saleOrderStatus?: number, saleOrderStatusName?: string, saleOrderType?: SchemaTypes.AllBusinessType, saleOrderTypeName?: string, salePrice?: number, saleQuantity?: number, submitTime?: number, waitForDeliveryNumSum?: number, selfPickedNumSum?: number, waitSelfPickNumSum?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, submitUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, saleOrderItems?: Array<{ __typename?: 'SaleOrderItem', priceQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> } };


export const ListOrgChannelDocument = gql`
    query listOrgChannel {
  listOrgChannel {
    label
    value
  }
}
    `;

/**
 * __useListOrgChannelQuery__
 *
 * To run a query within a React component, call `useListOrgChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOrgChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOrgChannelQuery({
 *   variables: {
 *   },
 * });
 */
export function useListOrgChannelQuery(baseOptions?: Apollo.QueryHookOptions<ListOrgChannelQuery, ListOrgChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListOrgChannelQuery, ListOrgChannelQueryVariables>(ListOrgChannelDocument, options);
      }
export function useListOrgChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListOrgChannelQuery, ListOrgChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListOrgChannelQuery, ListOrgChannelQueryVariables>(ListOrgChannelDocument, options);
        }
export type ListOrgChannelQueryHookResult = ReturnType<typeof useListOrgChannelQuery>;
export type ListOrgChannelLazyQueryHookResult = ReturnType<typeof useListOrgChannelLazyQuery>;
export type ListOrgChannelQueryResult = Apollo.QueryResult<ListOrgChannelQuery, ListOrgChannelQueryVariables>;
export const GetOverviewDetailDocument = gql`
    query getOverviewDetail($input: OverviewDetailInput) {
  getOverviewDetail(input: $input) {
    createType
    createTypeName
    customerName
    planStatusName
    createTypeName
    productionTypeNum
    completedNumSum
    expectNumSum
    expectSaleNumSum
    outStockNumSum
    createUserName
    createTime
    customerDistributionName
    planId
    overviewDetail {
      commodityTypeId
      commodityName
      commoditySpecOptionName
      expectSaleNum
      completedNum
      expectNum
      outStockNum
      leaderName
      line
      totalTypeName
    }
  }
}
    `;

/**
 * __useGetOverviewDetailQuery__
 *
 * To run a query within a React component, call `useGetOverviewDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOverviewDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOverviewDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOverviewDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetOverviewDetailQuery, GetOverviewDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOverviewDetailQuery, GetOverviewDetailQueryVariables>(GetOverviewDetailDocument, options);
      }
export function useGetOverviewDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOverviewDetailQuery, GetOverviewDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOverviewDetailQuery, GetOverviewDetailQueryVariables>(GetOverviewDetailDocument, options);
        }
export type GetOverviewDetailQueryHookResult = ReturnType<typeof useGetOverviewDetailQuery>;
export type GetOverviewDetailLazyQueryHookResult = ReturnType<typeof useGetOverviewDetailLazyQuery>;
export type GetOverviewDetailQueryResult = Apollo.QueryResult<GetOverviewDetailQuery, GetOverviewDetailQueryVariables>;
export const OverviewStatusOptionDocument = gql`
    query overviewStatusOption($input: OverviewStatusInput) {
  overviewStatusOption(input: $input) {
    pendingReviewNum
    processingNum
    completedNum
  }
}
    `;

/**
 * __useOverviewStatusOptionQuery__
 *
 * To run a query within a React component, call `useOverviewStatusOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useOverviewStatusOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOverviewStatusOptionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOverviewStatusOptionQuery(baseOptions?: Apollo.QueryHookOptions<OverviewStatusOptionQuery, OverviewStatusOptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OverviewStatusOptionQuery, OverviewStatusOptionQueryVariables>(OverviewStatusOptionDocument, options);
      }
export function useOverviewStatusOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OverviewStatusOptionQuery, OverviewStatusOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OverviewStatusOptionQuery, OverviewStatusOptionQueryVariables>(OverviewStatusOptionDocument, options);
        }
export type OverviewStatusOptionQueryHookResult = ReturnType<typeof useOverviewStatusOptionQuery>;
export type OverviewStatusOptionLazyQueryHookResult = ReturnType<typeof useOverviewStatusOptionLazyQuery>;
export type OverviewStatusOptionQueryResult = Apollo.QueryResult<OverviewStatusOptionQuery, OverviewStatusOptionQueryVariables>;
export const ListBusinessControlDocument = gql`
    query listBusinessControl($listBusinessControlInput: ListBusinessControlInput) {
  listBusinessControl(listBusinessControlInput: $listBusinessControlInput) {
    channelDetail {
      completedNum
      expectNum
      finishDeliveryNum
      receivedNum
      returnedNum
      saleOrderType
      waitForDeliveryNum
      saleOrderTypeName
      selfPickedNumSum
      waitSelfPickNumSum
    }
    completedNumSum
    expectNumSum
    expectSalePrice
    finishDeliveryNumSum
    platformNum
    receivedNumSum
    returnedNumSum
    waitForDeliveryNumSum
    labelId
    labelName
    belongOrg {
      orgId
      orgName
    }
    realSalePrice
    selfPickedNumSum
    waitSelfPickNumSum
  }
}
    `;

/**
 * __useListBusinessControlQuery__
 *
 * To run a query within a React component, call `useListBusinessControlQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBusinessControlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBusinessControlQuery({
 *   variables: {
 *      listBusinessControlInput: // value for 'listBusinessControlInput'
 *   },
 * });
 */
export function useListBusinessControlQuery(baseOptions?: Apollo.QueryHookOptions<ListBusinessControlQuery, ListBusinessControlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBusinessControlQuery, ListBusinessControlQueryVariables>(ListBusinessControlDocument, options);
      }
export function useListBusinessControlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBusinessControlQuery, ListBusinessControlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBusinessControlQuery, ListBusinessControlQueryVariables>(ListBusinessControlDocument, options);
        }
export type ListBusinessControlQueryHookResult = ReturnType<typeof useListBusinessControlQuery>;
export type ListBusinessControlLazyQueryHookResult = ReturnType<typeof useListBusinessControlLazyQuery>;
export type ListBusinessControlQueryResult = Apollo.QueryResult<ListBusinessControlQuery, ListBusinessControlQueryVariables>;
export const PageBusinessOverviewDocument = gql`
    query pageBusinessOverview($page: Page, $pageBusinessOverviewInput: PageBusinessOverviewInput) {
  pageBusinessOverview(
    page: $page
    pageBusinessOverviewInput: $pageBusinessOverviewInput
  ) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      customerBelongInfo {
        customerId
        customerName
        customerType
      }
      submitUser {
        phoneNum
        userId
        userName
      }
      finishDeliveryNumSum
      receivedNumSum
      returnedNumSum
      saleOrderItems {
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
        priceType {
          unitId
          unitName
        }
        priceQuantity
      }
      saleOrderStatus
      saleOrderStatusName
      saleOrderType
      saleOrderTypeName
      salePrice
      saleQuantity
      submitTime
      waitForDeliveryNumSum
      selfPickedNumSum
      waitSelfPickNumSum
    }
    totalRecords
  }
}
    `;

/**
 * __usePageBusinessOverviewQuery__
 *
 * To run a query within a React component, call `usePageBusinessOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageBusinessOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageBusinessOverviewQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageBusinessOverviewInput: // value for 'pageBusinessOverviewInput'
 *   },
 * });
 */
export function usePageBusinessOverviewQuery(baseOptions?: Apollo.QueryHookOptions<PageBusinessOverviewQuery, PageBusinessOverviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageBusinessOverviewQuery, PageBusinessOverviewQueryVariables>(PageBusinessOverviewDocument, options);
      }
export function usePageBusinessOverviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageBusinessOverviewQuery, PageBusinessOverviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageBusinessOverviewQuery, PageBusinessOverviewQueryVariables>(PageBusinessOverviewDocument, options);
        }
export type PageBusinessOverviewQueryHookResult = ReturnType<typeof usePageBusinessOverviewQuery>;
export type PageBusinessOverviewLazyQueryHookResult = ReturnType<typeof usePageBusinessOverviewLazyQuery>;
export type PageBusinessOverviewQueryResult = Apollo.QueryResult<PageBusinessOverviewQuery, PageBusinessOverviewQueryVariables>;