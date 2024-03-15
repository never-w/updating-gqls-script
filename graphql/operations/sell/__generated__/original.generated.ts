import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageOriginalSaleQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageOriginalSaleInput?: SchemaTypes.InputMaybe<SchemaTypes.PageOriginalSaleInput>;
}>;


export type PageOriginalSaleQuery = { pageOriginalSale?: { __typename?: 'PageOriginalSalePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'OriginalSalePayload', outOrderStatus?: SchemaTypes.OutOrderStatusEnum, outOrderStatusDesc?: string, latestDescription?: string, outOrderId?: string, outOrderCode?: string, outOrderType?: SchemaTypes.OutOrderTypeEnum, outOrderTypeDesc?: string, commodityType?: SchemaTypes.PitayaCommodityTypeEnum, commodityTypeDesc?: string, createTime?: number, payMethod?: SchemaTypes.OutOrderPayModeEnum, payMethodDesc?: string, remark?: string, saleTotalPrice?: number, deliveryRequired?: number, commodityTypeId?: number, outOrderSaleTime?: number, undoingDeliveryFlag?: boolean, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodityList?: Array<{ __typename?: 'OriginalSaleCommodityPayload', outOrderItemId?: string, batchId?: string, batchCode?: string, salePrice?: number, totalQuantity?: number, unitQuantity?: number, saleTotalPrice?: number, outOrderId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, categoryId?: number, categoryName?: string, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, actualQuantity?: { __typename?: 'ActualQuantity', actualSalePrice?: number, actualSaleTotalPrice?: number, actualTotalQuantity?: number, actualUnitQuantity?: number, outOrderItemId?: string }, stockQuantity?: { __typename?: 'StockQuantity', totalQuantity?: number, unitQuantity?: number } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, saleIncomeOrder?: { __typename?: 'SaleIncomeOrderPayload', commodityTypeName?: string, createTime?: number, incomeCode?: string, incomeId?: string, incomeStatus?: SchemaTypes.IncomeStatus, incomeStatusName?: string, payMode?: SchemaTypes.OutOrderPayModeEnum, rejectReason?: string, remark?: string, saleCostOrderId?: string, saleTime?: number, sourceId?: string, sourceType?: SchemaTypes.SaleIncomeSourceType, sourceTypeName?: string, totalAmount?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, commoditiesList?: Array<{ __typename?: 'SaleIncomeOrderItemPayload', batchCode?: string, batchId?: number, commodityName?: string, goodsTotalQuantity?: number, goodsUnitQuantity?: number, incomeId?: string, incomeItemId?: string, outOrderItemId?: string, photosList?: Array<string>, quantity?: number, remark?: string, saleMoney?: number, salePrice?: number, totalSalePrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commodityBatchInfoList?: Array<{ __typename?: 'SaleIncomeCommodityBatchInfo', batchCode?: string, batchId?: string, goodsTotalQuantity?: number, goodsUnitQuantity?: number, incomeItemId?: string, outOrderItemId?: string, salePrice?: number, totalQuantity?: number, totalSalePrice?: number, unitQuantity?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, functionalField?: { __typename?: 'FunctionalField', saleTotalCost?: number, saleTotalPrice?: number }, logs?: Array<{ __typename?: 'SaleIncomeOrderLogPayload', createTime?: number, incomeId?: string, incomeLogId?: string, remark?: string, type?: SchemaTypes.SaleIncomeLogType, typeText?: string, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, originalSaleCommodityPayload?: Array<{ __typename?: 'OriginalSaleCommodityPayload', batchCode?: string, batchId?: string, outOrderId?: string, outOrderItemId?: string, salePrice?: number, saleTotalPrice?: number, totalQuantity?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, actualQuantity?: { __typename?: 'ActualQuantity', actualSalePrice?: number, actualSaleTotalPrice?: number, actualTotalQuantity?: number, actualUnitQuantity?: number, outOrderItemId?: string }, stockQuantity?: { __typename?: 'StockQuantity', totalQuantity?: number, unitQuantity?: number } }>, saleCostOrderItems?: Array<{ __typename?: 'SaleCostOrderItemPayload', materialFee?: number, outOrderItemId?: string, packagingFee?: number, saleCostOrderId?: string, saleCostOrderItemId?: string, commodity?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> } }> } };

export type OriginalSaleStatusQueryVariables = SchemaTypes.Exact<{
  originalSaleStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.OriginalSaleStatusInput>;
}>;


export type OriginalSaleStatusQuery = { originalSaleStatus?: { __typename?: 'OriginalSaleStatusPayload', toSubmit?: number, toOutbound?: number, rejected?: number } };

export type CreateOriginalSaleMutationVariables = SchemaTypes.Exact<{
  originalCreateInput?: SchemaTypes.InputMaybe<SchemaTypes.OriginalCreateInput>;
}>;


export type CreateOriginalSaleMutation = { createOriginalSale?: { __typename?: 'OriginalCreatePayload', outOrderId?: string } };

export type ListOriginalSaleCommodityCategoryQueryVariables = SchemaTypes.Exact<{
  listOriginalSaleCommodityCategoryInput?: SchemaTypes.InputMaybe<SchemaTypes.ListOriginalSaleCommodityCategoryInput>;
}>;


export type ListOriginalSaleCommodityCategoryQuery = { listOriginalSaleCommodityCategory?: Array<{ __typename?: 'ListOriginalSaleCommodityCategoryPayload', categoryId?: number, categoryName?: string }> };

export type ListOriginalSaleCommoditySpuQueryVariables = SchemaTypes.Exact<{
  listOriginalSaleCommoditySPUInput?: SchemaTypes.InputMaybe<SchemaTypes.ListOriginalSaleCommoditySpuInput>;
}>;


export type ListOriginalSaleCommoditySpuQuery = { listOriginalSaleCommoditySPU?: Array<{ __typename?: 'ListOriginalSaleCommoditySPUPayload', commodityId?: number, commodityName?: string }> };

export type ListOriginalSaleCommodityBatchQueryVariables = SchemaTypes.Exact<{
  listOriginalSaleCommodityBatchInput?: SchemaTypes.InputMaybe<SchemaTypes.ListOriginalSaleCommodityBatchInput>;
}>;


export type ListOriginalSaleCommodityBatchQuery = { listOriginalSaleCommodityBatch?: Array<{ __typename?: 'ListOriginalSaleCommodityBatchPayload', commodityType?: SchemaTypes.PitayaCommodityTypeEnum, commodityTypeDesc?: string, categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, countBatch?: number, batchId?: string, batchCode?: string, inStockTime?: number, quantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, categoryId?: number, categoryName?: string, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> };

export type OriginalSaleOrderQueryVariables = SchemaTypes.Exact<{
  originalSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.OriginalSaleOrderInput>;
}>;


export type OriginalSaleOrderQuery = { originalSaleOrder?: { __typename?: 'OriginalSalePayload', outOrderStatus?: SchemaTypes.OutOrderStatusEnum, outOrderStatusDesc?: string, latestDescription?: string, outOrderId?: string, outOrderCode?: string, outOrderType?: SchemaTypes.OutOrderTypeEnum, outOrderTypeDesc?: string, commodityType?: SchemaTypes.PitayaCommodityTypeEnum, commodityTypeId?: number, commodityTypeDesc?: string, createTime?: number, payMethod?: SchemaTypes.OutOrderPayModeEnum, payMethodDesc?: string, remark?: string, saleTotalPrice?: number, deliveryRequired?: number, undoingDeliveryFlag?: boolean, outOrderSaleTime?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodityList?: Array<{ __typename?: 'OriginalSaleCommodityPayload', outOrderItemId?: string, batchId?: string, batchCode?: string, salePrice?: number, totalQuantity?: number, unitQuantity?: number, saleTotalPrice?: number, outOrderId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, categoryId?: number, categoryName?: string, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockQuantity?: { __typename?: 'StockQuantity', unitQuantity?: number, totalQuantity?: number }, actualQuantity?: { __typename?: 'ActualQuantity', actualTotalQuantity?: number, actualUnitQuantity?: number, actualSalePrice?: number, actualSaleTotalPrice?: number, outOrderItemId?: string } }>, saleIncomeOrder?: { __typename?: 'SaleIncomeOrderPayload', incomeId?: string, incomeStatus?: SchemaTypes.IncomeStatus, incomeStatusName?: string, incomeCode?: string, sourceId?: string, sourceType?: SchemaTypes.SaleIncomeSourceType, sourceTypeName?: string, remark?: string, createTime?: number, saleCostOrderId?: string, totalAmount?: number, commodityTypeName?: string, payMode?: SchemaTypes.OutOrderPayModeEnum, saleTime?: number, rejectReason?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, commoditiesList?: Array<{ __typename?: 'SaleIncomeOrderItemPayload', batchCode?: string, batchId?: number, commodityName?: string, goodsTotalQuantity?: number, goodsUnitQuantity?: number, incomeId?: string, incomeItemId?: string, outOrderItemId?: string, photosList?: Array<string>, quantity?: number, remark?: string, saleMoney?: number, salePrice?: number, totalSalePrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commodityBatchInfoList?: Array<{ __typename?: 'SaleIncomeCommodityBatchInfo', batchCode?: string, batchId?: string, goodsTotalQuantity?: number, goodsUnitQuantity?: number, incomeItemId?: string, outOrderItemId?: string, salePrice?: number, totalQuantity?: number, totalSalePrice?: number, unitQuantity?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, functionalField?: { __typename?: 'FunctionalField', saleTotalCost?: number, saleTotalPrice?: number }, logs?: Array<{ __typename?: 'SaleIncomeOrderLogPayload', createTime?: number, incomeId?: string, incomeLogId?: string, remark?: string, type?: SchemaTypes.SaleIncomeLogType, typeText?: string, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, originalSaleCommodityPayload?: Array<{ __typename?: 'OriginalSaleCommodityPayload', batchCode?: string, batchId?: string, outOrderId?: string, outOrderItemId?: string, salePrice?: number, saleTotalPrice?: number, totalQuantity?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, actualQuantity?: { __typename?: 'ActualQuantity', actualSalePrice?: number, actualSaleTotalPrice?: number, actualTotalQuantity?: number, actualUnitQuantity?: number, outOrderItemId?: string }, stockQuantity?: { __typename?: 'StockQuantity', totalQuantity?: number, unitQuantity?: number } }>, saleCostOrderItems?: Array<{ __typename?: 'SaleCostOrderItemPayload', materialFee?: number, outOrderItemId?: string, packagingFee?: number, saleCostOrderId?: string, saleCostOrderItemId?: string, commodity?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type SubmitOriginalSaleMutationVariables = SchemaTypes.Exact<{
  originalSubmitInput?: SchemaTypes.InputMaybe<SchemaTypes.OriginalSubmitInput>;
}>;


export type SubmitOriginalSaleMutation = { submitOriginalSale?: boolean };

export type CancelOriginalSaleMutationVariables = SchemaTypes.Exact<{
  originalCancelInput?: SchemaTypes.InputMaybe<SchemaTypes.OriginalCancelInput>;
}>;


export type CancelOriginalSaleMutation = { cancelOriginalSale?: boolean };

export type UpdateOriginalSaleMutationVariables = SchemaTypes.Exact<{
  originalUpdateInput?: SchemaTypes.InputMaybe<SchemaTypes.OriginalUpdateInput>;
}>;


export type UpdateOriginalSaleMutation = { updateOriginalSale?: boolean };

export type UpdateOriginalSaleIncomeAmountMutationVariables = SchemaTypes.Exact<{
  updateSaleIncomeAmountInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateOriginalSaleAmountInput>;
}>;


export type UpdateOriginalSaleIncomeAmountMutation = { updateOriginalSaleIncomeAmount?: boolean };

export type ListSpuByCommodityNameQueryVariables = SchemaTypes.Exact<{
  listSPUByCommodityNameInput?: SchemaTypes.InputMaybe<SchemaTypes.ListSpuByCommodityNameInput>;
}>;


export type ListSpuByCommodityNameQuery = { listSPUByCommodityName?: Array<{ __typename?: 'ListOriginalSaleCommoditySPUPayload', commodityId?: number, commodityName?: string }> };

export type UndoDeliveryMutationVariables = SchemaTypes.Exact<{
  originalUndoDeliveryInput?: SchemaTypes.InputMaybe<SchemaTypes.OriginalUndoDeliveryInput>;
}>;


export type UndoDeliveryMutation = { undoDelivery?: boolean };

export type UpdateOriginalSalePriceInfoMutationVariables = SchemaTypes.Exact<{
  updateOriginalSalePriceInfoInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateOriginalSalePriceInfoInput>;
}>;


export type UpdateOriginalSalePriceInfoMutation = { updateOriginalSalePriceInfo?: boolean };


export const PageOriginalSaleDocument = gql`
    query pageOriginalSale($page: Page, $pageOriginalSaleInput: PageOriginalSaleInput) {
  pageOriginalSale(page: $page, pageOriginalSaleInput: $pageOriginalSaleInput) {
    records {
      outOrderStatus
      outOrderStatusDesc
      latestDescription
      outOrderId
      outOrderCode
      outOrderType
      outOrderTypeDesc
      commodityType
      commodityTypeDesc
      warehouse {
        warehouseId
        warehouseName
      }
      customer {
        customerId
        customerName
        customerType
        lastLevelId
        lastLevelName
      }
      createUser {
        userId
        userName
        phoneNum
      }
      createTime
      payMethod
      payMethodDesc
      remark
      saleTotalPrice
      commodityList {
        outOrderItemId
        commoditySku {
          commoditySkuId
          commoditySkuName
          commodityId
          commodityName
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
          categoryId
          categoryName
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
        actualQuantity {
          actualSalePrice
          actualSaleTotalPrice
          actualTotalQuantity
          actualUnitQuantity
          outOrderItemId
        }
        outOrderId
        stockQuantity {
          totalQuantity
          unitQuantity
        }
      }
      belongOrg {
        orgId
        orgName
      }
      deliveryRequired
      commodityTypeId
      outOrderSaleTime
      saleIncomeOrder {
        belongOrg {
          orgId
          orgName
        }
        customer {
          customerId
          customerName
          customerType
          lastLevelId
          lastLevelName
        }
        user {
          phoneNum
          userId
          userName
        }
        warehouse {
          warehouseId
          warehouseName
        }
        commoditiesList {
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
          batchCode
          batchId
          commodityBatchInfoList {
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
            goodsTotalQuantity
            goodsUnitQuantity
            incomeItemId
            outOrderItemId
            salePrice
            totalQuantity
            totalSalePrice
            unitQuantity
          }
          commodityName
          goodsTotalQuantity
          goodsUnitQuantity
          incomeId
          incomeItemId
          outOrderItemId
          photosList
          quantity
          remark
          saleMoney
          salePrice
          totalSalePrice
          unit {
            unitId
            unitName
          }
        }
        commodityTypeName
        createTime
        functionalField {
          saleTotalCost
          saleTotalPrice
        }
        incomeCode
        incomeId
        incomeStatus
        incomeStatusName
        logs {
          user {
            phoneNum
            userId
            userName
          }
          createTime
          incomeId
          incomeLogId
          remark
          type
          typeText
        }
        originalSaleCommodityPayload {
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
          salePriceType {
            unitId
            unitName
          }
          totalType {
            unitId
            unitName
          }
          unitType {
            unitId
            unitName
          }
          actualQuantity {
            actualSalePrice
            actualSaleTotalPrice
            actualTotalQuantity
            actualUnitQuantity
            outOrderItemId
          }
          batchCode
          batchId
          outOrderId
          outOrderItemId
          salePrice
          saleTotalPrice
          stockQuantity {
            totalQuantity
            unitQuantity
          }
          totalQuantity
          unitQuantity
        }
        payMode
        rejectReason
        remark
        saleCostOrderId
        saleCostOrderItems {
          commodity {
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
          materialFee
          outOrderItemId
          packagingFee
          saleCostOrderId
          saleCostOrderItemId
        }
        saleTime
        sourceId
        sourceType
        sourceTypeName
        totalAmount
      }
      undoingDeliveryFlag
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageOriginalSaleQuery__
 *
 * To run a query within a React component, call `usePageOriginalSaleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageOriginalSaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageOriginalSaleQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageOriginalSaleInput: // value for 'pageOriginalSaleInput'
 *   },
 * });
 */
export function usePageOriginalSaleQuery(baseOptions?: Apollo.QueryHookOptions<PageOriginalSaleQuery, PageOriginalSaleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageOriginalSaleQuery, PageOriginalSaleQueryVariables>(PageOriginalSaleDocument, options);
      }
export function usePageOriginalSaleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageOriginalSaleQuery, PageOriginalSaleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageOriginalSaleQuery, PageOriginalSaleQueryVariables>(PageOriginalSaleDocument, options);
        }
export type PageOriginalSaleQueryHookResult = ReturnType<typeof usePageOriginalSaleQuery>;
export type PageOriginalSaleLazyQueryHookResult = ReturnType<typeof usePageOriginalSaleLazyQuery>;
export type PageOriginalSaleQueryResult = Apollo.QueryResult<PageOriginalSaleQuery, PageOriginalSaleQueryVariables>;
export const OriginalSaleStatusDocument = gql`
    query originalSaleStatus($originalSaleStatusInput: OriginalSaleStatusInput) {
  originalSaleStatus(originalSaleStatusInput: $originalSaleStatusInput) {
    toSubmit
    toOutbound
    rejected
  }
}
    `;

/**
 * __useOriginalSaleStatusQuery__
 *
 * To run a query within a React component, call `useOriginalSaleStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useOriginalSaleStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOriginalSaleStatusQuery({
 *   variables: {
 *      originalSaleStatusInput: // value for 'originalSaleStatusInput'
 *   },
 * });
 */
export function useOriginalSaleStatusQuery(baseOptions?: Apollo.QueryHookOptions<OriginalSaleStatusQuery, OriginalSaleStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OriginalSaleStatusQuery, OriginalSaleStatusQueryVariables>(OriginalSaleStatusDocument, options);
      }
export function useOriginalSaleStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OriginalSaleStatusQuery, OriginalSaleStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OriginalSaleStatusQuery, OriginalSaleStatusQueryVariables>(OriginalSaleStatusDocument, options);
        }
export type OriginalSaleStatusQueryHookResult = ReturnType<typeof useOriginalSaleStatusQuery>;
export type OriginalSaleStatusLazyQueryHookResult = ReturnType<typeof useOriginalSaleStatusLazyQuery>;
export type OriginalSaleStatusQueryResult = Apollo.QueryResult<OriginalSaleStatusQuery, OriginalSaleStatusQueryVariables>;
export const CreateOriginalSaleDocument = gql`
    mutation createOriginalSale($originalCreateInput: OriginalCreateInput) {
  createOriginalSale(originalCreateInput: $originalCreateInput) {
    outOrderId
  }
}
    `;
export type CreateOriginalSaleMutationFn = Apollo.MutationFunction<CreateOriginalSaleMutation, CreateOriginalSaleMutationVariables>;

/**
 * __useCreateOriginalSaleMutation__
 *
 * To run a mutation, you first call `useCreateOriginalSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOriginalSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOriginalSaleMutation, { data, loading, error }] = useCreateOriginalSaleMutation({
 *   variables: {
 *      originalCreateInput: // value for 'originalCreateInput'
 *   },
 * });
 */
export function useCreateOriginalSaleMutation(baseOptions?: Apollo.MutationHookOptions<CreateOriginalSaleMutation, CreateOriginalSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOriginalSaleMutation, CreateOriginalSaleMutationVariables>(CreateOriginalSaleDocument, options);
      }
export type CreateOriginalSaleMutationHookResult = ReturnType<typeof useCreateOriginalSaleMutation>;
export type CreateOriginalSaleMutationResult = Apollo.MutationResult<CreateOriginalSaleMutation>;
export type CreateOriginalSaleMutationOptions = Apollo.BaseMutationOptions<CreateOriginalSaleMutation, CreateOriginalSaleMutationVariables>;
export const ListOriginalSaleCommodityCategoryDocument = gql`
    query listOriginalSaleCommodityCategory($listOriginalSaleCommodityCategoryInput: ListOriginalSaleCommodityCategoryInput) {
  listOriginalSaleCommodityCategory(
    listOriginalSaleCommodityCategoryInput: $listOriginalSaleCommodityCategoryInput
  ) {
    categoryId
    categoryName
  }
}
    `;

/**
 * __useListOriginalSaleCommodityCategoryQuery__
 *
 * To run a query within a React component, call `useListOriginalSaleCommodityCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOriginalSaleCommodityCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOriginalSaleCommodityCategoryQuery({
 *   variables: {
 *      listOriginalSaleCommodityCategoryInput: // value for 'listOriginalSaleCommodityCategoryInput'
 *   },
 * });
 */
export function useListOriginalSaleCommodityCategoryQuery(baseOptions?: Apollo.QueryHookOptions<ListOriginalSaleCommodityCategoryQuery, ListOriginalSaleCommodityCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListOriginalSaleCommodityCategoryQuery, ListOriginalSaleCommodityCategoryQueryVariables>(ListOriginalSaleCommodityCategoryDocument, options);
      }
export function useListOriginalSaleCommodityCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListOriginalSaleCommodityCategoryQuery, ListOriginalSaleCommodityCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListOriginalSaleCommodityCategoryQuery, ListOriginalSaleCommodityCategoryQueryVariables>(ListOriginalSaleCommodityCategoryDocument, options);
        }
export type ListOriginalSaleCommodityCategoryQueryHookResult = ReturnType<typeof useListOriginalSaleCommodityCategoryQuery>;
export type ListOriginalSaleCommodityCategoryLazyQueryHookResult = ReturnType<typeof useListOriginalSaleCommodityCategoryLazyQuery>;
export type ListOriginalSaleCommodityCategoryQueryResult = Apollo.QueryResult<ListOriginalSaleCommodityCategoryQuery, ListOriginalSaleCommodityCategoryQueryVariables>;
export const ListOriginalSaleCommoditySpuDocument = gql`
    query listOriginalSaleCommoditySPU($listOriginalSaleCommoditySPUInput: ListOriginalSaleCommoditySPUInput) {
  listOriginalSaleCommoditySPU(
    listOriginalSaleCommoditySPUInput: $listOriginalSaleCommoditySPUInput
  ) {
    commodityId
    commodityName
  }
}
    `;

/**
 * __useListOriginalSaleCommoditySpuQuery__
 *
 * To run a query within a React component, call `useListOriginalSaleCommoditySpuQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOriginalSaleCommoditySpuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOriginalSaleCommoditySpuQuery({
 *   variables: {
 *      listOriginalSaleCommoditySPUInput: // value for 'listOriginalSaleCommoditySPUInput'
 *   },
 * });
 */
export function useListOriginalSaleCommoditySpuQuery(baseOptions?: Apollo.QueryHookOptions<ListOriginalSaleCommoditySpuQuery, ListOriginalSaleCommoditySpuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListOriginalSaleCommoditySpuQuery, ListOriginalSaleCommoditySpuQueryVariables>(ListOriginalSaleCommoditySpuDocument, options);
      }
export function useListOriginalSaleCommoditySpuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListOriginalSaleCommoditySpuQuery, ListOriginalSaleCommoditySpuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListOriginalSaleCommoditySpuQuery, ListOriginalSaleCommoditySpuQueryVariables>(ListOriginalSaleCommoditySpuDocument, options);
        }
export type ListOriginalSaleCommoditySpuQueryHookResult = ReturnType<typeof useListOriginalSaleCommoditySpuQuery>;
export type ListOriginalSaleCommoditySpuLazyQueryHookResult = ReturnType<typeof useListOriginalSaleCommoditySpuLazyQuery>;
export type ListOriginalSaleCommoditySpuQueryResult = Apollo.QueryResult<ListOriginalSaleCommoditySpuQuery, ListOriginalSaleCommoditySpuQueryVariables>;
export const ListOriginalSaleCommodityBatchDocument = gql`
    query listOriginalSaleCommodityBatch($listOriginalSaleCommodityBatchInput: ListOriginalSaleCommodityBatchInput) {
  listOriginalSaleCommodityBatch(
    listOriginalSaleCommodityBatchInput: $listOriginalSaleCommodityBatchInput
  ) {
    commodityType
    commodityTypeDesc
    categoryId
    categoryName
    commodityId
    commodityName
    countBatch
    commoditySku {
      commoditySkuId
      commoditySkuName
      commodityId
      commodityName
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
      categoryId
      categoryName
    }
    batchId
    batchCode
    customer {
      customerId
      customerName
      customerType
      lastLevelId
      lastLevelName
    }
    inStockTime
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
    `;

/**
 * __useListOriginalSaleCommodityBatchQuery__
 *
 * To run a query within a React component, call `useListOriginalSaleCommodityBatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOriginalSaleCommodityBatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOriginalSaleCommodityBatchQuery({
 *   variables: {
 *      listOriginalSaleCommodityBatchInput: // value for 'listOriginalSaleCommodityBatchInput'
 *   },
 * });
 */
export function useListOriginalSaleCommodityBatchQuery(baseOptions?: Apollo.QueryHookOptions<ListOriginalSaleCommodityBatchQuery, ListOriginalSaleCommodityBatchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListOriginalSaleCommodityBatchQuery, ListOriginalSaleCommodityBatchQueryVariables>(ListOriginalSaleCommodityBatchDocument, options);
      }
export function useListOriginalSaleCommodityBatchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListOriginalSaleCommodityBatchQuery, ListOriginalSaleCommodityBatchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListOriginalSaleCommodityBatchQuery, ListOriginalSaleCommodityBatchQueryVariables>(ListOriginalSaleCommodityBatchDocument, options);
        }
export type ListOriginalSaleCommodityBatchQueryHookResult = ReturnType<typeof useListOriginalSaleCommodityBatchQuery>;
export type ListOriginalSaleCommodityBatchLazyQueryHookResult = ReturnType<typeof useListOriginalSaleCommodityBatchLazyQuery>;
export type ListOriginalSaleCommodityBatchQueryResult = Apollo.QueryResult<ListOriginalSaleCommodityBatchQuery, ListOriginalSaleCommodityBatchQueryVariables>;
export const OriginalSaleOrderDocument = gql`
    query originalSaleOrder($originalSaleOrderInput: OriginalSaleOrderInput) {
  originalSaleOrder(originalSaleOrderInput: $originalSaleOrderInput) {
    outOrderStatus
    outOrderStatusDesc
    latestDescription
    outOrderId
    outOrderCode
    outOrderType
    outOrderTypeDesc
    commodityType
    commodityTypeId
    commodityTypeDesc
    warehouse {
      warehouseId
      warehouseName
    }
    customer {
      customerId
      customerName
      customerType
      lastLevelId
      lastLevelName
    }
    createUser {
      userId
      userName
      phoneNum
    }
    createTime
    payMethod
    payMethodDesc
    remark
    saleTotalPrice
    commodityList {
      outOrderItemId
      commoditySku {
        commoditySkuId
        commoditySkuName
        commodityId
        commodityName
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
        categoryId
        categoryName
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
    saleIncomeOrder {
      incomeId
      incomeStatus
      incomeStatusName
      incomeCode
      sourceId
      sourceType
      sourceTypeName
      remark
      createTime
      saleCostOrderId
      totalAmount
      commodityTypeName
      payMode
      saleTime
      belongOrg {
        orgId
        orgName
      }
      customer {
        customerId
        customerName
        customerType
        lastLevelId
        lastLevelName
      }
      user {
        phoneNum
        userId
        userName
      }
      warehouse {
        warehouseId
        warehouseName
      }
      commoditiesList {
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
        batchCode
        batchId
        commodityBatchInfoList {
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
          goodsTotalQuantity
          goodsUnitQuantity
          incomeItemId
          outOrderItemId
          salePrice
          totalQuantity
          totalSalePrice
          unitQuantity
        }
        commodityName
        goodsTotalQuantity
        goodsUnitQuantity
        incomeId
        incomeItemId
        outOrderItemId
        photosList
        quantity
        remark
        saleMoney
        salePrice
        totalSalePrice
        unit {
          unitId
          unitName
        }
      }
      functionalField {
        saleTotalCost
        saleTotalPrice
      }
      logs {
        user {
          phoneNum
          userId
          userName
        }
        createTime
        incomeId
        incomeLogId
        remark
        type
        typeText
      }
      originalSaleCommodityPayload {
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
        salePriceType {
          unitId
          unitName
        }
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
        actualQuantity {
          actualSalePrice
          actualSaleTotalPrice
          actualTotalQuantity
          actualUnitQuantity
          outOrderItemId
        }
        batchCode
        batchId
        outOrderId
        outOrderItemId
        salePrice
        saleTotalPrice
        stockQuantity {
          totalQuantity
          unitQuantity
        }
        totalQuantity
        unitQuantity
      }
      rejectReason
      saleCostOrderItems {
        commodity {
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
        materialFee
        outOrderItemId
        packagingFee
        saleCostOrderId
        saleCostOrderItemId
      }
    }
    belongOrg {
      orgId
      orgName
    }
    deliveryRequired
    undoingDeliveryFlag
    outOrderSaleTime
  }
}
    `;

/**
 * __useOriginalSaleOrderQuery__
 *
 * To run a query within a React component, call `useOriginalSaleOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOriginalSaleOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOriginalSaleOrderQuery({
 *   variables: {
 *      originalSaleOrderInput: // value for 'originalSaleOrderInput'
 *   },
 * });
 */
export function useOriginalSaleOrderQuery(baseOptions?: Apollo.QueryHookOptions<OriginalSaleOrderQuery, OriginalSaleOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OriginalSaleOrderQuery, OriginalSaleOrderQueryVariables>(OriginalSaleOrderDocument, options);
      }
export function useOriginalSaleOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OriginalSaleOrderQuery, OriginalSaleOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OriginalSaleOrderQuery, OriginalSaleOrderQueryVariables>(OriginalSaleOrderDocument, options);
        }
export type OriginalSaleOrderQueryHookResult = ReturnType<typeof useOriginalSaleOrderQuery>;
export type OriginalSaleOrderLazyQueryHookResult = ReturnType<typeof useOriginalSaleOrderLazyQuery>;
export type OriginalSaleOrderQueryResult = Apollo.QueryResult<OriginalSaleOrderQuery, OriginalSaleOrderQueryVariables>;
export const SubmitOriginalSaleDocument = gql`
    mutation submitOriginalSale($originalSubmitInput: OriginalSubmitInput) {
  submitOriginalSale(originalSubmitInput: $originalSubmitInput)
}
    `;
export type SubmitOriginalSaleMutationFn = Apollo.MutationFunction<SubmitOriginalSaleMutation, SubmitOriginalSaleMutationVariables>;

/**
 * __useSubmitOriginalSaleMutation__
 *
 * To run a mutation, you first call `useSubmitOriginalSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitOriginalSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitOriginalSaleMutation, { data, loading, error }] = useSubmitOriginalSaleMutation({
 *   variables: {
 *      originalSubmitInput: // value for 'originalSubmitInput'
 *   },
 * });
 */
export function useSubmitOriginalSaleMutation(baseOptions?: Apollo.MutationHookOptions<SubmitOriginalSaleMutation, SubmitOriginalSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitOriginalSaleMutation, SubmitOriginalSaleMutationVariables>(SubmitOriginalSaleDocument, options);
      }
export type SubmitOriginalSaleMutationHookResult = ReturnType<typeof useSubmitOriginalSaleMutation>;
export type SubmitOriginalSaleMutationResult = Apollo.MutationResult<SubmitOriginalSaleMutation>;
export type SubmitOriginalSaleMutationOptions = Apollo.BaseMutationOptions<SubmitOriginalSaleMutation, SubmitOriginalSaleMutationVariables>;
export const CancelOriginalSaleDocument = gql`
    mutation cancelOriginalSale($originalCancelInput: OriginalCancelInput) {
  cancelOriginalSale(originalCancelInput: $originalCancelInput)
}
    `;
export type CancelOriginalSaleMutationFn = Apollo.MutationFunction<CancelOriginalSaleMutation, CancelOriginalSaleMutationVariables>;

/**
 * __useCancelOriginalSaleMutation__
 *
 * To run a mutation, you first call `useCancelOriginalSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelOriginalSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelOriginalSaleMutation, { data, loading, error }] = useCancelOriginalSaleMutation({
 *   variables: {
 *      originalCancelInput: // value for 'originalCancelInput'
 *   },
 * });
 */
export function useCancelOriginalSaleMutation(baseOptions?: Apollo.MutationHookOptions<CancelOriginalSaleMutation, CancelOriginalSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelOriginalSaleMutation, CancelOriginalSaleMutationVariables>(CancelOriginalSaleDocument, options);
      }
export type CancelOriginalSaleMutationHookResult = ReturnType<typeof useCancelOriginalSaleMutation>;
export type CancelOriginalSaleMutationResult = Apollo.MutationResult<CancelOriginalSaleMutation>;
export type CancelOriginalSaleMutationOptions = Apollo.BaseMutationOptions<CancelOriginalSaleMutation, CancelOriginalSaleMutationVariables>;
export const UpdateOriginalSaleDocument = gql`
    mutation updateOriginalSale($originalUpdateInput: OriginalUpdateInput) {
  updateOriginalSale(originalUpdateInput: $originalUpdateInput)
}
    `;
export type UpdateOriginalSaleMutationFn = Apollo.MutationFunction<UpdateOriginalSaleMutation, UpdateOriginalSaleMutationVariables>;

/**
 * __useUpdateOriginalSaleMutation__
 *
 * To run a mutation, you first call `useUpdateOriginalSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOriginalSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOriginalSaleMutation, { data, loading, error }] = useUpdateOriginalSaleMutation({
 *   variables: {
 *      originalUpdateInput: // value for 'originalUpdateInput'
 *   },
 * });
 */
export function useUpdateOriginalSaleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOriginalSaleMutation, UpdateOriginalSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOriginalSaleMutation, UpdateOriginalSaleMutationVariables>(UpdateOriginalSaleDocument, options);
      }
