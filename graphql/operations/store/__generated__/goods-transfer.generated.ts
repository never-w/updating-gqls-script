import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageGoodsTransferQueryVariables = SchemaTypes.Exact<{
  pageGoodsTransferInput?: SchemaTypes.InputMaybe<SchemaTypes.PageGoodsTransferInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageGoodsTransferQuery = { pageGoodsTransfer?: { __typename?: 'PageGoodsTransferPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'GoodsTransferPayload', flowId?: string, flowCode?: string, orderStatus?: SchemaTypes.GoodsTransferOrderStatus, orderStatusName?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, latestDescription?: string, sourceWarehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, targetWarehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodities?: Array<{ __typename?: 'GoodsTransferItemPayload', commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, stockBatchInfo?: { __typename?: 'BatchInfo', batchId?: string, batchCode?: string, unitQuantity?: number, totalQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }, transferQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } }> }> } };

export type GetGoodsTransferQueryVariables = SchemaTypes.Exact<{
  transferIDInput?: SchemaTypes.InputMaybe<SchemaTypes.TransferIdInput>;
}>;


export type GetGoodsTransferQuery = { getGoodsTransfer?: { __typename?: 'GoodsTransferPayload', flowId?: string, flowCode?: string, orderStatus?: SchemaTypes.GoodsTransferOrderStatus, orderStatusName?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, flowRemark?: string, latestDescription?: string, sourceWarehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, targetWarehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodities?: Array<{ __typename?: 'GoodsTransferItemPayload', commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, stockBatchInfo?: { __typename?: 'BatchInfo', batchId?: string, batchCode?: string, unitQuantity?: number, totalQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }, transferQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } }> } };

export type GoodsTransferStatusCountQueryVariables = SchemaTypes.Exact<{
  transferStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.GoodsTransferStatusInput>;
}>;


export type GoodsTransferStatusCountQuery = { goodsTransferStatusCount?: { __typename?: 'GoodsTransferStatusCount', unProcessed?: number } };

export type CreateGoodsTransferMutationVariables = SchemaTypes.Exact<{
  goodsTransferInput?: SchemaTypes.InputMaybe<SchemaTypes.GoodsTransferInput>;
}>;


export type CreateGoodsTransferMutation = { createGoodsTransfer?: string };

export type UpdateGoodsTransferMutationVariables = SchemaTypes.Exact<{
  goodsTransferInput?: SchemaTypes.InputMaybe<SchemaTypes.GoodsTransferInput>;
}>;


export type UpdateGoodsTransferMutation = { updateGoodsTransfer?: string };

export type CancelGoodsTransferMutationVariables = SchemaTypes.Exact<{
  transferIDInput?: SchemaTypes.InputMaybe<SchemaTypes.TransferIdInput>;
}>;


export type CancelGoodsTransferMutation = { cancelGoodsTransfer?: boolean };

export type ConfirmGoodsTransferMutationVariables = SchemaTypes.Exact<{
  transferIDInput?: SchemaTypes.InputMaybe<SchemaTypes.TransferIdInput>;
}>;


export type ConfirmGoodsTransferMutation = { confirmGoodsTransfer?: boolean };


export const PageGoodsTransferDocument = gql`
    query pageGoodsTransfer($pageGoodsTransferInput: PageGoodsTransferInput, $page: Page) {
  pageGoodsTransfer(pageGoodsTransferInput: $pageGoodsTransferInput, page: $page) {
    records {
      flowId
      flowCode
      orderStatus
      orderStatusName
      commodityType
      commodityTypeName
      sourceWarehouse {
        warehouseId
        warehouseName
      }
      targetWarehouse {
        warehouseId
        warehouseName
      }
      createUser {
        userId
        userName
        phoneNum
      }
      createTime
      latestDescription
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
        stockBatchInfo {
          batchId
          batchCode
          unitQuantity
          totalQuantity
          customerBelongInfo {
            customerId
            customerName
            customerType
          }
        }
        transferQuantity {
          unitQuantity
          totalQuantity
        }
      }
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageGoodsTransferQuery__
 *
 * To run a query within a React component, call `usePageGoodsTransferQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageGoodsTransferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageGoodsTransferQuery({
 *   variables: {
 *      pageGoodsTransferInput: // value for 'pageGoodsTransferInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageGoodsTransferQuery(baseOptions?: Apollo.QueryHookOptions<PageGoodsTransferQuery, PageGoodsTransferQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageGoodsTransferQuery, PageGoodsTransferQueryVariables>(PageGoodsTransferDocument, options);
      }
export function usePageGoodsTransferLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageGoodsTransferQuery, PageGoodsTransferQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageGoodsTransferQuery, PageGoodsTransferQueryVariables>(PageGoodsTransferDocument, options);
        }
export type PageGoodsTransferQueryHookResult = ReturnType<typeof usePageGoodsTransferQuery>;
export type PageGoodsTransferLazyQueryHookResult = ReturnType<typeof usePageGoodsTransferLazyQuery>;
export type PageGoodsTransferQueryResult = Apollo.QueryResult<PageGoodsTransferQuery, PageGoodsTransferQueryVariables>;
export const GetGoodsTransferDocument = gql`
    query getGoodsTransfer($transferIDInput: TransferIDInput) {
  getGoodsTransfer(transferIDInput: $transferIDInput) {
    flowId
    flowCode
    orderStatus
    orderStatusName
    commodityType
    commodityTypeName
    sourceWarehouse {
      warehouseId
      warehouseName
    }
    targetWarehouse {
      warehouseId
      warehouseName
    }
    createUser {
      userId
      userName
      phoneNum
    }
    createTime
    flowRemark
    latestDescription
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
      stockBatchInfo {
        batchId
        batchCode
        unitQuantity
        totalQuantity
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
      }
      transferQuantity {
        unitQuantity
        totalQuantity
      }
    }
  }
}
    `;

/**
 * __useGetGoodsTransferQuery__
 *
 * To run a query within a React component, call `useGetGoodsTransferQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoodsTransferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGoodsTransferQuery({
 *   variables: {
 *      transferIDInput: // value for 'transferIDInput'
 *   },
 * });
 */
export function useGetGoodsTransferQuery(baseOptions?: Apollo.QueryHookOptions<GetGoodsTransferQuery, GetGoodsTransferQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGoodsTransferQuery, GetGoodsTransferQueryVariables>(GetGoodsTransferDocument, options);
      }
export function useGetGoodsTransferLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGoodsTransferQuery, GetGoodsTransferQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGoodsTransferQuery, GetGoodsTransferQueryVariables>(GetGoodsTransferDocument, options);
        }
export type GetGoodsTransferQueryHookResult = ReturnType<typeof useGetGoodsTransferQuery>;
export type GetGoodsTransferLazyQueryHookResult = ReturnType<typeof useGetGoodsTransferLazyQuery>;
export type GetGoodsTransferQueryResult = Apollo.QueryResult<GetGoodsTransferQuery, GetGoodsTransferQueryVariables>;
export const GoodsTransferStatusCountDocument = gql`
    query goodsTransferStatusCount($transferStatusInput: GoodsTransferStatusInput) {
  goodsTransferStatusCount(transferStatusInput: $transferStatusInput) {
    unProcessed
  }
}
    `;

/**
 * __useGoodsTransferStatusCountQuery__
 *
 * To run a query within a React component, call `useGoodsTransferStatusCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoodsTransferStatusCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoodsTransferStatusCountQuery({
 *   variables: {
 *      transferStatusInput: // value for 'transferStatusInput'
 *   },
 * });
 */
export function useGoodsTransferStatusCountQuery(baseOptions?: Apollo.QueryHookOptions<GoodsTransferStatusCountQuery, GoodsTransferStatusCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoodsTransferStatusCountQuery, GoodsTransferStatusCountQueryVariables>(GoodsTransferStatusCountDocument, options);
      }
export function useGoodsTransferStatusCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoodsTransferStatusCountQuery, GoodsTransferStatusCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoodsTransferStatusCountQuery, GoodsTransferStatusCountQueryVariables>(GoodsTransferStatusCountDocument, options);
        }
export type GoodsTransferStatusCountQueryHookResult = ReturnType<typeof useGoodsTransferStatusCountQuery>;
export type GoodsTransferStatusCountLazyQueryHookResult = ReturnType<typeof useGoodsTransferStatusCountLazyQuery>;
export type GoodsTransferStatusCountQueryResult = Apollo.QueryResult<GoodsTransferStatusCountQuery, GoodsTransferStatusCountQueryVariables>;
export const CreateGoodsTransferDocument = gql`
    mutation createGoodsTransfer($goodsTransferInput: GoodsTransferInput) {
  createGoodsTransfer(goodsTransferInput: $goodsTransferInput)
}
    `;
export type CreateGoodsTransferMutationFn = Apollo.MutationFunction<CreateGoodsTransferMutation, CreateGoodsTransferMutationVariables>;

/**
 * __useCreateGoodsTransferMutation__
 *
 * To run a mutation, you first call `useCreateGoodsTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGoodsTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGoodsTransferMutation, { data, loading, error }] = useCreateGoodsTransferMutation({
 *   variables: {
 *      goodsTransferInput: // value for 'goodsTransferInput'
 *   },
 * });
 */
export function useCreateGoodsTransferMutation(baseOptions?: Apollo.MutationHookOptions<CreateGoodsTransferMutation, CreateGoodsTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGoodsTransferMutation, CreateGoodsTransferMutationVariables>(CreateGoodsTransferDocument, options);
      }
export type CreateGoodsTransferMutationHookResult = ReturnType<typeof useCreateGoodsTransferMutation>;
export type CreateGoodsTransferMutationResult = Apollo.MutationResult<CreateGoodsTransferMutation>;
export type CreateGoodsTransferMutationOptions = Apollo.BaseMutationOptions<CreateGoodsTransferMutation, CreateGoodsTransferMutationVariables>;
export const UpdateGoodsTransferDocument = gql`
    mutation updateGoodsTransfer($goodsTransferInput: GoodsTransferInput) {
  updateGoodsTransfer(goodsTransferInput: $goodsTransferInput)
}
    `;
export type UpdateGoodsTransferMutationFn = Apollo.MutationFunction<UpdateGoodsTransferMutation, UpdateGoodsTransferMutationVariables>;

/**
 * __useUpdateGoodsTransferMutation__
 *
 * To run a mutation, you first call `useUpdateGoodsTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGoodsTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGoodsTransferMutation, { data, loading, error }] = useUpdateGoodsTransferMutation({
 *   variables: {
 *      goodsTransferInput: // value for 'goodsTransferInput'
 *   },
 * });
 */
export function useUpdateGoodsTransferMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGoodsTransferMutation, UpdateGoodsTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGoodsTransferMutation, UpdateGoodsTransferMutationVariables>(UpdateGoodsTransferDocument, options);
      }
