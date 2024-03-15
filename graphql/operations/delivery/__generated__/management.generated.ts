import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageDeliveryOrderQueryVariables = SchemaTypes.Exact<{
  deliveryOrderQueryInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryOrderQueryInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageDeliveryOrderQuery = { pageDeliveryOrder?: { __typename?: 'PageDeliveryOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'DeliveryOrderDetailPayload', orderId?: string, businessUserName?: string, carNum?: string, carType?: string, deliveryType?: SchemaTypes.DeliveryMethodEnum, deliveryTypeDesc?: string, driverContact?: string, driverName?: string, orderCode?: string, orderStatus?: SchemaTypes.DeliveryOrderStatusEnum, orderStatusDesc?: string, saleOrderDate?: number, createTime?: number, photos?: Array<string>, deliveryOrderTypeDesc?: string, deliveryDate?: number, commodityTypeId?: number, commodityTypeDesc?: string, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, belongInfo?: Array<{ __typename?: 'SummaryCustomerAddressInfo', customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, deliveryOrderFee?: Array<{ __typename?: 'DeliveryOrderFeePayload', amount?: number, billId?: string, feeItemId?: string, feeType?: SchemaTypes.DeliveryFeeTypeEnum, feeTypeDesc?: string, payMode?: SchemaTypes.DeliveryFeePayModeEnum, payModeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, deliveryOrderItem?: Array<{ __typename?: 'DeliveryOrderItemPayload', itemId?: string, orderId?: string, saleOrderId?: string, saleOrderCode?: string, outOrderId?: string, outOrderQuantity?: number, orderType?: number, commodityTypeId?: number, commodityTypeName?: string, customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string }, commodityDetail?: Array<{ __typename?: 'DeliveryOrderCommodityItemPayload', itemId?: string, totalQuantity?: number, unitQuantity?: number, bakTotalQuantity?: number, bakUnitQuantity?: number, outTotalQuantity?: number, outUnitQuantity?: number, bakOutTotalQuantity?: number, bakOutUnitQuantity?: number, actualTotalQuantity?: number, actualUnitQuantity?: number, differenceReason?: string, saleOrderItemId?: string, deliveryOutItemId?: string, deliverableTotalQuantity?: number, deliverableUnitQuantity?: number, deliveredTotalQuantity?: number, deliveredUnitQuantity?: number, returnTotalQuantity?: number, returnUnitQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type DeliveryOrderDetailQueryVariables = SchemaTypes.Exact<{
  deliveryOrderDetailQueryInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryOrderDetailQueryInput>;
}>;


export type DeliveryOrderDetailQuery = { deliveryOrderDetail?: { __typename?: 'DeliveryOrderDetailPayload', businessUserName?: string, carNum?: string, carType?: string, commodityTypeDesc?: string, commodityTypeId?: number, completeTime?: number, completeTimeUpdateSign?: boolean, createTime?: number, deliveryDate?: number, deliveryOrderTypeDesc?: string, deliveryType?: SchemaTypes.DeliveryMethodEnum, deliveryTypeDesc?: string, driverContact?: string, driverName?: string, orderCode?: string, orderId?: string, orderStatus?: SchemaTypes.DeliveryOrderStatusEnum, orderStatusDesc?: string, outOrderId?: string, outOrderQuantity?: number, outOrderType?: SchemaTypes.OutOrderTypeEnum, outOrderTypeDesc?: string, photos?: Array<string>, saleOrderDate?: number, statusNote?: string, belongInfo?: Array<{ __typename?: 'SummaryCustomerAddressInfo', customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, deliveryOrderFee?: Array<{ __typename?: 'DeliveryOrderFeePayload', amount?: number, billId?: string, feeItemId?: string, feeType?: SchemaTypes.DeliveryFeeTypeEnum, feeTypeDesc?: string, payMode?: SchemaTypes.DeliveryFeePayModeEnum, payModeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, deliveryOrderItem?: Array<{ __typename?: 'DeliveryOrderItemPayload', commodityTypeId?: number, commodityTypeName?: string, itemId?: string, orderId?: string, orderType?: number, outOrderId?: string, outOrderQuantity?: number, saleOrderCode?: string, saleOrderId?: string, commodityDetail?: Array<{ __typename?: 'DeliveryOrderCommodityItemPayload', actualTotalQuantity?: number, actualUnitQuantity?: number, bakOutTotalQuantity?: number, bakOutUnitQuantity?: number, bakTotalQuantity?: number, bakUnitQuantity?: number, deliverableTotalQuantity?: number, deliverableUnitQuantity?: number, deliveredTotalQuantity?: number, deliveredUnitQuantity?: number, deliveryOutItemId?: string, differenceReason?: string, itemId?: string, outTotalQuantity?: number, outUnitQuantity?: number, returnTotalQuantity?: number, returnUnitQuantity?: number, saleOrderItemId?: string, totalQuantity?: number, unitQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, jointVentureOrderItem?: Array<{ __typename?: 'JointVentureOrderItemPayload', batchCode?: string, batchId?: string, deliveryOutItemId?: string, itemId?: string, orderId?: string, outTotalQuantity?: number, outUnitQuantity?: number, totalQuantity?: number, unitQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, stockQuantity?: { __typename?: 'StockQuantity', totalQuantity?: number, unitQuantity?: number } }>, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } };

export type DeliveryOrderStatusCountQueryVariables = SchemaTypes.Exact<{
  deliveryOrderStatusCountInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryOrderStatusCountInput>;
}>;


export type DeliveryOrderStatusCountQuery = { deliveryOrderStatusCount?: { __typename?: 'DeliveryOrderStatusCountPayload', unSubmit?: number, unOutStock?: number, unReceipt?: number } };

export type QuerySaleGoodsListQueryVariables = SchemaTypes.Exact<{
  saleGoodsListQueryInput?: SchemaTypes.InputMaybe<SchemaTypes.SaleGoodsListQueryInput>;
}>;


export type QuerySaleGoodsListQuery = { querySaleGoodsList?: Array<{ __typename?: 'SaleGoodsInfoListPayload', saleOrderId?: string, saleOrderCode?: string, saleOrderDate?: number, orderType?: number, commodityTypeId?: number, commodityTypeName?: string, outOrderId?: string, outOrderStatus?: number, customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string }, saleGoodsItemInfo?: Array<{ __typename?: 'SaleGoodsItemInfoPayload', totalQuantity?: number, unitQuantity?: number, deliverableTotalQuantity?: number, deliverableUnitQuantity?: number, saleOrderItemId?: string, needShow?: boolean, commodityDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> }> };

export type ListDeliveryInfoQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListDeliveryInfoQuery = { listDeliveryInfo?: Array<{ __typename?: 'PitayaDeliveryInfoPayload', createTime?: number, updateTime?: number, id?: string, driverName?: string, driverContact?: string, carType?: string, carNum?: string, deliveryType?: SchemaTypes.DeliveryMethodEnum, deliveryTypeDesc?: string, businessUserName?: string, infoName?: string, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, updateBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }> };

export type AddDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  addDeliveryOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.AddDeliveryOrderInput>;
}>;


export type AddDeliveryOrderMutation = { addDeliveryOrder?: string };

export type UpdateDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  updateDeliveryOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateDeliveryOrderInput>;
}>;


export type UpdateDeliveryOrderMutation = { updateDeliveryOrder?: boolean };

export type SubmitDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  submitDeliveryOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.SubmitDeliveryOrderInput>;
}>;


export type SubmitDeliveryOrderMutation = { submitDeliveryOrder?: boolean };

export type CancelDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  cancelDeliveryOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelDeliveryOrderInput>;
}>;


export type CancelDeliveryOrderMutation = { cancelDeliveryOrder?: boolean };

export type CompleteDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  completeDeliveryOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CompleteDeliveryOrderInput>;
}>;


export type CompleteDeliveryOrderMutation = { completeDeliveryOrder?: boolean };

export type UpdateDeliveryItemMutationVariables = SchemaTypes.Exact<{
  updateDeliveryItemInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateDeliveryItemInput>;
}>;


export type UpdateDeliveryItemMutation = { updateDeliveryItem?: boolean };

export type SaveOrUpdateDeliveryInfoMutationVariables = SchemaTypes.Exact<{
  saveOrUpdateDeliveryInfoInput?: SchemaTypes.InputMaybe<SchemaTypes.SaveOrUpdateDeliveryInfoInput>;
}>;


export type SaveOrUpdateDeliveryInfoMutation = { saveOrUpdateDeliveryInfo?: boolean };

export type RemoveDeliveryInfoMutationVariables = SchemaTypes.Exact<{
  removeDeliveryInfoInput?: SchemaTypes.InputMaybe<SchemaTypes.RemoveDeliveryInfoInput>;
}>;


export type RemoveDeliveryInfoMutation = { removeDeliveryInfo?: boolean };

export type RollbackDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  rollbackDeliveryOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.RollbackDeliveryOrderInput>;
}>;


