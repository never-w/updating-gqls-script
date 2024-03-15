import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageSaleDeliveryOrderQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SaleDeliveryOrderQueryInput>;
  page: SchemaTypes.Page;
}>;


export type PageSaleDeliveryOrderQuery = { pageSaleDeliveryOrder?: { __typename?: 'PageSaleDeliveryOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'SaleDeliveryOrderDetailPayload', businessUserName?: string, carNum?: string, carType?: string, completeTime?: number, createTime?: number, deliveryDate?: number, deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum, deliveryGoodsSourceDesc?: string, deliveryMode?: SchemaTypes.DeliveryModeEnum, deliveryModeDesc?: string, deliveryRequirement?: SchemaTypes.DeliveryMethodEnum, deliveryRequirementDesc?: string, deliveryReturnOrderCount?: number, driverContact?: string, driverName?: string, orderCode?: string, orderId?: string, orderStatus?: SchemaTypes.SaleDeliveryOrderStatusEnum, orderStatusDesc?: string, saleOrderDate?: number, statusNote?: string, supplementalOrderCount?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, belongInfo?: Array<{ __typename?: 'BelongInfoList', customerBelongInfo?: { __typename?: 'BelongInfo', customerName?: string, customerId?: number, customerType?: number } }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, deliveryOrderItem?: Array<{ __typename?: 'SaleDeliveryOrderItemPayload', itemId?: string, orderId?: string, outOrderId?: string, saleDeliveryOrderType?: SchemaTypes.PitayaBusinessTypeEnum, sourceOrderCode?: string, sourceOrderId?: string, sourceOrderSaleDate?: number, commodityDetail?: Array<{ __typename?: 'SaleDeliveryOrderCommodityItemPayload', commodityTypeId?: number, commodityTypeName?: string, deliveryOutItemId?: string, differenceReason?: string, itemId?: string, saleOrderItemId?: string, actualQuantity?: number, deliverableQuantity?: number, deliveredQuantity?: number, differenceQuantity?: number, markList?: Array<SchemaTypes.AcquireMarkEnum>, outQuantity?: number, quantity?: number, returnQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number } }>, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }>, auditUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, fileInfoList?: Array<{ __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number }>, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, deliveryOrderFee?: { __typename?: 'SaleDeliveryOrderFeePayload', billMainId?: string, billTemplateId?: string, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } }> } };

export type DeliveryOrderStatsQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type DeliveryOrderStatsQuery = { deliveryOrderStats?: { __typename?: 'SaleDeliveryOrderStatusCountPayload', unSubmit?: number } };

export type DeliveryModeOptionQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type DeliveryModeOptionQuery = { deliveryModeOption?: Array<{ __typename?: 'StringOption', label?: string, value?: string }> };

export type ListSaleDeliveryGoodsQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListSaleDeliveryGoodsInput>;
}>;


export type ListSaleDeliveryGoodsQuery = { listSaleDeliveryGoods?: Array<{ __typename?: 'ListSaleDeliveryGoodsPayload', deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum, outOrderId?: string, outOrderStatus?: number, saleOrderCode?: string, saleOrderDate?: number, saleOrderId?: string, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, saleGoodsItemInfo?: Array<{ __typename?: 'SaleDeliveryGoodsItemInfoPayload', saleOrderItemId?: string, commodityTypeId?: number, commodityTypeName?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, deliverableQuantity?: number, deliveredQuantity?: number, price?: number, saleQuantity?: number, commodityDetail?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> }> };

export type ListSaleDeliveryGoodsBatchQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListSaleDeliveryGoodsBatchInput>;
}>;


export type ListSaleDeliveryGoodsBatchQuery = { listSaleDeliveryGoodsBatch?: Array<{ __typename?: 'ListSaleDeliveryGoodsBatchPayload', batchCode?: string, batchId?: string, commodityType?: number, commodityTypeName?: string, inStockTime?: number, price?: number, quantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> };

export type CreateSaleDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreateSaleDeliveryOrderInput;
}>;


export type CreateSaleDeliveryOrderMutation = { createSaleDeliveryOrder?: string };

export type SaleDeliveryOrderDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SaleDeliveryOrderDetailQueryInput>;
}>;


