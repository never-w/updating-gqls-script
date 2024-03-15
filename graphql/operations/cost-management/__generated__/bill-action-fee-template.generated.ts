import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBill2QueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.GetBill2Input;
}>;


export type GetBill2Query = { getBill2?: { __typename?: 'Bill2DataPayload', billMainId?: string, billMainCode?: string, billMainType?: SchemaTypes.BillMainTypeEnum, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusDesc?: string, billTemplateId?: string, businessId?: string, businessType?: number, createTime?: number, financialRejectionReason?: string, note?: string, billMainTypeName?: string, rejectSourceType?: SchemaTypes.RejectSourceType, submitTime?: number, sourceBillMainId?: string, relationBillStatus?: SchemaTypes.PitayaBillStatusEnum, billNote?: string, fromBIZControl?: boolean, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, billFreightResp?: { __typename?: 'Bill2FreightPayload', billFreightCode?: string, billType?: string, totalAmount?: number }, billPaymentResp?: { __typename?: 'Bill2PaymentPayload', billCode?: string, billNote?: string, totalAmount?: number, manualCode?: string, billPaymentFeeItemRespsList?: Array<{ __typename?: 'Bill2PaymentFeeItemPayload', amount?: number, costUnitPrice?: number, grossUnitQuantity?: number, index?: string, itemId?: string, totalQuantity?: number, unitPrice?: number, unitQuantity?: number, applyTotalQuantity?: number, applyUnitQuantity?: number, markList?: Array<SchemaTypes.ApplyMarkEnum>, pricePosition?: number, purchaseAmountForBuckleDamage?: number, deductibleAmount?: number, markDescList?: Array<string>, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, sourceBatchCode?: string, sourceBatchId?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }>, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }, businessInfo?: { __typename?: 'BusinessInfoPayload', domesticCollectiveProcurementReturnsAndLoss?: { __typename?: 'DomesticCollectiveProcurementReturnsAndLoss', domesticCollectiveCode?: string, businessType?: number, businessTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, note?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, commodities?: Array<{ __typename?: 'DomesticCollectiveProcurementLossCommodityPayload', commoditySkuId?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, internalConsignmentSaleAndPurchase?: { __typename?: 'InternalConsignmentSaleAndPurchase', internalConsignmentCode?: string, businessType?: number, businessTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, note?: string, purchaseDate?: number, saleDate?: number, subType?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, purchaser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }, otherIn?: { __typename?: 'OtherInBillExtendInfo', commodityType?: number, commodityTypeName?: string, inOrderCode?: string, inOrderTypeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> }, selfPurchase?: { __typename?: 'SelfPurchaseInfo', businessCode?: string, commodityType?: number, commodityTypeName?: string, purchaseTime?: number }, otherOutInfo?: { __typename?: 'OtherOutInfo', commodityType?: number, commodityTypeName?: string, orderCode?: string, orderTypeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> }, internalPurchaseAndSaleReturn?: { __typename?: 'InternalPurchaseAndSaleReturn', code?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, exrOrderSubTypeName?: string, extOrderSubType?: SchemaTypes.ExtendOrderSubTypeEnum, extOrderType?: SchemaTypes.ExpandOrderTypeEnum, extOrderTypeName?: string, note?: string, waitConfirmFlag?: boolean, returnWay?: SchemaTypes.SaleReturnWayEnum, returnWayDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number }, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, ruleCode?: string, ruleId?: string, showField?: number, paymentType?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, matchSourceName?: { __typename?: 'MarchingSourceInfo', carNo?: string, departureDate?: number, matchDate?: number, matchSource?: number, matchSourceName?: string, runCode?: string, trailerNo?: string }, submitUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, relationBillDetail?: { __typename?: 'RelationBillDetail', templateId?: string, billDetailList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, billOperationLogPayload?: Array<{ __typename?: 'BillOperationLogPayload', createTime?: number, endStatus?: SchemaTypes.PitayaBillStatusEnum, endStatusDesc?: string, note?: string, startStatus?: SchemaTypes.PitayaBillStatusEnum, startStatusDesc?: string, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }> } };

export type PageBill2QueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PageBill2Input;
  page: SchemaTypes.Page;
}>;


export type PageBill2Query = { pageBill2?: { __typename?: 'PageBill2Payload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'Bill2DataPayload', billMainId?: string, billMainType?: SchemaTypes.BillMainTypeEnum, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusDesc?: string, billTemplateId?: string, businessId?: string, businessType?: number, createTime?: number, financialRejectionReason?: string, note?: string, billMainTypeName?: string, billMainCode?: string, rejectSourceType?: SchemaTypes.RejectSourceType, sourceBillMainId?: string, submitTime?: number, relationBillStatus?: SchemaTypes.PitayaBillStatusEnum, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, billFreightResp?: { __typename?: 'Bill2FreightPayload', billFreightCode?: string, billType?: string, totalAmount?: number }, businessInfo?: { __typename?: 'BusinessInfoPayload', domesticCollectiveProcurementReturnsAndLoss?: { __typename?: 'DomesticCollectiveProcurementReturnsAndLoss', domesticCollectiveCode?: string, businessType?: number, businessTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, note?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, commodities?: Array<{ __typename?: 'DomesticCollectiveProcurementLossCommodityPayload', commoditySkuId?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, internalConsignmentSaleAndPurchase?: { __typename?: 'InternalConsignmentSaleAndPurchase', internalConsignmentCode?: string, businessType?: number, businessTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, note?: string, purchaseDate?: number, saleDate?: number, subType?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, purchaser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }, selfPurchase?: { __typename?: 'SelfPurchaseInfo', businessCode?: string, commodityType?: number, commodityTypeName?: string, purchaseTime?: number }, otherOutInfo?: { __typename?: 'OtherOutInfo', commodityType?: number, commodityTypeName?: string, orderCode?: string, orderTypeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> }, internalPurchaseAndSaleReturn?: { __typename?: 'InternalPurchaseAndSaleReturn', code?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, exrOrderSubTypeName?: string, extOrderSubType?: SchemaTypes.ExtendOrderSubTypeEnum, extOrderType?: SchemaTypes.ExpandOrderTypeEnum, extOrderTypeName?: string, note?: string, waitConfirmFlag?: boolean, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number }, matchSourceName?: { __typename?: 'MarchingSourceInfo', carNo?: string, departureDate?: number, matchDate?: number, matchSource?: number, matchSourceName?: string, runCode?: string, trailerNo?: string }, submitUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, billPaymentResp?: { __typename?: 'Bill2PaymentPayload', billCode?: string, billNote?: string, manualCode?: string, totalAmount?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, billPaymentFeeItemRespsList?: Array<{ __typename?: 'Bill2PaymentFeeItemPayload', amount?: number, applyTotalQuantity?: number, applyUnitQuantity?: number, costUnitPrice?: number, deductibleAmount?: number, grossUnitQuantity?: number, index?: string, itemId?: string, markList?: Array<SchemaTypes.ApplyMarkEnum>, pricePosition?: number, purchaseAmountForBuckleDamage?: number, totalQuantity?: number, unitPrice?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }> } }> } };

export type AuditBill2MutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.AuditBill2Input;
}>;


export type AuditBill2Mutation = { auditBill2?: boolean };

export type UpdateBill2FreightMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateBill2FreightInput;
}>;


export type UpdateBill2FreightMutation = { updateBill2Freight?: boolean };

export type UpdateBill2PaymentMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateBill2PaymentInput;
}>;


export type UpdateBill2PaymentMutation = { updateBill2Payment?: boolean };

export type ChangeBill2StatusMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ChangeBill2StatusInput;
}>;


export type ChangeBill2StatusMutation = { changeBill2Status?: boolean };

export type Bill2StatusGroupCountQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.Bill2StatusGroupCountInput;
}>;


