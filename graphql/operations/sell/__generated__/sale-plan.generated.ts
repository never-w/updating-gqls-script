import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageSalePlanOrderQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageSalePlanOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.PageSalePlanOrderInput>;
}>;


export type PageSalePlanOrderQuery = { pageSalePlanOrder?: { __typename?: 'PageSalePlanOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'SalePlanOrderDetailPayload', belongType?: number, code?: string, createTime?: number, id?: string, remark?: string, salePlanOrderStatus?: SchemaTypes.SalePlanOrderStatusEnum, saleTime?: number, salePlanOrderStatusName?: string, distributionId?: number, distributionName?: string, customerId?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, salePlanOrderItems?: Array<{ __typename?: 'SalePlanOrderItemPayload', itemId?: string, price?: number, salePlanOrderId?: string, totalPrice?: number, commodityTypeId?: number, commodityTypeName?: string, applyMark?: SchemaTypes.ApplyMarkEnum, belongCustomerId?: number, belongCustomerType?: number, commodityId?: string, index?: string, quantity?: number, quantityLabel?: string, specificationLabel?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, packageRequireInfos?: Array<{ __typename?: 'OutOrderItemRequestPayload', commodityId?: number, requestText?: string }>, summaryStockItems?: Array<{ __typename?: 'SummaryStockItem', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }>, listBusinessCommonLogs?: Array<{ __typename?: 'BusinessCommonLog', businessId?: string, businessType?: SchemaTypes.PitayaBusinessTypeEnum, businessTypeName?: string, createTime?: number, id?: string, logType?: SchemaTypes.LogTypeEnum, logTypeName?: string, nextStatus?: number, preStatus?: number, remark?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }> }> } };

export type SalePlanOrderBadgeQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type SalePlanOrderBadgeQuery = { salePlanOrderBadge?: { __typename?: 'SalePlanOrderBadgePayload', canceled?: number, published?: number, toBePublished?: number } };

export type SalePlanOrderDetailQueryVariables = SchemaTypes.Exact<{
  salePlanOrderDetailInput?: SchemaTypes.InputMaybe<SchemaTypes.SalePlanOrderDetailInput>;
}>;


export type SalePlanOrderDetailQuery = { salePlanOrderDetail?: { __typename?: 'SalePlanOrderDetailPayload', belongType?: number, code?: string, createTime?: number, id?: string, remark?: string, salePlanOrderStatus?: SchemaTypes.SalePlanOrderStatusEnum, saleTime?: number, salePlanOrderStatusName?: string, distributionId?: number, distributionName?: string, customerId?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, salePlanOrderItems?: Array<{ __typename?: 'SalePlanOrderItemPayload', itemId?: string, price?: number, salePlanOrderId?: string, totalPrice?: number, commodityTypeId?: number, commodityTypeName?: string, index?: string, quantityLabel?: string, specificationLabel?: string, belongCustomerId?: number, belongCustomerType?: number, applyMark?: SchemaTypes.ApplyMarkEnum, commodityId?: string, quantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, packageRequireInfos?: Array<{ __typename?: 'OutOrderItemRequestPayload', commodityId?: number, requestText?: string }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, summaryStockItems?: Array<{ __typename?: 'SummaryStockItem', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }>, listBusinessCommonLogs?: Array<{ __typename?: 'BusinessCommonLog', businessId?: string, businessType?: SchemaTypes.PitayaBusinessTypeEnum, businessTypeName?: string, createTime?: number, id?: string, logType?: SchemaTypes.LogTypeEnum, logTypeName?: string, nextStatus?: number, preStatus?: number, remark?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }> } };

export type CreateSalePlanOrderMutationVariables = SchemaTypes.Exact<{
  createSalePlanOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateSalePlanOrderInput>;
}>;


export type CreateSalePlanOrderMutation = { createSalePlanOrder?: string };

export type UpdateSalePlanOrderMutationVariables = SchemaTypes.Exact<{
  updateSalePlanOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateSalePlanOrderInput>;
}>;


export type UpdateSalePlanOrderMutation = { updateSalePlanOrder?: boolean };

export type UpdateSalePlanOrderPriceMutationVariables = SchemaTypes.Exact<{
  updateSalePlanOrderPriceInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateSalePlanOrderPriceInut>;
}>;


export type UpdateSalePlanOrderPriceMutation = { updateSalePlanOrderPrice?: boolean };

export type UpdateSalePlanOrderQuantityMutationVariables = SchemaTypes.Exact<{
  updateSalePlanOrderQuantityInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateSalePlanOrderQuantityInput>;
}>;


export type UpdateSalePlanOrderQuantityMutation = { updateSalePlanOrderQuantity?: boolean };

export type UpdateSalePlanOrderStatMutationVariables = SchemaTypes.Exact<{
  updateSalePlanOrderStatInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateSalePlanOrderStatInput>;
}>;


export type UpdateSalePlanOrderStatMutation = { updateSalePlanOrderStat?: boolean };

export type ListSalePlanOrderSummaryStockQueryVariables = SchemaTypes.Exact<{
  listSalePlanOrderSummaryStockInput?: SchemaTypes.InputMaybe<SchemaTypes.ListSalePlanOrderSummaryStockInput>;
}>;


export type ListSalePlanOrderSummaryStockQuery = { listSalePlanOrderSummaryStock?: Array<{ __typename?: 'SalePlanOrderSummaryStockPayload', commodityTypeId?: number, commodityTypeName?: string, index?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, summaryStockItems?: Array<{ __typename?: 'SummaryStockItem', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> };

export type ListSalePlanCommoditySpuQueryVariables = SchemaTypes.Exact<{
  listSalePlanCommoditySPUInput?: SchemaTypes.InputMaybe<SchemaTypes.ListSalePlanCommoditySpuInput>;
}>;


export type ListSalePlanCommoditySpuQuery = { listSalePlanCommoditySPU?: Array<{ __typename?: 'ListSalePlanCommoditySPUPayload', categoryId?: number, commodityName?: string, commodityTypeId?: number, commodityId?: number }> };

export type ListSalePlanCommodityCategoryQueryVariables = SchemaTypes.Exact<{
  listSalePlanCommodityCategoryInput?: SchemaTypes.InputMaybe<SchemaTypes.ListSalePlanCommodityCategoryInput>;
}>;


export type ListSalePlanCommodityCategoryQuery = { listSalePlanCommodityCategory?: Array<{ __typename?: 'ListSalePlanCommodityCategoryPayload', categoryId?: number, categoryName?: string }> };

export type OneMoreSalePlanOrderMutationVariables = SchemaTypes.Exact<{
  oneMoreSalePlanOrderInput: SchemaTypes.OneMoreSalePlanOrderInput;
}>;


export type OneMoreSalePlanOrderMutation = { oneMoreSalePlanOrder?: { __typename?: 'OneMoreSalePlanPayload', saleOrderId?: string, outOfStockItems?: Array<{ __typename?: 'SalePlanOutOfStockItem', applyMark?: SchemaTypes.ApplyMarkEnum, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commodityType?: { __typename?: 'PitayaCommodityType', commodityTypeId?: number, commodityTypeName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> } };

export type UpdateSalePlanOrderGiveQuantityMutationVariables = SchemaTypes.Exact<{
  updateSalePlanOrderGiftQuantityInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateSalePlanOrderGiftQuantityInput>;
}>;


export type UpdateSalePlanOrderGiveQuantityMutation = { updateSalePlanOrderGiveQuantity?: boolean };


export const PageSalePlanOrderDocument = gql`
    query pageSalePlanOrder($page: Page, $pageSalePlanOrderInput: PageSalePlanOrderInput) {
  pageSalePlanOrder(page: $page, pageSalePlanOrderInput: $pageSalePlanOrderInput) {
    pageCurrent
    pageSize
    records {
      belongType
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
      code
      createTime
      id
      remark
      salePlanOrderItems {
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
        warehouse {
          warehouseId
          warehouseName
        }
        itemId
        price
        salePlanOrderId
        totalPrice
        commodityTypeId
        commodityTypeName
        unit {
          unitId
          unitName
        }
        applyMark
        belongCustomerId
        belongCustomerType
        commodityId
        index
        packageRequireInfos {
          commodityId
          requestText
        }
        quantity
        quantityLabel
        specificationLabel
        summaryStockItems {
          unit {
            unitId
            unitName
          }
          quantity
        }
      }
      salePlanOrderStatus
      saleTime
      salePlanOrderStatusName
      distributionId
      distributionName
      customerId
      listBusinessCommonLogs {
        createBy {
          phoneNum
          userId
          userName
        }
        businessId
        businessType
        businessTypeName
        createTime
        id
        logType
        logTypeName
        nextStatus
        preStatus
        remark
      }
    }
    totalRecords
  }
}
    `;

/**
 * __usePageSalePlanOrderQuery__
 *
 * To run a query within a React component, call `usePageSalePlanOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSalePlanOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSalePlanOrderQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSalePlanOrderInput: // value for 'pageSalePlanOrderInput'
 *   },
 * });
 */
export function usePageSalePlanOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageSalePlanOrderQuery, PageSalePlanOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageSalePlanOrderQuery, PageSalePlanOrderQueryVariables>(PageSalePlanOrderDocument, options);
      }
export function usePageSalePlanOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageSalePlanOrderQuery, PageSalePlanOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageSalePlanOrderQuery, PageSalePlanOrderQueryVariables>(PageSalePlanOrderDocument, options);
        }
export type PageSalePlanOrderQueryHookResult = ReturnType<typeof usePageSalePlanOrderQuery>;
export type PageSalePlanOrderLazyQueryHookResult = ReturnType<typeof usePageSalePlanOrderLazyQuery>;
export type PageSalePlanOrderQueryResult = Apollo.QueryResult<PageSalePlanOrderQuery, PageSalePlanOrderQueryVariables>;
export const SalePlanOrderBadgeDocument = gql`
    query salePlanOrderBadge {
  salePlanOrderBadge {
    canceled
    published
    toBePublished
  }
}
    `;

/**
 * __useSalePlanOrderBadgeQuery__
 *
 * To run a query within a React component, call `useSalePlanOrderBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSalePlanOrderBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSalePlanOrderBadgeQuery({
 *   variables: {
 *   },
 * });
 */
export function useSalePlanOrderBadgeQuery(baseOptions?: Apollo.QueryHookOptions<SalePlanOrderBadgeQuery, SalePlanOrderBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SalePlanOrderBadgeQuery, SalePlanOrderBadgeQueryVariables>(SalePlanOrderBadgeDocument, options);
      }
export function useSalePlanOrderBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SalePlanOrderBadgeQuery, SalePlanOrderBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SalePlanOrderBadgeQuery, SalePlanOrderBadgeQueryVariables>(SalePlanOrderBadgeDocument, options);
        }
export type SalePlanOrderBadgeQueryHookResult = ReturnType<typeof useSalePlanOrderBadgeQuery>;
export type SalePlanOrderBadgeLazyQueryHookResult = ReturnType<typeof useSalePlanOrderBadgeLazyQuery>;
export type SalePlanOrderBadgeQueryResult = Apollo.QueryResult<SalePlanOrderBadgeQuery, SalePlanOrderBadgeQueryVariables>;
export const SalePlanOrderDetailDocument = gql`
    query salePlanOrderDetail($salePlanOrderDetailInput: SalePlanOrderDetailInput) {
  salePlanOrderDetail(salePlanOrderDetailInput: $salePlanOrderDetailInput) {
    belongType
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
    code
    createTime
    id
    remark
    salePlanOrderItems {
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
      warehouse {
        warehouseId
        warehouseName
      }
      itemId
      price
      salePlanOrderId
      totalPrice
      commodityTypeId
      commodityTypeName
      index
      packageRequireInfos {
        commodityId
        requestText
      }
      quantityLabel
      specificationLabel
      belongCustomerId
      belongCustomerType
      applyMark
      commodityId
      unit {
        unitId
        unitName
      }
      quantity
      summaryStockItems {
        unit {
          unitId
          unitName
        }
        quantity
      }
    }
    salePlanOrderStatus
    saleTime
    salePlanOrderStatusName
    distributionId
    distributionName
    customerId
    listBusinessCommonLogs {
      createBy {
        phoneNum
        userId
        userName
      }
      businessId
      businessType
      businessTypeName
      createTime
      id
      logType
      logTypeName
      nextStatus
      preStatus
      remark
    }
  }
}
    `;

/**
 * __useSalePlanOrderDetailQuery__
 *
 * To run a query within a React component, call `useSalePlanOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSalePlanOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSalePlanOrderDetailQuery({
 *   variables: {
 *      salePlanOrderDetailInput: // value for 'salePlanOrderDetailInput'
 *   },
 * });
 */
export function useSalePlanOrderDetailQuery(baseOptions?: Apollo.QueryHookOptions<SalePlanOrderDetailQuery, SalePlanOrderDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SalePlanOrderDetailQuery, SalePlanOrderDetailQueryVariables>(SalePlanOrderDetailDocument, options);
      }
export function useSalePlanOrderDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SalePlanOrderDetailQuery, SalePlanOrderDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SalePlanOrderDetailQuery, SalePlanOrderDetailQueryVariables>(SalePlanOrderDetailDocument, options);
        }
export type SalePlanOrderDetailQueryHookResult = ReturnType<typeof useSalePlanOrderDetailQuery>;
export type SalePlanOrderDetailLazyQueryHookResult = ReturnType<typeof useSalePlanOrderDetailLazyQuery>;
export type SalePlanOrderDetailQueryResult = Apollo.QueryResult<SalePlanOrderDetailQuery, SalePlanOrderDetailQueryVariables>;
export const CreateSalePlanOrderDocument = gql`
    mutation createSalePlanOrder($createSalePlanOrderInput: CreateSalePlanOrderInput) {
  createSalePlanOrder(createSalePlanOrderInput: $createSalePlanOrderInput)
}
    `;
export type CreateSalePlanOrderMutationFn = Apollo.MutationFunction<CreateSalePlanOrderMutation, CreateSalePlanOrderMutationVariables>;

/**
 * __useCreateSalePlanOrderMutation__
 *
 * To run a mutation, you first call `useCreateSalePlanOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSalePlanOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSalePlanOrderMutation, { data, loading, error }] = useCreateSalePlanOrderMutation({
 *   variables: {
 *      createSalePlanOrderInput: // value for 'createSalePlanOrderInput'
 *   },
 * });
 */
export function useCreateSalePlanOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateSalePlanOrderMutation, CreateSalePlanOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSalePlanOrderMutation, CreateSalePlanOrderMutationVariables>(CreateSalePlanOrderDocument, options);
      }
export type CreateSalePlanOrderMutationHookResult = ReturnType<typeof useCreateSalePlanOrderMutation>;
export type CreateSalePlanOrderMutationResult = Apollo.MutationResult<CreateSalePlanOrderMutation>;
export type CreateSalePlanOrderMutationOptions = Apollo.BaseMutationOptions<CreateSalePlanOrderMutation, CreateSalePlanOrderMutationVariables>;
export const UpdateSalePlanOrderDocument = gql`
    mutation updateSalePlanOrder($updateSalePlanOrderInput: UpdateSalePlanOrderInput) {
  updateSalePlanOrder(updateSalePlanOrderInput: $updateSalePlanOrderInput)
}
    `;
export type UpdateSalePlanOrderMutationFn = Apollo.MutationFunction<UpdateSalePlanOrderMutation, UpdateSalePlanOrderMutationVariables>;

/**
 * __useUpdateSalePlanOrderMutation__
 *
 * To run a mutation, you first call `useUpdateSalePlanOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSalePlanOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSalePlanOrderMutation, { data, loading, error }] = useUpdateSalePlanOrderMutation({
 *   variables: {
 *      updateSalePlanOrderInput: // value for 'updateSalePlanOrderInput'
 *   },
 * });
 */
export function useUpdateSalePlanOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSalePlanOrderMutation, UpdateSalePlanOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSalePlanOrderMutation, UpdateSalePlanOrderMutationVariables>(UpdateSalePlanOrderDocument, options);
      }
export type UpdateSalePlanOrderMutationHookResult = ReturnType<typeof useUpdateSalePlanOrderMutation>;
export type UpdateSalePlanOrderMutationResult = Apollo.MutationResult<UpdateSalePlanOrderMutation>;
export type UpdateSalePlanOrderMutationOptions = Apollo.BaseMutationOptions<UpdateSalePlanOrderMutation, UpdateSalePlanOrderMutationVariables>;
export const UpdateSalePlanOrderPriceDocument = gql`
    mutation updateSalePlanOrderPrice($updateSalePlanOrderPriceInput: UpdateSalePlanOrderPriceInut) {
  updateSalePlanOrderPrice(
    updateSalePlanOrderPriceInput: $updateSalePlanOrderPriceInput
  )
}
    `;
export type UpdateSalePlanOrderPriceMutationFn = Apollo.MutationFunction<UpdateSalePlanOrderPriceMutation, UpdateSalePlanOrderPriceMutationVariables>;

/**
 * __useUpdateSalePlanOrderPriceMutation__
 *
 * To run a mutation, you first call `useUpdateSalePlanOrderPriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSalePlanOrderPriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSalePlanOrderPriceMutation, { data, loading, error }] = useUpdateSalePlanOrderPriceMutation({
 *   variables: {
 *      updateSalePlanOrderPriceInput: // value for 'updateSalePlanOrderPriceInput'
 *   },
 * });
 */
export function useUpdateSalePlanOrderPriceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSalePlanOrderPriceMutation, UpdateSalePlanOrderPriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSalePlanOrderPriceMutation, UpdateSalePlanOrderPriceMutationVariables>(UpdateSalePlanOrderPriceDocument, options);
      }
