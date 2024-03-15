import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageDeliveryReturnQueryVariables = SchemaTypes.Exact<{
  pageDeliveryReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.PageDeliveryReturnInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageDeliveryReturnQuery = { pageDeliveryReturn?: { __typename?: 'PageDeliveryReturnPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'DeliveryReturnPayload', returnId?: string, returnCode?: string, returnOrderStatus?: SchemaTypes.ReturnOrderStatus, returnOrderStatusName?: string, deliveryOrderId?: string, deliveryOrderCode?: string, deliveryDate?: number, createTime?: number, orderDescription?: string, latestDescription?: string, deliveryOrderType?: SchemaTypes.OutOrderTypeEnum, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, belongInfo?: Array<{ __typename?: 'SummaryCustomerAddressInfo', customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodities?: Array<{ __typename?: 'DeliveryReturnCommodityPayload', saleOrderId?: string, saleOrderCode?: string, canBeUpdated?: boolean, returnId?: string, jointOrderId?: string, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commodityItems?: Array<{ __typename?: 'DeliveryReturnCommodityItemPayload', deliveryOrderItemId?: string, deliveryReturnItemId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, returnQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, outBoundQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnFinishedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnToBeAuditedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnableQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnThisQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnThisToBeAuditedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } }> }> }> } };

export type DeliveryReturnStatusQueryVariables = SchemaTypes.Exact<{
  deliveryReturnStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryReturnStatusInput>;
}>;


export type DeliveryReturnStatusQuery = { deliveryReturnStatus?: { __typename?: 'DeliveryReturnStatusPayload', toSubmit?: number, toInbound?: number, finished?: number, canceled?: number } };

export type DeliveryReturnOrderQueryVariables = SchemaTypes.Exact<{
  deliveryReturnOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryReturnOrderInput>;
}>;


export type DeliveryReturnOrderQuery = { deliveryReturnOrder?: { __typename?: 'DeliveryReturnPayload', returnId?: string, returnCode?: string, returnOrderStatus?: SchemaTypes.ReturnOrderStatus, returnOrderStatusName?: string, deliveryOrderId?: string, deliveryOrderCode?: string, deliveryDate?: number, createTime?: number, orderDescription?: string, latestDescription?: string, deliveryOrderType?: SchemaTypes.OutOrderTypeEnum, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, belongInfo?: Array<{ __typename?: 'SummaryCustomerAddressInfo', customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodities?: Array<{ __typename?: 'DeliveryReturnCommodityPayload', saleOrderId?: string, saleOrderCode?: string, canBeUpdated?: boolean, returnId?: string, jointOrderId?: string, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commodityItems?: Array<{ __typename?: 'DeliveryReturnCommodityItemPayload', deliveryOrderItemId?: string, deliveryReturnItemId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, returnQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, outBoundQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnFinishedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnToBeAuditedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnableQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnThisQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnThisToBeAuditedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } }> }> } };

export type ListDeliveryReturnLogsQueryVariables = SchemaTypes.Exact<{
  listDeliveryReturnLogsInput?: SchemaTypes.InputMaybe<SchemaTypes.ListDeliveryReturnLogsInput>;
}>;


export type ListDeliveryReturnLogsQuery = { listDeliveryReturnLogs?: Array<{ __typename?: 'DeliveryReturnLogPayload', returnLogId?: string, returnOrderId?: string, type?: SchemaTypes.DeliveryReturnLogType, typeText?: string, remark?: string, createTime?: number, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }> };

export type CreateDeliveryReturnMutationVariables = SchemaTypes.Exact<{
  returnCreateInput?: SchemaTypes.InputMaybe<SchemaTypes.ReturnCreateInput>;
}>;


export type CreateDeliveryReturnMutation = { createDeliveryReturn?: string };

export type ListDeliveryOrderQueryVariables = SchemaTypes.Exact<{
  listDeliveryOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.ListDeliveryOrderInput>;
}>;


export type ListDeliveryOrderQuery = { listDeliveryOrder?: Array<{ __typename?: 'ListDeliveryOrderPayload', deliveryOrderId?: string, deliveryOrderCode?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, belongInfo?: Array<{ __typename?: 'SummaryCustomerAddressInfo', customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, commodities?: Array<{ __typename?: 'DeliveryReturnCommodityItemPayload', commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuName?: string, commoditySpecOptionName?: Array<string> } }> }> };

export type ListDeliveryReturnCommodityQueryVariables = SchemaTypes.Exact<{
  listDeliveryReturnCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.ListDeliveryReturnCommodityInput>;
}>;


export type ListDeliveryReturnCommodityQuery = { listDeliveryReturnCommodity?: Array<{ __typename?: 'ListDeliveryReturnCommodityPayload', saleOrderId?: string, saleOrderCode?: string, deliveryDate?: number, canBeUpdated?: boolean, jointVentureCode?: string, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commodities?: Array<{ __typename?: 'DeliveryReturnCommodityItemPayload', deliveryOrderItemId?: string, deliveryReturnItemId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, returnQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, outBoundQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnFinishedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnToBeAuditedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnableQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnThisQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnThisToBeAuditedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } }> }> };

export type CancelDeliveryReturnMutationVariables = SchemaTypes.Exact<{
  returnCancelInput?: SchemaTypes.InputMaybe<SchemaTypes.ReturnCancelInput>;
}>;


export type CancelDeliveryReturnMutation = { cancelDeliveryReturn?: boolean };

export type SubmitDeliveryReturnMutationVariables = SchemaTypes.Exact<{
  returnSubmitInput?: SchemaTypes.InputMaybe<SchemaTypes.ReturnSubmitInput>;
}>;


export type SubmitDeliveryReturnMutation = { submitDeliveryReturn?: boolean };

export type UpdateDeliveryReturnMutationVariables = SchemaTypes.Exact<{
  returnUpdateInput?: SchemaTypes.InputMaybe<SchemaTypes.ReturnCreateInput>;
}>;


export type UpdateDeliveryReturnMutation = { updateDeliveryReturn?: boolean };


export const PageDeliveryReturnDocument = gql`
    query pageDeliveryReturn($pageDeliveryReturnInput: PageDeliveryReturnInput, $page: Page) {
  pageDeliveryReturn(
    pageDeliveryReturnInput: $pageDeliveryReturnInput
    page: $page
  ) {
    records {
      returnId
      returnCode
      returnOrderStatus
      returnOrderStatusName
      deliveryOrderId
      deliveryOrderCode
      warehouse {
        warehouseId
        warehouseName
      }
      deliveryDate
      belongOrg {
        orgId
        orgName
      }
      belongInfo {
        customerAddressInfo {
          customerId
          customerName
          customerType
          deliveryName
        }
      }
      createTime
      createUser {
        userId
        userName
        phoneNum
      }
      orderDescription
      latestDescription
      commodities {
        customer {
          customerId
          customerName
          customerType
        }
        saleOrderId
        saleOrderCode
        canBeUpdated
        returnId
        commodityItems {
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
          returnQuantity {
            unitQuantity
            totalQuantity
          }
          outBoundQuantity {
            unitQuantity
            totalQuantity
          }
          returnFinishedQuantity {
            unitQuantity
            totalQuantity
          }
          returnToBeAuditedQuantity {
            unitQuantity
            totalQuantity
          }
          returnableQuantity {
            unitQuantity
            totalQuantity
          }
          returnThisQuantity {
            unitQuantity
            totalQuantity
          }
          returnThisToBeAuditedQuantity {
            unitQuantity
            totalQuantity
          }
          deliveryOrderItemId
          deliveryReturnItemId
        }
        jointOrderId
      }
      deliveryOrderType
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageDeliveryReturnQuery__
 *
 * To run a query within a React component, call `usePageDeliveryReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDeliveryReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageDeliveryReturnQuery({
 *   variables: {
 *      pageDeliveryReturnInput: // value for 'pageDeliveryReturnInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageDeliveryReturnQuery(baseOptions?: Apollo.QueryHookOptions<PageDeliveryReturnQuery, PageDeliveryReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageDeliveryReturnQuery, PageDeliveryReturnQueryVariables>(PageDeliveryReturnDocument, options);
      }
export function usePageDeliveryReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageDeliveryReturnQuery, PageDeliveryReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageDeliveryReturnQuery, PageDeliveryReturnQueryVariables>(PageDeliveryReturnDocument, options);
        }
export type PageDeliveryReturnQueryHookResult = ReturnType<typeof usePageDeliveryReturnQuery>;
export type PageDeliveryReturnLazyQueryHookResult = ReturnType<typeof usePageDeliveryReturnLazyQuery>;
export type PageDeliveryReturnQueryResult = Apollo.QueryResult<PageDeliveryReturnQuery, PageDeliveryReturnQueryVariables>;
export const DeliveryReturnStatusDocument = gql`
    query deliveryReturnStatus($deliveryReturnStatusInput: DeliveryReturnStatusInput) {
  deliveryReturnStatus(deliveryReturnStatusInput: $deliveryReturnStatusInput) {
    toSubmit
    toInbound
    finished
    canceled
  }
}
    `;

/**
 * __useDeliveryReturnStatusQuery__
 *
 * To run a query within a React component, call `useDeliveryReturnStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryReturnStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryReturnStatusQuery({
 *   variables: {
 *      deliveryReturnStatusInput: // value for 'deliveryReturnStatusInput'
 *   },
 * });
 */
export function useDeliveryReturnStatusQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryReturnStatusQuery, DeliveryReturnStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryReturnStatusQuery, DeliveryReturnStatusQueryVariables>(DeliveryReturnStatusDocument, options);
      }
export function useDeliveryReturnStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryReturnStatusQuery, DeliveryReturnStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryReturnStatusQuery, DeliveryReturnStatusQueryVariables>(DeliveryReturnStatusDocument, options);
        }
export type DeliveryReturnStatusQueryHookResult = ReturnType<typeof useDeliveryReturnStatusQuery>;
export type DeliveryReturnStatusLazyQueryHookResult = ReturnType<typeof useDeliveryReturnStatusLazyQuery>;
export type DeliveryReturnStatusQueryResult = Apollo.QueryResult<DeliveryReturnStatusQuery, DeliveryReturnStatusQueryVariables>;
export const DeliveryReturnOrderDocument = gql`
    query deliveryReturnOrder($deliveryReturnOrderInput: DeliveryReturnOrderInput) {
  deliveryReturnOrder(deliveryReturnOrderInput: $deliveryReturnOrderInput) {
    returnId
    returnCode
    returnOrderStatus
    returnOrderStatusName
    deliveryOrderId
    deliveryOrderCode
    warehouse {
      warehouseId
      warehouseName
    }
    deliveryDate
    belongOrg {
      orgId
      orgName
    }
    belongInfo {
      customerAddressInfo {
        customerId
        customerName
        customerType
        deliveryName
      }
    }
    createTime
    createUser {
      userId
      userName
      phoneNum
    }
    orderDescription
    latestDescription
    commodities {
      customer {
        customerId
        customerName
        customerType
      }
      saleOrderId
      saleOrderCode
      canBeUpdated
      returnId
      commodityItems {
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
        returnQuantity {
          unitQuantity
          totalQuantity
        }
        outBoundQuantity {
          unitQuantity
          totalQuantity
        }
        returnFinishedQuantity {
          unitQuantity
          totalQuantity
        }
        returnToBeAuditedQuantity {
          unitQuantity
          totalQuantity
        }
        returnableQuantity {
          unitQuantity
          totalQuantity
        }
        returnThisQuantity {
          unitQuantity
          totalQuantity
        }
        returnThisToBeAuditedQuantity {
          unitQuantity
          totalQuantity
        }
        deliveryOrderItemId
        deliveryReturnItemId
      }
      jointOrderId
    }
    deliveryOrderType
  }
}
    `;

/**
 * __useDeliveryReturnOrderQuery__
 *
 * To run a query within a React component, call `useDeliveryReturnOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryReturnOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryReturnOrderQuery({
 *   variables: {
 *      deliveryReturnOrderInput: // value for 'deliveryReturnOrderInput'
 *   },
 * });
 */
export function useDeliveryReturnOrderQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryReturnOrderQuery, DeliveryReturnOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryReturnOrderQuery, DeliveryReturnOrderQueryVariables>(DeliveryReturnOrderDocument, options);
      }