export type Bill2StatusGroupCountQuery = { bill2StatusGroupCount?: Array<{ __typename?: 'Bill2StatusCountPayload', billMainType?: SchemaTypes.BillMainTypeEnum, billStatus?: SchemaTypes.BillStatus, number?: number }> };

export type UpdatePitayaBill2SelfPurchaseManualCodeMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateBill2ManualCodeInput;
}>;


export type UpdatePitayaBill2SelfPurchaseManualCodeMutation = { updatePitayaBill2SelfPurchaseManualCode?: boolean };

export type UpdatePitayaBill2SelfPurchaseImpairmentAmountMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateBill2PaymentInput;
}>;


export type UpdatePitayaBill2SelfPurchaseImpairmentAmountMutation = { updatePitayaBill2SelfPurchaseImpairmentAmount?: boolean };

export type UpdatePitayaBill2SelfPurchaseAmountMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateBill2PaymentInput;
}>;


export type UpdatePitayaBill2SelfPurchaseAmountMutation = { updatePitayaBill2SelfPurchaseAmount?: boolean };

export type UpdatePitayaBill2SelfPurchaseReturnAmountMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateBill2PaymentInput;
}>;


export type UpdatePitayaBill2SelfPurchaseReturnAmountMutation = { updatePitayaBill2SelfPurchaseReturnAmount?: boolean };


