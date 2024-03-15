import type * as SchemaTypes from '../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FlowSubmitInOrderMutationVariables = SchemaTypes.Exact<{
  inOrderId: SchemaTypes.Scalars['ID'];
}>;


export type FlowSubmitInOrderMutation = { submitInOrder?: string };

export type FlowCancelInOrderMutationVariables = SchemaTypes.Exact<{
  cancelInOrderInput: SchemaTypes.CancelInOrderInput;
}>;


export type FlowCancelInOrderMutation = { cancelInOrder?: string };

export type FlowRejectedInOrderAuditMutationVariables = SchemaTypes.Exact<{
  rejectedInput?: SchemaTypes.InputMaybe<SchemaTypes.RejectedInput>;
}>;


export type FlowRejectedInOrderAuditMutation = { rejectedInOrderAudit?: boolean };

export type FlowSubmitOutOrderMutationVariables = SchemaTypes.Exact<{
  outOrderId: SchemaTypes.Scalars['ID'];
}>;


export type FlowSubmitOutOrderMutation = { submitOutOrder?: boolean };

export type FlowCancelOutOrderMutationVariables = SchemaTypes.Exact<{
  cancelOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelOutOrderInput>;
}>;


export type FlowCancelOutOrderMutation = { cancelOutOrder?: boolean };

export type FlowListLogsQueryVariables = SchemaTypes.Exact<{
  listLogsInput?: SchemaTypes.InputMaybe<SchemaTypes.ListLogsInput>;
}>;


export type FlowListLogsQuery = { listLogs?: { __typename?: 'ListLogsPayload', flowLog?: Array<{ __typename?: 'FlowLog', typeName?: string, note?: string, createTime?: number, createUserName?: string, flowId?: string }> } };


export const FlowSubmitInOrderDocument = gql`
    mutation flowSubmitInOrder($inOrderId: ID!) {
  submitInOrder(inOrderId: $inOrderId)
}
    `;
export type FlowSubmitInOrderMutationFn = Apollo.MutationFunction<FlowSubmitInOrderMutation, FlowSubmitInOrderMutationVariables>;

/**
 * __useFlowSubmitInOrderMutation__
 *
 * To run a mutation, you first call `useFlowSubmitInOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFlowSubmitInOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [flowSubmitInOrderMutation, { data, loading, error }] = useFlowSubmitInOrderMutation({
 *   variables: {
 *      inOrderId: // value for 'inOrderId'
 *   },
 * });
 */
export function useFlowSubmitInOrderMutation(baseOptions?: Apollo.MutationHookOptions<FlowSubmitInOrderMutation, FlowSubmitInOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FlowSubmitInOrderMutation, FlowSubmitInOrderMutationVariables>(FlowSubmitInOrderDocument, options);
      }
export type FlowSubmitInOrderMutationHookResult = ReturnType<typeof useFlowSubmitInOrderMutation>;
export type FlowSubmitInOrderMutationResult = Apollo.MutationResult<FlowSubmitInOrderMutation>;
export type FlowSubmitInOrderMutationOptions = Apollo.BaseMutationOptions<FlowSubmitInOrderMutation, FlowSubmitInOrderMutationVariables>;
export const FlowCancelInOrderDocument = gql`
    mutation flowCancelInOrder($cancelInOrderInput: CancelInOrderInput!) {
  cancelInOrder(cancelInOrderInput: $cancelInOrderInput)
}
    `;
export type FlowCancelInOrderMutationFn = Apollo.MutationFunction<FlowCancelInOrderMutation, FlowCancelInOrderMutationVariables>;

/**
 * __useFlowCancelInOrderMutation__
 *
 * To run a mutation, you first call `useFlowCancelInOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFlowCancelInOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [flowCancelInOrderMutation, { data, loading, error }] = useFlowCancelInOrderMutation({
 *   variables: {
 *      cancelInOrderInput: // value for 'cancelInOrderInput'
 *   },
 * });
 */
export function useFlowCancelInOrderMutation(baseOptions?: Apollo.MutationHookOptions<FlowCancelInOrderMutation, FlowCancelInOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FlowCancelInOrderMutation, FlowCancelInOrderMutationVariables>(FlowCancelInOrderDocument, options);
      }
export type FlowCancelInOrderMutationHookResult = ReturnType<typeof useFlowCancelInOrderMutation>;
export type FlowCancelInOrderMutationResult = Apollo.MutationResult<FlowCancelInOrderMutation>;
export type FlowCancelInOrderMutationOptions = Apollo.BaseMutationOptions<FlowCancelInOrderMutation, FlowCancelInOrderMutationVariables>;
export const FlowRejectedInOrderAuditDocument = gql`
    mutation flowRejectedInOrderAudit($rejectedInput: RejectedInput) {
  rejectedInOrderAudit(rejectedInput: $rejectedInput)
}
    `;
export type FlowRejectedInOrderAuditMutationFn = Apollo.MutationFunction<FlowRejectedInOrderAuditMutation, FlowRejectedInOrderAuditMutationVariables>;

