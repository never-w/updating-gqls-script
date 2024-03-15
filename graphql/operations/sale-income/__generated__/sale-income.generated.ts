import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageSaleIncomeOrderQueryVariables = SchemaTypes.Exact<{
  pageSaleIncomeOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.PageSaleIncomeOrderInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageSaleIncomeOrderQuery = { pageSaleIncomeOrder?: { __typename?: 'PageSaleIncomeOrderPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'SaleIncomeOrderPayload', incomeId?: string, incomeStatus?: SchemaTypes.IncomeStatus, incomeStatusName?: string, incomeCode?: string, sourceId?: string, sourceType?: SchemaTypes.SaleIncomeSourceType, sourceTypeName?: string, remark?: string, rejectReason?: string, createTime?: number, saleCostOrderId?: string, totalAmount?: number, commodityTypeName?: string, payMode?: SchemaTypes.OutOrderPayModeEnum, saleTime?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commoditiesList?: Array<{ __typename?: 'SaleIncomeOrderItemPayload', incomeItemId?: string, incomeId?: string, commodityName?: string, unitQuantity?: number, saleMoney?: number, photosList?: Array<string>, outOrderItemId?: string, salePrice?: number, remark?: string, totalQuantity?: number, batchId?: number, batchCode?: string, totalSalePrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type GetSaleIncomeOrderQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetSaleIncomeInput>;
}>;


export type GetSaleIncomeOrderQuery = { getSaleIncomeOrder?: { __typename?: 'SaleIncomeOrderPayload', incomeId?: string, incomeStatus?: SchemaTypes.IncomeStatus, incomeStatusName?: string, incomeCode?: string, sourceId?: string, sourceType?: SchemaTypes.SaleIncomeSourceType, sourceTypeName?: string, remark?: string, rejectReason?: string, createTime?: number, saleCostOrderId?: string, totalAmount?: number, commodityTypeName?: string, payMode?: SchemaTypes.OutOrderPayModeEnum, saleTime?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, commoditiesList?: Array<{ __typename?: 'SaleIncomeOrderItemPayload', incomeItemId?: string, incomeId?: string, commodityName?: string, unitQuantity?: number, saleMoney?: number, photosList?: Array<string>, outOrderItemId?: string, salePrice?: number, remark?: string, totalQuantity?: number, batchId?: number, batchCode?: string, totalSalePrice?: number, goodsUnitQuantity?: number, goodsTotalQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, commodityBatchInfoList?: Array<{ __typename?: 'SaleIncomeCommodityBatchInfo', batchCode?: string, batchId?: string, goodsTotalQuantity?: number, goodsUnitQuantity?: number, incomeItemId?: string, outOrderItemId?: string, salePrice?: number, totalQuantity?: number, totalSalePrice?: number, unitQuantity?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }>, originalSaleCommodityPayload?: Array<{ __typename?: 'OriginalSaleCommodityPayload', outOrderItemId?: string, batchId?: string, batchCode?: string, salePrice?: number, totalQuantity?: number, unitQuantity?: number, saleTotalPrice?: number, outOrderId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, salePriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, stockQuantity?: { __typename?: 'StockQuantity', unitQuantity?: number, totalQuantity?: number }, actualQuantity?: { __typename?: 'ActualQuantity', actualTotalQuantity?: number, actualUnitQuantity?: number, actualSalePrice?: number, actualSaleTotalPrice?: number, outOrderItemId?: string } }>, saleCostOrderItems?: Array<{ __typename?: 'SaleCostOrderItemPayload', saleCostOrderItemId?: string, saleCostOrderId?: string, outOrderItemId?: string, packagingFee?: number, materialFee?: number, commodity?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, logs?: Array<{ __typename?: 'SaleIncomeOrderLogPayload', incomeLogId?: string, incomeId?: string, type?: SchemaTypes.SaleIncomeLogType, typeText?: string, remark?: string, createTime?: number, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }>, functionalField?: { __typename?: 'FunctionalField', saleTotalPrice?: number, saleTotalCost?: number }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type SaleIncomeOrderStatisticQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type SaleIncomeOrderStatisticQuery = { saleIncomeOrderStatistic?: { __typename?: 'SaleIncomeOrderStatisticPayload', orderCount?: number, auditCount?: number } };

export type SaleIncomeOrderStatusStatisticQueryVariables = SchemaTypes.Exact<{
  saleIncomeOrderStatusStatisticInput?: SchemaTypes.InputMaybe<SchemaTypes.SaleIncomeOrderStatusStatisticInput>;
}>;


export type SaleIncomeOrderStatusStatisticQuery = { saleIncomeOrderStatusStatistic?: { __typename?: 'SaleIncomeOrderStatusStatisticPayload', waitSubmit?: number, financialReject?: number, unBusinessAudit?: number, unBackOfficeAudit?: number, unFinancialAudit?: number, finished?: number, businessReject?: number } };

export type SubmitSaleIncomeOrderMutationVariables = SchemaTypes.Exact<{
  submitSaleIncomeOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.SubmitSaleIncomeOrderInput>;
}>;


export type SubmitSaleIncomeOrderMutation = { submitSaleIncomeOrder?: boolean };

export type AuditSaleIncomeOrderMutationVariables = SchemaTypes.Exact<{
  auditSaleIncomeOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.AuditSaleIncomeOrderInput>;
}>;


export type AuditSaleIncomeOrderMutation = { auditSaleIncomeOrder?: boolean };

export type RejectSaleIncomeOrderMutationVariables = SchemaTypes.Exact<{
  rejectSaleIncomeOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.RejectSaleIncomeOrderInput>;
}>;


export type RejectSaleIncomeOrderMutation = { rejectSaleIncomeOrder?: boolean };

export type SubmitSaleIncomeOrderWebMutationVariables = SchemaTypes.Exact<{
  incomeId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['ID']>;
}>;


export type SubmitSaleIncomeOrderWebMutation = { submitSaleIncomeOrderWeb?: string };


export const PageSaleIncomeOrderDocument = gql`
    query pageSaleIncomeOrder($pageSaleIncomeOrderInput: PageSaleIncomeOrderInput, $page: Page) {
  pageSaleIncomeOrder(
    pageSaleIncomeOrderInput: $pageSaleIncomeOrderInput
    page: $page
  ) {
    records {
      incomeId
      incomeStatus
      incomeStatusName
      incomeCode
      sourceId
      sourceType
      sourceTypeName
      warehouse {
        warehouseId
        warehouseName
      }
      remark
      rejectReason
      user {
        userId
        userName
        phoneNum
      }
      customer {
        customerId
        customerName
        customerType
      }
      createTime
      commoditiesList {
        incomeItemId
        incomeId
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
        }
        commodityName
        unitQuantity
        unitType {
          unitId
          unitName
        }
        saleMoney
        photosList
        outOrderItemId
        salePrice
        remark
        totalQuantity
        totalType {
          unitId
          unitName
        }
        batchId
        batchCode
        totalSalePrice
        priceType {
          unitId
          unitName
        }
      }
      saleCostOrderId
      totalAmount
      commodityTypeName
      payMode
      belongOrg {
        orgId
        orgName
      }
      saleTime
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageSaleIncomeOrderQuery__
 *
 * To run a query within a React component, call `usePageSaleIncomeOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSaleIncomeOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSaleIncomeOrderQuery({
 *   variables: {
 *      pageSaleIncomeOrderInput: // value for 'pageSaleIncomeOrderInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageSaleIncomeOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageSaleIncomeOrderQuery, PageSaleIncomeOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageSaleIncomeOrderQuery, PageSaleIncomeOrderQueryVariables>(PageSaleIncomeOrderDocument, options);
      }
export function usePageSaleIncomeOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageSaleIncomeOrderQuery, PageSaleIncomeOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageSaleIncomeOrderQuery, PageSaleIncomeOrderQueryVariables>(PageSaleIncomeOrderDocument, options);
        }
export type PageSaleIncomeOrderQueryHookResult = ReturnType<typeof usePageSaleIncomeOrderQuery>;
export type PageSaleIncomeOrderLazyQueryHookResult = ReturnType<typeof usePageSaleIncomeOrderLazyQuery>;
export type PageSaleIncomeOrderQueryResult = Apollo.QueryResult<PageSaleIncomeOrderQuery, PageSaleIncomeOrderQueryVariables>;
export const GetSaleIncomeOrderDocument = gql`
    query getSaleIncomeOrder($input: GetSaleIncomeInput) {
  getSaleIncomeOrder(input: $input) {
    incomeId
    incomeStatus
    incomeStatusName
    incomeCode
    sourceId
    sourceType
    sourceTypeName
    warehouse {
      warehouseId
      warehouseName
    }
    remark
    rejectReason
    user {
      userId
      userName
      phoneNum
    }
    customer {
      customerId
      customerName
      customerType
    }
    createTime
    commoditiesList {
      incomeItemId
      incomeId
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
      }
      commodityName
      unitQuantity
      unitType {
        unitId
        unitName
      }
      saleMoney
      photosList
      outOrderItemId
      salePrice
      remark
      totalQuantity
      totalType {
        unitId
        unitName
      }
      batchId
      batchCode
      totalSalePrice
      priceType {
        unitId
        unitName
      }
      goodsUnitQuantity
      goodsTotalQuantity
      commodityBatchInfoList {
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
        goodsTotalQuantity
        goodsUnitQuantity
        incomeItemId
        outOrderItemId
        salePrice
        totalQuantity
        totalSalePrice
        unitQuantity
      }
    }
    originalSaleCommodityPayload {
      outOrderItemId
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
      }
      batchId
      batchCode
      salePrice
      salePriceType {
        unitId
        unitName
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
      saleTotalPrice
      stockQuantity {
        unitQuantity
        totalQuantity
      }
      actualQuantity {
        actualTotalQuantity
        actualUnitQuantity
        actualSalePrice
        actualSaleTotalPrice
        outOrderItemId
      }
      outOrderId
    }
    saleCostOrderItems {
      saleCostOrderItemId
      saleCostOrderId
      outOrderItemId
      commodity {
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
      packagingFee
      materialFee
    }
    logs {
      incomeLogId
      incomeId
      type
      typeText
      remark
      createTime
      user {
        userId
        userName
        phoneNum
      }
    }
    saleCostOrderId
    functionalField {
      saleTotalPrice
      saleTotalCost
    }
    totalAmount
    commodityTypeName
    payMode
    belongOrg {
      orgId
      orgName
    }
    saleTime
  }
}
    `;

/**
 * __useGetSaleIncomeOrderQuery__
 *
 * To run a query within a React component, call `useGetSaleIncomeOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSaleIncomeOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSaleIncomeOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSaleIncomeOrderQuery(baseOptions?: Apollo.QueryHookOptions<GetSaleIncomeOrderQuery, GetSaleIncomeOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSaleIncomeOrderQuery, GetSaleIncomeOrderQueryVariables>(GetSaleIncomeOrderDocument, options);
      }
export function useGetSaleIncomeOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSaleIncomeOrderQuery, GetSaleIncomeOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSaleIncomeOrderQuery, GetSaleIncomeOrderQueryVariables>(GetSaleIncomeOrderDocument, options);
        }
export type GetSaleIncomeOrderQueryHookResult = ReturnType<typeof useGetSaleIncomeOrderQuery>;
export type GetSaleIncomeOrderLazyQueryHookResult = ReturnType<typeof useGetSaleIncomeOrderLazyQuery>;
export type GetSaleIncomeOrderQueryResult = Apollo.QueryResult<GetSaleIncomeOrderQuery, GetSaleIncomeOrderQueryVariables>;
export const SaleIncomeOrderStatisticDocument = gql`
    query saleIncomeOrderStatistic {
  saleIncomeOrderStatistic {
    orderCount
    auditCount
  }
}
    `;

/**
 * __useSaleIncomeOrderStatisticQuery__
 *
 * To run a query within a React component, call `useSaleIncomeOrderStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleIncomeOrderStatisticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleIncomeOrderStatisticQuery({
 *   variables: {
 *   },
 * });
 */
export function useSaleIncomeOrderStatisticQuery(baseOptions?: Apollo.QueryHookOptions<SaleIncomeOrderStatisticQuery, SaleIncomeOrderStatisticQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaleIncomeOrderStatisticQuery, SaleIncomeOrderStatisticQueryVariables>(SaleIncomeOrderStatisticDocument, options);
      }
export function useSaleIncomeOrderStatisticLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaleIncomeOrderStatisticQuery, SaleIncomeOrderStatisticQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaleIncomeOrderStatisticQuery, SaleIncomeOrderStatisticQueryVariables>(SaleIncomeOrderStatisticDocument, options);
        }
export type SaleIncomeOrderStatisticQueryHookResult = ReturnType<typeof useSaleIncomeOrderStatisticQuery>;
export type SaleIncomeOrderStatisticLazyQueryHookResult = ReturnType<typeof useSaleIncomeOrderStatisticLazyQuery>;
export type SaleIncomeOrderStatisticQueryResult = Apollo.QueryResult<SaleIncomeOrderStatisticQuery, SaleIncomeOrderStatisticQueryVariables>;
export const SaleIncomeOrderStatusStatisticDocument = gql`
    query saleIncomeOrderStatusStatistic($saleIncomeOrderStatusStatisticInput: SaleIncomeOrderStatusStatisticInput) {
  saleIncomeOrderStatusStatistic(
    saleIncomeOrderStatusStatisticInput: $saleIncomeOrderStatusStatisticInput
  ) {
    waitSubmit
    financialReject
    unBusinessAudit
    unBackOfficeAudit
    unFinancialAudit
    finished
    businessReject
  }
}
    `;

/**
 * __useSaleIncomeOrderStatusStatisticQuery__
 *
 * To run a query within a React component, call `useSaleIncomeOrderStatusStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleIncomeOrderStatusStatisticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleIncomeOrderStatusStatisticQuery({
 *   variables: {
 *      saleIncomeOrderStatusStatisticInput: // value for 'saleIncomeOrderStatusStatisticInput'
 *   },
 * });
 */
export function useSaleIncomeOrderStatusStatisticQuery(baseOptions?: Apollo.QueryHookOptions<SaleIncomeOrderStatusStatisticQuery, SaleIncomeOrderStatusStatisticQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaleIncomeOrderStatusStatisticQuery, SaleIncomeOrderStatusStatisticQueryVariables>(SaleIncomeOrderStatusStatisticDocument, options);
      }
export function useSaleIncomeOrderStatusStatisticLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaleIncomeOrderStatusStatisticQuery, SaleIncomeOrderStatusStatisticQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaleIncomeOrderStatusStatisticQuery, SaleIncomeOrderStatusStatisticQueryVariables>(SaleIncomeOrderStatusStatisticDocument, options);
        }
export type SaleIncomeOrderStatusStatisticQueryHookResult = ReturnType<typeof useSaleIncomeOrderStatusStatisticQuery>;
export type SaleIncomeOrderStatusStatisticLazyQueryHookResult = ReturnType<typeof useSaleIncomeOrderStatusStatisticLazyQuery>;
export type SaleIncomeOrderStatusStatisticQueryResult = Apollo.QueryResult<SaleIncomeOrderStatusStatisticQuery, SaleIncomeOrderStatusStatisticQueryVariables>;
export const SubmitSaleIncomeOrderDocument = gql`
    mutation submitSaleIncomeOrder($submitSaleIncomeOrderInput: SubmitSaleIncomeOrderInput) {
  submitSaleIncomeOrder(submitSaleIncomeOrderInput: $submitSaleIncomeOrderInput)
}
    `;
export type SubmitSaleIncomeOrderMutationFn = Apollo.MutationFunction<SubmitSaleIncomeOrderMutation, SubmitSaleIncomeOrderMutationVariables>;

/**
 * __useSubmitSaleIncomeOrderMutation__
 *
 * To run a mutation, you first call `useSubmitSaleIncomeOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitSaleIncomeOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitSaleIncomeOrderMutation, { data, loading, error }] = useSubmitSaleIncomeOrderMutation({
 *   variables: {
 *      submitSaleIncomeOrderInput: // value for 'submitSaleIncomeOrderInput'
 *   },
 * });
 */
export function useSubmitSaleIncomeOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitSaleIncomeOrderMutation, SubmitSaleIncomeOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitSaleIncomeOrderMutation, SubmitSaleIncomeOrderMutationVariables>(SubmitSaleIncomeOrderDocument, options);
      }
export type SubmitSaleIncomeOrderMutationHookResult = ReturnType<typeof useSubmitSaleIncomeOrderMutation>;
export type SubmitSaleIncomeOrderMutationResult = Apollo.MutationResult<SubmitSaleIncomeOrderMutation>;
export type SubmitSaleIncomeOrderMutationOptions = Apollo.BaseMutationOptions<SubmitSaleIncomeOrderMutation, SubmitSaleIncomeOrderMutationVariables>;
export const AuditSaleIncomeOrderDocument = gql`
    mutation auditSaleIncomeOrder($auditSaleIncomeOrderInput: AuditSaleIncomeOrderInput) {
  auditSaleIncomeOrder(auditSaleIncomeOrderInput: $auditSaleIncomeOrderInput)
}
    `;
export type AuditSaleIncomeOrderMutationFn = Apollo.MutationFunction<AuditSaleIncomeOrderMutation, AuditSaleIncomeOrderMutationVariables>;

/**
 * __useAuditSaleIncomeOrderMutation__
 *
 * To run a mutation, you first call `useAuditSaleIncomeOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuditSaleIncomeOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [auditSaleIncomeOrderMutation, { data, loading, error }] = useAuditSaleIncomeOrderMutation({
 *   variables: {
 *      auditSaleIncomeOrderInput: // value for 'auditSaleIncomeOrderInput'
 *   },
 * });
 */
export function useAuditSaleIncomeOrderMutation(baseOptions?: Apollo.MutationHookOptions<AuditSaleIncomeOrderMutation, AuditSaleIncomeOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuditSaleIncomeOrderMutation, AuditSaleIncomeOrderMutationVariables>(AuditSaleIncomeOrderDocument, options);
      }
export type AuditSaleIncomeOrderMutationHookResult = ReturnType<typeof useAuditSaleIncomeOrderMutation>;
export type AuditSaleIncomeOrderMutationResult = Apollo.MutationResult<AuditSaleIncomeOrderMutation>;
export type AuditSaleIncomeOrderMutationOptions = Apollo.BaseMutationOptions<AuditSaleIncomeOrderMutation, AuditSaleIncomeOrderMutationVariables>;
export const RejectSaleIncomeOrderDocument = gql`
    mutation rejectSaleIncomeOrder($rejectSaleIncomeOrderInput: RejectSaleIncomeOrderInput) {
  rejectSaleIncomeOrder(rejectSaleIncomeOrderInput: $rejectSaleIncomeOrderInput)
}
    `;
export type RejectSaleIncomeOrderMutationFn = Apollo.MutationFunction<RejectSaleIncomeOrderMutation, RejectSaleIncomeOrderMutationVariables>;

/**
 * __useRejectSaleIncomeOrderMutation__
 *
 * To run a mutation, you first call `useRejectSaleIncomeOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectSaleIncomeOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectSaleIncomeOrderMutation, { data, loading, error }] = useRejectSaleIncomeOrderMutation({
 *   variables: {
 *      rejectSaleIncomeOrderInput: // value for 'rejectSaleIncomeOrderInput'
 *   },
 * });
 */
export function useRejectSaleIncomeOrderMutation(baseOptions?: Apollo.MutationHookOptions<RejectSaleIncomeOrderMutation, RejectSaleIncomeOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectSaleIncomeOrderMutation, RejectSaleIncomeOrderMutationVariables>(RejectSaleIncomeOrderDocument, options);
      }
export type RejectSaleIncomeOrderMutationHookResult = ReturnType<typeof useRejectSaleIncomeOrderMutation>;
export type RejectSaleIncomeOrderMutationResult = Apollo.MutationResult<RejectSaleIncomeOrderMutation>;
export type RejectSaleIncomeOrderMutationOptions = Apollo.BaseMutationOptions<RejectSaleIncomeOrderMutation, RejectSaleIncomeOrderMutationVariables>;
export const SubmitSaleIncomeOrderWebDocument = gql`
    mutation submitSaleIncomeOrderWeb($incomeId: ID) {
  submitSaleIncomeOrderWeb(incomeId: $incomeId)
}
    `;
export type SubmitSaleIncomeOrderWebMutationFn = Apollo.MutationFunction<SubmitSaleIncomeOrderWebMutation, SubmitSaleIncomeOrderWebMutationVariables>;

/**
 * __useSubmitSaleIncomeOrderWebMutation__
 *
 * To run a mutation, you first call `useSubmitSaleIncomeOrderWebMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitSaleIncomeOrderWebMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitSaleIncomeOrderWebMutation, { data, loading, error }] = useSubmitSaleIncomeOrderWebMutation({
 *   variables: {
 *      incomeId: // value for 'incomeId'
 *   },
 * });
 */
export function useSubmitSaleIncomeOrderWebMutation(baseOptions?: Apollo.MutationHookOptions<SubmitSaleIncomeOrderWebMutation, SubmitSaleIncomeOrderWebMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitSaleIncomeOrderWebMutation, SubmitSaleIncomeOrderWebMutationVariables>(SubmitSaleIncomeOrderWebDocument, options);
      }
export type SubmitSaleIncomeOrderWebMutationHookResult = ReturnType<typeof useSubmitSaleIncomeOrderWebMutation>;
export type SubmitSaleIncomeOrderWebMutationResult = Apollo.MutationResult<SubmitSaleIncomeOrderWebMutation>;
export type SubmitSaleIncomeOrderWebMutationOptions = Apollo.BaseMutationOptions<SubmitSaleIncomeOrderWebMutation, SubmitSaleIncomeOrderWebMutationVariables>;