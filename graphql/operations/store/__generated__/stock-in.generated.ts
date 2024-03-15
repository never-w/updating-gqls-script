import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageAuditInOrderQueryVariables = SchemaTypes.Exact<{
  commodityType: SchemaTypes.Scalars['Int'];
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageAuditInOrderQuery = { pageAuditInOrder?: { __typename?: 'PageInAuditRecordPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'AuditInOrderPayload', inOrderId?: string, inOrderTypeId?: number, inOrderTypeName?: string, inOrderCode?: string, taskId?: string, taskCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerTypeId?: number, customerTypeName?: string, customerId?: number, customerName?: string, inOrderStatus?: number, inOrderStatusName?: string, warehouseId?: string, warehouseName?: string, supplierId?: number, supplierName?: string, transferId?: string, transferType?: number, transferOrganizationId?: number, transferOrganizationName?: string, createUserName?: string, createTime?: number, createUserPhone?: string, inOrderDescription?: string, totalPrice?: number, deliveryFee?: number, customerDistributionName?: string, sourceAppId?: number, targetAppId?: number, isExceptional?: boolean, commodities?: Array<{ __typename?: 'AuditInOrderItemPayload', inOrderItemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitTypeName?: string, unitType?: number, totalQuantity?: number, totalTypeName?: string, unitPrice?: number, unitPriceType?: number, unitPriceTypeName?: string, unitTotalPrice?: number, waitUnitQuantity?: number, waitTotalQuantity?: number, completeInStock?: number, conversion?: number, pricePosition?: number, grossUnitQuantity?: number, batchId?: string, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, inBoundGrossUnitQuantity?: number, skuDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, productPickingQuantity?: { __typename?: 'ProductPickingQuantity', totalQuantity?: number, unitQuantity?: number } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type GetAuditDetailQueryVariables = SchemaTypes.Exact<{
  inOrderDetailInput?: SchemaTypes.InputMaybe<SchemaTypes.InOrderDetailInput>;
}>;


export type GetAuditDetailQuery = { getAuditDetail?: { __typename?: 'AuditInOrderPayload', inOrderId?: string, inOrderTypeId?: number, inOrderTypeName?: string, inOrderCode?: string, taskId?: string, taskCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerTypeId?: number, customerTypeName?: string, customerId?: number, customerName?: string, inOrderStatus?: number, inOrderStatusName?: string, warehouseId?: string, warehouseName?: string, supplierId?: number, supplierName?: string, transferId?: string, transferType?: number, transferOrganizationId?: number, transferOrganizationName?: string, createUserName?: string, createTime?: number, createUserPhone?: string, inOrderDescription?: string, totalPrice?: number, deliveryFee?: number, customerDistributionName?: string, sourceAppId?: number, targetAppId?: number, isExceptional?: boolean, netWeightExceptionRatio?: number, commodities?: Array<{ __typename?: 'AuditInOrderItemPayload', reason?: string, inOrderItemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitTypeName?: string, unitType?: number, totalQuantity?: number, totalTypeName?: string, unitPrice?: number, unitPriceType?: number, unitPriceTypeName?: string, unitTotalPrice?: number, waitUnitQuantity?: number, waitTotalQuantity?: number, completeInStock?: number, conversion?: number, pricePosition?: number, grossUnitQuantity?: number, batchId?: string, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, inBoundGrossUnitQuantity?: number, skuDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, productPickingQuantity?: { __typename?: 'ProductPickingQuantity', totalQuantity?: number, unitQuantity?: number } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type CountInboundedQueryVariables = SchemaTypes.Exact<{
  inOrderDetailInput?: SchemaTypes.InputMaybe<SchemaTypes.InOrderDetailInput>;
}>;


export type CountInboundedQuery = { countInbounded?: number };

export type PurchaseInOrderLogQueryVariables = SchemaTypes.Exact<{
  inOrderId: SchemaTypes.Scalars['ID'];
}>;


export type PurchaseInOrderLogQuery = { purchaseInOrderLog?: { __typename?: 'ProductionInOrderLogListPayload', inOrderLogList?: Array<{ __typename?: 'ProductionInOrderLogPayload', inOrderLogId?: string, inOrderId?: string, inOrderLogType?: number, inOrderLogTypeText?: string, inOrderLogDescription?: string, createTime?: number, createBy?: number, createUserName?: string }> } };

export type StockInAuditDetailQueryVariables = SchemaTypes.Exact<{
  inOrderDetailInput?: SchemaTypes.InputMaybe<SchemaTypes.InOrderDetailInput>;
}>;


export type StockInAuditDetailQuery = { countInbounded?: number, getAuditDetail?: { __typename?: 'AuditInOrderPayload', inOrderId?: string, inOrderTypeId?: number, inOrderTypeName?: string, inOrderCode?: string, taskId?: string, taskCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerTypeId?: number, customerTypeName?: string, customerId?: number, customerName?: string, inOrderStatus?: number, inOrderStatusName?: string, warehouseId?: string, warehouseName?: string, supplierId?: number, supplierName?: string, transferId?: string, transferType?: number, transferOrganizationId?: number, transferOrganizationName?: string, createUserName?: string, createTime?: number, createUserPhone?: string, inOrderDescription?: string, totalPrice?: number, deliveryFee?: number, customerDistributionName?: string, sourceAppId?: number, targetAppId?: number, isExceptional?: boolean, netWeightExceptionRatio?: number, commodities?: Array<{ __typename?: 'AuditInOrderItemPayload', reason?: string, inOrderItemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitTypeName?: string, unitType?: number, totalQuantity?: number, totalTypeName?: string, unitPrice?: number, unitPriceType?: number, unitPriceTypeName?: string, unitTotalPrice?: number, waitUnitQuantity?: number, waitTotalQuantity?: number, completeInStock?: number, conversion?: number, pricePosition?: number, grossUnitQuantity?: number, batchId?: string, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, inBoundGrossUnitQuantity?: number, skuDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, productPickingQuantity?: { __typename?: 'ProductPickingQuantity', totalQuantity?: number, unitQuantity?: number } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type InboundRecordQueryVariables = SchemaTypes.Exact<{
  inOrderDetailInput?: SchemaTypes.InputMaybe<SchemaTypes.InOrderDetailInput>;
}>;


export type InboundRecordQuery = { getAuditDetail?: { __typename?: 'AuditInOrderPayload', inOrderTypeId?: number }, inboundRecord?: { __typename?: 'InboundListPayload', commodityTypeId?: number, toBeInBoundList?: Array<{ __typename?: 'ToBeInboundPayload', commodityName?: string, skuTextDescription?: Array<string>, unitQuantity?: number, unitTypeName?: string, grossUnitQuantity?: number, totalQuantity?: number, totalTypeName?: string, conversion?: number, waitUnitQuantity?: number, waitTotalQuantity?: number, pricePosition?: number }>, inboundRecordList?: Array<{ __typename?: 'InboundRecordPayload', totalPrice?: number, inOrderCode?: string, createUserName?: string, inboundTime?: number, remark?: string, deliveryFee?: number, inboundRecordItems?: Array<{ __typename?: 'InboundRecordItemPayload', commodityName?: string, skuTextDescription?: Array<string>, unitQuantity?: number, unitTypeName?: string, grossUnitQuantity?: number, totalQuantity?: number, totalTypeName?: string, unitPrice?: number, unitPriceTypeName?: string, conversion?: number, totalPrice?: number, batchCode?: string }> }> } };

export type RejectedInOrderAuditMutationVariables = SchemaTypes.Exact<{
  rejectedInput?: SchemaTypes.InputMaybe<SchemaTypes.RejectedInput>;
}>;


export type RejectedInOrderAuditMutation = { rejectedInOrderAudit?: boolean };

export type RejectPurchaseOrderAuditMutationVariables = SchemaTypes.Exact<{
  rejectedInput?: SchemaTypes.InputMaybe<SchemaTypes.RejectedInput>;
}>;


export type RejectPurchaseOrderAuditMutation = { rejectPurchaseOrderAudit?: boolean };

export type ConfirmInboundMutationVariables = SchemaTypes.Exact<{
  confirmInput?: SchemaTypes.InputMaybe<SchemaTypes.ConfirmInput>;
}>;


export type ConfirmInboundMutation = { confirmInbound?: number };

export type ConfirmPurchaseInBoundMutationVariables = SchemaTypes.Exact<{
  purchaseConfirmInput?: SchemaTypes.InputMaybe<SchemaTypes.PurchaseConfirmInput>;
}>;


export type ConfirmPurchaseInBoundMutation = { confirmPurchaseInBound?: number };

export type FinishInboundMutationVariables = SchemaTypes.Exact<{
  inOrderId: SchemaTypes.Scalars['ID'];
}>;


export type FinishInboundMutation = { finishInbound?: boolean };

export type FinishPurchaseOrderInBoundMutationVariables = SchemaTypes.Exact<{
  inOrderId: SchemaTypes.Scalars['ID'];
}>;


export type FinishPurchaseOrderInBoundMutation = { finishPurchaseOrderInBound?: boolean };

export type PageOtherInOrderQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageOtherInOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.PageOtherInOrderInput>;
}>;


export type PageOtherInOrderQuery = { pageOtherInOrder?: { __typename?: 'PageOtherInOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'OtherInOrderPayload', inOrderId?: string, inOrderTypeId?: number, inOrderTypeName?: string, inOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerTypeId?: number, customerTypeName?: string, customerId?: number, customerName?: string, inOrderStatus?: number, inOrderStatusName?: string, warehouseId?: string, warehouseName?: string, supplierId?: number, supplierName?: string, createUserName?: string, createTime?: number, inOrderDescription?: string, errorDescription?: string, totalPrice?: number, createBy?: number, inStockRecordCount?: number, commodities?: Array<{ __typename?: 'OtherInOrderItemPayload', unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, unitPriceType?: number, unitPriceTypeName?: string, totalPrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> }> } };

export type CreateOtherInOrderMutationVariables = SchemaTypes.Exact<{
  createOtherInOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateOtherInOrderInput>;
}>;


export type CreateOtherInOrderMutation = { createOtherInOrder?: string };

export type ModifyOtherInOrderMutationVariables = SchemaTypes.Exact<{
  modifyOtherInOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.ModifyOtherInOrderInput>;
}>;


export type ModifyOtherInOrderMutation = { modifyOtherInOrder?: boolean };

export type SubmitOtherInOrderMutationVariables = SchemaTypes.Exact<{
  inOrderId: SchemaTypes.Scalars['ID'];
}>;


export type SubmitOtherInOrderMutation = { submitOtherInOrder?: string };

export type CancelOtherInOrderMutationVariables = SchemaTypes.Exact<{
  cancelOtherInOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelOtherInOrderInput>;
}>;


export type CancelOtherInOrderMutation = { cancelOtherInOrder?: boolean };

export type UpdateTransferInOrderWarehouseMutationVariables = SchemaTypes.Exact<{
  updateTransferInOrderWarehouseInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateTransferInOrderWarehouseInput>;
}>;


export type UpdateTransferInOrderWarehouseMutation = { updateTransferInOrderWarehouse?: string };

export type OmsPurchasePageQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.OmsPurchasePageInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type OmsPurchasePageQuery = { omsPurchasePage?: { __typename?: 'OmsPurchasePagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'OmsPurchasePayload', commodityType?: number, commodityTypeDesc?: string, createTime?: number, id?: string, runCode?: string, status?: number, statusName?: string, submitTime?: number, type?: number, typeName?: string, code?: string, subType?: number, subTypeName?: string, isExceptional?: boolean, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodityItemsList?: Array<{ __typename?: 'OmsCommonCommodityItem', id?: string, index?: string, price?: number, totalQuantity?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, submitUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, transportInfo?: { __typename?: 'PitayaTransportInfo', cabinetBatchCode?: Array<string>, cabinetCode?: Array<string>, carNo?: string, trailerNo?: string, matchSourceName?: string, purchaseCode?: string }, supplierList?: Array<{ __typename?: 'Supplier', supplierId?: number, supplierName?: string }> }> } };

export type OmsPurchaseDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.OmsPurchaseDetailInput>;
}>;


export type OmsPurchaseDetailQuery = { omsPurchaseDetail?: { __typename?: 'OmsPurchasePayload', commodityType?: number, commodityTypeDesc?: string, createTime?: number, id?: string, runCode?: string, status?: number, statusName?: string, submitTime?: number, type?: number, typeName?: string, code?: string, subType?: number, subTypeName?: string, isExceptional?: boolean, netWeightExceptionRatio?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodityItemsList?: Array<{ __typename?: 'OmsCommonCommodityItem', id?: string, index?: string, price?: number, totalQuantity?: number, unitQuantity?: number, markList?: Array<SchemaTypes.AcquireMarkEnum>, runCode?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, submitUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, transportInfo?: { __typename?: 'PitayaTransportInfo', cabinetBatchCode?: Array<string>, cabinetCode?: Array<string>, carNo?: string, trailerNo?: string, matchSourceName?: string, purchaseCode?: string }, supplierList?: Array<{ __typename?: 'Supplier', supplierId?: number, supplierName?: string }> } };

export type OmsPurchaseStatusQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type OmsPurchaseStatusQuery = { omsPurchaseStatus?: Array<{ __typename?: 'OmsPurchaseStatus', count?: number, status?: number }> };

export type ConfirmOmsPurchaseMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ConfirmOmsPurchaseInput>;
}>;


export type ConfirmOmsPurchaseMutation = { confirmOmsPurchase?: boolean };

export type CountInOrderAuditQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type CountInOrderAuditQuery = { countInOrderAudit?: { __typename?: 'CountInOrderPayload', damageProduct?: number, defectiveProduct?: number, finishedProduct?: number, rawMaterial?: number, returnProduct?: number, semiFinishedProduct?: number, subMaterial?: number, turnoverBasket?: number } };

export type UpdateOrderTransferInOrderWarehouseMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaUpdateWarehouseInput>;
}>;


export type UpdateOrderTransferInOrderWarehouseMutation = { updateOrderTransferInOrderWarehouse?: number };

export type PassOmsPurchaseMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PassOmsPurchaseInput>;
}>;


export type PassOmsPurchaseMutation = { passOmsPurchase?: boolean };

export type OtherInOrderDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.OtherInOrderDetailInput>;
}>;


export type OtherInOrderDetailQuery = { otherInOrderDetail?: { __typename?: 'OtherInOrderPayload', supplierId?: number, supplierName?: string, billId?: string, commodityTypeId?: number, commodityTypeName?: string, createBy?: number, createTime?: number, createUserName?: string, customerId?: number, customerName?: string, customerTypeId?: number, customerTypeName?: string, errorDescription?: string, inOrderCode?: string, inOrderDescription?: string, inOrderId?: string, inOrderStatus?: number, inOrderStatusName?: string, inOrderTypeId?: number, inOrderTypeName?: string, totalPrice?: number, warehouseId?: string, warehouseName?: string, inStockRecordCount?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodities?: Array<{ __typename?: 'OtherInOrderItemPayload', totalPrice?: number, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, unitPriceType?: number, unitPriceTypeName?: string, unitQuantity?: number, unitType?: number, unitTypeName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> } };

export type ListWmsMarkQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListWmsMarkInput>;
}>;


export type ListWmsMarkQuery = { listWmsMark?: Array<{ __typename?: 'WmsMarkDetailPayload', businessType?: SchemaTypes.WmsMarkType, labelContent?: string, markId?: string }> };

export type OtherInOrderRecordQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.OtherInOrderRecordInput>;
}>;


export type OtherInOrderRecordQuery = { otherInOrderRecord?: { __typename?: 'InboundListPayload', commodityTypeId?: number, inApplyCode?: string, inboundRecordList?: Array<{ __typename?: 'InboundRecordPayload', createUserName?: string, deliveryFee?: number, inOrderCode?: string, inboundTime?: number, remark?: string, totalPrice?: number, userId?: number, inboundRecordItems?: Array<{ __typename?: 'InboundRecordItemPayload', commodityName?: string, commoditySkuId?: number, skuTextDescription?: Array<string>, batchCode?: string, batchId?: string, conversion?: number, grossUnitQuantity?: number, totalPrice?: number, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, unitPriceType?: number, unitPriceTypeName?: string, unitQuantity?: number, unitType?: number, unitTypeName?: string }> }>, toBeInBoundList?: Array<{ __typename?: 'ToBeInboundPayload', commodityName?: string, commoditySkuId?: number, conversion?: number, grossUnitQuantity?: number, pricePosition?: number, skuTextDescription?: Array<string>, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitQuantity?: number, unitType?: number, unitTypeName?: string, waitTotalQuantity?: number, waitUnitQuantity?: number }> } };


export const PageAuditInOrderDocument = gql`
    query pageAuditInOrder($commodityType: Int!, $page: Page) {
  pageAuditInOrder(commodityType: $commodityType, page: $page) {
    records {
      inOrderId
      inOrderTypeId
      inOrderTypeName
      inOrderCode
      taskId
      taskCode
      commodityTypeId
      commodityTypeName
      customerTypeId
      customerTypeName
      customerId
      customerName
      inOrderStatus
      inOrderStatusName
      warehouseId
      warehouseName
      supplierId
      supplierName
      transferId
      transferType
      transferOrganizationId
      transferOrganizationName
      createUserName
      createTime
      createUserPhone
      inOrderDescription
      commodities {
        inOrderItemId
        commodityId
        commodityName
        commoditySkuId
        commoditySpecOptionId
        skuTextDescription
        unitQuantity
        unitTypeName
        unitType
        totalQuantity
        totalTypeName
        unitPrice
        unitPriceType
        unitPriceTypeName
        unitTotalPrice
        waitUnitQuantity
        waitTotalQuantity
        completeInStock
        conversion
        pricePosition
        grossUnitQuantity
        batchId
        inBoundTotalQuantity
        inBoundUnitQuantity
        inBoundGrossUnitQuantity
        skuDetail {
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
        productPickingQuantity {
          totalQuantity
          unitQuantity
        }
      }
      totalPrice
      deliveryFee
      customerDistributionName
      sourceAppId
      targetAppId
      belongOrg {
        orgId
        orgName
      }
      isExceptional
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageAuditInOrderQuery__
 *
 * To run a query within a React component, call `usePageAuditInOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageAuditInOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageAuditInOrderQuery({
 *   variables: {
 *      commodityType: // value for 'commodityType'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageAuditInOrderQuery(baseOptions: Apollo.QueryHookOptions<PageAuditInOrderQuery, PageAuditInOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageAuditInOrderQuery, PageAuditInOrderQueryVariables>(PageAuditInOrderDocument, options);
      }
export function usePageAuditInOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageAuditInOrderQuery, PageAuditInOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageAuditInOrderQuery, PageAuditInOrderQueryVariables>(PageAuditInOrderDocument, options);
        }
export type PageAuditInOrderQueryHookResult = ReturnType<typeof usePageAuditInOrderQuery>;
export type PageAuditInOrderLazyQueryHookResult = ReturnType<typeof usePageAuditInOrderLazyQuery>;
export type PageAuditInOrderQueryResult = Apollo.QueryResult<PageAuditInOrderQuery, PageAuditInOrderQueryVariables>;
export const GetAuditDetailDocument = gql`
    query getAuditDetail($inOrderDetailInput: InOrderDetailInput) {
  getAuditDetail(inOrderDetailInput: $inOrderDetailInput) {
    inOrderId
    inOrderTypeId
    inOrderTypeName
    inOrderCode
    taskId
    taskCode
    commodityTypeId
    commodityTypeName
    customerTypeId
    customerTypeName
    customerId
    customerName
    inOrderStatus
    inOrderStatusName
    warehouseId
    warehouseName
    supplierId
    supplierName
    transferId
    transferType
    transferOrganizationId
    transferOrganizationName
    createUserName
    createTime
    createUserPhone
    inOrderDescription
    commodities {
      reason
      inOrderItemId
      commodityId
      commodityName
      commoditySkuId
      commoditySpecOptionId
      skuTextDescription
      unitQuantity
      unitTypeName
      unitType
      totalQuantity
      totalTypeName
      unitPrice
      unitPriceType
      unitPriceTypeName
      unitTotalPrice
      waitUnitQuantity
      waitTotalQuantity
      completeInStock
      conversion
      pricePosition
      grossUnitQuantity
      batchId
      inBoundTotalQuantity
      inBoundUnitQuantity
      inBoundGrossUnitQuantity
      skuDetail {
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
      productPickingQuantity {
        totalQuantity
        unitQuantity
      }
    }
    totalPrice
    deliveryFee
    customerDistributionName
    sourceAppId
    targetAppId
    belongOrg {
      orgId
      orgName
    }
    isExceptional
    netWeightExceptionRatio
  }
}
    `;

/**
 * __useGetAuditDetailQuery__
 *
 * To run a query within a React component, call `useGetAuditDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuditDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuditDetailQuery({
 *   variables: {
 *      inOrderDetailInput: // value for 'inOrderDetailInput'
 *   },
 * });
 */
export function useGetAuditDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetAuditDetailQuery, GetAuditDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuditDetailQuery, GetAuditDetailQueryVariables>(GetAuditDetailDocument, options);
      }
export function useGetAuditDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuditDetailQuery, GetAuditDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuditDetailQuery, GetAuditDetailQueryVariables>(GetAuditDetailDocument, options);
        }
export type GetAuditDetailQueryHookResult = ReturnType<typeof useGetAuditDetailQuery>;
export type GetAuditDetailLazyQueryHookResult = ReturnType<typeof useGetAuditDetailLazyQuery>;
export type GetAuditDetailQueryResult = Apollo.QueryResult<GetAuditDetailQuery, GetAuditDetailQueryVariables>;
export const CountInboundedDocument = gql`
    query countInbounded($inOrderDetailInput: InOrderDetailInput) {
  countInbounded(inOrderDetailInput: $inOrderDetailInput)
}
    `;

/**
 * __useCountInboundedQuery__
 *
 * To run a query within a React component, call `useCountInboundedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountInboundedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountInboundedQuery({
 *   variables: {
 *      inOrderDetailInput: // value for 'inOrderDetailInput'
 *   },
 * });
 */
export function useCountInboundedQuery(baseOptions?: Apollo.QueryHookOptions<CountInboundedQuery, CountInboundedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountInboundedQuery, CountInboundedQueryVariables>(CountInboundedDocument, options);
      }
export function useCountInboundedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountInboundedQuery, CountInboundedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountInboundedQuery, CountInboundedQueryVariables>(CountInboundedDocument, options);
        }
export type CountInboundedQueryHookResult = ReturnType<typeof useCountInboundedQuery>;
export type CountInboundedLazyQueryHookResult = ReturnType<typeof useCountInboundedLazyQuery>;
export type CountInboundedQueryResult = Apollo.QueryResult<CountInboundedQuery, CountInboundedQueryVariables>;
export const PurchaseInOrderLogDocument = gql`
    query purchaseInOrderLog($inOrderId: ID!) {
  purchaseInOrderLog(inOrderId: $inOrderId) {
    inOrderLogList {
      inOrderLogId
      inOrderId
      inOrderLogType
      inOrderLogTypeText
      inOrderLogDescription
      createTime
      createBy
      createUserName
    }
  }
}
    `;

/**
 * __usePurchaseInOrderLogQuery__
 *
 * To run a query within a React component, call `usePurchaseInOrderLogQuery` and pass it any options that fit your needs.
 * When your component renders, `usePurchaseInOrderLogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePurchaseInOrderLogQuery({
 *   variables: {
 *      inOrderId: // value for 'inOrderId'
 *   },
 * });
 */
export function usePurchaseInOrderLogQuery(baseOptions: Apollo.QueryHookOptions<PurchaseInOrderLogQuery, PurchaseInOrderLogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PurchaseInOrderLogQuery, PurchaseInOrderLogQueryVariables>(PurchaseInOrderLogDocument, options);
      }
export function usePurchaseInOrderLogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PurchaseInOrderLogQuery, PurchaseInOrderLogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PurchaseInOrderLogQuery, PurchaseInOrderLogQueryVariables>(PurchaseInOrderLogDocument, options);
        }
export type PurchaseInOrderLogQueryHookResult = ReturnType<typeof usePurchaseInOrderLogQuery>;
export type PurchaseInOrderLogLazyQueryHookResult = ReturnType<typeof usePurchaseInOrderLogLazyQuery>;
export type PurchaseInOrderLogQueryResult = Apollo.QueryResult<PurchaseInOrderLogQuery, PurchaseInOrderLogQueryVariables>;
export const StockInAuditDetailDocument = gql`
    query stockInAuditDetail($inOrderDetailInput: InOrderDetailInput) {
  getAuditDetail(inOrderDetailInput: $inOrderDetailInput) {
    inOrderId
    inOrderTypeId
    inOrderTypeName
    inOrderCode
    taskId
    taskCode
    commodityTypeId
    commodityTypeName
    customerTypeId
    customerTypeName
    customerId
    customerName
    inOrderStatus
    inOrderStatusName
    warehouseId
    warehouseName
    supplierId
    supplierName
    transferId
    transferType
    transferOrganizationId
    transferOrganizationName
    createUserName
    createTime
    createUserPhone
    inOrderDescription
    commodities {
      reason
      inOrderItemId
      commodityId
      commodityName
      commoditySkuId
      commoditySpecOptionId
      skuTextDescription
      unitQuantity
      unitTypeName
      unitType
      totalQuantity
      totalTypeName
      unitPrice
      unitPriceType
      unitPriceTypeName
      unitTotalPrice
      waitUnitQuantity
      waitTotalQuantity
      completeInStock
      conversion
      pricePosition
      grossUnitQuantity
      batchId
      inBoundTotalQuantity
      inBoundUnitQuantity
      inBoundGrossUnitQuantity
      skuDetail {
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
      productPickingQuantity {
        totalQuantity
        unitQuantity
      }
    }
    totalPrice
    deliveryFee
    customerDistributionName
    sourceAppId
    targetAppId
    belongOrg {
      orgId
      orgName
    }
    isExceptional
    netWeightExceptionRatio
  }
  countInbounded(inOrderDetailInput: $inOrderDetailInput)
}
    `;

/**
 * __useStockInAuditDetailQuery__
 *
 * To run a query within a React component, call `useStockInAuditDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockInAuditDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockInAuditDetailQuery({
 *   variables: {
 *      inOrderDetailInput: // value for 'inOrderDetailInput'
 *   },
 * });
 */
export function useStockInAuditDetailQuery(baseOptions?: Apollo.QueryHookOptions<StockInAuditDetailQuery, StockInAuditDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockInAuditDetailQuery, StockInAuditDetailQueryVariables>(StockInAuditDetailDocument, options);
      }
export function useStockInAuditDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockInAuditDetailQuery, StockInAuditDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockInAuditDetailQuery, StockInAuditDetailQueryVariables>(StockInAuditDetailDocument, options);
        }
export type StockInAuditDetailQueryHookResult = ReturnType<typeof useStockInAuditDetailQuery>;
export type StockInAuditDetailLazyQueryHookResult = ReturnType<typeof useStockInAuditDetailLazyQuery>;
export type StockInAuditDetailQueryResult = Apollo.QueryResult<StockInAuditDetailQuery, StockInAuditDetailQueryVariables>;
export const InboundRecordDocument = gql`
    query inboundRecord($inOrderDetailInput: InOrderDetailInput) {
  getAuditDetail(inOrderDetailInput: $inOrderDetailInput) {
    inOrderTypeId
  }
  inboundRecord(inOrderDetailInput: $inOrderDetailInput) {
    commodityTypeId
    toBeInBoundList {
      commodityName
      skuTextDescription
      unitQuantity
      unitTypeName
      grossUnitQuantity
      totalQuantity
      totalTypeName
      conversion
      waitUnitQuantity
      waitTotalQuantity
      pricePosition
    }
    inboundRecordList {
      inboundRecordItems {
        commodityName
        skuTextDescription
        unitQuantity
        unitTypeName
        grossUnitQuantity
        totalQuantity
        totalTypeName
        unitPrice
        unitPriceTypeName
        conversion
        totalPrice
        batchCode
      }
      totalPrice
      inOrderCode
      createUserName
      inboundTime
      remark
      deliveryFee
    }
  }
}
    `;

/**
 * __useInboundRecordQuery__
 *
 * To run a query within a React component, call `useInboundRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useInboundRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInboundRecordQuery({
 *   variables: {
 *      inOrderDetailInput: // value for 'inOrderDetailInput'
 *   },
 * });
 */
export function useInboundRecordQuery(baseOptions?: Apollo.QueryHookOptions<InboundRecordQuery, InboundRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InboundRecordQuery, InboundRecordQueryVariables>(InboundRecordDocument, options);
      }
export function useInboundRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InboundRecordQuery, InboundRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InboundRecordQuery, InboundRecordQueryVariables>(InboundRecordDocument, options);
        }
export type InboundRecordQueryHookResult = ReturnType<typeof useInboundRecordQuery>;
export type InboundRecordLazyQueryHookResult = ReturnType<typeof useInboundRecordLazyQuery>;
export type InboundRecordQueryResult = Apollo.QueryResult<InboundRecordQuery, InboundRecordQueryVariables>;
export const RejectedInOrderAuditDocument = gql`
    mutation rejectedInOrderAudit($rejectedInput: RejectedInput) {
  rejectedInOrderAudit(rejectedInput: $rejectedInput)
}
    `;
export type RejectedInOrderAuditMutationFn = Apollo.MutationFunction<RejectedInOrderAuditMutation, RejectedInOrderAuditMutationVariables>;

/**
 * __useRejectedInOrderAuditMutation__
 *
 * To run a mutation, you first call `useRejectedInOrderAuditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectedInOrderAuditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectedInOrderAuditMutation, { data, loading, error }] = useRejectedInOrderAuditMutation({
 *   variables: {
 *      rejectedInput: // value for 'rejectedInput'
 *   },
 * });
 */
export function useRejectedInOrderAuditMutation(baseOptions?: Apollo.MutationHookOptions<RejectedInOrderAuditMutation, RejectedInOrderAuditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectedInOrderAuditMutation, RejectedInOrderAuditMutationVariables>(RejectedInOrderAuditDocument, options);
      }
export type RejectedInOrderAuditMutationHookResult = ReturnType<typeof useRejectedInOrderAuditMutation>;
export type RejectedInOrderAuditMutationResult = Apollo.MutationResult<RejectedInOrderAuditMutation>;
export type RejectedInOrderAuditMutationOptions = Apollo.BaseMutationOptions<RejectedInOrderAuditMutation, RejectedInOrderAuditMutationVariables>;
export const RejectPurchaseOrderAuditDocument = gql`
    mutation rejectPurchaseOrderAudit($rejectedInput: RejectedInput) {
  rejectPurchaseOrderAudit(rejectedInput: $rejectedInput)
}
    `;
export type RejectPurchaseOrderAuditMutationFn = Apollo.MutationFunction<RejectPurchaseOrderAuditMutation, RejectPurchaseOrderAuditMutationVariables>;

/**
 * __useRejectPurchaseOrderAuditMutation__
 *
 * To run a mutation, you first call `useRejectPurchaseOrderAuditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectPurchaseOrderAuditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectPurchaseOrderAuditMutation, { data, loading, error }] = useRejectPurchaseOrderAuditMutation({
 *   variables: {
 *      rejectedInput: // value for 'rejectedInput'
 *   },
 * });
 */
export function useRejectPurchaseOrderAuditMutation(baseOptions?: Apollo.MutationHookOptions<RejectPurchaseOrderAuditMutation, RejectPurchaseOrderAuditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectPurchaseOrderAuditMutation, RejectPurchaseOrderAuditMutationVariables>(RejectPurchaseOrderAuditDocument, options);
      }
export type RejectPurchaseOrderAuditMutationHookResult = ReturnType<typeof useRejectPurchaseOrderAuditMutation>;
export type RejectPurchaseOrderAuditMutationResult = Apollo.MutationResult<RejectPurchaseOrderAuditMutation>;
export type RejectPurchaseOrderAuditMutationOptions = Apollo.BaseMutationOptions<RejectPurchaseOrderAuditMutation, RejectPurchaseOrderAuditMutationVariables>;
export const ConfirmInboundDocument = gql`
    mutation confirmInbound($confirmInput: ConfirmInput) {
  confirmInbound(confirmInput: $confirmInput)
}
    `;
export type ConfirmInboundMutationFn = Apollo.MutationFunction<ConfirmInboundMutation, ConfirmInboundMutationVariables>;

/**
 * __useConfirmInboundMutation__
 *
 * To run a mutation, you first call `useConfirmInboundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmInboundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmInboundMutation, { data, loading, error }] = useConfirmInboundMutation({
 *   variables: {
 *      confirmInput: // value for 'confirmInput'
 *   },
 * });
 */
export function useConfirmInboundMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmInboundMutation, ConfirmInboundMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmInboundMutation, ConfirmInboundMutationVariables>(ConfirmInboundDocument, options);
      }
