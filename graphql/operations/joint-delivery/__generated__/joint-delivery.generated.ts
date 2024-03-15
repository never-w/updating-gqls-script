import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SaveJointVentureOrderMutationVariables = SchemaTypes.Exact<{
  saveJointVentureOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.SaveJointVentureOrderInput>;
}>;


export type SaveJointVentureOrderMutation = { saveJointVentureOrder?: string };

export type UpdateJointVentureOrderMutationVariables = SchemaTypes.Exact<{
  updateJointVentureOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateJointVentureOrderInput>;
}>;


export type UpdateJointVentureOrderMutation = { updateJointVentureOrder?: boolean };

export type JointDeliveryOrderDetailQueryVariables = SchemaTypes.Exact<{
  deliveryOrderDetailQueryInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryOrderDetailQueryInput>;
}>;


export type JointDeliveryOrderDetailQuery = { deliveryOrderDetail?: { __typename?: 'DeliveryOrderDetailPayload', orderId?: string, businessUserName?: string, carNum?: string, carType?: string, deliveryType?: SchemaTypes.DeliveryMethodEnum, deliveryTypeDesc?: string, driverContact?: string, driverName?: string, orderCode?: string, orderStatus?: SchemaTypes.DeliveryOrderStatusEnum, orderStatusDesc?: string, saleOrderDate?: number, createTime?: number, photos?: Array<string>, deliveryOrderTypeDesc?: string, deliveryDate?: number, commodityTypeId?: number, commodityTypeDesc?: string, outOrderType?: SchemaTypes.OutOrderTypeEnum, outOrderTypeDesc?: string, statusNote?: string, outOrderId?: string, outOrderQuantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, belongInfo?: Array<{ __typename?: 'SummaryCustomerAddressInfo', customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, deliveryOrderFee?: Array<{ __typename?: 'DeliveryOrderFeePayload', amount?: number, billId?: string, feeItemId?: string, feeType?: SchemaTypes.DeliveryFeeTypeEnum, feeTypeDesc?: string, payMode?: SchemaTypes.DeliveryFeePayModeEnum, payModeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, jointVentureOrderItem?: Array<{ __typename?: 'JointVentureOrderItemPayload', itemId?: string, outTotalQuantity?: number, outUnitQuantity?: number, totalQuantity?: number, unitQuantity?: number, batchId?: string, batchCode?: string, sku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, sourceBatchCode?: string, sourceBatchId?: string, totalQuantity?: number, unitQuantity?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, stockQuantity?: { __typename?: 'StockQuantity', unitQuantity?: number, totalQuantity?: number } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };


export const SaveJointVentureOrderDocument = gql`
    mutation saveJointVentureOrder($saveJointVentureOrderInput: SaveJointVentureOrderInput) {
  saveJointVentureOrder(saveJointVentureOrderInput: $saveJointVentureOrderInput)
}
    `;
export type SaveJointVentureOrderMutationFn = Apollo.MutationFunction<SaveJointVentureOrderMutation, SaveJointVentureOrderMutationVariables>;

/**
 * __useSaveJointVentureOrderMutation__
 *
 * To run a mutation, you first call `useSaveJointVentureOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveJointVentureOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveJointVentureOrderMutation, { data, loading, error }] = useSaveJointVentureOrderMutation({
 *   variables: {
 *      saveJointVentureOrderInput: // value for 'saveJointVentureOrderInput'
 *   },
 * });
 */
export function useSaveJointVentureOrderMutation(baseOptions?: Apollo.MutationHookOptions<SaveJointVentureOrderMutation, SaveJointVentureOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveJointVentureOrderMutation, SaveJointVentureOrderMutationVariables>(SaveJointVentureOrderDocument, options);
      }
export type SaveJointVentureOrderMutationHookResult = ReturnType<typeof useSaveJointVentureOrderMutation>;
export type SaveJointVentureOrderMutationResult = Apollo.MutationResult<SaveJointVentureOrderMutation>;
export type SaveJointVentureOrderMutationOptions = Apollo.BaseMutationOptions<SaveJointVentureOrderMutation, SaveJointVentureOrderMutationVariables>;
export const UpdateJointVentureOrderDocument = gql`
    mutation updateJointVentureOrder($updateJointVentureOrderInput: UpdateJointVentureOrderInput) {
  updateJointVentureOrder(
    updateJointVentureOrderInput: $updateJointVentureOrderInput
  )
}
    `;
export type UpdateJointVentureOrderMutationFn = Apollo.MutationFunction<UpdateJointVentureOrderMutation, UpdateJointVentureOrderMutationVariables>;

/**
 * __useUpdateJointVentureOrderMutation__
 *
 * To run a mutation, you first call `useUpdateJointVentureOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJointVentureOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJointVentureOrderMutation, { data, loading, error }] = useUpdateJointVentureOrderMutation({
 *   variables: {
 *      updateJointVentureOrderInput: // value for 'updateJointVentureOrderInput'
 *   },
 * });
 */
export function useUpdateJointVentureOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJointVentureOrderMutation, UpdateJointVentureOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJointVentureOrderMutation, UpdateJointVentureOrderMutationVariables>(UpdateJointVentureOrderDocument, options);
      }
export type UpdateJointVentureOrderMutationHookResult = ReturnType<typeof useUpdateJointVentureOrderMutation>;
export type UpdateJointVentureOrderMutationResult = Apollo.MutationResult<UpdateJointVentureOrderMutation>;
export type UpdateJointVentureOrderMutationOptions = Apollo.BaseMutationOptions<UpdateJointVentureOrderMutation, UpdateJointVentureOrderMutationVariables>;
export const JointDeliveryOrderDetailDocument = gql`
    query jointDeliveryOrderDetail($deliveryOrderDetailQueryInput: DeliveryOrderDetailQueryInput) {
  deliveryOrderDetail(
    deliveryOrderDetailQueryInput: $deliveryOrderDetailQueryInput
  ) {
    orderId
    warehouse {
      warehouseId
      warehouseName
    }
    belongInfo {
      customerAddressInfo {
        customerId
        customerName
        customerType
        deliveryName
      }
    }
    businessUserName
    carNum
    carType
    deliveryType
    deliveryTypeDesc
    driverContact
    driverName
    orderCode
    orderStatus
    orderStatusDesc
    org {
      orgId
      orgName
    }
    saleOrderDate
    createBy {
      userId
      userName
      phoneNum
    }
    createTime
    deliveryOrderFee {
      amount
      billId
      feeItemId
      feeType
      feeTypeDesc
      payMode
      payModeDesc
      remark
      supplier {
        supplierId
        supplierName
      }
    }
    jointVentureOrderItem {
      itemId
      sku {
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
      batch {
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
        batchCode
        batchId
        createTime
        sourceBatchCode
        sourceBatchId
        totalQuantity
        unitQuantity
      }
      outTotalQuantity
      outUnitQuantity
      totalQuantity
      unitQuantity
      batchId
      batchCode
      stockQuantity {
        unitQuantity
        totalQuantity
      }
    }
    belongOrg {
      orgId
      orgName
    }
    photos
    deliveryOrderTypeDesc
    deliveryDate
    commodityTypeId
    commodityTypeDesc
    outOrderType
    outOrderTypeDesc
    statusNote
    outOrderId
    outOrderQuantity
  }
}
    `;

/**
 * __useJointDeliveryOrderDetailQuery__
 *
 * To run a query within a React component, call `useJointDeliveryOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useJointDeliveryOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJointDeliveryOrderDetailQuery({
 *   variables: {
 *      deliveryOrderDetailQueryInput: // value for 'deliveryOrderDetailQueryInput'
 *   },
 * });
 */
export function useJointDeliveryOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<JointDeliveryOrderDetailQuery, JointDeliveryOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JointDeliveryOrderDetailQuery, JointDeliveryOrderDetailQueryVariables>(JointDeliveryOrderDetailDocument, options);
      }
export function useJointDeliveryOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JointDeliveryOrderDetailQuery, JointDeliveryOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JointDeliveryOrderDetailQuery, JointDeliveryOrderDetailQueryVariables>(JointDeliveryOrderDetailDocument, options);
        }
export type JointDeliveryOrderDetailQueryHookResult = ReturnType<typeof useJointDeliveryOrderDetailQuery>;
export type JointDeliveryOrderDetailLazyQueryHookResult = ReturnType<typeof useJointDeliveryOrderDetailLazyQuery>;
export type JointDeliveryOrderDetailQueryResult = Apollo.QueryResult<JointDeliveryOrderDetailQuery, JointDeliveryOrderDetailQueryVariables>;