import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PurchaseReturnCommoditiesQueryVariables = SchemaTypes.Exact<{
  purchaseReturnCommoditiesInput?: SchemaTypes.InputMaybe<SchemaTypes.PurchaseReturnCommoditiesInput>;
}>;


export type PurchaseReturnCommoditiesQuery = { purchaseReturnCommodities?: Array<{ __typename?: 'CommoditySkuStock', amount?: number, canApply?: boolean, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, inBoundQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, stockQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, unitPrice?: { __typename?: 'UnitQuantity', quantity?: number, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, returnableQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } }> };

export type PagePurchaseReturnQueryVariables = SchemaTypes.Exact<{
  pagePurchaseReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.PagePurchaseReturnInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PagePurchaseReturnQuery = { pagePurchaseReturn?: { __typename?: 'PagePurchaseReturnPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PurchaseReturnPayload', returnId?: string, returnType?: SchemaTypes.PitayaPurchaseReturnsType, returnTypeName?: string, status?: SchemaTypes.PurchaseStatus, statusName?: string, applyCode?: string, note?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, billId?: string, returnCode?: string, applyBillId?: string, manualCode?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, returnsCommodityRespList?: Array<{ __typename?: 'ReturnsCommodityPayload', returnId?: string, unitQuantity?: number, totalQuantity?: number, unitPrice?: number, totalPrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitPriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, finishedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnsStockQuantity?: { __typename?: 'ReturnsQuantity', returnableQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, inBoundQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } } }>, returnOtherRespList?: Array<{ __typename?: 'ReturnOtherPayload', costId?: string, ruleId?: string, note?: string, amount?: number, data?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, flowLogs?: Array<{ __typename?: 'FlowLog', type?: number, typeName?: string, note?: string, createTime?: number, createBy?: number, createUserName?: string, flowId?: string }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } }> } };

export type GetPurchaseReturnQueryVariables = SchemaTypes.Exact<{
  getPurchaseReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.GetPurchaseReturnInput>;
}>;


export type GetPurchaseReturnQuery = { getPurchaseReturn?: { __typename?: 'PurchaseReturnPayload', returnId?: string, returnType?: SchemaTypes.PitayaPurchaseReturnsType, returnTypeName?: string, status?: SchemaTypes.PurchaseStatus, statusName?: string, applyCode?: string, applyId?: string, note?: string, commodityType?: number, commodityTypeName?: string, createTime?: number, billId?: string, returnCode?: string, applyBillId?: string, manualCode?: string, templateId?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, user?: { __typename?: 'User', userId?: number, userName?: string, phoneNum?: string }, returnsCommodityRespList?: Array<{ __typename?: 'ReturnsCommodityPayload', returnId?: string, unitQuantity?: number, totalQuantity?: number, unitPrice?: number, totalPrice?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', commoditySkuId?: number, commoditySkuName?: string, commodityId?: number, commodityName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitPriceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, finishedQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, returnsStockQuantity?: { __typename?: 'ReturnsQuantity', returnableQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number }, inBoundQuantity?: { __typename?: 'Quantity', unitQuantity?: number, totalQuantity?: number } } }>, returnOtherRespList?: Array<{ __typename?: 'ReturnOtherPayload', costId?: string, ruleId?: string, note?: string, amount?: number, data?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }>, flowLogs?: Array<{ __typename?: 'FlowLog', type?: number, typeName?: string, note?: string, createTime?: number, createBy?: number, createUserName?: string, flowId?: string }>, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string } } };

export type ReturnStatusStatisticQueryVariables = SchemaTypes.Exact<{
  returnStatusStatisticInput?: SchemaTypes.InputMaybe<SchemaTypes.ReturnStatusStatisticInput>;
}>;


export type ReturnStatusStatisticQuery = { returnStatusStatistic?: { __typename?: 'ReturnStatusStatisticPayload', waitSubmitCount?: number, waitProcessedCount?: number, completeCount?: number, cancelCount?: number } };

export type CreatePurchaseReturnMutationVariables = SchemaTypes.Exact<{
  purchaseReturnInsertInput?: SchemaTypes.InputMaybe<SchemaTypes.PurchaseReturnInsertInput>;
}>;


export type CreatePurchaseReturnMutation = { createPurchaseReturn?: { __typename?: 'PurchaseReturnInsertPayload', id: string } };

export type UpdatePurchaseReturnMutationVariables = SchemaTypes.Exact<{
  updatePurchaseReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdatePurchaseReturnInput>;
}>;


export type UpdatePurchaseReturnMutation = { updatePurchaseReturn?: boolean };

export type CancelPurchaseReturnOrderMutationVariables = SchemaTypes.Exact<{
  cancelPurchaseReturnOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.CancelPurchaseReturnOrderInput>;
}>;


export type CancelPurchaseReturnOrderMutation = { cancelPurchaseReturnOrder?: boolean };

export type SubmitPurchaseReturnOrderMutationVariables = SchemaTypes.Exact<{
  submitPurchaseReturnOrderInput?: SchemaTypes.InputMaybe<SchemaTypes.SubmitPurchaseReturnOrderInput>;
}>;


export type SubmitPurchaseReturnOrderMutation = { submitPurchaseReturnOrder?: boolean };

export type AddStockQuantityMutationVariables = SchemaTypes.Exact<{
  addStockQuantityInput?: SchemaTypes.InputMaybe<SchemaTypes.AddStockQuantityInput>;
}>;


export type AddStockQuantityMutation = { addStockQuantity?: boolean };

export type IndividualPurchaseReturnBadgeQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.IndividualPurchaseReturnBadgeInput>;
}>;


export type IndividualPurchaseReturnBadgeQuery = { individualPurchaseReturnBadge?: { __typename?: 'IndividualPurchaseReturnBadgePayload', completed?: number, toBeDelivered?: number, toBeSubmit?: number } };

export type IndividualPurchaseReturnDetailQueryVariables = SchemaTypes.Exact<{
  returnId: SchemaTypes.Scalars['ID'];
}>;


export type IndividualPurchaseReturnDetailQuery = { individualPurchaseReturnDetail?: { __typename?: 'IndividualPurchaseReturnPayload', billId?: string, freightTotalAmount?: number, remark?: string, returnCode?: string, returnId?: string, returnStatus?: SchemaTypes.ExtendOrderStatus, returnStatusDesc?: string, returnType?: SchemaTypes.ExpandOrderTypeEnum, returnTypeDesc?: string, runCode?: string, purchaseId?: string, historyFlag?: boolean, businessInfo?: { __typename?: 'IndividualPurchaseReturnBusinessInfo', businessType?: SchemaTypes.PitayaBusinessTypeEnum, businessTypeDesc?: string, commodityType?: number, commodityTypeDesc?: string, purchaseCode?: string, purchaseTime?: number, runCode?: string, createTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, createUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }, commodities?: Array<{ __typename?: 'IndividualPurchaseReturnCommodityPayload', amount?: number, canApplyStock?: boolean, index?: string, itemId?: string, markList?: Array<number>, markListDesc?: Array<string>, price?: number, purchaseId?: string, returnAmount?: number, returnId?: string, returnableAmount?: number, pricePosition?: SchemaTypes.PricePositionEnum, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, commodity?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, returnQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, returnableQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, stockInQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number } }>, costItem?: Array<{ __typename?: 'CostItem', amount?: number, costId?: string, costName?: string, data?: string, dictItemId?: string, extendId?: number, note?: string, ruleId?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string } }> } };

export type ListIndividualPurchaseReturnCommodityQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListIndividualPurchaseReturnCommodityInput>;
}>;


export type ListIndividualPurchaseReturnCommodityQuery = { listIndividualPurchaseReturnCommodity?: Array<{ __typename?: 'IndividualPurchaseReturnCommodityPayload', amount?: number, canApplyStock?: boolean, index?: string, itemId?: string, markList?: Array<number>, markListDesc?: Array<string>, price?: number, purchaseId?: string, returnAmount?: number, returnId?: string, returnableAmount?: number, pricePosition?: SchemaTypes.PricePositionEnum, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, commodity?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, returnQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, returnableQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, stockInQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number } }> };

export type PageIndividualPurchaseReturnQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PageIndividualPurchaseReturnInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PageIndividualPurchaseReturnQuery = { pageIndividualPurchaseReturn?: { __typename?: 'PageIndividualPurchaseReturnPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'IndividualPurchaseReturnPayload', billId?: string, freightTotalAmount?: number, remark?: string, returnCode?: string, returnId?: string, returnStatus?: SchemaTypes.ExtendOrderStatus, returnStatusDesc?: string, returnType?: SchemaTypes.ExpandOrderTypeEnum, returnTypeDesc?: string, runCode?: string, businessInfo?: { __typename?: 'IndividualPurchaseReturnBusinessInfo', businessType?: SchemaTypes.PitayaBusinessTypeEnum, businessTypeDesc?: string, commodityType?: number, commodityTypeDesc?: string, purchaseCode?: string, purchaseTime?: number, runCode?: string, createTime?: number, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number }, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string }, createUser?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }, commodities?: Array<{ __typename?: 'IndividualPurchaseReturnCommodityPayload', amount?: number, canApplyStock?: boolean, index?: string, itemId?: string, markList?: Array<number>, markListDesc?: Array<string>, price?: number, purchaseId?: string, returnAmount?: number, returnId?: string, returnableAmount?: number, batchInfo?: { __typename?: 'BatchInfoWithWarehouse', batchCode?: string, batchId?: string, commodityTypeId?: number, commodityTypeName?: string, createTime?: number, totalQuantity?: number, unitQuantity?: number, warehouse?: { __typename?: 'Warehouse', warehouseId?: string, warehouseName?: string } }, commodity?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, returnQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, returnableQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number }, stockInQuantity?: { __typename?: 'Quantity', totalQuantity?: number, unitQuantity?: number } }> }> } };

export type AddSalePurchaseStockQuantityMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.AddSalePurchaseStockQuantityInput>;
}>;


export type AddSalePurchaseStockQuantityMutation = { addSalePurchaseStockQuantity?: boolean };

export type CancelIndividualPurchaseReturnMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CancelIndividualPurchaseReturnInput>;
}>;


export type CancelIndividualPurchaseReturnMutation = { cancelIndividualPurchaseReturn?: boolean };

export type CreateIndividualPurchaseReturnMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreateOrUpdateIndividualPurchaseReturnInput>;
}>;


export type CreateIndividualPurchaseReturnMutation = { createIndividualPurchaseReturn?: string };

export type SubmitIndividualPurchaseReturnMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SubmitIndividualPurchaseReturnInput>;
}>;


export type SubmitIndividualPurchaseReturnMutation = { submitIndividualPurchaseReturn?: boolean };

export type UpdateIndividualPurchaseReturnMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreateOrUpdateIndividualPurchaseReturnInput>;
}>;


export type UpdateIndividualPurchaseReturnMutation = { updateIndividualPurchaseReturn?: boolean };

export type VoidIndividualPurchaseReturnMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.VoidIndividualPurchaseReturnInput>;
}>;


export type VoidIndividualPurchaseReturnMutation = { voidIndividualPurchaseReturn?: boolean };

export type WithdrawIndividualPurchaseReturnMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.WithdrawIndividualPurchaseReturnInput>;
}>;


export type WithdrawIndividualPurchaseReturnMutation = { withdrawIndividualPurchaseReturn?: boolean };


export const PurchaseReturnCommoditiesDocument = gql`
    query purchaseReturnCommodities($purchaseReturnCommoditiesInput: PurchaseReturnCommoditiesInput) {
  purchaseReturnCommodities(
    purchaseReturnCommoditiesInput: $purchaseReturnCommoditiesInput
  ) {
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
    inBoundQuantity {
      unitQuantity
      totalQuantity
    }
    stockQuantity {
      unitQuantity
      totalQuantity
    }
    unitPrice {
      unit {
        unitId
        unitName
      }
      quantity
    }
    amount
    returnableQuantity {
      unitQuantity
      totalQuantity
    }
    canApply
  }
}
    `;

