import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuditSecondmentCountQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type AuditSecondmentCountQuery = { auditSecondmentCount?: number };

export type GetSecondmentLogsQueryVariables = SchemaTypes.Exact<{
  secondmentId: SchemaTypes.Scalars['ID'];
}>;


export type GetSecondmentLogsQuery = { getSecondmentLogs?: Array<{ __typename?: 'SecondmentLogPayload', createBy?: number, createTime?: number, createUserName?: string, secondmentId?: string, secondmentLogDescription?: string, secondmentLogId?: string, secondmentLogType?: number, secondmentLogTypeText?: string }> };

export type PageUserSecondmentQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  secondmentPageInput: SchemaTypes.SecondmentPageInput;
}>;


export type PageUserSecondmentQuery = { pageUserSecondment?: { __typename?: 'SecondmentQueryPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'SecondmentPayload', commodityTypeId?: number, commodityTypeName?: string, createTime?: number, description?: string, inBelongId?: number, inBelongName?: string, inBelongType?: number, outBelongId?: number, outBelongName?: string, outBelongType?: number, remark?: string, secondmentCode?: string, secondmentId?: string, secondmentStatus?: number, secondmentStatusName?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, secondmentOrderItemList?: Array<{ __typename?: 'SecondmentItemPayload', secondmentId?: string, secondmentItemId?: string, totalQuantity?: number, transferPrice?: number, transferTotalQuantity?: number, transferUnitQuantity?: number, unitPrice?: number, unitQuantity?: number, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> } };

export type SecondmentDetailQueryVariables = SchemaTypes.Exact<{
  secondmentId: SchemaTypes.Scalars['ID'];
}>;


export type SecondmentDetailQuery = { secondmentDetail?: { __typename?: 'SecondmentPayload', commodityTypeId?: number, commodityTypeName?: string, description?: string, inBelongId?: number, inBelongName?: string, inBelongType?: number, outBelongId?: number, outBelongName?: string, outBelongType?: number, remark?: string, secondmentCode?: string, secondmentId?: string, secondmentStatus?: number, createTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, secondmentOrderItemList?: Array<{ __typename?: 'SecondmentItemPayload', secondmentId?: string, secondmentItemId?: string, totalQuantity?: number, transferPrice?: number, transferTotalQuantity?: number, transferUnitQuantity?: number, unitPrice?: number, unitQuantity?: number, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } } };

export type SecondmentStocksQueryVariables = SchemaTypes.Exact<{
  secondmentCondition?: SchemaTypes.InputMaybe<SchemaTypes.SecondmentConditionInput>;
}>;


export type SecondmentStocksQuery = { secondmentStocks?: Array<{ __typename?: 'SecondmentStockPayload', batchCode?: string, batchId?: string, belongId?: number, belongName?: string, belongType?: number, totalQuantity?: number, unitPrice?: number, unitQuantity?: number, inStockTime?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> };

export type ChangeSecondmentStatusMutationVariables = SchemaTypes.Exact<{
  secondmentStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.SecondmentStatusInput>;
}>;


export type ChangeSecondmentStatusMutation = { changeSecondmentStatus?: string };

export type InsertSecondmentMutationVariables = SchemaTypes.Exact<{
  secondmentInput?: SchemaTypes.InputMaybe<SchemaTypes.SecondmentInput>;
}>;


export type InsertSecondmentMutation = { insertSecondment?: string };

export type UpdateSecondmentMutationVariables = SchemaTypes.Exact<{
  secondmentInput?: SchemaTypes.InputMaybe<SchemaTypes.SecondmentInput>;
}>;


export type UpdateSecondmentMutation = { updateSecondment?: string };

export type PageOrgSecondmentQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  secondmentPageInput?: SchemaTypes.InputMaybe<SchemaTypes.SecondmentPageInput>;
}>;


export type PageOrgSecondmentQuery = { pageOrgSecondment?: { __typename?: 'SecondmentQueryPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'SecondmentPayload', commodityTypeId?: number, commodityTypeName?: string, createTime?: number, description?: string, inBelongId?: number, inBelongName?: string, inBelongType?: number, outBelongId?: number, outBelongName?: string, outBelongType?: number, remark?: string, secondmentCode?: string, secondmentId?: string, secondmentStatus?: number, secondmentStatusName?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, secondmentOrderItemList?: Array<{ __typename?: 'SecondmentItemPayload', secondmentId?: string, secondmentItemId?: string, totalQuantity?: number, transferPrice?: number, transferTotalQuantity?: number, transferUnitQuantity?: number, unitPrice?: number, unitQuantity?: number, batch?: { __typename?: 'StockBatch', batchCode?: string, batchId?: string }, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }> } };


export const AuditSecondmentCountDocument = gql`
    query auditSecondmentCount {
  auditSecondmentCount
}
    `;

/**
 * __useAuditSecondmentCountQuery__
 *
 * To run a query within a React component, call `useAuditSecondmentCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuditSecondmentCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuditSecondmentCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuditSecondmentCountQuery(baseOptions?: Apollo.QueryHookOptions<AuditSecondmentCountQuery, AuditSecondmentCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuditSecondmentCountQuery, AuditSecondmentCountQueryVariables>(AuditSecondmentCountDocument, options);
      }
export function useAuditSecondmentCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuditSecondmentCountQuery, AuditSecondmentCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuditSecondmentCountQuery, AuditSecondmentCountQueryVariables>(AuditSecondmentCountDocument, options);
        }
export type AuditSecondmentCountQueryHookResult = ReturnType<typeof useAuditSecondmentCountQuery>;
export type AuditSecondmentCountLazyQueryHookResult = ReturnType<typeof useAuditSecondmentCountLazyQuery>;
export type AuditSecondmentCountQueryResult = Apollo.QueryResult<AuditSecondmentCountQuery, AuditSecondmentCountQueryVariables>;
export const GetSecondmentLogsDocument = gql`
    query getSecondmentLogs($secondmentId: ID!) {
  getSecondmentLogs(secondmentId: $secondmentId) {
    createBy
    createTime
    createUserName
    secondmentId
    secondmentLogDescription
    secondmentLogId
    secondmentLogType
    secondmentLogTypeText
  }
}
    `;

/**
 * __useGetSecondmentLogsQuery__
 *
 * To run a query within a React component, call `useGetSecondmentLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSecondmentLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSecondmentLogsQuery({
 *   variables: {
 *      secondmentId: // value for 'secondmentId'
 *   },
 * });
 */
export function useGetSecondmentLogsQuery(baseOptions: Apollo.QueryHookOptions<GetSecondmentLogsQuery, GetSecondmentLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSecondmentLogsQuery, GetSecondmentLogsQueryVariables>(GetSecondmentLogsDocument, options);
      }
export function useGetSecondmentLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSecondmentLogsQuery, GetSecondmentLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSecondmentLogsQuery, GetSecondmentLogsQueryVariables>(GetSecondmentLogsDocument, options);
        }
export type GetSecondmentLogsQueryHookResult = ReturnType<typeof useGetSecondmentLogsQuery>;
export type GetSecondmentLogsLazyQueryHookResult = ReturnType<typeof useGetSecondmentLogsLazyQuery>;
export type GetSecondmentLogsQueryResult = Apollo.QueryResult<GetSecondmentLogsQuery, GetSecondmentLogsQueryVariables>;
export const PageUserSecondmentDocument = gql`
    query pageUserSecondment($page: Page, $secondmentPageInput: SecondmentPageInput!) {
  pageUserSecondment(page: $page, secondmentPageInput: $secondmentPageInput) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      commodityTypeId
      commodityTypeName
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      description
      inBelongId
      inBelongName
      inBelongType
      outBelongId
      outBelongName
      outBelongType
      remark
      secondmentCode
      secondmentId
      secondmentOrderItemList {
        batch {
          batchCode
          batchId
        }
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
        priceType {
          unitId
          unitName
        }
        secondmentId
        secondmentItemId
        totalQuantity
        transferPrice
        transferTotalQuantity
        transferUnitQuantity
        unitPrice
        unitQuantity
      }
      secondmentStatus
      secondmentStatusName
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
 * __usePageUserSecondmentQuery__
 *
 * To run a query within a React component, call `usePageUserSecondmentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageUserSecondmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageUserSecondmentQuery({
 *   variables: {
 *      page: // value for 'page'
 *      secondmentPageInput: // value for 'secondmentPageInput'
 *   },
 * });
 */
export function usePageUserSecondmentQuery(baseOptions: Apollo.QueryHookOptions<PageUserSecondmentQuery, PageUserSecondmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageUserSecondmentQuery, PageUserSecondmentQueryVariables>(PageUserSecondmentDocument, options);
      }
export function usePageUserSecondmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageUserSecondmentQuery, PageUserSecondmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageUserSecondmentQuery, PageUserSecondmentQueryVariables>(PageUserSecondmentDocument, options);
        }
export type PageUserSecondmentQueryHookResult = ReturnType<typeof usePageUserSecondmentQuery>;
export type PageUserSecondmentLazyQueryHookResult = ReturnType<typeof usePageUserSecondmentLazyQuery>;
export type PageUserSecondmentQueryResult = Apollo.QueryResult<PageUserSecondmentQuery, PageUserSecondmentQueryVariables>;
export const SecondmentDetailDocument = gql`
    query secondmentDetail($secondmentId: ID!) {
  secondmentDetail(secondmentId: $secondmentId) {
    belongOrg {
      orgId
      orgName
    }
    commodityTypeId
    commodityTypeName
    description
    inBelongId
    inBelongName
    inBelongType
    outBelongId
    outBelongName
    outBelongType
    remark
    secondmentCode
    secondmentId
    secondmentOrderItemList {
      batch {
        batchCode
        batchId
      }
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
      priceType {
        unitId
        unitName
      }
      secondmentId
      secondmentItemId
      totalQuantity
      transferPrice
      transferTotalQuantity
      transferUnitQuantity
      unitPrice
      unitQuantity
    }
    secondmentStatus
    warehouse {
      warehouseId
      warehouseName
    }
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
  }
}
    `;

/**
 * __useSecondmentDetailQuery__
 *
 * To run a query within a React component, call `useSecondmentDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSecondmentDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSecondmentDetailQuery({
 *   variables: {
 *      secondmentId: // value for 'secondmentId'
 *   },
 * });
 */
export function useSecondmentDetailQuery(baseOptions: Apollo.QueryHookOptions<SecondmentDetailQuery, SecondmentDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SecondmentDetailQuery, SecondmentDetailQueryVariables>(SecondmentDetailDocument, options);
      }
export function useSecondmentDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SecondmentDetailQuery, SecondmentDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SecondmentDetailQuery, SecondmentDetailQueryVariables>(SecondmentDetailDocument, options);
        }
export type SecondmentDetailQueryHookResult = ReturnType<typeof useSecondmentDetailQuery>;
export type SecondmentDetailLazyQueryHookResult = ReturnType<typeof useSecondmentDetailLazyQuery>;
export type SecondmentDetailQueryResult = Apollo.QueryResult<SecondmentDetailQuery, SecondmentDetailQueryVariables>;
export const SecondmentStocksDocument = gql`
    query secondmentStocks($secondmentCondition: SecondmentConditionInput) {
  secondmentStocks(secondmentCondition: $secondmentCondition) {
    batchCode
    batchId
    belongId
    belongName
    belongType
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
    priceType {
      unitId
      unitName
    }
    totalQuantity
    unitPrice
    unitQuantity
    inStockTime
  }
}
    `;

/**
 * __useSecondmentStocksQuery__
 *
 * To run a query within a React component, call `useSecondmentStocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSecondmentStocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSecondmentStocksQuery({
 *   variables: {
 *      secondmentCondition: // value for 'secondmentCondition'
 *   },
 * });
 */
export function useSecondmentStocksQuery(baseOptions?: Apollo.QueryHookOptions<SecondmentStocksQuery, SecondmentStocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SecondmentStocksQuery, SecondmentStocksQueryVariables>(SecondmentStocksDocument, options);
      }
export function useSecondmentStocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SecondmentStocksQuery, SecondmentStocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SecondmentStocksQuery, SecondmentStocksQueryVariables>(SecondmentStocksDocument, options);
        }
