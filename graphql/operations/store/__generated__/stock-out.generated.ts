import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateOtherOutOrderMutationVariables = SchemaTypes.Exact<{
  createOtherOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateOtherOutOrderInput>;
}>;


export type CreateOtherOutOrderMutation = { createOtherOutOrder?: string };

export type UpdateOtherOutOrderMutationVariables = SchemaTypes.Exact<{
  updateOtherOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateOtherOutOrderInput>;
}>;


export type UpdateOtherOutOrderMutation = { updateOtherOutOrder?: boolean };

export type ConfirmOutOrderStatisticsQueryVariables = SchemaTypes.Exact<{
  outOrderId: SchemaTypes.Scalars['ID'];
}>;


export type ConfirmOutOrderStatisticsQuery = { confirmOutOrderStatistics?: { __typename?: 'ConfirmOutOrderStatisticsPayload', commodityCount?: number, outOrderFinishCount?: number, outOrderUnFinishCount?: number } };

export type CountOutOrderStatusQueryVariables = SchemaTypes.Exact<{
  countOutOrderStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.CountOutOrderStatusInput>;
}>;


export type CountOutOrderStatusQuery = { countOutOrderStatus?: { __typename?: 'OutOrderStatusCountPayload', toSubmit?: number, toAudit?: number, producing?: number, toOutbound?: number, finished?: number } };

export type PageOtherOutOrderQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageOtherOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.PageOtherOutOrderInput>;
}>;