/**
 * __usePurchaseReturnCommoditiesQuery__
 *
 * To run a query within a React component, call `usePurchaseReturnCommoditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePurchaseReturnCommoditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePurchaseReturnCommoditiesQuery({
 *   variables: {
 *      purchaseReturnCommoditiesInput: // value for 'purchaseReturnCommoditiesInput'
 *   },
 * });
 */
export function usePurchaseReturnCommoditiesQuery(baseOptions?: Apollo.QueryHookOptions<PurchaseReturnCommoditiesQuery, PurchaseReturnCommoditiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PurchaseReturnCommoditiesQuery, PurchaseReturnCommoditiesQueryVariables>(PurchaseReturnCommoditiesDocument, options);
      }
export function usePurchaseReturnCommoditiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PurchaseReturnCommoditiesQuery, PurchaseReturnCommoditiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PurchaseReturnCommoditiesQuery, PurchaseReturnCommoditiesQueryVariables>(PurchaseReturnCommoditiesDocument, options);
        }
export type PurchaseReturnCommoditiesQueryHookResult = ReturnType<typeof usePurchaseReturnCommoditiesQuery>;
export type PurchaseReturnCommoditiesLazyQueryHookResult = ReturnType<typeof usePurchaseReturnCommoditiesLazyQuery>;
export type PurchaseReturnCommoditiesQueryResult = Apollo.QueryResult<PurchaseReturnCommoditiesQuery, PurchaseReturnCommoditiesQueryVariables>;
export const PagePurchaseReturnDocument = gql`
    query pagePurchaseReturn($pagePurchaseReturnInput: PagePurchaseReturnInput, $page: Page) {
  pagePurchaseReturn(
    pagePurchaseReturnInput: $pagePurchaseReturnInput
    page: $page
  ) {
    records {
      returnId
      returnType
      returnTypeName
      status
      statusName
      applyCode
      note
      supplier {
        supplierId
        supplierName
      }
      customer {
        customerId
        customerName
        customerType
      }
      warehouse {
        warehouseId
        warehouseName
      }
      commodityType
      commodityTypeName
      user {
        userId
        userName
        phoneNum
      }
      createTime
      returnsCommodityRespList {
        returnId
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
        unitPrice
        totalPrice
        unitPriceType {
          unitId
          unitName
        }
        finishedQuantity {
          unitQuantity
          totalQuantity
        }
        returnsStockQuantity {
          returnableQuantity {
            unitQuantity
            totalQuantity
          }
          inBoundQuantity {
            unitQuantity
            totalQuantity
          }
        }
      }
      returnOtherRespList {
        costId
        ruleId
        note
        amount
        data
        supplier {
          supplierId
          supplierName
        }
      }
      billId
      flowLogs {
        type
        typeName
        note
        createTime
        createBy
        createUserName
        flowId
      }
      returnCode
      applyBillId
      manualCode
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
 * __usePagePurchaseReturnQuery__
 *
 * To run a query within a React component, call `usePagePurchaseReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagePurchaseReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagePurchaseReturnQuery({
 *   variables: {
 *      pagePurchaseReturnInput: // value for 'pagePurchaseReturnInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePagePurchaseReturnQuery(baseOptions?: Apollo.QueryHookOptions<PagePurchaseReturnQuery, PagePurchaseReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagePurchaseReturnQuery, PagePurchaseReturnQueryVariables>(PagePurchaseReturnDocument, options);
      }
export function usePagePurchaseReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagePurchaseReturnQuery, PagePurchaseReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagePurchaseReturnQuery, PagePurchaseReturnQueryVariables>(PagePurchaseReturnDocument, options);
        }
export type PagePurchaseReturnQueryHookResult = ReturnType<typeof usePagePurchaseReturnQuery>;
export type PagePurchaseReturnLazyQueryHookResult = ReturnType<typeof usePagePurchaseReturnLazyQuery>;
export type PagePurchaseReturnQueryResult = Apollo.QueryResult<PagePurchaseReturnQuery, PagePurchaseReturnQueryVariables>;
export const GetPurchaseReturnDocument = gql`
    query getPurchaseReturn($getPurchaseReturnInput: GetPurchaseReturnInput) {
  getPurchaseReturn(getPurchaseReturnInput: $getPurchaseReturnInput) {
    returnId
    returnType
    returnTypeName
    status
    statusName
    applyCode
    applyId
    note
    supplier {
      supplierId
      supplierName
    }
    customer {
      customerId
      customerName
      customerType
    }
    warehouse {
      warehouseId
      warehouseName
    }
    commodityType
    commodityTypeName
    user {
      userId
      userName
      phoneNum
    }
    createTime
    returnsCommodityRespList {
      returnId
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
      unitPrice
      totalPrice
      unitPriceType {
        unitId
        unitName
      }
      finishedQuantity {
        unitQuantity
        totalQuantity
      }
      returnsStockQuantity {
        returnableQuantity {
          unitQuantity
          totalQuantity
        }
        inBoundQuantity {
          unitQuantity
          totalQuantity
        }
      }
    }
    returnOtherRespList {
      costId
      ruleId
      note
      amount
      data
      supplier {
        supplierId
        supplierName
      }
    }
    billId
    flowLogs {
      type
      typeName
      note
      createTime
      createBy
      createUserName
      flowId
    }
    returnCode
    applyBillId
    manualCode
    belongOrg {
      orgId
      orgName
    }
    templateId
  }
}
    `;

/**
 * __useGetPurchaseReturnQuery__
 *
 * To run a query within a React component, call `useGetPurchaseReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPurchaseReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPurchaseReturnQuery({
 *   variables: {
 *      getPurchaseReturnInput: // value for 'getPurchaseReturnInput'
 *   },
 * });
 */
export function useGetPurchaseReturnQuery(baseOptions?: Apollo.QueryHookOptions<GetPurchaseReturnQuery, GetPurchaseReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPurchaseReturnQuery, GetPurchaseReturnQueryVariables>(GetPurchaseReturnDocument, options);
      }
export function useGetPurchaseReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPurchaseReturnQuery, GetPurchaseReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPurchaseReturnQuery, GetPurchaseReturnQueryVariables>(GetPurchaseReturnDocument, options);
        }