export type SecondmentStocksQueryHookResult = ReturnType<typeof useSecondmentStocksQuery>;
export type SecondmentStocksLazyQueryHookResult = ReturnType<typeof useSecondmentStocksLazyQuery>;
export type SecondmentStocksQueryResult = Apollo.QueryResult<SecondmentStocksQuery, SecondmentStocksQueryVariables>;
export const ChangeSecondmentStatusDocument = gql`
    mutation changeSecondmentStatus($secondmentStatusInput: SecondmentStatusInput) {
  changeSecondmentStatus(secondmentStatusInput: $secondmentStatusInput)
}
    `;
export type ChangeSecondmentStatusMutationFn = Apollo.MutationFunction<ChangeSecondmentStatusMutation, ChangeSecondmentStatusMutationVariables>;

/**
 * __useChangeSecondmentStatusMutation__
 *
 * To run a mutation, you first call `useChangeSecondmentStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeSecondmentStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeSecondmentStatusMutation, { data, loading, error }] = useChangeSecondmentStatusMutation({
 *   variables: {
 *      secondmentStatusInput: // value for 'secondmentStatusInput'
 *   },
 * });
 */
export function useChangeSecondmentStatusMutation(baseOptions?: Apollo.MutationHookOptions<ChangeSecondmentStatusMutation, ChangeSecondmentStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeSecondmentStatusMutation, ChangeSecondmentStatusMutationVariables>(ChangeSecondmentStatusDocument, options);
      }
