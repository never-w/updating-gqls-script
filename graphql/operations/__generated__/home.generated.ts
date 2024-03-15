import type * as SchemaTypes from '../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type HomeBadgeCountQueryVariables = SchemaTypes.Exact<{
  countInternalPurchaseReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.CountInternalPurchaseReturnInput>;
  deliveryOrderStatusCountInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryOrderStatusCountInput>;
  countBillStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.CountBillStatusInput>;
  receiptQuantityInput?: SchemaTypes.InputMaybe<SchemaTypes.ReceiptQuantityInput>;
  emptyCabinetBillQuantityInput?: SchemaTypes.InputMaybe<SchemaTypes.EmptyCabinetBillInput>;
  countCostEntryByStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.CostEntryCountInput>;
  countOutOrderTypeInput?: SchemaTypes.InputMaybe<SchemaTypes.CountOutOrderTypeInput>;
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetStatusCountInput>;
  statusGroupCountInput?: SchemaTypes.InputMaybe<SchemaTypes.StatusGroupCountInput>;
  countSaleReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.CountSaleReturnInput>;
  damageOutStatusCountInput?: SchemaTypes.InputMaybe<SchemaTypes.DamageOutStatusCountInput>;
  breakContractStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.BreakContractStatusInput>;
  bill1StatusInput: SchemaTypes.Bill1StatusGroupCountInput;
  bill2StatusInput: SchemaTypes.Bill2StatusGroupCountInput;
  countDomesticPurchaseStatusFilter: SchemaTypes.CountDomesticPurchaseStatusFilter;
  platformReturnBadgeInput?: SchemaTypes.InputMaybe<SchemaTypes.PitayaPagePlatformReturnInput>;
  incomeStatementType: SchemaTypes.BillMainTypeEnum;
  incomeStatementTypeInput?: SchemaTypes.InputMaybe<SchemaTypes.IncomeStatementTypeInput>;
  countPurchaseStatusInput?: SchemaTypes.InputMaybe<SchemaTypes.CountPurchaseStatusInput>;
}>;