export function useDeliveryReturnOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryReturnOrderQuery, DeliveryReturnOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryReturnOrderQuery, DeliveryReturnOrderQueryVariables>(DeliveryReturnOrderDocument, options);
        }
export type DeliveryReturnOrderQueryHookResult = ReturnType<typeof useDeliveryReturnOrderQuery>;
export type DeliveryReturnOrderLazyQueryHookResult = ReturnType<typeof useDeliveryReturnOrderLazyQuery>;
export type DeliveryReturnOrderQueryResult = Apollo.QueryResult<DeliveryReturnOrderQuery, DeliveryReturnOrderQueryVariables>;
export const ListDeliveryReturnLogsDocument = gql`
    query listDeliveryReturnLogs($listDeliveryReturnLogsInput: ListDeliveryReturnLogsInput) {
  listDeliveryReturnLogs(
    listDeliveryReturnLogsInput: $listDeliveryReturnLogsInput
  ) {
    returnLogId
    returnOrderId
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
}
    `;

/**
 * __useListDeliveryReturnLogsQuery__
 *
 * To run a query within a React component, call `useListDeliveryReturnLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDeliveryReturnLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDeliveryReturnLogsQuery({
 *   variables: {
 *      listDeliveryReturnLogsInput: // value for 'listDeliveryReturnLogsInput'
 *   },
 * });
 */
