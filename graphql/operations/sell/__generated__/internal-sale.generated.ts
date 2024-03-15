import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type InternalSaleOrderQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaInternalSaleIdInput;
}>;


export type InternalSaleOrderQuery = { internalSaleOrder?: { __typename?: 'InternalSalePayload', billMainId?: string, commodityTotalSalePrice?: number, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, remark?: string, saleCode?: string, saleId?: string, saleStatus?: SchemaTypes.SaleStatusEnum, saleStatusName?: string, saleTime?: number, templateId?: string, totalTransportFees?: number, saleSubType?: SchemaTypes.SaleSubType, saleSubTypeName?: string, appType?: SchemaTypes.AppType, countSaleReturnOrders?: number, runCode?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, commodities?: Array<{ __typename?: 'InternalSaleCommodityPayload', itemId?: string, saleId?: string, salePrice?: number, saleTotalPrice?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batchInfoWithLock?: { __typename?: 'BatchInfoWithLock', batchCode?: string, batchId?: string, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, logs?: Array<{ __typename?: 'InternalSaleLogPayload', createTime?: number, logType?: SchemaTypes.InternalSaleLogEnum, logTypeText?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, saleReturnOrders?: Array<{ __typename?: 'PitayaReturnDetailPayload', createTime?: number, differenceOrderType?: SchemaTypes.DifferenceOrderType, remark?: string, returnCode?: string, returnId?: string, returnStatus?: SchemaTypes.ReturnStatusEnum, returnStatusName?: string, returnTime?: number, returnType?: SchemaTypes.ReturnTypeEnum, returnTypeName?: string, saleOrderCode?: string, saleOrderId?: string, saleReturnWay?: SchemaTypes.SaleReturnWayEnum, saleReturnWayName?: string, saleTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, bill2FetchData?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, commodities?: Array<{ __typename?: 'PitayaReturnCommodityDetailPayload', amount?: number, commodityType?: number, commodityTypeName?: string, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, returnId?: string, returnType?: SchemaTypes.ReturnTypeEnum, returnableAmount?: number, returnableQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batches?: Array<{ __typename?: 'PitayaReturnCommodityBatchPayload', itemId?: string, index?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, quantity?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, sourceBatchCode?: string, sourceBatchId?: string, quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, saleData?: { __typename?: 'PitayaSaleData', salePrice?: number, saleTotalPrice?: number, quantity?: number, saleOrderId?: number }, stockQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, sourceBill2Data?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } }> } };

export type PageInternalSaleQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaPageInternalSaleInput;
  page: SchemaTypes.Page;
}>;


export type PageInternalSaleQuery = { pageInternalSale?: { __typename?: 'PageInternalSalePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'InternalSalePayload', billMainId?: string, commodityTotalSalePrice?: number, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, remark?: string, saleCode?: string, saleId?: string, saleStatus?: SchemaTypes.SaleStatusEnum, saleStatusName?: string, saleTime?: number, templateId?: string, totalTransportFees?: number, saleSubType?: SchemaTypes.SaleSubType, saleSubTypeName?: string, appType?: SchemaTypes.AppType, countSaleReturnOrders?: number, runCode?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, ruleCode?: string, ruleId?: string, showField?: number, paymentType?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, commodities?: Array<{ __typename?: 'InternalSaleCommodityPayload', itemId?: string, saleId?: string, salePrice?: number, saleTotalPrice?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batchInfoWithLock?: { __typename?: 'BatchInfoWithLock', batchCode?: string, batchId?: string, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, logs?: Array<{ __typename?: 'InternalSaleLogPayload', createTime?: number, logType?: SchemaTypes.InternalSaleLogEnum, logTypeText?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, saleReturnOrders?: Array<{ __typename?: 'PitayaReturnDetailPayload', createTime?: number, differenceOrderType?: SchemaTypes.DifferenceOrderType, remark?: string, returnCode?: string, returnId?: string, returnStatus?: SchemaTypes.ReturnStatusEnum, returnStatusName?: string, returnTime?: number, returnType?: SchemaTypes.ReturnTypeEnum, returnTypeName?: string, saleOrderCode?: string, saleOrderId?: string, saleReturnWay?: SchemaTypes.SaleReturnWayEnum, saleReturnWayName?: string, saleTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, bill2FetchData?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, commodities?: Array<{ __typename?: 'PitayaReturnCommodityDetailPayload', amount?: number, commodityType?: number, commodityTypeName?: string, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, returnId?: string, returnType?: SchemaTypes.ReturnTypeEnum, returnableAmount?: number, returnableQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, batches?: Array<{ __typename?: 'PitayaReturnCommodityBatchPayload', index?: number, itemId?: string, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, quantity?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, quantity?: number, sourceBatchCode?: string, sourceBatchId?: string, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, saleData?: { __typename?: 'PitayaSaleData', quantity?: number, saleOrderId?: number, salePrice?: number, saleTotalPrice?: number }, stockQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }>, sourceBill2Data?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } }> }> } };

export type PitayaCountInternalSaleStatusQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type PitayaCountInternalSaleStatusQuery = { pitayaCountInternalSaleStatus?: { __typename?: 'CountInternalSaleStatusPayload', toBeDelivered?: number, toBeSubmitted?: number } };

export type CancelInternalSaleMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaInternalSaleIdInput;
}>;


export type CancelInternalSaleMutation = { cancelInternalSale?: boolean };

export type CreateInternalSaleMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaInternalSaleInput;
}>;


export type CreateInternalSaleMutation = { createInternalSale?: string };

export type SubmitInternalSaleMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaInternalSaleIdInput;
}>;


export type SubmitInternalSaleMutation = { submitInternalSale?: boolean };

export type UpdateInternalSaleMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaInternalSaleInput;
  saleId: SchemaTypes.Scalars['ID'];
}>;


export type UpdateInternalSaleMutation = { updateInternalSale?: string };

export type FmsListStockBatchCostPriceQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.StockBatchCostPriceInput;
}>;