export type RollbackDeliveryOrderMutation = { rollbackDeliveryOrder?: boolean };


export const PageDeliveryOrderDocument = gql`
    query pageDeliveryOrder($deliveryOrderQueryInput: DeliveryOrderQueryInput, $page: Page) {
  pageDeliveryOrder(
    deliveryOrderQueryInput: $deliveryOrderQueryInput
    page: $page
  ) {
    records {
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
            categoryId
            categoryName
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
          returnTotalQuantity
          returnUnitQuantity
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
      deliveryOrderTypeDesc
      deliveryDate
      commodityTypeId
      commodityTypeDesc
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageDeliveryOrderQuery__
 *
 * To run a query within a React component, call `usePageDeliveryOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDeliveryOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageDeliveryOrderQuery({
 *   variables: {
 *      deliveryOrderQueryInput: // value for 'deliveryOrderQueryInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageDeliveryOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageDeliveryOrderQuery, PageDeliveryOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageDeliveryOrderQuery, PageDeliveryOrderQueryVariables>(PageDeliveryOrderDocument, options);
      }
export function usePageDeliveryOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageDeliveryOrderQuery, PageDeliveryOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageDeliveryOrderQuery, PageDeliveryOrderQueryVariables>(PageDeliveryOrderDocument, options);
        }
export type PageDeliveryOrderQueryHookResult = ReturnType<typeof usePageDeliveryOrderQuery>;
export type PageDeliveryOrderLazyQueryHookResult = ReturnType<typeof usePageDeliveryOrderLazyQuery>;
export type PageDeliveryOrderQueryResult = Apollo.QueryResult<PageDeliveryOrderQuery, PageDeliveryOrderQueryVariables>;
export const DeliveryOrderDetailDocument = gql`
    query deliveryOrderDetail($deliveryOrderDetailQueryInput: DeliveryOrderDetailQueryInput) {
  deliveryOrderDetail(
    deliveryOrderDetailQueryInput: $deliveryOrderDetailQueryInput
  ) {
    belongInfo {
      customerAddressInfo {
        customerId
        customerName
        customerType
        deliveryName
      }
    }
    belongOrg {
      orgId
      orgName
    }
    businessUserName
    carNum
    carType
    commodityTypeDesc
    commodityTypeId
    completeTime
    completeTimeUpdateSign
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    deliveryDate
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
      commodityDetail {
        actualTotalQuantity
        actualUnitQuantity
        bakOutTotalQuantity
        bakOutUnitQuantity
        bakTotalQuantity
        bakUnitQuantity
        deliverableTotalQuantity
        deliverableUnitQuantity
        deliveredTotalQuantity
        deliveredUnitQuantity
        deliveryOutItemId
        differenceReason
        itemId
        outTotalQuantity
        outUnitQuantity
        returnTotalQuantity
        returnUnitQuantity
        saleOrderItemId
        sku {
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
        unitQuantity
      }
      commodityTypeId
      commodityTypeName
      customerAddressInfo {
        customerId
        customerName
        customerType
        deliveryName
      }
      itemId
      orderId
      orderType
      outOrderId
      outOrderQuantity
      saleOrderCode
      saleOrderId
    }
    deliveryOrderTypeDesc
    deliveryType
    deliveryTypeDesc
    driverContact
    driverName
    jointVentureOrderItem {
      batchCode
      batchId
      deliveryOutItemId
      itemId
      orderId
      outTotalQuantity
      outUnitQuantity
      sku {
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
      stockQuantity {
        totalQuantity
        unitQuantity
      }
      totalQuantity
      unitQuantity
    }
    orderCode
    orderId
    orderStatus
    orderStatusDesc
    org {
      orgId
      orgName
    }
    outOrderId
    outOrderQuantity
    outOrderType
    outOrderTypeDesc
    photos
    saleOrderDate
    statusNote
    warehouse {
      warehouseId
      warehouseName
    }
  }
}
    `;

/**
 * __useDeliveryOrderDetailQuery__
 *
 * To run a query within a React component, call `useDeliveryOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryOrderDetailQuery({
 *   variables: {
 *      deliveryOrderDetailQueryInput: // value for 'deliveryOrderDetailQueryInput'
 *   },
 * });
 */
export function useDeliveryOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryOrderDetailQuery, DeliveryOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryOrderDetailQuery, DeliveryOrderDetailQueryVariables>(DeliveryOrderDetailDocument, options);
      }
