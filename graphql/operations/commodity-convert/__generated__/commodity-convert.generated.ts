import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageCommodityConvertQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PageCommodityConvertInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageCommodityConvertQuery = { pageCommodityConvert?: { __typename?: 'PageCommodityConvertPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'CommodityConvertPayload', convertOrderId?: string, convertOrderCode?: string, convertType?: SchemaTypes.ConvertType, convertTypeName?: string, status?: SchemaTypes.ConvertOrderStatus, statusName?: string, belongType?: number, belongId?: number, belongName?: string, remark?: string, statusRemark?: string, createTime?: number, convertAfterCommodityType?: number, convertBeforeCommodityType?: number, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodities?: Array<{ __typename?: 'CommodityConvertItemPayload', itemId: string, batchId: string, stockUnitQuantity?: number, stockTotalQuantity?: number, batchCode: string, unitQuantity?: number, totalQuantity?: number, photos?: Array<string>, newBatchCode?: string, newBatchId?: string, commodityDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, convertToSku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, convertLogs?: Array<{ __typename?: 'ConvertOrderLogPadload', convertLogId?: string, convertOrderId?: string, typeText?: string, description?: string, createTime?: number, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type GetConvertDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ConvertOrderIdInput>;
}>;


export type GetConvertDetailQuery = { getConvertDetail?: { __typename?: 'CommodityConvertPayload', belongId?: number, belongName?: string, belongType?: number, convertAfterCommodityType?: number, convertBeforeCommodityType?: number, convertOrderCode?: string, convertOrderId?: string, convertType?: SchemaTypes.ConvertType, convertTypeName?: string, createTime?: number, remark?: string, status?: SchemaTypes.ConvertOrderStatus, statusName?: string, statusRemark?: string, commodities?: Array<{ __typename?: 'CommodityConvertItemPayload', batchCode: string, batchId: string, itemId: string, photos?: Array<string>, stockTotalQuantity?: number, stockUnitQuantity?: number, totalQuantity?: number, unitQuantity?: number, newBatchCode?: string, newBatchId?: string, commodityDetail?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, convertToSku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, convertLogs?: Array<{ __typename?: 'ConvertOrderLogPadload', convertLogId?: string, convertOrderId?: string, createTime?: number, description?: string, typeText?: string, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }>, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type PageAuditCommodityConvertQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageAuditCommodityConvertQuery = { pageAuditCommodityConvert?: { __typename?: 'PageCommodityConvertPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'CommodityConvertPayload', convertOrderId?: string, convertOrderCode?: string, convertType?: SchemaTypes.ConvertType, convertTypeName?: string, status?: SchemaTypes.ConvertOrderStatus, statusName?: string, belongType?: number, belongId?: number, belongName?: string, remark?: string, statusRemark?: string, createTime?: number, convertAfterCommodityType?: number, convertBeforeCommodityType?: number, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodities?: Array<{ __typename?: 'CommodityConvertItemPayload', itemId: string, batchId: string, stockUnitQuantity?: number, stockTotalQuantity?: number, batchCode: string, unitQuantity?: number, totalQuantity?: number, photos?: Array<string>, newBatchCode?: string, newBatchId?: string, commodityDetail?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, convertToSku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } } }>, convertLogs?: Array<{ __typename?: 'ConvertOrderLogPadload', convertLogId?: string, convertOrderId?: string, typeText?: string, description?: string, createTime?: number, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type GetStatusCountQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetStatusCountInput>;
}>;


export type GetStatusCountQuery = { getStatusCount?: number };

export type CreateConvertOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreateConvertInput>;
}>;


export type CreateConvertOrderMutation = { createConvertOrder?: { __typename?: 'CommandOrderResp', orderId: string } };

export type UpdateConvertOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.UpdateConvertInput>;
}>;


export type UpdateConvertOrderMutation = { updateConvertOrder?: { __typename?: 'CommandOrderResp', orderId: string } };

export type SubmitOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CommondOrderStatusInput>;
}>;


export type SubmitOrderMutation = { submitOrder?: boolean };

export type CancelConvertOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CommondOrderStatusInput>;
}>;


export type CancelConvertOrderMutation = { cancelConvertOrder?: boolean };

export type AuditOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CommondOrderStatusInput>;
}>;


export type AuditOrderMutation = { auditOrder?: boolean };

export type RejectOrderMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CommondOrderStatusInput>;
}>;