export type SaleDeliveryOrderDetailQuery = { saleDeliveryOrderDetail?: { __typename?: 'SaleDeliveryOrderDetailPayload', businessUserName?: string, carNum?: string, carType?: string, completeTime?: number, createTime?: number, deliveryDate?: number, deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum, deliveryGoodsSourceDesc?: string, deliveryMode?: SchemaTypes.DeliveryModeEnum, deliveryModeDesc?: string, deliveryRequirement?: SchemaTypes.DeliveryMethodEnum, deliveryRequirementDesc?: string, deliveryReturnOrderCount?: number, driverContact?: string, driverName?: string, orderCode?: string, orderId?: string, orderStatus?: SchemaTypes.SaleDeliveryOrderStatusEnum, orderStatusDesc?: string, saleOrderDate?: number, statusNote?: string, supplementalOrderCount?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, belongInfo?: Array<{ __typename?: 'BelongInfoList', customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }>, deliveryOrderFee?: { __typename?: 'SaleDeliveryOrderFeePayload', billMainId?: string, billTemplateId?: string, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, ruleCode?: string, ruleId?: string, showField?: number, paymentType?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, deliveryOrderItem?: Array<{ __typename?: 'SaleDeliveryOrderItemPayload', itemId?: string, orderId?: string, outOrderId?: string, saleDeliveryOrderType?: SchemaTypes.PitayaBusinessTypeEnum, sourceOrderCode?: string, sourceOrderId?: string, sourceOrderSaleDate?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, commodityDetail?: Array<{ __typename?: 'SaleDeliveryOrderCommodityItemPayload', commodityTypeId?: number, commodityTypeName?: string, deliveryOutItemId?: string, differenceReason?: string, itemId?: string, saleOrderItemId?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, actualQuantity?: number, deliverableQuantity?: number, deliveredQuantity?: number, differenceQuantity?: number, outQuantity?: number, quantity?: number, returnQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> }>, auditUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, fileInfoList?: Array<{ __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number }> } };

export type PageSupplementalOrderQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PageSupplementalOrderInput>;
  page: SchemaTypes.Page;
}>;


export type PageSupplementalOrderQuery = { pageSupplementalOrder?: { __typename?: 'PageSupplementalOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'SupplementalOrderPayload', createTime?: number, deliveryDate?: number, deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum, deliveryGoodsSourceDesc?: string, deliveryMode?: SchemaTypes.DeliveryModeEnum, deliveryModeDesc?: string, orderCode?: string, orderId?: string, orderStatus?: SchemaTypes.SupplementalOrderStatusEnum, orderStatusDesc?: string, saleDeliveryOrderCode?: string, saleDeliveryOrderId?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, deliveryOrderItem?: Array<{ __typename?: 'SaleDeliveryOrderItemPayload', itemId?: string, orderId?: string, outOrderId?: string, saleDeliveryOrderType?: SchemaTypes.PitayaBusinessTypeEnum, sourceOrderCode?: string, sourceOrderId?: string, sourceOrderSaleDate?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, commodityDetail?: Array<{ __typename?: 'SaleDeliveryOrderCommodityItemPayload', commodityTypeId?: number, commodityTypeName?: string, deliveryOutItemId?: string, differenceReason?: string, itemId?: string, saleOrderItemId?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, actualQuantity?: number, deliverableQuantity?: number, deliveredQuantity?: number, differenceQuantity?: number, outQuantity?: number, quantity?: number, returnQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> }> }> } };

export type PageSaleDeliveryReturnOrderQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PageSaleDeliveryReturnInput>;
  page: SchemaTypes.Page;
}>;


export type PageSaleDeliveryReturnOrderQuery = { pageSaleDeliveryReturnOrder?: { __typename?: 'PageSaleDeliveryReturnPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'SaleDeliveryReturnOrderPayload', createTime?: number, deliveryDate?: number, deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum, deliveryGoodsSourceDesc?: string, orderCode?: string, orderId?: string, orderStatus?: SchemaTypes.SaleDeliveryReturnOrderStatusEnum, orderStatusDesc?: string, saleDeliveryOrderCode?: string, saleDeliveryOrderId?: string, existDifferenceOrder?: boolean, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, deliveryOrderItem?: Array<{ __typename?: 'SaleDeliveryOrderItemPayload', itemId?: string, orderId?: string, outOrderId?: string, saleDeliveryOrderType?: SchemaTypes.PitayaBusinessTypeEnum, sourceOrderCode?: string, sourceOrderId?: string, sourceOrderSaleDate?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, commodityDetail?: Array<{ __typename?: 'SaleDeliveryOrderCommodityItemPayload', commodityTypeId?: number, commodityTypeName?: string, deliveryOutItemId?: string, differenceReason?: string, itemId?: string, saleOrderItemId?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, actualQuantity?: number, deliverableQuantity?: number, deliveredQuantity?: number, differenceQuantity?: number, outQuantity?: number, quantity?: number, returnQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> }> }> } };

export type SaleDeliveryReturnOrderDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SaleDeliveryReturnDetailInput>;
}>;


export type SaleDeliveryReturnOrderDetailQuery = { saleDeliveryReturnOrderDetail?: { __typename?: 'SaleDeliveryReturnOrderPayload', createTime?: number, deliveryDate?: number, deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum, deliveryGoodsSourceDesc?: string, orderCode?: string, orderId?: string, orderStatus?: SchemaTypes.SaleDeliveryReturnOrderStatusEnum, orderStatusDesc?: string, saleDeliveryOrderCode?: string, saleDeliveryOrderId?: string, existDifferenceOrder?: boolean, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, deliveryOrderItem?: Array<{ __typename?: 'SaleDeliveryOrderItemPayload', itemId?: string, orderId?: string, outOrderId?: string, saleDeliveryOrderType?: SchemaTypes.PitayaBusinessTypeEnum, sourceOrderCode?: string, sourceOrderId?: string, sourceOrderSaleDate?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, commodityDetail?: Array<{ __typename?: 'SaleDeliveryOrderCommodityItemPayload', commodityTypeId?: number, commodityTypeName?: string, deliveryOutItemId?: string, differenceReason?: string, itemId?: string, saleOrderItemId?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, actualQuantity?: number, deliverableQuantity?: number, deliveredQuantity?: number, differenceQuantity?: number, outQuantity?: number, quantity?: number, returnQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> }> } };

export type SupplementalOrderDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SupplementalOrderDetailInput>;
}>;


export type SupplementalOrderDetailQuery = { supplementalOrderDetail?: { __typename?: 'SupplementalOrderPayload', createTime?: number, deliveryDate?: number, deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum, deliveryGoodsSourceDesc?: string, deliveryMode?: SchemaTypes.DeliveryModeEnum, deliveryModeDesc?: string, orderCode?: string, orderId?: string, orderStatus?: SchemaTypes.SupplementalOrderStatusEnum, orderStatusDesc?: string, saleDeliveryOrderCode?: string, saleDeliveryOrderId?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, deliveryOrderItem?: Array<{ __typename?: 'SaleDeliveryOrderItemPayload', itemId?: string, orderId?: string, outOrderId?: string, saleDeliveryOrderType?: SchemaTypes.PitayaBusinessTypeEnum, sourceOrderCode?: string, sourceOrderId?: string, sourceOrderSaleDate?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, commodityDetail?: Array<{ __typename?: 'SaleDeliveryOrderCommodityItemPayload', commodityTypeId?: number, commodityTypeName?: string, deliveryOutItemId?: string, differenceReason?: string, itemId?: string, saleOrderItemId?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, actualQuantity?: number, deliverableQuantity?: number, deliveredQuantity?: number, differenceQuantity?: number, outQuantity?: number, quantity?: number, returnQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> }> } };

export type CancelSaleDeliverySupplementalOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CancelSupplementalOrderInput;
}>;


export type CancelSaleDeliverySupplementalOrderMutation = { cancelSaleDeliverySupplementalOrder?: boolean };

export type SubmitSaleDeliverySupplementalOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.SubmitSupplementalOrderInput;
}>;


export type SubmitSaleDeliverySupplementalOrderMutation = { submitSaleDeliverySupplementalOrder?: boolean };

export type VoidSaleDeliverySupplementalOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.VoidSupplementalOrderInput;
}>;


export type VoidSaleDeliverySupplementalOrderMutation = { voidSaleDeliverySupplementalOrder?: boolean };

export type ListDeliveryDifferenceReasonQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListDeliveryDifferenceReasonQuery = { listDeliveryDifferenceReason?: Array<{ __typename?: 'StringOption', label?: string, value?: string }> };

export type ListDeliveryReturnReasonQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListDeliveryReturnReasonQuery = { listDeliveryReturnReason?: Array<{ __typename?: 'StringOption', label?: string, value?: string }> };

export type CompleteSaleDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CompleteSaleDeliveryOrderInput;
}>;


export type CompleteSaleDeliveryOrderMutation = { completeSaleDeliveryOrder?: boolean };

export type CancelSaleDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CancelSaleDeliveryOrderInput;
}>;


export type CancelSaleDeliveryOrderMutation = { cancelSaleDeliveryOrder?: boolean };

export type SubmitSaleDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.SubmitSaleDeliveryOrderInput;
}>;


export type SubmitSaleDeliveryOrderMutation = { submitSaleDeliveryOrder?: boolean };

export type VoidDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.VoidSaleDeliveryOrderInput;
}>;


export type VoidDeliveryOrderMutation = { voidDeliveryOrder?: boolean };

export type WithdrawDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.WithdrawSaleDeliveryOrderInput;
}>;


export type WithdrawDeliveryOrderMutation = { withdrawDeliveryOrder?: boolean };

export type UpdateSaleDeliveryOrderDeliveryInfoMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateSaleDeliveryOrderDeliveryInfoInput;
}>;


export type UpdateSaleDeliveryOrderDeliveryInfoMutation = { updateSaleDeliveryOrderDeliveryInfo?: boolean };

export type UpdateSaleDeliveryOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateSaleDeliveryOrderInput;
}>;


export type UpdateSaleDeliveryOrderMutation = { updateSaleDeliveryOrder?: boolean };

export type ListSaleDeliverySupplementalGoodsQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListSaleDeliverySupplementalGoodsInput>;
}>;


export type ListSaleDeliverySupplementalGoodsQuery = { listSaleDeliverySupplementalGoods?: Array<{ __typename?: 'ListSaleDeliveryGoodsPayload', deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum, outOrderId?: string, outOrderStatus?: number, saleOrderCode?: string, saleOrderDate?: number, saleOrderId?: string, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, saleGoodsItemInfo?: Array<{ __typename?: 'SaleDeliveryGoodsItemInfoPayload', commodityTypeId?: number, commodityTypeName?: string, saleOrderItemId?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, deliverableQuantity?: number, deliveredQuantity?: number, price?: number, saleQuantity?: number, commodityDetail?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> }> };

export type CreateSaleDeliverySupplementalOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreateSaleDeliverySupplementalOrderInput;
}>;


export type CreateSaleDeliverySupplementalOrderMutation = { createSaleDeliverySupplementalOrder?: string };

export type ListDifferenceOrderQueryVariables = SchemaTypes.Exact<{
  businessId: SchemaTypes.Scalars['ID'];
}>;


export type ListDifferenceOrderQuery = { listDifferenceOrder?: Array<{ __typename?: 'DifferenceOrderPayLoad', businessCode?: string, businessId?: string, createTime?: number, deliveryTime?: number, differenceOrderType?: SchemaTypes.DifferenceOrderType, differenceOrderTypeDesc?: string, orderCode?: string, orderId?: string, receiveTime?: number, returnTime?: number, depletionTime?: number, differenceOrderStatus?: SchemaTypes.DifferenceOrderStatus, differenceOrderStatusDesc?: string, remark?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, commodityList?: Array<{ __typename?: 'DifferenceOrderItemPayLoad', businessItemId?: string, orderId?: string, orderItemId?: string, planCode?: string, planSaleTime?: number, reason?: string, saleOrderItemId?: string, quantity?: number, differenceOrderType?: SchemaTypes.DifferenceOrderType, markList?: Array<SchemaTypes.ApplyMarkEnum>, markNameList?: Array<string>, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, createTime?: number, commodityTypeId?: number, commodityTypeName?: string, quantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commodityType?: { __typename?: 'PitayaCommodityType', commodityTypeId?: number, commodityTypeName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, quantity?: number, sourceBatchCode?: string, sourceBatchId?: string, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, originDeliveryExtendInfo?: { __typename?: 'OriginDeliveryExtendInfo', deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum, deliveryGoodsSourceDesc?: string, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number } } }> }> };

export type ListDeliveryCarTypeQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListDeliveryCarTypeQuery = { listDeliveryCarType?: Array<{ __typename?: 'StringOption', label?: string, value?: string }> };


export const PageSaleDeliveryOrderDocument = gql`
    query pageSaleDeliveryOrder($input: SaleDeliveryOrderQueryInput, $page: Page!) {
  pageSaleDeliveryOrder(input: $input, page: $page) {
    pageCurrent
    pageSize
    totalRecords
    records {
      belongOrg {
        orgId
        orgName
      }
      belongInfo {
        customerBelongInfo {
          customerName
          customerId
          customerType
        }
      }
      createBy {
        phoneNum
        userId
        userName
      }
      businessUserName
      carNum
      carType
      completeTime
      createTime
      deliveryDate
      deliveryGoodsSource
      deliveryGoodsSourceDesc
      deliveryMode
      deliveryModeDesc
      deliveryOrderItem {
        commodityDetail {
          sku {
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
          commodityTypeId
          commodityTypeName
          deliveryOutItemId
          differenceReason
          itemId
          saleOrderItemId
          stockBatchInfo {
            customerBelongInfo {
              customerId
              customerName
              customerType
            }
            unit {
              unitId
              unitName
            }
            batchCode
            batchId
            createTime
            lockQuantity
            lockQuantityItem {
              unit {
                unitId
                unitName
              }
              quantity
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
          unit {
            unitId
            unitName
          }
          actualQuantity
          deliverableQuantity
          deliveredQuantity
          differenceQuantity
          markList
          outQuantity
          quantity
          quantityItem {
            unit {
              unitId
              unitName
            }
            quantity
          }
          returnQuantity
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
        itemId
        orderId
        outOrderId
        saleDeliveryOrderType
        sourceOrderCode
        sourceOrderId
        sourceOrderSaleDate
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
      }
      deliveryRequirement
      deliveryRequirementDesc
      deliveryReturnOrderCount
      driverContact
      driverName
      orderCode
      orderId
      orderStatus
      orderStatusDesc
      saleOrderDate
      statusNote
      supplementalOrderCount
      auditUser {
        phoneNum
        userId
        userName
      }
      fileInfoList {
        accessType
        contentType
        createTime
        fileUrl
        id
        name
        size
        tags
        updateTime
      }
      org {
        orgId
        orgName
      }
      deliveryOrderFee {
        billDetailsList {
          supplier {
            supplierId
            supplierName
          }
          billCostData
          billDetailId
          billMainId
          businessItemValue
          costAmount
          costId
          costName
          dictItemId
          note
          paymentType
          ruleCode
          ruleId
          showField
        }
        billMainId
        billTemplateId
      }
    }
  }
}
    `;