export type PageOtherOutOrderQuery = { pageOtherOutOrder?: { __typename?: 'OtherOutOrderPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'OtherOutOrderPayload', outOrderId?: string, outOrderType?: number, outOrderTypeName?: string, outOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, outOrderStatus?: number, outOrderStatusName?: string, createTime?: number, outOrderDescription?: string, errorDescription?: string, billId?: string, outStockRecordCount?: number, commodityList?: Array<{ __typename?: 'OtherOutOrderItemPayload', outOrderItemId?: string, outOrderId?: string, unitQuantity?: number, totalQuantity?: number, salePrice?: number, unitTotalPrice?: number, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> }> } };

export type CancelOutOrderMutationVariables = SchemaTypes.Exact<{
  cancelOutOrderInput: SchemaTypes.CancelOutOrderInput;
}>;


export type CancelOutOrderMutation = { cancelOutOrder?: boolean };

export type SubmitOutOrderMutationVariables = SchemaTypes.Exact<{
  outOrderId: SchemaTypes.Scalars['ID'];
}>;


export type SubmitOutOrderMutation = { submitOutOrder?: boolean };

export type OutOrderQueryVariables = SchemaTypes.Exact<{
  outOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.OutOrderInput>;
}>;


export type OutOrderQuery = { outOrder?: { __typename?: 'OutOrderPayload', outOrderId?: string, outOrderType?: number, outOrderTypeName?: string, outOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerType?: number, customerTypeName?: string, transferId?: string, transferType?: number, transferOrganizationId?: number, transferOrganizationName?: string, userId?: number, createUserPhone?: string, customerId?: number, customerName?: string, saleTime?: number, outOrderStatus?: number, outOrderStatusName?: string, warehouseId?: string, warehouseName?: string, createUserName?: string, createTime?: number, outOrderDescription?: string, errorDescription?: string, totalPrice?: number, taskId?: string, taskCode?: string, inOrderId?: string, inOrderCode?: string, supplierId?: number, supplierName?: string, customerDistributionId?: number, customerDistributionName?: string, deliveryFee?: number, organizationId?: number, organizationName?: string, payMethod?: SchemaTypes.OutOrderPayModeEnum, payMethodDesc?: string, isExceptional?: boolean, netWeightExceptionRatio?: number, commodityList?: Array<{ __typename?: 'OutOrderItemPayload', outOrderItemId?: string, outOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, salePrice?: number, salePriceType?: number, salePriceTypeName?: string, maxQuantity?: number, planQuantity?: number, basketQuantity?: number, basketCustomerId?: number, basketCustomerName?: string, createTime?: number, createBy?: number, updateTime?: number, deleted?: number, updateBy?: number, waitUnitQuantity?: number, waitTotalQuantity?: number, completeOutStock?: number, commodityBomId?: number, unitTotalPrice?: number, damageReason?: string, batchId?: string, batchCode?: string, stockUnitPrice?: number, stockUnitPriceType?: number, stockUnitPriceTypeName?: string, stockTotalPrice?: number, belongCustomerName?: string, photos?: Array<string>, realQuantity?: number, saleTotalPrice?: number, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, conversion?: number, outStockFinishUnitQuantity?: number, outStockFinishTotalQuantity?: number, belongCustomerId?: number, pickingUnitQuantity?: number, pickingTotalQuantity?: number, commodityStatus?: SchemaTypes.CommodityStatus, unitStockQuantity?: number, saleOrderInfo?: { __typename?: 'SaleOrderInfoPayload', outOrderId?: string, saleOrderId?: string, saleOrderCode?: string }, stockQuantity?: { __typename?: 'StockQuantity', unitQuantity?: number, totalQuantity?: number }, stockQuantityWithLock?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, productPickingQuantity?: { __typename?: 'ProductPickingQuantity', totalQuantity?: number, unitQuantity?: number } }>, saleOrderInfo?: { __typename?: 'SaleOrderInfoPayload', outOrderId?: string, saleOrderId?: string, saleOrderCode?: string }, saleIncomeOrder?: { __typename?: 'SaleIncomeOrderPayload', incomeId?: string, incomeStatus?: SchemaTypes.IncomeStatus, incomeStatusName?: string, incomeCode?: string, sourceId?: string, sourceType?: SchemaTypes.SaleIncomeSourceType, sourceTypeName?: string, remark?: string, rejectReason?: string, createTime?: number, saleCostOrderId?: string, totalAmount?: number, commodityTypeName?: string, payMode?: SchemaTypes.OutOrderPayModeEnum, saleTime?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commoditiesList?: Array<{ __typename?: 'SaleIncomeOrderItemPayload', incomeItemId?: string, incomeId?: string, commodityName?: string, unitQuantity?: number, saleMoney?: number, photosList?: Array<string>, outOrderItemId?: string, salePrice?: number, remark?: string, totalQuantity?: number, batchId?: number, batchCode?: string, totalSalePrice?: number, goodsUnitQuantity?: number, goodsTotalQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, originalSaleCommodityPayload?: Array<{ __typename?: 'OriginalSaleCommodityPayload', outOrderItemId?: string, batchId?: string, batchCode?: string, salePrice?: number, totalQuantity?: number, unitQuantity?: number, saleTotalPrice?: number, outOrderId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockQuantity?: { __typename?: 'StockQuantity', unitQuantity?: number, totalQuantity?: number }, actualQuantity?: { __typename?: 'ActualQuantity', actualTotalQuantity?: number, actualUnitQuantity?: number, actualSalePrice?: number, actualSaleTotalPrice?: number, outOrderItemId?: string } }>, saleCostOrderItems?: Array<{ __typename?: 'SaleCostOrderItemPayload', saleCostOrderItemId?: string, saleCostOrderId?: string, outOrderItemId?: string, packagingFee?: number, materialFee?: number, commodity?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, logs?: Array<{ __typename?: 'SaleIncomeOrderLogPayload', incomeLogId?: string, incomeId?: string, type?: SchemaTypes.SaleIncomeLogType, typeText?: string, remark?: string, createTime?: number, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }>, functionalField?: { __typename?: 'FunctionalField', saleTotalPrice?: number, saleTotalCost?: number }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, targetBelongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type PageOutOrderQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.PageOutOrderInput>;
}>;


export type PageOutOrderQuery = { pageOutOrder?: { __typename?: 'OutOrderPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'OutOrderPayload', outOrderId?: string, outOrderType?: number, outOrderTypeName?: string, outOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerType?: number, customerTypeName?: string, transferId?: string, transferType?: number, transferOrganizationId?: number, transferOrganizationName?: string, userId?: number, createUserPhone?: string, customerId?: number, customerName?: string, saleTime?: number, outOrderStatus?: number, outOrderStatusName?: string, warehouseId?: string, warehouseName?: string, createUserName?: string, createTime?: number, outOrderDescription?: string, errorDescription?: string, totalPrice?: number, taskId?: string, taskCode?: string, inOrderId?: string, inOrderCode?: string, supplierId?: number, supplierName?: string, customerDistributionId?: number, customerDistributionName?: string, deliveryFee?: number, organizationId?: number, organizationName?: string, payMethod?: SchemaTypes.OutOrderPayModeEnum, payMethodDesc?: string, isExceptional?: boolean, commodityList?: Array<{ __typename?: 'OutOrderItemPayload', outOrderItemId?: string, outOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, salePrice?: number, salePriceType?: number, salePriceTypeName?: string, maxQuantity?: number, planQuantity?: number, basketQuantity?: number, basketCustomerId?: number, basketCustomerName?: string, createTime?: number, createBy?: number, updateTime?: number, deleted?: number, updateBy?: number, waitUnitQuantity?: number, waitTotalQuantity?: number, completeOutStock?: number, commodityBomId?: number, unitTotalPrice?: number, damageReason?: string, batchId?: string, stockUnitPrice?: number, stockUnitPriceType?: number, stockUnitPriceTypeName?: string, stockTotalPrice?: number, photos?: Array<string>, realQuantity?: number, saleTotalPrice?: number, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, conversion?: number, outStockFinishUnitQuantity?: number, outStockFinishTotalQuantity?: number, pickingUnitQuantity?: number, pickingTotalQuantity?: number, commodityStatus?: SchemaTypes.CommodityStatus, unitStockQuantity?: number, saleOrderInfo?: { __typename?: 'SaleOrderInfoPayload', outOrderId?: string, saleOrderId?: string, saleOrderCode?: string }, productPickingQuantity?: { __typename?: 'ProductPickingQuantity', totalQuantity?: number, unitQuantity?: number } }>, saleOrderInfo?: { __typename?: 'SaleOrderInfoPayload', outOrderId?: string, saleOrderId?: string, saleOrderCode?: string }, saleIncomeOrder?: { __typename?: 'SaleIncomeOrderPayload', incomeId?: string, incomeStatus?: SchemaTypes.IncomeStatus, incomeStatusName?: string, incomeCode?: string, sourceId?: string, sourceType?: SchemaTypes.SaleIncomeSourceType, sourceTypeName?: string, remark?: string, rejectReason?: string, createTime?: number, saleCostOrderId?: string, totalAmount?: number, commodityTypeName?: string, payMode?: SchemaTypes.OutOrderPayModeEnum, saleTime?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commoditiesList?: Array<{ __typename?: 'SaleIncomeOrderItemPayload', incomeItemId?: string, incomeId?: string, commodityName?: string, unitQuantity?: number, saleMoney?: number, photosList?: Array<string>, outOrderItemId?: string, salePrice?: number, remark?: string, totalQuantity?: number, batchId?: number, batchCode?: string, totalSalePrice?: number, goodsUnitQuantity?: number, goodsTotalQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, originalSaleCommodityPayload?: Array<{ __typename?: 'OriginalSaleCommodityPayload', outOrderItemId?: string, batchId?: string, batchCode?: string, salePrice?: number, totalQuantity?: number, unitQuantity?: number, saleTotalPrice?: number, outOrderId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockQuantity?: { __typename?: 'StockQuantity', unitQuantity?: number, totalQuantity?: number }, actualQuantity?: { __typename?: 'ActualQuantity', actualTotalQuantity?: number, actualUnitQuantity?: number, actualSalePrice?: number, actualSaleTotalPrice?: number, outOrderItemId?: string } }>, saleCostOrderItems?: Array<{ __typename?: 'SaleCostOrderItemPayload', saleCostOrderItemId?: string, saleCostOrderId?: string, outOrderItemId?: string, packagingFee?: number, materialFee?: number, commodity?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, logs?: Array<{ __typename?: 'SaleIncomeOrderLogPayload', incomeLogId?: string, incomeId?: string, type?: SchemaTypes.SaleIncomeLogType, typeText?: string, remark?: string, createTime?: number, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }>, functionalField?: { __typename?: 'FunctionalField', saleTotalPrice?: number, saleTotalCost?: number }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, targetBelongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, matchingSource?: { __typename?: 'MarchingSourceInfo', carNo?: string, departureDate?: number, matchDate?: number, matchSource?: number, matchSourceName?: string, runCode?: string, trailerNo?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } };

export type StockOutDetailQueryVariables = SchemaTypes.Exact<{
  outOrderInput: SchemaTypes.OutOrderInput;
  countOutStockRecordInput: SchemaTypes.CountOutStockRecordInput;
}>;


export type StockOutDetailQuery = { countOutStockRecord?: number, outOrder?: { __typename?: 'OutOrderPayload', outOrderId?: string, outOrderType?: number, outOrderTypeName?: string, outOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerType?: number, customerTypeName?: string, transferId?: string, transferType?: number, transferOrganizationId?: number, transferOrganizationName?: string, userId?: number, createUserPhone?: string, customerId?: number, customerName?: string, saleTime?: number, outOrderStatus?: number, outOrderStatusName?: string, warehouseId?: string, warehouseName?: string, createUserName?: string, createTime?: number, outOrderDescription?: string, errorDescription?: string, totalPrice?: number, taskId?: string, taskCode?: string, inOrderId?: string, inOrderCode?: string, customerDistributionId?: number, customerDistributionName?: string, deliveryFee?: number, organizationId?: number, organizationName?: string, payMethod?: SchemaTypes.OutOrderPayModeEnum, payMethodDesc?: string, isExceptional?: boolean, netWeightExceptionRatio?: number, commodityList?: Array<{ __typename?: 'OutOrderItemPayload', outOrderItemId?: string, outOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, salePrice?: number, salePriceType?: number, salePriceTypeName?: string, maxQuantity?: number, planQuantity?: number, basketQuantity?: number, basketCustomerId?: number, basketCustomerName?: string, createTime?: number, createBy?: number, updateTime?: number, deleted?: number, updateBy?: number, waitUnitQuantity?: number, waitTotalQuantity?: number, completeOutStock?: number, commodityBomId?: number, unitTotalPrice?: number, damageReason?: string, batchId?: string, batchCode?: string, stockUnitPrice?: number, stockUnitPriceType?: number, stockUnitPriceTypeName?: string, stockTotalPrice?: number, belongCustomerName?: string, photos?: Array<string>, realQuantity?: number, saleTotalPrice?: number, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, conversion?: number, outStockFinishUnitQuantity?: number, outStockFinishTotalQuantity?: number, belongCustomerId?: number, pickingUnitQuantity?: number, pickingTotalQuantity?: number, commodityStatus?: SchemaTypes.CommodityStatus, unitStockQuantity?: number, saleOrderInfo?: { __typename?: 'SaleOrderInfoPayload', outOrderId?: string, saleOrderId?: string, saleOrderCode?: string }, stockQuantity?: { __typename?: 'StockQuantity', unitQuantity?: number, totalQuantity?: number }, stockQuantityWithLock?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, productPickingQuantity?: { __typename?: 'ProductPickingQuantity', totalQuantity?: number, unitQuantity?: number } }>, matchingSource?: { __typename?: 'MarchingSourceInfo', carNo?: string, departureDate?: number, matchDate?: number, matchSource?: number, matchSourceName?: string, runCode?: string, trailerNo?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, saleOrderInfo?: { __typename?: 'SaleOrderInfoPayload', outOrderId?: string, saleOrderId?: string, saleOrderCode?: string }, saleIncomeOrder?: { __typename?: 'SaleIncomeOrderPayload', incomeId?: string, incomeStatus?: SchemaTypes.IncomeStatus, incomeStatusName?: string, incomeCode?: string, sourceId?: string, sourceType?: SchemaTypes.SaleIncomeSourceType, sourceTypeName?: string, remark?: string, rejectReason?: string, createTime?: number, saleCostOrderId?: string, totalAmount?: number, commodityTypeName?: string, payMode?: SchemaTypes.OutOrderPayModeEnum, saleTime?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commoditiesList?: Array<{ __typename?: 'SaleIncomeOrderItemPayload', incomeItemId?: string, incomeId?: string, commodityName?: string, unitQuantity?: number, saleMoney?: number, photosList?: Array<string>, outOrderItemId?: string, salePrice?: number, remark?: string, totalQuantity?: number, batchId?: number, batchCode?: string, totalSalePrice?: number, goodsUnitQuantity?: number, goodsTotalQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, originalSaleCommodityPayload?: Array<{ __typename?: 'OriginalSaleCommodityPayload', outOrderItemId?: string, batchId?: string, batchCode?: string, salePrice?: number, totalQuantity?: number, unitQuantity?: number, saleTotalPrice?: number, outOrderId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockQuantity?: { __typename?: 'StockQuantity', unitQuantity?: number, totalQuantity?: number }, actualQuantity?: { __typename?: 'ActualQuantity', actualTotalQuantity?: number, actualUnitQuantity?: number, actualSalePrice?: number, actualSaleTotalPrice?: number, outOrderItemId?: string } }>, saleCostOrderItems?: Array<{ __typename?: 'SaleCostOrderItemPayload', saleCostOrderItemId?: string, saleCostOrderId?: string, outOrderItemId?: string, packagingFee?: number, materialFee?: number, commodity?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, logs?: Array<{ __typename?: 'SaleIncomeOrderLogPayload', incomeLogId?: string, incomeId?: string, type?: SchemaTypes.SaleIncomeLogType, typeText?: string, remark?: string, createTime?: number, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }>, functionalField?: { __typename?: 'FunctionalField', saleTotalPrice?: number, saleTotalCost?: number }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, targetBelongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type StockOutRecordsQueryVariables = SchemaTypes.Exact<{
  outOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.OutOrderInput>;
  outOrderItemsInput?: SchemaTypes.InputMaybe<SchemaTypes.OutOrderItemsInput>;
  outStockRecordsInput?: SchemaTypes.InputMaybe<SchemaTypes.OutStockRecordsInput>;
}>;


export type StockOutRecordsQuery = { outOrder?: { __typename?: 'OutOrderPayload', commodityTypeId?: number, outOrderType?: number }, outOrderItems?: Array<{ __typename?: 'OutOrderItemPayload', outOrderItemId?: string, outOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, salePrice?: number, salePriceType?: number, salePriceTypeName?: string, maxQuantity?: number, planQuantity?: number, basketQuantity?: number, basketCustomerId?: number, basketCustomerName?: string, createTime?: number, createBy?: number, updateTime?: number, deleted?: number, updateBy?: number, waitUnitQuantity?: number, waitTotalQuantity?: number, completeOutStock?: number, commodityBomId?: number, unitTotalPrice?: number, damageReason?: string, batchId?: string, batchCode?: string, stockUnitPrice?: number, stockUnitPriceType?: number, stockUnitPriceTypeName?: string, stockTotalPrice?: number, belongCustomerName?: string, photos?: Array<string>, realQuantity?: number, saleTotalPrice?: number, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, conversion?: number, outStockFinishUnitQuantity?: number, outStockFinishTotalQuantity?: number, belongCustomerId?: number, pickingUnitQuantity?: number, pickingTotalQuantity?: number, commodityStatus?: SchemaTypes.CommodityStatus, saleOrderInfo?: { __typename?: 'SaleOrderInfoPayload', outOrderId?: string, saleOrderId?: string, saleOrderCode?: string } }>, outStockRecords?: Array<{ __typename?: 'OutStockRecordPayload', outStockRecordId?: string, outOrderId?: string, outOrderType?: number, commodityTypeId?: number, commodityTypeName?: string, totalPrice?: number, organizationId?: number, organizationName?: string, warehouseId?: string, warehouseName?: string, customerType?: number, customerId?: number, customerName?: string, taskCode?: string, createUserName?: string, createTime?: number, createBy?: number, outStockCode?: string, outOrderItemId?: string, remark?: string, deliveryFee?: number, items?: Array<{ __typename?: 'OutStockRecordItemAggPayload', commodityName?: string, skuTextDescription?: Array<string>, basketQuantity?: number, basketCustomerName?: string, salePrice?: number, salePriceTypeName?: string, totalPrice?: number, conversion?: number, unitTypeName?: string, totalTypeName?: string, items?: Array<{ __typename?: 'OutStockRecordItemPayload', outStockRecordItemId?: number, outStockRecordId?: string, outOrderId?: string, stockBatchCode?: string, outOrderCode?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, skuTextDescription?: Array<string>, salePrice?: number, salePriceType?: number, salePriceTypeName?: string, totalPrice?: number, unitType?: number, unitTypeName?: string, unitQuantity?: number, totalType?: number, totalTypeName?: string, totalQuantity?: number, taskId?: string, outOrderType?: number, belongCustomerId?: number, belongCustomerName?: string, belongWarehouseId?: string, belongWarehouseName?: string, basketQuantity?: number, basketCustomerId?: number, basketCustomerName?: string }> }> }> };

export type RejectOutOrderAuditMutationVariables = SchemaTypes.Exact<{
  rejectOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.RejectOutOrderInput>;
}>;


export type RejectOutOrderAuditMutation = { rejectOutOrderAudit?: boolean };

export type ConfirmOutOrderMutationVariables = SchemaTypes.Exact<{
  confirmOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.ConfirmOutOrderInput>;
}>;


export type ConfirmOutOrderMutation = { confirmOutOrder?: boolean };

export type StockBatchesQueryVariables = SchemaTypes.Exact<{
  stockBatchQueryInput?: SchemaTypes.InputMaybe<SchemaTypes.StockBatchQueryInput>;
}>;


export type StockBatchesQuery = { stockBatches?: Array<{ __typename?: 'StockBatchPayload', batchId?: string, batchCode?: string, unitQuantity?: number, totalQuantity?: number, unitTypeName?: string, totalTypeName?: string, unitType?: number, totalType?: number, createTime?: number, conversion?: number }> };

export type FinishOutOrderMutationVariables = SchemaTypes.Exact<{
  finishOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.FinishOutOrderInput>;
}>;


export type FinishOutOrderMutation = { finishOutOrder?: boolean };

export type OtherOutOrderDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.OtherOutOrderDetailInput>;
}>;


export type OtherOutOrderDetailQuery = { otherOutOrderDetail?: { __typename?: 'OtherOutOrderPayload', billId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, errorDescription?: string, outOrderCode?: string, outOrderDescription?: string, outOrderId?: string, outOrderStatus?: number, outOrderStatusName?: string, outOrderType?: number, outOrderTypeName?: string, outStockRecordCount?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }>, commodityList?: Array<{ __typename?: 'OtherOutOrderItemPayload', inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, outOrderId?: string, outOrderItemId?: string, salePrice?: number, totalQuantity?: number, unitQuantity?: number, unitTotalPrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } };

export type CancelOtherOutOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CancelOtherOutOrderInput>;
}>;


export type CancelOtherOutOrderMutation = { cancelOtherOutOrder?: boolean };

export type SubmitOtherOutOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SubmitOtherOutOrderInput>;
}>;


export type SubmitOtherOutOrderMutation = { submitOtherOutOrder?: boolean };


export const CreateOtherOutOrderDocument = gql`
    mutation createOtherOutOrder($createOtherOutOrderInput: CreateOtherOutOrderInput) {
  createOtherOutOrder(createOtherOutOrderInput: $createOtherOutOrderInput)
}
    `;
export type CreateOtherOutOrderMutationFn = Apollo.MutationFunction<CreateOtherOutOrderMutation, CreateOtherOutOrderMutationVariables>;

/**
 * __useCreateOtherOutOrderMutation__
 *
 * To run a mutation, you first call `useCreateOtherOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOtherOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOtherOutOrderMutation, { data, loading, error }] = useCreateOtherOutOrderMutation({
 *   variables: {
 *      createOtherOutOrderInput: // value for 'createOtherOutOrderInput'
 *   },
 * });
 */
export function useCreateOtherOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOtherOutOrderMutation, CreateOtherOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOtherOutOrderMutation, CreateOtherOutOrderMutationVariables>(CreateOtherOutOrderDocument, options);
      }
export type CreateOtherOutOrderMutationHookResult = ReturnType<typeof useCreateOtherOutOrderMutation>;
export type CreateOtherOutOrderMutationResult = Apollo.MutationResult<CreateOtherOutOrderMutation>;
export type CreateOtherOutOrderMutationOptions = Apollo.BaseMutationOptions<CreateOtherOutOrderMutation, CreateOtherOutOrderMutationVariables>;
export const UpdateOtherOutOrderDocument = gql`
    mutation updateOtherOutOrder($updateOtherOutOrderInput: UpdateOtherOutOrderInput) {
  updateOtherOutOrder(updateOtherOutOrderInput: $updateOtherOutOrderInput)
}
    `;
export type UpdateOtherOutOrderMutationFn = Apollo.MutationFunction<UpdateOtherOutOrderMutation, UpdateOtherOutOrderMutationVariables>;

/**
 * __useUpdateOtherOutOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOtherOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOtherOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOtherOutOrderMutation, { data, loading, error }] = useUpdateOtherOutOrderMutation({
 *   variables: {
 *      updateOtherOutOrderInput: // value for 'updateOtherOutOrderInput'
 *   },
 * });
 */
export function useUpdateOtherOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOtherOutOrderMutation, UpdateOtherOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOtherOutOrderMutation, UpdateOtherOutOrderMutationVariables>(UpdateOtherOutOrderDocument, options);
      }
export type UpdateOtherOutOrderMutationHookResult = ReturnType<typeof useUpdateOtherOutOrderMutation>;
export type UpdateOtherOutOrderMutationResult = Apollo.MutationResult<UpdateOtherOutOrderMutation>;
export type UpdateOtherOutOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOtherOutOrderMutation, UpdateOtherOutOrderMutationVariables>;
export const ConfirmOutOrderStatisticsDocument = gql`
    query confirmOutOrderStatistics($outOrderId: ID!) {
  confirmOutOrderStatistics(outOrderId: $outOrderId) {
    commodityCount
    outOrderFinishCount
    outOrderUnFinishCount
  }
}
    `;

/**
 * __useConfirmOutOrderStatisticsQuery__
 *
 * To run a query within a React component, call `useConfirmOutOrderStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConfirmOutOrderStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConfirmOutOrderStatisticsQuery({
 *   variables: {
 *      outOrderId: // value for 'outOrderId'
 *   },
 * });
 */
export function useConfirmOutOrderStatisticsQuery(baseOptions: Apollo.QueryHookOptions<ConfirmOutOrderStatisticsQuery, ConfirmOutOrderStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConfirmOutOrderStatisticsQuery, ConfirmOutOrderStatisticsQueryVariables>(ConfirmOutOrderStatisticsDocument, options);
      }
export function useConfirmOutOrderStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConfirmOutOrderStatisticsQuery, ConfirmOutOrderStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConfirmOutOrderStatisticsQuery, ConfirmOutOrderStatisticsQueryVariables>(ConfirmOutOrderStatisticsDocument, options);
        }
export type ConfirmOutOrderStatisticsQueryHookResult = ReturnType<typeof useConfirmOutOrderStatisticsQuery>;
export type ConfirmOutOrderStatisticsLazyQueryHookResult = ReturnType<typeof useConfirmOutOrderStatisticsLazyQuery>;
export type ConfirmOutOrderStatisticsQueryResult = Apollo.QueryResult<ConfirmOutOrderStatisticsQuery, ConfirmOutOrderStatisticsQueryVariables>;
export const CountOutOrderStatusDocument = gql`
    query countOutOrderStatus($countOutOrderStatusInput: CountOutOrderStatusInput) {
  countOutOrderStatus(countOutOrderStatusInput: $countOutOrderStatusInput) {
    toSubmit
    toAudit
    producing
    toOutbound
    finished
  }
}
    `;

/**
 * __useCountOutOrderStatusQuery__
 *
 * To run a query within a React component, call `useCountOutOrderStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountOutOrderStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountOutOrderStatusQuery({
 *   variables: {
 *      countOutOrderStatusInput: // value for 'countOutOrderStatusInput'
 *   },
 * });
 */
export function useCountOutOrderStatusQuery(baseOptions?: Apollo.QueryHookOptions<CountOutOrderStatusQuery, CountOutOrderStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountOutOrderStatusQuery, CountOutOrderStatusQueryVariables>(CountOutOrderStatusDocument, options);
      }
export function useCountOutOrderStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountOutOrderStatusQuery, CountOutOrderStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountOutOrderStatusQuery, CountOutOrderStatusQueryVariables>(CountOutOrderStatusDocument, options);
        }
export type CountOutOrderStatusQueryHookResult = ReturnType<typeof useCountOutOrderStatusQuery>;
export type CountOutOrderStatusLazyQueryHookResult = ReturnType<typeof useCountOutOrderStatusLazyQuery>;
export type CountOutOrderStatusQueryResult = Apollo.QueryResult<CountOutOrderStatusQuery, CountOutOrderStatusQueryVariables>;
export const PageOtherOutOrderDocument = gql`
    query pageOtherOutOrder($page: Page, $pageOtherOutOrderInput: PageOtherOutOrderInput) {
  pageOtherOutOrder(page: $page, pageOtherOutOrderInput: $pageOtherOutOrderInput) {
    records {
      outOrderId
      outOrderType
      outOrderTypeName
      outOrderCode
      commodityTypeId
      commodityTypeName
      outOrderStatus
      outOrderStatusName
      createTime
      outOrderDescription
      errorDescription
      commodityList {
        outOrderItemId
        outOrderId
        unitQuantity
        unitType {
          unitId
          unitName
        }
        totalQuantity
        totalType {
          unitId
          unitName
        }
        salePrice
        unitTotalPrice
        inBoundTotalQuantity
        inBoundUnitQuantity
        commoditySku {
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
          commodityId
          commodityName
          commoditySkuId
          commoditySkuName
          commoditySpecOptionId
          commoditySpecOptionName
          conversion
        }
        priceType {
          unitId
          unitName
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
          totalQuantity
          unitQuantity
        }
      }
      belongOrg {
        orgId
        orgName
      }
      createBy {
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
      supplier {
        supplierId
        supplierName
      }
      warehouse {
        warehouseId
        warehouseName
      }
      wmsMarkList {
        appId
        businessType
        labelContent
        markId
        tenantId
      }
      billId
      outStockRecordCount
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageOtherOutOrderQuery__
 *
 * To run a query within a React component, call `usePageOtherOutOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageOtherOutOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageOtherOutOrderQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageOtherOutOrderInput: // value for 'pageOtherOutOrderInput'
 *   },
 * });
 */
export function usePageOtherOutOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageOtherOutOrderQuery, PageOtherOutOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageOtherOutOrderQuery, PageOtherOutOrderQueryVariables>(PageOtherOutOrderDocument, options);
      }
export function usePageOtherOutOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageOtherOutOrderQuery, PageOtherOutOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageOtherOutOrderQuery, PageOtherOutOrderQueryVariables>(PageOtherOutOrderDocument, options);
        }
export type PageOtherOutOrderQueryHookResult = ReturnType<typeof usePageOtherOutOrderQuery>;
export type PageOtherOutOrderLazyQueryHookResult = ReturnType<typeof usePageOtherOutOrderLazyQuery>;
export type PageOtherOutOrderQueryResult = Apollo.QueryResult<PageOtherOutOrderQuery, PageOtherOutOrderQueryVariables>;
export const CancelOutOrderDocument = gql`
    mutation cancelOutOrder($cancelOutOrderInput: CancelOutOrderInput!) {
  cancelOutOrder(cancelOutOrderInput: $cancelOutOrderInput)
}
    `;
export type CancelOutOrderMutationFn = Apollo.MutationFunction<CancelOutOrderMutation, CancelOutOrderMutationVariables>;

/**
 * __useCancelOutOrderMutation__
 *
 * To run a mutation, you first call `useCancelOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelOutOrderMutation, { data, loading, error }] = useCancelOutOrderMutation({
 *   variables: {
 *      cancelOutOrderInput: // value for 'cancelOutOrderInput'
 *   },
 * });
 */
export function useCancelOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelOutOrderMutation, CancelOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelOutOrderMutation, CancelOutOrderMutationVariables>(CancelOutOrderDocument, options);
      }
export type CancelOutOrderMutationHookResult = ReturnType<typeof useCancelOutOrderMutation>;
export type CancelOutOrderMutationResult = Apollo.MutationResult<CancelOutOrderMutation>;
export type CancelOutOrderMutationOptions = Apollo.BaseMutationOptions<CancelOutOrderMutation, CancelOutOrderMutationVariables>;
export const SubmitOutOrderDocument = gql`
    mutation submitOutOrder($outOrderId: ID!) {
  submitOutOrder(outOrderId: $outOrderId)
}
    `;
export type SubmitOutOrderMutationFn = Apollo.MutationFunction<SubmitOutOrderMutation, SubmitOutOrderMutationVariables>;

/**
 * __useSubmitOutOrderMutation__
 *
 * To run a mutation, you first call `useSubmitOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitOutOrderMutation, { data, loading, error }] = useSubmitOutOrderMutation({
 *   variables: {
 *      outOrderId: // value for 'outOrderId'
 *   },
 * });
 */
export function useSubmitOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitOutOrderMutation, SubmitOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitOutOrderMutation, SubmitOutOrderMutationVariables>(SubmitOutOrderDocument, options);
      }
