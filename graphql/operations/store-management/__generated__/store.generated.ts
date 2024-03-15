import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ListPlatformSalePlanQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListPlatformSalePlanInput;
}>;


export type ListPlatformSalePlanQuery = { listPlatformSalePlan?: Array<{ __typename?: 'PlatformSalePlanPayload', planCode?: string, planId?: string, planTime?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, commodities?: Array<{ __typename?: 'PlatformPlanCommodityPayload', addressId?: string, commodityType?: number, commodityTypeName?: string, itemId?: string, planId?: string, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, planQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, stockQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> }> };

export type ListSaleReturnCommodityQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListSaleReturnCommodityInput;
}>;


export type ListSaleReturnCommodityQuery = { listSaleReturnCommodity?: Array<{ __typename?: 'SaleReturnCommodityPayload', createTime?: number, saleOrderCode?: string, saleOrderId?: string, saleOrderType?: SchemaTypes.PitayaBusinessTypeEnum, saleOrderTypeName?: string, saleTime?: number, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgName?: string, orgId?: number }, commodities?: Array<{ __typename?: 'SaleReturnCommodityItemPayload', commodityType?: number, commodityTypeName?: string, returnableQuantity?: number, saleOrderId?: string, saleOrderType?: SchemaTypes.PitayaBusinessTypeEnum, salePrice?: number, saleQuantity?: number, saleTotalPrice?: number, returnableAmount?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string } }> };

export type ListStoreManagementQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListStoreManagementInput;
}>;


export type ListStoreManagementQuery = { listStoreManagement?: Array<{ __typename?: 'StoreManagementDetailPayload', customerDetail?: { __typename?: 'CustomerWithAdd', customerId?: number, customerName?: string, customerType?: number, addresses?: Array<{ __typename?: 'AddressInfo', addressId?: number, addressName?: string, belongType?: number, deliveryName?: string, isEnabled?: boolean, stockCount?: number }> } }> };

export type ListStoreManagementStockInfoQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListStoreManagementStockInfoInput;
}>;


