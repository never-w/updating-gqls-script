import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageBreakContractQueryVariables = SchemaTypes.Exact<{
  pageBreakContractInput?: SchemaTypes.InputMaybe<SchemaTypes.PageBreakContractInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageBreakContractQuery = { pageBreakContract?: { __typename?: 'PageBreakContractPayLoad', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'BreakContractPayload', breakContractId?: string, breakContractCode?: string, status?: SchemaTypes.BreakContractStatusEnum, statusDesc?: string, statusNote?: string, breakDate?: number, saleDate?: number, photos?: Array<string>, saleOrderId?: string, saleOrderType?: number, saleOrderCode?: string, createTime?: number, breakContractItem?: Array<{ __typename?: 'BreakContractItemPayload', breakContractId?: string, breakContractItemId?: string, breakContractType?: SchemaTypes.FineTypeEnum, breakContractTypeDesc?: string, estimateFine?: number, breakContractReason?: string, actualFine?: number, fineDate?: number, fineWay?: SchemaTypes.FineWayEnum, fineWayDesc?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type ListBreakContractCommodityQueryVariables = SchemaTypes.Exact<{
  breakContractCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractCommodityInput>;
}>;


export type ListBreakContractCommodityQuery = { listBreakContractCommodity?: Array<{ __typename?: 'BreakContractCommodityPayLoad', saleTime?: number, outOrderId?: string, outOrderCode?: string, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commodities?: Array<{ __typename?: 'BreakContractCommodityItemPayload', outOrderItemId?: string, outOrderId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> }> };

export type BreakContractOrderQueryVariables = SchemaTypes.Exact<{
  breakContractOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractOrderInput>;
}>;


export type BreakContractOrderQuery = { breakContractOrder?: { __typename?: 'BreakContractPayload', breakContractId?: string, breakContractCode?: string, status?: SchemaTypes.BreakContractStatusEnum, statusDesc?: string, statusNote?: string, breakDate?: number, saleDate?: number, photos?: Array<string>, saleOrderId?: string, saleOrderType?: number, saleOrderCode?: string, createTime?: number, breakContractItem?: Array<{ __typename?: 'BreakContractItemPayload', breakContractId?: string, breakContractItemId?: string, breakContractType?: SchemaTypes.FineTypeEnum, breakContractTypeDesc?: string, estimateFine?: number, breakContractReason?: string, actualFine?: number, fineDate?: number, fineWay?: SchemaTypes.FineWayEnum, fineWayDesc?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, submitInfo?: { __typename?: 'SubmitInfoPayload', breakContractId?: string, submitTime?: number, submitUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type BreakContractFineTypeQueryVariables = SchemaTypes.Exact<{
  labelId: SchemaTypes.Scalars['Int'];
}>;


export type BreakContractFineTypeQuery = { breakContractFineType?: Array<{ __typename?: 'StringOption', label?: string, value?: string }> };

export type CreateBreakContractMutationVariables = SchemaTypes.Exact<{
  breakContractCreateInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractCreateInput>;
}>;


export type CreateBreakContractMutation = { createBreakContract?: string };

export type UpdateBreakContractMutationVariables = SchemaTypes.Exact<{
  breakContractUpdateInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractUpdateInput>;
}>;


export type UpdateBreakContractMutation = { updateBreakContract?: boolean };

export type SubmitBreakContractMutationVariables = SchemaTypes.Exact<{
  breakContractSubmitInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractSubmitInput>;
}>;


export type SubmitBreakContractMutation = { submitBreakContract?: boolean };

export type CancelBreakContractMutationVariables = SchemaTypes.Exact<{
  breakContractCancelInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractCancelInput>;
}>;


export type CancelBreakContractMutation = { cancelBreakContract?: boolean };

export type BreakContractFineWayQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type BreakContractFineWayQuery = { breakContractFineWay?: Array<{ __typename?: 'StringOption', label?: string, value?: string }> };

export type AuditBreakContractMutationVariables = SchemaTypes.Exact<{
  breakContractAuditInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractAuditInput>;
}>;


export type AuditBreakContractMutation = { auditBreakContract?: boolean };

export type RollBackBreakContractMutationVariables = SchemaTypes.Exact<{
  breakContractRollBackInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractRollBackInput>;
}>;


export type RollBackBreakContractMutation = { rollBackBreakContract?: boolean };

export type RejectedBreakContractMutationVariables = SchemaTypes.Exact<{
  breakContractRejectedInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractRejectedInput>;
}>;


export type RejectedBreakContractMutation = { rejectedBreakContract?: boolean };

export type BreakContractTraceLogQueryVariables = SchemaTypes.Exact<{
  breakContractTraceLogInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractTraceLogInput>;
}>;


export type BreakContractTraceLogQuery = { breakContractTraceLog?: Array<{ __typename?: 'BreakContractTraceLogPayLoad', logId?: string, breakContractId?: string, logType?: SchemaTypes.BreakContractLogTypeEnum, logTypeText?: string, logDescription?: string, createTime?: number, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }> };

export type BreakContractStatusQueryVariables = SchemaTypes.Exact<{
  breakContractStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractStatusInput>;
}>;


export type BreakContractStatusQuery = { breakContractStatus?: { __typename?: 'BreakContractStatusPayload', saleToSubmitCount?: number, saleToAuditCount?: number, saleToRejectedCount?: number, auditToAuditCount?: number } };


export const PageBreakContractDocument = gql`
    query pageBreakContract($pageBreakContractInput: PageBreakContractInput, $page: Page) {
  pageBreakContract(pageBreakContractInput: $pageBreakContractInput, page: $page) {
    records {
      breakContractId
      breakContractCode
      status
      statusDesc
      statusNote
      breakDate
      saleDate
      photos
      saleOrderId
      saleOrderType
      saleOrderCode
      breakContractItem {
        breakContractId
        breakContractItemId
        commoditySku {
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
        breakContractType
        breakContractTypeDesc
        estimateFine
        breakContractReason
        actualFine
        fineDate
        fineWay
        fineWayDesc
      }
      customer {
        customerId
        customerName
        customerType
      }
      createUser {
        userId
        userName
        phoneNum
      }
      createTime
      belongOrg {
        orgId
        orgName
      }
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageBreakContractQuery__
 *
 * To run a query within a React component, call `usePageBreakContractQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageBreakContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageBreakContractQuery({
 *   variables: {
 *      pageBreakContractInput: // value for 'pageBreakContractInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageBreakContractQuery(baseOptions?: Apollo.QueryHookOptions<PageBreakContractQuery, PageBreakContractQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageBreakContractQuery, PageBreakContractQueryVariables>(PageBreakContractDocument, options);
      }
export function usePageBreakContractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageBreakContractQuery, PageBreakContractQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageBreakContractQuery, PageBreakContractQueryVariables>(PageBreakContractDocument, options);
        }
export type PageBreakContractQueryHookResult = ReturnType<typeof usePageBreakContractQuery>;
export type PageBreakContractLazyQueryHookResult = ReturnType<typeof usePageBreakContractLazyQuery>;
export type PageBreakContractQueryResult = Apollo.QueryResult<PageBreakContractQuery, PageBreakContractQueryVariables>;
export const ListBreakContractCommodityDocument = gql`
    query listBreakContractCommodity($breakContractCommodityInput: BreakContractCommodityInput) {
  listBreakContractCommodity(
    breakContractCommodityInput: $breakContractCommodityInput
  ) {
    customer {
      customerId
      customerName
      customerType
    }
    saleTime
    outOrderId
    outOrderCode
    commodities {
      commoditySku {
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
      outOrderItemId
      outOrderId
    }
  }
}
    `;

/**
 * __useListBreakContractCommodityQuery__
 *
 * To run a query within a React component, call `useListBreakContractCommodityQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBreakContractCommodityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBreakContractCommodityQuery({
 *   variables: {
 *      breakContractCommodityInput: // value for 'breakContractCommodityInput'
 *   },
 * });
 */
export function useListBreakContractCommodityQuery(baseOptions?: Apollo.QueryHookOptions<ListBreakContractCommodityQuery, ListBreakContractCommodityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBreakContractCommodityQuery, ListBreakContractCommodityQueryVariables>(ListBreakContractCommodityDocument, options);
      }
export function useListBreakContractCommodityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBreakContractCommodityQuery, ListBreakContractCommodityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBreakContractCommodityQuery, ListBreakContractCommodityQueryVariables>(ListBreakContractCommodityDocument, options);
        }
export type ListBreakContractCommodityQueryHookResult = ReturnType<typeof useListBreakContractCommodityQuery>;
export type ListBreakContractCommodityLazyQueryHookResult = ReturnType<typeof useListBreakContractCommodityLazyQuery>;
export type ListBreakContractCommodityQueryResult = Apollo.QueryResult<ListBreakContractCommodityQuery, ListBreakContractCommodityQueryVariables>;
export const BreakContractOrderDocument = gql`
    query breakContractOrder($breakContractOrderInput: BreakContractOrderInput) {
  breakContractOrder(breakContractOrderInput: $breakContractOrderInput) {
    breakContractId
    breakContractCode
    status
    statusDesc
    statusNote
    breakDate
    saleDate
    photos
    saleOrderId
    saleOrderType
    saleOrderCode
    breakContractItem {
      breakContractId
      breakContractItemId
      commoditySku {
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
      breakContractType
      breakContractTypeDesc
      estimateFine
      breakContractReason
      actualFine
      fineDate
      fineWay
      fineWayDesc
    }
    customer {
      customerId
      customerName
      customerType
    }
    createUser {
      userId
      userName
      phoneNum
    }
    createTime
    submitInfo {
      breakContractId
      submitUser {
        userId
        userName
        phoneNum
      }
      submitTime
    }
    belongOrg {
      orgId
      orgName
    }
  }
}
    `;

/**
 * __useBreakContractOrderQuery__
 *
 * To run a query within a React component, call `useBreakContractOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useBreakContractOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBreakContractOrderQuery({
 *   variables: {
 *      breakContractOrderInput: // value for 'breakContractOrderInput'
 *   },
 * });
 */
export function useBreakContractOrderQuery(baseOptions?: Apollo.QueryHookOptions<BreakContractOrderQuery, BreakContractOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BreakContractOrderQuery, BreakContractOrderQueryVariables>(BreakContractOrderDocument, options);
      }
export function useBreakContractOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BreakContractOrderQuery, BreakContractOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BreakContractOrderQuery, BreakContractOrderQueryVariables>(BreakContractOrderDocument, options);
        }
export type BreakContractOrderQueryHookResult = ReturnType<typeof useBreakContractOrderQuery>;
export type BreakContractOrderLazyQueryHookResult = ReturnType<typeof useBreakContractOrderLazyQuery>;
export type BreakContractOrderQueryResult = Apollo.QueryResult<BreakContractOrderQuery, BreakContractOrderQueryVariables>;
export const BreakContractFineTypeDocument = gql`
    query BreakContractFineType($labelId: Int!) {
  breakContractFineType(labelId: $labelId) {
    label
    value
  }
}
    `;

/**
 * __useBreakContractFineTypeQuery__
 *
 * To run a query within a React component, call `useBreakContractFineTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useBreakContractFineTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBreakContractFineTypeQuery({
 *   variables: {
 *      labelId: // value for 'labelId'
 *   },
 * });
 */
export function useBreakContractFineTypeQuery(baseOptions: Apollo.QueryHookOptions<BreakContractFineTypeQuery, BreakContractFineTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BreakContractFineTypeQuery, BreakContractFineTypeQueryVariables>(BreakContractFineTypeDocument, options);
      }
export function useBreakContractFineTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BreakContractFineTypeQuery, BreakContractFineTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BreakContractFineTypeQuery, BreakContractFineTypeQueryVariables>(BreakContractFineTypeDocument, options);
        }
export type BreakContractFineTypeQueryHookResult = ReturnType<typeof useBreakContractFineTypeQuery>;
export type BreakContractFineTypeLazyQueryHookResult = ReturnType<typeof useBreakContractFineTypeLazyQuery>;
export type BreakContractFineTypeQueryResult = Apollo.QueryResult<BreakContractFineTypeQuery, BreakContractFineTypeQueryVariables>;
export const CreateBreakContractDocument = gql`
    mutation createBreakContract($breakContractCreateInput: BreakContractCreateInput) {
  createBreakContract(breakContractCreateInput: $breakContractCreateInput)
}
    `;
export type CreateBreakContractMutationFn = Apollo.MutationFunction<CreateBreakContractMutation, CreateBreakContractMutationVariables>;

/**
 * __useCreateBreakContractMutation__
 *
 * To run a mutation, you first call `useCreateBreakContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBreakContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBreakContractMutation, { data, loading, error }] = useCreateBreakContractMutation({
 *   variables: {
 *      breakContractCreateInput: // value for 'breakContractCreateInput'
 *   },
 * });
 */
export function useCreateBreakContractMutation(baseOptions?: Apollo.MutationHookOptions<CreateBreakContractMutation, CreateBreakContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBreakContractMutation, CreateBreakContractMutationVariables>(CreateBreakContractDocument, options);
      }
export type CreateBreakContractMutationHookResult = ReturnType<typeof useCreateBreakContractMutation>;
export type CreateBreakContractMutationResult = Apollo.MutationResult<CreateBreakContractMutation>;
export type CreateBreakContractMutationOptions = Apollo.BaseMutationOptions<CreateBreakContractMutation, CreateBreakContractMutationVariables>;
export const UpdateBreakContractDocument = gql`
    mutation UpdateBreakContract($breakContractUpdateInput: BreakContractUpdateInput) {
  updateBreakContract(breakContractUpdateInput: $breakContractUpdateInput)
}
    `;
export type UpdateBreakContractMutationFn = Apollo.MutationFunction<UpdateBreakContractMutation, UpdateBreakContractMutationVariables>;

/**
 * __useUpdateBreakContractMutation__
 *
 * To run a mutation, you first call `useUpdateBreakContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBreakContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBreakContractMutation, { data, loading, error }] = useUpdateBreakContractMutation({
 *   variables: {
 *      breakContractUpdateInput: // value for 'breakContractUpdateInput'
 *   },
 * });
 */
export function useUpdateBreakContractMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBreakContractMutation, UpdateBreakContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBreakContractMutation, UpdateBreakContractMutationVariables>(UpdateBreakContractDocument, options);
      }
export type UpdateBreakContractMutationHookResult = ReturnType<typeof useUpdateBreakContractMutation>;
export type UpdateBreakContractMutationResult = Apollo.MutationResult<UpdateBreakContractMutation>;
export type UpdateBreakContractMutationOptions = Apollo.BaseMutationOptions<UpdateBreakContractMutation, UpdateBreakContractMutationVariables>;
export const SubmitBreakContractDocument = gql`
    mutation SubmitBreakContract($breakContractSubmitInput: BreakContractSubmitInput) {
  submitBreakContract(breakContractSubmitInput: $breakContractSubmitInput)
}
    `;
export type SubmitBreakContractMutationFn = Apollo.MutationFunction<SubmitBreakContractMutation, SubmitBreakContractMutationVariables>;

/**
 * __useSubmitBreakContractMutation__
 *
 * To run a mutation, you first call `useSubmitBreakContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitBreakContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitBreakContractMutation, { data, loading, error }] = useSubmitBreakContractMutation({
 *   variables: {
 *      breakContractSubmitInput: // value for 'breakContractSubmitInput'
 *   },
 * });
 */
export function useSubmitBreakContractMutation(baseOptions?: Apollo.MutationHookOptions<SubmitBreakContractMutation, SubmitBreakContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitBreakContractMutation, SubmitBreakContractMutationVariables>(SubmitBreakContractDocument, options);
      }
export type SubmitBreakContractMutationHookResult = ReturnType<typeof useSubmitBreakContractMutation>;
export type SubmitBreakContractMutationResult = Apollo.MutationResult<SubmitBreakContractMutation>;
export type SubmitBreakContractMutationOptions = Apollo.BaseMutationOptions<SubmitBreakContractMutation, SubmitBreakContractMutationVariables>;
export const CancelBreakContractDocument = gql`
    mutation CancelBreakContract($breakContractCancelInput: BreakContractCancelInput) {
  cancelBreakContract(breakContractCancelInput: $breakContractCancelInput)
}
    `;
export type CancelBreakContractMutationFn = Apollo.MutationFunction<CancelBreakContractMutation, CancelBreakContractMutationVariables>;

/**
 * __useCancelBreakContractMutation__
 *
 * To run a mutation, you first call `useCancelBreakContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelBreakContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelBreakContractMutation, { data, loading, error }] = useCancelBreakContractMutation({
 *   variables: {
 *      breakContractCancelInput: // value for 'breakContractCancelInput'
 *   },
 * });
 */
export function useCancelBreakContractMutation(baseOptions?: Apollo.MutationHookOptions<CancelBreakContractMutation, CancelBreakContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelBreakContractMutation, CancelBreakContractMutationVariables>(CancelBreakContractDocument, options);
      }
export type CancelBreakContractMutationHookResult = ReturnType<typeof useCancelBreakContractMutation>;
export type CancelBreakContractMutationResult = Apollo.MutationResult<CancelBreakContractMutation>;
export type CancelBreakContractMutationOptions = Apollo.BaseMutationOptions<CancelBreakContractMutation, CancelBreakContractMutationVariables>;
export const BreakContractFineWayDocument = gql`
    query breakContractFineWay {
  breakContractFineWay {
    label
    value
  }
}
    `;

/**
 * __useBreakContractFineWayQuery__
 *
 * To run a query within a React component, call `useBreakContractFineWayQuery` and pass it any options that fit your needs.
 * When your component renders, `useBreakContractFineWayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBreakContractFineWayQuery({
 *   variables: {
 *   },
 * });
 */
export function useBreakContractFineWayQuery(baseOptions?: Apollo.QueryHookOptions<BreakContractFineWayQuery, BreakContractFineWayQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BreakContractFineWayQuery, BreakContractFineWayQueryVariables>(BreakContractFineWayDocument, options);
      }
export function useBreakContractFineWayLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BreakContractFineWayQuery, BreakContractFineWayQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BreakContractFineWayQuery, BreakContractFineWayQueryVariables>(BreakContractFineWayDocument, options);
        }
export type BreakContractFineWayQueryHookResult = ReturnType<typeof useBreakContractFineWayQuery>;
export type BreakContractFineWayLazyQueryHookResult = ReturnType<typeof useBreakContractFineWayLazyQuery>;
export type BreakContractFineWayQueryResult = Apollo.QueryResult<BreakContractFineWayQuery, BreakContractFineWayQueryVariables>;
export const AuditBreakContractDocument = gql`
    mutation auditBreakContract($breakContractAuditInput: BreakContractAuditInput) {
  auditBreakContract(breakContractAuditInput: $breakContractAuditInput)
}
    `;
export type AuditBreakContractMutationFn = Apollo.MutationFunction<AuditBreakContractMutation, AuditBreakContractMutationVariables>;

/**
 * __useAuditBreakContractMutation__
 *
 * To run a mutation, you first call `useAuditBreakContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuditBreakContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [auditBreakContractMutation, { data, loading, error }] = useAuditBreakContractMutation({
 *   variables: {
 *      breakContractAuditInput: // value for 'breakContractAuditInput'
 *   },
 * });
 */
export function useAuditBreakContractMutation(baseOptions?: Apollo.MutationHookOptions<AuditBreakContractMutation, AuditBreakContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuditBreakContractMutation, AuditBreakContractMutationVariables>(AuditBreakContractDocument, options);
      }
export type AuditBreakContractMutationHookResult = ReturnType<typeof useAuditBreakContractMutation>;
export type AuditBreakContractMutationResult = Apollo.MutationResult<AuditBreakContractMutation>;
export type AuditBreakContractMutationOptions = Apollo.BaseMutationOptions<AuditBreakContractMutation, AuditBreakContractMutationVariables>;
export const RollBackBreakContractDocument = gql`
    mutation rollBackBreakContract($breakContractRollBackInput: BreakContractRollBackInput) {
  rollBackBreakContract(breakContractRollBackInput: $breakContractRollBackInput)
}
    `;
export type RollBackBreakContractMutationFn = Apollo.MutationFunction<RollBackBreakContractMutation, RollBackBreakContractMutationVariables>;

/**
 * __useRollBackBreakContractMutation__
 *
 * To run a mutation, you first call `useRollBackBreakContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRollBackBreakContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rollBackBreakContractMutation, { data, loading, error }] = useRollBackBreakContractMutation({
 *   variables: {
 *      breakContractRollBackInput: // value for 'breakContractRollBackInput'
 *   },
 * });
 */
export function useRollBackBreakContractMutation(baseOptions?: Apollo.MutationHookOptions<RollBackBreakContractMutation, RollBackBreakContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RollBackBreakContractMutation, RollBackBreakContractMutationVariables>(RollBackBreakContractDocument, options);
      }
export type RollBackBreakContractMutationHookResult = ReturnType<typeof useRollBackBreakContractMutation>;
export type RollBackBreakContractMutationResult = Apollo.MutationResult<RollBackBreakContractMutation>;
export type RollBackBreakContractMutationOptions = Apollo.BaseMutationOptions<RollBackBreakContractMutation, RollBackBreakContractMutationVariables>;
export const RejectedBreakContractDocument = gql`
    mutation rejectedBreakContract($breakContractRejectedInput: BreakContractRejectedInput) {
  rejectedBreakContract(breakContractRejectedInput: $breakContractRejectedInput)
}
    `;
export type RejectedBreakContractMutationFn = Apollo.MutationFunction<RejectedBreakContractMutation, RejectedBreakContractMutationVariables>;

/**
 * __useRejectedBreakContractMutation__
 *
 * To run a mutation, you first call `useRejectedBreakContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectedBreakContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectedBreakContractMutation, { data, loading, error }] = useRejectedBreakContractMutation({
 *   variables: {
 *      breakContractRejectedInput: // value for 'breakContractRejectedInput'
 *   },
 * });
 */
export function useRejectedBreakContractMutation(baseOptions?: Apollo.MutationHookOptions<RejectedBreakContractMutation, RejectedBreakContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectedBreakContractMutation, RejectedBreakContractMutationVariables>(RejectedBreakContractDocument, options);
      }
export type RejectedBreakContractMutationHookResult = ReturnType<typeof useRejectedBreakContractMutation>;
export type RejectedBreakContractMutationResult = Apollo.MutationResult<RejectedBreakContractMutation>;
export type RejectedBreakContractMutationOptions = Apollo.BaseMutationOptions<RejectedBreakContractMutation, RejectedBreakContractMutationVariables>;
export const BreakContractTraceLogDocument = gql`
    query breakContractTraceLog($breakContractTraceLogInput: BreakContractTraceLogInput) {
  breakContractTraceLog(breakContractTraceLogInput: $breakContractTraceLogInput) {
    logId
    breakContractId
    logType
    logTypeText
    logDescription
    createTime
    createBy {
      userId
      userName
      phoneNum
    }
  }
}
    `;

/**
 * __useBreakContractTraceLogQuery__
 *
 * To run a query within a React component, call `useBreakContractTraceLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useBreakContractTraceLogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBreakContractTraceLogQuery({
 *   variables: {
 *      breakContractTraceLogInput: // value for 'breakContractTraceLogInput'
 *   },
 * });
 */
export function useBreakContractTraceLogQuery(baseOptions?: Apollo.QueryHookOptions<BreakContractTraceLogQuery, BreakContractTraceLogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BreakContractTraceLogQuery, BreakContractTraceLogQueryVariables>(BreakContractTraceLogDocument, options);
      }
export function useBreakContractTraceLogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BreakContractTraceLogQuery, BreakContractTraceLogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BreakContractTraceLogQuery, BreakContractTraceLogQueryVariables>(BreakContractTraceLogDocument, options);
        }
export type BreakContractTraceLogQueryHookResult = ReturnType<typeof useBreakContractTraceLogQuery>;
export type BreakContractTraceLogLazyQueryHookResult = ReturnType<typeof useBreakContractTraceLogLazyQuery>;
export type BreakContractTraceLogQueryResult = Apollo.QueryResult<BreakContractTraceLogQuery, BreakContractTraceLogQueryVariables>;
export const BreakContractStatusDocument = gql`
    query breakContractStatus($breakContractStatusInput: BreakContractStatusInput) {
  breakContractStatus(breakContractStatusInput: $breakContractStatusInput) {
    saleToSubmitCount
    saleToAuditCount
    saleToRejectedCount
    auditToAuditCount
  }
}
    `;

/**
 * __useBreakContractStatusQuery__
 *
 * To run a query within a React component, call `useBreakContractStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useBreakContractStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBreakContractStatusQuery({
 *   variables: {
 *      breakContractStatusInput: // value for 'breakContractStatusInput'
 *   },
 * });
 */
export function useBreakContractStatusQuery(baseOptions?: Apollo.QueryHookOptions<BreakContractStatusQuery, BreakContractStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BreakContractStatusQuery, BreakContractStatusQueryVariables>(BreakContractStatusDocument, options);
      }
export function useBreakContractStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BreakContractStatusQuery, BreakContractStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BreakContractStatusQuery, BreakContractStatusQueryVariables>(BreakContractStatusDocument, options);
        }
export type BreakContractStatusQueryHookResult = ReturnType<typeof useBreakContractStatusQuery>;
export type BreakContractStatusLazyQueryHookResult = ReturnType<typeof useBreakContractStatusLazyQuery>;
export type BreakContractStatusQueryResult = Apollo.QueryResult<BreakContractStatusQuery, BreakContractStatusQueryVariables>;