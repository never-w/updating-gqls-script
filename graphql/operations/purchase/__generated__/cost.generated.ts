import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateCostOrderMutationVariables = SchemaTypes.Exact<{
  updateCostOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateCostOrderInput>;
}>;


export type UpdateCostOrderMutation = { updateCostOrder?: string };

export type UpdateCostStatusMutationVariables = SchemaTypes.Exact<{
  updateCostStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateCostStatusInput>;
}>;


export type UpdateCostStatusMutation = { updateCostStatus?: boolean };

export type StatusGroupCountQueryVariables = SchemaTypes.Exact<{
  statusGroupCountInput?: SchemaTypes.InputMaybe<SchemaTypes.StatusGroupCountInput>;
}>;


export type StatusGroupCountQuery = { statusGroupCount?: Array<{ __typename?: 'StatusGroupCountPayload', billStatus?: SchemaTypes.PitayaBillStatusEnum, number?: number, billMainType?: SchemaTypes.BillMainTypeEnum }> };

export type UpdateManualCodeMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.UpdateManualCodeInput>;
}>;


export type UpdateManualCodeMutation = { updateManualCode?: boolean };


export const UpdateCostOrderDocument = gql`
    mutation updateCostOrder($updateCostOrderInput: UpdateCostOrderInput) {
  updateCostOrder(updateCostOrderInput: $updateCostOrderInput)
}
    `;
export type UpdateCostOrderMutationFn = Apollo.MutationFunction<UpdateCostOrderMutation, UpdateCostOrderMutationVariables>;

/**
 * __useUpdateCostOrderMutation__
 *
 * To run a mutation, you first call `useUpdateCostOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCostOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCostOrderMutation, { data, loading, error }] = useUpdateCostOrderMutation({
 *   variables: {
 *      updateCostOrderInput: // value for 'updateCostOrderInput'
 *   },
 * });
 */
export function useUpdateCostOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCostOrderMutation, UpdateCostOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCostOrderMutation, UpdateCostOrderMutationVariables>(UpdateCostOrderDocument, options);
      }
export type UpdateCostOrderMutationHookResult = ReturnType<typeof useUpdateCostOrderMutation>;
export type UpdateCostOrderMutationResult = Apollo.MutationResult<UpdateCostOrderMutation>;
export type UpdateCostOrderMutationOptions = Apollo.BaseMutationOptions<UpdateCostOrderMutation, UpdateCostOrderMutationVariables>;
export const UpdateCostStatusDocument = gql`
    mutation updateCostStatus($updateCostStatusInput: UpdateCostStatusInput) {
  updateCostStatus(updateCostStatusInput: $updateCostStatusInput)
}
    `;
export type UpdateCostStatusMutationFn = Apollo.MutationFunction<UpdateCostStatusMutation, UpdateCostStatusMutationVariables>;

/**
 * __useUpdateCostStatusMutation__
 *
 * To run a mutation, you first call `useUpdateCostStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCostStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCostStatusMutation, { data, loading, error }] = useUpdateCostStatusMutation({
 *   variables: {
 *      updateCostStatusInput: // value for 'updateCostStatusInput'
 *   },
 * });
 */
export function useUpdateCostStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCostStatusMutation, UpdateCostStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCostStatusMutation, UpdateCostStatusMutationVariables>(UpdateCostStatusDocument, options);
      }
export type UpdateCostStatusMutationHookResult = ReturnType<typeof useUpdateCostStatusMutation>;
export type UpdateCostStatusMutationResult = Apollo.MutationResult<UpdateCostStatusMutation>;
export type UpdateCostStatusMutationOptions = Apollo.BaseMutationOptions<UpdateCostStatusMutation, UpdateCostStatusMutationVariables>;
export const StatusGroupCountDocument = gql`
    query statusGroupCount($statusGroupCountInput: StatusGroupCountInput) {
  statusGroupCount(statusGroupCountInput: $statusGroupCountInput) {
    billStatus
    number
    billMainType
  }
}
    `;

/**
 * __useStatusGroupCountQuery__
 *
 * To run a query within a React component, call `useStatusGroupCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatusGroupCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatusGroupCountQuery({
 *   variables: {
 *      statusGroupCountInput: // value for 'statusGroupCountInput'
 *   },
 * });
 */
export function useStatusGroupCountQuery(baseOptions?: Apollo.QueryHookOptions<StatusGroupCountQuery, StatusGroupCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StatusGroupCountQuery, StatusGroupCountQueryVariables>(StatusGroupCountDocument, options);
      }
export function useStatusGroupCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatusGroupCountQuery, StatusGroupCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StatusGroupCountQuery, StatusGroupCountQueryVariables>(StatusGroupCountDocument, options);
        }
export type StatusGroupCountQueryHookResult = ReturnType<typeof useStatusGroupCountQuery>;
export type StatusGroupCountLazyQueryHookResult = ReturnType<typeof useStatusGroupCountLazyQuery>;
export type StatusGroupCountQueryResult = Apollo.QueryResult<StatusGroupCountQuery, StatusGroupCountQueryVariables>;
export const UpdateManualCodeDocument = gql`
    mutation updateManualCode($input: UpdateManualCodeInput) {
  updateManualCode(input: $input)
}
    `;
export type UpdateManualCodeMutationFn = Apollo.MutationFunction<UpdateManualCodeMutation, UpdateManualCodeMutationVariables>;

/**
 * __useUpdateManualCodeMutation__
 *
 * To run a mutation, you first call `useUpdateManualCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManualCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManualCodeMutation, { data, loading, error }] = useUpdateManualCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateManualCodeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManualCodeMutation, UpdateManualCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManualCodeMutation, UpdateManualCodeMutationVariables>(UpdateManualCodeDocument, options);
      }
export type UpdateManualCodeMutationHookResult = ReturnType<typeof useUpdateManualCodeMutation>;
export type UpdateManualCodeMutationResult = Apollo.MutationResult<UpdateManualCodeMutation>;
export type UpdateManualCodeMutationOptions = Apollo.BaseMutationOptions<UpdateManualCodeMutation, UpdateManualCodeMutationVariables>;