import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageAbnormalOrderQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageAbnormalOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.PageAbnormalOrderInput>;
}>;


export type PageAbnormalOrderQuery = { pageAbnormalOrder?: { __typename?: 'PageAbnormalOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'AbnormalOrderPayload', abnormalOrderId?: string, abnormalOrderStatus?: string, abnormalOrderStatusName?: string, orderId?: string, orderCode?: string, orderType?: number, orderTypeName?: string, commodityType?: number, commodityTypeName?: string, remark?: string, createTime?: number, abnormalOrderBasicTypeName?: string, interval?: number, abnormalOrderTypeName?: string, taskId?: string, createType?: number, taskCode?: string, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, abnormalOrderItemPayload?: Array<{ __typename?: 'AbnormalOrderItemPayload', abnormalOrderItemId?: string, abnormalOrderId?: string, applyUnitQuantity?: number, applyTotalQuantity?: number, auditUnitQuantity?: number, auditTotalQuantity?: number, surplusTotalQuantity?: number, productAndSemiInStockTotalQuantity?: number, batchCode?: string, batchId?: string, applyMark?: SchemaTypes.ApplyMarkEnum, commodityType?: number, commodityTypeName?: string, reason?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }>, abnormalTask?: { __typename?: 'AbnormalTask', taskId?: string, taskCode?: string, surplusSum?: number, productAndSemiSum?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> } };

export type AbnormalOrderQueryVariables = SchemaTypes.Exact<{
  abnormalOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.AbnormalOrderInput>;
}>;


export type AbnormalOrderQuery = { abnormalOrder?: { __typename?: 'AbnormalOrderPayload', abnormalOrderId?: string, abnormalOrderStatus?: string, abnormalOrderStatusName?: string, orderId?: string, orderCode?: string, orderType?: number, orderTypeName?: string, commodityTypeName?: string, taskCode?: string, remark?: string, createTime?: number, abnormalOrderBasicTypeName?: string, interval?: number, abnormalOrderTypeName?: string, commodityType?: number, taskId?: string, isBatchOrder?: boolean, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, abnormalOrderItemPayload?: Array<{ __typename?: 'AbnormalOrderItemPayload', abnormalOrderItemId?: string, abnormalOrderId?: string, reason?: string, applyUnitQuantity?: number, applyTotalQuantity?: number, auditUnitQuantity?: number, auditTotalQuantity?: number, batchCode?: string, batchId?: string, applyMark?: SchemaTypes.ApplyMarkEnum, commodityType?: number, commodityTypeName?: string, productAndSemiInStockTotalQuantity?: number, surplusTotalQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }>, abnormalTask?: { __typename?: 'AbnormalTask', productAndSemiSum?: number, surplusSum?: number, taskCode?: string, taskId?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } } };

export type RejectAbnormalOrderMutationVariables = SchemaTypes.Exact<{
  rejectAbnormalOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.RejectAbnormalOrderInput>;
}>;


export type RejectAbnormalOrderMutation = { rejectAbnormalOrder?: boolean };

export type AbnormalOrderStatusStatisticQueryVariables = SchemaTypes.Exact<{
  abnormalOrderStatusStatisticInput?: SchemaTypes.InputMaybe<SchemaTypes.AbnormalOrderStatusStatisticInput>;
}>;


export type AbnormalOrderStatusStatisticQuery = { abnormalOrderStatusStatistic?: number };

export type AuditAbnormalTaskOrderMutationVariables = SchemaTypes.Exact<{
  auditAbnormalTaskOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.AuditAbnormalTaskOrderInput>;
}>;


export type AuditAbnormalTaskOrderMutation = { auditAbnormalTaskOrder?: boolean };

export type AuditAbnormalOrderMutationVariables = SchemaTypes.Exact<{
  auditAbnormalOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.AuditAbnormalOrderInput>;
}>;


export type AuditAbnormalOrderMutation = { auditAbnormalOrder?: boolean };


export const PageAbnormalOrderDocument = gql`
    query pageAbnormalOrder($page: Page, $pageAbnormalOrderInput: PageAbnormalOrderInput) {
  pageAbnormalOrder(page: $page, pageAbnormalOrderInput: $pageAbnormalOrderInput) {
    records {
      abnormalOrderId
      abnormalOrderStatus
      abnormalOrderStatusName
      orderId
      orderCode
      orderType
      orderTypeName
      commodityType
      commodityTypeName
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
      belongOrg {
        orgId
        orgName
      }
      remark
      createBy {
        userId
        userName
        phoneNum
      }
      createTime
      org {
        orgId
        orgName
      }
      abnormalOrderItemPayload {
        abnormalOrderItemId
        abnormalOrderId
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
        applyUnitQuantity
        applyTotalQuantity
        auditUnitQuantity
        auditTotalQuantity
        surplusTotalQuantity
        productAndSemiInStockTotalQuantity
        batchCode
        batchId
        applyMark
        commodityType
        commodityTypeName
        reason
        warehouse {
          warehouseId
          warehouseName
        }
      }
      abnormalOrderBasicTypeName
      interval
      abnormalOrderTypeName
      taskId
      createType
      abnormalTask {
        taskId
        taskCode
        warehouse {
          warehouseId
          warehouseName
        }
        belongOrg {
          orgId
          orgName
        }
        surplusSum
        productAndSemiSum
        unit {
          unitId
          unitName
        }
      }
      taskCode
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageAbnormalOrderQuery__
 *
 * To run a query within a React component, call `usePageAbnormalOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageAbnormalOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageAbnormalOrderQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageAbnormalOrderInput: // value for 'pageAbnormalOrderInput'
 *   },
 * });
 */
