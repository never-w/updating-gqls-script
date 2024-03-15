import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CountPitayaSopTaskQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type CountPitayaSopTaskQuery = { countPitayaSopTask?: number };

export type PagePitayaSopTaskQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PagePitayaSopTaskInput;
  page: SchemaTypes.Page;
}>;


export type PagePitayaSopTaskQuery = { pagePitayaSopTask?: { __typename?: 'PagePitayaSopTaskPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PitayaSopTaskPayload', code?: string, createTime?: number, remark?: string, sopDate?: number, sopTaskId?: string, sopTaskStatus?: SchemaTypes.PitayaSopTaskStatusEnum, sopTaskStatusDesc?: string, sopTaskType?: number, sopTaskTypeDesc?: string, submitTime?: number, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, submitUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, categoryList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }>, sopInfo?: Array<{ __typename?: 'SopTaskCategoryRelInfo', queryBusinessId?: string, sopId?: string, category?: { __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }, matchedSopList?: Array<{ __typename?: 'PitayaSopInfo', sopDesc?: string, sopId?: string, sopName?: string }> }>, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number } }> } };

export type ListExistBatchCategoryQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListExistBatchCategoryInput;
}>;


export type ListExistBatchCategoryQuery = { listExistBatchCategory?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }> };

export type CreatePitayaSopTaskMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreatePitayaSopTaskInput;
}>;


export type CreatePitayaSopTaskMutation = { createPitayaSopTask?: string };

export type PitayaSopTaskQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.GetPitayaSopTaskInput;
}>;


export type PitayaSopTaskQuery = { pitayaSopTask?: { __typename?: 'PitayaSopTaskPayload', code?: string, createTime?: number, remark?: string, sopDate?: number, sopTaskId?: string, sopTaskStatus?: SchemaTypes.PitayaSopTaskStatusEnum, sopTaskStatusDesc?: string, sopTaskType?: number, sopTaskTypeDesc?: string, submitTime?: number, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, submitUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, categoryList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }>, sopInfo?: Array<{ __typename?: 'SopTaskCategoryRelInfo', queryBusinessId?: string, sopId?: string, category?: { __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }, matchedSopList?: Array<{ __typename?: 'PitayaSopInfo', sopDesc?: string, sopId?: string, sopName?: string }> }>, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number } } };

export type SubmitPitayaSopTaskMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.OperatePitayaSopTaskInput;
}>;


export type SubmitPitayaSopTaskMutation = { submitPitayaSopTask?: boolean };

export type GetSopOrResultsQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<Array<SchemaTypes.InputMaybe<SchemaTypes.GetSopOrResultInput>>>;
}>;


export type GetSopOrResultsQuery = { getSopOrResults?: Array<{ __typename?: 'SopDetailResultPayload', enabled?: SchemaTypes.EnabledEnum, enabledName?: string, sopId?: string, templateDesc?: string, templateName?: string, universal?: boolean, key?: string, category?: { __typename?: 'CommodityCategoryEntity', categoryName?: string, id?: number }, sopCheckItems?: Array<{ __typename?: 'SopCheckItemResultPayload', enabled?: SchemaTypes.EnabledEnum, enabledName?: string, inputTextRule?: SchemaTypes.InputTextRule, isRemark?: boolean, name?: string, nameLocale?: any, remarkRequired?: boolean, remarks?: string, required?: boolean, snapshotId?: string, sopDetailId?: string, sopId?: string, sort?: number, type?: SchemaTypes.SopCheckItemEnum, typeName?: string, options?: Array<{ __typename?: 'SopOptionPayload', isRemark?: boolean, name?: string, nameLocale?: any, remarkRequired?: boolean, remarks?: string, sort?: number, value?: string }>, sopResult?: { __typename?: 'SopOrResultPayload', businessId?: string, cacheEnabled?: boolean, checkResult?: any, checkResultType?: SchemaTypes.SopCheckItemEnum, createTime?: number, fileLink?: any, remark?: string, sopDetailId?: string, sopId?: string, sopResultId?: string, userId?: number } }> }> };

export type CachePitayaSopTaskResultMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.OperatePitayaSopTaskInput;
}>;