export type UpdateSalePlanOrderPriceMutationHookResult = ReturnType<typeof useUpdateSalePlanOrderPriceMutation>;
export type UpdateSalePlanOrderPriceMutationResult = Apollo.MutationResult<UpdateSalePlanOrderPriceMutation>;
export type UpdateSalePlanOrderPriceMutationOptions = Apollo.BaseMutationOptions<UpdateSalePlanOrderPriceMutation, UpdateSalePlanOrderPriceMutationVariables>;
export const UpdateSalePlanOrderQuantityDocument = gql`
    mutation updateSalePlanOrderQuantity($updateSalePlanOrderQuantityInput: UpdateSalePlanOrderQuantityInput) {
  updateSalePlanOrderQuantity(
    updateSalePlanOrderQuantityInput: $updateSalePlanOrderQuantityInput
  )
}
    `;
export type UpdateSalePlanOrderQuantityMutationFn = Apollo.MutationFunction<UpdateSalePlanOrderQuantityMutation, UpdateSalePlanOrderQuantityMutationVariables>;

/**
 * __useUpdateSalePlanOrderQuantityMutation__
 *
 * To run a mutation, you first call `useUpdateSalePlanOrderQuantityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSalePlanOrderQuantityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSalePlanOrderQuantityMutation, { data, loading, error }] = useUpdateSalePlanOrderQuantityMutation({
 *   variables: {
 *      updateSalePlanOrderQuantityInput: // value for 'updateSalePlanOrderQuantityInput'
 *   },
 * });
 */
export function useUpdateSalePlanOrderQuantityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSalePlanOrderQuantityMutation, UpdateSalePlanOrderQuantityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSalePlanOrderQuantityMutation, UpdateSalePlanOrderQuantityMutationVariables>(UpdateSalePlanOrderQuantityDocument, options);
      }
export type UpdateSalePlanOrderQuantityMutationHookResult = ReturnType<typeof useUpdateSalePlanOrderQuantityMutation>;
export type UpdateSalePlanOrderQuantityMutationResult = Apollo.MutationResult<UpdateSalePlanOrderQuantityMutation>;
export type UpdateSalePlanOrderQuantityMutationOptions = Apollo.BaseMutationOptions<UpdateSalePlanOrderQuantityMutation, UpdateSalePlanOrderQuantityMutationVariables>;
export const UpdateSalePlanOrderStatDocument = gql`
    mutation updateSalePlanOrderStat($updateSalePlanOrderStatInput: UpdateSalePlanOrderStatInput) {
  updateSalePlanOrderStat(
    updateSalePlanOrderStatInput: $updateSalePlanOrderStatInput
  )
}
    `;
export type UpdateSalePlanOrderStatMutationFn = Apollo.MutationFunction<UpdateSalePlanOrderStatMutation, UpdateSalePlanOrderStatMutationVariables>;

