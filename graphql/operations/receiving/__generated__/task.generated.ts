import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PagePitayaDomesticReceiveTaskQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PagePitayaDomesticReceiveTaskInput;
  page: SchemaTypes.Page;
}>;


export type PagePitayaDomesticReceiveTaskQuery = { pagePitayaDomesticReceiveTask?: { __typename?: 'PagePitayaDomesticReceiveTaskPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PitayaDomesticReceiveTaskPayload', carNo?: string, canOperationTask?: boolean, departureDate?: number, domesticReceiveTaskId?: string, durianBusinessId?: string, estimatedArrivalDate?: number, matchDate?: number, matchSourceName?: string, runCode?: string, sopList?: Array<string>, status?: SchemaTypes.PitayaDomesticReceiveTaskEnum, statusDesc?: string, trailerNo?: string, transportInfo?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodities?: Array<{ __typename?: 'OmsCommonCommodityItem', id?: string, index?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, price?: number, runCode?: string, totalQuantity?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }> } };

export type PitayaDomesticReceiveTaskQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.GetPitayaDomesticReceiveTaskInput;
}>;


export type PitayaDomesticReceiveTaskQuery = { pitayaDomesticReceiveTask?: { __typename?: 'PitayaDomesticReceiveTaskPayload', carNo?: string, canOperationTask?: boolean, departureDate?: number, domesticReceiveTaskId?: string, durianBusinessId?: string, estimatedArrivalDate?: number, matchDate?: number, matchSourceName?: string, runCode?: string, sopList?: Array<string>, status?: SchemaTypes.PitayaDomesticReceiveTaskEnum, statusDesc?: string, trailerNo?: string, transportInfo?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, commodities?: Array<{ __typename?: 'OmsCommonCommodityItem', id?: string, index?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, price?: number, runCode?: string, totalQuantity?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> } };

export type CompletePitayaDomesticReceiveTaskMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CompletePitayaDomesticReceiveTaskInput;
}>;


export type CompletePitayaDomesticReceiveTaskMutation = { completePitayaDomesticReceiveTask?: boolean };

export type ReceivingQuantityQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ReceiptQuantityInput>;
}>;


export type ReceivingQuantityQuery = { countPitayaDomesticReceiveTask?: number, countPitayaReceiveTask?: number, receiptQuantity?: { __typename?: 'ReceiptQuantityPayload', finishedTotal?: number, totalTodoQuantity?: number, waitAcceptanceTotal?: number, waitEmptyCabinetTotal?: number } };

export type CountPitayaReceiveTaskQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type CountPitayaReceiveTaskQuery = { countPitayaReceiveTask?: number };

export type PagePitayaReceiveTaskQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PagePitayaReceiveTaskInput;
  page: SchemaTypes.Page;
}>;


export type PagePitayaReceiveTaskQuery = { pagePitayaReceiveTask?: { __typename?: 'PagePitayaReceiveTaskPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PitayaReceiveTaskPayload', canOperationTask?: boolean, id?: string, purchaseCode?: string, purchaseDate?: number, purchaseId?: string, receiveTaskStatus?: SchemaTypes.PitayaReceiveTaskStatusEnum, runCode?: string, saleNote?: string, sopList?: Array<string>, sopType?: number, sopTypeDesc?: string, carNo?: string, completeDate?: number, driverPhone?: string, saleOrderCode?: string, receiveTaskStatusDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, saleUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, categoryList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }>, commodities?: Array<{ __typename?: 'OmsCommonCommodityItem', id?: string, index?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, price?: number, runCode?: string, totalQuantity?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, completeUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, saleOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, matchedSopList?: Array<{ __typename?: 'PitayaSopInfo', sopDesc?: string, sopId?: string, sopName?: string }> }> } };

export type PitayaReceiveTaskQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.GetPitayaReceiveTaskInput;
}>;


