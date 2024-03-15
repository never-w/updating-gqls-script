import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type InternalPurchaseOrderQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaInternalPurchaseIdInput;
}>;


export type InternalPurchaseOrderQuery = { internalPurchaseOrder?: { __typename?: 'InternalPurchasePayload', billMainId?: string, commodityTotalSalePrice?: number, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, isConfirmed?: boolean, purchaseCode?: string, purchaseId?: string, purchaseStatus?: SchemaTypes.PurchaseStatusEnum, purchaseStatusName?: string, purchaseTime?: number, templateId?: string, totalTransportFees?: number, sourceBillMainId?: string, purchaseSubType?: SchemaTypes.PurchaseSubType, purchaseSubTypeName?: string, costShowFlag?: boolean, note?: string, isTaskReceived?: boolean, runCode?: string, extOrderNum?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, ruleCode?: string, ruleId?: string, showField?: number, paymentType?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, commodities?: Array<{ __typename?: 'InternalPurchaseCommodityPayload', purchasePrice?: number, purchaseTotalPrice?: number, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, purchasePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, purchaseQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, logs?: Array<{ __typename?: 'InternalPurchaseLogPayload', createTime?: number, logType?: SchemaTypes.InternalPurchaseLogEnum, logTypeText?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, relationBillDetail?: { __typename?: 'RelationBillDetail', templateId?: string, billDetailList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, extOrderList?: Array<{ __typename?: 'InternalPurchaseReturnPayload', billDetailInfoDetailPayloadList?: { __typename?: 'PitayaBillDetailInfoPayload', billDetailAmount?: number, billMainId?: string, billTemplateId?: string, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> }, extendCommodityList?: Array<{ __typename?: 'InternalPurchaseReturnCommodity', canApplyStock?: boolean, commodityId?: string, commodityType?: number, id?: string, index?: string, mark?: Array<SchemaTypes.ApplyMarkEnum>, markName?: Array<string>, sourceBatchId?: string, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, canOutStockQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, canReturnQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, inStockNetQuantity?: { __typename?: 'QuantityAndTypeInfo', totalQuantity?: number, unitQuantity?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, outStockNetQuantity?: { __typename?: 'QuantityAndTypeInfo', totalQuantity?: number, unitQuantity?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, purchaseInfo?: { __typename?: 'QuantityAndPriceAndAmountInfo', amount?: number, price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, returnQuantityAndPriceInfo?: { __typename?: 'QuantityAndPriceAndAmountInfo', amount?: number, price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, extendMainInfo?: { __typename?: 'ExtendOrderMainInfo', createTime?: number, extendCode?: string, extendId?: string, extendStatus?: SchemaTypes.ExtendOrderStatus, extendStatusDesc?: string, extendSubType?: SchemaTypes.ExtendOrderSubTypeEnum, extendSubTypeDesc?: string, extendType?: SchemaTypes.ExpandOrderTypeEnum, extendTypeDesc?: string, remark?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }, purchaseMainInfo?: { __typename?: 'PurchaseMainInfo', code?: string, createTime?: number, id?: string, manualCode?: string, note?: string, purchaseDate?: number, purchaseSubType?: SchemaTypes.PurchaseSubType, purchaseSubTypeName?: string, runCode?: string, statusEnum?: SchemaTypes.PurchaseStatusEnum, statusEnumDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } }> } };

export type PageInternalPurchaseQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaPageInternalPurchaseInput;
  page: SchemaTypes.Page;
}>;


export type PageInternalPurchaseQuery = { pageInternalPurchase?: { __typename?: 'PageInternalPurchasePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'InternalPurchasePayload', billMainId?: string, commodityTotalSalePrice?: number, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, isConfirmed?: boolean, purchaseCode?: string, purchaseId?: string, purchaseStatus?: SchemaTypes.PurchaseStatusEnum, purchaseStatusName?: string, purchaseTime?: number, templateId?: string, totalTransportFees?: number, purchaseSubType?: SchemaTypes.PurchaseSubType, purchaseSubTypeName?: string, isTaskReceived?: boolean, note?: string, runCode?: string, sourceBillMainId?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, ruleCode?: string, ruleId?: string, showField?: number, paymentType?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, commodities?: Array<{ __typename?: 'InternalPurchaseCommodityPayload', purchasePrice?: number, purchaseTotalPrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, purchasePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, purchaseQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> } };

export type PitayaCountInternalPurchaseStatusQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type PitayaCountInternalPurchaseStatusQuery = { pitayaCountInternalPurchaseStatus?: { __typename?: 'CountInternalPurchaseStatusPayload', toBeReceived?: number, received?: number } };

export type ConfirmInternalPurchaseMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PitayaInternalPurchaseConfirmInput;
}>;


export type ConfirmInternalPurchaseMutation = { confirmInternalPurchase?: boolean };

export type CountInternalPurchaseByExtendStatusQueryVariables = SchemaTypes.Exact<{
  countInternalPurchaseByExtStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.CountInternalPurchaseByExtStatusInput>;
}>;


export type CountInternalPurchaseByExtendStatusQuery = { countInternalPurchaseByExtendStatus?: number };


export const InternalPurchaseOrderDocument = gql`
    query internalPurchaseOrder($input: PitayaInternalPurchaseIDInput!) {
  internalPurchaseOrder(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    billDetailsList {
      billCostData
      billDetailId
      billMainId
      businessItemValue
      costAmount
      costId
      costName
      dictItemId
      note
      ruleCode
      ruleId
      showField
      supplier {
        supplierId
        supplierName
      }
      paymentType
    }
    billMainId
    commodities {
      commoditySku {
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
      purchasePrice
      purchasePriceType {
        unitId
        unitName
      }
      purchaseQuantity {
        totalQuantity
        unitQuantity
      }
      purchaseTotalPrice
      totalType {
        unitId
        unitName
      }
      unitType {
        unitId
        unitName
      }
      mark
      markName
    }
    commodityTotalSalePrice
    commodityTypeId
    commodityTypeName
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    customer {
      customerId
      customerName
      customerType
      lastLevelId
      lastLevelName
    }
    isConfirmed
    purchaseCode
    purchaseId
    purchaseStatus
    purchaseStatusName
    purchaseTime
    supplier {
      supplierId
      supplierName
    }
    templateId
    totalTransportFees
    warehouse {
      warehouseId
      warehouseName
    }
    logs {
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      logType
      logTypeText
    }
    relationBillDetail {
      billDetailList {
        supplier {
          supplierId
          supplierName
        }
        billCostData
        billDetailId
        billMainId
        businessItemValue
        costAmount
        costId
        costName
        dictItemId
        note
        paymentType
        ruleCode
        ruleId
        showField
      }
      templateId
    }
    sourceBillMainId
    purchaseSubType
    purchaseSubTypeName
    costShowFlag
    note
    isTaskReceived
    runCode
    extOrderList {
      billDetailInfoDetailPayloadList {
        billDetailAmount
        billDetailsList {
          supplier {
            supplierId
            supplierName
          }
          billCostData
          billDetailId
          billMainId
          businessItemValue
          costAmount
          costId
          costName
          dictItemId
          note
          paymentType
          ruleCode
          ruleId
          showField
        }
        billMainId
        billTemplateId
      }
      extendCommodityList {
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
        canApplyStock
        canOutStockQuantity {
          totalQuantity
          unitQuantity
        }
        canReturnQuantity {
          totalQuantity
          unitQuantity
        }
        commodityId
        commodityType
        id
        inStockNetQuantity {
          totalType {
            unitId
            unitName
          }
          unitType {
            unitId
            unitName
          }
          totalQuantity
          unitQuantity
        }
        index
        mark
        markName
        outStockNetQuantity {
          totalType {
            unitId
            unitName
          }
          unitType {
            unitId
            unitName
          }
          totalQuantity
          unitQuantity
        }
        purchaseInfo {
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
        returnQuantityAndPriceInfo {
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
        sourceBatchId
      }
      extendMainInfo {
        createBy {
          phoneNum
          userId
          userName
        }
        createTime
        extendCode
        extendId
        extendStatus
        extendStatusDesc
        extendSubType
        extendSubTypeDesc
        extendType
        extendTypeDesc
        remark
      }
      purchaseMainInfo {
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
          lastLevelName
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
        purchaseSubType
        purchaseSubTypeName
        runCode
        statusEnum
        statusEnumDesc
      }
    }
    extOrderNum
  }
}
    `;

/**
 * __useInternalPurchaseOrderQuery__
 *
 * To run a query within a React component, call `useInternalPurchaseOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useInternalPurchaseOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInternalPurchaseOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInternalPurchaseOrderQuery(baseOptions: Apollo.QueryHookOptions<InternalPurchaseOrderQuery, InternalPurchaseOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InternalPurchaseOrderQuery, InternalPurchaseOrderQueryVariables>(InternalPurchaseOrderDocument, options);
      }
export function useInternalPurchaseOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InternalPurchaseOrderQuery, InternalPurchaseOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InternalPurchaseOrderQuery, InternalPurchaseOrderQueryVariables>(InternalPurchaseOrderDocument, options);
        }
export type InternalPurchaseOrderQueryHookResult = ReturnType<typeof useInternalPurchaseOrderQuery>;
export type InternalPurchaseOrderLazyQueryHookResult = ReturnType<typeof useInternalPurchaseOrderLazyQuery>;
export type InternalPurchaseOrderQueryResult = Apollo.QueryResult<InternalPurchaseOrderQuery, InternalPurchaseOrderQueryVariables>;
export const PageInternalPurchaseDocument = gql`
    query pageInternalPurchase($input: PitayaPageInternalPurchaseInput!, $page: Page!) {
  pageInternalPurchase(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      billDetailsList {
        billCostData
        billDetailId
        billMainId
        businessItemValue
        costAmount
        costId
        costName
        dictItemId
        note
        ruleCode
        ruleId
        showField
        supplier {
          supplierId
          supplierName
        }
        paymentType
      }
      billMainId
      commodities {
        commoditySku {
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
        purchasePrice
        purchasePriceType {
          unitId
          unitName
        }
        purchaseQuantity {
          totalQuantity
          unitQuantity
        }
        purchaseTotalPrice
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
      }
      commodityTotalSalePrice
      commodityTypeId
      commodityTypeName
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      customer {
        customerId
        customerName
        customerType
        lastLevelId
        lastLevelName
      }
      isConfirmed
      purchaseCode
      purchaseId
      purchaseStatus
      purchaseStatusName
      purchaseTime
      supplier {
        supplierId
        supplierName
      }
      templateId
      totalTransportFees
      warehouse {
        warehouseId
        warehouseName
      }
      purchaseSubType
      purchaseSubTypeName
      isTaskReceived
      note
      runCode
      sourceBillMainId
    }
    totalRecords
  }
}
    `;

/**
 * __usePageInternalPurchaseQuery__
 *
 * To run a query within a React component, call `usePageInternalPurchaseQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageInternalPurchaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageInternalPurchaseQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageInternalPurchaseQuery(baseOptions: Apollo.QueryHookOptions<PageInternalPurchaseQuery, PageInternalPurchaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageInternalPurchaseQuery, PageInternalPurchaseQueryVariables>(PageInternalPurchaseDocument, options);
      }
export function usePageInternalPurchaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageInternalPurchaseQuery, PageInternalPurchaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageInternalPurchaseQuery, PageInternalPurchaseQueryVariables>(PageInternalPurchaseDocument, options);
        }
export type PageInternalPurchaseQueryHookResult = ReturnType<typeof usePageInternalPurchaseQuery>;
export type PageInternalPurchaseLazyQueryHookResult = ReturnType<typeof usePageInternalPurchaseLazyQuery>;
export type PageInternalPurchaseQueryResult = Apollo.QueryResult<PageInternalPurchaseQuery, PageInternalPurchaseQueryVariables>;
export const PitayaCountInternalPurchaseStatusDocument = gql`
    query pitayaCountInternalPurchaseStatus {
  pitayaCountInternalPurchaseStatus {
    toBeReceived
    received
  }
}
    `;

/**
 * __usePitayaCountInternalPurchaseStatusQuery__
 *
 * To run a query within a React component, call `usePitayaCountInternalPurchaseStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaCountInternalPurchaseStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaCountInternalPurchaseStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function usePitayaCountInternalPurchaseStatusQuery(baseOptions?: Apollo.QueryHookOptions<PitayaCountInternalPurchaseStatusQuery, PitayaCountInternalPurchaseStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaCountInternalPurchaseStatusQuery, PitayaCountInternalPurchaseStatusQueryVariables>(PitayaCountInternalPurchaseStatusDocument, options);
      }
export function usePitayaCountInternalPurchaseStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaCountInternalPurchaseStatusQuery, PitayaCountInternalPurchaseStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaCountInternalPurchaseStatusQuery, PitayaCountInternalPurchaseStatusQueryVariables>(PitayaCountInternalPurchaseStatusDocument, options);
        }
export type PitayaCountInternalPurchaseStatusQueryHookResult = ReturnType<typeof usePitayaCountInternalPurchaseStatusQuery>;
export type PitayaCountInternalPurchaseStatusLazyQueryHookResult = ReturnType<typeof usePitayaCountInternalPurchaseStatusLazyQuery>;
export type PitayaCountInternalPurchaseStatusQueryResult = Apollo.QueryResult<PitayaCountInternalPurchaseStatusQuery, PitayaCountInternalPurchaseStatusQueryVariables>;
export const ConfirmInternalPurchaseDocument = gql`
    mutation confirmInternalPurchase($input: PitayaInternalPurchaseConfirmInput!) {
  confirmInternalPurchase(input: $input)
}
    `;
export type ConfirmInternalPurchaseMutationFn = Apollo.MutationFunction<ConfirmInternalPurchaseMutation, ConfirmInternalPurchaseMutationVariables>;

/**
 * __useConfirmInternalPurchaseMutation__
 *
 * To run a mutation, you first call `useConfirmInternalPurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmInternalPurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmInternalPurchaseMutation, { data, loading, error }] = useConfirmInternalPurchaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmInternalPurchaseMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmInternalPurchaseMutation, ConfirmInternalPurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmInternalPurchaseMutation, ConfirmInternalPurchaseMutationVariables>(ConfirmInternalPurchaseDocument, options);
      }
export type ConfirmInternalPurchaseMutationHookResult = ReturnType<typeof useConfirmInternalPurchaseMutation>;
export type ConfirmInternalPurchaseMutationResult = Apollo.MutationResult<ConfirmInternalPurchaseMutation>;
export type ConfirmInternalPurchaseMutationOptions = Apollo.BaseMutationOptions<ConfirmInternalPurchaseMutation, ConfirmInternalPurchaseMutationVariables>;
export const CountInternalPurchaseByExtendStatusDocument = gql`
    query countInternalPurchaseByExtendStatus($countInternalPurchaseByExtStatusInput: CountInternalPurchaseByExtStatusInput) {
  countInternalPurchaseByExtendStatus(
    countInternalPurchaseByExtStatusInput: $countInternalPurchaseByExtStatusInput
  )
}
    `;

/**
 * __useCountInternalPurchaseByExtendStatusQuery__
 *
 * To run a query within a React component, call `useCountInternalPurchaseByExtendStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountInternalPurchaseByExtendStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountInternalPurchaseByExtendStatusQuery({
 *   variables: {
 *      countInternalPurchaseByExtStatusInput: // value for 'countInternalPurchaseByExtStatusInput'
 *   },
 * });
 */
export function useCountInternalPurchaseByExtendStatusQuery(baseOptions?: Apollo.QueryHookOptions<CountInternalPurchaseByExtendStatusQuery, CountInternalPurchaseByExtendStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountInternalPurchaseByExtendStatusQuery, CountInternalPurchaseByExtendStatusQueryVariables>(CountInternalPurchaseByExtendStatusDocument, options);
      }
export function useCountInternalPurchaseByExtendStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountInternalPurchaseByExtendStatusQuery, CountInternalPurchaseByExtendStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountInternalPurchaseByExtendStatusQuery, CountInternalPurchaseByExtendStatusQueryVariables>(CountInternalPurchaseByExtendStatusDocument, options);
        }
export type CountInternalPurchaseByExtendStatusQueryHookResult = ReturnType<typeof useCountInternalPurchaseByExtendStatusQuery>;
export type CountInternalPurchaseByExtendStatusLazyQueryHookResult = ReturnType<typeof useCountInternalPurchaseByExtendStatusLazyQuery>;
export type CountInternalPurchaseByExtendStatusQueryResult = Apollo.QueryResult<CountInternalPurchaseByExtendStatusQuery, CountInternalPurchaseByExtendStatusQueryVariables>;