export function useDeliveryOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryOrderDetailQuery, DeliveryOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryOrderDetailQuery, DeliveryOrderDetailQueryVariables>(DeliveryOrderDetailDocument, options);
        }
export type DeliveryOrderDetailQueryHookResult = ReturnType<typeof useDeliveryOrderDetailQuery>;
export type DeliveryOrderDetailLazyQueryHookResult = ReturnType<typeof useDeliveryOrderDetailLazyQuery>;
export type DeliveryOrderDetailQueryResult = Apollo.QueryResult<DeliveryOrderDetailQuery, DeliveryOrderDetailQueryVariables>;
export const DeliveryOrderStatusCountDocument = gql`
    query deliveryOrderStatusCount($deliveryOrderStatusCountInput: DeliveryOrderStatusCountInput) {
  deliveryOrderStatusCount(
    deliveryOrderStatusCountInput: $deliveryOrderStatusCountInput
  ) {
    unSubmit
    unOutStock
    unReceipt
  }
}
    `;

/**
 * __useDeliveryOrderStatusCountQuery__
 *
 * To run a query within a React component, call `useDeliveryOrderStatusCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryOrderStatusCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryOrderStatusCountQuery({
 *   variables: {
 *      deliveryOrderStatusCountInput: // value for 'deliveryOrderStatusCountInput'
 *   },
 * });
 */
export function useDeliveryOrderStatusCountQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryOrderStatusCountQuery, DeliveryOrderStatusCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryOrderStatusCountQuery, DeliveryOrderStatusCountQueryVariables>(DeliveryOrderStatusCountDocument, options);
      }
export function useDeliveryOrderStatusCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryOrderStatusCountQuery, DeliveryOrderStatusCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryOrderStatusCountQuery, DeliveryOrderStatusCountQueryVariables>(DeliveryOrderStatusCountDocument, options);
        }
export type DeliveryOrderStatusCountQueryHookResult = ReturnType<typeof useDeliveryOrderStatusCountQuery>;
export type DeliveryOrderStatusCountLazyQueryHookResult = ReturnType<typeof useDeliveryOrderStatusCountLazyQuery>;
export type DeliveryOrderStatusCountQueryResult = Apollo.QueryResult<DeliveryOrderStatusCountQuery, DeliveryOrderStatusCountQueryVariables>;
export const QuerySaleGoodsListDocument = gql`
    query querySaleGoodsList($saleGoodsListQueryInput: SaleGoodsListQueryInput) {
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
 * __useQuerySaleGoodsListQuery__
 *
 * To run a query within a React component, call `useQuerySaleGoodsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuerySaleGoodsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuerySaleGoodsListQuery({
 *   variables: {
 *      saleGoodsListQueryInput: // value for 'saleGoodsListQueryInput'
 *   },
 * });
 */