export type PitayaReceiveTaskQuery = { pitayaReceiveTask?: { __typename?: 'PitayaReceiveTaskPayload', canOperationTask?: boolean, carNo?: string, completeDate?: number, driverPhone?: string, id?: string, purchaseCode?: string, purchaseDate?: number, purchaseId?: string, receiveTaskStatus?: SchemaTypes.PitayaReceiveTaskStatusEnum, runCode?: string, saleNote?: string, saleOrderCode?: string, sopList?: Array<string>, sopType?: number, sopTypeDesc?: string, fileUpdateTime?: number, receiveTaskStatusDesc?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, completeUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, saleOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, saleUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, categoryList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }>, commodities?: Array<{ __typename?: 'OmsCommonCommodityItem', id?: string, index?: string, markList?: Array<SchemaTypes.AcquireMarkEnum>, price?: number, runCode?: string, totalQuantity?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, matchedSopList?: Array<{ __typename?: 'PitayaSopInfo', sopDesc?: string, sopId?: string, sopName?: string }>, fileInfoList?: Array<{ __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number }> } };

export type CompletePitayaReceiveTaskMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CompletePitayaReceiveTaskInput;
}>;


export type CompletePitayaReceiveTaskMutation = { completePitayaReceiveTask?: boolean };

export type UpdatePitayaReceiveTaskResultMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdatePitayaReceiveTaskResultInput;
}>;


export type UpdatePitayaReceiveTaskResultMutation = { updatePitayaReceiveTaskResult?: boolean };


export const PagePitayaDomesticReceiveTaskDocument = gql`
    query pagePitayaDomesticReceiveTask($input: PagePitayaDomesticReceiveTaskInput!, $page: Page!) {
  pagePitayaDomesticReceiveTask(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      carNo
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
        id
        index
        markList
        price
        priceType {
          unitId
          unitName
        }
        runCode
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
      }
      canOperationTask
      departureDate
      domesticReceiveTaskId
      durianBusinessId
      estimatedArrivalDate
      matchDate
      matchSourceName
      runCode
      sopList
      status
      statusDesc
      trailerNo
      transportInfo
    }
    totalRecords
  }
}
    `;

