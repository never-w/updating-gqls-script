import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CountDeliveryFeeQueryVariables = SchemaTypes.Exact<{
  incomeStatementType: SchemaTypes.BillMainTypeEnum;
}>;


export type CountDeliveryFeeQuery = { countDeliveryFee?: number };

export type DetailDeliveryFeeQueryVariables = SchemaTypes.Exact<{
  billMainId: SchemaTypes.Scalars['ID'];
}>;


export type DetailDeliveryFeeQuery = { detailDeliveryFee?: { __typename?: 'DetailDeliveryFeePayload', freightFeeTotalAmount?: number, billOperationLogPayload?: Array<{ __typename?: 'BillOperationLogPayload', createTime?: number, endStatus?: SchemaTypes.PitayaBillStatusEnum, endStatusDesc?: string, note?: string, startStatus?: SchemaTypes.PitayaBillStatusEnum, startStatusDesc?: string, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, deliveryFeeMainInfo?: { __typename?: 'DeliveryFeeMainInfo', billMainCode?: string, billMainId?: string, billMainType?: SchemaTypes.BillMainTypeEnum, billMainTypeDesc?: string, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusDesc?: string, createTime?: number, mark?: string, templateId?: string, note?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, deliveryInfo?: { __typename?: 'DeliveryInfo', deliveryCode?: string, deliveryId?: string, deliveryTime?: number, manualCode?: string, receptionTime?: number, carNum?: string, carType?: string, deliveryType?: SchemaTypes.DeliveryMethodEnum, deliveryTypeDesc?: string, driverContact?: string, driverName?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customerList?: Array<{ __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }>, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, fileInfoList?: Array<{ __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number }> } }, freightFeeList?: Array<{ __typename?: 'FreightItem', amount?: number, costId?: string, costName?: string, data?: string, dictItemId?: string, extendId?: number, note?: string, ruleId?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, salesOrderList?: Array<{ __typename?: 'SalesOrder', deliveryCommodityList?: Array<{ __typename?: 'DetailDeliveryCommodity', batchCode?: string, batchId?: string, itemId?: string, sourceOrderItemId?: string, markDescList?: Array<string>, markList?: Array<SchemaTypes.ApplyMarkEnum>, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commodityType?: { __typename?: 'PitayaCommodityType', commodityTypeId?: number, commodityTypeName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, deliveryQuantity?: { __typename?: 'QuantityAndPriceAndTypeInfo', price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, deliveryReturnQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, differencesQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, receptionQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number } }>, sourceOrder?: { __typename?: 'SourceOrder', salesOrderCode?: string, salesOrderId?: string, salesOrderType?: number, salesOrderTypeDesc?: string, salesTime?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number } } }> } };

export type PageDeliveryFeeQueryVariables = SchemaTypes.Exact<{
  page: SchemaTypes.Page;
  pageDeliveryFeeInput?: SchemaTypes.InputMaybe<SchemaTypes.PageDeliveryFeeInput>;
}>;


export type PageDeliveryFeeQuery = { pageDeliveryFee?: { __typename?: 'PageDeliveryFeePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'DeliveryFeePayload', commodityList?: Array<{ __typename?: 'DetailDeliveryCommodity', batchCode?: string, batchId?: string, itemId?: string, sourceOrderItemId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, commodityType?: { __typename?: 'PitayaCommodityType', commodityTypeId?: number, commodityTypeName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, deliveryQuantity?: { __typename?: 'QuantityAndPriceAndTypeInfo', price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, deliveryReturnQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, differencesQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, receptionQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number } }>, deliveryFeeMainInfo?: { __typename?: 'DeliveryFeeMainInfo', billMainCode?: string, billMainId?: string, billMainType?: SchemaTypes.BillMainTypeEnum, billMainTypeDesc?: string, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusDesc?: string, createTime?: number, mark?: string, templateId?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, deliveryInfo?: { __typename?: 'DeliveryInfo', deliveryCode?: string, deliveryId?: string, deliveryTime?: number, manualCode?: string, receptionTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customerList?: Array<{ __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }>, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, fileInfoList?: Array<{ __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number }> } } }> } };

export type ReviewDeliveryFeeBySalesmanMutationVariables = SchemaTypes.Exact<{
  changBill2StatusInput: SchemaTypes.ChangeBill2StatusInput;
}>;


export type ReviewDeliveryFeeBySalesmanMutation = { reviewDeliveryFeeBySalesman?: boolean };

export type SubmitDeliveryFeeMutationVariables = SchemaTypes.Exact<{
  submitBillInput?: SchemaTypes.InputMaybe<SchemaTypes.SubmitBillInput>;
}>;


export type SubmitDeliveryFeeMutation = { submitDeliveryFee?: boolean };

export type UpdateDeliveryFeeFreightMutationVariables = SchemaTypes.Exact<{
  updateDeliveryFeeFreightInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateDeliveryFeeFreightInput>;
}>;


export type UpdateDeliveryFeeFreightMutation = { updateDeliveryFeeFreight?: boolean };

export type UpdateDeliveryFeeManualCodeMutationVariables = SchemaTypes.Exact<{
  updateDeliveryFeeManualCodeInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateDeliveryFeeManualCodeInput>;
}>;


export type UpdateDeliveryFeeManualCodeMutation = { updateDeliveryFeeManualCode?: boolean };

export type UpdateDeliveryReceiveReceiptMutationVariables = SchemaTypes.Exact<{
  updateDeliveryReceiveReceiptInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateDeliveryReceiveReceiptInput>;
}>;


export type UpdateDeliveryReceiveReceiptMutation = { updateDeliveryReceiveReceipt?: boolean };


export const CountDeliveryFeeDocument = gql`
    query countDeliveryFee($incomeStatementType: BillMainTypeEnum!) {
  countDeliveryFee(incomeStatementType: $incomeStatementType)
}
    `;

/**
 * __useCountDeliveryFeeQuery__
 *
 * To run a query within a React component, call `useCountDeliveryFeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountDeliveryFeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountDeliveryFeeQuery({
 *   variables: {
 *      incomeStatementType: // value for 'incomeStatementType'
 *   },
 * });
 */
export function useCountDeliveryFeeQuery(baseOptions: Apollo.QueryHookOptions<CountDeliveryFeeQuery, CountDeliveryFeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountDeliveryFeeQuery, CountDeliveryFeeQueryVariables>(CountDeliveryFeeDocument, options);
      }
export function useCountDeliveryFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountDeliveryFeeQuery, CountDeliveryFeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountDeliveryFeeQuery, CountDeliveryFeeQueryVariables>(CountDeliveryFeeDocument, options);
        }
export type CountDeliveryFeeQueryHookResult = ReturnType<typeof useCountDeliveryFeeQuery>;
export type CountDeliveryFeeLazyQueryHookResult = ReturnType<typeof useCountDeliveryFeeLazyQuery>;
export type CountDeliveryFeeQueryResult = Apollo.QueryResult<CountDeliveryFeeQuery, CountDeliveryFeeQueryVariables>;
export const DetailDeliveryFeeDocument = gql`
    query detailDeliveryFee($billMainId: ID!) {
  detailDeliveryFee(billMainId: $billMainId) {
    billOperationLogPayload {
      user {
        phoneNum
        userId
        userName
      }
      createTime
      endStatus
      endStatusDesc
      note
      startStatus
      startStatusDesc
    }
    deliveryFeeMainInfo {
      createBy {
        phoneNum
        userId
        userName
      }
      billMainCode
      billMainId
      billMainType
      billMainTypeDesc
      billStatus
      billStatusDesc
      createTime
      deliveryInfo {
        belongOrg {
          orgId
          orgName
        }
        customerList {
          customerId
          customerName
          customerType
          lastLevelId
          lastLevelName
        }
        user {
          phoneNum
          userId
          userName
        }
        deliveryCode
        deliveryId
        deliveryTime
        manualCode
        receptionTime
        fileInfoList {
          accessType
          contentType
          createTime
          fileUrl
          id
          name
          size
          tags
          updateTime
        }
        carNum
        carType
        deliveryType
        deliveryTypeDesc
        driverContact
        driverName
      }
      mark
      templateId
      note
    }
    freightFeeList {
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
    freightFeeTotalAmount
    salesOrderList {
      deliveryCommodityList {
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
        warehouse {
          warehouseId
          warehouseName
        }
        batchCode
        batchId
        deliveryQuantity {
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
        deliveryReturnQuantity {
          totalQuantity
          unitQuantity
        }
        differencesQuantity {
          totalQuantity
          unitQuantity
        }
        itemId
        receptionQuantity {
          totalQuantity
          unitQuantity
        }
        sourceOrderItemId
        markDescList
        markList
      }
      sourceOrder {
        customer {
          customerId
          customerName
          customerType
          lastLevelId
        }
        salesOrderCode
        salesOrderId
        salesOrderType
        salesOrderTypeDesc
        salesTime
      }
    }
  }
}
    `;

/**
 * __useDetailDeliveryFeeQuery__
 *
 * To run a query within a React component, call `useDetailDeliveryFeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailDeliveryFeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailDeliveryFeeQuery({
 *   variables: {
 *      billMainId: // value for 'billMainId'
 *   },
 * });
 */
export function useDetailDeliveryFeeQuery(baseOptions: Apollo.QueryHookOptions<DetailDeliveryFeeQuery, DetailDeliveryFeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DetailDeliveryFeeQuery, DetailDeliveryFeeQueryVariables>(DetailDeliveryFeeDocument, options);
      }
export function useDetailDeliveryFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DetailDeliveryFeeQuery, DetailDeliveryFeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DetailDeliveryFeeQuery, DetailDeliveryFeeQueryVariables>(DetailDeliveryFeeDocument, options);
        }
export type DetailDeliveryFeeQueryHookResult = ReturnType<typeof useDetailDeliveryFeeQuery>;
export type DetailDeliveryFeeLazyQueryHookResult = ReturnType<typeof useDetailDeliveryFeeLazyQuery>;
export type DetailDeliveryFeeQueryResult = Apollo.QueryResult<DetailDeliveryFeeQuery, DetailDeliveryFeeQueryVariables>;
export const PageDeliveryFeeDocument = gql`
    query pageDeliveryFee($page: Page!, $pageDeliveryFeeInput: PageDeliveryFeeInput) {
  pageDeliveryFee(page: $page, pageDeliveryFeeInput: $pageDeliveryFeeInput) {
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
        warehouse {
          warehouseId
          warehouseName
        }
        batchCode
        batchId
        deliveryQuantity {
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
        deliveryReturnQuantity {
          totalQuantity
          unitQuantity
        }
        differencesQuantity {
          totalQuantity
          unitQuantity
        }
        itemId
        receptionQuantity {
          totalQuantity
          unitQuantity
        }
        sourceOrderItemId
      }
      deliveryFeeMainInfo {
        createBy {
          phoneNum
          userId
          userName
        }
        billMainCode
        billMainId
        billMainType
        billMainTypeDesc
        billStatus
        billStatusDesc
        createTime
        deliveryInfo {
          belongOrg {
            orgId
            orgName
          }
          customerList {
            customerId
            customerName
            customerType
            lastLevelId
          }
          user {
            phoneNum
            userId
            userName
          }
          deliveryCode
          deliveryId
          deliveryTime
          manualCode
          receptionTime
          fileInfoList {
            accessType
            contentType
            createTime
            fileUrl
            id
            name
            size
            tags
            updateTime
          }
        }
        mark
        templateId
      }
    }
    totalRecords
  }
}
    `;

/**
 * __usePageDeliveryFeeQuery__
 *
 * To run a query within a React component, call `usePageDeliveryFeeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDeliveryFeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageDeliveryFeeQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageDeliveryFeeInput: // value for 'pageDeliveryFeeInput'
 *   },
 * });
 */
export function usePageDeliveryFeeQuery(baseOptions: Apollo.QueryHookOptions<PageDeliveryFeeQuery, PageDeliveryFeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageDeliveryFeeQuery, PageDeliveryFeeQueryVariables>(PageDeliveryFeeDocument, options);
      }
export function usePageDeliveryFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageDeliveryFeeQuery, PageDeliveryFeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageDeliveryFeeQuery, PageDeliveryFeeQueryVariables>(PageDeliveryFeeDocument, options);
        }
export type PageDeliveryFeeQueryHookResult = ReturnType<typeof usePageDeliveryFeeQuery>;
export type PageDeliveryFeeLazyQueryHookResult = ReturnType<typeof usePageDeliveryFeeLazyQuery>;
export type PageDeliveryFeeQueryResult = Apollo.QueryResult<PageDeliveryFeeQuery, PageDeliveryFeeQueryVariables>;
export const ReviewDeliveryFeeBySalesmanDocument = gql`
    mutation reviewDeliveryFeeBySalesman($changBill2StatusInput: ChangeBill2StatusInput!) {
  reviewDeliveryFeeBySalesman(changBill2StatusInput: $changBill2StatusInput)
}
    `;
export type ReviewDeliveryFeeBySalesmanMutationFn = Apollo.MutationFunction<ReviewDeliveryFeeBySalesmanMutation, ReviewDeliveryFeeBySalesmanMutationVariables>;

/**
 * __useReviewDeliveryFeeBySalesmanMutation__
 *
 * To run a mutation, you first call `useReviewDeliveryFeeBySalesmanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReviewDeliveryFeeBySalesmanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reviewDeliveryFeeBySalesmanMutation, { data, loading, error }] = useReviewDeliveryFeeBySalesmanMutation({
 *   variables: {
 *      changBill2StatusInput: // value for 'changBill2StatusInput'
 *   },
 * });
 */
export function useReviewDeliveryFeeBySalesmanMutation(baseOptions?: Apollo.MutationHookOptions<ReviewDeliveryFeeBySalesmanMutation, ReviewDeliveryFeeBySalesmanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReviewDeliveryFeeBySalesmanMutation, ReviewDeliveryFeeBySalesmanMutationVariables>(ReviewDeliveryFeeBySalesmanDocument, options);
      }
export type ReviewDeliveryFeeBySalesmanMutationHookResult = ReturnType<typeof useReviewDeliveryFeeBySalesmanMutation>;
export type ReviewDeliveryFeeBySalesmanMutationResult = Apollo.MutationResult<ReviewDeliveryFeeBySalesmanMutation>;
export type ReviewDeliveryFeeBySalesmanMutationOptions = Apollo.BaseMutationOptions<ReviewDeliveryFeeBySalesmanMutation, ReviewDeliveryFeeBySalesmanMutationVariables>;
export const SubmitDeliveryFeeDocument = gql`
    mutation submitDeliveryFee($submitBillInput: SubmitBillInput) {
  submitDeliveryFee(submitBillInput: $submitBillInput)
}
    `;
export type SubmitDeliveryFeeMutationFn = Apollo.MutationFunction<SubmitDeliveryFeeMutation, SubmitDeliveryFeeMutationVariables>;

/**
 * __useSubmitDeliveryFeeMutation__
 *
 * To run a mutation, you first call `useSubmitDeliveryFeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitDeliveryFeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitDeliveryFeeMutation, { data, loading, error }] = useSubmitDeliveryFeeMutation({
 *   variables: {
 *      submitBillInput: // value for 'submitBillInput'
 *   },
 * });
 */
export function useSubmitDeliveryFeeMutation(baseOptions?: Apollo.MutationHookOptions<SubmitDeliveryFeeMutation, SubmitDeliveryFeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitDeliveryFeeMutation, SubmitDeliveryFeeMutationVariables>(SubmitDeliveryFeeDocument, options);
      }
export type SubmitDeliveryFeeMutationHookResult = ReturnType<typeof useSubmitDeliveryFeeMutation>;
export type SubmitDeliveryFeeMutationResult = Apollo.MutationResult<SubmitDeliveryFeeMutation>;
export type SubmitDeliveryFeeMutationOptions = Apollo.BaseMutationOptions<SubmitDeliveryFeeMutation, SubmitDeliveryFeeMutationVariables>;
export const UpdateDeliveryFeeFreightDocument = gql`
    mutation updateDeliveryFeeFreight($updateDeliveryFeeFreightInput: UpdateDeliveryFeeFreightInput) {
  updateDeliveryFeeFreight(
    updateDeliveryFeeFreightInput: $updateDeliveryFeeFreightInput
  )
}
    `;
export type UpdateDeliveryFeeFreightMutationFn = Apollo.MutationFunction<UpdateDeliveryFeeFreightMutation, UpdateDeliveryFeeFreightMutationVariables>;

/**
 * __useUpdateDeliveryFeeFreightMutation__
 *
 * To run a mutation, you first call `useUpdateDeliveryFeeFreightMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeliveryFeeFreightMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeliveryFeeFreightMutation, { data, loading, error }] = useUpdateDeliveryFeeFreightMutation({
 *   variables: {
 *      updateDeliveryFeeFreightInput: // value for 'updateDeliveryFeeFreightInput'
 *   },
 * });
 */
export function useUpdateDeliveryFeeFreightMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeliveryFeeFreightMutation, UpdateDeliveryFeeFreightMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeliveryFeeFreightMutation, UpdateDeliveryFeeFreightMutationVariables>(UpdateDeliveryFeeFreightDocument, options);
      }