export type ConfirmInboundMutationHookResult = ReturnType<typeof useConfirmInboundMutation>;
export type ConfirmInboundMutationResult = Apollo.MutationResult<ConfirmInboundMutation>;
export type ConfirmInboundMutationOptions = Apollo.BaseMutationOptions<ConfirmInboundMutation, ConfirmInboundMutationVariables>;
export const ConfirmPurchaseInBoundDocument = gql`
    mutation confirmPurchaseInBound($purchaseConfirmInput: PurchaseConfirmInput) {
  confirmPurchaseInBound(purchaseConfirmInput: $purchaseConfirmInput)
}
    `;
export type ConfirmPurchaseInBoundMutationFn = Apollo.MutationFunction<ConfirmPurchaseInBoundMutation, ConfirmPurchaseInBoundMutationVariables>;

/**
 * __useConfirmPurchaseInBoundMutation__
 *
 * To run a mutation, you first call `useConfirmPurchaseInBoundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmPurchaseInBoundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmPurchaseInBoundMutation, { data, loading, error }] = useConfirmPurchaseInBoundMutation({
 *   variables: {
 *      purchaseConfirmInput: // value for 'purchaseConfirmInput'
 *   },
 * });
 */
export function useConfirmPurchaseInBoundMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmPurchaseInBoundMutation, ConfirmPurchaseInBoundMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmPurchaseInBoundMutation, ConfirmPurchaseInBoundMutationVariables>(ConfirmPurchaseInBoundDocument, options);
      }