export type UpdateOriginalSaleMutationHookResult = ReturnType<typeof useUpdateOriginalSaleMutation>;
export type UpdateOriginalSaleMutationResult = Apollo.MutationResult<UpdateOriginalSaleMutation>;
export type UpdateOriginalSaleMutationOptions = Apollo.BaseMutationOptions<UpdateOriginalSaleMutation, UpdateOriginalSaleMutationVariables>;
export const UpdateOriginalSaleIncomeAmountDocument = gql`
    mutation updateOriginalSaleIncomeAmount($updateSaleIncomeAmountInput: UpdateOriginalSaleAmountInput) {
  updateOriginalSaleIncomeAmount(
    updateSaleIncomeAmountInput: $updateSaleIncomeAmountInput
  )
}
    `;
export type UpdateOriginalSaleIncomeAmountMutationFn = Apollo.MutationFunction<UpdateOriginalSaleIncomeAmountMutation, UpdateOriginalSaleIncomeAmountMutationVariables>;

/**
 * __useUpdateOriginalSaleIncomeAmountMutation__
 *
 * To run a mutation, you first call `useUpdateOriginalSaleIncomeAmountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOriginalSaleIncomeAmountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOriginalSaleIncomeAmountMutation, { data, loading, error }] = useUpdateOriginalSaleIncomeAmountMutation({
 *   variables: {
 *      updateSaleIncomeAmountInput: // value for 'updateSaleIncomeAmountInput'
 *   },
 * });
 */
export function useUpdateOriginalSaleIncomeAmountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOriginalSaleIncomeAmountMutation, UpdateOriginalSaleIncomeAmountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOriginalSaleIncomeAmountMutation, UpdateOriginalSaleIncomeAmountMutationVariables>(UpdateOriginalSaleIncomeAmountDocument, options);
      }
export type UpdateOriginalSaleIncomeAmountMutationHookResult = ReturnType<typeof useUpdateOriginalSaleIncomeAmountMutation>;
export type UpdateOriginalSaleIncomeAmountMutationResult = Apollo.MutationResult<UpdateOriginalSaleIncomeAmountMutation>;
export type UpdateOriginalSaleIncomeAmountMutationOptions = Apollo.BaseMutationOptions<UpdateOriginalSaleIncomeAmountMutation, UpdateOriginalSaleIncomeAmountMutationVariables>;
export const ListSpuByCommodityNameDocument = gql`
    query listSPUByCommodityName($listSPUByCommodityNameInput: ListSPUByCommodityNameInput) {
  listSPUByCommodityName(
    listSPUByCommodityNameInput: $listSPUByCommodityNameInput
  ) {
    commodityId
    commodityName
  }
}
    `;

/**
 * __useListSpuByCommodityNameQuery__
 *
 * To run a query within a React component, call `useListSpuByCommodityNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSpuByCommodityNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSpuByCommodityNameQuery({
 *   variables: {
 *      listSPUByCommodityNameInput: // value for 'listSPUByCommodityNameInput'
 *   },
 * });
 */
