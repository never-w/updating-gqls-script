import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type StoreManagementBatchInfoDetailQueryVariables = SchemaTypes.Exact<{
  batchId: SchemaTypes.Scalars['ID'];
}>;


export type StoreManagementBatchInfoDetailQuery = { storeManagementBatchInfoDetail?: { __typename?: 'StoreManagementBatchInfoPayload', depletionQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, receiveQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, returnQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, saleQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number } } };

export type PageDifferenceOrderQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PageDifferenceOrderInput;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageDifferenceOrderQuery = { pageDifferenceOrder?: { __typename?: 'PageDifferenceOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'DifferenceOrderPayLoad', businessCode?: string, businessId?: string, createTime?: number, deliveryTime?: number, depletionTime?: number, differenceOrderStatus?: SchemaTypes.DifferenceOrderStatus, differenceOrderStatusDesc?: string, differenceOrderType?: SchemaTypes.DifferenceOrderType, differenceOrderTypeDesc?: string, orderCode?: string, orderId?: string, receiveTime?: number, remark?: string, returnTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, commodityList?: Array<{ __typename?: 'DifferenceOrderItemPayLoad', businessItemId?: string, markList?: Array<SchemaTypes.ApplyMarkEnum>, markNameList?: Array<string>, orderId?: string, orderItemId?: string, planCode?: string, planSaleTime?: number, reason?: string, saleOrderItemId?: string, totalQuantity?: number, unitQuantity?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commodityType?: { __typename?: 'PitayaCommodityType', commodityTypeId?: number, commodityTypeName?: string }, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string, createTime?: number, sourceBatchCode?: string, sourceBatchId?: string, totalQuantity?: number, unitQuantity?: number }, originDeliveryExtendInfo?: { __typename?: 'OriginDeliveryExtendInfo', deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum, deliveryGoodsSourceDesc?: string, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number } } }> }> } };

export type CreateDepletionDifferenceOrderMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreateDepletionDifferenceOrderInput;
}>;


export type CreateDepletionDifferenceOrderMutation = { createDepletionDifferenceOrder?: string };

export type VoidDepletionDifferenceOrderMutationVariables = SchemaTypes.Exact<{
  orderId: SchemaTypes.Scalars['ID'];
}>;


export type VoidDepletionDifferenceOrderMutation = { voidDepletionDifferenceOrder?: boolean };


export const StoreManagementBatchInfoDetailDocument = gql`
    query storeManagementBatchInfoDetail($batchId: ID!) {
  storeManagementBatchInfoDetail(batchId: $batchId) {
    depletionQuantity {
      totalQuantity
      unitQuantity
    }
    receiveQuantity {
      totalQuantity
      unitQuantity
    }
    returnQuantity {
      totalQuantity
      unitQuantity
    }
    saleQuantity {
      totalQuantity
      unitQuantity
    }
  }
}
    `;

/**
 * __useStoreManagementBatchInfoDetailQuery__
 *
 * To run a query within a React component, call `useStoreManagementBatchInfoDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreManagementBatchInfoDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreManagementBatchInfoDetailQuery({
 *   variables: {
 *      batchId: // value for 'batchId'
 *   },
 * });
 */
export function useStoreManagementBatchInfoDetailQuery(baseOptions: Apollo.QueryHookOptions<StoreManagementBatchInfoDetailQuery, StoreManagementBatchInfoDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StoreManagementBatchInfoDetailQuery, StoreManagementBatchInfoDetailQueryVariables>(StoreManagementBatchInfoDetailDocument, options);
      }
export function useStoreManagementBatchInfoDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StoreManagementBatchInfoDetailQuery, StoreManagementBatchInfoDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StoreManagementBatchInfoDetailQuery, StoreManagementBatchInfoDetailQueryVariables>(StoreManagementBatchInfoDetailDocument, options);
        }
export type StoreManagementBatchInfoDetailQueryHookResult = ReturnType<typeof useStoreManagementBatchInfoDetailQuery>;
export type StoreManagementBatchInfoDetailLazyQueryHookResult = ReturnType<typeof useStoreManagementBatchInfoDetailLazyQuery>;
export type StoreManagementBatchInfoDetailQueryResult = Apollo.QueryResult<StoreManagementBatchInfoDetailQuery, StoreManagementBatchInfoDetailQueryVariables>;
export const PageDifferenceOrderDocument = gql`
    query pageDifferenceOrder($input: PageDifferenceOrderInput!, $page: Page) {
  pageDifferenceOrder(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      createUser {
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
      businessCode
      businessId
      commodityList {
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
          totalQuantity
          unitQuantity
        }
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
        commodityType {
          commodityTypeId
          commodityTypeName
        }
        batch {
          batchCode
          batchId
          createTime
          sourceBatchCode
          sourceBatchId
          totalQuantity
          unitQuantity
        }
        businessItemId
        markList
        markNameList
        orderId
        orderItemId
        originDeliveryExtendInfo {
          deliveryGoodsSource
          deliveryGoodsSourceDesc
          warehouse {
            address
            belongId
            belongType
            houseNumber
            id
            locationList
            name
            orgId
            remark
            status
            typeId
          }
        }
        planCode
        planSaleTime
        reason
        saleOrderItemId
        totalQuantity
        unitQuantity
      }
      createTime
      deliveryTime
      depletionTime
      differenceOrderStatus
      differenceOrderStatusDesc
      differenceOrderType
      differenceOrderTypeDesc
      orderCode
      orderId
      receiveTime
      remark
      returnTime
    }
    totalRecords
  }
}
    `;

