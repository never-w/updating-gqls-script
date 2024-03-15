import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CancelJointVentureSaleMutationVariables = SchemaTypes.Exact<{
  cancelJointVentureSaleInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelJointVentureSaleInput>;
}>;


export type CancelJointVentureSaleMutation = { cancelJointVentureSale?: boolean };

export type SubmitJointVentureSaleMutationVariables = SchemaTypes.Exact<{
  submitJointVentureSaleInput?: SchemaTypes.InputMaybe<SchemaTypes.SubmitJointVentureSaleInput>;
}>;


export type SubmitJointVentureSaleMutation = { submitJointVentureSale?: boolean };

export type UpdateJointVentureSaleMutationVariables = SchemaTypes.Exact<{
  jointVentureSaleInput?: SchemaTypes.InputMaybe<SchemaTypes.JointVentureSaleInput>;
}>;


export type UpdateJointVentureSaleMutation = { updateJointVentureSale?: string };

export type CreateJointVentureSaleMutationVariables = SchemaTypes.Exact<{
  jointVentureSaleInput?: SchemaTypes.InputMaybe<SchemaTypes.JointVentureSaleInput>;
}>;


export type CreateJointVentureSaleMutation = { createJointVentureSale?: string };

export type ListHasStockCategoryQueryVariables = SchemaTypes.Exact<{
  listHasStockCategoryInput?: SchemaTypes.InputMaybe<SchemaTypes.ListHasStockCategoryInput>;
}>;


export type ListHasStockCategoryQuery = { listHasStockCategory?: Array<{ __typename?: 'HasStockCategoryPayload', categoryId?: number, categoryName?: string }> };

export type ListHasStockSpuQueryVariables = SchemaTypes.Exact<{
  listHasStockSpuInput?: SchemaTypes.InputMaybe<SchemaTypes.ListHasStockSpuInput>;
}>;


export type ListHasStockSpuQuery = { listHasStockSpu?: Array<{ __typename?: 'HasStockSpuPayload', commodityId?: number, commodityName?: string }> };

export type ListHasStockSkuQueryVariables = SchemaTypes.Exact<{
  listHasStockSkuInput?: SchemaTypes.InputMaybe<SchemaTypes.ListHasStockSkuInput>;
}>;