export type GetPurchaseReturnQueryHookResult = ReturnType<typeof useGetPurchaseReturnQuery>;
export type GetPurchaseReturnLazyQueryHookResult = ReturnType<typeof useGetPurchaseReturnLazyQuery>;
export type GetPurchaseReturnQueryResult = Apollo.QueryResult<GetPurchaseReturnQuery, GetPurchaseReturnQueryVariables>;
export const ReturnStatusStatisticDocument = gql`
    query returnStatusStatistic($returnStatusStatisticInput: ReturnStatusStatisticInput) {
  returnStatusStatistic(returnStatusStatisticInput: $returnStatusStatisticInput) {
    waitSubmitCount
    waitProcessedCount
    completeCount
    cancelCount
  }
}
    `;

/**
 * __useReturnStatusStatisticQuery__
 *
 * To run a query within a React component, call `useReturnStatusStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useReturnStatusStatisticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReturnStatusStatisticQuery({
 *   variables: {
 *      returnStatusStatisticInput: // value for 'returnStatusStatisticInput'
 *   },
 * });
 */
export function useReturnStatusStatisticQuery(baseOptions?: Apollo.QueryHookOptions<ReturnStatusStatisticQuery, ReturnStatusStatisticQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReturnStatusStatisticQuery, ReturnStatusStatisticQueryVariables>(ReturnStatusStatisticDocument, options);
      }
export function useReturnStatusStatisticLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReturnStatusStatisticQuery, ReturnStatusStatisticQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReturnStatusStatisticQuery, ReturnStatusStatisticQueryVariables>(ReturnStatusStatisticDocument, options);
        }
export type ReturnStatusStatisticQueryHookResult = ReturnType<typeof useReturnStatusStatisticQuery>;
export type ReturnStatusStatisticLazyQueryHookResult = ReturnType<typeof useReturnStatusStatisticLazyQuery>;
export type ReturnStatusStatisticQueryResult = Apollo.QueryResult<ReturnStatusStatisticQuery, ReturnStatusStatisticQueryVariables>;
export const CreatePurchaseReturnDocument = gql`
    mutation createPurchaseReturn($purchaseReturnInsertInput: PurchaseReturnInsertInput) {
  createPurchaseReturn(purchaseReturnInsertInput: $purchaseReturnInsertInput) {
    id
  }
}
    `;
export type CreatePurchaseReturnMutationFn = Apollo.MutationFunction<CreatePurchaseReturnMutation, CreatePurchaseReturnMutationVariables>;

/**
 * __useCreatePurchaseReturnMutation__
 *
 * To run a mutation, you first call `useCreatePurchaseReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePurchaseReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPurchaseReturnMutation, { data, loading, error }] = useCreatePurchaseReturnMutation({
 *   variables: {
 *      purchaseReturnInsertInput: // value for 'purchaseReturnInsertInput'
 *   },
 * });
 */
export function useCreatePurchaseReturnMutation(baseOptions?: Apollo.MutationHookOptions<CreatePurchaseReturnMutation, CreatePurchaseReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePurchaseReturnMutation, CreatePurchaseReturnMutationVariables>(CreatePurchaseReturnDocument, options);
      }
export type CreatePurchaseReturnMutationHookResult = ReturnType<typeof useCreatePurchaseReturnMutation>;
export type CreatePurchaseReturnMutationResult = Apollo.MutationResult<CreatePurchaseReturnMutation>;
export type CreatePurchaseReturnMutationOptions = Apollo.BaseMutationOptions<CreatePurchaseReturnMutation, CreatePurchaseReturnMutationVariables>;
export const UpdatePurchaseReturnDocument = gql`
    mutation updatePurchaseReturn($updatePurchaseReturnInput: UpdatePurchaseReturnInput) {
  updatePurchaseReturn(updatePurchaseReturnInput: $updatePurchaseReturnInput)
}
    `;
export type UpdatePurchaseReturnMutationFn = Apollo.MutationFunction<UpdatePurchaseReturnMutation, UpdatePurchaseReturnMutationVariables>;

/**
 * __useUpdatePurchaseReturnMutation__
 *
 * To run a mutation, you first call `useUpdatePurchaseReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePurchaseReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePurchaseReturnMutation, { data, loading, error }] = useUpdatePurchaseReturnMutation({
 *   variables: {
 *      updatePurchaseReturnInput: // value for 'updatePurchaseReturnInput'
 *   },
 * });
 */
export function useUpdatePurchaseReturnMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePurchaseReturnMutation, UpdatePurchaseReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePurchaseReturnMutation, UpdatePurchaseReturnMutationVariables>(UpdatePurchaseReturnDocument, options);
      }
export type UpdatePurchaseReturnMutationHookResult = ReturnType<typeof useUpdatePurchaseReturnMutation>;
export type UpdatePurchaseReturnMutationResult = Apollo.MutationResult<UpdatePurchaseReturnMutation>;
export type UpdatePurchaseReturnMutationOptions = Apollo.BaseMutationOptions<UpdatePurchaseReturnMutation, UpdatePurchaseReturnMutationVariables>;
export const CancelPurchaseReturnOrderDocument = gql`
    mutation cancelPurchaseReturnOrder($cancelPurchaseReturnOrderInput: CancelPurchaseReturnOrderInput) {
  cancelPurchaseReturnOrder(
    cancelPurchaseReturnOrderInput: $cancelPurchaseReturnOrderInput
  )
}
    `;
export type CancelPurchaseReturnOrderMutationFn = Apollo.MutationFunction<CancelPurchaseReturnOrderMutation, CancelPurchaseReturnOrderMutationVariables>;

/**
 * __useCancelPurchaseReturnOrderMutation__
 *
 * To run a mutation, you first call `useCancelPurchaseReturnOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelPurchaseReturnOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelPurchaseReturnOrderMutation, { data, loading, error }] = useCancelPurchaseReturnOrderMutation({
 *   variables: {
 *      cancelPurchaseReturnOrderInput: // value for 'cancelPurchaseReturnOrderInput'
 *   },
 * });
 */
export function useCancelPurchaseReturnOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelPurchaseReturnOrderMutation, CancelPurchaseReturnOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelPurchaseReturnOrderMutation, CancelPurchaseReturnOrderMutationVariables>(CancelPurchaseReturnOrderDocument, options);
      }
export type CancelPurchaseReturnOrderMutationHookResult = ReturnType<typeof useCancelPurchaseReturnOrderMutation>;
export type CancelPurchaseReturnOrderMutationResult = Apollo.MutationResult<CancelPurchaseReturnOrderMutation>;
export type CancelPurchaseReturnOrderMutationOptions = Apollo.BaseMutationOptions<CancelPurchaseReturnOrderMutation, CancelPurchaseReturnOrderMutationVariables>;
export const SubmitPurchaseReturnOrderDocument = gql`
    mutation submitPurchaseReturnOrder($submitPurchaseReturnOrderInput: SubmitPurchaseReturnOrderInput) {
  submitPurchaseReturnOrder(
    submitPurchaseReturnOrderInput: $submitPurchaseReturnOrderInput
  )
}
    `;
export type SubmitPurchaseReturnOrderMutationFn = Apollo.MutationFunction<SubmitPurchaseReturnOrderMutation, SubmitPurchaseReturnOrderMutationVariables>;

/**
 * __useSubmitPurchaseReturnOrderMutation__
 *
 * To run a mutation, you first call `useSubmitPurchaseReturnOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitPurchaseReturnOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitPurchaseReturnOrderMutation, { data, loading, error }] = useSubmitPurchaseReturnOrderMutation({
 *   variables: {
 *      submitPurchaseReturnOrderInput: // value for 'submitPurchaseReturnOrderInput'
 *   },
 * });
 */
export function useSubmitPurchaseReturnOrderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitPurchaseReturnOrderMutation, SubmitPurchaseReturnOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitPurchaseReturnOrderMutation, SubmitPurchaseReturnOrderMutationVariables>(SubmitPurchaseReturnOrderDocument, options);
      }
export type SubmitPurchaseReturnOrderMutationHookResult = ReturnType<typeof useSubmitPurchaseReturnOrderMutation>;
export type SubmitPurchaseReturnOrderMutationResult = Apollo.MutationResult<SubmitPurchaseReturnOrderMutation>;
export type SubmitPurchaseReturnOrderMutationOptions = Apollo.BaseMutationOptions<SubmitPurchaseReturnOrderMutation, SubmitPurchaseReturnOrderMutationVariables>;
export const AddStockQuantityDocument = gql`
    mutation addStockQuantity($addStockQuantityInput: AddStockQuantityInput) {
  addStockQuantity(addStockQuantityInput: $addStockQuantityInput)
}
    `;
export type AddStockQuantityMutationFn = Apollo.MutationFunction<AddStockQuantityMutation, AddStockQuantityMutationVariables>;

/**
 * __useAddStockQuantityMutation__
 *
 * To run a mutation, you first call `useAddStockQuantityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStockQuantityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStockQuantityMutation, { data, loading, error }] = useAddStockQuantityMutation({
 *   variables: {
 *      addStockQuantityInput: // value for 'addStockQuantityInput'
 *   },
 * });
 */
export function useAddStockQuantityMutation(baseOptions?: Apollo.MutationHookOptions<AddStockQuantityMutation, AddStockQuantityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStockQuantityMutation, AddStockQuantityMutationVariables>(AddStockQuantityDocument, options);
      }
export type AddStockQuantityMutationHookResult = ReturnType<typeof useAddStockQuantityMutation>;
export type AddStockQuantityMutationResult = Apollo.MutationResult<AddStockQuantityMutation>;
export type AddStockQuantityMutationOptions = Apollo.BaseMutationOptions<AddStockQuantityMutation, AddStockQuantityMutationVariables>;
export const IndividualPurchaseReturnBadgeDocument = gql`
    query individualPurchaseReturnBadge($input: IndividualPurchaseReturnBadgeInput) {
  individualPurchaseReturnBadge(input: $input) {
    completed
    toBeDelivered
    toBeSubmit
  }
}
    `;

/**
 * __useIndividualPurchaseReturnBadgeQuery__
 *
 * To run a query within a React component, call `useIndividualPurchaseReturnBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndividualPurchaseReturnBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndividualPurchaseReturnBadgeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useIndividualPurchaseReturnBadgeQuery(baseOptions?: Apollo.QueryHookOptions<IndividualPurchaseReturnBadgeQuery, IndividualPurchaseReturnBadgeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IndividualPurchaseReturnBadgeQuery, IndividualPurchaseReturnBadgeQueryVariables>(IndividualPurchaseReturnBadgeDocument, options);
      }
export function useIndividualPurchaseReturnBadgeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndividualPurchaseReturnBadgeQuery, IndividualPurchaseReturnBadgeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IndividualPurchaseReturnBadgeQuery, IndividualPurchaseReturnBadgeQueryVariables>(IndividualPurchaseReturnBadgeDocument, options);
        }
export type IndividualPurchaseReturnBadgeQueryHookResult = ReturnType<typeof useIndividualPurchaseReturnBadgeQuery>;
export type IndividualPurchaseReturnBadgeLazyQueryHookResult = ReturnType<typeof useIndividualPurchaseReturnBadgeLazyQuery>;
export type IndividualPurchaseReturnBadgeQueryResult = Apollo.QueryResult<IndividualPurchaseReturnBadgeQuery, IndividualPurchaseReturnBadgeQueryVariables>;
export const IndividualPurchaseReturnDetailDocument = gql`
    query individualPurchaseReturnDetail($returnId: ID!) {
  individualPurchaseReturnDetail(returnId: $returnId) {
    billId
    businessInfo {
      belongOrg {
        orgId
        orgName
      }
      customer {
        customerId
        customerName
        customerType
        lastLevelId
      }
      supplier {
        supplierId
        supplierName
      }
      warehouse {
        warehouseId
        warehouseName
      }
      businessType
      businessTypeDesc
      commodityType
      commodityTypeDesc
      purchaseCode
      purchaseTime
      runCode
      createUser {
        phoneNum
        userId
        userName
      }
      createTime
    }
    commodities {
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
      commodity {
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
      amount
      canApplyStock
      index
      itemId
      markList
      markListDesc
      price
      purchaseId
      returnAmount
      returnId
      returnQuantity {
        totalQuantity
        unitQuantity
      }
      returnableAmount
      returnableQuantity {
        totalQuantity
        unitQuantity
      }
      stockInQuantity {
        totalQuantity
        unitQuantity
      }
      pricePosition
    }
    freightTotalAmount
    remark
    returnCode
    returnId
    returnStatus
    returnStatusDesc
    returnType
    returnTypeDesc
    runCode
    costItem {
      supplier {
        supplierId
        supplierName
      }
      amount
      costId
      costName
      data
      dictItemId
      extendId
      note
      ruleId
    }
    purchaseId
    historyFlag
  }
}
    `;

/**
 * __useIndividualPurchaseReturnDetailQuery__
 *
 * To run a query within a React component, call `useIndividualPurchaseReturnDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndividualPurchaseReturnDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndividualPurchaseReturnDetailQuery({
 *   variables: {
 *      returnId: // value for 'returnId'
 *   },
 * });
 */
