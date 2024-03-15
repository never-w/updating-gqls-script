import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OutOrderListQueryVariables = SchemaTypes.Exact<{
  productionOutOrderListInput: SchemaTypes.ProductionOutOrderListInput;
}>;


export type OutOrderListQuery = { outOrderList?: Array<{ __typename?: 'ProductionOutOrderPayload', outOrderId?: string, taskId?: string, taskCode?: string, outOrderCode?: string, outOrderType?: number, outOrderTypeName?: string, outOrderStatus?: number, outOrderStatusName?: string, commodityTypeId?: number, commodityTypeName?: string, customerType?: number, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, organizationId?: number, organizationName?: string, warehouseId?: string, warehouseName?: string, outOrderDescription?: string, createTime?: number, createBy?: number, createUserName?: string, updateTime?: number, updateBy?: number, cancelDescription?: string, commodities?: Array<{ __typename?: 'ProductionOutOrderDetailPayload', outOrderItemId?: string, outOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, createTime?: number, createBy?: number, updateTime?: number, stockTotalQuantity?: number, stockTotalType?: number, stockUnitQuantity?: number, stockUnitType?: number, conversion?: number, batchId?: string, batchCode?: string, pickingUnitQuantity?: number, pickingTotalQuantity?: number, belongCustomerName?: string, damageReason?: string, photos?: Array<string>, outStockFinishedQuantity?: { __typename?: 'OutStockFinishedQuantity', unitQuantity?: number, totalQuantity?: number } }> }> };

export type OutOrderStatusStatisticsQueryVariables = SchemaTypes.Exact<{
  orderStatusStatisticsInput?: SchemaTypes.InputMaybe<SchemaTypes.OrderStatusStatisticsInput>;
}>;


export type OutOrderStatusStatisticsQuery = { outOrderStatusStatistics?: { __typename?: 'OrderStatusStatisticsPayload', toSubmitNum?: number, processingNum?: number, completedNum?: number } };

