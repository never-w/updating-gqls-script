import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageInOrderRecordQueryVariables = SchemaTypes.Exact<{
  inOrderRecordCondition: SchemaTypes.InOrderRecordFilter;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageInOrderRecordQuery = { pageInOrderRecord?: { __typename?: 'PageInOrderRecordPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'InOrderRecordListPayload', inStockRecordId?: string, inOrderTypeId?: number, inOrderTypeName?: string, inOrderCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerTypeId?: number, customerTypeName?: string, customerId?: number, customerName?: string, warehouseId?: string, warehouseName?: string, createUserName?: string, createTime?: number, inStockCode?: string, stockOrderTypeId?: number, commodities?: Array<{ __typename?: 'InOrderRecordItemDetailPayload', conversion?: number, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitTypeName?: string, totalQuantity?: number, totalTypeName?: string, unitPrice?: number, unitPriceTypeName?: string, unitTotalPrice?: number, batchCode?: string, grossUnitQuantity?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, commodityTypeId?: number, commodityTypeName?: string, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } }> }> } };

export type GetInOrderRecordDetailQueryVariables = SchemaTypes.Exact<{
  inOrderDetailInput?: SchemaTypes.InputMaybe<SchemaTypes.InOrderDetailInput>;
}>;


export type GetInOrderRecordDetailQuery = { getInOrderRecordDetail?: { __typename?: 'InOrderRecordDetailPayload', inStockRecordId?: string, inOrderTypeId?: number, inOrderTypeName?: string, inOrderCode?: string, taskId?: string, taskCode?: string, commodityTypeId?: number, commodityTypeName?: string, customerTypeId?: number, customerTypeName?: string, customerId?: number, customerName?: string, inOrderStatusId?: number, inOrderStatus?: string, warehouseId?: string, warehouseName?: string, supplierId?: number, supplierName?: string, inOrderDescription?: string, totalPrice?: number, submitUserName?: string, submitTime?: number, putInUserName?: string, putInTime?: number, deliveryFee?: number, inStockCode?: string, stockOrderTypeId?: number, commodities?: Array<{ __typename?: 'InOrderRecordItemDetailPayload', conversion?: number, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitTypeName?: string, grossUnitQuantity?: number, totalQuantity?: number, totalTypeName?: string, unitPrice?: number, unitPriceTypeName?: string, unitTotalPrice?: number, batchCode?: string, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } }> } };

export type PageOutStockRecordQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  pageOutStockRecordInput: SchemaTypes.PageOutStockRecordInput;
}>;


export type PageOutStockRecordQuery = { pageOutStockRecord?: { __typename?: 'PageOutOrderRecordPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'OutStockRecordQueryPayload', commodityTypeId?: number, commodityTypeName?: string, createBy?: number, createTime?: number, createUserName?: string, customerId?: number, customerName?: string, customerType?: number, customerTypeName?: string, deliveryFee?: number, organizationId?: number, organizationName?: string, outOrderCode?: string, outOrderId?: string, outOrderItemId?: string, outOrderType?: number, outOrderTypeName?: string, outStockCode?: string, outStockRecordId?: string, remark?: string, taskCode?: string, totalPrice?: number, warehouseId?: string, warehouseName?: string, stockOrderType?: number, items?: Array<{ __typename?: 'OutStockRecordItemPayload', basketCustomerId?: number, basketCustomerName?: string, basketQuantity?: number, belongCustomerId?: number, belongCustomerName?: string, belongWarehouseId?: string, belongWarehouseName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, conversion?: number, outOrderCode?: string, outOrderId?: string, outOrderType?: number, outStockRecordId?: string, outStockRecordItemId?: number, photos?: Array<string>, salePrice?: number, salePriceType?: number, salePriceTypeName?: string, skuSpecOptionId?: Array<number>, skuTextDescription?: Array<string>, stockBatchCode?: string, stockTotalPrice?: number, stockUnitPrice?: number, stockUnitPriceType?: number, stockUnitPriceTypeName?: string, taskId?: string, totalPrice?: number, totalQuantity?: number, totalType?: number, totalTypeName?: string, unitQuantity?: number, unitType?: number, unitTypeName?: string, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, commodityTypeId?: number, commodityTypeName?: string, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } }> }> } };

export type OutOrderRecordDetailQueryVariables = SchemaTypes.Exact<{
  outStockRecordInput?: SchemaTypes.InputMaybe<SchemaTypes.OutStockRecordInput>;
  getOutStockRecordLogInput?: SchemaTypes.InputMaybe<SchemaTypes.GetOutStockRecordLogInput>;
}>;


export type OutOrderRecordDetailQuery = { outStockRecord?: { __typename?: 'OutStockRecordPayload', outStockRecordId?: string, outOrderId?: string, outOrderType?: number, commodityTypeId?: number, commodityTypeName?: string, totalPrice?: number, organizationId?: number, organizationName?: string, warehouseId?: string, warehouseName?: string, customerType?: number, customerTypeName?: string, customerId?: number, customerName?: string, taskCode?: string, createUserName?: string, createTime?: number, createBy?: number, outOrderItemId?: string, remark?: string, outStockCode?: string, outOrderCode?: string, outOrderTypeName?: string, deliveryFee?: number, stockOrderType?: number, items?: Array<{ __typename?: 'OutStockRecordItemAggPayload', commodityName?: string, skuTextDescription?: Array<string>, basketQuantity?: number, basketCustomerName?: string, salePrice?: number, salePriceTypeName?: string, totalPrice?: number, totalType?: number, totalTypeName?: string, unitType?: number, unitTypeName?: string, outStockCode?: string, conversion?: number, items?: Array<{ __typename?: 'OutStockRecordItemPayload', outStockRecordItemId?: number, outStockRecordId?: string, outOrderId?: string, stockBatchCode?: string, outOrderCode?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, skuSpecOptionId?: Array<number>, skuTextDescription?: Array<string>, salePrice?: number, salePriceType?: number, salePriceTypeName?: string, totalPrice?: number, unitType?: number, unitTypeName?: string, unitQuantity?: number, totalType?: number, totalTypeName?: string, totalQuantity?: number, taskId?: string, outOrderType?: number, belongCustomerId?: number, belongCustomerName?: string, belongWarehouseId?: string, belongWarehouseName?: string, basketQuantity?: number, basketCustomerId?: number, basketCustomerName?: string, stockUnitPrice?: number, stockUnitPriceType?: number, stockUnitPriceTypeName?: string, stockTotalPrice?: number, conversion?: number, photos?: Array<string>, mark?: SchemaTypes.ApplyMarkEnum, markName?: string, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } } }> }> }, getOutStockRecordLog?: { __typename?: 'OutStockRecordLogPayload', submitUserName?: string, submitTime?: number, putInUserName?: string, putInTime?: number } };

export type ListOutStockRecordTypeQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListOutStockRecordTypeQuery = { listOutStockRecordType?: Array<{ __typename?: 'OutStockRecordOption', label?: string, outOrderTypeId?: number, stockOrderTypeId?: number }> };

export type ListInStockRecordTypeQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ListInStockRecordTypeQuery = { listInStockRecordType?: Array<{ __typename?: 'InStockRecordOption', label?: string, inOrderTypeId?: number, stockOrderTypeId?: number }> };


export const PageInOrderRecordDocument = gql`
    query pageInOrderRecord($inOrderRecordCondition: InOrderRecordFilter!, $page: Page) {
  pageInOrderRecord(inOrderRecordCondition: $inOrderRecordCondition, page: $page) {
    records {
      inStockRecordId
      inOrderTypeId
      inOrderTypeName
      inOrderCode
      commodityTypeId
      commodityTypeName
      customerTypeId
      customerTypeName
      customerId
      customerName
      warehouseId
      warehouseName
      createUserName
      createTime
      commodities {
        conversion
        commodityId
        commodityName
        commoditySkuId
        commoditySpecOptionId
        skuTextDescription
        unitQuantity
        unitTypeName
        totalQuantity
        totalTypeName
        unitPrice
        unitPriceTypeName
        unitTotalPrice
        batchCode
        batchInfo {
          warehouse {
            warehouseId
            warehouseName
          }
          batchCode
          batchId
          createTime
          totalQuantity
          unitQuantity
          commodityTypeId
          commodityTypeName
        }
        grossUnitQuantity
      }
      inStockCode
      stockOrderTypeId
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageInOrderRecordQuery__
 *
 * To run a query within a React component, call `usePageInOrderRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageInOrderRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageInOrderRecordQuery({
 *   variables: {
 *      inOrderRecordCondition: // value for 'inOrderRecordCondition'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageInOrderRecordQuery(baseOptions: Apollo.QueryHookOptions<PageInOrderRecordQuery, PageInOrderRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageInOrderRecordQuery, PageInOrderRecordQueryVariables>(PageInOrderRecordDocument, options);
      }
export function usePageInOrderRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageInOrderRecordQuery, PageInOrderRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageInOrderRecordQuery, PageInOrderRecordQueryVariables>(PageInOrderRecordDocument, options);
        }
export type PageInOrderRecordQueryHookResult = ReturnType<typeof usePageInOrderRecordQuery>;
export type PageInOrderRecordLazyQueryHookResult = ReturnType<typeof usePageInOrderRecordLazyQuery>;
export type PageInOrderRecordQueryResult = Apollo.QueryResult<PageInOrderRecordQuery, PageInOrderRecordQueryVariables>;
export const GetInOrderRecordDetailDocument = gql`
    query getInOrderRecordDetail($inOrderDetailInput: InOrderDetailInput) {
  getInOrderRecordDetail(inOrderDetailInput: $inOrderDetailInput) {
    inStockRecordId
    inOrderTypeId
    inOrderTypeName
    inOrderCode
    taskId
    taskCode
    commodityTypeId
    commodityTypeName
    customerTypeId
    customerTypeName
    customerId
    customerName
    inOrderStatusId
    inOrderStatus
    warehouseId
    warehouseName
    supplierId
    supplierName
    inOrderDescription
    commodities {
      conversion
      commodityId
      commodityName
      commoditySkuId
      commoditySpecOptionId
      skuTextDescription
      unitQuantity
      unitTypeName
      grossUnitQuantity
      totalQuantity
      totalTypeName
      unitPrice
      unitPriceTypeName
      unitTotalPrice
      batchCode
      batchInfo {
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
      mark
      markName
    }
    totalPrice
    submitUserName
    submitTime
    putInUserName
    putInTime
    deliveryFee
    inStockCode
    stockOrderTypeId
  }
}
    `;

/**
 * __useGetInOrderRecordDetailQuery__
 *
 * To run a query within a React component, call `useGetInOrderRecordDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInOrderRecordDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInOrderRecordDetailQuery({
 *   variables: {
 *      inOrderDetailInput: // value for 'inOrderDetailInput'
 *   },
 * });
 */
export function useGetInOrderRecordDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetInOrderRecordDetailQuery, GetInOrderRecordDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInOrderRecordDetailQuery, GetInOrderRecordDetailQueryVariables>(GetInOrderRecordDetailDocument, options);
      }
export function useGetInOrderRecordDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInOrderRecordDetailQuery, GetInOrderRecordDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInOrderRecordDetailQuery, GetInOrderRecordDetailQueryVariables>(GetInOrderRecordDetailDocument, options);
        }
