import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageDamageOutOrderQueryVariables = SchemaTypes.Exact<{
  pageDamageOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.PageDamageOutOrderInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageDamageOutOrderQuery = { pageDamageOutOrder?: { __typename?: 'PageDamageOutPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'DamageOutPayload', outOrderStatus?: number, outOrderStatusName?: string, outOrderId?: string, outOrderCode?: string, outOrderType?: number, outOrderTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, applyDate?: number, outOrderDescription?: string, errorDescription?: string, createTime?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodities?: Array<{ __typename?: 'DamageOutItemPayload', outOrderItemId?: number, damageReason?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, stockBatchInfo?: { __typename?: 'BatchInfo', batchId?: string, batchCode?: string, unitQuantity?: number, totalQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }, damageQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } }>, photos?: { __typename?: 'DamagePhotos', proofUploads?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUrl?: string, fileUploadTime?: number }>, damageOrder?: { __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUrl?: string, fileUploadTime?: number }, processProofUploads?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUrl?: string, fileUploadTime?: number }> }, auditLogs?: Array<{ __typename?: 'AuditLog', completeTime?: number, note?: string, actionTypeId?: number, actionTypeName?: string, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }> }> } };

export type ListDamageFlowTemplateQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListDamageFlowTemplateInput>;
}>;


export type ListDamageFlowTemplateQuery = { listDamageFlowTemplate?: Array<{ __typename?: 'FlowNode', id?: string, name?: string }> };

export type DamageOutOrderQueryVariables = SchemaTypes.Exact<{
  damageOutIDInput?: SchemaTypes.InputMaybe<SchemaTypes.DamageOutIdInput>;
}>;


export type DamageOutOrderQuery = { damageOutOrder?: { __typename?: 'DamageOutPayload', outOrderStatus?: number, outOrderStatusName?: string, outOrderId?: string, outOrderCode?: string, outOrderType?: number, outOrderTypeName?: string, commodityTypeId?: number, commodityTypeName?: string, applyDate?: number, outOrderDescription?: string, errorDescription?: string, createTime?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, commodities?: Array<{ __typename?: 'DamageOutItemPayload', outOrderItemId?: number, damageReason?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, categoryId?: number, categoryName?: string, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, stockBatchInfo?: { __typename?: 'BatchInfo', batchId?: string, batchCode?: string, unitQuantity?: number, totalQuantity?: number, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number } }, damageQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } }>, photos?: { __typename?: 'DamagePhotos', proofUploads?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUrl?: string, fileUploadTime?: number }>, damageOrder?: { __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUrl?: string, fileUploadTime?: number }, processProofUploads?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUrl?: string, fileUploadTime?: number }> }, auditLogs?: Array<{ __typename?: 'AuditLog', completeTime?: number, note?: string, actionTypeId?: number, actionTypeName?: string, createUser?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string } }> } };

export type DamageOutStatusCountQueryVariables = SchemaTypes.Exact<{
  damageOutStatusCountInput?: SchemaTypes.InputMaybe<SchemaTypes.DamageOutStatusCountInput>;
}>;


export type DamageOutStatusCountQuery = { damageOutStatusCount?: { __typename?: 'DamageOutStatusCountPayload', toBeSubmit?: number, inProgress?: number, toBeOut?: number, rejected?: number, canceled?: number, completed?: number } };

export type CreateDamageOutOrderMutationVariables = SchemaTypes.Exact<{
  createDamageOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateDamageOutOrderInput>;
}>;


export type CreateDamageOutOrderMutation = { createDamageOutOrder?: string };

export type UpdateDamageOutOrderMutationVariables = SchemaTypes.Exact<{
  createDamageOutOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CreateDamageOutOrderInput>;
}>;


export type UpdateDamageOutOrderMutation = { updateDamageOutOrder?: boolean };

export type OutDamageOutOrderMutationVariables = SchemaTypes.Exact<{
  damageOutIDInput?: SchemaTypes.InputMaybe<SchemaTypes.DamageOutIdInput>;
}>;


