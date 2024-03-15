import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CountPurchaseQueryVariables = SchemaTypes.Exact<{
  countPurchaseFilter?: SchemaTypes.InputMaybe<SchemaTypes.CountPurchaseFilter>;
}>;


export type CountPurchaseQuery = { countPurchase?: { __typename?: 'CountPurchasePayload', toSubmit?: number, toInbound?: number, finished?: number, canceled?: number } };

export type PurchaseListQueryVariables = SchemaTypes.Exact<{
  listCondition?: SchemaTypes.InputMaybe<SchemaTypes.PurchaseListFilter>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PurchaseListQuery = { purchaseList?: { __typename?: 'PurchasePageResultPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PitayaPurchaseOrderPayload', inOrderId?: string, inOrderTypeId?: number, inOrderTypeName?: string, inOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerTypeId?: number, customerTypeName?: string, customerId?: number, customerName?: string, inOrderStatus?: number, inOrderStatusName?: string, warehouseId?: string, warehouseName?: string, supplierId?: number, supplierName?: string, createUserName?: string, createTime?: number, inOrderDescription?: string, errorDescription?: string, totalPrice?: number, outOrderId?: string, saleOrderCode?: string, deliveryFee?: number, realDeliveryFee?: number, canReturn?: boolean, transferOrganizationId?: number, transferOrganizationName?: string, createUserPhone?: string, transferType?: number, transferId?: string, organizationId?: number, organizationName?: string, commodities?: Array<{ __typename?: 'PurchaseOrderItemPayload', commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, unitPriceType?: number, unitPriceTypeName?: string, totalPrice?: number, saleTotalQuantity?: number, saleUnitQuantity?: number, saleTotalPrice?: number, conversion?: number, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number }> }> } };

export type CreateAcquireMutationVariables = SchemaTypes.Exact<{
  createAcquireInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateAcquireInput>;
}>;


export type CreateAcquireMutation = { createAcquire?: string };

export type UpdateAcquireMutationVariables = SchemaTypes.Exact<{
  updateAcquireInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateAcquireInput>;
}>;


export type UpdateAcquireMutation = { updateAcquire?: boolean };

export type CountAcquireQueryVariables = SchemaTypes.Exact<{
  countAcquireFilter?: SchemaTypes.InputMaybe<SchemaTypes.CountAcquireFilter>;
}>;


export type CountAcquireQuery = { countAcquire?: { __typename?: 'CountAcquirePayload', toSubmit?: number, toInbound?: number, finished?: number, canceled?: number, refused?: number } };

