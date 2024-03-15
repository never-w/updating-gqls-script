import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFilterQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.FilterTypeEnum>;
}>;


export type GetFilterQuery = { getFilter?: Array<{ __typename?: 'DurianOption', label?: string, value?: string, count?: number, country?: SchemaTypes.DurianCountryTypeEnum, desc?: string, disabled?: boolean, children?: Array<{ __typename?: 'DurianOption', label?: string, value?: string, count?: number, country?: SchemaTypes.DurianCountryTypeEnum, desc?: string, disabled?: boolean }> }> };

export type GetIFrameUrlQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.Scalars['ID'];
}>;


export type GetIFrameUrlQuery = { getIFrameUrl?: string };

export type PlanCommodityDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PlanCommodityDetailInput>;
}>;


export type PlanCommodityDetailQuery = { planCommodityDetail?: { __typename?: 'PlanCommodityDetailPayload', actualQuantity?: number, sampleQuantity?: number, taskId?: string, totalQuantity?: number, type?: SchemaTypes.DurianTaskType, commodityTime?: { __typename?: 'PlanCommodityTimePayload', deliverTime?: number, pickingTime?: number, show?: boolean, showSuggestSalesTime?: boolean, suggestSalesTime?: number }, items?: Array<{ __typename?: 'TablePayload', actualQuantity?: number, id?: string, records?: Array<any>, sampleQuantity?: number, title?: string, totalGrossWeight?: number, totalImportAmount?: number, totalNetWeight?: number, totalQuantity?: number, columns?: Array<{ __typename?: 'ColumnPayload', align?: SchemaTypes.DurianColumnAlignEnum, dataIndex?: string, summing?: boolean, title?: string }> }>, labels?: Array<{ __typename?: 'LabelPayload', orchardNo?: string, packagePlantNo?: string, files?: Array<{ __typename?: 'DurianFilePayload', fileId?: string, fileUploadTime?: number, fileUrl?: string, filename?: string, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } }> }>, tags?: Array<{ __typename?: 'TagInfoPayload', canDeleted?: boolean, createBy?: string, createTime?: number, createUserName?: string, enabled?: SchemaTypes.EnableEnum, id?: string, meaning?: string, name?: string, planId?: string, remark?: string, styleColor?: string, tagBelong?: SchemaTypes.TagBelongEnum, tagId?: string, type?: SchemaTypes.TagTypeEnum }> } };

export type CommitSopAnswerMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SopCommitInput>;
}>;


export type CommitSopAnswerMutation = { commitSopAnswer?: string };

export type GetSopQuestionQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SopGetInput>;
}>;


export type GetSopQuestionQuery = { getSopQuestion?: { __typename?: 'SopGetPayload', finishTime?: number, sopDesc?: string, sopId?: string, sopName?: string, results?: Array<{ __typename?: 'SopGetInfoPayload', checkName?: string, checkResultType?: SchemaTypes.SopCheckItem, inputTextRule?: SchemaTypes.InputTextRule, isRemark?: boolean, nameLocale?: any, remarkRequired?: boolean, remarks?: string, sopDetailId?: string, sort?: number, answer?: { __typename?: 'SopAnswerPayload', answer?: string, remark?: string, sopDetailId?: string, files?: Array<{ __typename?: 'DurianFilePayload', fileId?: string, fileUploadTime?: number, fileUrl?: string, filename?: string, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } }> }, options?: Array<{ __typename?: 'SopQuestionOptionPayload', isRemark?: boolean, name?: string, remarkRequired?: boolean, sopDetailOptionId?: string, sort?: number, value?: string }> }> } };

export type ModifySopAnswerMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SopModifyInput>;
}>;


export type ModifySopAnswerMutation = { modifySopAnswer?: number };

export type OperationStandardsQueryVariables = SchemaTypes.Exact<{
  standardType?: SchemaTypes.InputMaybe<SchemaTypes.OperationStandardType>;
}>;


export type OperationStandardsQuery = { operationStandards?: string };