export type UpdateDeliveryFeeFreightMutationHookResult = ReturnType<typeof useUpdateDeliveryFeeFreightMutation>;
export type UpdateDeliveryFeeFreightMutationResult = Apollo.MutationResult<UpdateDeliveryFeeFreightMutation>;
export type UpdateDeliveryFeeFreightMutationOptions = Apollo.BaseMutationOptions<UpdateDeliveryFeeFreightMutation, UpdateDeliveryFeeFreightMutationVariables>;
export const UpdateDeliveryFeeManualCodeDocument = gql`
    mutation updateDeliveryFeeManualCode($updateDeliveryFeeManualCodeInput: UpdateDeliveryFeeManualCodeInput) {
  updateDeliveryFeeManualCode(
    updateDeliveryFeeManualCodeInput: $updateDeliveryFeeManualCodeInput
  )
}
    `;
export type UpdateDeliveryFeeManualCodeMutationFn = Apollo.MutationFunction<UpdateDeliveryFeeManualCodeMutation, UpdateDeliveryFeeManualCodeMutationVariables>;

/**
 * __useUpdateDeliveryFeeManualCodeMutation__
 *
 * To run a mutation, you first call `useUpdateDeliveryFeeManualCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeliveryFeeManualCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeliveryFeeManualCodeMutation, { data, loading, error }] = useUpdateDeliveryFeeManualCodeMutation({
 *   variables: {
 *      updateDeliveryFeeManualCodeInput: // value for 'updateDeliveryFeeManualCodeInput'
 *   },
 * });
 */
export function useUpdateDeliveryFeeManualCodeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeliveryFeeManualCodeMutation, UpdateDeliveryFeeManualCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeliveryFeeManualCodeMutation, UpdateDeliveryFeeManualCodeMutationVariables>(UpdateDeliveryFeeManualCodeDocument, options);
      }
export type UpdateDeliveryFeeManualCodeMutationHookResult = ReturnType<typeof useUpdateDeliveryFeeManualCodeMutation>;
export type UpdateDeliveryFeeManualCodeMutationResult = Apollo.MutationResult<UpdateDeliveryFeeManualCodeMutation>;
export type UpdateDeliveryFeeManualCodeMutationOptions = Apollo.BaseMutationOptions<UpdateDeliveryFeeManualCodeMutation, UpdateDeliveryFeeManualCodeMutationVariables>;
export const UpdateDeliveryReceiveReceiptDocument = gql`
    mutation updateDeliveryReceiveReceipt($updateDeliveryReceiveReceiptInput: UpdateDeliveryReceiveReceiptInput) {
  updateDeliveryReceiveReceipt(
    updateDeliveryReceiveReceiptInput: $updateDeliveryReceiveReceiptInput
  )
}
    `;
export type UpdateDeliveryReceiveReceiptMutationFn = Apollo.MutationFunction<UpdateDeliveryReceiveReceiptMutation, UpdateDeliveryReceiveReceiptMutationVariables>;