export function useListDeliveryReturnLogsQuery(baseOptions?: Apollo.QueryHookOptions<ListDeliveryReturnLogsQuery, ListDeliveryReturnLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDeliveryReturnLogsQuery, ListDeliveryReturnLogsQueryVariables>(ListDeliveryReturnLogsDocument, options);
      }
export function useListDeliveryReturnLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDeliveryReturnLogsQuery, ListDeliveryReturnLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDeliveryReturnLogsQuery, ListDeliveryReturnLogsQueryVariables>(ListDeliveryReturnLogsDocument, options);
        }
export type ListDeliveryReturnLogsQueryHookResult = ReturnType<typeof useListDeliveryReturnLogsQuery>;
export type ListDeliveryReturnLogsLazyQueryHookResult = ReturnType<typeof useListDeliveryReturnLogsLazyQuery>;
export type ListDeliveryReturnLogsQueryResult = Apollo.QueryResult<ListDeliveryReturnLogsQuery, ListDeliveryReturnLogsQueryVariables>;
export const CreateDeliveryReturnDocument = gql`
    mutation createDeliveryReturn($returnCreateInput: ReturnCreateInput) {
  createDeliveryReturn(returnCreateInput: $returnCreateInput)
}
    `;
export type CreateDeliveryReturnMutationFn = Apollo.MutationFunction<CreateDeliveryReturnMutation, CreateDeliveryReturnMutationVariables>;