export function useQuerySaleGoodsListQuery(baseOptions?: Apollo.QueryHookOptions<QuerySaleGoodsListQuery, QuerySaleGoodsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuerySaleGoodsListQuery, QuerySaleGoodsListQueryVariables>(QuerySaleGoodsListDocument, options);
      }
export function useQuerySaleGoodsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuerySaleGoodsListQuery, QuerySaleGoodsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuerySaleGoodsListQuery, QuerySaleGoodsListQueryVariables>(QuerySaleGoodsListDocument, options);
        }
export type QuerySaleGoodsListQueryHookResult = ReturnType<typeof useQuerySaleGoodsListQuery>;
export type QuerySaleGoodsListLazyQueryHookResult = ReturnType<typeof useQuerySaleGoodsListLazyQuery>;
export type QuerySaleGoodsListQueryResult = Apollo.QueryResult<QuerySaleGoodsListQuery, QuerySaleGoodsListQueryVariables>;
export const ListDeliveryInfoDocument = gql`
    query listDeliveryInfo {
  listDeliveryInfo {
    createBy {
      userId
      userName
      phoneNum
    }
    createTime
    updateBy {
      userId
      userName
      phoneNum
    }
    updateTime
    id
    driverName
    driverContact
    carType
    carNum
    deliveryType
    deliveryTypeDesc
    businessUserName
    infoName
  }
}
    `;

/**
 * __useListDeliveryInfoQuery__
 *
 * To run a query within a React component, call `useListDeliveryInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDeliveryInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDeliveryInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useListDeliveryInfoQuery(baseOptions?: Apollo.QueryHookOptions<ListDeliveryInfoQuery, ListDeliveryInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDeliveryInfoQuery, ListDeliveryInfoQueryVariables>(ListDeliveryInfoDocument, options);
      }
export function useListDeliveryInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDeliveryInfoQuery, ListDeliveryInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDeliveryInfoQuery, ListDeliveryInfoQueryVariables>(ListDeliveryInfoDocument, options);
        }
export type ListDeliveryInfoQueryHookResult = ReturnType<typeof useListDeliveryInfoQuery>;
export type ListDeliveryInfoLazyQueryHookResult = ReturnType<typeof useListDeliveryInfoLazyQuery>;
export type ListDeliveryInfoQueryResult = Apollo.QueryResult<ListDeliveryInfoQuery, ListDeliveryInfoQueryVariables>;
export const AddDeliveryOrderDocument = gql`
    mutation addDeliveryOrder($addDeliveryOrderInput: AddDeliveryOrderInput) {
  addDeliveryOrder(addDeliveryOrderInput: $addDeliveryOrderInput)
}
    `;
export type AddDeliveryOrderMutationFn = Apollo.MutationFunction<AddDeliveryOrderMutation, AddDeliveryOrderMutationVariables>;

/**
 * __useAddDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useAddDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDeliveryOrderMutation, { data, loading, error }] = useAddDeliveryOrderMutation({
 *   variables: {
 *      addDeliveryOrderInput: // value for 'addDeliveryOrderInput'
 *   },
 * });
 */
export function useAddDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<AddDeliveryOrderMutation, AddDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDeliveryOrderMutation, AddDeliveryOrderMutationVariables>(AddDeliveryOrderDocument, options);
      }