export function usePageAbnormalOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageAbnormalOrderQuery, PageAbnormalOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageAbnormalOrderQuery, PageAbnormalOrderQueryVariables>(PageAbnormalOrderDocument, options);
      }
export function usePageAbnormalOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageAbnormalOrderQuery, PageAbnormalOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageAbnormalOrderQuery, PageAbnormalOrderQueryVariables>(PageAbnormalOrderDocument, options);
        }
export type PageAbnormalOrderQueryHookResult = ReturnType<typeof usePageAbnormalOrderQuery>;
export type PageAbnormalOrderLazyQueryHookResult = ReturnType<typeof usePageAbnormalOrderLazyQuery>;
export type PageAbnormalOrderQueryResult = Apollo.QueryResult<PageAbnormalOrderQuery, PageAbnormalOrderQueryVariables>;
export const AbnormalOrderDocument = gql`
    query abnormalOrder($abnormalOrderInput: AbnormalOrderInput) {
  abnormalOrder(abnormalOrderInput: $abnormalOrderInput) {
    abnormalOrderId
    abnormalOrderStatus
    abnormalOrderStatusName
    orderId
    orderCode
    orderType
    orderTypeName
    commodityTypeName
    taskCode
    customer {
      customerId
      customerName
      customerType
    }
    supplier {
      supplierId
      supplierName
    }
    belongOrg {
      orgId
      orgName
    }
    remark
    createBy {
      userId
      userName
      phoneNum
    }
    createTime
    org {
      orgId
      orgName
    }
    abnormalOrderItemPayload {
      abnormalOrderItemId
      abnormalOrderId
      reason
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
      applyUnitQuantity
      applyTotalQuantity
      auditUnitQuantity
      auditTotalQuantity
      batchCode
      batchId
      applyMark
      commodityType
      commodityTypeName
      productAndSemiInStockTotalQuantity
      surplusTotalQuantity
      warehouse {
        warehouseId
        warehouseName
      }
    }
    abnormalOrderBasicTypeName
    interval
    abnormalOrderTypeName
    abnormalTask {
      belongOrg {
        orgId
        orgName
      }
      unit {
        unitId
        unitName
      }
      warehouse {
        warehouseId
        warehouseName
      }
      productAndSemiSum
      surplusSum
      taskCode
      taskId
    }
    commodityType
    taskId
    isBatchOrder
  }
}
    `;