export type HomeBadgeCountQuery = { auditSecondmentCount?: number, saleRejectStatistic?: number, getStatusCount?: number, taskNoticeStatistic?: number, abnormalOrderStatistic?: number, countPitayaReceiveTask?: number, countPitayaDomesticReceiveTask?: number, countDeliveryFee?: number, countPitayaSopTask?: number, pitayaCountInternalPurchaseStatus?: { __typename?: 'CountInternalPurchaseStatusPayload', toBeReceived?: number, received?: number }, deliveryBillStatusCount?: { __typename?: 'DeliveryBillStatusCountPayload', unSubmit?: number, unAudit?: number }, countAllStatusDeliveryFee?: Array<{ __typename?: 'CountBillStatusPayload', billMainType?: SchemaTypes.BillMainTypeEnum, billStatusNumberList?: Array<{ __typename?: 'BillStatusNumber', number?: number, status?: SchemaTypes.PitayaBillStatusEnum }> }>, bill1StatusGroupCount?: Array<{ __typename?: 'Bill1StatusCountPayload', bizUnReviewed?: number, complete?: number, fdConfirmed?: number, fdUnReviewed?: number, unConfirmed?: number, unSubmitted?: number, billSource?: SchemaTypes.PitayaBillSourceEnum }>, bill2StatusGroupCount?: Array<{ __typename?: 'Bill2StatusCountPayload', billMainType?: SchemaTypes.BillMainTypeEnum, billStatus?: SchemaTypes.BillStatus, number?: number }>, receiptQuantity?: { __typename?: 'ReceiptQuantityPayload', finishedTotal?: number, totalTodoQuantity?: number, waitAcceptanceTotal?: number, waitEmptyCabinetTotal?: number }, emptyCabinetBillQuantity?: { __typename?: 'EmptyCabinetBillQuantityPayload', waitCommitTotal?: number, waitReviewTotal?: number, waitTodoTotal?: number }, saleIncomeOrderStatistic?: { __typename?: 'SaleIncomeOrderStatisticPayload', orderCount?: number, auditCount?: number }, userPlanChangedSummary?: { __typename?: 'PlanChangedSummary', notHandleCount?: number }, countInOrderAudit?: { __typename?: 'CountInOrderPayload', rawMaterial?: number, subMaterial?: number, finishedProduct?: number, defectiveProduct?: number, semiFinishedProduct?: number, turnoverBasket?: number, returnProduct?: number, damageProduct?: number }, countOutOrderType?: { __typename?: 'OutOrderTypeCountPayload', rawMaterial?: number, subMaterial?: number, finishedProduct?: number, defectiveProduct?: number, semiFinishedProduct?: number, refund?: number, basket?: number }, transferBillCountAggregate?: { __typename?: 'TransferBillCountAggregate', toAudit?: number, toInSubmit?: number, toOutSubmit?: number }, stockAdjustmentStatus?: { __typename?: 'StockAdjustmentStatusPayload', toBeAudit?: number }, statusGroupCount?: Array<{ __typename?: 'StatusGroupCountPayload', billStatus?: SchemaTypes.PitayaBillStatusEnum, number?: number, billMainType?: SchemaTypes.BillMainTypeEnum }>, ProductionStockAdjustmentStatus?: { __typename?: 'ProductionStockAdjustmentStatusPayload', toBeAuditStockIn?: number, toBeAuditStockOut?: number }, countDeliveryReturn?: { __typename?: 'CountDeliveryReturnPayload', toSubmit?: number }, countSaleReturn?: { __typename?: 'CountSaleReturnPayload', toSubmit?: number, toInbound?: number, finished?: number }, goodsTransferStatusCount?: { __typename?: 'GoodsTransferStatusCount', unProcessed?: number }, damageOutStatusCount?: { __typename?: 'DamageOutStatusCountPayload', toBeSubmit?: number, inProgress?: number, toBeOut?: number, rejected?: number }, countPitayaCostEntryByStatus?: { __typename?: 'PitayaCountCostEntryByStatusPayload', toSubmitNum?: number, underReviewNum?: number, underReviewNumBIZ?: number }, breakContractStatus?: { __typename?: 'BreakContractStatusPayload', saleToSubmitCount?: number, saleToAuditCount?: number, saleToRejectedCount?: number, auditToAuditCount?: number }, omsPurchaseStatus?: Array<{ __typename?: 'OmsPurchaseStatus', count?: number, status?: number }>, pitayaCountInternalSaleStatus?: { __typename?: 'CountInternalSaleStatusPayload', toBeDelivered?: number, toBeSubmitted?: number }, countInternalConsignmentStatus?: { __typename?: 'CountInternalConsignmentPayload', unSubmitted?: number }, countDomesticPurchaseStatus?: Array<{ __typename?: 'CountOfStatusPayload', countDomesticPurchaseStatus?: { __typename?: 'CountStatusDomesticPurchase', count?: number, status?: SchemaTypes.PurchaseStatusEnum }, countExpandOrderStatus?: Array<{ __typename?: 'CountStatusExpandOrderStatus', count?: number, status?: SchemaTypes.ExtendOrderStatus }> }>, countIndividualPurchaseStatus?: Array<{ __typename?: 'CountPurchaseStatusPayload', count?: number, status?: SchemaTypes.PurchaseStatusEnum }>, stockOrderBadge?: { __typename?: 'StockOrderBadgePayload', toBeInAudited?: number, toBeOutAudited?: number }, saleInvoiceBadge?: { __typename?: 'SaleInvoiceBadgePayLoad', toBeSubmit?: number }, pitayaReturnBadge?: { __typename?: 'PitayaReturnBadgePayload', toBeInbound?: number, toBeSubmit?: number }, salePlanOrderBadge?: { __typename?: 'SalePlanOrderBadgePayload', canceled?: number, published?: number, toBePublished?: number }, pitayaPlatformReturnBadge?: { __typename?: 'PitayaPlatformReturnBadgePayload', toBeInbound?: number, toBeSubmitted?: number }, deliveryOrderStats?: { __typename?: 'SaleDeliveryOrderStatusCountPayload', unSubmit?: number }, countIncomeStatement?: Array<{ __typename?: 'IncomeStatementTypeStatusStatisticPayload', incomeStatementType?: SchemaTypes.IncomeStatementEnum, statusNumberList?: Array<{ __typename?: 'StatusNumber', number?: number, status?: SchemaTypes.IncomeStatementStatusEnum }> }>, countInternalPurchaseReturn?: Array<{ __typename?: 'CountExtendStatusPayload', count?: number, status?: SchemaTypes.ExtendOrderStatus }> };

