import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ListTransferOptionsQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListTransferOptionsQuery = { listTransferOptions?: Array<{ __typename?: 'TransferOptionsPayload', label?: string, value?: number }> };

export type ListTransferOrgListQueryVariables = SchemaTypes.Exact<{
  listTransferOrgListInput?: SchemaTypes.InputMaybe<SchemaTypes.ListTransferOrgListInput>;
}>;


export type ListTransferOrgListQuery = { listTransferOrgList?: Array<{ __typename?: 'ListTransferOrgListPayload', value?: number, label?: string }> };

export type GetTransferOutOrderStatusQueryVariables = SchemaTypes.Exact<{
  getTransferOutOrderStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.GetTransferOutOrderStatusInput>;
}>;


export type GetTransferOutOrderStatusQuery = { getTransferOutOrderStatus?: { __typename?: 'GetTransferOutOrderStatusPayload', toSubmit?: number, toProcess?: number } };

export type ListTransferOutOrderQueryVariables = SchemaTypes.Exact<{
  listTransferOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.ListTransferOrderInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type ListTransferOutOrderQuery = { listTransferOutOrder?: { __typename?: 'ListTransferOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'TransferOrderPayload', flowId?: string, flowCode?: string, flowType?: number, flowTypeName?: string, transferType?: number, commodityType?: number, commodityTypeName?: string, sourceWarehouseId?: string, sourceWarehouseName?: string, sourceBelongId?: number, sourceBelongName?: string, targetWarehouseId?: string, targetWarehouseName?: string, targetBelongId?: number, targetBelongName?: string, flowRemark?: string, flowStatus?: number, flowStatusName?: string, createTime?: number, createBy?: number, createUserName?: string, createUserPhone?: string, updateBy?: number, updateUserName?: string, updateTime?: number, totalGoodsFee?: number, totalTransportFees?: number, billId?: string, billStatus?: number, billStatusName?: string, reason?: string, direction?: number, sourceAppId?: number, targetAppId?: number, transferCommodityItemBills?: Array<{ __typename?: 'TransferCommodityItemBillPayload', itemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, priceType?: number, priceTypeName?: string, batchId?: string, batchCode?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, stockUnitQuantity?: number, stockTotalQuantity?: number, customerId?: number, customerName?: string, conversion?: number, amount?: number, skuDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, transferOtherItemBills?: Array<{ __typename?: 'TransferOtherItemBillPayload', attr?: number, billType?: number, billTypeText?: string, payMode?: number, payModeText?: string, supplierId?: number, supplierName?: string, amount?: number, brand?: string, phone?: string, remark?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, billFreightItemId?: string }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, targetBelongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type CreateTransferOutOrderMutationVariables = SchemaTypes.Exact<{
  createTransferOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateTransferOrderInput>;
}>;


export type CreateTransferOutOrderMutation = { createTransferOutOrder?: string };

export type UpdateTransferOutOrderMutationVariables = SchemaTypes.Exact<{
  updateTransferCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateTransferCommodityInput>;
}>;


export type UpdateTransferOutOrderMutation = { updateTransferOutOrder?: string };

export type GetTransferOutOrderQueryVariables = SchemaTypes.Exact<{
  flowId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type GetTransferOutOrderQuery = { getTransferOutOrder?: { __typename?: 'TransferOrderPayload', flowId?: string, flowCode?: string, flowType?: number, flowTypeName?: string, transferType?: number, commodityType?: number, commodityTypeName?: string, sourceWarehouseId?: string, sourceWarehouseName?: string, sourceBelongId?: number, sourceBelongName?: string, targetWarehouseId?: string, targetWarehouseName?: string, targetBelongId?: number, targetBelongName?: string, flowRemark?: string, flowStatus?: number, flowStatusName?: string, createTime?: number, createBy?: number, createUserName?: string, createUserPhone?: string, updateBy?: number, updateUserName?: string, updateTime?: number, totalGoodsFee?: number, totalTransportFees?: number, billId?: string, billStatus?: number, billStatusName?: string, reason?: string, direction?: number, sourceAppId?: number, targetAppId?: number, transferCommodityItemBills?: Array<{ __typename?: 'TransferCommodityItemBillPayload', itemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, priceType?: number, priceTypeName?: string, batchId?: string, batchCode?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, stockUnitQuantity?: number, stockTotalQuantity?: number, customerId?: number, customerName?: string, conversion?: number, amount?: number, skuDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, transferOtherItemBills?: Array<{ __typename?: 'TransferOtherItemBillPayload', attr?: number, billType?: number, billTypeText?: string, payMode?: number, payModeText?: string, supplierId?: number, supplierName?: string, amount?: number, brand?: string, phone?: string, remark?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, billFreightItemId?: string }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, targetBelongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type CountTransferOutStockRecordQueryVariables = SchemaTypes.Exact<{
  queryOutRecordListInput?: SchemaTypes.InputMaybe<SchemaTypes.QueryOutRecordListInput>;
}>;


export type CountTransferOutStockRecordQuery = { countTransferOutStockRecord?: number };

export type OutStockRecordDetailQueryVariables = SchemaTypes.Exact<{
  queryOutRecordListInput?: SchemaTypes.InputMaybe<SchemaTypes.QueryOutRecordListInput>;
}>;


export type OutStockRecordDetailQuery = { outStockRecordDetail?: { __typename?: 'OutStockRecordListPayload', outStockRecords?: Array<{ __typename?: 'OutStockRecordsPayload', recordCode?: string, userName?: string, createTime?: number, totalCommodityAmount?: number, commodityType?: number, commoditiesList?: Array<{ __typename?: 'OutStockRecordCommodityPayload', commoditySkuId?: number, stockBatchId?: string, stockBatchCode?: string, unitQuantity?: number, unitType?: number, totalQuantity?: number, totalType?: number, unitPrice?: number, unitPriceType?: number, subtotalAmount?: number, commodityName?: string, commoditySpecOptionName?: Array<string>, unitTypeName?: string, totalTypeName?: string, unitPriceTypeName?: string }> }>, outStockOrderWaitCommodities?: Array<{ __typename?: 'OutStockOrderWaitCommodityPayload', commoditySkuId?: number, unitQuantity?: number, unitTypeName?: string, unitPriceTypeName?: string, totalQuantity?: number, totalTypeName?: string, unitPrice?: number, commodityName?: string, commoditySpecOptionName?: Array<string>, conversion?: number }> } };

export type GetTransferInOrderStatusQueryVariables = SchemaTypes.Exact<{
  getTransferInOrderStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.GetTransferInOrderStatusInput>;
}>;


export type GetTransferInOrderStatusQuery = { getTransferInOrderStatus?: { __typename?: 'GetTransferInOrderStatusPayload', toSubmit?: number, toProcess?: number } };

export type ListTransferInOrderQueryVariables = SchemaTypes.Exact<{
  listTransferOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.ListTransferOrderInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type ListTransferInOrderQuery = { listTransferInOrder?: { __typename?: 'ListTransferOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'TransferOrderPayload', flowId?: string, flowCode?: string, flowType?: number, flowTypeName?: string, transferType?: number, commodityType?: number, commodityTypeName?: string, sourceWarehouseId?: string, sourceWarehouseName?: string, sourceBelongId?: number, sourceBelongName?: string, targetWarehouseId?: string, targetWarehouseName?: string, targetBelongId?: number, targetBelongName?: string, flowRemark?: string, flowStatus?: number, flowStatusName?: string, createTime?: number, createBy?: number, createUserName?: string, createUserPhone?: string, updateBy?: number, updateUserName?: string, updateTime?: number, totalGoodsFee?: number, totalTransportFees?: number, billId?: string, billStatus?: number, billStatusName?: string, reason?: string, direction?: number, sourceAppId?: number, targetAppId?: number, transferCommodityItemBills?: Array<{ __typename?: 'TransferCommodityItemBillPayload', itemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, priceType?: number, priceTypeName?: string, batchId?: string, batchCode?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, stockUnitQuantity?: number, stockTotalQuantity?: number, customerId?: number, customerName?: string, conversion?: number, amount?: number, skuDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, transferOtherItemBills?: Array<{ __typename?: 'TransferOtherItemBillPayload', attr?: number, billType?: number, billTypeText?: string, payMode?: number, payModeText?: string, supplierId?: number, supplierName?: string, amount?: number, brand?: string, phone?: string, remark?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, billFreightItemId?: string }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type GetTransferInOrderQueryVariables = SchemaTypes.Exact<{
  flowId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type GetTransferInOrderQuery = { getTransferInOrder?: { __typename?: 'TransferOrderPayload', flowId?: string, flowCode?: string, flowType?: number, flowTypeName?: string, transferType?: number, commodityType?: number, commodityTypeName?: string, sourceWarehouseId?: string, sourceWarehouseName?: string, sourceBelongId?: number, sourceBelongName?: string, targetWarehouseId?: string, targetWarehouseName?: string, targetBelongId?: number, targetBelongName?: string, flowRemark?: string, flowStatus?: number, flowStatusName?: string, createTime?: number, createBy?: number, createUserName?: string, createUserPhone?: string, updateBy?: number, updateUserName?: string, updateTime?: number, totalGoodsFee?: number, totalTransportFees?: number, billId?: string, billStatus?: number, billStatusName?: string, reason?: string, direction?: number, sourceAppId?: number, targetAppId?: number, transferCommodityItemBills?: Array<{ __typename?: 'TransferCommodityItemBillPayload', itemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, priceType?: number, priceTypeName?: string, batchId?: string, batchCode?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, stockUnitQuantity?: number, stockTotalQuantity?: number, customerId?: number, customerName?: string, conversion?: number, amount?: number, skuDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, transferOtherItemBills?: Array<{ __typename?: 'TransferOtherItemBillPayload', attr?: number, billType?: number, billTypeText?: string, payMode?: number, payModeText?: string, supplierId?: number, supplierName?: string, amount?: number, brand?: string, phone?: string, remark?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, billFreightItemId?: string }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type CountTransferInStockRecordQueryVariables = SchemaTypes.Exact<{
  queryRecordListInput?: SchemaTypes.InputMaybe<SchemaTypes.QueryRecordListInput>;
}>;


export type CountTransferInStockRecordQuery = { countTransferInStockRecord?: number };


export const ListTransferOptionsDocument = gql`
    query listTransferOptions {
  listTransferOptions {
    label
    value
  }
}
    `;

/**
 * __useListTransferOptionsQuery__
 *
 * To run a query within a React component, call `useListTransferOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTransferOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTransferOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListTransferOptionsQuery(baseOptions?: Apollo.QueryHookOptions<ListTransferOptionsQuery, ListTransferOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTransferOptionsQuery, ListTransferOptionsQueryVariables>(ListTransferOptionsDocument, options);
      }
export function useListTransferOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTransferOptionsQuery, ListTransferOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTransferOptionsQuery, ListTransferOptionsQueryVariables>(ListTransferOptionsDocument, options);
        }
export type ListTransferOptionsQueryHookResult = ReturnType<typeof useListTransferOptionsQuery>;
export type ListTransferOptionsLazyQueryHookResult = ReturnType<typeof useListTransferOptionsLazyQuery>;
export type ListTransferOptionsQueryResult = Apollo.QueryResult<ListTransferOptionsQuery, ListTransferOptionsQueryVariables>;
export const ListTransferOrgListDocument = gql`
    query listTransferOrgList($listTransferOrgListInput: ListTransferOrgListInput) {
  listTransferOrgList(listTransferOrgListInput: $listTransferOrgListInput) {
    value: id
    label: orgName
  }
}
    `;

/**
 * __useListTransferOrgListQuery__
 *
 * To run a query within a React component, call `useListTransferOrgListQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTransferOrgListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTransferOrgListQuery({
 *   variables: {
 *      listTransferOrgListInput: // value for 'listTransferOrgListInput'
 *   },
 * });
 */
export function useListTransferOrgListQuery(baseOptions?: Apollo.QueryHookOptions<ListTransferOrgListQuery, ListTransferOrgListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTransferOrgListQuery, ListTransferOrgListQueryVariables>(ListTransferOrgListDocument, options);
      }
export function useListTransferOrgListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTransferOrgListQuery, ListTransferOrgListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTransferOrgListQuery, ListTransferOrgListQueryVariables>(ListTransferOrgListDocument, options);
        }
export type ListTransferOrgListQueryHookResult = ReturnType<typeof useListTransferOrgListQuery>;
export type ListTransferOrgListLazyQueryHookResult = ReturnType<typeof useListTransferOrgListLazyQuery>;
export type ListTransferOrgListQueryResult = Apollo.QueryResult<ListTransferOrgListQuery, ListTransferOrgListQueryVariables>;
export const GetTransferOutOrderStatusDocument = gql`
    query getTransferOutOrderStatus($getTransferOutOrderStatusInput: GetTransferOutOrderStatusInput) {
  getTransferOutOrderStatus(
    getTransferOutOrderStatusInput: $getTransferOutOrderStatusInput
  ) {
    toSubmit
    toProcess
  }
}
    `;

/**
 * __useGetTransferOutOrderStatusQuery__
 *
 * To run a query within a React component, call `useGetTransferOutOrderStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransferOutOrderStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransferOutOrderStatusQuery({
 *   variables: {
 *      getTransferOutOrderStatusInput: // value for 'getTransferOutOrderStatusInput'
 *   },
 * });
 */
export function useGetTransferOutOrderStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetTransferOutOrderStatusQuery, GetTransferOutOrderStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransferOutOrderStatusQuery, GetTransferOutOrderStatusQueryVariables>(GetTransferOutOrderStatusDocument, options);
      }
export function useGetTransferOutOrderStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransferOutOrderStatusQuery, GetTransferOutOrderStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransferOutOrderStatusQuery, GetTransferOutOrderStatusQueryVariables>(GetTransferOutOrderStatusDocument, options);
        }
export type GetTransferOutOrderStatusQueryHookResult = ReturnType<typeof useGetTransferOutOrderStatusQuery>;
export type GetTransferOutOrderStatusLazyQueryHookResult = ReturnType<typeof useGetTransferOutOrderStatusLazyQuery>;
export type GetTransferOutOrderStatusQueryResult = Apollo.QueryResult<GetTransferOutOrderStatusQuery, GetTransferOutOrderStatusQueryVariables>;
export const ListTransferOutOrderDocument = gql`
    query listTransferOutOrder($listTransferOrderInput: ListTransferOrderInput, $page: Page) {
  listTransferOutOrder(
    listTransferOrderInput: $listTransferOrderInput
    page: $page
  ) {
    records {
      flowId
      flowCode
      flowType
      flowTypeName
      transferType
      commodityType
      commodityTypeName
      sourceWarehouseId
      sourceWarehouseName
      sourceBelongId
      sourceBelongName
      targetWarehouseId
      targetWarehouseName
      targetBelongId
      targetBelongName
      flowRemark
      flowStatus
      flowStatusName
      createTime
      createBy
      createUserName
      createUserPhone
      updateBy
      updateUserName
      updateTime
      transferCommodityItemBills {
        itemId
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
        unitPrice
        priceType
        priceTypeName
        batchId
        batchCode
        createTime
        createBy
        updateTime
        updateBy
        stockUnitQuantity
        stockTotalQuantity
        customerId
        customerName
        conversion
        amount
        skuDetail {
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
      }
      transferOtherItemBills {
        attr
        billType
        billTypeText
        payMode
        payModeText
        supplierId
        supplierName
        amount
        brand
        phone
        remark
        createTime
        createBy
        updateTime
        updateBy
        billFreightItemId
      }
      totalGoodsFee
      totalTransportFees
      billId
      billStatus
      billStatusName
      reason
      direction
      sourceAppId
      targetAppId
      belongOrg {
        orgId
        orgName
      }
      targetBelongOrg {
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
 * __useListTransferOutOrderQuery__
 *
 * To run a query within a React component, call `useListTransferOutOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTransferOutOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTransferOutOrderQuery({
 *   variables: {
 *      listTransferOrderInput: // value for 'listTransferOrderInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useListTransferOutOrderQuery(baseOptions?: Apollo.QueryHookOptions<ListTransferOutOrderQuery, ListTransferOutOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTransferOutOrderQuery, ListTransferOutOrderQueryVariables>(ListTransferOutOrderDocument, options);
      }
export function useListTransferOutOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTransferOutOrderQuery, ListTransferOutOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTransferOutOrderQuery, ListTransferOutOrderQueryVariables>(ListTransferOutOrderDocument, options);
        }
export type ListTransferOutOrderQueryHookResult = ReturnType<typeof useListTransferOutOrderQuery>;
export type ListTransferOutOrderLazyQueryHookResult = ReturnType<typeof useListTransferOutOrderLazyQuery>;
export type ListTransferOutOrderQueryResult = Apollo.QueryResult<ListTransferOutOrderQuery, ListTransferOutOrderQueryVariables>;
export const CreateTransferOutOrderDocument = gql`
    mutation createTransferOutOrder($createTransferOrderInput: CreateTransferOrderInput) {
  createTransferOutOrder(createTransferOrderInput: $createTransferOrderInput)
}
    `;
export type CreateTransferOutOrderMutationFn = Apollo.MutationFunction<CreateTransferOutOrderMutation, CreateTransferOutOrderMutationVariables>;

/**
 * __useCreateTransferOutOrderMutation__
 *
 * To run a mutation, you first call `useCreateTransferOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransferOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransferOutOrderMutation, { data, loading, error }] = useCreateTransferOutOrderMutation({
 *   variables: {
 *      createTransferOrderInput: // value for 'createTransferOrderInput'
 *   },
 * });
 */
export function useCreateTransferOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransferOutOrderMutation, CreateTransferOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTransferOutOrderMutation, CreateTransferOutOrderMutationVariables>(CreateTransferOutOrderDocument, options);
      }
export type CreateTransferOutOrderMutationHookResult = ReturnType<typeof useCreateTransferOutOrderMutation>;
export type CreateTransferOutOrderMutationResult = Apollo.MutationResult<CreateTransferOutOrderMutation>;
export type CreateTransferOutOrderMutationOptions = Apollo.BaseMutationOptions<CreateTransferOutOrderMutation, CreateTransferOutOrderMutationVariables>;
export const UpdateTransferOutOrderDocument = gql`
    mutation updateTransferOutOrder($updateTransferCommodityInput: UpdateTransferCommodityInput) {
  updateTransferOutOrder(
    updateTransferCommodityInput: $updateTransferCommodityInput
  )
}
    `;
export type UpdateTransferOutOrderMutationFn = Apollo.MutationFunction<UpdateTransferOutOrderMutation, UpdateTransferOutOrderMutationVariables>;

/**
 * __useUpdateTransferOutOrderMutation__
 *
 * To run a mutation, you first call `useUpdateTransferOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransferOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransferOutOrderMutation, { data, loading, error }] = useUpdateTransferOutOrderMutation({
 *   variables: {
 *      updateTransferCommodityInput: // value for 'updateTransferCommodityInput'
 *   },
 * });
 */
export function useUpdateTransferOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransferOutOrderMutation, UpdateTransferOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransferOutOrderMutation, UpdateTransferOutOrderMutationVariables>(UpdateTransferOutOrderDocument, options);
      }
export type UpdateTransferOutOrderMutationHookResult = ReturnType<typeof useUpdateTransferOutOrderMutation>;
export type UpdateTransferOutOrderMutationResult = Apollo.MutationResult<UpdateTransferOutOrderMutation>;
export type UpdateTransferOutOrderMutationOptions = Apollo.BaseMutationOptions<UpdateTransferOutOrderMutation, UpdateTransferOutOrderMutationVariables>;
export const GetTransferOutOrderDocument = gql`
    query getTransferOutOrder($flowId: ID) {
  getTransferOutOrder(flowId: $flowId) {
    flowId
    flowCode
    flowType
    flowTypeName
    transferType
    commodityType
    commodityTypeName
    sourceWarehouseId
    sourceWarehouseName
    sourceBelongId
    sourceBelongName
    targetWarehouseId
    targetWarehouseName
    targetBelongId
    targetBelongName
    flowRemark
    flowStatus
    flowStatusName
    createTime
    createBy
    createUserName
    createUserPhone
    updateBy
    updateUserName
    updateTime
    transferCommodityItemBills {
      itemId
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
      unitPrice
      priceType
      priceTypeName
      batchId
      batchCode
      createTime
      createBy
      updateTime
      updateBy
      stockUnitQuantity
      stockTotalQuantity
      customerId
      customerName
      conversion
      amount
      skuDetail {
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
    }
    transferOtherItemBills {
      attr
      billType
      billTypeText
      payMode
      payModeText
      supplierId
      supplierName
      amount
      brand
      phone
      remark
      createTime
      createBy
      updateTime
      updateBy
      billFreightItemId
    }
    totalGoodsFee
    totalTransportFees
    billId
    billStatus
    billStatusName
    reason
    direction
    sourceAppId
    targetAppId
    belongOrg {
      orgId
      orgName
    }
    targetBelongOrg {
      orgId
      orgName
    }
  }
}
    `;

/**
 * __useGetTransferOutOrderQuery__
 *
 * To run a query within a React component, call `useGetTransferOutOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransferOutOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransferOutOrderQuery({
 *   variables: {
 *      flowId: // value for 'flowId'
 *   },
 * });
 */
export function useGetTransferOutOrderQuery(baseOptions?: Apollo.QueryHookOptions<GetTransferOutOrderQuery, GetTransferOutOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransferOutOrderQuery, GetTransferOutOrderQueryVariables>(GetTransferOutOrderDocument, options);
      }
export function useGetTransferOutOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransferOutOrderQuery, GetTransferOutOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransferOutOrderQuery, GetTransferOutOrderQueryVariables>(GetTransferOutOrderDocument, options);
        }
export type GetTransferOutOrderQueryHookResult = ReturnType<typeof useGetTransferOutOrderQuery>;
export type GetTransferOutOrderLazyQueryHookResult = ReturnType<typeof useGetTransferOutOrderLazyQuery>;
export type GetTransferOutOrderQueryResult = Apollo.QueryResult<GetTransferOutOrderQuery, GetTransferOutOrderQueryVariables>;
export const CountTransferOutStockRecordDocument = gql`
    query countTransferOutStockRecord($queryOutRecordListInput: QueryOutRecordListInput) {
  countTransferOutStockRecord(queryOutRecordListInput: $queryOutRecordListInput)
}
    `;

/**
 * __useCountTransferOutStockRecordQuery__
 *
 * To run a query within a React component, call `useCountTransferOutStockRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountTransferOutStockRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountTransferOutStockRecordQuery({
 *   variables: {
 *      queryOutRecordListInput: // value for 'queryOutRecordListInput'
 *   },
 * });
 */
export function useCountTransferOutStockRecordQuery(baseOptions?: Apollo.QueryHookOptions<CountTransferOutStockRecordQuery, CountTransferOutStockRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountTransferOutStockRecordQuery, CountTransferOutStockRecordQueryVariables>(CountTransferOutStockRecordDocument, options);
      }
export function useCountTransferOutStockRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountTransferOutStockRecordQuery, CountTransferOutStockRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountTransferOutStockRecordQuery, CountTransferOutStockRecordQueryVariables>(CountTransferOutStockRecordDocument, options);
        }
export type CountTransferOutStockRecordQueryHookResult = ReturnType<typeof useCountTransferOutStockRecordQuery>;
export type CountTransferOutStockRecordLazyQueryHookResult = ReturnType<typeof useCountTransferOutStockRecordLazyQuery>;
export type CountTransferOutStockRecordQueryResult = Apollo.QueryResult<CountTransferOutStockRecordQuery, CountTransferOutStockRecordQueryVariables>;
export const OutStockRecordDetailDocument = gql`
    query outStockRecordDetail($queryOutRecordListInput: QueryOutRecordListInput) {
  outStockRecordDetail(queryOutRecordListInput: $queryOutRecordListInput) {
    outStockRecords {
      recordCode
      userName
      createTime
      totalCommodityAmount
      commodityType
      commoditiesList {
        commoditySkuId
        stockBatchId
        stockBatchCode
        unitQuantity
        unitType
        totalQuantity
        totalType
        unitPrice
        unitPriceType
        subtotalAmount
        commodityName
        commoditySpecOptionName
        unitTypeName
        totalTypeName
        unitPriceTypeName
      }
    }
    outStockOrderWaitCommodities {
      commoditySkuId
      unitQuantity
      unitTypeName
      unitPriceTypeName
      totalQuantity
      totalTypeName
      unitPrice
      unitPriceTypeName
      commodityName
      commoditySpecOptionName
      conversion
    }
  }
}
    `;

/**
 * __useOutStockRecordDetailQuery__
 *
 * To run a query within a React component, call `useOutStockRecordDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useOutStockRecordDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOutStockRecordDetailQuery({
 *   variables: {
 *      queryOutRecordListInput: // value for 'queryOutRecordListInput'
 *   },
 * });
 */
export function useOutStockRecordDetailQuery(baseOptions?: Apollo.QueryHookOptions<OutStockRecordDetailQuery, OutStockRecordDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OutStockRecordDetailQuery, OutStockRecordDetailQueryVariables>(OutStockRecordDetailDocument, options);
      }
export function useOutStockRecordDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OutStockRecordDetailQuery, OutStockRecordDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OutStockRecordDetailQuery, OutStockRecordDetailQueryVariables>(OutStockRecordDetailDocument, options);
        }
export type OutStockRecordDetailQueryHookResult = ReturnType<typeof useOutStockRecordDetailQuery>;
export type OutStockRecordDetailLazyQueryHookResult = ReturnType<typeof useOutStockRecordDetailLazyQuery>;
export type OutStockRecordDetailQueryResult = Apollo.QueryResult<OutStockRecordDetailQuery, OutStockRecordDetailQueryVariables>;
export const GetTransferInOrderStatusDocument = gql`
    query getTransferInOrderStatus($getTransferInOrderStatusInput: GetTransferInOrderStatusInput) {
  getTransferInOrderStatus(
    getTransferInOrderStatusInput: $getTransferInOrderStatusInput
  ) {
    toSubmit
    toProcess
  }
}
    `;

/**
 * __useGetTransferInOrderStatusQuery__
 *
 * To run a query within a React component, call `useGetTransferInOrderStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransferInOrderStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransferInOrderStatusQuery({
 *   variables: {
 *      getTransferInOrderStatusInput: // value for 'getTransferInOrderStatusInput'
 *   },
 * });
 */
export function useGetTransferInOrderStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetTransferInOrderStatusQuery, GetTransferInOrderStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransferInOrderStatusQuery, GetTransferInOrderStatusQueryVariables>(GetTransferInOrderStatusDocument, options);
      }
export function useGetTransferInOrderStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransferInOrderStatusQuery, GetTransferInOrderStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransferInOrderStatusQuery, GetTransferInOrderStatusQueryVariables>(GetTransferInOrderStatusDocument, options);
        }
export type GetTransferInOrderStatusQueryHookResult = ReturnType<typeof useGetTransferInOrderStatusQuery>;
export type GetTransferInOrderStatusLazyQueryHookResult = ReturnType<typeof useGetTransferInOrderStatusLazyQuery>;
export type GetTransferInOrderStatusQueryResult = Apollo.QueryResult<GetTransferInOrderStatusQuery, GetTransferInOrderStatusQueryVariables>;
export const ListTransferInOrderDocument = gql`
    query listTransferInOrder($listTransferOrderInput: ListTransferOrderInput, $page: Page) {
  listTransferInOrder(
    listTransferOrderInput: $listTransferOrderInput
    page: $page
  ) {
    records {
      flowId
      flowCode
      flowType
      flowTypeName
      transferType
      commodityType
      commodityTypeName
      sourceWarehouseId
      sourceWarehouseName
      sourceBelongId
      sourceBelongName
      targetWarehouseId
      targetWarehouseName
      targetBelongId
      targetBelongName
      flowRemark
      flowStatus
      flowStatusName
      createTime
      createBy
      createUserName
      createUserPhone
      updateBy
      updateUserName
      updateTime
      transferCommodityItemBills {
        itemId
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
        unitPrice
        priceType
        priceTypeName
        batchId
        batchCode
        createTime
        createBy
        updateTime
        updateBy
        stockUnitQuantity
        stockTotalQuantity
        customerId
        customerName
        conversion
        amount
        skuDetail {
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
      }
      transferOtherItemBills {
        attr
        billType
        billTypeText
        payMode
        payModeText
        supplierId
        supplierName
        amount
        brand
        phone
        remark
        createTime
        createBy
        updateTime
        updateBy
        billFreightItemId
      }
      totalGoodsFee
      totalTransportFees
      billId
      billStatus
      billStatusName
      reason
      direction
      sourceAppId
      targetAppId
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
 * __useListTransferInOrderQuery__
 *
 * To run a query within a React component, call `useListTransferInOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTransferInOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTransferInOrderQuery({
 *   variables: {
 *      listTransferOrderInput: // value for 'listTransferOrderInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useListTransferInOrderQuery(baseOptions?: Apollo.QueryHookOptions<ListTransferInOrderQuery, ListTransferInOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTransferInOrderQuery, ListTransferInOrderQueryVariables>(ListTransferInOrderDocument, options);
      }
export function useListTransferInOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTransferInOrderQuery, ListTransferInOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTransferInOrderQuery, ListTransferInOrderQueryVariables>(ListTransferInOrderDocument, options);
        }
export type ListTransferInOrderQueryHookResult = ReturnType<typeof useListTransferInOrderQuery>;
export type ListTransferInOrderLazyQueryHookResult = ReturnType<typeof useListTransferInOrderLazyQuery>;
export type ListTransferInOrderQueryResult = Apollo.QueryResult<ListTransferInOrderQuery, ListTransferInOrderQueryVariables>;
export const GetTransferInOrderDocument = gql`
    query getTransferInOrder($flowId: ID) {
  getTransferInOrder(flowId: $flowId) {
    flowId
    flowCode
    flowType
    flowTypeName
    transferType
    commodityType
    commodityTypeName
    sourceWarehouseId
    sourceWarehouseName
    sourceBelongId
    sourceBelongName
    targetWarehouseId
    targetWarehouseName
    targetBelongId
    targetBelongName
    flowRemark
    flowStatus
    flowStatusName
    createTime
    createBy
    createUserName
    createUserPhone
    updateBy
    updateUserName
    updateTime
    transferCommodityItemBills {
      itemId
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
      unitPrice
      priceType
      priceTypeName
      batchId
      batchCode
      createTime
      createBy
      updateTime
      updateBy
      stockUnitQuantity
      stockTotalQuantity
      customerId
      customerName
      conversion
      amount
      skuDetail {
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
    }
    transferOtherItemBills {
      attr
      billType
      billTypeText
      payMode
      payModeText
      supplierId
      supplierName
      amount
      brand
      phone
      remark
      createTime
      createBy
      updateTime
      updateBy
      billFreightItemId
    }
    totalGoodsFee
    totalTransportFees
    billId
    billStatus
    billStatusName
    reason
    direction
    sourceAppId
    targetAppId
    belongOrg {
      orgId
      orgName
    }
  }
}
    `;

/**
 * __useGetTransferInOrderQuery__
 *
 * To run a query within a React component, call `useGetTransferInOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransferInOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransferInOrderQuery({
 *   variables: {
 *      flowId: // value for 'flowId'
 *   },
 * });
 */
export function useGetTransferInOrderQuery(baseOptions?: Apollo.QueryHookOptions<GetTransferInOrderQuery, GetTransferInOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransferInOrderQuery, GetTransferInOrderQueryVariables>(GetTransferInOrderDocument, options);
      }
export function useGetTransferInOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransferInOrderQuery, GetTransferInOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransferInOrderQuery, GetTransferInOrderQueryVariables>(GetTransferInOrderDocument, options);
        }
export type GetTransferInOrderQueryHookResult = ReturnType<typeof useGetTransferInOrderQuery>;
export type GetTransferInOrderLazyQueryHookResult = ReturnType<typeof useGetTransferInOrderLazyQuery>;
export type GetTransferInOrderQueryResult = Apollo.QueryResult<GetTransferInOrderQuery, GetTransferInOrderQueryVariables>;
export const CountTransferInStockRecordDocument = gql`
    query countTransferInStockRecord($queryRecordListInput: QueryRecordListInput) {
  countTransferInStockRecord(queryRecordListInput: $queryRecordListInput)
}
    `;

/**
 * __useCountTransferInStockRecordQuery__
 *
 * To run a query within a React component, call `useCountTransferInStockRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountTransferInStockRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountTransferInStockRecordQuery({
 *   variables: {
 *      queryRecordListInput: // value for 'queryRecordListInput'
 *   },
 * });
 */
export function useCountTransferInStockRecordQuery(baseOptions?: Apollo.QueryHookOptions<CountTransferInStockRecordQuery, CountTransferInStockRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountTransferInStockRecordQuery, CountTransferInStockRecordQueryVariables>(CountTransferInStockRecordDocument, options);
      }
export function useCountTransferInStockRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountTransferInStockRecordQuery, CountTransferInStockRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountTransferInStockRecordQuery, CountTransferInStockRecordQueryVariables>(CountTransferInStockRecordDocument, options);
        }
export type CountTransferInStockRecordQueryHookResult = ReturnType<typeof useCountTransferInStockRecordQuery>;
export type CountTransferInStockRecordLazyQueryHookResult = ReturnType<typeof useCountTransferInStockRecordLazyQuery>;
export type CountTransferInStockRecordQueryResult = Apollo.QueryResult<CountTransferInStockRecordQuery, CountTransferInStockRecordQueryVariables>;