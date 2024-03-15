import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {} as const
export type CostOrderStatusStatisticQueryVariables = SchemaTypes.Exact<{
  [key: string]: never
}>

export type CostOrderStatusStatisticQuery = {
  costOrderStatusStatistic?: {
    __typename?: 'CostOrderStatusStatisticPayload'
    all?: number
    rawMaterial?: number
    assist?: number
  }
}

export const CostOrderStatusStatisticDocument = gql`
  query costOrderStatusStatistic {
    costOrderStatusStatistic {
      all
      rawMaterial
      assist
    }
  }
`

/**
 * __useCostOrderStatusStatisticQuery__
 *
 * To run a query within a React component, call `useCostOrderStatusStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useCostOrderStatusStatisticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCostOrderStatusStatisticQuery({
 *   variables: {
 *   },
 * });
 */
export function useCostOrderStatusStatisticQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CostOrderStatusStatisticQuery,
    CostOrderStatusStatisticQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    CostOrderStatusStatisticQuery,
    CostOrderStatusStatisticQueryVariables
  >(CostOrderStatusStatisticDocument, options)
}
export function useCostOrderStatusStatisticLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CostOrderStatusStatisticQuery,
    CostOrderStatusStatisticQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CostOrderStatusStatisticQuery,
    CostOrderStatusStatisticQueryVariables
  >(CostOrderStatusStatisticDocument, options)
}
export type CostOrderStatusStatisticQueryHookResult = ReturnType<
  typeof useCostOrderStatusStatisticQuery
>
export type CostOrderStatusStatisticLazyQueryHookResult = ReturnType<
  typeof useCostOrderStatusStatisticLazyQuery
>
export type CostOrderStatusStatisticQueryResult = Apollo.QueryResult<
  CostOrderStatusStatisticQuery,
  CostOrderStatusStatisticQueryVariables
>