export type SubmitOutOrderMutationHookResult = ReturnType<typeof useSubmitOutOrderMutation>;
export type SubmitOutOrderMutationResult = Apollo.MutationResult<SubmitOutOrderMutation>;
export type SubmitOutOrderMutationOptions = Apollo.BaseMutationOptions<SubmitOutOrderMutation, SubmitOutOrderMutationVariables>;
export const OutOrderDocument = gql`
    query outOrder($outOrderInput: OutOrderInput) {
  outOrder(outOrderInput: $outOrderInput) {
    outOrderId
    outOrderType
    outOrderTypeName
    outOrderCode
    commodityTypeId
    commodityTypeName
    customerType
    customerTypeName
    transferId
    transferType
    transferOrganizationId
    transferOrganizationName
    userId
    createUserPhone
    customerId
    customerName
    saleTime
    outOrderStatus
    outOrderStatusName
    warehouseId
    warehouseName
    createUserName
    createTime
    outOrderDescription
    errorDescription
    totalPrice
    commodityList {
      outOrderItemId
      outOrderId
      commodityId
      commodityName
      commoditySkuId
      commoditySpecOptionId
      skuTextDescription
      unitQuantity
      unitType
      unitTypeName
      totalQuantity
      totalType
      totalTypeName
      salePrice
      salePriceType
      salePriceTypeName
      maxQuantity
      planQuantity
      basketQuantity
      basketCustomerId
      basketCustomerName
      createTime
      createBy
      updateTime
      deleted
      updateBy
      waitUnitQuantity
      waitTotalQuantity
      completeOutStock
      commodityBomId
      unitTotalPrice
      damageReason
      batchId
      batchCode
      stockUnitPrice
      stockUnitPriceType
      stockUnitPriceTypeName
      stockTotalPrice
      belongCustomerName
      photos
      realQuantity
      saleTotalPrice
      inBoundTotalQuantity
      inBoundUnitQuantity
      conversion
      outStockFinishUnitQuantity
      outStockFinishTotalQuantity
      belongCustomerId
      pickingUnitQuantity
      pickingTotalQuantity
      commodityStatus
      saleOrderInfo {
        outOrderId
        saleOrderId
        saleOrderCode
      }
      unitStockQuantity
      stockQuantity {
        unitQuantity
        totalQuantity
      }
      stockQuantityWithLock {
        unitQuantity
        totalQuantity
      }
      productPickingQuantity {
        totalQuantity
        unitQuantity
      }
    }
    taskId
    taskCode
    inOrderId
    inOrderCode
    supplierId
    supplierName
    customerDistributionId
    customerDistributionName
    deliveryFee
    organizationId
    organizationName
    payMethod
    payMethodDesc
    saleOrderInfo {
      outOrderId
      saleOrderId
      saleOrderCode
    }
    saleIncomeOrder {
      incomeId
      incomeStatus
      incomeStatusName
      incomeCode
      sourceId
      sourceType
      sourceTypeName
      warehouse {
        warehouseId
        warehouseName
      }
      remark
      rejectReason
      user {
        userId
        userName
        phoneNum
      }
      customer {
        customerId
        customerName
        customerType
      }
      createTime
      commoditiesList {
        incomeItemId
        incomeId
        commoditySku {
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
        commodityName
        unitQuantity
        unitType {
          unitId
          unitName
        }
        saleMoney
        photosList
        outOrderItemId
        salePrice
        remark
        totalQuantity
        totalType {
          unitId
          unitName
        }
        batchId
        batchCode
        totalSalePrice
        priceType {
          unitId
          unitName
        }
        goodsUnitQuantity
        goodsTotalQuantity
      }
      originalSaleCommodityPayload {
        outOrderItemId
        commoditySku {
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
        batchId
        batchCode
        salePrice
        salePriceType {
          unitId
          unitName
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
        saleTotalPrice
        stockQuantity {
          unitQuantity
          totalQuantity
        }
        actualQuantity {
          actualTotalQuantity
          actualUnitQuantity
          actualSalePrice
          actualSaleTotalPrice
          outOrderItemId
        }
        outOrderId
      }
      saleCostOrderItems {
        saleCostOrderItemId
        saleCostOrderId
        outOrderItemId
        commodity {
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
        packagingFee
        materialFee
      }
      logs {
        incomeLogId
        incomeId
        type
        typeText
        remark
        createTime
        user {
          userId
          userName
          phoneNum
        }
      }
      saleCostOrderId
      functionalField {
        saleTotalPrice
        saleTotalCost
      }
      totalAmount
      commodityTypeName
      payMode
      belongOrg {
        orgId
        orgName
      }
      saleTime
    }
    belongOrg {
      orgId
      orgName
    }
    targetBelongOrg {
      orgId
      orgName
    }
    isExceptional
    netWeightExceptionRatio
  }
}
    `;

