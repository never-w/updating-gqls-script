import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetProductionQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetProductionInput>;
}>;


export type GetProductionQuery = { getProduction?: { __typename?: 'ProductionControlPayload', taskAnalysis?: { __typename?: 'TaskAnalysisPayload', totalTask?: number, channelStatistics?: Array<{ __typename?: 'ChannelStatisticsPayload', channelName?: string, expectNum?: number, completed?: number, undone?: number }> }, planAnalysis?: { __typename?: 'PlanAnalysisPayload', totalPlan?: number, productionSale?: number, completedSale?: number, undoneSale?: number, productionStock?: number, completedStock?: number, undoneStock?: number, productionSplit?: number, completedSplit?: number, undoneSplit?: number }, commodityAnalysis?: { __typename?: 'CommodityAnalysisPaylaod', commoditySkuTotal?: number, completed?: number, undone?: number, expectProductionTotal?: number, expectSaleTotal?: number, channelStatistics?: Array<{ __typename?: 'ChannelStatisticsPayload', channelName?: string, expectNum?: number, completed?: number, undone?: number, expectSale?: number }> } } };

export type ListLeaderConditionQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetProductionInput>;
}>;


export type ListLeaderConditionQuery = { listLeaderCondition?: Array<{ __typename?: 'LeaderConditionPayload', leaderName?: string, totalTask?: number, completedTask?: number, undoneTask?: number, orderQuantity?: number, completedOrder?: number, undoneOrder?: number }> };

export type ListKeeperConditionQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetProductionInput>;
}>;


export type ListKeeperConditionQuery = { listKeeperCondition?: Array<{ __typename?: 'KeeperConditionPayload', keeperName?: string, inStockTotal?: number, outStockTotal?: number, inStockOperate?: { __typename?: 'CommodityOperatePayload', rawMaterial?: number, assist?: number, product?: number, halfProduct?: number, defective?: number, return?: number, box?: number }, outStockOperate?: { __typename?: 'CommodityOperatePayload', rawMaterial?: number, assist?: number, product?: number, halfProduct?: number, defective?: number, return?: number, box?: number } }> };

export type PageMonitorQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PageMonitorInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageMonitorQuery = { pageMonitor?: { __typename?: 'PageMonitorResult', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'MonitorPayload', customerName?: string, customerDistributionName?: string, taskStatus?: number, taskStatusName?: string, createType?: number, createTypeName?: string, productionCommodity?: string, commodityNum?: number, commodityName?: string, createUserName?: string, completedNum?: number, expectNum?: number, leaderName?: string, line?: number, workTime?: number, taskId?: string, numberActual?: number, tempWorkerQuantity?: number, productionCommodityPayload?: Array<{ __typename?: 'ProductionCommodityPayload', commodityTypeName?: string, commodityName?: string, commoditySpecOptionName?: string, completedNum?: number, expectNum?: number }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type GetMonitorDetailQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.MonitorDetailInput>;
}>;


export type GetMonitorDetailQuery = { getMonitorDetail?: { __typename?: 'MonitorPayload', customerName?: string, customerDistributionName?: string, taskStatus?: number, taskStatusName?: string, createType?: number, createTypeName?: string, productionCommodity?: string, completedNum?: number, expectNum?: number, leaderName?: string, line?: number, workTime?: number, taskId?: string, numberActual?: number, tempWorkerQuantity?: number, commodityNum?: number, commodityName?: string, createUserName?: string, productionCommodityPayload?: Array<{ __typename?: 'ProductionCommodityPayload', planQuantity?: number, commodityType?: number, commodityTypeName?: string, commodityName?: string, commoditySpecOptionName?: string, completedNum?: number, expectNum?: number }>, pickDetail?: Array<{ __typename?: 'ProductionProcessPayload', commodityTypeId?: number, commodityTypeName?: string, commodityName?: string, commodityTextDescription?: Array<string>, applyUnitQuantity?: number, actualUnitQuantity?: number, unitType?: number, unitTypeName?: string, actualTotalQuantity?: number, applyTotalQuantity?: number, totalType?: number, totalTypeName?: string }>, inStockDetail?: Array<{ __typename?: 'ProductionProcessPayload', commodityTypeId?: number, commodityTypeName?: string, commodityName?: string, commodityTextDescription?: Array<string>, applyUnitQuantity?: number, actualUnitQuantity?: number, unitType?: number, unitTypeName?: string, actualTotalQuantity?: number, applyTotalQuantity?: number, totalType?: number, totalTypeName?: string }>, returnDetail?: Array<{ __typename?: 'ProductionProcessPayload', commodityTypeId?: number, commodityTypeName?: string, commodityName?: string, commodityTextDescription?: Array<string>, applyUnitQuantity?: number, actualUnitQuantity?: number, unitType?: number, unitTypeName?: string, actualTotalQuantity?: number, applyTotalQuantity?: number, totalType?: number, totalTypeName?: string }>, taskStockOverview?: { __typename?: 'TaskStockOverviewPayload', acquiredStock?: number, diffStock?: number, productionStock?: number, returnedStock?: number, taskId?: string } } };

export type MonitorStatusOptionQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.MonitorStatusInput>;
}>;