/**
 * __useUpdateSalePlanOrderStatMutation__
 *
 * To run a mutation, you first call `useUpdateSalePlanOrderStatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSalePlanOrderStatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSalePlanOrderStatMutation, { data, loading, error }] = useUpdateSalePlanOrderStatMutation({
 *   variables: {
 *      updateSalePlanOrderStatInput: // value for 'updateSalePlanOrderStatInput'
 *   },
 * });
 */
export function useUpdateSalePlanOrderStatMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSalePlanOrderStatMutation, UpdateSalePlanOrderStatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSalePlanOrderStatMutation, UpdateSalePlanOrderStatMutationVariables>(UpdateSalePlanOrderStatDocument, options);
      }
export type UpdateSalePlanOrderStatMutationHookResult = ReturnType<typeof useUpdateSalePlanOrderStatMutation>;
export type UpdateSalePlanOrderStatMutationResult = Apollo.MutationResult<UpdateSalePlanOrderStatMutation>;
export type UpdateSalePlanOrderStatMutationOptions = Apollo.BaseMutationOptions<UpdateSalePlanOrderStatMutation, UpdateSalePlanOrderStatMutationVariables>;
export const ListSalePlanOrderSummaryStockDocument = gql`
    query listSalePlanOrderSummaryStock($listSalePlanOrderSummaryStockInput: ListSalePlanOrderSummaryStockInput) {
  listSalePlanOrderSummaryStock(
    listSalePlanOrderSummaryStockInput: $listSalePlanOrderSummaryStockInput
  ) {
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
    customer {
      customerId
      customerName
      customerType
      lastLevelId
      lastLevelName
    }
    commodityTypeId
    commodityTypeName
    warehouse {
      warehouseId
      warehouseName
    }
    index
    summaryStockItems {
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
 * __useListSalePlanOrderSummaryStockQuery__
 *
 * To run a query within a React component, call `useListSalePlanOrderSummaryStockQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSalePlanOrderSummaryStockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSalePlanOrderSummaryStockQuery({
 *   variables: {
 *      listSalePlanOrderSummaryStockInput: // value for 'listSalePlanOrderSummaryStockInput'
 *   },
 * });
 */
