import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PagePitayaCostEntryQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCostEntryPageInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PagePitayaCostEntryQuery = { pagePitayaCostEntry?: { __typename?: 'PitayaCostEntryPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PitayaCostEntryDetailPayload', amount?: number, costEntryStatus?: SchemaTypes.BillStatus, costEntryStatusDesc?: string, costId?: string, costOrderCode?: string, costPaymentMethod: SchemaTypes.PayModeEnum, costPaymentMethodDesc?: string, costTimeEnd: number, costTimeStart: number, costType?: SchemaTypes.BillFreightTypeEnum, costTypeDesc?: string, createTime?: number, productionLink?: SchemaTypes.BillSource, productionLinkDesc?: string, rejectReason?: string, remark?: string, businessCode?: string, businessId?: string, auditRecordList?: Array<{ __typename?: 'CostEntryAuditLogInfo', costEntryAuditLogEnum?: SchemaTypes.CostEntryAuditLogEnum, costEntryAuditLogEnumDesc?: string, createTime?: number, rejectReason?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, costProveList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } };

export type GetPitayaCostEntryDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCostEntryIdInput>;
}>;


export type GetPitayaCostEntryDetailQuery = { getPitayaCostEntryDetail?: { __typename?: 'PitayaCostEntryDetailPayload', amount?: number, costEntryStatus?: SchemaTypes.BillStatus, costEntryStatusDesc?: string, costId?: string, costOrderCode?: string, costPaymentMethod: SchemaTypes.PayModeEnum, costPaymentMethodDesc?: string, costTimeEnd: number, costTimeStart: number, costType?: SchemaTypes.BillFreightTypeEnum, costTypeDesc?: string, createTime?: number, productionLink?: SchemaTypes.BillSource, productionLinkDesc?: string, rejectReason?: string, remark?: string, businessCode?: string, businessId?: string, auditRecordList?: Array<{ __typename?: 'CostEntryAuditLogInfo', costEntryAuditLogEnum?: SchemaTypes.CostEntryAuditLogEnum, costEntryAuditLogEnumDesc?: string, createTime?: number, rejectReason?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, costProveList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } } };

export type CountPitayaCostEntryByStatusQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CostEntryCountInput>;
}>;


export type CountPitayaCostEntryByStatusQuery = { countPitayaCostEntryByStatus?: { __typename?: 'PitayaCountCostEntryByStatusPayload', toSubmitNum?: number, underReviewNum?: number, underReviewNumBIZ?: number } };

export type CostEntryTypeQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CostEntryTypeInput>;
}>;


export type CostEntryTypeQuery = { costEntryType?: Array<{ __typename?: 'CostEntryTypePayload', typeEnum?: SchemaTypes.BillFreightTypeEnum, typeText?: string }> };

export type PitayaCostAddMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCostEntryAddInput>;
}>;


export type PitayaCostAddMutation = { pitayaCostAdd?: { __typename?: 'PitayaCostEntryIdPayload', costId?: string } };

export type CostEditMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CostEntryUpdateInput>;
}>;


export type CostEditMutation = { costEdit?: { __typename?: 'CostEntryIdPayload', costId?: string } };

export type PitayaCostEditMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCostEntryUpdateInput>;
}>;


export type PitayaCostEditMutation = { pitayaCostEdit?: { __typename?: 'PitayaCostEntryIdPayload', costId?: string } };

export type CostSubmitFdMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCostEntryIdInput>;
}>;


export type CostSubmitFdMutation = { costSubmitFD?: { __typename?: 'PitayaCostEntryIdPayload', costId?: string } };

export type PitayaCostCancelMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCostEntryIdInput>;
}>;


export type PitayaCostCancelMutation = { pitayaCostCancel?: boolean };

export type PitayaCostRevokeMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCostEntryIdInput>;
}>;


export type PitayaCostRevokeMutation = { pitayaCostRevoke?: boolean };

export type CostRejectBizMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCostEntryIdInput>;
}>;


export type CostRejectBizMutation = { costRejectBIZ?: boolean };

export type CostSubmitBizMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCostEntryIdInput>;
}>;


export type CostSubmitBizMutation = { costSubmitBIZ?: { __typename?: 'PitayaCostEntryIdPayload', costId?: string } };

export type ListCostEntryRelationSaleOrderQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListCostEntryRelationSaleOrderInput;
}>;


export type ListCostEntryRelationSaleOrderQuery = { listCostEntryRelationSaleOrder?: Array<{ __typename?: 'ListCostEntryRelationSaleOrderPayload', code?: string, createTime?: number, id?: string, saleDate?: number, subType?: number, subTypeName?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }, commodityItemsList?: Array<{ __typename?: 'ListCostEntryRelationSaleOrderItemPayload', id?: string, totalQuantity?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> };

export type ListCostEntryCustomerQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListCostEntryCustomerInput;
}>;


export type ListCostEntryCustomerQuery = { listCostEntryCustomer?: Array<{ __typename?: 'CustomerTreePayload', belongId: number, belongName?: string, belongType: number, optional?: boolean, visible?: boolean, children?: Array<{ __typename?: 'CustomerTreePayload', belongId: number, belongName?: string, belongType: number, optional?: boolean, visible?: boolean }>, parent?: { __typename?: 'CustomerTreePayload', belongId: number, belongName?: string, belongType: number, optional?: boolean, visible?: boolean } }> };


export const PagePitayaCostEntryDocument = gql`
    query pagePitayaCostEntry($input: PitayaCostEntryPageInput, $page: Page) {
  pagePitayaCostEntry(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      amount
      auditRecordList {
        costEntryAuditLogEnum
        costEntryAuditLogEnumDesc
        createBy {
          phoneNum
          userId
          userName
        }
        createTime
        rejectReason
      }
      belongOrg {
        orgId
        orgName
      }
      costEntryStatus
      costEntryStatusDesc
      costId
      costOrderCode
      costPaymentMethod
      costPaymentMethodDesc
      costProveList {
        fileId
        fileName
        fileUploadTime
        fileUrl
      }
      costTimeEnd
      costTimeStart
      costType
      costTypeDesc
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      productionLink
      productionLinkDesc
      rejectReason
      remark
      supplier {
        supplierId
        supplierName
      }
      businessCode
      businessId
    }
    totalRecords
  }
}
    `;