export type ListHasStockSkuQuery = { listHasStockSku?: Array<{ __typename?: 'HasStockSkuPayload', summaryTotalQuantity?: number, summaryUnitQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> };


export const CancelJointVentureSaleDocument = gql`
    mutation cancelJointVentureSale($cancelJointVentureSaleInput: CancelJointVentureSaleInput) {
  cancelJointVentureSale(
    cancelJointVentureSaleInput: $cancelJointVentureSaleInput
  )
}
    `;
export type CancelJointVentureSaleMutationFn = Apollo.MutationFunction<CancelJointVentureSaleMutation, CancelJointVentureSaleMutationVariables>;

/**
 * __useCancelJointVentureSaleMutation__
 *
 * To run a mutation, you first call `useCancelJointVentureSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelJointVentureSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelJointVentureSaleMutation, { data, loading, error }] = useCancelJointVentureSaleMutation({
 *   variables: {
 *      cancelJointVentureSaleInput: // value for 'cancelJointVentureSaleInput'
 *   },
 * });
 */
export function useCancelJointVentureSaleMutation(baseOptions?: Apollo.MutationHookOptions<CancelJointVentureSaleMutation, CancelJointVentureSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelJointVentureSaleMutation, CancelJointVentureSaleMutationVariables>(CancelJointVentureSaleDocument, options);
      }
export type CancelJointVentureSaleMutationHookResult = ReturnType<typeof useCancelJointVentureSaleMutation>;
export type CancelJointVentureSaleMutationResult = Apollo.MutationResult<CancelJointVentureSaleMutation>;
export type CancelJointVentureSaleMutationOptions = Apollo.BaseMutationOptions<CancelJointVentureSaleMutation, CancelJointVentureSaleMutationVariables>;
export const SubmitJointVentureSaleDocument = gql`
    mutation submitJointVentureSale($submitJointVentureSaleInput: SubmitJointVentureSaleInput) {
  submitJointVentureSale(
    submitJointVentureSaleInput: $submitJointVentureSaleInput
  )
}
    `;
export type SubmitJointVentureSaleMutationFn = Apollo.MutationFunction<SubmitJointVentureSaleMutation, SubmitJointVentureSaleMutationVariables>;

/**
 * __useSubmitJointVentureSaleMutation__
 *
 * To run a mutation, you first call `useSubmitJointVentureSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitJointVentureSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitJointVentureSaleMutation, { data, loading, error }] = useSubmitJointVentureSaleMutation({
 *   variables: {
 *      submitJointVentureSaleInput: // value for 'submitJointVentureSaleInput'
 *   },
 * });
 */
export function useSubmitJointVentureSaleMutation(baseOptions?: Apollo.MutationHookOptions<SubmitJointVentureSaleMutation, SubmitJointVentureSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitJointVentureSaleMutation, SubmitJointVentureSaleMutationVariables>(SubmitJointVentureSaleDocument, options);
      }
export type SubmitJointVentureSaleMutationHookResult = ReturnType<typeof useSubmitJointVentureSaleMutation>;
export type SubmitJointVentureSaleMutationResult = Apollo.MutationResult<SubmitJointVentureSaleMutation>;
export type SubmitJointVentureSaleMutationOptions = Apollo.BaseMutationOptions<SubmitJointVentureSaleMutation, SubmitJointVentureSaleMutationVariables>;
export const UpdateJointVentureSaleDocument = gql`
    mutation updateJointVentureSale($jointVentureSaleInput: JointVentureSaleInput) {
  updateJointVentureSale(jointVentureSaleInput: $jointVentureSaleInput)
}
    `;
export type UpdateJointVentureSaleMutationFn = Apollo.MutationFunction<UpdateJointVentureSaleMutation, UpdateJointVentureSaleMutationVariables>;

/**
 * __useUpdateJointVentureSaleMutation__
 *
 * To run a mutation, you first call `useUpdateJointVentureSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJointVentureSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJointVentureSaleMutation, { data, loading, error }] = useUpdateJointVentureSaleMutation({
 *   variables: {
 *      jointVentureSaleInput: // value for 'jointVentureSaleInput'
 *   },
 * });
 */
export function useUpdateJointVentureSaleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJointVentureSaleMutation, UpdateJointVentureSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJointVentureSaleMutation, UpdateJointVentureSaleMutationVariables>(UpdateJointVentureSaleDocument, options);
      }
export type UpdateJointVentureSaleMutationHookResult = ReturnType<typeof useUpdateJointVentureSaleMutation>;
export type UpdateJointVentureSaleMutationResult = Apollo.MutationResult<UpdateJointVentureSaleMutation>;
export type UpdateJointVentureSaleMutationOptions = Apollo.BaseMutationOptions<UpdateJointVentureSaleMutation, UpdateJointVentureSaleMutationVariables>;
export const CreateJointVentureSaleDocument = gql`
    mutation createJointVentureSale($jointVentureSaleInput: JointVentureSaleInput) {
  createJointVentureSale(jointVentureSaleInput: $jointVentureSaleInput)
}
    `;
export type CreateJointVentureSaleMutationFn = Apollo.MutationFunction<CreateJointVentureSaleMutation, CreateJointVentureSaleMutationVariables>;

/**
 * __useCreateJointVentureSaleMutation__
 *
 * To run a mutation, you first call `useCreateJointVentureSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJointVentureSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJointVentureSaleMutation, { data, loading, error }] = useCreateJointVentureSaleMutation({
 *   variables: {
 *      jointVentureSaleInput: // value for 'jointVentureSaleInput'
 *   },
 * });
 */
export function useCreateJointVentureSaleMutation(baseOptions?: Apollo.MutationHookOptions<CreateJointVentureSaleMutation, CreateJointVentureSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJointVentureSaleMutation, CreateJointVentureSaleMutationVariables>(CreateJointVentureSaleDocument, options);
      }
export type CreateJointVentureSaleMutationHookResult = ReturnType<typeof useCreateJointVentureSaleMutation>;
export type CreateJointVentureSaleMutationResult = Apollo.MutationResult<CreateJointVentureSaleMutation>;
export type CreateJointVentureSaleMutationOptions = Apollo.BaseMutationOptions<CreateJointVentureSaleMutation, CreateJointVentureSaleMutationVariables>;
export const ListHasStockCategoryDocument = gql`
    query listHasStockCategory($listHasStockCategoryInput: ListHasStockCategoryInput) {
  listHasStockCategory(listHasStockCategoryInput: $listHasStockCategoryInput) {
    categoryId
    categoryName
  }
}
    `;