export type GetInOrderRecordDetailQueryHookResult = ReturnType<typeof useGetInOrderRecordDetailQuery>;
export type GetInOrderRecordDetailLazyQueryHookResult = ReturnType<typeof useGetInOrderRecordDetailLazyQuery>;
export type GetInOrderRecordDetailQueryResult = Apollo.QueryResult<GetInOrderRecordDetailQuery, GetInOrderRecordDetailQueryVariables>;
export const PageOutStockRecordDocument = gql`
    query pageOutStockRecord($page: Page, $pageOutStockRecordInput: PageOutStockRecordInput!) {
  pageOutStockRecord(
    page: $page
    pageOutStockRecordInput: $pageOutStockRecordInput
  ) {
    pageCurrent
    pageSize
    records {
      commodityTypeId
      commodityTypeName
      createBy
      createTime
      createUserName
      customerId
      customerName
      customerType
      customerTypeName
      deliveryFee
      items {
        basketCustomerId
        basketCustomerName
        basketQuantity
        belongCustomerId
        belongCustomerName
        belongWarehouseId
        belongWarehouseName
        commodityId
        commodityName
        commoditySkuId
        conversion
        outOrderCode
        outOrderId
        outOrderType
        outStockRecordId
        outStockRecordItemId
        photos
        salePrice
        salePriceType
        salePriceTypeName
        skuSpecOptionId
        skuTextDescription
        stockBatchCode
        stockTotalPrice
        stockUnitPrice
        stockUnitPriceType
        stockUnitPriceTypeName
        taskId
        totalPrice
        totalQuantity
        totalType
        totalTypeName
        unitQuantity
        unitType
        unitTypeName
        batchInfo {
          warehouse {
            warehouseId
            warehouseName
          }
          batchCode
          batchId
          createTime
          totalQuantity
          unitQuantity
          commodityTypeId
          commodityTypeName
        }
      }
      organizationId
      organizationName
      outOrderCode
      outOrderId
      outOrderItemId
      outOrderType
      outOrderTypeName
      outStockCode
      outStockRecordId
      remark
      taskCode
      totalPrice
      warehouseId
      warehouseName
      stockOrderType
    }
    totalRecords
  }
}
    `;