export type PlanTagsQueryVariables = SchemaTypes.Exact<{
  planId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type PlanTagsQuery = { planTags?: Array<{ __typename?: 'TagInfoPayload', canDeleted?: boolean, createBy?: string, createTime?: number, createUserName?: string, enabled?: SchemaTypes.EnableEnum, id?: string, meaning?: string, name?: string, planId?: string, remark?: string, styleColor?: string, tagBelong?: SchemaTypes.TagBelongEnum, tagId?: string, type?: SchemaTypes.TagTypeEnum }> };

export type GetSopAnswerQueryVariables = SchemaTypes.Exact<{
  sopId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type GetSopAnswerQuery = { getSopAnswer?: { __typename?: 'SopResultViewInfoPayload', finishTime?: number, sopDesc?: string, sopId?: string, sopName?: string, results?: Array<{ __typename?: 'SopGetInfoPayload', checkName?: string, checkResultType?: SchemaTypes.SopCheckItem, inputTextRule?: SchemaTypes.InputTextRule, isRemark?: boolean, nameLocale?: any, remarkRequired?: boolean, remarks?: string, sopDetailId?: string, sort?: number, answer?: { __typename?: 'SopAnswerPayload', answer?: string, remark?: string, sopDetailId?: string, files?: Array<{ __typename?: 'DurianFilePayload', fileId?: string, fileUploadTime?: number, fileUrl?: string, filename?: string, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } }> }, options?: Array<{ __typename?: 'SopQuestionOptionPayload', isRemark?: boolean, name?: string, remarkRequired?: boolean, sopDetailOptionId?: string, sort?: number, value?: string }> }> } };

export type TagsQueryVariables = SchemaTypes.Exact<{
  tagName?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['String']>;
}>;


export type TagsQuery = { tags?: Array<{ __typename?: 'TagSelectTextOption', disabled?: boolean, key?: string, styleColor?: string, title?: string, value?: string, children?: Array<{ __typename?: 'TagSelectTextOption', disabled?: boolean, key?: string, styleColor?: string, title?: string, value?: string, children?: Array<{ __typename?: 'TagSelectTextOption', disabled?: boolean, key?: string, styleColor?: string, title?: string, value?: string }> }> }> };

export type SingleDataPageAppQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SingleDataPageAppInput>;
}>;


export type SingleDataPageAppQuery = { singleDataPageApp?: { __typename?: 'SingleDataPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'SingleDataInfoPayload', cabinetBatchCode?: Array<string>, cabinetCode?: Array<string>, categoryId?: string, categoryName?: string, compositeState?: SchemaTypes.CompositeStateEnum, customerId?: Array<string>, customerName?: Array<string>, effectiveDate?: number, entryCustomsSupplier?: string, entryCustomsSupplierId?: string, entryPort?: string, entryPortId?: string, factoryDeliverTime?: number, id?: string, pictureUrl?: string, progress?: SchemaTypes.ProgressStateEnum, shipmentTime?: number, disinfectionReportList?: Array<{ __typename?: 'DurianFilePayload', fileId?: string, fileUploadTime?: number, fileUrl?: string, filename?: string, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } }>, importDeclarationList?: Array<{ __typename?: 'DurianFilePayload', fileId?: string, fileUploadTime?: number, fileUrl?: string, filename?: string, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } }>, inspectionQuarantineCertificateList?: Array<{ __typename?: 'DurianFilePayload', fileId?: string, fileUploadTime?: number, fileUrl?: string, filename?: string, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } }>, mergeFile?: { __typename?: 'DurianFilePayload', fileId?: string, fileUploadTime?: number, fileUrl?: string, filename?: string, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } }, nucleicAcidReportList?: Array<{ __typename?: 'DurianFilePayload', fileId?: string, fileUploadTime?: number, fileUrl?: string, filename?: string, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } }> }> } };

export type ConfirmEmptyCabinetMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ConfirmEmptyCabinetInput>;
}>;


export type ConfirmEmptyCabinetMutation = { confirmEmptyCabinet?: boolean };

export type ConfirmReceiptMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ReceiptInput>;
}>;


export type ConfirmReceiptMutation = { confirmReceipt?: boolean };

export type EmptyCabinetBillPageQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.EmptyCabinetBillPageInput>;
}>;


export type EmptyCabinetBillPageQuery = { emptyCabinetBillPage?: { __typename?: 'EmptyCabinetBillPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'EmptyCabinetBillPayload', cabinetBatchCode?: Array<string>, cabinetCode?: Array<string>, categoryName?: string, importPortName?: string, pictureUrl?: string, receiptDate?: number, receiptTaskId?: string, state?: SchemaTypes.EmptyCabinetBillStateEnum, stateDesc?: string, transportInfo?: { __typename?: 'TransportInfoPayload', driverName?: string, driverPhone?: string, plateNo?: string, shipmentDate?: number, trailerNo?: string } }> } };

export type EmptyCabinetBillQuantityQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.EmptyCabinetBillInput>;
}>;


export type EmptyCabinetBillQuantityQuery = { emptyCabinetBillQuantity?: { __typename?: 'EmptyCabinetBillQuantityPayload', waitCommitTotal?: number, waitReviewTotal?: number, waitTodoTotal?: number } };

export type SaveAndCommitBillMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.BillSaveCommitBillInput>;
}>;


export type SaveAndCommitBillMutation = { saveAndCommitBill?: boolean };

export type WithdrawBillMutationVariables = SchemaTypes.Exact<{
  billBusinessId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type WithdrawBillMutation = { withdrawBill?: boolean };


export const GetFilterDocument = gql`
    query getFilter($input: FilterTypeEnum) {
  getFilter(input: $input) {
    label
    value
    count
    country
    children {
      label
      value
      count
      country
      desc
      disabled
    }
    desc
    disabled
  }
}
    `;

/**
 * __useGetFilterQuery__
 *
 * To run a query within a React component, call `useGetFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilterQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetFilterQuery(baseOptions?: Apollo.QueryHookOptions<GetFilterQuery, GetFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilterQuery, GetFilterQueryVariables>(GetFilterDocument, options);
      }
export function useGetFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilterQuery, GetFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilterQuery, GetFilterQueryVariables>(GetFilterDocument, options);
        }
export type GetFilterQueryHookResult = ReturnType<typeof useGetFilterQuery>;
export type GetFilterLazyQueryHookResult = ReturnType<typeof useGetFilterLazyQuery>;
export type GetFilterQueryResult = Apollo.QueryResult<GetFilterQuery, GetFilterQueryVariables>;
export const GetIFrameUrlDocument = gql`
    query getIFrameUrl($input: ID!) {
  getIFrameUrl(input: $input)
}
    `;

/**
 * __useGetIFrameUrlQuery__
 *
 * To run a query within a React component, call `useGetIFrameUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIFrameUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIFrameUrlQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetIFrameUrlQuery(baseOptions: Apollo.QueryHookOptions<GetIFrameUrlQuery, GetIFrameUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIFrameUrlQuery, GetIFrameUrlQueryVariables>(GetIFrameUrlDocument, options);
      }
export function useGetIFrameUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIFrameUrlQuery, GetIFrameUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIFrameUrlQuery, GetIFrameUrlQueryVariables>(GetIFrameUrlDocument, options);
        }
export type GetIFrameUrlQueryHookResult = ReturnType<typeof useGetIFrameUrlQuery>;
export type GetIFrameUrlLazyQueryHookResult = ReturnType<typeof useGetIFrameUrlLazyQuery>;
export type GetIFrameUrlQueryResult = Apollo.QueryResult<GetIFrameUrlQuery, GetIFrameUrlQueryVariables>;
export const PlanCommodityDetailDocument = gql`
    query planCommodityDetail($input: PlanCommodityDetailInput) {
  planCommodityDetail(input: $input) {
    actualQuantity
    commodityTime {
      deliverTime
      pickingTime
      show
      showSuggestSalesTime
      suggestSalesTime
    }
    items {
      actualQuantity
      columns {
        align
        dataIndex
        summing
        title
      }
      id
      records
      sampleQuantity
      title
      totalGrossWeight
      totalImportAmount
      totalNetWeight
      totalQuantity
    }
    labels {
      files {
        externalInfo {
          watermarkText
        }
        fileId
        fileUploadTime
        fileUrl
        filename
      }
      orchardNo
      packagePlantNo
    }
    sampleQuantity
    tags {
      canDeleted
      createBy
      createTime
      createUserName
      enabled
      id
      meaning
      name
      planId
      remark
      styleColor
      tagBelong
      tagId
      type
    }
    taskId
    totalQuantity
    type
  }
}
    `;

/**
 * __usePlanCommodityDetailQuery__
 *
 * To run a query within a React component, call `usePlanCommodityDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlanCommodityDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlanCommodityDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlanCommodityDetailQuery(baseOptions?: Apollo.QueryHookOptions<PlanCommodityDetailQuery, PlanCommodityDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlanCommodityDetailQuery, PlanCommodityDetailQueryVariables>(PlanCommodityDetailDocument, options);
      }
export function usePlanCommodityDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlanCommodityDetailQuery, PlanCommodityDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlanCommodityDetailQuery, PlanCommodityDetailQueryVariables>(PlanCommodityDetailDocument, options);
        }
export type PlanCommodityDetailQueryHookResult = ReturnType<typeof usePlanCommodityDetailQuery>;
export type PlanCommodityDetailLazyQueryHookResult = ReturnType<typeof usePlanCommodityDetailLazyQuery>;
export type PlanCommodityDetailQueryResult = Apollo.QueryResult<PlanCommodityDetailQuery, PlanCommodityDetailQueryVariables>;
export const CommitSopAnswerDocument = gql`
    mutation commitSopAnswer($input: SopCommitInput) {
  commitSopAnswer(input: $input)
}
    `;
export type CommitSopAnswerMutationFn = Apollo.MutationFunction<CommitSopAnswerMutation, CommitSopAnswerMutationVariables>;

/**
 * __useCommitSopAnswerMutation__
 *
 * To run a mutation, you first call `useCommitSopAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommitSopAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commitSopAnswerMutation, { data, loading, error }] = useCommitSopAnswerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCommitSopAnswerMutation(baseOptions?: Apollo.MutationHookOptions<CommitSopAnswerMutation, CommitSopAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CommitSopAnswerMutation, CommitSopAnswerMutationVariables>(CommitSopAnswerDocument, options);
      }
export type CommitSopAnswerMutationHookResult = ReturnType<typeof useCommitSopAnswerMutation>;
export type CommitSopAnswerMutationResult = Apollo.MutationResult<CommitSopAnswerMutation>;
export type CommitSopAnswerMutationOptions = Apollo.BaseMutationOptions<CommitSopAnswerMutation, CommitSopAnswerMutationVariables>;
export const GetSopQuestionDocument = gql`
    query getSopQuestion($input: SopGetInput) {
  getSopQuestion(input: $input) {
    finishTime
    results {
      answer {
        answer
        files {
          externalInfo {
            watermarkText
          }
          fileId
          fileUploadTime
          fileUrl
          filename
        }
        remark
        sopDetailId
      }
      checkName
      checkResultType
      inputTextRule
      isRemark
      nameLocale
      options {
        isRemark
        name
        remarkRequired
        sopDetailOptionId
        sort
        value
      }
      remarkRequired
      remarks
      sopDetailId
      sort
    }
    sopDesc
    sopId
    sopName
  }
}
    `;

/**
 * __useGetSopQuestionQuery__
 *
 * To run a query within a React component, call `useGetSopQuestionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSopQuestionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSopQuestionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSopQuestionQuery(baseOptions?: Apollo.QueryHookOptions<GetSopQuestionQuery, GetSopQuestionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSopQuestionQuery, GetSopQuestionQueryVariables>(GetSopQuestionDocument, options);
      }
export function useGetSopQuestionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSopQuestionQuery, GetSopQuestionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSopQuestionQuery, GetSopQuestionQueryVariables>(GetSopQuestionDocument, options);
        }
export type GetSopQuestionQueryHookResult = ReturnType<typeof useGetSopQuestionQuery>;
export type GetSopQuestionLazyQueryHookResult = ReturnType<typeof useGetSopQuestionLazyQuery>;
export type GetSopQuestionQueryResult = Apollo.QueryResult<GetSopQuestionQuery, GetSopQuestionQueryVariables>;
export const ModifySopAnswerDocument = gql`
    mutation modifySopAnswer($input: SopModifyInput) {
  modifySopAnswer(input: $input)
}
    `;
export type ModifySopAnswerMutationFn = Apollo.MutationFunction<ModifySopAnswerMutation, ModifySopAnswerMutationVariables>;

/**
 * __useModifySopAnswerMutation__
 *
 * To run a mutation, you first call `useModifySopAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModifySopAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modifySopAnswerMutation, { data, loading, error }] = useModifySopAnswerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useModifySopAnswerMutation(baseOptions?: Apollo.MutationHookOptions<ModifySopAnswerMutation, ModifySopAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ModifySopAnswerMutation, ModifySopAnswerMutationVariables>(ModifySopAnswerDocument, options);
      }
export type ModifySopAnswerMutationHookResult = ReturnType<typeof useModifySopAnswerMutation>;
export type ModifySopAnswerMutationResult = Apollo.MutationResult<ModifySopAnswerMutation>;
export type ModifySopAnswerMutationOptions = Apollo.BaseMutationOptions<ModifySopAnswerMutation, ModifySopAnswerMutationVariables>;
export const OperationStandardsDocument = gql`
    query operationStandards($standardType: OperationStandardType) {
  operationStandards(standardType: $standardType)
}
    `;

/**
 * __useOperationStandardsQuery__
 *
 * To run a query within a React component, call `useOperationStandardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOperationStandardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOperationStandardsQuery({
 *   variables: {
 *      standardType: // value for 'standardType'
 *   },
 * });
 */
export function useOperationStandardsQuery(baseOptions?: Apollo.QueryHookOptions<OperationStandardsQuery, OperationStandardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OperationStandardsQuery, OperationStandardsQueryVariables>(OperationStandardsDocument, options);
      }
export function useOperationStandardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OperationStandardsQuery, OperationStandardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OperationStandardsQuery, OperationStandardsQueryVariables>(OperationStandardsDocument, options);
        }