export type MonitorStatusOptionQuery = { monitorStatusOption?: { __typename?: 'MonitorStatusPayload', toBeProduced?: number, inProduction?: number, completed?: number, paused?: number } };


export const GetProductionDocument = gql`
    query getProduction($input: GetProductionInput) {
  getProduction(input: $input) {
    taskAnalysis {
      totalTask
      channelStatistics {
        channelName
        expectNum
        completed
        undone
      }
    }
    planAnalysis {
      totalPlan
      productionSale
      completedSale
      undoneSale
      productionStock
      completedStock
      undoneStock
      productionSplit
      completedSplit
      undoneSplit
    }
    commodityAnalysis {
      commoditySkuTotal
      completed
      undone
      channelStatistics {
        channelName
        expectNum
        completed
        undone
        expectSale
      }
      expectProductionTotal
      expectSaleTotal
    }
  }
}
    `;

/**
 * __useGetProductionQuery__
 *
 * To run a query within a React component, call `useGetProductionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetProductionQuery(baseOptions?: Apollo.QueryHookOptions<GetProductionQuery, GetProductionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductionQuery, GetProductionQueryVariables>(GetProductionDocument, options);
      }
export function useGetProductionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductionQuery, GetProductionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductionQuery, GetProductionQueryVariables>(GetProductionDocument, options);
        }
export type GetProductionQueryHookResult = ReturnType<typeof useGetProductionQuery>;
export type GetProductionLazyQueryHookResult = ReturnType<typeof useGetProductionLazyQuery>;
export type GetProductionQueryResult = Apollo.QueryResult<GetProductionQuery, GetProductionQueryVariables>;
export const ListLeaderConditionDocument = gql`
    query listLeaderCondition($input: GetProductionInput) {
  listLeaderCondition(input: $input) {
    leaderName
    totalTask
    completedTask
    undoneTask
    orderQuantity
    completedOrder
    undoneOrder
  }
}
    `;

/**
 * __useListLeaderConditionQuery__
 *
 * To run a query within a React component, call `useListLeaderConditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListLeaderConditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListLeaderConditionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListLeaderConditionQuery(baseOptions?: Apollo.QueryHookOptions<ListLeaderConditionQuery, ListLeaderConditionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListLeaderConditionQuery, ListLeaderConditionQueryVariables>(ListLeaderConditionDocument, options);
      }
export function useListLeaderConditionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListLeaderConditionQuery, ListLeaderConditionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListLeaderConditionQuery, ListLeaderConditionQueryVariables>(ListLeaderConditionDocument, options);
        }
export type ListLeaderConditionQueryHookResult = ReturnType<typeof useListLeaderConditionQuery>;
export type ListLeaderConditionLazyQueryHookResult = ReturnType<typeof useListLeaderConditionLazyQuery>;
export type ListLeaderConditionQueryResult = Apollo.QueryResult<ListLeaderConditionQuery, ListLeaderConditionQueryVariables>;
export const ListKeeperConditionDocument = gql`
    query listKeeperCondition($input: GetProductionInput) {
  listKeeperCondition(input: $input) {
    keeperName
    inStockTotal
    inStockOperate {
      rawMaterial
      assist
      product
      halfProduct
      defective
      return
      box
    }
    outStockTotal
    outStockOperate {
      rawMaterial
      assist
      product
      halfProduct
      defective
      return
      box
    }
  }
}
    `;

/**
 * __useListKeeperConditionQuery__
 *
 * To run a query within a React component, call `useListKeeperConditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListKeeperConditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListKeeperConditionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListKeeperConditionQuery(baseOptions?: Apollo.QueryHookOptions<ListKeeperConditionQuery, ListKeeperConditionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListKeeperConditionQuery, ListKeeperConditionQueryVariables>(ListKeeperConditionDocument, options);
      }
export function useListKeeperConditionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListKeeperConditionQuery, ListKeeperConditionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListKeeperConditionQuery, ListKeeperConditionQueryVariables>(ListKeeperConditionDocument, options);
        }
export type ListKeeperConditionQueryHookResult = ReturnType<typeof useListKeeperConditionQuery>;
export type ListKeeperConditionLazyQueryHookResult = ReturnType<typeof useListKeeperConditionLazyQuery>;
export type ListKeeperConditionQueryResult = Apollo.QueryResult<ListKeeperConditionQuery, ListKeeperConditionQueryVariables>;
export const PageMonitorDocument = gql`
    query pageMonitor($input: PageMonitorInput, $page: Page) {
  pageMonitor(input: $input, page: $page) {
    records {
      customerName
      customerDistributionName
      taskStatus
      taskStatusName
      createType
      createTypeName
      productionCommodity
      commodityNum
      commodityName
      createUserName
      completedNum
      expectNum
      leaderName
      line
      workTime
      taskId
      numberActual
      tempWorkerQuantity
      productionCommodityPayload {
        commodityTypeName
        commodityName
        commoditySpecOptionName
        completedNum
        expectNum
      }
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
 * __usePageMonitorQuery__
 *
 * To run a query within a React component, call `usePageMonitorQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageMonitorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageMonitorQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageMonitorQuery(baseOptions?: Apollo.QueryHookOptions<PageMonitorQuery, PageMonitorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageMonitorQuery, PageMonitorQueryVariables>(PageMonitorDocument, options);
      }
export function usePageMonitorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageMonitorQuery, PageMonitorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageMonitorQuery, PageMonitorQueryVariables>(PageMonitorDocument, options);
        }
export type PageMonitorQueryHookResult = ReturnType<typeof usePageMonitorQuery>;
export type PageMonitorLazyQueryHookResult = ReturnType<typeof usePageMonitorLazyQuery>;
export type PageMonitorQueryResult = Apollo.QueryResult<PageMonitorQuery, PageMonitorQueryVariables>;
export const GetMonitorDetailDocument = gql`
    query getMonitorDetail($input: MonitorDetailInput) {
  getMonitorDetail(input: $input) {
    customerName
    customerDistributionName
    taskStatus
    taskStatusName
    createType
    createTypeName
    productionCommodity
    completedNum
    expectNum
    leaderName
    line
    workTime
    taskId
    numberActual
    tempWorkerQuantity
    commodityNum
    commodityName
    createUserName
    productionCommodityPayload {
      planQuantity
      commodityType
      commodityTypeName
      commodityName
      commoditySpecOptionName
      completedNum
      expectNum
    }
    pickDetail {
      commodityTypeId
      commodityTypeName
      commodityName
      commodityTextDescription
      applyUnitQuantity
      actualUnitQuantity
      unitType
      unitTypeName
      actualTotalQuantity
      applyTotalQuantity
      totalType
      totalTypeName
    }
    inStockDetail {
      commodityTypeId
      commodityTypeName
      commodityName
      commodityTextDescription
      applyUnitQuantity
      actualUnitQuantity
      unitType
      unitTypeName
      actualTotalQuantity
      applyTotalQuantity
      totalType
      totalTypeName
    }
    returnDetail {
      commodityTypeId
      commodityTypeName
      commodityName
      commodityTextDescription
      applyUnitQuantity
      actualUnitQuantity
      unitType
      unitTypeName
      actualTotalQuantity
      applyTotalQuantity
      totalType
      totalTypeName
    }
    taskStockOverview {
      acquiredStock
      diffStock
      productionStock
      returnedStock
      taskId
    }
  }
}
    `;

/**
 * __useGetMonitorDetailQuery__
 *
 * To run a query within a React component, call `useGetMonitorDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMonitorDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMonitorDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMonitorDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetMonitorDetailQuery, GetMonitorDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMonitorDetailQuery, GetMonitorDetailQueryVariables>(GetMonitorDetailDocument, options);
      }
export function useGetMonitorDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMonitorDetailQuery, GetMonitorDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMonitorDetailQuery, GetMonitorDetailQueryVariables>(GetMonitorDetailDocument, options);
        }
export type GetMonitorDetailQueryHookResult = ReturnType<typeof useGetMonitorDetailQuery>;
export type GetMonitorDetailLazyQueryHookResult = ReturnType<typeof useGetMonitorDetailLazyQuery>;
export type GetMonitorDetailQueryResult = Apollo.QueryResult<GetMonitorDetailQuery, GetMonitorDetailQueryVariables>;
export const MonitorStatusOptionDocument = gql`
    query monitorStatusOption($input: MonitorStatusInput) {
  monitorStatusOption(input: $input) {
    toBeProduced
    inProduction
    completed
    paused
  }
}
    `;

/**
 * __useMonitorStatusOptionQuery__
 *
 * To run a query within a React component, call `useMonitorStatusOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMonitorStatusOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMonitorStatusOptionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMonitorStatusOptionQuery(baseOptions?: Apollo.QueryHookOptions<MonitorStatusOptionQuery, MonitorStatusOptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MonitorStatusOptionQuery, MonitorStatusOptionQueryVariables>(MonitorStatusOptionDocument, options);
      }
export function useMonitorStatusOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MonitorStatusOptionQuery, MonitorStatusOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MonitorStatusOptionQuery, MonitorStatusOptionQueryVariables>(MonitorStatusOptionDocument, options);
        }
export type MonitorStatusOptionQueryHookResult = ReturnType<typeof useMonitorStatusOptionQuery>;
export type MonitorStatusOptionLazyQueryHookResult = ReturnType<typeof useMonitorStatusOptionLazyQuery>;
export type MonitorStatusOptionQueryResult = Apollo.QueryResult<MonitorStatusOptionQuery, MonitorStatusOptionQueryVariables>;