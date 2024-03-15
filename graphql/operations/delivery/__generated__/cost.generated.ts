import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageDeliveryBillQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageDeliveryBillInput?: SchemaTypes.InputMaybe<SchemaTypes.PageDeliveryBillInput>;
}>;


export type PageDeliveryBillQuery = { pageDeliveryBill?: { __typename?: 'PageDeliveryBillPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'DeliveryBillPayload', billCode?: string, billId?: string, billStatus?: SchemaTypes.DeliveryBillStatusEnum, billStatusDesc?: string, businessUserName?: string, carNum?: string, carType?: string, createTime?: number, deliveryDate?: number, deliveryOrderType?: SchemaTypes.DeliveryOrderTypeEnum, deliveryType?: SchemaTypes.DeliveryMethodEnum, deliveryTypeDesc?: string, driverContact?: string, driverName?: string, manualCode?: string, orderCode?: string, orderId?: string, photos?: Array<string>, statusNote?: string, belongInfo?: Array<{ __typename?: 'SummaryCustomerAddressInfo', customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, feeItems?: Array<{ __typename?: 'PitayaDeliveryBillFeeItemPayload', amount?: number, billId?: string, feeItemId?: string, feeTypeDesc?: string, feeTypeEnum?: SchemaTypes.DeliveryFeeTypeEnum, payModeDesc?: string, payModeEnum?: SchemaTypes.DeliveryFeePayModeEnum, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, items?: Array<{ __typename?: 'DeliveryBillItemPayload', billId?: string, saleOrderCode?: string, saleOrderId?: string, commodities?: Array<{ __typename?: 'DeliveryBillCommodityItemPayload', actualTotalQuantity?: number, actualUnitQuantity?: number, applyTotalQuantity?: number, applyUnitQuantity?: number, bakApplyTotalQuantity?: number, bakApplyUnitQuantity?: number, bakTotalQuantity?: number, bakUnitQuantity?: number, differenceReason?: string, itemId?: string, totalQuantity?: number, unitQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, jointVentureBillItem?: Array<{ __typename?: 'JointVentureBillItemPayload', actualTotalQuantity?: number, actualUnitQuantity?: number, billId?: string, differenceReason?: string, itemId?: string, totalQuantity?: number, unitQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, logs?: Array<{ __typename?: 'DeliveryBillLogPayload', billId?: string, createTime?: number, logId?: string, logType?: string, logTypeDesc?: string, remark?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> } };

export type GetDeliveryBillQueryVariables = SchemaTypes.Exact<{
  getDeliveryBillInput?: SchemaTypes.InputMaybe<SchemaTypes.GetDeliveryBillInput>;
}>;


export type GetDeliveryBillQuery = { getDeliveryBill?: { __typename?: 'DeliveryBillPayload', billCode?: string, billId?: string, billStatus?: SchemaTypes.DeliveryBillStatusEnum, billStatusDesc?: string, businessUserName?: string, carNum?: string, carType?: string, createTime?: number, deliveryDate?: number, deliveryOrderType?: SchemaTypes.DeliveryOrderTypeEnum, deliveryType?: SchemaTypes.DeliveryMethodEnum, deliveryTypeDesc?: string, driverContact?: string, driverName?: string, manualCode?: string, orderCode?: string, orderId?: string, photos?: Array<string>, statusNote?: string, belongInfo?: Array<{ __typename?: 'SummaryCustomerAddressInfo', customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, feeItems?: Array<{ __typename?: 'PitayaDeliveryBillFeeItemPayload', amount?: number, billId?: string, feeItemId?: string, feeTypeDesc?: string, feeTypeEnum?: SchemaTypes.DeliveryFeeTypeEnum, payModeDesc?: string, payModeEnum?: SchemaTypes.DeliveryFeePayModeEnum, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, items?: Array<{ __typename?: 'DeliveryBillItemPayload', billId?: string, saleOrderCode?: string, saleOrderId?: string, commodities?: Array<{ __typename?: 'DeliveryBillCommodityItemPayload', actualTotalQuantity?: number, actualUnitQuantity?: number, applyTotalQuantity?: number, applyUnitQuantity?: number, bakApplyTotalQuantity?: number, bakApplyUnitQuantity?: number, bakTotalQuantity?: number, bakUnitQuantity?: number, differenceReason?: string, itemId?: string, totalQuantity?: number, unitQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, customerAddressInfo?: { __typename?: 'CustomerAddressInfo', customerId?: number, customerName?: string, customerType?: number, deliveryName?: string } }>, jointVentureBillItem?: Array<{ __typename?: 'JointVentureBillItemPayload', actualTotalQuantity?: number, actualUnitQuantity?: number, billId?: string, differenceReason?: string, itemId?: string, totalQuantity?: number, unitQuantity?: number, sku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, logs?: Array<{ __typename?: 'DeliveryBillLogPayload', billId?: string, createTime?: number, logId?: string, logType?: string, logTypeDesc?: string, remark?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } };

export type DeliveryBillStatusCountQueryVariables = SchemaTypes.Exact<{
  deliveryOrderStatusCountInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryOrderStatusCountInput>;
}>;


export type DeliveryBillStatusCountQuery = { deliveryBillStatusCount?: { __typename?: 'DeliveryBillStatusCountPayload', unSubmit?: number, unAudit?: number } };

export type DeliveryBillDeliveryMethodQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type DeliveryBillDeliveryMethodQuery = { deliveryBillDeliveryMethod?: Array<{ __typename?: 'StringOption', label?: string, value?: string }> };

export type DeliveryBillTypeQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type DeliveryBillTypeQuery = { deliveryBillType?: Array<{ __typename?: 'StringOption', label?: string, value?: string }> };

export type DeliveryBillPayModeQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type DeliveryBillPayModeQuery = { deliveryBillPayMode?: Array<{ __typename?: 'StringOption', label?: string, value?: string }> };

export type UpdateDeliveryBillFeeMutationVariables = SchemaTypes.Exact<{
  updateDeliveryBillFeeInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateDeliveryBillFeeInput>;
}>;


export type UpdateDeliveryBillFeeMutation = { updateDeliveryBillFee?: boolean };

export type SubmitDeliveryBillFeeMutationVariables = SchemaTypes.Exact<{
  updateDeliveryBillStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateDeliveryBillStatusInput>;
}>;


export type SubmitDeliveryBillFeeMutation = { submitDeliveryBillFee?: boolean };

export type RejectDeliveryBillFeeMutationVariables = SchemaTypes.Exact<{
  updateDeliveryBillStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateDeliveryBillStatusInput>;
}>;


export type RejectDeliveryBillFeeMutation = { rejectDeliveryBillFee?: boolean };

export type AuditDeliveryBillFeeMutationVariables = SchemaTypes.Exact<{
  updateDeliveryBillStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateDeliveryBillStatusInput>;
}>;


export type AuditDeliveryBillFeeMutation = { auditDeliveryBillFee?: boolean };

export type SaveManualCodeMutationVariables = SchemaTypes.Exact<{
  saveManualCodeInput?: SchemaTypes.InputMaybe<SchemaTypes.SaveManualCodeInput>;
}>;


export type SaveManualCodeMutation = { saveManualCode?: boolean };


export const PageDeliveryBillDocument = gql`
    query pageDeliveryBill($page: Page, $pageDeliveryBillInput: PageDeliveryBillInput) {
  pageDeliveryBill(page: $page, pageDeliveryBillInput: $pageDeliveryBillInput) {
    pageCurrent
    pageSize
    records {
      belongInfo {
        customerAddressInfo {
          customerId
          customerName
          customerType
          deliveryName
        }
      }
      belongOrg {
        orgId
        orgName
      }
      billCode
      billId
      billStatus
      billStatusDesc
      businessUserName
      carNum
      carType
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      deliveryDate
      deliveryOrderType
      deliveryType
      deliveryTypeDesc
      driverContact
      driverName
      feeItems {
        amount
        billId
        feeItemId
        feeTypeDesc
        feeTypeEnum
        payModeDesc
        payModeEnum
        remark
        supplier {
          supplierId
          supplierName
        }
      }
      items {
        billId
        commodities {
          actualTotalQuantity
          actualUnitQuantity
          applyTotalQuantity
          applyUnitQuantity
          bakApplyTotalQuantity
          bakApplyUnitQuantity
          bakTotalQuantity
          bakUnitQuantity
          differenceReason
          itemId
          sku {
            categoryId
            categoryName
            commodityId
            commodityName
            commoditySkuId
            commoditySkuName
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
          totalQuantity
          unitQuantity
        }
        customerAddressInfo {
          customerId
          customerName
          customerType
          deliveryName
        }
        saleOrderCode
        saleOrderId
      }
      jointVentureBillItem {
        actualTotalQuantity
        actualUnitQuantity
        billId
        differenceReason
        itemId
        sku {
          categoryId
          categoryName
          commodityId
          commodityName
          commoditySkuId
          commoditySkuName
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
        totalQuantity
        unitQuantity
      }
      logs {
        billId
        createBy {
          phoneNum
          userId
          userName
        }
        createTime
        logId
        logType
        logTypeDesc
        remark
      }
      manualCode
      orderCode
      orderId
      org {
        orgId
        orgName
      }
      photos
      statusNote
      warehouse {
        warehouseId
        warehouseName
      }
    }
    totalRecords
  }
}
    `;

/**
 * __usePageDeliveryBillQuery__
 *
 * To run a query within a React component, call `usePageDeliveryBillQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDeliveryBillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageDeliveryBillQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageDeliveryBillInput: // value for 'pageDeliveryBillInput'
 *   },
 * });
 */
export function usePageDeliveryBillQuery(baseOptions?: Apollo.QueryHookOptions<PageDeliveryBillQuery, PageDeliveryBillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageDeliveryBillQuery, PageDeliveryBillQueryVariables>(PageDeliveryBillDocument, options);
      }
export function usePageDeliveryBillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageDeliveryBillQuery, PageDeliveryBillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageDeliveryBillQuery, PageDeliveryBillQueryVariables>(PageDeliveryBillDocument, options);
        }
export type PageDeliveryBillQueryHookResult = ReturnType<typeof usePageDeliveryBillQuery>;
export type PageDeliveryBillLazyQueryHookResult = ReturnType<typeof usePageDeliveryBillLazyQuery>;
export type PageDeliveryBillQueryResult = Apollo.QueryResult<PageDeliveryBillQuery, PageDeliveryBillQueryVariables>;
export const GetDeliveryBillDocument = gql`
    query getDeliveryBill($getDeliveryBillInput: GetDeliveryBillInput) {
  getDeliveryBill(getDeliveryBillInput: $getDeliveryBillInput) {
    belongInfo {
      customerAddressInfo {
        customerId
        customerName
        customerType
        deliveryName
      }
    }
    belongOrg {
      orgId
      orgName
    }
    billCode
    billId
    billStatus
    billStatusDesc
    businessUserName
    carNum
    carType
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    deliveryDate
    deliveryOrderType
    deliveryType
    deliveryTypeDesc
    driverContact
    driverName
    feeItems {
      amount
      billId
      feeItemId
      feeTypeDesc
      feeTypeEnum
      payModeDesc
      payModeEnum
      remark
      supplier {
        supplierId
        supplierName
      }
    }
    items {
      billId
      commodities {
        actualTotalQuantity
        actualUnitQuantity
        applyTotalQuantity
        applyUnitQuantity
        bakApplyTotalQuantity
        bakApplyUnitQuantity
        bakTotalQuantity
        bakUnitQuantity
        differenceReason
        itemId
        sku {
          categoryId
          categoryName
          commodityId
          commodityName
          commoditySkuId
          commoditySkuName
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
        totalQuantity
        unitQuantity
      }
      customerAddressInfo {
        customerId
        customerName
        customerType
        deliveryName
      }
      saleOrderCode
      saleOrderId
    }
    jointVentureBillItem {
      actualTotalQuantity
      actualUnitQuantity
      billId
      differenceReason
      itemId
      sku {
        categoryId
        categoryName
        commodityId
        commodityName
        commoditySkuId
        commoditySkuName
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
      totalQuantity
      unitQuantity
    }
    logs {
      billId
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      logId
      logType
      logTypeDesc
      remark
    }
    manualCode
    orderCode
    orderId
    org {
      orgId
      orgName
    }
    photos
    statusNote
    warehouse {
      warehouseId
      warehouseName
    }
  }
}
    `;

/**
 * __useGetDeliveryBillQuery__
 *
 * To run a query within a React component, call `useGetDeliveryBillQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeliveryBillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeliveryBillQuery({
 *   variables: {
 *      getDeliveryBillInput: // value for 'getDeliveryBillInput'
 *   },
 * });
 */
export function useGetDeliveryBillQuery(baseOptions?: Apollo.QueryHookOptions<GetDeliveryBillQuery, GetDeliveryBillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeliveryBillQuery, GetDeliveryBillQueryVariables>(GetDeliveryBillDocument, options);
      }
export function useGetDeliveryBillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeliveryBillQuery, GetDeliveryBillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeliveryBillQuery, GetDeliveryBillQueryVariables>(GetDeliveryBillDocument, options);
        }
export type GetDeliveryBillQueryHookResult = ReturnType<typeof useGetDeliveryBillQuery>;
export type GetDeliveryBillLazyQueryHookResult = ReturnType<typeof useGetDeliveryBillLazyQuery>;
export type GetDeliveryBillQueryResult = Apollo.QueryResult<GetDeliveryBillQuery, GetDeliveryBillQueryVariables>;
export const DeliveryBillStatusCountDocument = gql`
    query deliveryBillStatusCount($deliveryOrderStatusCountInput: DeliveryOrderStatusCountInput) {
  deliveryBillStatusCount(
    deliveryOrderStatusCountInput: $deliveryOrderStatusCountInput
  ) {
    unSubmit
    unAudit
  }
}
    `;

/**
 * __useDeliveryBillStatusCountQuery__
 *
 * To run a query within a React component, call `useDeliveryBillStatusCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryBillStatusCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryBillStatusCountQuery({
 *   variables: {
 *      deliveryOrderStatusCountInput: // value for 'deliveryOrderStatusCountInput'
 *   },
 * });
 */
export function useDeliveryBillStatusCountQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryBillStatusCountQuery, DeliveryBillStatusCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryBillStatusCountQuery, DeliveryBillStatusCountQueryVariables>(DeliveryBillStatusCountDocument, options);
      }
export function useDeliveryBillStatusCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryBillStatusCountQuery, DeliveryBillStatusCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryBillStatusCountQuery, DeliveryBillStatusCountQueryVariables>(DeliveryBillStatusCountDocument, options);
        }
export type DeliveryBillStatusCountQueryHookResult = ReturnType<typeof useDeliveryBillStatusCountQuery>;
export type DeliveryBillStatusCountLazyQueryHookResult = ReturnType<typeof useDeliveryBillStatusCountLazyQuery>;
export type DeliveryBillStatusCountQueryResult = Apollo.QueryResult<DeliveryBillStatusCountQuery, DeliveryBillStatusCountQueryVariables>;
export const DeliveryBillDeliveryMethodDocument = gql`
    query deliveryBillDeliveryMethod {
  deliveryBillDeliveryMethod {
    label
    value
  }
}
    `;

/**
 * __useDeliveryBillDeliveryMethodQuery__
 *
 * To run a query within a React component, call `useDeliveryBillDeliveryMethodQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryBillDeliveryMethodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryBillDeliveryMethodQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliveryBillDeliveryMethodQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryBillDeliveryMethodQuery, DeliveryBillDeliveryMethodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryBillDeliveryMethodQuery, DeliveryBillDeliveryMethodQueryVariables>(DeliveryBillDeliveryMethodDocument, options);
      }
export function useDeliveryBillDeliveryMethodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryBillDeliveryMethodQuery, DeliveryBillDeliveryMethodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryBillDeliveryMethodQuery, DeliveryBillDeliveryMethodQueryVariables>(DeliveryBillDeliveryMethodDocument, options);
        }
export type DeliveryBillDeliveryMethodQueryHookResult = ReturnType<typeof useDeliveryBillDeliveryMethodQuery>;
export type DeliveryBillDeliveryMethodLazyQueryHookResult = ReturnType<typeof useDeliveryBillDeliveryMethodLazyQuery>;
export type DeliveryBillDeliveryMethodQueryResult = Apollo.QueryResult<DeliveryBillDeliveryMethodQuery, DeliveryBillDeliveryMethodQueryVariables>;
export const DeliveryBillTypeDocument = gql`
    query deliveryBillType {
  deliveryBillType {
    label
    value
  }
}
    `;

/**
 * __useDeliveryBillTypeQuery__
 *
 * To run a query within a React component, call `useDeliveryBillTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryBillTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryBillTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliveryBillTypeQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryBillTypeQuery, DeliveryBillTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryBillTypeQuery, DeliveryBillTypeQueryVariables>(DeliveryBillTypeDocument, options);
      }
export function useDeliveryBillTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryBillTypeQuery, DeliveryBillTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryBillTypeQuery, DeliveryBillTypeQueryVariables>(DeliveryBillTypeDocument, options);
        }
export type DeliveryBillTypeQueryHookResult = ReturnType<typeof useDeliveryBillTypeQuery>;
export type DeliveryBillTypeLazyQueryHookResult = ReturnType<typeof useDeliveryBillTypeLazyQuery>;
export type DeliveryBillTypeQueryResult = Apollo.QueryResult<DeliveryBillTypeQuery, DeliveryBillTypeQueryVariables>;
export const DeliveryBillPayModeDocument = gql`
    query deliveryBillPayMode {
  deliveryBillPayMode {
    label
    value
  }
}
    `;

/**
 * __useDeliveryBillPayModeQuery__
 *
 * To run a query within a React component, call `useDeliveryBillPayModeQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryBillPayModeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryBillPayModeQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliveryBillPayModeQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryBillPayModeQuery, DeliveryBillPayModeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryBillPayModeQuery, DeliveryBillPayModeQueryVariables>(DeliveryBillPayModeDocument, options);
      }
export function useDeliveryBillPayModeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryBillPayModeQuery, DeliveryBillPayModeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryBillPayModeQuery, DeliveryBillPayModeQueryVariables>(DeliveryBillPayModeDocument, options);
        }
export type DeliveryBillPayModeQueryHookResult = ReturnType<typeof useDeliveryBillPayModeQuery>;
export type DeliveryBillPayModeLazyQueryHookResult = ReturnType<typeof useDeliveryBillPayModeLazyQuery>;
export type DeliveryBillPayModeQueryResult = Apollo.QueryResult<DeliveryBillPayModeQuery, DeliveryBillPayModeQueryVariables>;
export const UpdateDeliveryBillFeeDocument = gql`
    mutation updateDeliveryBillFee($updateDeliveryBillFeeInput: UpdateDeliveryBillFeeInput) {
  updateDeliveryBillFee(updateDeliveryBillFeeInput: $updateDeliveryBillFeeInput)
}
    `;
export type UpdateDeliveryBillFeeMutationFn = Apollo.MutationFunction<UpdateDeliveryBillFeeMutation, UpdateDeliveryBillFeeMutationVariables>;

/**
 * __useUpdateDeliveryBillFeeMutation__
 *
 * To run a mutation, you first call `useUpdateDeliveryBillFeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeliveryBillFeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeliveryBillFeeMutation, { data, loading, error }] = useUpdateDeliveryBillFeeMutation({
 *   variables: {
 *      updateDeliveryBillFeeInput: // value for 'updateDeliveryBillFeeInput'
 *   },
 * });
 */
export function useUpdateDeliveryBillFeeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeliveryBillFeeMutation, UpdateDeliveryBillFeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeliveryBillFeeMutation, UpdateDeliveryBillFeeMutationVariables>(UpdateDeliveryBillFeeDocument, options);
      }
export type UpdateDeliveryBillFeeMutationHookResult = ReturnType<typeof useUpdateDeliveryBillFeeMutation>;
export type UpdateDeliveryBillFeeMutationResult = Apollo.MutationResult<UpdateDeliveryBillFeeMutation>;
export type UpdateDeliveryBillFeeMutationOptions = Apollo.BaseMutationOptions<UpdateDeliveryBillFeeMutation, UpdateDeliveryBillFeeMutationVariables>;
export const SubmitDeliveryBillFeeDocument = gql`
    mutation submitDeliveryBillFee($updateDeliveryBillStatusInput: UpdateDeliveryBillStatusInput) {
  submitDeliveryBillFee(
    updateDeliveryBillStatusInput: $updateDeliveryBillStatusInput
  )
}
    `;
export type SubmitDeliveryBillFeeMutationFn = Apollo.MutationFunction<SubmitDeliveryBillFeeMutation, SubmitDeliveryBillFeeMutationVariables>;

/**
 * __useSubmitDeliveryBillFeeMutation__
 *
 * To run a mutation, you first call `useSubmitDeliveryBillFeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitDeliveryBillFeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitDeliveryBillFeeMutation, { data, loading, error }] = useSubmitDeliveryBillFeeMutation({
 *   variables: {
 *      updateDeliveryBillStatusInput: // value for 'updateDeliveryBillStatusInput'
 *   },
 * });
 */
export function useSubmitDeliveryBillFeeMutation(baseOptions?: Apollo.MutationHookOptions<SubmitDeliveryBillFeeMutation, SubmitDeliveryBillFeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitDeliveryBillFeeMutation, SubmitDeliveryBillFeeMutationVariables>(SubmitDeliveryBillFeeDocument, options);
      }
export type SubmitDeliveryBillFeeMutationHookResult = ReturnType<typeof useSubmitDeliveryBillFeeMutation>;
export type SubmitDeliveryBillFeeMutationResult = Apollo.MutationResult<SubmitDeliveryBillFeeMutation>;
export type SubmitDeliveryBillFeeMutationOptions = Apollo.BaseMutationOptions<SubmitDeliveryBillFeeMutation, SubmitDeliveryBillFeeMutationVariables>;
export const RejectDeliveryBillFeeDocument = gql`
    mutation rejectDeliveryBillFee($updateDeliveryBillStatusInput: UpdateDeliveryBillStatusInput) {
  rejectDeliveryBillFee(
    updateDeliveryBillStatusInput: $updateDeliveryBillStatusInput
  )
}
    `;
export type RejectDeliveryBillFeeMutationFn = Apollo.MutationFunction<RejectDeliveryBillFeeMutation, RejectDeliveryBillFeeMutationVariables>;

/**
 * __useRejectDeliveryBillFeeMutation__
 *
 * To run a mutation, you first call `useRejectDeliveryBillFeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectDeliveryBillFeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectDeliveryBillFeeMutation, { data, loading, error }] = useRejectDeliveryBillFeeMutation({
 *   variables: {
 *      updateDeliveryBillStatusInput: // value for 'updateDeliveryBillStatusInput'
 *   },
 * });
 */
export function useRejectDeliveryBillFeeMutation(baseOptions?: Apollo.MutationHookOptions<RejectDeliveryBillFeeMutation, RejectDeliveryBillFeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectDeliveryBillFeeMutation, RejectDeliveryBillFeeMutationVariables>(RejectDeliveryBillFeeDocument, options);
      }
export type RejectDeliveryBillFeeMutationHookResult = ReturnType<typeof useRejectDeliveryBillFeeMutation>;
export type RejectDeliveryBillFeeMutationResult = Apollo.MutationResult<RejectDeliveryBillFeeMutation>;
export type RejectDeliveryBillFeeMutationOptions = Apollo.BaseMutationOptions<RejectDeliveryBillFeeMutation, RejectDeliveryBillFeeMutationVariables>;
export const AuditDeliveryBillFeeDocument = gql`
    mutation auditDeliveryBillFee($updateDeliveryBillStatusInput: UpdateDeliveryBillStatusInput) {
  auditDeliveryBillFee(
    updateDeliveryBillStatusInput: $updateDeliveryBillStatusInput
  )
}
    `;
export type AuditDeliveryBillFeeMutationFn = Apollo.MutationFunction<AuditDeliveryBillFeeMutation, AuditDeliveryBillFeeMutationVariables>;

/**
 * __useAuditDeliveryBillFeeMutation__
 *
 * To run a mutation, you first call `useAuditDeliveryBillFeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuditDeliveryBillFeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [auditDeliveryBillFeeMutation, { data, loading, error }] = useAuditDeliveryBillFeeMutation({
 *   variables: {
 *      updateDeliveryBillStatusInput: // value for 'updateDeliveryBillStatusInput'
 *   },
 * });
 */
export function useAuditDeliveryBillFeeMutation(baseOptions?: Apollo.MutationHookOptions<AuditDeliveryBillFeeMutation, AuditDeliveryBillFeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuditDeliveryBillFeeMutation, AuditDeliveryBillFeeMutationVariables>(AuditDeliveryBillFeeDocument, options);
      }
export type AuditDeliveryBillFeeMutationHookResult = ReturnType<typeof useAuditDeliveryBillFeeMutation>;
export type AuditDeliveryBillFeeMutationResult = Apollo.MutationResult<AuditDeliveryBillFeeMutation>;
export type AuditDeliveryBillFeeMutationOptions = Apollo.BaseMutationOptions<AuditDeliveryBillFeeMutation, AuditDeliveryBillFeeMutationVariables>;
export const SaveManualCodeDocument = gql`
    mutation saveManualCode($saveManualCodeInput: SaveManualCodeInput) {
  saveManualCode(saveManualCodeInput: $saveManualCodeInput)
}
    `;
export type SaveManualCodeMutationFn = Apollo.MutationFunction<SaveManualCodeMutation, SaveManualCodeMutationVariables>;

/**
 * __useSaveManualCodeMutation__
 *
 * To run a mutation, you first call `useSaveManualCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveManualCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveManualCodeMutation, { data, loading, error }] = useSaveManualCodeMutation({
 *   variables: {
 *      saveManualCodeInput: // value for 'saveManualCodeInput'
 *   },
 * });
 */
export function useSaveManualCodeMutation(baseOptions?: Apollo.MutationHookOptions<SaveManualCodeMutation, SaveManualCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveManualCodeMutation, SaveManualCodeMutationVariables>(SaveManualCodeDocument, options);
      }
export type SaveManualCodeMutationHookResult = ReturnType<typeof useSaveManualCodeMutation>;
export type SaveManualCodeMutationResult = Apollo.MutationResult<SaveManualCodeMutation>;
export type SaveManualCodeMutationOptions = Apollo.BaseMutationOptions<SaveManualCodeMutation, SaveManualCodeMutationVariables>;