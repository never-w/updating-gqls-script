import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserInformationListQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type UserInformationListQuery = { userInformationList?: { __typename?: 'UserPageResult', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'UserListPayload', userId?: number, userName?: string, userPhoneNum?: string, positions?: Array<string>, stores?: Array<string> }> } };

export type UserInformationQueryVariables = SchemaTypes.Exact<{
  userId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']>;
}>;


export type UserInformationQuery = { userInformation?: { __typename?: 'PitayaUserPayload', userId?: number, userName?: string, userPhoneNum?: string, createTime?: string, positions?: Array<{ __typename?: 'PositionPayload', positionId?: number, positionName?: string }>, stores?: Array<{ __typename?: 'UserStorePayload', storehouseId?: string, storehouseName?: string }> } };

export type UpdatePitayaUserMutationVariables = SchemaTypes.Exact<{
  userInput?: SchemaTypes.InputMaybe<SchemaTypes.UserInput>;
}>;


export type UpdatePitayaUserMutation = { updatePitayaUser?: number };

export type UserExistQueryVariables = SchemaTypes.Exact<{
  phoneNum: SchemaTypes.Scalars['String'];
}>;


export type UserExistQuery = { userExist?: number };

export type UserBaseInfoQueryVariables = SchemaTypes.Exact<{
  phoneNum: SchemaTypes.Scalars['String'];
}>;


export type UserBaseInfoQuery = { userBaseInfo?: { __typename?: 'PitayaUserPayload', userId?: number, userName?: string, userPhoneNum?: string } };


export const UserInformationListDocument = gql`
    query userInformationList($page: Page) {
  userInformationList(page: $page) {
    records {
      userId
      userName
      userPhoneNum
      positions
      stores
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __useUserInformationListQuery__
 *
 * To run a query within a React component, call `useUserInformationListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInformationListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInformationListQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useUserInformationListQuery(baseOptions?: Apollo.QueryHookOptions<UserInformationListQuery, UserInformationListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserInformationListQuery, UserInformationListQueryVariables>(UserInformationListDocument, options);
      }
export function useUserInformationListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserInformationListQuery, UserInformationListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserInformationListQuery, UserInformationListQueryVariables>(UserInformationListDocument, options);
        }
export type UserInformationListQueryHookResult = ReturnType<typeof useUserInformationListQuery>;
export type UserInformationListLazyQueryHookResult = ReturnType<typeof useUserInformationListLazyQuery>;
export type UserInformationListQueryResult = Apollo.QueryResult<UserInformationListQuery, UserInformationListQueryVariables>;
export const UserInformationDocument = gql`
    query userInformation($userId: Int) {
  userInformation(userId: $userId) {
    userId
    userName
    userPhoneNum
    createTime
    positions {
      positionId
      positionName
    }
    stores {
      storehouseId
      storehouseName
    }
  }
}
    `;

/**
 * __useUserInformationQuery__
 *
 * To run a query within a React component, call `useUserInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInformationQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserInformationQuery(baseOptions?: Apollo.QueryHookOptions<UserInformationQuery, UserInformationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserInformationQuery, UserInformationQueryVariables>(UserInformationDocument, options);
      }
export function useUserInformationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserInformationQuery, UserInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserInformationQuery, UserInformationQueryVariables>(UserInformationDocument, options);
        }
export type UserInformationQueryHookResult = ReturnType<typeof useUserInformationQuery>;
export type UserInformationLazyQueryHookResult = ReturnType<typeof useUserInformationLazyQuery>;
export type UserInformationQueryResult = Apollo.QueryResult<UserInformationQuery, UserInformationQueryVariables>;
export const UpdatePitayaUserDocument = gql`
    mutation updatePitayaUser($userInput: UserInput) {
  updatePitayaUser(userInput: $userInput)
}
    `;
export type UpdatePitayaUserMutationFn = Apollo.MutationFunction<UpdatePitayaUserMutation, UpdatePitayaUserMutationVariables>;

/**
 * __useUpdatePitayaUserMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaUserMutation, { data, loading, error }] = useUpdatePitayaUserMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useUpdatePitayaUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaUserMutation, UpdatePitayaUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaUserMutation, UpdatePitayaUserMutationVariables>(UpdatePitayaUserDocument, options);
      }
export type UpdatePitayaUserMutationHookResult = ReturnType<typeof useUpdatePitayaUserMutation>;
export type UpdatePitayaUserMutationResult = Apollo.MutationResult<UpdatePitayaUserMutation>;
export type UpdatePitayaUserMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaUserMutation, UpdatePitayaUserMutationVariables>;
export const UserExistDocument = gql`
    query userExist($phoneNum: String!) {
  userExist(phoneNum: $phoneNum)
}
    `;

/**
 * __useUserExistQuery__
 *
 * To run a query within a React component, call `useUserExistQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserExistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserExistQuery({
 *   variables: {
 *      phoneNum: // value for 'phoneNum'
 *   },
 * });
 */
export function useUserExistQuery(baseOptions: Apollo.QueryHookOptions<UserExistQuery, UserExistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserExistQuery, UserExistQueryVariables>(UserExistDocument, options);
      }
export function useUserExistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserExistQuery, UserExistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserExistQuery, UserExistQueryVariables>(UserExistDocument, options);
        }
export type UserExistQueryHookResult = ReturnType<typeof useUserExistQuery>;
export type UserExistLazyQueryHookResult = ReturnType<typeof useUserExistLazyQuery>;
export type UserExistQueryResult = Apollo.QueryResult<UserExistQuery, UserExistQueryVariables>;
export const UserBaseInfoDocument = gql`
    query userBaseInfo($phoneNum: String!) {
  userBaseInfo(phoneNum: $phoneNum) {
    userId
    userName
    userPhoneNum
  }
}
    `;

/**
 * __useUserBaseInfoQuery__
 *
 * To run a query within a React component, call `useUserBaseInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBaseInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserBaseInfoQuery({
 *   variables: {
 *      phoneNum: // value for 'phoneNum'
 *   },
 * });
 */
export function useUserBaseInfoQuery(baseOptions: Apollo.QueryHookOptions<UserBaseInfoQuery, UserBaseInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserBaseInfoQuery, UserBaseInfoQueryVariables>(UserBaseInfoDocument, options);
      }
export function useUserBaseInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserBaseInfoQuery, UserBaseInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserBaseInfoQuery, UserBaseInfoQueryVariables>(UserBaseInfoDocument, options);
        }
export type UserBaseInfoQueryHookResult = ReturnType<typeof useUserBaseInfoQuery>;
export type UserBaseInfoLazyQueryHookResult = ReturnType<typeof useUserBaseInfoLazyQuery>;
export type UserBaseInfoQueryResult = Apollo.QueryResult<UserBaseInfoQuery, UserBaseInfoQueryVariables>;