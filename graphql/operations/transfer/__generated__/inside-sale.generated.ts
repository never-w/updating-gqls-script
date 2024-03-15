import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CountInternalConsignmentStatusQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type CountInternalConsignmentStatusQuery = { countInternalConsignmentStatus?: { __typename?: 'CountInternalConsignmentPayload', unSubmitted?: number } };

export type InternalConsignmentOrderQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaInternalConsignmentIdInput>;
}>;


export type InternalConsignmentOrderQuery = { internalConsignmentOrder?: { __typename?: 'InternalConsignmentPayload', cancelableFlag?: boolean, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, orderCode?: string, orderId?: string, orderStatus?: SchemaTypes.InternalConsignmentStatusEnum, orderStatusName?: string, remark?: string, totalTransportFees?: number, errorDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodities?: Array<{ __typename?: 'InternalConsignmentItemPayload', itemId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, consignmentOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, transferOtherItemBills?: Array<{ __typename?: 'InternalConsignmentOtherBillPayload', amount?: number, billFreightItemId?: string, billFreightType?: number, billFreightTypeName?: string, licensePlate?: string, payMode?: SchemaTypes.PayModeEnum, payModeName?: string, phone?: string, remark?: string, paymentType?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } };

export type ListConsignmentOrgQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaListConsignmentOrgInput>;
}>;


export type ListConsignmentOrgQuery = { listConsignmentOrg?: Array<{ __typename?: 'ConsignmentOrgPayload', country?: number, id?: number, leadingId?: number, operatorId?: number, orgName?: string, parentId?: number, parentName?: string, remark?: string, tenantId?: number }> };

export type PageInternalConsignmentQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaPageInternalConsignmentInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageInternalConsignmentQuery = { pageInternalConsignment?: { __typename?: 'PageInternalConsignmentPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'InternalConsignmentPayload', commodityTypeId?: number, commodityTypeName?: string, createTime?: number, orderCode?: string, orderId?: string, orderStatus?: SchemaTypes.InternalConsignmentStatusEnum, orderStatusName?: string, remark?: string, cancelableFlag?: boolean, errorDesc?: string, totalTransportFees?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodities?: Array<{ __typename?: 'InternalConsignmentItemPayload', itemId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, consignmentOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, transferOtherItemBills?: Array<{ __typename?: 'InternalConsignmentOtherBillPayload', amount?: number, billFreightItemId?: string, billFreightType?: number, billFreightTypeName?: string, licensePlate?: string, payMode?: SchemaTypes.PayModeEnum, payModeName?: string, paymentType?: number, phone?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }> } };

export type CancelConsignmentOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaInternalConsignmentIdInput>;
}>;


export type CancelConsignmentOrderMutation = { cancelConsignmentOrder?: boolean };

export type CancelInternalConsignmentMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaInternalConsignmentIdInput>;
}>;


export type CancelInternalConsignmentMutation = { cancelInternalConsignment?: boolean };

export type CreateInternalConsignmentMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaInternalConsignmentInput>;
}>;


export type CreateInternalConsignmentMutation = { createInternalConsignment?: string };

export type SubmitInternalConsignmentMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaInternalConsignmentIdInput>;
}>;


export type SubmitInternalConsignmentMutation = { submitInternalConsignment?: boolean };

export type UpdateInternalConsignmentMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaInternalConsignmentInput>;
  orderId: SchemaTypes.Scalars['ID'];
}>;


export type UpdateInternalConsignmentMutation = { updateInternalConsignment?: string };

export type ListConsignmentPayModeQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListConsignmentPayModeQuery = { listConsignmentPayMode?: Array<{ __typename?: 'ConsignmentPayModePayload', label?: string, value?: SchemaTypes.PayModeEnum }> };

export type GetAgencySaleSettlementDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetAgencySaleSettlementDetailInput>;
}>;