/**
 * __usePageOutStockRecordQuery__
 *
 * To run a query within a React component, call `usePageOutStockRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageOutStockRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageOutStockRecordQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageOutStockRecordInput: // value for 'pageOutStockRecordInput'
 *   },
 * });
 */
export function usePageOutStockRecordQuery(baseOptions: Apollo.QueryHookOptions<PageOutStockRecordQuery, PageOutStockRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageOutStockRecordQuery, PageOutStockRecordQueryVariables>(PageOutStockRecordDocument, options);
      }
export function usePageOutStockRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageOutStockRecordQuery, PageOutStockRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageOutStockRecordQuery, PageOutStockRecordQueryVariables>(PageOutStockRecordDocument, options);
        }
export type PageOutStockRecordQueryHookResult = ReturnType<typeof usePageOutStockRecordQuery>;
export type PageOutStockRecordLazyQueryHookResult = ReturnType<typeof usePageOutStockRecordLazyQuery>;
export type PageOutStockRecordQueryResult = Apollo.QueryResult<PageOutStockRecordQuery, PageOutStockRecordQueryVariables>;
export const OutOrderRecordDetailDocument = gql`
    query outOrderRecordDetail($outStockRecordInput: OutStockRecordInput, $getOutStockRecordLogInput: GetOutStockRecordLogInput) {
  outStockRecord(outStockRecordInput: $outStockRecordInput) {
    outStockRecordId
    outOrderId
    outOrderType
    commodityTypeId
    commodityTypeName
    totalPrice
    organizationId
    organizationName
    warehouseId
    warehouseName
    customerType
    customerTypeName
    customerId
    customerName
    taskCode
    createUserName
    createTime
    createBy
    outOrderItemId
    remark
    outStockCode
    outOrderCode
    outOrderTypeName
    deliveryFee
    items {
      commodityName
      skuTextDescription
      basketQuantity
      basketCustomerName
      salePrice
      salePriceTypeName
      totalPrice
      totalType
      totalTypeName
      unitType
      unitTypeName
      items {
        outStockRecordItemId
        outStockRecordId
        outOrderId
        stockBatchCode
        outOrderCode
        commodityId
        commodityName
        commoditySkuId
        skuSpecOptionId
        skuTextDescription
        salePrice
        salePriceType
        salePriceTypeName
        totalPrice
        unitType
        unitTypeName
        unitQuantity
        totalType
        totalTypeName
        totalQuantity
        taskId
        outOrderType
        belongCustomerId
        belongCustomerName
        belongWarehouseId
        belongWarehouseName
        basketQuantity
        basketCustomerId
        basketCustomerName
        stockUnitPrice
        stockUnitPriceType
        stockUnitPriceTypeName
        stockTotalPrice
        batchInfo {
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
        conversion
        photos
        mark
        markName
      }
      outStockCode
      conversion
    }
    stockOrderType
  }
  getOutStockRecordLog(getOutStockRecordLogInput: $getOutStockRecordLogInput) {
    submitUserName
    submitTime
    putInUserName
    putInTime
  }
}
    `;