export const GetBill2Document = gql`
    query getBill2($input: GetBill2Input!) {
  getBill2(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    billFreightResp {
      billFreightCode
      billType
      totalAmount
    }
    billMainId
    billMainCode
    billMainType
    billPaymentResp {
      billCode
      billNote
      billPaymentFeeItemRespsList {
        amount
        batch {
          batchCode
          batchId
          createTime
          totalQuantity
          unitQuantity
          totalType {
            unitId
            unitName
          }
          unitType {
            unitId
            unitName
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
        costUnitPrice
        grossUnitQuantity
        index
        itemId
        priceType {
          unitId
          unitName
        }
        totalQuantity
        unitPrice
        unitQuantity
        applyTotalQuantity
        applyUnitQuantity
        markList
        pricePosition
        purchaseAmountForBuckleDamage
        deductibleAmount
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
        markDescList
      }
      supplier {
        supplierId
        supplierName
      }
      totalAmount
      manualCode
    }
    billStatus
    billStatusDesc
    billTemplateId
    businessId
    businessInfo {
      domesticCollectiveProcurementReturnsAndLoss {
        domesticCollectiveCode
        supplier {
          supplierId
          supplierName
        }
        belongOrg {
          orgId
          orgName
        }
        businessType
        businessTypeName
        commodityTypeId
        commodityTypeName
        createBy {
          phoneNum
          userId
          userName
        }
        createTime
        customer {
          customerId
          customerName
          customerType
          lastLevelId
          lastLevelName
        }
        note
        warehouse {
          warehouseId
          warehouseName
        }
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
      }
      internalConsignmentSaleAndPurchase {
        internalConsignmentCode
        belongOrg {
          orgId
          orgName
        }
        businessType
        businessTypeName
        commodityTypeId
        commodityTypeName
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
        note
        purchaseDate
        purchaser {
          phoneNum
          userId
          userName
        }
        saleDate
        warehouse {
          warehouseId
          warehouseName
        }
        supplier {
          supplierId
          supplierName
        }
        subType
      }
      otherIn {
        commodityType
        commodityTypeName
        inOrderCode
        inOrderTypeDesc
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
        remark
      }
      selfPurchase {
        businessCode
        commodityType
        commodityTypeName
        purchaseTime
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
    }
    businessType
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    customerBelongInfo {
      customerId
      customerName
      customerType
    }
    financialRejectionReason
    note
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
    billMainTypeName
    billDetailsList {
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
      supplier {
        supplierId
        supplierName
      }
      paymentType
    }
    matchSourceName {
      carNo
      departureDate
      matchDate
      matchSource
      matchSourceName
      runCode
      trailerNo
    }
    billMainCode
    rejectSourceType
    submitUser {
      phoneNum
      userId
      userName
    }
    submitTime
    relationBillDetail {
      billDetailList {
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
      templateId
    }
    sourceBillMainId
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
    relationBillStatus
    billNote
    fromBIZControl
  }
}
    `;