/**
 * __useOutOrderQuery__
 *
 * To run a query within a React component, call `useOutOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOutOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOutOrderQuery({
 *   variables: {
 *      outOrderInput: // value for 'outOrderInput'
 *   },
 * });
 */
export function useOutOrderQuery(baseOptions?: Apollo.QueryHookOptions<OutOrderQuery, OutOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OutOrderQuery, OutOrderQueryVariables>(OutOrderDocument, options);
      }
export function useOutOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OutOrderQuery, OutOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OutOrderQuery, OutOrderQueryVariables>(OutOrderDocument, options);
        }
export type OutOrderQueryHookResult = ReturnType<typeof useOutOrderQuery>;
export type OutOrderLazyQueryHookResult = ReturnType<typeof useOutOrderLazyQuery>;
export type OutOrderQueryResult = Apollo.QueryResult<OutOrderQuery, OutOrderQueryVariables>;
export const PageOutOrderDocument = gql`
    query pageOutOrder($page: Page, $pageOutOrderInput: PageOutOrderInput) {
  pageOutOrder(page: $page, pageOutOrderInput: $pageOutOrderInput) {
    records {
      outOrderId
      outOrderType
      outOrderTypeName
      outOrderCode
      commodityTypeId
      commodityTypeName
      customerType
      customerTypeName
      transferId
      transferType
      transferOrganizationId
      transferOrganizationName
      userId
      createUserPhone
      customerId
      customerName
      saleTime
      outOrderStatus
      outOrderStatusName
      warehouseId
      warehouseName
      createUserName
      createTime
      outOrderDescription
      errorDescription
      totalPrice
      commodityList {
        outOrderItemId
        outOrderId
        commodityId
        commodityName
        commoditySkuId
        commoditySpecOptionId
        skuTextDescription
        unitQuantity
        unitType
        unitTypeName
        totalQuantity
        totalType
        totalTypeName
        salePrice
        salePriceType
        salePriceTypeName
        maxQuantity
        planQuantity
        basketQuantity
        basketCustomerId
        basketCustomerName
        createTime
        createBy
        updateTime
        deleted
        updateBy
        waitUnitQuantity
        waitTotalQuantity
        completeOutStock
        commodityBomId
        unitTotalPrice
        damageReason
        batchId
        stockUnitPrice
        stockUnitPriceType
        stockUnitPriceTypeName
        stockTotalPrice
        photos
        realQuantity
        saleTotalPrice
        inBoundTotalQuantity
        inBoundUnitQuantity
        conversion
        outStockFinishUnitQuantity
        outStockFinishTotalQuantity
        pickingUnitQuantity
        pickingTotalQuantity
        commodityStatus
        saleOrderInfo {
          outOrderId
          saleOrderId
          saleOrderCode
        }
        unitStockQuantity
        productPickingQuantity {
          totalQuantity
          unitQuantity
        }
      }
      taskId
      taskCode
      inOrderId
      inOrderCode
      supplierId
      supplierName
      customerDistributionId
      customerDistributionName
      deliveryFee
      organizationId
      organizationName
      payMethod
      payMethodDesc
      saleOrderInfo {
        outOrderId
        saleOrderId
        saleOrderCode
      }
      saleIncomeOrder {
        incomeId
        incomeStatus
        incomeStatusName
        incomeCode
        sourceId
        sourceType
        sourceTypeName
        warehouse {
          warehouseId
          warehouseName
        }
        remark
        rejectReason
        user {
          userId
          userName
          phoneNum
        }
        customer {
          customerId
          customerName
          customerType
        }
        createTime
        commoditiesList {
          incomeItemId
          incomeId
          commoditySku {
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
          commodityName
          unitQuantity
          unitType {
            unitId
            unitName
          }
          saleMoney
          photosList
          outOrderItemId
          salePrice
          remark
          totalQuantity
          totalType {
            unitId
            unitName
          }
          batchId
          batchCode
          totalSalePrice
          priceType {
            unitId
            unitName
          }
          goodsUnitQuantity
          goodsTotalQuantity
        }
        originalSaleCommodityPayload {
          outOrderItemId
          commoditySku {
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
          batchId
          batchCode
          salePrice
          salePriceType {
            unitId
            unitName
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
          saleTotalPrice
          stockQuantity {
            unitQuantity
            totalQuantity
          }
          actualQuantity {
            actualTotalQuantity
            actualUnitQuantity
            actualSalePrice
            actualSaleTotalPrice
            outOrderItemId
          }
          outOrderId
        }
        saleCostOrderItems {
          saleCostOrderItemId
          saleCostOrderId
          outOrderItemId
          commodity {
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
          packagingFee
          materialFee
        }
        logs {
          incomeLogId
          incomeId
          type
          typeText
          remark
          createTime
          user {
            userId
            userName
            phoneNum
          }
        }
        saleCostOrderId
        functionalField {
          saleTotalPrice
          saleTotalCost
        }
        totalAmount
        commodityTypeName
        payMode
        belongOrg {
          orgId
          orgName
        }
        saleTime
      }
      belongOrg {
        orgId
        orgName
      }
      targetBelongOrg {
        orgId
        orgName
      }
      isExceptional
      matchingSource {
        carNo
        departureDate
        matchDate
        matchSource
        matchSourceName
        runCode
        trailerNo
      }
      supplier {
        supplierId
        supplierName
      }
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageOutOrderQuery__
 *
 * To run a query within a React component, call `usePageOutOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageOutOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageOutOrderQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageOutOrderInput: // value for 'pageOutOrderInput'
 *   },
 * });
 */