/**
 * __useCreateDeliveryReturnMutation__
 *
 * To run a mutation, you first call `useCreateDeliveryReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeliveryReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeliveryReturnMutation, { data, loading, error }] = useCreateDeliveryReturnMutation({
 *   variables: {
 *      returnCreateInput: // value for 'returnCreateInput'
 *   },
 * });
 */
export function useCreateDeliveryReturnMutation(baseOptions?: Apollo.MutationHookOptions<CreateDeliveryReturnMutation, CreateDeliveryReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDeliveryReturnMutation, CreateDeliveryReturnMutationVariables>(CreateDeliveryReturnDocument, options);
      }
export type CreateDeliveryReturnMutationHookResult = ReturnType<typeof useCreateDeliveryReturnMutation>;
export type CreateDeliveryReturnMutationResult = Apollo.MutationResult<CreateDeliveryReturnMutation>;
export type CreateDeliveryReturnMutationOptions = Apollo.BaseMutationOptions<CreateDeliveryReturnMutation, CreateDeliveryReturnMutationVariables>;
export const ListDeliveryOrderDocument = gql`
    query listDeliveryOrder($listDeliveryOrderInput: ListDeliveryOrderInput) {
  listDeliveryOrder(listDeliveryOrderInput: $listDeliveryOrderInput) {
    deliveryOrderId
    deliveryOrderCode
    belongOrg {
      orgId
      orgName
    }
    warehouse {
      warehouseId
      warehouseName
    }
    belongInfo {
      customerAddressInfo {
        customerId
        customerName
        customerType
        deliveryName
      }
    }
    commodities {
      commoditySku {
        commoditySkuName
        commoditySpecOptionName
      }
    }
  }
}
    `;