export type ListStoreManagementStockInfoQuery = { listStoreManagementStockInfo?: Array<{ __typename?: 'StoreManagementStockDetailPayload', commodityType?: number, commodityTypeName?: string, mark?: SchemaTypes.BatchMark, markName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batches?: Array<{ __typename?: 'PlatformBatchPayload', batchCode?: string, batchId?: string, createTime?: number, sourceBatchCode?: string, sourceBatchId?: string, deliveryCode?: string, planCode?: string, planSaleTime?: number, dynamicQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }>, stockQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> };

export type PageStoreManagementSaleInfoQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PageStoreManagementSaleInfoInput;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageStoreManagementSaleInfoQuery = { pageStoreManagementSaleInfo?: { __typename?: 'PageStoreManagementSaleInfoPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PlatformSaleDetailPayload', createTime?: number, remark?: string, saleAmount?: number, saleOrderCode?: string, saleOrderId?: string, saleOrderStatus?: SchemaTypes.SaleStatusEnum, saleOrderStatusName?: string, saleTime?: number, saleIncomeId?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, commodities?: Array<{ __typename?: 'StoreManagementSaleCommodityPayload', commodityType?: number, commodityTypeName?: string, salePrice?: number, totalSalePrice?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batchInfo?: Array<{ __typename?: 'SaleCommodityBatchPayload', itemId?: string, batchCode?: string, batchId?: string, index?: number, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, quantity?: number, sourceBatchCode?: string, sourceBatchId?: string, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, platformSaleReturnOrders?: Array<{ __typename?: 'PitayaReturnDetailPayload', createTime?: number, remark?: string, returnCode?: string, returnId?: string, returnStatus?: SchemaTypes.ReturnStatusEnum, returnStatusName?: string, returnTime?: number, returnType?: SchemaTypes.ReturnTypeEnum, returnTypeName?: string, saleOrderCode?: string, saleOrderId?: string, differenceOrderType?: SchemaTypes.DifferenceOrderType, saleReturnWay?: SchemaTypes.SaleReturnWayEnum, saleReturnWayName?: string, saleTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, commodities?: Array<{ __typename?: 'PitayaReturnCommodityDetailPayload', commodityType?: number, commodityTypeName?: string, returnId?: string, returnType?: SchemaTypes.ReturnTypeEnum, returnableQuantity?: number, amount?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, returnableAmount?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batches?: Array<{ __typename?: 'PitayaReturnCommodityBatchPayload', itemId?: string, index?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, createTime?: number, commodityTypeId?: number, commodityTypeName?: string, quantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, quantity?: number, sourceBatchCode?: string, sourceBatchId?: string, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, saleData?: { __typename?: 'PitayaSaleData', salePrice?: number, saleTotalPrice?: number, quantity?: number, saleOrderId?: number }, stockQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, bill2FetchData?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, sourceBill2Data?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } }> }> } };

export type PlatformSaleDetailQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PlatformSaleInput;
}>;


export type PlatformSaleDetailQuery = { platformSaleDetail?: { __typename?: 'PlatformSaleDetailPayload', createTime?: number, remark?: string, saleAmount?: number, saleOrderCode?: string, saleOrderId?: string, saleOrderStatus?: SchemaTypes.SaleStatusEnum, saleOrderStatusName?: string, saleTime?: number, saleIncomeId?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, commodities?: Array<{ __typename?: 'StoreManagementSaleCommodityPayload', commodityType?: number, commodityTypeName?: string, salePrice?: number, totalSalePrice?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batchInfo?: Array<{ __typename?: 'SaleCommodityBatchPayload', itemId?: string, batchCode?: string, batchId?: string, index?: number, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, sourceBatchCode?: string, sourceBatchId?: string, quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, platformSaleReturnOrders?: Array<{ __typename?: 'PitayaReturnDetailPayload', createTime?: number, remark?: string, returnCode?: string, returnId?: string, returnStatus?: SchemaTypes.ReturnStatusEnum, returnStatusName?: string, returnTime?: number, returnType?: SchemaTypes.ReturnTypeEnum, returnTypeName?: string, saleOrderCode?: string, saleOrderId?: string, differenceOrderType?: SchemaTypes.DifferenceOrderType, saleReturnWay?: SchemaTypes.SaleReturnWayEnum, saleReturnWayName?: string, saleTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, commodities?: Array<{ __typename?: 'PitayaReturnCommodityDetailPayload', commodityType?: number, commodityTypeName?: string, returnId?: string, returnType?: SchemaTypes.ReturnTypeEnum, returnableQuantity?: number, amount?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, returnableAmount?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batches?: Array<{ __typename?: 'PitayaReturnCommodityBatchPayload', itemId?: string, index?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, createTime?: number, commodityTypeId?: number, commodityTypeName?: string, quantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, quantity?: number, sourceBatchCode?: string, sourceBatchId?: string, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, saleData?: { __typename?: 'PitayaSaleData', salePrice?: number, saleTotalPrice?: number, quantity?: number, saleOrderId?: number }, stockQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, bill2FetchData?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, sourceBill2Data?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } }> } };

export type CreatePlatformSaleMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreatePlatformSaleInput;
}>;


export type CreatePlatformSaleMutation = { createPlatformSale?: string };

export type CreatePlatformSaleReturnMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreateOrUpdatePlatformSaleReturnInput;
}>;


export type CreatePlatformSaleReturnMutation = { createPlatformSaleReturn?: string };

export type UpdatePlatformSaleReturnMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreateOrUpdatePlatformSaleReturnInput;
  returnId: SchemaTypes.Scalars['ID'];
}>;


export type UpdatePlatformSaleReturnMutation = { updatePlatformSaleReturn?: string };

export type VoidPlatformSaleMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PlatformSaleInput;
}>;


export type VoidPlatformSaleMutation = { voidPlatformSale?: boolean };

export type PlatformSaleAfterSaleBadgeQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PlatformSaleAfterSaleBadgeInput>;
}>;


export type PlatformSaleAfterSaleBadgeQuery = { platformSaleAfterSaleBadge?: { __typename?: 'PlatformSaleAfterSaleBadgePayload', toBeDealt?: number } };

export type OneMorePlatformSaleMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.OneMorePlatformSaleInput>;
}>;


