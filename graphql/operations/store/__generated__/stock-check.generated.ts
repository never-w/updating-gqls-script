import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CheckStocksQueryVariables = SchemaTypes.Exact<{
  checkConditionInput?: SchemaTypes.InputMaybe<SchemaTypes.CheckConditionInput>;
}>;


export type CheckStocksQuery = { checkStocks?: Array<{ __typename?: 'CheckStockPayload', skuId?: number, commodityTypeId?: number, commodityTypeName?: string, commodityId?: number, commodityName?: string, batchCode?: string, batchId?: string, skuTextDescriptionList?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, belongId?: number, belongType?: number, belongName?: string, unitPrice?: number, priceType?: number, priceTypeName?: string, createTime?: number, checkTime?: number, displayBelongName?: string, abnormalQuantity?: number, inStockTime?: number, lockedQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, systemStockQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number } }> };

export type FinishCheckMutationVariables = SchemaTypes.Exact<{
  checkInfoInput?: SchemaTypes.InputMaybe<SchemaTypes.CheckInfoInput>;
}>;


export type FinishCheckMutation = { finishCheck?: { __typename?: 'CheckStockResultPayload', checkId?: string, checkInNum?: number, checkOutNum?: number } };

export type CheckPageRecordsQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  checkRecordConfitionInput?: SchemaTypes.InputMaybe<SchemaTypes.CheckRecordConfitionInput>;
}>;