export type CachePitayaSopTaskResultMutation = { cachePitayaSopTaskResult?: boolean };


export const CountPitayaSopTaskDocument = gql`
    query countPitayaSopTask {
  countPitayaSopTask
}
    `;

/**
 * __useCountPitayaSopTaskQuery__
 *
 * To run a query within a React component, call `useCountPitayaSopTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPitayaSopTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPitayaSopTaskQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountPitayaSopTaskQuery(baseOptions?: Apollo.QueryHookOptions<CountPitayaSopTaskQuery, CountPitayaSopTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountPitayaSopTaskQuery, CountPitayaSopTaskQueryVariables>(CountPitayaSopTaskDocument, options);
      }
export function useCountPitayaSopTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountPitayaSopTaskQuery, CountPitayaSopTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountPitayaSopTaskQuery, CountPitayaSopTaskQueryVariables>(CountPitayaSopTaskDocument, options);
        }
export type CountPitayaSopTaskQueryHookResult = ReturnType<typeof useCountPitayaSopTaskQuery>;
export type CountPitayaSopTaskLazyQueryHookResult = ReturnType<typeof useCountPitayaSopTaskLazyQuery>;
export type CountPitayaSopTaskQueryResult = Apollo.QueryResult<CountPitayaSopTaskQuery, CountPitayaSopTaskQueryVariables>;
export const PagePitayaSopTaskDocument = gql`
    query pagePitayaSopTask($input: PagePitayaSopTaskInput!, $page: Page!) {
  pagePitayaSopTask(input: $input, page: $page) {
    pageCurrent
    pageSize
    totalRecords
    records {
      createBy {
        phoneNum
        userId
        userName
      }
      org {
        orgId
        orgName
      }
      submitUser {
        phoneNum
        userId
        userName
      }
      categoryList {
        categoryId
        categoryName
      }
      code
      createTime
      remark
      sopDate
      sopInfo {
        category {
          categoryId
          categoryName
        }
        matchedSopList {
          sopDesc
          sopId
          sopName
        }
        queryBusinessId
        sopId
      }
      sopTaskId
      sopTaskStatus
      sopTaskStatusDesc
      sopTaskType
      sopTaskTypeDesc
      submitTime
      warehouse {
        address
        belongId
        belongType
        houseNumber
        id
        locationList
        name
        orgId
        remark
        status
        typeId
      }
    }
  }
}
    `;

/**
 * __usePagePitayaSopTaskQuery__
 *
 * To run a query within a React component, call `usePagePitayaSopTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagePitayaSopTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagePitayaSopTaskQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePagePitayaSopTaskQuery(baseOptions: Apollo.QueryHookOptions<PagePitayaSopTaskQuery, PagePitayaSopTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagePitayaSopTaskQuery, PagePitayaSopTaskQueryVariables>(PagePitayaSopTaskDocument, options);
      }
export function usePagePitayaSopTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagePitayaSopTaskQuery, PagePitayaSopTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagePitayaSopTaskQuery, PagePitayaSopTaskQueryVariables>(PagePitayaSopTaskDocument, options);
        }
export type PagePitayaSopTaskQueryHookResult = ReturnType<typeof usePagePitayaSopTaskQuery>;
export type PagePitayaSopTaskLazyQueryHookResult = ReturnType<typeof usePagePitayaSopTaskLazyQuery>;
export type PagePitayaSopTaskQueryResult = Apollo.QueryResult<PagePitayaSopTaskQuery, PagePitayaSopTaskQueryVariables>;
export const ListExistBatchCategoryDocument = gql`
    query listExistBatchCategory($input: ListExistBatchCategoryInput!) {
  listExistBatchCategory(input: $input) {
    categoryId
    categoryName
  }
}
    `;

/**
 * __useListExistBatchCategoryQuery__
 *
 * To run a query within a React component, call `useListExistBatchCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListExistBatchCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListExistBatchCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListExistBatchCategoryQuery(baseOptions: Apollo.QueryHookOptions<ListExistBatchCategoryQuery, ListExistBatchCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListExistBatchCategoryQuery, ListExistBatchCategoryQueryVariables>(ListExistBatchCategoryDocument, options);
      }
export function useListExistBatchCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListExistBatchCategoryQuery, ListExistBatchCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListExistBatchCategoryQuery, ListExistBatchCategoryQueryVariables>(ListExistBatchCategoryDocument, options);
        }
export type ListExistBatchCategoryQueryHookResult = ReturnType<typeof useListExistBatchCategoryQuery>;
export type ListExistBatchCategoryLazyQueryHookResult = ReturnType<typeof useListExistBatchCategoryLazyQuery>;
export type ListExistBatchCategoryQueryResult = Apollo.QueryResult<ListExistBatchCategoryQuery, ListExistBatchCategoryQueryVariables>;
export const CreatePitayaSopTaskDocument = gql`
    mutation createPitayaSopTask($input: CreatePitayaSopTaskInput!) {
  createPitayaSopTask(input: $input)
}
    `;
export type CreatePitayaSopTaskMutationFn = Apollo.MutationFunction<CreatePitayaSopTaskMutation, CreatePitayaSopTaskMutationVariables>;

/**
 * __useCreatePitayaSopTaskMutation__
 *
 * To run a mutation, you first call `useCreatePitayaSopTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaSopTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaSopTaskMutation, { data, loading, error }] = useCreatePitayaSopTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePitayaSopTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaSopTaskMutation, CreatePitayaSopTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaSopTaskMutation, CreatePitayaSopTaskMutationVariables>(CreatePitayaSopTaskDocument, options);
      }
export type CreatePitayaSopTaskMutationHookResult = ReturnType<typeof useCreatePitayaSopTaskMutation>;
export type CreatePitayaSopTaskMutationResult = Apollo.MutationResult<CreatePitayaSopTaskMutation>;
export type CreatePitayaSopTaskMutationOptions = Apollo.BaseMutationOptions<CreatePitayaSopTaskMutation, CreatePitayaSopTaskMutationVariables>;
export const PitayaSopTaskDocument = gql`
    query pitayaSopTask($input: GetPitayaSopTaskInput!) {
  pitayaSopTask(input: $input) {
    createBy {
      phoneNum
      userId
      userName
    }
    org {
      orgId
      orgName
    }
    submitUser {
      phoneNum
      userId
      userName
    }
    categoryList {
      categoryId
      categoryName
    }
    code
    createTime
    remark
    sopDate
    sopInfo {
      category {
        categoryId
        categoryName
      }
      matchedSopList {
        sopDesc
        sopId
        sopName
      }
      queryBusinessId
      sopId
    }
    sopTaskId
    sopTaskStatus
    sopTaskStatusDesc
    sopTaskType
    sopTaskTypeDesc
    submitTime
    warehouse {
      address
      belongId
      belongType
      houseNumber
      id
      locationList
      name
      orgId
      remark
      status
      typeId
    }
  }
}
    `;

/**
 * __usePitayaSopTaskQuery__
 *
 * To run a query within a React component, call `usePitayaSopTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaSopTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaSopTaskQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaSopTaskQuery(baseOptions: Apollo.QueryHookOptions<PitayaSopTaskQuery, PitayaSopTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaSopTaskQuery, PitayaSopTaskQueryVariables>(PitayaSopTaskDocument, options);
      }
export function usePitayaSopTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaSopTaskQuery, PitayaSopTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaSopTaskQuery, PitayaSopTaskQueryVariables>(PitayaSopTaskDocument, options);
        }
export type PitayaSopTaskQueryHookResult = ReturnType<typeof usePitayaSopTaskQuery>;
export type PitayaSopTaskLazyQueryHookResult = ReturnType<typeof usePitayaSopTaskLazyQuery>;
export type PitayaSopTaskQueryResult = Apollo.QueryResult<PitayaSopTaskQuery, PitayaSopTaskQueryVariables>;
export const SubmitPitayaSopTaskDocument = gql`
    mutation submitPitayaSopTask($input: OperatePitayaSopTaskInput!) {
  submitPitayaSopTask(input: $input)
}
    `;
export type SubmitPitayaSopTaskMutationFn = Apollo.MutationFunction<SubmitPitayaSopTaskMutation, SubmitPitayaSopTaskMutationVariables>;

/**
 * __useSubmitPitayaSopTaskMutation__
 *
 * To run a mutation, you first call `useSubmitPitayaSopTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitPitayaSopTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitPitayaSopTaskMutation, { data, loading, error }] = useSubmitPitayaSopTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitPitayaSopTaskMutation(baseOptions?: Apollo.MutationHookOptions<SubmitPitayaSopTaskMutation, SubmitPitayaSopTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitPitayaSopTaskMutation, SubmitPitayaSopTaskMutationVariables>(SubmitPitayaSopTaskDocument, options);
      }
export type SubmitPitayaSopTaskMutationHookResult = ReturnType<typeof useSubmitPitayaSopTaskMutation>;
export type SubmitPitayaSopTaskMutationResult = Apollo.MutationResult<SubmitPitayaSopTaskMutation>;
export type SubmitPitayaSopTaskMutationOptions = Apollo.BaseMutationOptions<SubmitPitayaSopTaskMutation, SubmitPitayaSopTaskMutationVariables>;
export const GetSopOrResultsDocument = gql`
    query getSopOrResults($input: [GetSopOrResultInput]) {
  getSopOrResults(input: $input) {
    category {
      categoryName
      id
    }
    enabled
    enabledName
    sopCheckItems {
      enabled
      enabledName
      inputTextRule
      isRemark
      name
      nameLocale
      options {
        isRemark
        name
        nameLocale
        remarkRequired
        remarks
        sort
        value
      }
      remarkRequired
      remarks
      required
      snapshotId
      sopDetailId
      sopId
      sopResult {
        businessId
        cacheEnabled
        checkResult
        checkResultType
        createTime
        fileLink
        remark
        sopDetailId
        sopId
        sopResultId
        userId
      }
      sort
      type
      typeName
    }
    sopId
    templateDesc
    templateName
    universal
    key
  }
}
    `;

/**
 * __useGetSopOrResultsQuery__
 *
 * To run a query within a React component, call `useGetSopOrResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSopOrResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSopOrResultsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSopOrResultsQuery(baseOptions?: Apollo.QueryHookOptions<GetSopOrResultsQuery, GetSopOrResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSopOrResultsQuery, GetSopOrResultsQueryVariables>(GetSopOrResultsDocument, options);
      }
export function useGetSopOrResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSopOrResultsQuery, GetSopOrResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSopOrResultsQuery, GetSopOrResultsQueryVariables>(GetSopOrResultsDocument, options);
        }
export type GetSopOrResultsQueryHookResult = ReturnType<typeof useGetSopOrResultsQuery>;
export type GetSopOrResultsLazyQueryHookResult = ReturnType<typeof useGetSopOrResultsLazyQuery>;
export type GetSopOrResultsQueryResult = Apollo.QueryResult<GetSopOrResultsQuery, GetSopOrResultsQueryVariables>;
export const CachePitayaSopTaskResultDocument = gql`
    mutation cachePitayaSopTaskResult($input: OperatePitayaSopTaskInput!) {
  cachePitayaSopTaskResult(input: $input)
}
    `;
export type CachePitayaSopTaskResultMutationFn = Apollo.MutationFunction<CachePitayaSopTaskResultMutation, CachePitayaSopTaskResultMutationVariables>;

/**
 * __useCachePitayaSopTaskResultMutation__
 *
 * To run a mutation, you first call `useCachePitayaSopTaskResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCachePitayaSopTaskResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cachePitayaSopTaskResultMutation, { data, loading, error }] = useCachePitayaSopTaskResultMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCachePitayaSopTaskResultMutation(baseOptions?: Apollo.MutationHookOptions<CachePitayaSopTaskResultMutation, CachePitayaSopTaskResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CachePitayaSopTaskResultMutation, CachePitayaSopTaskResultMutationVariables>(CachePitayaSopTaskResultDocument, options);
      }
export type CachePitayaSopTaskResultMutationHookResult = ReturnType<typeof useCachePitayaSopTaskResultMutation>;
export type CachePitayaSopTaskResultMutationResult = Apollo.MutationResult<CachePitayaSopTaskResultMutation>;
export type CachePitayaSopTaskResultMutationOptions = Apollo.BaseMutationOptions<CachePitayaSopTaskResultMutation, CachePitayaSopTaskResultMutationVariables>;