/**
 * __useListHasStockCategoryQuery__
 *
 * To run a query within a React component, call `useListHasStockCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListHasStockCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListHasStockCategoryQuery({
 *   variables: {
 *      listHasStockCategoryInput: // value for 'listHasStockCategoryInput'
 *   },
 * });
 */
export function useListHasStockCategoryQuery(baseOptions?: Apollo.QueryHookOptions<ListHasStockCategoryQuery, ListHasStockCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListHasStockCategoryQuery, ListHasStockCategoryQueryVariables>(ListHasStockCategoryDocument, options);
      }
export function useListHasStockCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListHasStockCategoryQuery, ListHasStockCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListHasStockCategoryQuery, ListHasStockCategoryQueryVariables>(ListHasStockCategoryDocument, options);
        }
export type ListHasStockCategoryQueryHookResult = ReturnType<typeof useListHasStockCategoryQuery>;
export type ListHasStockCategoryLazyQueryHookResult = ReturnType<typeof useListHasStockCategoryLazyQuery>;
export type ListHasStockCategoryQueryResult = Apollo.QueryResult<ListHasStockCategoryQuery, ListHasStockCategoryQueryVariables>;
export const ListHasStockSpuDocument = gql`
    query listHasStockSpu($listHasStockSpuInput: ListHasStockSpuInput) {
  listHasStockSpu(listHasStockSpuInput: $listHasStockSpuInput) {
    commodityId
    commodityName
  }
}
    `;

/**
 * __useListHasStockSpuQuery__
 *
 * To run a query within a React component, call `useListHasStockSpuQuery` and pass it any options that fit your needs.
 * When your component renders, `useListHasStockSpuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListHasStockSpuQuery({
 *   variables: {
 *      listHasStockSpuInput: // value for 'listHasStockSpuInput'
 *   },
 * });
 */
export function useListHasStockSpuQuery(baseOptions?: Apollo.QueryHookOptions<ListHasStockSpuQuery, ListHasStockSpuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListHasStockSpuQuery, ListHasStockSpuQueryVariables>(ListHasStockSpuDocument, options);
      }
export function useListHasStockSpuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListHasStockSpuQuery, ListHasStockSpuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListHasStockSpuQuery, ListHasStockSpuQueryVariables>(ListHasStockSpuDocument, options);
        }
export type ListHasStockSpuQueryHookResult = ReturnType<typeof useListHasStockSpuQuery>;
export type ListHasStockSpuLazyQueryHookResult = ReturnType<typeof useListHasStockSpuLazyQuery>;
export type ListHasStockSpuQueryResult = Apollo.QueryResult<ListHasStockSpuQuery, ListHasStockSpuQueryVariables>;
export const ListHasStockSkuDocument = gql`
    query listHasStockSku($listHasStockSkuInput: ListHasStockSkuInput) {
  listHasStockSku(listHasStockSkuInput: $listHasStockSkuInput) {
    sku {
      commoditySkuId
      commoditySkuName
      commodityId
      commodityName
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
      categoryId
      categoryName
    }
    summaryTotalQuantity
    totalType {
      unitId
      unitName
    }
    summaryUnitQuantity
    unitType {
      unitId
      unitName
    }
  }
}
    `;

/**
 * __useListHasStockSkuQuery__
 *
 * To run a query within a React component, call `useListHasStockSkuQuery` and pass it any options that fit your needs.
 * When your component renders, `useListHasStockSkuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListHasStockSkuQuery({
 *   variables: {
 *      listHasStockSkuInput: // value for 'listHasStockSkuInput'
 *   },
 * });
 */
export function useListHasStockSkuQuery(baseOptions?: Apollo.QueryHookOptions<ListHasStockSkuQuery, ListHasStockSkuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListHasStockSkuQuery, ListHasStockSkuQueryVariables>(ListHasStockSkuDocument, options);
      }
export function useListHasStockSkuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListHasStockSkuQuery, ListHasStockSkuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListHasStockSkuQuery, ListHasStockSkuQueryVariables>(ListHasStockSkuDocument, options);
        }
export type ListHasStockSkuQueryHookResult = ReturnType<typeof useListHasStockSkuQuery>;
export type ListHasStockSkuLazyQueryHookResult = ReturnType<typeof useListHasStockSkuLazyQuery>;
export type ListHasStockSkuQueryResult = Apollo.QueryResult<ListHasStockSkuQuery, ListHasStockSkuQueryVariables>;