export function usePageOutOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageOutOrderQuery, PageOutOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageOutOrderQuery, PageOutOrderQueryVariables>(PageOutOrderDocument, options);
      }
export function usePageOutOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageOutOrderQuery, PageOutOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageOutOrderQuery, PageOutOrderQueryVariables>(PageOutOrderDocument, options);
        }
export type PageOutOrderQueryHookResult = ReturnType<typeof usePageOutOrderQuery>;
export type PageOutOrderLazyQueryHookResult = ReturnType<typeof usePageOutOrderLazyQuery>;
export type PageOutOrderQueryResult = Apollo.QueryResult<PageOutOrderQuery, PageOutOrderQueryVariables>;
export const StockOutDetailDocument = gql`
    query stockOutDetail($outOrderInput: OutOrderInput!, $countOutStockRecordInput: CountOutStockRecordInput!) {
  outOrder(outOrderInput: $outOrderInput) {
    outOrderId
    outOrderType
    outOrderTypeName
    outOrderCode
    commodityTypeId
    commodityTypeName
    customerType
    customerTypeName
    transferId
    transferType
    transferOrganizationId
    transferOrganizationName
    userId
    createUserPhone
    customerId
    customerName
    saleTime
    outOrderStatus
    outOrderStatusName
    warehouseId
    warehouseName
    createUserName
    createTime
    outOrderDescription
    errorDescription
    totalPrice
    commodityList {
      outOrderItemId
      outOrderId
      commodityId
      commodityName
      commoditySkuId
      commoditySpecOptionId
      skuTextDescription
      unitQuantity
      unitType
      unitTypeName
      totalQuantity
      totalType
      totalTypeName
      salePrice
      salePriceType
      salePriceTypeName
      maxQuantity
      planQuantity
      basketQuantity
      basketCustomerId
      basketCustomerName
      createTime
      createBy
      updateTime
      deleted
      updateBy
      waitUnitQuantity
      waitTotalQuantity
      completeOutStock
      commodityBomId
      unitTotalPrice
      damageReason
      batchId
      batchCode
      stockUnitPrice
      stockUnitPriceType
      stockUnitPriceTypeName
      stockTotalPrice
      belongCustomerName
      photos
      realQuantity
      saleTotalPrice
      inBoundTotalQuantity
      inBoundUnitQuantity
      conversion
      outStockFinishUnitQuantity
      outStockFinishTotalQuantity
      belongCustomerId
      pickingUnitQuantity
      pickingTotalQuantity
      commodityStatus
      saleOrderInfo {
        outOrderId
        saleOrderId
        saleOrderCode
      }
      unitStockQuantity
      stockQuantity {
        unitQuantity
        totalQuantity
      }
      stockQuantityWithLock {
        unitQuantity
        totalQuantity
      }
      productPickingQuantity {
        totalQuantity
        unitQuantity
      }
    }
    matchingSource {
      carNo
      departureDate
      matchDate
      matchSource
      matchSourceName
      runCode
      trailerNo
    }
    supplier {
      supplierId
      supplierName
    }
    taskId
    taskCode
    inOrderId
    inOrderCode
    customerDistributionId
    customerDistributionName
    deliveryFee
    organizationId
    organizationName
    payMethod
    payMethodDesc
    saleOrderInfo {
      outOrderId
      saleOrderId
      saleOrderCode
    }
    saleIncomeOrder {
      incomeId
      incomeStatus
      incomeStatusName
      incomeCode
      sourceId
      sourceType
      sourceTypeName
      warehouse {
        warehouseId
        warehouseName
      }
      remark
      rejectReason
      user {
        userId
        userName
        phoneNum
      }
      customer {
        customerId
        customerName
        customerType
      }
      createTime
      commoditiesList {
        incomeItemId
        incomeId
        commoditySku {
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
        commodityName
        unitQuantity
        unitType {
          unitId
          unitName
        }
        saleMoney
        photosList
        outOrderItemId
        salePrice
        remark
        totalQuantity
        totalType {
          unitId
          unitName
        }
        batchId
        batchCode
        totalSalePrice
        priceType {
          unitId
          unitName
        }
        goodsUnitQuantity
        goodsTotalQuantity
      }
      originalSaleCommodityPayload {
        outOrderItemId
        commoditySku {
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
        batchId
        batchCode
        salePrice
        salePriceType {
          unitId
          unitName
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
        saleTotalPrice
        stockQuantity {
          unitQuantity
          totalQuantity
        }
        actualQuantity {
          actualTotalQuantity
          actualUnitQuantity
          actualSalePrice
          actualSaleTotalPrice
          outOrderItemId
        }
        outOrderId
      }
      saleCostOrderItems {
        saleCostOrderItemId
        saleCostOrderId
        outOrderItemId
        commodity {
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
        packagingFee
        materialFee
      }
      logs {
        incomeLogId
        incomeId
        type
        typeText
        remark
        createTime
        user {
          userId
          userName
          phoneNum
        }
      }
      saleCostOrderId
      functionalField {
        saleTotalPrice
        saleTotalCost
      }
      totalAmount
      commodityTypeName
      payMode
      belongOrg {
        orgId
        orgName
      }
      saleTime
    }
    belongOrg {
      orgId
      orgName
    }
    targetBelongOrg {
      orgId
      orgName
    }
    isExceptional
    netWeightExceptionRatio
  }
  countOutStockRecord(countOutStockRecordInput: $countOutStockRecordInput)
}
    `;