/**
 * __useFlowRejectedInOrderAuditMutation__
 *
 * To run a mutation, you first call `useFlowRejectedInOrderAuditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFlowRejectedInOrderAuditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [flowRejectedInOrderAuditMutation, { data, loading, error }] = useFlowRejectedInOrderAuditMutation({
 *   variables: {
 *      rejectedInput: // value for 'rejectedInput'
 *   },
 * });
 */
export function useFlowRejectedInOrderAuditMutation(baseOptions?: Apollo.MutationHookOptions<FlowRejectedInOrderAuditMutation, FlowRejectedInOrderAuditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FlowRejectedInOrderAuditMutation, FlowRejectedInOrderAuditMutationVariables>(FlowRejectedInOrderAuditDocument, options);
      }
export type FlowRejectedInOrderAuditMutationHookResult = ReturnType<typeof useFlowRejectedInOrderAuditMutation>;
export type FlowRejectedInOrderAuditMutationResult = Apollo.MutationResult<FlowRejectedInOrderAuditMutation>;
export type FlowRejectedInOrderAuditMutationOptions = Apollo.BaseMutationOptions<FlowRejectedInOrderAuditMutation, FlowRejectedInOrderAuditMutationVariables>;
export const FlowSubmitOutOrderDocument = gql`
    mutation flowSubmitOutOrder($outOrderId: ID!) {
  submitOutOrder(outOrderId: $outOrderId)
}
    `;
export type FlowSubmitOutOrderMutationFn = Apollo.MutationFunction<FlowSubmitOutOrderMutation, FlowSubmitOutOrderMutationVariables>;

/**
 * __useFlowSubmitOutOrderMutation__
 *
 * To run a mutation, you first call `useFlowSubmitOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFlowSubmitOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [flowSubmitOutOrderMutation, { data, loading, error }] = useFlowSubmitOutOrderMutation({
 *   variables: {
 *      outOrderId: // value for 'outOrderId'
 *   },
 * });
 */
export function useFlowSubmitOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<FlowSubmitOutOrderMutation, FlowSubmitOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FlowSubmitOutOrderMutation, FlowSubmitOutOrderMutationVariables>(FlowSubmitOutOrderDocument, options);
      }
export type FlowSubmitOutOrderMutationHookResult = ReturnType<typeof useFlowSubmitOutOrderMutation>;
export type FlowSubmitOutOrderMutationResult = Apollo.MutationResult<FlowSubmitOutOrderMutation>;
export type FlowSubmitOutOrderMutationOptions = Apollo.BaseMutationOptions<FlowSubmitOutOrderMutation, FlowSubmitOutOrderMutationVariables>;
export const FlowCancelOutOrderDocument = gql`
    mutation flowCancelOutOrder($cancelOutOrderInput: CancelOutOrderInput) {
  cancelOutOrder(cancelOutOrderInput: $cancelOutOrderInput)
}
    `;
export type FlowCancelOutOrderMutationFn = Apollo.MutationFunction<FlowCancelOutOrderMutation, FlowCancelOutOrderMutationVariables>;

/**
 * __useFlowCancelOutOrderMutation__
 *
 * To run a mutation, you first call `useFlowCancelOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFlowCancelOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [flowCancelOutOrderMutation, { data, loading, error }] = useFlowCancelOutOrderMutation({
 *   variables: {
 *      cancelOutOrderInput: // value for 'cancelOutOrderInput'
 *   },
 * });
 */
export function useFlowCancelOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<FlowCancelOutOrderMutation, FlowCancelOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FlowCancelOutOrderMutation, FlowCancelOutOrderMutationVariables>(FlowCancelOutOrderDocument, options);
      }
export type FlowCancelOutOrderMutationHookResult = ReturnType<typeof useFlowCancelOutOrderMutation>;
export type FlowCancelOutOrderMutationResult = Apollo.MutationResult<FlowCancelOutOrderMutation>;
export type FlowCancelOutOrderMutationOptions = Apollo.BaseMutationOptions<FlowCancelOutOrderMutation, FlowCancelOutOrderMutationVariables>;
export const FlowListLogsDocument = gql`
    query flowListLogs($listLogsInput: ListLogsInput) {
  listLogs(listLogsInput: $listLogsInput) {
    flowLog {
      typeName
      note
      createTime
      createUserName
      flowId
    }
  }
}
    `;

/**
 * __useFlowListLogsQuery__
 *
 * To run a query within a React component, call `useFlowListLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlowListLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlowListLogsQuery({
 *   variables: {
 *      listLogsInput: // value for 'listLogsInput'
 *   },
 * });
 */
export function useFlowListLogsQuery(baseOptions?: Apollo.QueryHookOptions<FlowListLogsQuery, FlowListLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlowListLogsQuery, FlowListLogsQueryVariables>(FlowListLogsDocument, options);
      }
export function useFlowListLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlowListLogsQuery, FlowListLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlowListLogsQuery, FlowListLogsQueryVariables>(FlowListLogsDocument, options);
        }
export type FlowListLogsQueryHookResult = ReturnType<typeof useFlowListLogsQuery>;
export type FlowListLogsLazyQueryHookResult = ReturnType<typeof useFlowListLogsLazyQuery>;
export type FlowListLogsQueryResult = Apollo.QueryResult<FlowListLogsQuery, FlowListLogsQueryVariables>;