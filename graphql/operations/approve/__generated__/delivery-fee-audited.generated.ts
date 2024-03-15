import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CountAllStatusDeliveryFeeQueryVariables = SchemaTypes.Exact<{
  countBillStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.CountBillStatusInput>;
}>;


export type CountAllStatusDeliveryFeeQuery = { countAllStatusDeliveryFee?: Array<{ __typename?: 'CountBillStatusPayload', billMainType?: SchemaTypes.BillMainTypeEnum, billStatusNumberList?: Array<{ __typename?: 'BillStatusNumber', number?: number, status?: SchemaTypes.PitayaBillStatusEnum }> }> };


export const CountAllStatusDeliveryFeeDocument = gql`
    query countAllStatusDeliveryFee($countBillStatusInput: CountBillStatusInput) {
  countAllStatusDeliveryFee(countBillStatusInput: $countBillStatusInput) {
    billMainType
    billStatusNumberList {
      number
      status
    }
  }
}
    `;

/**
 * __useCountAllStatusDeliveryFeeQuery__
 *
 * To run a query within a React component, call `useCountAllStatusDeliveryFeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountAllStatusDeliveryFeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountAllStatusDeliveryFeeQuery({
 *   variables: {
 *      countBillStatusInput: // value for 'countBillStatusInput'
 *   },
 * });
 */
export function useCountAllStatusDeliveryFeeQuery(baseOptions?: Apollo.QueryHookOptions<CountAllStatusDeliveryFeeQuery, CountAllStatusDeliveryFeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountAllStatusDeliveryFeeQuery, CountAllStatusDeliveryFeeQueryVariables>(CountAllStatusDeliveryFeeDocument, options);
      }
export function useCountAllStatusDeliveryFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountAllStatusDeliveryFeeQuery, CountAllStatusDeliveryFeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountAllStatusDeliveryFeeQuery, CountAllStatusDeliveryFeeQueryVariables>(CountAllStatusDeliveryFeeDocument, options);
        }
export type CountAllStatusDeliveryFeeQueryHookResult = ReturnType<typeof useCountAllStatusDeliveryFeeQuery>;
export type CountAllStatusDeliveryFeeLazyQueryHookResult = ReturnType<typeof useCountAllStatusDeliveryFeeLazyQuery>;
export type CountAllStatusDeliveryFeeQueryResult = Apollo.QueryResult<CountAllStatusDeliveryFeeQuery, CountAllStatusDeliveryFeeQueryVariables>;