/**
 * __useStockOutDetailQuery__
 *
 * To run a query within a React component, call `useStockOutDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockOutDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockOutDetailQuery({
 *   variables: {
 *      outOrderInput: // value for 'outOrderInput'
 *      countOutStockRecordInput: // value for 'countOutStockRecordInput'
 *   },
 * });
 */
export function useStockOutDetailQuery(baseOptions: Apollo.QueryHookOptions<StockOutDetailQuery, StockOutDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockOutDetailQuery, StockOutDetailQueryVariables>(StockOutDetailDocument, options);
      }
export function useStockOutDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockOutDetailQuery, StockOutDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockOutDetailQuery, StockOutDetailQueryVariables>(StockOutDetailDocument, options);
        }
export type StockOutDetailQueryHookResult = ReturnType<typeof useStockOutDetailQuery>;
export type StockOutDetailLazyQueryHookResult = ReturnType<typeof useStockOutDetailLazyQuery>;
export type StockOutDetailQueryResult = Apollo.QueryResult<StockOutDetailQuery, StockOutDetailQueryVariables>;
export const StockOutRecordsDocument = gql`
    query stockOutRecords($outOrderInput: OutOrderInput, $outOrderItemsInput: OutOrderItemsInput, $outStockRecordsInput: OutStockRecordsInput) {
  outOrder(outOrderInput: $outOrderInput) {
    commodityTypeId
    outOrderType
  }
  outOrderItems(outOrderItemsInput: $outOrderItemsInput) {
    outOrderItemId
    outOrderId
    commodityId
    commodityName
    commoditySkuId
    commoditySpecOptionId
    skuTextDescription
    unitQuantity
    unitType
    unitTypeName
    totalQuantity
    totalType
    totalTypeName
    salePrice
    salePriceType
    salePriceTypeName
    maxQuantity
    planQuantity
    basketQuantity
    basketCustomerId
    basketCustomerName
    createTime
    createBy
    updateTime
    deleted
    updateBy
    waitUnitQuantity
    waitTotalQuantity
    completeOutStock
    commodityBomId
    unitTotalPrice
    damageReason
    batchId
    batchCode
    stockUnitPrice
    stockUnitPriceType
    stockUnitPriceTypeName
    stockTotalPrice
    belongCustomerName
    photos
    realQuantity
    saleTotalPrice
    inBoundTotalQuantity
    inBoundUnitQuantity
    conversion
    outStockFinishUnitQuantity
    outStockFinishTotalQuantity
    belongCustomerId
    pickingUnitQuantity
    pickingTotalQuantity
    commodityStatus
    saleOrderInfo {
      outOrderId
      saleOrderId
      saleOrderCode
    }
  }
  outStockRecords(outStockRecordsInput: $outStockRecordsInput) {
    outStockRecordId
    outOrderId
    outOrderType
    commodityTypeId
    commodityTypeName
    totalPrice
    organizationId
    organizationName
    warehouseId
    warehouseName
    customerType
    customerId
    customerName
    taskCode
    createUserName
    createTime
    createBy
    outStockCode
    outOrderItemId
    outStockCode
    remark
    deliveryFee
    items {
      commodityName
      skuTextDescription
      basketQuantity
      basketCustomerName
      salePrice
      salePriceTypeName
      totalPrice
      conversion
      unitTypeName
      totalTypeName
      items {
        outStockRecordItemId
        outStockRecordId
        outOrderId
        stockBatchCode
        outOrderCode
        commodityId
        commodityName
        commoditySkuId
        skuTextDescription
        salePrice
        salePriceType
        salePriceTypeName
        totalPrice
        unitType
        unitTypeName
        unitQuantity
        totalType
        totalTypeName
        totalQuantity
        taskId
        outOrderType
        belongCustomerId
        belongCustomerName
        belongWarehouseId
        belongWarehouseName
        basketQuantity
        basketCustomerId
        basketCustomerName
      }
    }
  }
}
    `;