/**
 * __useGetBill2Query__
 *
 * To run a query within a React component, call `useGetBill2Query` and pass it any options that fit your needs.
 * When your component renders, `useGetBill2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBill2Query({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetBill2Query(baseOptions: Apollo.QueryHookOptions<GetBill2Query, GetBill2QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBill2Query, GetBill2QueryVariables>(GetBill2Document, options);
      }
export function useGetBill2LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBill2Query, GetBill2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBill2Query, GetBill2QueryVariables>(GetBill2Document, options);
        }
export type GetBill2QueryHookResult = ReturnType<typeof useGetBill2Query>;
export type GetBill2LazyQueryHookResult = ReturnType<typeof useGetBill2LazyQuery>;
export type GetBill2QueryResult = Apollo.QueryResult<GetBill2Query, GetBill2QueryVariables>;
export const PageBill2Document = gql`
    query pageBill2($input: PageBill2Input!, $page: Page!) {
  pageBill2(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      billFreightResp {
        billFreightCode
        billType
        totalAmount
      }
      billMainId
      billMainType
      billStatus
      billStatusDesc
      billTemplateId
      businessId
      businessInfo {
        domesticCollectiveProcurementReturnsAndLoss {
          domesticCollectiveCode
          supplier {
            supplierId
            supplierName
          }
          belongOrg {
            orgId
            orgName
          }
          businessType
          businessTypeName
          commodityTypeId
          commodityTypeName
          createBy {
            phoneNum
            userId
            userName
          }
          createTime
          customer {
            customerId
            customerName
            customerType
            lastLevelId
            lastLevelName
          }
          note
          warehouse {
            warehouseId
            warehouseName
          }
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
        }
        internalConsignmentSaleAndPurchase {
          internalConsignmentCode
          belongOrg {
            orgId
            orgName
          }
          businessType
          businessTypeName
          commodityTypeId
          commodityTypeName
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
          note
          purchaseDate
          purchaser {
            phoneNum
            userId
            userName
          }
          saleDate
          warehouse {
            warehouseId
            warehouseName
          }
          supplier {
            supplierId
            supplierName
          }
          subType
        }
        selfPurchase {
          businessCode
          commodityType
          commodityTypeName
          purchaseTime
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
        }
      }
      businessType
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      customerBelongInfo {
        customerId
        customerName
        customerType
      }
      financialRejectionReason
      note
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
      billMainTypeName
      matchSourceName {
        carNo
        departureDate
        matchDate
        matchSource
        matchSourceName
        runCode
        trailerNo
      }
      billMainCode
      rejectSourceType
      submitUser {
        phoneNum
        userId
        userName
      }
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
      sourceBillMainId
      submitTime
      billPaymentResp {
        supplier {
          supplierId
          supplierName
        }
        billCode
        billNote
        billPaymentFeeItemRespsList {
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
          batch {
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
          amount
          applyTotalQuantity
          applyUnitQuantity
          costUnitPrice
          deductibleAmount
          grossUnitQuantity
          index
          itemId
          markList
          pricePosition
          purchaseAmountForBuckleDamage
          totalQuantity
          unitPrice
          unitQuantity
          customerBelongInfo {
            customerId
            customerName
            customerType
          }
        }
        manualCode
        totalAmount
      }
      relationBillStatus
    }
    totalRecords
  }
}
    `;

/**
 * __usePageBill2Query__
 *
 * To run a query within a React component, call `usePageBill2Query` and pass it any options that fit your needs.
 * When your component renders, `usePageBill2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageBill2Query({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageBill2Query(baseOptions: Apollo.QueryHookOptions<PageBill2Query, PageBill2QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageBill2Query, PageBill2QueryVariables>(PageBill2Document, options);
      }
export function usePageBill2LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageBill2Query, PageBill2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageBill2Query, PageBill2QueryVariables>(PageBill2Document, options);
        }
export type PageBill2QueryHookResult = ReturnType<typeof usePageBill2Query>;
export type PageBill2LazyQueryHookResult = ReturnType<typeof usePageBill2LazyQuery>;
export type PageBill2QueryResult = Apollo.QueryResult<PageBill2Query, PageBill2QueryVariables>;
export const AuditBill2Document = gql`
    mutation auditBill2($input: AuditBill2Input!) {
  auditBill2(input: $input)
}
    `;
export type AuditBill2MutationFn = Apollo.MutationFunction<AuditBill2Mutation, AuditBill2MutationVariables>;

/**
 * __useAuditBill2Mutation__
 *
 * To run a mutation, you first call `useAuditBill2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuditBill2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [auditBill2Mutation, { data, loading, error }] = useAuditBill2Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuditBill2Mutation(baseOptions?: Apollo.MutationHookOptions<AuditBill2Mutation, AuditBill2MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuditBill2Mutation, AuditBill2MutationVariables>(AuditBill2Document, options);
      }
export type AuditBill2MutationHookResult = ReturnType<typeof useAuditBill2Mutation>;
export type AuditBill2MutationResult = Apollo.MutationResult<AuditBill2Mutation>;
export type AuditBill2MutationOptions = Apollo.BaseMutationOptions<AuditBill2Mutation, AuditBill2MutationVariables>;
export const UpdateBill2FreightDocument = gql`
    mutation updateBill2Freight($input: UpdateBill2FreightInput!) {
  updateBill2Freight(input: $input)
}
    `;
export type UpdateBill2FreightMutationFn = Apollo.MutationFunction<UpdateBill2FreightMutation, UpdateBill2FreightMutationVariables>;

/**
 * __useUpdateBill2FreightMutation__
 *
 * To run a mutation, you first call `useUpdateBill2FreightMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBill2FreightMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBill2FreightMutation, { data, loading, error }] = useUpdateBill2FreightMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBill2FreightMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBill2FreightMutation, UpdateBill2FreightMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBill2FreightMutation, UpdateBill2FreightMutationVariables>(UpdateBill2FreightDocument, options);
      }
export type UpdateBill2FreightMutationHookResult = ReturnType<typeof useUpdateBill2FreightMutation>;
export type UpdateBill2FreightMutationResult = Apollo.MutationResult<UpdateBill2FreightMutation>;
export type UpdateBill2FreightMutationOptions = Apollo.BaseMutationOptions<UpdateBill2FreightMutation, UpdateBill2FreightMutationVariables>;
export const UpdateBill2PaymentDocument = gql`
    mutation updateBill2Payment($input: UpdateBill2PaymentInput!) {
  updateBill2Payment(input: $input)
}
    `;
export type UpdateBill2PaymentMutationFn = Apollo.MutationFunction<UpdateBill2PaymentMutation, UpdateBill2PaymentMutationVariables>;

/**
 * __useUpdateBill2PaymentMutation__
 *
 * To run a mutation, you first call `useUpdateBill2PaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBill2PaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBill2PaymentMutation, { data, loading, error }] = useUpdateBill2PaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBill2PaymentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBill2PaymentMutation, UpdateBill2PaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBill2PaymentMutation, UpdateBill2PaymentMutationVariables>(UpdateBill2PaymentDocument, options);
      }
export type UpdateBill2PaymentMutationHookResult = ReturnType<typeof useUpdateBill2PaymentMutation>;
export type UpdateBill2PaymentMutationResult = Apollo.MutationResult<UpdateBill2PaymentMutation>;
export type UpdateBill2PaymentMutationOptions = Apollo.BaseMutationOptions<UpdateBill2PaymentMutation, UpdateBill2PaymentMutationVariables>;
export const ChangeBill2StatusDocument = gql`
    mutation changeBill2Status($input: ChangeBill2StatusInput!) {
  changeBill2Status(input: $input)
}
    `;
export type ChangeBill2StatusMutationFn = Apollo.MutationFunction<ChangeBill2StatusMutation, ChangeBill2StatusMutationVariables>;

/**
 * __useChangeBill2StatusMutation__
 *
 * To run a mutation, you first call `useChangeBill2StatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeBill2StatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeBill2StatusMutation, { data, loading, error }] = useChangeBill2StatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeBill2StatusMutation(baseOptions?: Apollo.MutationHookOptions<ChangeBill2StatusMutation, ChangeBill2StatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeBill2StatusMutation, ChangeBill2StatusMutationVariables>(ChangeBill2StatusDocument, options);
      }
export type ChangeBill2StatusMutationHookResult = ReturnType<typeof useChangeBill2StatusMutation>;
export type ChangeBill2StatusMutationResult = Apollo.MutationResult<ChangeBill2StatusMutation>;
export type ChangeBill2StatusMutationOptions = Apollo.BaseMutationOptions<ChangeBill2StatusMutation, ChangeBill2StatusMutationVariables>;
export const Bill2StatusGroupCountDocument = gql`
    query bill2StatusGroupCount($input: Bill2StatusGroupCountInput!) {
  bill2StatusGroupCount(input: $input) {
    billMainType
    billStatus
    number
  }
}
    `;

/**
 * __useBill2StatusGroupCountQuery__
 *
 * To run a query within a React component, call `useBill2StatusGroupCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useBill2StatusGroupCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBill2StatusGroupCountQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBill2StatusGroupCountQuery(baseOptions: Apollo.QueryHookOptions<Bill2StatusGroupCountQuery, Bill2StatusGroupCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Bill2StatusGroupCountQuery, Bill2StatusGroupCountQueryVariables>(Bill2StatusGroupCountDocument, options);
      }
export function useBill2StatusGroupCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Bill2StatusGroupCountQuery, Bill2StatusGroupCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Bill2StatusGroupCountQuery, Bill2StatusGroupCountQueryVariables>(Bill2StatusGroupCountDocument, options);
        }
export type Bill2StatusGroupCountQueryHookResult = ReturnType<typeof useBill2StatusGroupCountQuery>;
export type Bill2StatusGroupCountLazyQueryHookResult = ReturnType<typeof useBill2StatusGroupCountLazyQuery>;
export type Bill2StatusGroupCountQueryResult = Apollo.QueryResult<Bill2StatusGroupCountQuery, Bill2StatusGroupCountQueryVariables>;
export const UpdatePitayaBill2SelfPurchaseManualCodeDocument = gql`
    mutation updatePitayaBill2SelfPurchaseManualCode($input: UpdateBill2ManualCodeInput!) {
  updatePitayaBill2SelfPurchaseManualCode(input: $input)
}
    `;
export type UpdatePitayaBill2SelfPurchaseManualCodeMutationFn = Apollo.MutationFunction<UpdatePitayaBill2SelfPurchaseManualCodeMutation, UpdatePitayaBill2SelfPurchaseManualCodeMutationVariables>;

/**
 * __useUpdatePitayaBill2SelfPurchaseManualCodeMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaBill2SelfPurchaseManualCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaBill2SelfPurchaseManualCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaBill2SelfPurchaseManualCodeMutation, { data, loading, error }] = useUpdatePitayaBill2SelfPurchaseManualCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaBill2SelfPurchaseManualCodeMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaBill2SelfPurchaseManualCodeMutation, UpdatePitayaBill2SelfPurchaseManualCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaBill2SelfPurchaseManualCodeMutation, UpdatePitayaBill2SelfPurchaseManualCodeMutationVariables>(UpdatePitayaBill2SelfPurchaseManualCodeDocument, options);
      }
export type UpdatePitayaBill2SelfPurchaseManualCodeMutationHookResult = ReturnType<typeof useUpdatePitayaBill2SelfPurchaseManualCodeMutation>;
export type UpdatePitayaBill2SelfPurchaseManualCodeMutationResult = Apollo.MutationResult<UpdatePitayaBill2SelfPurchaseManualCodeMutation>;
export type UpdatePitayaBill2SelfPurchaseManualCodeMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaBill2SelfPurchaseManualCodeMutation, UpdatePitayaBill2SelfPurchaseManualCodeMutationVariables>;
export const UpdatePitayaBill2SelfPurchaseImpairmentAmountDocument = gql`
    mutation updatePitayaBill2SelfPurchaseImpairmentAmount($input: UpdateBill2PaymentInput!) {
  updatePitayaBill2SelfPurchaseImpairmentAmount(input: $input)
}
    `;
export type UpdatePitayaBill2SelfPurchaseImpairmentAmountMutationFn = Apollo.MutationFunction<UpdatePitayaBill2SelfPurchaseImpairmentAmountMutation, UpdatePitayaBill2SelfPurchaseImpairmentAmountMutationVariables>;

/**
 * __useUpdatePitayaBill2SelfPurchaseImpairmentAmountMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaBill2SelfPurchaseImpairmentAmountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaBill2SelfPurchaseImpairmentAmountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaBill2SelfPurchaseImpairmentAmountMutation, { data, loading, error }] = useUpdatePitayaBill2SelfPurchaseImpairmentAmountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaBill2SelfPurchaseImpairmentAmountMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaBill2SelfPurchaseImpairmentAmountMutation, UpdatePitayaBill2SelfPurchaseImpairmentAmountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaBill2SelfPurchaseImpairmentAmountMutation, UpdatePitayaBill2SelfPurchaseImpairmentAmountMutationVariables>(UpdatePitayaBill2SelfPurchaseImpairmentAmountDocument, options);
      }
export type UpdatePitayaBill2SelfPurchaseImpairmentAmountMutationHookResult = ReturnType<typeof useUpdatePitayaBill2SelfPurchaseImpairmentAmountMutation>;
export type UpdatePitayaBill2SelfPurchaseImpairmentAmountMutationResult = Apollo.MutationResult<UpdatePitayaBill2SelfPurchaseImpairmentAmountMutation>;
export type UpdatePitayaBill2SelfPurchaseImpairmentAmountMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaBill2SelfPurchaseImpairmentAmountMutation, UpdatePitayaBill2SelfPurchaseImpairmentAmountMutationVariables>;
export const UpdatePitayaBill2SelfPurchaseAmountDocument = gql`
    mutation updatePitayaBill2SelfPurchaseAmount($input: UpdateBill2PaymentInput!) {
  updatePitayaBill2SelfPurchaseAmount(input: $input)
}
    `;
export type UpdatePitayaBill2SelfPurchaseAmountMutationFn = Apollo.MutationFunction<UpdatePitayaBill2SelfPurchaseAmountMutation, UpdatePitayaBill2SelfPurchaseAmountMutationVariables>;

/**
 * __useUpdatePitayaBill2SelfPurchaseAmountMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaBill2SelfPurchaseAmountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaBill2SelfPurchaseAmountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaBill2SelfPurchaseAmountMutation, { data, loading, error }] = useUpdatePitayaBill2SelfPurchaseAmountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaBill2SelfPurchaseAmountMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaBill2SelfPurchaseAmountMutation, UpdatePitayaBill2SelfPurchaseAmountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaBill2SelfPurchaseAmountMutation, UpdatePitayaBill2SelfPurchaseAmountMutationVariables>(UpdatePitayaBill2SelfPurchaseAmountDocument, options);
      }
export type UpdatePitayaBill2SelfPurchaseAmountMutationHookResult = ReturnType<typeof useUpdatePitayaBill2SelfPurchaseAmountMutation>;
export type UpdatePitayaBill2SelfPurchaseAmountMutationResult = Apollo.MutationResult<UpdatePitayaBill2SelfPurchaseAmountMutation>;
export type UpdatePitayaBill2SelfPurchaseAmountMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaBill2SelfPurchaseAmountMutation, UpdatePitayaBill2SelfPurchaseAmountMutationVariables>;
export const UpdatePitayaBill2SelfPurchaseReturnAmountDocument = gql`
    mutation updatePitayaBill2SelfPurchaseReturnAmount($input: UpdateBill2PaymentInput!) {
  updatePitayaBill2SelfPurchaseReturnAmount(input: $input)
}
    `;
export type UpdatePitayaBill2SelfPurchaseReturnAmountMutationFn = Apollo.MutationFunction<UpdatePitayaBill2SelfPurchaseReturnAmountMutation, UpdatePitayaBill2SelfPurchaseReturnAmountMutationVariables>;

/**
 * __useUpdatePitayaBill2SelfPurchaseReturnAmountMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaBill2SelfPurchaseReturnAmountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaBill2SelfPurchaseReturnAmountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaBill2SelfPurchaseReturnAmountMutation, { data, loading, error }] = useUpdatePitayaBill2SelfPurchaseReturnAmountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaBill2SelfPurchaseReturnAmountMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaBill2SelfPurchaseReturnAmountMutation, UpdatePitayaBill2SelfPurchaseReturnAmountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaBill2SelfPurchaseReturnAmountMutation, UpdatePitayaBill2SelfPurchaseReturnAmountMutationVariables>(UpdatePitayaBill2SelfPurchaseReturnAmountDocument, options);
      }
export type UpdatePitayaBill2SelfPurchaseReturnAmountMutationHookResult = ReturnType<typeof useUpdatePitayaBill2SelfPurchaseReturnAmountMutation>;
export type UpdatePitayaBill2SelfPurchaseReturnAmountMutationResult = Apollo.MutationResult<UpdatePitayaBill2SelfPurchaseReturnAmountMutation>;
export type UpdatePitayaBill2SelfPurchaseReturnAmountMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaBill2SelfPurchaseReturnAmountMutation, UpdatePitayaBill2SelfPurchaseReturnAmountMutationVariables>;