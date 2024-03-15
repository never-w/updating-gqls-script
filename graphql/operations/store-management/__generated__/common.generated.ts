import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ListVirtualStockQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListVirtualStockInput;
}>;


export type ListVirtualStockQuery = { listVirtualStock?: Array<{ __typename?: 'VirtualStockPayload', commodityId?: number, commodityName?: string, skuStockInfo?: Array<{ __typename?: 'VirtualStockSkuStockPayload', commodityType?: number, commodityTypeName?: string, mark?: SchemaTypes.BatchMark, markName?: string, batchIds?: Array<number>, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, stockQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> }> };

export type ListVirtualStockCategoryQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListVirtualStockCategoryInput;
}>;


export type ListVirtualStockCategoryQuery = { listVirtualStockCategory?: Array<{ __typename?: 'VirtualStockCategoryPayload', categoryId?: number, categoryName?: string }> };

export type PitayaPagePlatformReturnQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaPagePlatformReturnInput;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PitayaPagePlatformReturnQuery = { pitayaPagePlatformReturn?: { __typename?: 'PitayaPagePlatformReturnPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PitayaReturnDetailPayload', createTime?: number, remark?: string, returnCode?: string, returnId?: string, returnStatus?: SchemaTypes.ReturnStatusEnum, returnStatusName?: string, returnTime?: number, returnType?: SchemaTypes.ReturnTypeEnum, returnTypeName?: string, saleOrderCode?: string, saleOrderId?: string, differenceOrderType?: SchemaTypes.DifferenceOrderType, saleReturnWay?: SchemaTypes.SaleReturnWayEnum, saleReturnWayName?: string, saleTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, commodities?: Array<{ __typename?: 'PitayaReturnCommodityDetailPayload', commodityType?: number, commodityTypeName?: string, returnId?: string, returnType?: SchemaTypes.ReturnTypeEnum, returnableQuantity?: number, amount?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, returnableAmount?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batches?: Array<{ __typename?: 'PitayaReturnCommodityBatchPayload', itemId?: string, index?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, createTime?: number, commodityTypeId?: number, commodityTypeName?: string, quantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, quantity?: number, sourceBatchCode?: string, sourceBatchId?: string, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, saleData?: { __typename?: 'PitayaSaleData', salePrice?: number, saleTotalPrice?: number, quantity?: number, saleOrderId?: number }, stockQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, bill2FetchData?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, sourceBill2Data?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } }> } };

export type PitayaPlatformReturnBadgeQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaPagePlatformReturnInput>;
}>;


export type PitayaPlatformReturnBadgeQuery = { pitayaPlatformReturnBadge?: { __typename?: 'PitayaPlatformReturnBadgePayload', toBeInbound?: number, toBeSubmitted?: number } };

export type CreatePlatformReturnMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreateOrUpdatePlatformReturnInput;
}>;


export type CreatePlatformReturnMutation = { createPlatformReturn?: string };

export type UpdatePlatformReturnMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreateOrUpdatePlatformReturnInput;
  returnId: SchemaTypes.Scalars['ID'];
}>;


export type UpdatePlatformReturnMutation = { updatePlatformReturn?: string };

export type PitayaReturnDetailQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaReturnInput;
}>;