/**
 * __useStockOutRecordsQuery__
 *
 * To run a query within a React component, call `useStockOutRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockOutRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockOutRecordsQuery({
 *   variables: {
 *      outOrderInput: // value for 'outOrderInput'
 *      outOrderItemsInput: // value for 'outOrderItemsInput'
 *      outStockRecordsInput: // value for 'outStockRecordsInput'
 *   },
 * });
 */
export function useStockOutRecordsQuery(baseOptions?: Apollo.QueryHookOptions<StockOutRecordsQuery, StockOutRecordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockOutRecordsQuery, StockOutRecordsQueryVariables>(StockOutRecordsDocument, options);
      }
export function useStockOutRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockOutRecordsQuery, StockOutRecordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockOutRecordsQuery, StockOutRecordsQueryVariables>(StockOutRecordsDocument, options);
        }
export type StockOutRecordsQueryHookResult = ReturnType<typeof useStockOutRecordsQuery>;
export type StockOutRecordsLazyQueryHookResult = ReturnType<typeof useStockOutRecordsLazyQuery>;
export type StockOutRecordsQueryResult = Apollo.QueryResult<StockOutRecordsQuery, StockOutRecordsQueryVariables>;
export const RejectOutOrderAuditDocument = gql`
    mutation rejectOutOrderAudit($rejectOutOrderInput: RejectOutOrderInput) {
  rejectOutOrderAudit(rejectOutOrderInput: $rejectOutOrderInput)
}
    `;
export type RejectOutOrderAuditMutationFn = Apollo.MutationFunction<RejectOutOrderAuditMutation, RejectOutOrderAuditMutationVariables>;

/**
 * __useRejectOutOrderAuditMutation__
 *
 * To run a mutation, you first call `useRejectOutOrderAuditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectOutOrderAuditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectOutOrderAuditMutation, { data, loading, error }] = useRejectOutOrderAuditMutation({
 *   variables: {
 *      rejectOutOrderInput: // value for 'rejectOutOrderInput'
 *   },
 * });
 */
export function useRejectOutOrderAuditMutation(baseOptions?: Apollo.MutationHookOptions<RejectOutOrderAuditMutation, RejectOutOrderAuditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectOutOrderAuditMutation, RejectOutOrderAuditMutationVariables>(RejectOutOrderAuditDocument, options);
      }
export type RejectOutOrderAuditMutationHookResult = ReturnType<typeof useRejectOutOrderAuditMutation>;
export type RejectOutOrderAuditMutationResult = Apollo.MutationResult<RejectOutOrderAuditMutation>;
export type RejectOutOrderAuditMutationOptions = Apollo.BaseMutationOptions<RejectOutOrderAuditMutation, RejectOutOrderAuditMutationVariables>;
export const ConfirmOutOrderDocument = gql`
    mutation confirmOutOrder($confirmOutOrderInput: ConfirmOutOrderInput) {
  confirmOutOrder(confirmOutOrderInput: $confirmOutOrderInput)
}
    `;
export type ConfirmOutOrderMutationFn = Apollo.MutationFunction<ConfirmOutOrderMutation, ConfirmOutOrderMutationVariables>;