export type GetFabricationTatisticsQueryVariables = SchemaTypes.Exact<{
  taskId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type GetFabricationTatisticsQuery = { getFabricationStatistics?: { __typename?: 'FabricationStatistics', pickingRecord?: number, pickingRecordFinishUndone?: boolean, warehousingRecord?: number, warehousingRecordUndone?: boolean, returnMaterial?: number, returnMaterialUndone?: boolean } };

export type OutOrderDetailQueryVariables = SchemaTypes.Exact<{
  productionOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.ProductionOutOrderInput>;
}>;


export type OutOrderDetailQuery = { outOrderDetail?: { __typename?: 'ProductionOutOrderPayload', outOrderId?: string, taskId?: string, taskCode?: string, outOrderCode?: string, outOrderType?: number, outOrderTypeName?: string, outOrderStatus?: number, outOrderStatusName?: string, commodityTypeId?: number, commodityTypeName?: string, customerType?: number, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, organizationId?: number, organizationName?: string, warehouseId?: string, warehouseName?: string, outOrderDescription?: string, createTime?: number, createBy?: number, createUserName?: string, updateTime?: number, updateBy?: number, cancelDescription?: string, commodities?: Array<{ __typename?: 'ProductionOutOrderDetailPayload', outOrderItemId?: string, outOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, createTime?: number, createBy?: number, updateTime?: number, stockTotalQuantity?: number, stockTotalType?: number, stockUnitQuantity?: number, stockUnitType?: number, conversion?: number, batchId?: string, batchCode?: string, pickingUnitQuantity?: number, pickingTotalQuantity?: number, belongCustomerName?: string, damageReason?: string, photos?: Array<string>, salePrice?: number, unitTotalPrice?: number, surplusTotalQuantity?: number, surplusUnitQuantity?: number, operableTotalQuantity?: number, operableUnitQuantity?: number, outStockFinishedQuantity?: { __typename?: 'OutStockFinishedQuantity', unitQuantity?: number, totalQuantity?: number }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, outStockBatchInfo?: Array<{ __typename?: 'StockBatchInfo', batchId?: string, batchCode?: string, unitQuantity?: number, totalQuantity?: number, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, relationCommoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, plan?: { __typename?: 'Plan', planId?: string, planCode?: string, planStatus?: number, customerType?: number, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, planDate?: number, planStartTime?: number, planEndTime?: number, planDescription?: string, createType?: number, commodityType?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } } };

export type OutOrderLogQueryVariables = SchemaTypes.Exact<{
  outOrderId: SchemaTypes.Scalars['ID'];
}>;


export type OutOrderLogQuery = { outOrderLog?: Array<{ __typename?: 'ProductionOutOrderLogPayload', outOrderLogId?: number, outOrderId?: string, outOrderLogType?: number, outOrderLogTypeText?: string, outOrderLogDescription?: string, createTime?: number, createBy?: number, createUserName?: string }> };

export type InOrderListQueryVariables = SchemaTypes.Exact<{
  productionInOrderListInput: SchemaTypes.ProductionInOrderListInput;
}>;


export type InOrderListQuery = { inOrderList?: { __typename?: 'ProductionInOrderListPayload', ProductionInOrdersList?: Array<{ __typename?: 'ProductionInOrderPayload', inOrderId?: string, taskId?: string, taskCode?: string, inOrderCode?: string, inOrderType?: number, inOrderTypeName?: string, inOrderStatus?: number, inOrderStatusName?: string, commodityTypeId?: number, commodityTypeName?: string, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, organizationId?: number, organizationName?: string, warehouseId?: string, warehouseName?: string, inOrderDescription?: string, createTime?: number, createBy?: number, createUserName?: string, updateTime?: number, updateBy?: number, cancelDescription?: string, surplusTotalQuantity?: number, surplusUnitQuantity?: number, operableTotalQuantity?: number, operableUnitQuantity?: number, commodities?: Array<{ __typename?: 'ProductionInOrderItemPayload', inOrderItemId?: string, inOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, createTime?: number, createBy?: number, updateTime?: number, conversion?: number, reason?: string, operableTotalQuantity?: number, operableUnitQuantity?: number, batch?: { __typename?: 'StockBatch', batchId?: string, batchCode?: string }, inStockFinishedQuantity?: { __typename?: 'InStockFinishedQuantity', unitQuantity?: number, totalQuantity?: number }, inStockBatchInfo?: Array<{ __typename?: 'StockBatchInfo', batchId?: string, batchCode?: string, unitQuantity?: number, totalQuantity?: number, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number } }> }> } };

export type InOrderStatusStatisticsQueryVariables = SchemaTypes.Exact<{
  orderStatusStatisticsInput?: SchemaTypes.InputMaybe<SchemaTypes.OrderStatusStatisticsInput>;
}>;


export type InOrderStatusStatisticsQuery = { inOrderStatusStatistics?: { __typename?: 'OrderStatusStatisticsPayload', toSubmitNum?: number, processingNum?: number, completedNum?: number } };

export type InOrderDetailQueryVariables = SchemaTypes.Exact<{
  productionInOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.ProductionInOrderInput>;
}>;


export type InOrderDetailQuery = { inOrderDetail?: { __typename?: 'ProductionInOrderPayload', inOrderId?: string, taskId?: string, taskCode?: string, inOrderCode?: string, inOrderType?: number, inOrderTypeName?: string, inOrderStatus?: number, inOrderStatusName?: string, commodityTypeId?: number, commodityTypeName?: string, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, organizationId?: number, organizationName?: string, warehouseId?: string, warehouseName?: string, inOrderDescription?: string, createTime?: number, createBy?: number, createUserName?: string, updateTime?: number, updateBy?: number, cancelDescription?: string, surplusTotalQuantity?: number, surplusUnitQuantity?: number, operableTotalQuantity?: number, operableUnitQuantity?: number, commodities?: Array<{ __typename?: 'ProductionInOrderItemPayload', inOrderItemId?: string, inOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, createTime?: number, createBy?: number, updateTime?: number, conversion?: number, reason?: string, operableTotalQuantity?: number, operableUnitQuantity?: number, batch?: { __typename?: 'StockBatch', batchId?: string, batchCode?: string }, inStockFinishedQuantity?: { __typename?: 'InStockFinishedQuantity', unitQuantity?: number, totalQuantity?: number }, inStockBatchInfo?: Array<{ __typename?: 'StockBatchInfo', batchId?: string, batchCode?: string, unitQuantity?: number, totalQuantity?: number, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number } }> } };

export type InOrderLogQueryVariables = SchemaTypes.Exact<{
  inOrderId: SchemaTypes.Scalars['ID'];
}>;


export type InOrderLogQuery = { inOrderLog?: { __typename?: 'ProductionInOrderLogListPayload', inOrderLogList?: Array<{ __typename?: 'ProductionInOrderLogPayload', inOrderLogId?: string, inOrderId?: string, inOrderLogType?: number, inOrderLogTypeText?: string, inOrderLogDescription?: string, createTime?: number, createBy?: number, createUserName?: string }> } };

export type CancelInOrderMutationVariables = SchemaTypes.Exact<{
  cancelInOrderInput: SchemaTypes.CancelInOrderInput;
}>;


export type CancelInOrderMutation = { cancelInOrder?: string };

export type SubmitInOrderMutationVariables = SchemaTypes.Exact<{
  inOrderId: SchemaTypes.Scalars['ID'];
}>;


export type SubmitInOrderMutation = { submitInOrder?: string };

export type TaskInCommoditiesQueryVariables = SchemaTypes.Exact<{
  taskInCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.TaskInCommodityInput>;
}>;


export type TaskInCommoditiesQuery = { taskInCommodities?: { __typename?: 'TaskInCommoditiesBasePayload', surplusTotalQuantity?: number, surplusUnitQuantity?: number, operableTotalQuantity?: number, operableUnitQuantity?: number, taskInCommoditiesPayload?: Array<{ __typename?: 'TaskInCommoditiesPayload', batchOperableTotalQuantity?: number, batchOperableUnitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, batch?: { __typename?: 'StockBatch', batchId?: string, batchCode?: string } }> } };

export type TaskReturnMaterialCommoditiesQueryVariables = SchemaTypes.Exact<{
  taskInCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.TaskInCommodityInput>;
}>;


export type TaskReturnMaterialCommoditiesQuery = { taskReturnMaterialCommodities?: { __typename?: 'TaskReturnMaterialCommoditiesBasePayload', surplusTotalQuantity?: number, surplusUnitQuantity?: number, operableTotalQuantity?: number, operableUnitQuantity?: number, taskReturnMaterialCommoditiesPayload?: Array<{ __typename?: 'TaskReturnMaterialCommoditiesPayload', batchOperableTotalQuantity?: number, batchOperableUnitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, batch?: { __typename?: 'StockBatch', batchId?: string, batchCode?: string } }> } };

export type DestroyOutDetailQueryVariables = SchemaTypes.Exact<{
  productionOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.ProductionOutOrderInput>;
}>;


export type DestroyOutDetailQuery = { outOrderDetail?: { __typename?: 'ProductionOutOrderPayload', outOrderId?: string, taskId?: string, taskCode?: string, outOrderCode?: string, outOrderType?: number, outOrderTypeName?: string, outOrderStatus?: number, outOrderStatusName?: string, commodityTypeId?: number, commodityTypeName?: string, customerType?: number, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, organizationId?: number, organizationName?: string, warehouseId?: string, warehouseName?: string, outOrderDescription?: string, createTime?: number, createBy?: number, createUserName?: string, updateTime?: number, updateBy?: number, cancelDescription?: string, commodities?: Array<{ __typename?: 'ProductionOutOrderDetailPayload', outOrderItemId?: string, outOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, createTime?: number, createBy?: number, updateTime?: number, stockTotalQuantity?: number, stockTotalType?: number, stockUnitQuantity?: number, stockUnitType?: number, conversion?: number, batchId?: string, batchCode?: string, pickingUnitQuantity?: number, pickingTotalQuantity?: number, belongCustomerName?: string, damageReason?: string, photos?: Array<string>, salePrice?: number, unitTotalPrice?: number, surplusTotalQuantity?: number, surplusUnitQuantity?: number, operableTotalQuantity?: number, operableUnitQuantity?: number, outStockFinishedQuantity?: { __typename?: 'OutStockFinishedQuantity', unitQuantity?: number, totalQuantity?: number }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, outStockBatchInfo?: Array<{ __typename?: 'StockBatchInfo', batchId?: string, batchCode?: string, unitQuantity?: number, totalQuantity?: number, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, relationCommoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, plan?: { __typename?: 'Plan', planId?: string, planCode?: string, planStatus?: number, customerType?: number, customerId?: number, customerName?: string, customerDistributionId?: number, customerDistributionName?: string, planDate?: number, planStartTime?: number, planEndTime?: number, planDescription?: string, createType?: number, commodityType?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } } };

export type RelationTaskAcquireMaterialCommoditiesQueryVariables = SchemaTypes.Exact<{
  relationTaskAcquireMaterialCommoditiesInput?: SchemaTypes.InputMaybe<SchemaTypes.RelationTaskAcquireMaterialCommoditiesInput>;
}>;


export type RelationTaskAcquireMaterialCommoditiesQuery = { relationTaskAcquireMaterialCommodities?: { __typename?: 'RelationTaskAcquireMaterialCommoditiesPayload', commoditySkuInfos?: Array<{ __typename?: 'CommoditySkuInfos', commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> } };

export type TaskCommodityTypeStockDetailQueryVariables = SchemaTypes.Exact<{
  taskCommodityTypeStockDetailInput?: SchemaTypes.InputMaybe<SchemaTypes.TaskCommodityTypeStockDetailInput>;
}>;


export type TaskCommodityTypeStockDetailQuery = { taskCommodityTypeStockDetail?: { __typename?: 'TaskCommodityTypeStockDetailPayload', semiProduct?: boolean, returnedGoodsProduct?: boolean } };


export const OutOrderListDocument = gql`
    query outOrderList($productionOutOrderListInput: ProductionOutOrderListInput!) {
  outOrderList(productionOutOrderListInput: $productionOutOrderListInput) {
    outOrderId
    taskId
    taskCode
    outOrderCode
    outOrderType
    outOrderTypeName
    outOrderStatus
    outOrderStatusName
    commodityTypeId
    commodityTypeName
    customerType
    customerId
    customerName
    customerDistributionId
    customerDistributionName
    organizationId
    organizationName
    warehouseId
    warehouseName
    outOrderDescription
    createTime
    createBy
    createUserName
    updateTime
    updateBy
    commodities {
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
      createTime
      createBy
      updateTime
      stockTotalQuantity
      stockTotalType
      stockUnitQuantity
      stockUnitType
      conversion
      batchId
      batchCode
      pickingUnitQuantity
      pickingTotalQuantity
      belongCustomerName
      damageReason
      photos
      outStockFinishedQuantity {
        unitQuantity
        totalQuantity
      }
    }
    cancelDescription
  }
}
    `;

/**
 * __useOutOrderListQuery__
 *
 * To run a query within a React component, call `useOutOrderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOutOrderListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOutOrderListQuery({
 *   variables: {
 *      productionOutOrderListInput: // value for 'productionOutOrderListInput'
 *   },
 * });
 */
export function useOutOrderListQuery(baseOptions: Apollo.QueryHookOptions<OutOrderListQuery, OutOrderListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OutOrderListQuery, OutOrderListQueryVariables>(OutOrderListDocument, options);
      }
export function useOutOrderListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OutOrderListQuery, OutOrderListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OutOrderListQuery, OutOrderListQueryVariables>(OutOrderListDocument, options);
        }
export type OutOrderListQueryHookResult = ReturnType<typeof useOutOrderListQuery>;
export type OutOrderListLazyQueryHookResult = ReturnType<typeof useOutOrderListLazyQuery>;
export type OutOrderListQueryResult = Apollo.QueryResult<OutOrderListQuery, OutOrderListQueryVariables>;
export const OutOrderStatusStatisticsDocument = gql`
    query outOrderStatusStatistics($orderStatusStatisticsInput: OrderStatusStatisticsInput) {
  outOrderStatusStatistics(
    orderStatusStatisticsInput: $orderStatusStatisticsInput
  ) {
    toSubmitNum
    processingNum
    completedNum
  }
}
    `;

/**
 * __useOutOrderStatusStatisticsQuery__
 *
 * To run a query within a React component, call `useOutOrderStatusStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOutOrderStatusStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOutOrderStatusStatisticsQuery({
 *   variables: {
 *      orderStatusStatisticsInput: // value for 'orderStatusStatisticsInput'
 *   },
 * });
 */
export function useOutOrderStatusStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<OutOrderStatusStatisticsQuery, OutOrderStatusStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OutOrderStatusStatisticsQuery, OutOrderStatusStatisticsQueryVariables>(OutOrderStatusStatisticsDocument, options);
      }
export function useOutOrderStatusStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OutOrderStatusStatisticsQuery, OutOrderStatusStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OutOrderStatusStatisticsQuery, OutOrderStatusStatisticsQueryVariables>(OutOrderStatusStatisticsDocument, options);
        }
export type OutOrderStatusStatisticsQueryHookResult = ReturnType<typeof useOutOrderStatusStatisticsQuery>;
export type OutOrderStatusStatisticsLazyQueryHookResult = ReturnType<typeof useOutOrderStatusStatisticsLazyQuery>;
export type OutOrderStatusStatisticsQueryResult = Apollo.QueryResult<OutOrderStatusStatisticsQuery, OutOrderStatusStatisticsQueryVariables>;
export const GetFabricationTatisticsDocument = gql`
    query getFabricationTatistics($taskId: ID) {
  getFabricationStatistics(taskId: $taskId) {
    pickingRecord
    pickingRecordFinishUndone
    warehousingRecord
    warehousingRecordUndone
    returnMaterial
    returnMaterialUndone
  }
}
    `;

/**
 * __useGetFabricationTatisticsQuery__
 *
 * To run a query within a React component, call `useGetFabricationTatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFabricationTatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFabricationTatisticsQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useGetFabricationTatisticsQuery(baseOptions?: Apollo.QueryHookOptions<GetFabricationTatisticsQuery, GetFabricationTatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFabricationTatisticsQuery, GetFabricationTatisticsQueryVariables>(GetFabricationTatisticsDocument, options);
      }
export function useGetFabricationTatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFabricationTatisticsQuery, GetFabricationTatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFabricationTatisticsQuery, GetFabricationTatisticsQueryVariables>(GetFabricationTatisticsDocument, options);
        }
export type GetFabricationTatisticsQueryHookResult = ReturnType<typeof useGetFabricationTatisticsQuery>;
export type GetFabricationTatisticsLazyQueryHookResult = ReturnType<typeof useGetFabricationTatisticsLazyQuery>;
export type GetFabricationTatisticsQueryResult = Apollo.QueryResult<GetFabricationTatisticsQuery, GetFabricationTatisticsQueryVariables>;
export const OutOrderDetailDocument = gql`
    query outOrderDetail($productionOutOrderInput: ProductionOutOrderInput) {
  outOrderDetail(productionOutOrderInput: $productionOutOrderInput) {
    outOrderId
    taskId
    taskCode
    outOrderCode
    outOrderType
    outOrderTypeName
    outOrderStatus
    outOrderStatusName
    commodityTypeId
    commodityTypeName
    customerType
    customerId
    customerName
    customerDistributionId
    customerDistributionName
    organizationId
    organizationName
    warehouseId
    warehouseName
    outOrderDescription
    createTime
    createBy
    createUserName
    updateTime
    updateBy
    commodities {
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
      createTime
      createBy
      updateTime
      stockTotalQuantity
      stockTotalType
      stockUnitQuantity
      stockUnitType
      conversion
      batchId
      batchCode
      pickingUnitQuantity
      pickingTotalQuantity
      belongCustomerName
      damageReason
      photos
      outStockFinishedQuantity {
        unitQuantity
        totalQuantity
      }
      salePrice
      salePriceType {
        unitId
        unitName
      }
      unitTotalPrice
      outStockBatchInfo {
        batchId
        batchCode
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
      }
      surplusTotalQuantity
      surplusUnitQuantity
      operableTotalQuantity
      operableUnitQuantity
      relationCommoditySku {
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
    }
    cancelDescription
    plan {
      planId
      planCode
      planStatus
      customerType
      customerId
      customerName
      customerDistributionId
      customerDistributionName
      planDate
      planStartTime
      planEndTime
      planDescription
      createType
      commodityType
      belongOrg {
        orgId
        orgName
      }
      warehouse {
        warehouseId
        warehouseName
      }
    }
  }
}
    `;

/**
 * __useOutOrderDetailQuery__
 *
 * To run a query within a React component, call `useOutOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useOutOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOutOrderDetailQuery({
 *   variables: {
 *      productionOutOrderInput: // value for 'productionOutOrderInput'
 *   },
 * });
 */
export function useOutOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<OutOrderDetailQuery, OutOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OutOrderDetailQuery, OutOrderDetailQueryVariables>(OutOrderDetailDocument, options);
      }
export function useOutOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OutOrderDetailQuery, OutOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OutOrderDetailQuery, OutOrderDetailQueryVariables>(OutOrderDetailDocument, options);
        }
export type OutOrderDetailQueryHookResult = ReturnType<typeof useOutOrderDetailQuery>;
export type OutOrderDetailLazyQueryHookResult = ReturnType<typeof useOutOrderDetailLazyQuery>;
export type OutOrderDetailQueryResult = Apollo.QueryResult<OutOrderDetailQuery, OutOrderDetailQueryVariables>;
export const OutOrderLogDocument = gql`
    query outOrderLog($outOrderId: ID!) {
  outOrderLog(outOrderId: $outOrderId) {
    outOrderLogId
    outOrderId
    outOrderLogType
    outOrderLogTypeText
    outOrderLogDescription
    createTime
    createBy
    createUserName
  }
}
    `;

/**
 * __useOutOrderLogQuery__
 *
 * To run a query within a React component, call `useOutOrderLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useOutOrderLogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOutOrderLogQuery({
 *   variables: {
 *      outOrderId: // value for 'outOrderId'
 *   },
 * });
 */
export function useOutOrderLogQuery(baseOptions: Apollo.QueryHookOptions<OutOrderLogQuery, OutOrderLogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OutOrderLogQuery, OutOrderLogQueryVariables>(OutOrderLogDocument, options);
      }
export function useOutOrderLogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OutOrderLogQuery, OutOrderLogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OutOrderLogQuery, OutOrderLogQueryVariables>(OutOrderLogDocument, options);
        }