export type OutDamageOutOrderMutation = { outDamageOutOrder?: boolean };

export type SubmitDamageOutOrderMutationVariables = SchemaTypes.Exact<{
  damageOutIDInput?: SchemaTypes.InputMaybe<SchemaTypes.DamageOutIdInput>;
}>;


export type SubmitDamageOutOrderMutation = { submitDamageOutOrder?: boolean };

export type CancelDamageOutOrderMutationVariables = SchemaTypes.Exact<{
  damageOutIDInput?: SchemaTypes.InputMaybe<SchemaTypes.DamageOutIdInput>;
}>;


export type CancelDamageOutOrderMutation = { cancelDamageOutOrder?: boolean };


export const PageDamageOutOrderDocument = gql`
    query pageDamageOutOrder($pageDamageOutOrderInput: PageDamageOutOrderInput, $page: Page) {
  pageDamageOutOrder(
    pageDamageOutOrderInput: $pageDamageOutOrderInput
    page: $page
  ) {
    records {
      outOrderStatus
      outOrderStatusName
      outOrderId
      outOrderCode
      outOrderType
      outOrderTypeName
      commodityTypeId
      commodityTypeName
      warehouse {
        warehouseId
        warehouseName
      }
      belongOrg {
        orgId
        orgName
      }
      applyDate
      outOrderDescription
      errorDescription
      createUser {
        userId
        userName
        phoneNum
      }
      createTime
      commodities {
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
          categoryId
          categoryName
        }
        stockBatchInfo {
          batchId
          batchCode
          unitQuantity
          totalQuantity
          customerBelongInfo {
            customerId
            customerName
            customerType
          }
        }
        damageQuantity {
          unitQuantity
          totalQuantity
        }
        damageReason
      }
      photos {
        proofUploads {
          fileId
          fileName
          fileUrl
          fileUploadTime
        }
        damageOrder {
          fileId
          fileName
          fileUrl
          fileUploadTime
        }
        processProofUploads {
          fileId
          fileName
          fileUrl
          fileUploadTime
        }
      }
      auditLogs {
        createUser {
          userId
          userName
          phoneNum
        }
        completeTime
        note
        actionTypeId
        actionTypeName
      }
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePageDamageOutOrderQuery__
 *
 * To run a query within a React component, call `usePageDamageOutOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDamageOutOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageDamageOutOrderQuery({
 *   variables: {
 *      pageDamageOutOrderInput: // value for 'pageDamageOutOrderInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageDamageOutOrderQuery(baseOptions?: Apollo.QueryHookOptions<PageDamageOutOrderQuery, PageDamageOutOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageDamageOutOrderQuery, PageDamageOutOrderQueryVariables>(PageDamageOutOrderDocument, options);
      }
export function usePageDamageOutOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageDamageOutOrderQuery, PageDamageOutOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageDamageOutOrderQuery, PageDamageOutOrderQueryVariables>(PageDamageOutOrderDocument, options);
        }
export type PageDamageOutOrderQueryHookResult = ReturnType<typeof usePageDamageOutOrderQuery>;
export type PageDamageOutOrderLazyQueryHookResult = ReturnType<typeof usePageDamageOutOrderLazyQuery>;
export type PageDamageOutOrderQueryResult = Apollo.QueryResult<PageDamageOutOrderQuery, PageDamageOutOrderQueryVariables>;
export const ListDamageFlowTemplateDocument = gql`
    query listDamageFlowTemplate($input: ListDamageFlowTemplateInput) {
  listDamageFlowTemplate(input: $input) {
    id
    name
  }
}
    `;

/**
 * __useListDamageFlowTemplateQuery__
 *
 * To run a query within a React component, call `useListDamageFlowTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDamageFlowTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDamageFlowTemplateQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListDamageFlowTemplateQuery(baseOptions?: Apollo.QueryHookOptions<ListDamageFlowTemplateQuery, ListDamageFlowTemplateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDamageFlowTemplateQuery, ListDamageFlowTemplateQueryVariables>(ListDamageFlowTemplateDocument, options);
      }
export function useListDamageFlowTemplateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDamageFlowTemplateQuery, ListDamageFlowTemplateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDamageFlowTemplateQuery, ListDamageFlowTemplateQueryVariables>(ListDamageFlowTemplateDocument, options);
        }
export type ListDamageFlowTemplateQueryHookResult = ReturnType<typeof useListDamageFlowTemplateQuery>;
export type ListDamageFlowTemplateLazyQueryHookResult = ReturnType<typeof useListDamageFlowTemplateLazyQuery>;
export type ListDamageFlowTemplateQueryResult = Apollo.QueryResult<ListDamageFlowTemplateQuery, ListDamageFlowTemplateQueryVariables>;
export const DamageOutOrderDocument = gql`
    query damageOutOrder($damageOutIDInput: DamageOutIDInput) {
  damageOutOrder(damageOutIDInput: $damageOutIDInput) {
    outOrderStatus
    outOrderStatusName
    outOrderId
    outOrderCode
    outOrderType
    outOrderTypeName
    commodityTypeId
    commodityTypeName
    warehouse {
      warehouseId
      warehouseName
    }
    belongOrg {
      orgId
      orgName
    }
    applyDate
    outOrderDescription
    errorDescription
    createUser {
      userId
      userName
      phoneNum
    }
    createTime
    commodities {
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
        categoryId
        categoryName
      }
      stockBatchInfo {
        batchId
        batchCode
        unitQuantity
        totalQuantity
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
      }
      damageQuantity {
        unitQuantity
        totalQuantity
      }
      damageReason
    }
    photos {
      proofUploads {
        fileId
        fileName
        fileUrl
        fileUploadTime
      }
      damageOrder {
        fileId
        fileName
        fileUrl
        fileUploadTime
      }
      processProofUploads {
        fileId
        fileName
        fileUrl
        fileUploadTime
      }
    }
    auditLogs {
      createUser {
        userId
        userName
        phoneNum
      }
      completeTime
      note
      actionTypeId
      actionTypeName
    }
  }
}
    `;

/**
 * __useDamageOutOrderQuery__
 *
 * To run a query within a React component, call `useDamageOutOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useDamageOutOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDamageOutOrderQuery({
 *   variables: {
 *      damageOutIDInput: // value for 'damageOutIDInput'
 *   },
 * });
 */
export function useDamageOutOrderQuery(baseOptions?: Apollo.QueryHookOptions<DamageOutOrderQuery, DamageOutOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DamageOutOrderQuery, DamageOutOrderQueryVariables>(DamageOutOrderDocument, options);
      }
export function useDamageOutOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DamageOutOrderQuery, DamageOutOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DamageOutOrderQuery, DamageOutOrderQueryVariables>(DamageOutOrderDocument, options);
        }