export function useListSalePlanOrderSummaryStockQuery(baseOptions?: Apollo.QueryHookOptions<ListSalePlanOrderSummaryStockQuery, ListSalePlanOrderSummaryStockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSalePlanOrderSummaryStockQuery, ListSalePlanOrderSummaryStockQueryVariables>(ListSalePlanOrderSummaryStockDocument, options);
      }
export function useListSalePlanOrderSummaryStockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSalePlanOrderSummaryStockQuery, ListSalePlanOrderSummaryStockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSalePlanOrderSummaryStockQuery, ListSalePlanOrderSummaryStockQueryVariables>(ListSalePlanOrderSummaryStockDocument, options);
        }
export type ListSalePlanOrderSummaryStockQueryHookResult = ReturnType<typeof useListSalePlanOrderSummaryStockQuery>;
export type ListSalePlanOrderSummaryStockLazyQueryHookResult = ReturnType<typeof useListSalePlanOrderSummaryStockLazyQuery>;
export type ListSalePlanOrderSummaryStockQueryResult = Apollo.QueryResult<ListSalePlanOrderSummaryStockQuery, ListSalePlanOrderSummaryStockQueryVariables>;
export const ListSalePlanCommoditySpuDocument = gql`
    query listSalePlanCommoditySPU($listSalePlanCommoditySPUInput: ListSalePlanCommoditySPUInput) {
  listSalePlanCommoditySPU(
    listSalePlanCommoditySPUInput: $listSalePlanCommoditySPUInput
  ) {
    categoryId
    commodityName
    commodityTypeId
    commodityId
  }
}
    `;