export type ChangeSecondmentStatusMutationHookResult = ReturnType<typeof useChangeSecondmentStatusMutation>;
export type ChangeSecondmentStatusMutationResult = Apollo.MutationResult<ChangeSecondmentStatusMutation>;
export type ChangeSecondmentStatusMutationOptions = Apollo.BaseMutationOptions<ChangeSecondmentStatusMutation, ChangeSecondmentStatusMutationVariables>;
export const InsertSecondmentDocument = gql`
    mutation insertSecondment($secondmentInput: SecondmentInput) {
  insertSecondment(secondmentInput: $secondmentInput)
}
    `;
export type InsertSecondmentMutationFn = Apollo.MutationFunction<InsertSecondmentMutation, InsertSecondmentMutationVariables>;

/**
 * __useInsertSecondmentMutation__
 *
 * To run a mutation, you first call `useInsertSecondmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSecondmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSecondmentMutation, { data, loading, error }] = useInsertSecondmentMutation({
 *   variables: {
 *      secondmentInput: // value for 'secondmentInput'
 *   },
 * });
 */
export function useInsertSecondmentMutation(baseOptions?: Apollo.MutationHookOptions<InsertSecondmentMutation, InsertSecondmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertSecondmentMutation, InsertSecondmentMutationVariables>(InsertSecondmentDocument, options);
      }
