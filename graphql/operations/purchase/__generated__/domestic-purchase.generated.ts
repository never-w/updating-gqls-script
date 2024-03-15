import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CountDomesticPurchaseStatusQueryVariables = SchemaTypes.Exact<{
  countDomesticPurchaseStatusFilter: SchemaTypes.CountDomesticPurchaseStatusFilter;
}>;


export type CountDomesticPurchaseStatusQuery = { countDomesticPurchaseStatus?: Array<{ __typename?: 'CountOfStatusPayload', countDomesticPurchaseStatus?: { __typename?: 'CountStatusDomesticPurchase', count?: number, status?: SchemaTypes.PurchaseStatusEnum }, countExpandOrderStatus?: Array<{ __typename?: 'CountStatusExpandOrderStatus', count?: number, status?: SchemaTypes.ExtendOrderStatus }> }> };

export type DetailDomesticPurchaseOrderQueryVariables = SchemaTypes.Exact<{
  domesticPurchaseId: SchemaTypes.Scalars['ID'];
}>;


export type DetailDomesticPurchaseOrderQuery = { detailDomesticPurchaseOrder?: { __typename?: 'DomesticPurchasePayload', amount?: number, code?: string, commodityType?: number, commodityTypeDesc?: string, createTime?: number, id?: string, purchaseDate?: number, runCode?: string, status?: SchemaTypes.PurchaseStatusEnum, statusDesc?: string, subType?: SchemaTypes.PurchaseSubTypeEnum, subTypeDesc?: string, billId?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, expandOrderList?: Array<{ __typename?: 'ExpandOrder', code?: string, id?: string, runCode?: string, status?: SchemaTypes.ExtendOrderStatus, statusDesc?: string, type?: SchemaTypes.ExpandOrderTypeEnum, typeDesc?: string, totalAmount?: number, commodityItems?: Array<{ __typename?: 'ExpandOrderCommodity', actualTotalQuantity?: number, actualUnitQuantity?: number, amount?: number, canReturnTotalQuantity?: number, canReturnUnitQuantity?: number, expandOrderTypeEnum?: SchemaTypes.ExpandOrderTypeEnum, id?: string, price?: number, totalQuantity?: number, unitQuantity?: number, index?: string, batchId?: string, sourceBatchId?: string, commodity?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }>, matchingSource?: { __typename?: 'MarchingSourceInfo', carNo?: string, departureDate?: number, matchDate?: number, matchSource?: number, matchSourceName?: string, runCode?: string, trailerNo?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, commodityItems?: Array<{ __typename?: 'DomesticPurchaseCommodity', actualTotalQuantity?: number, actualUnitQuantity?: number, amount?: number, batchCode?: string, batchId?: string, canApplyStock?: boolean, canReturnTotalQuantity?: number, canReturnUnitQuantity?: number, deductTotalQuantity?: number, deductUnitQuantity?: number, expandOrderTypeEnum?: SchemaTypes.ExpandOrderTypeEnum, id?: string, index?: string, orderId?: number, orderType?: SchemaTypes.ExpandOrderTypeEnum, price?: number, returnTotalQuantity?: number, returnUnitQuantity?: number, runCode?: string, sourceBatchId?: string, totalQuantity?: number, unitQuantity?: number, warehouseId?: string, expandOrderTypeEnumDesc?: string, markList?: Array<number>, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockBatch?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, totalQuantity?: number, unitQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } } };

export type ListCommodityByDomesticPurchaseIdQueryVariables = SchemaTypes.Exact<{
  domesticPurchaseId: SchemaTypes.Scalars['ID'];
  expandOrderId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type ListCommodityByDomesticPurchaseIdQuery = { listCommodityByDomesticPurchaseId?: Array<{ __typename?: 'DomesticPurchaseCommodity', actualTotalQuantity?: number, actualUnitQuantity?: number, amount?: number, batchId?: string, expandOrderTypeEnum?: SchemaTypes.ExpandOrderTypeEnum, id?: string, orderId?: number, orderType?: SchemaTypes.ExpandOrderTypeEnum, price?: number, runCode?: string, totalQuantity?: number, unitQuantity?: number, batchCode?: string, canReturnTotalQuantity?: number, canReturnUnitQuantity?: number, deductTotalQuantity?: number, deductUnitQuantity?: number, returnTotalQuantity?: number, returnUnitQuantity?: number, sourceBatchId?: string, warehouseId?: string, index?: string, canApplyStock?: boolean, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockBatch?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, totalQuantity?: number, unitQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> };

export type PageDomesticPurchaseOrderQueryVariables = SchemaTypes.Exact<{
  page: SchemaTypes.Page;
  pageDomesticPurchaseFilter: SchemaTypes.PageDomesticPurchaseFilter;
}>;


export type PageDomesticPurchaseOrderQuery = { pageDomesticPurchaseOrder?: { __typename?: 'PageDomesticPurchaseResultPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'DomesticPurchasePayload', amount?: number, code?: string, commodityType?: number, commodityTypeDesc?: string, createTime?: number, id?: string, purchaseDate?: number, runCode?: string, status?: SchemaTypes.PurchaseStatusEnum, statusDesc?: string, subType?: SchemaTypes.PurchaseSubTypeEnum, subTypeDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodityItems?: Array<{ __typename?: 'DomesticPurchaseCommodity', actualTotalQuantity?: number, actualUnitQuantity?: number, amount?: number, batchCode?: string, batchId?: string, canApplyStock?: boolean, canReturnTotalQuantity?: number, canReturnUnitQuantity?: number, deductTotalQuantity?: number, deductUnitQuantity?: number, expandOrderTypeEnum?: SchemaTypes.ExpandOrderTypeEnum, id?: string, index?: string, orderId?: number, orderType?: SchemaTypes.ExpandOrderTypeEnum, price?: number, returnTotalQuantity?: number, returnUnitQuantity?: number, runCode?: string, sourceBatchId?: string, totalQuantity?: number, unitQuantity?: number, warehouseId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockBatch?: { __typename?: 'BatchInfo', batchCode?: string, batchId?: string, totalQuantity?: number, unitQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, matchingSource?: { __typename?: 'MarchingSourceInfo', carNo?: string, departureDate?: number, matchDate?: number, matchSource?: number, matchSourceName?: string, runCode?: string, trailerNo?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> } };

export type AddCommodityStockMutationVariables = SchemaTypes.Exact<{
  addCommodityStockInput?: SchemaTypes.InputMaybe<SchemaTypes.AddCommodityStockInput>;
}>;


export type AddCommodityStockMutation = { addCommodityStock?: number };

export type DetailExpandOrderQueryVariables = SchemaTypes.Exact<{
  idsInput: SchemaTypes.IdsInput;
}>;


export type DetailExpandOrderQuery = { detailExpandOrder?: { __typename?: 'DetailExpandOrderPayload', billId?: string, code?: string, fileImages?: Array<string>, freightTotalAmount?: number, id?: string, purchaseCode?: string, remark?: string, status?: SchemaTypes.ExtendOrderStatus, type?: SchemaTypes.ExpandOrderTypeEnum, typeDesc?: string, commodityType?: number, extendLabelId?: Array<number>, commodityTypeDesc?: string, statusDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodities?: Array<{ __typename?: 'ExpandOrderCommodity', actualTotalQuantity?: number, actualUnitQuantity?: number, amount?: number, canReturnTotalQuantity?: number, canReturnUnitQuantity?: number, expandOrderTypeEnum?: SchemaTypes.ExpandOrderTypeEnum, id?: string, price?: number, totalQuantity?: number, unitQuantity?: number, index?: string, batchId?: string, sourceBatchId?: string, commodity?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, matchingSource?: { __typename?: 'MarchingSourceInfo', carNo?: string, departureDate?: number, matchDate?: number, matchSource?: number, matchSourceName?: string, runCode?: string, trailerNo?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, freightItemList?: Array<{ __typename?: 'FreightItem', amount?: number, costId?: string, costName?: string, data?: string, extendId?: number, note?: string, ruleId?: string, dictItemId?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } };

export type CancelExpandOrderMutationVariables = SchemaTypes.Exact<{
  changeStatusExpandOrderInput: SchemaTypes.ChangeStatusExpandOrderInput;
}>;


export type CancelExpandOrderMutation = { cancelExpandOrder?: boolean };

export type CreateExpandOrderMutationVariables = SchemaTypes.Exact<{
  createExpandOrderInput: SchemaTypes.CreateExpandOrderInput;
}>;


export type CreateExpandOrderMutation = { createExpandOrder?: string };

export type EditExpandOrderMutationVariables = SchemaTypes.Exact<{
  createExpandOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateExpandOrderInput>;
  expandOrderId: SchemaTypes.Scalars['ID'];
}>;


export type EditExpandOrderMutation = { editExpandOrder?: boolean };

export type SubmitExpandOrderMutationVariables = SchemaTypes.Exact<{
  changeStatusExpandOrderInput: SchemaTypes.ChangeStatusExpandOrderInput;
}>;


export type SubmitExpandOrderMutation = { submitExpandOrder?: boolean };

export type ListDomesticPurchaseOperationLogQueryVariables = SchemaTypes.Exact<{
  domesticPurchaseOperationLogInput?: SchemaTypes.InputMaybe<SchemaTypes.DomesticPurchaseOperationLogInput>;
}>;


export type ListDomesticPurchaseOperationLogQuery = { listDomesticPurchaseOperationLog?: Array<{ __typename?: 'DomesticPurchaseOperationLogPayload', beforeStatus?: SchemaTypes.PurchaseStatusEnum, beforeStatusDesc?: string, createTime?: number, note?: string, status?: SchemaTypes.PurchaseStatusEnum, statusDesc?: string, createUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }> };

export type UpdateBill2ReturnAmountMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateBill2PaymentInput;
}>;


export type UpdateBill2ReturnAmountMutation = { updateBill2ReturnAmount?: boolean };

export type PageExpandOrderQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PageExpandOrderInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageExpandOrderQuery = { pageExpandOrder?: { __typename?: 'PageExpandOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'ExpandOrder', applyId?: string, code?: string, createTime?: number, id?: string, runCode?: string, status?: SchemaTypes.ExtendOrderStatus, statusDesc?: string, totalAmount?: number, type?: SchemaTypes.ExpandOrderTypeEnum, typeDesc?: string, createUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, businessInfo?: { __typename?: 'DomesticPurchaseReturnBusinessInfo', applyId?: string, commodityType?: number, commodityTypeDesc?: string, purchaseCode?: string, purchaseTime?: number, runCode?: string, createTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, createUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, matchingSource?: { __typename?: 'MarchingSourceInfo', carNo?: string, departureDate?: number, matchDate?: number, matchSource?: number, matchSourceName?: string, runCode?: string, trailerNo?: string } }, commodityItems?: Array<{ __typename?: 'ExpandOrderCommodity', actualTotalQuantity?: number, actualUnitQuantity?: number, amount?: number, batchId?: string, canReturnTotalQuantity?: number, canReturnUnitQuantity?: number, expandOrderTypeEnum?: SchemaTypes.ExpandOrderTypeEnum, id?: string, index?: string, price?: number, sourceBatchId?: string, totalQuantity?: number, unitQuantity?: number, commodity?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> } };

export type ExpandOrderBadgeQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ExpandOrderBadgeInput>;
}>;


export type ExpandOrderBadgeQuery = { expandOrderBadge?: { __typename?: 'ExpandOrderBadgeBadgePayload', completed?: number, toBeDelivered?: number, toBeSubmit?: number } };


export const CountDomesticPurchaseStatusDocument = gql`
    query countDomesticPurchaseStatus($countDomesticPurchaseStatusFilter: CountDomesticPurchaseStatusFilter!) {
  countDomesticPurchaseStatus(
    countDomesticPurchaseStatusFilter: $countDomesticPurchaseStatusFilter
  ) {
    countDomesticPurchaseStatus {
      count
      status
    }
    countExpandOrderStatus {
      count
      status
    }
  }
}
    `;

/**
 * __useCountDomesticPurchaseStatusQuery__
 *
 * To run a query within a React component, call `useCountDomesticPurchaseStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountDomesticPurchaseStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountDomesticPurchaseStatusQuery({
 *   variables: {
 *      countDomesticPurchaseStatusFilter: // value for 'countDomesticPurchaseStatusFilter'
 *   },
 * });
 */
export function useCountDomesticPurchaseStatusQuery(baseOptions: Apollo.QueryHookOptions<CountDomesticPurchaseStatusQuery, CountDomesticPurchaseStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountDomesticPurchaseStatusQuery, CountDomesticPurchaseStatusQueryVariables>(CountDomesticPurchaseStatusDocument, options);
      }
export function useCountDomesticPurchaseStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountDomesticPurchaseStatusQuery, CountDomesticPurchaseStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountDomesticPurchaseStatusQuery, CountDomesticPurchaseStatusQueryVariables>(CountDomesticPurchaseStatusDocument, options);
        }
export type CountDomesticPurchaseStatusQueryHookResult = ReturnType<typeof useCountDomesticPurchaseStatusQuery>;
export type CountDomesticPurchaseStatusLazyQueryHookResult = ReturnType<typeof useCountDomesticPurchaseStatusLazyQuery>;
export type CountDomesticPurchaseStatusQueryResult = Apollo.QueryResult<CountDomesticPurchaseStatusQuery, CountDomesticPurchaseStatusQueryVariables>;
export const DetailDomesticPurchaseOrderDocument = gql`
    query detailDomesticPurchaseOrder($domesticPurchaseId: ID!) {
  detailDomesticPurchaseOrder(domesticPurchaseId: $domesticPurchaseId) {
    amount
    belongOrg {
      orgId
      orgName
    }
    code
    commodityType
    commodityTypeDesc
    createTime
    customer {
      customerId
      customerName
      customerType
    }
    expandOrderList {
      code
      commodityItems {
        actualTotalQuantity
        actualUnitQuantity
        amount
        canReturnTotalQuantity
        canReturnUnitQuantity
        commodity {
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
        expandOrderTypeEnum
        id
        price
        priceType {
          unitId
          unitName
        }
        totalQuantity
        unitQuantity
        index
        batchId
        sourceBatchId
        totalType {
          unitId
          unitName
        }
        unitType {
          unitId
          unitName
        }
      }
      id
      runCode
      status
      statusDesc
      type
      typeDesc
      totalAmount
    }
    id
    matchingSource {
      carNo
      departureDate
      matchDate
      matchSource
      matchSourceName
      runCode
      trailerNo
    }
    purchaseDate
    runCode
    status
    statusDesc
    subType
    subTypeDesc
    supplier {
      supplierId
      supplierName
    }
    warehouse {
      warehouseId
      warehouseName
    }
    commodityItems {
      actualTotalQuantity
      actualUnitQuantity
      amount
      batchCode
      batchId
      canApplyStock
      canReturnTotalQuantity
      canReturnUnitQuantity
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
      deductTotalQuantity
      deductUnitQuantity
      expandOrderTypeEnum
      id
      index
      orderId
      orderType
      price
      priceType {
        unitId
        unitName
      }
      returnTotalQuantity
      returnUnitQuantity
      runCode
      sourceBatchId
      stockBatch {
        batchCode
        batchId
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
        totalQuantity
        unitQuantity
      }
      totalQuantity
      totalType {
        unitId
        unitName
      }
      unitQuantity
      unitType {
        unitId
        unitName
      }
      warehouseId
      expandOrderTypeEnumDesc
      markList
    }
    createBy {
      phoneNum
      userId
      userName
    }
    billId
  }
}
    `;

/**
 * __useDetailDomesticPurchaseOrderQuery__
 *
 * To run a query within a React component, call `useDetailDomesticPurchaseOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailDomesticPurchaseOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailDomesticPurchaseOrderQuery({
 *   variables: {
 *      domesticPurchaseId: // value for 'domesticPurchaseId'
 *   },
 * });
 */
export function useDetailDomesticPurchaseOrderQuery(baseOptions: Apollo.QueryHookOptions<DetailDomesticPurchaseOrderQuery, DetailDomesticPurchaseOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DetailDomesticPurchaseOrderQuery, DetailDomesticPurchaseOrderQueryVariables>(DetailDomesticPurchaseOrderDocument, options);
      }
export function useDetailDomesticPurchaseOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DetailDomesticPurchaseOrderQuery, DetailDomesticPurchaseOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DetailDomesticPurchaseOrderQuery, DetailDomesticPurchaseOrderQueryVariables>(DetailDomesticPurchaseOrderDocument, options);
        }
export type DetailDomesticPurchaseOrderQueryHookResult = ReturnType<typeof useDetailDomesticPurchaseOrderQuery>;
export type DetailDomesticPurchaseOrderLazyQueryHookResult = ReturnType<typeof useDetailDomesticPurchaseOrderLazyQuery>;
export type DetailDomesticPurchaseOrderQueryResult = Apollo.QueryResult<DetailDomesticPurchaseOrderQuery, DetailDomesticPurchaseOrderQueryVariables>;
export const ListCommodityByDomesticPurchaseIdDocument = gql`
    query listCommodityByDomesticPurchaseId($domesticPurchaseId: ID!, $expandOrderId: ID) {
  listCommodityByDomesticPurchaseId(
    domesticPurchaseId: $domesticPurchaseId
    expandOrderId: $expandOrderId
  ) {
    actualTotalQuantity
    actualUnitQuantity
    amount
    batchId
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
    expandOrderTypeEnum
    id
    orderId
    orderType
    price
    priceType {
      unitId
      unitName
    }
    runCode
    stockBatch {
      batchCode
      batchId
      customerBelongInfo {
        customerId
        customerName
        customerType
      }
      totalQuantity
      unitQuantity
    }
    totalQuantity
    totalType {
      unitId
      unitName
    }
    unitQuantity
    unitType {
      unitId
      unitName
    }
    batchCode
    canReturnTotalQuantity
    canReturnUnitQuantity
    deductTotalQuantity
    deductUnitQuantity
    returnTotalQuantity
    returnUnitQuantity
    sourceBatchId
    warehouseId
    index
    canApplyStock
  }
}
    `;

/**
 * __useListCommodityByDomesticPurchaseIdQuery__
 *
 * To run a query within a React component, call `useListCommodityByDomesticPurchaseIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCommodityByDomesticPurchaseIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCommodityByDomesticPurchaseIdQuery({
 *   variables: {
 *      domesticPurchaseId: // value for 'domesticPurchaseId'
 *      expandOrderId: // value for 'expandOrderId'
 *   },
 * });
 */
export function useListCommodityByDomesticPurchaseIdQuery(baseOptions: Apollo.QueryHookOptions<ListCommodityByDomesticPurchaseIdQuery, ListCommodityByDomesticPurchaseIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCommodityByDomesticPurchaseIdQuery, ListCommodityByDomesticPurchaseIdQueryVariables>(ListCommodityByDomesticPurchaseIdDocument, options);
      }
export function useListCommodityByDomesticPurchaseIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCommodityByDomesticPurchaseIdQuery, ListCommodityByDomesticPurchaseIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCommodityByDomesticPurchaseIdQuery, ListCommodityByDomesticPurchaseIdQueryVariables>(ListCommodityByDomesticPurchaseIdDocument, options);
        }
export type ListCommodityByDomesticPurchaseIdQueryHookResult = ReturnType<typeof useListCommodityByDomesticPurchaseIdQuery>;
export type ListCommodityByDomesticPurchaseIdLazyQueryHookResult = ReturnType<typeof useListCommodityByDomesticPurchaseIdLazyQuery>;
export type ListCommodityByDomesticPurchaseIdQueryResult = Apollo.QueryResult<ListCommodityByDomesticPurchaseIdQuery, ListCommodityByDomesticPurchaseIdQueryVariables>;
export const PageDomesticPurchaseOrderDocument = gql`
    query pageDomesticPurchaseOrder($page: Page!, $pageDomesticPurchaseFilter: PageDomesticPurchaseFilter!) {
  pageDomesticPurchaseOrder(
    page: $page
    pageDomesticPurchaseFilter: $pageDomesticPurchaseFilter
  ) {
    pageCurrent
    pageSize
    totalRecords
    records {
      amount
      belongOrg {
        orgId
        orgName
      }
      code
      commodityItems {
        actualTotalQuantity
        actualUnitQuantity
        amount
        batchCode
        batchId
        canApplyStock
        canReturnTotalQuantity
        canReturnUnitQuantity
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
        deductTotalQuantity
        deductUnitQuantity
        expandOrderTypeEnum
        id
        index
        orderId
        orderType
        price
        priceType {
          unitId
          unitName
        }
        returnTotalQuantity
        returnUnitQuantity
        runCode
        sourceBatchId
        stockBatch {
          batchCode
          batchId
          customerBelongInfo {
            customerId
            customerName
            customerType
          }
          totalQuantity
          unitQuantity
        }
        totalQuantity
        totalType {
          unitId
          unitName
        }
        unitQuantity
        unitType {
          unitId
          unitName
        }
        warehouseId
      }
      commodityType
      commodityTypeDesc
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
      }
      id
      matchingSource {
        carNo
        departureDate
        matchDate
        matchSource
        matchSourceName
        runCode
        trailerNo
      }
      purchaseDate
      runCode
      status
      statusDesc
      subType
      subTypeDesc
      supplier {
        supplierId
        supplierName
      }
      warehouse {
        warehouseId
        warehouseName
      }
    }
  }
}
    `;

/**
 * __usePageDomesticPurchaseOrderQuery__
 *
 * To run a query within a React component, call `usePageDomesticPurchaseOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDomesticPurchaseOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageDomesticPurchaseOrderQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageDomesticPurchaseFilter: // value for 'pageDomesticPurchaseFilter'
 *   },
 * });
 */
export function usePageDomesticPurchaseOrderQuery(baseOptions: Apollo.QueryHookOptions<PageDomesticPurchaseOrderQuery, PageDomesticPurchaseOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageDomesticPurchaseOrderQuery, PageDomesticPurchaseOrderQueryVariables>(PageDomesticPurchaseOrderDocument, options);
      }
export function usePageDomesticPurchaseOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageDomesticPurchaseOrderQuery, PageDomesticPurchaseOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageDomesticPurchaseOrderQuery, PageDomesticPurchaseOrderQueryVariables>(PageDomesticPurchaseOrderDocument, options);
        }
export type PageDomesticPurchaseOrderQueryHookResult = ReturnType<typeof usePageDomesticPurchaseOrderQuery>;
export type PageDomesticPurchaseOrderLazyQueryHookResult = ReturnType<typeof usePageDomesticPurchaseOrderLazyQuery>;
export type PageDomesticPurchaseOrderQueryResult = Apollo.QueryResult<PageDomesticPurchaseOrderQuery, PageDomesticPurchaseOrderQueryVariables>;
export const AddCommodityStockDocument = gql`
    mutation addCommodityStock($addCommodityStockInput: AddCommodityStockInput) {
  addCommodityStock(addCommodityStockInput: $addCommodityStockInput)
}
    `;
export type AddCommodityStockMutationFn = Apollo.MutationFunction<AddCommodityStockMutation, AddCommodityStockMutationVariables>;

/**
 * __useAddCommodityStockMutation__
 *
 * To run a mutation, you first call `useAddCommodityStockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommodityStockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommodityStockMutation, { data, loading, error }] = useAddCommodityStockMutation({
 *   variables: {
 *      addCommodityStockInput: // value for 'addCommodityStockInput'
 *   },
 * });
 */
export function useAddCommodityStockMutation(baseOptions?: Apollo.MutationHookOptions<AddCommodityStockMutation, AddCommodityStockMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommodityStockMutation, AddCommodityStockMutationVariables>(AddCommodityStockDocument, options);
      }
export type AddCommodityStockMutationHookResult = ReturnType<typeof useAddCommodityStockMutation>;
export type AddCommodityStockMutationResult = Apollo.MutationResult<AddCommodityStockMutation>;
export type AddCommodityStockMutationOptions = Apollo.BaseMutationOptions<AddCommodityStockMutation, AddCommodityStockMutationVariables>;
export const DetailExpandOrderDocument = gql`
    query detailExpandOrder($idsInput: IdsInput!) {
  detailExpandOrder(idsInput: $idsInput) {
    belongOrg {
      orgId
      orgName
    }
    billId
    code
    commodities {
      actualTotalQuantity
      actualUnitQuantity
      amount
      canReturnTotalQuantity
      canReturnUnitQuantity
      commodity {
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
      expandOrderTypeEnum
      id
      price
      priceType {
        unitId
        unitName
      }
      totalQuantity
      unitQuantity
      index
      batchId
      sourceBatchId
      totalType {
        unitId
        unitName
      }
      unitType {
        unitId
        unitName
      }
    }
    customer {
      customerId
      customerName
      customerType
    }
    fileImages
    freightTotalAmount
    id
    matchingSource {
      carNo
      departureDate
      matchDate
      matchSource
      matchSourceName
      runCode
      trailerNo
    }
    purchaseCode
    remark
    status
    supplier {
      supplierId
      supplierName
    }
    type
    typeDesc
    warehouse {
      warehouseId
      warehouseName
    }
    commodityType
    extendLabelId
    commodityTypeDesc
    freightItemList {
      amount
      costId
      costName
      data
      extendId
      note
      ruleId
      supplier {
        supplierId
        supplierName
      }
      dictItemId
    }
    statusDesc
  }
}
    `;

/**
 * __useDetailExpandOrderQuery__
 *
 * To run a query within a React component, call `useDetailExpandOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailExpandOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailExpandOrderQuery({
 *   variables: {
 *      idsInput: // value for 'idsInput'
 *   },
 * });
 */
export function useDetailExpandOrderQuery(baseOptions: Apollo.QueryHookOptions<DetailExpandOrderQuery, DetailExpandOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DetailExpandOrderQuery, DetailExpandOrderQueryVariables>(DetailExpandOrderDocument, options);
      }
export function useDetailExpandOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DetailExpandOrderQuery, DetailExpandOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DetailExpandOrderQuery, DetailExpandOrderQueryVariables>(DetailExpandOrderDocument, options);
        }
export type DetailExpandOrderQueryHookResult = ReturnType<typeof useDetailExpandOrderQuery>;
export type DetailExpandOrderLazyQueryHookResult = ReturnType<typeof useDetailExpandOrderLazyQuery>;
export type DetailExpandOrderQueryResult = Apollo.QueryResult<DetailExpandOrderQuery, DetailExpandOrderQueryVariables>;
export const CancelExpandOrderDocument = gql`
    mutation cancelExpandOrder($changeStatusExpandOrderInput: ChangeStatusExpandOrderInput!) {
  cancelExpandOrder(changeStatusExpandOrderInput: $changeStatusExpandOrderInput)
}
    `;
export type CancelExpandOrderMutationFn = Apollo.MutationFunction<CancelExpandOrderMutation, CancelExpandOrderMutationVariables>;

/**
 * __useCancelExpandOrderMutation__
 *
 * To run a mutation, you first call `useCancelExpandOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelExpandOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelExpandOrderMutation, { data, loading, error }] = useCancelExpandOrderMutation({
 *   variables: {
 *      changeStatusExpandOrderInput: // value for 'changeStatusExpandOrderInput'
 *   },
 * });
 */
export function useCancelExpandOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelExpandOrderMutation, CancelExpandOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelExpandOrderMutation, CancelExpandOrderMutationVariables>(CancelExpandOrderDocument, options);
      }
export type CancelExpandOrderMutationHookResult = ReturnType<typeof useCancelExpandOrderMutation>;
export type CancelExpandOrderMutationResult = Apollo.MutationResult<CancelExpandOrderMutation>;
export type CancelExpandOrderMutationOptions = Apollo.BaseMutationOptions<CancelExpandOrderMutation, CancelExpandOrderMutationVariables>;
export const CreateExpandOrderDocument = gql`
    mutation createExpandOrder($createExpandOrderInput: CreateExpandOrderInput!) {
  createExpandOrder(createExpandOrderInput: $createExpandOrderInput)
}
    `;
export type CreateExpandOrderMutationFn = Apollo.MutationFunction<CreateExpandOrderMutation, CreateExpandOrderMutationVariables>;

/**
 * __useCreateExpandOrderMutation__
 *
 * To run a mutation, you first call `useCreateExpandOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExpandOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExpandOrderMutation, { data, loading, error }] = useCreateExpandOrderMutation({
 *   variables: {
 *      createExpandOrderInput: // value for 'createExpandOrderInput'
 *   },
 * });
 */
export function useCreateExpandOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateExpandOrderMutation, CreateExpandOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExpandOrderMutation, CreateExpandOrderMutationVariables>(CreateExpandOrderDocument, options);
      }
export type CreateExpandOrderMutationHookResult = ReturnType<typeof useCreateExpandOrderMutation>;
export type CreateExpandOrderMutationResult = Apollo.MutationResult<CreateExpandOrderMutation>;
export type CreateExpandOrderMutationOptions = Apollo.BaseMutationOptions<CreateExpandOrderMutation, CreateExpandOrderMutationVariables>;
export const EditExpandOrderDocument = gql`
    mutation editExpandOrder($createExpandOrderInput: CreateExpandOrderInput, $expandOrderId: ID!) {
  editExpandOrder(
    createExpandOrderInput: $createExpandOrderInput
    expandOrderId: $expandOrderId
  )
}
    `;
export type EditExpandOrderMutationFn = Apollo.MutationFunction<EditExpandOrderMutation, EditExpandOrderMutationVariables>;

/**
 * __useEditExpandOrderMutation__
 *
 * To run a mutation, you first call `useEditExpandOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditExpandOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editExpandOrderMutation, { data, loading, error }] = useEditExpandOrderMutation({
 *   variables: {
 *      createExpandOrderInput: // value for 'createExpandOrderInput'
 *      expandOrderId: // value for 'expandOrderId'
 *   },
 * });
 */
export function useEditExpandOrderMutation(baseOptions?: Apollo.MutationHookOptions<EditExpandOrderMutation, EditExpandOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditExpandOrderMutation, EditExpandOrderMutationVariables>(EditExpandOrderDocument, options);
      }
export type EditExpandOrderMutationHookResult = ReturnType<typeof useEditExpandOrderMutation>;
export type EditExpandOrderMutationResult = Apollo.MutationResult<EditExpandOrderMutation>;
export type EditExpandOrderMutationOptions = Apollo.BaseMutationOptions<EditExpandOrderMutation, EditExpandOrderMutationVariables>;
export const SubmitExpandOrderDocument = gql`
    mutation submitExpandOrder($changeStatusExpandOrderInput: ChangeStatusExpandOrderInput!) {
  submitExpandOrder(changeStatusExpandOrderInput: $changeStatusExpandOrderInput)
}
    `;
export type SubmitExpandOrderMutationFn = Apollo.MutationFunction<SubmitExpandOrderMutation, SubmitExpandOrderMutationVariables>;

/**
 * __useSubmitExpandOrderMutation__
 *
 * To run a mutation, you first call `useSubmitExpandOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitExpandOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitExpandOrderMutation, { data, loading, error }] = useSubmitExpandOrderMutation({
 *   variables: {
 *      changeStatusExpandOrderInput: // value for 'changeStatusExpandOrderInput'
 *   },
 * });
 */
export function useSubmitExpandOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitExpandOrderMutation, SubmitExpandOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitExpandOrderMutation, SubmitExpandOrderMutationVariables>(SubmitExpandOrderDocument, options);
      }
export type SubmitExpandOrderMutationHookResult = ReturnType<typeof useSubmitExpandOrderMutation>;
export type SubmitExpandOrderMutationResult = Apollo.MutationResult<SubmitExpandOrderMutation>;
export type SubmitExpandOrderMutationOptions = Apollo.BaseMutationOptions<SubmitExpandOrderMutation, SubmitExpandOrderMutationVariables>;
export const ListDomesticPurchaseOperationLogDocument = gql`
    query listDomesticPurchaseOperationLog($domesticPurchaseOperationLogInput: DomesticPurchaseOperationLogInput) {
  listDomesticPurchaseOperationLog(
    domesticPurchaseOperationLogInput: $domesticPurchaseOperationLogInput
  ) {
    createUser {
      phoneNum
      userId
      userName
    }
    beforeStatus
    beforeStatusDesc
    createTime
    note
    status
    statusDesc
  }
}
    `;

/**
 * __useListDomesticPurchaseOperationLogQuery__
 *
 * To run a query within a React component, call `useListDomesticPurchaseOperationLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDomesticPurchaseOperationLogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDomesticPurchaseOperationLogQuery({
 *   variables: {
 *      domesticPurchaseOperationLogInput: // value for 'domesticPurchaseOperationLogInput'
 *   },
 * });
 */
export function useListDomesticPurchaseOperationLogQuery(baseOptions?: Apollo.QueryHookOptions<ListDomesticPurchaseOperationLogQuery, ListDomesticPurchaseOperationLogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDomesticPurchaseOperationLogQuery, ListDomesticPurchaseOperationLogQueryVariables>(ListDomesticPurchaseOperationLogDocument, options);
      }
export function useListDomesticPurchaseOperationLogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDomesticPurchaseOperationLogQuery, ListDomesticPurchaseOperationLogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDomesticPurchaseOperationLogQuery, ListDomesticPurchaseOperationLogQueryVariables>(ListDomesticPurchaseOperationLogDocument, options);
        }