/**
 * __useListSalePlanCommoditySpuQuery__
 *
 * To run a query within a React component, call `useListSalePlanCommoditySpuQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSalePlanCommoditySpuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSalePlanCommoditySpuQuery({
 *   variables: {
 *      listSalePlanCommoditySPUInput: // value for 'listSalePlanCommoditySPUInput'
 *   },
 * });
 */
export function useListSalePlanCommoditySpuQuery(baseOptions?: Apollo.QueryHookOptions<ListSalePlanCommoditySpuQuery, ListSalePlanCommoditySpuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSalePlanCommoditySpuQuery, ListSalePlanCommoditySpuQueryVariables>(ListSalePlanCommoditySpuDocument, options);
      }
export function useListSalePlanCommoditySpuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSalePlanCommoditySpuQuery, ListSalePlanCommoditySpuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSalePlanCommoditySpuQuery, ListSalePlanCommoditySpuQueryVariables>(ListSalePlanCommoditySpuDocument, options);
        }
export type ListSalePlanCommoditySpuQueryHookResult = ReturnType<typeof useListSalePlanCommoditySpuQuery>;
export type ListSalePlanCommoditySpuLazyQueryHookResult = ReturnType<typeof useListSalePlanCommoditySpuLazyQuery>;
export type ListSalePlanCommoditySpuQueryResult = Apollo.QueryResult<ListSalePlanCommoditySpuQuery, ListSalePlanCommoditySpuQueryVariables>;
export const ListSalePlanCommodityCategoryDocument = gql`
    query listSalePlanCommodityCategory($listSalePlanCommodityCategoryInput: ListSalePlanCommodityCategoryInput) {
  listSalePlanCommodityCategory(
    listSalePlanCommodityCategoryInput: $listSalePlanCommodityCategoryInput
  ) {
    categoryId
    categoryName
  }
}
    `;

