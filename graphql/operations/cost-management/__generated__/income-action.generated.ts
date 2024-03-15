import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CountIncomeStatementQueryVariables = SchemaTypes.Exact<{
  creatorPrivileges?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Boolean']>;
  incomeStatementTypeInput?: SchemaTypes.InputMaybe<SchemaTypes.IncomeStatementTypeInput>;
}>;


export type CountIncomeStatementQuery = { countIncomeStatement?: Array<{ __typename?: 'IncomeStatementTypeStatusStatisticPayload', incomeStatementType?: SchemaTypes.IncomeStatementEnum, statusNumberList?: Array<{ __typename?: 'StatusNumber', number?: number, status?: SchemaTypes.IncomeStatementStatusEnum }> }> };

export type DetailIncomeStatementQueryVariables = SchemaTypes.Exact<{
  detailIncomeStatementInput: SchemaTypes.DetailIncomeStatementInput;
}>;


export type DetailIncomeStatementQuery = { detailIncomeStatement?: { __typename?: 'DetailIncomeStatementPayload', commodities?: Array<{ __typename?: 'DetailIncomeStatementCommodityPayload', billMainId?: string, commoditySkuAmount?: number, commodityType?: number, commodityTypeDesc?: string, saleOrderId?: string, markDescList?: Array<string>, markList?: Array<SchemaTypes.ApplyMarkEnum>, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, fileInfoList?: Array<{ __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number }>, commodityBatchCodeList?: Array<{ __typename?: 'CommodityBatchCodeInfo', batchCode?: string, batchId?: string, index?: string, itemId?: string, salesAmount?: number, salesQuantityAndPrice?: { __typename?: 'QuantityAndPriceAndTypeInfo', price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, salesAllQuantityAndPrice?: { __typename?: 'QuantityAndPriceAndTypeInfo', price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, incomeStatementMainInfo?: { __typename?: 'IncomeStatementMainInfo', billMainId?: string, createTime?: number, incomeStatementOrderCode?: string, incomeStatementStatus?: SchemaTypes.PitayaBillStatusEnum, incomeStatementStatusDesc?: string, incomeStatementType?: SchemaTypes.BillMainTypeEnum, incomeStatementTypeDesc?: string, remark?: string, note?: string, templateId?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }, saleOrderInfo?: { __typename?: 'SaleOrderInfo', code?: string, deliveryType?: number, deliveryTypeDesc?: string, id?: string, prePayType?: Array<number>, prePayTypeDesc?: Array<string>, salesDate?: number, warehouseId?: string, note?: string } }, incomeStatementOperationLogPayload?: Array<{ __typename?: 'BillOperationLogPayload', createTime?: number, endStatus?: SchemaTypes.PitayaBillStatusEnum, endStatusDesc?: string, note?: string, startStatus?: SchemaTypes.PitayaBillStatusEnum, startStatusDesc?: string, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }> } };

export type PageIncomeStatementQueryVariables = SchemaTypes.Exact<{
  page: SchemaTypes.Page;
  pageIncomeStatementInput: SchemaTypes.PageIncomeStatementInput;
}>;


export type PageIncomeStatementQuery = { pageIncomeStatement?: { __typename?: 'PageIncomeStatementPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PageIncomeStatement', commoditiesByGroup?: Array<{ __typename?: 'DetailIncomeStatementCommodityPayload', billMainId?: string, commoditySkuAmount?: number, commodityType?: number, commodityTypeDesc?: string, saleOrderId?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, fileInfoList?: Array<{ __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number }>, commodityBatchCodeList?: Array<{ __typename?: 'CommodityBatchCodeInfo', batchCode?: string, batchId?: string, index?: string, itemId?: string, salesAmount?: number, salesQuantityAndPrice?: { __typename?: 'QuantityAndPriceAndTypeInfo', price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, salesAllQuantityAndPrice?: { __typename?: 'QuantityAndPriceAndTypeInfo', price?: number, totalQuantity?: number, unitQuantity?: number, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, incomeStatementMainInfo?: { __typename?: 'IncomeStatementMainInfo', billMainId?: string, createTime?: number, incomeStatementOrderCode?: string, incomeStatementStatus?: SchemaTypes.PitayaBillStatusEnum, incomeStatementStatusDesc?: string, incomeStatementType?: SchemaTypes.BillMainTypeEnum, incomeStatementTypeDesc?: string, remark?: string, note?: string, templateId?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }, saleOrderInfo?: { __typename?: 'SaleOrderInfo', code?: string, deliveryType?: number, deliveryTypeDesc?: string, id?: string, prePayType?: Array<number>, prePayTypeDesc?: Array<string>, salesDate?: number, warehouseId?: string, note?: string } } }> } };

export type ReviewIncomeStatementBySalesmanMutationVariables = SchemaTypes.Exact<{
  changBill2StatusInput: SchemaTypes.ChangeBill2StatusInput;
}>;


export type ReviewIncomeStatementBySalesmanMutation = { reviewIncomeStatementBySalesman?: boolean };

export type SubmitIncomeStatementMutationVariables = SchemaTypes.Exact<{
  submitBillInput: SchemaTypes.SubmitBillInput;
}>;


export type SubmitIncomeStatementMutation = { submitIncomeStatement?: boolean };

export type UpdateIncomeStatementMutationVariables = SchemaTypes.Exact<{
  updateIncomeStatementInput: SchemaTypes.UpdateIncomeStatementInput;
}>;


export type UpdateIncomeStatementMutation = { updateIncomeStatement?: boolean };


export const CountIncomeStatementDocument = gql`
    query countIncomeStatement($creatorPrivileges: Boolean, $incomeStatementTypeInput: IncomeStatementTypeInput) {
  countIncomeStatement(
    creatorPrivileges: $creatorPrivileges
    incomeStatementTypeInput: $incomeStatementTypeInput
  ) {
    incomeStatementType
    statusNumberList {
      number
      status
    }
  }
}
    `;

/**
 * __useCountIncomeStatementQuery__
 *
 * To run a query within a React component, call `useCountIncomeStatementQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountIncomeStatementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountIncomeStatementQuery({
 *   variables: {
 *      creatorPrivileges: // value for 'creatorPrivileges'
 *      incomeStatementTypeInput: // value for 'incomeStatementTypeInput'
 *   },
 * });
 */
export function useCountIncomeStatementQuery(baseOptions?: Apollo.QueryHookOptions<CountIncomeStatementQuery, CountIncomeStatementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountIncomeStatementQuery, CountIncomeStatementQueryVariables>(CountIncomeStatementDocument, options);
      }
export function useCountIncomeStatementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountIncomeStatementQuery, CountIncomeStatementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountIncomeStatementQuery, CountIncomeStatementQueryVariables>(CountIncomeStatementDocument, options);
        }
export type CountIncomeStatementQueryHookResult = ReturnType<typeof useCountIncomeStatementQuery>;
export type CountIncomeStatementLazyQueryHookResult = ReturnType<typeof useCountIncomeStatementLazyQuery>;
export type CountIncomeStatementQueryResult = Apollo.QueryResult<CountIncomeStatementQuery, CountIncomeStatementQueryVariables>;
export const DetailIncomeStatementDocument = gql`
    query detailIncomeStatement($detailIncomeStatementInput: DetailIncomeStatementInput!) {
  detailIncomeStatement(detailIncomeStatementInput: $detailIncomeStatementInput) {
    commodities {
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
      billMainId
      commodityBatchCodeList {
        batchCode
        batchId
        index
        itemId
        salesAmount
        salesQuantityAndPrice {
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
      commoditySkuAmount
      commodityType
      commodityTypeDesc
      saleOrderId
      salesAllQuantityAndPrice {
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
      markDescList
      markList
    }
    incomeStatementMainInfo {
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
      billMainId
      createTime
      incomeStatementOrderCode
      incomeStatementStatus
      incomeStatementStatusDesc
      incomeStatementType
      incomeStatementTypeDesc
      remark
      note
      saleOrderInfo {
        code
        deliveryType
        deliveryTypeDesc
        id
        prePayType
        prePayTypeDesc
        salesDate
        warehouseId
        note
      }
      templateId
      note
    }
    incomeStatementOperationLogPayload {
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
  }
}
    `;

/**
 * __useDetailIncomeStatementQuery__
 *
 * To run a query within a React component, call `useDetailIncomeStatementQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailIncomeStatementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailIncomeStatementQuery({
 *   variables: {
 *      detailIncomeStatementInput: // value for 'detailIncomeStatementInput'
 *   },
 * });
 */
export function useDetailIncomeStatementQuery(baseOptions: Apollo.QueryHookOptions<DetailIncomeStatementQuery, DetailIncomeStatementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DetailIncomeStatementQuery, DetailIncomeStatementQueryVariables>(DetailIncomeStatementDocument, options);
      }
export function useDetailIncomeStatementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DetailIncomeStatementQuery, DetailIncomeStatementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DetailIncomeStatementQuery, DetailIncomeStatementQueryVariables>(DetailIncomeStatementDocument, options);
        }
export type DetailIncomeStatementQueryHookResult = ReturnType<typeof useDetailIncomeStatementQuery>;
export type DetailIncomeStatementLazyQueryHookResult = ReturnType<typeof useDetailIncomeStatementLazyQuery>;
export type DetailIncomeStatementQueryResult = Apollo.QueryResult<DetailIncomeStatementQuery, DetailIncomeStatementQueryVariables>;
export const PageIncomeStatementDocument = gql`
    query pageIncomeStatement($page: Page!, $pageIncomeStatementInput: PageIncomeStatementInput!) {
  pageIncomeStatement(
    page: $page
    pageIncomeStatementInput: $pageIncomeStatementInput
  ) {
    pageCurrent
    pageSize
    records {
      commoditiesByGroup {
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
        billMainId
        commodityBatchCodeList {
          batchCode
          batchId
          index
          itemId
          salesAmount
          salesQuantityAndPrice {
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
        commoditySkuAmount
        commodityType
        commodityTypeDesc
        saleOrderId
        salesAllQuantityAndPrice {
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
      incomeStatementMainInfo {
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
        billMainId
        createTime
        incomeStatementOrderCode
        incomeStatementStatus
        incomeStatementStatusDesc
        incomeStatementType
        incomeStatementTypeDesc
        remark
        note
        saleOrderInfo {
          code
          deliveryType
          deliveryTypeDesc
          id
          prePayType
          prePayTypeDesc
          salesDate
          warehouseId
          note
        }
        templateId
      }
    }
    totalRecords
  }
}
    `;

/**
 * __usePageIncomeStatementQuery__
 *
 * To run a query within a React component, call `usePageIncomeStatementQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageIncomeStatementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageIncomeStatementQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageIncomeStatementInput: // value for 'pageIncomeStatementInput'
 *   },
 * });
 */
export function usePageIncomeStatementQuery(baseOptions: Apollo.QueryHookOptions<PageIncomeStatementQuery, PageIncomeStatementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageIncomeStatementQuery, PageIncomeStatementQueryVariables>(PageIncomeStatementDocument, options);
      }
export function usePageIncomeStatementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageIncomeStatementQuery, PageIncomeStatementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageIncomeStatementQuery, PageIncomeStatementQueryVariables>(PageIncomeStatementDocument, options);
        }
export type PageIncomeStatementQueryHookResult = ReturnType<typeof usePageIncomeStatementQuery>;
export type PageIncomeStatementLazyQueryHookResult = ReturnType<typeof usePageIncomeStatementLazyQuery>;
export type PageIncomeStatementQueryResult = Apollo.QueryResult<PageIncomeStatementQuery, PageIncomeStatementQueryVariables>;
export const ReviewIncomeStatementBySalesmanDocument = gql`
    mutation reviewIncomeStatementBySalesman($changBill2StatusInput: ChangeBill2StatusInput!) {
  reviewIncomeStatementBySalesman(changBill2StatusInput: $changBill2StatusInput)
}
    `;
export type ReviewIncomeStatementBySalesmanMutationFn = Apollo.MutationFunction<ReviewIncomeStatementBySalesmanMutation, ReviewIncomeStatementBySalesmanMutationVariables>;

/**
 * __useReviewIncomeStatementBySalesmanMutation__
 *
 * To run a mutation, you first call `useReviewIncomeStatementBySalesmanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReviewIncomeStatementBySalesmanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reviewIncomeStatementBySalesmanMutation, { data, loading, error }] = useReviewIncomeStatementBySalesmanMutation({
 *   variables: {
 *      changBill2StatusInput: // value for 'changBill2StatusInput'
 *   },
 * });
 */
export function useReviewIncomeStatementBySalesmanMutation(baseOptions?: Apollo.MutationHookOptions<ReviewIncomeStatementBySalesmanMutation, ReviewIncomeStatementBySalesmanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReviewIncomeStatementBySalesmanMutation, ReviewIncomeStatementBySalesmanMutationVariables>(ReviewIncomeStatementBySalesmanDocument, options);
      }
export type ReviewIncomeStatementBySalesmanMutationHookResult = ReturnType<typeof useReviewIncomeStatementBySalesmanMutation>;
export type ReviewIncomeStatementBySalesmanMutationResult = Apollo.MutationResult<ReviewIncomeStatementBySalesmanMutation>;
export type ReviewIncomeStatementBySalesmanMutationOptions = Apollo.BaseMutationOptions<ReviewIncomeStatementBySalesmanMutation, ReviewIncomeStatementBySalesmanMutationVariables>;
export const SubmitIncomeStatementDocument = gql`
    mutation submitIncomeStatement($submitBillInput: SubmitBillInput!) {
  submitIncomeStatement(submitBillInput: $submitBillInput)
}
    `;
export type SubmitIncomeStatementMutationFn = Apollo.MutationFunction<SubmitIncomeStatementMutation, SubmitIncomeStatementMutationVariables>;

/**
 * __useSubmitIncomeStatementMutation__
 *
 * To run a mutation, you first call `useSubmitIncomeStatementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitIncomeStatementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitIncomeStatementMutation, { data, loading, error }] = useSubmitIncomeStatementMutation({
 *   variables: {
 *      submitBillInput: // value for 'submitBillInput'
 *   },
 * });
 */
export function useSubmitIncomeStatementMutation(baseOptions?: Apollo.MutationHookOptions<SubmitIncomeStatementMutation, SubmitIncomeStatementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitIncomeStatementMutation, SubmitIncomeStatementMutationVariables>(SubmitIncomeStatementDocument, options);
      }
export type SubmitIncomeStatementMutationHookResult = ReturnType<typeof useSubmitIncomeStatementMutation>;
export type SubmitIncomeStatementMutationResult = Apollo.MutationResult<SubmitIncomeStatementMutation>;
export type SubmitIncomeStatementMutationOptions = Apollo.BaseMutationOptions<SubmitIncomeStatementMutation, SubmitIncomeStatementMutationVariables>;
export const UpdateIncomeStatementDocument = gql`
    mutation updateIncomeStatement($updateIncomeStatementInput: UpdateIncomeStatementInput!) {
  updateIncomeStatement(updateIncomeStatementInput: $updateIncomeStatementInput)
}
    `;
export type UpdateIncomeStatementMutationFn = Apollo.MutationFunction<UpdateIncomeStatementMutation, UpdateIncomeStatementMutationVariables>;

/**
 * __useUpdateIncomeStatementMutation__
 *
 * To run a mutation, you first call `useUpdateIncomeStatementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIncomeStatementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIncomeStatementMutation, { data, loading, error }] = useUpdateIncomeStatementMutation({
 *   variables: {
 *      updateIncomeStatementInput: // value for 'updateIncomeStatementInput'
 *   },
 * });
 */
export function useUpdateIncomeStatementMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIncomeStatementMutation, UpdateIncomeStatementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIncomeStatementMutation, UpdateIncomeStatementMutationVariables>(UpdateIncomeStatementDocument, options);
      }
export type UpdateIncomeStatementMutationHookResult = ReturnType<typeof useUpdateIncomeStatementMutation>;
export type UpdateIncomeStatementMutationResult = Apollo.MutationResult<UpdateIncomeStatementMutation>;
export type UpdateIncomeStatementMutationOptions = Apollo.BaseMutationOptions<UpdateIncomeStatementMutation, UpdateIncomeStatementMutationVariables>;