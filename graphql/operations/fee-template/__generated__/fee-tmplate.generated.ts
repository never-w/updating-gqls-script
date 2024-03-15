import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPitayaTemplateByTriggerConditionQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetTemplateInput>;
}>;


export type GetPitayaTemplateByTriggerConditionQuery = { getPitayaTemplateByTriggerCondition?: { __typename?: 'TemplatePayload', appId?: number, createTime?: number, note?: string, status?: string, tempCode?: string, tempId?: string, tempName?: string, tempType?: string, tenantId?: string, updateTime?: number, version?: number, templateDetailList?: Array<{ __typename?: 'TemplateDetailPayload', amount?: number, businessItemValue?: string, dictItemId?: string, extendTypesList?: Array<number>, partCostCalculate?: number, repeatUse?: number, requiredField?: number, costRule?: { __typename?: 'CostRulePayload', calculateRule?: string, calculateType?: string, costId?: string, costName?: string, note?: string, ruleCode?: string, ruleId?: string, ruleName?: string, showField?: string, status?: string, tenantId?: string, version?: number, fieldList?: Array<{ __typename?: 'FieldPayload', data?: string, dataSourceList?: Array<string>, dataType?: string, decimalPlaces?: number, fieldId?: string, fieldKey?: string, fieldName?: string, fieldType?: string, isInteger?: number, note?: string, required?: number }> } }> } };

export type GetPitayaTemplateByTempIdQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetTemplateByIdInput>;
}>;


export type GetPitayaTemplateByTempIdQuery = { getPitayaTemplateByTempId?: { __typename?: 'TemplatePayload', appId?: number, createTime?: number, note?: string, status?: string, tempCode?: string, tempId?: string, tempName?: string, tempType?: string, tenantId?: string, updateTime?: number, version?: number, templateDetailList?: Array<{ __typename?: 'TemplateDetailPayload', amount?: number, businessItemValue?: string, dictItemId?: string, extendTypesList?: Array<number>, partCostCalculate?: number, repeatUse?: number, requiredField?: number, costRule?: { __typename?: 'CostRulePayload', calculateRule?: string, calculateType?: string, costId?: string, costName?: string, note?: string, ruleCode?: string, ruleId?: string, ruleName?: string, showField?: string, status?: string, tenantId?: string, version?: number, fieldList?: Array<{ __typename?: 'FieldPayload', data?: string, dataSourceList?: Array<string>, dataType?: string, decimalPlaces?: number, fieldId?: string, fieldKey?: string, fieldName?: string, fieldType?: string, isInteger?: number, note?: string, required?: number }> } }> } };

export type GetBillDictItemQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetBillDictItemInput>;
}>;


export type GetBillDictItemQuery = { getBillDictItem?: Array<{ __typename?: 'BillDictItemPayload', description?: string, dictCode?: string, dictItemId?: string, itemText?: string, itemValue?: string, sort?: number }> };


export const GetPitayaTemplateByTriggerConditionDocument = gql`
    query getPitayaTemplateByTriggerCondition($input: GetTemplateInput) {
  getPitayaTemplateByTriggerCondition(input: $input) {
    appId
    createTime
    note
    status
    tempCode
    tempId
    tempName
    tempType
    templateDetailList {
      amount
      businessItemValue
      costRule {
        calculateRule
        calculateType
        costId
        costName
        fieldList {
          data
          dataSourceList
          dataType
          decimalPlaces
          fieldId
          fieldKey
          fieldName
          fieldType
          isInteger
          note
          required
        }
        note
        ruleCode
        ruleId
        ruleName
        showField
        status
        tenantId
        version
      }
      dictItemId
      extendTypesList
      partCostCalculate
      repeatUse
      requiredField
    }
    tenantId
    updateTime
    version
  }
}
    `;