/**
 * __usePageSaleDeliveryOrderQuery__
 *
 * To run a query within a React component, call `usePageSaleDeliveryOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSaleDeliveryOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSaleDeliveryOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageSaleDeliveryOrderQuery(baseOptions: Apollo.QueryHookOptions<PageSaleDeliveryOrderQuery, PageSaleDeliveryOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageSaleDeliveryOrderQuery, PageSaleDeliveryOrderQueryVariables>(PageSaleDeliveryOrderDocument, options);
      }
export function usePageSaleDeliveryOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageSaleDeliveryOrderQuery, PageSaleDeliveryOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageSaleDeliveryOrderQuery, PageSaleDeliveryOrderQueryVariables>(PageSaleDeliveryOrderDocument, options);
        }
export type PageSaleDeliveryOrderQueryHookResult = ReturnType<typeof usePageSaleDeliveryOrderQuery>;
export type PageSaleDeliveryOrderLazyQueryHookResult = ReturnType<typeof usePageSaleDeliveryOrderLazyQuery>;
export type PageSaleDeliveryOrderQueryResult = Apollo.QueryResult<PageSaleDeliveryOrderQuery, PageSaleDeliveryOrderQueryVariables>;
export const DeliveryOrderStatsDocument = gql`
    query deliveryOrderStats {
  deliveryOrderStats {
    unSubmit
  }
}
    `;

/**
 * __useDeliveryOrderStatsQuery__
 *
 * To run a query within a React component, call `useDeliveryOrderStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryOrderStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryOrderStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliveryOrderStatsQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryOrderStatsQuery, DeliveryOrderStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryOrderStatsQuery, DeliveryOrderStatsQueryVariables>(DeliveryOrderStatsDocument, options);
      }
export function useDeliveryOrderStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryOrderStatsQuery, DeliveryOrderStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryOrderStatsQuery, DeliveryOrderStatsQueryVariables>(DeliveryOrderStatsDocument, options);
        }
export type DeliveryOrderStatsQueryHookResult = ReturnType<typeof useDeliveryOrderStatsQuery>;
export type DeliveryOrderStatsLazyQueryHookResult = ReturnType<typeof useDeliveryOrderStatsLazyQuery>;
export type DeliveryOrderStatsQueryResult = Apollo.QueryResult<DeliveryOrderStatsQuery, DeliveryOrderStatsQueryVariables>;
export const DeliveryModeOptionDocument = gql`
    query deliveryModeOption {
  deliveryModeOption {
    label
    value
  }
}
    `;

/**
 * __useDeliveryModeOptionQuery__
 *
 * To run a query within a React component, call `useDeliveryModeOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryModeOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryModeOptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliveryModeOptionQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryModeOptionQuery, DeliveryModeOptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryModeOptionQuery, DeliveryModeOptionQueryVariables>(DeliveryModeOptionDocument, options);
      }
export function useDeliveryModeOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryModeOptionQuery, DeliveryModeOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryModeOptionQuery, DeliveryModeOptionQueryVariables>(DeliveryModeOptionDocument, options);
        }
export type DeliveryModeOptionQueryHookResult = ReturnType<typeof useDeliveryModeOptionQuery>;
export type DeliveryModeOptionLazyQueryHookResult = ReturnType<typeof useDeliveryModeOptionLazyQuery>;
export type DeliveryModeOptionQueryResult = Apollo.QueryResult<DeliveryModeOptionQuery, DeliveryModeOptionQueryVariables>;
export const ListSaleDeliveryGoodsDocument = gql`
    query listSaleDeliveryGoods($input: ListSaleDeliveryGoodsInput) {
  listSaleDeliveryGoods(input: $input) {
    customerBelongInfo {
      customerId
      customerName
      customerType
    }
    deliveryGoodsSource
    outOrderId
    outOrderStatus
    saleGoodsItemInfo {
      commodityDetail {
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
      saleOrderItemId
      commodityTypeId
      commodityTypeName
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
      markList
      stockBatchInfo {
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
        unit {
          unitId
          unitName
        }
        batchCode
        batchId
        createTime
        lockQuantity
        lockQuantityItem {
          unit {
            unitId
            unitName
          }
          quantity
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
      unit {
        unitId
        unitName
      }
      deliverableQuantity
      deliveredQuantity
      price
      saleQuantity
      quantityItem {
        unit {
          unitId
          unitName
        }
        quantity
      }
    }
    saleOrderCode
    saleOrderDate
    saleOrderId
  }
}
    `;

/**
 * __useListSaleDeliveryGoodsQuery__
 *
 * To run a query within a React component, call `useListSaleDeliveryGoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleDeliveryGoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleDeliveryGoodsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListSaleDeliveryGoodsQuery(baseOptions?: Apollo.QueryHookOptions<ListSaleDeliveryGoodsQuery, ListSaleDeliveryGoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSaleDeliveryGoodsQuery, ListSaleDeliveryGoodsQueryVariables>(ListSaleDeliveryGoodsDocument, options);
      }
export function useListSaleDeliveryGoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSaleDeliveryGoodsQuery, ListSaleDeliveryGoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSaleDeliveryGoodsQuery, ListSaleDeliveryGoodsQueryVariables>(ListSaleDeliveryGoodsDocument, options);
        }
export type ListSaleDeliveryGoodsQueryHookResult = ReturnType<typeof useListSaleDeliveryGoodsQuery>;
export type ListSaleDeliveryGoodsLazyQueryHookResult = ReturnType<typeof useListSaleDeliveryGoodsLazyQuery>;
export type ListSaleDeliveryGoodsQueryResult = Apollo.QueryResult<ListSaleDeliveryGoodsQuery, ListSaleDeliveryGoodsQueryVariables>;
export const ListSaleDeliveryGoodsBatchDocument = gql`
    query listSaleDeliveryGoodsBatch($input: ListSaleDeliveryGoodsBatchInput) {
  listSaleDeliveryGoodsBatch(input: $input) {
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
    customerBelongInfo {
      customerId
      customerName
      customerType
    }
    batchCode
    batchId
    commodityType
    commodityTypeName
    inStockTime
    unit {
      unitId
      unitName
    }
    price
    quantity
    quantityItem {
      unit {
        unitId
        unitName
      }
      quantity
    }
  }
}
    `;

/**
 * __useListSaleDeliveryGoodsBatchQuery__
 *
 * To run a query within a React component, call `useListSaleDeliveryGoodsBatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleDeliveryGoodsBatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleDeliveryGoodsBatchQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListSaleDeliveryGoodsBatchQuery(baseOptions?: Apollo.QueryHookOptions<ListSaleDeliveryGoodsBatchQuery, ListSaleDeliveryGoodsBatchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSaleDeliveryGoodsBatchQuery, ListSaleDeliveryGoodsBatchQueryVariables>(ListSaleDeliveryGoodsBatchDocument, options);
      }
export function useListSaleDeliveryGoodsBatchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSaleDeliveryGoodsBatchQuery, ListSaleDeliveryGoodsBatchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSaleDeliveryGoodsBatchQuery, ListSaleDeliveryGoodsBatchQueryVariables>(ListSaleDeliveryGoodsBatchDocument, options);
        }
export type ListSaleDeliveryGoodsBatchQueryHookResult = ReturnType<typeof useListSaleDeliveryGoodsBatchQuery>;
export type ListSaleDeliveryGoodsBatchLazyQueryHookResult = ReturnType<typeof useListSaleDeliveryGoodsBatchLazyQuery>;
export type ListSaleDeliveryGoodsBatchQueryResult = Apollo.QueryResult<ListSaleDeliveryGoodsBatchQuery, ListSaleDeliveryGoodsBatchQueryVariables>;
export const CreateSaleDeliveryOrderDocument = gql`
    mutation createSaleDeliveryOrder($input: CreateSaleDeliveryOrderInput!) {
  createSaleDeliveryOrder(input: $input)
}
    `;
export type CreateSaleDeliveryOrderMutationFn = Apollo.MutationFunction<CreateSaleDeliveryOrderMutation, CreateSaleDeliveryOrderMutationVariables>;

/**
 * __useCreateSaleDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useCreateSaleDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSaleDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSaleDeliveryOrderMutation, { data, loading, error }] = useCreateSaleDeliveryOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSaleDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateSaleDeliveryOrderMutation, CreateSaleDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSaleDeliveryOrderMutation, CreateSaleDeliveryOrderMutationVariables>(CreateSaleDeliveryOrderDocument, options);
      }
export type CreateSaleDeliveryOrderMutationHookResult = ReturnType<typeof useCreateSaleDeliveryOrderMutation>;
export type CreateSaleDeliveryOrderMutationResult = Apollo.MutationResult<CreateSaleDeliveryOrderMutation>;
export type CreateSaleDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<CreateSaleDeliveryOrderMutation, CreateSaleDeliveryOrderMutationVariables>;
export const SaleDeliveryOrderDetailDocument = gql`
    query saleDeliveryOrderDetail($input: SaleDeliveryOrderDetailQueryInput) {
  saleDeliveryOrderDetail(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    createBy {
      phoneNum
      userId
      userName
    }
    org {
      orgId
      orgName
    }
    belongInfo {
      customerBelongInfo {
        customerId
        customerName
        customerType
      }
    }
    businessUserName
    carNum
    carType
    completeTime
    createTime
    deliveryDate
    deliveryGoodsSource
    deliveryGoodsSourceDesc
    deliveryMode
    deliveryModeDesc
    deliveryOrderFee {
      billDetailsList {
        supplier {
          supplierId
          supplierName
        }
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
        paymentType
      }
      billMainId
      billTemplateId
    }
    deliveryOrderItem {
      customerBelongInfo {
        customerId
        customerName
        customerType
      }
      commodityDetail {
        sku {
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
        commodityTypeId
        commodityTypeName
        deliveryOutItemId
        differenceReason
        itemId
        saleOrderItemId
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
        stockBatchInfo {
          customerBelongInfo {
            customerId
            customerName
            customerType
          }
          batchCode
          batchId
          createTime
          unit {
            unitId
            unitName
          }
          lockQuantity
          lockQuantityItem {
            unit {
              unitId
              unitName
            }
            quantity
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
        markList
        unit {
          unitId
          unitName
        }
        actualQuantity
        deliverableQuantity
        deliveredQuantity
        differenceQuantity
        outQuantity
        quantity
        quantityItem {
          unit {
            unitId
            unitName
          }
          quantity
        }
        returnQuantity
      }
      itemId
      orderId
      outOrderId
      saleDeliveryOrderType
      sourceOrderCode
      sourceOrderId
      sourceOrderSaleDate
    }
    deliveryRequirement
    deliveryRequirementDesc
    deliveryReturnOrderCount
    driverContact
    driverName
    orderCode
    orderId
    orderStatus
    orderStatusDesc
    saleOrderDate
    statusNote
    supplementalOrderCount
    auditUser {
      phoneNum
      userId
      userName
    }
    fileInfoList {
      accessType
      contentType
      createTime
      fileUrl
      id
      name
      size
      tags
      updateTime
    }
  }
}
    `;

/**
 * __useSaleDeliveryOrderDetailQuery__
 *
 * To run a query within a React component, call `useSaleDeliveryOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleDeliveryOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleDeliveryOrderDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSaleDeliveryOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<SaleDeliveryOrderDetailQuery, SaleDeliveryOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaleDeliveryOrderDetailQuery, SaleDeliveryOrderDetailQueryVariables>(SaleDeliveryOrderDetailDocument, options);
      }
export function useSaleDeliveryOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaleDeliveryOrderDetailQuery, SaleDeliveryOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaleDeliveryOrderDetailQuery, SaleDeliveryOrderDetailQueryVariables>(SaleDeliveryOrderDetailDocument, options);
        }
export type SaleDeliveryOrderDetailQueryHookResult = ReturnType<typeof useSaleDeliveryOrderDetailQuery>;
export type SaleDeliveryOrderDetailLazyQueryHookResult = ReturnType<typeof useSaleDeliveryOrderDetailLazyQuery>;
export type SaleDeliveryOrderDetailQueryResult = Apollo.QueryResult<SaleDeliveryOrderDetailQuery, SaleDeliveryOrderDetailQueryVariables>;
export const PageSupplementalOrderDocument = gql`
    query pageSupplementalOrder($input: PageSupplementalOrderInput, $page: Page!) {
  pageSupplementalOrder(input: $input, page: $page) {
    pageCurrent
    pageSize
    totalRecords
    records {
      belongOrg {
        orgId
        orgName
      }
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      deliveryDate
      deliveryGoodsSource
      deliveryGoodsSourceDesc
      deliveryMode
      deliveryModeDesc
      deliveryOrderItem {
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
        commodityDetail {
          sku {
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
          commodityTypeId
          commodityTypeName
          deliveryOutItemId
          differenceReason
          itemId
          saleOrderItemId
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
          stockBatchInfo {
            customerBelongInfo {
              customerId
              customerName
              customerType
            }
            batchCode
            batchId
            createTime
            unit {
              unitId
              unitName
            }
            lockQuantity
            lockQuantityItem {
              unit {
                unitId
                unitName
              }
              quantity
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
          markList
          unit {
            unitId
            unitName
          }
          actualQuantity
          deliverableQuantity
          deliveredQuantity
          differenceQuantity
          outQuantity
          quantity
          quantityItem {
            unit {
              unitId
              unitName
            }
            quantity
          }
          returnQuantity
        }
        itemId
        orderId
        outOrderId
        saleDeliveryOrderType
        sourceOrderCode
        sourceOrderId
        sourceOrderSaleDate
      }
      orderCode
      orderId
      orderStatus
      orderStatusDesc
      saleDeliveryOrderCode
      saleDeliveryOrderId
    }
  }
}
    `;

/**
 * __usePageSupplementalOrderQuery__
 *
 * To run a query within a React component, call `usePageSupplementalOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSupplementalOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSupplementalOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageSupplementalOrderQuery(baseOptions: Apollo.QueryHookOptions<PageSupplementalOrderQuery, PageSupplementalOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageSupplementalOrderQuery, PageSupplementalOrderQueryVariables>(PageSupplementalOrderDocument, options);
      }
export function usePageSupplementalOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageSupplementalOrderQuery, PageSupplementalOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageSupplementalOrderQuery, PageSupplementalOrderQueryVariables>(PageSupplementalOrderDocument, options);
        }
export type PageSupplementalOrderQueryHookResult = ReturnType<typeof usePageSupplementalOrderQuery>;
export type PageSupplementalOrderLazyQueryHookResult = ReturnType<typeof usePageSupplementalOrderLazyQuery>;
export type PageSupplementalOrderQueryResult = Apollo.QueryResult<PageSupplementalOrderQuery, PageSupplementalOrderQueryVariables>;
export const PageSaleDeliveryReturnOrderDocument = gql`
    query pageSaleDeliveryReturnOrder($input: PageSaleDeliveryReturnInput, $page: Page!) {
  pageSaleDeliveryReturnOrder(input: $input, page: $page) {
    pageCurrent
    pageSize
    totalRecords
    records {
      belongOrg {
        orgId
        orgName
      }
      createBy {
        phoneNum
        userId
        userName
      }
      customerBelongInfo {
        customerId
        customerName
        customerType
      }
      createTime
      deliveryDate
      deliveryGoodsSource
      deliveryGoodsSourceDesc
      deliveryOrderItem {
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
        commodityDetail {
          sku {
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
          commodityTypeId
          commodityTypeName
          deliveryOutItemId
          differenceReason
          itemId
          saleOrderItemId
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
          markList
          stockBatchInfo {
            customerBelongInfo {
              customerId
              customerName
              customerType
            }
            unit {
              unitId
              unitName
            }
            batchCode
            batchId
            createTime
            lockQuantity
            lockQuantityItem {
              unit {
                unitId
                unitName
              }
              quantity
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
          unit {
            unitId
            unitName
          }
          actualQuantity
          deliverableQuantity
          deliveredQuantity
          differenceQuantity
          outQuantity
          quantity
          quantityItem {
            unit {
              unitId
              unitName
            }
            quantity
          }
          returnQuantity
        }
        itemId
        orderId
        outOrderId
        saleDeliveryOrderType
        sourceOrderCode
        sourceOrderId
        sourceOrderSaleDate
      }
      orderCode
      orderId
      orderStatus
      orderStatusDesc
      saleDeliveryOrderCode
      saleDeliveryOrderId
      existDifferenceOrder
    }
  }
}
    `;

/**
 * __usePageSaleDeliveryReturnOrderQuery__
 *
 * To run a query within a React component, call `usePageSaleDeliveryReturnOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSaleDeliveryReturnOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSaleDeliveryReturnOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageSaleDeliveryReturnOrderQuery(baseOptions: Apollo.QueryHookOptions<PageSaleDeliveryReturnOrderQuery, PageSaleDeliveryReturnOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageSaleDeliveryReturnOrderQuery, PageSaleDeliveryReturnOrderQueryVariables>(PageSaleDeliveryReturnOrderDocument, options);
      }
export function usePageSaleDeliveryReturnOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageSaleDeliveryReturnOrderQuery, PageSaleDeliveryReturnOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageSaleDeliveryReturnOrderQuery, PageSaleDeliveryReturnOrderQueryVariables>(PageSaleDeliveryReturnOrderDocument, options);
        }
export type PageSaleDeliveryReturnOrderQueryHookResult = ReturnType<typeof usePageSaleDeliveryReturnOrderQuery>;
export type PageSaleDeliveryReturnOrderLazyQueryHookResult = ReturnType<typeof usePageSaleDeliveryReturnOrderLazyQuery>;
export type PageSaleDeliveryReturnOrderQueryResult = Apollo.QueryResult<PageSaleDeliveryReturnOrderQuery, PageSaleDeliveryReturnOrderQueryVariables>;
export const SaleDeliveryReturnOrderDetailDocument = gql`
    query saleDeliveryReturnOrderDetail($input: SaleDeliveryReturnDetailInput) {
  saleDeliveryReturnOrderDetail(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    createBy {
      phoneNum
      userId
      userName
    }
    customerBelongInfo {
      customerId
      customerName
      customerType
    }
    createTime
    deliveryDate
    deliveryGoodsSource
    deliveryGoodsSourceDesc
    deliveryOrderItem {
      customerBelongInfo {
        customerId
        customerName
        customerType
      }
      commodityDetail {
        sku {
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
        commodityTypeId
        commodityTypeName
        deliveryOutItemId
        differenceReason
        itemId
        saleOrderItemId
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
        stockBatchInfo {
          customerBelongInfo {
            customerId
            customerName
            customerType
          }
          batchCode
          batchId
          createTime
          unit {
            unitId
            unitName
          }
          lockQuantity
          lockQuantityItem {
            unit {
              unitId
              unitName
            }
            quantity
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
        markList
        unit {
          unitId
          unitName
        }
        actualQuantity
        deliverableQuantity
        deliveredQuantity
        differenceQuantity
        outQuantity
        quantity
        quantityItem {
          unit {
            unitId
            unitName
          }
          quantity
        }
        returnQuantity
      }
      itemId
      orderId
      outOrderId
      saleDeliveryOrderType
      sourceOrderCode
      sourceOrderId
      sourceOrderSaleDate
    }
    orderCode
    orderId
    orderStatus
    orderStatusDesc
    saleDeliveryOrderCode
    saleDeliveryOrderId
    existDifferenceOrder
  }
}
    `;

/**
 * __useSaleDeliveryReturnOrderDetailQuery__
 *
 * To run a query within a React component, call `useSaleDeliveryReturnOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleDeliveryReturnOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleDeliveryReturnOrderDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSaleDeliveryReturnOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<SaleDeliveryReturnOrderDetailQuery, SaleDeliveryReturnOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaleDeliveryReturnOrderDetailQuery, SaleDeliveryReturnOrderDetailQueryVariables>(SaleDeliveryReturnOrderDetailDocument, options);
      }
export function useSaleDeliveryReturnOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaleDeliveryReturnOrderDetailQuery, SaleDeliveryReturnOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaleDeliveryReturnOrderDetailQuery, SaleDeliveryReturnOrderDetailQueryVariables>(SaleDeliveryReturnOrderDetailDocument, options);
        }
export type SaleDeliveryReturnOrderDetailQueryHookResult = ReturnType<typeof useSaleDeliveryReturnOrderDetailQuery>;
export type SaleDeliveryReturnOrderDetailLazyQueryHookResult = ReturnType<typeof useSaleDeliveryReturnOrderDetailLazyQuery>;
export type SaleDeliveryReturnOrderDetailQueryResult = Apollo.QueryResult<SaleDeliveryReturnOrderDetailQuery, SaleDeliveryReturnOrderDetailQueryVariables>;
export const SupplementalOrderDetailDocument = gql`
    query supplementalOrderDetail($input: SupplementalOrderDetailInput) {
  supplementalOrderDetail(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    deliveryDate
    deliveryGoodsSource
    deliveryGoodsSourceDesc
    deliveryMode
    deliveryModeDesc
    deliveryOrderItem {
      customerBelongInfo {
        customerId
        customerName
        customerType
      }
      commodityDetail {
        sku {
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
        commodityTypeId
        commodityTypeName
        deliveryOutItemId
        differenceReason
        itemId
        saleOrderItemId
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
        markList
        stockBatchInfo {
          customerBelongInfo {
            customerId
            customerName
            customerType
          }
          unit {
            unitId
            unitName
          }
          batchCode
          batchId
          createTime
          lockQuantity
          lockQuantityItem {
            unit {
              unitId
              unitName
            }
            quantity
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
        unit {
          unitId
          unitName
        }
        actualQuantity
        deliverableQuantity
        deliveredQuantity
        differenceQuantity
        outQuantity
        quantity
        quantityItem {
          unit {
            unitId
            unitName
          }
          quantity
        }
        returnQuantity
      }
      itemId
      orderId
      outOrderId
      saleDeliveryOrderType
      sourceOrderCode
      sourceOrderId
      sourceOrderSaleDate
    }
    orderCode
    orderId
    orderStatus
    orderStatusDesc
    saleDeliveryOrderCode
    saleDeliveryOrderId
  }
}
    `;

/**
 * __useSupplementalOrderDetailQuery__
 *
 * To run a query within a React component, call `useSupplementalOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupplementalOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupplementalOrderDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSupplementalOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<SupplementalOrderDetailQuery, SupplementalOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SupplementalOrderDetailQuery, SupplementalOrderDetailQueryVariables>(SupplementalOrderDetailDocument, options);
      }
export function useSupplementalOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SupplementalOrderDetailQuery, SupplementalOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SupplementalOrderDetailQuery, SupplementalOrderDetailQueryVariables>(SupplementalOrderDetailDocument, options);
        }
export type SupplementalOrderDetailQueryHookResult = ReturnType<typeof useSupplementalOrderDetailQuery>;
export type SupplementalOrderDetailLazyQueryHookResult = ReturnType<typeof useSupplementalOrderDetailLazyQuery>;
export type SupplementalOrderDetailQueryResult = Apollo.QueryResult<SupplementalOrderDetailQuery, SupplementalOrderDetailQueryVariables>;
export const CancelSaleDeliverySupplementalOrderDocument = gql`
    mutation cancelSaleDeliverySupplementalOrder($input: CancelSupplementalOrderInput!) {
  cancelSaleDeliverySupplementalOrder(input: $input)
}
    `;
export type CancelSaleDeliverySupplementalOrderMutationFn = Apollo.MutationFunction<CancelSaleDeliverySupplementalOrderMutation, CancelSaleDeliverySupplementalOrderMutationVariables>;

/**
 * __useCancelSaleDeliverySupplementalOrderMutation__
 *
 * To run a mutation, you first call `useCancelSaleDeliverySupplementalOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelSaleDeliverySupplementalOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelSaleDeliverySupplementalOrderMutation, { data, loading, error }] = useCancelSaleDeliverySupplementalOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelSaleDeliverySupplementalOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelSaleDeliverySupplementalOrderMutation, CancelSaleDeliverySupplementalOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelSaleDeliverySupplementalOrderMutation, CancelSaleDeliverySupplementalOrderMutationVariables>(CancelSaleDeliverySupplementalOrderDocument, options);
      }
export type CancelSaleDeliverySupplementalOrderMutationHookResult = ReturnType<typeof useCancelSaleDeliverySupplementalOrderMutation>;
export type CancelSaleDeliverySupplementalOrderMutationResult = Apollo.MutationResult<CancelSaleDeliverySupplementalOrderMutation>;
export type CancelSaleDeliverySupplementalOrderMutationOptions = Apollo.BaseMutationOptions<CancelSaleDeliverySupplementalOrderMutation, CancelSaleDeliverySupplementalOrderMutationVariables>;
export const SubmitSaleDeliverySupplementalOrderDocument = gql`
    mutation submitSaleDeliverySupplementalOrder($input: SubmitSupplementalOrderInput!) {
  submitSaleDeliverySupplementalOrder(input: $input)
}
    `;
export type SubmitSaleDeliverySupplementalOrderMutationFn = Apollo.MutationFunction<SubmitSaleDeliverySupplementalOrderMutation, SubmitSaleDeliverySupplementalOrderMutationVariables>;

/**
 * __useSubmitSaleDeliverySupplementalOrderMutation__
 *
 * To run a mutation, you first call `useSubmitSaleDeliverySupplementalOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitSaleDeliverySupplementalOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitSaleDeliverySupplementalOrderMutation, { data, loading, error }] = useSubmitSaleDeliverySupplementalOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitSaleDeliverySupplementalOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitSaleDeliverySupplementalOrderMutation, SubmitSaleDeliverySupplementalOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitSaleDeliverySupplementalOrderMutation, SubmitSaleDeliverySupplementalOrderMutationVariables>(SubmitSaleDeliverySupplementalOrderDocument, options);
      }
export type SubmitSaleDeliverySupplementalOrderMutationHookResult = ReturnType<typeof useSubmitSaleDeliverySupplementalOrderMutation>;
export type SubmitSaleDeliverySupplementalOrderMutationResult = Apollo.MutationResult<SubmitSaleDeliverySupplementalOrderMutation>;
export type SubmitSaleDeliverySupplementalOrderMutationOptions = Apollo.BaseMutationOptions<SubmitSaleDeliverySupplementalOrderMutation, SubmitSaleDeliverySupplementalOrderMutationVariables>;
export const VoidSaleDeliverySupplementalOrderDocument = gql`
    mutation voidSaleDeliverySupplementalOrder($input: VoidSupplementalOrderInput!) {
  voidSaleDeliverySupplementalOrder(input: $input)
}
    `;
export type VoidSaleDeliverySupplementalOrderMutationFn = Apollo.MutationFunction<VoidSaleDeliverySupplementalOrderMutation, VoidSaleDeliverySupplementalOrderMutationVariables>;

/**
 * __useVoidSaleDeliverySupplementalOrderMutation__
 *
 * To run a mutation, you first call `useVoidSaleDeliverySupplementalOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoidSaleDeliverySupplementalOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voidSaleDeliverySupplementalOrderMutation, { data, loading, error }] = useVoidSaleDeliverySupplementalOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVoidSaleDeliverySupplementalOrderMutation(baseOptions?: Apollo.MutationHookOptions<VoidSaleDeliverySupplementalOrderMutation, VoidSaleDeliverySupplementalOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoidSaleDeliverySupplementalOrderMutation, VoidSaleDeliverySupplementalOrderMutationVariables>(VoidSaleDeliverySupplementalOrderDocument, options);
      }
export type VoidSaleDeliverySupplementalOrderMutationHookResult = ReturnType<typeof useVoidSaleDeliverySupplementalOrderMutation>;
export type VoidSaleDeliverySupplementalOrderMutationResult = Apollo.MutationResult<VoidSaleDeliverySupplementalOrderMutation>;
export type VoidSaleDeliverySupplementalOrderMutationOptions = Apollo.BaseMutationOptions<VoidSaleDeliverySupplementalOrderMutation, VoidSaleDeliverySupplementalOrderMutationVariables>;
export const ListDeliveryDifferenceReasonDocument = gql`
    query listDeliveryDifferenceReason {
  listDeliveryDifferenceReason {
    label
    value
  }
}
    `;

/**
 * __useListDeliveryDifferenceReasonQuery__
 *
 * To run a query within a React component, call `useListDeliveryDifferenceReasonQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDeliveryDifferenceReasonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDeliveryDifferenceReasonQuery({
 *   variables: {
 *   },
 * });
 */
