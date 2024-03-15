import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateDefectiveSaleOrderMutationVariables = SchemaTypes.Exact<{
  createDefectiveSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateDefectiveSaleOrderInput>;
}>;


export type CreateDefectiveSaleOrderMutation = { createDefectiveSaleOrder?: string };

export type PageDefectiveSaleOrderQueryVariables = SchemaTypes.Exact<{
  pageDefectiveSaleOrder?: SchemaTypes.InputMaybe<SchemaTypes.PageDefectiveSaleOrderInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageDefectiveSaleOrderQuery = { pageDefectiveSaleOrder?: { __typename?: 'OutOrderPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'OutOrderPayload', outOrderId?: string, outOrderType?: number, outOrderTypeName?: string, outOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerType?: number, customerTypeName?: string, transferId?: string, transferType?: number, transferOrganizationId?: number, transferOrganizationName?: string, userId?: number, createUserPhone?: string, customerId?: number, customerName?: string, saleTime?: number, outOrderStatus?: number, outOrderStatusName?: string, warehouseId?: string, warehouseName?: string, createUserName?: string, createTime?: number, outOrderDescription?: string, errorDescription?: string, totalPrice?: number, taskCode?: string, inOrderId?: string, inOrderCode?: string, supplierId?: number, supplierName?: string, customerDistributionId?: number, customerDistributionName?: string, deliveryFee?: number, organizationId?: number, organizationName?: string, payMethod?: SchemaTypes.OutOrderPayModeEnum, payMethodDesc?: string, commodityList?: Array<{ __typename?: 'OutOrderItemPayload', outOrderItemId?: string, outOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, salePrice?: number, salePriceType?: number, salePriceTypeName?: string, maxQuantity?: number, planQuantity?: number, basketQuantity?: number, basketCustomerId?: number, basketCustomerName?: string, createTime?: number, createBy?: number, updateTime?: number, deleted?: number, updateBy?: number, waitUnitQuantity?: number, waitTotalQuantity?: number, completeOutStock?: number, commodityBomId?: number, unitTotalPrice?: number, damageReason?: string, batchId?: string, batchCode?: string, stockUnitPrice?: number, stockUnitPriceType?: number, stockUnitPriceTypeName?: string, stockTotalPrice?: number, belongCustomerName?: string, photos?: Array<string>, realQuantity?: number, saleTotalPrice?: number, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, conversion?: number, outStockFinishUnitQuantity?: number, outStockFinishTotalQuantity?: number, belongCustomerId?: number, pickingUnitQuantity?: number, pickingTotalQuantity?: number, commodityStatus?: SchemaTypes.CommodityStatus }>, saleOrderInfo?: { __typename?: 'SaleOrderInfoPayload', outOrderId?: string, saleOrderId?: string, saleOrderCode?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type UpdateDefectiveSaleOrderMutationVariables = SchemaTypes.Exact<{
  updateDefectiveSaleOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateDefectiveSaleOrderInput>;
}>;


export type UpdateDefectiveSaleOrderMutation = { updateDefectiveSaleOrder?: string };

export type DefectiveSaleOrderQueryVariables = SchemaTypes.Exact<{
  outOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.OutOrderInput>;
}>;


export type DefectiveSaleOrderQuery = { outOrder?: { __typename?: 'OutOrderPayload', outOrderId?: string, outOrderType?: number, outOrderTypeName?: string, outOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerType?: number, customerTypeName?: string, transferId?: string, transferType?: number, transferOrganizationId?: number, transferOrganizationName?: string, userId?: number, createUserPhone?: string, customerId?: number, customerName?: string, saleTime?: number, outOrderStatus?: number, outOrderStatusName?: string, warehouseId?: string, warehouseName?: string, createUserName?: string, createTime?: number, outOrderDescription?: string, errorDescription?: string, totalPrice?: number, taskCode?: string, inOrderId?: string, inOrderCode?: string, supplierId?: number, supplierName?: string, customerDistributionId?: number, customerDistributionName?: string, deliveryFee?: number, organizationId?: number, organizationName?: string, payMethod?: SchemaTypes.OutOrderPayModeEnum, payMethodDesc?: string, commodityList?: Array<{ __typename?: 'OutOrderItemPayload', outOrderItemId?: string, outOrderId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, salePrice?: number, salePriceType?: number, salePriceTypeName?: string, maxQuantity?: number, planQuantity?: number, basketQuantity?: number, basketCustomerId?: number, basketCustomerName?: string, createTime?: number, createBy?: number, updateTime?: number, deleted?: number, updateBy?: number, waitUnitQuantity?: number, waitTotalQuantity?: number, completeOutStock?: number, commodityBomId?: number, unitTotalPrice?: number, damageReason?: string, batchId?: string, batchCode?: string, stockUnitPrice?: number, stockUnitPriceType?: number, stockUnitPriceTypeName?: string, stockTotalPrice?: number, belongCustomerName?: string, photos?: Array<string>, realQuantity?: number, saleTotalPrice?: number, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number, conversion?: number, outStockFinishUnitQuantity?: number, outStockFinishTotalQuantity?: number, belongCustomerId?: number, pickingUnitQuantity?: number, pickingTotalQuantity?: number, commodityStatus?: SchemaTypes.CommodityStatus, unitStockQuantity?: number, saleOrderInfo?: { __typename?: 'SaleOrderInfoPayload', outOrderId?: string, saleOrderId?: string, saleOrderCode?: string }, stockQuantity?: { __typename?: 'StockQuantity', unitQuantity?: number, totalQuantity?: number } }>, saleOrderInfo?: { __typename?: 'SaleOrderInfoPayload', outOrderId?: string, saleOrderId?: string, saleOrderCode?: string }, saleIncomeOrder?: { __typename?: 'SaleIncomeOrderPayload', incomeId?: string, incomeStatus?: SchemaTypes.IncomeStatus, incomeStatusName?: string, incomeCode?: string, sourceId?: string, sourceType?: SchemaTypes.SaleIncomeSourceType, sourceTypeName?: string, remark?: string, rejectReason?: string, createTime?: number, saleCostOrderId?: string, totalAmount?: number, commodityTypeName?: string, payMode?: SchemaTypes.OutOrderPayModeEnum, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commoditiesList?: Array<{ __typename?: 'SaleIncomeOrderItemPayload', incomeItemId?: string, incomeId?: string, commodityName?: string, unitQuantity?: number, saleMoney?: number, photosList?: Array<string>, outOrderItemId?: string, salePrice?: number, remark?: string, totalQuantity?: number, batchId?: number, batchCode?: string, totalSalePrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, saleCostOrderItems?: Array<{ __typename?: 'SaleCostOrderItemPayload', saleCostOrderItemId?: string, saleCostOrderId?: string, outOrderItemId?: string, packagingFee?: number, materialFee?: number, commodity?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, logs?: Array<{ __typename?: 'SaleIncomeOrderLogPayload', incomeLogId?: string, incomeId?: string, type?: SchemaTypes.SaleIncomeLogType, typeText?: string, remark?: string, createTime?: number, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }>, functionalField?: { __typename?: 'FunctionalField', saleTotalPrice?: number, saleTotalCost?: number }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type DefectiveCountOutOrderStatusQueryVariables = SchemaTypes.Exact<{
  countOutOrderStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.CountOutOrderStatusInput>;
}>;


export type DefectiveCountOutOrderStatusQuery = { countOutOrderStatus?: { __typename?: 'OutOrderStatusCountPayload', toSubmit?: number, toAudit?: number, producing?: number, toOutbound?: number, finished?: number, rejected?: number } };


export const CreateDefectiveSaleOrderDocument = gql`
    mutation createDefectiveSaleOrder($createDefectiveSaleOrderInput: CreateDefectiveSaleOrderInput) {
  createDefectiveSaleOrder(
    createDefectiveSaleOrderInput: $createDefectiveSaleOrderInput
  )
}
    `;
export type CreateDefectiveSaleOrderMutationFn = Apollo.MutationFunction<CreateDefectiveSaleOrderMutation, CreateDefectiveSaleOrderMutationVariables>;

/**
 * __useCreateDefectiveSaleOrderMutation__
 *
 * To run a mutation, you first call `useCreateDefectiveSaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDefectiveSaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDefectiveSaleOrderMutation, { data, loading, error }] = useCreateDefectiveSaleOrderMutation({
 *   variables: {
 *      createDefectiveSaleOrderInput: // value for 'createDefectiveSaleOrderInput'
 *   },
 * });
 */
export function useCreateDefectiveSaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateDefectiveSaleOrderMutation, CreateDefectiveSaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDefectiveSaleOrderMutation, CreateDefectiveSaleOrderMutationVariables>(CreateDefectiveSaleOrderDocument, options);
      }
export type CreateDefectiveSaleOrderMutationHookResult = ReturnType<typeof useCreateDefectiveSaleOrderMutation>;
export type CreateDefectiveSaleOrderMutationResult = Apollo.MutationResult<CreateDefectiveSaleOrderMutation>;
export type CreateDefectiveSaleOrderMutationOptions = Apollo.BaseMutationOptions<CreateDefectiveSaleOrderMutation, CreateDefectiveSaleOrderMutationVariables>;
export const PageDefectiveSaleOrderDocument = gql`
    query pageDefectiveSaleOrder($pageDefectiveSaleOrder: PageDefectiveSaleOrderInput, $page: Page) {
  pageDefectiveSaleOrder(
    pageDefectiveSaleOrder: $pageDefectiveSaleOrder
    page: $page
  ) {
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
      }
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
      belongOrg {
        orgId
        orgName
      }
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageDefectiveSaleOrderQuery__
 *
 * To run a query within a React component, call `usePageDefectiveSaleOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDefectiveSaleOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageDefectiveSaleOrderQuery({
 *   variables: {
 *      pageDefectiveSaleOrder: // value for 'pageDefectiveSaleOrder'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageDefectiveSaleOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageDefectiveSaleOrderQuery, PageDefectiveSaleOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageDefectiveSaleOrderQuery, PageDefectiveSaleOrderQueryVariables>(PageDefectiveSaleOrderDocument, options);
      }
export function usePageDefectiveSaleOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageDefectiveSaleOrderQuery, PageDefectiveSaleOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageDefectiveSaleOrderQuery, PageDefectiveSaleOrderQueryVariables>(PageDefectiveSaleOrderDocument, options);
        }
export type PageDefectiveSaleOrderQueryHookResult = ReturnType<typeof usePageDefectiveSaleOrderQuery>;
export type PageDefectiveSaleOrderLazyQueryHookResult = ReturnType<typeof usePageDefectiveSaleOrderLazyQuery>;
export type PageDefectiveSaleOrderQueryResult = Apollo.QueryResult<PageDefectiveSaleOrderQuery, PageDefectiveSaleOrderQueryVariables>;
export const UpdateDefectiveSaleOrderDocument = gql`
    mutation updateDefectiveSaleOrder($updateDefectiveSaleOrderInput: UpdateDefectiveSaleOrderInput) {
  updateDefectiveSaleOrder(
    updateDefectiveSaleOrderInput: $updateDefectiveSaleOrderInput
  )
}
    `;
export type UpdateDefectiveSaleOrderMutationFn = Apollo.MutationFunction<UpdateDefectiveSaleOrderMutation, UpdateDefectiveSaleOrderMutationVariables>;

/**
 * __useUpdateDefectiveSaleOrderMutation__
 *
 * To run a mutation, you first call `useUpdateDefectiveSaleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDefectiveSaleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDefectiveSaleOrderMutation, { data, loading, error }] = useUpdateDefectiveSaleOrderMutation({
 *   variables: {
 *      updateDefectiveSaleOrderInput: // value for 'updateDefectiveSaleOrderInput'
 *   },
 * });
 */
export function useUpdateDefectiveSaleOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDefectiveSaleOrderMutation, UpdateDefectiveSaleOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDefectiveSaleOrderMutation, UpdateDefectiveSaleOrderMutationVariables>(UpdateDefectiveSaleOrderDocument, options);
      }
export type UpdateDefectiveSaleOrderMutationHookResult = ReturnType<typeof useUpdateDefectiveSaleOrderMutation>;
export type UpdateDefectiveSaleOrderMutationResult = Apollo.MutationResult<UpdateDefectiveSaleOrderMutation>;
export type UpdateDefectiveSaleOrderMutationOptions = Apollo.BaseMutationOptions<UpdateDefectiveSaleOrderMutation, UpdateDefectiveSaleOrderMutationVariables>;
export const DefectiveSaleOrderDocument = gql`
    query defectiveSaleOrder($outOrderInput: OutOrderInput) {
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
    }
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
    }
    belongOrg {
      orgId
      orgName
    }
  }
}
    `;

/**
 * __useDefectiveSaleOrderQuery__
 *
 * To run a query within a React component, call `useDefectiveSaleOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useDefectiveSaleOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDefectiveSaleOrderQuery({
 *   variables: {
 *      outOrderInput: // value for 'outOrderInput'
 *   },
 * });
 */
export function useDefectiveSaleOrderQuery(baseOptions?: Apollo.QueryHookOptions<DefectiveSaleOrderQuery, DefectiveSaleOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DefectiveSaleOrderQuery, DefectiveSaleOrderQueryVariables>(DefectiveSaleOrderDocument, options);
      }
export function useDefectiveSaleOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DefectiveSaleOrderQuery, DefectiveSaleOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DefectiveSaleOrderQuery, DefectiveSaleOrderQueryVariables>(DefectiveSaleOrderDocument, options);
        }
export type DefectiveSaleOrderQueryHookResult = ReturnType<typeof useDefectiveSaleOrderQuery>;
export type DefectiveSaleOrderLazyQueryHookResult = ReturnType<typeof useDefectiveSaleOrderLazyQuery>;
export type DefectiveSaleOrderQueryResult = Apollo.QueryResult<DefectiveSaleOrderQuery, DefectiveSaleOrderQueryVariables>;
export const DefectiveCountOutOrderStatusDocument = gql`
    query defectiveCountOutOrderStatus($countOutOrderStatusInput: CountOutOrderStatusInput) {
  countOutOrderStatus(countOutOrderStatusInput: $countOutOrderStatusInput) {
    toSubmit
    toAudit
    producing
    toOutbound
    finished
    rejected
  }
}
    `;

/**
 * __useDefectiveCountOutOrderStatusQuery__
 *
 * To run a query within a React component, call `useDefectiveCountOutOrderStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useDefectiveCountOutOrderStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDefectiveCountOutOrderStatusQuery({
 *   variables: {
 *      countOutOrderStatusInput: // value for 'countOutOrderStatusInput'
 *   },
 * });
 */
export function useDefectiveCountOutOrderStatusQuery(baseOptions?: Apollo.QueryHookOptions<DefectiveCountOutOrderStatusQuery, DefectiveCountOutOrderStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DefectiveCountOutOrderStatusQuery, DefectiveCountOutOrderStatusQueryVariables>(DefectiveCountOutOrderStatusDocument, options);
      }
export function useDefectiveCountOutOrderStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DefectiveCountOutOrderStatusQuery, DefectiveCountOutOrderStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DefectiveCountOutOrderStatusQuery, DefectiveCountOutOrderStatusQueryVariables>(DefectiveCountOutOrderStatusDocument, options);
        }
export type DefectiveCountOutOrderStatusQueryHookResult = ReturnType<typeof useDefectiveCountOutOrderStatusQuery>;
export type DefectiveCountOutOrderStatusLazyQueryHookResult = ReturnType<typeof useDefectiveCountOutOrderStatusLazyQuery>;
export type DefectiveCountOutOrderStatusQueryResult = Apollo.QueryResult<DefectiveCountOutOrderStatusQuery, DefectiveCountOutOrderStatusQueryVariables>;