export type GetAgencySaleSettlementDetailQuery = { getAgencySaleSettlementDetail?: { __typename?: 'GetAgencySaleSettlementDetailPayload', agencySellingFee?: number, agentName?: string, amount?: number, auditStatus?: SchemaTypes.SettlementAuditStatus, createTime?: number, createUser?: string, financialAmount?: number, orderCode?: string, orderId?: string, orderType?: SchemaTypes.AgencySaleEnum, remark?: string, ruleValue?: number, settlementCode?: string, settlementId?: string, settlementRule?: SchemaTypes.SettlementRuleType, auditProcess?: Array<{ __typename?: 'SettlementAuditProcessPayload', auditStatus?: SchemaTypes.SettlementAuditStatus, auditTime?: number, reviewer?: string }>, commodityList?: Array<{ __typename?: 'PeachAgencySaleOrderCommodityPayload', operationTime?: number, orderCode?: string, orderId?: string, sourceType?: SchemaTypes.PeachSettlementCommoditySourceType, batchCommodityList?: Array<{ __typename?: 'PeachAgencySaleOrderCommodityBatchPayload', amount?: number, batchId?: string, inStockTime?: number, originalBatchId?: string, quantity?: number, skuId?: number, skuName?: string, unitId?: number, unitName?: string }> }>, lowerCommodityList?: Array<{ __typename?: 'PeachLowerAgencySaleList', agentId?: number, agentName?: string, subtotal?: number, commodityList?: Array<{ __typename?: 'PeachAgencySaleOrderCommodityPayload', operationTime?: number, orderCode?: string, orderId?: string, sourceType?: SchemaTypes.PeachSettlementCommoditySourceType, batchCommodityList?: Array<{ __typename?: 'PeachAgencySaleOrderCommodityBatchPayload', amount?: number, batchId?: string, inStockTime?: number, originalBatchId?: string, quantity?: number, skuId?: number, skuName?: string, unitId?: number, unitName?: string }> }> }>, lowerCostList?: Array<{ __typename?: 'OtherSettlementCost', amount?: number, available?: boolean, calculation?: boolean, costId?: string, costType?: SchemaTypes.AgencySaleCostType, fillName?: string, occurrence?: string }>, otherCostList?: Array<{ __typename?: 'OtherSettlementCost', amount?: number, available?: boolean, calculation?: boolean, costId?: string, costType?: SchemaTypes.AgencySaleCostType, fillName?: string, occurrence?: string }>, otherSelfCostList?: Array<{ __typename?: 'SelfSettlementCost', amount?: number, calculation?: boolean, costId?: string, costType?: SchemaTypes.AgencySaleCostType, fillName?: string, payMode?: SchemaTypes.PayMode, supplierId?: number, supplierName?: string }> } };

export type ListConsignmentLogQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaInternalConsignmentIdInput>;
}>;


export type ListConsignmentLogQuery = { listConsignmentLog?: Array<{ __typename?: 'ConsignmentLogPayload', createTime?: number, logType?: SchemaTypes.InternalConsignmentLogEnum, logTypeText?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }> };

export type GetAgencySaleDetailQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.AgencySaleIdInput;
}>;


export type GetAgencySaleDetailQuery = { getAgencySaleDetail?: { __typename?: 'GetAgencySaleDetailPayload', agencySaleCode?: string, agencySaleId?: string, agencySaleType?: SchemaTypes.AgencySaleEnum, canCancel?: boolean, canReturn?: boolean, cooperationDays?: number, createTime?: number, creator?: string, existReturnBack?: boolean, parentId?: string, ruleValue?: number, settlementQuantity?: number, settlementRule?: SchemaTypes.SettlementRuleType, settlementStatus?: SchemaTypes.AgencySaleSettlementStatus, settlement?: { __typename?: 'AgencySaleCooperationSettlementPayload', receivableAmount?: number, salesAmount?: number, settlementAmount?: number, settlementStatus?: SchemaTypes.AgencySaleSettlementStatus, settlementList?: Array<{ __typename?: 'CooperationSettlementPayload', auditStatus?: SchemaTypes.SettlementAuditStatus, operator?: string, orgName?: string, receivableAmount?: number, settlementAmount?: number, settlementCode?: string, settlementId?: string, settlementTime?: number }> } } };


