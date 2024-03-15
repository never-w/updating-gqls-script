import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ListPitayaWarehouseQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListPitayaWarehouseQuery = { listPitayaWarehouse?: Array<{ __typename?: 'WarehousePayload', address?: string, houseNumber?: string, remark?: string, warehouseId?: string, warehouseName?: string }> };

export type UserWarehouseQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type UserWarehouseQuery = { userWarehouse?: Array<{ __typename?: 'WarehousePayload', warehouseId?: string, warehouseName?: string }> };

export type WarehouseQueryVariables = SchemaTypes.Exact<{
  warehouseId: SchemaTypes.Scalars['ID'];
}>;


export type WarehouseQuery = { warehouse?: { __typename?: 'WarehousePayload', warehouseId?: string, warehouseName?: string, address?: string, houseNumber?: string, remark?: string } };

export type InsertWarehouseMutationVariables = SchemaTypes.Exact<{
  warehouseInput: SchemaTypes.WarehouseInput;
}>;


export type InsertWarehouseMutation = { insertWarehouse?: string };

export type UpdatePitayaWarehouseMutationVariables = SchemaTypes.Exact<{
  warehouseInput: SchemaTypes.WarehouseInput;
}>;


export type UpdatePitayaWarehouseMutation = { updatePitayaWarehouse?: string };

export type DeleteWarehouseMutationVariables = SchemaTypes.Exact<{
  warehouseId: SchemaTypes.Scalars['ID'];
}>;


export type DeleteWarehouseMutation = { deleteWarehouse?: string };

export type ListWarehouseWithConditionQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListPitayaWarehouseInput>;
}>;


export type ListWarehouseWithConditionQuery = { listWarehouseWithCondition?: Array<{ __typename?: 'WarehousePayload', address?: string, houseNumber?: string, remark?: string, warehouseId?: string, warehouseName?: string }> };


export const ListPitayaWarehouseDocument = gql`
    query listPitayaWarehouse {
  listPitayaWarehouse {
    address
    houseNumber
    remark
    warehouseId
    warehouseName
  }
}
    `;

/**
 * __useListPitayaWarehouseQuery__
 *
 * To run a query within a React component, call `useListPitayaWarehouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPitayaWarehouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPitayaWarehouseQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPitayaWarehouseQuery(baseOptions?: Apollo.QueryHookOptions<ListPitayaWarehouseQuery, ListPitayaWarehouseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPitayaWarehouseQuery, ListPitayaWarehouseQueryVariables>(ListPitayaWarehouseDocument, options);
      }
export function useListPitayaWarehouseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPitayaWarehouseQuery, ListPitayaWarehouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPitayaWarehouseQuery, ListPitayaWarehouseQueryVariables>(ListPitayaWarehouseDocument, options);
        }
export type ListPitayaWarehouseQueryHookResult = ReturnType<typeof useListPitayaWarehouseQuery>;
export type ListPitayaWarehouseLazyQueryHookResult = ReturnType<typeof useListPitayaWarehouseLazyQuery>;
export type ListPitayaWarehouseQueryResult = Apollo.QueryResult<ListPitayaWarehouseQuery, ListPitayaWarehouseQueryVariables>;
export const UserWarehouseDocument = gql`
    query userWarehouse {
  userWarehouse {
    warehouseId
    warehouseName
  }
}
    `;

/**
 * __useUserWarehouseQuery__
 *
 * To run a query within a React component, call `useUserWarehouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWarehouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWarehouseQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserWarehouseQuery(baseOptions?: Apollo.QueryHookOptions<UserWarehouseQuery, UserWarehouseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserWarehouseQuery, UserWarehouseQueryVariables>(UserWarehouseDocument, options);
      }
export function useUserWarehouseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserWarehouseQuery, UserWarehouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserWarehouseQuery, UserWarehouseQueryVariables>(UserWarehouseDocument, options);
        }
export type UserWarehouseQueryHookResult = ReturnType<typeof useUserWarehouseQuery>;
export type UserWarehouseLazyQueryHookResult = ReturnType<typeof useUserWarehouseLazyQuery>;
export type UserWarehouseQueryResult = Apollo.QueryResult<UserWarehouseQuery, UserWarehouseQueryVariables>;
export const WarehouseDocument = gql`
    query warehouse($warehouseId: ID!) {
  warehouse(warehouseId: $warehouseId) {
    warehouseId
    warehouseName
    address
    houseNumber
    remark
  }
}
    `;

/**
 * __useWarehouseQuery__
 *
 * To run a query within a React component, call `useWarehouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehouseQuery({
 *   variables: {
 *      warehouseId: // value for 'warehouseId'
 *   },
 * });
 */
export function useWarehouseQuery(baseOptions: Apollo.QueryHookOptions<WarehouseQuery, WarehouseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehouseQuery, WarehouseQueryVariables>(WarehouseDocument, options);
      }
export function useWarehouseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehouseQuery, WarehouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehouseQuery, WarehouseQueryVariables>(WarehouseDocument, options);
        }