/**
 * __useOutOrderRecordDetailQuery__
 *
 * To run a query within a React component, call `useOutOrderRecordDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useOutOrderRecordDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOutOrderRecordDetailQuery({
 *   variables: {
 *      outStockRecordInput: // value for 'outStockRecordInput'
 *      getOutStockRecordLogInput: // value for 'getOutStockRecordLogInput'
 *   },
 * });
 */
export function useOutOrderRecordDetailQuery(baseOptions?: Apollo.QueryHookOptions<OutOrderRecordDetailQuery, OutOrderRecordDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OutOrderRecordDetailQuery, OutOrderRecordDetailQueryVariables>(OutOrderRecordDetailDocument, options);
      }
export function useOutOrderRecordDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OutOrderRecordDetailQuery, OutOrderRecordDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OutOrderRecordDetailQuery, OutOrderRecordDetailQueryVariables>(OutOrderRecordDetailDocument, options);
        }
export type OutOrderRecordDetailQueryHookResult = ReturnType<typeof useOutOrderRecordDetailQuery>;
export type OutOrderRecordDetailLazyQueryHookResult = ReturnType<typeof useOutOrderRecordDetailLazyQuery>;
export type OutOrderRecordDetailQueryResult = Apollo.QueryResult<OutOrderRecordDetailQuery, OutOrderRecordDetailQueryVariables>;
export const ListOutStockRecordTypeDocument = gql`
    query listOutStockRecordType {
  listOutStockRecordType {
    label
    outOrderTypeId
    stockOrderTypeId
  }
}
    `;