export const CountInternalConsignmentStatusDocument = gql`
    query countInternalConsignmentStatus {
  countInternalConsignmentStatus {
    unSubmitted
  }
}
    `;

/**
 * __useCountInternalConsignmentStatusQuery__
 *
 * To run a query within a React component, call `useCountInternalConsignmentStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountInternalConsignmentStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountInternalConsignmentStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountInternalConsignmentStatusQuery(baseOptions?: Apollo.QueryHookOptions<CountInternalConsignmentStatusQuery, CountInternalConsignmentStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountInternalConsignmentStatusQuery, CountInternalConsignmentStatusQueryVariables>(CountInternalConsignmentStatusDocument, options);
      }
export function useCountInternalConsignmentStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountInternalConsignmentStatusQuery, CountInternalConsignmentStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountInternalConsignmentStatusQuery, CountInternalConsignmentStatusQueryVariables>(CountInternalConsignmentStatusDocument, options);
        }
export type CountInternalConsignmentStatusQueryHookResult = ReturnType<typeof useCountInternalConsignmentStatusQuery>;
export type CountInternalConsignmentStatusLazyQueryHookResult = ReturnType<typeof useCountInternalConsignmentStatusLazyQuery>;
export type CountInternalConsignmentStatusQueryResult = Apollo.QueryResult<CountInternalConsignmentStatusQuery, CountInternalConsignmentStatusQueryVariables>;
export const InternalConsignmentOrderDocument = gql`
    query internalConsignmentOrder($input: PitayaInternalConsignmentIDInput) {
  internalConsignmentOrder(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    cancelableFlag
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
      stockBatchInfo {
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
        createTime
        lockQuantity
        lockQuantityItem {
          unit {
            unitId
            unitName
          }
          quantity
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
    }
    commodityTypeId
    commodityTypeName
    consignmentOrg {
      orgId
      orgName
    }
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    orderCode
    orderId
    orderStatus
    orderStatusName
    remark
    totalTransportFees
    transferOtherItemBills {
      amount
      billFreightItemId
      billFreightType
      billFreightTypeName
      licensePlate
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
    warehouse {
      warehouseId
      warehouseName
    }
    errorDesc
  }
}
    `;

/**
 * __useInternalConsignmentOrderQuery__
 *
 * To run a query within a React component, call `useInternalConsignmentOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useInternalConsignmentOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInternalConsignmentOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInternalConsignmentOrderQuery(baseOptions?: Apollo.QueryHookOptions<InternalConsignmentOrderQuery, InternalConsignmentOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InternalConsignmentOrderQuery, InternalConsignmentOrderQueryVariables>(InternalConsignmentOrderDocument, options);
      }
export function useInternalConsignmentOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InternalConsignmentOrderQuery, InternalConsignmentOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InternalConsignmentOrderQuery, InternalConsignmentOrderQueryVariables>(InternalConsignmentOrderDocument, options);
        }
export type InternalConsignmentOrderQueryHookResult = ReturnType<typeof useInternalConsignmentOrderQuery>;
export type InternalConsignmentOrderLazyQueryHookResult = ReturnType<typeof useInternalConsignmentOrderLazyQuery>;
export type InternalConsignmentOrderQueryResult = Apollo.QueryResult<InternalConsignmentOrderQuery, InternalConsignmentOrderQueryVariables>;
export const ListConsignmentOrgDocument = gql`
    query listConsignmentOrg($input: PitayaListConsignmentOrgInput) {
  listConsignmentOrg(input: $input) {
    country
    id
    leadingId
    operatorId
    orgName
    parentId
    parentName
    remark
    tenantId
  }
}
    `;

/**
 * __useListConsignmentOrgQuery__
 *
 * To run a query within a React component, call `useListConsignmentOrgQuery` and pass it any options that fit your needs.
 * When your component renders, `useListConsignmentOrgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListConsignmentOrgQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListConsignmentOrgQuery(baseOptions?: Apollo.QueryHookOptions<ListConsignmentOrgQuery, ListConsignmentOrgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListConsignmentOrgQuery, ListConsignmentOrgQueryVariables>(ListConsignmentOrgDocument, options);
      }
export function useListConsignmentOrgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListConsignmentOrgQuery, ListConsignmentOrgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListConsignmentOrgQuery, ListConsignmentOrgQueryVariables>(ListConsignmentOrgDocument, options);
        }
export type ListConsignmentOrgQueryHookResult = ReturnType<typeof useListConsignmentOrgQuery>;
export type ListConsignmentOrgLazyQueryHookResult = ReturnType<typeof useListConsignmentOrgLazyQuery>;
export type ListConsignmentOrgQueryResult = Apollo.QueryResult<ListConsignmentOrgQuery, ListConsignmentOrgQueryVariables>;
export const PageInternalConsignmentDocument = gql`
    query pageInternalConsignment($input: PitayaPageInternalConsignmentInput, $page: Page) {
  pageInternalConsignment(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
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
        itemId
        stockBatchInfo {
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
          createTime
          lockQuantity
          lockQuantityItem {
            unit {
              unitId
              unitName
            }
            quantity
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
      }
      commodityTypeId
      commodityTypeName
      consignmentOrg {
        orgId
        orgName
      }
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      orderCode
      orderId
      orderStatus
      orderStatusName
      remark
      warehouse {
        warehouseId
        warehouseName
      }
      cancelableFlag
      errorDesc
      totalTransportFees
      transferOtherItemBills {
        supplier {
          supplierId
          supplierName
        }
        amount
        billFreightItemId
        billFreightType
        billFreightTypeName
        licensePlate
        payMode
        payModeName
        paymentType
        phone
        remark
      }
    }
    totalRecords
  }
}
    `;

/**
 * __usePageInternalConsignmentQuery__
 *
 * To run a query within a React component, call `usePageInternalConsignmentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageInternalConsignmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageInternalConsignmentQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageInternalConsignmentQuery(baseOptions?: Apollo.QueryHookOptions<PageInternalConsignmentQuery, PageInternalConsignmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageInternalConsignmentQuery, PageInternalConsignmentQueryVariables>(PageInternalConsignmentDocument, options);
      }
export function usePageInternalConsignmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageInternalConsignmentQuery, PageInternalConsignmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageInternalConsignmentQuery, PageInternalConsignmentQueryVariables>(PageInternalConsignmentDocument, options);
        }
export type PageInternalConsignmentQueryHookResult = ReturnType<typeof usePageInternalConsignmentQuery>;
export type PageInternalConsignmentLazyQueryHookResult = ReturnType<typeof usePageInternalConsignmentLazyQuery>;
export type PageInternalConsignmentQueryResult = Apollo.QueryResult<PageInternalConsignmentQuery, PageInternalConsignmentQueryVariables>;
export const CancelConsignmentOrderDocument = gql`
    mutation cancelConsignmentOrder($input: PitayaInternalConsignmentIDInput) {
  cancelConsignmentOrder(input: $input)
}
    `;
export type CancelConsignmentOrderMutationFn = Apollo.MutationFunction<CancelConsignmentOrderMutation, CancelConsignmentOrderMutationVariables>;

/**
 * __useCancelConsignmentOrderMutation__
 *
 * To run a mutation, you first call `useCancelConsignmentOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelConsignmentOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelConsignmentOrderMutation, { data, loading, error }] = useCancelConsignmentOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelConsignmentOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelConsignmentOrderMutation, CancelConsignmentOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelConsignmentOrderMutation, CancelConsignmentOrderMutationVariables>(CancelConsignmentOrderDocument, options);
      }
export type CancelConsignmentOrderMutationHookResult = ReturnType<typeof useCancelConsignmentOrderMutation>;
export type CancelConsignmentOrderMutationResult = Apollo.MutationResult<CancelConsignmentOrderMutation>;
export type CancelConsignmentOrderMutationOptions = Apollo.BaseMutationOptions<CancelConsignmentOrderMutation, CancelConsignmentOrderMutationVariables>;
export const CancelInternalConsignmentDocument = gql`
    mutation cancelInternalConsignment($input: PitayaInternalConsignmentIDInput) {
  cancelInternalConsignment(input: $input)
}
    `;
export type CancelInternalConsignmentMutationFn = Apollo.MutationFunction<CancelInternalConsignmentMutation, CancelInternalConsignmentMutationVariables>;

/**
 * __useCancelInternalConsignmentMutation__
 *
 * To run a mutation, you first call `useCancelInternalConsignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelInternalConsignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelInternalConsignmentMutation, { data, loading, error }] = useCancelInternalConsignmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelInternalConsignmentMutation(baseOptions?: Apollo.MutationHookOptions<CancelInternalConsignmentMutation, CancelInternalConsignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelInternalConsignmentMutation, CancelInternalConsignmentMutationVariables>(CancelInternalConsignmentDocument, options);
      }
export type CancelInternalConsignmentMutationHookResult = ReturnType<typeof useCancelInternalConsignmentMutation>;
export type CancelInternalConsignmentMutationResult = Apollo.MutationResult<CancelInternalConsignmentMutation>;
export type CancelInternalConsignmentMutationOptions = Apollo.BaseMutationOptions<CancelInternalConsignmentMutation, CancelInternalConsignmentMutationVariables>;
export const CreateInternalConsignmentDocument = gql`
    mutation createInternalConsignment($input: PitayaInternalConsignmentInput) {
  createInternalConsignment(input: $input)
}
    `;
export type CreateInternalConsignmentMutationFn = Apollo.MutationFunction<CreateInternalConsignmentMutation, CreateInternalConsignmentMutationVariables>;

/**
 * __useCreateInternalConsignmentMutation__
 *
 * To run a mutation, you first call `useCreateInternalConsignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInternalConsignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInternalConsignmentMutation, { data, loading, error }] = useCreateInternalConsignmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInternalConsignmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateInternalConsignmentMutation, CreateInternalConsignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInternalConsignmentMutation, CreateInternalConsignmentMutationVariables>(CreateInternalConsignmentDocument, options);
      }
export type CreateInternalConsignmentMutationHookResult = ReturnType<typeof useCreateInternalConsignmentMutation>;
export type CreateInternalConsignmentMutationResult = Apollo.MutationResult<CreateInternalConsignmentMutation>;
export type CreateInternalConsignmentMutationOptions = Apollo.BaseMutationOptions<CreateInternalConsignmentMutation, CreateInternalConsignmentMutationVariables>;
export const SubmitInternalConsignmentDocument = gql`
    mutation submitInternalConsignment($input: PitayaInternalConsignmentIDInput) {
  submitInternalConsignment(input: $input)
}
    `;
export type SubmitInternalConsignmentMutationFn = Apollo.MutationFunction<SubmitInternalConsignmentMutation, SubmitInternalConsignmentMutationVariables>;

/**
 * __useSubmitInternalConsignmentMutation__
 *
 * To run a mutation, you first call `useSubmitInternalConsignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitInternalConsignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitInternalConsignmentMutation, { data, loading, error }] = useSubmitInternalConsignmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitInternalConsignmentMutation(baseOptions?: Apollo.MutationHookOptions<SubmitInternalConsignmentMutation, SubmitInternalConsignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitInternalConsignmentMutation, SubmitInternalConsignmentMutationVariables>(SubmitInternalConsignmentDocument, options);
      }
export type SubmitInternalConsignmentMutationHookResult = ReturnType<typeof useSubmitInternalConsignmentMutation>;
export type SubmitInternalConsignmentMutationResult = Apollo.MutationResult<SubmitInternalConsignmentMutation>;
export type SubmitInternalConsignmentMutationOptions = Apollo.BaseMutationOptions<SubmitInternalConsignmentMutation, SubmitInternalConsignmentMutationVariables>;
export const UpdateInternalConsignmentDocument = gql`
    mutation updateInternalConsignment($input: PitayaInternalConsignmentInput, $orderId: ID!) {
  updateInternalConsignment(input: $input, orderId: $orderId)
}
    `;
export type UpdateInternalConsignmentMutationFn = Apollo.MutationFunction<UpdateInternalConsignmentMutation, UpdateInternalConsignmentMutationVariables>;

/**
 * __useUpdateInternalConsignmentMutation__
 *
 * To run a mutation, you first call `useUpdateInternalConsignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInternalConsignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInternalConsignmentMutation, { data, loading, error }] = useUpdateInternalConsignmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useUpdateInternalConsignmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInternalConsignmentMutation, UpdateInternalConsignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInternalConsignmentMutation, UpdateInternalConsignmentMutationVariables>(UpdateInternalConsignmentDocument, options);
      }
export type UpdateInternalConsignmentMutationHookResult = ReturnType<typeof useUpdateInternalConsignmentMutation>;
export type UpdateInternalConsignmentMutationResult = Apollo.MutationResult<UpdateInternalConsignmentMutation>;
export type UpdateInternalConsignmentMutationOptions = Apollo.BaseMutationOptions<UpdateInternalConsignmentMutation, UpdateInternalConsignmentMutationVariables>;
export const ListConsignmentPayModeDocument = gql`
    query listConsignmentPayMode {
  listConsignmentPayMode {
    label: payModeName
    value: payMode
  }
}
    `;

/**
 * __useListConsignmentPayModeQuery__
 *
 * To run a query within a React component, call `useListConsignmentPayModeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListConsignmentPayModeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListConsignmentPayModeQuery({
 *   variables: {
 *   },
 * });
 */