export function useListDeliveryDifferenceReasonQuery(baseOptions?: Apollo.QueryHookOptions<ListDeliveryDifferenceReasonQuery, ListDeliveryDifferenceReasonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDeliveryDifferenceReasonQuery, ListDeliveryDifferenceReasonQueryVariables>(ListDeliveryDifferenceReasonDocument, options);
      }
export function useListDeliveryDifferenceReasonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDeliveryDifferenceReasonQuery, ListDeliveryDifferenceReasonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDeliveryDifferenceReasonQuery, ListDeliveryDifferenceReasonQueryVariables>(ListDeliveryDifferenceReasonDocument, options);
        }
export type ListDeliveryDifferenceReasonQueryHookResult = ReturnType<typeof useListDeliveryDifferenceReasonQuery>;
export type ListDeliveryDifferenceReasonLazyQueryHookResult = ReturnType<typeof useListDeliveryDifferenceReasonLazyQuery>;
export type ListDeliveryDifferenceReasonQueryResult = Apollo.QueryResult<ListDeliveryDifferenceReasonQuery, ListDeliveryDifferenceReasonQueryVariables>;
export const ListDeliveryReturnReasonDocument = gql`
    query listDeliveryReturnReason {
  listDeliveryReturnReason {
    label
    value
  }
}
    `;