/**
 * __useUpdateDeliveryReceiveReceiptMutation__
 *
 * To run a mutation, you first call `useUpdateDeliveryReceiveReceiptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeliveryReceiveReceiptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeliveryReceiveReceiptMutation, { data, loading, error }] = useUpdateDeliveryReceiveReceiptMutation({
 *   variables: {
 *      updateDeliveryReceiveReceiptInput: // value for 'updateDeliveryReceiveReceiptInput'
 *   },
 * });
 */
export function useUpdateDeliveryReceiveReceiptMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeliveryReceiveReceiptMutation, UpdateDeliveryReceiveReceiptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeliveryReceiveReceiptMutation, UpdateDeliveryReceiveReceiptMutationVariables>(UpdateDeliveryReceiveReceiptDocument, options);
      }
export type UpdateDeliveryReceiveReceiptMutationHookResult = ReturnType<typeof useUpdateDeliveryReceiveReceiptMutation>;
export type UpdateDeliveryReceiveReceiptMutationResult = Apollo.MutationResult<UpdateDeliveryReceiveReceiptMutation>;
export type UpdateDeliveryReceiveReceiptMutationOptions = Apollo.BaseMutationOptions<UpdateDeliveryReceiveReceiptMutation, UpdateDeliveryReceiveReceiptMutationVariables>;