export type OperationStandardsQueryHookResult = ReturnType<typeof useOperationStandardsQuery>;
export type OperationStandardsLazyQueryHookResult = ReturnType<typeof useOperationStandardsLazyQuery>;
export type OperationStandardsQueryResult = Apollo.QueryResult<OperationStandardsQuery, OperationStandardsQueryVariables>;
export const PlanTagsDocument = gql`
    query planTags($planId: ID) {
  planTags(planId: $planId) {
    canDeleted
    createBy
    createTime
    createUserName
    enabled
    id
    meaning
    name
    planId
    remark
    styleColor
    tagBelong
    tagId
    type
  }
}
    `;

/**
 * __usePlanTagsQuery__
 *
 * To run a query within a React component, call `usePlanTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlanTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlanTagsQuery({
 *   variables: {
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function usePlanTagsQuery(baseOptions?: Apollo.QueryHookOptions<PlanTagsQuery, PlanTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlanTagsQuery, PlanTagsQueryVariables>(PlanTagsDocument, options);
      }
export function usePlanTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlanTagsQuery, PlanTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlanTagsQuery, PlanTagsQueryVariables>(PlanTagsDocument, options);
        }
export type PlanTagsQueryHookResult = ReturnType<typeof usePlanTagsQuery>;
export type PlanTagsLazyQueryHookResult = ReturnType<typeof usePlanTagsLazyQuery>;
export type PlanTagsQueryResult = Apollo.QueryResult<PlanTagsQuery, PlanTagsQueryVariables>;
export const GetSopAnswerDocument = gql`
    query getSopAnswer($sopId: ID) {
  getSopAnswer(sopId: $sopId) {
    finishTime
    results {
      answer {
        answer
        files {
          externalInfo {
            watermarkText
          }
          fileId
          fileUploadTime
          fileUrl
          filename
        }
        remark
        sopDetailId
      }
      checkName
      checkResultType
      inputTextRule
      isRemark
      nameLocale
      options {
        isRemark
        name
        remarkRequired
        sopDetailOptionId
        sort
        value
      }
      remarkRequired
      remarks
      sopDetailId
      sort
    }
    sopDesc
    sopId
    sopName
  }
}
    `;

/**
 * __useGetSopAnswerQuery__
 *
 * To run a query within a React component, call `useGetSopAnswerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSopAnswerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSopAnswerQuery({
 *   variables: {
 *      sopId: // value for 'sopId'
 *   },
 * });
 */