export function useIndividualPurchaseReturnDetailQuery(baseOptions: Apollo.QueryHookOptions<IndividualPurchaseReturnDetailQuery, IndividualPurchaseReturnDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IndividualPurchaseReturnDetailQuery, IndividualPurchaseReturnDetailQueryVariables>(IndividualPurchaseReturnDetailDocument, options);
      }
export function useIndividualPurchaseReturnDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndividualPurchaseReturnDetailQuery, IndividualPurchaseReturnDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IndividualPurchaseReturnDetailQuery, IndividualPurchaseReturnDetailQueryVariables>(IndividualPurchaseReturnDetailDocument, options);
        }
export type IndividualPurchaseReturnDetailQueryHookResult = ReturnType<typeof useIndividualPurchaseReturnDetailQuery>;
export type IndividualPurchaseReturnDetailLazyQueryHookResult = ReturnType<typeof useIndividualPurchaseReturnDetailLazyQuery>;
export type IndividualPurchaseReturnDetailQueryResult = Apollo.QueryResult<IndividualPurchaseReturnDetailQuery, IndividualPurchaseReturnDetailQueryVariables>;
export const ListIndividualPurchaseReturnCommodityDocument = gql`
    query listIndividualPurchaseReturnCommodity($input: ListIndividualPurchaseReturnCommodityInput) {
  listIndividualPurchaseReturnCommodity(input: $input) {
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
    commodity {
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
    amount
    canApplyStock
    index
    itemId
    markList
    markListDesc
    price
    purchaseId
    returnAmount
    returnId
    returnQuantity {
      totalQuantity
      unitQuantity
    }
    returnableAmount
    returnableQuantity {
      totalQuantity
      unitQuantity
    }
    stockInQuantity {
      totalQuantity
      unitQuantity
    }
    pricePosition
  }
}
    `;