export type DamageOutOrderQueryHookResult = ReturnType<typeof useDamageOutOrderQuery>;
export type DamageOutOrderLazyQueryHookResult = ReturnType<typeof useDamageOutOrderLazyQuery>;
export type DamageOutOrderQueryResult = Apollo.QueryResult<DamageOutOrderQuery, DamageOutOrderQueryVariables>;
export const DamageOutStatusCountDocument = gql`
    query damageOutStatusCount($damageOutStatusCountInput: DamageOutStatusCountInput) {
  damageOutStatusCount(damageOutStatusCountInput: $damageOutStatusCountInput) {
    toBeSubmit
    inProgress
    toBeOut
    rejected
    canceled
    completed
  }
}
    `;

/**
 * __useDamageOutStatusCountQuery__
 *
 * To run a query within a React component, call `useDamageOutStatusCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useDamageOutStatusCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDamageOutStatusCountQuery({
 *   variables: {
 *      damageOutStatusCountInput: // value for 'damageOutStatusCountInput'
 *   },
 * });
 */
export function useDamageOutStatusCountQuery(baseOptions?: Apollo.QueryHookOptions<DamageOutStatusCountQuery, DamageOutStatusCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DamageOutStatusCountQuery, DamageOutStatusCountQueryVariables>(DamageOutStatusCountDocument, options);
      }