export type CheckPageRecordsQuery = { checkPageRecords?: { __typename?: 'CheckRecordPageResultPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'CheckRecordPayload', checkId?: string, checkDate?: number, warehouseName?: string, checkStatus?: number, commodityTypeIdList?: Array<number>, commodityTypeNameList?: Array<string>, checkNum?: number, belongIdList?: Array<number>, belongTypeList?: Array<number>, belongNameList?: Array<string>, username?: string, operateDate?: number, checkCode?: string, abnormalQuantity?: number, checkTime?: number, auditStatus?: number, auditStatusDesc?: string, tag?: boolean }> } };

export type CheckDetailQueryVariables = SchemaTypes.Exact<{
  checkId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type CheckDetailQuery = { checkDetail?: { __typename?: 'CheckInfoPayload', stockCheck?: { __typename?: 'CheckDetailPayload', checkId?: string, warehouseName?: string, checkDate?: number, commodityTypeId?: number, commodityTypeIdList?: Array<number>, commodityTypeName?: string, commodityTypeNameList?: Array<string>, belongId?: number, belongIdList?: Array<number>, belongType?: number, belongTypeList?: Array<number>, belongName?: string, belongNameList?: Array<string>, username?: string, checkStatus?: number, operateDate?: number, remark?: string, checkNum?: number, checkErrorNum?: number, checkCode?: string, abnormalQuantity?: number }, checkOrderList?: Array<{ __typename?: 'CheckOrderPayload', checkOrderId?: number, stockOrderNumber?: string, stockOrderId?: string, checkType?: number, belongId?: number, belongType?: number, belongName?: string, warehouseName?: string, commodityTypeId?: number, commodityTypeName?: string, username?: string, operateDate?: number }>, stockCheckItemList?: Array<{ __typename?: 'CheckItemPayload', checkItemId?: number, checkId?: string, checkOrderId?: number, batchId?: string, skuId?: number, batchCode?: string, orderType?: number, orderId?: number, commodityTypeId?: number, commodityName?: string, skuTextDescriptionList?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalTypeName?: string, totalType?: number, checkUnitQuantity?: number, checkTotalQuantity?: number, remark?: string, createTime?: number, belongId?: number, belongType?: number, belongName?: string, checkLabelId?: string, checkLabelDesc?: string, changeLogsList?: Array<{ __typename?: 'ChangeLogPayload', checkLabelId?: string, labelContent?: string, remark?: string, createTime?: number, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }> }> } };

export type ListStockCheckLabelQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListStockCheckLabelQuery = { listStockCheckLabel?: Array<{ __typename?: 'StockCheckLabelDetailPayload', label?: string, value?: string }> };


export const CheckStocksDocument = gql`
    query checkStocks($checkConditionInput: CheckConditionInput) {
  checkStocks(checkConditionInput: $checkConditionInput) {
    skuId
    commodityTypeId
    commodityTypeName
    commodityId
    commodityName
    batchCode
    batchId
    skuTextDescriptionList
    unitQuantity
    unitType
    unitTypeName
    totalQuantity
    totalType
    totalTypeName
    belongId
    belongType
    belongName
    unitPrice
    priceType
    priceTypeName
    createTime
    checkTime
    displayBelongName
    abnormalQuantity
    lockedQuantity {
      totalQuantity
      unitQuantity
    }
    systemStockQuantity {
      totalQuantity
      unitQuantity
    }
    inStockTime
  }
}
    `;

/**
 * __useCheckStocksQuery__
 *
 * To run a query within a React component, call `useCheckStocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckStocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckStocksQuery({
 *   variables: {
 *      checkConditionInput: // value for 'checkConditionInput'
 *   },
 * });
 */
export function useCheckStocksQuery(baseOptions?: Apollo.QueryHookOptions<CheckStocksQuery, CheckStocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckStocksQuery, CheckStocksQueryVariables>(CheckStocksDocument, options);
      }
export function useCheckStocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckStocksQuery, CheckStocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckStocksQuery, CheckStocksQueryVariables>(CheckStocksDocument, options);
        }
export type CheckStocksQueryHookResult = ReturnType<typeof useCheckStocksQuery>;
export type CheckStocksLazyQueryHookResult = ReturnType<typeof useCheckStocksLazyQuery>;
export type CheckStocksQueryResult = Apollo.QueryResult<CheckStocksQuery, CheckStocksQueryVariables>;
export const FinishCheckDocument = gql`
    mutation finishCheck($checkInfoInput: CheckInfoInput) {
  finishCheck(checkInfoInput: $checkInfoInput) {
    checkId
    checkInNum
    checkOutNum
  }
}
    `;
export type FinishCheckMutationFn = Apollo.MutationFunction<FinishCheckMutation, FinishCheckMutationVariables>;

/**
 * __useFinishCheckMutation__
 *
 * To run a mutation, you first call `useFinishCheckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFinishCheckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [finishCheckMutation, { data, loading, error }] = useFinishCheckMutation({
 *   variables: {
 *      checkInfoInput: // value for 'checkInfoInput'
 *   },
 * });
 */
export function useFinishCheckMutation(baseOptions?: Apollo.MutationHookOptions<FinishCheckMutation, FinishCheckMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FinishCheckMutation, FinishCheckMutationVariables>(FinishCheckDocument, options);
      }
export type FinishCheckMutationHookResult = ReturnType<typeof useFinishCheckMutation>;
export type FinishCheckMutationResult = Apollo.MutationResult<FinishCheckMutation>;
export type FinishCheckMutationOptions = Apollo.BaseMutationOptions<FinishCheckMutation, FinishCheckMutationVariables>;
export const CheckPageRecordsDocument = gql`
    query checkPageRecords($page: Page, $checkRecordConfitionInput: CheckRecordConfitionInput) {
  checkPageRecords(
    page: $page
    checkRecordConfitionInput: $checkRecordConfitionInput
  ) {
    records {
      checkId
      checkDate
      warehouseName
      checkStatus
      commodityTypeIdList
      commodityTypeNameList
      checkNum
      belongIdList
      belongTypeList
      belongNameList
      username
      operateDate
      checkCode
      abnormalQuantity
      checkTime
      auditStatus
      auditStatusDesc
      tag
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __useCheckPageRecordsQuery__
 *
 * To run a query within a React component, call `useCheckPageRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckPageRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckPageRecordsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      checkRecordConfitionInput: // value for 'checkRecordConfitionInput'
 *   },
 * });
 */
export function useCheckPageRecordsQuery(baseOptions?: Apollo.QueryHookOptions<CheckPageRecordsQuery, CheckPageRecordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckPageRecordsQuery, CheckPageRecordsQueryVariables>(CheckPageRecordsDocument, options);
      }