export function useListConsignmentPayModeQuery(baseOptions?: Apollo.QueryHookOptions<ListConsignmentPayModeQuery, ListConsignmentPayModeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListConsignmentPayModeQuery, ListConsignmentPayModeQueryVariables>(ListConsignmentPayModeDocument, options);
      }
export function useListConsignmentPayModeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListConsignmentPayModeQuery, ListConsignmentPayModeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListConsignmentPayModeQuery, ListConsignmentPayModeQueryVariables>(ListConsignmentPayModeDocument, options);
        }
export type ListConsignmentPayModeQueryHookResult = ReturnType<typeof useListConsignmentPayModeQuery>;
export type ListConsignmentPayModeLazyQueryHookResult = ReturnType<typeof useListConsignmentPayModeLazyQuery>;
export type ListConsignmentPayModeQueryResult = Apollo.QueryResult<ListConsignmentPayModeQuery, ListConsignmentPayModeQueryVariables>;
export const GetAgencySaleSettlementDetailDocument = gql`
    query getAgencySaleSettlementDetail($input: GetAgencySaleSettlementDetailInput) {
  getAgencySaleSettlementDetail(input: $input) {
    agencySellingFee
    agentName
    amount
    auditProcess {
      auditStatus
      auditTime
      reviewer
    }
    auditStatus
    commodityList {
      batchCommodityList {
        amount
        batchId
        inStockTime
        originalBatchId
        quantity
        skuId
        skuName
        unitId
        unitName
      }
      operationTime
      orderCode
      orderId
      sourceType
    }
    createTime
    createUser
    financialAmount
    lowerCommodityList {
      agentId
      agentName
      commodityList {
        batchCommodityList {
          amount
          batchId
          inStockTime
          originalBatchId
          quantity
          skuId
          skuName
          unitId
          unitName
        }
        operationTime
        orderCode
        orderId
        sourceType
      }
      subtotal
    }
    lowerCostList {
      amount
      available
      calculation
      costId
      costType
      fillName
      occurrence
    }
    orderCode
    orderId
    orderType
    otherCostList {
      amount
      available
      calculation
      costId
      costType
      fillName
      occurrence
    }
    otherSelfCostList {
      amount
      calculation
      costId
      costType
      fillName
      payMode
      supplierId
      supplierName
    }
    remark
    ruleValue
    settlementCode
    settlementId
    settlementRule
  }
}
    `;

