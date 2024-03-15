import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {} as const
export type CountPitayaDomesticReceiveTaskQueryVariables = SchemaTypes.Exact<{
  [key: string]: never
}>

export type CountPitayaDomesticReceiveTaskQuery = {
  countPitayaDomesticReceiveTask?: number
}

export type PagePitayaDomesticReceiveTaskQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PagePitayaDomesticReceiveTaskInput
}>

export type PagePitayaDomesticReceiveTaskQuery = {
  pagePitayaDomesticReceiveTask?: {
    __typename?: 'PagePitayaDomesticReceiveTaskPayload'
    pageCurrent?: number
    pageSize?: number
    totalRecords?: number
    records?: Array<{
      __typename?: 'PitayaDomesticReceiveTaskPayload'
      carNo?: string
      departureDate?: number
      domesticReceiveTaskId?: string
      durianBusinessId?: string
      estimatedArrivalDate?: number
      matchData?: number
      runCode?: string
      sopList?: Array<string>
      status?: SchemaTypes.PitayaDomesticReceiveTaskEnum
      statusDesc?: string
      trailerNo?: string
      transportInfo?: string
      belongOrg?: {
        __typename?: 'PitayaOrg'
        orgId?: number
        orgName?: string
      }
      commodities?: Array<{
        __typename?: 'OmsCommonCommodityItem'
        id?: string
        index?: string
        markList?: Array<SchemaTypes.AcquireMarkEnum>
        price?: number
        totalQuantity?: number
        unitQuantity?: number
        commoditySku?: {
          __typename?: 'PitayaCommoditySku'
          categoryId?: number
          categoryName?: string
          commodityId?: number
          commodityName?: string
          commoditySkuId?: number
          commoditySkuName?: string
          commoditySpecOptionId?: Array<number>
          commoditySpecOptionName?: Array<string>
          conversion?: number
          totalType?: {
            __typename?: 'Unit'
            unitId?: number
            unitName?: string
          }
          unitType?: {
            __typename?: 'Unit'
            unitId?: number
            unitName?: string
          }
        }
        priceType?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        totalType?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        unitType?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }>
      supplier?: {
        __typename?: 'Supplier'
        supplierId?: number
        supplierName?: string
      }
    }>
  }
}

export type PitayaDomesticReceiveTaskQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.GetPitayaDomesticReceiveTaskInput
}>

export type PitayaDomesticReceiveTaskQuery = {
  pitayaDomesticReceiveTask?: {
    __typename?: 'PitayaDomesticReceiveTaskPayload'
    carNo?: string
    departureDate?: number
    domesticReceiveTaskId?: string
    durianBusinessId?: string
    estimatedArrivalDate?: number
    matchData?: number
    runCode?: string
    sopList?: Array<string>
    status?: SchemaTypes.PitayaDomesticReceiveTaskEnum
    statusDesc?: string
    trailerNo?: string
    transportInfo?: string
    belongOrg?: { __typename?: 'PitayaOrg'; orgId?: number; orgName?: string }
    commodities?: Array<{
      __typename?: 'OmsCommonCommodityItem'
      id?: string
      index?: string
      markList?: Array<SchemaTypes.AcquireMarkEnum>
      price?: number
      totalQuantity?: number
      unitQuantity?: number
      commoditySku?: {
        __typename?: 'PitayaCommoditySku'
        categoryId?: number
        categoryName?: string
        commodityId?: number
        commodityName?: string
        commoditySkuId?: number
        commoditySkuName?: string
        commoditySpecOptionId?: Array<number>
        commoditySpecOptionName?: Array<string>
        conversion?: number
        totalType?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        unitType?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }
      priceType?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      totalType?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      unitType?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
    }>
    supplier?: {
      __typename?: 'Supplier'
      supplierId?: number
      supplierName?: string
    }
  }
}

export type CompletePitayaDomesticReceiveTaskMutationVariables =
  SchemaTypes.Exact<{
    input: SchemaTypes.CompletePitayaDomesticReceiveTaskInput
  }>