export type UpdateGoodsTransferMutationHookResult = ReturnType<typeof useUpdateGoodsTransferMutation>;
export type UpdateGoodsTransferMutationResult = Apollo.MutationResult<UpdateGoodsTransferMutation>;
export type UpdateGoodsTransferMutationOptions = Apollo.BaseMutationOptions<UpdateGoodsTransferMutation, UpdateGoodsTransferMutationVariables>;
export const CancelGoodsTransferDocument = gql`
    mutation cancelGoodsTransfer($transferIDInput: TransferIDInput) {
  cancelGoodsTransfer(transferIDInput: $transferIDInput)
}
    `;
export type CancelGoodsTransferMutationFn = Apollo.MutationFunction<CancelGoodsTransferMutation, CancelGoodsTransferMutationVariables>;

/**
 * __useCancelGoodsTransferMutation__
 *
 * To run a mutation, you first call `useCancelGoodsTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelGoodsTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelGoodsTransferMutation, { data, loading, error }] = useCancelGoodsTransferMutation({
 *   variables: {
 *      transferIDInput: // value for 'transferIDInput'
 *   },
 * });
 */
export function useCancelGoodsTransferMutation(baseOptions?: Apollo.MutationHookOptions<CancelGoodsTransferMutation, CancelGoodsTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelGoodsTransferMutation, CancelGoodsTransferMutationVariables>(CancelGoodsTransferDocument, options);
      }
