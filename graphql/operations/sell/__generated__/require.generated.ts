import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ListRecommendLabelQueryVariables = SchemaTypes.Exact<{
  listRecommendLabelInput?: SchemaTypes.InputMaybe<SchemaTypes.ListRecommendLabelInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type ListRecommendLabelQuery = { listRecommendLabel?: { __typename?: 'ListRecommendLabelPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'RecommendLabelPayload', labelId?: number, labelType?: number, categoryId?: number, categoryName?: string, labelContent?: string }> } };

export type ListQuickLabelQueryVariables = SchemaTypes.Exact<{
  listQuickLabelInput?: SchemaTypes.InputMaybe<SchemaTypes.ListQuickLabelInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type ListQuickLabelQuery = { listQuickLabel?: { __typename?: 'ListQuickLabelPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'QuickLabelPayload', labelId?: number, labelType?: number, categoryId?: number, categoryName?: string, labelContent?: string }> } };

export type CreateQuickLabelMutationVariables = SchemaTypes.Exact<{
  createQuickLabelInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateQuickLabelInput>;
}>;


export type CreateQuickLabelMutation = { createQuickLabel?: { __typename?: 'QuickLabelPayload', labelId?: number, labelType?: number, categoryId?: number, categoryName?: string, labelContent?: string } };


export const ListRecommendLabelDocument = gql`
    query listRecommendLabel($listRecommendLabelInput: ListRecommendLabelInput, $page: Page) {
  listRecommendLabel(
    listRecommendLabelInput: $listRecommendLabelInput
    page: $page
  ) {
    pageCurrent
    pageSize
    totalRecords
    records {
      labelId
      labelType
      categoryId
      categoryName
      labelContent
    }
  }
}
    `;

/**
 * __useListRecommendLabelQuery__
 *
 * To run a query within a React component, call `useListRecommendLabelQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRecommendLabelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRecommendLabelQuery({
 *   variables: {
 *      listRecommendLabelInput: // value for 'listRecommendLabelInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useListRecommendLabelQuery(baseOptions?: Apollo.QueryHookOptions<ListRecommendLabelQuery, ListRecommendLabelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListRecommendLabelQuery, ListRecommendLabelQueryVariables>(ListRecommendLabelDocument, options);
      }
export function useListRecommendLabelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListRecommendLabelQuery, ListRecommendLabelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListRecommendLabelQuery, ListRecommendLabelQueryVariables>(ListRecommendLabelDocument, options);
        }
export type ListRecommendLabelQueryHookResult = ReturnType<typeof useListRecommendLabelQuery>;
export type ListRecommendLabelLazyQueryHookResult = ReturnType<typeof useListRecommendLabelLazyQuery>;
export type ListRecommendLabelQueryResult = Apollo.QueryResult<ListRecommendLabelQuery, ListRecommendLabelQueryVariables>;
export const ListQuickLabelDocument = gql`
    query listQuickLabel($listQuickLabelInput: ListQuickLabelInput, $page: Page) {
  listQuickLabel(listQuickLabelInput: $listQuickLabelInput, page: $page) {
    pageCurrent
    pageSize
    totalRecords
    records {
      labelId
      labelType
      categoryId
      categoryName
      labelContent
    }
  }
}
    `;

/**
 * __useListQuickLabelQuery__
 *
 * To run a query within a React component, call `useListQuickLabelQuery` and pass it any options that fit your needs.
 * When your component renders, `useListQuickLabelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListQuickLabelQuery({
 *   variables: {
 *      listQuickLabelInput: // value for 'listQuickLabelInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useListQuickLabelQuery(baseOptions?: Apollo.QueryHookOptions<ListQuickLabelQuery, ListQuickLabelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListQuickLabelQuery, ListQuickLabelQueryVariables>(ListQuickLabelDocument, options);
      }
export function useListQuickLabelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListQuickLabelQuery, ListQuickLabelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListQuickLabelQuery, ListQuickLabelQueryVariables>(ListQuickLabelDocument, options);
        }
export type ListQuickLabelQueryHookResult = ReturnType<typeof useListQuickLabelQuery>;
export type ListQuickLabelLazyQueryHookResult = ReturnType<typeof useListQuickLabelLazyQuery>;
export type ListQuickLabelQueryResult = Apollo.QueryResult<ListQuickLabelQuery, ListQuickLabelQueryVariables>;
export const CreateQuickLabelDocument = gql`
    mutation createQuickLabel($createQuickLabelInput: CreateQuickLabelInput) {
  createQuickLabel(createQuickLabelInput: $createQuickLabelInput) {
    labelId
    labelType
    categoryId
    categoryName
    labelContent
  }
}
    `;
export type CreateQuickLabelMutationFn = Apollo.MutationFunction<CreateQuickLabelMutation, CreateQuickLabelMutationVariables>;

/**
 * __useCreateQuickLabelMutation__
 *
 * To run a mutation, you first call `useCreateQuickLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuickLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuickLabelMutation, { data, loading, error }] = useCreateQuickLabelMutation({
 *   variables: {
 *      createQuickLabelInput: // value for 'createQuickLabelInput'
 *   },
 * });
 */
export function useCreateQuickLabelMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuickLabelMutation, CreateQuickLabelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuickLabelMutation, CreateQuickLabelMutationVariables>(CreateQuickLabelDocument, options);
      }
export type CreateQuickLabelMutationHookResult = ReturnType<typeof useCreateQuickLabelMutation>;
export type CreateQuickLabelMutationResult = Apollo.MutationResult<CreateQuickLabelMutation>;
export type CreateQuickLabelMutationOptions = Apollo.BaseMutationOptions<CreateQuickLabelMutation, CreateQuickLabelMutationVariables>;