export type ConfirmPurchaseInBoundMutationHookResult = ReturnType<typeof useConfirmPurchaseInBoundMutation>;
export type ConfirmPurchaseInBoundMutationResult = Apollo.MutationResult<ConfirmPurchaseInBoundMutation>;
export type ConfirmPurchaseInBoundMutationOptions = Apollo.BaseMutationOptions<ConfirmPurchaseInBoundMutation, ConfirmPurchaseInBoundMutationVariables>;
export const FinishInboundDocument = gql`
    mutation finishInbound($inOrderId: ID!) {
  finishInbound(inOrderId: $inOrderId)
}
    `;
export type FinishInboundMutationFn = Apollo.MutationFunction<FinishInboundMutation, FinishInboundMutationVariables>;

/**
 * __useFinishInboundMutation__
 *
 * To run a mutation, you first call `useFinishInboundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFinishInboundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [finishInboundMutation, { data, loading, error }] = useFinishInboundMutation({
 *   variables: {
 *      inOrderId: // value for 'inOrderId'
 *   },
 * });
 */
export function useFinishInboundMutation(baseOptions?: Apollo.MutationHookOptions<FinishInboundMutation, FinishInboundMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FinishInboundMutation, FinishInboundMutationVariables>(FinishInboundDocument, options);
      }