/**
 * __useGetAgencySaleSettlementDetailQuery__
 *
 * To run a query within a React component, call `useGetAgencySaleSettlementDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAgencySaleSettlementDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAgencySaleSettlementDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAgencySaleSettlementDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetAgencySaleSettlementDetailQuery, GetAgencySaleSettlementDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAgencySaleSettlementDetailQuery, GetAgencySaleSettlementDetailQueryVariables>(GetAgencySaleSettlementDetailDocument, options);
      }
export function useGetAgencySaleSettlementDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAgencySaleSettlementDetailQuery, GetAgencySaleSettlementDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAgencySaleSettlementDetailQuery, GetAgencySaleSettlementDetailQueryVariables>(GetAgencySaleSettlementDetailDocument, options);
        }
export type GetAgencySaleSettlementDetailQueryHookResult = ReturnType<typeof useGetAgencySaleSettlementDetailQuery>;
export type GetAgencySaleSettlementDetailLazyQueryHookResult = ReturnType<typeof useGetAgencySaleSettlementDetailLazyQuery>;
export type GetAgencySaleSettlementDetailQueryResult = Apollo.QueryResult<GetAgencySaleSettlementDetailQuery, GetAgencySaleSettlementDetailQueryVariables>;
export const ListConsignmentLogDocument = gql`
    query listConsignmentLog($input: PitayaInternalConsignmentIDInput) {
  listConsignmentLog(input: $input) {
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    logType
    logTypeText
  }
}
    `;

/**
 * __useListConsignmentLogQuery__
 *
 * To run a query within a React component, call `useListConsignmentLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useListConsignmentLogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListConsignmentLogQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListConsignmentLogQuery(baseOptions?: Apollo.QueryHookOptions<ListConsignmentLogQuery, ListConsignmentLogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListConsignmentLogQuery, ListConsignmentLogQueryVariables>(ListConsignmentLogDocument, options);
      }
export function useListConsignmentLogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListConsignmentLogQuery, ListConsignmentLogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListConsignmentLogQuery, ListConsignmentLogQueryVariables>(ListConsignmentLogDocument, options);
        }
export type ListConsignmentLogQueryHookResult = ReturnType<typeof useListConsignmentLogQuery>;
export type ListConsignmentLogLazyQueryHookResult = ReturnType<typeof useListConsignmentLogLazyQuery>;
export type ListConsignmentLogQueryResult = Apollo.QueryResult<ListConsignmentLogQuery, ListConsignmentLogQueryVariables>;
export const GetAgencySaleDetailDocument = gql`
    query getAgencySaleDetail($input: AgencySaleIdInput!) {
  getAgencySaleDetail(input: $input) {
    agencySaleCode
    agencySaleId
    agencySaleType
    canCancel
    canReturn
    cooperationDays
    createTime
    creator
    existReturnBack
    parentId
    ruleValue
    settlement {
      receivableAmount
      salesAmount
      settlementAmount
      settlementList {
        auditStatus
        operator
        orgName
        receivableAmount
        settlementAmount
        settlementCode
        settlementId
        settlementTime
      }
      settlementStatus
    }
    settlementQuantity
    settlementRule
    settlementStatus
  }
}
    `;

/**
 * __useGetAgencySaleDetailQuery__
 *
 * To run a query within a React component, call `useGetAgencySaleDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAgencySaleDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAgencySaleDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAgencySaleDetailQuery(baseOptions: Apollo.QueryHookOptions<GetAgencySaleDetailQuery, GetAgencySaleDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAgencySaleDetailQuery, GetAgencySaleDetailQueryVariables>(GetAgencySaleDetailDocument, options);
      }
export function useGetAgencySaleDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAgencySaleDetailQuery, GetAgencySaleDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAgencySaleDetailQuery, GetAgencySaleDetailQueryVariables>(GetAgencySaleDetailDocument, options);
        }
export type GetAgencySaleDetailQueryHookResult = ReturnType<typeof useGetAgencySaleDetailQuery>;
export type GetAgencySaleDetailLazyQueryHookResult = ReturnType<typeof useGetAgencySaleDetailLazyQuery>;
export type GetAgencySaleDetailQueryResult = Apollo.QueryResult<GetAgencySaleDetailQuery, GetAgencySaleDetailQueryVariables>;