export function useGetSopAnswerQuery(baseOptions?: Apollo.QueryHookOptions<GetSopAnswerQuery, GetSopAnswerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSopAnswerQuery, GetSopAnswerQueryVariables>(GetSopAnswerDocument, options);
      }
export function useGetSopAnswerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSopAnswerQuery, GetSopAnswerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSopAnswerQuery, GetSopAnswerQueryVariables>(GetSopAnswerDocument, options);
        }
export type GetSopAnswerQueryHookResult = ReturnType<typeof useGetSopAnswerQuery>;
export type GetSopAnswerLazyQueryHookResult = ReturnType<typeof useGetSopAnswerLazyQuery>;
export type GetSopAnswerQueryResult = Apollo.QueryResult<GetSopAnswerQuery, GetSopAnswerQueryVariables>;
export const TagsDocument = gql`
    query tags($tagName: String) {
  tags(tagName: $tagName) {
    children {
      children {
        disabled
        key
        styleColor
        title
        value
      }
      disabled
      key
      styleColor
      title
      value
    }
    disabled
    key
    styleColor
    title
    value
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *      tagName: // value for 'tagName'
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const SingleDataPageAppDocument = gql`
    query singleDataPageApp($input: SingleDataPageAppInput) {
  singleDataPageApp(input: $input) {
    pageCurrent
    pageSize
    records {
      cabinetBatchCode
      cabinetCode
      categoryId
      categoryName
      compositeState
      customerId
      customerName
      disinfectionReportList {
        externalInfo {
          watermarkText
        }
        fileId
        fileUploadTime
        fileUrl
        filename
      }
      effectiveDate
      entryCustomsSupplier
      entryCustomsSupplierId
      entryPort
      entryPortId
      factoryDeliverTime
      id
      importDeclarationList {
        externalInfo {
          watermarkText
        }
        fileId
        fileUploadTime
        fileUrl
        filename
      }
      inspectionQuarantineCertificateList {
        externalInfo {
          watermarkText
        }
        fileId
        fileUploadTime
        fileUrl
        filename
      }
      mergeFile {
        externalInfo {
          watermarkText
        }
        fileId
        fileUploadTime
        fileUrl
        filename
      }
      nucleicAcidReportList {
        externalInfo {
          watermarkText
        }
        fileId
        fileUploadTime
        fileUrl
        filename
      }
      pictureUrl
      progress
      shipmentTime
    }
    totalRecords
  }
}
    `;

/**
 * __useSingleDataPageAppQuery__
 *
 * To run a query within a React component, call `useSingleDataPageAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleDataPageAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleDataPageAppQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSingleDataPageAppQuery(baseOptions?: Apollo.QueryHookOptions<SingleDataPageAppQuery, SingleDataPageAppQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleDataPageAppQuery, SingleDataPageAppQueryVariables>(SingleDataPageAppDocument, options);
      }