export function useCheckPageRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckPageRecordsQuery, CheckPageRecordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckPageRecordsQuery, CheckPageRecordsQueryVariables>(CheckPageRecordsDocument, options);
        }
export type CheckPageRecordsQueryHookResult = ReturnType<typeof useCheckPageRecordsQuery>;
export type CheckPageRecordsLazyQueryHookResult = ReturnType<typeof useCheckPageRecordsLazyQuery>;
export type CheckPageRecordsQueryResult = Apollo.QueryResult<CheckPageRecordsQuery, CheckPageRecordsQueryVariables>;
export const CheckDetailDocument = gql`
    query checkDetail($checkId: ID) {
  checkDetail(checkId: $checkId) {
    stockCheck {
      checkId
      warehouseName
      checkDate
      commodityTypeId
      commodityTypeIdList
      commodityTypeName
      commodityTypeNameList
      belongId
      belongIdList
      belongType
      belongTypeList
      belongName
      belongNameList
      username
      checkStatus
      operateDate
      remark
      checkNum
      checkErrorNum
      checkCode
      abnormalQuantity
    }
    checkOrderList {
      checkOrderId
      stockOrderNumber
      stockOrderId
      checkType
      belongId
      belongType
      belongName
      warehouseName
      commodityTypeId
      commodityTypeName
      username
      operateDate
    }
    stockCheckItemList {
      checkItemId
      checkId
      checkOrderId
      batchId
      skuId
      batchCode
      orderType
      orderId
      commodityTypeId
      commodityName
      skuTextDescriptionList
      unitQuantity
      unitType
      unitTypeName
      totalQuantity
      totalTypeName
      totalType
      checkUnitQuantity
      checkTotalQuantity
      remark
      createTime
      belongId
      belongType
      belongName
      checkLabelId
      checkLabelDesc
      changeLogsList {
        checkLabelId
        labelContent
        remark
        createTime
        createBy {
          userId
          userName
          phoneNum
        }
      }
    }
  }
}
    `;

/**
 * __useCheckDetailQuery__
 *
 * To run a query within a React component, call `useCheckDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckDetailQuery({
 *   variables: {
 *      checkId: // value for 'checkId'
 *   },
 * });
 */
export function useCheckDetailQuery(baseOptions?: Apollo.QueryHookOptions<CheckDetailQuery, CheckDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckDetailQuery, CheckDetailQueryVariables>(CheckDetailDocument, options);
      }
export function useCheckDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckDetailQuery, CheckDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckDetailQuery, CheckDetailQueryVariables>(CheckDetailDocument, options);
        }
export type CheckDetailQueryHookResult = ReturnType<typeof useCheckDetailQuery>;
export type CheckDetailLazyQueryHookResult = ReturnType<typeof useCheckDetailLazyQuery>;
export type CheckDetailQueryResult = Apollo.QueryResult<CheckDetailQuery, CheckDetailQueryVariables>;
export const ListStockCheckLabelDocument = gql`
    query listStockCheckLabel {
  listStockCheckLabel {
    label: labelContent
    value: stockCheckLabelId
  }
}
    `;

/**
 * __useListStockCheckLabelQuery__
 *
 * To run a query within a React component, call `useListStockCheckLabelQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStockCheckLabelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStockCheckLabelQuery({
 *   variables: {
 *   },
 * });
 */
export function useListStockCheckLabelQuery(baseOptions?: Apollo.QueryHookOptions<ListStockCheckLabelQuery, ListStockCheckLabelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListStockCheckLabelQuery, ListStockCheckLabelQueryVariables>(ListStockCheckLabelDocument, options);
      }
export function useListStockCheckLabelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStockCheckLabelQuery, ListStockCheckLabelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListStockCheckLabelQuery, ListStockCheckLabelQueryVariables>(ListStockCheckLabelDocument, options);
        }
export type ListStockCheckLabelQueryHookResult = ReturnType<typeof useListStockCheckLabelQuery>;
export type ListStockCheckLabelLazyQueryHookResult = ReturnType<typeof useListStockCheckLabelLazyQuery>;
export type ListStockCheckLabelQueryResult = Apollo.QueryResult<ListStockCheckLabelQuery, ListStockCheckLabelQueryVariables>;