export function useDamageOutStatusCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DamageOutStatusCountQuery, DamageOutStatusCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DamageOutStatusCountQuery, DamageOutStatusCountQueryVariables>(DamageOutStatusCountDocument, options);
        }
export type DamageOutStatusCountQueryHookResult = ReturnType<typeof useDamageOutStatusCountQuery>;
export type DamageOutStatusCountLazyQueryHookResult = ReturnType<typeof useDamageOutStatusCountLazyQuery>;
export type DamageOutStatusCountQueryResult = Apollo.QueryResult<DamageOutStatusCountQuery, DamageOutStatusCountQueryVariables>;
export const CreateDamageOutOrderDocument = gql`
    mutation createDamageOutOrder($createDamageOutOrderInput: CreateDamageOutOrderInput) {
  createDamageOutOrder(createDamageOutOrderInput: $createDamageOutOrderInput)
}
    `;
export type CreateDamageOutOrderMutationFn = Apollo.MutationFunction<CreateDamageOutOrderMutation, CreateDamageOutOrderMutationVariables>;

/**
 * __useCreateDamageOutOrderMutation__
 *
 * To run a mutation, you first call `useCreateDamageOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDamageOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDamageOutOrderMutation, { data, loading, error }] = useCreateDamageOutOrderMutation({
 *   variables: {
 *      createDamageOutOrderInput: // value for 'createDamageOutOrderInput'
 *   },
 * });
 */
export function useCreateDamageOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateDamageOutOrderMutation, CreateDamageOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDamageOutOrderMutation, CreateDamageOutOrderMutationVariables>(CreateDamageOutOrderDocument, options);
      }
export type CreateDamageOutOrderMutationHookResult = ReturnType<typeof useCreateDamageOutOrderMutation>;
export type CreateDamageOutOrderMutationResult = Apollo.MutationResult<CreateDamageOutOrderMutation>;
export type CreateDamageOutOrderMutationOptions = Apollo.BaseMutationOptions<CreateDamageOutOrderMutation, CreateDamageOutOrderMutationVariables>;
export const UpdateDamageOutOrderDocument = gql`
    mutation updateDamageOutOrder($createDamageOutOrderInput: CreateDamageOutOrderInput) {
  updateDamageOutOrder(createDamageOutOrderInput: $createDamageOutOrderInput)
}
    `;
export type UpdateDamageOutOrderMutationFn = Apollo.MutationFunction<UpdateDamageOutOrderMutation, UpdateDamageOutOrderMutationVariables>;

/**
 * __useUpdateDamageOutOrderMutation__
 *
 * To run a mutation, you first call `useUpdateDamageOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDamageOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDamageOutOrderMutation, { data, loading, error }] = useUpdateDamageOutOrderMutation({
 *   variables: {
 *      createDamageOutOrderInput: // value for 'createDamageOutOrderInput'
 *   },
 * });
 */
export function useUpdateDamageOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDamageOutOrderMutation, UpdateDamageOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDamageOutOrderMutation, UpdateDamageOutOrderMutationVariables>(UpdateDamageOutOrderDocument, options);
      }
export type UpdateDamageOutOrderMutationHookResult = ReturnType<typeof useUpdateDamageOutOrderMutation>;
export type UpdateDamageOutOrderMutationResult = Apollo.MutationResult<UpdateDamageOutOrderMutation>;
export type UpdateDamageOutOrderMutationOptions = Apollo.BaseMutationOptions<UpdateDamageOutOrderMutation, UpdateDamageOutOrderMutationVariables>;
export const OutDamageOutOrderDocument = gql`
    mutation outDamageOutOrder($damageOutIDInput: DamageOutIDInput) {
  outDamageOutOrder(damageOutIDInput: $damageOutIDInput)
}
    `;