export type InsertSecondmentMutationHookResult = ReturnType<typeof useInsertSecondmentMutation>;
export type InsertSecondmentMutationResult = Apollo.MutationResult<InsertSecondmentMutation>;
export type InsertSecondmentMutationOptions = Apollo.BaseMutationOptions<InsertSecondmentMutation, InsertSecondmentMutationVariables>;
export const UpdateSecondmentDocument = gql`
    mutation updateSecondment($secondmentInput: SecondmentInput) {
  updateSecondment(secondmentInput: $secondmentInput)
}
    `;
export type UpdateSecondmentMutationFn = Apollo.MutationFunction<UpdateSecondmentMutation, UpdateSecondmentMutationVariables>;

/**
 * __useUpdateSecondmentMutation__
 *
 * To run a mutation, you first call `useUpdateSecondmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSecondmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSecondmentMutation, { data, loading, error }] = useUpdateSecondmentMutation({
 *   variables: {
 *      secondmentInput: // value for 'secondmentInput'
 *   },
 * });
 */
export function useUpdateSecondmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSecondmentMutation, UpdateSecondmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSecondmentMutation, UpdateSecondmentMutationVariables>(UpdateSecondmentDocument, options);
      }
export type UpdateSecondmentMutationHookResult = ReturnType<typeof useUpdateSecondmentMutation>;
export type UpdateSecondmentMutationResult = Apollo.MutationResult<UpdateSecondmentMutation>;
export type UpdateSecondmentMutationOptions = Apollo.BaseMutationOptions<UpdateSecondmentMutation, UpdateSecondmentMutationVariables>;
export const PageOrgSecondmentDocument = gql`
    query pageOrgSecondment($page: Page, $secondmentPageInput: SecondmentPageInput) {
  pageOrgSecondment(page: $page, secondmentPageInput: $secondmentPageInput) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      commodityTypeId
      commodityTypeName
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      description
      inBelongId
      inBelongName
      inBelongType
      outBelongId
      outBelongName
      outBelongType
      remark
      secondmentCode
      secondmentId
      secondmentOrderItemList {
        batch {
          batchCode
          batchId
        }
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
        priceType {
          unitId
          unitName
        }
        secondmentId
        secondmentItemId
        totalQuantity
        transferPrice
        transferTotalQuantity
        transferUnitQuantity
        unitPrice
        unitQuantity
      }
      secondmentStatus
      secondmentStatusName
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
 * __usePageOrgSecondmentQuery__
 *
 * To run a query within a React component, call `usePageOrgSecondmentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageOrgSecondmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageOrgSecondmentQuery({
 *   variables: {
 *      page: // value for 'page'
 *      secondmentPageInput: // value for 'secondmentPageInput'
 *   },
 * });
 */
export function usePageOrgSecondmentQuery(baseOptions?: Apollo.QueryHookOptions<PageOrgSecondmentQuery, PageOrgSecondmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageOrgSecondmentQuery, PageOrgSecondmentQueryVariables>(PageOrgSecondmentDocument, options);
      }
export function usePageOrgSecondmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageOrgSecondmentQuery, PageOrgSecondmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageOrgSecondmentQuery, PageOrgSecondmentQueryVariables>(PageOrgSecondmentDocument, options);
        }
export type PageOrgSecondmentQueryHookResult = ReturnType<typeof usePageOrgSecondmentQuery>;
export type PageOrgSecondmentLazyQueryHookResult = ReturnType<typeof usePageOrgSecondmentLazyQuery>;
export type PageOrgSecondmentQueryResult = Apollo.QueryResult<PageOrgSecondmentQuery, PageOrgSecondmentQueryVariables>;