/**
 * __usePagePitayaDomesticReceiveTaskQuery__
 *
 * To run a query within a React component, call `usePagePitayaDomesticReceiveTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagePitayaDomesticReceiveTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagePitayaDomesticReceiveTaskQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePagePitayaDomesticReceiveTaskQuery(baseOptions: Apollo.QueryHookOptions<PagePitayaDomesticReceiveTaskQuery, PagePitayaDomesticReceiveTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagePitayaDomesticReceiveTaskQuery, PagePitayaDomesticReceiveTaskQueryVariables>(PagePitayaDomesticReceiveTaskDocument, options);
      }
export function usePagePitayaDomesticReceiveTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagePitayaDomesticReceiveTaskQuery, PagePitayaDomesticReceiveTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagePitayaDomesticReceiveTaskQuery, PagePitayaDomesticReceiveTaskQueryVariables>(PagePitayaDomesticReceiveTaskDocument, options);
        }
export type PagePitayaDomesticReceiveTaskQueryHookResult = ReturnType<typeof usePagePitayaDomesticReceiveTaskQuery>;
export type PagePitayaDomesticReceiveTaskLazyQueryHookResult = ReturnType<typeof usePagePitayaDomesticReceiveTaskLazyQuery>;
export type PagePitayaDomesticReceiveTaskQueryResult = Apollo.QueryResult<PagePitayaDomesticReceiveTaskQuery, PagePitayaDomesticReceiveTaskQueryVariables>;
export const PitayaDomesticReceiveTaskDocument = gql`
    query pitayaDomesticReceiveTask($input: GetPitayaDomesticReceiveTaskInput!) {
  pitayaDomesticReceiveTask(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    carNo
    canOperationTask
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
      id
      index
      markList
      price
      priceType {
        unitId
        unitName
      }
      runCode
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
    }
    departureDate
    domesticReceiveTaskId
    durianBusinessId
    estimatedArrivalDate
    matchDate
    matchSourceName
    runCode
    sopList
    status
    statusDesc
    trailerNo
    transportInfo
  }
}
    `;

/**
 * __usePitayaDomesticReceiveTaskQuery__
 *
 * To run a query within a React component, call `usePitayaDomesticReceiveTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaDomesticReceiveTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaDomesticReceiveTaskQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaDomesticReceiveTaskQuery(baseOptions: Apollo.QueryHookOptions<PitayaDomesticReceiveTaskQuery, PitayaDomesticReceiveTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaDomesticReceiveTaskQuery, PitayaDomesticReceiveTaskQueryVariables>(PitayaDomesticReceiveTaskDocument, options);
      }
export function usePitayaDomesticReceiveTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaDomesticReceiveTaskQuery, PitayaDomesticReceiveTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaDomesticReceiveTaskQuery, PitayaDomesticReceiveTaskQueryVariables>(PitayaDomesticReceiveTaskDocument, options);
        }
export type PitayaDomesticReceiveTaskQueryHookResult = ReturnType<typeof usePitayaDomesticReceiveTaskQuery>;
export type PitayaDomesticReceiveTaskLazyQueryHookResult = ReturnType<typeof usePitayaDomesticReceiveTaskLazyQuery>;
export type PitayaDomesticReceiveTaskQueryResult = Apollo.QueryResult<PitayaDomesticReceiveTaskQuery, PitayaDomesticReceiveTaskQueryVariables>;
export const CompletePitayaDomesticReceiveTaskDocument = gql`
    mutation completePitayaDomesticReceiveTask($input: CompletePitayaDomesticReceiveTaskInput!) {
  completePitayaDomesticReceiveTask(input: $input)
}
    `;
export type CompletePitayaDomesticReceiveTaskMutationFn = Apollo.MutationFunction<CompletePitayaDomesticReceiveTaskMutation, CompletePitayaDomesticReceiveTaskMutationVariables>;

/**
 * __useCompletePitayaDomesticReceiveTaskMutation__
 *
 * To run a mutation, you first call `useCompletePitayaDomesticReceiveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompletePitayaDomesticReceiveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completePitayaDomesticReceiveTaskMutation, { data, loading, error }] = useCompletePitayaDomesticReceiveTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCompletePitayaDomesticReceiveTaskMutation(baseOptions?: Apollo.MutationHookOptions<CompletePitayaDomesticReceiveTaskMutation, CompletePitayaDomesticReceiveTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompletePitayaDomesticReceiveTaskMutation, CompletePitayaDomesticReceiveTaskMutationVariables>(CompletePitayaDomesticReceiveTaskDocument, options);
      }
export type CompletePitayaDomesticReceiveTaskMutationHookResult = ReturnType<typeof useCompletePitayaDomesticReceiveTaskMutation>;
export type CompletePitayaDomesticReceiveTaskMutationResult = Apollo.MutationResult<CompletePitayaDomesticReceiveTaskMutation>;
export type CompletePitayaDomesticReceiveTaskMutationOptions = Apollo.BaseMutationOptions<CompletePitayaDomesticReceiveTaskMutation, CompletePitayaDomesticReceiveTaskMutationVariables>;
export const ReceivingQuantityDocument = gql`
    query receivingQuantity($input: ReceiptQuantityInput) {
  receiptQuantity(input: $input) {
    finishedTotal
    totalTodoQuantity
    waitAcceptanceTotal
    waitEmptyCabinetTotal
  }
  countPitayaDomesticReceiveTask
  countPitayaReceiveTask
}
    `;

/**
 * __useReceivingQuantityQuery__
 *
 * To run a query within a React component, call `useReceivingQuantityQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceivingQuantityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceivingQuantityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReceivingQuantityQuery(baseOptions?: Apollo.QueryHookOptions<ReceivingQuantityQuery, ReceivingQuantityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReceivingQuantityQuery, ReceivingQuantityQueryVariables>(ReceivingQuantityDocument, options);
      }
export function useReceivingQuantityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceivingQuantityQuery, ReceivingQuantityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReceivingQuantityQuery, ReceivingQuantityQueryVariables>(ReceivingQuantityDocument, options);
        }
export type ReceivingQuantityQueryHookResult = ReturnType<typeof useReceivingQuantityQuery>;
export type ReceivingQuantityLazyQueryHookResult = ReturnType<typeof useReceivingQuantityLazyQuery>;
export type ReceivingQuantityQueryResult = Apollo.QueryResult<ReceivingQuantityQuery, ReceivingQuantityQueryVariables>;
export const CountPitayaReceiveTaskDocument = gql`
    query countPitayaReceiveTask {
  countPitayaReceiveTask
}
    `;

/**
 * __useCountPitayaReceiveTaskQuery__
 *
 * To run a query within a React component, call `useCountPitayaReceiveTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPitayaReceiveTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPitayaReceiveTaskQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountPitayaReceiveTaskQuery(baseOptions?: Apollo.QueryHookOptions<CountPitayaReceiveTaskQuery, CountPitayaReceiveTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountPitayaReceiveTaskQuery, CountPitayaReceiveTaskQueryVariables>(CountPitayaReceiveTaskDocument, options);
      }
export function useCountPitayaReceiveTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountPitayaReceiveTaskQuery, CountPitayaReceiveTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountPitayaReceiveTaskQuery, CountPitayaReceiveTaskQueryVariables>(CountPitayaReceiveTaskDocument, options);
        }
export type CountPitayaReceiveTaskQueryHookResult = ReturnType<typeof useCountPitayaReceiveTaskQuery>;
export type CountPitayaReceiveTaskLazyQueryHookResult = ReturnType<typeof useCountPitayaReceiveTaskLazyQuery>;
export type CountPitayaReceiveTaskQueryResult = Apollo.QueryResult<CountPitayaReceiveTaskQuery, CountPitayaReceiveTaskQueryVariables>;
export const PagePitayaReceiveTaskDocument = gql`
    query pagePitayaReceiveTask($input: PagePitayaReceiveTaskInput!, $page: Page!) {
  pagePitayaReceiveTask(input: $input, page: $page) {
    pageCurrent
    pageSize
    totalRecords
    records {
      belongOrg {
        orgId
        orgName
      }
      saleUser {
        phoneNum
        userId
        userName
      }
      supplier {
        supplierId
        supplierName
      }
      canOperationTask
      categoryList {
        categoryId
        categoryName
      }
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
        id
        index
        markList
        price
        runCode
        totalQuantity
        unitQuantity
      }
      id
      purchaseCode
      purchaseDate
      purchaseId
      receiveTaskStatus
      runCode
      saleNote
      sopList
      sopType
      sopTypeDesc
      completeUser {
        phoneNum
        userId
        userName
      }
      org {
        orgId
        orgName
      }
      saleOrg {
        orgId
        orgName
      }
      carNo
      completeDate
      driverPhone
      matchedSopList {
        sopDesc
        sopId
        sopName
      }
      saleOrderCode
      receiveTaskStatusDesc
    }
  }
}
    `;

/**
 * __usePagePitayaReceiveTaskQuery__
 *
 * To run a query within a React component, call `usePagePitayaReceiveTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagePitayaReceiveTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagePitayaReceiveTaskQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePagePitayaReceiveTaskQuery(baseOptions: Apollo.QueryHookOptions<PagePitayaReceiveTaskQuery, PagePitayaReceiveTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagePitayaReceiveTaskQuery, PagePitayaReceiveTaskQueryVariables>(PagePitayaReceiveTaskDocument, options);
      }
export function usePagePitayaReceiveTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagePitayaReceiveTaskQuery, PagePitayaReceiveTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagePitayaReceiveTaskQuery, PagePitayaReceiveTaskQueryVariables>(PagePitayaReceiveTaskDocument, options);
        }
export type PagePitayaReceiveTaskQueryHookResult = ReturnType<typeof usePagePitayaReceiveTaskQuery>;
export type PagePitayaReceiveTaskLazyQueryHookResult = ReturnType<typeof usePagePitayaReceiveTaskLazyQuery>;
export type PagePitayaReceiveTaskQueryResult = Apollo.QueryResult<PagePitayaReceiveTaskQuery, PagePitayaReceiveTaskQueryVariables>;
export const PitayaReceiveTaskDocument = gql`
    query pitayaReceiveTask($input: GetPitayaReceiveTaskInput!) {
  pitayaReceiveTask(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    completeUser {
      phoneNum
      userId
      userName
    }
    org {
      orgId
      orgName
    }
    saleOrg {
      orgId
      orgName
    }
    saleUser {
      phoneNum
      userId
      userName
    }
    supplier {
      supplierId
      supplierName
    }
    canOperationTask
    carNo
    categoryList {
      categoryId
      categoryName
    }
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
      id
      index
      markList
      price
      runCode
      totalQuantity
      unitQuantity
    }
    completeDate
    driverPhone
    id
    matchedSopList {
      sopDesc
      sopId
      sopName
    }
    purchaseCode
    purchaseDate
    purchaseId
    receiveTaskStatus
    runCode
    saleNote
    saleOrderCode
    sopList
    sopType
    sopTypeDesc
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
    fileUpdateTime
    receiveTaskStatusDesc
  }
}
    `;

/**
 * __usePitayaReceiveTaskQuery__
 *
 * To run a query within a React component, call `usePitayaReceiveTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaReceiveTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaReceiveTaskQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaReceiveTaskQuery(baseOptions: Apollo.QueryHookOptions<PitayaReceiveTaskQuery, PitayaReceiveTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaReceiveTaskQuery, PitayaReceiveTaskQueryVariables>(PitayaReceiveTaskDocument, options);
      }
export function usePitayaReceiveTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaReceiveTaskQuery, PitayaReceiveTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaReceiveTaskQuery, PitayaReceiveTaskQueryVariables>(PitayaReceiveTaskDocument, options);
        }
export type PitayaReceiveTaskQueryHookResult = ReturnType<typeof usePitayaReceiveTaskQuery>;
export type PitayaReceiveTaskLazyQueryHookResult = ReturnType<typeof usePitayaReceiveTaskLazyQuery>;
export type PitayaReceiveTaskQueryResult = Apollo.QueryResult<PitayaReceiveTaskQuery, PitayaReceiveTaskQueryVariables>;
export const CompletePitayaReceiveTaskDocument = gql`
    mutation completePitayaReceiveTask($input: CompletePitayaReceiveTaskInput!) {
  completePitayaReceiveTask(input: $input)
}
    `;
export type CompletePitayaReceiveTaskMutationFn = Apollo.MutationFunction<CompletePitayaReceiveTaskMutation, CompletePitayaReceiveTaskMutationVariables>;

/**
 * __useCompletePitayaReceiveTaskMutation__
 *
 * To run a mutation, you first call `useCompletePitayaReceiveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompletePitayaReceiveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completePitayaReceiveTaskMutation, { data, loading, error }] = useCompletePitayaReceiveTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCompletePitayaReceiveTaskMutation(baseOptions?: Apollo.MutationHookOptions<CompletePitayaReceiveTaskMutation, CompletePitayaReceiveTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompletePitayaReceiveTaskMutation, CompletePitayaReceiveTaskMutationVariables>(CompletePitayaReceiveTaskDocument, options);
      }
export type CompletePitayaReceiveTaskMutationHookResult = ReturnType<typeof useCompletePitayaReceiveTaskMutation>;
export type CompletePitayaReceiveTaskMutationResult = Apollo.MutationResult<CompletePitayaReceiveTaskMutation>;
export type CompletePitayaReceiveTaskMutationOptions = Apollo.BaseMutationOptions<CompletePitayaReceiveTaskMutation, CompletePitayaReceiveTaskMutationVariables>;
export const UpdatePitayaReceiveTaskResultDocument = gql`
    mutation updatePitayaReceiveTaskResult($input: UpdatePitayaReceiveTaskResultInput!) {
  updatePitayaReceiveTaskResult(input: $input)
}
    `;
export type UpdatePitayaReceiveTaskResultMutationFn = Apollo.MutationFunction<UpdatePitayaReceiveTaskResultMutation, UpdatePitayaReceiveTaskResultMutationVariables>;

/**
 * __useUpdatePitayaReceiveTaskResultMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaReceiveTaskResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaReceiveTaskResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaReceiveTaskResultMutation, { data, loading, error }] = useUpdatePitayaReceiveTaskResultMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaReceiveTaskResultMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaReceiveTaskResultMutation, UpdatePitayaReceiveTaskResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaReceiveTaskResultMutation, UpdatePitayaReceiveTaskResultMutationVariables>(UpdatePitayaReceiveTaskResultDocument, options);
      }
export type UpdatePitayaReceiveTaskResultMutationHookResult = ReturnType<typeof useUpdatePitayaReceiveTaskResultMutation>;
export type UpdatePitayaReceiveTaskResultMutationResult = Apollo.MutationResult<UpdatePitayaReceiveTaskResultMutation>;
export type UpdatePitayaReceiveTaskResultMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaReceiveTaskResultMutation, UpdatePitayaReceiveTaskResultMutationVariables>;