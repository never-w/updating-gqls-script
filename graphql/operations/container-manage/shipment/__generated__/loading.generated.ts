import type * as SchemaTypes from '../../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LoadCabinetDetailQueryVariables = SchemaTypes.Exact<{
  taskId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type LoadCabinetDetailQuery = { loadCabinetDetail?: { __typename?: 'LoadCabinetDetailEchoPayload', planId?: string, taskId?: string, planCode?: string, pickingTime?: number, suggestSalesTime?: number, deliverTime?: number, categoryId?: string, categoryName?: string, pictureUrl?: string, cabinetCodeList?: Array<string>, cabinetBatchCodeList?: Array<string>, sopIdList?: Array<string>, totalQuantity?: number, state?: SchemaTypes.LoadingState, transportMethod?: SchemaTypes.TransportMethodEnum, contractCode?: string, thermometerOrderId?: string, labelList?: Array<{ __typename?: 'LabelPayload', orchardNo?: string, packagePlantNo?: string, files?: Array<{ __typename?: 'DurianFilePayload', fileId?: string, filename?: string, fileUrl?: string, fileUploadTime?: number, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } }> }>, tagList?: Array<{ __typename?: 'TagInfoPayload', id?: string, remark?: string, tagId?: string, planId?: string, type?: SchemaTypes.TagTypeEnum, name?: string, meaning?: string, styleColor?: string, enabled?: SchemaTypes.EnableEnum, canDeleted?: boolean, tagBelong?: SchemaTypes.TagBelongEnum, createTime?: number, createBy?: string, createUserName?: string }>, detail?: Array<{ __typename?: 'LoadCabinetDetailPayload', factory?: { __typename?: 'DurianOption', label?: string, value?: string }, goodsList?: Array<{ __typename?: 'GoodsPayload', count?: number, spu?: { __typename?: 'SpuPayload', label?: string, value?: string, specsList?: Array<{ __typename?: 'DurianSpecPayload', value?: string, name?: string, itemList?: Array<{ __typename?: 'ItemPayload', name?: string, id?: string }> }> }, sku?: { __typename?: 'SkuPayload', specIdsList?: Array<string>, skuName?: string, skuId?: string, specsList?: Array<{ __typename?: 'SpecInfoPayload', name?: string, id?: string, specName?: string, specId?: string }> } }> }>, thermometerOrderInfo?: { __typename?: 'ThermometerOrderInfoPayload', thermometerOrderId?: string, bindThermometerState?: SchemaTypes.BindThermometerState, currentAlarmLogList?: Array<{ __typename?: 'AlarmInfoPayload', id?: string, alarmType?: SchemaTypes.AlarmType, alarmColor?: string, alarmTextColor?: string, alarmDesc?: string, alarmValue?: string, startTime?: number, endTime?: number, durationTime?: string, startAddress?: string, endAddress?: string, alarmState?: SchemaTypes.AlarmState }>, cabinetInfo?: { __typename?: 'ThermometerCabinetInfoPayload', deviceId?: string, cabinetId?: string, cabinetCode?: string, originPlanCode?: string, salesPlanCode?: string }, orderInfo?: { __typename?: 'ThermometerOrderAlarmPayload', thermometerStartTime?: number, thermometerEndTime?: number, firstAlarmTime?: number, alarmState?: SchemaTypes.AlarmState, alarmLogList?: Array<{ __typename?: 'AlarmInfoPayload', id?: string, alarmType?: SchemaTypes.AlarmType, alarmColor?: string, alarmTextColor?: string, alarmDesc?: string, alarmValue?: string, startTime?: number, endTime?: number, durationTime?: string, startAddress?: string, endAddress?: string, alarmState?: SchemaTypes.AlarmState }> }, deviceInfo?: { __typename?: 'ThermometerDevicePayload', thermometerCode?: string, lastReportTime?: number, firstReportTime?: number, temperature?: string, currentAddress?: string, lng?: number, lat?: number } } } };


export const LoadCabinetDetailDocument = gql`
    query loadCabinetDetail($taskId: ID) {
  loadCabinetDetail(taskId: $taskId) {
    planId
    taskId
    planCode
    pickingTime
    suggestSalesTime
    deliverTime
    categoryId
    categoryName
    pictureUrl
    cabinetCodeList
    cabinetBatchCodeList
    sopIdList
    totalQuantity
    state
    labelList {
      files {
        fileId
        filename
        fileUrl
        fileUploadTime
        externalInfo {
          watermarkText
        }
      }
      orchardNo
      packagePlantNo
    }
    tagList {
      id
      remark
      tagId
      planId
      type
      name
      meaning
      styleColor
      enabled
      canDeleted
      tagBelong
      createTime
      createBy
      createUserName
    }
    detail {
      factory {
        label
        value
      }
      goodsList {
        spu {
          label
          value
          specsList {
            value
            name
            itemList {
              name
              id
            }
          }
        }
        sku {
          specIdsList
          skuName
          skuId
          specsList {
            name
            id
            specName
            specId
          }
        }
        count
      }
    }
    transportMethod
    contractCode
    thermometerOrderId
    thermometerOrderInfo {
      thermometerOrderId
      bindThermometerState
      currentAlarmLogList {
        id
        alarmType
        alarmColor
        alarmTextColor
        alarmDesc
        alarmValue
        startTime
        endTime
        durationTime
        startAddress
        endAddress
        alarmState
      }
      cabinetInfo {
        deviceId
        cabinetId
        cabinetCode
        originPlanCode
        salesPlanCode
      }
      orderInfo {
        thermometerStartTime
        thermometerEndTime
        firstAlarmTime
        alarmState
        alarmLogList {
          id
          alarmType
          alarmColor
          alarmTextColor
          alarmDesc
          alarmValue
          startTime
          endTime
          durationTime
          startAddress
          endAddress
          alarmState
        }
      }
      deviceInfo {
        thermometerCode
        lastReportTime
        firstReportTime
        temperature
        currentAddress
        lng
        lat
      }
    }
  }
}
    `;

/**
 * __useLoadCabinetDetailQuery__
 *
 * To run a query within a React component, call `useLoadCabinetDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadCabinetDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadCabinetDetailQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useLoadCabinetDetailQuery(baseOptions?: Apollo.QueryHookOptions<LoadCabinetDetailQuery, LoadCabinetDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoadCabinetDetailQuery, LoadCabinetDetailQueryVariables>(LoadCabinetDetailDocument, options);
      }
export function useLoadCabinetDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoadCabinetDetailQuery, LoadCabinetDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoadCabinetDetailQuery, LoadCabinetDetailQueryVariables>(LoadCabinetDetailDocument, options);
        }
export type LoadCabinetDetailQueryHookResult = ReturnType<typeof useLoadCabinetDetailQuery>;
export type LoadCabinetDetailLazyQueryHookResult = ReturnType<typeof useLoadCabinetDetailLazyQuery>;
export type LoadCabinetDetailQueryResult = Apollo.QueryResult<LoadCabinetDetailQuery, LoadCabinetDetailQueryVariables>;