export type CompletePitayaDomesticReceiveTaskMutation = {
  completePitayaDomesticReceiveTask?: boolean
}

export const CountPitayaDomesticReceiveTaskDocument = gql`
  query countPitayaDomesticReceiveTask {
    countPitayaDomesticReceiveTask
  }
`

/**
 * __useCountPitayaDomesticReceiveTaskQuery__
 *
 * To run a query within a React component, call `useCountPitayaDomesticReceiveTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPitayaDomesticReceiveTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPitayaDomesticReceiveTaskQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountPitayaDomesticReceiveTaskQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CountPitayaDomesticReceiveTaskQuery,
    CountPitayaDomesticReceiveTaskQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    CountPitayaDomesticReceiveTaskQuery,
    CountPitayaDomesticReceiveTaskQueryVariables
  >(CountPitayaDomesticReceiveTaskDocument, options)
}
export function useCountPitayaDomesticReceiveTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CountPitayaDomesticReceiveTaskQuery,
    CountPitayaDomesticReceiveTaskQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CountPitayaDomesticReceiveTaskQuery,
    CountPitayaDomesticReceiveTaskQueryVariables
  >(CountPitayaDomesticReceiveTaskDocument, options)
}
export type CountPitayaDomesticReceiveTaskQueryHookResult = ReturnType<
  typeof useCountPitayaDomesticReceiveTaskQuery
>
export type CountPitayaDomesticReceiveTaskLazyQueryHookResult = ReturnType<
  typeof useCountPitayaDomesticReceiveTaskLazyQuery
>
export type CountPitayaDomesticReceiveTaskQueryResult = Apollo.QueryResult<
  CountPitayaDomesticReceiveTaskQuery,
  CountPitayaDomesticReceiveTaskQueryVariables
>
export const PagePitayaDomesticReceiveTaskDocument = gql`
  query pagePitayaDomesticReceiveTask(
    $input: PagePitayaDomesticReceiveTaskInput!
  ) {
    pagePitayaDomesticReceiveTask(input: $input) {
      pageCurrent
      pageSize
      records {
        belongOrg {
          orgId
          orgName
        }
        carNo
        commodities {
          commoditySku {
            categoryId
            categoryName
            commodityId
            commodityName
            commoditySkuId
            commoditySkuName
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
          id
          index
          markList
          price
          priceType {
            unitId
            unitName
          }
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
        departureDate
        domesticReceiveTaskId
        durianBusinessId
        estimatedArrivalDate
        matchData
        runCode
        sopList
        status
        statusDesc
        supplier {
          supplierId
          supplierName
        }
        trailerNo
        transportInfo
      }
      totalRecords
    }
  }
`

/**
 * __usePagePitayaDomesticReceiveTaskQuery__
 *
 * To run a query within a React component, call `usePagePitayaDomesticReceiveTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagePitayaDomesticReceiveTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagePitayaDomesticReceiveTaskQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePagePitayaDomesticReceiveTaskQuery(
  baseOptions: Apollo.QueryHookOptions<
    PagePitayaDomesticReceiveTaskQuery,
    PagePitayaDomesticReceiveTaskQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    PagePitayaDomesticReceiveTaskQuery,
    PagePitayaDomesticReceiveTaskQueryVariables
  >(PagePitayaDomesticReceiveTaskDocument, options)
}
export function usePagePitayaDomesticReceiveTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PagePitayaDomesticReceiveTaskQuery,
    PagePitayaDomesticReceiveTaskQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    PagePitayaDomesticReceiveTaskQuery,
    PagePitayaDomesticReceiveTaskQueryVariables
  >(PagePitayaDomesticReceiveTaskDocument, options)
}
export type PagePitayaDomesticReceiveTaskQueryHookResult = ReturnType<
  typeof usePagePitayaDomesticReceiveTaskQuery
>
export type PagePitayaDomesticReceiveTaskLazyQueryHookResult = ReturnType<
  typeof usePagePitayaDomesticReceiveTaskLazyQuery
>
export type PagePitayaDomesticReceiveTaskQueryResult = Apollo.QueryResult<
  PagePitayaDomesticReceiveTaskQuery,
  PagePitayaDomesticReceiveTaskQueryVariables
>
export const PitayaDomesticReceiveTaskDocument = gql`
  query pitayaDomesticReceiveTask($input: GetPitayaDomesticReceiveTaskInput!) {
    pitayaDomesticReceiveTask(input: $input) {
      belongOrg {
        orgId
        orgName
      }
      carNo
      commodities {
        commoditySku {
          categoryId
          categoryName
          commodityId
          commodityName
          commoditySkuId
          commoditySkuName
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
        id
        index
        markList
        price
        priceType {
          unitId
          unitName
        }
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
      departureDate
      domesticReceiveTaskId
      durianBusinessId
      estimatedArrivalDate
      matchData
      runCode
      sopList
      status
      statusDesc
      supplier {
        supplierId
        supplierName
      }
      trailerNo
      transportInfo
    }
  }
`

/**
 * __usePitayaDomesticReceiveTaskQuery__
 *
 * To run a query within a React component, call `usePitayaDomesticReceiveTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaDomesticReceiveTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaDomesticReceiveTaskQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaDomesticReceiveTaskQuery(
  baseOptions: Apollo.QueryHookOptions<
    PitayaDomesticReceiveTaskQuery,
    PitayaDomesticReceiveTaskQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    PitayaDomesticReceiveTaskQuery,
    PitayaDomesticReceiveTaskQueryVariables
  >(PitayaDomesticReceiveTaskDocument, options)
}
export function usePitayaDomesticReceiveTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PitayaDomesticReceiveTaskQuery,
    PitayaDomesticReceiveTaskQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    PitayaDomesticReceiveTaskQuery,
    PitayaDomesticReceiveTaskQueryVariables
  >(PitayaDomesticReceiveTaskDocument, options)
}
export type PitayaDomesticReceiveTaskQueryHookResult = ReturnType<
  typeof usePitayaDomesticReceiveTaskQuery
>
export type PitayaDomesticReceiveTaskLazyQueryHookResult = ReturnType<
  typeof usePitayaDomesticReceiveTaskLazyQuery
>
export type PitayaDomesticReceiveTaskQueryResult = Apollo.QueryResult<
  PitayaDomesticReceiveTaskQuery,
  PitayaDomesticReceiveTaskQueryVariables
>
export const CompletePitayaDomesticReceiveTaskDocument = gql`
  mutation completePitayaDomesticReceiveTask(
    $input: CompletePitayaDomesticReceiveTaskInput!
  ) {
    completePitayaDomesticReceiveTask(input: $input)
  }
`
export type CompletePitayaDomesticReceiveTaskMutationFn =
  Apollo.MutationFunction<
    CompletePitayaDomesticReceiveTaskMutation,
    CompletePitayaDomesticReceiveTaskMutationVariables
  >

/**
 * __useCompletePitayaDomesticReceiveTaskMutation__
 *
 * To run a mutation, you first call `useCompletePitayaDomesticReceiveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompletePitayaDomesticReceiveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completePitayaDomesticReceiveTaskMutation, { data, loading, error }] = useCompletePitayaDomesticReceiveTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCompletePitayaDomesticReceiveTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CompletePitayaDomesticReceiveTaskMutation,
    CompletePitayaDomesticReceiveTaskMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CompletePitayaDomesticReceiveTaskMutation,
    CompletePitayaDomesticReceiveTaskMutationVariables
  >(CompletePitayaDomesticReceiveTaskDocument, options)
}
export type CompletePitayaDomesticReceiveTaskMutationHookResult = ReturnType<
  typeof useCompletePitayaDomesticReceiveTaskMutation
>
export type CompletePitayaDomesticReceiveTaskMutationResult =
  Apollo.MutationResult<CompletePitayaDomesticReceiveTaskMutation>
export type CompletePitayaDomesticReceiveTaskMutationOptions =
  Apollo.BaseMutationOptions<
    CompletePitayaDomesticReceiveTaskMutation,
    CompletePitayaDomesticReceiveTaskMutationVariables
  >