export type OneMorePlatformSaleMutation = { oneMorePlatformSale?: { __typename?: 'OneMorePlatformSalePayload', saleOrderId?: string, outOfStockItems?: Array<{ __typename?: 'PlatformSaleOutOfStockItem', commodityType?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> } };

export type ListPlatformSaleCommodityQueryVariables = SchemaTypes.Exact<{
  listPlatformSaleCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.ListPlatformSaleCommodityInput>;
}>;


export type ListPlatformSaleCommodityQuery = { listPlatformSaleCommodity?: { __typename?: 'PlatformSaleCommodityPayload', commodityListWithStock?: Array<{ __typename?: 'StoreManagementSaleCommodityPayload', commodityType?: number, commodityTypeName?: string, salePrice?: number, totalSalePrice?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batchInfo?: Array<{ __typename?: 'SaleCommodityBatchPayload', itemId?: string, batchCode?: string, batchId?: string, index?: number, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, quantity?: number, sourceBatchCode?: string, sourceBatchId?: string, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, outOfStockItems?: Array<{ __typename?: 'PlatformSaleOutOfStockItem', commodityType?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> } };


export const ListPlatformSalePlanDocument = gql`
    query listPlatformSalePlan($input: ListPlatformSalePlanInput!) {
  listPlatformSalePlan(input: $input) {
    customer {
      customerId
      customerName
      customerType
      lastLevelId
      lastLevelName
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
      addressId
      commodityType
      commodityTypeName
      itemId
      planId
      planQuantity {
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
      stockQuantity {
        unit {
          unitId
          unitName
        }
        quantity
      }
      mark
      markName
    }
    planCode
    planId
    planTime
  }
}
    `;

/**
 * __useListPlatformSalePlanQuery__
 *
 * To run a query within a React component, call `useListPlatformSalePlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPlatformSalePlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPlatformSalePlanQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListPlatformSalePlanQuery(baseOptions: Apollo.QueryHookOptions<ListPlatformSalePlanQuery, ListPlatformSalePlanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPlatformSalePlanQuery, ListPlatformSalePlanQueryVariables>(ListPlatformSalePlanDocument, options);
      }
export function useListPlatformSalePlanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPlatformSalePlanQuery, ListPlatformSalePlanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPlatformSalePlanQuery, ListPlatformSalePlanQueryVariables>(ListPlatformSalePlanDocument, options);
        }
export type ListPlatformSalePlanQueryHookResult = ReturnType<typeof useListPlatformSalePlanQuery>;
export type ListPlatformSalePlanLazyQueryHookResult = ReturnType<typeof useListPlatformSalePlanLazyQuery>;
export type ListPlatformSalePlanQueryResult = Apollo.QueryResult<ListPlatformSalePlanQuery, ListPlatformSalePlanQueryVariables>;
export const ListSaleReturnCommodityDocument = gql`
    query listSaleReturnCommodity($input: ListSaleReturnCommodityInput!) {
  listSaleReturnCommodity(input: $input) {
    createBy {
      phoneNum
      userId
      userName
    }
    belongOrg {
      orgName
      orgId
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
      commodityType
      commodityTypeName
      returnableQuantity
      saleOrderId
      saleOrderType
      salePrice
      saleQuantity
      saleTotalPrice
      returnableAmount
      mark
      markName
      unit {
        unitId
        unitName
      }
    }
    createTime
    saleOrderCode
    saleOrderId
    saleOrderType
    saleOrderTypeName
    customer {
      customerId
      customerName
      customerType
      lastLevelId
      lastLevelName
    }
    saleTime
  }
}
    `;

/**
 * __useListSaleReturnCommodityQuery__
 *
 * To run a query within a React component, call `useListSaleReturnCommodityQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleReturnCommodityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleReturnCommodityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListSaleReturnCommodityQuery(baseOptions: Apollo.QueryHookOptions<ListSaleReturnCommodityQuery, ListSaleReturnCommodityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSaleReturnCommodityQuery, ListSaleReturnCommodityQueryVariables>(ListSaleReturnCommodityDocument, options);
      }
export function useListSaleReturnCommodityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSaleReturnCommodityQuery, ListSaleReturnCommodityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSaleReturnCommodityQuery, ListSaleReturnCommodityQueryVariables>(ListSaleReturnCommodityDocument, options);
        }
export type ListSaleReturnCommodityQueryHookResult = ReturnType<typeof useListSaleReturnCommodityQuery>;
export type ListSaleReturnCommodityLazyQueryHookResult = ReturnType<typeof useListSaleReturnCommodityLazyQuery>;
export type ListSaleReturnCommodityQueryResult = Apollo.QueryResult<ListSaleReturnCommodityQuery, ListSaleReturnCommodityQueryVariables>;
export const ListStoreManagementDocument = gql`
    query listStoreManagement($input: ListStoreManagementInput!) {
  listStoreManagement(input: $input) {
    customerDetail {
      addresses {
        addressId
        addressName
        belongType
        deliveryName
        isEnabled
        stockCount
      }
      customerId
      customerName
      customerType
    }
  }
}
    `;

/**
 * __useListStoreManagementQuery__
 *
 * To run a query within a React component, call `useListStoreManagementQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStoreManagementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStoreManagementQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListStoreManagementQuery(baseOptions: Apollo.QueryHookOptions<ListStoreManagementQuery, ListStoreManagementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListStoreManagementQuery, ListStoreManagementQueryVariables>(ListStoreManagementDocument, options);
      }
export function useListStoreManagementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStoreManagementQuery, ListStoreManagementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListStoreManagementQuery, ListStoreManagementQueryVariables>(ListStoreManagementDocument, options);
        }
export type ListStoreManagementQueryHookResult = ReturnType<typeof useListStoreManagementQuery>;
export type ListStoreManagementLazyQueryHookResult = ReturnType<typeof useListStoreManagementLazyQuery>;
export type ListStoreManagementQueryResult = Apollo.QueryResult<ListStoreManagementQuery, ListStoreManagementQueryVariables>;
export const ListStoreManagementStockInfoDocument = gql`
    query listStoreManagementStockInfo($input: ListStoreManagementStockInfoInput!) {
  listStoreManagementStockInfo(input: $input) {
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
    batches {
      batchCode
      batchId
      createTime
      sourceBatchCode
      sourceBatchId
      deliveryCode
      planCode
      planSaleTime
      dynamicQuantity {
        unit {
          unitId
          unitName
        }
        quantity
      }
    }
    commodityType
    commodityTypeName
    stockQuantity {
      unit {
        unitId
        unitName
      }
      quantity
    }
    mark
    markName
  }
}
    `;

/**
 * __useListStoreManagementStockInfoQuery__
 *
 * To run a query within a React component, call `useListStoreManagementStockInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStoreManagementStockInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStoreManagementStockInfoQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListStoreManagementStockInfoQuery(baseOptions: Apollo.QueryHookOptions<ListStoreManagementStockInfoQuery, ListStoreManagementStockInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListStoreManagementStockInfoQuery, ListStoreManagementStockInfoQueryVariables>(ListStoreManagementStockInfoDocument, options);
      }
export function useListStoreManagementStockInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStoreManagementStockInfoQuery, ListStoreManagementStockInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListStoreManagementStockInfoQuery, ListStoreManagementStockInfoQueryVariables>(ListStoreManagementStockInfoDocument, options);
        }
export type ListStoreManagementStockInfoQueryHookResult = ReturnType<typeof useListStoreManagementStockInfoQuery>;
export type ListStoreManagementStockInfoLazyQueryHookResult = ReturnType<typeof useListStoreManagementStockInfoLazyQuery>;
export type ListStoreManagementStockInfoQueryResult = Apollo.QueryResult<ListStoreManagementStockInfoQuery, ListStoreManagementStockInfoQueryVariables>;
export const PageStoreManagementSaleInfoDocument = gql`
    query pageStoreManagementSaleInfo($input: PageStoreManagementSaleInfoInput!, $page: Page) {
  pageStoreManagementSaleInfo(input: $input, page: $page) {
    pageCurrent
    pageSize
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
      customer {
        customerId
        customerName
        customerType
        lastLevelId
        lastLevelName
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
        batchInfo {
          itemId
          batchCode
          batchId
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
        }
        commodityType
        commodityTypeName
        salePrice
        totalSalePrice
        unit {
          unitId
          unitName
        }
        mark
        markName
      }
      createTime
      platformSaleReturnOrders {
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
          batches {
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
            itemId
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
          }
          commodityType
          commodityTypeName
          returnId
          returnType
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
          amount
          mark
          markName
          returnableAmount
        }
        createTime
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
        differenceOrderType
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
      remark
      saleAmount
      saleOrderCode
      saleOrderId
      saleOrderStatus
      saleOrderStatusName
      saleTime
      saleIncomeId
    }
    totalRecords
  }
}
    `;

/**
 * __usePageStoreManagementSaleInfoQuery__
 *
 * To run a query within a React component, call `usePageStoreManagementSaleInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageStoreManagementSaleInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageStoreManagementSaleInfoQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageStoreManagementSaleInfoQuery(baseOptions: Apollo.QueryHookOptions<PageStoreManagementSaleInfoQuery, PageStoreManagementSaleInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageStoreManagementSaleInfoQuery, PageStoreManagementSaleInfoQueryVariables>(PageStoreManagementSaleInfoDocument, options);
      }
export function usePageStoreManagementSaleInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageStoreManagementSaleInfoQuery, PageStoreManagementSaleInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageStoreManagementSaleInfoQuery, PageStoreManagementSaleInfoQueryVariables>(PageStoreManagementSaleInfoDocument, options);
        }
export type PageStoreManagementSaleInfoQueryHookResult = ReturnType<typeof usePageStoreManagementSaleInfoQuery>;
export type PageStoreManagementSaleInfoLazyQueryHookResult = ReturnType<typeof usePageStoreManagementSaleInfoLazyQuery>;
export type PageStoreManagementSaleInfoQueryResult = Apollo.QueryResult<PageStoreManagementSaleInfoQuery, PageStoreManagementSaleInfoQueryVariables>;
export const PlatformSaleDetailDocument = gql`
    query platformSaleDetail($input: PlatformSaleInput!) {
  platformSaleDetail(input: $input) {
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
      batchInfo {
        itemId
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
        batchCode
        batchId
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
      salePrice
      totalSalePrice
      mark
      markName
      unit {
        unitId
        unitName
      }
    }
    createTime
    platformSaleReturnOrders {
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
        batches {
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
          itemId
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
        }
        commodityType
        commodityTypeName
        returnId
        returnType
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
        amount
        mark
        markName
        returnableAmount
      }
      createTime
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
      differenceOrderType
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
    remark
    saleAmount
    saleOrderCode
    saleOrderId
    saleOrderStatus
    saleOrderStatusName
    saleTime
    saleIncomeId
  }
}
    `;

/**
 * __usePlatformSaleDetailQuery__
 *
 * To run a query within a React component, call `usePlatformSaleDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlatformSaleDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlatformSaleDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlatformSaleDetailQuery(baseOptions: Apollo.QueryHookOptions<PlatformSaleDetailQuery, PlatformSaleDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlatformSaleDetailQuery, PlatformSaleDetailQueryVariables>(PlatformSaleDetailDocument, options);
      }
export function usePlatformSaleDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlatformSaleDetailQuery, PlatformSaleDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlatformSaleDetailQuery, PlatformSaleDetailQueryVariables>(PlatformSaleDetailDocument, options);
        }
export type PlatformSaleDetailQueryHookResult = ReturnType<typeof usePlatformSaleDetailQuery>;
export type PlatformSaleDetailLazyQueryHookResult = ReturnType<typeof usePlatformSaleDetailLazyQuery>;
export type PlatformSaleDetailQueryResult = Apollo.QueryResult<PlatformSaleDetailQuery, PlatformSaleDetailQueryVariables>;
export const CreatePlatformSaleDocument = gql`
    mutation createPlatformSale($input: CreatePlatformSaleInput!) {
  createPlatformSale(input: $input)
}
    `;
export type CreatePlatformSaleMutationFn = Apollo.MutationFunction<CreatePlatformSaleMutation, CreatePlatformSaleMutationVariables>;

/**
 * __useCreatePlatformSaleMutation__
 *
 * To run a mutation, you first call `useCreatePlatformSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlatformSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlatformSaleMutation, { data, loading, error }] = useCreatePlatformSaleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlatformSaleMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlatformSaleMutation, CreatePlatformSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlatformSaleMutation, CreatePlatformSaleMutationVariables>(CreatePlatformSaleDocument, options);
      }
export type CreatePlatformSaleMutationHookResult = ReturnType<typeof useCreatePlatformSaleMutation>;
export type CreatePlatformSaleMutationResult = Apollo.MutationResult<CreatePlatformSaleMutation>;
export type CreatePlatformSaleMutationOptions = Apollo.BaseMutationOptions<CreatePlatformSaleMutation, CreatePlatformSaleMutationVariables>;
export const CreatePlatformSaleReturnDocument = gql`
    mutation createPlatformSaleReturn($input: CreateOrUpdatePlatformSaleReturnInput!) {
  createPlatformSaleReturn(input: $input)
}
    `;
export type CreatePlatformSaleReturnMutationFn = Apollo.MutationFunction<CreatePlatformSaleReturnMutation, CreatePlatformSaleReturnMutationVariables>;

/**
 * __useCreatePlatformSaleReturnMutation__
 *
 * To run a mutation, you first call `useCreatePlatformSaleReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlatformSaleReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlatformSaleReturnMutation, { data, loading, error }] = useCreatePlatformSaleReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlatformSaleReturnMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlatformSaleReturnMutation, CreatePlatformSaleReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlatformSaleReturnMutation, CreatePlatformSaleReturnMutationVariables>(CreatePlatformSaleReturnDocument, options);
      }
export type CreatePlatformSaleReturnMutationHookResult = ReturnType<typeof useCreatePlatformSaleReturnMutation>;
export type CreatePlatformSaleReturnMutationResult = Apollo.MutationResult<CreatePlatformSaleReturnMutation>;
export type CreatePlatformSaleReturnMutationOptions = Apollo.BaseMutationOptions<CreatePlatformSaleReturnMutation, CreatePlatformSaleReturnMutationVariables>;
export const UpdatePlatformSaleReturnDocument = gql`
    mutation updatePlatformSaleReturn($input: CreateOrUpdatePlatformSaleReturnInput!, $returnId: ID!) {
  updatePlatformSaleReturn(input: $input, returnId: $returnId)
}
    `;
export type UpdatePlatformSaleReturnMutationFn = Apollo.MutationFunction<UpdatePlatformSaleReturnMutation, UpdatePlatformSaleReturnMutationVariables>;

/**
 * __useUpdatePlatformSaleReturnMutation__
 *
 * To run a mutation, you first call `useUpdatePlatformSaleReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlatformSaleReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlatformSaleReturnMutation, { data, loading, error }] = useUpdatePlatformSaleReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *      returnId: // value for 'returnId'
 *   },
 * });
 */
export function useUpdatePlatformSaleReturnMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlatformSaleReturnMutation, UpdatePlatformSaleReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlatformSaleReturnMutation, UpdatePlatformSaleReturnMutationVariables>(UpdatePlatformSaleReturnDocument, options);
      }
export type UpdatePlatformSaleReturnMutationHookResult = ReturnType<typeof useUpdatePlatformSaleReturnMutation>;
export type UpdatePlatformSaleReturnMutationResult = Apollo.MutationResult<UpdatePlatformSaleReturnMutation>;
export type UpdatePlatformSaleReturnMutationOptions = Apollo.BaseMutationOptions<UpdatePlatformSaleReturnMutation, UpdatePlatformSaleReturnMutationVariables>;
export const VoidPlatformSaleDocument = gql`
    mutation voidPlatformSale($input: PlatformSaleInput!) {
  voidPlatformSale(input: $input)
}
    `;
export type VoidPlatformSaleMutationFn = Apollo.MutationFunction<VoidPlatformSaleMutation, VoidPlatformSaleMutationVariables>;

/**
 * __useVoidPlatformSaleMutation__
 *
 * To run a mutation, you first call `useVoidPlatformSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoidPlatformSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voidPlatformSaleMutation, { data, loading, error }] = useVoidPlatformSaleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVoidPlatformSaleMutation(baseOptions?: Apollo.MutationHookOptions<VoidPlatformSaleMutation, VoidPlatformSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoidPlatformSaleMutation, VoidPlatformSaleMutationVariables>(VoidPlatformSaleDocument, options);
      }
export type VoidPlatformSaleMutationHookResult = ReturnType<typeof useVoidPlatformSaleMutation>;
export type VoidPlatformSaleMutationResult = Apollo.MutationResult<VoidPlatformSaleMutation>;
export type VoidPlatformSaleMutationOptions = Apollo.BaseMutationOptions<VoidPlatformSaleMutation, VoidPlatformSaleMutationVariables>;
export const PlatformSaleAfterSaleBadgeDocument = gql`
    query platformSaleAfterSaleBadge($input: PlatformSaleAfterSaleBadgeInput) {
  platformSaleAfterSaleBadge(input: $input) {
    toBeDealt
  }
}
    `;

/**
 * __usePlatformSaleAfterSaleBadgeQuery__
 *
 * To run a query within a React component, call `usePlatformSaleAfterSaleBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlatformSaleAfterSaleBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlatformSaleAfterSaleBadgeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlatformSaleAfterSaleBadgeQuery(baseOptions?: Apollo.QueryHookOptions<PlatformSaleAfterSaleBadgeQuery, PlatformSaleAfterSaleBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlatformSaleAfterSaleBadgeQuery, PlatformSaleAfterSaleBadgeQueryVariables>(PlatformSaleAfterSaleBadgeDocument, options);
      }
export function usePlatformSaleAfterSaleBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlatformSaleAfterSaleBadgeQuery, PlatformSaleAfterSaleBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlatformSaleAfterSaleBadgeQuery, PlatformSaleAfterSaleBadgeQueryVariables>(PlatformSaleAfterSaleBadgeDocument, options);
        }
export type PlatformSaleAfterSaleBadgeQueryHookResult = ReturnType<typeof usePlatformSaleAfterSaleBadgeQuery>;
export type PlatformSaleAfterSaleBadgeLazyQueryHookResult = ReturnType<typeof usePlatformSaleAfterSaleBadgeLazyQuery>;
export type PlatformSaleAfterSaleBadgeQueryResult = Apollo.QueryResult<PlatformSaleAfterSaleBadgeQuery, PlatformSaleAfterSaleBadgeQueryVariables>;
export const OneMorePlatformSaleDocument = gql`
    mutation oneMorePlatformSale($input: OneMorePlatformSaleInput) {
  oneMorePlatformSale(input: $input) {
    outOfStockItems {
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
      commodityType
    }
    saleOrderId
  }
}
    `;
export type OneMorePlatformSaleMutationFn = Apollo.MutationFunction<OneMorePlatformSaleMutation, OneMorePlatformSaleMutationVariables>;

/**
 * __useOneMorePlatformSaleMutation__
 *
 * To run a mutation, you first call `useOneMorePlatformSaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOneMorePlatformSaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [oneMorePlatformSaleMutation, { data, loading, error }] = useOneMorePlatformSaleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOneMorePlatformSaleMutation(baseOptions?: Apollo.MutationHookOptions<OneMorePlatformSaleMutation, OneMorePlatformSaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OneMorePlatformSaleMutation, OneMorePlatformSaleMutationVariables>(OneMorePlatformSaleDocument, options);
      }
export type OneMorePlatformSaleMutationHookResult = ReturnType<typeof useOneMorePlatformSaleMutation>;
export type OneMorePlatformSaleMutationResult = Apollo.MutationResult<OneMorePlatformSaleMutation>;
export type OneMorePlatformSaleMutationOptions = Apollo.BaseMutationOptions<OneMorePlatformSaleMutation, OneMorePlatformSaleMutationVariables>;
export const ListPlatformSaleCommodityDocument = gql`
    query listPlatformSaleCommodity($listPlatformSaleCommodityInput: ListPlatformSaleCommodityInput) {
  listPlatformSaleCommodity(
    listPlatformSaleCommodityInput: $listPlatformSaleCommodityInput
  ) {
    commodityListWithStock {
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
      batchInfo {
        itemId
        batchCode
        batchId
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
      }
      commodityType
      commodityTypeName
      salePrice
      totalSalePrice
      mark
      markName
      unit {
        unitId
        unitName
      }
    }
    outOfStockItems {
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
      commodityType
    }
  }
}
    `;

/**
 * __useListPlatformSaleCommodityQuery__
 *
 * To run a query within a React component, call `useListPlatformSaleCommodityQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPlatformSaleCommodityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPlatformSaleCommodityQuery({
 *   variables: {
 *      listPlatformSaleCommodityInput: // value for 'listPlatformSaleCommodityInput'
 *   },
 * });
 */
export function useListPlatformSaleCommodityQuery(baseOptions?: Apollo.QueryHookOptions<ListPlatformSaleCommodityQuery, ListPlatformSaleCommodityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPlatformSaleCommodityQuery, ListPlatformSaleCommodityQueryVariables>(ListPlatformSaleCommodityDocument, options);
      }
export function useListPlatformSaleCommodityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPlatformSaleCommodityQuery, ListPlatformSaleCommodityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPlatformSaleCommodityQuery, ListPlatformSaleCommodityQueryVariables>(ListPlatformSaleCommodityDocument, options);
        }
export type ListPlatformSaleCommodityQueryHookResult = ReturnType<typeof useListPlatformSaleCommodityQuery>;
export type ListPlatformSaleCommodityLazyQueryHookResult = ReturnType<typeof useListPlatformSaleCommodityLazyQuery>;
export type ListPlatformSaleCommodityQueryResult = Apollo.QueryResult<ListPlatformSaleCommodityQuery, ListPlatformSaleCommodityQueryVariables>;