export type AddDeliveryOrderMutationHookResult = ReturnType<typeof useAddDeliveryOrderMutation>;
export type AddDeliveryOrderMutationResult = Apollo.MutationResult<AddDeliveryOrderMutation>;
export type AddDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<AddDeliveryOrderMutation, AddDeliveryOrderMutationVariables>;
export const UpdateDeliveryOrderDocument = gql`
    mutation updateDeliveryOrder($updateDeliveryOrderInput: UpdateDeliveryOrderInput) {
  updateDeliveryOrder(updateDeliveryOrderInput: $updateDeliveryOrderInput)
}
    `;
export type UpdateDeliveryOrderMutationFn = Apollo.MutationFunction<UpdateDeliveryOrderMutation, UpdateDeliveryOrderMutationVariables>;

/**
 * __useUpdateDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useUpdateDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeliveryOrderMutation, { data, loading, error }] = useUpdateDeliveryOrderMutation({
 *   variables: {
 *      updateDeliveryOrderInput: // value for 'updateDeliveryOrderInput'
 *   },
 * });
 */
export function useUpdateDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeliveryOrderMutation, UpdateDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeliveryOrderMutation, UpdateDeliveryOrderMutationVariables>(UpdateDeliveryOrderDocument, options);
      }
export type UpdateDeliveryOrderMutationHookResult = ReturnType<typeof useUpdateDeliveryOrderMutation>;
export type UpdateDeliveryOrderMutationResult = Apollo.MutationResult<UpdateDeliveryOrderMutation>;
export type UpdateDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<UpdateDeliveryOrderMutation, UpdateDeliveryOrderMutationVariables>;
export const SubmitDeliveryOrderDocument = gql`
    mutation submitDeliveryOrder($submitDeliveryOrderInput: SubmitDeliveryOrderInput) {
  submitDeliveryOrder(submitDeliveryOrderInput: $submitDeliveryOrderInput)
}
    `;
export type SubmitDeliveryOrderMutationFn = Apollo.MutationFunction<SubmitDeliveryOrderMutation, SubmitDeliveryOrderMutationVariables>;

/**
 * __useSubmitDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useSubmitDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitDeliveryOrderMutation, { data, loading, error }] = useSubmitDeliveryOrderMutation({
 *   variables: {
 *      submitDeliveryOrderInput: // value for 'submitDeliveryOrderInput'
 *   },
 * });
 */
export function useSubmitDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitDeliveryOrderMutation, SubmitDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitDeliveryOrderMutation, SubmitDeliveryOrderMutationVariables>(SubmitDeliveryOrderDocument, options);
      }
export type SubmitDeliveryOrderMutationHookResult = ReturnType<typeof useSubmitDeliveryOrderMutation>;
export type SubmitDeliveryOrderMutationResult = Apollo.MutationResult<SubmitDeliveryOrderMutation>;
export type SubmitDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<SubmitDeliveryOrderMutation, SubmitDeliveryOrderMutationVariables>;
export const CancelDeliveryOrderDocument = gql`
    mutation cancelDeliveryOrder($cancelDeliveryOrderInput: CancelDeliveryOrderInput) {
  cancelDeliveryOrder(cancelDeliveryOrderInput: $cancelDeliveryOrderInput)
}
    `;
export type CancelDeliveryOrderMutationFn = Apollo.MutationFunction<CancelDeliveryOrderMutation, CancelDeliveryOrderMutationVariables>;

/**
 * __useCancelDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useCancelDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelDeliveryOrderMutation, { data, loading, error }] = useCancelDeliveryOrderMutation({
 *   variables: {
 *      cancelDeliveryOrderInput: // value for 'cancelDeliveryOrderInput'
 *   },
 * });
 */
export function useCancelDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelDeliveryOrderMutation, CancelDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelDeliveryOrderMutation, CancelDeliveryOrderMutationVariables>(CancelDeliveryOrderDocument, options);
      }
