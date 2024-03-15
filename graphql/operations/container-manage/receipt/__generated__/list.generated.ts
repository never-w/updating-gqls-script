import type * as SchemaTypes from '../../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageReceiptPlanQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ReceiptPlanPageInput>;
}>;


export type PageReceiptPlanQuery = { pageReceiptPlan?: { __typename?: 'ReceiptPlanPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'ReceiptPlanPayload', cabinetBatchCode?: Array<string>, cabinetCode?: Array<string>, categoryId?: string, categoryName?: string, customerId?: Array<string>, customerName?: Array<string>, originPlanCode?: Array<string>, planId?: string, receiptTemperatureState?: SchemaTypes.ReceiptTemperatureState, receiptTime?: number, salesPlanCode?: string, shipmentTime?: number, state?: SchemaTypes.ReceiptPlanStateEnum, tagAttribute?: SchemaTypes.TagAttributeEnum, taskId?: string, tagList?: Array<{ __typename?: 'TagInfoPayload', canDeleted?: boolean, createBy?: string, createTime?: number, createUserName?: string, enabled?: SchemaTypes.EnableEnum, id?: string, meaning?: string, name?: string, planId?: string, remark?: string, styleColor?: string, tagBelong?: SchemaTypes.TagBelongEnum, tagId?: string, type?: SchemaTypes.TagTypeEnum }>, tags?: Array<{ __typename?: 'TagInfoPayload', canDeleted?: boolean, createBy?: string, createTime?: number, createUserName?: string, enabled?: SchemaTypes.EnableEnum, id?: string, meaning?: string, name?: string, planId?: string, remark?: string, styleColor?: string, tagBelong?: SchemaTypes.TagBelongEnum, tagId?: string, type?: SchemaTypes.TagTypeEnum }>, temperatureFile?: { __typename?: 'DurianFilePayload', fileId?: string, fileUploadTime?: number, fileUrl?: string, filename?: string, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } } }> } };

export type ReceiptDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type ReceiptDetailQuery = { receiptDetail?: { __typename?: 'ReceiptTaskDetailPayload', billMainId?: string, cabinetBatchCodeList?: Array<string>, cabinetCodeList?: Array<string>, categoryId?: string, categoryName?: string, emptyCabinetBillBusinessState?: SchemaTypes.BillBusinessStateEnum, pictureUrl?: string, planCode?: string, planId?: string, salePlanCreateTime?: number, sampleQuantity?: number, sopId?: string, sopIds?: Array<string>, state?: SchemaTypes.ReceiptState, stateName?: string, taskId?: string, thermometerOrderId?: string, tmpId?: string, totalQuantity?: number, billBusinessId?: string, emptyCabinetInfo?: { __typename?: 'EmptyCabinetInfoPayload', emptyCabinetDate?: number }, headquarterAreaOrderInfo?: { __typename?: 'HeadquarterAreaOrderInfoPayload', areaPurchaseOrderId?: string, headquarterAreaOrderRunCode?: string, headquarterSalesOrderId?: string }, planList?: Array<{ __typename?: 'ProductPlanPayload', planCode?: string, planId?: string, taskId?: string }>, sopOptionList?: Array<{ __typename?: 'DurianSopOption', label?: SchemaTypes.OperationType, value?: string }>, thermometerOrderInfo?: { __typename?: 'ThermometerOrderInfoPayload', bindThermometerState?: SchemaTypes.BindThermometerState, thermometerOrderId?: string, cabinetInfo?: { __typename?: 'ThermometerCabinetInfoPayload', cabinetCode?: string, cabinetId?: string, deviceId?: string, originPlanCode?: string, salesPlanCode?: string }, currentAlarmLogList?: Array<{ __typename?: 'AlarmInfoPayload', alarmColor?: string, alarmDesc?: string, alarmState?: SchemaTypes.AlarmState, alarmSubType?: SchemaTypes.AlarmSubType, alarmTextColor?: string, alarmType?: SchemaTypes.AlarmType, alarmValue?: string, durationTime?: string, endAddress?: string, endTime?: number, handleContent?: string, handleTime?: number, handler?: string, id?: string, startAddress?: string, startTime?: number }>, deviceInfo?: { __typename?: 'ThermometerDevicePayload', currentAddress?: string, firstReportTime?: number, humidity?: string, lastReportTime?: number, lat?: number, lng?: number, temperature?: string, thermometerCode?: string }, orderInfo?: { __typename?: 'ThermometerOrderAlarmPayload', alarmState?: SchemaTypes.AlarmState, firstAlarmTime?: number, thermometerEndTime?: number, thermometerStartTime?: number, alarmLogList?: Array<{ __typename?: 'AlarmInfoPayload', alarmColor?: string, alarmDesc?: string, alarmState?: SchemaTypes.AlarmState, alarmSubType?: SchemaTypes.AlarmSubType, alarmTextColor?: string, alarmType?: SchemaTypes.AlarmType, alarmValue?: string, durationTime?: string, endAddress?: string, endTime?: number, handleContent?: string, handleTime?: number, handler?: string, id?: string, startAddress?: string, startTime?: number }> } }, transportInfo?: { __typename?: 'CommonTransportInfoPayload', backupPhone?: string, cabinetType?: string, carNo?: string, deliverAddress?: string, deliverAddressType?: string, departureDate?: number, driver?: string, entryPort?: string, entryPortId?: string, phone?: string, receiptPlace?: string, trailerNo?: string, transportCompany?: string } } };

export type ReceiptPageQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ReceiptPageInput>;
}>;


export type ReceiptPageQuery = { receiptPage?: { __typename?: 'ReceiptPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'ReceiptTaskPageInfoPayload', acceptanceTime?: number, backupPhone?: string, cabinetBatchCode?: Array<string>, cabinetCode?: Array<string>, carNo?: string, category?: string, deliverAddressType?: string, departureDate?: number, driverName?: string, driverPhone?: string, entryPort?: string, pictureUrl?: string, planCode?: string, quantity?: number, receiptAddress?: string, receiptDate?: number, sampleQuantity?: number, sopId?: string, state?: string, stateDesc?: string, taskId?: string, thermometerOrderId?: string, trailerNo?: string, thermometerOrderInfo?: { __typename?: 'ThermometerOrderInfoPayload', bindThermometerState?: SchemaTypes.BindThermometerState, thermometerOrderId?: string, cabinetInfo?: { __typename?: 'ThermometerCabinetInfoPayload', cabinetCode?: string, cabinetId?: string, deviceId?: string, originPlanCode?: string, salesPlanCode?: string }, currentAlarmLogList?: Array<{ __typename?: 'AlarmInfoPayload', alarmColor?: string, alarmDesc?: string, alarmState?: SchemaTypes.AlarmState, alarmSubType?: SchemaTypes.AlarmSubType, alarmTextColor?: string, alarmType?: SchemaTypes.AlarmType, alarmValue?: string, durationTime?: string, endAddress?: string, endTime?: number, handleContent?: string, handleTime?: number, handler?: string, id?: string, startAddress?: string, startTime?: number }>, deviceInfo?: { __typename?: 'ThermometerDevicePayload', currentAddress?: string, firstReportTime?: number, humidity?: string, lastReportTime?: number, lat?: number, lng?: number, temperature?: string, thermometerCode?: string }, orderInfo?: { __typename?: 'ThermometerOrderAlarmPayload', alarmState?: SchemaTypes.AlarmState, firstAlarmTime?: number, thermometerEndTime?: number, thermometerStartTime?: number, alarmLogList?: Array<{ __typename?: 'AlarmInfoPayload', alarmColor?: string, alarmDesc?: string, alarmState?: SchemaTypes.AlarmState, alarmSubType?: SchemaTypes.AlarmSubType, alarmTextColor?: string, alarmType?: SchemaTypes.AlarmType, alarmValue?: string, durationTime?: string, endAddress?: string, endTime?: number, handleContent?: string, handleTime?: number, handler?: string, id?: string, startAddress?: string, startTime?: number }> } } }> } };

export type ReceiptQuantityQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ReceiptQuantityInput>;
}>;


export type ReceiptQuantityQuery = { receiptQuantity?: { __typename?: 'ReceiptQuantityPayload', finishedTotal?: number, totalTodoQuantity?: number, waitAcceptanceTotal?: number, waitEmptyCabinetTotal?: number } };

export type ReceiptSearchQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ReceiptSearchInput>;
}>;


export type ReceiptSearchQuery = { receiptSearch?: { __typename?: 'ReceiptPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'ReceiptTaskPageInfoPayload', acceptanceTime?: number, backupPhone?: string, cabinetBatchCode?: Array<string>, cabinetCode?: Array<string>, carNo?: string, category?: string, deliverAddressType?: string, departureDate?: number, driverName?: string, driverPhone?: string, entryPort?: string, pictureUrl?: string, planCode?: string, quantity?: number, receiptAddress?: string, receiptDate?: number, sampleQuantity?: number, sopId?: string, state?: string, stateDesc?: string, taskId?: string, thermometerOrderId?: string, trailerNo?: string, thermometerOrderInfo?: { __typename?: 'ThermometerOrderInfoPayload', bindThermometerState?: SchemaTypes.BindThermometerState, thermometerOrderId?: string, cabinetInfo?: { __typename?: 'ThermometerCabinetInfoPayload', cabinetCode?: string, cabinetId?: string, deviceId?: string, originPlanCode?: string, salesPlanCode?: string }, currentAlarmLogList?: Array<{ __typename?: 'AlarmInfoPayload', alarmColor?: string, alarmDesc?: string, alarmState?: SchemaTypes.AlarmState, alarmSubType?: SchemaTypes.AlarmSubType, alarmTextColor?: string, alarmType?: SchemaTypes.AlarmType, alarmValue?: string, durationTime?: string, endAddress?: string, endTime?: number, handleContent?: string, handleTime?: number, handler?: string, id?: string, startAddress?: string, startTime?: number }>, deviceInfo?: { __typename?: 'ThermometerDevicePayload', currentAddress?: string, firstReportTime?: number, humidity?: string, lastReportTime?: number, lat?: number, lng?: number, temperature?: string, thermometerCode?: string }, orderInfo?: { __typename?: 'ThermometerOrderAlarmPayload', alarmState?: SchemaTypes.AlarmState, firstAlarmTime?: number, thermometerEndTime?: number, thermometerStartTime?: number, alarmLogList?: Array<{ __typename?: 'AlarmInfoPayload', alarmColor?: string, alarmDesc?: string, alarmState?: SchemaTypes.AlarmState, alarmSubType?: SchemaTypes.AlarmSubType, alarmTextColor?: string, alarmType?: SchemaTypes.AlarmType, alarmValue?: string, durationTime?: string, endAddress?: string, endTime?: number, handleContent?: string, handleTime?: number, handler?: string, id?: string, startAddress?: string, startTime?: number }> } } }> } };

export type CommitTemperatureInfoMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ReceiptTemperatureInput>;
}>;


export type CommitTemperatureInfoMutation = { commitTemperatureInfo?: boolean };

export type ConfirmFeeMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ReceiptFeeConfirmInput>;
}>;


export type ConfirmFeeMutation = { confirmFee?: number };

export type ReceiptBackMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ReceiptBackInput>;
}>;