export type FmsListStockBatchCostPriceQuery = { fmsListStockBatchCostPrice?: Array<{ __typename?: 'StockBatchCostPricePayload', commodityTypeId?: number, costPrice?: number, costPriceTag?: boolean, costUnitType?: number, currentBatchId?: string }> };

export type GetAppTypeByChannelIdQueryVariables = SchemaTypes.Exact<{
  channelId: SchemaTypes.Scalars['Int'];
}>;


export type GetAppTypeByChannelIdQuery = { getAppTypeByChannelId?: SchemaTypes.AppType };

export type PitayaInternalSaleAfterSaleBadgeQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.InternalSaleAfterSaleBadgeInput;
}>;


export type PitayaInternalSaleAfterSaleBadgeQuery = { pitayaInternalSaleAfterSaleBadge?: { __typename?: 'InternalSaleAfterSaleBadgePayload', toBeDealt?: number } };


export const InternalSaleOrderDocument = gql`
    query internalSaleOrder($input: PitayaInternalSaleIDInput!) {
  internalSaleOrder(input: $input) {
    belongOrg {
      orgId
      orgName
    }
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
      paymentType
      ruleCode
      ruleId
      showField
      supplier {
        supplierId
        supplierName
      }
    }
    billMainId
    commodities {
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
      itemId
      saleId
      salePrice
      saleTotalPrice
      batchInfoWithLock {
        batchCode
        batchId
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
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
      mark
      markName
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
    commodityTotalSalePrice
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
    remark
    saleCode
    saleId
    saleStatus
    saleStatusName
    saleTime
    templateId
    totalTransportFees
    warehouse {
      warehouseId
      warehouseName
    }
    logs {
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      logType
      logTypeText
    }
    saleSubType
    saleSubTypeName
    appType
    saleReturnOrders {
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
      bill2FetchData {
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
        templateId
        totalTransportFees
      }
      commodities {
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
        batches {
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
          itemId
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
          index
        }
        commodityType
        commodityTypeName
        mark
        markName
        returnId
        returnType
        returnableAmount
        returnableQuantity
        saleData {
          salePrice
          saleTotalPrice
          quantity
          saleOrderId
        }
        stockQuantity {
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
      }
      createTime
      differenceOrderType
      remark
      returnCode
      returnId
      returnStatus
      returnStatusName
      returnTime
      returnType
      returnTypeName
      saleOrderCode
      saleOrderId
      saleReturnWay
      saleReturnWayName
      saleTime
      sourceBill2Data {
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
        templateId
        totalTransportFees
      }
    }
    countSaleReturnOrders
    runCode
  }
}
    `;

