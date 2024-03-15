import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PitayaPageUnitAdjustmentQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaPageUnitAdjustmentInput;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PitayaPageUnitAdjustmentQuery = { pitayaPageUnitAdjustment?: { __typename?: 'PitayaPageUnitAdjustmentPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PitayaUnitAdjustmentDetailPayload', createTime?: number, orderCode?: string, orderId?: string, sumSku?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodityType?: { __typename?: 'PitayaCommodityType', commodityTypeId?: number, commodityTypeName?: string }, createUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, items?: Array<{ __typename?: 'UnitAdjustmentItemPayload', commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batchInfos?: Array<{ __typename?: 'AdjustmentBatchItemPayload', quantity?: number, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, afterQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, beforeQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> }> } };

export type PitayaUnitAdjustmentDetailQueryVariables = SchemaTypes.Exact<{
  detailId: SchemaTypes.Scalars['ID'];
}>;


export type PitayaUnitAdjustmentDetailQuery = { pitayaUnitAdjustmentDetail?: { __typename?: 'PitayaUnitAdjustmentDetailPayload', createTime?: number, orderCode?: string, orderId?: string, sumSku?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodityType?: { __typename?: 'PitayaCommodityType', commodityTypeId?: number, commodityTypeName?: string }, createUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, items?: Array<{ __typename?: 'UnitAdjustmentItemPayload', commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, batchInfos?: Array<{ __typename?: 'AdjustmentBatchItemPayload', quantity?: number, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, afterQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, beforeQuantity?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> } };

export type ListUnitAdjustmentBatchItemsQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListAdjustmentBatchInput;
}>;


export type ListUnitAdjustmentBatchItemsQuery = { listUnitAdjustmentBatchItems?: Array<{ __typename?: 'ListUnitAdjustmentItemPayload', commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commodityType?: { __typename?: 'PitayaCommodityType', commodityTypeId?: number, commodityTypeName?: string }, batchInfos?: Array<{ __typename?: 'ListAdjustmentBatchItemPayload', stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, lockQuantity?: number, quantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, lockQuantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, quantityItem?: Array<{ __typename?: 'DynamicQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } }> }> };

export type CreatePitayaUnitAdjustmentMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaCreateUnitAdjustmentInput;
}>;


export type CreatePitayaUnitAdjustmentMutation = { createPitayaUnitAdjustment?: string };


export const PitayaPageUnitAdjustmentDocument = gql`
    query pitayaPageUnitAdjustment($input: PitayaPageUnitAdjustmentInput!, $page: Page) {
  pitayaPageUnitAdjustment(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      commodityType {
        commodityTypeId
        commodityTypeName
      }
      createUser {
        phoneNum
        userId
        userName
      }
      customerBelongInfo {
        customerId
        customerName
        customerType
      }
      warehouse {
        warehouseId
        warehouseName
      }
      createTime
      items {
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
        batchInfos {
          stockBatchInfo {
            customerBelongInfo {
              customerId
              customerName
              customerType
            }
            unit {
              unitId
              unitName
            }
            batchCode
            batchId
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
          afterQuantity {
            unit {
              unitId
              unitName
            }
            quantity
          }
          beforeQuantity {
            unit {
              unitId
              unitName
            }
            quantity
          }
          quantity
          unit {
            unitId
            unitName
          }
        }
      }
      orderCode
      orderId
      sumSku
    }
    totalRecords
  }
}
    `;

/**
 * __usePitayaPageUnitAdjustmentQuery__
 *
 * To run a query within a React component, call `usePitayaPageUnitAdjustmentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaPageUnitAdjustmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaPageUnitAdjustmentQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePitayaPageUnitAdjustmentQuery(baseOptions: Apollo.QueryHookOptions<PitayaPageUnitAdjustmentQuery, PitayaPageUnitAdjustmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaPageUnitAdjustmentQuery, PitayaPageUnitAdjustmentQueryVariables>(PitayaPageUnitAdjustmentDocument, options);
      }
export function usePitayaPageUnitAdjustmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaPageUnitAdjustmentQuery, PitayaPageUnitAdjustmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaPageUnitAdjustmentQuery, PitayaPageUnitAdjustmentQueryVariables>(PitayaPageUnitAdjustmentDocument, options);
        }
export type PitayaPageUnitAdjustmentQueryHookResult = ReturnType<typeof usePitayaPageUnitAdjustmentQuery>;
export type PitayaPageUnitAdjustmentLazyQueryHookResult = ReturnType<typeof usePitayaPageUnitAdjustmentLazyQuery>;
export type PitayaPageUnitAdjustmentQueryResult = Apollo.QueryResult<PitayaPageUnitAdjustmentQuery, PitayaPageUnitAdjustmentQueryVariables>;
export const PitayaUnitAdjustmentDetailDocument = gql`
    query pitayaUnitAdjustmentDetail($detailId: ID!) {
  pitayaUnitAdjustmentDetail(detailId: $detailId) {
    belongOrg {
      orgId
      orgName
    }
    commodityType {
      commodityTypeId
      commodityTypeName
    }
    createUser {
      phoneNum
      userId
      userName
    }
    customerBelongInfo {
      customerId
      customerName
      customerType
    }
    warehouse {
      warehouseId
      warehouseName
    }
    createTime
    items {
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
      batchInfos {
        stockBatchInfo {
          customerBelongInfo {
            customerId
            customerName
            customerType
          }
          unit {
            unitId
            unitName
          }
          batchCode
          batchId
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
        afterQuantity {
          unit {
            unitId
            unitName
          }
          quantity
        }
        beforeQuantity {
          unit {
            unitId
            unitName
          }
          quantity
        }
        quantity
        unit {
          unitId
          unitName
        }
      }
    }
    orderCode
    orderId
    sumSku
  }
}
    `;

/**
 * __usePitayaUnitAdjustmentDetailQuery__
 *
 * To run a query within a React component, call `usePitayaUnitAdjustmentDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaUnitAdjustmentDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaUnitAdjustmentDetailQuery({
 *   variables: {
 *      detailId: // value for 'detailId'
 *   },
 * });
 */
export function usePitayaUnitAdjustmentDetailQuery(baseOptions: Apollo.QueryHookOptions<PitayaUnitAdjustmentDetailQuery, PitayaUnitAdjustmentDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaUnitAdjustmentDetailQuery, PitayaUnitAdjustmentDetailQueryVariables>(PitayaUnitAdjustmentDetailDocument, options);
      }
export function usePitayaUnitAdjustmentDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaUnitAdjustmentDetailQuery, PitayaUnitAdjustmentDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaUnitAdjustmentDetailQuery, PitayaUnitAdjustmentDetailQueryVariables>(PitayaUnitAdjustmentDetailDocument, options);
        }
export type PitayaUnitAdjustmentDetailQueryHookResult = ReturnType<typeof usePitayaUnitAdjustmentDetailQuery>;
export type PitayaUnitAdjustmentDetailLazyQueryHookResult = ReturnType<typeof usePitayaUnitAdjustmentDetailLazyQuery>;
export type PitayaUnitAdjustmentDetailQueryResult = Apollo.QueryResult<PitayaUnitAdjustmentDetailQuery, PitayaUnitAdjustmentDetailQueryVariables>;
export const ListUnitAdjustmentBatchItemsDocument = gql`
    query listUnitAdjustmentBatchItems($input: ListAdjustmentBatchInput!) {
  listUnitAdjustmentBatchItems(input: $input) {
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
    commodityType {
      commodityTypeId
      commodityTypeName
    }
    batchInfos {
      stockBatchInfo {
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
        unit {
          unitId
          unitName
        }
        batchCode
        batchId
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
    }
  }
}
    `;

/**
 * __useListUnitAdjustmentBatchItemsQuery__
 *
 * To run a query within a React component, call `useListUnitAdjustmentBatchItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUnitAdjustmentBatchItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUnitAdjustmentBatchItemsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListUnitAdjustmentBatchItemsQuery(baseOptions: Apollo.QueryHookOptions<ListUnitAdjustmentBatchItemsQuery, ListUnitAdjustmentBatchItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUnitAdjustmentBatchItemsQuery, ListUnitAdjustmentBatchItemsQueryVariables>(ListUnitAdjustmentBatchItemsDocument, options);
      }
export function useListUnitAdjustmentBatchItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUnitAdjustmentBatchItemsQuery, ListUnitAdjustmentBatchItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUnitAdjustmentBatchItemsQuery, ListUnitAdjustmentBatchItemsQueryVariables>(ListUnitAdjustmentBatchItemsDocument, options);
        }
export type ListUnitAdjustmentBatchItemsQueryHookResult = ReturnType<typeof useListUnitAdjustmentBatchItemsQuery>;
export type ListUnitAdjustmentBatchItemsLazyQueryHookResult = ReturnType<typeof useListUnitAdjustmentBatchItemsLazyQuery>;
export type ListUnitAdjustmentBatchItemsQueryResult = Apollo.QueryResult<ListUnitAdjustmentBatchItemsQuery, ListUnitAdjustmentBatchItemsQueryVariables>;
export const CreatePitayaUnitAdjustmentDocument = gql`
    mutation createPitayaUnitAdjustment($input: PitayaCreateUnitAdjustmentInput!) {
  createPitayaUnitAdjustment(input: $input)
}
    `;
export type CreatePitayaUnitAdjustmentMutationFn = Apollo.MutationFunction<CreatePitayaUnitAdjustmentMutation, CreatePitayaUnitAdjustmentMutationVariables>;

/**
 * __useCreatePitayaUnitAdjustmentMutation__
 *
 * To run a mutation, you first call `useCreatePitayaUnitAdjustmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaUnitAdjustmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaUnitAdjustmentMutation, { data, loading, error }] = useCreatePitayaUnitAdjustmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePitayaUnitAdjustmentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaUnitAdjustmentMutation, CreatePitayaUnitAdjustmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaUnitAdjustmentMutation, CreatePitayaUnitAdjustmentMutationVariables>(CreatePitayaUnitAdjustmentDocument, options);
      }
export type CreatePitayaUnitAdjustmentMutationHookResult = ReturnType<typeof useCreatePitayaUnitAdjustmentMutation>;
export type CreatePitayaUnitAdjustmentMutationResult = Apollo.MutationResult<CreatePitayaUnitAdjustmentMutation>;
export type CreatePitayaUnitAdjustmentMutationOptions = Apollo.BaseMutationOptions<CreatePitayaUnitAdjustmentMutation, CreatePitayaUnitAdjustmentMutationVariables>;