export type SaleAnotherBadgeCountQueryVariables = SchemaTypes.Exact<{
  deliveryOrderStatusCountDeliveryOrderStatusCountInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryOrderStatusCountInput>;
  deliveryOrderStatusCountInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryOrderStatusCountInput>;
  countSaleReturnInput?: SchemaTypes.InputMaybe<SchemaTypes.CountSaleReturnInput>;
}>;


export type SaleAnotherBadgeCountQuery = { saleRejectStatistic?: number, deliveryOrderStatusCount?: { __typename?: 'DeliveryOrderStatusCountPayload', unSubmit?: number, unOutStock?: number, unReceipt?: number }, deliveryBillStatusCount?: { __typename?: 'DeliveryBillStatusCountPayload', unSubmit?: number, unAudit?: number }, countSaleReturn?: { __typename?: 'CountSaleReturnPayload', toSubmit?: number, toInbound?: number, finished?: number }, saleIncomeOrderStatistic?: { __typename?: 'SaleIncomeOrderStatisticPayload', orderCount?: number, auditCount?: number }, countDeliveryReturn?: { __typename?: 'CountDeliveryReturnPayload', toSubmit?: number } };


export const HomeBadgeCountDocument = gql`
    query homeBadgeCount($countInternalPurchaseReturnInput: CountInternalPurchaseReturnInput, $deliveryOrderStatusCountInput: DeliveryOrderStatusCountInput, $countBillStatusInput: CountBillStatusInput, $receiptQuantityInput: ReceiptQuantityInput, $emptyCabinetBillQuantityInput: EmptyCabinetBillInput, $countCostEntryByStatusInput: CostEntryCountInput, $countOutOrderTypeInput: CountOutOrderTypeInput, $input: GetStatusCountInput, $statusGroupCountInput: StatusGroupCountInput, $countSaleReturnInput: CountSaleReturnInput, $damageOutStatusCountInput: DamageOutStatusCountInput, $breakContractStatusInput: BreakContractStatusInput, $bill1StatusInput: Bill1StatusGroupCountInput!, $bill2StatusInput: Bill2StatusGroupCountInput!, $countDomesticPurchaseStatusFilter: CountDomesticPurchaseStatusFilter!, $platformReturnBadgeInput: PitayaPagePlatformReturnInput, $incomeStatementType: BillMainTypeEnum!, $incomeStatementTypeInput: IncomeStatementTypeInput, $countPurchaseStatusInput: CountPurchaseStatusInput) {
  pitayaCountInternalPurchaseStatus {
    toBeReceived
    received
  }
  deliveryBillStatusCount(
    deliveryOrderStatusCountInput: $deliveryOrderStatusCountInput
  ) {
    unSubmit
    unAudit
  }
  countAllStatusDeliveryFee(countBillStatusInput: $countBillStatusInput) {
    billMainType
    billStatusNumberList {
      number
      status
    }
  }
  bill1StatusGroupCount(input: $bill1StatusInput) {
    bizUnReviewed
    complete
    fdConfirmed
    fdUnReviewed
    unConfirmed
    unSubmitted
    billSource
  }
  bill2StatusGroupCount(input: $bill2StatusInput) {
    billMainType
    billStatus
    number
  }
  receiptQuantity(input: $receiptQuantityInput) {
    finishedTotal
    totalTodoQuantity
    waitAcceptanceTotal
    waitEmptyCabinetTotal
  }
  emptyCabinetBillQuantity(input: $emptyCabinetBillQuantityInput) {
    waitCommitTotal
    waitReviewTotal
    waitTodoTotal
  }
  saleIncomeOrderStatistic {
    orderCount
    auditCount
  }
  userPlanChangedSummary {
    notHandleCount
  }
  countInOrderAudit {
    rawMaterial
    subMaterial
    finishedProduct
    defectiveProduct
    semiFinishedProduct
    turnoverBasket
    returnProduct
    damageProduct
  }
  countOutOrderType(countOutOrderTypeInput: $countOutOrderTypeInput) {
    rawMaterial
    subMaterial
    finishedProduct
    defectiveProduct
    semiFinishedProduct
    refund
    basket
  }
  auditSecondmentCount
  transferBillCountAggregate {
    toAudit
    toInSubmit
    toOutSubmit
  }
  stockAdjustmentStatus {
    toBeAudit
  }
  saleRejectStatistic
  getStatusCount(input: $input)
  taskNoticeStatistic
  statusGroupCount(statusGroupCountInput: $statusGroupCountInput) {
    billStatus
    number
    billMainType
  }
  ProductionStockAdjustmentStatus {
    toBeAuditStockIn
    toBeAuditStockOut
  }
  countDeliveryReturn {
    toSubmit
  }
  countSaleReturn(countSaleReturnInput: $countSaleReturnInput) {
    toSubmit
    toInbound
    finished
  }
  abnormalOrderStatistic
  goodsTransferStatusCount {
    unProcessed
  }
  damageOutStatusCount(damageOutStatusCountInput: $damageOutStatusCountInput) {
    toBeSubmit
    inProgress
    toBeOut
    rejected
  }
  countPitayaCostEntryByStatus(input: $countCostEntryByStatusInput) {
    toSubmitNum
    underReviewNum
    underReviewNumBIZ
  }
  breakContractStatus(breakContractStatusInput: $breakContractStatusInput) {
    saleToSubmitCount
    saleToAuditCount
    saleToRejectedCount
    auditToAuditCount
  }
  omsPurchaseStatus {
    count
    status
  }
  pitayaCountInternalSaleStatus {
    toBeDelivered
    toBeSubmitted
  }
  countInternalConsignmentStatus {
    unSubmitted
  }
  countPitayaReceiveTask
  countPitayaDomesticReceiveTask
  countDomesticPurchaseStatus(
    countDomesticPurchaseStatusFilter: $countDomesticPurchaseStatusFilter
  ) {
    countDomesticPurchaseStatus {
      count
      status
    }
    countExpandOrderStatus {
      count
      status
    }
  }
  countIndividualPurchaseStatus(
    countPurchaseStatusInput: $countPurchaseStatusInput
  ) {
    count
    status
  }
  stockOrderBadge {
    toBeInAudited
    toBeOutAudited
  }
  saleInvoiceBadge {
    toBeSubmit
  }
  pitayaReturnBadge {
    toBeInbound
    toBeSubmit
  }
  salePlanOrderBadge {
    canceled
    published
    toBePublished
  }
  pitayaPlatformReturnBadge(input: $platformReturnBadgeInput) {
    toBeInbound
    toBeSubmitted
  }
  countDeliveryFee(incomeStatementType: $incomeStatementType)
  deliveryOrderStats {
    unSubmit
  }
  countIncomeStatement(incomeStatementTypeInput: $incomeStatementTypeInput) {
    incomeStatementType
    statusNumberList {
      number
      status
    }
  }
  countInternalPurchaseReturn(
    countInternalPurchaseReturnInput: $countInternalPurchaseReturnInput
  ) {
    count
    status
  }
  countPitayaSopTask
}
    `;