export type WarehouseQueryHookResult = ReturnType<typeof useWarehouseQuery>;
export type WarehouseLazyQueryHookResult = ReturnType<typeof useWarehouseLazyQuery>;
export type WarehouseQueryResult = Apollo.QueryResult<WarehouseQuery, WarehouseQueryVariables>;
export const InsertWarehouseDocument = gql`
    mutation insertWarehouse($warehouseInput: WarehouseInput!) {
  insertWarehouse(warehouseInput: $warehouseInput)
}
    `;
export type InsertWarehouseMutationFn = Apollo.MutationFunction<InsertWarehouseMutation, InsertWarehouseMutationVariables>;

/**
 * __useInsertWarehouseMutation__
 *
 * To run a mutation, you first call `useInsertWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertWarehouseMutation, { data, loading, error }] = useInsertWarehouseMutation({
 *   variables: {
 *      warehouseInput: // value for 'warehouseInput'
 *   },
 * });
 */
export function useInsertWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<InsertWarehouseMutation, InsertWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertWarehouseMutation, InsertWarehouseMutationVariables>(InsertWarehouseDocument, options);
      }
export type InsertWarehouseMutationHookResult = ReturnType<typeof useInsertWarehouseMutation>;
export type InsertWarehouseMutationResult = Apollo.MutationResult<InsertWarehouseMutation>;
export type InsertWarehouseMutationOptions = Apollo.BaseMutationOptions<InsertWarehouseMutation, InsertWarehouseMutationVariables>;
export const UpdatePitayaWarehouseDocument = gql`
    mutation updatePitayaWarehouse($warehouseInput: WarehouseInput!) {
  updatePitayaWarehouse(warehouseInput: $warehouseInput)
}
    `;
export type UpdatePitayaWarehouseMutationFn = Apollo.MutationFunction<UpdatePitayaWarehouseMutation, UpdatePitayaWarehouseMutationVariables>;

/**
 * __useUpdatePitayaWarehouseMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaWarehouseMutation, { data, loading, error }] = useUpdatePitayaWarehouseMutation({
 *   variables: {
 *      warehouseInput: // value for 'warehouseInput'
 *   },
 * });
 */
export function useUpdatePitayaWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaWarehouseMutation, UpdatePitayaWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaWarehouseMutation, UpdatePitayaWarehouseMutationVariables>(UpdatePitayaWarehouseDocument, options);
      }
export type UpdatePitayaWarehouseMutationHookResult = ReturnType<typeof useUpdatePitayaWarehouseMutation>;
export type UpdatePitayaWarehouseMutationResult = Apollo.MutationResult<UpdatePitayaWarehouseMutation>;
export type UpdatePitayaWarehouseMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaWarehouseMutation, UpdatePitayaWarehouseMutationVariables>;
export const DeleteWarehouseDocument = gql`
    mutation deleteWarehouse($warehouseId: ID!) {
  deleteWarehouse(warehouseId: $warehouseId)
}
    `;
export type DeleteWarehouseMutationFn = Apollo.MutationFunction<DeleteWarehouseMutation, DeleteWarehouseMutationVariables>;

/**
 * __useDeleteWarehouseMutation__
 *
 * To run a mutation, you first call `useDeleteWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWarehouseMutation, { data, loading, error }] = useDeleteWarehouseMutation({
 *   variables: {
 *      warehouseId: // value for 'warehouseId'
 *   },
 * });
 */
export function useDeleteWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWarehouseMutation, DeleteWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWarehouseMutation, DeleteWarehouseMutationVariables>(DeleteWarehouseDocument, options);
      }
export type DeleteWarehouseMutationHookResult = ReturnType<typeof useDeleteWarehouseMutation>;
export type DeleteWarehouseMutationResult = Apollo.MutationResult<DeleteWarehouseMutation>;
export type DeleteWarehouseMutationOptions = Apollo.BaseMutationOptions<DeleteWarehouseMutation, DeleteWarehouseMutationVariables>;
export const ListWarehouseWithConditionDocument = gql`
    query listWarehouseWithCondition($input: ListPitayaWarehouseInput) {
  listWarehouseWithCondition(input: $input) {
    address
    houseNumber
    remark
    warehouseId
    warehouseName
  }
}
    `;

/**
 * __useListWarehouseWithConditionQuery__
 *
 * To run a query within a React component, call `useListWarehouseWithConditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListWarehouseWithConditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListWarehouseWithConditionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListWarehouseWithConditionQuery(baseOptions?: Apollo.QueryHookOptions<ListWarehouseWithConditionQuery, ListWarehouseWithConditionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListWarehouseWithConditionQuery, ListWarehouseWithConditionQueryVariables>(ListWarehouseWithConditionDocument, options);
      }
export function useListWarehouseWithConditionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListWarehouseWithConditionQuery, ListWarehouseWithConditionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListWarehouseWithConditionQuery, ListWarehouseWithConditionQueryVariables>(ListWarehouseWithConditionDocument, options);
        }
export type ListWarehouseWithConditionQueryHookResult = ReturnType<typeof useListWarehouseWithConditionQuery>;
export type ListWarehouseWithConditionLazyQueryHookResult = ReturnType<typeof useListWarehouseWithConditionLazyQuery>;
export type ListWarehouseWithConditionQueryResult = Apollo.QueryResult<ListWarehouseWithConditionQuery, ListWarehouseWithConditionQueryVariables>;