export type RejectOrderMutation = { rejectOrder?: boolean };

export type DefectiveSkuOptionQueryVariables = SchemaTypes.Exact<{
  defectiveSkuOptionInput?: SchemaTypes.InputMaybe<SchemaTypes.DefectiveSkuOptionInput>;
}>;


export type DefectiveSkuOptionQuery = { defectiveSkuOption?: Array<{ __typename?: 'Option', label?: string, value?: number }> };

export type ListConvertCommodityTypeQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListConvertCommodityType>;
}>;


export type ListConvertCommodityTypeQuery = { listConvertCommodityType?: Array<{ __typename?: 'ConvertCommodityType', commodityType?: number, commodityTypeName?: string, convertType?: SchemaTypes.ConvertType }> };


export const PageCommodityConvertDocument = gql`
    query pageCommodityConvert($input: PageCommodityConvertInput, $page: Page) {
  pageCommodityConvert(input: $input, page: $page) {
    records {
      convertOrderId
      convertOrderCode
      convertType
      convertTypeName
      status
      statusName
      belongType
      belongId
      belongName
      org {
        orgId
        orgName
      }
      warehouse {
        warehouseId
        warehouseName
      }
      remark
      statusRemark
      createBy {
        userId
        userName
        phoneNum
      }
      createTime
      commodities {
        itemId
        batchId
        stockUnitQuantity
        stockTotalQuantity
        batchCode
        commodityDetail {
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
          categoryId
          categoryName
        }
        unitType {
          unitId
          unitName
        }
        totalType {
          unitId
          unitName
        }
        priceType {
          unitId
          unitName
        }
        unitQuantity
        totalQuantity
        photos
        convertToSku {
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
        newBatchCode
        newBatchId
      }
      convertLogs {
        convertLogId
        convertOrderId
        typeText
        description
        createBy {
          userId
          userName
          phoneNum
        }
        createTime
      }
      convertAfterCommodityType
      convertBeforeCommodityType
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
 * __usePageCommodityConvertQuery__
 *
 * To run a query within a React component, call `usePageCommodityConvertQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageCommodityConvertQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageCommodityConvertQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageCommodityConvertQuery(baseOptions?: Apollo.QueryHookOptions<PageCommodityConvertQuery, PageCommodityConvertQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageCommodityConvertQuery, PageCommodityConvertQueryVariables>(PageCommodityConvertDocument, options);
      }
export function usePageCommodityConvertLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageCommodityConvertQuery, PageCommodityConvertQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageCommodityConvertQuery, PageCommodityConvertQueryVariables>(PageCommodityConvertDocument, options);
        }
export type PageCommodityConvertQueryHookResult = ReturnType<typeof usePageCommodityConvertQuery>;
export type PageCommodityConvertLazyQueryHookResult = ReturnType<typeof usePageCommodityConvertLazyQuery>;
export type PageCommodityConvertQueryResult = Apollo.QueryResult<PageCommodityConvertQuery, PageCommodityConvertQueryVariables>;
export const GetConvertDetailDocument = gql`
    query getConvertDetail($input: ConvertOrderIdInput) {
  getConvertDetail(input: $input) {
    belongId
    belongName
    belongType
    commodities {
      batchCode
      batchId
      commodityDetail {
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
      convertToSku {
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
      itemId
      photos
      priceType {
        unitId
        unitName
      }
      stockTotalQuantity
      stockUnitQuantity
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
      newBatchCode
      newBatchId
    }
    convertAfterCommodityType
    convertBeforeCommodityType
    convertLogs {
      convertLogId
      convertOrderId
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      description
      typeText
    }
    convertOrderCode
    convertOrderId
    convertType
    convertTypeName
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    org {
      orgId
      orgName
    }
    remark
    status
    statusName
    statusRemark
    warehouse {
      warehouseId
      warehouseName
    }
    belongOrg {
      orgId
      orgName
    }
  }
}
    `;