/**
 * __useHomeBadgeCountQuery__
 *
 * To run a query within a React component, call `useHomeBadgeCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeBadgeCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeBadgeCountQuery({
 *   variables: {
 *      countInternalPurchaseReturnInput: // value for 'countInternalPurchaseReturnInput'
 *      deliveryOrderStatusCountInput: // value for 'deliveryOrderStatusCountInput'
 *      countBillStatusInput: // value for 'countBillStatusInput'
 *      receiptQuantityInput: // value for 'receiptQuantityInput'
 *      emptyCabinetBillQuantityInput: // value for 'emptyCabinetBillQuantityInput'
 *      countCostEntryByStatusInput: // value for 'countCostEntryByStatusInput'
 *      countOutOrderTypeInput: // value for 'countOutOrderTypeInput'
 *      input: // value for 'input'
 *      statusGroupCountInput: // value for 'statusGroupCountInput'
 *      countSaleReturnInput: // value for 'countSaleReturnInput'
 *      damageOutStatusCountInput: // value for 'damageOutStatusCountInput'
 *      breakContractStatusInput: // value for 'breakContractStatusInput'
 *      bill1StatusInput: // value for 'bill1StatusInput'
 *      bill2StatusInput: // value for 'bill2StatusInput'
 *      countDomesticPurchaseStatusFilter: // value for 'countDomesticPurchaseStatusFilter'
 *      platformReturnBadgeInput: // value for 'platformReturnBadgeInput'
 *      incomeStatementType: // value for 'incomeStatementType'
 *      incomeStatementTypeInput: // value for 'incomeStatementTypeInput'
 *      countPurchaseStatusInput: // value for 'countPurchaseStatusInput'
 *   },
 * });
 */