export type ReceiptBackMutation = { receiptBack?: number };

export type CalculatorAmountMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CalculatorInput>;
}>;


export type CalculatorAmountMutation = { calculatorAmount?: number };

export type GetFeeBillByIdQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.BillGetInput>;
}>;


export type GetFeeBillByIdQuery = { getFeeBillById?: Array<{ __typename?: 'BillItemPayload', amount?: number, calculateRule?: string, calculateType?: SchemaTypes.CalculateTypeEnum, costId?: string, costName?: string, needInvoicingSupplier?: boolean, note?: string, remark?: string, ruleId?: string, showField?: string, showFieldValue?: boolean, supplierId?: string, tmpId?: string, billFieldList?: Array<{ __typename?: 'DurianBillFieldPayload', data?: string, decimalPlaces?: number, fieldId?: string, fieldKey?: string, fieldName?: string, fieldType?: string, isInteger?: number, note?: string, required?: number }> }> };

export type GetSopListQueryVariables = SchemaTypes.Exact<{
  sopIds?: SchemaTypes.InputMaybe<Array<SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>>>;
}>;


export type GetSopListQuery = { getSopList?: Array<{ __typename?: 'SopListPayload', sopId?: string, sopName?: string, time?: number }> };


export const PageReceiptPlanDocument = gql`
    query pageReceiptPlan($input: ReceiptPlanPageInput) {
  pageReceiptPlan(input: $input) {
    pageCurrent
    pageSize
    records {
      cabinetBatchCode
      cabinetCode
      categoryId
      categoryName
      customerId
      customerName
      originPlanCode
      planId
      receiptTemperatureState
      receiptTime
      salesPlanCode
      shipmentTime
      state
      tagAttribute
      tagList {
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
      temperatureFile {
        externalInfo {
          watermarkText
        }
        fileId
        fileUploadTime
        fileUrl
        filename
      }
    }
    totalRecords
  }
}
    `;