/**
 * __useGetConvertDetailQuery__
 *
 * To run a query within a React component, call `useGetConvertDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConvertDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConvertDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetConvertDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetConvertDetailQuery, GetConvertDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConvertDetailQuery, GetConvertDetailQueryVariables>(GetConvertDetailDocument, options);
      }
export function useGetConvertDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConvertDetailQuery, GetConvertDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConvertDetailQuery, GetConvertDetailQueryVariables>(GetConvertDetailDocument, options);
        }
export type GetConvertDetailQueryHookResult = ReturnType<typeof useGetConvertDetailQuery>;
export type GetConvertDetailLazyQueryHookResult = ReturnType<typeof useGetConvertDetailLazyQuery>;
export type GetConvertDetailQueryResult = Apollo.QueryResult<GetConvertDetailQuery, GetConvertDetailQueryVariables>;
export const PageAuditCommodityConvertDocument = gql`
    query pageAuditCommodityConvert($page: Page) {
  pageAuditCommodityConvert(page: $page) {
    records {
      convertOrderId
      convertOrderCode
      convertType
      convertTypeName
      status
      statusName
      belongType
      belongId
      belongName
      org {
        orgId
        orgName
      }
      warehouse {
        warehouseId
        warehouseName
      }
      remark
      statusRemark
      createBy {
        userId
        userName
        phoneNum
      }
      createTime
      commodities {
        itemId
        batchId
        stockUnitQuantity
        stockTotalQuantity
        batchCode
        commodityDetail {
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
          categoryId
          categoryName
        }
        unitType {
          unitId
          unitName
        }
        totalType {
          unitId
          unitName
        }
        priceType {
          unitId
          unitName
        }
        unitQuantity
        totalQuantity
        photos
        convertToSku {
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
        newBatchCode
        newBatchId
      }
      convertLogs {
        convertLogId
        convertOrderId
        typeText
        description
        createBy {
          userId
          userName
          phoneNum
        }
        createTime
      }
      convertAfterCommodityType
      convertBeforeCommodityType
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
 * __usePageAuditCommodityConvertQuery__
 *
 * To run a query within a React component, call `usePageAuditCommodityConvertQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageAuditCommodityConvertQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageAuditCommodityConvertQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageAuditCommodityConvertQuery(baseOptions?: Apollo.QueryHookOptions<PageAuditCommodityConvertQuery, PageAuditCommodityConvertQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageAuditCommodityConvertQuery, PageAuditCommodityConvertQueryVariables>(PageAuditCommodityConvertDocument, options);
      }
export function usePageAuditCommodityConvertLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageAuditCommodityConvertQuery, PageAuditCommodityConvertQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageAuditCommodityConvertQuery, PageAuditCommodityConvertQueryVariables>(PageAuditCommodityConvertDocument, options);
        }
export type PageAuditCommodityConvertQueryHookResult = ReturnType<typeof usePageAuditCommodityConvertQuery>;
export type PageAuditCommodityConvertLazyQueryHookResult = ReturnType<typeof usePageAuditCommodityConvertLazyQuery>;
export type PageAuditCommodityConvertQueryResult = Apollo.QueryResult<PageAuditCommodityConvertQuery, PageAuditCommodityConvertQueryVariables>;
export const GetStatusCountDocument = gql`
    query getStatusCount($input: GetStatusCountInput) {
  getStatusCount(input: $input)
}
    `;

/**
 * __useGetStatusCountQuery__
 *
 * To run a query within a React component, call `useGetStatusCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatusCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatusCountQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetStatusCountQuery(baseOptions?: Apollo.QueryHookOptions<GetStatusCountQuery, GetStatusCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatusCountQuery, GetStatusCountQueryVariables>(GetStatusCountDocument, options);
      }
export function useGetStatusCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatusCountQuery, GetStatusCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatusCountQuery, GetStatusCountQueryVariables>(GetStatusCountDocument, options);
        }
export type GetStatusCountQueryHookResult = ReturnType<typeof useGetStatusCountQuery>;
export type GetStatusCountLazyQueryHookResult = ReturnType<typeof useGetStatusCountLazyQuery>;
export type GetStatusCountQueryResult = Apollo.QueryResult<GetStatusCountQuery, GetStatusCountQueryVariables>;
export const CreateConvertOrderDocument = gql`
    mutation createConvertOrder($input: CreateConvertInput) {
  createConvertOrder(input: $input) {
    orderId
  }
}
    `;
export type CreateConvertOrderMutationFn = Apollo.MutationFunction<CreateConvertOrderMutation, CreateConvertOrderMutationVariables>;

/**
 * __useCreateConvertOrderMutation__
 *
 * To run a mutation, you first call `useCreateConvertOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConvertOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConvertOrderMutation, { data, loading, error }] = useCreateConvertOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConvertOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateConvertOrderMutation, CreateConvertOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConvertOrderMutation, CreateConvertOrderMutationVariables>(CreateConvertOrderDocument, options);
      }
export type CreateConvertOrderMutationHookResult = ReturnType<typeof useCreateConvertOrderMutation>;
export type CreateConvertOrderMutationResult = Apollo.MutationResult<CreateConvertOrderMutation>;
export type CreateConvertOrderMutationOptions = Apollo.BaseMutationOptions<CreateConvertOrderMutation, CreateConvertOrderMutationVariables>;
export const UpdateConvertOrderDocument = gql`
    mutation updateConvertOrder($input: UpdateConvertInput) {
  updateConvertOrder(input: $input) {
    orderId
  }
}
    `;
export type UpdateConvertOrderMutationFn = Apollo.MutationFunction<UpdateConvertOrderMutation, UpdateConvertOrderMutationVariables>;

/**
 * __useUpdateConvertOrderMutation__
 *
 * To run a mutation, you first call `useUpdateConvertOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConvertOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConvertOrderMutation, { data, loading, error }] = useUpdateConvertOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConvertOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConvertOrderMutation, UpdateConvertOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConvertOrderMutation, UpdateConvertOrderMutationVariables>(UpdateConvertOrderDocument, options);
      }
export type UpdateConvertOrderMutationHookResult = ReturnType<typeof useUpdateConvertOrderMutation>;
export type UpdateConvertOrderMutationResult = Apollo.MutationResult<UpdateConvertOrderMutation>;
export type UpdateConvertOrderMutationOptions = Apollo.BaseMutationOptions<UpdateConvertOrderMutation, UpdateConvertOrderMutationVariables>;
export const SubmitOrderDocument = gql`
    mutation submitOrder($input: CommondOrderStatusInput) {
  submitOrder(input: $input)
}
    `;
export type SubmitOrderMutationFn = Apollo.MutationFunction<SubmitOrderMutation, SubmitOrderMutationVariables>;

/**
 * __useSubmitOrderMutation__
 *
 * To run a mutation, you first call `useSubmitOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitOrderMutation, { data, loading, error }] = useSubmitOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitOrderMutation, SubmitOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitOrderMutation, SubmitOrderMutationVariables>(SubmitOrderDocument, options);
      }
export type SubmitOrderMutationHookResult = ReturnType<typeof useSubmitOrderMutation>;
export type SubmitOrderMutationResult = Apollo.MutationResult<SubmitOrderMutation>;
export type SubmitOrderMutationOptions = Apollo.BaseMutationOptions<SubmitOrderMutation, SubmitOrderMutationVariables>;
export const CancelConvertOrderDocument = gql`
    mutation cancelConvertOrder($input: CommondOrderStatusInput) {
  cancelConvertOrder(input: $input)
}
    `;
export type CancelConvertOrderMutationFn = Apollo.MutationFunction<CancelConvertOrderMutation, CancelConvertOrderMutationVariables>;

/**
 * __useCancelConvertOrderMutation__
 *
 * To run a mutation, you first call `useCancelConvertOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelConvertOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelConvertOrderMutation, { data, loading, error }] = useCancelConvertOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelConvertOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelConvertOrderMutation, CancelConvertOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelConvertOrderMutation, CancelConvertOrderMutationVariables>(CancelConvertOrderDocument, options);
      }
export type CancelConvertOrderMutationHookResult = ReturnType<typeof useCancelConvertOrderMutation>;
export type CancelConvertOrderMutationResult = Apollo.MutationResult<CancelConvertOrderMutation>;
export type CancelConvertOrderMutationOptions = Apollo.BaseMutationOptions<CancelConvertOrderMutation, CancelConvertOrderMutationVariables>;
export const AuditOrderDocument = gql`
    mutation auditOrder($input: CommondOrderStatusInput) {
  auditOrder(input: $input)
}
    `;
export type AuditOrderMutationFn = Apollo.MutationFunction<AuditOrderMutation, AuditOrderMutationVariables>;

/**
 * __useAuditOrderMutation__
 *
 * To run a mutation, you first call `useAuditOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuditOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [auditOrderMutation, { data, loading, error }] = useAuditOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuditOrderMutation(baseOptions?: Apollo.MutationHookOptions<AuditOrderMutation, AuditOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuditOrderMutation, AuditOrderMutationVariables>(AuditOrderDocument, options);
      }
export type AuditOrderMutationHookResult = ReturnType<typeof useAuditOrderMutation>;
export type AuditOrderMutationResult = Apollo.MutationResult<AuditOrderMutation>;
export type AuditOrderMutationOptions = Apollo.BaseMutationOptions<AuditOrderMutation, AuditOrderMutationVariables>;
export const RejectOrderDocument = gql`
    mutation rejectOrder($input: CommondOrderStatusInput) {
  rejectOrder(input: $input)
}
    `;
export type RejectOrderMutationFn = Apollo.MutationFunction<RejectOrderMutation, RejectOrderMutationVariables>;

/**
 * __useRejectOrderMutation__
 *
 * To run a mutation, you first call `useRejectOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectOrderMutation, { data, loading, error }] = useRejectOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRejectOrderMutation(baseOptions?: Apollo.MutationHookOptions<RejectOrderMutation, RejectOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectOrderMutation, RejectOrderMutationVariables>(RejectOrderDocument, options);
      }
export type RejectOrderMutationHookResult = ReturnType<typeof useRejectOrderMutation>;
export type RejectOrderMutationResult = Apollo.MutationResult<RejectOrderMutation>;
export type RejectOrderMutationOptions = Apollo.BaseMutationOptions<RejectOrderMutation, RejectOrderMutationVariables>;
export const DefectiveSkuOptionDocument = gql`
    query defectiveSkuOption($defectiveSkuOptionInput: DefectiveSkuOptionInput) {
  defectiveSkuOption(defectiveSkuOptionInput: $defectiveSkuOptionInput) {
    label
    value
  }
}
    `;

/**
 * __useDefectiveSkuOptionQuery__
 *
 * To run a query within a React component, call `useDefectiveSkuOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useDefectiveSkuOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDefectiveSkuOptionQuery({
 *   variables: {
 *      defectiveSkuOptionInput: // value for 'defectiveSkuOptionInput'
 *   },
 * });
 */