export type FinishInboundMutationHookResult = ReturnType<typeof useFinishInboundMutation>;
export type FinishInboundMutationResult = Apollo.MutationResult<FinishInboundMutation>;
export type FinishInboundMutationOptions = Apollo.BaseMutationOptions<FinishInboundMutation, FinishInboundMutationVariables>;
export const FinishPurchaseOrderInBoundDocument = gql`
    mutation finishPurchaseOrderInBound($inOrderId: ID!) {
  finishPurchaseOrderInBound(inOrderId: $inOrderId)
}
    `;
export type FinishPurchaseOrderInBoundMutationFn = Apollo.MutationFunction<FinishPurchaseOrderInBoundMutation, FinishPurchaseOrderInBoundMutationVariables>;

/**
 * __useFinishPurchaseOrderInBoundMutation__
 *
 * To run a mutation, you first call `useFinishPurchaseOrderInBoundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFinishPurchaseOrderInBoundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [finishPurchaseOrderInBoundMutation, { data, loading, error }] = useFinishPurchaseOrderInBoundMutation({
 *   variables: {
 *      inOrderId: // value for 'inOrderId'
 *   },
 * });
 */
export function useFinishPurchaseOrderInBoundMutation(baseOptions?: Apollo.MutationHookOptions<FinishPurchaseOrderInBoundMutation, FinishPurchaseOrderInBoundMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FinishPurchaseOrderInBoundMutation, FinishPurchaseOrderInBoundMutationVariables>(FinishPurchaseOrderInBoundDocument, options);
      }