export type ListDomesticPurchaseOperationLogQueryHookResult = ReturnType<typeof useListDomesticPurchaseOperationLogQuery>;
export type ListDomesticPurchaseOperationLogLazyQueryHookResult = ReturnType<typeof useListDomesticPurchaseOperationLogLazyQuery>;
export type ListDomesticPurchaseOperationLogQueryResult = Apollo.QueryResult<ListDomesticPurchaseOperationLogQuery, ListDomesticPurchaseOperationLogQueryVariables>;
export const UpdateBill2ReturnAmountDocument = gql`
    mutation updateBill2ReturnAmount($input: UpdateBill2PaymentInput!) {
  updateBill2ReturnAmount(input: $input)
}
    `;
export type UpdateBill2ReturnAmountMutationFn = Apollo.MutationFunction<UpdateBill2ReturnAmountMutation, UpdateBill2ReturnAmountMutationVariables>;

/**
 * __useUpdateBill2ReturnAmountMutation__
 *
 * To run a mutation, you first call `useUpdateBill2ReturnAmountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBill2ReturnAmountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBill2ReturnAmountMutation, { data, loading, error }] = useUpdateBill2ReturnAmountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBill2ReturnAmountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBill2ReturnAmountMutation, UpdateBill2ReturnAmountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBill2ReturnAmountMutation, UpdateBill2ReturnAmountMutationVariables>(UpdateBill2ReturnAmountDocument, options);
      }
export type UpdateBill2ReturnAmountMutationHookResult = ReturnType<typeof useUpdateBill2ReturnAmountMutation>;
export type UpdateBill2ReturnAmountMutationResult = Apollo.MutationResult<UpdateBill2ReturnAmountMutation>;
export type UpdateBill2ReturnAmountMutationOptions = Apollo.BaseMutationOptions<UpdateBill2ReturnAmountMutation, UpdateBill2ReturnAmountMutationVariables>;
export const PageExpandOrderDocument = gql`
    query pageExpandOrder($input: PageExpandOrderInput, $page: Page) {
  pageExpandOrder(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      createUser {
        phoneNum
        userId
        userName
      }
      applyId
      businessInfo {
        belongOrg {
          orgId
          orgName
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
        warehouse {
          warehouseId
          warehouseName
        }
        applyId
        commodityType
        commodityTypeDesc
        purchaseCode
        purchaseTime
        runCode
        createUser {
          phoneNum
          userId
          userName
        }
        createTime
        matchingSource {
          carNo
          departureDate
          matchDate
          matchSource
          matchSourceName
          runCode
          trailerNo
        }
      }
      code
      commodityItems {
        commodity {
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
        actualTotalQuantity
        actualUnitQuantity
        amount
        batchId
        canReturnTotalQuantity
        canReturnUnitQuantity
        expandOrderTypeEnum
        id
        index
        price
        sourceBatchId
        totalQuantity
        unitQuantity
      }
      createTime
      id
      runCode
      status
      statusDesc
      totalAmount
      type
      typeDesc
    }
    totalRecords
  }
}
    `;

/**
 * __usePageExpandOrderQuery__
 *
 * To run a query within a React component, call `usePageExpandOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageExpandOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageExpandOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageExpandOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageExpandOrderQuery, PageExpandOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageExpandOrderQuery, PageExpandOrderQueryVariables>(PageExpandOrderDocument, options);
      }
export function usePageExpandOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageExpandOrderQuery, PageExpandOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageExpandOrderQuery, PageExpandOrderQueryVariables>(PageExpandOrderDocument, options);
        }
export type PageExpandOrderQueryHookResult = ReturnType<typeof usePageExpandOrderQuery>;
export type PageExpandOrderLazyQueryHookResult = ReturnType<typeof usePageExpandOrderLazyQuery>;
export type PageExpandOrderQueryResult = Apollo.QueryResult<PageExpandOrderQuery, PageExpandOrderQueryVariables>;
export const ExpandOrderBadgeDocument = gql`
    query expandOrderBadge($input: ExpandOrderBadgeInput) {
  expandOrderBadge(input: $input) {
    completed
    toBeDelivered
    toBeSubmit
  }
}
    `;

/**
 * __useExpandOrderBadgeQuery__
 *
 * To run a query within a React component, call `useExpandOrderBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `useExpandOrderBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExpandOrderBadgeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExpandOrderBadgeQuery(baseOptions?: Apollo.QueryHookOptions<ExpandOrderBadgeQuery, ExpandOrderBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExpandOrderBadgeQuery, ExpandOrderBadgeQueryVariables>(ExpandOrderBadgeDocument, options);
      }
export function useExpandOrderBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExpandOrderBadgeQuery, ExpandOrderBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExpandOrderBadgeQuery, ExpandOrderBadgeQueryVariables>(ExpandOrderBadgeDocument, options);
        }
export type ExpandOrderBadgeQueryHookResult = ReturnType<typeof useExpandOrderBadgeQuery>;
export type ExpandOrderBadgeLazyQueryHookResult = ReturnType<typeof useExpandOrderBadgeLazyQuery>;
export type ExpandOrderBadgeQueryResult = Apollo.QueryResult<ExpandOrderBadgeQuery, ExpandOrderBadgeQueryVariables>;