export function useDefectiveSkuOptionQuery(baseOptions?: Apollo.QueryHookOptions<DefectiveSkuOptionQuery, DefectiveSkuOptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DefectiveSkuOptionQuery, DefectiveSkuOptionQueryVariables>(DefectiveSkuOptionDocument, options);
      }
export function useDefectiveSkuOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DefectiveSkuOptionQuery, DefectiveSkuOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DefectiveSkuOptionQuery, DefectiveSkuOptionQueryVariables>(DefectiveSkuOptionDocument, options);
        }
export type DefectiveSkuOptionQueryHookResult = ReturnType<typeof useDefectiveSkuOptionQuery>;
export type DefectiveSkuOptionLazyQueryHookResult = ReturnType<typeof useDefectiveSkuOptionLazyQuery>;
export type DefectiveSkuOptionQueryResult = Apollo.QueryResult<DefectiveSkuOptionQuery, DefectiveSkuOptionQueryVariables>;
export const ListConvertCommodityTypeDocument = gql`
    query listConvertCommodityType($input: ListConvertCommodityType) {
  listConvertCommodityType(input: $input) {
    commodityType
    commodityTypeName
    convertType
  }
}
    `;

/**
 * __useListConvertCommodityTypeQuery__
 *
 * To run a query within a React component, call `useListConvertCommodityTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListConvertCommodityTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListConvertCommodityTypeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListConvertCommodityTypeQuery(baseOptions?: Apollo.QueryHookOptions<ListConvertCommodityTypeQuery, ListConvertCommodityTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListConvertCommodityTypeQuery, ListConvertCommodityTypeQueryVariables>(ListConvertCommodityTypeDocument, options);
      }
export function useListConvertCommodityTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListConvertCommodityTypeQuery, ListConvertCommodityTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListConvertCommodityTypeQuery, ListConvertCommodityTypeQueryVariables>(ListConvertCommodityTypeDocument, options);
        }
export type ListConvertCommodityTypeQueryHookResult = ReturnType<typeof useListConvertCommodityTypeQuery>;
export type ListConvertCommodityTypeLazyQueryHookResult = ReturnType<typeof useListConvertCommodityTypeLazyQuery>;
export type ListConvertCommodityTypeQueryResult = Apollo.QueryResult<ListConvertCommodityTypeQuery, ListConvertCommodityTypeQueryVariables>;