export function useHomeBadgeCountQuery(baseOptions: Apollo.QueryHookOptions<HomeBadgeCountQuery, HomeBadgeCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeBadgeCountQuery, HomeBadgeCountQueryVariables>(HomeBadgeCountDocument, options);
      }
export function useHomeBadgeCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeBadgeCountQuery, HomeBadgeCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeBadgeCountQuery, HomeBadgeCountQueryVariables>(HomeBadgeCountDocument, options);
        }
export type HomeBadgeCountQueryHookResult = ReturnType<typeof useHomeBadgeCountQuery>;
export type HomeBadgeCountLazyQueryHookResult = ReturnType<typeof useHomeBadgeCountLazyQuery>;
export type HomeBadgeCountQueryResult = Apollo.QueryResult<HomeBadgeCountQuery, HomeBadgeCountQueryVariables>;
export const SaleAnotherBadgeCountDocument = gql`
    query saleAnotherBadgeCount($deliveryOrderStatusCountDeliveryOrderStatusCountInput: DeliveryOrderStatusCountInput, $deliveryOrderStatusCountInput: DeliveryOrderStatusCountInput, $countSaleReturnInput: CountSaleReturnInput) {
  deliveryOrderStatusCount(
    deliveryOrderStatusCountInput: $deliveryOrderStatusCountDeliveryOrderStatusCountInput
  ) {
    unSubmit
    unOutStock
    unReceipt
  }
  deliveryBillStatusCount(
    deliveryOrderStatusCountInput: $deliveryOrderStatusCountInput
  ) {
    unSubmit
    unAudit
  }
  saleRejectStatistic
  countSaleReturn(countSaleReturnInput: $countSaleReturnInput) {
    toSubmit
    toInbound
    finished
  }
  saleIncomeOrderStatistic {
    orderCount
    auditCount
  }
  countDeliveryReturn {
    toSubmit
  }
}
    `;

/**
 * __useSaleAnotherBadgeCountQuery__
 *
 * To run a query within a React component, call `useSaleAnotherBadgeCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleAnotherBadgeCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleAnotherBadgeCountQuery({
 *   variables: {
 *      deliveryOrderStatusCountDeliveryOrderStatusCountInput: // value for 'deliveryOrderStatusCountDeliveryOrderStatusCountInput'
 *      deliveryOrderStatusCountInput: // value for 'deliveryOrderStatusCountInput'
 *      countSaleReturnInput: // value for 'countSaleReturnInput'
 *   },
 * });
 */
export function useSaleAnotherBadgeCountQuery(baseOptions?: Apollo.QueryHookOptions<SaleAnotherBadgeCountQuery, SaleAnotherBadgeCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaleAnotherBadgeCountQuery, SaleAnotherBadgeCountQueryVariables>(SaleAnotherBadgeCountDocument, options);
      }
export function useSaleAnotherBadgeCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaleAnotherBadgeCountQuery, SaleAnotherBadgeCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaleAnotherBadgeCountQuery, SaleAnotherBadgeCountQueryVariables>(SaleAnotherBadgeCountDocument, options);
        }
export type SaleAnotherBadgeCountQueryHookResult = ReturnType<typeof useSaleAnotherBadgeCountQuery>;
export type SaleAnotherBadgeCountLazyQueryHookResult = ReturnType<typeof useSaleAnotherBadgeCountLazyQuery>;
export type SaleAnotherBadgeCountQueryResult = Apollo.QueryResult<SaleAnotherBadgeCountQuery, SaleAnotherBadgeCountQueryVariables>;