/**
 * __usePageReceiptPlanQuery__
 *
 * To run a query within a React component, call `usePageReceiptPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageReceiptPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageReceiptPlanQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePageReceiptPlanQuery(baseOptions?: Apollo.QueryHookOptions<PageReceiptPlanQuery, PageReceiptPlanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageReceiptPlanQuery, PageReceiptPlanQueryVariables>(PageReceiptPlanDocument, options);
      }
export function usePageReceiptPlanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageReceiptPlanQuery, PageReceiptPlanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageReceiptPlanQuery, PageReceiptPlanQueryVariables>(PageReceiptPlanDocument, options);
        }
export type PageReceiptPlanQueryHookResult = ReturnType<typeof usePageReceiptPlanQuery>;
export type PageReceiptPlanLazyQueryHookResult = ReturnType<typeof usePageReceiptPlanLazyQuery>;
export type PageReceiptPlanQueryResult = Apollo.QueryResult<PageReceiptPlanQuery, PageReceiptPlanQueryVariables>;
export const ReceiptDetailDocument = gql`
    query receiptDetail($input: ID) {
  receiptDetail(input: $input) {
    billMainId
    cabinetBatchCodeList
    cabinetCodeList
    categoryId
    categoryName
    emptyCabinetBillBusinessState
    emptyCabinetInfo {
      emptyCabinetDate
    }
    headquarterAreaOrderInfo {
      areaPurchaseOrderId
      headquarterAreaOrderRunCode
      headquarterSalesOrderId
    }
    pictureUrl
    planCode
    planId
    planList {
      planCode
      planId
      taskId
    }
    salePlanCreateTime
    sampleQuantity
    sopId
    sopIds
    sopOptionList {
      label
      value
    }
    state
    stateName
    taskId
    thermometerOrderId
    thermometerOrderInfo {
      bindThermometerState
      cabinetInfo {
        cabinetCode
        cabinetId
        deviceId
        originPlanCode
        salesPlanCode
      }
      currentAlarmLogList {
        alarmColor
        alarmDesc
        alarmState
        alarmSubType
        alarmTextColor
        alarmType
        alarmValue
        durationTime
        endAddress
        endTime
        handleContent
        handleTime
        handler
        id
        startAddress
        startTime
      }
      deviceInfo {
        currentAddress
        firstReportTime
        humidity
        lastReportTime
        lat
        lng
        temperature
        thermometerCode
      }
      orderInfo {
        alarmLogList {
          alarmColor
          alarmDesc
          alarmState
          alarmSubType
          alarmTextColor
          alarmType
          alarmValue
          durationTime
          endAddress
          endTime
          handleContent
          handleTime
          handler
          id
          startAddress
          startTime
        }
        alarmState
        firstAlarmTime
        thermometerEndTime
        thermometerStartTime
      }
      thermometerOrderId
    }
    tmpId
    totalQuantity
    transportInfo {
      backupPhone
      cabinetType
      carNo
      deliverAddress
      deliverAddressType
      departureDate
      driver
      entryPort
      entryPortId
      phone
      receiptPlace
      trailerNo
      transportCompany
    }
    billBusinessId
  }
}
    `;

/**
 * __useReceiptDetailQuery__
 *
 * To run a query within a React component, call `useReceiptDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceiptDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceiptDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReceiptDetailQuery(baseOptions?: Apollo.QueryHookOptions<ReceiptDetailQuery, ReceiptDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReceiptDetailQuery, ReceiptDetailQueryVariables>(ReceiptDetailDocument, options);
      }
export function useReceiptDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceiptDetailQuery, ReceiptDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReceiptDetailQuery, ReceiptDetailQueryVariables>(ReceiptDetailDocument, options);
        }
export type ReceiptDetailQueryHookResult = ReturnType<typeof useReceiptDetailQuery>;
export type ReceiptDetailLazyQueryHookResult = ReturnType<typeof useReceiptDetailLazyQuery>;
export type ReceiptDetailQueryResult = Apollo.QueryResult<ReceiptDetailQuery, ReceiptDetailQueryVariables>;
export const ReceiptPageDocument = gql`
    query receiptPage($input: ReceiptPageInput) {
  receiptPage(input: $input) {
    pageCurrent
    pageSize
    records {
      acceptanceTime
      backupPhone
      cabinetBatchCode
      cabinetCode
      carNo
      category
      deliverAddressType
      departureDate
      driverName
      driverPhone
      entryPort
      pictureUrl
      planCode
      quantity
      receiptAddress
      receiptDate
      sampleQuantity
      sopId
      state
      stateDesc
      taskId
      thermometerOrderId
      thermometerOrderInfo {
        bindThermometerState
        cabinetInfo {
          cabinetCode
          cabinetId
          deviceId
          originPlanCode
          salesPlanCode
        }
        currentAlarmLogList {
          alarmColor
          alarmDesc
          alarmState
          alarmSubType
          alarmTextColor
          alarmType
          alarmValue
          durationTime
          endAddress
          endTime
          handleContent
          handleTime
          handler
          id
          startAddress
          startTime
        }
        deviceInfo {
          currentAddress
          firstReportTime
          humidity
          lastReportTime
          lat
          lng
          temperature
          thermometerCode
        }
        orderInfo {
          alarmLogList {
            alarmColor
            alarmDesc
            alarmState
            alarmSubType
            alarmTextColor
            alarmType
            alarmValue
            durationTime
            endAddress
            endTime
            handleContent
            handleTime
            handler
            id
            startAddress
            startTime
          }
          alarmState
          firstAlarmTime
          thermometerEndTime
          thermometerStartTime
        }
        thermometerOrderId
      }
      trailerNo
    }
    totalRecords
  }
}
    `;

/**
 * __useReceiptPageQuery__
 *
 * To run a query within a React component, call `useReceiptPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceiptPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceiptPageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReceiptPageQuery(baseOptions?: Apollo.QueryHookOptions<ReceiptPageQuery, ReceiptPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReceiptPageQuery, ReceiptPageQueryVariables>(ReceiptPageDocument, options);
      }
export function useReceiptPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceiptPageQuery, ReceiptPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReceiptPageQuery, ReceiptPageQueryVariables>(ReceiptPageDocument, options);
        }
export type ReceiptPageQueryHookResult = ReturnType<typeof useReceiptPageQuery>;
export type ReceiptPageLazyQueryHookResult = ReturnType<typeof useReceiptPageLazyQuery>;
export type ReceiptPageQueryResult = Apollo.QueryResult<ReceiptPageQuery, ReceiptPageQueryVariables>;
export const ReceiptQuantityDocument = gql`
    query receiptQuantity($input: ReceiptQuantityInput) {
  receiptQuantity(input: $input) {
    finishedTotal
    totalTodoQuantity
    waitAcceptanceTotal
    waitEmptyCabinetTotal
  }
}
    `;

/**
 * __useReceiptQuantityQuery__
 *
 * To run a query within a React component, call `useReceiptQuantityQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceiptQuantityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceiptQuantityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReceiptQuantityQuery(baseOptions?: Apollo.QueryHookOptions<ReceiptQuantityQuery, ReceiptQuantityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReceiptQuantityQuery, ReceiptQuantityQueryVariables>(ReceiptQuantityDocument, options);
      }
export function useReceiptQuantityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceiptQuantityQuery, ReceiptQuantityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReceiptQuantityQuery, ReceiptQuantityQueryVariables>(ReceiptQuantityDocument, options);
        }
export type ReceiptQuantityQueryHookResult = ReturnType<typeof useReceiptQuantityQuery>;
export type ReceiptQuantityLazyQueryHookResult = ReturnType<typeof useReceiptQuantityLazyQuery>;
export type ReceiptQuantityQueryResult = Apollo.QueryResult<ReceiptQuantityQuery, ReceiptQuantityQueryVariables>;
export const ReceiptSearchDocument = gql`
    query receiptSearch($input: ReceiptSearchInput) {
  receiptSearch(input: $input) {
    pageCurrent
    pageSize
    records {
      acceptanceTime
      backupPhone
      cabinetBatchCode
      cabinetCode
      carNo
      category
      deliverAddressType
      departureDate
      driverName
      driverPhone
      entryPort
      pictureUrl
      planCode
      quantity
      receiptAddress
      receiptDate
      sampleQuantity
      sopId
      state
      stateDesc
      taskId
      thermometerOrderId
      thermometerOrderInfo {
        bindThermometerState
        cabinetInfo {
          cabinetCode
          cabinetId
          deviceId
          originPlanCode
          salesPlanCode
        }
        currentAlarmLogList {
          alarmColor
          alarmDesc
          alarmState
          alarmSubType
          alarmTextColor
          alarmType
          alarmValue
          durationTime
          endAddress
          endTime
          handleContent
          handleTime
          handler
          id
          startAddress
          startTime
        }
        deviceInfo {
          currentAddress
          firstReportTime
          humidity
          lastReportTime
          lat
          lng
          temperature
          thermometerCode
        }
        orderInfo {
          alarmLogList {
            alarmColor
            alarmDesc
            alarmState
            alarmSubType
            alarmTextColor
            alarmType
            alarmValue
            durationTime
            endAddress
            endTime
            handleContent
            handleTime
            handler
            id
            startAddress
            startTime
          }
          alarmState
          firstAlarmTime
          thermometerEndTime
          thermometerStartTime
        }
        thermometerOrderId
      }
      trailerNo
    }
    totalRecords
  }
}
    `;

/**
 * __useReceiptSearchQuery__
 *
 * To run a query within a React component, call `useReceiptSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceiptSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceiptSearchQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReceiptSearchQuery(baseOptions?: Apollo.QueryHookOptions<ReceiptSearchQuery, ReceiptSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReceiptSearchQuery, ReceiptSearchQueryVariables>(ReceiptSearchDocument, options);
      }
export function useReceiptSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceiptSearchQuery, ReceiptSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReceiptSearchQuery, ReceiptSearchQueryVariables>(ReceiptSearchDocument, options);
        }
export type ReceiptSearchQueryHookResult = ReturnType<typeof useReceiptSearchQuery>;
export type ReceiptSearchLazyQueryHookResult = ReturnType<typeof useReceiptSearchLazyQuery>;
export type ReceiptSearchQueryResult = Apollo.QueryResult<ReceiptSearchQuery, ReceiptSearchQueryVariables>;
export const CommitTemperatureInfoDocument = gql`
    mutation commitTemperatureInfo($input: ReceiptTemperatureInput) {
  commitTemperatureInfo(input: $input)
}
    `;
export type CommitTemperatureInfoMutationFn = Apollo.MutationFunction<CommitTemperatureInfoMutation, CommitTemperatureInfoMutationVariables>;

/**
 * __useCommitTemperatureInfoMutation__
 *
 * To run a mutation, you first call `useCommitTemperatureInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommitTemperatureInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commitTemperatureInfoMutation, { data, loading, error }] = useCommitTemperatureInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCommitTemperatureInfoMutation(baseOptions?: Apollo.MutationHookOptions<CommitTemperatureInfoMutation, CommitTemperatureInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CommitTemperatureInfoMutation, CommitTemperatureInfoMutationVariables>(CommitTemperatureInfoDocument, options);
      }
export type CommitTemperatureInfoMutationHookResult = ReturnType<typeof useCommitTemperatureInfoMutation>;
export type CommitTemperatureInfoMutationResult = Apollo.MutationResult<CommitTemperatureInfoMutation>;
export type CommitTemperatureInfoMutationOptions = Apollo.BaseMutationOptions<CommitTemperatureInfoMutation, CommitTemperatureInfoMutationVariables>;
export const ConfirmFeeDocument = gql`
    mutation confirmFee($input: ReceiptFeeConfirmInput) {
  confirmFee(input: $input)
}
    `;
export type ConfirmFeeMutationFn = Apollo.MutationFunction<ConfirmFeeMutation, ConfirmFeeMutationVariables>;

/**
 * __useConfirmFeeMutation__
 *
 * To run a mutation, you first call `useConfirmFeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmFeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmFeeMutation, { data, loading, error }] = useConfirmFeeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmFeeMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmFeeMutation, ConfirmFeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmFeeMutation, ConfirmFeeMutationVariables>(ConfirmFeeDocument, options);
      }
export type ConfirmFeeMutationHookResult = ReturnType<typeof useConfirmFeeMutation>;
export type ConfirmFeeMutationResult = Apollo.MutationResult<ConfirmFeeMutation>;
export type ConfirmFeeMutationOptions = Apollo.BaseMutationOptions<ConfirmFeeMutation, ConfirmFeeMutationVariables>;
export const ReceiptBackDocument = gql`
    mutation receiptBack($input: ReceiptBackInput) {
  receiptBack(input: $input)
}
    `;
export type ReceiptBackMutationFn = Apollo.MutationFunction<ReceiptBackMutation, ReceiptBackMutationVariables>;

/**
 * __useReceiptBackMutation__
 *
 * To run a mutation, you first call `useReceiptBackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReceiptBackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [receiptBackMutation, { data, loading, error }] = useReceiptBackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReceiptBackMutation(baseOptions?: Apollo.MutationHookOptions<ReceiptBackMutation, ReceiptBackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReceiptBackMutation, ReceiptBackMutationVariables>(ReceiptBackDocument, options);
      }
export type ReceiptBackMutationHookResult = ReturnType<typeof useReceiptBackMutation>;
export type ReceiptBackMutationResult = Apollo.MutationResult<ReceiptBackMutation>;
export type ReceiptBackMutationOptions = Apollo.BaseMutationOptions<ReceiptBackMutation, ReceiptBackMutationVariables>;
export const CalculatorAmountDocument = gql`
    mutation calculatorAmount($input: CalculatorInput) {
  calculatorAmount(input: $input)
}
    `;
export type CalculatorAmountMutationFn = Apollo.MutationFunction<CalculatorAmountMutation, CalculatorAmountMutationVariables>;

/**
 * __useCalculatorAmountMutation__
 *
 * To run a mutation, you first call `useCalculatorAmountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCalculatorAmountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [calculatorAmountMutation, { data, loading, error }] = useCalculatorAmountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCalculatorAmountMutation(baseOptions?: Apollo.MutationHookOptions<CalculatorAmountMutation, CalculatorAmountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CalculatorAmountMutation, CalculatorAmountMutationVariables>(CalculatorAmountDocument, options);
      }
export type CalculatorAmountMutationHookResult = ReturnType<typeof useCalculatorAmountMutation>;
export type CalculatorAmountMutationResult = Apollo.MutationResult<CalculatorAmountMutation>;
export type CalculatorAmountMutationOptions = Apollo.BaseMutationOptions<CalculatorAmountMutation, CalculatorAmountMutationVariables>;
export const GetFeeBillByIdDocument = gql`
    query getFeeBillById($input: BillGetInput) {
  getFeeBillById(input: $input) {
    amount
    billFieldList {
      data
      decimalPlaces
      fieldId
      fieldKey
      fieldName
      fieldType
      isInteger
      note
      required
    }
    calculateRule
    calculateType
    costId
    costName
    needInvoicingSupplier
    note
    remark
    ruleId
    showField
    showFieldValue
    supplierId
    tmpId
  }
}
    `;

/**
 * __useGetFeeBillByIdQuery__
 *
 * To run a query within a React component, call `useGetFeeBillByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeeBillByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeeBillByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetFeeBillByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetFeeBillByIdQuery, GetFeeBillByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeeBillByIdQuery, GetFeeBillByIdQueryVariables>(GetFeeBillByIdDocument, options);
      }
export function useGetFeeBillByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeeBillByIdQuery, GetFeeBillByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeeBillByIdQuery, GetFeeBillByIdQueryVariables>(GetFeeBillByIdDocument, options);
        }
export type GetFeeBillByIdQueryHookResult = ReturnType<typeof useGetFeeBillByIdQuery>;
export type GetFeeBillByIdLazyQueryHookResult = ReturnType<typeof useGetFeeBillByIdLazyQuery>;
export type GetFeeBillByIdQueryResult = Apollo.QueryResult<GetFeeBillByIdQuery, GetFeeBillByIdQueryVariables>;
export const GetSopListDocument = gql`
    query getSopList($sopIds: [ID]) {
  getSopList(sopIds: $sopIds) {
    sopId
    sopName
    time
  }
}
    `;

/**
 * __useGetSopListQuery__
 *
 * To run a query within a React component, call `useGetSopListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSopListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSopListQuery({
 *   variables: {
 *      sopIds: // value for 'sopIds'
 *   },
 * });
 */
export function useGetSopListQuery(baseOptions?: Apollo.QueryHookOptions<GetSopListQuery, GetSopListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSopListQuery, GetSopListQueryVariables>(GetSopListDocument, options);
      }
export function useGetSopListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSopListQuery, GetSopListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSopListQuery, GetSopListQueryVariables>(GetSopListDocument, options);
        }
export type GetSopListQueryHookResult = ReturnType<typeof useGetSopListQuery>;
export type GetSopListLazyQueryHookResult = ReturnType<typeof useGetSopListLazyQuery>;
export type GetSopListQueryResult = Apollo.QueryResult<GetSopListQuery, GetSopListQueryVariables>;