import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageAgencyTradeTransferBillQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageAgencyTradeTransferBillInput?: SchemaTypes.InputMaybe<SchemaTypes.PageAgencyTradeTransferBillInput>;
}>;


export type PageAgencyTradeTransferBillQuery = { pageAgencyTradeTransferBill?: { __typename?: 'PageAgencyTradeTransferBillPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'AgencyTradeTransferBillPayload', agencyTradeTransferAuditTime?: number, billId?: string, billStatus?: number, billStatusName?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, flowCode?: string, flowId?: string, flowStatus?: number, flowStatusName?: string, flowType?: number, flowTypeName?: string, remark?: string, sourceAppId?: number, sourceId?: string, targetAppId?: number, refuseNote?: string, consignmentOrderCode?: string, agencyTradeTransferAuditBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, agencyTradeTransferBillCommodity?: { __typename?: 'AgencyTradeTransferBillCommodity', billCode?: string, remark?: string, totalAmount?: number, billPaymentFeeItemList?: Array<{ __typename?: 'BillPaymentFeeItem', amount?: number, costUnitPrice?: number, unitPrice?: number, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, quantity?: number, sourceBatchCode?: string, sourceBatchId?: string, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }> }, agencyTradeTransferOtherBill?: { __typename?: 'AgencyTradeTransferOtherBill', billCode?: string, totalAmount?: number, agencyTradeTransferOtherItemBill?: Array<{ __typename?: 'AgencyTradeTransferOtherItemBill', amount?: number, billFreightItemId?: string, billFreightType?: number, billFrightTypeName?: string, brand?: string, freightAttribute?: number, payMode?: SchemaTypes.PayModeEnum, payModeName?: string, phone?: string, remark?: string, paymentType?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, billAuditBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, sourceBelongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, sourceOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, sourceWarehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, targetBelongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, targetOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, targetWarehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, sourceBill?: { __typename?: 'Bill1DataPayload', billId?: string, billSource?: SchemaTypes.PitayaBillSourceEnum, billSourceDesc?: string, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusDesc?: string, businessId?: string, createTime?: number, refuseNote?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, billFreightResp?: { __typename?: 'BillFreightRespPayload', billCode?: string, billItemId?: number, totalAmount?: number, callInsList?: Array<{ __typename?: 'BillFreightItemRespPayload', amount?: number, billFreightItemId?: number, billFreightType?: number, billFrightTypeName?: string, brand?: string, freightAttribute?: number, launchLink?: number, launchOrg?: number, payMode?: SchemaTypes.PayModeEnum, payModeName?: string, paymentType?: number, phone?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, billOperationLogPayload?: Array<{ __typename?: 'BillOperationLogPayload', createTime?: number, endStatus?: SchemaTypes.PitayaBillStatusEnum, endStatusDesc?: string, note?: string, startStatus?: SchemaTypes.PitayaBillStatusEnum, startStatusDesc?: string, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, billPaymentResp?: { __typename?: 'Bill1PaymentPayload', billCode?: string, billNote?: string, totalAmount?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, billPaymentFeeItemRespsList?: Array<{ __typename?: 'Bill1PaymentFeeItemPayload', amount?: number, costUnitPrice?: number, grossUnitQuantity?: number, itemId?: string, quantity?: number, sourceBatchId?: string, stockType?: number, unitPrice?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, quantity?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, businessInfo?: { __typename?: 'BusinessInfoPayload', domesticCollectiveProcurementReturnsAndLoss?: { __typename?: 'DomesticCollectiveProcurementReturnsAndLoss', businessType?: number, businessTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, domesticCollectiveCode?: string, note?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, commodities?: Array<{ __typename?: 'DomesticCollectiveProcurementLossCommodityPayload', commoditySkuId?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, internalConsignmentSaleAndPurchase?: { __typename?: 'InternalConsignmentSaleAndPurchase', businessType?: number, businessTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, internalConsignmentCode?: string, note?: string, purchaseDate?: number, saleDate?: number, subType?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, purchaser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, internalPurchaseAndSaleReturn?: { __typename?: 'InternalPurchaseAndSaleReturn', code?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, exrOrderSubTypeName?: string, extOrderSubType?: SchemaTypes.ExtendOrderSubTypeEnum, extOrderType?: SchemaTypes.ExpandOrderTypeEnum, extOrderTypeName?: string, note?: string, returnWay?: SchemaTypes.SaleReturnWayEnum, returnWayDesc?: string, waitConfirmFlag?: boolean, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, otherIn?: { __typename?: 'OtherInBillExtendInfo', commodityType?: number, commodityTypeName?: string, inOrderCode?: string, inOrderTypeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> }, otherOutInfo?: { __typename?: 'OtherOutInfo', commodityType?: number, commodityTypeName?: string, orderCode?: string, orderTypeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> }, selfPurchase?: { __typename?: 'SelfPurchaseInfo', businessCode?: string, commodityType?: number, commodityTypeName?: string, purchaseTime?: number } }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number } } }> } };

export type GetAgencyTradeTransferBillQueryVariables = SchemaTypes.Exact<{
  getAgencyTradeTransferBillInput?: SchemaTypes.InputMaybe<SchemaTypes.GetAgencyTradeTransferBillInput>;
}>;


export type GetAgencyTradeTransferBillQuery = { getAgencyTradeTransferBill?: { __typename?: 'AgencyTradeTransferBillPayload', agencyTradeTransferAuditTime?: number, billId?: string, billStatus?: number, billStatusName?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, flowCode?: string, flowId?: string, flowStatus?: number, flowStatusName?: string, flowType?: number, flowTypeName?: string, remark?: string, sourceAppId?: number, sourceId?: string, targetAppId?: number, refuseNote?: string, consignmentOrderCode?: string, agencyTradeTransferAuditBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, agencyTradeTransferBillCommodity?: { __typename?: 'AgencyTradeTransferBillCommodity', billCode?: string, remark?: string, totalAmount?: number, billPaymentFeeItemList?: Array<{ __typename?: 'BillPaymentFeeItem', amount?: number, costUnitPrice?: number, unitPrice?: number, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, quantity?: number, sourceBatchCode?: string, sourceBatchId?: string, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }> }, agencyTradeTransferOtherBill?: { __typename?: 'AgencyTradeTransferOtherBill', billCode?: string, totalAmount?: number, agencyTradeTransferOtherItemBill?: Array<{ __typename?: 'AgencyTradeTransferOtherItemBill', amount?: number, billFreightItemId?: string, billFreightType?: number, billFrightTypeName?: string, brand?: string, freightAttribute?: number, payMode?: SchemaTypes.PayModeEnum, payModeName?: string, phone?: string, remark?: string, paymentType?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, billAuditBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, sourceBelongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, sourceOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, sourceWarehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, targetBelongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, targetOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, targetWarehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, sourceBill?: { __typename?: 'Bill1DataPayload', billId?: string, billSource?: SchemaTypes.PitayaBillSourceEnum, billSourceDesc?: string, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusDesc?: string, businessId?: string, createTime?: number, refuseNote?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, billFreightResp?: { __typename?: 'BillFreightRespPayload', billCode?: string, billItemId?: number, totalAmount?: number, callInsList?: Array<{ __typename?: 'BillFreightItemRespPayload', amount?: number, billFreightItemId?: number, billFreightType?: number, freightAttribute?: number, launchLink?: number, launchOrg?: number, payMode?: SchemaTypes.PayModeEnum, paymentType?: number, phone?: string, billFrightTypeName?: string, brand?: string, payModeName?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, billOperationLogPayload?: Array<{ __typename?: 'BillOperationLogPayload', createTime?: number, endStatus?: SchemaTypes.PitayaBillStatusEnum, endStatusDesc?: string, note?: string, startStatus?: SchemaTypes.PitayaBillStatusEnum, startStatusDesc?: string, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, billPaymentResp?: { __typename?: 'Bill1PaymentPayload', billCode?: string, billNote?: string, totalAmount?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, billPaymentFeeItemRespsList?: Array<{ __typename?: 'Bill1PaymentFeeItemPayload', amount?: number, costUnitPrice?: number, grossUnitQuantity?: number, itemId?: string, sourceBatchId?: string, stockType?: number, unitPrice?: number, quantity?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, quantity?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, businessInfo?: { __typename?: 'BusinessInfoPayload', domesticCollectiveProcurementReturnsAndLoss?: { __typename?: 'DomesticCollectiveProcurementReturnsAndLoss', businessType?: number, businessTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, domesticCollectiveCode?: string, note?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, commodities?: Array<{ __typename?: 'DomesticCollectiveProcurementLossCommodityPayload', commoditySkuId?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, internalConsignmentSaleAndPurchase?: { __typename?: 'InternalConsignmentSaleAndPurchase', businessType?: number, businessTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, internalConsignmentCode?: string, note?: string, purchaseDate?: number, saleDate?: number, subType?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, purchaser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, internalPurchaseAndSaleReturn?: { __typename?: 'InternalPurchaseAndSaleReturn', code?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, exrOrderSubTypeName?: string, extOrderSubType?: SchemaTypes.ExtendOrderSubTypeEnum, extOrderType?: SchemaTypes.ExpandOrderTypeEnum, extOrderTypeName?: string, note?: string, waitConfirmFlag?: boolean, returnWay?: SchemaTypes.SaleReturnWayEnum, returnWayDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, otherIn?: { __typename?: 'OtherInBillExtendInfo', commodityType?: number, commodityTypeName?: string, inOrderCode?: string, inOrderTypeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> }, otherOutInfo?: { __typename?: 'OtherOutInfo', commodityType?: number, commodityTypeName?: string, orderCode?: string, orderTypeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> }, selfPurchase?: { __typename?: 'SelfPurchaseInfo', businessCode?: string, commodityType?: number, commodityTypeName?: string, purchaseTime?: number } }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number } } } };

export type AuditAgencyTradeTransferBillMutationVariables = SchemaTypes.Exact<{
  auditAgencyTradeTransferBillInput?: SchemaTypes.InputMaybe<SchemaTypes.AuditAgencyTradeTransferBillInput>;
}>;


export type AuditAgencyTradeTransferBillMutation = { auditAgencyTradeTransferBill?: string };

export type RejectAgencyTradeTransferBillMutationVariables = SchemaTypes.Exact<{
  rejectAgencyTradeTransferBillInput?: SchemaTypes.InputMaybe<SchemaTypes.RejectAgencyTradeTransferBillInput>;
}>;


export type RejectAgencyTradeTransferBillMutation = { rejectAgencyTradeTransferBill?: string };

export type UpdateAgencyTradeTransferOtherBillMutationVariables = SchemaTypes.Exact<{
  updateAgencyTradeTransferOtherBillInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateAgencyTradeTransferOtherBillInput>;
}>;


export type UpdateAgencyTradeTransferOtherBillMutation = { updateAgencyTradeTransferOtherBill?: string };

export type TransferBillCountStatisticQueryVariables = SchemaTypes.Exact<{
  transferBillCountStatisticInput?: SchemaTypes.InputMaybe<SchemaTypes.TransferBillCountStatisticInput>;
}>;


export type TransferBillCountStatisticQuery = { transferBillCountStatistic?: { __typename?: 'TransferBillCountStatisticPayload', agencyTradeBillCount?: { __typename?: 'AgencyTradeBillCount', toAudit?: number, toSubmit?: number }, transferBillCount?: { __typename?: 'TransferBillCount', toAudit?: number, toSubmit?: number } } };


export const PageAgencyTradeTransferBillDocument = gql`
    query pageAgencyTradeTransferBill($page: Page, $pageAgencyTradeTransferBillInput: PageAgencyTradeTransferBillInput) {
  pageAgencyTradeTransferBill(
    page: $page
    pageAgencyTradeTransferBillInput: $pageAgencyTradeTransferBillInput
  ) {
    pageCurrent
    pageSize
    records {
      agencyTradeTransferAuditBy {
        phoneNum
        userId
        userName
      }
      agencyTradeTransferAuditTime
      agencyTradeTransferBillCommodity {
        billCode
        billPaymentFeeItemList {
          amount
          batch {
            batchCode
            batchId
            unit {
              unitId
              unitName
            }
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
          costUnitPrice
          customer {
            customerId
            customerName
            customerType
            lastLevelId
            lastLevelName
          }
          unitPrice
          dynamicQuantity {
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
        }
        remark
        totalAmount
      }
      agencyTradeTransferOtherBill {
        agencyTradeTransferOtherItemBill {
          amount
          billFreightItemId
          billFreightType
          billFrightTypeName
          brand
          freightAttribute
          payMode
          payModeName
          phone
          remark
          supplier {
            supplierId
            supplierName
          }
          paymentType
        }
        billCode
        totalAmount
      }
      billAuditBy {
        phoneNum
        userId
        userName
      }
      billId
      billStatus
      billStatusName
      commodityType
      commodityTypeName
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      flowCode
      flowId
      flowStatus
      flowStatusName
      flowType
      flowTypeName
      remark
      sourceAppId
      sourceBelongOrg {
        orgId
        orgName
      }
      sourceId
      sourceOrg {
        orgId
        orgName
      }
      sourceWarehouse {
        warehouseId
        warehouseName
      }
      targetAppId
      targetBelongOrg {
        orgId
        orgName
      }
      targetOrg {
        orgId
        orgName
      }
      targetWarehouse {
        warehouseId
        warehouseName
      }
      refuseNote
      consignmentOrderCode
      sourceBill {
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
        billFreightResp {
          billCode
          billItemId
          callInsList {
            supplier {
              supplierId
              supplierName
            }
            amount
            billFreightItemId
            billFreightType
            billFrightTypeName
            brand
            freightAttribute
            launchLink
            launchOrg
            payMode
            payModeName
            paymentType
            phone
            remark
          }
          totalAmount
        }
        billId
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
        billPaymentResp {
          supplier {
            supplierId
            supplierName
          }
          billCode
          billNote
          billPaymentFeeItemRespsList {
            batchInfo {
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
              warehouse {
                warehouseId
                warehouseName
              }
              batchCode
              batchId
              commodityTypeId
              commodityTypeName
              createTime
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
              categoryId
              categoryName
              commodityId
              commodityName
              commoditySkuId
              commoditySkuName
              commoditySpecOptionId
              commoditySpecOptionName
            }
            unit {
              unitId
              unitName
            }
            amount
            costUnitPrice
            grossUnitQuantity
            itemId
            quantity
            sourceBatchId
            stockType
            unitPrice
          }
          totalAmount
        }
        billSource
        billSourceDesc
        billStatus
        billStatusDesc
        businessId
        businessInfo {
          domesticCollectiveProcurementReturnsAndLoss {
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
            businessType
            businessTypeName
            commodities {
              totalType {
                unitId
                unitName
              }
              unitType {
                unitId
                unitName
              }
              commoditySkuId
            }
            commodityTypeId
            commodityTypeName
            createTime
            domesticCollectiveCode
            note
          }
          internalConsignmentSaleAndPurchase {
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
            purchaser {
              phoneNum
              userId
              userName
            }
            supplier {
              supplierId
              supplierName
            }
            warehouse {
              warehouseId
              warehouseName
            }
            businessType
            businessTypeName
            commodityTypeId
            commodityTypeName
            internalConsignmentCode
            note
            purchaseDate
            saleDate
            subType
          }
          internalPurchaseAndSaleReturn {
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
            code
            commodityType
            commodityTypeName
            createTime
            exrOrderSubTypeName
            extOrderSubType
            extOrderType
            extOrderTypeName
            note
            returnWay
            returnWayDesc
            waitConfirmFlag
          }
          otherIn {
            supplier {
              supplierId
              supplierName
            }
            wmsMarkList {
              appId
              businessType
              labelContent
              markId
              tenantId
            }
            commodityType
            commodityTypeName
            inOrderCode
            inOrderTypeDesc
            remark
          }
          otherOutInfo {
            supplier {
              supplierId
              supplierName
            }
            wmsMarkList {
              appId
              businessType
              labelContent
              markId
              tenantId
            }
            commodityType
            commodityTypeName
            orderCode
            orderTypeDesc
            remark
          }
          selfPurchase {
            businessCode
            commodityType
            commodityTypeName
            purchaseTime
          }
        }
        createTime
        refuseNote
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
    totalRecords
  }
}
    `;

/**
 * __usePageAgencyTradeTransferBillQuery__
 *
 * To run a query within a React component, call `usePageAgencyTradeTransferBillQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageAgencyTradeTransferBillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageAgencyTradeTransferBillQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageAgencyTradeTransferBillInput: // value for 'pageAgencyTradeTransferBillInput'
 *   },
 * });
 */
export function usePageAgencyTradeTransferBillQuery(baseOptions?: Apollo.QueryHookOptions<PageAgencyTradeTransferBillQuery, PageAgencyTradeTransferBillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageAgencyTradeTransferBillQuery, PageAgencyTradeTransferBillQueryVariables>(PageAgencyTradeTransferBillDocument, options);
      }
export function usePageAgencyTradeTransferBillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageAgencyTradeTransferBillQuery, PageAgencyTradeTransferBillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageAgencyTradeTransferBillQuery, PageAgencyTradeTransferBillQueryVariables>(PageAgencyTradeTransferBillDocument, options);
        }
export type PageAgencyTradeTransferBillQueryHookResult = ReturnType<typeof usePageAgencyTradeTransferBillQuery>;
export type PageAgencyTradeTransferBillLazyQueryHookResult = ReturnType<typeof usePageAgencyTradeTransferBillLazyQuery>;
export type PageAgencyTradeTransferBillQueryResult = Apollo.QueryResult<PageAgencyTradeTransferBillQuery, PageAgencyTradeTransferBillQueryVariables>;
export const GetAgencyTradeTransferBillDocument = gql`
    query getAgencyTradeTransferBill($getAgencyTradeTransferBillInput: GetAgencyTradeTransferBillInput) {
  getAgencyTradeTransferBill(
    getAgencyTradeTransferBillInput: $getAgencyTradeTransferBillInput
  ) {
    agencyTradeTransferAuditBy {
      phoneNum
      userId
      userName
    }
    agencyTradeTransferAuditTime
    agencyTradeTransferBillCommodity {
      billCode
      billPaymentFeeItemList {
        amount
        batch {
          batchCode
          batchId
          unit {
            unitId
            unitName
          }
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
        costUnitPrice
        customer {
          customerId
          customerName
          customerType
          lastLevelId
          lastLevelName
        }
        unitPrice
        dynamicQuantity {
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
      }
      remark
      totalAmount
    }
    agencyTradeTransferOtherBill {
      agencyTradeTransferOtherItemBill {
        amount
        billFreightItemId
        billFreightType
        billFrightTypeName
        brand
        freightAttribute
        payMode
        payModeName
        phone
        remark
        supplier {
          supplierId
          supplierName
        }
        paymentType
      }
      billCode
      totalAmount
    }
    billAuditBy {
      phoneNum
      userId
      userName
    }
    billId
    billStatus
    billStatusName
    commodityType
    commodityTypeName
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    flowCode
    flowId
    flowStatus
    flowStatusName
    flowType
    flowTypeName
    remark
    sourceAppId
    sourceBelongOrg {
      orgId
      orgName
    }
    sourceId
    sourceOrg {
      orgId
      orgName
    }
    sourceWarehouse {
      warehouseId
      warehouseName
    }
    targetAppId
    targetBelongOrg {
      orgId
      orgName
    }
    targetOrg {
      orgId
      orgName
    }
    targetWarehouse {
      warehouseId
      warehouseName
    }
    refuseNote
    consignmentOrderCode
    sourceBill {
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
      billFreightResp {
        billCode
        billItemId
        callInsList {
          amount
          billFreightItemId
          billFreightType
          freightAttribute
          launchLink
          launchOrg
          payMode
          paymentType
          phone
          supplier {
            supplierId
            supplierName
          }
          billFrightTypeName
          brand
          payModeName
          remark
        }
        totalAmount
      }
      billId
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
      billPaymentResp {
        supplier {
          supplierId
          supplierName
        }
        billCode
        billNote
        billPaymentFeeItemRespsList {
          batchInfo {
            customer {
              customerId
              customerName
              customerType
              lastLevelId
              lastLevelName
            }
            warehouse {
              warehouseId
              warehouseName
            }
            batchCode
            batchId
            commodityTypeId
            commodityTypeName
            createTime
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
          amount
          costUnitPrice
          grossUnitQuantity
          itemId
          sourceBatchId
          stockType
          unitPrice
          unit {
            unitId
            unitName
          }
          quantity
        }
        totalAmount
      }
      billSource
      billSourceDesc
      billStatus
      billStatusDesc
      businessId
      businessInfo {
        domesticCollectiveProcurementReturnsAndLoss {
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
          businessType
          businessTypeName
          commodities {
            totalType {
              unitId
              unitName
            }
            unitType {
              unitId
              unitName
            }
            commoditySkuId
          }
          commodityTypeId
          commodityTypeName
          createTime
          domesticCollectiveCode
          note
        }
        internalConsignmentSaleAndPurchase {
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
          purchaser {
            phoneNum
            userId
            userName
          }
          supplier {
            supplierId
            supplierName
          }
          warehouse {
            warehouseId
            warehouseName
          }
          businessType
          businessTypeName
          commodityTypeId
          commodityTypeName
          internalConsignmentCode
          note
          purchaseDate
          saleDate
          subType
        }
        internalPurchaseAndSaleReturn {
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
          code
          commodityType
          commodityTypeName
          createTime
          exrOrderSubTypeName
          extOrderSubType
          extOrderType
          extOrderTypeName
          note
          waitConfirmFlag
          returnWay
          returnWayDesc
        }
        otherIn {
          supplier {
            supplierId
            supplierName
          }
          wmsMarkList {
            appId
            businessType
            labelContent
            markId
            tenantId
          }
          commodityType
          commodityTypeName
          inOrderCode
          inOrderTypeDesc
          remark
        }
        otherOutInfo {
          supplier {
            supplierId
            supplierName
          }
          wmsMarkList {
            appId
            businessType
            labelContent
            markId
            tenantId
          }
          commodityType
          commodityTypeName
          orderCode
          orderTypeDesc
          remark
        }
        selfPurchase {
          businessCode
          commodityType
          commodityTypeName
          purchaseTime
        }
      }
      createTime
      refuseNote
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
}
    `;

/**
 * __useGetAgencyTradeTransferBillQuery__
 *
 * To run a query within a React component, call `useGetAgencyTradeTransferBillQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAgencyTradeTransferBillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAgencyTradeTransferBillQuery({
 *   variables: {
 *      getAgencyTradeTransferBillInput: // value for 'getAgencyTradeTransferBillInput'
 *   },
 * });
 */
export function useGetAgencyTradeTransferBillQuery(baseOptions?: Apollo.QueryHookOptions<GetAgencyTradeTransferBillQuery, GetAgencyTradeTransferBillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAgencyTradeTransferBillQuery, GetAgencyTradeTransferBillQueryVariables>(GetAgencyTradeTransferBillDocument, options);
      }
export function useGetAgencyTradeTransferBillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAgencyTradeTransferBillQuery, GetAgencyTradeTransferBillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAgencyTradeTransferBillQuery, GetAgencyTradeTransferBillQueryVariables>(GetAgencyTradeTransferBillDocument, options);
        }
export type GetAgencyTradeTransferBillQueryHookResult = ReturnType<typeof useGetAgencyTradeTransferBillQuery>;
export type GetAgencyTradeTransferBillLazyQueryHookResult = ReturnType<typeof useGetAgencyTradeTransferBillLazyQuery>;
export type GetAgencyTradeTransferBillQueryResult = Apollo.QueryResult<GetAgencyTradeTransferBillQuery, GetAgencyTradeTransferBillQueryVariables>;
export const AuditAgencyTradeTransferBillDocument = gql`
    mutation auditAgencyTradeTransferBill($auditAgencyTradeTransferBillInput: AuditAgencyTradeTransferBillInput) {
  auditAgencyTradeTransferBill(
    auditAgencyTradeTransferBillInput: $auditAgencyTradeTransferBillInput
  )
}
    `;
export type AuditAgencyTradeTransferBillMutationFn = Apollo.MutationFunction<AuditAgencyTradeTransferBillMutation, AuditAgencyTradeTransferBillMutationVariables>;

/**
 * __useAuditAgencyTradeTransferBillMutation__
 *
 * To run a mutation, you first call `useAuditAgencyTradeTransferBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuditAgencyTradeTransferBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [auditAgencyTradeTransferBillMutation, { data, loading, error }] = useAuditAgencyTradeTransferBillMutation({
 *   variables: {
 *      auditAgencyTradeTransferBillInput: // value for 'auditAgencyTradeTransferBillInput'
 *   },
 * });
 */
export function useAuditAgencyTradeTransferBillMutation(baseOptions?: Apollo.MutationHookOptions<AuditAgencyTradeTransferBillMutation, AuditAgencyTradeTransferBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuditAgencyTradeTransferBillMutation, AuditAgencyTradeTransferBillMutationVariables>(AuditAgencyTradeTransferBillDocument, options);
      }
export type AuditAgencyTradeTransferBillMutationHookResult = ReturnType<typeof useAuditAgencyTradeTransferBillMutation>;
export type AuditAgencyTradeTransferBillMutationResult = Apollo.MutationResult<AuditAgencyTradeTransferBillMutation>;
export type AuditAgencyTradeTransferBillMutationOptions = Apollo.BaseMutationOptions<AuditAgencyTradeTransferBillMutation, AuditAgencyTradeTransferBillMutationVariables>;
export const RejectAgencyTradeTransferBillDocument = gql`
    mutation rejectAgencyTradeTransferBill($rejectAgencyTradeTransferBillInput: RejectAgencyTradeTransferBillInput) {
  rejectAgencyTradeTransferBill(
    rejectAgencyTradeTransferBillInput: $rejectAgencyTradeTransferBillInput
  )
}
    `;
export type RejectAgencyTradeTransferBillMutationFn = Apollo.MutationFunction<RejectAgencyTradeTransferBillMutation, RejectAgencyTradeTransferBillMutationVariables>;

/**
 * __useRejectAgencyTradeTransferBillMutation__
 *
 * To run a mutation, you first call `useRejectAgencyTradeTransferBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectAgencyTradeTransferBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectAgencyTradeTransferBillMutation, { data, loading, error }] = useRejectAgencyTradeTransferBillMutation({
 *   variables: {
 *      rejectAgencyTradeTransferBillInput: // value for 'rejectAgencyTradeTransferBillInput'
 *   },
 * });
 */
export function useRejectAgencyTradeTransferBillMutation(baseOptions?: Apollo.MutationHookOptions<RejectAgencyTradeTransferBillMutation, RejectAgencyTradeTransferBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectAgencyTradeTransferBillMutation, RejectAgencyTradeTransferBillMutationVariables>(RejectAgencyTradeTransferBillDocument, options);
      }
export type RejectAgencyTradeTransferBillMutationHookResult = ReturnType<typeof useRejectAgencyTradeTransferBillMutation>;
export type RejectAgencyTradeTransferBillMutationResult = Apollo.MutationResult<RejectAgencyTradeTransferBillMutation>;
export type RejectAgencyTradeTransferBillMutationOptions = Apollo.BaseMutationOptions<RejectAgencyTradeTransferBillMutation, RejectAgencyTradeTransferBillMutationVariables>;
export const UpdateAgencyTradeTransferOtherBillDocument = gql`
    mutation updateAgencyTradeTransferOtherBill($updateAgencyTradeTransferOtherBillInput: UpdateAgencyTradeTransferOtherBillInput) {
  updateAgencyTradeTransferOtherBill(
    updateAgencyTradeTransferOtherBillInput: $updateAgencyTradeTransferOtherBillInput
  )
}
    `;
export type UpdateAgencyTradeTransferOtherBillMutationFn = Apollo.MutationFunction<UpdateAgencyTradeTransferOtherBillMutation, UpdateAgencyTradeTransferOtherBillMutationVariables>;

/**
 * __useUpdateAgencyTradeTransferOtherBillMutation__
 *
 * To run a mutation, you first call `useUpdateAgencyTradeTransferOtherBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAgencyTradeTransferOtherBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAgencyTradeTransferOtherBillMutation, { data, loading, error }] = useUpdateAgencyTradeTransferOtherBillMutation({
 *   variables: {
 *      updateAgencyTradeTransferOtherBillInput: // value for 'updateAgencyTradeTransferOtherBillInput'
 *   },
 * });
 */
export function useUpdateAgencyTradeTransferOtherBillMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAgencyTradeTransferOtherBillMutation, UpdateAgencyTradeTransferOtherBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAgencyTradeTransferOtherBillMutation, UpdateAgencyTradeTransferOtherBillMutationVariables>(UpdateAgencyTradeTransferOtherBillDocument, options);
      }
export type UpdateAgencyTradeTransferOtherBillMutationHookResult = ReturnType<typeof useUpdateAgencyTradeTransferOtherBillMutation>;
export type UpdateAgencyTradeTransferOtherBillMutationResult = Apollo.MutationResult<UpdateAgencyTradeTransferOtherBillMutation>;
export type UpdateAgencyTradeTransferOtherBillMutationOptions = Apollo.BaseMutationOptions<UpdateAgencyTradeTransferOtherBillMutation, UpdateAgencyTradeTransferOtherBillMutationVariables>;
export const TransferBillCountStatisticDocument = gql`
    query transferBillCountStatistic($transferBillCountStatisticInput: TransferBillCountStatisticInput) {
  transferBillCountStatistic(
    transferBillCountStatisticInput: $transferBillCountStatisticInput
  ) {
    agencyTradeBillCount {
      toAudit
      toSubmit
    }
    transferBillCount {
      toAudit
      toSubmit
    }
  }
}
    `;

/**
 * __useTransferBillCountStatisticQuery__
 *
 * To run a query within a React component, call `useTransferBillCountStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransferBillCountStatisticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransferBillCountStatisticQuery({
 *   variables: {
 *      transferBillCountStatisticInput: // value for 'transferBillCountStatisticInput'
 *   },
 * });
 */
export function useTransferBillCountStatisticQuery(baseOptions?: Apollo.QueryHookOptions<TransferBillCountStatisticQuery, TransferBillCountStatisticQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransferBillCountStatisticQuery, TransferBillCountStatisticQueryVariables>(TransferBillCountStatisticDocument, options);
      }
export function useTransferBillCountStatisticLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransferBillCountStatisticQuery, TransferBillCountStatisticQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransferBillCountStatisticQuery, TransferBillCountStatisticQueryVariables>(TransferBillCountStatisticDocument, options);
        }
export type TransferBillCountStatisticQueryHookResult = ReturnType<typeof useTransferBillCountStatisticQuery>;
export type TransferBillCountStatisticLazyQueryHookResult = ReturnType<typeof useTransferBillCountStatisticLazyQuery>;
export type TransferBillCountStatisticQueryResult = Apollo.QueryResult<TransferBillCountStatisticQuery, TransferBillCountStatisticQueryVariables>;