/**
 * __useListIndividualPurchaseReturnCommodityQuery__
 *
 * To run a query within a React component, call `useListIndividualPurchaseReturnCommodityQuery` and pass it any options that fit your needs.
 * When your component renders, `useListIndividualPurchaseReturnCommodityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListIndividualPurchaseReturnCommodityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListIndividualPurchaseReturnCommodityQuery(baseOptions?: Apollo.QueryHookOptions<ListIndividualPurchaseReturnCommodityQuery, ListIndividualPurchaseReturnCommodityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListIndividualPurchaseReturnCommodityQuery, ListIndividualPurchaseReturnCommodityQueryVariables>(ListIndividualPurchaseReturnCommodityDocument, options);
      }
export function useListIndividualPurchaseReturnCommodityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListIndividualPurchaseReturnCommodityQuery, ListIndividualPurchaseReturnCommodityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListIndividualPurchaseReturnCommodityQuery, ListIndividualPurchaseReturnCommodityQueryVariables>(ListIndividualPurchaseReturnCommodityDocument, options);
        }
export type ListIndividualPurchaseReturnCommodityQueryHookResult = ReturnType<typeof useListIndividualPurchaseReturnCommodityQuery>;
export type ListIndividualPurchaseReturnCommodityLazyQueryHookResult = ReturnType<typeof useListIndividualPurchaseReturnCommodityLazyQuery>;
export type ListIndividualPurchaseReturnCommodityQueryResult = Apollo.QueryResult<ListIndividualPurchaseReturnCommodityQuery, ListIndividualPurchaseReturnCommodityQueryVariables>;
export const PageIndividualPurchaseReturnDocument = gql`
    query pageIndividualPurchaseReturn($input: PageIndividualPurchaseReturnInput, $page: Page) {
  pageIndividualPurchaseReturn(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      billId
      businessInfo {
        belongOrg {
          orgId
          orgName
        }
        customer {
          customerId
          customerName
          customerType
          lastLevelId
        }
        supplier {
          supplierId
          supplierName
        }
        warehouse {
          warehouseId
          warehouseName
        }
        businessType
        businessTypeDesc
        commodityType
        commodityTypeDesc
        purchaseCode
        purchaseTime
        runCode
        createUser {
          phoneNum
          userId
          userName
        }
        createTime
      }
      commodities {
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
        commodity {
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
        amount
        canApplyStock
        index
        itemId
        markList
        markListDesc
        price
        purchaseId
        returnAmount
        returnId
        returnQuantity {
          totalQuantity
          unitQuantity
        }
        returnableAmount
        returnableQuantity {
          totalQuantity
          unitQuantity
        }
        stockInQuantity {
          totalQuantity
          unitQuantity
        }
      }
      freightTotalAmount
      remark
      returnCode
      returnId
      returnStatus
      returnStatusDesc
      returnType
      returnTypeDesc
      runCode
    }
    totalRecords
  }
}
    `;

/**
 * __usePageIndividualPurchaseReturnQuery__
 *
 * To run a query within a React component, call `usePageIndividualPurchaseReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageIndividualPurchaseReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageIndividualPurchaseReturnQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageIndividualPurchaseReturnQuery(baseOptions?: Apollo.QueryHookOptions<PageIndividualPurchaseReturnQuery, PageIndividualPurchaseReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageIndividualPurchaseReturnQuery, PageIndividualPurchaseReturnQueryVariables>(PageIndividualPurchaseReturnDocument, options);
      }
export function usePageIndividualPurchaseReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageIndividualPurchaseReturnQuery, PageIndividualPurchaseReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageIndividualPurchaseReturnQuery, PageIndividualPurchaseReturnQueryVariables>(PageIndividualPurchaseReturnDocument, options);
        }
export type PageIndividualPurchaseReturnQueryHookResult = ReturnType<typeof usePageIndividualPurchaseReturnQuery>;
export type PageIndividualPurchaseReturnLazyQueryHookResult = ReturnType<typeof usePageIndividualPurchaseReturnLazyQuery>;
export type PageIndividualPurchaseReturnQueryResult = Apollo.QueryResult<PageIndividualPurchaseReturnQuery, PageIndividualPurchaseReturnQueryVariables>;
export const AddSalePurchaseStockQuantityDocument = gql`
    mutation addSalePurchaseStockQuantity($input: addSalePurchaseStockQuantityInput) {
  addSalePurchaseStockQuantity(input: $input)
}
    `;
export type AddSalePurchaseStockQuantityMutationFn = Apollo.MutationFunction<AddSalePurchaseStockQuantityMutation, AddSalePurchaseStockQuantityMutationVariables>;

/**
 * __useAddSalePurchaseStockQuantityMutation__
 *
 * To run a mutation, you first call `useAddSalePurchaseStockQuantityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSalePurchaseStockQuantityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSalePurchaseStockQuantityMutation, { data, loading, error }] = useAddSalePurchaseStockQuantityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddSalePurchaseStockQuantityMutation(baseOptions?: Apollo.MutationHookOptions<AddSalePurchaseStockQuantityMutation, AddSalePurchaseStockQuantityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSalePurchaseStockQuantityMutation, AddSalePurchaseStockQuantityMutationVariables>(AddSalePurchaseStockQuantityDocument, options);
      }
export type AddSalePurchaseStockQuantityMutationHookResult = ReturnType<typeof useAddSalePurchaseStockQuantityMutation>;
export type AddSalePurchaseStockQuantityMutationResult = Apollo.MutationResult<AddSalePurchaseStockQuantityMutation>;
export type AddSalePurchaseStockQuantityMutationOptions = Apollo.BaseMutationOptions<AddSalePurchaseStockQuantityMutation, AddSalePurchaseStockQuantityMutationVariables>;
export const CancelIndividualPurchaseReturnDocument = gql`
    mutation cancelIndividualPurchaseReturn($input: CancelIndividualPurchaseReturnInput) {
  cancelIndividualPurchaseReturn(input: $input)
}
    `;
export type CancelIndividualPurchaseReturnMutationFn = Apollo.MutationFunction<CancelIndividualPurchaseReturnMutation, CancelIndividualPurchaseReturnMutationVariables>;

/**
 * __useCancelIndividualPurchaseReturnMutation__
 *
 * To run a mutation, you first call `useCancelIndividualPurchaseReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelIndividualPurchaseReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelIndividualPurchaseReturnMutation, { data, loading, error }] = useCancelIndividualPurchaseReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelIndividualPurchaseReturnMutation(baseOptions?: Apollo.MutationHookOptions<CancelIndividualPurchaseReturnMutation, CancelIndividualPurchaseReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelIndividualPurchaseReturnMutation, CancelIndividualPurchaseReturnMutationVariables>(CancelIndividualPurchaseReturnDocument, options);
      }
export type CancelIndividualPurchaseReturnMutationHookResult = ReturnType<typeof useCancelIndividualPurchaseReturnMutation>;
export type CancelIndividualPurchaseReturnMutationResult = Apollo.MutationResult<CancelIndividualPurchaseReturnMutation>;
export type CancelIndividualPurchaseReturnMutationOptions = Apollo.BaseMutationOptions<CancelIndividualPurchaseReturnMutation, CancelIndividualPurchaseReturnMutationVariables>;
export const CreateIndividualPurchaseReturnDocument = gql`
    mutation createIndividualPurchaseReturn($input: CreateOrUpdateIndividualPurchaseReturnInput) {
  createIndividualPurchaseReturn(input: $input)
}
    `;
export type CreateIndividualPurchaseReturnMutationFn = Apollo.MutationFunction<CreateIndividualPurchaseReturnMutation, CreateIndividualPurchaseReturnMutationVariables>;

/**
 * __useCreateIndividualPurchaseReturnMutation__
 *
 * To run a mutation, you first call `useCreateIndividualPurchaseReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIndividualPurchaseReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIndividualPurchaseReturnMutation, { data, loading, error }] = useCreateIndividualPurchaseReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIndividualPurchaseReturnMutation(baseOptions?: Apollo.MutationHookOptions<CreateIndividualPurchaseReturnMutation, CreateIndividualPurchaseReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIndividualPurchaseReturnMutation, CreateIndividualPurchaseReturnMutationVariables>(CreateIndividualPurchaseReturnDocument, options);
      }
export type CreateIndividualPurchaseReturnMutationHookResult = ReturnType<typeof useCreateIndividualPurchaseReturnMutation>;
export type CreateIndividualPurchaseReturnMutationResult = Apollo.MutationResult<CreateIndividualPurchaseReturnMutation>;
export type CreateIndividualPurchaseReturnMutationOptions = Apollo.BaseMutationOptions<CreateIndividualPurchaseReturnMutation, CreateIndividualPurchaseReturnMutationVariables>;
export const SubmitIndividualPurchaseReturnDocument = gql`
    mutation submitIndividualPurchaseReturn($input: SubmitIndividualPurchaseReturnInput) {
  submitIndividualPurchaseReturn(input: $input)
}
    `;
export type SubmitIndividualPurchaseReturnMutationFn = Apollo.MutationFunction<SubmitIndividualPurchaseReturnMutation, SubmitIndividualPurchaseReturnMutationVariables>;

/**
 * __useSubmitIndividualPurchaseReturnMutation__
 *
 * To run a mutation, you first call `useSubmitIndividualPurchaseReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitIndividualPurchaseReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitIndividualPurchaseReturnMutation, { data, loading, error }] = useSubmitIndividualPurchaseReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitIndividualPurchaseReturnMutation(baseOptions?: Apollo.MutationHookOptions<SubmitIndividualPurchaseReturnMutation, SubmitIndividualPurchaseReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitIndividualPurchaseReturnMutation, SubmitIndividualPurchaseReturnMutationVariables>(SubmitIndividualPurchaseReturnDocument, options);
      }
export type SubmitIndividualPurchaseReturnMutationHookResult = ReturnType<typeof useSubmitIndividualPurchaseReturnMutation>;
export type SubmitIndividualPurchaseReturnMutationResult = Apollo.MutationResult<SubmitIndividualPurchaseReturnMutation>;
export type SubmitIndividualPurchaseReturnMutationOptions = Apollo.BaseMutationOptions<SubmitIndividualPurchaseReturnMutation, SubmitIndividualPurchaseReturnMutationVariables>;
export const UpdateIndividualPurchaseReturnDocument = gql`
    mutation updateIndividualPurchaseReturn($input: CreateOrUpdateIndividualPurchaseReturnInput) {
  updateIndividualPurchaseReturn(input: $input)
}
    `;
export type UpdateIndividualPurchaseReturnMutationFn = Apollo.MutationFunction<UpdateIndividualPurchaseReturnMutation, UpdateIndividualPurchaseReturnMutationVariables>;

/**
 * __useUpdateIndividualPurchaseReturnMutation__
 *
 * To run a mutation, you first call `useUpdateIndividualPurchaseReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIndividualPurchaseReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIndividualPurchaseReturnMutation, { data, loading, error }] = useUpdateIndividualPurchaseReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateIndividualPurchaseReturnMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIndividualPurchaseReturnMutation, UpdateIndividualPurchaseReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIndividualPurchaseReturnMutation, UpdateIndividualPurchaseReturnMutationVariables>(UpdateIndividualPurchaseReturnDocument, options);
      }
export type UpdateIndividualPurchaseReturnMutationHookResult = ReturnType<typeof useUpdateIndividualPurchaseReturnMutation>;
export type UpdateIndividualPurchaseReturnMutationResult = Apollo.MutationResult<UpdateIndividualPurchaseReturnMutation>;
export type UpdateIndividualPurchaseReturnMutationOptions = Apollo.BaseMutationOptions<UpdateIndividualPurchaseReturnMutation, UpdateIndividualPurchaseReturnMutationVariables>;
export const VoidIndividualPurchaseReturnDocument = gql`
    mutation voidIndividualPurchaseReturn($input: VoidIndividualPurchaseReturnInput) {
  voidIndividualPurchaseReturn(input: $input)
}
    `;
export type VoidIndividualPurchaseReturnMutationFn = Apollo.MutationFunction<VoidIndividualPurchaseReturnMutation, VoidIndividualPurchaseReturnMutationVariables>;

/**
 * __useVoidIndividualPurchaseReturnMutation__
 *
 * To run a mutation, you first call `useVoidIndividualPurchaseReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoidIndividualPurchaseReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voidIndividualPurchaseReturnMutation, { data, loading, error }] = useVoidIndividualPurchaseReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVoidIndividualPurchaseReturnMutation(baseOptions?: Apollo.MutationHookOptions<VoidIndividualPurchaseReturnMutation, VoidIndividualPurchaseReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoidIndividualPurchaseReturnMutation, VoidIndividualPurchaseReturnMutationVariables>(VoidIndividualPurchaseReturnDocument, options);
      }
export type VoidIndividualPurchaseReturnMutationHookResult = ReturnType<typeof useVoidIndividualPurchaseReturnMutation>;
export type VoidIndividualPurchaseReturnMutationResult = Apollo.MutationResult<VoidIndividualPurchaseReturnMutation>;
export type VoidIndividualPurchaseReturnMutationOptions = Apollo.BaseMutationOptions<VoidIndividualPurchaseReturnMutation, VoidIndividualPurchaseReturnMutationVariables>;
export const WithdrawIndividualPurchaseReturnDocument = gql`
    mutation withdrawIndividualPurchaseReturn($input: WithdrawIndividualPurchaseReturnInput) {
  withdrawIndividualPurchaseReturn(input: $input)
}
    `;
export type WithdrawIndividualPurchaseReturnMutationFn = Apollo.MutationFunction<WithdrawIndividualPurchaseReturnMutation, WithdrawIndividualPurchaseReturnMutationVariables>;

/**
 * __useWithdrawIndividualPurchaseReturnMutation__
 *
 * To run a mutation, you first call `useWithdrawIndividualPurchaseReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWithdrawIndividualPurchaseReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [withdrawIndividualPurchaseReturnMutation, { data, loading, error }] = useWithdrawIndividualPurchaseReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWithdrawIndividualPurchaseReturnMutation(baseOptions?: Apollo.MutationHookOptions<WithdrawIndividualPurchaseReturnMutation, WithdrawIndividualPurchaseReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WithdrawIndividualPurchaseReturnMutation, WithdrawIndividualPurchaseReturnMutationVariables>(WithdrawIndividualPurchaseReturnDocument, options);
      }
export type WithdrawIndividualPurchaseReturnMutationHookResult = ReturnType<typeof useWithdrawIndividualPurchaseReturnMutation>;
export type WithdrawIndividualPurchaseReturnMutationResult = Apollo.MutationResult<WithdrawIndividualPurchaseReturnMutation>;
export type WithdrawIndividualPurchaseReturnMutationOptions = Apollo.BaseMutationOptions<WithdrawIndividualPurchaseReturnMutation, WithdrawIndividualPurchaseReturnMutationVariables>;