export type OutOrderLogQueryHookResult = ReturnType<typeof useOutOrderLogQuery>;
export type OutOrderLogLazyQueryHookResult = ReturnType<typeof useOutOrderLogLazyQuery>;
export type OutOrderLogQueryResult = Apollo.QueryResult<OutOrderLogQuery, OutOrderLogQueryVariables>;
export const InOrderListDocument = gql`
    query inOrderList($productionInOrderListInput: ProductionInOrderListInput!) {
  inOrderList(productionInOrderListInput: $productionInOrderListInput) {
    ProductionInOrdersList {
      inOrderId
      taskId
      taskCode
      inOrderCode
      inOrderType
      inOrderTypeName
      inOrderStatus
      inOrderStatusName
      commodityTypeId
      commodityTypeName
      customerId
      customerName
      customerDistributionId
      customerDistributionName
      organizationId
      organizationName
      warehouseId
      warehouseName
      inOrderDescription
      createTime
      createBy
      createUserName
      updateTime
      updateBy
      commodities {
        inOrderItemId
        inOrderId
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
        createTime
        createBy
        updateTime
        batch {
          batchId
          batchCode
        }
        conversion
        inStockFinishedQuantity {
          unitQuantity
          totalQuantity
        }
        inStockBatchInfo {
          batchId
          batchCode
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
        }
        reason
        customer {
          customerId
          customerName
          customerType
        }
        operableTotalQuantity
        operableUnitQuantity
      }
      cancelDescription
      surplusTotalQuantity
      surplusUnitQuantity
      operableTotalQuantity
      operableUnitQuantity
    }
  }
}
    `;