export type FinishPurchaseOrderInBoundMutationHookResult = ReturnType<typeof useFinishPurchaseOrderInBoundMutation>;
export type FinishPurchaseOrderInBoundMutationResult = Apollo.MutationResult<FinishPurchaseOrderInBoundMutation>;
export type FinishPurchaseOrderInBoundMutationOptions = Apollo.BaseMutationOptions<FinishPurchaseOrderInBoundMutation, FinishPurchaseOrderInBoundMutationVariables>;
export const PageOtherInOrderDocument = gql`
    query pageOtherInOrder($page: Page, $pageOtherInOrderInput: PageOtherInOrderInput) {
  pageOtherInOrder(page: $page, pageOtherInOrderInput: $pageOtherInOrderInput) {
    records {
      inOrderId
      inOrderTypeId
      inOrderTypeName
      inOrderCode
      commodityTypeId
      commodityTypeName
      customerTypeId
      customerTypeName
      customerId
      customerName
      inOrderStatus
      inOrderStatusName
      warehouseId
      warehouseName
      supplierId
      supplierName
      createUserName
      createTime
      inOrderDescription
      errorDescription
      totalPrice
      commodities {
        unitQuantity
        unitType
        unitTypeName
        totalQuantity
        totalType
        totalTypeName
        unitPrice
        unitPriceType
        unitPriceTypeName
        totalPrice
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
      }
      createBy
      belongOrg {
        orgId
        orgName
      }
      wmsMarkList {
        appId
        businessType
        labelContent
        markId
        tenantId
      }
      inStockRecordCount
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageOtherInOrderQuery__
 *
 * To run a query within a React component, call `usePageOtherInOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageOtherInOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageOtherInOrderQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageOtherInOrderInput: // value for 'pageOtherInOrderInput'
 *   },
 * });
 */