/**
 * __useGetPitayaTemplateByTriggerConditionQuery__
 *
 * To run a query within a React component, call `useGetPitayaTemplateByTriggerConditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPitayaTemplateByTriggerConditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPitayaTemplateByTriggerConditionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPitayaTemplateByTriggerConditionQuery(baseOptions?: Apollo.QueryHookOptions<GetPitayaTemplateByTriggerConditionQuery, GetPitayaTemplateByTriggerConditionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPitayaTemplateByTriggerConditionQuery, GetPitayaTemplateByTriggerConditionQueryVariables>(GetPitayaTemplateByTriggerConditionDocument, options);
      }
export function useGetPitayaTemplateByTriggerConditionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPitayaTemplateByTriggerConditionQuery, GetPitayaTemplateByTriggerConditionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPitayaTemplateByTriggerConditionQuery, GetPitayaTemplateByTriggerConditionQueryVariables>(GetPitayaTemplateByTriggerConditionDocument, options);
        }
export type GetPitayaTemplateByTriggerConditionQueryHookResult = ReturnType<typeof useGetPitayaTemplateByTriggerConditionQuery>;
export type GetPitayaTemplateByTriggerConditionLazyQueryHookResult = ReturnType<typeof useGetPitayaTemplateByTriggerConditionLazyQuery>;
export type GetPitayaTemplateByTriggerConditionQueryResult = Apollo.QueryResult<GetPitayaTemplateByTriggerConditionQuery, GetPitayaTemplateByTriggerConditionQueryVariables>;
export const GetPitayaTemplateByTempIdDocument = gql`
    query getPitayaTemplateByTempId($input: GetTemplateByIdInput) {
  getPitayaTemplateByTempId(input: $input) {
    appId
    createTime
    note
    status
    tempCode
    tempId
    tempName
    tempType
    templateDetailList {
      amount
      businessItemValue
      costRule {
        calculateRule
        calculateType
        costId
        costName
        fieldList {
          data
          dataSourceList
          dataType
          decimalPlaces
          fieldId
          fieldKey
          fieldName
          fieldType
          isInteger
          note
          required
        }
        note
        ruleCode
        ruleId
        ruleName
        showField
        status
        tenantId
        version
      }
      dictItemId
      extendTypesList
      partCostCalculate
      repeatUse
      requiredField
    }
    tenantId
    updateTime
    version
  }
}
    `;

/**
 * __useGetPitayaTemplateByTempIdQuery__
 *
 * To run a query within a React component, call `useGetPitayaTemplateByTempIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPitayaTemplateByTempIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPitayaTemplateByTempIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPitayaTemplateByTempIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPitayaTemplateByTempIdQuery, GetPitayaTemplateByTempIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPitayaTemplateByTempIdQuery, GetPitayaTemplateByTempIdQueryVariables>(GetPitayaTemplateByTempIdDocument, options);
      }
export function useGetPitayaTemplateByTempIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPitayaTemplateByTempIdQuery, GetPitayaTemplateByTempIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPitayaTemplateByTempIdQuery, GetPitayaTemplateByTempIdQueryVariables>(GetPitayaTemplateByTempIdDocument, options);
        }
export type GetPitayaTemplateByTempIdQueryHookResult = ReturnType<typeof useGetPitayaTemplateByTempIdQuery>;
export type GetPitayaTemplateByTempIdLazyQueryHookResult = ReturnType<typeof useGetPitayaTemplateByTempIdLazyQuery>;
export type GetPitayaTemplateByTempIdQueryResult = Apollo.QueryResult<GetPitayaTemplateByTempIdQuery, GetPitayaTemplateByTempIdQueryVariables>;
export const GetBillDictItemDocument = gql`
    query getBillDictItem($input: GetBillDictItemInput) {
  getBillDictItem(input: $input) {
    description
    dictCode
    dictItemId
    itemText
    itemValue
    sort
  }
}
    `;

/**
 * __useGetBillDictItemQuery__
 *
 * To run a query within a React component, call `useGetBillDictItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBillDictItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBillDictItemQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetBillDictItemQuery(baseOptions?: Apollo.QueryHookOptions<GetBillDictItemQuery, GetBillDictItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBillDictItemQuery, GetBillDictItemQueryVariables>(GetBillDictItemDocument, options);
      }
export function useGetBillDictItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBillDictItemQuery, GetBillDictItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBillDictItemQuery, GetBillDictItemQueryVariables>(GetBillDictItemDocument, options);
        }
export type GetBillDictItemQueryHookResult = ReturnType<typeof useGetBillDictItemQuery>;
export type GetBillDictItemLazyQueryHookResult = ReturnType<typeof useGetBillDictItemLazyQuery>;
export type GetBillDictItemQueryResult = Apollo.QueryResult<GetBillDictItemQuery, GetBillDictItemQueryVariables>;