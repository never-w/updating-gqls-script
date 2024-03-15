import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PitayaPageReturnQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaPageReturnInput;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PitayaPageReturnQuery = { pitayaPageReturn?: { __typename?: 'PitayaPageSaleReturnPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PitayaSaleReturnDetailPayload', belongId?: number, belongName?: string, belongOrgId?: number, belongOrgName?: string, belongType?: number, saleReturnWay?: SchemaTypes.SaleReturnWayEnum, saleReturnWayName?: string, createBy?: number, createByName?: string, createTime?: number, remark?: string, returnStatus?: SchemaTypes.PitayaReturnStatusEnum, returnStatusDesc?: string, returnTime?: number, returnType?: SchemaTypes.PitayaReturnTypeEnum, returnTypeDesc?: string, saleOrderCode?: string, saleOrderId?: string, returnCode?: string, returnId?: string, commodities?: Array<{ __typename?: 'PitayaSaleReturnItemPayload', commodityId?: number, commodityName?: string, commoditySkuName?: string, commodityTypeId?: number, optionName?: string, price?: number, priceType?: number, returnId?: string, skuId?: number, totalName?: string, totalQuantity?: number, totalType?: number, unitName?: string, unitQuantity?: number, unitType?: number }> }> } };

export type PitayaReturnBadgeQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type PitayaReturnBadgeQuery = { pitayaReturnBadge?: { __typename?: 'PitayaReturnBadgePayload', toBeInbound?: number, toBeSubmit?: number } };

export type CreateSaleInvoiceReturnMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreateOrUpdateSaleInvoiceReturnInput;
}>;


export type CreateSaleInvoiceReturnMutation = { createSaleInvoiceReturn?: string };

export type UpdateSaleInvoiceReturnMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreateOrUpdateSaleInvoiceReturnInput;
}>;


export type UpdateSaleInvoiceReturnMutation = { updateSaleInvoiceReturn?: boolean };


export const PitayaPageReturnDocument = gql`
    query pitayaPageReturn($input: PitayaPageReturnInput!, $page: Page) {
  pitayaPageReturn(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      belongId
      belongName
      belongOrgId
      belongOrgName
      belongType
      saleReturnWay
      saleReturnWayName
      commodities {
        commodityId
        commodityName
        commoditySkuName
        commodityTypeId
        optionName
        price
        priceType
        returnId
        skuId
        totalName
        totalQuantity
        totalType
        unitName
        unitQuantity
        unitType
      }
      createBy
      createByName
      createTime
      remark
      returnStatus
      returnStatusDesc
      returnTime
      returnType
      returnTypeDesc
      saleOrderCode
      saleOrderId
      returnCode
      returnId
    }
    totalRecords
  }
}
    `;

/**
 * __usePitayaPageReturnQuery__
 *
 * To run a query within a React component, call `usePitayaPageReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaPageReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaPageReturnQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePitayaPageReturnQuery(baseOptions: Apollo.QueryHookOptions<PitayaPageReturnQuery, PitayaPageReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaPageReturnQuery, PitayaPageReturnQueryVariables>(PitayaPageReturnDocument, options);
      }
export function usePitayaPageReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaPageReturnQuery, PitayaPageReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaPageReturnQuery, PitayaPageReturnQueryVariables>(PitayaPageReturnDocument, options);
        }
export type PitayaPageReturnQueryHookResult = ReturnType<typeof usePitayaPageReturnQuery>;
export type PitayaPageReturnLazyQueryHookResult = ReturnType<typeof usePitayaPageReturnLazyQuery>;
export type PitayaPageReturnQueryResult = Apollo.QueryResult<PitayaPageReturnQuery, PitayaPageReturnQueryVariables>;
export const PitayaReturnBadgeDocument = gql`
    query pitayaReturnBadge {
  pitayaReturnBadge {
    toBeInbound
    toBeSubmit
  }
}
    `;

/**
 * __usePitayaReturnBadgeQuery__
 *
 * To run a query within a React component, call `usePitayaReturnBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaReturnBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaReturnBadgeQuery({
 *   variables: {
 *   },
 * });
 */