export function usePageOtherInOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageOtherInOrderQuery, PageOtherInOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageOtherInOrderQuery, PageOtherInOrderQueryVariables>(PageOtherInOrderDocument, options);
      }
export function usePageOtherInOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageOtherInOrderQuery, PageOtherInOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageOtherInOrderQuery, PageOtherInOrderQueryVariables>(PageOtherInOrderDocument, options);
        }
export type PageOtherInOrderQueryHookResult = ReturnType<typeof usePageOtherInOrderQuery>;
export type PageOtherInOrderLazyQueryHookResult = ReturnType<typeof usePageOtherInOrderLazyQuery>;
export type PageOtherInOrderQueryResult = Apollo.QueryResult<PageOtherInOrderQuery, PageOtherInOrderQueryVariables>;
export const CreateOtherInOrderDocument = gql`
    mutation createOtherInOrder($createOtherInOrderInput: CreateOtherInOrderInput) {
  createOtherInOrder(createOtherInOrderInput: $createOtherInOrderInput)
}
    `;
export type CreateOtherInOrderMutationFn = Apollo.MutationFunction<CreateOtherInOrderMutation, CreateOtherInOrderMutationVariables>;

/**
 * __useCreateOtherInOrderMutation__
 *
 * To run a mutation, you first call `useCreateOtherInOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOtherInOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOtherInOrderMutation, { data, loading, error }] = useCreateOtherInOrderMutation({
 *   variables: {
 *      createOtherInOrderInput: // value for 'createOtherInOrderInput'
 *   },
 * });
 */
export function useCreateOtherInOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOtherInOrderMutation, CreateOtherInOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOtherInOrderMutation, CreateOtherInOrderMutationVariables>(CreateOtherInOrderDocument, options);
      }
export type CreateOtherInOrderMutationHookResult = ReturnType<typeof useCreateOtherInOrderMutation>;
export type CreateOtherInOrderMutationResult = Apollo.MutationResult<CreateOtherInOrderMutation>;
export type CreateOtherInOrderMutationOptions = Apollo.BaseMutationOptions<CreateOtherInOrderMutation, CreateOtherInOrderMutationVariables>;
export const ModifyOtherInOrderDocument = gql`
    mutation modifyOtherInOrder($modifyOtherInOrderInput: ModifyOtherInOrderInput) {
  modifyOtherInOrder(modifyOtherInOrderInput: $modifyOtherInOrderInput)
}
    `;
export type ModifyOtherInOrderMutationFn = Apollo.MutationFunction<ModifyOtherInOrderMutation, ModifyOtherInOrderMutationVariables>;

/**
 * __useModifyOtherInOrderMutation__
 *
 * To run a mutation, you first call `useModifyOtherInOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModifyOtherInOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modifyOtherInOrderMutation, { data, loading, error }] = useModifyOtherInOrderMutation({
 *   variables: {
 *      modifyOtherInOrderInput: // value for 'modifyOtherInOrderInput'
 *   },
 * });
 */
export function useModifyOtherInOrderMutation(baseOptions?: Apollo.MutationHookOptions<ModifyOtherInOrderMutation, ModifyOtherInOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ModifyOtherInOrderMutation, ModifyOtherInOrderMutationVariables>(ModifyOtherInOrderDocument, options);
      }
export type ModifyOtherInOrderMutationHookResult = ReturnType<typeof useModifyOtherInOrderMutation>;
export type ModifyOtherInOrderMutationResult = Apollo.MutationResult<ModifyOtherInOrderMutation>;
export type ModifyOtherInOrderMutationOptions = Apollo.BaseMutationOptions<ModifyOtherInOrderMutation, ModifyOtherInOrderMutationVariables>;
export const SubmitOtherInOrderDocument = gql`
    mutation submitOtherInOrder($inOrderId: ID!) {
  submitOtherInOrder(inOrderId: $inOrderId)
}
    `;
export type SubmitOtherInOrderMutationFn = Apollo.MutationFunction<SubmitOtherInOrderMutation, SubmitOtherInOrderMutationVariables>;

/**
 * __useSubmitOtherInOrderMutation__
 *
 * To run a mutation, you first call `useSubmitOtherInOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitOtherInOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitOtherInOrderMutation, { data, loading, error }] = useSubmitOtherInOrderMutation({
 *   variables: {
 *      inOrderId: // value for 'inOrderId'
 *   },
 * });
 */
export function useSubmitOtherInOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitOtherInOrderMutation, SubmitOtherInOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitOtherInOrderMutation, SubmitOtherInOrderMutationVariables>(SubmitOtherInOrderDocument, options);
      }
export type SubmitOtherInOrderMutationHookResult = ReturnType<typeof useSubmitOtherInOrderMutation>;
export type SubmitOtherInOrderMutationResult = Apollo.MutationResult<SubmitOtherInOrderMutation>;
export type SubmitOtherInOrderMutationOptions = Apollo.BaseMutationOptions<SubmitOtherInOrderMutation, SubmitOtherInOrderMutationVariables>;
export const CancelOtherInOrderDocument = gql`
    mutation cancelOtherInOrder($cancelOtherInOrderInput: CancelOtherInOrderInput) {
  cancelOtherInOrder(cancelOtherInOrderInput: $cancelOtherInOrderInput)
}
    `;
export type CancelOtherInOrderMutationFn = Apollo.MutationFunction<CancelOtherInOrderMutation, CancelOtherInOrderMutationVariables>;

/**
 * __useCancelOtherInOrderMutation__
 *
 * To run a mutation, you first call `useCancelOtherInOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelOtherInOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelOtherInOrderMutation, { data, loading, error }] = useCancelOtherInOrderMutation({
 *   variables: {
 *      cancelOtherInOrderInput: // value for 'cancelOtherInOrderInput'
 *   },
 * });
 */
export function useCancelOtherInOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelOtherInOrderMutation, CancelOtherInOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelOtherInOrderMutation, CancelOtherInOrderMutationVariables>(CancelOtherInOrderDocument, options);
      }
export type CancelOtherInOrderMutationHookResult = ReturnType<typeof useCancelOtherInOrderMutation>;
export type CancelOtherInOrderMutationResult = Apollo.MutationResult<CancelOtherInOrderMutation>;
export type CancelOtherInOrderMutationOptions = Apollo.BaseMutationOptions<CancelOtherInOrderMutation, CancelOtherInOrderMutationVariables>;
export const UpdateTransferInOrderWarehouseDocument = gql`
    mutation updateTransferInOrderWarehouse($updateTransferInOrderWarehouseInput: UpdateTransferInOrderWarehouseInput) {
  updateTransferInOrderWarehouse(
    updateTransferInOrderWarehouseInput: $updateTransferInOrderWarehouseInput
  )
}
    `;
export type UpdateTransferInOrderWarehouseMutationFn = Apollo.MutationFunction<UpdateTransferInOrderWarehouseMutation, UpdateTransferInOrderWarehouseMutationVariables>;

/**
 * __useUpdateTransferInOrderWarehouseMutation__
 *
 * To run a mutation, you first call `useUpdateTransferInOrderWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransferInOrderWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransferInOrderWarehouseMutation, { data, loading, error }] = useUpdateTransferInOrderWarehouseMutation({
 *   variables: {
 *      updateTransferInOrderWarehouseInput: // value for 'updateTransferInOrderWarehouseInput'
 *   },
 * });
 */
export function useUpdateTransferInOrderWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransferInOrderWarehouseMutation, UpdateTransferInOrderWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransferInOrderWarehouseMutation, UpdateTransferInOrderWarehouseMutationVariables>(UpdateTransferInOrderWarehouseDocument, options);
      }