/**
 * __useInternalSaleOrderQuery__
 *
 * To run a query within a React component, call `useInternalSaleOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useInternalSaleOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInternalSaleOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInternalSaleOrderQuery(baseOptions: Apollo.QueryHookOptions<InternalSaleOrderQuery, InternalSaleOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InternalSaleOrderQuery, InternalSaleOrderQueryVariables>(InternalSaleOrderDocument, options);
      }
export function useInternalSaleOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InternalSaleOrderQuery, InternalSaleOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InternalSaleOrderQuery, InternalSaleOrderQueryVariables>(InternalSaleOrderDocument, options);
        }
export type InternalSaleOrderQueryHookResult = ReturnType<typeof useInternalSaleOrderQuery>;
export type InternalSaleOrderLazyQueryHookResult = ReturnType<typeof useInternalSaleOrderLazyQuery>;
export type InternalSaleOrderQueryResult = Apollo.QueryResult<InternalSaleOrderQuery, InternalSaleOrderQueryVariables>;
export const PageInternalSaleDocument = gql`
    query pageInternalSale($input: PitayaPageInternalSaleInput!, $page: Page!) {
  pageInternalSale(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
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
      billMainId
      commodities {
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
        itemId
        saleId
        salePrice
        saleTotalPrice
        batchInfoWithLock {
          customerBelongInfo {
            customerId
            customerName
            customerType
          }
          batchCode
          batchId
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
        mark
        markName
      }
      commodityTotalSalePrice
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
      remark
      saleCode
      saleId
      saleStatus
      saleStatusName
      saleTime
      templateId
      totalTransportFees
      warehouse {
        warehouseId
        warehouseName
      }
      saleSubType
      saleSubTypeName
      appType
      countSaleReturnOrders
      logs {
        createBy {
          phoneNum
          userId
          userName
        }
        createTime
        logType
        logTypeText
      }
      runCode
      saleReturnOrders {
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
        bill2FetchData {
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
          templateId
          totalTransportFees
        }
        commodities {
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
          batches {
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
            index
            itemId
          }
          commodityType
          commodityTypeName
          mark
          markName
          returnId
          returnType
          returnableAmount
          returnableQuantity
          saleData {
            quantity
            saleOrderId
            salePrice
            saleTotalPrice
          }
          stockQuantity {
            unit {
              unitId
              unitName
            }
            quantity
          }
        }
        createTime
        differenceOrderType
        remark
        returnCode
        returnId
        returnStatus
        returnStatusName
        returnTime
        returnType
        returnTypeName
        saleOrderCode
        saleOrderId
        saleReturnWay
        saleReturnWayName
        saleTime
        sourceBill2Data {
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
          templateId
          totalTransportFees
        }
      }
    }
    totalRecords
  }
}
    `;

/**
 * __usePageInternalSaleQuery__
 *
 * To run a query within a React component, call `usePageInternalSaleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageInternalSaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageInternalSaleQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageInternalSaleQuery(baseOptions: Apollo.QueryHookOptions<PageInternalSaleQuery, PageInternalSaleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageInternalSaleQuery, PageInternalSaleQueryVariables>(PageInternalSaleDocument, options);
      }
export function usePageInternalSaleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageInternalSaleQuery, PageInternalSaleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageInternalSaleQuery, PageInternalSaleQueryVariables>(PageInternalSaleDocument, options);
        }
export type PageInternalSaleQueryHookResult = ReturnType<typeof usePageInternalSaleQuery>;
export type PageInternalSaleLazyQueryHookResult = ReturnType<typeof usePageInternalSaleLazyQuery>;
export type PageInternalSaleQueryResult = Apollo.QueryResult<PageInternalSaleQuery, PageInternalSaleQueryVariables>;
export const PitayaCountInternalSaleStatusDocument = gql`
    query pitayaCountInternalSaleStatus {
  pitayaCountInternalSaleStatus {
    toBeDelivered
    toBeSubmitted
  }
}
    `;

/**
 * __usePitayaCountInternalSaleStatusQuery__
 *
 * To run a query within a React component, call `usePitayaCountInternalSaleStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaCountInternalSaleStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaCountInternalSaleStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function usePitayaCountInternalSaleStatusQuery(baseOptions?: Apollo.QueryHookOptions<PitayaCountInternalSaleStatusQuery, PitayaCountInternalSaleStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaCountInternalSaleStatusQuery, PitayaCountInternalSaleStatusQueryVariables>(PitayaCountInternalSaleStatusDocument, options);
      }
export function usePitayaCountInternalSaleStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaCountInternalSaleStatusQuery, PitayaCountInternalSaleStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaCountInternalSaleStatusQuery, PitayaCountInternalSaleStatusQueryVariables>(PitayaCountInternalSaleStatusDocument, options);
        }
export type PitayaCountInternalSaleStatusQueryHookResult = ReturnType<typeof usePitayaCountInternalSaleStatusQuery>;
export type PitayaCountInternalSaleStatusLazyQueryHookResult = ReturnType<typeof usePitayaCountInternalSaleStatusLazyQuery>;
export type PitayaCountInternalSaleStatusQueryResult = Apollo.QueryResult<PitayaCountInternalSaleStatusQuery, PitayaCountInternalSaleStatusQueryVariables>;
export const CancelInternalSaleDocument = gql`
    mutation cancelInternalSale($input: PitayaInternalSaleIDInput!) {
  cancelInternalSale(input: $input)
}
    `;
export type CancelInternalSaleMutationFn = Apollo.MutationFunction<CancelInternalSaleMutation, CancelInternalSaleMutationVariables>;

/**
 * __useCancelInternalSaleMutation__
 *
 * To run a mutation, you first call `useCancelInternalSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelInternalSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelInternalSaleMutation, { data, loading, error }] = useCancelInternalSaleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelInternalSaleMutation(baseOptions?: Apollo.MutationHookOptions<CancelInternalSaleMutation, CancelInternalSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelInternalSaleMutation, CancelInternalSaleMutationVariables>(CancelInternalSaleDocument, options);
      }
export type CancelInternalSaleMutationHookResult = ReturnType<typeof useCancelInternalSaleMutation>;
export type CancelInternalSaleMutationResult = Apollo.MutationResult<CancelInternalSaleMutation>;
export type CancelInternalSaleMutationOptions = Apollo.BaseMutationOptions<CancelInternalSaleMutation, CancelInternalSaleMutationVariables>;
export const CreateInternalSaleDocument = gql`
    mutation createInternalSale($input: PitayaInternalSaleInput!) {
  createInternalSale(input: $input)
}
    `;
export type CreateInternalSaleMutationFn = Apollo.MutationFunction<CreateInternalSaleMutation, CreateInternalSaleMutationVariables>;

/**
 * __useCreateInternalSaleMutation__
 *
 * To run a mutation, you first call `useCreateInternalSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInternalSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInternalSaleMutation, { data, loading, error }] = useCreateInternalSaleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInternalSaleMutation(baseOptions?: Apollo.MutationHookOptions<CreateInternalSaleMutation, CreateInternalSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInternalSaleMutation, CreateInternalSaleMutationVariables>(CreateInternalSaleDocument, options);
      }
export type CreateInternalSaleMutationHookResult = ReturnType<typeof useCreateInternalSaleMutation>;
export type CreateInternalSaleMutationResult = Apollo.MutationResult<CreateInternalSaleMutation>;
export type CreateInternalSaleMutationOptions = Apollo.BaseMutationOptions<CreateInternalSaleMutation, CreateInternalSaleMutationVariables>;
export const SubmitInternalSaleDocument = gql`
    mutation submitInternalSale($input: PitayaInternalSaleIDInput!) {
  submitInternalSale(input: $input)
}
    `;
export type SubmitInternalSaleMutationFn = Apollo.MutationFunction<SubmitInternalSaleMutation, SubmitInternalSaleMutationVariables>;

/**
 * __useSubmitInternalSaleMutation__
 *
 * To run a mutation, you first call `useSubmitInternalSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitInternalSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitInternalSaleMutation, { data, loading, error }] = useSubmitInternalSaleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitInternalSaleMutation(baseOptions?: Apollo.MutationHookOptions<SubmitInternalSaleMutation, SubmitInternalSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitInternalSaleMutation, SubmitInternalSaleMutationVariables>(SubmitInternalSaleDocument, options);
      }
export type SubmitInternalSaleMutationHookResult = ReturnType<typeof useSubmitInternalSaleMutation>;
export type SubmitInternalSaleMutationResult = Apollo.MutationResult<SubmitInternalSaleMutation>;
export type SubmitInternalSaleMutationOptions = Apollo.BaseMutationOptions<SubmitInternalSaleMutation, SubmitInternalSaleMutationVariables>;
export const UpdateInternalSaleDocument = gql`
    mutation updateInternalSale($input: PitayaInternalSaleInput!, $saleId: ID!) {
  updateInternalSale(input: $input, saleId: $saleId)
}
    `;
export type UpdateInternalSaleMutationFn = Apollo.MutationFunction<UpdateInternalSaleMutation, UpdateInternalSaleMutationVariables>;

/**
 * __useUpdateInternalSaleMutation__
 *
 * To run a mutation, you first call `useUpdateInternalSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInternalSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInternalSaleMutation, { data, loading, error }] = useUpdateInternalSaleMutation({
 *   variables: {
 *      input: // value for 'input'
 *      saleId: // value for 'saleId'
 *   },
 * });
 */