export function useListSpuByCommodityNameQuery(baseOptions?: Apollo.QueryHookOptions<ListSpuByCommodityNameQuery, ListSpuByCommodityNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSpuByCommodityNameQuery, ListSpuByCommodityNameQueryVariables>(ListSpuByCommodityNameDocument, options);
      }
export function useListSpuByCommodityNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSpuByCommodityNameQuery, ListSpuByCommodityNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSpuByCommodityNameQuery, ListSpuByCommodityNameQueryVariables>(ListSpuByCommodityNameDocument, options);
        }
export type ListSpuByCommodityNameQueryHookResult = ReturnType<typeof useListSpuByCommodityNameQuery>;
export type ListSpuByCommodityNameLazyQueryHookResult = ReturnType<typeof useListSpuByCommodityNameLazyQuery>;
export type ListSpuByCommodityNameQueryResult = Apollo.QueryResult<ListSpuByCommodityNameQuery, ListSpuByCommodityNameQueryVariables>;
export const UndoDeliveryDocument = gql`
    mutation undoDelivery($originalUndoDeliveryInput: OriginalUndoDeliveryInput) {
  undoDelivery(originalUndoDeliveryInput: $originalUndoDeliveryInput)
}
    `;
export type UndoDeliveryMutationFn = Apollo.MutationFunction<UndoDeliveryMutation, UndoDeliveryMutationVariables>;