export type UpdateTransferInOrderWarehouseMutationHookResult = ReturnType<typeof useUpdateTransferInOrderWarehouseMutation>;
export type UpdateTransferInOrderWarehouseMutationResult = Apollo.MutationResult<UpdateTransferInOrderWarehouseMutation>;
export type UpdateTransferInOrderWarehouseMutationOptions = Apollo.BaseMutationOptions<UpdateTransferInOrderWarehouseMutation, UpdateTransferInOrderWarehouseMutationVariables>;
export const OmsPurchasePageDocument = gql`
    query omsPurchasePage($input: OmsPurchasePageInput, $page: Page) {
  omsPurchasePage(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      commodityItemsList {
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
        id
        index
        price
        priceType {
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
      }
      commodityType
      commodityTypeDesc
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
      }
      id
      runCode
      status
      statusName
      submitTime
      submitUser {
        phoneNum
        userId
        userName
      }
      transportInfo {
        cabinetBatchCode
        cabinetCode
        carNo
        trailerNo
        matchSourceName
        purchaseCode
      }
      type
      typeName
      supplierList {
        supplierId
        supplierName
      }
      code
      subType
      subTypeName
      isExceptional
    }
    totalRecords
  }
}
    `;

/**
 * __useOmsPurchasePageQuery__
 *
 * To run a query within a React component, call `useOmsPurchasePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useOmsPurchasePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOmsPurchasePageQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useOmsPurchasePageQuery(baseOptions?: Apollo.QueryHookOptions<OmsPurchasePageQuery, OmsPurchasePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OmsPurchasePageQuery, OmsPurchasePageQueryVariables>(OmsPurchasePageDocument, options);
      }
export function useOmsPurchasePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OmsPurchasePageQuery, OmsPurchasePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OmsPurchasePageQuery, OmsPurchasePageQueryVariables>(OmsPurchasePageDocument, options);
        }
export type OmsPurchasePageQueryHookResult = ReturnType<typeof useOmsPurchasePageQuery>;
export type OmsPurchasePageLazyQueryHookResult = ReturnType<typeof useOmsPurchasePageLazyQuery>;
export type OmsPurchasePageQueryResult = Apollo.QueryResult<OmsPurchasePageQuery, OmsPurchasePageQueryVariables>;
export const OmsPurchaseDetailDocument = gql`
    query omsPurchaseDetail($input: OmsPurchaseDetailInput) {
  omsPurchaseDetail(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    commodityItemsList {
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
      id
      index
      price
      priceType {
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
      markList
      runCode
    }
    commodityType
    commodityTypeDesc
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
    }
    id
    runCode
    status
    statusName
    submitTime
    submitUser {
      phoneNum
      userId
      userName
    }
    transportInfo {
      cabinetBatchCode
      cabinetCode
      carNo
      trailerNo
      matchSourceName
      purchaseCode
    }
    type
    typeName
    supplierList {
      supplierId
      supplierName
    }
    code
    subType
    subTypeName
    isExceptional
    netWeightExceptionRatio
  }
}
    `;

/**
 * __useOmsPurchaseDetailQuery__
 *
 * To run a query within a React component, call `useOmsPurchaseDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useOmsPurchaseDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOmsPurchaseDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOmsPurchaseDetailQuery(baseOptions?: Apollo.QueryHookOptions<OmsPurchaseDetailQuery, OmsPurchaseDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OmsPurchaseDetailQuery, OmsPurchaseDetailQueryVariables>(OmsPurchaseDetailDocument, options);
      }
export function useOmsPurchaseDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OmsPurchaseDetailQuery, OmsPurchaseDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OmsPurchaseDetailQuery, OmsPurchaseDetailQueryVariables>(OmsPurchaseDetailDocument, options);
        }
export type OmsPurchaseDetailQueryHookResult = ReturnType<typeof useOmsPurchaseDetailQuery>;
export type OmsPurchaseDetailLazyQueryHookResult = ReturnType<typeof useOmsPurchaseDetailLazyQuery>;
export type OmsPurchaseDetailQueryResult = Apollo.QueryResult<OmsPurchaseDetailQuery, OmsPurchaseDetailQueryVariables>;
export const OmsPurchaseStatusDocument = gql`
    query omsPurchaseStatus {
  omsPurchaseStatus {
    count
    status
  }
}
    `;

/**
 * __useOmsPurchaseStatusQuery__
 *
 * To run a query within a React component, call `useOmsPurchaseStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useOmsPurchaseStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOmsPurchaseStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useOmsPurchaseStatusQuery(baseOptions?: Apollo.QueryHookOptions<OmsPurchaseStatusQuery, OmsPurchaseStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OmsPurchaseStatusQuery, OmsPurchaseStatusQueryVariables>(OmsPurchaseStatusDocument, options);
      }
export function useOmsPurchaseStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OmsPurchaseStatusQuery, OmsPurchaseStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OmsPurchaseStatusQuery, OmsPurchaseStatusQueryVariables>(OmsPurchaseStatusDocument, options);
        }
export type OmsPurchaseStatusQueryHookResult = ReturnType<typeof useOmsPurchaseStatusQuery>;
export type OmsPurchaseStatusLazyQueryHookResult = ReturnType<typeof useOmsPurchaseStatusLazyQuery>;
export type OmsPurchaseStatusQueryResult = Apollo.QueryResult<OmsPurchaseStatusQuery, OmsPurchaseStatusQueryVariables>;
export const ConfirmOmsPurchaseDocument = gql`
    mutation confirmOmsPurchase($input: ConfirmOmsPurchaseInput) {
  confirmOmsPurchase(input: $input)
}
    `;
export type ConfirmOmsPurchaseMutationFn = Apollo.MutationFunction<ConfirmOmsPurchaseMutation, ConfirmOmsPurchaseMutationVariables>;

/**
 * __useConfirmOmsPurchaseMutation__
 *
 * To run a mutation, you first call `useConfirmOmsPurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmOmsPurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmOmsPurchaseMutation, { data, loading, error }] = useConfirmOmsPurchaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmOmsPurchaseMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmOmsPurchaseMutation, ConfirmOmsPurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmOmsPurchaseMutation, ConfirmOmsPurchaseMutationVariables>(ConfirmOmsPurchaseDocument, options);
      }
export type ConfirmOmsPurchaseMutationHookResult = ReturnType<typeof useConfirmOmsPurchaseMutation>;
export type ConfirmOmsPurchaseMutationResult = Apollo.MutationResult<ConfirmOmsPurchaseMutation>;
export type ConfirmOmsPurchaseMutationOptions = Apollo.BaseMutationOptions<ConfirmOmsPurchaseMutation, ConfirmOmsPurchaseMutationVariables>;
export const CountInOrderAuditDocument = gql`
    query countInOrderAudit {
  countInOrderAudit {
    damageProduct
    defectiveProduct
    finishedProduct
    rawMaterial
    returnProduct
    semiFinishedProduct
    subMaterial
    turnoverBasket
  }
}
    `;

/**
 * __useCountInOrderAuditQuery__
 *
 * To run a query within a React component, call `useCountInOrderAuditQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountInOrderAuditQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountInOrderAuditQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountInOrderAuditQuery(baseOptions?: Apollo.QueryHookOptions<CountInOrderAuditQuery, CountInOrderAuditQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountInOrderAuditQuery, CountInOrderAuditQueryVariables>(CountInOrderAuditDocument, options);
      }
export function useCountInOrderAuditLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountInOrderAuditQuery, CountInOrderAuditQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountInOrderAuditQuery, CountInOrderAuditQueryVariables>(CountInOrderAuditDocument, options);
        }
export type CountInOrderAuditQueryHookResult = ReturnType<typeof useCountInOrderAuditQuery>;
export type CountInOrderAuditLazyQueryHookResult = ReturnType<typeof useCountInOrderAuditLazyQuery>;
export type CountInOrderAuditQueryResult = Apollo.QueryResult<CountInOrderAuditQuery, CountInOrderAuditQueryVariables>;
export const UpdateOrderTransferInOrderWarehouseDocument = gql`
    mutation updateOrderTransferInOrderWarehouse($input: PitayaUpdateWarehouseInput) {
  updateOrderTransferInOrderWarehouse(input: $input)
}
    `;
export type UpdateOrderTransferInOrderWarehouseMutationFn = Apollo.MutationFunction<UpdateOrderTransferInOrderWarehouseMutation, UpdateOrderTransferInOrderWarehouseMutationVariables>;

/**
 * __useUpdateOrderTransferInOrderWarehouseMutation__
 *
 * To run a mutation, you first call `useUpdateOrderTransferInOrderWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderTransferInOrderWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderTransferInOrderWarehouseMutation, { data, loading, error }] = useUpdateOrderTransferInOrderWarehouseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrderTransferInOrderWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderTransferInOrderWarehouseMutation, UpdateOrderTransferInOrderWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderTransferInOrderWarehouseMutation, UpdateOrderTransferInOrderWarehouseMutationVariables>(UpdateOrderTransferInOrderWarehouseDocument, options);
      }
export type UpdateOrderTransferInOrderWarehouseMutationHookResult = ReturnType<typeof useUpdateOrderTransferInOrderWarehouseMutation>;
export type UpdateOrderTransferInOrderWarehouseMutationResult = Apollo.MutationResult<UpdateOrderTransferInOrderWarehouseMutation>;
export type UpdateOrderTransferInOrderWarehouseMutationOptions = Apollo.BaseMutationOptions<UpdateOrderTransferInOrderWarehouseMutation, UpdateOrderTransferInOrderWarehouseMutationVariables>;
export const PassOmsPurchaseDocument = gql`
    mutation passOmsPurchase($input: PassOmsPurchaseInput) {
  passOmsPurchase(input: $input)
}
    `;
export type PassOmsPurchaseMutationFn = Apollo.MutationFunction<PassOmsPurchaseMutation, PassOmsPurchaseMutationVariables>;

/**
 * __usePassOmsPurchaseMutation__
 *
 * To run a mutation, you first call `usePassOmsPurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePassOmsPurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passOmsPurchaseMutation, { data, loading, error }] = usePassOmsPurchaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePassOmsPurchaseMutation(baseOptions?: Apollo.MutationHookOptions<PassOmsPurchaseMutation, PassOmsPurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PassOmsPurchaseMutation, PassOmsPurchaseMutationVariables>(PassOmsPurchaseDocument, options);
      }
export type PassOmsPurchaseMutationHookResult = ReturnType<typeof usePassOmsPurchaseMutation>;
export type PassOmsPurchaseMutationResult = Apollo.MutationResult<PassOmsPurchaseMutation>;
export type PassOmsPurchaseMutationOptions = Apollo.BaseMutationOptions<PassOmsPurchaseMutation, PassOmsPurchaseMutationVariables>;
export const OtherInOrderDetailDocument = gql`
    query otherInOrderDetail($input: OtherInOrderDetailInput) {
  otherInOrderDetail(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    supplierId
    supplierName
    billId
    commodities {
      totalPrice
      totalQuantity
      totalType
      totalTypeName
      unitPrice
      unitPriceType
      unitPriceTypeName
      unitQuantity
      unitType
      unitTypeName
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
    }
    commodityTypeId
    commodityTypeName
    createBy
    createTime
    createUserName
    customerId
    customerName
    customerTypeId
    customerTypeName
    errorDescription
    inOrderCode
    inOrderDescription
    inOrderId
    inOrderStatus
    inOrderStatusName
    inOrderTypeId
    inOrderTypeName
    totalPrice
    warehouseId
    warehouseName
    wmsMarkList {
      appId
      businessType
      labelContent
      markId
      tenantId
    }
    inStockRecordCount
  }
}
    `;

/**
 * __useOtherInOrderDetailQuery__
 *
 * To run a query within a React component, call `useOtherInOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useOtherInOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOtherInOrderDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOtherInOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<OtherInOrderDetailQuery, OtherInOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OtherInOrderDetailQuery, OtherInOrderDetailQueryVariables>(OtherInOrderDetailDocument, options);
      }
export function useOtherInOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OtherInOrderDetailQuery, OtherInOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OtherInOrderDetailQuery, OtherInOrderDetailQueryVariables>(OtherInOrderDetailDocument, options);
        }
export type OtherInOrderDetailQueryHookResult = ReturnType<typeof useOtherInOrderDetailQuery>;
export type OtherInOrderDetailLazyQueryHookResult = ReturnType<typeof useOtherInOrderDetailLazyQuery>;
export type OtherInOrderDetailQueryResult = Apollo.QueryResult<OtherInOrderDetailQuery, OtherInOrderDetailQueryVariables>;
export const ListWmsMarkDocument = gql`
    query listWmsMark($input: ListWmsMarkInput) {
  listWmsMark(input: $input) {
    businessType
    labelContent
    markId
  }
}
    `;

/**
 * __useListWmsMarkQuery__
 *
 * To run a query within a React component, call `useListWmsMarkQuery` and pass it any options that fit your needs.
 * When your component renders, `useListWmsMarkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListWmsMarkQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListWmsMarkQuery(baseOptions?: Apollo.QueryHookOptions<ListWmsMarkQuery, ListWmsMarkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListWmsMarkQuery, ListWmsMarkQueryVariables>(ListWmsMarkDocument, options);
      }
export function useListWmsMarkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListWmsMarkQuery, ListWmsMarkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListWmsMarkQuery, ListWmsMarkQueryVariables>(ListWmsMarkDocument, options);
        }
export type ListWmsMarkQueryHookResult = ReturnType<typeof useListWmsMarkQuery>;
export type ListWmsMarkLazyQueryHookResult = ReturnType<typeof useListWmsMarkLazyQuery>;
export type ListWmsMarkQueryResult = Apollo.QueryResult<ListWmsMarkQuery, ListWmsMarkQueryVariables>;
export const OtherInOrderRecordDocument = gql`
    query otherInOrderRecord($input: OtherInOrderRecordInput) {
  otherInOrderRecord(input: $input) {
    commodityTypeId
    inApplyCode
    inboundRecordList {
      createUserName
      deliveryFee
      inOrderCode
      inboundRecordItems {
        commodityName
        commoditySkuId
        skuTextDescription
        batchCode
        batchId
        conversion
        grossUnitQuantity
        totalPrice
        totalQuantity
        totalType
        totalTypeName
        unitPrice
        unitPriceType
        unitPriceTypeName
        unitQuantity
        unitType
        unitTypeName
      }
      inboundTime
      remark
      totalPrice
      userId
    }
    toBeInBoundList {
      commodityName
      commoditySkuId
      conversion
      grossUnitQuantity
      pricePosition
      skuTextDescription
      totalQuantity
      totalType
      totalTypeName
      unitQuantity
      unitType
      unitTypeName
      waitTotalQuantity
      waitUnitQuantity
    }
  }
}
    `;

/**
 * __useOtherInOrderRecordQuery__
 *
 * To run a query within a React component, call `useOtherInOrderRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useOtherInOrderRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOtherInOrderRecordQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOtherInOrderRecordQuery(baseOptions?: Apollo.QueryHookOptions<OtherInOrderRecordQuery, OtherInOrderRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OtherInOrderRecordQuery, OtherInOrderRecordQueryVariables>(OtherInOrderRecordDocument, options);
      }
export function useOtherInOrderRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OtherInOrderRecordQuery, OtherInOrderRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OtherInOrderRecordQuery, OtherInOrderRecordQueryVariables>(OtherInOrderRecordDocument, options);
        }
export type OtherInOrderRecordQueryHookResult = ReturnType<typeof useOtherInOrderRecordQuery>;
export type OtherInOrderRecordLazyQueryHookResult = ReturnType<typeof useOtherInOrderRecordLazyQuery>;
export type OtherInOrderRecordQueryResult = Apollo.QueryResult<OtherInOrderRecordQuery, OtherInOrderRecordQueryVariables>;