/**
 * __useConfirmOutOrderMutation__
 *
 * To run a mutation, you first call `useConfirmOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmOutOrderMutation, { data, loading, error }] = useConfirmOutOrderMutation({
 *   variables: {
 *      confirmOutOrderInput: // value for 'confirmOutOrderInput'
 *   },
 * });
 */
export function useConfirmOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmOutOrderMutation, ConfirmOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmOutOrderMutation, ConfirmOutOrderMutationVariables>(ConfirmOutOrderDocument, options);
      }
export type ConfirmOutOrderMutationHookResult = ReturnType<typeof useConfirmOutOrderMutation>;
export type ConfirmOutOrderMutationResult = Apollo.MutationResult<ConfirmOutOrderMutation>;
export type ConfirmOutOrderMutationOptions = Apollo.BaseMutationOptions<ConfirmOutOrderMutation, ConfirmOutOrderMutationVariables>;
export const StockBatchesDocument = gql`
    query stockBatches($stockBatchQueryInput: StockBatchQueryInput) {
  stockBatches(stockBatchQueryInput: $stockBatchQueryInput) {
    batchId
    batchCode
    unitQuantity
    totalQuantity
    unitTypeName
    totalTypeName
    unitType
    totalType
    createTime
    conversion
  }
}
    `;

/**
 * __useStockBatchesQuery__
 *
 * To run a query within a React component, call `useStockBatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockBatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockBatchesQuery({
 *   variables: {
 *      stockBatchQueryInput: // value for 'stockBatchQueryInput'
 *   },
 * });
 */
export function useStockBatchesQuery(baseOptions?: Apollo.QueryHookOptions<StockBatchesQuery, StockBatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockBatchesQuery, StockBatchesQueryVariables>(StockBatchesDocument, options);
      }
export function useStockBatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockBatchesQuery, StockBatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockBatchesQuery, StockBatchesQueryVariables>(StockBatchesDocument, options);
        }
export type StockBatchesQueryHookResult = ReturnType<typeof useStockBatchesQuery>;
export type StockBatchesLazyQueryHookResult = ReturnType<typeof useStockBatchesLazyQuery>;
export type StockBatchesQueryResult = Apollo.QueryResult<StockBatchesQuery, StockBatchesQueryVariables>;
export const FinishOutOrderDocument = gql`
    mutation finishOutOrder($finishOutOrderInput: FinishOutOrderInput) {
  finishOutOrder(finishOutOrderInput: $finishOutOrderInput)
}
    `;
export type FinishOutOrderMutationFn = Apollo.MutationFunction<FinishOutOrderMutation, FinishOutOrderMutationVariables>;

/**
 * __useFinishOutOrderMutation__
 *
 * To run a mutation, you first call `useFinishOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFinishOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [finishOutOrderMutation, { data, loading, error }] = useFinishOutOrderMutation({
 *   variables: {
 *      finishOutOrderInput: // value for 'finishOutOrderInput'
 *   },
 * });
 */
export function useFinishOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<FinishOutOrderMutation, FinishOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FinishOutOrderMutation, FinishOutOrderMutationVariables>(FinishOutOrderDocument, options);
      }
export type FinishOutOrderMutationHookResult = ReturnType<typeof useFinishOutOrderMutation>;
export type FinishOutOrderMutationResult = Apollo.MutationResult<FinishOutOrderMutation>;
export type FinishOutOrderMutationOptions = Apollo.BaseMutationOptions<FinishOutOrderMutation, FinishOutOrderMutationVariables>;
export const OtherOutOrderDetailDocument = gql`
    query otherOutOrderDetail($input: OtherOutOrderDetailInput) {
  otherOutOrderDetail(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    createBy {
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
    supplier {
      supplierId
      supplierName
    }
    warehouse {
      warehouseId
      warehouseName
    }
    wmsMarkList {
      appId
      businessType
      labelContent
      markId
      tenantId
    }
    billId
    commodityList {
      commoditySku {
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
        commodityId
        commodityName
        commoditySkuId
        commoditySkuName
        commoditySpecOptionId
        commoditySpecOptionName
        conversion
      }
      priceType {
        unitId
        unitName
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
        totalQuantity
        unitQuantity
      }
      totalType {
        unitId
        unitName
      }
      unitType {
        unitId
        unitName
      }
      inBoundTotalQuantity
      inBoundUnitQuantity
      outOrderId
      outOrderItemId
      salePrice
      totalQuantity
      unitQuantity
      unitTotalPrice
    }
    commodityTypeId
    commodityTypeName
    createTime
    errorDescription
    outOrderCode
    outOrderDescription
    outOrderId
    outOrderStatus
    outOrderStatusName
    outOrderType
    outOrderTypeName
    outStockRecordCount
  }
}
    `;

/**
 * __useOtherOutOrderDetailQuery__
 *
 * To run a query within a React component, call `useOtherOutOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useOtherOutOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOtherOutOrderDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOtherOutOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<OtherOutOrderDetailQuery, OtherOutOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OtherOutOrderDetailQuery, OtherOutOrderDetailQueryVariables>(OtherOutOrderDetailDocument, options);
      }
export function useOtherOutOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OtherOutOrderDetailQuery, OtherOutOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OtherOutOrderDetailQuery, OtherOutOrderDetailQueryVariables>(OtherOutOrderDetailDocument, options);
        }
export type OtherOutOrderDetailQueryHookResult = ReturnType<typeof useOtherOutOrderDetailQuery>;
export type OtherOutOrderDetailLazyQueryHookResult = ReturnType<typeof useOtherOutOrderDetailLazyQuery>;
export type OtherOutOrderDetailQueryResult = Apollo.QueryResult<OtherOutOrderDetailQuery, OtherOutOrderDetailQueryVariables>;
export const CancelOtherOutOrderDocument = gql`
    mutation cancelOtherOutOrder($input: CancelOtherOutOrderInput) {
  cancelOtherOutOrder(input: $input)
}
    `;
export type CancelOtherOutOrderMutationFn = Apollo.MutationFunction<CancelOtherOutOrderMutation, CancelOtherOutOrderMutationVariables>;

/**
 * __useCancelOtherOutOrderMutation__
 *
 * To run a mutation, you first call `useCancelOtherOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelOtherOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelOtherOutOrderMutation, { data, loading, error }] = useCancelOtherOutOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelOtherOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelOtherOutOrderMutation, CancelOtherOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelOtherOutOrderMutation, CancelOtherOutOrderMutationVariables>(CancelOtherOutOrderDocument, options);
      }
export type CancelOtherOutOrderMutationHookResult = ReturnType<typeof useCancelOtherOutOrderMutation>;
export type CancelOtherOutOrderMutationResult = Apollo.MutationResult<CancelOtherOutOrderMutation>;
export type CancelOtherOutOrderMutationOptions = Apollo.BaseMutationOptions<CancelOtherOutOrderMutation, CancelOtherOutOrderMutationVariables>;
export const SubmitOtherOutOrderDocument = gql`
    mutation submitOtherOutOrder($input: SubmitOtherOutOrderInput) {
  submitOtherOutOrder(input: $input)
}
    `;
export type SubmitOtherOutOrderMutationFn = Apollo.MutationFunction<SubmitOtherOutOrderMutation, SubmitOtherOutOrderMutationVariables>;

/**
 * __useSubmitOtherOutOrderMutation__
 *
 * To run a mutation, you first call `useSubmitOtherOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitOtherOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitOtherOutOrderMutation, { data, loading, error }] = useSubmitOtherOutOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitOtherOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitOtherOutOrderMutation, SubmitOtherOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitOtherOutOrderMutation, SubmitOtherOutOrderMutationVariables>(SubmitOtherOutOrderDocument, options);
      }
export type SubmitOtherOutOrderMutationHookResult = ReturnType<typeof useSubmitOtherOutOrderMutation>;
export type SubmitOtherOutOrderMutationResult = Apollo.MutationResult<SubmitOtherOutOrderMutation>;
export type SubmitOtherOutOrderMutationOptions = Apollo.BaseMutationOptions<SubmitOtherOutOrderMutation, SubmitOtherOutOrderMutationVariables>;