export type ListAcquireQueryVariables = SchemaTypes.Exact<{
  listAcquireFilter?: SchemaTypes.InputMaybe<SchemaTypes.ListAcquireFilter>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type ListAcquireQuery = { listAcquire?: { __typename?: 'AcquirePageResultPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'AcquirePayload', applyId?: string, applyType?: number, applyTypeName?: string, applyCode?: string, commodityType?: number, commodityTypeName?: string, belongType?: number, belongTypeName?: string, belongId?: number, belongName?: string, applyStatus?: number, applyStatusName?: string, warehouseId?: string, warehouseName?: string, supplierId?: number, supplierName?: string, createUserId?: number, createUserName?: string, createTime?: number, note?: string, errorDescription?: string, appliedCount?: number, exitCost?: boolean, exitReturn?: boolean, returnCount?: number, billId?: string, existReturnTypeList?: Array<number>, manualCode?: string, commodities?: Array<{ __typename?: 'AcquireItemPayload', skuId?: number, commodityName?: string, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, pricePosition?: number, price?: number, priceType?: number, priceTypeName?: string, totalPrice?: number, conversion?: number, markList?: Array<SchemaTypes.AcquireMarkEnum>, giveUnitQuantity?: number, giveTotalQuantity?: number, inStockTotalQuantity?: number, inStockGrossUnitQuantity?: number, inStockUnitQuantity?: number, inStockPrice?: number, relevancyCode?: string }>, costs?: Array<{ __typename?: 'PitayaCostItemPayload', costId?: string, ruleId?: string, note?: string, amount?: number, data?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, operationLog?: Array<{ __typename?: 'FlowApplyOperationLogPayload', status?: number, statusName?: string, statusTime?: number, operationUserId?: number, operationUserName?: string }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type GetAcquireQueryVariables = SchemaTypes.Exact<{
  getAcquireInput: SchemaTypes.GetAcquireInput;
}>;


export type GetAcquireQuery = { getAcquire?: { __typename?: 'AcquirePayload', applyId?: string, applyType?: number, applyTypeName?: string, applyCode?: string, commodityType?: number, commodityTypeName?: string, belongType?: number, belongTypeName?: string, belongId?: number, belongName?: string, applyStatus?: number, applyStatusName?: string, warehouseId?: string, warehouseName?: string, supplierId?: number, supplierName?: string, createUserId?: number, createUserName?: string, createTime?: number, note?: string, errorDescription?: string, appliedCount?: number, exitCost?: boolean, exitReturn?: boolean, returnCount?: number, billId?: string, existReturnTypeList?: Array<number>, manualCode?: string, templateId?: string, commodities?: Array<{ __typename?: 'AcquireItemPayload', skuId?: number, commodityName?: string, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalQuantity?: number, totalType?: number, totalTypeName?: string, pricePosition?: number, price?: number, priceType?: number, priceTypeName?: string, totalPrice?: number, conversion?: number, markList?: Array<SchemaTypes.AcquireMarkEnum>, giveUnitQuantity?: number, giveTotalQuantity?: number, inStockTotalQuantity?: number, inStockGrossUnitQuantity?: number, inStockUnitQuantity?: number, inStockPrice?: number, relevancyCode?: string }>, costs?: Array<{ __typename?: 'PitayaCostItemPayload', costId?: string, ruleId?: string, note?: string, amount?: number, data?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, operationLog?: Array<{ __typename?: 'FlowApplyOperationLogPayload', status?: number, statusName?: string, statusTime?: number, operationUserId?: number, operationUserName?: string }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type CancelAcquireMutationVariables = SchemaTypes.Exact<{
  cancelAcquireInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelAcquireInput>;
}>;


export type CancelAcquireMutation = { cancelAcquire?: boolean };

export type SubmitAcquireMutationVariables = SchemaTypes.Exact<{
  submitAcquireInput: SchemaTypes.SubmitAcquireInput;
}>;


export type SubmitAcquireMutation = { submitAcquire?: string };

export type PurchaseDetailQueryVariables = SchemaTypes.Exact<{
  inOrderId: SchemaTypes.Scalars['ID'];
  inOrderDetailInput?: SchemaTypes.InputMaybe<SchemaTypes.InOrderDetailInput>;
}>;


export type PurchaseDetailQuery = { countInbounded?: number, purchaseDetail?: { __typename?: 'PitayaPurchaseOrderPayload', inOrderId?: string, inOrderTypeId?: number, inOrderTypeName?: string, inOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerTypeId?: number, customerTypeName?: string, customerId?: number, customerName?: string, inOrderStatus?: number, inOrderStatusName?: string, warehouseId?: string, warehouseName?: string, supplierId?: number, supplierName?: string, createUserName?: string, createTime?: number, inOrderDescription?: string, errorDescription?: string, totalPrice?: number, outOrderId?: string, saleOrderCode?: string, deliveryFee?: number, realDeliveryFee?: number, canReturn?: boolean, transferType?: number, transferOrganizationName?: string, organizationName?: string, createUserPhone?: string, commodities?: Array<{ __typename?: 'PurchaseOrderItemPayload', commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, unitPriceTypeName?: string, unitPriceType?: number, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitPrice?: number, totalPrice?: number, saleTotalQuantity?: number, saleUnitQuantity?: number, saleTotalPrice?: number, conversion?: number, inBoundTotalQuantity?: number, inBoundUnitQuantity?: number }> } };

export type InsertPurchaseMutationVariables = SchemaTypes.Exact<{
  purchaseOrderInsert?: SchemaTypes.InputMaybe<SchemaTypes.PitayaPurchaseOrderInsertInput>;
}>;


export type InsertPurchaseMutation = { insertPurchase?: string };

export type SubmitPurchaseMutationVariables = SchemaTypes.Exact<{
  inOrderId: SchemaTypes.Scalars['ID'];
}>;


export type SubmitPurchaseMutation = { submitPurchase?: string };

export type ModifyPurchaseMutationVariables = SchemaTypes.Exact<{
  purchaseOrderUpdate?: SchemaTypes.InputMaybe<SchemaTypes.PitayaPurchaseOrderUpdateInput>;
}>;


export type ModifyPurchaseMutation = { modifyPurchase?: boolean };

export type CancelPurchaseMutationVariables = SchemaTypes.Exact<{
  cancelpurchase?: SchemaTypes.InputMaybe<SchemaTypes.CancelInOrderInput>;
}>;


export type CancelPurchaseMutation = { cancelPurchase?: boolean };

export type CountIndividualPurchaseStatusQueryVariables = SchemaTypes.Exact<{
  countPurchaseStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.CountPurchaseStatusInput>;
}>;


export type CountIndividualPurchaseStatusQuery = { countIndividualPurchaseStatus?: Array<{ __typename?: 'CountPurchaseStatusPayload', count?: number, status?: SchemaTypes.PurchaseStatusEnum }> };

export type CountPurchaseByExtendStatusQueryVariables = SchemaTypes.Exact<{
  countPurchaseStatusWithExtendInput?: SchemaTypes.InputMaybe<SchemaTypes.CountPurchaseStatusWithExtendInput>;
}>;


export type CountPurchaseByExtendStatusQuery = { countPurchaseByExtendStatus?: number };

export type DetailIndividualPurchaseOrderQueryVariables = SchemaTypes.Exact<{
  id?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type DetailIndividualPurchaseOrderQuery = { detailIndividualPurchaseOrder?: { __typename?: 'DetailIndividualPurchasePayload', instockCount?: number, billFreightAndMainIdInfo?: { __typename?: 'BillFreightAndMainIdInfo', billMainId?: string, purchaseBillCount?: number, templateId?: string, freightItemList?: Array<{ __typename?: 'FreightItem', amount?: number, costId?: string, costName?: string, data?: string, dictItemId?: string, extendId?: number, note?: string, ruleId?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, commodityList?: Array<{ __typename?: 'IndividualPurchaseCommodity', commodityMarkDescList?: Array<string>, commodityMarkList?: Array<SchemaTypes.AcquireMarkEnum>, index?: string, pricePosition?: SchemaTypes.PricePositionEnum, batchId?: string, associatedPurchaseCode?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commodityType?: { __typename?: 'PitayaCommodityType', commodityTypeId?: number, commodityTypeName?: string }, inStockGrossQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, inStockQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, purchaseQuantityAndPriceInfo?: { __typename?: 'QuantityAndPriceAndAmountInfo', amount?: number, price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, extendOrderList?: Array<{ __typename?: 'ExtendOrder', code?: string, id?: string, status?: SchemaTypes.ExtendOrderStatus, statusDesc?: string, type?: SchemaTypes.ExpandOrderTypeEnum, typeDesc?: string, commodityList?: Array<{ __typename?: 'ExtendCommodity', batchId?: number, id?: string, index?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, quantityAndPriceInfo?: { __typename?: 'QuantityAndPriceAndTypeInfo', price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> }>, individualPurchaseMainInfo?: { __typename?: 'IndividualPurchaseMainInfo', code?: string, createTime?: number, id?: string, manualCode?: string, note?: string, purchaseDate?: number, runCode?: string, statusEnum?: SchemaTypes.PurchaseStatusEnum, statusEnumDesc?: string, type?: SchemaTypes.PitayaPurchaseTypeEnum, typeDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, purchaseOperationLogList?: Array<{ __typename?: 'PurchaseOperationLogPayload', beforeStatus?: SchemaTypes.PurchaseStatusEnum, beforeStatusDesc?: string, createTime?: number, note?: string, status?: SchemaTypes.PurchaseStatusEnum, statusDesc?: string, createUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }> } };

export type ListInstockRecordQueryVariables = SchemaTypes.Exact<{
  id?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type ListInstockRecordQuery = { listInstockRecord?: Array<{ __typename?: 'PurchaseInstockRecordPayload', createTime?: number, recordCode?: string, recordId?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, commodityList?: Array<{ __typename?: 'InstockCommodity', batchCode?: string, batchId?: number, price?: number, pricePositionEnum?: SchemaTypes.PricePositionEnum, amount?: number, index?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, inStockGrossQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, inStockNetQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number } }> }> };

export type PageIndividualPurchaseOrderQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageIndividualPurchaseInput?: SchemaTypes.InputMaybe<SchemaTypes.PageIndividualPurchaseInput>;
}>;


export type PageIndividualPurchaseOrderQuery = { pageIndividualPurchaseOrder?: { __typename?: 'PageIndividualPurchasePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PageIndividualPurchase', commodityList?: Array<{ __typename?: 'IndividualPurchaseCommodity', commodityMarkDescList?: Array<string>, commodityMarkList?: Array<SchemaTypes.AcquireMarkEnum>, index?: string, pricePosition?: SchemaTypes.PricePositionEnum, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commodityType?: { __typename?: 'PitayaCommodityType', commodityTypeId?: number, commodityTypeName?: string }, inStockGrossQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, inStockQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, purchaseQuantityAndPriceInfo?: { __typename?: 'QuantityAndPriceAndAmountInfo', amount?: number, price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, individualPurchaseMainInfo?: { __typename?: 'IndividualPurchaseMainInfo', code?: string, createTime?: number, id?: string, manualCode?: string, note?: string, purchaseDate?: number, runCode?: string, statusEnum?: SchemaTypes.PurchaseStatusEnum, statusEnumDesc?: string, type?: SchemaTypes.PitayaPurchaseTypeEnum, typeDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } }> } };

export type ChangeIndividualPurchaseStatusMutationVariables = SchemaTypes.Exact<{
  changePurchaseStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.ChangePurchaseStatusInput>;
}>;


export type ChangeIndividualPurchaseStatusMutation = { changeIndividualPurchaseStatus?: boolean };

export type CreateIndividualPurchaseOrderMutationVariables = SchemaTypes.Exact<{
  createIndividualPurchaseInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateIndividualPurchaseInput>;
}>;


export type CreateIndividualPurchaseOrderMutation = { createIndividualPurchaseOrder?: string };

export type UpdateIndividualPurchaseOrderMutationVariables = SchemaTypes.Exact<{
  createIndividualPurchaseInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateIndividualPurchaseInput>;
  id?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type UpdateIndividualPurchaseOrderMutation = { updateIndividualPurchaseOrder?: boolean };


export const CountPurchaseDocument = gql`
    query countPurchase($countPurchaseFilter: CountPurchaseFilter) {
  countPurchase(countPurchaseFilter: $countPurchaseFilter) {
    toSubmit
    toInbound
    finished
    canceled
  }
}
    `;

/**
 * __useCountPurchaseQuery__
 *
 * To run a query within a React component, call `useCountPurchaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPurchaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPurchaseQuery({
 *   variables: {
 *      countPurchaseFilter: // value for 'countPurchaseFilter'
 *   },
 * });
 */
export function useCountPurchaseQuery(baseOptions?: Apollo.QueryHookOptions<CountPurchaseQuery, CountPurchaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountPurchaseQuery, CountPurchaseQueryVariables>(CountPurchaseDocument, options);
      }
export function useCountPurchaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountPurchaseQuery, CountPurchaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountPurchaseQuery, CountPurchaseQueryVariables>(CountPurchaseDocument, options);
        }
export type CountPurchaseQueryHookResult = ReturnType<typeof useCountPurchaseQuery>;
export type CountPurchaseLazyQueryHookResult = ReturnType<typeof useCountPurchaseLazyQuery>;
export type CountPurchaseQueryResult = Apollo.QueryResult<CountPurchaseQuery, CountPurchaseQueryVariables>;
export const PurchaseListDocument = gql`
    query purchaseList($listCondition: PurchaseListFilter, $page: Page) {
  purchaseList(listCondition: $listCondition, page: $page) {
    records {
      inOrderId
      inOrderTypeId
      inOrderTypeName
      inOrderCode
      commodityTypeId
      commodityTypeName
      customerTypeId
      customerTypeName
      customerId
      customerName
      inOrderStatus
      inOrderStatusName
      warehouseId
      warehouseName
      supplierId
      supplierName
      createUserName
      createTime
      inOrderDescription
      errorDescription
      totalPrice
      commodities {
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
        unitPriceType
        unitPriceTypeName
        totalPrice
        saleTotalQuantity
        saleUnitQuantity
        saleTotalPrice
        conversion
        inBoundTotalQuantity
        inBoundUnitQuantity
      }
      outOrderId
      saleOrderCode
      deliveryFee
      realDeliveryFee
      canReturn
      transferOrganizationId
      transferOrganizationName
      createUserPhone
      transferType
      transferId
      organizationId
      organizationName
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePurchaseListQuery__
 *
 * To run a query within a React component, call `usePurchaseListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePurchaseListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePurchaseListQuery({
 *   variables: {
 *      listCondition: // value for 'listCondition'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePurchaseListQuery(baseOptions?: Apollo.QueryHookOptions<PurchaseListQuery, PurchaseListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PurchaseListQuery, PurchaseListQueryVariables>(PurchaseListDocument, options);
      }
export function usePurchaseListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PurchaseListQuery, PurchaseListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PurchaseListQuery, PurchaseListQueryVariables>(PurchaseListDocument, options);
        }
export type PurchaseListQueryHookResult = ReturnType<typeof usePurchaseListQuery>;
export type PurchaseListLazyQueryHookResult = ReturnType<typeof usePurchaseListLazyQuery>;
export type PurchaseListQueryResult = Apollo.QueryResult<PurchaseListQuery, PurchaseListQueryVariables>;
export const CreateAcquireDocument = gql`
    mutation createAcquire($createAcquireInput: CreateAcquireInput) {
  createAcquire(createAcquireInput: $createAcquireInput)
}
    `;
export type CreateAcquireMutationFn = Apollo.MutationFunction<CreateAcquireMutation, CreateAcquireMutationVariables>;

/**
 * __useCreateAcquireMutation__
 *
 * To run a mutation, you first call `useCreateAcquireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAcquireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAcquireMutation, { data, loading, error }] = useCreateAcquireMutation({
 *   variables: {
 *      createAcquireInput: // value for 'createAcquireInput'
 *   },
 * });
 */
export function useCreateAcquireMutation(baseOptions?: Apollo.MutationHookOptions<CreateAcquireMutation, CreateAcquireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAcquireMutation, CreateAcquireMutationVariables>(CreateAcquireDocument, options);
      }
export type CreateAcquireMutationHookResult = ReturnType<typeof useCreateAcquireMutation>;
export type CreateAcquireMutationResult = Apollo.MutationResult<CreateAcquireMutation>;
export type CreateAcquireMutationOptions = Apollo.BaseMutationOptions<CreateAcquireMutation, CreateAcquireMutationVariables>;
export const UpdateAcquireDocument = gql`
    mutation updateAcquire($updateAcquireInput: UpdateAcquireInput) {
  updateAcquire(updateAcquireInput: $updateAcquireInput)
}
    `;
export type UpdateAcquireMutationFn = Apollo.MutationFunction<UpdateAcquireMutation, UpdateAcquireMutationVariables>;

/**
 * __useUpdateAcquireMutation__
 *
 * To run a mutation, you first call `useUpdateAcquireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAcquireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAcquireMutation, { data, loading, error }] = useUpdateAcquireMutation({
 *   variables: {
 *      updateAcquireInput: // value for 'updateAcquireInput'
 *   },
 * });
 */
export function useUpdateAcquireMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAcquireMutation, UpdateAcquireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAcquireMutation, UpdateAcquireMutationVariables>(UpdateAcquireDocument, options);
      }
export type UpdateAcquireMutationHookResult = ReturnType<typeof useUpdateAcquireMutation>;
export type UpdateAcquireMutationResult = Apollo.MutationResult<UpdateAcquireMutation>;
export type UpdateAcquireMutationOptions = Apollo.BaseMutationOptions<UpdateAcquireMutation, UpdateAcquireMutationVariables>;
export const CountAcquireDocument = gql`
    query countAcquire($countAcquireFilter: CountAcquireFilter) {
  countAcquire(countAcquireFilter: $countAcquireFilter) {
    toSubmit
    toInbound
    finished
    canceled
    refused
  }
}
    `;

/**
 * __useCountAcquireQuery__
 *
 * To run a query within a React component, call `useCountAcquireQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountAcquireQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountAcquireQuery({
 *   variables: {
 *      countAcquireFilter: // value for 'countAcquireFilter'
 *   },
 * });
 */
export function useCountAcquireQuery(baseOptions?: Apollo.QueryHookOptions<CountAcquireQuery, CountAcquireQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountAcquireQuery, CountAcquireQueryVariables>(CountAcquireDocument, options);
      }
export function useCountAcquireLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountAcquireQuery, CountAcquireQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountAcquireQuery, CountAcquireQueryVariables>(CountAcquireDocument, options);
        }
export type CountAcquireQueryHookResult = ReturnType<typeof useCountAcquireQuery>;
export type CountAcquireLazyQueryHookResult = ReturnType<typeof useCountAcquireLazyQuery>;
export type CountAcquireQueryResult = Apollo.QueryResult<CountAcquireQuery, CountAcquireQueryVariables>;
export const ListAcquireDocument = gql`
    query listAcquire($listAcquireFilter: ListAcquireFilter, $page: Page) {
  listAcquire(listAcquireFilter: $listAcquireFilter, page: $page) {
    records {
      applyId
      applyType
      applyTypeName
      applyCode
      commodityType
      commodityTypeName
      belongType
      belongTypeName
      belongId
      belongName
      applyStatus
      applyStatusName
      warehouseId
      warehouseName
      supplierId
      supplierName
      createUserId
      createUserName
      createTime
      note
      errorDescription
      appliedCount
      exitCost
      commodities {
        skuId
        commodityName
        skuTextDescription
        unitQuantity
        unitType
        unitTypeName
        totalQuantity
        totalType
        totalTypeName
        pricePosition
        price
        priceType
        priceTypeName
        totalPrice
        conversion
        markList
        giveUnitQuantity
        giveTotalQuantity
        inStockTotalQuantity
        inStockGrossUnitQuantity
        inStockUnitQuantity
        inStockPrice
        relevancyCode
      }
      costs {
        costId
        ruleId
        note
        amount
        data
        supplier {
          supplierId
          supplierName
        }
      }
      operationLog {
        status
        statusName
        statusTime
        operationUserId
        operationUserName
      }
      exitReturn
      returnCount
      billId
      belongOrg {
        orgId
        orgName
      }
      existReturnTypeList
      manualCode
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __useListAcquireQuery__
 *
 * To run a query within a React component, call `useListAcquireQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAcquireQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAcquireQuery({
 *   variables: {
 *      listAcquireFilter: // value for 'listAcquireFilter'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useListAcquireQuery(baseOptions?: Apollo.QueryHookOptions<ListAcquireQuery, ListAcquireQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAcquireQuery, ListAcquireQueryVariables>(ListAcquireDocument, options);
      }
export function useListAcquireLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAcquireQuery, ListAcquireQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAcquireQuery, ListAcquireQueryVariables>(ListAcquireDocument, options);
        }
export type ListAcquireQueryHookResult = ReturnType<typeof useListAcquireQuery>;
export type ListAcquireLazyQueryHookResult = ReturnType<typeof useListAcquireLazyQuery>;
export type ListAcquireQueryResult = Apollo.QueryResult<ListAcquireQuery, ListAcquireQueryVariables>;
export const GetAcquireDocument = gql`
    query getAcquire($getAcquireInput: GetAcquireInput!) {
  getAcquire(getAcquireInput: $getAcquireInput) {
    applyId
    applyType
    applyTypeName
    applyCode
    commodityType
    commodityTypeName
    belongType
    belongTypeName
    belongId
    belongName
    applyStatus
    applyStatusName
    warehouseId
    warehouseName
    supplierId
    supplierName
    createUserId
    createUserName
    createTime
    note
    errorDescription
    appliedCount
    exitCost
    commodities {
      skuId
      commodityName
      skuTextDescription
      unitQuantity
      unitType
      unitTypeName
      totalQuantity
      totalType
      totalTypeName
      pricePosition
      price
      priceType
      priceTypeName
      totalPrice
      conversion
      markList
      giveUnitQuantity
      giveTotalQuantity
      inStockTotalQuantity
      inStockGrossUnitQuantity
      inStockUnitQuantity
      inStockPrice
      relevancyCode
    }
    costs {
      costId
      ruleId
      note
      amount
      data
      supplier {
        supplierId
        supplierName
      }
    }
    operationLog {
      status
      statusName
      statusTime
      operationUserId
      operationUserName
    }
    exitReturn
    returnCount
    billId
    belongOrg {
      orgId
      orgName
    }
    existReturnTypeList
    manualCode
    templateId
  }
}
    `;

/**
 * __useGetAcquireQuery__
 *
 * To run a query within a React component, call `useGetAcquireQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAcquireQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAcquireQuery({
 *   variables: {
 *      getAcquireInput: // value for 'getAcquireInput'
 *   },
 * });
 */
export function useGetAcquireQuery(baseOptions: Apollo.QueryHookOptions<GetAcquireQuery, GetAcquireQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAcquireQuery, GetAcquireQueryVariables>(GetAcquireDocument, options);
      }
export function useGetAcquireLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAcquireQuery, GetAcquireQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAcquireQuery, GetAcquireQueryVariables>(GetAcquireDocument, options);
        }
export type GetAcquireQueryHookResult = ReturnType<typeof useGetAcquireQuery>;
export type GetAcquireLazyQueryHookResult = ReturnType<typeof useGetAcquireLazyQuery>;
export type GetAcquireQueryResult = Apollo.QueryResult<GetAcquireQuery, GetAcquireQueryVariables>;
export const CancelAcquireDocument = gql`
    mutation cancelAcquire($cancelAcquireInput: CancelAcquireInput) {
  cancelAcquire(cancelAcquireInput: $cancelAcquireInput)
}
    `;
export type CancelAcquireMutationFn = Apollo.MutationFunction<CancelAcquireMutation, CancelAcquireMutationVariables>;

/**
 * __useCancelAcquireMutation__
 *
 * To run a mutation, you first call `useCancelAcquireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelAcquireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelAcquireMutation, { data, loading, error }] = useCancelAcquireMutation({
 *   variables: {
 *      cancelAcquireInput: // value for 'cancelAcquireInput'
 *   },
 * });
 */
export function useCancelAcquireMutation(baseOptions?: Apollo.MutationHookOptions<CancelAcquireMutation, CancelAcquireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelAcquireMutation, CancelAcquireMutationVariables>(CancelAcquireDocument, options);
      }
export type CancelAcquireMutationHookResult = ReturnType<typeof useCancelAcquireMutation>;
export type CancelAcquireMutationResult = Apollo.MutationResult<CancelAcquireMutation>;
export type CancelAcquireMutationOptions = Apollo.BaseMutationOptions<CancelAcquireMutation, CancelAcquireMutationVariables>;
export const SubmitAcquireDocument = gql`
    mutation submitAcquire($submitAcquireInput: SubmitAcquireInput!) {
  submitAcquire(submitAcquireInput: $submitAcquireInput)
}
    `;
export type SubmitAcquireMutationFn = Apollo.MutationFunction<SubmitAcquireMutation, SubmitAcquireMutationVariables>;

/**
 * __useSubmitAcquireMutation__
 *
 * To run a mutation, you first call `useSubmitAcquireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitAcquireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitAcquireMutation, { data, loading, error }] = useSubmitAcquireMutation({
 *   variables: {
 *      submitAcquireInput: // value for 'submitAcquireInput'
 *   },
 * });
 */
export function useSubmitAcquireMutation(baseOptions?: Apollo.MutationHookOptions<SubmitAcquireMutation, SubmitAcquireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitAcquireMutation, SubmitAcquireMutationVariables>(SubmitAcquireDocument, options);
      }
export type SubmitAcquireMutationHookResult = ReturnType<typeof useSubmitAcquireMutation>;
export type SubmitAcquireMutationResult = Apollo.MutationResult<SubmitAcquireMutation>;
export type SubmitAcquireMutationOptions = Apollo.BaseMutationOptions<SubmitAcquireMutation, SubmitAcquireMutationVariables>;
export const PurchaseDetailDocument = gql`
    query purchaseDetail($inOrderId: ID!, $inOrderDetailInput: InOrderDetailInput) {
  purchaseDetail(inOrderId: $inOrderId) {
    inOrderId
    inOrderTypeId
    inOrderTypeName
    inOrderCode
    commodityTypeId
    commodityTypeName
    customerTypeId
    customerTypeName
    customerId
    customerName
    inOrderStatus
    inOrderStatusName
    warehouseId
    warehouseName
    supplierId
    supplierName
    createUserName
    createTime
    inOrderDescription
    errorDescription
    totalPrice
    outOrderId
    saleOrderCode
    deliveryFee
    realDeliveryFee
    canReturn
    transferType
    transferOrganizationName
    organizationName
    createUserPhone
    commodities {
      commodityId
      commodityName
      commoditySkuId
      commoditySpecOptionId
      skuTextDescription
      unitQuantity
      unitType
      unitTypeName
      unitPriceTypeName
      unitPriceType
      totalQuantity
      totalType
      totalTypeName
      unitPrice
      totalPrice
      saleTotalQuantity
      saleUnitQuantity
      saleTotalPrice
      conversion
      inBoundTotalQuantity
      inBoundUnitQuantity
    }
  }
  countInbounded(inOrderDetailInput: $inOrderDetailInput)
}
    `;

/**
 * __usePurchaseDetailQuery__
 *
 * To run a query within a React component, call `usePurchaseDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePurchaseDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePurchaseDetailQuery({
 *   variables: {
 *      inOrderId: // value for 'inOrderId'
 *      inOrderDetailInput: // value for 'inOrderDetailInput'
 *   },
 * });
 */
export function usePurchaseDetailQuery(baseOptions: Apollo.QueryHookOptions<PurchaseDetailQuery, PurchaseDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PurchaseDetailQuery, PurchaseDetailQueryVariables>(PurchaseDetailDocument, options);
      }
export function usePurchaseDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PurchaseDetailQuery, PurchaseDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PurchaseDetailQuery, PurchaseDetailQueryVariables>(PurchaseDetailDocument, options);
        }
export type PurchaseDetailQueryHookResult = ReturnType<typeof usePurchaseDetailQuery>;
export type PurchaseDetailLazyQueryHookResult = ReturnType<typeof usePurchaseDetailLazyQuery>;
export type PurchaseDetailQueryResult = Apollo.QueryResult<PurchaseDetailQuery, PurchaseDetailQueryVariables>;
export const InsertPurchaseDocument = gql`
    mutation insertPurchase($purchaseOrderInsert: PitayaPurchaseOrderInsertInput) {
  insertPurchase(purchaseOrderInsert: $purchaseOrderInsert)
}
    `;
export type InsertPurchaseMutationFn = Apollo.MutationFunction<InsertPurchaseMutation, InsertPurchaseMutationVariables>;

/**
 * __useInsertPurchaseMutation__
 *
 * To run a mutation, you first call `useInsertPurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPurchaseMutation, { data, loading, error }] = useInsertPurchaseMutation({
 *   variables: {
 *      purchaseOrderInsert: // value for 'purchaseOrderInsert'
 *   },
 * });
 */
export function useInsertPurchaseMutation(baseOptions?: Apollo.MutationHookOptions<InsertPurchaseMutation, InsertPurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPurchaseMutation, InsertPurchaseMutationVariables>(InsertPurchaseDocument, options);
      }
export type InsertPurchaseMutationHookResult = ReturnType<typeof useInsertPurchaseMutation>;
export type InsertPurchaseMutationResult = Apollo.MutationResult<InsertPurchaseMutation>;
export type InsertPurchaseMutationOptions = Apollo.BaseMutationOptions<InsertPurchaseMutation, InsertPurchaseMutationVariables>;
export const SubmitPurchaseDocument = gql`
    mutation submitPurchase($inOrderId: ID!) {
  submitPurchase(inOrderId: $inOrderId)
}
    `;
export type SubmitPurchaseMutationFn = Apollo.MutationFunction<SubmitPurchaseMutation, SubmitPurchaseMutationVariables>;

/**
 * __useSubmitPurchaseMutation__
 *
 * To run a mutation, you first call `useSubmitPurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitPurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitPurchaseMutation, { data, loading, error }] = useSubmitPurchaseMutation({
 *   variables: {
 *      inOrderId: // value for 'inOrderId'
 *   },
 * });
 */
export function useSubmitPurchaseMutation(baseOptions?: Apollo.MutationHookOptions<SubmitPurchaseMutation, SubmitPurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitPurchaseMutation, SubmitPurchaseMutationVariables>(SubmitPurchaseDocument, options);
      }
export type SubmitPurchaseMutationHookResult = ReturnType<typeof useSubmitPurchaseMutation>;
export type SubmitPurchaseMutationResult = Apollo.MutationResult<SubmitPurchaseMutation>;
export type SubmitPurchaseMutationOptions = Apollo.BaseMutationOptions<SubmitPurchaseMutation, SubmitPurchaseMutationVariables>;
export const ModifyPurchaseDocument = gql`
    mutation modifyPurchase($purchaseOrderUpdate: PitayaPurchaseOrderUpdateInput) {
  modifyPurchase(purchaseOrderUpdate: $purchaseOrderUpdate)
}
    `;
export type ModifyPurchaseMutationFn = Apollo.MutationFunction<ModifyPurchaseMutation, ModifyPurchaseMutationVariables>;

/**
 * __useModifyPurchaseMutation__
 *
 * To run a mutation, you first call `useModifyPurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModifyPurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modifyPurchaseMutation, { data, loading, error }] = useModifyPurchaseMutation({
 *   variables: {
 *      purchaseOrderUpdate: // value for 'purchaseOrderUpdate'
 *   },
 * });
 */
export function useModifyPurchaseMutation(baseOptions?: Apollo.MutationHookOptions<ModifyPurchaseMutation, ModifyPurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ModifyPurchaseMutation, ModifyPurchaseMutationVariables>(ModifyPurchaseDocument, options);
      }
export type ModifyPurchaseMutationHookResult = ReturnType<typeof useModifyPurchaseMutation>;
export type ModifyPurchaseMutationResult = Apollo.MutationResult<ModifyPurchaseMutation>;
export type ModifyPurchaseMutationOptions = Apollo.BaseMutationOptions<ModifyPurchaseMutation, ModifyPurchaseMutationVariables>;
export const CancelPurchaseDocument = gql`
    mutation cancelPurchase($cancelpurchase: CancelInOrderInput) {
  cancelPurchase(cancelpurchase: $cancelpurchase)
}
    `;
export type CancelPurchaseMutationFn = Apollo.MutationFunction<CancelPurchaseMutation, CancelPurchaseMutationVariables>;

/**
 * __useCancelPurchaseMutation__
 *
 * To run a mutation, you first call `useCancelPurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelPurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelPurchaseMutation, { data, loading, error }] = useCancelPurchaseMutation({
 *   variables: {
 *      cancelpurchase: // value for 'cancelpurchase'
 *   },
 * });
 */
export function useCancelPurchaseMutation(baseOptions?: Apollo.MutationHookOptions<CancelPurchaseMutation, CancelPurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelPurchaseMutation, CancelPurchaseMutationVariables>(CancelPurchaseDocument, options);
      }
export type CancelPurchaseMutationHookResult = ReturnType<typeof useCancelPurchaseMutation>;
export type CancelPurchaseMutationResult = Apollo.MutationResult<CancelPurchaseMutation>;
export type CancelPurchaseMutationOptions = Apollo.BaseMutationOptions<CancelPurchaseMutation, CancelPurchaseMutationVariables>;
export const CountIndividualPurchaseStatusDocument = gql`
    query countIndividualPurchaseStatus($countPurchaseStatusInput: CountPurchaseStatusInput) {
  countIndividualPurchaseStatus(
    countPurchaseStatusInput: $countPurchaseStatusInput
  ) {
    count
    status
  }
}
    `;

/**
 * __useCountIndividualPurchaseStatusQuery__
 *
 * To run a query within a React component, call `useCountIndividualPurchaseStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountIndividualPurchaseStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountIndividualPurchaseStatusQuery({
 *   variables: {
 *      countPurchaseStatusInput: // value for 'countPurchaseStatusInput'
 *   },
 * });
 */
export function useCountIndividualPurchaseStatusQuery(baseOptions?: Apollo.QueryHookOptions<CountIndividualPurchaseStatusQuery, CountIndividualPurchaseStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountIndividualPurchaseStatusQuery, CountIndividualPurchaseStatusQueryVariables>(CountIndividualPurchaseStatusDocument, options);
      }
export function useCountIndividualPurchaseStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountIndividualPurchaseStatusQuery, CountIndividualPurchaseStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountIndividualPurchaseStatusQuery, CountIndividualPurchaseStatusQueryVariables>(CountIndividualPurchaseStatusDocument, options);
        }
export type CountIndividualPurchaseStatusQueryHookResult = ReturnType<typeof useCountIndividualPurchaseStatusQuery>;
export type CountIndividualPurchaseStatusLazyQueryHookResult = ReturnType<typeof useCountIndividualPurchaseStatusLazyQuery>;
export type CountIndividualPurchaseStatusQueryResult = Apollo.QueryResult<CountIndividualPurchaseStatusQuery, CountIndividualPurchaseStatusQueryVariables>;
export const CountPurchaseByExtendStatusDocument = gql`
    query countPurchaseByExtendStatus($countPurchaseStatusWithExtendInput: CountPurchaseStatusWithExtendInput) {
  countPurchaseByExtendStatus(
    countPurchaseStatusWithExtendInput: $countPurchaseStatusWithExtendInput
  )
}
    `;

/**
 * __useCountPurchaseByExtendStatusQuery__
 *
 * To run a query within a React component, call `useCountPurchaseByExtendStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPurchaseByExtendStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPurchaseByExtendStatusQuery({
 *   variables: {
 *      countPurchaseStatusWithExtendInput: // value for 'countPurchaseStatusWithExtendInput'
 *   },
 * });
 */
export function useCountPurchaseByExtendStatusQuery(baseOptions?: Apollo.QueryHookOptions<CountPurchaseByExtendStatusQuery, CountPurchaseByExtendStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountPurchaseByExtendStatusQuery, CountPurchaseByExtendStatusQueryVariables>(CountPurchaseByExtendStatusDocument, options);
      }
export function useCountPurchaseByExtendStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountPurchaseByExtendStatusQuery, CountPurchaseByExtendStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountPurchaseByExtendStatusQuery, CountPurchaseByExtendStatusQueryVariables>(CountPurchaseByExtendStatusDocument, options);
        }
export type CountPurchaseByExtendStatusQueryHookResult = ReturnType<typeof useCountPurchaseByExtendStatusQuery>;
export type CountPurchaseByExtendStatusLazyQueryHookResult = ReturnType<typeof useCountPurchaseByExtendStatusLazyQuery>;
export type CountPurchaseByExtendStatusQueryResult = Apollo.QueryResult<CountPurchaseByExtendStatusQuery, CountPurchaseByExtendStatusQueryVariables>;
export const DetailIndividualPurchaseOrderDocument = gql`
    query detailIndividualPurchaseOrder($id: ID) {
  detailIndividualPurchaseOrder(id: $id) {
    billFreightAndMainIdInfo {
      billMainId
      freightItemList {
        supplier {
          supplierId
          supplierName
        }
        amount
        costId
        costName
        data
        dictItemId
        extendId
        note
        ruleId
      }
      purchaseBillCount
      templateId
    }
    commodityList {
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
      commodityMarkDescList
      commodityMarkList
      inStockGrossQuantity {
        totalQuantity
        unitQuantity
      }
      inStockQuantity {
        totalQuantity
        unitQuantity
      }
      index
      pricePosition
      purchaseQuantityAndPriceInfo {
        priceType {
          unitId
          unitName
        }
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
        amount
        price
        totalQuantity
        unitQuantity
      }
      batchId
      associatedPurchaseCode
    }
    extendOrderList {
      code
      commodityList {
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
        batchId
        id
        index
        quantityAndPriceInfo {
          priceType {
            unitId
            unitName
          }
          totalType {
            unitId
            unitName
          }
          unitType {
            unitId
            unitName
          }
          price
          totalQuantity
          unitQuantity
        }
      }
      id
      status
      statusDesc
      type
      typeDesc
    }
    individualPurchaseMainInfo {
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
      }
      supplier {
        supplierId
        supplierName
      }
      user {
        phoneNum
        userId
        userName
      }
      warehouse {
        warehouseId
        warehouseName
      }
      code
      createTime
      id
      manualCode
      note
      purchaseDate
      runCode
      statusEnum
      statusEnumDesc
      type
      typeDesc
    }
    instockCount
    purchaseOperationLogList {
      beforeStatus
      beforeStatusDesc
      createTime
      createUser {
        phoneNum
        userId
        userName
      }
      note
      status
      statusDesc
    }
  }
}
    `;

/**
 * __useDetailIndividualPurchaseOrderQuery__
 *
 * To run a query within a React component, call `useDetailIndividualPurchaseOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailIndividualPurchaseOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailIndividualPurchaseOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailIndividualPurchaseOrderQuery(baseOptions?: Apollo.QueryHookOptions<DetailIndividualPurchaseOrderQuery, DetailIndividualPurchaseOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DetailIndividualPurchaseOrderQuery, DetailIndividualPurchaseOrderQueryVariables>(DetailIndividualPurchaseOrderDocument, options);
      }
export function useDetailIndividualPurchaseOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DetailIndividualPurchaseOrderQuery, DetailIndividualPurchaseOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DetailIndividualPurchaseOrderQuery, DetailIndividualPurchaseOrderQueryVariables>(DetailIndividualPurchaseOrderDocument, options);
        }
export type DetailIndividualPurchaseOrderQueryHookResult = ReturnType<typeof useDetailIndividualPurchaseOrderQuery>;
export type DetailIndividualPurchaseOrderLazyQueryHookResult = ReturnType<typeof useDetailIndividualPurchaseOrderLazyQuery>;
export type DetailIndividualPurchaseOrderQueryResult = Apollo.QueryResult<DetailIndividualPurchaseOrderQuery, DetailIndividualPurchaseOrderQueryVariables>;
export const ListInstockRecordDocument = gql`
    query listInstockRecord($id: ID) {
  listInstockRecord(id: $id) {
    createBy {
      phoneNum
      userId
      userName
    }
    commodityList {
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
      priceType {
        unitId
        unitName
      }
      totalType {
        unitId
        unitName
      }
      unitType {
        unitId
        unitName
      }
      batchCode
      batchId
      inStockGrossQuantity {
        totalQuantity
        unitQuantity
      }
      inStockNetQuantity {
        totalQuantity
        unitQuantity
      }
      price
      pricePositionEnum
      amount
      index
    }
    createTime
    recordCode
    recordId
  }
}
    `;

/**
 * __useListInstockRecordQuery__
 *
 * To run a query within a React component, call `useListInstockRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useListInstockRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListInstockRecordQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useListInstockRecordQuery(baseOptions?: Apollo.QueryHookOptions<ListInstockRecordQuery, ListInstockRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListInstockRecordQuery, ListInstockRecordQueryVariables>(ListInstockRecordDocument, options);
      }
export function useListInstockRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListInstockRecordQuery, ListInstockRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListInstockRecordQuery, ListInstockRecordQueryVariables>(ListInstockRecordDocument, options);
        }
export type ListInstockRecordQueryHookResult = ReturnType<typeof useListInstockRecordQuery>;
export type ListInstockRecordLazyQueryHookResult = ReturnType<typeof useListInstockRecordLazyQuery>;
export type ListInstockRecordQueryResult = Apollo.QueryResult<ListInstockRecordQuery, ListInstockRecordQueryVariables>;
export const PageIndividualPurchaseOrderDocument = gql`
    query pageIndividualPurchaseOrder($page: Page, $pageIndividualPurchaseInput: PageIndividualPurchaseInput) {
  pageIndividualPurchaseOrder(
    page: $page
    pageIndividualPurchaseInput: $pageIndividualPurchaseInput
  ) {
    pageCurrent
    pageSize
    records {
      commodityList {
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
        commodityMarkDescList
        commodityMarkList
        inStockGrossQuantity {
          totalQuantity
          unitQuantity
        }
        inStockQuantity {
          totalQuantity
          unitQuantity
        }
        index
        pricePosition
        purchaseQuantityAndPriceInfo {
          priceType {
            unitId
            unitName
          }
          totalType {
            unitId
            unitName
          }
          unitType {
            unitId
            unitName
          }
          amount
          price
          totalQuantity
          unitQuantity
        }
      }
      individualPurchaseMainInfo {
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
        }
        supplier {
          supplierId
          supplierName
        }
        user {
          phoneNum
          userId
          userName
        }
        warehouse {
          warehouseId
          warehouseName
        }
        code
        createTime
        id
        manualCode
        note
        purchaseDate
        runCode
        statusEnum
        statusEnumDesc
        type
        typeDesc
      }
    }
    totalRecords
  }
}
    `;

/**
 * __usePageIndividualPurchaseOrderQuery__
 *
 * To run a query within a React component, call `usePageIndividualPurchaseOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageIndividualPurchaseOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageIndividualPurchaseOrderQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageIndividualPurchaseInput: // value for 'pageIndividualPurchaseInput'
 *   },
 * });
 */
export function usePageIndividualPurchaseOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageIndividualPurchaseOrderQuery, PageIndividualPurchaseOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageIndividualPurchaseOrderQuery, PageIndividualPurchaseOrderQueryVariables>(PageIndividualPurchaseOrderDocument, options);
      }
export function usePageIndividualPurchaseOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageIndividualPurchaseOrderQuery, PageIndividualPurchaseOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageIndividualPurchaseOrderQuery, PageIndividualPurchaseOrderQueryVariables>(PageIndividualPurchaseOrderDocument, options);
        }
export type PageIndividualPurchaseOrderQueryHookResult = ReturnType<typeof usePageIndividualPurchaseOrderQuery>;
export type PageIndividualPurchaseOrderLazyQueryHookResult = ReturnType<typeof usePageIndividualPurchaseOrderLazyQuery>;
export type PageIndividualPurchaseOrderQueryResult = Apollo.QueryResult<PageIndividualPurchaseOrderQuery, PageIndividualPurchaseOrderQueryVariables>;
export const ChangeIndividualPurchaseStatusDocument = gql`
    mutation changeIndividualPurchaseStatus($changePurchaseStatusInput: ChangePurchaseStatusInput) {
  changeIndividualPurchaseStatus(
    changePurchaseStatusInput: $changePurchaseStatusInput
  )
}
    `;
export type ChangeIndividualPurchaseStatusMutationFn = Apollo.MutationFunction<ChangeIndividualPurchaseStatusMutation, ChangeIndividualPurchaseStatusMutationVariables>;

/**
 * __useChangeIndividualPurchaseStatusMutation__
 *
 * To run a mutation, you first call `useChangeIndividualPurchaseStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeIndividualPurchaseStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeIndividualPurchaseStatusMutation, { data, loading, error }] = useChangeIndividualPurchaseStatusMutation({
 *   variables: {
 *      changePurchaseStatusInput: // value for 'changePurchaseStatusInput'
 *   },
 * });
 */
export function useChangeIndividualPurchaseStatusMutation(baseOptions?: Apollo.MutationHookOptions<ChangeIndividualPurchaseStatusMutation, ChangeIndividualPurchaseStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeIndividualPurchaseStatusMutation, ChangeIndividualPurchaseStatusMutationVariables>(ChangeIndividualPurchaseStatusDocument, options);
      }
export type ChangeIndividualPurchaseStatusMutationHookResult = ReturnType<typeof useChangeIndividualPurchaseStatusMutation>;
export type ChangeIndividualPurchaseStatusMutationResult = Apollo.MutationResult<ChangeIndividualPurchaseStatusMutation>;
export type ChangeIndividualPurchaseStatusMutationOptions = Apollo.BaseMutationOptions<ChangeIndividualPurchaseStatusMutation, ChangeIndividualPurchaseStatusMutationVariables>;
export const CreateIndividualPurchaseOrderDocument = gql`
    mutation createIndividualPurchaseOrder($createIndividualPurchaseInput: CreateIndividualPurchaseInput) {
  createIndividualPurchaseOrder(
    createIndividualPurchaseInput: $createIndividualPurchaseInput
  )
}
    `;
export type CreateIndividualPurchaseOrderMutationFn = Apollo.MutationFunction<CreateIndividualPurchaseOrderMutation, CreateIndividualPurchaseOrderMutationVariables>;

/**
 * __useCreateIndividualPurchaseOrderMutation__
 *
 * To run a mutation, you first call `useCreateIndividualPurchaseOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIndividualPurchaseOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIndividualPurchaseOrderMutation, { data, loading, error }] = useCreateIndividualPurchaseOrderMutation({
 *   variables: {
 *      createIndividualPurchaseInput: // value for 'createIndividualPurchaseInput'
 *   },
 * });
 */
export function useCreateIndividualPurchaseOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateIndividualPurchaseOrderMutation, CreateIndividualPurchaseOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIndividualPurchaseOrderMutation, CreateIndividualPurchaseOrderMutationVariables>(CreateIndividualPurchaseOrderDocument, options);
      }
export type CreateIndividualPurchaseOrderMutationHookResult = ReturnType<typeof useCreateIndividualPurchaseOrderMutation>;
export type CreateIndividualPurchaseOrderMutationResult = Apollo.MutationResult<CreateIndividualPurchaseOrderMutation>;
export type CreateIndividualPurchaseOrderMutationOptions = Apollo.BaseMutationOptions<CreateIndividualPurchaseOrderMutation, CreateIndividualPurchaseOrderMutationVariables>;
export const UpdateIndividualPurchaseOrderDocument = gql`
    mutation updateIndividualPurchaseOrder($createIndividualPurchaseInput: CreateIndividualPurchaseInput, $id: ID) {
  updateIndividualPurchaseOrder(
    createIndividualPurchaseInput: $createIndividualPurchaseInput
    id: $id
  )
}
    `;
export type UpdateIndividualPurchaseOrderMutationFn = Apollo.MutationFunction<UpdateIndividualPurchaseOrderMutation, UpdateIndividualPurchaseOrderMutationVariables>;

/**
 * __useUpdateIndividualPurchaseOrderMutation__
 *
 * To run a mutation, you first call `useUpdateIndividualPurchaseOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIndividualPurchaseOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIndividualPurchaseOrderMutation, { data, loading, error }] = useUpdateIndividualPurchaseOrderMutation({
 *   variables: {
 *      createIndividualPurchaseInput: // value for 'createIndividualPurchaseInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateIndividualPurchaseOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIndividualPurchaseOrderMutation, UpdateIndividualPurchaseOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIndividualPurchaseOrderMutation, UpdateIndividualPurchaseOrderMutationVariables>(UpdateIndividualPurchaseOrderDocument, options);
      }
export type UpdateIndividualPurchaseOrderMutationHookResult = ReturnType<typeof useUpdateIndividualPurchaseOrderMutation>;
export type UpdateIndividualPurchaseOrderMutationResult = Apollo.MutationResult<UpdateIndividualPurchaseOrderMutation>;
export type UpdateIndividualPurchaseOrderMutationOptions = Apollo.BaseMutationOptions<UpdateIndividualPurchaseOrderMutation, UpdateIndividualPurchaseOrderMutationVariables>;