/**
 * __useListDeliveryOrderQuery__
 *
 * To run a query within a React component, call `useListDeliveryOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDeliveryOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDeliveryOrderQuery({
 *   variables: {
 *      listDeliveryOrderInput: // value for 'listDeliveryOrderInput'
 *   },
 * });
 */
export function useListDeliveryOrderQuery(baseOptions?: Apollo.QueryHookOptions<ListDeliveryOrderQuery, ListDeliveryOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDeliveryOrderQuery, ListDeliveryOrderQueryVariables>(ListDeliveryOrderDocument, options);
      }
export function useListDeliveryOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDeliveryOrderQuery, ListDeliveryOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDeliveryOrderQuery, ListDeliveryOrderQueryVariables>(ListDeliveryOrderDocument, options);
        }
export type ListDeliveryOrderQueryHookResult = ReturnType<typeof useListDeliveryOrderQuery>;
export type ListDeliveryOrderLazyQueryHookResult = ReturnType<typeof useListDeliveryOrderLazyQuery>;
export type ListDeliveryOrderQueryResult = Apollo.QueryResult<ListDeliveryOrderQuery, ListDeliveryOrderQueryVariables>;
export const ListDeliveryReturnCommodityDocument = gql`
    query listDeliveryReturnCommodity($listDeliveryReturnCommodityInput: ListDeliveryReturnCommodityInput) {
  listDeliveryReturnCommodity(
    listDeliveryReturnCommodityInput: $listDeliveryReturnCommodityInput
  ) {
    customer {
      customerId
      customerName
      customerType
    }
    saleOrderId
    saleOrderCode
    deliveryDate
    commodities {
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
      returnQuantity {
        unitQuantity
        totalQuantity
      }
      outBoundQuantity {
        unitQuantity
        totalQuantity
      }
      returnFinishedQuantity {
        unitQuantity
        totalQuantity
      }
      returnToBeAuditedQuantity {
        unitQuantity
        totalQuantity
      }
      returnableQuantity {
        unitQuantity
        totalQuantity
      }
      returnThisQuantity {
        unitQuantity
        totalQuantity
      }
      returnThisToBeAuditedQuantity {
        unitQuantity
        totalQuantity
      }
      deliveryOrderItemId
      deliveryReturnItemId
    }
    canBeUpdated
    jointVentureCode
  }
}
    `;

/**
 * __useListDeliveryReturnCommodityQuery__
 *
 * To run a query within a React component, call `useListDeliveryReturnCommodityQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDeliveryReturnCommodityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDeliveryReturnCommodityQuery({
 *   variables: {
 *      listDeliveryReturnCommodityInput: // value for 'listDeliveryReturnCommodityInput'
 *   },
 * });
 */
export function useListDeliveryReturnCommodityQuery(baseOptions?: Apollo.QueryHookOptions<ListDeliveryReturnCommodityQuery, ListDeliveryReturnCommodityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDeliveryReturnCommodityQuery, ListDeliveryReturnCommodityQueryVariables>(ListDeliveryReturnCommodityDocument, options);
      }
export function useListDeliveryReturnCommodityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDeliveryReturnCommodityQuery, ListDeliveryReturnCommodityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDeliveryReturnCommodityQuery, ListDeliveryReturnCommodityQueryVariables>(ListDeliveryReturnCommodityDocument, options);
        }
export type ListDeliveryReturnCommodityQueryHookResult = ReturnType<typeof useListDeliveryReturnCommodityQuery>;
export type ListDeliveryReturnCommodityLazyQueryHookResult = ReturnType<typeof useListDeliveryReturnCommodityLazyQuery>;
export type ListDeliveryReturnCommodityQueryResult = Apollo.QueryResult<ListDeliveryReturnCommodityQuery, ListDeliveryReturnCommodityQueryVariables>;
export const CancelDeliveryReturnDocument = gql`
    mutation cancelDeliveryReturn($returnCancelInput: ReturnCancelInput) {
  cancelDeliveryReturn(returnCancelInput: $returnCancelInput)
}
    `;