export function usePitayaReturnBadgeQuery(baseOptions?: Apollo.QueryHookOptions<PitayaReturnBadgeQuery, PitayaReturnBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaReturnBadgeQuery, PitayaReturnBadgeQueryVariables>(PitayaReturnBadgeDocument, options);
      }
export function usePitayaReturnBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaReturnBadgeQuery, PitayaReturnBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaReturnBadgeQuery, PitayaReturnBadgeQueryVariables>(PitayaReturnBadgeDocument, options);
        }
export type PitayaReturnBadgeQueryHookResult = ReturnType<typeof usePitayaReturnBadgeQuery>;
export type PitayaReturnBadgeLazyQueryHookResult = ReturnType<typeof usePitayaReturnBadgeLazyQuery>;
export type PitayaReturnBadgeQueryResult = Apollo.QueryResult<PitayaReturnBadgeQuery, PitayaReturnBadgeQueryVariables>;
export const CreateSaleInvoiceReturnDocument = gql`
    mutation createSaleInvoiceReturn($input: CreateOrUpdateSaleInvoiceReturnInput!) {
  createSaleInvoiceReturn(input: $input)
}
    `;
export type CreateSaleInvoiceReturnMutationFn = Apollo.MutationFunction<CreateSaleInvoiceReturnMutation, CreateSaleInvoiceReturnMutationVariables>;

/**
 * __useCreateSaleInvoiceReturnMutation__
 *
 * To run a mutation, you first call `useCreateSaleInvoiceReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSaleInvoiceReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSaleInvoiceReturnMutation, { data, loading, error }] = useCreateSaleInvoiceReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSaleInvoiceReturnMutation(baseOptions?: Apollo.MutationHookOptions<CreateSaleInvoiceReturnMutation, CreateSaleInvoiceReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSaleInvoiceReturnMutation, CreateSaleInvoiceReturnMutationVariables>(CreateSaleInvoiceReturnDocument, options);
      }
export type CreateSaleInvoiceReturnMutationHookResult = ReturnType<typeof useCreateSaleInvoiceReturnMutation>;
export type CreateSaleInvoiceReturnMutationResult = Apollo.MutationResult<CreateSaleInvoiceReturnMutation>;
export type CreateSaleInvoiceReturnMutationOptions = Apollo.BaseMutationOptions<CreateSaleInvoiceReturnMutation, CreateSaleInvoiceReturnMutationVariables>;
export const UpdateSaleInvoiceReturnDocument = gql`
    mutation updateSaleInvoiceReturn($input: CreateOrUpdateSaleInvoiceReturnInput!) {
  updateSaleInvoiceReturn(input: $input)
}
    `;
export type UpdateSaleInvoiceReturnMutationFn = Apollo.MutationFunction<UpdateSaleInvoiceReturnMutation, UpdateSaleInvoiceReturnMutationVariables>;

/**
 * __useUpdateSaleInvoiceReturnMutation__
 *
 * To run a mutation, you first call `useUpdateSaleInvoiceReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSaleInvoiceReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSaleInvoiceReturnMutation, { data, loading, error }] = useUpdateSaleInvoiceReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSaleInvoiceReturnMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSaleInvoiceReturnMutation, UpdateSaleInvoiceReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSaleInvoiceReturnMutation, UpdateSaleInvoiceReturnMutationVariables>(UpdateSaleInvoiceReturnDocument, options);
      }
export type UpdateSaleInvoiceReturnMutationHookResult = ReturnType<typeof useUpdateSaleInvoiceReturnMutation>;
export type UpdateSaleInvoiceReturnMutationResult = Apollo.MutationResult<UpdateSaleInvoiceReturnMutation>;
export type UpdateSaleInvoiceReturnMutationOptions = Apollo.BaseMutationOptions<UpdateSaleInvoiceReturnMutation, UpdateSaleInvoiceReturnMutationVariables>;