export function useUpdateInternalSaleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInternalSaleMutation, UpdateInternalSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInternalSaleMutation, UpdateInternalSaleMutationVariables>(UpdateInternalSaleDocument, options);
      }
export type UpdateInternalSaleMutationHookResult = ReturnType<typeof useUpdateInternalSaleMutation>;
export type UpdateInternalSaleMutationResult = Apollo.MutationResult<UpdateInternalSaleMutation>;
export type UpdateInternalSaleMutationOptions = Apollo.BaseMutationOptions<UpdateInternalSaleMutation, UpdateInternalSaleMutationVariables>;
export const FmsListStockBatchCostPriceDocument = gql`
    query fmsListStockBatchCostPrice($input: StockBatchCostPriceInput!) {
  fmsListStockBatchCostPrice(input: $input) {
    commodityTypeId
    costPrice
    costPriceTag
    costUnitType
    currentBatchId
  }
}
    `;

/**
 * __useFmsListStockBatchCostPriceQuery__
 *
 * To run a query within a React component, call `useFmsListStockBatchCostPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useFmsListStockBatchCostPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFmsListStockBatchCostPriceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFmsListStockBatchCostPriceQuery(baseOptions: Apollo.QueryHookOptions<FmsListStockBatchCostPriceQuery, FmsListStockBatchCostPriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FmsListStockBatchCostPriceQuery, FmsListStockBatchCostPriceQueryVariables>(FmsListStockBatchCostPriceDocument, options);
      }
export function useFmsListStockBatchCostPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FmsListStockBatchCostPriceQuery, FmsListStockBatchCostPriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FmsListStockBatchCostPriceQuery, FmsListStockBatchCostPriceQueryVariables>(FmsListStockBatchCostPriceDocument, options);
        }
export type FmsListStockBatchCostPriceQueryHookResult = ReturnType<typeof useFmsListStockBatchCostPriceQuery>;
export type FmsListStockBatchCostPriceLazyQueryHookResult = ReturnType<typeof useFmsListStockBatchCostPriceLazyQuery>;
export type FmsListStockBatchCostPriceQueryResult = Apollo.QueryResult<FmsListStockBatchCostPriceQuery, FmsListStockBatchCostPriceQueryVariables>;
export const GetAppTypeByChannelIdDocument = gql`
    query getAppTypeByChannelId($channelId: Int!) {
  getAppTypeByChannelId(channelId: $channelId)
}
    `;

/**
 * __useGetAppTypeByChannelIdQuery__
 *
 * To run a query within a React component, call `useGetAppTypeByChannelIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppTypeByChannelIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppTypeByChannelIdQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useGetAppTypeByChannelIdQuery(baseOptions: Apollo.QueryHookOptions<GetAppTypeByChannelIdQuery, GetAppTypeByChannelIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAppTypeByChannelIdQuery, GetAppTypeByChannelIdQueryVariables>(GetAppTypeByChannelIdDocument, options);
      }
export function useGetAppTypeByChannelIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppTypeByChannelIdQuery, GetAppTypeByChannelIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppTypeByChannelIdQuery, GetAppTypeByChannelIdQueryVariables>(GetAppTypeByChannelIdDocument, options);
        }
export type GetAppTypeByChannelIdQueryHookResult = ReturnType<typeof useGetAppTypeByChannelIdQuery>;
export type GetAppTypeByChannelIdLazyQueryHookResult = ReturnType<typeof useGetAppTypeByChannelIdLazyQuery>;
export type GetAppTypeByChannelIdQueryResult = Apollo.QueryResult<GetAppTypeByChannelIdQuery, GetAppTypeByChannelIdQueryVariables>;
export const PitayaInternalSaleAfterSaleBadgeDocument = gql`
    query pitayaInternalSaleAfterSaleBadge($input: InternalSaleAfterSaleBadgeInput!) {
  pitayaInternalSaleAfterSaleBadge(input: $input) {
    toBeDealt
  }
}
    `;

/**
 * __usePitayaInternalSaleAfterSaleBadgeQuery__
 *
 * To run a query within a React component, call `usePitayaInternalSaleAfterSaleBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaInternalSaleAfterSaleBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaInternalSaleAfterSaleBadgeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaInternalSaleAfterSaleBadgeQuery(baseOptions: Apollo.QueryHookOptions<PitayaInternalSaleAfterSaleBadgeQuery, PitayaInternalSaleAfterSaleBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaInternalSaleAfterSaleBadgeQuery, PitayaInternalSaleAfterSaleBadgeQueryVariables>(PitayaInternalSaleAfterSaleBadgeDocument, options);
      }
export function usePitayaInternalSaleAfterSaleBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaInternalSaleAfterSaleBadgeQuery, PitayaInternalSaleAfterSaleBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaInternalSaleAfterSaleBadgeQuery, PitayaInternalSaleAfterSaleBadgeQueryVariables>(PitayaInternalSaleAfterSaleBadgeDocument, options);
        }
export type PitayaInternalSaleAfterSaleBadgeQueryHookResult = ReturnType<typeof usePitayaInternalSaleAfterSaleBadgeQuery>;
export type PitayaInternalSaleAfterSaleBadgeLazyQueryHookResult = ReturnType<typeof usePitayaInternalSaleAfterSaleBadgeLazyQuery>;
export type PitayaInternalSaleAfterSaleBadgeQueryResult = Apollo.QueryResult<PitayaInternalSaleAfterSaleBadgeQuery, PitayaInternalSaleAfterSaleBadgeQueryVariables>;