/**
 * __useListDeliveryReturnReasonQuery__
 *
 * To run a query within a React component, call `useListDeliveryReturnReasonQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDeliveryReturnReasonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDeliveryReturnReasonQuery({
 *   variables: {
 *   },
 * });
 */
export function useListDeliveryReturnReasonQuery(baseOptions?: Apollo.QueryHookOptions<ListDeliveryReturnReasonQuery, ListDeliveryReturnReasonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDeliveryReturnReasonQuery, ListDeliveryReturnReasonQueryVariables>(ListDeliveryReturnReasonDocument, options);
      }
export function useListDeliveryReturnReasonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDeliveryReturnReasonQuery, ListDeliveryReturnReasonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDeliveryReturnReasonQuery, ListDeliveryReturnReasonQueryVariables>(ListDeliveryReturnReasonDocument, options);
        }
export type ListDeliveryReturnReasonQueryHookResult = ReturnType<typeof useListDeliveryReturnReasonQuery>;
export type ListDeliveryReturnReasonLazyQueryHookResult = ReturnType<typeof useListDeliveryReturnReasonLazyQuery>;
export type ListDeliveryReturnReasonQueryResult = Apollo.QueryResult<ListDeliveryReturnReasonQuery, ListDeliveryReturnReasonQueryVariables>;
export const CompleteSaleDeliveryOrderDocument = gql`
    mutation completeSaleDeliveryOrder($input: CompleteSaleDeliveryOrderInput!) {
  completeSaleDeliveryOrder(input: $input)
}
    `;
