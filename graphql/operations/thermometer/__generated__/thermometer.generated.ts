import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ThermometerIframeUrlQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ThermometerIframeInput>;
}>;


export type ThermometerIframeUrlQuery = { thermometerIframeUrl?: { __typename?: 'ThermometerIframePayload', iframeUrl?: string } };


export const ThermometerIframeUrlDocument = gql`
    query thermometerIframeUrl($input: ThermometerIframeInput) {
  thermometerIframeUrl(input: $input) {
    iframeUrl
  }
}
    `;

/**
 * __useThermometerIframeUrlQuery__
 *
 * To run a query within a React component, call `useThermometerIframeUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useThermometerIframeUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThermometerIframeUrlQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useThermometerIframeUrlQuery(baseOptions?: Apollo.QueryHookOptions<ThermometerIframeUrlQuery, ThermometerIframeUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ThermometerIframeUrlQuery, ThermometerIframeUrlQueryVariables>(ThermometerIframeUrlDocument, options);
      }
export function useThermometerIframeUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ThermometerIframeUrlQuery, ThermometerIframeUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ThermometerIframeUrlQuery, ThermometerIframeUrlQueryVariables>(ThermometerIframeUrlDocument, options);
        }
export type ThermometerIframeUrlQueryHookResult = ReturnType<typeof useThermometerIframeUrlQuery>;
export type ThermometerIframeUrlLazyQueryHookResult = ReturnType<typeof useThermometerIframeUrlLazyQuery>;
export type ThermometerIframeUrlQueryResult = Apollo.QueryResult<ThermometerIframeUrlQuery, ThermometerIframeUrlQueryVariables>;