/**
 * __useInOrderListQuery__
 *
 * To run a query within a React component, call `useInOrderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useInOrderListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInOrderListQuery({
 *   variables: {
 *      productionInOrderListInput: // value for 'productionInOrderListInput'
 *   },
 * });
 */
export function useInOrderListQuery(baseOptions: Apollo.QueryHookOptions<InOrderListQuery, InOrderListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InOrderListQuery, InOrderListQueryVariables>(InOrderListDocument, options);
      }
export function useInOrderListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InOrderListQuery, InOrderListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InOrderListQuery, InOrderListQueryVariables>(InOrderListDocument, options);
        }
export type InOrderListQueryHookResult = ReturnType<typeof useInOrderListQuery>;
export type InOrderListLazyQueryHookResult = ReturnType<typeof useInOrderListLazyQuery>;
export type InOrderListQueryResult = Apollo.QueryResult<InOrderListQuery, InOrderListQueryVariables>;
export const InOrderStatusStatisticsDocument = gql`
    query inOrderStatusStatistics($orderStatusStatisticsInput: OrderStatusStatisticsInput) {
  inOrderStatusStatistics(orderStatusStatisticsInput: $orderStatusStatisticsInput) {
    toSubmitNum
    processingNum
    completedNum
  }
}
    `;