export type CancelDeliveryOrderMutationHookResult = ReturnType<typeof useCancelDeliveryOrderMutation>;
export type CancelDeliveryOrderMutationResult = Apollo.MutationResult<CancelDeliveryOrderMutation>;
export type CancelDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<CancelDeliveryOrderMutation, CancelDeliveryOrderMutationVariables>;
export const CompleteDeliveryOrderDocument = gql`
    mutation completeDeliveryOrder($completeDeliveryOrderInput: CompleteDeliveryOrderInput) {
  completeDeliveryOrder(completeDeliveryOrderInput: $completeDeliveryOrderInput)
}
    `;
export type CompleteDeliveryOrderMutationFn = Apollo.MutationFunction<CompleteDeliveryOrderMutation, CompleteDeliveryOrderMutationVariables>;

/**
 * __useCompleteDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useCompleteDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeDeliveryOrderMutation, { data, loading, error }] = useCompleteDeliveryOrderMutation({
 *   variables: {
 *      completeDeliveryOrderInput: // value for 'completeDeliveryOrderInput'
 *   },
 * });
 */
export function useCompleteDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<CompleteDeliveryOrderMutation, CompleteDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteDeliveryOrderMutation, CompleteDeliveryOrderMutationVariables>(CompleteDeliveryOrderDocument, options);
      }
export type CompleteDeliveryOrderMutationHookResult = ReturnType<typeof useCompleteDeliveryOrderMutation>;
export type CompleteDeliveryOrderMutationResult = Apollo.MutationResult<CompleteDeliveryOrderMutation>;
export type CompleteDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<CompleteDeliveryOrderMutation, CompleteDeliveryOrderMutationVariables>;
export const UpdateDeliveryItemDocument = gql`
    mutation updateDeliveryItem($updateDeliveryItemInput: UpdateDeliveryItemInput) {
  updateDeliveryItem(updateDeliveryItemInput: $updateDeliveryItemInput)
}
    `;
export type UpdateDeliveryItemMutationFn = Apollo.MutationFunction<UpdateDeliveryItemMutation, UpdateDeliveryItemMutationVariables>;

/**
 * __useUpdateDeliveryItemMutation__
 *
 * To run a mutation, you first call `useUpdateDeliveryItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeliveryItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeliveryItemMutation, { data, loading, error }] = useUpdateDeliveryItemMutation({
 *   variables: {
 *      updateDeliveryItemInput: // value for 'updateDeliveryItemInput'
 *   },
 * });
 */
export function useUpdateDeliveryItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeliveryItemMutation, UpdateDeliveryItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeliveryItemMutation, UpdateDeliveryItemMutationVariables>(UpdateDeliveryItemDocument, options);
      }
export type UpdateDeliveryItemMutationHookResult = ReturnType<typeof useUpdateDeliveryItemMutation>;
export type UpdateDeliveryItemMutationResult = Apollo.MutationResult<UpdateDeliveryItemMutation>;
export type UpdateDeliveryItemMutationOptions = Apollo.BaseMutationOptions<UpdateDeliveryItemMutation, UpdateDeliveryItemMutationVariables>;
export const SaveOrUpdateDeliveryInfoDocument = gql`
    mutation saveOrUpdateDeliveryInfo($saveOrUpdateDeliveryInfoInput: SaveOrUpdateDeliveryInfoInput) {
  saveOrUpdateDeliveryInfo(
    saveOrUpdateDeliveryInfoInput: $saveOrUpdateDeliveryInfoInput
  )
}
    `;
export type SaveOrUpdateDeliveryInfoMutationFn = Apollo.MutationFunction<SaveOrUpdateDeliveryInfoMutation, SaveOrUpdateDeliveryInfoMutationVariables>;

/**
 * __useSaveOrUpdateDeliveryInfoMutation__
 *
 * To run a mutation, you first call `useSaveOrUpdateDeliveryInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveOrUpdateDeliveryInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveOrUpdateDeliveryInfoMutation, { data, loading, error }] = useSaveOrUpdateDeliveryInfoMutation({
 *   variables: {
 *      saveOrUpdateDeliveryInfoInput: // value for 'saveOrUpdateDeliveryInfoInput'
 *   },
 * });
 */
