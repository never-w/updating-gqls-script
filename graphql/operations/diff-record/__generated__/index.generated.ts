import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../../generated/types'
const defaultOptions = {} as const
export type DifferenceOrderDetailQueryVariables = SchemaTypes.Exact<{
  orderId: SchemaTypes.Scalars['ID']
  orderType?: SchemaTypes.InputMaybe<SchemaTypes.DifferenceOrderType>
}>

export type DifferenceOrderDetailQuery = {
  differenceOrderDetail?: {
    __typename?: 'DifferenceOrderPayLoad'
    businessCode?: string
    businessId?: string
    createTime?: number
    deliveryTime?: number
    differenceOrderType?: SchemaTypes.DifferenceOrderType
    differenceOrderTypeDesc?: string
    orderCode?: string
    orderId?: string
    receiveTime?: number
    returnTime?: number
    differenceOrderStatus?: SchemaTypes.DifferenceOrderStatus
    differenceOrderStatusDesc?: string
    depletionTime?: number
    remark?: string
    belongOrg?: { __typename?: 'PitayaOrg'; orgId?: number; orgName?: string }
    createUser?: {
      __typename?: 'User'
      phoneNum?: string
      userId?: number
      userName?: string
    }
    customer?: {
      __typename?: 'Customer'
      customerId?: number
      customerName?: string
      customerType?: number
      lastLevelId?: number
      lastLevelName?: string
    }
    commodityList?: Array<{
      __typename?: 'DifferenceOrderItemPayLoad'
      businessItemId?: string
      orderId?: string
      orderItemId?: string
      planCode?: string
      planSaleTime?: number
      reason?: string
      saleOrderItemId?: string
      markList?: Array<SchemaTypes.ApplyMarkEnum>
      markNameList?: Array<string>
      quantity?: number
      differenceOrderType?: SchemaTypes.DifferenceOrderType
      batchInfo?: {
        __typename?: 'BatchInfoWithWarehouse'
        batchCode?: string
        batchId?: string
        createTime?: number
        commodityTypeId?: number
        commodityTypeName?: string
        quantity?: number
        warehouse?: {
          __typename?: 'Warehouse'
          warehouseId?: string
          warehouseName?: string
        }
        customer?: {
          __typename?: 'Customer'
          customerId?: number
          customerName?: string
          customerType?: number
          lastLevelId?: number
          lastLevelName?: string
        }
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        quantityItem?: Array<{
          __typename?: 'DynamicQuantity'
          quantity?: number
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
      }
      commoditySku?: {
        __typename?: 'PitayaCommoditySku'
        categoryId?: number
        categoryName?: string
        commodityId?: number
        commodityName?: string
        commoditySkuId?: number
        commoditySkuName?: string
        commoditySpecOptionId?: Array<number>
        commoditySpecOptionName?: Array<string>
        availableSkuQuantity?: Array<{
          __typename?: 'AvailableSkuQuantity'
          conversion?: number
          businessUnit?: {
            __typename?: 'Unit'
            unitId?: number
            unitName?: string
          }
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
        baseUnit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }
      commodityType?: {
        __typename?: 'PitayaCommodityType'
        commodityTypeId?: number
        commodityTypeName?: string
      }
      batch?: {
        __typename?: 'StockBatch'
        batchCode?: string
        batchId?: string
        createTime?: number
        sourceBatchCode?: string
        sourceBatchId?: string
        quantity?: number
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        quantityItem?: Array<{
          __typename?: 'DynamicQuantity'
          quantity?: number
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
      }
      originDeliveryExtendInfo?: {
        __typename?: 'OriginDeliveryExtendInfo'
        deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum
        deliveryGoodsSourceDesc?: string
        warehouse?: {
          __typename?: 'WarehouseDataLoaderPayload'
          address?: string
          belongId?: number
          belongType?: number
          houseNumber?: string
          id?: string
          locationList?: Array<number>
          name?: string
          orgId?: number
          remark?: string
          status?: number
          typeId?: number
        }
      }
      quantityItem?: Array<{
        __typename?: 'DynamicQuantity'
        quantity?: number
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }>
      unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
    }>
  }
}

export const DifferenceOrderDetailDocument = gql`
  query differenceOrderDetail($orderId: ID!, $orderType: DifferenceOrderType) {
    differenceOrderDetail(orderId: $orderId, orderType: $orderType) {
      belongOrg {
        orgId
        orgName
      }
      createUser {
        phoneNum
        userId
        userName
      }
      customer {
        customerId
        customerName
        customerType
        lastLevelId
        lastLevelName
      }
      businessCode
      businessId
      commodityList {
        batchInfo {
          warehouse {
            warehouseId
            warehouseName
          }
          batchCode
          batchId
          createTime
          customer {
            customerId
            customerName
            customerType
            lastLevelId
            lastLevelName
          }
          commodityTypeId
          commodityTypeName
          unit {
            unitId
            unitName
          }
          quantity
          quantityItem {
            unit {
              unitId
              unitName
            }
            quantity
          }
        }
        commoditySku {
          categoryId
          categoryName
          commodityId
          commodityName
          commoditySkuId
          commoditySkuName
          commoditySpecOptionId
          commoditySpecOptionName
          availableSkuQuantity {
            businessUnit {
              unitId
              unitName
            }
            unit {
              unitId
              unitName
            }
            conversion
          }
          baseUnit {
            unitId
            unitName
          }
        }
        commodityType {
          commodityTypeId
          commodityTypeName
        }
        businessItemId
        orderId
        orderItemId
        planCode
        planSaleTime
        reason
        saleOrderItemId
        markList
        markNameList
        batch {
          batchCode
          batchId
          createTime
          sourceBatchCode
          sourceBatchId
          unit {
            unitId
            unitName
          }
          quantity
          quantityItem {
            unit {
              unitId
              unitName
            }
            quantity
          }
        }
        originDeliveryExtendInfo {
          deliveryGoodsSource
          deliveryGoodsSourceDesc
          warehouse {
            address
            belongId
            belongType
            houseNumber
            id
            locationList
            name
            orgId
            remark
            status
            typeId
          }
        }
        quantity
        quantityItem {
          unit {
            unitId
            unitName
          }
          quantity
        }
        unit {
          unitId
          unitName
        }
        differenceOrderType
      }
      createTime
      deliveryTime
      differenceOrderType
      differenceOrderTypeDesc
      orderCode
      orderId
      receiveTime
      returnTime
      differenceOrderStatus
      differenceOrderStatusDesc
      depletionTime
      remark
    }
  }
`

/**
 * __useDifferenceOrderDetailQuery__
 *
 * To run a query within a React component, call `useDifferenceOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useDifferenceOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDifferenceOrderDetailQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      orderType: // value for 'orderType'
 *   },
 * });
 */
export function useDifferenceOrderDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    DifferenceOrderDetailQuery,
    DifferenceOrderDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    DifferenceOrderDetailQuery,
    DifferenceOrderDetailQueryVariables
  >(DifferenceOrderDetailDocument, options)
}
export function useDifferenceOrderDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DifferenceOrderDetailQuery,
    DifferenceOrderDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    DifferenceOrderDetailQuery,
    DifferenceOrderDetailQueryVariables
  >(DifferenceOrderDetailDocument, options)
}
export type DifferenceOrderDetailQueryHookResult = ReturnType<
  typeof useDifferenceOrderDetailQuery
>
export type DifferenceOrderDetailLazyQueryHookResult = ReturnType<
  typeof useDifferenceOrderDetailLazyQuery
>
export type DifferenceOrderDetailQueryResult = Apollo.QueryResult<
  DifferenceOrderDetailQuery,
  DifferenceOrderDetailQueryVariables
>