export type PitayaReturnDetailQuery = { pitayaReturnDetail?: { __typename?: 'PitayaReturnDetailPayload', createTime?: number, remark?: string, returnCode?: string, returnId?: string, returnStatus?: SchemaTypes.ReturnStatusEnum, returnStatusName?: string, returnTime?: number, returnType?: SchemaTypes.ReturnTypeEnum, returnTypeName?: string, saleOrderCode?: string, saleOrderId?: string, saleTime?: number, differenceOrderType?: SchemaTypes.DifferenceOrderType, saleReturnWay?: SchemaTypes.SaleReturnWayEnum, saleReturnWayName?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, commodities?: Array<{ __typename?: 'PitayaReturnCommodityDetailPayload', commodityType?: number, commodityTypeName?: string, returnId?: string, returnType?: SchemaTypes.ReturnTypeEnum, returnableQuantity?: number, amount?: number, returnableAmount?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batches?: Array<{ __typename?: 'PitayaReturnCommodityBatchPayload', itemId?: string, index?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, createTime?: number, commodityTypeId?: number, commodityTypeName?: string, quantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, sourceBatchCode?: string, sourceBatchId?: string, quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, dynamicQuantity?: { __typename?: 'DynamicQuantityCalculateEntity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }>, saleData?: { __typename?: 'PitayaSaleData', salePrice?: number, saleTotalPrice?: number, quantity?: number, saleOrderId?: number }, stockQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, bill2FetchData?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, sourceBill2Data?: { __typename?: 'Bill2FetchDataPayload', billMainId?: string, templateId?: string, totalTransportFees?: number, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } } };

export type PitayaCancelReturnMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaReturnInput;
}>;


export type PitayaCancelReturnMutation = { pitayaCancelReturn?: boolean };

export type PitayaSubmitReturnMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaReturnInput;
}>;


export type PitayaSubmitReturnMutation = { pitayaSubmitReturn?: boolean };

export type PitayaVoidReturnMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaReturnInput;
}>;


export type PitayaVoidReturnMutation = { pitayaVoidReturn?: boolean };

export type PitayaWithdrawReturnMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaReturnInput;
}>;


export type PitayaWithdrawReturnMutation = { pitayaWithdrawReturn?: boolean };


export const ListVirtualStockDocument = gql`
    query listVirtualStock($input: ListVirtualStockInput!) {
  listVirtualStock(input: $input) {
    commodityId
    commodityName
    skuStockInfo {
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
      stockQuantity {
        unit {
          unitId
          unitName
        }
        quantity
      }
      mark
      markName
      batchIds
    }
  }
}
    `;

/**
 * __useListVirtualStockQuery__
 *
 * To run a query within a React component, call `useListVirtualStockQuery` and pass it any options that fit your needs.
 * When your component renders, `useListVirtualStockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListVirtualStockQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListVirtualStockQuery(baseOptions: Apollo.QueryHookOptions<ListVirtualStockQuery, ListVirtualStockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListVirtualStockQuery, ListVirtualStockQueryVariables>(ListVirtualStockDocument, options);
      }
export function useListVirtualStockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListVirtualStockQuery, ListVirtualStockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListVirtualStockQuery, ListVirtualStockQueryVariables>(ListVirtualStockDocument, options);
        }
export type ListVirtualStockQueryHookResult = ReturnType<typeof useListVirtualStockQuery>;
export type ListVirtualStockLazyQueryHookResult = ReturnType<typeof useListVirtualStockLazyQuery>;
export type ListVirtualStockQueryResult = Apollo.QueryResult<ListVirtualStockQuery, ListVirtualStockQueryVariables>;
export const ListVirtualStockCategoryDocument = gql`
    query listVirtualStockCategory($input: ListVirtualStockCategoryInput!) {
  listVirtualStockCategory(input: $input) {
    categoryId
    categoryName
  }
}
    `;

/**
 * __useListVirtualStockCategoryQuery__
 *
 * To run a query within a React component, call `useListVirtualStockCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListVirtualStockCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListVirtualStockCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListVirtualStockCategoryQuery(baseOptions: Apollo.QueryHookOptions<ListVirtualStockCategoryQuery, ListVirtualStockCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListVirtualStockCategoryQuery, ListVirtualStockCategoryQueryVariables>(ListVirtualStockCategoryDocument, options);
      }
export function useListVirtualStockCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListVirtualStockCategoryQuery, ListVirtualStockCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListVirtualStockCategoryQuery, ListVirtualStockCategoryQueryVariables>(ListVirtualStockCategoryDocument, options);
        }
export type ListVirtualStockCategoryQueryHookResult = ReturnType<typeof useListVirtualStockCategoryQuery>;
export type ListVirtualStockCategoryLazyQueryHookResult = ReturnType<typeof useListVirtualStockCategoryLazyQuery>;
export type ListVirtualStockCategoryQueryResult = Apollo.QueryResult<ListVirtualStockCategoryQuery, ListVirtualStockCategoryQueryVariables>;
export const PitayaPagePlatformReturnDocument = gql`
    query pitayaPagePlatformReturn($input: PitayaPagePlatformReturnInput!, $page: Page) {
  pitayaPagePlatformReturn(input: $input, page: $page) {
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
    totalRecords
  }
}
    `;

/**
 * __usePitayaPagePlatformReturnQuery__
 *
 * To run a query within a React component, call `usePitayaPagePlatformReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaPagePlatformReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaPagePlatformReturnQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePitayaPagePlatformReturnQuery(baseOptions: Apollo.QueryHookOptions<PitayaPagePlatformReturnQuery, PitayaPagePlatformReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaPagePlatformReturnQuery, PitayaPagePlatformReturnQueryVariables>(PitayaPagePlatformReturnDocument, options);
      }
export function usePitayaPagePlatformReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaPagePlatformReturnQuery, PitayaPagePlatformReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaPagePlatformReturnQuery, PitayaPagePlatformReturnQueryVariables>(PitayaPagePlatformReturnDocument, options);
        }
export type PitayaPagePlatformReturnQueryHookResult = ReturnType<typeof usePitayaPagePlatformReturnQuery>;
export type PitayaPagePlatformReturnLazyQueryHookResult = ReturnType<typeof usePitayaPagePlatformReturnLazyQuery>;
export type PitayaPagePlatformReturnQueryResult = Apollo.QueryResult<PitayaPagePlatformReturnQuery, PitayaPagePlatformReturnQueryVariables>;
export const PitayaPlatformReturnBadgeDocument = gql`
    query pitayaPlatformReturnBadge($input: PitayaPagePlatformReturnInput) {
  pitayaPlatformReturnBadge(input: $input) {
    toBeInbound
    toBeSubmitted
  }
}
    `;

/**
 * __usePitayaPlatformReturnBadgeQuery__
 *
 * To run a query within a React component, call `usePitayaPlatformReturnBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaPlatformReturnBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaPlatformReturnBadgeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaPlatformReturnBadgeQuery(baseOptions?: Apollo.QueryHookOptions<PitayaPlatformReturnBadgeQuery, PitayaPlatformReturnBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaPlatformReturnBadgeQuery, PitayaPlatformReturnBadgeQueryVariables>(PitayaPlatformReturnBadgeDocument, options);
      }
export function usePitayaPlatformReturnBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaPlatformReturnBadgeQuery, PitayaPlatformReturnBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaPlatformReturnBadgeQuery, PitayaPlatformReturnBadgeQueryVariables>(PitayaPlatformReturnBadgeDocument, options);
        }
export type PitayaPlatformReturnBadgeQueryHookResult = ReturnType<typeof usePitayaPlatformReturnBadgeQuery>;
export type PitayaPlatformReturnBadgeLazyQueryHookResult = ReturnType<typeof usePitayaPlatformReturnBadgeLazyQuery>;
export type PitayaPlatformReturnBadgeQueryResult = Apollo.QueryResult<PitayaPlatformReturnBadgeQuery, PitayaPlatformReturnBadgeQueryVariables>;
export const CreatePlatformReturnDocument = gql`
    mutation createPlatformReturn($input: CreateOrUpdatePlatformReturnInput!) {
  createPlatformReturn(input: $input)
}
    `;
export type CreatePlatformReturnMutationFn = Apollo.MutationFunction<CreatePlatformReturnMutation, CreatePlatformReturnMutationVariables>;

/**
 * __useCreatePlatformReturnMutation__
 *
 * To run a mutation, you first call `useCreatePlatformReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlatformReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlatformReturnMutation, { data, loading, error }] = useCreatePlatformReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlatformReturnMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlatformReturnMutation, CreatePlatformReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlatformReturnMutation, CreatePlatformReturnMutationVariables>(CreatePlatformReturnDocument, options);
      }
export type CreatePlatformReturnMutationHookResult = ReturnType<typeof useCreatePlatformReturnMutation>;
export type CreatePlatformReturnMutationResult = Apollo.MutationResult<CreatePlatformReturnMutation>;
export type CreatePlatformReturnMutationOptions = Apollo.BaseMutationOptions<CreatePlatformReturnMutation, CreatePlatformReturnMutationVariables>;
export const UpdatePlatformReturnDocument = gql`
    mutation updatePlatformReturn($input: CreateOrUpdatePlatformReturnInput!, $returnId: ID!) {
  updatePlatformReturn(input: $input, returnId: $returnId)
}
    `;
export type UpdatePlatformReturnMutationFn = Apollo.MutationFunction<UpdatePlatformReturnMutation, UpdatePlatformReturnMutationVariables>;

/**
 * __useUpdatePlatformReturnMutation__
 *
 * To run a mutation, you first call `useUpdatePlatformReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlatformReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlatformReturnMutation, { data, loading, error }] = useUpdatePlatformReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *      returnId: // value for 'returnId'
 *   },
 * });
 */
export function useUpdatePlatformReturnMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlatformReturnMutation, UpdatePlatformReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlatformReturnMutation, UpdatePlatformReturnMutationVariables>(UpdatePlatformReturnDocument, options);
      }
