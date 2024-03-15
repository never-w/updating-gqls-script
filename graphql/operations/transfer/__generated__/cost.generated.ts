import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ListTransferBillQueryVariables = SchemaTypes.Exact<{
  listTransferBillInput?: SchemaTypes.InputMaybe<SchemaTypes.ListTransferBillInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type ListTransferBillQuery = { listTransferBill?: { __typename?: 'ListTransferBillPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'TransferBillPayload', billId?: string, flowId?: string, flowCode?: string, orderId?: string, orderCode?: string, sourceId?: string, sourceAppId?: number, flowType?: number, flowTypeName?: string, transferType?: number, commodityType?: number, commodityTypeName?: string, sourceWarehouseId?: string, sourceWarehouseName?: string, sourceBelongType?: number, sourceBelongId?: number, sourceBelongName?: string, targetWarehouseId?: string, targetWarehouseName?: string, targetBelongType?: number, targetBelongId?: number, targetBelongName?: string, remark?: string, flowStatus?: number, flowStatusName?: string, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusCode?: number, billStatusName?: string, flowApplyCreateTime?: number, flowCreateBy?: number, flowCreateName?: string, stockUpdateTime?: number, stockCreateBy?: number, stockCreateName?: string, stockAuditUser?: number, stockAuditUserName?: string, billAuditBy?: number, billAuditName?: string, refuseNote?: string, sourceTotalAmount?: number, targetTotalAmount?: number, recordUpdateTime?: number, transferCommodityBill?: { __typename?: 'TransferCommodityBillPayload', billCode?: string, remark?: string, totalAmount?: number, transferCommodityItemBills?: Array<{ __typename?: 'TransferCommodityItemBillPayload', itemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, priceType?: number, priceTypeName?: string, batchId?: string, batchCode?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, stockUnitQuantity?: number, stockTotalQuantity?: number, customerId?: number, customerName?: string, conversion?: number, amount?: number, skuDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> }, transferOtherBill?: { __typename?: 'TransferOtherBillPayload', billItemId?: string, billCode?: string, totalAmount?: number, transferOrderFeeItems?: Array<{ __typename?: 'TransferOtherItemBillPayload', attr?: number, billType?: number, billTypeText?: string, payMode?: number, payModeText?: string, supplierId?: number, supplierName?: string, amount?: number, brand?: string, phone?: string, remark?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, billFreightItemId?: string }> }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type GetTransferBillQueryVariables = SchemaTypes.Exact<{
  flowId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type GetTransferBillQuery = { getTransferBill?: { __typename?: 'TransferBillPayload', billId?: string, flowId?: string, flowCode?: string, orderId?: string, orderCode?: string, sourceId?: string, sourceAppId?: number, flowType?: number, flowTypeName?: string, transferType?: number, commodityType?: number, commodityTypeName?: string, sourceWarehouseId?: string, sourceWarehouseName?: string, sourceBelongType?: number, sourceBelongId?: number, sourceBelongName?: string, targetWarehouseId?: string, targetWarehouseName?: string, targetBelongType?: number, targetBelongId?: number, targetBelongName?: string, remark?: string, flowStatus?: number, flowStatusName?: string, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusCode?: number, billStatusName?: string, flowApplyCreateTime?: number, flowCreateBy?: number, flowCreateName?: string, stockUpdateTime?: number, stockCreateBy?: number, stockCreateName?: string, stockAuditUser?: number, stockAuditUserName?: string, billAuditBy?: number, billAuditName?: string, refuseNote?: string, sourceTotalAmount?: number, targetTotalAmount?: number, recordUpdateTime?: number, transferCommodityBill?: { __typename?: 'TransferCommodityBillPayload', billCode?: string, remark?: string, totalAmount?: number, transferCommodityItemBills?: Array<{ __typename?: 'TransferCommodityItemBillPayload', itemId?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, priceType?: number, priceTypeName?: string, batchId?: string, batchCode?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, stockUnitQuantity?: number, stockTotalQuantity?: number, customerId?: number, customerName?: string, conversion?: number, amount?: number, skuDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> }, transferOtherBill?: { __typename?: 'TransferOtherBillPayload', billItemId?: string, billCode?: string, totalAmount?: number, transferOrderFeeItems?: Array<{ __typename?: 'TransferOtherItemBillPayload', attr?: number, billType?: number, billTypeText?: string, payMode?: number, payModeText?: string, supplierId?: number, supplierName?: string, amount?: number, brand?: string, phone?: string, remark?: string, createTime?: number, createBy?: number, updateTime?: number, updateBy?: number, billFreightItemId?: string }> }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type GetTransferOrderFeeStatusQueryVariables = SchemaTypes.Exact<{
  getTransferBillStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.GetTransferBillStatusInput>;
}>;


export type GetTransferOrderFeeStatusQuery = { getTransferOrderFeeStatus?: { __typename?: 'GetTransferOrderFeeStatusPayload', toSubmit?: number, toAudit?: number } };

export type UpdateTransferCommodityBillMutationVariables = SchemaTypes.Exact<{
  updateFlowTransferCommodityBillInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateFlowTransferCommodityBillInput>;
}>;


export type UpdateTransferCommodityBillMutation = { updateTransferCommodityBill?: string };

export type UpdateTransferOtherBillMutationVariables = SchemaTypes.Exact<{
  updateFlowTransferOtherBillInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateFlowTransferOtherBillInput>;
}>;


export type UpdateTransferOtherBillMutation = { updateTransferOtherBill?: string };

export type UpdateTransferStatMutationVariables = SchemaTypes.Exact<{
  updateTransferOrderStatInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateTransferOrderStatInput>;
}>;


export type UpdateTransferStatMutation = { updateTransferStat?: string };


export const ListTransferBillDocument = gql`
    query listTransferBill($listTransferBillInput: ListTransferBillInput, $page: Page) {
  listTransferBill(listTransferBillInput: $listTransferBillInput, page: $page) {
    records {
      billId
      flowId
      flowCode
      orderId
      orderCode
      sourceId
      sourceAppId
      flowType
      flowTypeName
      transferType
      commodityType
      commodityTypeName
      sourceWarehouseId
      sourceWarehouseName
      sourceBelongType
      sourceBelongId
      sourceBelongName
      targetWarehouseId
      targetWarehouseName
      targetBelongType
      targetBelongId
      targetBelongName
      remark
      flowStatus
      flowStatusName
      billStatus
      billStatusCode
      billStatusName
      flowApplyCreateTime
      flowCreateBy
      flowCreateName
      stockUpdateTime
      stockCreateBy
      stockCreateName
      stockAuditUser
      stockAuditUserName
      billAuditBy
      billAuditName
      transferCommodityBill {
        billCode
        remark
        totalAmount
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
      }
      transferOtherBill {
        billItemId
        billCode
        totalAmount
        transferOrderFeeItems {
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
      }
      refuseNote
      sourceTotalAmount
      targetTotalAmount
      recordUpdateTime
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
 * __useListTransferBillQuery__
 *
 * To run a query within a React component, call `useListTransferBillQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTransferBillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTransferBillQuery({
 *   variables: {
 *      listTransferBillInput: // value for 'listTransferBillInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useListTransferBillQuery(baseOptions?: Apollo.QueryHookOptions<ListTransferBillQuery, ListTransferBillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTransferBillQuery, ListTransferBillQueryVariables>(ListTransferBillDocument, options);
      }
export function useListTransferBillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTransferBillQuery, ListTransferBillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTransferBillQuery, ListTransferBillQueryVariables>(ListTransferBillDocument, options);
        }
export type ListTransferBillQueryHookResult = ReturnType<typeof useListTransferBillQuery>;
export type ListTransferBillLazyQueryHookResult = ReturnType<typeof useListTransferBillLazyQuery>;
export type ListTransferBillQueryResult = Apollo.QueryResult<ListTransferBillQuery, ListTransferBillQueryVariables>;
export const GetTransferBillDocument = gql`
    query getTransferBill($flowId: ID) {
  getTransferBill(flowId: $flowId) {
    billId
    flowId
    flowCode
    orderId
    orderCode
    sourceId
    sourceAppId
    flowType
    flowTypeName
    transferType
    commodityType
    commodityTypeName
    sourceWarehouseId
    sourceWarehouseName
    sourceBelongType
    sourceBelongId
    sourceBelongName
    targetWarehouseId
    targetWarehouseName
    targetBelongType
    targetBelongId
    targetBelongName
    remark
    flowStatus
    flowStatusName
    billStatus
    billStatusCode
    billStatusName
    flowApplyCreateTime
    flowCreateBy
    flowCreateName
    stockUpdateTime
    stockCreateBy
    stockCreateName
    stockAuditUser
    stockAuditUserName
    billAuditBy
    billAuditName
    transferCommodityBill {
      billCode
      remark
      totalAmount
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
    }
    transferOtherBill {
      billItemId
      billCode
      totalAmount
      transferOrderFeeItems {
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
    }
    refuseNote
    sourceTotalAmount
    targetTotalAmount
    recordUpdateTime
    belongOrg {
      orgId
      orgName
    }
  }
}
    `;

/**
 * __useGetTransferBillQuery__
 *
 * To run a query within a React component, call `useGetTransferBillQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransferBillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransferBillQuery({
 *   variables: {
 *      flowId: // value for 'flowId'
 *   },
 * });
 */
export function useGetTransferBillQuery(baseOptions?: Apollo.QueryHookOptions<GetTransferBillQuery, GetTransferBillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransferBillQuery, GetTransferBillQueryVariables>(GetTransferBillDocument, options);
      }
export function useGetTransferBillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransferBillQuery, GetTransferBillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransferBillQuery, GetTransferBillQueryVariables>(GetTransferBillDocument, options);
        }
export type GetTransferBillQueryHookResult = ReturnType<typeof useGetTransferBillQuery>;
export type GetTransferBillLazyQueryHookResult = ReturnType<typeof useGetTransferBillLazyQuery>;
export type GetTransferBillQueryResult = Apollo.QueryResult<GetTransferBillQuery, GetTransferBillQueryVariables>;
export const GetTransferOrderFeeStatusDocument = gql`
    query getTransferOrderFeeStatus($getTransferBillStatusInput: GetTransferBillStatusInput) {
  getTransferOrderFeeStatus(
    getTransferBillStatusInput: $getTransferBillStatusInput
  ) {
    toSubmit
    toAudit
  }
}
    `;

/**
 * __useGetTransferOrderFeeStatusQuery__
 *
 * To run a query within a React component, call `useGetTransferOrderFeeStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransferOrderFeeStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransferOrderFeeStatusQuery({
 *   variables: {
 *      getTransferBillStatusInput: // value for 'getTransferBillStatusInput'
 *   },
 * });
 */
export function useGetTransferOrderFeeStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetTransferOrderFeeStatusQuery, GetTransferOrderFeeStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransferOrderFeeStatusQuery, GetTransferOrderFeeStatusQueryVariables>(GetTransferOrderFeeStatusDocument, options);
      }
export function useGetTransferOrderFeeStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransferOrderFeeStatusQuery, GetTransferOrderFeeStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransferOrderFeeStatusQuery, GetTransferOrderFeeStatusQueryVariables>(GetTransferOrderFeeStatusDocument, options);
        }
export type GetTransferOrderFeeStatusQueryHookResult = ReturnType<typeof useGetTransferOrderFeeStatusQuery>;
export type GetTransferOrderFeeStatusLazyQueryHookResult = ReturnType<typeof useGetTransferOrderFeeStatusLazyQuery>;
export type GetTransferOrderFeeStatusQueryResult = Apollo.QueryResult<GetTransferOrderFeeStatusQuery, GetTransferOrderFeeStatusQueryVariables>;
export const UpdateTransferCommodityBillDocument = gql`
    mutation updateTransferCommodityBill($updateFlowTransferCommodityBillInput: UpdateFlowTransferCommodityBillInput) {
  updateTransferCommodityBill(
    updateFlowTransferCommodityBillInput: $updateFlowTransferCommodityBillInput
  )
}
    `;
export type UpdateTransferCommodityBillMutationFn = Apollo.MutationFunction<UpdateTransferCommodityBillMutation, UpdateTransferCommodityBillMutationVariables>;

/**
 * __useUpdateTransferCommodityBillMutation__
 *
 * To run a mutation, you first call `useUpdateTransferCommodityBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransferCommodityBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransferCommodityBillMutation, { data, loading, error }] = useUpdateTransferCommodityBillMutation({
 *   variables: {
 *      updateFlowTransferCommodityBillInput: // value for 'updateFlowTransferCommodityBillInput'
 *   },
 * });
 */
export function useUpdateTransferCommodityBillMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransferCommodityBillMutation, UpdateTransferCommodityBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransferCommodityBillMutation, UpdateTransferCommodityBillMutationVariables>(UpdateTransferCommodityBillDocument, options);
      }
export type UpdateTransferCommodityBillMutationHookResult = ReturnType<typeof useUpdateTransferCommodityBillMutation>;
export type UpdateTransferCommodityBillMutationResult = Apollo.MutationResult<UpdateTransferCommodityBillMutation>;
export type UpdateTransferCommodityBillMutationOptions = Apollo.BaseMutationOptions<UpdateTransferCommodityBillMutation, UpdateTransferCommodityBillMutationVariables>;
export const UpdateTransferOtherBillDocument = gql`
    mutation updateTransferOtherBill($updateFlowTransferOtherBillInput: UpdateFlowTransferOtherBillInput) {
  updateTransferOtherBill(
    updateFlowTransferOtherBillInput: $updateFlowTransferOtherBillInput
  )
}
    `;
export type UpdateTransferOtherBillMutationFn = Apollo.MutationFunction<UpdateTransferOtherBillMutation, UpdateTransferOtherBillMutationVariables>;

/**
 * __useUpdateTransferOtherBillMutation__
 *
 * To run a mutation, you first call `useUpdateTransferOtherBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransferOtherBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransferOtherBillMutation, { data, loading, error }] = useUpdateTransferOtherBillMutation({
 *   variables: {
 *      updateFlowTransferOtherBillInput: // value for 'updateFlowTransferOtherBillInput'
 *   },
 * });
 */
export function useUpdateTransferOtherBillMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransferOtherBillMutation, UpdateTransferOtherBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransferOtherBillMutation, UpdateTransferOtherBillMutationVariables>(UpdateTransferOtherBillDocument, options);
      }
export type UpdateTransferOtherBillMutationHookResult = ReturnType<typeof useUpdateTransferOtherBillMutation>;
export type UpdateTransferOtherBillMutationResult = Apollo.MutationResult<UpdateTransferOtherBillMutation>;
export type UpdateTransferOtherBillMutationOptions = Apollo.BaseMutationOptions<UpdateTransferOtherBillMutation, UpdateTransferOtherBillMutationVariables>;
export const UpdateTransferStatDocument = gql`
    mutation updateTransferStat($updateTransferOrderStatInput: UpdateTransferOrderStatInput) {
  updateTransferStat(updateTransferOrderStatInput: $updateTransferOrderStatInput)
}
    `;
export type UpdateTransferStatMutationFn = Apollo.MutationFunction<UpdateTransferStatMutation, UpdateTransferStatMutationVariables>;

/**
 * __useUpdateTransferStatMutation__
 *
 * To run a mutation, you first call `useUpdateTransferStatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransferStatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransferStatMutation, { data, loading, error }] = useUpdateTransferStatMutation({
 *   variables: {
 *      updateTransferOrderStatInput: // value for 'updateTransferOrderStatInput'
 *   },
 * });
 */
export function useUpdateTransferStatMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransferStatMutation, UpdateTransferStatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransferStatMutation, UpdateTransferStatMutationVariables>(UpdateTransferStatDocument, options);
      }
export type UpdateTransferStatMutationHookResult = ReturnType<typeof useUpdateTransferStatMutation>;
export type UpdateTransferStatMutationResult = Apollo.MutationResult<UpdateTransferStatMutation>;
export type UpdateTransferStatMutationOptions = Apollo.BaseMutationOptions<UpdateTransferStatMutation, UpdateTransferStatMutationVariables>;