export type CancelDeliveryReturnMutationFn = Apollo.MutationFunction<CancelDeliveryReturnMutation, CancelDeliveryReturnMutationVariables>;

/**
 * __useCancelDeliveryReturnMutation__
 *
 * To run a mutation, you first call `useCancelDeliveryReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelDeliveryReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelDeliveryReturnMutation, { data, loading, error }] = useCancelDeliveryReturnMutation({
 *   variables: {
 *      returnCancelInput: // value for 'returnCancelInput'
 *   },
 * });
 */
export function useCancelDeliveryReturnMutation(baseOptions?: Apollo.MutationHookOptions<CancelDeliveryReturnMutation, CancelDeliveryReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelDeliveryReturnMutation, CancelDeliveryReturnMutationVariables>(CancelDeliveryReturnDocument, options);
      }
export type CancelDeliveryReturnMutationHookResult = ReturnType<typeof useCancelDeliveryReturnMutation>;
export type CancelDeliveryReturnMutationResult = Apollo.MutationResult<CancelDeliveryReturnMutation>;
export type CancelDeliveryReturnMutationOptions = Apollo.BaseMutationOptions<CancelDeliveryReturnMutation, CancelDeliveryReturnMutationVariables>;
export const SubmitDeliveryReturnDocument = gql`
    mutation submitDeliveryReturn($returnSubmitInput: ReturnSubmitInput) {
  submitDeliveryReturn(returnSubmitInput: $returnSubmitInput)
}
    `;
export type SubmitDeliveryReturnMutationFn = Apollo.MutationFunction<SubmitDeliveryReturnMutation, SubmitDeliveryReturnMutationVariables>;

/**
 * __useSubmitDeliveryReturnMutation__
 *
 * To run a mutation, you first call `useSubmitDeliveryReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitDeliveryReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitDeliveryReturnMutation, { data, loading, error }] = useSubmitDeliveryReturnMutation({
 *   variables: {
 *      returnSubmitInput: // value for 'returnSubmitInput'
 *   },
 * });
 */
export function useSubmitDeliveryReturnMutation(baseOptions?: Apollo.MutationHookOptions<SubmitDeliveryReturnMutation, SubmitDeliveryReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitDeliveryReturnMutation, SubmitDeliveryReturnMutationVariables>(SubmitDeliveryReturnDocument, options);
      }
export type SubmitDeliveryReturnMutationHookResult = ReturnType<typeof useSubmitDeliveryReturnMutation>;
export type SubmitDeliveryReturnMutationResult = Apollo.MutationResult<SubmitDeliveryReturnMutation>;
export type SubmitDeliveryReturnMutationOptions = Apollo.BaseMutationOptions<SubmitDeliveryReturnMutation, SubmitDeliveryReturnMutationVariables>;
export const UpdateDeliveryReturnDocument = gql`
    mutation updateDeliveryReturn($returnUpdateInput: ReturnCreateInput) {
  updateDeliveryReturn(returnUpdateInput: $returnUpdateInput)
}
    `;
export type UpdateDeliveryReturnMutationFn = Apollo.MutationFunction<UpdateDeliveryReturnMutation, UpdateDeliveryReturnMutationVariables>;

/**
 * __useUpdateDeliveryReturnMutation__
 *
 * To run a mutation, you first call `useUpdateDeliveryReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeliveryReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeliveryReturnMutation, { data, loading, error }] = useUpdateDeliveryReturnMutation({
 *   variables: {
 *      returnUpdateInput: // value for 'returnUpdateInput'
 *   },
 * });
 */
export function useUpdateDeliveryReturnMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeliveryReturnMutation, UpdateDeliveryReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeliveryReturnMutation, UpdateDeliveryReturnMutationVariables>(UpdateDeliveryReturnDocument, options);
      }
export type UpdateDeliveryReturnMutationHookResult = ReturnType<typeof useUpdateDeliveryReturnMutation>;
export type UpdateDeliveryReturnMutationResult = Apollo.MutationResult<UpdateDeliveryReturnMutation>;
export type UpdateDeliveryReturnMutationOptions = Apollo.BaseMutationOptions<UpdateDeliveryReturnMutation, UpdateDeliveryReturnMutationVariables>;