export type CompleteSaleDeliveryOrderMutationFn = Apollo.MutationFunction<CompleteSaleDeliveryOrderMutation, CompleteSaleDeliveryOrderMutationVariables>;

/**
 * __useCompleteSaleDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useCompleteSaleDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteSaleDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeSaleDeliveryOrderMutation, { data, loading, error }] = useCompleteSaleDeliveryOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCompleteSaleDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<CompleteSaleDeliveryOrderMutation, CompleteSaleDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteSaleDeliveryOrderMutation, CompleteSaleDeliveryOrderMutationVariables>(CompleteSaleDeliveryOrderDocument, options);
      }
export type CompleteSaleDeliveryOrderMutationHookResult = ReturnType<typeof useCompleteSaleDeliveryOrderMutation>;
export type CompleteSaleDeliveryOrderMutationResult = Apollo.MutationResult<CompleteSaleDeliveryOrderMutation>;
export type CompleteSaleDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<CompleteSaleDeliveryOrderMutation, CompleteSaleDeliveryOrderMutationVariables>;
export const CancelSaleDeliveryOrderDocument = gql`
    mutation cancelSaleDeliveryOrder($input: CancelSaleDeliveryOrderInput!) {
  cancelSaleDeliveryOrder(input: $input)
}
    `;
export type CancelSaleDeliveryOrderMutationFn = Apollo.MutationFunction<CancelSaleDeliveryOrderMutation, CancelSaleDeliveryOrderMutationVariables>;

/**
 * __useCancelSaleDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useCancelSaleDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelSaleDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelSaleDeliveryOrderMutation, { data, loading, error }] = useCancelSaleDeliveryOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelSaleDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelSaleDeliveryOrderMutation, CancelSaleDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelSaleDeliveryOrderMutation, CancelSaleDeliveryOrderMutationVariables>(CancelSaleDeliveryOrderDocument, options);
      }
export type CancelSaleDeliveryOrderMutationHookResult = ReturnType<typeof useCancelSaleDeliveryOrderMutation>;
export type CancelSaleDeliveryOrderMutationResult = Apollo.MutationResult<CancelSaleDeliveryOrderMutation>;
export type CancelSaleDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<CancelSaleDeliveryOrderMutation, CancelSaleDeliveryOrderMutationVariables>;
export const SubmitSaleDeliveryOrderDocument = gql`
    mutation submitSaleDeliveryOrder($input: SubmitSaleDeliveryOrderInput!) {
  submitSaleDeliveryOrder(input: $input)
}
    `;
export type SubmitSaleDeliveryOrderMutationFn = Apollo.MutationFunction<SubmitSaleDeliveryOrderMutation, SubmitSaleDeliveryOrderMutationVariables>;

/**
 * __useSubmitSaleDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useSubmitSaleDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitSaleDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitSaleDeliveryOrderMutation, { data, loading, error }] = useSubmitSaleDeliveryOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitSaleDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitSaleDeliveryOrderMutation, SubmitSaleDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitSaleDeliveryOrderMutation, SubmitSaleDeliveryOrderMutationVariables>(SubmitSaleDeliveryOrderDocument, options);
      }
export type SubmitSaleDeliveryOrderMutationHookResult = ReturnType<typeof useSubmitSaleDeliveryOrderMutation>;
export type SubmitSaleDeliveryOrderMutationResult = Apollo.MutationResult<SubmitSaleDeliveryOrderMutation>;
export type SubmitSaleDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<SubmitSaleDeliveryOrderMutation, SubmitSaleDeliveryOrderMutationVariables>;
export const VoidDeliveryOrderDocument = gql`
    mutation voidDeliveryOrder($input: VoidSaleDeliveryOrderInput!) {
  voidDeliveryOrder(input: $input)
}
    `;
export type VoidDeliveryOrderMutationFn = Apollo.MutationFunction<VoidDeliveryOrderMutation, VoidDeliveryOrderMutationVariables>;

/**
 * __useVoidDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useVoidDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoidDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voidDeliveryOrderMutation, { data, loading, error }] = useVoidDeliveryOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVoidDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<VoidDeliveryOrderMutation, VoidDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoidDeliveryOrderMutation, VoidDeliveryOrderMutationVariables>(VoidDeliveryOrderDocument, options);
      }
export type VoidDeliveryOrderMutationHookResult = ReturnType<typeof useVoidDeliveryOrderMutation>;
export type VoidDeliveryOrderMutationResult = Apollo.MutationResult<VoidDeliveryOrderMutation>;
export type VoidDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<VoidDeliveryOrderMutation, VoidDeliveryOrderMutationVariables>;
export const WithdrawDeliveryOrderDocument = gql`
    mutation withdrawDeliveryOrder($input: WithdrawSaleDeliveryOrderInput!) {
  withdrawDeliveryOrder(input: $input)
}
    `;
export type WithdrawDeliveryOrderMutationFn = Apollo.MutationFunction<WithdrawDeliveryOrderMutation, WithdrawDeliveryOrderMutationVariables>;

/**
 * __useWithdrawDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useWithdrawDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWithdrawDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [withdrawDeliveryOrderMutation, { data, loading, error }] = useWithdrawDeliveryOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWithdrawDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<WithdrawDeliveryOrderMutation, WithdrawDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WithdrawDeliveryOrderMutation, WithdrawDeliveryOrderMutationVariables>(WithdrawDeliveryOrderDocument, options);
      }
export type WithdrawDeliveryOrderMutationHookResult = ReturnType<typeof useWithdrawDeliveryOrderMutation>;
export type WithdrawDeliveryOrderMutationResult = Apollo.MutationResult<WithdrawDeliveryOrderMutation>;
export type WithdrawDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<WithdrawDeliveryOrderMutation, WithdrawDeliveryOrderMutationVariables>;
export const UpdateSaleDeliveryOrderDeliveryInfoDocument = gql`
    mutation updateSaleDeliveryOrderDeliveryInfo($input: UpdateSaleDeliveryOrderDeliveryInfoInput!) {
  updateSaleDeliveryOrderDeliveryInfo(input: $input)
}
    `;
export type UpdateSaleDeliveryOrderDeliveryInfoMutationFn = Apollo.MutationFunction<UpdateSaleDeliveryOrderDeliveryInfoMutation, UpdateSaleDeliveryOrderDeliveryInfoMutationVariables>;

/**
 * __useUpdateSaleDeliveryOrderDeliveryInfoMutation__
 *
 * To run a mutation, you first call `useUpdateSaleDeliveryOrderDeliveryInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSaleDeliveryOrderDeliveryInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSaleDeliveryOrderDeliveryInfoMutation, { data, loading, error }] = useUpdateSaleDeliveryOrderDeliveryInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSaleDeliveryOrderDeliveryInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSaleDeliveryOrderDeliveryInfoMutation, UpdateSaleDeliveryOrderDeliveryInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSaleDeliveryOrderDeliveryInfoMutation, UpdateSaleDeliveryOrderDeliveryInfoMutationVariables>(UpdateSaleDeliveryOrderDeliveryInfoDocument, options);
      }
export type UpdateSaleDeliveryOrderDeliveryInfoMutationHookResult = ReturnType<typeof useUpdateSaleDeliveryOrderDeliveryInfoMutation>;
export type UpdateSaleDeliveryOrderDeliveryInfoMutationResult = Apollo.MutationResult<UpdateSaleDeliveryOrderDeliveryInfoMutation>;
export type UpdateSaleDeliveryOrderDeliveryInfoMutationOptions = Apollo.BaseMutationOptions<UpdateSaleDeliveryOrderDeliveryInfoMutation, UpdateSaleDeliveryOrderDeliveryInfoMutationVariables>;
export const UpdateSaleDeliveryOrderDocument = gql`
    mutation updateSaleDeliveryOrder($input: UpdateSaleDeliveryOrderInput!) {
  updateSaleDeliveryOrder(input: $input)
}
    `;
export type UpdateSaleDeliveryOrderMutationFn = Apollo.MutationFunction<UpdateSaleDeliveryOrderMutation, UpdateSaleDeliveryOrderMutationVariables>;

/**
 * __useUpdateSaleDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useUpdateSaleDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSaleDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSaleDeliveryOrderMutation, { data, loading, error }] = useUpdateSaleDeliveryOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSaleDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSaleDeliveryOrderMutation, UpdateSaleDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSaleDeliveryOrderMutation, UpdateSaleDeliveryOrderMutationVariables>(UpdateSaleDeliveryOrderDocument, options);
      }
export type UpdateSaleDeliveryOrderMutationHookResult = ReturnType<typeof useUpdateSaleDeliveryOrderMutation>;
export type UpdateSaleDeliveryOrderMutationResult = Apollo.MutationResult<UpdateSaleDeliveryOrderMutation>;
export type UpdateSaleDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<UpdateSaleDeliveryOrderMutation, UpdateSaleDeliveryOrderMutationVariables>;
export const ListSaleDeliverySupplementalGoodsDocument = gql`
    query listSaleDeliverySupplementalGoods($input: ListSaleDeliverySupplementalGoodsInput) {
  listSaleDeliverySupplementalGoods(input: $input) {
    customerBelongInfo {
      customerId
      customerName
      customerType
    }
    deliveryGoodsSource
    outOrderId
    outOrderStatus
    saleGoodsItemInfo {
      commodityDetail {
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
      commodityTypeId
      commodityTypeName
      saleOrderItemId
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
      markList
      stockBatchInfo {
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
        unit {
          unitId
          unitName
        }
        batchCode
        batchId
        createTime
        lockQuantity
        lockQuantityItem {
          unit {
            unitId
            unitName
          }
          quantity
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
      unit {
        unitId
        unitName
      }
      deliverableQuantity
      deliveredQuantity
      price
      saleQuantity
      quantityItem {
        unit {
          unitId
          unitName
        }
        quantity
      }
    }
    saleOrderCode
    saleOrderDate
    saleOrderId
  }
}
    `;

/**
 * __useListSaleDeliverySupplementalGoodsQuery__
 *
 * To run a query within a React component, call `useListSaleDeliverySupplementalGoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleDeliverySupplementalGoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleDeliverySupplementalGoodsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListSaleDeliverySupplementalGoodsQuery(baseOptions?: Apollo.QueryHookOptions<ListSaleDeliverySupplementalGoodsQuery, ListSaleDeliverySupplementalGoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSaleDeliverySupplementalGoodsQuery, ListSaleDeliverySupplementalGoodsQueryVariables>(ListSaleDeliverySupplementalGoodsDocument, options);
      }
export function useListSaleDeliverySupplementalGoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSaleDeliverySupplementalGoodsQuery, ListSaleDeliverySupplementalGoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSaleDeliverySupplementalGoodsQuery, ListSaleDeliverySupplementalGoodsQueryVariables>(ListSaleDeliverySupplementalGoodsDocument, options);
        }
export type ListSaleDeliverySupplementalGoodsQueryHookResult = ReturnType<typeof useListSaleDeliverySupplementalGoodsQuery>;
export type ListSaleDeliverySupplementalGoodsLazyQueryHookResult = ReturnType<typeof useListSaleDeliverySupplementalGoodsLazyQuery>;
export type ListSaleDeliverySupplementalGoodsQueryResult = Apollo.QueryResult<ListSaleDeliverySupplementalGoodsQuery, ListSaleDeliverySupplementalGoodsQueryVariables>;
export const CreateSaleDeliverySupplementalOrderDocument = gql`
    mutation createSaleDeliverySupplementalOrder($input: CreateSaleDeliverySupplementalOrderInput!) {
  createSaleDeliverySupplementalOrder(input: $input)
}
    `;
export type CreateSaleDeliverySupplementalOrderMutationFn = Apollo.MutationFunction<CreateSaleDeliverySupplementalOrderMutation, CreateSaleDeliverySupplementalOrderMutationVariables>;

/**
 * __useCreateSaleDeliverySupplementalOrderMutation__
 *
 * To run a mutation, you first call `useCreateSaleDeliverySupplementalOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSaleDeliverySupplementalOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSaleDeliverySupplementalOrderMutation, { data, loading, error }] = useCreateSaleDeliverySupplementalOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSaleDeliverySupplementalOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateSaleDeliverySupplementalOrderMutation, CreateSaleDeliverySupplementalOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSaleDeliverySupplementalOrderMutation, CreateSaleDeliverySupplementalOrderMutationVariables>(CreateSaleDeliverySupplementalOrderDocument, options);
      }
export type CreateSaleDeliverySupplementalOrderMutationHookResult = ReturnType<typeof useCreateSaleDeliverySupplementalOrderMutation>;
export type CreateSaleDeliverySupplementalOrderMutationResult = Apollo.MutationResult<CreateSaleDeliverySupplementalOrderMutation>;
export type CreateSaleDeliverySupplementalOrderMutationOptions = Apollo.BaseMutationOptions<CreateSaleDeliverySupplementalOrderMutation, CreateSaleDeliverySupplementalOrderMutationVariables>;
export const ListDifferenceOrderDocument = gql`
    query listDifferenceOrder($businessId: ID!) {
  listDifferenceOrder(businessId: $businessId) {
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
        unit {
          unitId
          unitName
        }
        commodityTypeId
        commodityTypeName
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
      batch {
        unit {
          unitId
          unitName
        }
        batchCode
        batchId
        createTime
        quantity
        quantityItem {
          unit {
            unitId
            unitName
          }
          quantity
        }
        sourceBatchCode
        sourceBatchId
      }
      differenceOrderType
      markList
      markNameList
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
    }
    createTime
    deliveryTime
    differenceOrderType
    differenceOrderTypeDesc
    orderCode
    orderId
    receiveTime
    returnTime
    depletionTime
    differenceOrderStatus
    differenceOrderStatusDesc
    remark
  }
}
    `;

/**
 * __useListDifferenceOrderQuery__
 *
 * To run a query within a React component, call `useListDifferenceOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDifferenceOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDifferenceOrderQuery({
 *   variables: {
 *      businessId: // value for 'businessId'
 *   },
 * });
 */