/**
 * __useListSalePlanCommodityCategoryQuery__
 *
 * To run a query within a React component, call `useListSalePlanCommodityCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSalePlanCommodityCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSalePlanCommodityCategoryQuery({
 *   variables: {
 *      listSalePlanCommodityCategoryInput: // value for 'listSalePlanCommodityCategoryInput'
 *   },
 * });
 */
export function useListSalePlanCommodityCategoryQuery(baseOptions?: Apollo.QueryHookOptions<ListSalePlanCommodityCategoryQuery, ListSalePlanCommodityCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSalePlanCommodityCategoryQuery, ListSalePlanCommodityCategoryQueryVariables>(ListSalePlanCommodityCategoryDocument, options);
      }
export function useListSalePlanCommodityCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSalePlanCommodityCategoryQuery, ListSalePlanCommodityCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSalePlanCommodityCategoryQuery, ListSalePlanCommodityCategoryQueryVariables>(ListSalePlanCommodityCategoryDocument, options);
        }
export type ListSalePlanCommodityCategoryQueryHookResult = ReturnType<typeof useListSalePlanCommodityCategoryQuery>;
export type ListSalePlanCommodityCategoryLazyQueryHookResult = ReturnType<typeof useListSalePlanCommodityCategoryLazyQuery>;
export type ListSalePlanCommodityCategoryQueryResult = Apollo.QueryResult<ListSalePlanCommodityCategoryQuery, ListSalePlanCommodityCategoryQueryVariables>;
export const OneMoreSalePlanOrderDocument = gql`
    mutation oneMoreSalePlanOrder($oneMoreSalePlanOrderInput: OneMoreSalePlanOrderInput!) {
  oneMoreSalePlanOrder(oneMoreSalePlanOrderInput: $oneMoreSalePlanOrderInput) {
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
      commodityType {
        commodityTypeId
        commodityTypeName
      }
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
      applyMark
    }
    saleOrderId
  }
}
    `;
