import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageReceiveBillQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageReceiveBillInput?: SchemaTypes.InputMaybe<SchemaTypes.PageReceiveBillInput>;
}>;


export type PageReceiveBillQuery = { pageReceiveBill?: { __typename?: 'PageReceiveBillPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'FcReceiveBillPayload', belongOrgName?: string, billMainCode?: string, billMainId?: string, billStatus?: SchemaTypes.PitayaBillStatusEnum, cabinetBatchCode?: string, cabinetCode?: string, categoryName?: string, createTime?: number, receiveUser?: string, statusNote?: string, trailerNo?: string, billStatusDesc?: string, plateNo?: string, matchSourceName?: string, billMainType?: SchemaTypes.FcBillMainTypeEnum, billMainTypeDesc?: string, purchaseCode?: string }> } };

export type GetReceiveBillQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetReceiveBillInput>;
}>;


export type GetReceiveBillQuery = { getReceiveBill?: { __typename?: 'ReceiveBillPayload', billMainCode?: string, billMainId?: string, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusDesc?: string, billTemplateId?: string, businessId?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, note?: string, rejectInfo?: string, tempCode?: string, billMainType?: SchemaTypes.BillMainTypeEnum, billMainTypeDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, billFreightResp?: { __typename?: 'PitayaBillFreightPayload', billFreightCode?: string, billType?: string, totalAmount?: number }, billPaymentResp?: { __typename?: 'BillPaymentPayload', billCode?: string, billPaymentFeeItemList?: Array<{ __typename?: 'BillPaymentFeeItemPayload', batchId?: string, totalQuantity?: number, unitQuantity?: number, amount?: number, markList?: Array<SchemaTypes.AcquireMarkEnum>, unitPrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, transportInfo?: { __typename?: 'PitayaTransportInfo', cabinetBatchCode?: Array<string>, cabinetCode?: Array<string>, carNo?: string, trailerNo?: string, matchSourceName?: string, purchaseCode?: string }, billOperationLogPayload?: Array<{ __typename?: 'BillOperationLogPayload', createTime?: number, endStatus?: SchemaTypes.PitayaBillStatusEnum, endStatusDesc?: string, note?: string, startStatus?: SchemaTypes.PitayaBillStatusEnum, startStatusDesc?: string, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }> } };

export type UpdateReceiveBillFreightMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.UpdateReceiveBillFreightInput>;
}>;


export type UpdateReceiveBillFreightMutation = { updateReceiveBillFreight?: boolean };

export type ChangeBillStatusMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ChangeBillStatusInput>;
}>;


export type ChangeBillStatusMutation = { changeBillStatus?: boolean };


export const PageReceiveBillDocument = gql`
    query pageReceiveBill($page: Page, $pageReceiveBillInput: PageReceiveBillInput) {
  pageReceiveBill(page: $page, pageReceiveBillInput: $pageReceiveBillInput) {
    pageCurrent
    pageSize
    records {
      belongOrgName
      billMainCode
      billMainId
      billStatus
      cabinetBatchCode
      cabinetCode
      categoryName
      createTime
      receiveUser
      statusNote
      trailerNo
      billStatusDesc
      plateNo
      matchSourceName
      billMainType
      billMainTypeDesc
      purchaseCode
    }
    totalRecords
  }
}
    `;

/**
 * __usePageReceiveBillQuery__
 *
 * To run a query within a React component, call `usePageReceiveBillQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageReceiveBillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageReceiveBillQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageReceiveBillInput: // value for 'pageReceiveBillInput'
 *   },
 * });
 */
export function usePageReceiveBillQuery(baseOptions?: Apollo.QueryHookOptions<PageReceiveBillQuery, PageReceiveBillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageReceiveBillQuery, PageReceiveBillQueryVariables>(PageReceiveBillDocument, options);
      }
export function usePageReceiveBillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageReceiveBillQuery, PageReceiveBillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageReceiveBillQuery, PageReceiveBillQueryVariables>(PageReceiveBillDocument, options);
        }