/**
 * __useListOutStockRecordTypeQuery__
 *
 * To run a query within a React component, call `useListOutStockRecordTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOutStockRecordTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOutStockRecordTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useListOutStockRecordTypeQuery(baseOptions?: Apollo.QueryHookOptions<ListOutStockRecordTypeQuery, ListOutStockRecordTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListOutStockRecordTypeQuery, ListOutStockRecordTypeQueryVariables>(ListOutStockRecordTypeDocument, options);
      }
export function useListOutStockRecordTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListOutStockRecordTypeQuery, ListOutStockRecordTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListOutStockRecordTypeQuery, ListOutStockRecordTypeQueryVariables>(ListOutStockRecordTypeDocument, options);
        }
export type ListOutStockRecordTypeQueryHookResult = ReturnType<typeof useListOutStockRecordTypeQuery>;
export type ListOutStockRecordTypeLazyQueryHookResult = ReturnType<typeof useListOutStockRecordTypeLazyQuery>;
export type ListOutStockRecordTypeQueryResult = Apollo.QueryResult<ListOutStockRecordTypeQuery, ListOutStockRecordTypeQueryVariables>;
export const ListInStockRecordTypeDocument = gql`
    query listInStockRecordType {
  listInStockRecordType {
    label
    inOrderTypeId
    stockOrderTypeId
  }
}
    `;

/**
 * __useListInStockRecordTypeQuery__
 *
 * To run a query within a React component, call `useListInStockRecordTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListInStockRecordTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListInStockRecordTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useListInStockRecordTypeQuery(baseOptions?: Apollo.QueryHookOptions<ListInStockRecordTypeQuery, ListInStockRecordTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListInStockRecordTypeQuery, ListInStockRecordTypeQueryVariables>(ListInStockRecordTypeDocument, options);
      }
export function useListInStockRecordTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListInStockRecordTypeQuery, ListInStockRecordTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListInStockRecordTypeQuery, ListInStockRecordTypeQueryVariables>(ListInStockRecordTypeDocument, options);
        }
export type ListInStockRecordTypeQueryHookResult = ReturnType<typeof useListInStockRecordTypeQuery>;
export type ListInStockRecordTypeLazyQueryHookResult = ReturnType<typeof useListInStockRecordTypeLazyQuery>;
export type ListInStockRecordTypeQueryResult = Apollo.QueryResult<ListInStockRecordTypeQuery, ListInStockRecordTypeQueryVariables>;