/**
 * __useUndoDeliveryMutation__
 *
 * To run a mutation, you first call `useUndoDeliveryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoDeliveryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoDeliveryMutation, { data, loading, error }] = useUndoDeliveryMutation({
 *   variables: {
 *      originalUndoDeliveryInput: // value for 'originalUndoDeliveryInput'
 *   },
 * });
 */
export function useUndoDeliveryMutation(baseOptions?: Apollo.MutationHookOptions<UndoDeliveryMutation, UndoDeliveryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UndoDeliveryMutation, UndoDeliveryMutationVariables>(UndoDeliveryDocument, options);
      }
export type UndoDeliveryMutationHookResult = ReturnType<typeof useUndoDeliveryMutation>;
export type UndoDeliveryMutationResult = Apollo.MutationResult<UndoDeliveryMutation>;
export type UndoDeliveryMutationOptions = Apollo.BaseMutationOptions<UndoDeliveryMutation, UndoDeliveryMutationVariables>;
export const UpdateOriginalSalePriceInfoDocument = gql`
    mutation updateOriginalSalePriceInfo($updateOriginalSalePriceInfoInput: UpdateOriginalSalePriceInfoInput) {
  updateOriginalSalePriceInfo(
    updateOriginalSalePriceInfoInput: $updateOriginalSalePriceInfoInput
  )
}
    `;