/**
 * __useAbnormalOrderQuery__
 *
 * To run a query within a React component, call `useAbnormalOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useAbnormalOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAbnormalOrderQuery({
 *   variables: {
 *      abnormalOrderInput: // value for 'abnormalOrderInput'
 *   },
 * });
 */
export function useAbnormalOrderQuery(baseOptions?: Apollo.QueryHookOptions<AbnormalOrderQuery, AbnormalOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AbnormalOrderQuery, AbnormalOrderQueryVariables>(AbnormalOrderDocument, options);
      }
export function useAbnormalOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AbnormalOrderQuery, AbnormalOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AbnormalOrderQuery, AbnormalOrderQueryVariables>(AbnormalOrderDocument, options);
        }
export type AbnormalOrderQueryHookResult = ReturnType<typeof useAbnormalOrderQuery>;
export type AbnormalOrderLazyQueryHookResult = ReturnType<typeof useAbnormalOrderLazyQuery>;
export type AbnormalOrderQueryResult = Apollo.QueryResult<AbnormalOrderQuery, AbnormalOrderQueryVariables>;
export const RejectAbnormalOrderDocument = gql`
    mutation rejectAbnormalOrder($rejectAbnormalOrderInput: RejectAbnormalOrderInput) {
  rejectAbnormalOrder(rejectAbnormalOrderInput: $rejectAbnormalOrderInput)
}
    `;
export type RejectAbnormalOrderMutationFn = Apollo.MutationFunction<RejectAbnormalOrderMutation, RejectAbnormalOrderMutationVariables>;

/**
 * __useRejectAbnormalOrderMutation__
 *
 * To run a mutation, you first call `useRejectAbnormalOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectAbnormalOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectAbnormalOrderMutation, { data, loading, error }] = useRejectAbnormalOrderMutation({
 *   variables: {
 *      rejectAbnormalOrderInput: // value for 'rejectAbnormalOrderInput'
 *   },
 * });
 */
export function useRejectAbnormalOrderMutation(baseOptions?: Apollo.MutationHookOptions<RejectAbnormalOrderMutation, RejectAbnormalOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectAbnormalOrderMutation, RejectAbnormalOrderMutationVariables>(RejectAbnormalOrderDocument, options);
      }
export type RejectAbnormalOrderMutationHookResult = ReturnType<typeof useRejectAbnormalOrderMutation>;
export type RejectAbnormalOrderMutationResult = Apollo.MutationResult<RejectAbnormalOrderMutation>;
export type RejectAbnormalOrderMutationOptions = Apollo.BaseMutationOptions<RejectAbnormalOrderMutation, RejectAbnormalOrderMutationVariables>;
export const AbnormalOrderStatusStatisticDocument = gql`
    query abnormalOrderStatusStatistic($abnormalOrderStatusStatisticInput: AbnormalOrderStatusStatisticInput) {
  abnormalOrderStatusStatistic(
    abnormalOrderStatusStatisticInput: $abnormalOrderStatusStatisticInput
  )
}
    `;

/**
 * __useAbnormalOrderStatusStatisticQuery__
 *
 * To run a query within a React component, call `useAbnormalOrderStatusStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useAbnormalOrderStatusStatisticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAbnormalOrderStatusStatisticQuery({
 *   variables: {
 *      abnormalOrderStatusStatisticInput: // value for 'abnormalOrderStatusStatisticInput'
 *   },
 * });
 */
export function useAbnormalOrderStatusStatisticQuery(baseOptions?: Apollo.QueryHookOptions<AbnormalOrderStatusStatisticQuery, AbnormalOrderStatusStatisticQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AbnormalOrderStatusStatisticQuery, AbnormalOrderStatusStatisticQueryVariables>(AbnormalOrderStatusStatisticDocument, options);
      }
export function useAbnormalOrderStatusStatisticLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AbnormalOrderStatusStatisticQuery, AbnormalOrderStatusStatisticQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AbnormalOrderStatusStatisticQuery, AbnormalOrderStatusStatisticQueryVariables>(AbnormalOrderStatusStatisticDocument, options);
        }
export type AbnormalOrderStatusStatisticQueryHookResult = ReturnType<typeof useAbnormalOrderStatusStatisticQuery>;
export type AbnormalOrderStatusStatisticLazyQueryHookResult = ReturnType<typeof useAbnormalOrderStatusStatisticLazyQuery>;
export type AbnormalOrderStatusStatisticQueryResult = Apollo.QueryResult<AbnormalOrderStatusStatisticQuery, AbnormalOrderStatusStatisticQueryVariables>;
export const AuditAbnormalTaskOrderDocument = gql`
    mutation auditAbnormalTaskOrder($auditAbnormalTaskOrderInput: AuditAbnormalTaskOrderInput) {
  auditAbnormalTaskOrder(
    auditAbnormalTaskOrderInput: $auditAbnormalTaskOrderInput
  )
}
    `;
export type AuditAbnormalTaskOrderMutationFn = Apollo.MutationFunction<AuditAbnormalTaskOrderMutation, AuditAbnormalTaskOrderMutationVariables>;

/**
 * __useAuditAbnormalTaskOrderMutation__
 *
 * To run a mutation, you first call `useAuditAbnormalTaskOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuditAbnormalTaskOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [auditAbnormalTaskOrderMutation, { data, loading, error }] = useAuditAbnormalTaskOrderMutation({
 *   variables: {
 *      auditAbnormalTaskOrderInput: // value for 'auditAbnormalTaskOrderInput'
 *   },
 * });
 */
export function useAuditAbnormalTaskOrderMutation(baseOptions?: Apollo.MutationHookOptions<AuditAbnormalTaskOrderMutation, AuditAbnormalTaskOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuditAbnormalTaskOrderMutation, AuditAbnormalTaskOrderMutationVariables>(AuditAbnormalTaskOrderDocument, options);
      }
export type AuditAbnormalTaskOrderMutationHookResult = ReturnType<typeof useAuditAbnormalTaskOrderMutation>;
export type AuditAbnormalTaskOrderMutationResult = Apollo.MutationResult<AuditAbnormalTaskOrderMutation>;
export type AuditAbnormalTaskOrderMutationOptions = Apollo.BaseMutationOptions<AuditAbnormalTaskOrderMutation, AuditAbnormalTaskOrderMutationVariables>;
export const AuditAbnormalOrderDocument = gql`
    mutation auditAbnormalOrder($auditAbnormalOrderInput: AuditAbnormalOrderInput) {
  auditAbnormalOrder(auditAbnormalOrderInput: $auditAbnormalOrderInput)
}
    `;
export type AuditAbnormalOrderMutationFn = Apollo.MutationFunction<AuditAbnormalOrderMutation, AuditAbnormalOrderMutationVariables>;

/**
 * __useAuditAbnormalOrderMutation__
 *
 * To run a mutation, you first call `useAuditAbnormalOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuditAbnormalOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [auditAbnormalOrderMutation, { data, loading, error }] = useAuditAbnormalOrderMutation({
 *   variables: {
 *      auditAbnormalOrderInput: // value for 'auditAbnormalOrderInput'
 *   },
 * });
 */
export function useAuditAbnormalOrderMutation(baseOptions?: Apollo.MutationHookOptions<AuditAbnormalOrderMutation, AuditAbnormalOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuditAbnormalOrderMutation, AuditAbnormalOrderMutationVariables>(AuditAbnormalOrderDocument, options);
      }
export type AuditAbnormalOrderMutationHookResult = ReturnType<typeof useAuditAbnormalOrderMutation>;
export type AuditAbnormalOrderMutationResult = Apollo.MutationResult<AuditAbnormalOrderMutation>;
export type AuditAbnormalOrderMutationOptions = Apollo.BaseMutationOptions<AuditAbnormalOrderMutation, AuditAbnormalOrderMutationVariables>;