/**
 * __usePagePitayaCostEntryQuery__
 *
 * To run a query within a React component, call `usePagePitayaCostEntryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagePitayaCostEntryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagePitayaCostEntryQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePagePitayaCostEntryQuery(baseOptions?: Apollo.QueryHookOptions<PagePitayaCostEntryQuery, PagePitayaCostEntryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagePitayaCostEntryQuery, PagePitayaCostEntryQueryVariables>(PagePitayaCostEntryDocument, options);
      }
export function usePagePitayaCostEntryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagePitayaCostEntryQuery, PagePitayaCostEntryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagePitayaCostEntryQuery, PagePitayaCostEntryQueryVariables>(PagePitayaCostEntryDocument, options);
        }
export type PagePitayaCostEntryQueryHookResult = ReturnType<typeof usePagePitayaCostEntryQuery>;
export type PagePitayaCostEntryLazyQueryHookResult = ReturnType<typeof usePagePitayaCostEntryLazyQuery>;
export type PagePitayaCostEntryQueryResult = Apollo.QueryResult<PagePitayaCostEntryQuery, PagePitayaCostEntryQueryVariables>;
export const GetPitayaCostEntryDetailDocument = gql`
    query getPitayaCostEntryDetail($input: PitayaCostEntryIdInput) {
  getPitayaCostEntryDetail(input: $input) {
    amount
    auditRecordList {
      costEntryAuditLogEnum
      costEntryAuditLogEnumDesc
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      rejectReason
    }
    belongOrg {
      orgId
      orgName
    }
    costEntryStatus
    costEntryStatusDesc
    costId
    costOrderCode
    costPaymentMethod
    costPaymentMethodDesc
    costProveList {
      fileId
      fileName
      fileUploadTime
      fileUrl
    }
    costTimeEnd
    costTimeStart
    costType
    costTypeDesc
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    productionLink
    productionLinkDesc
    rejectReason
    remark
    supplier {
      supplierId
      supplierName
    }
    businessCode
    businessId
  }
}
    `;

/**
 * __useGetPitayaCostEntryDetailQuery__
 *
 * To run a query within a React component, call `useGetPitayaCostEntryDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPitayaCostEntryDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPitayaCostEntryDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPitayaCostEntryDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetPitayaCostEntryDetailQuery, GetPitayaCostEntryDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPitayaCostEntryDetailQuery, GetPitayaCostEntryDetailQueryVariables>(GetPitayaCostEntryDetailDocument, options);
      }
export function useGetPitayaCostEntryDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPitayaCostEntryDetailQuery, GetPitayaCostEntryDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPitayaCostEntryDetailQuery, GetPitayaCostEntryDetailQueryVariables>(GetPitayaCostEntryDetailDocument, options);
        }
export type GetPitayaCostEntryDetailQueryHookResult = ReturnType<typeof useGetPitayaCostEntryDetailQuery>;
export type GetPitayaCostEntryDetailLazyQueryHookResult = ReturnType<typeof useGetPitayaCostEntryDetailLazyQuery>;
export type GetPitayaCostEntryDetailQueryResult = Apollo.QueryResult<GetPitayaCostEntryDetailQuery, GetPitayaCostEntryDetailQueryVariables>;
export const CountPitayaCostEntryByStatusDocument = gql`
    query countPitayaCostEntryByStatus($input: CostEntryCountInput) {
  countPitayaCostEntryByStatus(input: $input) {
    toSubmitNum
    underReviewNum
    underReviewNumBIZ
  }
}
    `;

/**
 * __useCountPitayaCostEntryByStatusQuery__
 *
 * To run a query within a React component, call `useCountPitayaCostEntryByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPitayaCostEntryByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPitayaCostEntryByStatusQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCountPitayaCostEntryByStatusQuery(baseOptions?: Apollo.QueryHookOptions<CountPitayaCostEntryByStatusQuery, CountPitayaCostEntryByStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountPitayaCostEntryByStatusQuery, CountPitayaCostEntryByStatusQueryVariables>(CountPitayaCostEntryByStatusDocument, options);
      }
export function useCountPitayaCostEntryByStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountPitayaCostEntryByStatusQuery, CountPitayaCostEntryByStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountPitayaCostEntryByStatusQuery, CountPitayaCostEntryByStatusQueryVariables>(CountPitayaCostEntryByStatusDocument, options);
        }
export type CountPitayaCostEntryByStatusQueryHookResult = ReturnType<typeof useCountPitayaCostEntryByStatusQuery>;
export type CountPitayaCostEntryByStatusLazyQueryHookResult = ReturnType<typeof useCountPitayaCostEntryByStatusLazyQuery>;
export type CountPitayaCostEntryByStatusQueryResult = Apollo.QueryResult<CountPitayaCostEntryByStatusQuery, CountPitayaCostEntryByStatusQueryVariables>;
export const CostEntryTypeDocument = gql`
    query costEntryType($input: CostEntryTypeInput) {
  costEntryType(input: $input) {
    typeEnum
    typeText
  }
}
    `;

/**
 * __useCostEntryTypeQuery__
 *
 * To run a query within a React component, call `useCostEntryTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCostEntryTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCostEntryTypeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCostEntryTypeQuery(baseOptions?: Apollo.QueryHookOptions<CostEntryTypeQuery, CostEntryTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CostEntryTypeQuery, CostEntryTypeQueryVariables>(CostEntryTypeDocument, options);
      }
export function useCostEntryTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CostEntryTypeQuery, CostEntryTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CostEntryTypeQuery, CostEntryTypeQueryVariables>(CostEntryTypeDocument, options);
        }
export type CostEntryTypeQueryHookResult = ReturnType<typeof useCostEntryTypeQuery>;
export type CostEntryTypeLazyQueryHookResult = ReturnType<typeof useCostEntryTypeLazyQuery>;
export type CostEntryTypeQueryResult = Apollo.QueryResult<CostEntryTypeQuery, CostEntryTypeQueryVariables>;
export const PitayaCostAddDocument = gql`
    mutation pitayaCostAdd($input: PitayaCostEntryAddInput) {
  pitayaCostAdd(input: $input) {
    costId
  }
}
    `;
export type PitayaCostAddMutationFn = Apollo.MutationFunction<PitayaCostAddMutation, PitayaCostAddMutationVariables>;

/**
 * __usePitayaCostAddMutation__
 *
 * To run a mutation, you first call `usePitayaCostAddMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaCostAddMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaCostAddMutation, { data, loading, error }] = usePitayaCostAddMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaCostAddMutation(baseOptions?: Apollo.MutationHookOptions<PitayaCostAddMutation, PitayaCostAddMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PitayaCostAddMutation, PitayaCostAddMutationVariables>(PitayaCostAddDocument, options);
      }
export type PitayaCostAddMutationHookResult = ReturnType<typeof usePitayaCostAddMutation>;
export type PitayaCostAddMutationResult = Apollo.MutationResult<PitayaCostAddMutation>;
export type PitayaCostAddMutationOptions = Apollo.BaseMutationOptions<PitayaCostAddMutation, PitayaCostAddMutationVariables>;
export const CostEditDocument = gql`
    mutation costEdit($input: CostEntryUpdateInput) {
  costEdit(input: $input) {
    costId
  }
}
    `;
export type CostEditMutationFn = Apollo.MutationFunction<CostEditMutation, CostEditMutationVariables>;

/**
 * __useCostEditMutation__
 *
 * To run a mutation, you first call `useCostEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCostEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [costEditMutation, { data, loading, error }] = useCostEditMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCostEditMutation(baseOptions?: Apollo.MutationHookOptions<CostEditMutation, CostEditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CostEditMutation, CostEditMutationVariables>(CostEditDocument, options);
      }
export type CostEditMutationHookResult = ReturnType<typeof useCostEditMutation>;
export type CostEditMutationResult = Apollo.MutationResult<CostEditMutation>;
export type CostEditMutationOptions = Apollo.BaseMutationOptions<CostEditMutation, CostEditMutationVariables>;
export const PitayaCostEditDocument = gql`
    mutation pitayaCostEdit($input: PitayaCostEntryUpdateInput) {
  pitayaCostEdit(input: $input) {
    costId
  }
}
    `;
export type PitayaCostEditMutationFn = Apollo.MutationFunction<PitayaCostEditMutation, PitayaCostEditMutationVariables>;

/**
 * __usePitayaCostEditMutation__
 *
 * To run a mutation, you first call `usePitayaCostEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaCostEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaCostEditMutation, { data, loading, error }] = usePitayaCostEditMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaCostEditMutation(baseOptions?: Apollo.MutationHookOptions<PitayaCostEditMutation, PitayaCostEditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PitayaCostEditMutation, PitayaCostEditMutationVariables>(PitayaCostEditDocument, options);
      }
export type PitayaCostEditMutationHookResult = ReturnType<typeof usePitayaCostEditMutation>;
export type PitayaCostEditMutationResult = Apollo.MutationResult<PitayaCostEditMutation>;
export type PitayaCostEditMutationOptions = Apollo.BaseMutationOptions<PitayaCostEditMutation, PitayaCostEditMutationVariables>;
export const CostSubmitFdDocument = gql`
    mutation costSubmitFD($input: PitayaCostEntryIdInput) {
  costSubmitFD(input: $input) {
    costId
  }
}
    `;
export type CostSubmitFdMutationFn = Apollo.MutationFunction<CostSubmitFdMutation, CostSubmitFdMutationVariables>;

/**
 * __useCostSubmitFdMutation__
 *
 * To run a mutation, you first call `useCostSubmitFdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCostSubmitFdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [costSubmitFdMutation, { data, loading, error }] = useCostSubmitFdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCostSubmitFdMutation(baseOptions?: Apollo.MutationHookOptions<CostSubmitFdMutation, CostSubmitFdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CostSubmitFdMutation, CostSubmitFdMutationVariables>(CostSubmitFdDocument, options);
      }
export type CostSubmitFdMutationHookResult = ReturnType<typeof useCostSubmitFdMutation>;
export type CostSubmitFdMutationResult = Apollo.MutationResult<CostSubmitFdMutation>;
export type CostSubmitFdMutationOptions = Apollo.BaseMutationOptions<CostSubmitFdMutation, CostSubmitFdMutationVariables>;
export const PitayaCostCancelDocument = gql`
    mutation pitayaCostCancel($input: PitayaCostEntryIdInput) {
  pitayaCostCancel(input: $input)
}
    `;
export type PitayaCostCancelMutationFn = Apollo.MutationFunction<PitayaCostCancelMutation, PitayaCostCancelMutationVariables>;

/**
 * __usePitayaCostCancelMutation__
 *
 * To run a mutation, you first call `usePitayaCostCancelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaCostCancelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaCostCancelMutation, { data, loading, error }] = usePitayaCostCancelMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaCostCancelMutation(baseOptions?: Apollo.MutationHookOptions<PitayaCostCancelMutation, PitayaCostCancelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PitayaCostCancelMutation, PitayaCostCancelMutationVariables>(PitayaCostCancelDocument, options);
      }
export type PitayaCostCancelMutationHookResult = ReturnType<typeof usePitayaCostCancelMutation>;
export type PitayaCostCancelMutationResult = Apollo.MutationResult<PitayaCostCancelMutation>;
export type PitayaCostCancelMutationOptions = Apollo.BaseMutationOptions<PitayaCostCancelMutation, PitayaCostCancelMutationVariables>;
export const PitayaCostRevokeDocument = gql`
    mutation pitayaCostRevoke($input: PitayaCostEntryIdInput) {
  pitayaCostRevoke(input: $input)
}
    `;
export type PitayaCostRevokeMutationFn = Apollo.MutationFunction<PitayaCostRevokeMutation, PitayaCostRevokeMutationVariables>;

/**
 * __usePitayaCostRevokeMutation__
 *
 * To run a mutation, you first call `usePitayaCostRevokeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaCostRevokeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaCostRevokeMutation, { data, loading, error }] = usePitayaCostRevokeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaCostRevokeMutation(baseOptions?: Apollo.MutationHookOptions<PitayaCostRevokeMutation, PitayaCostRevokeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PitayaCostRevokeMutation, PitayaCostRevokeMutationVariables>(PitayaCostRevokeDocument, options);
      }
export type PitayaCostRevokeMutationHookResult = ReturnType<typeof usePitayaCostRevokeMutation>;
export type PitayaCostRevokeMutationResult = Apollo.MutationResult<PitayaCostRevokeMutation>;
export type PitayaCostRevokeMutationOptions = Apollo.BaseMutationOptions<PitayaCostRevokeMutation, PitayaCostRevokeMutationVariables>;
export const CostRejectBizDocument = gql`
    mutation costRejectBIZ($input: PitayaCostEntryIdInput) {
  costRejectBIZ(input: $input)
}
    `;
export type CostRejectBizMutationFn = Apollo.MutationFunction<CostRejectBizMutation, CostRejectBizMutationVariables>;

/**
 * __useCostRejectBizMutation__
 *
 * To run a mutation, you first call `useCostRejectBizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCostRejectBizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [costRejectBizMutation, { data, loading, error }] = useCostRejectBizMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCostRejectBizMutation(baseOptions?: Apollo.MutationHookOptions<CostRejectBizMutation, CostRejectBizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CostRejectBizMutation, CostRejectBizMutationVariables>(CostRejectBizDocument, options);
      }
export type CostRejectBizMutationHookResult = ReturnType<typeof useCostRejectBizMutation>;
export type CostRejectBizMutationResult = Apollo.MutationResult<CostRejectBizMutation>;
export type CostRejectBizMutationOptions = Apollo.BaseMutationOptions<CostRejectBizMutation, CostRejectBizMutationVariables>;
export const CostSubmitBizDocument = gql`
    mutation costSubmitBIZ($input: PitayaCostEntryIdInput) {
  costSubmitBIZ(input: $input) {
    costId
  }
}
    `;
export type CostSubmitBizMutationFn = Apollo.MutationFunction<CostSubmitBizMutation, CostSubmitBizMutationVariables>;

/**
 * __useCostSubmitBizMutation__
 *
 * To run a mutation, you first call `useCostSubmitBizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCostSubmitBizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [costSubmitBizMutation, { data, loading, error }] = useCostSubmitBizMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCostSubmitBizMutation(baseOptions?: Apollo.MutationHookOptions<CostSubmitBizMutation, CostSubmitBizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CostSubmitBizMutation, CostSubmitBizMutationVariables>(CostSubmitBizDocument, options);
      }
export type CostSubmitBizMutationHookResult = ReturnType<typeof useCostSubmitBizMutation>;
export type CostSubmitBizMutationResult = Apollo.MutationResult<CostSubmitBizMutation>;
export type CostSubmitBizMutationOptions = Apollo.BaseMutationOptions<CostSubmitBizMutation, CostSubmitBizMutationVariables>;
export const ListCostEntryRelationSaleOrderDocument = gql`
    query listCostEntryRelationSaleOrder($input: ListCostEntryRelationSaleOrderInput!) {
  listCostEntryRelationSaleOrder(input: $input) {
    createBy {
      phoneNum
      userId
      userName
    }
    customer {
      customerId
      customerName
      customerType
      lastLevelId
    }
    code
    commodityItemsList {
      commoditySku {
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
        commodityId
        commodityName
        commoditySkuId
        commoditySkuName
        commoditySpecOptionId
        commoditySpecOptionName
        conversion
      }
      totalType {
        unitId
        unitName
      }
      unitType {
        unitId
        unitName
      }
      id
      totalQuantity
      unitQuantity
    }
    createTime
    id
    saleDate
    subType
    subTypeName
  }
}
    `;

/**
 * __useListCostEntryRelationSaleOrderQuery__
 *
 * To run a query within a React component, call `useListCostEntryRelationSaleOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCostEntryRelationSaleOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCostEntryRelationSaleOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListCostEntryRelationSaleOrderQuery(baseOptions: Apollo.QueryHookOptions<ListCostEntryRelationSaleOrderQuery, ListCostEntryRelationSaleOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCostEntryRelationSaleOrderQuery, ListCostEntryRelationSaleOrderQueryVariables>(ListCostEntryRelationSaleOrderDocument, options);
      }
export function useListCostEntryRelationSaleOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCostEntryRelationSaleOrderQuery, ListCostEntryRelationSaleOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCostEntryRelationSaleOrderQuery, ListCostEntryRelationSaleOrderQueryVariables>(ListCostEntryRelationSaleOrderDocument, options);
        }
export type ListCostEntryRelationSaleOrderQueryHookResult = ReturnType<typeof useListCostEntryRelationSaleOrderQuery>;
export type ListCostEntryRelationSaleOrderLazyQueryHookResult = ReturnType<typeof useListCostEntryRelationSaleOrderLazyQuery>;
export type ListCostEntryRelationSaleOrderQueryResult = Apollo.QueryResult<ListCostEntryRelationSaleOrderQuery, ListCostEntryRelationSaleOrderQueryVariables>;
export const ListCostEntryCustomerDocument = gql`
    query listCostEntryCustomer($input: ListCostEntryCustomerInput!) {
  listCostEntryCustomer(input: $input) {
    belongId
    belongName
    belongType
    children {
      belongId
      belongName
      belongType
      optional
      visible
    }
    optional
    parent {
      belongId
      belongName
      belongType
      optional
      visible
    }
    visible
  }
}
    `;

/**
 * __useListCostEntryCustomerQuery__
 *
 * To run a query within a React component, call `useListCostEntryCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCostEntryCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCostEntryCustomerQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListCostEntryCustomerQuery(baseOptions: Apollo.QueryHookOptions<ListCostEntryCustomerQuery, ListCostEntryCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCostEntryCustomerQuery, ListCostEntryCustomerQueryVariables>(ListCostEntryCustomerDocument, options);
      }
export function useListCostEntryCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCostEntryCustomerQuery, ListCostEntryCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCostEntryCustomerQuery, ListCostEntryCustomerQueryVariables>(ListCostEntryCustomerDocument, options);
        }
export type ListCostEntryCustomerQueryHookResult = ReturnType<typeof useListCostEntryCustomerQuery>;
export type ListCostEntryCustomerLazyQueryHookResult = ReturnType<typeof useListCostEntryCustomerLazyQuery>;
export type ListCostEntryCustomerQueryResult = Apollo.QueryResult<ListCostEntryCustomerQuery, ListCostEntryCustomerQueryVariables>;