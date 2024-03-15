import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CommodityModificationDetailQueryVariables = SchemaTypes.Exact<{
  deliveryOrderDetailQueryInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryOrderDetailQueryInput>;
  saleGoodsListQueryInput?: SchemaTypes.InputMaybe<SchemaTypes.SaleGoodsListQueryInput>;
}>;


export type CommodityModificationDetailQuery = { deliveryOrderDetail?: { __typename?: 'DeliveryOrderDetailPayload', orderId?: string, businessUserName?: string, carNum?: string, carType?: string, deliveryType?: SchemaTypes.DeliveryMethodEnum, deliveryTypeDesc?: string, driverContact?: string, driverName?: string, orderCode?: string, orderStatus?: SchemaTypes.DeliveryOrderStatusEnum, orderStatusDesc?: string, saleOrderDate?: number, createTime?: number, photos?: Array<string>, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, belongInfo?: Array<{ __typename?: 'SummaryCustomerAddressInfo', customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, deliveryOrderFee?: Array<{ __typename?: 'DeliveryOrderFeePayload', amount?: number, billId?: string, feeItemId?: string, feeType?: SchemaTypes.DeliveryFeeTypeEnum, feeTypeDesc?: string, payMode?: SchemaTypes.DeliveryFeePayModeEnum, payModeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, deliveryOrderItem?: Array<{ __typename?: 'DeliveryOrderItemPayload', itemId?: string, orderId?: string, saleOrderId?: string, saleOrderCode?: string, outOrderId?: string, outOrderQuantity?: number, orderType?: number, commodityTypeId?: number, commodityTypeName?: string, customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string }, commodityDetail?: Array<{ __typename?: 'DeliveryOrderCommodityItemPayload', itemId?: string, totalQuantity?: number, unitQuantity?: number, bakTotalQuantity?: number, bakUnitQuantity?: number, outTotalQuantity?: number, outUnitQuantity?: number, bakOutTotalQuantity?: number, bakOutUnitQuantity?: number, actualTotalQuantity?: number, actualUnitQuantity?: number, differenceReason?: string, saleOrderItemId?: string, deliveryOutItemId?: string, deliverableTotalQuantity?: number, deliverableUnitQuantity?: number, deliveredTotalQuantity?: number, deliveredUnitQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }, querySaleGoodsList?: Array<{ __typename?: 'SaleGoodsInfoListPayload', saleOrderId?: string, saleOrderCode?: string, saleOrderDate?: number, orderType?: number, commodityTypeId?: number, commodityTypeName?: string, outOrderId?: string, outOrderStatus?: number, customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string }, saleGoodsItemInfo?: Array<{ __typename?: 'SaleGoodsItemInfoPayload', totalQuantity?: number, unitQuantity?: number, deliverableTotalQuantity?: number, deliverableUnitQuantity?: number, saleOrderItemId?: string, needShow?: boolean, commodityDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> }> };


export const CommodityModificationDetailDocument = gql`
    query commodityModificationDetail($deliveryOrderDetailQueryInput: DeliveryOrderDetailQueryInput, $saleGoodsListQueryInput: SaleGoodsListQueryInput) {
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
    deliveryOrderItem {
      customerAddressInfo {
        customerId
        customerName
        customerType
        deliveryName
      }
      itemId
      orderId
      saleOrderId
      saleOrderCode
      commodityDetail {
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
        }
        totalQuantity
        unitQuantity
        bakTotalQuantity
        bakUnitQuantity
        outTotalQuantity
        outUnitQuantity
        bakOutTotalQuantity
        bakOutUnitQuantity
        actualTotalQuantity
        actualUnitQuantity
        differenceReason
        saleOrderItemId
        deliveryOutItemId
        deliverableTotalQuantity
        deliverableUnitQuantity
        deliveredTotalQuantity
        deliveredUnitQuantity
      }
      outOrderId
      outOrderQuantity
      orderType
      commodityTypeId
      commodityTypeName
    }
    belongOrg {
      orgId
      orgName
    }
    photos
  }
  querySaleGoodsList(saleGoodsListQueryInput: $saleGoodsListQueryInput) {
    customerAddressInfo {
      customerId
      customerName
      customerType
      deliveryName
    }
    saleOrderId
    saleOrderCode
    saleOrderDate
    saleGoodsItemInfo {
      commodityDetail {
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
      }
      totalQuantity
      unitQuantity
      deliverableTotalQuantity
      deliverableUnitQuantity
      saleOrderItemId
      needShow
    }
    orderType
    commodityTypeId
    commodityTypeName
    outOrderId
    outOrderStatus
  }
}
    `;

/**
 * __useCommodityModificationDetailQuery__
 *
 * To run a query within a React component, call `useCommodityModificationDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommodityModificationDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommodityModificationDetailQuery({
 *   variables: {
 *      deliveryOrderDetailQueryInput: // value for 'deliveryOrderDetailQueryInput'
 *      saleGoodsListQueryInput: // value for 'saleGoodsListQueryInput'
 *   },
 * });
 */
export function useCommodityModificationDetailQuery(baseOptions?: Apollo.QueryHookOptions<CommodityModificationDetailQuery, CommodityModificationDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommodityModificationDetailQuery, CommodityModificationDetailQueryVariables>(CommodityModificationDetailDocument, options);
      }
export function useCommodityModificationDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommodityModificationDetailQuery, CommodityModificationDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommodityModificationDetailQuery, CommodityModificationDetailQueryVariables>(CommodityModificationDetailDocument, options);
        }
export type CommodityModificationDetailQueryHookResult = ReturnType<typeof useCommodityModificationDetailQuery>;
export type CommodityModificationDetailLazyQueryHookResult = ReturnType<typeof useCommodityModificationDetailLazyQuery>;
export type CommodityModificationDetailQueryResult = Apollo.QueryResult<CommodityModificationDetailQuery, CommodityModificationDetailQueryVariables>;