/**
 * __useInOrderStatusStatisticsQuery__
 *
 * To run a query within a React component, call `useInOrderStatusStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInOrderStatusStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInOrderStatusStatisticsQuery({
 *   variables: {
 *      orderStatusStatisticsInput: // value for 'orderStatusStatisticsInput'
 *   },
 * });
 */
export function useInOrderStatusStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<InOrderStatusStatisticsQuery, InOrderStatusStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InOrderStatusStatisticsQuery, InOrderStatusStatisticsQueryVariables>(InOrderStatusStatisticsDocument, options);
      }
export function useInOrderStatusStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InOrderStatusStatisticsQuery, InOrderStatusStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InOrderStatusStatisticsQuery, InOrderStatusStatisticsQueryVariables>(InOrderStatusStatisticsDocument, options);
        }
export type InOrderStatusStatisticsQueryHookResult = ReturnType<typeof useInOrderStatusStatisticsQuery>;
export type InOrderStatusStatisticsLazyQueryHookResult = ReturnType<typeof useInOrderStatusStatisticsLazyQuery>;
export type InOrderStatusStatisticsQueryResult = Apollo.QueryResult<InOrderStatusStatisticsQuery, InOrderStatusStatisticsQueryVariables>;
export const InOrderDetailDocument = gql`
    query inOrderDetail($productionInOrderInput: ProductionInOrderInput) {
  inOrderDetail(productionInOrderInput: $productionInOrderInput) {
    inOrderId
    taskId
    taskCode
    inOrderCode
    inOrderType
    inOrderTypeName
    inOrderStatus
    inOrderStatusName
    commodityTypeId
    commodityTypeName
    customerId
    customerName
    customerDistributionId
    customerDistributionName
    organizationId
    organizationName
    warehouseId
    warehouseName
    inOrderDescription
    createTime
    createBy
    createUserName
    updateTime
    updateBy
    commodities {
      inOrderItemId
      inOrderId
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
      createTime
      createBy
      updateTime
      batch {
        batchId
        batchCode
      }
      conversion
      inStockFinishedQuantity {
        unitQuantity
        totalQuantity
      }
      inStockBatchInfo {
        batchId
        batchCode
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
      }
      reason
      customer {
        customerId
        customerName
        customerType
      }
      operableTotalQuantity
      operableUnitQuantity
    }
    cancelDescription
    surplusTotalQuantity
    surplusUnitQuantity
    operableTotalQuantity
    operableUnitQuantity
  }
}
    `;