export type PageReceiveBillQueryHookResult = ReturnType<typeof usePageReceiveBillQuery>;
export type PageReceiveBillLazyQueryHookResult = ReturnType<typeof usePageReceiveBillLazyQuery>;
export type PageReceiveBillQueryResult = Apollo.QueryResult<PageReceiveBillQuery, PageReceiveBillQueryVariables>;
export const GetReceiveBillDocument = gql`
    query getReceiveBill($input: GetReceiveBillInput) {
  getReceiveBill(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    billDetailsList {
      billCostData
      billDetailId
      billMainId
      businessItemValue
      costAmount
      costId
      costName
      dictItemId
      note
      ruleCode
      ruleId
      showField
      supplier {
        supplierId
        supplierName
      }
    }
    billFreightResp {
      billFreightCode
      billType
      totalAmount
    }
    billMainCode
    billMainId
    billPaymentResp {
      billCode
      billPaymentFeeItemList {
        batchId
        commoditySku {
          categoryId
          categoryName
          commodityId
          commodityName
          commoditySkuId
          commoditySkuName
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
        }
        totalQuantity
        totalType {
          unitId
          unitName
        }
        unitQuantity
        unitType {
          unitId
          unitName
        }
        amount
        markList
        priceType {
          unitId
          unitName
        }
        unitPrice
      }
      supplier {
        supplierId
        supplierName
      }
    }
    billStatus
    billStatusDesc
    billTemplateId
    businessId
    commodityType
    commodityTypeName
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    customer {
      customerId
      customerName
      customerType
    }
    note
    rejectInfo
    tempCode
    transportInfo {
      cabinetBatchCode
      cabinetCode
      carNo
      trailerNo
      matchSourceName
      purchaseCode
    }
    billMainType
    billMainTypeDesc
    billOperationLogPayload {
      user {
        phoneNum
        userId
        userName
      }
      createTime
      endStatus
      endStatusDesc
      note
      startStatus
      startStatusDesc
    }
  }
}
    `;

/**
 * __useGetReceiveBillQuery__
 *
 * To run a query within a React component, call `useGetReceiveBillQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReceiveBillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReceiveBillQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetReceiveBillQuery(baseOptions?: Apollo.QueryHookOptions<GetReceiveBillQuery, GetReceiveBillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReceiveBillQuery, GetReceiveBillQueryVariables>(GetReceiveBillDocument, options);
      }
export function useGetReceiveBillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReceiveBillQuery, GetReceiveBillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReceiveBillQuery, GetReceiveBillQueryVariables>(GetReceiveBillDocument, options);
        }
export type GetReceiveBillQueryHookResult = ReturnType<typeof useGetReceiveBillQuery>;
export type GetReceiveBillLazyQueryHookResult = ReturnType<typeof useGetReceiveBillLazyQuery>;
export type GetReceiveBillQueryResult = Apollo.QueryResult<GetReceiveBillQuery, GetReceiveBillQueryVariables>;
export const UpdateReceiveBillFreightDocument = gql`
    mutation updateReceiveBillFreight($input: UpdateReceiveBillFreightInput) {
  updateReceiveBillFreight(input: $input)
}
    `;
export type UpdateReceiveBillFreightMutationFn = Apollo.MutationFunction<UpdateReceiveBillFreightMutation, UpdateReceiveBillFreightMutationVariables>;

/**
 * __useUpdateReceiveBillFreightMutation__
 *
 * To run a mutation, you first call `useUpdateReceiveBillFreightMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReceiveBillFreightMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReceiveBillFreightMutation, { data, loading, error }] = useUpdateReceiveBillFreightMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateReceiveBillFreightMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReceiveBillFreightMutation, UpdateReceiveBillFreightMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReceiveBillFreightMutation, UpdateReceiveBillFreightMutationVariables>(UpdateReceiveBillFreightDocument, options);
      }
export type UpdateReceiveBillFreightMutationHookResult = ReturnType<typeof useUpdateReceiveBillFreightMutation>;
export type UpdateReceiveBillFreightMutationResult = Apollo.MutationResult<UpdateReceiveBillFreightMutation>;
export type UpdateReceiveBillFreightMutationOptions = Apollo.BaseMutationOptions<UpdateReceiveBillFreightMutation, UpdateReceiveBillFreightMutationVariables>;
export const ChangeBillStatusDocument = gql`
    mutation changeBillStatus($input: ChangeBillStatusInput) {
  changeBillStatus(input: $input)
}
    `;
export type ChangeBillStatusMutationFn = Apollo.MutationFunction<ChangeBillStatusMutation, ChangeBillStatusMutationVariables>;

/**
 * __useChangeBillStatusMutation__
 *
 * To run a mutation, you first call `useChangeBillStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeBillStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeBillStatusMutation, { data, loading, error }] = useChangeBillStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeBillStatusMutation(baseOptions?: Apollo.MutationHookOptions<ChangeBillStatusMutation, ChangeBillStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeBillStatusMutation, ChangeBillStatusMutationVariables>(ChangeBillStatusDocument, options);
      }
export type ChangeBillStatusMutationHookResult = ReturnType<typeof useChangeBillStatusMutation>;
export type ChangeBillStatusMutationResult = Apollo.MutationResult<ChangeBillStatusMutation>;
export type ChangeBillStatusMutationOptions = Apollo.BaseMutationOptions<ChangeBillStatusMutation, ChangeBillStatusMutationVariables>;