export type OneMoreSalePlanOrderMutationFn = Apollo.MutationFunction<OneMoreSalePlanOrderMutation, OneMoreSalePlanOrderMutationVariables>;

/**
 * __useOneMoreSalePlanOrderMutation__
 *
 * To run a mutation, you first call `useOneMoreSalePlanOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOneMoreSalePlanOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [oneMoreSalePlanOrderMutation, { data, loading, error }] = useOneMoreSalePlanOrderMutation({
 *   variables: {
 *      oneMoreSalePlanOrderInput: // value for 'oneMoreSalePlanOrderInput'
 *   },
 * });
 */
export function useOneMoreSalePlanOrderMutation(baseOptions?: Apollo.MutationHookOptions<OneMoreSalePlanOrderMutation, OneMoreSalePlanOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OneMoreSalePlanOrderMutation, OneMoreSalePlanOrderMutationVariables>(OneMoreSalePlanOrderDocument, options);
      }
export type OneMoreSalePlanOrderMutationHookResult = ReturnType<typeof useOneMoreSalePlanOrderMutation>;
export type OneMoreSalePlanOrderMutationResult = Apollo.MutationResult<OneMoreSalePlanOrderMutation>;
export type OneMoreSalePlanOrderMutationOptions = Apollo.BaseMutationOptions<OneMoreSalePlanOrderMutation, OneMoreSalePlanOrderMutationVariables>;
export const UpdateSalePlanOrderGiveQuantityDocument = gql`
    mutation updateSalePlanOrderGiveQuantity($updateSalePlanOrderGiftQuantityInput: UpdateSalePlanOrderGiftQuantityInput) {
  updateSalePlanOrderGiveQuantity(
    updateSalePlanOrderGiftQuantityInput: $updateSalePlanOrderGiftQuantityInput
  )
}
    `;
export type UpdateSalePlanOrderGiveQuantityMutationFn = Apollo.MutationFunction<UpdateSalePlanOrderGiveQuantityMutation, UpdateSalePlanOrderGiveQuantityMutationVariables>;

/**
 * __useUpdateSalePlanOrderGiveQuantityMutation__
 *
 * To run a mutation, you first call `useUpdateSalePlanOrderGiveQuantityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSalePlanOrderGiveQuantityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSalePlanOrderGiveQuantityMutation, { data, loading, error }] = useUpdateSalePlanOrderGiveQuantityMutation({
 *   variables: {
 *      updateSalePlanOrderGiftQuantityInput: // value for 'updateSalePlanOrderGiftQuantityInput'
 *   },
 * });
 */
export function useUpdateSalePlanOrderGiveQuantityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSalePlanOrderGiveQuantityMutation, UpdateSalePlanOrderGiveQuantityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSalePlanOrderGiveQuantityMutation, UpdateSalePlanOrderGiveQuantityMutationVariables>(UpdateSalePlanOrderGiveQuantityDocument, options);
      }
export type UpdateSalePlanOrderGiveQuantityMutationHookResult = ReturnType<typeof useUpdateSalePlanOrderGiveQuantityMutation>;
export type UpdateSalePlanOrderGiveQuantityMutationResult = Apollo.MutationResult<UpdateSalePlanOrderGiveQuantityMutation>;
export type UpdateSalePlanOrderGiveQuantityMutationOptions = Apollo.BaseMutationOptions<UpdateSalePlanOrderGiveQuantityMutation, UpdateSalePlanOrderGiveQuantityMutationVariables>;