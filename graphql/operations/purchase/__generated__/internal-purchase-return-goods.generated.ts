import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CountInternalPurchaseReturnQueryVariables = SchemaTypes.Exact<{
  countInternalPurchaseReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.CountInternalPurchaseReturnInput>;
}>;


export type CountInternalPurchaseReturnQuery = { countInternalPurchaseReturn?: Array<{ __typename?: 'CountExtendStatusPayload', count?: number, status?: SchemaTypes.ExtendOrderStatus }> };

export type DetailInternalPurchaseReturnQueryVariables = SchemaTypes.Exact<{
  detailInternalPurchaseReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.DetailInternalPurchaseReturnInput>;
}>;


export type DetailInternalPurchaseReturnQuery = { detailInternalPurchaseReturn?: { __typename?: 'InternalPurchaseReturnPayload', extendCommodityList?: Array<{ __typename?: 'InternalPurchaseReturnCommodity', canApplyStock?: boolean, commodityId?: string, commodityType?: number, id?: string, index?: string, mark?: Array<SchemaTypes.ApplyMarkEnum>, markName?: Array<string>, sourceBatchId?: string, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, canOutStockQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, canReturnQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, inStockNetQuantity?: { __typename?: 'QuantityAndTypeInfo', totalQuantity?: number, unitQuantity?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, outStockNetQuantity?: { __typename?: 'QuantityAndTypeInfo', totalQuantity?: number, unitQuantity?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, purchaseInfo?: { __typename?: 'QuantityAndPriceAndAmountInfo', amount?: number, price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, returnQuantityAndPriceInfo?: { __typename?: 'QuantityAndPriceAndAmountInfo', amount?: number, price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, extendMainInfo?: { __typename?: 'ExtendOrderMainInfo', createTime?: number, extendCode?: string, extendId?: string, extendStatus?: SchemaTypes.ExtendOrderStatus, extendStatusDesc?: string, extendSubType?: SchemaTypes.ExtendOrderSubTypeEnum, extendSubTypeDesc?: string, extendType?: SchemaTypes.ExpandOrderTypeEnum, extendTypeDesc?: string, remark?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }, purchaseMainInfo?: { __typename?: 'PurchaseMainInfo', code?: string, createTime?: number, id?: string, manualCode?: string, note?: string, purchaseDate?: number, purchaseSubType?: SchemaTypes.PurchaseSubType, purchaseSubTypeName?: string, runCode?: string, statusEnum?: SchemaTypes.PurchaseStatusEnum, statusEnumDesc?: string, commodityType?: SchemaTypes.PitayaCommodityTypeEnum, commodityTypeName?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, billDetailInfoDetailPayloadList?: { __typename?: 'PitayaBillDetailInfoPayload', billDetailAmount?: number, billMainId?: string, billTemplateId?: string, billDetailsList?: Array<{ __typename?: 'PitayaBillDetailPayload', billCostData?: string, billDetailId?: string, billMainId?: string, businessItemValue?: string, costAmount?: number, costId?: string, costName?: string, dictItemId?: string, note?: string, paymentType?: number, ruleCode?: string, ruleId?: string, showField?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } } };

export type ListInternalPurchaseReturnCommodityQueryVariables = SchemaTypes.Exact<{
  listInternalPurchaseCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.ListInternalPurchaseCommodityInput>;
}>;


export type ListInternalPurchaseReturnCommodityQuery = { listInternalPurchaseReturnCommodity?: Array<{ __typename?: 'InternalPurchaseReturnCommodity', canApplyStock?: boolean, commodityId?: string, commodityType?: number, id?: string, index?: string, mark?: Array<SchemaTypes.ApplyMarkEnum>, markName?: Array<string>, sourceBatchId?: string, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, canOutStockQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, canReturnQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, inStockNetQuantity?: { __typename?: 'QuantityAndTypeInfo', totalQuantity?: number, unitQuantity?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, outStockNetQuantity?: { __typename?: 'QuantityAndTypeInfo', totalQuantity?: number, unitQuantity?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, purchaseInfo?: { __typename?: 'QuantityAndPriceAndAmountInfo', amount?: number, price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, returnQuantityAndPriceInfo?: { __typename?: 'QuantityAndPriceAndAmountInfo', amount?: number, price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }> };

export type PageInternalPurchaseReturnQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageExpandOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.PageExpandOrderInput>;
}>;


export type PageInternalPurchaseReturnQuery = { pageInternalPurchaseReturn?: { __typename?: 'PageExtendOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'ExtendOrderPayload', extendCommodityList?: Array<{ __typename?: 'ExtendCommodity', batchId?: number, id?: string, index?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, quantityAndPriceInfo?: { __typename?: 'QuantityAndPriceAndTypeInfo', price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, extendMainInfo?: { __typename?: 'ExtendOrderMainInfo', createTime?: number, extendCode?: string, extendId?: string, extendStatus?: SchemaTypes.ExtendOrderStatus, extendStatusDesc?: string, extendSubType?: SchemaTypes.ExtendOrderSubTypeEnum, extendSubTypeDesc?: string, extendType?: SchemaTypes.ExpandOrderTypeEnum, extendTypeDesc?: string, remark?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }, purchaseMainInfo?: { __typename?: 'PurchaseMainInfo', code?: string, createTime?: number, id?: string, manualCode?: string, note?: string, purchaseDate?: number, purchaseSubType?: SchemaTypes.PurchaseSubType, purchaseSubTypeName?: string, runCode?: string, statusEnum?: SchemaTypes.PurchaseStatusEnum, statusEnumDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } }> } };

export type AddCommodityBatchStockMutationVariables = SchemaTypes.Exact<{
  addCommodityStockInput?: SchemaTypes.InputMaybe<SchemaTypes.AddCommodityStockInput>;
}>;


export type AddCommodityBatchStockMutation = { addCommodityBatchStock?: boolean };

export type CreateInternalPurchaseReturnMutationVariables = SchemaTypes.Exact<{
  createInternalPurchaseReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateInternalPurchaseReturnInput>;
}>;


export type CreateInternalPurchaseReturnMutation = { createInternalPurchaseReturn?: string };

export type UpdateInternalPurchaseReturnMutationVariables = SchemaTypes.Exact<{
  createInternalPurchaseReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateInternalPurchaseReturnInput>;
  extOrderId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type UpdateInternalPurchaseReturnMutation = { updateInternalPurchaseReturn?: string };

export type ChangeInternalPurchaseReturnStatusMutationVariables = SchemaTypes.Exact<{
  changeInternalPurchaseReturnStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.ChangeInternalPurchaseReturnStatusInput>;
}>;


export type ChangeInternalPurchaseReturnStatusMutation = { changeInternalPurchaseReturnStatus?: boolean };


export const CountInternalPurchaseReturnDocument = gql`
    query countInternalPurchaseReturn($countInternalPurchaseReturnInput: CountInternalPurchaseReturnInput) {
  countInternalPurchaseReturn(
    countInternalPurchaseReturnInput: $countInternalPurchaseReturnInput
  ) {
    count
    status
  }
}
    `;

/**
 * __useCountInternalPurchaseReturnQuery__
 *
 * To run a query within a React component, call `useCountInternalPurchaseReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountInternalPurchaseReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountInternalPurchaseReturnQuery({
 *   variables: {
 *      countInternalPurchaseReturnInput: // value for 'countInternalPurchaseReturnInput'
 *   },
 * });
 */
export function useCountInternalPurchaseReturnQuery(baseOptions?: Apollo.QueryHookOptions<CountInternalPurchaseReturnQuery, CountInternalPurchaseReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountInternalPurchaseReturnQuery, CountInternalPurchaseReturnQueryVariables>(CountInternalPurchaseReturnDocument, options);
      }
export function useCountInternalPurchaseReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountInternalPurchaseReturnQuery, CountInternalPurchaseReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountInternalPurchaseReturnQuery, CountInternalPurchaseReturnQueryVariables>(CountInternalPurchaseReturnDocument, options);
        }
export type CountInternalPurchaseReturnQueryHookResult = ReturnType<typeof useCountInternalPurchaseReturnQuery>;
export type CountInternalPurchaseReturnLazyQueryHookResult = ReturnType<typeof useCountInternalPurchaseReturnLazyQuery>;
export type CountInternalPurchaseReturnQueryResult = Apollo.QueryResult<CountInternalPurchaseReturnQuery, CountInternalPurchaseReturnQueryVariables>;
export const DetailInternalPurchaseReturnDocument = gql`
    query detailInternalPurchaseReturn($detailInternalPurchaseReturnInput: DetailInternalPurchaseReturnInput) {
  detailInternalPurchaseReturn(
    detailInternalPurchaseReturnInput: $detailInternalPurchaseReturnInput
  ) {
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
      commodityType
      commodityTypeName
    }
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
  }
}
    `;

/**
 * __useDetailInternalPurchaseReturnQuery__
 *
 * To run a query within a React component, call `useDetailInternalPurchaseReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailInternalPurchaseReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailInternalPurchaseReturnQuery({
 *   variables: {
 *      detailInternalPurchaseReturnInput: // value for 'detailInternalPurchaseReturnInput'
 *   },
 * });
 */
export function useDetailInternalPurchaseReturnQuery(baseOptions?: Apollo.QueryHookOptions<DetailInternalPurchaseReturnQuery, DetailInternalPurchaseReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DetailInternalPurchaseReturnQuery, DetailInternalPurchaseReturnQueryVariables>(DetailInternalPurchaseReturnDocument, options);
      }
export function useDetailInternalPurchaseReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DetailInternalPurchaseReturnQuery, DetailInternalPurchaseReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DetailInternalPurchaseReturnQuery, DetailInternalPurchaseReturnQueryVariables>(DetailInternalPurchaseReturnDocument, options);
        }
export type DetailInternalPurchaseReturnQueryHookResult = ReturnType<typeof useDetailInternalPurchaseReturnQuery>;
export type DetailInternalPurchaseReturnLazyQueryHookResult = ReturnType<typeof useDetailInternalPurchaseReturnLazyQuery>;
export type DetailInternalPurchaseReturnQueryResult = Apollo.QueryResult<DetailInternalPurchaseReturnQuery, DetailInternalPurchaseReturnQueryVariables>;
export const ListInternalPurchaseReturnCommodityDocument = gql`
    query listInternalPurchaseReturnCommodity($listInternalPurchaseCommodityInput: ListInternalPurchaseCommodityInput) {
  listInternalPurchaseReturnCommodity(
    listInternalPurchaseCommodityInput: $listInternalPurchaseCommodityInput
  ) {
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
}
    `;

/**
 * __useListInternalPurchaseReturnCommodityQuery__
 *
 * To run a query within a React component, call `useListInternalPurchaseReturnCommodityQuery` and pass it any options that fit your needs.
 * When your component renders, `useListInternalPurchaseReturnCommodityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListInternalPurchaseReturnCommodityQuery({
 *   variables: {
 *      listInternalPurchaseCommodityInput: // value for 'listInternalPurchaseCommodityInput'
 *   },
 * });
 */
export function useListInternalPurchaseReturnCommodityQuery(baseOptions?: Apollo.QueryHookOptions<ListInternalPurchaseReturnCommodityQuery, ListInternalPurchaseReturnCommodityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListInternalPurchaseReturnCommodityQuery, ListInternalPurchaseReturnCommodityQueryVariables>(ListInternalPurchaseReturnCommodityDocument, options);
      }
export function useListInternalPurchaseReturnCommodityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListInternalPurchaseReturnCommodityQuery, ListInternalPurchaseReturnCommodityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListInternalPurchaseReturnCommodityQuery, ListInternalPurchaseReturnCommodityQueryVariables>(ListInternalPurchaseReturnCommodityDocument, options);
        }
export type ListInternalPurchaseReturnCommodityQueryHookResult = ReturnType<typeof useListInternalPurchaseReturnCommodityQuery>;
export type ListInternalPurchaseReturnCommodityLazyQueryHookResult = ReturnType<typeof useListInternalPurchaseReturnCommodityLazyQuery>;
export type ListInternalPurchaseReturnCommodityQueryResult = Apollo.QueryResult<ListInternalPurchaseReturnCommodityQuery, ListInternalPurchaseReturnCommodityQueryVariables>;
export const PageInternalPurchaseReturnDocument = gql`
    query pageInternalPurchaseReturn($page: Page, $pageExpandOrderInput: PageExpandOrderInput) {
  pageInternalPurchaseReturn(
    page: $page
    pageExpandOrderInput: $pageExpandOrderInput
  ) {
    pageCurrent
    pageSize
    records {
      extendCommodityList {
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
    totalRecords
  }
}
    `;

/**
 * __usePageInternalPurchaseReturnQuery__
 *
 * To run a query within a React component, call `usePageInternalPurchaseReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageInternalPurchaseReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageInternalPurchaseReturnQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageExpandOrderInput: // value for 'pageExpandOrderInput'
 *   },
 * });
 */
export function usePageInternalPurchaseReturnQuery(baseOptions?: Apollo.QueryHookOptions<PageInternalPurchaseReturnQuery, PageInternalPurchaseReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageInternalPurchaseReturnQuery, PageInternalPurchaseReturnQueryVariables>(PageInternalPurchaseReturnDocument, options);
      }
export function usePageInternalPurchaseReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageInternalPurchaseReturnQuery, PageInternalPurchaseReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageInternalPurchaseReturnQuery, PageInternalPurchaseReturnQueryVariables>(PageInternalPurchaseReturnDocument, options);
        }
export type PageInternalPurchaseReturnQueryHookResult = ReturnType<typeof usePageInternalPurchaseReturnQuery>;
export type PageInternalPurchaseReturnLazyQueryHookResult = ReturnType<typeof usePageInternalPurchaseReturnLazyQuery>;
export type PageInternalPurchaseReturnQueryResult = Apollo.QueryResult<PageInternalPurchaseReturnQuery, PageInternalPurchaseReturnQueryVariables>;
export const AddCommodityBatchStockDocument = gql`
    mutation addCommodityBatchStock($addCommodityStockInput: AddCommodityStockInput) {
  addCommodityBatchStock(addCommodityStockInput: $addCommodityStockInput)
}
    `;
export type AddCommodityBatchStockMutationFn = Apollo.MutationFunction<AddCommodityBatchStockMutation, AddCommodityBatchStockMutationVariables>;

/**
 * __useAddCommodityBatchStockMutation__
 *
 * To run a mutation, you first call `useAddCommodityBatchStockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommodityBatchStockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommodityBatchStockMutation, { data, loading, error }] = useAddCommodityBatchStockMutation({
 *   variables: {
 *      addCommodityStockInput: // value for 'addCommodityStockInput'
 *   },
 * });
 */
export function useAddCommodityBatchStockMutation(baseOptions?: Apollo.MutationHookOptions<AddCommodityBatchStockMutation, AddCommodityBatchStockMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommodityBatchStockMutation, AddCommodityBatchStockMutationVariables>(AddCommodityBatchStockDocument, options);
      }
export type AddCommodityBatchStockMutationHookResult = ReturnType<typeof useAddCommodityBatchStockMutation>;
export type AddCommodityBatchStockMutationResult = Apollo.MutationResult<AddCommodityBatchStockMutation>;
export type AddCommodityBatchStockMutationOptions = Apollo.BaseMutationOptions<AddCommodityBatchStockMutation, AddCommodityBatchStockMutationVariables>;
export const CreateInternalPurchaseReturnDocument = gql`
    mutation createInternalPurchaseReturn($createInternalPurchaseReturnInput: CreateInternalPurchaseReturnInput) {
  createInternalPurchaseReturn(
    createInternalPurchaseReturnInput: $createInternalPurchaseReturnInput
  )
}
    `;
export type CreateInternalPurchaseReturnMutationFn = Apollo.MutationFunction<CreateInternalPurchaseReturnMutation, CreateInternalPurchaseReturnMutationVariables>;

/**
 * __useCreateInternalPurchaseReturnMutation__
 *
 * To run a mutation, you first call `useCreateInternalPurchaseReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInternalPurchaseReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInternalPurchaseReturnMutation, { data, loading, error }] = useCreateInternalPurchaseReturnMutation({
 *   variables: {
 *      createInternalPurchaseReturnInput: // value for 'createInternalPurchaseReturnInput'
 *   },
 * });
 */
export function useCreateInternalPurchaseReturnMutation(baseOptions?: Apollo.MutationHookOptions<CreateInternalPurchaseReturnMutation, CreateInternalPurchaseReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInternalPurchaseReturnMutation, CreateInternalPurchaseReturnMutationVariables>(CreateInternalPurchaseReturnDocument, options);
      }
export type CreateInternalPurchaseReturnMutationHookResult = ReturnType<typeof useCreateInternalPurchaseReturnMutation>;
export type CreateInternalPurchaseReturnMutationResult = Apollo.MutationResult<CreateInternalPurchaseReturnMutation>;
export type CreateInternalPurchaseReturnMutationOptions = Apollo.BaseMutationOptions<CreateInternalPurchaseReturnMutation, CreateInternalPurchaseReturnMutationVariables>;
export const UpdateInternalPurchaseReturnDocument = gql`
    mutation updateInternalPurchaseReturn($createInternalPurchaseReturnInput: CreateInternalPurchaseReturnInput, $extOrderId: ID) {
  updateInternalPurchaseReturn(
    createInternalPurchaseReturnInput: $createInternalPurchaseReturnInput
    extOrderId: $extOrderId
  )
}
    `;
export type UpdateInternalPurchaseReturnMutationFn = Apollo.MutationFunction<UpdateInternalPurchaseReturnMutation, UpdateInternalPurchaseReturnMutationVariables>;

/**
 * __useUpdateInternalPurchaseReturnMutation__
 *
 * To run a mutation, you first call `useUpdateInternalPurchaseReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInternalPurchaseReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInternalPurchaseReturnMutation, { data, loading, error }] = useUpdateInternalPurchaseReturnMutation({
 *   variables: {
 *      createInternalPurchaseReturnInput: // value for 'createInternalPurchaseReturnInput'
 *      extOrderId: // value for 'extOrderId'
 *   },
 * });
 */
export function useUpdateInternalPurchaseReturnMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInternalPurchaseReturnMutation, UpdateInternalPurchaseReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInternalPurchaseReturnMutation, UpdateInternalPurchaseReturnMutationVariables>(UpdateInternalPurchaseReturnDocument, options);
      }
export type UpdateInternalPurchaseReturnMutationHookResult = ReturnType<typeof useUpdateInternalPurchaseReturnMutation>;
export type UpdateInternalPurchaseReturnMutationResult = Apollo.MutationResult<UpdateInternalPurchaseReturnMutation>;
export type UpdateInternalPurchaseReturnMutationOptions = Apollo.BaseMutationOptions<UpdateInternalPurchaseReturnMutation, UpdateInternalPurchaseReturnMutationVariables>;
export const ChangeInternalPurchaseReturnStatusDocument = gql`
    mutation changeInternalPurchaseReturnStatus($changeInternalPurchaseReturnStatusInput: ChangeInternalPurchaseReturnStatusInput) {
  changeInternalPurchaseReturnStatus(
    changeInternalPurchaseReturnStatusInput: $changeInternalPurchaseReturnStatusInput
  )
}
    `;
export type ChangeInternalPurchaseReturnStatusMutationFn = Apollo.MutationFunction<ChangeInternalPurchaseReturnStatusMutation, ChangeInternalPurchaseReturnStatusMutationVariables>;

/**
 * __useChangeInternalPurchaseReturnStatusMutation__
 *
 * To run a mutation, you first call `useChangeInternalPurchaseReturnStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeInternalPurchaseReturnStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeInternalPurchaseReturnStatusMutation, { data, loading, error }] = useChangeInternalPurchaseReturnStatusMutation({
 *   variables: {
 *      changeInternalPurchaseReturnStatusInput: // value for 'changeInternalPurchaseReturnStatusInput'
 *   },
 * });
 */
export function useChangeInternalPurchaseReturnStatusMutation(baseOptions?: Apollo.MutationHookOptions<ChangeInternalPurchaseReturnStatusMutation, ChangeInternalPurchaseReturnStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeInternalPurchaseReturnStatusMutation, ChangeInternalPurchaseReturnStatusMutationVariables>(ChangeInternalPurchaseReturnStatusDocument, options);
      }
export type ChangeInternalPurchaseReturnStatusMutationHookResult = ReturnType<typeof useChangeInternalPurchaseReturnStatusMutation>;
export type ChangeInternalPurchaseReturnStatusMutationResult = Apollo.MutationResult<ChangeInternalPurchaseReturnStatusMutation>;
export type ChangeInternalPurchaseReturnStatusMutationOptions = Apollo.BaseMutationOptions<ChangeInternalPurchaseReturnStatusMutation, ChangeInternalPurchaseReturnStatusMutationVariables>;