import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetWorkerSalaryQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type GetWorkerSalaryQuery = { getWorkerSalary?: Array<{ __typename?: 'ProductionConfigPayload', id?: number, configCode?: number, orgId?: number, createTime?: number, updateTime?: number, createBy?: number, updateBy?: number, configValue?: { __typename?: 'ProductionSwitchPayload', productionSwitch?: boolean } | { __typename?: 'WorkerSalaryPayload', workerSalary?: number } }> };

export type GetProductionConfigQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type GetProductionConfigQuery = { getProductionConfig?: { __typename?: 'ProductionConfigPayload', id?: number, configCode?: number, orgId?: number, createTime?: number, updateTime?: number, createBy?: number, updateBy?: number, configValue?: { __typename?: 'ProductionSwitchPayload', productionSwitch?: boolean } | { __typename?: 'WorkerSalaryPayload', workerSalary?: number } } };

export type SaveWorkerSalaryMutationVariables = SchemaTypes.Exact<{
  saveWorkerSalary?: SchemaTypes.InputMaybe<SchemaTypes.SaveSalaryInput>;
}>;


export type SaveWorkerSalaryMutation = { saveWorkerSalary?: number };

export type SaveProductionConfigMutationVariables = SchemaTypes.Exact<{
  saveConfigInput?: SchemaTypes.InputMaybe<SchemaTypes.SaveConfigInput>;
}>;


export type SaveProductionConfigMutation = { saveProductionConfig?: number };


export const GetWorkerSalaryDocument = gql`
    query getWorkerSalary {
  getWorkerSalary {
    id
    configCode
    orgId
    configValue {
      ... on WorkerSalaryPayload {
        workerSalary
      }
      ... on ProductionSwitchPayload {
        productionSwitch
      }
    }
    createTime
    updateTime
    createBy
    updateBy
  }
}
    `;

/**
 * __useGetWorkerSalaryQuery__
 *
 * To run a query within a React component, call `useGetWorkerSalaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkerSalaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkerSalaryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorkerSalaryQuery(baseOptions?: Apollo.QueryHookOptions<GetWorkerSalaryQuery, GetWorkerSalaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkerSalaryQuery, GetWorkerSalaryQueryVariables>(GetWorkerSalaryDocument, options);
      }
export function useGetWorkerSalaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkerSalaryQuery, GetWorkerSalaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkerSalaryQuery, GetWorkerSalaryQueryVariables>(GetWorkerSalaryDocument, options);
        }
export type GetWorkerSalaryQueryHookResult = ReturnType<typeof useGetWorkerSalaryQuery>;
export type GetWorkerSalaryLazyQueryHookResult = ReturnType<typeof useGetWorkerSalaryLazyQuery>;
export type GetWorkerSalaryQueryResult = Apollo.QueryResult<GetWorkerSalaryQuery, GetWorkerSalaryQueryVariables>;
export const GetProductionConfigDocument = gql`
    query getProductionConfig {
  getProductionConfig {
    id
    configCode
    orgId
    configValue {
      ... on ProductionSwitchPayload {
        productionSwitch
      }
      ... on WorkerSalaryPayload {
        workerSalary
      }
    }
    createTime
    updateTime
    createBy
    updateBy
  }
}
    `;

/**
 * __useGetProductionConfigQuery__
 *
 * To run a query within a React component, call `useGetProductionConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductionConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductionConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductionConfigQuery(baseOptions?: Apollo.QueryHookOptions<GetProductionConfigQuery, GetProductionConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductionConfigQuery, GetProductionConfigQueryVariables>(GetProductionConfigDocument, options);
      }
export function useGetProductionConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductionConfigQuery, GetProductionConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductionConfigQuery, GetProductionConfigQueryVariables>(GetProductionConfigDocument, options);
        }
export type GetProductionConfigQueryHookResult = ReturnType<typeof useGetProductionConfigQuery>;
export type GetProductionConfigLazyQueryHookResult = ReturnType<typeof useGetProductionConfigLazyQuery>;
export type GetProductionConfigQueryResult = Apollo.QueryResult<GetProductionConfigQuery, GetProductionConfigQueryVariables>;
export const SaveWorkerSalaryDocument = gql`
    mutation saveWorkerSalary($saveWorkerSalary: SaveSalaryInput) {
  saveWorkerSalary(saveWorkerSalary: $saveWorkerSalary)
}
    `;
export type SaveWorkerSalaryMutationFn = Apollo.MutationFunction<SaveWorkerSalaryMutation, SaveWorkerSalaryMutationVariables>;

/**
 * __useSaveWorkerSalaryMutation__
 *
 * To run a mutation, you first call `useSaveWorkerSalaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveWorkerSalaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveWorkerSalaryMutation, { data, loading, error }] = useSaveWorkerSalaryMutation({
 *   variables: {
 *      saveWorkerSalary: // value for 'saveWorkerSalary'
 *   },
 * });
 */
export function useSaveWorkerSalaryMutation(baseOptions?: Apollo.MutationHookOptions<SaveWorkerSalaryMutation, SaveWorkerSalaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveWorkerSalaryMutation, SaveWorkerSalaryMutationVariables>(SaveWorkerSalaryDocument, options);
      }
export type SaveWorkerSalaryMutationHookResult = ReturnType<typeof useSaveWorkerSalaryMutation>;
export type SaveWorkerSalaryMutationResult = Apollo.MutationResult<SaveWorkerSalaryMutation>;
export type SaveWorkerSalaryMutationOptions = Apollo.BaseMutationOptions<SaveWorkerSalaryMutation, SaveWorkerSalaryMutationVariables>;
export const SaveProductionConfigDocument = gql`
    mutation saveProductionConfig($saveConfigInput: SaveConfigInput) {
  saveProductionConfig(saveConfigInput: $saveConfigInput)
}
    `;
export type SaveProductionConfigMutationFn = Apollo.MutationFunction<SaveProductionConfigMutation, SaveProductionConfigMutationVariables>;

/**
 * __useSaveProductionConfigMutation__
 *
 * To run a mutation, you first call `useSaveProductionConfigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveProductionConfigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveProductionConfigMutation, { data, loading, error }] = useSaveProductionConfigMutation({
 *   variables: {
 *      saveConfigInput: // value for 'saveConfigInput'
 *   },
 * });
 */
export function useSaveProductionConfigMutation(baseOptions?: Apollo.MutationHookOptions<SaveProductionConfigMutation, SaveProductionConfigMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveProductionConfigMutation, SaveProductionConfigMutationVariables>(SaveProductionConfigDocument, options);
      }
export type SaveProductionConfigMutationHookResult = ReturnType<typeof useSaveProductionConfigMutation>;
export type SaveProductionConfigMutationResult = Apollo.MutationResult<SaveProductionConfigMutation>;
export type SaveProductionConfigMutationOptions = Apollo.BaseMutationOptions<SaveProductionConfigMutation, SaveProductionConfigMutationVariables>;