export function useSingleDataPageAppLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleDataPageAppQuery, SingleDataPageAppQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleDataPageAppQuery, SingleDataPageAppQueryVariables>(SingleDataPageAppDocument, options);
        }
export type SingleDataPageAppQueryHookResult = ReturnType<typeof useSingleDataPageAppQuery>;
export type SingleDataPageAppLazyQueryHookResult = ReturnType<typeof useSingleDataPageAppLazyQuery>;
export type SingleDataPageAppQueryResult = Apollo.QueryResult<SingleDataPageAppQuery, SingleDataPageAppQueryVariables>;
export const ConfirmEmptyCabinetDocument = gql`
    mutation confirmEmptyCabinet($input: ConfirmEmptyCabinetInput) {
  confirmEmptyCabinet(input: $input)
}
    `;
export type ConfirmEmptyCabinetMutationFn = Apollo.MutationFunction<ConfirmEmptyCabinetMutation, ConfirmEmptyCabinetMutationVariables>;

/**
 * __useConfirmEmptyCabinetMutation__
 *
 * To run a mutation, you first call `useConfirmEmptyCabinetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmptyCabinetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmptyCabinetMutation, { data, loading, error }] = useConfirmEmptyCabinetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmEmptyCabinetMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmEmptyCabinetMutation, ConfirmEmptyCabinetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmEmptyCabinetMutation, ConfirmEmptyCabinetMutationVariables>(ConfirmEmptyCabinetDocument, options);
      }
export type ConfirmEmptyCabinetMutationHookResult = ReturnType<typeof useConfirmEmptyCabinetMutation>;
export type ConfirmEmptyCabinetMutationResult = Apollo.MutationResult<ConfirmEmptyCabinetMutation>;
export type ConfirmEmptyCabinetMutationOptions = Apollo.BaseMutationOptions<ConfirmEmptyCabinetMutation, ConfirmEmptyCabinetMutationVariables>;
export const ConfirmReceiptDocument = gql`
    mutation confirmReceipt($input: ReceiptInput) {
  confirmReceipt(input: $input)
}
    `;
export type ConfirmReceiptMutationFn = Apollo.MutationFunction<ConfirmReceiptMutation, ConfirmReceiptMutationVariables>;

/**
 * __useConfirmReceiptMutation__
 *
 * To run a mutation, you first call `useConfirmReceiptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmReceiptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmReceiptMutation, { data, loading, error }] = useConfirmReceiptMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmReceiptMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmReceiptMutation, ConfirmReceiptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmReceiptMutation, ConfirmReceiptMutationVariables>(ConfirmReceiptDocument, options);
      }
export type ConfirmReceiptMutationHookResult = ReturnType<typeof useConfirmReceiptMutation>;
export type ConfirmReceiptMutationResult = Apollo.MutationResult<ConfirmReceiptMutation>;
export type ConfirmReceiptMutationOptions = Apollo.BaseMutationOptions<ConfirmReceiptMutation, ConfirmReceiptMutationVariables>;
export const EmptyCabinetBillPageDocument = gql`
    query emptyCabinetBillPage($input: EmptyCabinetBillPageInput) {
  emptyCabinetBillPage(input: $input) {
    pageCurrent
    pageSize
    records {
      cabinetBatchCode
      cabinetCode
      categoryName
      importPortName
      pictureUrl
      receiptDate
      receiptTaskId
      state
      stateDesc
      transportInfo {
        driverName
        driverPhone
        plateNo
        shipmentDate
        trailerNo
      }
    }
    totalRecords
  }
}
    `;

/**
 * __useEmptyCabinetBillPageQuery__
 *
 * To run a query within a React component, call `useEmptyCabinetBillPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmptyCabinetBillPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmptyCabinetBillPageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEmptyCabinetBillPageQuery(baseOptions?: Apollo.QueryHookOptions<EmptyCabinetBillPageQuery, EmptyCabinetBillPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmptyCabinetBillPageQuery, EmptyCabinetBillPageQueryVariables>(EmptyCabinetBillPageDocument, options);
      }
export function useEmptyCabinetBillPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmptyCabinetBillPageQuery, EmptyCabinetBillPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmptyCabinetBillPageQuery, EmptyCabinetBillPageQueryVariables>(EmptyCabinetBillPageDocument, options);
        }
export type EmptyCabinetBillPageQueryHookResult = ReturnType<typeof useEmptyCabinetBillPageQuery>;
export type EmptyCabinetBillPageLazyQueryHookResult = ReturnType<typeof useEmptyCabinetBillPageLazyQuery>;
export type EmptyCabinetBillPageQueryResult = Apollo.QueryResult<EmptyCabinetBillPageQuery, EmptyCabinetBillPageQueryVariables>;
export const EmptyCabinetBillQuantityDocument = gql`
    query emptyCabinetBillQuantity($input: EmptyCabinetBillInput) {
  emptyCabinetBillQuantity(input: $input) {
    waitCommitTotal
    waitReviewTotal
    waitTodoTotal
  }
}
    `;

/**
 * __useEmptyCabinetBillQuantityQuery__
 *
 * To run a query within a React component, call `useEmptyCabinetBillQuantityQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmptyCabinetBillQuantityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmptyCabinetBillQuantityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEmptyCabinetBillQuantityQuery(baseOptions?: Apollo.QueryHookOptions<EmptyCabinetBillQuantityQuery, EmptyCabinetBillQuantityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmptyCabinetBillQuantityQuery, EmptyCabinetBillQuantityQueryVariables>(EmptyCabinetBillQuantityDocument, options);
      }
export function useEmptyCabinetBillQuantityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmptyCabinetBillQuantityQuery, EmptyCabinetBillQuantityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmptyCabinetBillQuantityQuery, EmptyCabinetBillQuantityQueryVariables>(EmptyCabinetBillQuantityDocument, options);
        }
export type EmptyCabinetBillQuantityQueryHookResult = ReturnType<typeof useEmptyCabinetBillQuantityQuery>;
export type EmptyCabinetBillQuantityLazyQueryHookResult = ReturnType<typeof useEmptyCabinetBillQuantityLazyQuery>;
export type EmptyCabinetBillQuantityQueryResult = Apollo.QueryResult<EmptyCabinetBillQuantityQuery, EmptyCabinetBillQuantityQueryVariables>;
export const SaveAndCommitBillDocument = gql`
    mutation saveAndCommitBill($input: BillSaveCommitBillInput) {
  saveAndCommitBill(input: $input)
}
    `;
export type SaveAndCommitBillMutationFn = Apollo.MutationFunction<SaveAndCommitBillMutation, SaveAndCommitBillMutationVariables>;

/**
 * __useSaveAndCommitBillMutation__
 *
 * To run a mutation, you first call `useSaveAndCommitBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveAndCommitBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveAndCommitBillMutation, { data, loading, error }] = useSaveAndCommitBillMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSaveAndCommitBillMutation(baseOptions?: Apollo.MutationHookOptions<SaveAndCommitBillMutation, SaveAndCommitBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveAndCommitBillMutation, SaveAndCommitBillMutationVariables>(SaveAndCommitBillDocument, options);
      }
export type SaveAndCommitBillMutationHookResult = ReturnType<typeof useSaveAndCommitBillMutation>;
export type SaveAndCommitBillMutationResult = Apollo.MutationResult<SaveAndCommitBillMutation>;
export type SaveAndCommitBillMutationOptions = Apollo.BaseMutationOptions<SaveAndCommitBillMutation, SaveAndCommitBillMutationVariables>;
export const WithdrawBillDocument = gql`
    mutation withdrawBill($billBusinessId: ID) {
  withdrawBill(billBusinessId: $billBusinessId)
}
    `;
export type WithdrawBillMutationFn = Apollo.MutationFunction<WithdrawBillMutation, WithdrawBillMutationVariables>;

/**
 * __useWithdrawBillMutation__
 *
 * To run a mutation, you first call `useWithdrawBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWithdrawBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [withdrawBillMutation, { data, loading, error }] = useWithdrawBillMutation({
 *   variables: {
 *      billBusinessId: // value for 'billBusinessId'
 *   },
 * });
 */
export function useWithdrawBillMutation(baseOptions?: Apollo.MutationHookOptions<WithdrawBillMutation, WithdrawBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WithdrawBillMutation, WithdrawBillMutationVariables>(WithdrawBillDocument, options);
      }
export type WithdrawBillMutationHookResult = ReturnType<typeof useWithdrawBillMutation>;
export type WithdrawBillMutationResult = Apollo.MutationResult<WithdrawBillMutation>;
export type WithdrawBillMutationOptions = Apollo.BaseMutationOptions<WithdrawBillMutation, WithdrawBillMutationVariables>;