export type OutDamageOutOrderMutationFn = Apollo.MutationFunction<OutDamageOutOrderMutation, OutDamageOutOrderMutationVariables>;

/**
 * __useOutDamageOutOrderMutation__
 *
 * To run a mutation, you first call `useOutDamageOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOutDamageOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [outDamageOutOrderMutation, { data, loading, error }] = useOutDamageOutOrderMutation({
 *   variables: {
 *      damageOutIDInput: // value for 'damageOutIDInput'
 *   },
 * });
 */
export function useOutDamageOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<OutDamageOutOrderMutation, OutDamageOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OutDamageOutOrderMutation, OutDamageOutOrderMutationVariables>(OutDamageOutOrderDocument, options);
      }
export type OutDamageOutOrderMutationHookResult = ReturnType<typeof useOutDamageOutOrderMutation>;
export type OutDamageOutOrderMutationResult = Apollo.MutationResult<OutDamageOutOrderMutation>;
export type OutDamageOutOrderMutationOptions = Apollo.BaseMutationOptions<OutDamageOutOrderMutation, OutDamageOutOrderMutationVariables>;
export const SubmitDamageOutOrderDocument = gql`
    mutation submitDamageOutOrder($damageOutIDInput: DamageOutIDInput) {
  submitDamageOutOrder(damageOutIDInput: $damageOutIDInput)
}
    `;
export type SubmitDamageOutOrderMutationFn = Apollo.MutationFunction<SubmitDamageOutOrderMutation, SubmitDamageOutOrderMutationVariables>;

/**
 * __useSubmitDamageOutOrderMutation__
 *
 * To run a mutation, you first call `useSubmitDamageOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitDamageOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitDamageOutOrderMutation, { data, loading, error }] = useSubmitDamageOutOrderMutation({
 *   variables: {
 *      damageOutIDInput: // value for 'damageOutIDInput'
 *   },
 * });
 */
export function useSubmitDamageOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitDamageOutOrderMutation, SubmitDamageOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitDamageOutOrderMutation, SubmitDamageOutOrderMutationVariables>(SubmitDamageOutOrderDocument, options);
      }
export type SubmitDamageOutOrderMutationHookResult = ReturnType<typeof useSubmitDamageOutOrderMutation>;
export type SubmitDamageOutOrderMutationResult = Apollo.MutationResult<SubmitDamageOutOrderMutation>;
export type SubmitDamageOutOrderMutationOptions = Apollo.BaseMutationOptions<SubmitDamageOutOrderMutation, SubmitDamageOutOrderMutationVariables>;
export const CancelDamageOutOrderDocument = gql`
    mutation cancelDamageOutOrder($damageOutIDInput: DamageOutIDInput) {
  cancelDamageOutOrder(damageOutIDInput: $damageOutIDInput)
}
    `;
export type CancelDamageOutOrderMutationFn = Apollo.MutationFunction<CancelDamageOutOrderMutation, CancelDamageOutOrderMutationVariables>;

/**
 * __useCancelDamageOutOrderMutation__
 *
 * To run a mutation, you first call `useCancelDamageOutOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelDamageOutOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelDamageOutOrderMutation, { data, loading, error }] = useCancelDamageOutOrderMutation({
 *   variables: {
 *      damageOutIDInput: // value for 'damageOutIDInput'
 *   },
 * });
 */
export function useCancelDamageOutOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelDamageOutOrderMutation, CancelDamageOutOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelDamageOutOrderMutation, CancelDamageOutOrderMutationVariables>(CancelDamageOutOrderDocument, options);
      }
export type CancelDamageOutOrderMutationHookResult = ReturnType<typeof useCancelDamageOutOrderMutation>;
export type CancelDamageOutOrderMutationResult = Apollo.MutationResult<CancelDamageOutOrderMutation>;
export type CancelDamageOutOrderMutationOptions = Apollo.BaseMutationOptions<CancelDamageOutOrderMutation, CancelDamageOutOrderMutationVariables>;