/**
 * __useInOrderDetailQuery__
 *
 * To run a query within a React component, call `useInOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useInOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInOrderDetailQuery({
 *   variables: {
 *      productionInOrderInput: // value for 'productionInOrderInput'
 *   },
 * });
 */
export function useInOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<InOrderDetailQuery, InOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InOrderDetailQuery, InOrderDetailQueryVariables>(InOrderDetailDocument, options);
      }
export function useInOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InOrderDetailQuery, InOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InOrderDetailQuery, InOrderDetailQueryVariables>(InOrderDetailDocument, options);
        }
export type InOrderDetailQueryHookResult = ReturnType<typeof useInOrderDetailQuery>;
export type InOrderDetailLazyQueryHookResult = ReturnType<typeof useInOrderDetailLazyQuery>;
export type InOrderDetailQueryResult = Apollo.QueryResult<InOrderDetailQuery, InOrderDetailQueryVariables>;
export const InOrderLogDocument = gql`
    query inOrderLog($inOrderId: ID!) {
  inOrderLog(inOrderId: $inOrderId) {
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
 * __useInOrderLogQuery__
 *
 * To run a query within a React component, call `useInOrderLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useInOrderLogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInOrderLogQuery({
 *   variables: {
 *      inOrderId: // value for 'inOrderId'
 *   },
 * });
 */
export function useInOrderLogQuery(baseOptions: Apollo.QueryHookOptions<InOrderLogQuery, InOrderLogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InOrderLogQuery, InOrderLogQueryVariables>(InOrderLogDocument, options);
      }
export function useInOrderLogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InOrderLogQuery, InOrderLogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InOrderLogQuery, InOrderLogQueryVariables>(InOrderLogDocument, options);
        }
export type InOrderLogQueryHookResult = ReturnType<typeof useInOrderLogQuery>;
export type InOrderLogLazyQueryHookResult = ReturnType<typeof useInOrderLogLazyQuery>;
export type InOrderLogQueryResult = Apollo.QueryResult<InOrderLogQuery, InOrderLogQueryVariables>;
export const CancelInOrderDocument = gql`
    mutation cancelInOrder($cancelInOrderInput: CancelInOrderInput!) {
  cancelInOrder(cancelInOrderInput: $cancelInOrderInput)
}
    `;
export type CancelInOrderMutationFn = Apollo.MutationFunction<CancelInOrderMutation, CancelInOrderMutationVariables>;

/**
 * __useCancelInOrderMutation__
 *
 * To run a mutation, you first call `useCancelInOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelInOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelInOrderMutation, { data, loading, error }] = useCancelInOrderMutation({
 *   variables: {
 *      cancelInOrderInput: // value for 'cancelInOrderInput'
 *   },
 * });
 */
export function useCancelInOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelInOrderMutation, CancelInOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelInOrderMutation, CancelInOrderMutationVariables>(CancelInOrderDocument, options);
      }
export type CancelInOrderMutationHookResult = ReturnType<typeof useCancelInOrderMutation>;
export type CancelInOrderMutationResult = Apollo.MutationResult<CancelInOrderMutation>;
export type CancelInOrderMutationOptions = Apollo.BaseMutationOptions<CancelInOrderMutation, CancelInOrderMutationVariables>;
export const SubmitInOrderDocument = gql`
    mutation submitInOrder($inOrderId: ID!) {
  submitInOrder(inOrderId: $inOrderId)
}
    `;
export type SubmitInOrderMutationFn = Apollo.MutationFunction<SubmitInOrderMutation, SubmitInOrderMutationVariables>;

/**
 * __useSubmitInOrderMutation__
 *
 * To run a mutation, you first call `useSubmitInOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitInOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitInOrderMutation, { data, loading, error }] = useSubmitInOrderMutation({
 *   variables: {
 *      inOrderId: // value for 'inOrderId'
 *   },
 * });
 */
export function useSubmitInOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitInOrderMutation, SubmitInOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitInOrderMutation, SubmitInOrderMutationVariables>(SubmitInOrderDocument, options);
      }
export type SubmitInOrderMutationHookResult = ReturnType<typeof useSubmitInOrderMutation>;
export type SubmitInOrderMutationResult = Apollo.MutationResult<SubmitInOrderMutation>;
export type SubmitInOrderMutationOptions = Apollo.BaseMutationOptions<SubmitInOrderMutation, SubmitInOrderMutationVariables>;
export const TaskInCommoditiesDocument = gql`
    query taskInCommodities($taskInCommodityInput: TaskInCommodityInput) {
  taskInCommodities(taskInCommodityInput: $taskInCommodityInput) {
    surplusTotalQuantity
    surplusUnitQuantity
    operableTotalQuantity
    operableUnitQuantity
    taskInCommoditiesPayload {
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
        categoryId
        categoryName
      }
      batchOperableTotalQuantity
      batchOperableUnitQuantity
      customer {
        customerId
        customerName
        customerType
      }
      batch {
        batchId
        batchCode
      }
    }
  }
}
    `;