export function useListDifferenceOrderQuery(baseOptions: Apollo.QueryHookOptions<ListDifferenceOrderQuery, ListDifferenceOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDifferenceOrderQuery, ListDifferenceOrderQueryVariables>(ListDifferenceOrderDocument, options);
      }
export function useListDifferenceOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDifferenceOrderQuery, ListDifferenceOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDifferenceOrderQuery, ListDifferenceOrderQueryVariables>(ListDifferenceOrderDocument, options);
        }
export type ListDifferenceOrderQueryHookResult = ReturnType<typeof useListDifferenceOrderQuery>;
export type ListDifferenceOrderLazyQueryHookResult = ReturnType<typeof useListDifferenceOrderLazyQuery>;
export type ListDifferenceOrderQueryResult = Apollo.QueryResult<ListDifferenceOrderQuery, ListDifferenceOrderQueryVariables>;
export const ListDeliveryCarTypeDocument = gql`
    query listDeliveryCarType {
  listDeliveryCarType {
    label
    value
  }
}
    `;

/**
 * __useListDeliveryCarTypeQuery__
 *
 * To run a query within a React component, call `useListDeliveryCarTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDeliveryCarTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDeliveryCarTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useListDeliveryCarTypeQuery(baseOptions?: Apollo.QueryHookOptions<ListDeliveryCarTypeQuery, ListDeliveryCarTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDeliveryCarTypeQuery, ListDeliveryCarTypeQueryVariables>(ListDeliveryCarTypeDocument, options);
      }
export function useListDeliveryCarTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDeliveryCarTypeQuery, ListDeliveryCarTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDeliveryCarTypeQuery, ListDeliveryCarTypeQueryVariables>(ListDeliveryCarTypeDocument, options);
        }
export type ListDeliveryCarTypeQueryHookResult = ReturnType<typeof useListDeliveryCarTypeQuery>;
export type ListDeliveryCarTypeLazyQueryHookResult = ReturnType<typeof useListDeliveryCarTypeLazyQuery>;
export type ListDeliveryCarTypeQueryResult = Apollo.QueryResult<ListDeliveryCarTypeQuery, ListDeliveryCarTypeQueryVariables>;