export type UpdateOriginalSalePriceInfoMutationFn = Apollo.MutationFunction<UpdateOriginalSalePriceInfoMutation, UpdateOriginalSalePriceInfoMutationVariables>;

/**
 * __useUpdateOriginalSalePriceInfoMutation__
 *
 * To run a mutation, you first call `useUpdateOriginalSalePriceInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOriginalSalePriceInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOriginalSalePriceInfoMutation, { data, loading, error }] = useUpdateOriginalSalePriceInfoMutation({
 *   variables: {
 *      updateOriginalSalePriceInfoInput: // value for 'updateOriginalSalePriceInfoInput'
 *   },
 * });
 */
export function useUpdateOriginalSalePriceInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOriginalSalePriceInfoMutation, UpdateOriginalSalePriceInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOriginalSalePriceInfoMutation, UpdateOriginalSalePriceInfoMutationVariables>(UpdateOriginalSalePriceInfoDocument, options);
      }
export type UpdateOriginalSalePriceInfoMutationHookResult = ReturnType<typeof useUpdateOriginalSalePriceInfoMutation>;
export type UpdateOriginalSalePriceInfoMutationResult = Apollo.MutationResult<UpdateOriginalSalePriceInfoMutation>;
export type UpdateOriginalSalePriceInfoMutationOptions = Apollo.BaseMutationOptions<UpdateOriginalSalePriceInfoMutation, UpdateOriginalSalePriceInfoMutationVariables>;