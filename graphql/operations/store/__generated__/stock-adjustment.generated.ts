import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageStockAdjustmentQueryVariables = SchemaTypes.Exact<{
  pageStockAdjustmentInput?: SchemaTypes.InputMaybe<SchemaTypes.PageStockAdjustmentInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageStockAdjustmentQuery = { pageStockAdjustment?: { __typename?: 'PageStockAdjustmentPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'StockAdjustmentPayload', unitQuantity?: number, totalQuantity?: number, createTime?: number, stockAdjustmentId?: string, stockAdjustmentStatus?: SchemaTypes.StockAdjustmentStatusEnum, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }> } };

export type RejectStockAdjustmentMutationVariables = SchemaTypes.Exact<{
  rejectStockAdjustmentInput?: SchemaTypes.InputMaybe<SchemaTypes.RejectStockAdjustmentInput>;
}>;


export type RejectStockAdjustmentMutation = { rejectStockAdjustment?: boolean };

export type PassStockAdjustmentMutationVariables = SchemaTypes.Exact<{
  passStockAdjustmentInput?: SchemaTypes.InputMaybe<SchemaTypes.PassStockAdjustmentInput>;
}>;


export type PassStockAdjustmentMutation = { passStockAdjustment?: boolean };

export type StockAdjustmentStatusQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type StockAdjustmentStatusQuery = { stockAdjustmentStatus?: { __typename?: 'StockAdjustmentStatusPayload', toBeAudit?: number } };

export type CreateProductionStockAdjustmentMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreateProductionStockAdjustmentInput>;
}>;


export type CreateProductionStockAdjustmentMutation = { createProductionStockAdjustment?: boolean };

export type PageProductionStockAdjustmentQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PageProductionStockAdjustmentInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageProductionStockAdjustmentQuery = { pageProductionStockAdjustment?: { __typename?: 'PageProductionStockAdjustmentPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'ProductionStockAdjustmentPayload', adjustmentId?: string, adjustmentStatus?: SchemaTypes.ProductionStockAdjustmentStatusEnum, adjustmentType?: SchemaTypes.ProductionStockAdjustmentType, createTime?: number, tenantId?: string, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, commodityList?: Array<{ __typename?: 'ProductionStockAdjustmentItemPayload', batchId?: string, createTime?: number, stockAdjustmentId?: string, stockAdjustmentItemId?: string, totalQuantity?: number, unitQuantity?: number, adjustmentReason?: string, createBy?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> } };

export type ProductionStockAdjustmentStatusQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type ProductionStockAdjustmentStatusQuery = { ProductionStockAdjustmentStatus?: { __typename?: 'ProductionStockAdjustmentStatusPayload', toBeAuditStockIn?: number, toBeAuditStockOut?: number } };

export type AuditProductionStockAdjustmentMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ChangeProductionStockAdjustmentStatusInput>;
}>;


export type AuditProductionStockAdjustmentMutation = { auditProductionStockAdjustment?: boolean };

export type RejectProductionStockAdjustmentMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ChangeProductionStockAdjustmentStatusInput>;
}>;


export type RejectProductionStockAdjustmentMutation = { rejectProductionStockAdjustment?: boolean };


export const PageStockAdjustmentDocument = gql`
    query pageStockAdjustment($pageStockAdjustmentInput: PageStockAdjustmentInput, $page: Page) {
  pageStockAdjustment(
    pageStockAdjustmentInput: $pageStockAdjustmentInput
    page: $page
  ) {
    records {
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
      unitType {
        unitId
        unitName
      }
      unitQuantity
      totalType {
        unitId
        unitName
      }
      totalQuantity
      createUser {
        userId
        userName
        phoneNum
      }
      createTime
      stockAdjustmentId
      stockAdjustmentStatus
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageStockAdjustmentQuery__
 *
 * To run a query within a React component, call `usePageStockAdjustmentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageStockAdjustmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageStockAdjustmentQuery({
 *   variables: {
 *      pageStockAdjustmentInput: // value for 'pageStockAdjustmentInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageStockAdjustmentQuery(baseOptions?: Apollo.QueryHookOptions<PageStockAdjustmentQuery, PageStockAdjustmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageStockAdjustmentQuery, PageStockAdjustmentQueryVariables>(PageStockAdjustmentDocument, options);
      }
export function usePageStockAdjustmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageStockAdjustmentQuery, PageStockAdjustmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageStockAdjustmentQuery, PageStockAdjustmentQueryVariables>(PageStockAdjustmentDocument, options);
        }
export type PageStockAdjustmentQueryHookResult = ReturnType<typeof usePageStockAdjustmentQuery>;
export type PageStockAdjustmentLazyQueryHookResult = ReturnType<typeof usePageStockAdjustmentLazyQuery>;
export type PageStockAdjustmentQueryResult = Apollo.QueryResult<PageStockAdjustmentQuery, PageStockAdjustmentQueryVariables>;
export const RejectStockAdjustmentDocument = gql`
    mutation rejectStockAdjustment($rejectStockAdjustmentInput: RejectStockAdjustmentInput) {
  rejectStockAdjustment(rejectStockAdjustmentInput: $rejectStockAdjustmentInput)
}
    `;
export type RejectStockAdjustmentMutationFn = Apollo.MutationFunction<RejectStockAdjustmentMutation, RejectStockAdjustmentMutationVariables>;

/**
 * __useRejectStockAdjustmentMutation__
 *
 * To run a mutation, you first call `useRejectStockAdjustmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectStockAdjustmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectStockAdjustmentMutation, { data, loading, error }] = useRejectStockAdjustmentMutation({
 *   variables: {
 *      rejectStockAdjustmentInput: // value for 'rejectStockAdjustmentInput'
 *   },
 * });
 */
export function useRejectStockAdjustmentMutation(baseOptions?: Apollo.MutationHookOptions<RejectStockAdjustmentMutation, RejectStockAdjustmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectStockAdjustmentMutation, RejectStockAdjustmentMutationVariables>(RejectStockAdjustmentDocument, options);
      }
export type RejectStockAdjustmentMutationHookResult = ReturnType<typeof useRejectStockAdjustmentMutation>;
export type RejectStockAdjustmentMutationResult = Apollo.MutationResult<RejectStockAdjustmentMutation>;
export type RejectStockAdjustmentMutationOptions = Apollo.BaseMutationOptions<RejectStockAdjustmentMutation, RejectStockAdjustmentMutationVariables>;
export const PassStockAdjustmentDocument = gql`
    mutation passStockAdjustment($passStockAdjustmentInput: PassStockAdjustmentInput) {
  passStockAdjustment(passStockAdjustmentInput: $passStockAdjustmentInput)
}
    `;
export type PassStockAdjustmentMutationFn = Apollo.MutationFunction<PassStockAdjustmentMutation, PassStockAdjustmentMutationVariables>;

/**
 * __usePassStockAdjustmentMutation__
 *
 * To run a mutation, you first call `usePassStockAdjustmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePassStockAdjustmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passStockAdjustmentMutation, { data, loading, error }] = usePassStockAdjustmentMutation({
 *   variables: {
 *      passStockAdjustmentInput: // value for 'passStockAdjustmentInput'
 *   },
 * });
 */
export function usePassStockAdjustmentMutation(baseOptions?: Apollo.MutationHookOptions<PassStockAdjustmentMutation, PassStockAdjustmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PassStockAdjustmentMutation, PassStockAdjustmentMutationVariables>(PassStockAdjustmentDocument, options);
      }
export type PassStockAdjustmentMutationHookResult = ReturnType<typeof usePassStockAdjustmentMutation>;
export type PassStockAdjustmentMutationResult = Apollo.MutationResult<PassStockAdjustmentMutation>;
export type PassStockAdjustmentMutationOptions = Apollo.BaseMutationOptions<PassStockAdjustmentMutation, PassStockAdjustmentMutationVariables>;
export const StockAdjustmentStatusDocument = gql`
    query stockAdjustmentStatus {
  stockAdjustmentStatus {
    toBeAudit
  }
}
    `;

/**
 * __useStockAdjustmentStatusQuery__
 *
 * To run a query within a React component, call `useStockAdjustmentStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockAdjustmentStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockAdjustmentStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useStockAdjustmentStatusQuery(baseOptions?: Apollo.QueryHookOptions<StockAdjustmentStatusQuery, StockAdjustmentStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StockAdjustmentStatusQuery, StockAdjustmentStatusQueryVariables>(StockAdjustmentStatusDocument, options);
      }
export function useStockAdjustmentStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StockAdjustmentStatusQuery, StockAdjustmentStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StockAdjustmentStatusQuery, StockAdjustmentStatusQueryVariables>(StockAdjustmentStatusDocument, options);
        }
export type StockAdjustmentStatusQueryHookResult = ReturnType<typeof useStockAdjustmentStatusQuery>;
export type StockAdjustmentStatusLazyQueryHookResult = ReturnType<typeof useStockAdjustmentStatusLazyQuery>;
export type StockAdjustmentStatusQueryResult = Apollo.QueryResult<StockAdjustmentStatusQuery, StockAdjustmentStatusQueryVariables>;
export const CreateProductionStockAdjustmentDocument = gql`
    mutation createProductionStockAdjustment($input: CreateProductionStockAdjustmentInput) {
  createProductionStockAdjustment(input: $input)
}
    `;
export type CreateProductionStockAdjustmentMutationFn = Apollo.MutationFunction<CreateProductionStockAdjustmentMutation, CreateProductionStockAdjustmentMutationVariables>;

/**
 * __useCreateProductionStockAdjustmentMutation__
 *
 * To run a mutation, you first call `useCreateProductionStockAdjustmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductionStockAdjustmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductionStockAdjustmentMutation, { data, loading, error }] = useCreateProductionStockAdjustmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductionStockAdjustmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductionStockAdjustmentMutation, CreateProductionStockAdjustmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductionStockAdjustmentMutation, CreateProductionStockAdjustmentMutationVariables>(CreateProductionStockAdjustmentDocument, options);
      }
export type CreateProductionStockAdjustmentMutationHookResult = ReturnType<typeof useCreateProductionStockAdjustmentMutation>;
export type CreateProductionStockAdjustmentMutationResult = Apollo.MutationResult<CreateProductionStockAdjustmentMutation>;
export type CreateProductionStockAdjustmentMutationOptions = Apollo.BaseMutationOptions<CreateProductionStockAdjustmentMutation, CreateProductionStockAdjustmentMutationVariables>;
export const PageProductionStockAdjustmentDocument = gql`
    query pageProductionStockAdjustment($input: PageProductionStockAdjustmentInput, $page: Page) {
  pageProductionStockAdjustment(input: $input, page: $page) {
    records {
      adjustmentId
      adjustmentStatus
      adjustmentType
      createBy {
        userId
        userName
        phoneNum
      }
      createTime
      org {
        orgId
        orgName
      }
      tenantId
      warehouse {
        warehouseId
        warehouseName
      }
      commodityList {
        batchId
        createBy {
          userId
          userName
          phoneNum
        }
        createTime
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
          categoryId
          categoryName
        }
        stockAdjustmentId
        stockAdjustmentItemId
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
        adjustmentReason
      }
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageProductionStockAdjustmentQuery__
 *
 * To run a query within a React component, call `usePageProductionStockAdjustmentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageProductionStockAdjustmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageProductionStockAdjustmentQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageProductionStockAdjustmentQuery(baseOptions?: Apollo.QueryHookOptions<PageProductionStockAdjustmentQuery, PageProductionStockAdjustmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageProductionStockAdjustmentQuery, PageProductionStockAdjustmentQueryVariables>(PageProductionStockAdjustmentDocument, options);
      }
export function usePageProductionStockAdjustmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageProductionStockAdjustmentQuery, PageProductionStockAdjustmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageProductionStockAdjustmentQuery, PageProductionStockAdjustmentQueryVariables>(PageProductionStockAdjustmentDocument, options);
        }
export type PageProductionStockAdjustmentQueryHookResult = ReturnType<typeof usePageProductionStockAdjustmentQuery>;
export type PageProductionStockAdjustmentLazyQueryHookResult = ReturnType<typeof usePageProductionStockAdjustmentLazyQuery>;
export type PageProductionStockAdjustmentQueryResult = Apollo.QueryResult<PageProductionStockAdjustmentQuery, PageProductionStockAdjustmentQueryVariables>;
export const ProductionStockAdjustmentStatusDocument = gql`
    query ProductionStockAdjustmentStatus {
  ProductionStockAdjustmentStatus {
    toBeAuditStockIn
    toBeAuditStockOut
  }
}
    `;

/**
 * __useProductionStockAdjustmentStatusQuery__
 *
 * To run a query within a React component, call `useProductionStockAdjustmentStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductionStockAdjustmentStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductionStockAdjustmentStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductionStockAdjustmentStatusQuery(baseOptions?: Apollo.QueryHookOptions<ProductionStockAdjustmentStatusQuery, ProductionStockAdjustmentStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductionStockAdjustmentStatusQuery, ProductionStockAdjustmentStatusQueryVariables>(ProductionStockAdjustmentStatusDocument, options);
      }
export function useProductionStockAdjustmentStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductionStockAdjustmentStatusQuery, ProductionStockAdjustmentStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductionStockAdjustmentStatusQuery, ProductionStockAdjustmentStatusQueryVariables>(ProductionStockAdjustmentStatusDocument, options);
        }
export type ProductionStockAdjustmentStatusQueryHookResult = ReturnType<typeof useProductionStockAdjustmentStatusQuery>;
export type ProductionStockAdjustmentStatusLazyQueryHookResult = ReturnType<typeof useProductionStockAdjustmentStatusLazyQuery>;
export type ProductionStockAdjustmentStatusQueryResult = Apollo.QueryResult<ProductionStockAdjustmentStatusQuery, ProductionStockAdjustmentStatusQueryVariables>;
export const AuditProductionStockAdjustmentDocument = gql`
    mutation auditProductionStockAdjustment($input: ChangeProductionStockAdjustmentStatusInput) {
  auditProductionStockAdjustment(input: $input)
}
    `;
export type AuditProductionStockAdjustmentMutationFn = Apollo.MutationFunction<AuditProductionStockAdjustmentMutation, AuditProductionStockAdjustmentMutationVariables>;

/**
 * __useAuditProductionStockAdjustmentMutation__
 *
 * To run a mutation, you first call `useAuditProductionStockAdjustmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuditProductionStockAdjustmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [auditProductionStockAdjustmentMutation, { data, loading, error }] = useAuditProductionStockAdjustmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuditProductionStockAdjustmentMutation(baseOptions?: Apollo.MutationHookOptions<AuditProductionStockAdjustmentMutation, AuditProductionStockAdjustmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuditProductionStockAdjustmentMutation, AuditProductionStockAdjustmentMutationVariables>(AuditProductionStockAdjustmentDocument, options);
      }
export type AuditProductionStockAdjustmentMutationHookResult = ReturnType<typeof useAuditProductionStockAdjustmentMutation>;
export type AuditProductionStockAdjustmentMutationResult = Apollo.MutationResult<AuditProductionStockAdjustmentMutation>;
export type AuditProductionStockAdjustmentMutationOptions = Apollo.BaseMutationOptions<AuditProductionStockAdjustmentMutation, AuditProductionStockAdjustmentMutationVariables>;
export const RejectProductionStockAdjustmentDocument = gql`
    mutation rejectProductionStockAdjustment($input: ChangeProductionStockAdjustmentStatusInput) {
  rejectProductionStockAdjustment(input: $input)
}
    `;
export type RejectProductionStockAdjustmentMutationFn = Apollo.MutationFunction<RejectProductionStockAdjustmentMutation, RejectProductionStockAdjustmentMutationVariables>;

/**
 * __useRejectProductionStockAdjustmentMutation__
 *
 * To run a mutation, you first call `useRejectProductionStockAdjustmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectProductionStockAdjustmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectProductionStockAdjustmentMutation, { data, loading, error }] = useRejectProductionStockAdjustmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRejectProductionStockAdjustmentMutation(baseOptions?: Apollo.MutationHookOptions<RejectProductionStockAdjustmentMutation, RejectProductionStockAdjustmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectProductionStockAdjustmentMutation, RejectProductionStockAdjustmentMutationVariables>(RejectProductionStockAdjustmentDocument, options);
      }
export type RejectProductionStockAdjustmentMutationHookResult = ReturnType<typeof useRejectProductionStockAdjustmentMutation>;
export type RejectProductionStockAdjustmentMutationResult = Apollo.MutationResult<RejectProductionStockAdjustmentMutation>;
export type RejectProductionStockAdjustmentMutationOptions = Apollo.BaseMutationOptions<RejectProductionStockAdjustmentMutation, RejectProductionStockAdjustmentMutationVariables>;