/**
 * __usePageDifferenceOrderQuery__
 *
 * To run a query within a React component, call `usePageDifferenceOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDifferenceOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageDifferenceOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageDifferenceOrderQuery(baseOptions: Apollo.QueryHookOptions<PageDifferenceOrderQuery, PageDifferenceOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageDifferenceOrderQuery, PageDifferenceOrderQueryVariables>(PageDifferenceOrderDocument, options);
      }
export function usePageDifferenceOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageDifferenceOrderQuery, PageDifferenceOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageDifferenceOrderQuery, PageDifferenceOrderQueryVariables>(PageDifferenceOrderDocument, options);
        }
export type PageDifferenceOrderQueryHookResult = ReturnType<typeof usePageDifferenceOrderQuery>;
export type PageDifferenceOrderLazyQueryHookResult = ReturnType<typeof usePageDifferenceOrderLazyQuery>;
export type PageDifferenceOrderQueryResult = Apollo.QueryResult<PageDifferenceOrderQuery, PageDifferenceOrderQueryVariables>;
export const CreateDepletionDifferenceOrderDocument = gql`
    mutation createDepletionDifferenceOrder($input: CreateDepletionDifferenceOrderInput!) {
  createDepletionDifferenceOrder(input: $input)
}
    `;
export type CreateDepletionDifferenceOrderMutationFn = Apollo.MutationFunction<CreateDepletionDifferenceOrderMutation, CreateDepletionDifferenceOrderMutationVariables>;

/**
 * __useCreateDepletionDifferenceOrderMutation__
 *
 * To run a mutation, you first call `useCreateDepletionDifferenceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDepletionDifferenceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDepletionDifferenceOrderMutation, { data, loading, error }] = useCreateDepletionDifferenceOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDepletionDifferenceOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateDepletionDifferenceOrderMutation, CreateDepletionDifferenceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDepletionDifferenceOrderMutation, CreateDepletionDifferenceOrderMutationVariables>(CreateDepletionDifferenceOrderDocument, options);
      }
export type CreateDepletionDifferenceOrderMutationHookResult = ReturnType<typeof useCreateDepletionDifferenceOrderMutation>;
export type CreateDepletionDifferenceOrderMutationResult = Apollo.MutationResult<CreateDepletionDifferenceOrderMutation>;
export type CreateDepletionDifferenceOrderMutationOptions = Apollo.BaseMutationOptions<CreateDepletionDifferenceOrderMutation, CreateDepletionDifferenceOrderMutationVariables>;
export const VoidDepletionDifferenceOrderDocument = gql`
    mutation voidDepletionDifferenceOrder($orderId: ID!) {
  voidDepletionDifferenceOrder(orderId: $orderId)
}
    `;
export type VoidDepletionDifferenceOrderMutationFn = Apollo.MutationFunction<VoidDepletionDifferenceOrderMutation, VoidDepletionDifferenceOrderMutationVariables>;

/**
 * __useVoidDepletionDifferenceOrderMutation__
 *
 * To run a mutation, you first call `useVoidDepletionDifferenceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoidDepletionDifferenceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voidDepletionDifferenceOrderMutation, { data, loading, error }] = useVoidDepletionDifferenceOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useVoidDepletionDifferenceOrderMutation(baseOptions?: Apollo.MutationHookOptions<VoidDepletionDifferenceOrderMutation, VoidDepletionDifferenceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoidDepletionDifferenceOrderMutation, VoidDepletionDifferenceOrderMutationVariables>(VoidDepletionDifferenceOrderDocument, options);
      }
export type VoidDepletionDifferenceOrderMutationHookResult = ReturnType<typeof useVoidDepletionDifferenceOrderMutation>;
export type VoidDepletionDifferenceOrderMutationResult = Apollo.MutationResult<VoidDepletionDifferenceOrderMutation>;
export type VoidDepletionDifferenceOrderMutationOptions = Apollo.BaseMutationOptions<VoidDepletionDifferenceOrderMutation, VoidDepletionDifferenceOrderMutationVariables>;