export function useSaveOrUpdateDeliveryInfoMutation(baseOptions?: Apollo.MutationHookOptions<SaveOrUpdateDeliveryInfoMutation, SaveOrUpdateDeliveryInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveOrUpdateDeliveryInfoMutation, SaveOrUpdateDeliveryInfoMutationVariables>(SaveOrUpdateDeliveryInfoDocument, options);
      }
export type SaveOrUpdateDeliveryInfoMutationHookResult = ReturnType<typeof useSaveOrUpdateDeliveryInfoMutation>;
export type SaveOrUpdateDeliveryInfoMutationResult = Apollo.MutationResult<SaveOrUpdateDeliveryInfoMutation>;
export type SaveOrUpdateDeliveryInfoMutationOptions = Apollo.BaseMutationOptions<SaveOrUpdateDeliveryInfoMutation, SaveOrUpdateDeliveryInfoMutationVariables>;
export const RemoveDeliveryInfoDocument = gql`
    mutation removeDeliveryInfo($removeDeliveryInfoInput: RemoveDeliveryInfoInput) {
  removeDeliveryInfo(removeDeliveryInfoInput: $removeDeliveryInfoInput)
}
    `;
export type RemoveDeliveryInfoMutationFn = Apollo.MutationFunction<RemoveDeliveryInfoMutation, RemoveDeliveryInfoMutationVariables>;

/**
 * __useRemoveDeliveryInfoMutation__
 *
 * To run a mutation, you first call `useRemoveDeliveryInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDeliveryInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDeliveryInfoMutation, { data, loading, error }] = useRemoveDeliveryInfoMutation({
 *   variables: {
 *      removeDeliveryInfoInput: // value for 'removeDeliveryInfoInput'
 *   },
 * });
 */
export function useRemoveDeliveryInfoMutation(baseOptions?: Apollo.MutationHookOptions<RemoveDeliveryInfoMutation, RemoveDeliveryInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveDeliveryInfoMutation, RemoveDeliveryInfoMutationVariables>(RemoveDeliveryInfoDocument, options);
      }
export type RemoveDeliveryInfoMutationHookResult = ReturnType<typeof useRemoveDeliveryInfoMutation>;
export type RemoveDeliveryInfoMutationResult = Apollo.MutationResult<RemoveDeliveryInfoMutation>;
export type RemoveDeliveryInfoMutationOptions = Apollo.BaseMutationOptions<RemoveDeliveryInfoMutation, RemoveDeliveryInfoMutationVariables>;
export const RollbackDeliveryOrderDocument = gql`
    mutation rollbackDeliveryOrder($rollbackDeliveryOrderInput: RollbackDeliveryOrderInput) {
  rollbackDeliveryOrder(rollbackDeliveryOrderInput: $rollbackDeliveryOrderInput)
}
    `;
export type RollbackDeliveryOrderMutationFn = Apollo.MutationFunction<RollbackDeliveryOrderMutation, RollbackDeliveryOrderMutationVariables>;

/**
 * __useRollbackDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useRollbackDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRollbackDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rollbackDeliveryOrderMutation, { data, loading, error }] = useRollbackDeliveryOrderMutation({
 *   variables: {
 *      rollbackDeliveryOrderInput: // value for 'rollbackDeliveryOrderInput'
 *   },
 * });
 */
export function useRollbackDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<RollbackDeliveryOrderMutation, RollbackDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RollbackDeliveryOrderMutation, RollbackDeliveryOrderMutationVariables>(RollbackDeliveryOrderDocument, options);
      }
export type RollbackDeliveryOrderMutationHookResult = ReturnType<typeof useRollbackDeliveryOrderMutation>;
export type RollbackDeliveryOrderMutationResult = Apollo.MutationResult<RollbackDeliveryOrderMutation>;
export type RollbackDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<RollbackDeliveryOrderMutation, RollbackDeliveryOrderMutationVariables>;