export type CancelGoodsTransferMutationHookResult = ReturnType<typeof useCancelGoodsTransferMutation>;
export type CancelGoodsTransferMutationResult = Apollo.MutationResult<CancelGoodsTransferMutation>;
export type CancelGoodsTransferMutationOptions = Apollo.BaseMutationOptions<CancelGoodsTransferMutation, CancelGoodsTransferMutationVariables>;
export const ConfirmGoodsTransferDocument = gql`
    mutation confirmGoodsTransfer($transferIDInput: TransferIDInput) {
  confirmGoodsTransfer(transferIDInput: $transferIDInput)
}
    `;
export type ConfirmGoodsTransferMutationFn = Apollo.MutationFunction<ConfirmGoodsTransferMutation, ConfirmGoodsTransferMutationVariables>;

/**
 * __useConfirmGoodsTransferMutation__
 *
 * To run a mutation, you first call `useConfirmGoodsTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmGoodsTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmGoodsTransferMutation, { data, loading, error }] = useConfirmGoodsTransferMutation({
 *   variables: {
 *      transferIDInput: // value for 'transferIDInput'
 *   },
 * });
 */
export function useConfirmGoodsTransferMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmGoodsTransferMutation, ConfirmGoodsTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmGoodsTransferMutation, ConfirmGoodsTransferMutationVariables>(ConfirmGoodsTransferDocument, options);
      }
export type ConfirmGoodsTransferMutationHookResult = ReturnType<typeof useConfirmGoodsTransferMutation>;
export type ConfirmGoodsTransferMutationResult = Apollo.MutationResult<ConfirmGoodsTransferMutation>;
export type ConfirmGoodsTransferMutationOptions = Apollo.BaseMutationOptions<ConfirmGoodsTransferMutation, ConfirmGoodsTransferMutationVariables>;