export type UpdatePlatformReturnMutationHookResult = ReturnType<typeof useUpdatePlatformReturnMutation>;
export type UpdatePlatformReturnMutationResult = Apollo.MutationResult<UpdatePlatformReturnMutation>;
export type UpdatePlatformReturnMutationOptions = Apollo.BaseMutationOptions<UpdatePlatformReturnMutation, UpdatePlatformReturnMutationVariables>;
export const PitayaReturnDetailDocument = gql`
    query pitayaReturnDetail($input: PitayaReturnInput!) {
  pitayaReturnDetail(input: $input) {
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
          commodityTypeId
          commodityTypeName
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
      amount
      returnableAmount
      mark
      markName
      unit {
        unitId
        unitName
      }
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
    saleTime
    differenceOrderType
    saleReturnWay
    saleReturnWayName
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
    `;

/**
 * __usePitayaReturnDetailQuery__
 *
 * To run a query within a React component, call `usePitayaReturnDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaReturnDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaReturnDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaReturnDetailQuery(baseOptions: Apollo.QueryHookOptions<PitayaReturnDetailQuery, PitayaReturnDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaReturnDetailQuery, PitayaReturnDetailQueryVariables>(PitayaReturnDetailDocument, options);
      }
export function usePitayaReturnDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaReturnDetailQuery, PitayaReturnDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaReturnDetailQuery, PitayaReturnDetailQueryVariables>(PitayaReturnDetailDocument, options);
        }
export type PitayaReturnDetailQueryHookResult = ReturnType<typeof usePitayaReturnDetailQuery>;
export type PitayaReturnDetailLazyQueryHookResult = ReturnType<typeof usePitayaReturnDetailLazyQuery>;
export type PitayaReturnDetailQueryResult = Apollo.QueryResult<PitayaReturnDetailQuery, PitayaReturnDetailQueryVariables>;
export const PitayaCancelReturnDocument = gql`
    mutation pitayaCancelReturn($input: PitayaReturnInput!) {
  pitayaCancelReturn(input: $input)
}
    `;
export type PitayaCancelReturnMutationFn = Apollo.MutationFunction<PitayaCancelReturnMutation, PitayaCancelReturnMutationVariables>;

/**
 * __usePitayaCancelReturnMutation__
 *
 * To run a mutation, you first call `usePitayaCancelReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaCancelReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaCancelReturnMutation, { data, loading, error }] = usePitayaCancelReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaCancelReturnMutation(baseOptions?: Apollo.MutationHookOptions<PitayaCancelReturnMutation, PitayaCancelReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PitayaCancelReturnMutation, PitayaCancelReturnMutationVariables>(PitayaCancelReturnDocument, options);
      }
export type PitayaCancelReturnMutationHookResult = ReturnType<typeof usePitayaCancelReturnMutation>;
export type PitayaCancelReturnMutationResult = Apollo.MutationResult<PitayaCancelReturnMutation>;
export type PitayaCancelReturnMutationOptions = Apollo.BaseMutationOptions<PitayaCancelReturnMutation, PitayaCancelReturnMutationVariables>;
export const PitayaSubmitReturnDocument = gql`
    mutation pitayaSubmitReturn($input: PitayaReturnInput!) {
  pitayaSubmitReturn(input: $input)
}
    `;
export type PitayaSubmitReturnMutationFn = Apollo.MutationFunction<PitayaSubmitReturnMutation, PitayaSubmitReturnMutationVariables>;

/**
 * __usePitayaSubmitReturnMutation__
 *
 * To run a mutation, you first call `usePitayaSubmitReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaSubmitReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaSubmitReturnMutation, { data, loading, error }] = usePitayaSubmitReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaSubmitReturnMutation(baseOptions?: Apollo.MutationHookOptions<PitayaSubmitReturnMutation, PitayaSubmitReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PitayaSubmitReturnMutation, PitayaSubmitReturnMutationVariables>(PitayaSubmitReturnDocument, options);
      }
export type PitayaSubmitReturnMutationHookResult = ReturnType<typeof usePitayaSubmitReturnMutation>;
export type PitayaSubmitReturnMutationResult = Apollo.MutationResult<PitayaSubmitReturnMutation>;
export type PitayaSubmitReturnMutationOptions = Apollo.BaseMutationOptions<PitayaSubmitReturnMutation, PitayaSubmitReturnMutationVariables>;
export const PitayaVoidReturnDocument = gql`
    mutation pitayaVoidReturn($input: PitayaReturnInput!) {
  pitayaVoidReturn(input: $input)
}
    `;
export type PitayaVoidReturnMutationFn = Apollo.MutationFunction<PitayaVoidReturnMutation, PitayaVoidReturnMutationVariables>;

/**
 * __usePitayaVoidReturnMutation__
 *
 * To run a mutation, you first call `usePitayaVoidReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaVoidReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaVoidReturnMutation, { data, loading, error }] = usePitayaVoidReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaVoidReturnMutation(baseOptions?: Apollo.MutationHookOptions<PitayaVoidReturnMutation, PitayaVoidReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PitayaVoidReturnMutation, PitayaVoidReturnMutationVariables>(PitayaVoidReturnDocument, options);
      }
export type PitayaVoidReturnMutationHookResult = ReturnType<typeof usePitayaVoidReturnMutation>;
export type PitayaVoidReturnMutationResult = Apollo.MutationResult<PitayaVoidReturnMutation>;
export type PitayaVoidReturnMutationOptions = Apollo.BaseMutationOptions<PitayaVoidReturnMutation, PitayaVoidReturnMutationVariables>;
export const PitayaWithdrawReturnDocument = gql`
    mutation pitayaWithdrawReturn($input: PitayaReturnInput!) {
  pitayaWithdrawReturn(input: $input)
}
    `;
export type PitayaWithdrawReturnMutationFn = Apollo.MutationFunction<PitayaWithdrawReturnMutation, PitayaWithdrawReturnMutationVariables>;

/**
 * __usePitayaWithdrawReturnMutation__
 *
 * To run a mutation, you first call `usePitayaWithdrawReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePitayaWithdrawReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pitayaWithdrawReturnMutation, { data, loading, error }] = usePitayaWithdrawReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaWithdrawReturnMutation(baseOptions?: Apollo.MutationHookOptions<PitayaWithdrawReturnMutation, PitayaWithdrawReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PitayaWithdrawReturnMutation, PitayaWithdrawReturnMutationVariables>(PitayaWithdrawReturnDocument, options);
      }
export type PitayaWithdrawReturnMutationHookResult = ReturnType<typeof usePitayaWithdrawReturnMutation>;
export type PitayaWithdrawReturnMutationResult = Apollo.MutationResult<PitayaWithdrawReturnMutation>;
export type PitayaWithdrawReturnMutationOptions = Apollo.BaseMutationOptions<PitayaWithdrawReturnMutation, PitayaWithdrawReturnMutationVariables>;