/**
 * __useTaskInCommoditiesQuery__
 *
 * To run a query within a React component, call `useTaskInCommoditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskInCommoditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskInCommoditiesQuery({
 *   variables: {
 *      taskInCommodityInput: // value for 'taskInCommodityInput'
 *   },
 * });
 */
export function useTaskInCommoditiesQuery(baseOptions?: Apollo.QueryHookOptions<TaskInCommoditiesQuery, TaskInCommoditiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskInCommoditiesQuery, TaskInCommoditiesQueryVariables>(TaskInCommoditiesDocument, options);
      }
export function useTaskInCommoditiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskInCommoditiesQuery, TaskInCommoditiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskInCommoditiesQuery, TaskInCommoditiesQueryVariables>(TaskInCommoditiesDocument, options);
        }
export type TaskInCommoditiesQueryHookResult = ReturnType<typeof useTaskInCommoditiesQuery>;
export type TaskInCommoditiesLazyQueryHookResult = ReturnType<typeof useTaskInCommoditiesLazyQuery>;
export type TaskInCommoditiesQueryResult = Apollo.QueryResult<TaskInCommoditiesQuery, TaskInCommoditiesQueryVariables>;
export const TaskReturnMaterialCommoditiesDocument = gql`
    query taskReturnMaterialCommodities($taskInCommodityInput: TaskInCommodityInput) {
  taskReturnMaterialCommodities(taskInCommodityInput: $taskInCommodityInput) {
    surplusTotalQuantity
    surplusUnitQuantity
    operableTotalQuantity
    operableUnitQuantity
    taskReturnMaterialCommoditiesPayload {
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
        categoryId
        categoryName
      }
      batchOperableTotalQuantity
      batchOperableUnitQuantity
      customer {
        customerId
        customerName
        customerType
      }
      batch {
        batchId
        batchCode
      }
    }
  }
}
    `;

/**
 * __useTaskReturnMaterialCommoditiesQuery__
 *
 * To run a query within a React component, call `useTaskReturnMaterialCommoditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskReturnMaterialCommoditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskReturnMaterialCommoditiesQuery({
 *   variables: {
 *      taskInCommodityInput: // value for 'taskInCommodityInput'
 *   },
 * });
 */
export function useTaskReturnMaterialCommoditiesQuery(baseOptions?: Apollo.QueryHookOptions<TaskReturnMaterialCommoditiesQuery, TaskReturnMaterialCommoditiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskReturnMaterialCommoditiesQuery, TaskReturnMaterialCommoditiesQueryVariables>(TaskReturnMaterialCommoditiesDocument, options);
      }
export function useTaskReturnMaterialCommoditiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskReturnMaterialCommoditiesQuery, TaskReturnMaterialCommoditiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskReturnMaterialCommoditiesQuery, TaskReturnMaterialCommoditiesQueryVariables>(TaskReturnMaterialCommoditiesDocument, options);
        }
export type TaskReturnMaterialCommoditiesQueryHookResult = ReturnType<typeof useTaskReturnMaterialCommoditiesQuery>;
export type TaskReturnMaterialCommoditiesLazyQueryHookResult = ReturnType<typeof useTaskReturnMaterialCommoditiesLazyQuery>;
export type TaskReturnMaterialCommoditiesQueryResult = Apollo.QueryResult<TaskReturnMaterialCommoditiesQuery, TaskReturnMaterialCommoditiesQueryVariables>;
export const DestroyOutDetailDocument = gql`
    query destroyOutDetail($productionOutOrderInput: ProductionOutOrderInput) {
  outOrderDetail(productionOutOrderInput: $productionOutOrderInput) {
    outOrderId
    taskId
    taskCode
    outOrderCode
    outOrderType
    outOrderTypeName
    outOrderStatus
    outOrderStatusName
    commodityTypeId
    commodityTypeName
    customerType
    customerId
    customerName
    customerDistributionId
    customerDistributionName
    organizationId
    organizationName
    warehouseId
    warehouseName
    outOrderDescription
    createTime
    createBy
    createUserName
    updateTime
    updateBy
    commodities {
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
      createTime
      createBy
      updateTime
      stockTotalQuantity
      stockTotalType
      stockUnitQuantity
      stockUnitType
      conversion
      batchId
      batchCode
      pickingUnitQuantity
      pickingTotalQuantity
      belongCustomerName
      damageReason
      photos
      outStockFinishedQuantity {
        unitQuantity
        totalQuantity
      }
      salePrice
      salePriceType {
        unitId
        unitName
      }
      unitTotalPrice
      outStockBatchInfo {
        batchId
        batchCode
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
      }
      surplusTotalQuantity
      surplusUnitQuantity
      operableTotalQuantity
      operableUnitQuantity
      relationCommoditySku {
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
    }
    cancelDescription
    plan {
      planId
      planCode
      planStatus
      customerType
      customerId
      customerName
      customerDistributionId
      customerDistributionName
      planDate
      planStartTime
      planEndTime
      planDescription
      createType
      commodityType
      belongOrg {
        orgId
        orgName
      }
      warehouse {
        warehouseId
        warehouseName
      }
    }
  }
}
    `;

