import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ListSaleReturnCommoditiesQueryVariables = SchemaTypes.Exact<{
  listSaleReturnCommoditiesInput?: SchemaTypes.InputMaybe<SchemaTypes.ListSaleReturnCommoditiesInput>;
}>;


export type ListSaleReturnCommoditiesQuery = { listSaleReturnCommodities?: Array<{ __typename?: 'ListSaleReturnCommoditiesPayload', saleTime?: number, outOrderId?: string, outOrderCode?: string, inOrderId?: string, inOrderType?: SchemaTypes.ReturnType, deliveryRequired?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commodities?: Array<{ __typename?: 'ListSaleReturnCommoditiesItemPayload', outBoundTotalQuantity?: number, outBoundUnitQuantity?: number, saleReturnFinishedTotalQuantity?: number, saleReturnFinishedUnitQuantity?: number, saleReturnableQuantity?: number, saleReturnableUnitQuantity?: number, outOrderItemId?: string, receivedTotalQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> };

export type PageSaleReturnQueryVariables = SchemaTypes.Exact<{
  pageSaleReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.PageSaleReturnInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageSaleReturnQuery = { pageSaleReturn?: { __typename?: 'SaleReturnPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'SaleReturnPayload', inOrderId?: string, inOrderCode?: string, inOrderType?: SchemaTypes.ReturnType, inOrderTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, saleTime?: number, createTime?: number, remark?: string, financialDescription?: string, inOrderStatus?: SchemaTypes.InOrderStatus, inOrderStatusName?: string, latestDescription?: string, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodities?: Array<{ __typename?: 'SaleReturnCommoditiesItemPayload', outOrderId?: string, outOrderCode?: string, commoditySkuId?: number, inOrderId?: string, outOrderItemId?: string, inOrderType?: SchemaTypes.ReturnType, deliveryRequired?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, returnQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type CountSaleReturnQueryVariables = SchemaTypes.Exact<{
  countSaleReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.CountSaleReturnInput>;
}>;


export type CountSaleReturnQuery = { countSaleReturn?: { __typename?: 'CountSaleReturnPayload', toSubmit?: number, toInbound?: number, finished?: number } };

export type GetSaleReturnQueryVariables = SchemaTypes.Exact<{
  getSaleReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.GetSaleReturnInput>;
}>;


export type GetSaleReturnQuery = { getSaleReturn?: { __typename?: 'SaleReturnPayload', countInBounds?: number, inOrderId?: string, inOrderCode?: string, inOrderType?: SchemaTypes.ReturnType, inOrderTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, saleTime?: number, createTime?: number, remark?: string, inOrderStatus?: SchemaTypes.InOrderStatus, inOrderStatusName?: string, latestDescription?: string, financialDescription?: string, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodities?: Array<{ __typename?: 'SaleReturnCommoditiesItemPayload', outOrderId?: string, outOrderCode?: string, commoditySkuId?: number, inOrderId?: string, outOrderItemId?: string, inOrderType?: SchemaTypes.ReturnType, deliveryRequired?: number, inOrderItemId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, returnQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, saleReturnQuantity?: { __typename?: 'SaleReturnQuantity', outBoundTotalQuantity?: number, outBoundUnitQuantity?: number, saleReturnFinishedTotalQuantity?: number, saleReturnFinishedUnitQuantity?: number, saleReturnableQuantity?: number, saleReturnableUnitQuantity?: number, receivedTotalQuantity?: number }, stockBatchInfo?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type CreateSaleReturnMutationVariables = SchemaTypes.Exact<{
  saleReturnInsertInput?: SchemaTypes.InputMaybe<SchemaTypes.SaleReturnInsertInput>;
}>;


export type CreateSaleReturnMutation = { createSaleReturn?: { __typename?: 'SaleReturnInsertPayload', inOrderId?: string } };

export type CreateOriginalReturnMutationVariables = SchemaTypes.Exact<{
  originalReturnInsertInput?: SchemaTypes.InputMaybe<SchemaTypes.OriginalReturnInsertInput>;
}>;


export type CreateOriginalReturnMutation = { createOriginalReturn?: { __typename?: 'SaleReturnInsertPayload', inOrderId?: string } };

export type UpdateSaleReturnMutationVariables = SchemaTypes.Exact<{
  saleReturnUpdateInput?: SchemaTypes.InputMaybe<SchemaTypes.SaleReturnUpdateInput>;
}>;


export type UpdateSaleReturnMutation = { updateSaleReturn?: boolean };

export type UpdateOriginalReturnMutationVariables = SchemaTypes.Exact<{
  originalReturnUpdateInput?: SchemaTypes.InputMaybe<SchemaTypes.OriginalReturnUpdateInput>;
}>;


export type UpdateOriginalReturnMutation = { updateOriginalReturn?: boolean };

export type CancelSaleReturnMutationVariables = SchemaTypes.Exact<{
  saleReturnCancelInput?: SchemaTypes.InputMaybe<SchemaTypes.SaleReturnCancelInput>;
}>;


export type CancelSaleReturnMutation = { cancelSaleReturn?: boolean };

export type SubmitSaleReturnMutationVariables = SchemaTypes.Exact<{
  saleReturnSubmitInput?: SchemaTypes.InputMaybe<SchemaTypes.SaleReturnSubmitInput>;
}>;


export type SubmitSaleReturnMutation = { submitSaleReturn?: boolean };

export type SubmitReturnFinanceMutationVariables = SchemaTypes.Exact<{
  submitReturnFinanceInput?: SchemaTypes.InputMaybe<SchemaTypes.SubmitReturnFinanceInput>;
}>;


export type SubmitReturnFinanceMutation = { submitReturnFinance?: boolean };


export const ListSaleReturnCommoditiesDocument = gql`
    query listSaleReturnCommodities($listSaleReturnCommoditiesInput: ListSaleReturnCommoditiesInput) {
  listSaleReturnCommodities(
    listSaleReturnCommoditiesInput: $listSaleReturnCommoditiesInput
  ) {
    customer {
      customerId
      customerName
      customerType
    }
    saleTime
    outOrderId
    outOrderCode
    inOrderId
    inOrderType
    deliveryRequired
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
      unitType {
        unitId
        unitName
      }
      totalType {
        unitId
        unitName
      }
      outBoundTotalQuantity
      outBoundUnitQuantity
      saleReturnFinishedTotalQuantity
      saleReturnFinishedUnitQuantity
      saleReturnableQuantity
      saleReturnableUnitQuantity
      outOrderItemId
      receivedTotalQuantity
    }
  }
}
    `;

/**
 * __useListSaleReturnCommoditiesQuery__
 *
 * To run a query within a React component, call `useListSaleReturnCommoditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleReturnCommoditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleReturnCommoditiesQuery({
 *   variables: {
 *      listSaleReturnCommoditiesInput: // value for 'listSaleReturnCommoditiesInput'
 *   },
 * });
 */
export function useListSaleReturnCommoditiesQuery(baseOptions?: Apollo.QueryHookOptions<ListSaleReturnCommoditiesQuery, ListSaleReturnCommoditiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSaleReturnCommoditiesQuery, ListSaleReturnCommoditiesQueryVariables>(ListSaleReturnCommoditiesDocument, options);
      }
export function useListSaleReturnCommoditiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSaleReturnCommoditiesQuery, ListSaleReturnCommoditiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSaleReturnCommoditiesQuery, ListSaleReturnCommoditiesQueryVariables>(ListSaleReturnCommoditiesDocument, options);
        }
export type ListSaleReturnCommoditiesQueryHookResult = ReturnType<typeof useListSaleReturnCommoditiesQuery>;
export type ListSaleReturnCommoditiesLazyQueryHookResult = ReturnType<typeof useListSaleReturnCommoditiesLazyQuery>;
export type ListSaleReturnCommoditiesQueryResult = Apollo.QueryResult<ListSaleReturnCommoditiesQuery, ListSaleReturnCommoditiesQueryVariables>;
export const PageSaleReturnDocument = gql`
    query pageSaleReturn($pageSaleReturnInput: PageSaleReturnInput, $page: Page) {
  pageSaleReturn(pageSaleReturnInput: $pageSaleReturnInput, page: $page) {
    records {
      inOrderId
      inOrderCode
      inOrderType
      inOrderTypeName
      commodityTypeId
      commodityTypeName
      warehouse {
        warehouseId
        warehouseName
      }
      saleTime
      customer {
        customerId
        customerName
        customerType
      }
      createTime
      createUser {
        userId
        userName
        phoneNum
      }
      remark
      financialDescription
      inOrderStatus
      inOrderStatusName
      latestDescription
      commodities {
        outOrderId
        outOrderCode
        commoditySkuId
        inOrderId
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
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
        returnQuantity {
          unitQuantity
          totalQuantity
        }
        outOrderItemId
        inOrderType
        deliveryRequired
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
 * __usePageSaleReturnQuery__
 *
 * To run a query within a React component, call `usePageSaleReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSaleReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSaleReturnQuery({
 *   variables: {
 *      pageSaleReturnInput: // value for 'pageSaleReturnInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageSaleReturnQuery(baseOptions?: Apollo.QueryHookOptions<PageSaleReturnQuery, PageSaleReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageSaleReturnQuery, PageSaleReturnQueryVariables>(PageSaleReturnDocument, options);
      }
export function usePageSaleReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageSaleReturnQuery, PageSaleReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageSaleReturnQuery, PageSaleReturnQueryVariables>(PageSaleReturnDocument, options);
        }
export type PageSaleReturnQueryHookResult = ReturnType<typeof usePageSaleReturnQuery>;
export type PageSaleReturnLazyQueryHookResult = ReturnType<typeof usePageSaleReturnLazyQuery>;
export type PageSaleReturnQueryResult = Apollo.QueryResult<PageSaleReturnQuery, PageSaleReturnQueryVariables>;
export const CountSaleReturnDocument = gql`
    query countSaleReturn($countSaleReturnInput: CountSaleReturnInput) {
  countSaleReturn(countSaleReturnInput: $countSaleReturnInput) {
    toSubmit
    toInbound
    finished
  }
}
    `;

/**
 * __useCountSaleReturnQuery__
 *
 * To run a query within a React component, call `useCountSaleReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountSaleReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountSaleReturnQuery({
 *   variables: {
 *      countSaleReturnInput: // value for 'countSaleReturnInput'
 *   },
 * });
 */
export function useCountSaleReturnQuery(baseOptions?: Apollo.QueryHookOptions<CountSaleReturnQuery, CountSaleReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountSaleReturnQuery, CountSaleReturnQueryVariables>(CountSaleReturnDocument, options);
      }
export function useCountSaleReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountSaleReturnQuery, CountSaleReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountSaleReturnQuery, CountSaleReturnQueryVariables>(CountSaleReturnDocument, options);
        }
export type CountSaleReturnQueryHookResult = ReturnType<typeof useCountSaleReturnQuery>;
export type CountSaleReturnLazyQueryHookResult = ReturnType<typeof useCountSaleReturnLazyQuery>;
export type CountSaleReturnQueryResult = Apollo.QueryResult<CountSaleReturnQuery, CountSaleReturnQueryVariables>;
export const GetSaleReturnDocument = gql`
    query getSaleReturn($getSaleReturnInput: GetSaleReturnInput) {
  getSaleReturn(getSaleReturnInput: $getSaleReturnInput) {
    countInBounds
    inOrderId
    inOrderCode
    inOrderType
    inOrderTypeName
    commodityTypeId
    commodityTypeName
    warehouse {
      warehouseId
      warehouseName
    }
    saleTime
    customer {
      customerId
      customerName
      customerType
    }
    createTime
    createUser {
      userId
      userName
      phoneNum
    }
    remark
    inOrderStatus
    inOrderStatusName
    latestDescription
    commodities {
      outOrderId
      outOrderCode
      commoditySkuId
      inOrderId
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
      totalType {
        unitId
        unitName
      }
      unitType {
        unitId
        unitName
      }
      returnQuantity {
        unitQuantity
        totalQuantity
      }
      saleReturnQuantity {
        outBoundTotalQuantity
        outBoundUnitQuantity
        saleReturnFinishedTotalQuantity
        saleReturnFinishedUnitQuantity
        saleReturnableQuantity
        saleReturnableUnitQuantity
        receivedTotalQuantity
      }
      outOrderItemId
      inOrderType
      deliveryRequired
      inOrderItemId
      stockBatchInfo {
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
        batchCode
        batchId
        createTime
        totalQuantity
        unitQuantity
      }
    }
    belongOrg {
      orgId
      orgName
    }
    financialDescription
  }
}
    `;

/**
 * __useGetSaleReturnQuery__
 *
 * To run a query within a React component, call `useGetSaleReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSaleReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSaleReturnQuery({
 *   variables: {
 *      getSaleReturnInput: // value for 'getSaleReturnInput'
 *   },
 * });
 */
export function useGetSaleReturnQuery(baseOptions?: Apollo.QueryHookOptions<GetSaleReturnQuery, GetSaleReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSaleReturnQuery, GetSaleReturnQueryVariables>(GetSaleReturnDocument, options);
      }
export function useGetSaleReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSaleReturnQuery, GetSaleReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSaleReturnQuery, GetSaleReturnQueryVariables>(GetSaleReturnDocument, options);
        }
export type GetSaleReturnQueryHookResult = ReturnType<typeof useGetSaleReturnQuery>;
export type GetSaleReturnLazyQueryHookResult = ReturnType<typeof useGetSaleReturnLazyQuery>;
export type GetSaleReturnQueryResult = Apollo.QueryResult<GetSaleReturnQuery, GetSaleReturnQueryVariables>;
export const CreateSaleReturnDocument = gql`
    mutation createSaleReturn($saleReturnInsertInput: SaleReturnInsertInput) {
  createSaleReturn(saleReturnInsertInput: $saleReturnInsertInput) {
    inOrderId
  }
}
    `;
export type CreateSaleReturnMutationFn = Apollo.MutationFunction<CreateSaleReturnMutation, CreateSaleReturnMutationVariables>;

/**
 * __useCreateSaleReturnMutation__
 *
 * To run a mutation, you first call `useCreateSaleReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSaleReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSaleReturnMutation, { data, loading, error }] = useCreateSaleReturnMutation({
 *   variables: {
 *      saleReturnInsertInput: // value for 'saleReturnInsertInput'
 *   },
 * });
 */
export function useCreateSaleReturnMutation(baseOptions?: Apollo.MutationHookOptions<CreateSaleReturnMutation, CreateSaleReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSaleReturnMutation, CreateSaleReturnMutationVariables>(CreateSaleReturnDocument, options);
      }
export type CreateSaleReturnMutationHookResult = ReturnType<typeof useCreateSaleReturnMutation>;
export type CreateSaleReturnMutationResult = Apollo.MutationResult<CreateSaleReturnMutation>;
export type CreateSaleReturnMutationOptions = Apollo.BaseMutationOptions<CreateSaleReturnMutation, CreateSaleReturnMutationVariables>;
export const CreateOriginalReturnDocument = gql`
    mutation createOriginalReturn($originalReturnInsertInput: OriginalReturnInsertInput) {
  createOriginalReturn(originalReturnInsertInput: $originalReturnInsertInput) {
    inOrderId
  }
}
    `;
export type CreateOriginalReturnMutationFn = Apollo.MutationFunction<CreateOriginalReturnMutation, CreateOriginalReturnMutationVariables>;

/**
 * __useCreateOriginalReturnMutation__
 *
 * To run a mutation, you first call `useCreateOriginalReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOriginalReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOriginalReturnMutation, { data, loading, error }] = useCreateOriginalReturnMutation({
 *   variables: {
 *      originalReturnInsertInput: // value for 'originalReturnInsertInput'
 *   },
 * });
 */
export function useCreateOriginalReturnMutation(baseOptions?: Apollo.MutationHookOptions<CreateOriginalReturnMutation, CreateOriginalReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOriginalReturnMutation, CreateOriginalReturnMutationVariables>(CreateOriginalReturnDocument, options);
      }
export type CreateOriginalReturnMutationHookResult = ReturnType<typeof useCreateOriginalReturnMutation>;
export type CreateOriginalReturnMutationResult = Apollo.MutationResult<CreateOriginalReturnMutation>;
export type CreateOriginalReturnMutationOptions = Apollo.BaseMutationOptions<CreateOriginalReturnMutation, CreateOriginalReturnMutationVariables>;
export const UpdateSaleReturnDocument = gql`
    mutation updateSaleReturn($saleReturnUpdateInput: SaleReturnUpdateInput) {
  updateSaleReturn(saleReturnUpdateInput: $saleReturnUpdateInput)
}
    `;
export type UpdateSaleReturnMutationFn = Apollo.MutationFunction<UpdateSaleReturnMutation, UpdateSaleReturnMutationVariables>;

/**
 * __useUpdateSaleReturnMutation__
 *
 * To run a mutation, you first call `useUpdateSaleReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSaleReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSaleReturnMutation, { data, loading, error }] = useUpdateSaleReturnMutation({
 *   variables: {
 *      saleReturnUpdateInput: // value for 'saleReturnUpdateInput'
 *   },
 * });
 */
export function useUpdateSaleReturnMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSaleReturnMutation, UpdateSaleReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSaleReturnMutation, UpdateSaleReturnMutationVariables>(UpdateSaleReturnDocument, options);
      }
export type UpdateSaleReturnMutationHookResult = ReturnType<typeof useUpdateSaleReturnMutation>;
export type UpdateSaleReturnMutationResult = Apollo.MutationResult<UpdateSaleReturnMutation>;
export type UpdateSaleReturnMutationOptions = Apollo.BaseMutationOptions<UpdateSaleReturnMutation, UpdateSaleReturnMutationVariables>;
export const UpdateOriginalReturnDocument = gql`
    mutation updateOriginalReturn($originalReturnUpdateInput: OriginalReturnUpdateInput) {
  updateOriginalReturn(originalReturnUpdateInput: $originalReturnUpdateInput)
}
    `;
export type UpdateOriginalReturnMutationFn = Apollo.MutationFunction<UpdateOriginalReturnMutation, UpdateOriginalReturnMutationVariables>;

/**
 * __useUpdateOriginalReturnMutation__
 *
 * To run a mutation, you first call `useUpdateOriginalReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOriginalReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOriginalReturnMutation, { data, loading, error }] = useUpdateOriginalReturnMutation({
 *   variables: {
 *      originalReturnUpdateInput: // value for 'originalReturnUpdateInput'
 *   },
 * });
 */
export function useUpdateOriginalReturnMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOriginalReturnMutation, UpdateOriginalReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOriginalReturnMutation, UpdateOriginalReturnMutationVariables>(UpdateOriginalReturnDocument, options);
      }
export type UpdateOriginalReturnMutationHookResult = ReturnType<typeof useUpdateOriginalReturnMutation>;
export type UpdateOriginalReturnMutationResult = Apollo.MutationResult<UpdateOriginalReturnMutation>;
export type UpdateOriginalReturnMutationOptions = Apollo.BaseMutationOptions<UpdateOriginalReturnMutation, UpdateOriginalReturnMutationVariables>;
export const CancelSaleReturnDocument = gql`
    mutation cancelSaleReturn($saleReturnCancelInput: SaleReturnCancelInput) {
  cancelSaleReturn(saleReturnCancelInput: $saleReturnCancelInput)
}
    `;
export type CancelSaleReturnMutationFn = Apollo.MutationFunction<CancelSaleReturnMutation, CancelSaleReturnMutationVariables>;

/**
 * __useCancelSaleReturnMutation__
 *
 * To run a mutation, you first call `useCancelSaleReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelSaleReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelSaleReturnMutation, { data, loading, error }] = useCancelSaleReturnMutation({
 *   variables: {
 *      saleReturnCancelInput: // value for 'saleReturnCancelInput'
 *   },
 * });
 */
export function useCancelSaleReturnMutation(baseOptions?: Apollo.MutationHookOptions<CancelSaleReturnMutation, CancelSaleReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelSaleReturnMutation, CancelSaleReturnMutationVariables>(CancelSaleReturnDocument, options);
      }
export type CancelSaleReturnMutationHookResult = ReturnType<typeof useCancelSaleReturnMutation>;
export type CancelSaleReturnMutationResult = Apollo.MutationResult<CancelSaleReturnMutation>;
export type CancelSaleReturnMutationOptions = Apollo.BaseMutationOptions<CancelSaleReturnMutation, CancelSaleReturnMutationVariables>;
export const SubmitSaleReturnDocument = gql`
    mutation submitSaleReturn($saleReturnSubmitInput: SaleReturnSubmitInput) {
  submitSaleReturn(saleReturnSubmitInput: $saleReturnSubmitInput)
}
    `;
export type SubmitSaleReturnMutationFn = Apollo.MutationFunction<SubmitSaleReturnMutation, SubmitSaleReturnMutationVariables>;

/**
 * __useSubmitSaleReturnMutation__
 *
 * To run a mutation, you first call `useSubmitSaleReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitSaleReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitSaleReturnMutation, { data, loading, error }] = useSubmitSaleReturnMutation({
 *   variables: {
 *      saleReturnSubmitInput: // value for 'saleReturnSubmitInput'
 *   },
 * });
 */
export function useSubmitSaleReturnMutation(baseOptions?: Apollo.MutationHookOptions<SubmitSaleReturnMutation, SubmitSaleReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitSaleReturnMutation, SubmitSaleReturnMutationVariables>(SubmitSaleReturnDocument, options);
      }
export type SubmitSaleReturnMutationHookResult = ReturnType<typeof useSubmitSaleReturnMutation>;
export type SubmitSaleReturnMutationResult = Apollo.MutationResult<SubmitSaleReturnMutation>;
export type SubmitSaleReturnMutationOptions = Apollo.BaseMutationOptions<SubmitSaleReturnMutation, SubmitSaleReturnMutationVariables>;
export const SubmitReturnFinanceDocument = gql`
    mutation submitReturnFinance($submitReturnFinanceInput: SubmitReturnFinanceInput) {
  submitReturnFinance(submitReturnFinanceInput: $submitReturnFinanceInput)
}
    `;
export type SubmitReturnFinanceMutationFn = Apollo.MutationFunction<SubmitReturnFinanceMutation, SubmitReturnFinanceMutationVariables>;

/**
 * __useSubmitReturnFinanceMutation__
 *
 * To run a mutation, you first call `useSubmitReturnFinanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitReturnFinanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitReturnFinanceMutation, { data, loading, error }] = useSubmitReturnFinanceMutation({
 *   variables: {
 *      submitReturnFinanceInput: // value for 'submitReturnFinanceInput'
 *   },
 * });
 */
export function useSubmitReturnFinanceMutation(baseOptions?: Apollo.MutationHookOptions<SubmitReturnFinanceMutation, SubmitReturnFinanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitReturnFinanceMutation, SubmitReturnFinanceMutationVariables>(SubmitReturnFinanceDocument, options);
      }
export type SubmitReturnFinanceMutationHookResult = ReturnType<typeof useSubmitReturnFinanceMutation>;
export type SubmitReturnFinanceMutationResult = Apollo.MutationResult<SubmitReturnFinanceMutation>;
export type SubmitReturnFinanceMutationOptions = Apollo.BaseMutationOptions<SubmitReturnFinanceMutation, SubmitReturnFinanceMutationVariables>;