/**
 * __useDestroyOutDetailQuery__
 *
 * To run a query within a React component, call `useDestroyOutDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useDestroyOutDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDestroyOutDetailQuery({
 *   variables: {
 *      productionOutOrderInput: // value for 'productionOutOrderInput'
 *   },
 * });
 */
export function useDestroyOutDetailQuery(baseOptions?: Apollo.QueryHookOptions<DestroyOutDetailQuery, DestroyOutDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DestroyOutDetailQuery, DestroyOutDetailQueryVariables>(DestroyOutDetailDocument, options);
      }
export function useDestroyOutDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DestroyOutDetailQuery, DestroyOutDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DestroyOutDetailQuery, DestroyOutDetailQueryVariables>(DestroyOutDetailDocument, options);
        }
export type DestroyOutDetailQueryHookResult = ReturnType<typeof useDestroyOutDetailQuery>;
export type DestroyOutDetailLazyQueryHookResult = ReturnType<typeof useDestroyOutDetailLazyQuery>;
export type DestroyOutDetailQueryResult = Apollo.QueryResult<DestroyOutDetailQuery, DestroyOutDetailQueryVariables>;
export const RelationTaskAcquireMaterialCommoditiesDocument = gql`
    query relationTaskAcquireMaterialCommodities($relationTaskAcquireMaterialCommoditiesInput: RelationTaskAcquireMaterialCommoditiesInput) {
  relationTaskAcquireMaterialCommodities(
    relationTaskAcquireMaterialCommoditiesInput: $relationTaskAcquireMaterialCommoditiesInput
  ) {
    commoditySkuInfos {
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
    }
  }
}
    `;

/**
 * __useRelationTaskAcquireMaterialCommoditiesQuery__
 *
 * To run a query within a React component, call `useRelationTaskAcquireMaterialCommoditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelationTaskAcquireMaterialCommoditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelationTaskAcquireMaterialCommoditiesQuery({
 *   variables: {
 *      relationTaskAcquireMaterialCommoditiesInput: // value for 'relationTaskAcquireMaterialCommoditiesInput'
 *   },
 * });
 */
export function useRelationTaskAcquireMaterialCommoditiesQuery(baseOptions?: Apollo.QueryHookOptions<RelationTaskAcquireMaterialCommoditiesQuery, RelationTaskAcquireMaterialCommoditiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RelationTaskAcquireMaterialCommoditiesQuery, RelationTaskAcquireMaterialCommoditiesQueryVariables>(RelationTaskAcquireMaterialCommoditiesDocument, options);
      }
export function useRelationTaskAcquireMaterialCommoditiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RelationTaskAcquireMaterialCommoditiesQuery, RelationTaskAcquireMaterialCommoditiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RelationTaskAcquireMaterialCommoditiesQuery, RelationTaskAcquireMaterialCommoditiesQueryVariables>(RelationTaskAcquireMaterialCommoditiesDocument, options);
        }
export type RelationTaskAcquireMaterialCommoditiesQueryHookResult = ReturnType<typeof useRelationTaskAcquireMaterialCommoditiesQuery>;
export type RelationTaskAcquireMaterialCommoditiesLazyQueryHookResult = ReturnType<typeof useRelationTaskAcquireMaterialCommoditiesLazyQuery>;
export type RelationTaskAcquireMaterialCommoditiesQueryResult = Apollo.QueryResult<RelationTaskAcquireMaterialCommoditiesQuery, RelationTaskAcquireMaterialCommoditiesQueryVariables>;
export const TaskCommodityTypeStockDetailDocument = gql`
    query taskCommodityTypeStockDetail($taskCommodityTypeStockDetailInput: TaskCommodityTypeStockDetailInput) {
  taskCommodityTypeStockDetail(
    taskCommodityTypeStockDetailInput: $taskCommodityTypeStockDetailInput
  ) {
    semiProduct
    returnedGoodsProduct
  }
}
    `;

/**
 * __useTaskCommodityTypeStockDetailQuery__
 *
 * To run a query within a React component, call `useTaskCommodityTypeStockDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskCommodityTypeStockDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskCommodityTypeStockDetailQuery({
 *   variables: {
 *      taskCommodityTypeStockDetailInput: // value for 'taskCommodityTypeStockDetailInput'
 *   },
 * });
 */
export function useTaskCommodityTypeStockDetailQuery(baseOptions?: Apollo.QueryHookOptions<TaskCommodityTypeStockDetailQuery, TaskCommodityTypeStockDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskCommodityTypeStockDetailQuery, TaskCommodityTypeStockDetailQueryVariables>(TaskCommodityTypeStockDetailDocument, options);
      }
export function useTaskCommodityTypeStockDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskCommodityTypeStockDetailQuery, TaskCommodityTypeStockDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskCommodityTypeStockDetailQuery, TaskCommodityTypeStockDetailQueryVariables>(TaskCommodityTypeStockDetailDocument, options);
        }
export type TaskCommodityTypeStockDetailQueryHookResult = ReturnType<typeof useTaskCommodityTypeStockDetailQuery>;
export type TaskCommodityTypeStockDetailLazyQueryHookResult = ReturnType<typeof useTaskCommodityTypeStockDetailLazyQuery>;
export type TaskCommodityTypeStockDetailQueryResult = Apollo.QueryResult<TaskCommodityTypeStockDetailQuery, TaskCommodityTypeStockDetailQueryVariables>;