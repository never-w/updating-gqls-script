import type * as SchemaTypes from '../../../generated/types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ListSaleInvoiceBatchQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListSaleInvoiceBatchInput>
}>

export type ListSaleInvoiceBatchQuery = {
  listSaleInvoiceBatch?: {
    __typename?: 'SaleInvoiceBatchPayLoad'
    batchCount?: number
    commoditySku?: {
      __typename?: 'PitayaCommoditySku'
      categoryId?: number
      categoryName?: string
      commodityId?: number
      commodityName?: string
      commoditySkuId?: number
      commoditySkuName?: string
      commoditySpecOptionId?: Array<number>
      commoditySpecOptionName?: Array<string>
      availableSkuQuantity?: Array<{
        __typename?: 'AvailableSkuQuantity'
        conversion?: number
        businessUnit?: {
          __typename?: 'Unit'
          unitId?: number
          unitName?: string
        }
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }>
      baseUnit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
    }
    batchItem?: Array<{
      __typename?: 'SaleInvoiceCommodityBatchPayLoad'
      commodityTypeDesc?: string
      commodityTypeId?: number
      uniqueMark?: string
      inStockTime?: number
      batchInfo?: {
        __typename?: 'BatchInfoWithWarehouse'
        batchCode?: string
        batchId?: string
        createTime?: number
        commodityTypeId?: number
        commodityTypeName?: string
        quantity?: number
        warehouse?: {
          __typename?: 'Warehouse'
          warehouseId?: string
          warehouseName?: string
        }
        customer?: {
          __typename?: 'Customer'
          customerId?: number
          customerName?: string
          customerType?: number
          lastLevelId?: number
          lastLevelName?: string
        }
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        quantityItem?: Array<{
          __typename?: 'DynamicQuantity'
          quantity?: number
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
      }
      commoditySku?: {
        __typename?: 'PitayaCommoditySku'
        categoryId?: number
        categoryName?: string
        commodityId?: number
        commodityName?: string
        commoditySkuId?: number
        commoditySkuName?: string
        commoditySpecOptionId?: Array<number>
        commoditySpecOptionName?: Array<string>
        availableSkuQuantity?: Array<{
          __typename?: 'AvailableSkuQuantity'
          conversion?: number
          businessUnit?: {
            __typename?: 'Unit'
            unitId?: number
            unitName?: string
          }
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
        baseUnit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }
      customer?: {
        __typename?: 'Customer'
        customerId?: number
        customerName?: string
        customerType?: number
        lastLevelId?: number
        lastLevelName?: string
      }
      ableSaleQuantity?: Array<{
        __typename?: 'DynamicQuantity'
        quantity?: number
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }>
    }>
  }
}

export type ListSaleInvoiceCategoryQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListSaleInvoiceCategoryInput>
}>

export type ListSaleInvoiceCategoryQuery = {
  listSaleInvoiceCategory?: Array<{
    __typename?: 'SaleInvoiceCategoryPayLoad'
    categoryId?: number
    categoryName?: string
  }>
}

export type ListSaleInvoiceDeliveryQueryVariables = SchemaTypes.Exact<{
  orderId: SchemaTypes.Scalars['ID']
}>

export type ListSaleInvoiceDeliveryQuery = {
  listSaleInvoiceDelivery?: Array<{
    __typename?: 'SaleDeliveryOrderDetailPayload'
    businessUserName?: string
    carNum?: string
    carType?: string
    completeTime?: number
    createTime?: number
    deliveryDate?: number
    deliveryGoodsSource?: SchemaTypes.DeliveryGoodsSourceEnum
    deliveryGoodsSourceDesc?: string
    deliveryMode?: SchemaTypes.DeliveryModeEnum
    deliveryModeDesc?: string
    deliveryRequirement?: SchemaTypes.DeliveryMethodEnum
    deliveryRequirementDesc?: string
    deliveryReturnOrderCount?: number
    driverContact?: string
    driverName?: string
    orderCode?: string
    orderId?: string
    orderStatus?: SchemaTypes.SaleDeliveryOrderStatusEnum
    orderStatusDesc?: string
    saleOrderDate?: number
    statusNote?: string
    supplementalOrderCount?: number
    belongOrg?: { __typename?: 'PitayaOrg'; orgId?: number; orgName?: string }
    createBy?: {
      __typename?: 'User'
      phoneNum?: string
      userId?: number
      userName?: string
    }
    org?: { __typename?: 'PitayaOrg'; orgId?: number; orgName?: string }
    belongInfo?: Array<{
      __typename?: 'BelongInfoList'
      customerBelongInfo?: {
        __typename?: 'BelongInfo'
        customerId?: number
        customerName?: string
        customerType?: number
      }
    }>
    deliveryOrderFee?: {
      __typename?: 'SaleDeliveryOrderFeePayload'
      billMainId?: string
      billTemplateId?: string
      billDetailsList?: Array<{
        __typename?: 'PitayaBillDetailPayload'
        billCostData?: string
        billDetailId?: string
        billMainId?: string
        businessItemValue?: string
        costAmount?: number
        costId?: string
        costName?: string
        dictItemId?: string
        note?: string
        ruleCode?: string
        ruleId?: string
        showField?: number
        paymentType?: number
        supplier?: {
          __typename?: 'Supplier'
          supplierId?: number
          supplierName?: string
        }
      }>
    }
    deliveryOrderItem?: Array<{
      __typename?: 'SaleDeliveryOrderItemPayload'
      itemId?: string
      orderId?: string
      outOrderId?: string
      saleDeliveryOrderType?: SchemaTypes.PitayaBusinessTypeEnum
      sourceOrderCode?: string
      sourceOrderId?: string
      sourceOrderSaleDate?: number
      customerBelongInfo?: {
        __typename?: 'BelongInfo'
        customerId?: number
        customerName?: string
        customerType?: number
      }
      commodityDetail?: Array<{
        __typename?: 'SaleDeliveryOrderCommodityItemPayload'
        commodityTypeId?: number
        commodityTypeName?: string
        deliveryOutItemId?: string
        differenceReason?: string
        itemId?: string
        saleOrderItemId?: string
        actualQuantity?: number
        deliverableQuantity?: number
        deliveredQuantity?: number
        differenceQuantity?: number
        markList?: Array<SchemaTypes.AcquireMarkEnum>
        outQuantity?: number
        quantity?: number
        returnQuantity?: number
        sku?: {
          __typename?: 'PitayaCommoditySku'
          categoryId?: number
          categoryName?: string
          commodityId?: number
          commodityName?: string
          commoditySkuId?: number
          commoditySkuName?: string
          commoditySpecOptionId?: Array<number>
          commoditySpecOptionName?: Array<string>
          availableSkuQuantity?: Array<{
            __typename?: 'AvailableSkuQuantity'
            conversion?: number
            businessUnit?: {
              __typename?: 'Unit'
              unitId?: number
              unitName?: string
            }
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          }>
          baseUnit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }
        warehouse?: {
          __typename?: 'WarehouseDataLoaderPayload'
          address?: string
          belongId?: number
          belongType?: number
          houseNumber?: string
          id?: string
          locationList?: Array<number>
          name?: string
          orgId?: number
          remark?: string
          status?: number
          typeId?: number
        }
        stockBatchInfo?: {
          __typename?: 'BatchInfo'
          batchCode?: string
          batchId?: string
          createTime?: number
          lockQuantity?: number
          quantity?: number
          customerBelongInfo?: {
            __typename?: 'BelongInfo'
            customerId?: number
            customerName?: string
            customerType?: number
          }
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          lockQuantityItem?: Array<{
            __typename?: 'DynamicQuantity'
            quantity?: number
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          }>
          quantityItem?: Array<{
            __typename?: 'DynamicQuantity'
            quantity?: number
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          }>
        }
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        quantityItem?: Array<{
          __typename?: 'DynamicQuantity'
          quantity?: number
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
      }>
    }>
    auditUser?: {
      __typename?: 'User'
      phoneNum?: string
      userId?: number
      userName?: string
    }
    fileInfoList?: Array<{
      __typename?: 'FileInfoPayLoad'
      accessType?: SchemaTypes.AccessType
      contentType?: string
      createTime?: number
      fileUrl?: string
      id?: string
      name?: string
      size?: number
      tags?: Array<string>
      updateTime?: number
    }>
  }>
}

export type ListSaleInvoiceSkuByNameQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListSaleInvoiceSkuByNameInput>
}>

export type ListSaleInvoiceSkuByNameQuery = {
  listSaleInvoiceSkuByName?: Array<{
    __typename?: 'SaleInvoiceSkuPayload'
    commoditySku?: {
      __typename?: 'PitayaCommoditySku'
      categoryId?: number
      categoryName?: string
      commodityId?: number
      commodityName?: string
      commoditySkuId?: number
      commoditySkuName?: string
      commoditySpecOptionId?: Array<number>
      commoditySpecOptionName?: Array<string>
      availableSkuQuantity?: Array<{
        __typename?: 'AvailableSkuQuantity'
        conversion?: number
        businessUnit?: {
          __typename?: 'Unit'
          unitId?: number
          unitName?: string
        }
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }>
      baseUnit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
    }
  }>
}

export type ListSaleInvoiceSpuAndSkuQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListSaleInvoiceSpuAndSkuInput>
}>

export type ListSaleInvoiceSpuAndSkuQuery = {
  listSaleInvoiceSpuAndSku?: Array<{
    __typename?: 'SaleInvoiceSpuAndSkuPayLoad'
    commodityId?: number
    commodityName?: string
    commoditySkuList?: Array<{
      __typename?: 'SaleInvoiceSkuPayload'
      commoditySku?: {
        __typename?: 'PitayaCommoditySku'
        categoryId?: number
        categoryName?: string
        commodityId?: number
        commodityName?: string
        commoditySkuId?: number
        commoditySkuName?: string
        commoditySpecOptionId?: Array<number>
        commoditySpecOptionName?: Array<string>
        availableSkuQuantity?: Array<{
          __typename?: 'AvailableSkuQuantity'
          conversion?: number
          businessUnit?: {
            __typename?: 'Unit'
            unitId?: number
            unitName?: string
          }
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
        baseUnit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }
    }>
  }>
}

export type PageSaleInvoiceQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PageSaleInvoiceInput>
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>
}>

export type PageSaleInvoiceQuery = {
  pageSaleInvoice?: {
    __typename?: 'PageSaleInvoice'
    pageCurrent?: number
    pageSize?: number
    totalRecords?: number
    records?: Array<{
      __typename?: 'SaleInvoicePayLoad'
      createTime?: number
      orderCode?: string
      orderId?: string
      orderStatus?: SchemaTypes.SaleStatusEnum
      orderStatusDesc?: string
      orderType?: SchemaTypes.PitayaBusinessTypeEnum
      orderTypeDesc?: string
      remark?: string
      saleTime?: number
      deliveryType?: SchemaTypes.DeliveryTypeEnum
      deliveryTypeDesc?: string
      deliveryCount?: number
      payMode?: SchemaTypes.SaleInvoicePayModeEnum
      payModeDesc?: string
      saleIncomeId?: string
      saleReturnCount?: number
      type?: SchemaTypes.PitayaCustomerType
      belongOrg?: { __typename?: 'PitayaOrg'; orgId?: number; orgName?: string }
      createUser?: {
        __typename?: 'User'
        phoneNum?: string
        userId?: number
        userName?: string
      }
      customer?: {
        __typename?: 'Customer'
        customerId?: number
        customerName?: string
        customerType?: number
        lastLevelId?: number
        lastLevelName?: string
      }
      commodityList?: Array<{
        __typename?: 'SaleInvoiceItemPayload'
        commodityTypeId?: number
        commodityTypeName?: string
        orderId?: string
        orderItemId?: string
        salePrice?: number
        saleTotalPrice?: number
        index?: number
        mark?: SchemaTypes.ApplyMarkEnum
        markName?: string
        batchInfo?: {
          __typename?: 'BatchInfoWithWarehouse'
          batchCode?: string
          batchId?: string
          createTime?: number
          commodityTypeId?: number
          commodityTypeName?: string
          quantity?: number
          warehouse?: {
            __typename?: 'Warehouse'
            warehouseId?: string
            warehouseName?: string
          }
          customer?: {
            __typename?: 'Customer'
            customerId?: number
            customerName?: string
            customerType?: number
            lastLevelId?: number
            lastLevelName?: string
          }
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          quantityItem?: Array<{
            __typename?: 'DynamicQuantity'
            quantity?: number
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          }>
        }
        commoditySku?: {
          __typename?: 'PitayaCommoditySku'
          categoryId?: number
          categoryName?: string
          commodityId?: number
          commodityName?: string
          commoditySkuId?: number
          commoditySkuName?: string
          commoditySpecOptionId?: Array<number>
          commoditySpecOptionName?: Array<string>
          availableSkuQuantity?: Array<{
            __typename?: 'AvailableSkuQuantity'
            conversion?: number
            businessUnit?: {
              __typename?: 'Unit'
              unitId?: number
              unitName?: string
            }
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          }>
          baseUnit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }
        ableSaleQuantity?: Array<{
          __typename?: 'DynamicQuantity'
          quantity?: number
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
        dynamicQuantity?: {
          __typename?: 'DynamicQuantityCalculateEntity'
          quantity?: number
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          quantityItem?: Array<{
            __typename?: 'DynamicQuantity'
            quantity?: number
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          }>
        }
        photos?: {
          __typename?: 'PhotoFile'
          fileInfoList?: Array<{
            __typename?: 'FileInfoPayLoad'
            accessType?: SchemaTypes.AccessType
            contentType?: string
            createTime?: number
            fileUrl?: string
            id?: string
            name?: string
            size?: number
            tags?: Array<string>
            updateTime?: number
          }>
        }
      }>
      saleOrderReturnList?: Array<{
        __typename?: 'PitayaReturnDetailPayload'
        createTime?: number
        differenceOrderType?: SchemaTypes.DifferenceOrderType
        remark?: string
        returnCode?: string
        returnId?: string
        returnStatus?: SchemaTypes.ReturnStatusEnum
        returnStatusName?: string
        returnTime?: number
        returnType?: SchemaTypes.ReturnTypeEnum
        returnTypeName?: string
        saleOrderCode?: string
        saleOrderId?: string
        saleReturnWay?: SchemaTypes.SaleReturnWayEnum
        saleReturnWayName?: string
        saleTime?: number
        belongOrg?: {
          __typename?: 'PitayaOrg'
          orgId?: number
          orgName?: string
        }
        createBy?: {
          __typename?: 'User'
          phoneNum?: string
          userId?: number
          userName?: string
        }
        customer?: {
          __typename?: 'Customer'
          customerId?: number
          customerName?: string
          customerType?: number
          lastLevelId?: number
          lastLevelName?: string
        }
        bill2FetchData?: {
          __typename?: 'Bill2FetchDataPayload'
          billMainId?: string
          templateId?: string
          totalTransportFees?: number
          billDetailsList?: Array<{
            __typename?: 'PitayaBillDetailPayload'
            billCostData?: string
            billDetailId?: string
            billMainId?: string
            businessItemValue?: string
            costAmount?: number
            costId?: string
            costName?: string
            dictItemId?: string
            note?: string
            paymentType?: number
            ruleCode?: string
            ruleId?: string
            showField?: number
            supplier?: {
              __typename?: 'Supplier'
              supplierId?: number
              supplierName?: string
            }
          }>
        }
        commodities?: Array<{
          __typename?: 'PitayaReturnCommodityDetailPayload'
          amount?: number
          commodityType?: number
          commodityTypeName?: string
          mark?: SchemaTypes.ApplyMarkEnum
          markName?: string
          returnId?: string
          returnType?: SchemaTypes.ReturnTypeEnum
          returnableAmount?: number
          returnableQuantity?: number
          commoditySku?: {
            __typename?: 'PitayaCommoditySku'
            categoryId?: number
            categoryName?: string
            commodityId?: number
            commodityName?: string
            commoditySkuId?: number
            commoditySkuName?: string
            commoditySpecOptionId?: Array<number>
            commoditySpecOptionName?: Array<string>
            availableSkuQuantity?: Array<{
              __typename?: 'AvailableSkuQuantity'
              conversion?: number
              businessUnit?: {
                __typename?: 'Unit'
                unitId?: number
                unitName?: string
              }
              unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
            }>
            baseUnit?: {
              __typename?: 'Unit'
              unitId?: number
              unitName?: string
            }
          }
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          batches?: Array<{
            __typename?: 'PitayaReturnCommodityBatchPayload'
            index?: number
            itemId?: string
            batchInfo?: {
              __typename?: 'BatchInfoWithWarehouse'
              batchCode?: string
              batchId?: string
              commodityTypeId?: number
              commodityTypeName?: string
              createTime?: number
              quantity?: number
              customer?: {
                __typename?: 'Customer'
                customerId?: number
                customerName?: string
                customerType?: number
                lastLevelId?: number
                lastLevelName?: string
              }
              unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
              warehouse?: {
                __typename?: 'Warehouse'
                warehouseId?: string
                warehouseName?: string
              }
              quantityItem?: Array<{
                __typename?: 'DynamicQuantity'
                quantity?: number
                unit?: {
                  __typename?: 'Unit'
                  unitId?: number
                  unitName?: string
                }
              }>
            }
            batch?: {
              __typename?: 'StockBatch'
              batchCode?: string
              batchId?: string
              createTime?: number
              quantity?: number
              sourceBatchCode?: string
              sourceBatchId?: string
              unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
              quantityItem?: Array<{
                __typename?: 'DynamicQuantity'
                quantity?: number
                unit?: {
                  __typename?: 'Unit'
                  unitId?: number
                  unitName?: string
                }
              }>
            }
            dynamicQuantity?: {
              __typename?: 'DynamicQuantityCalculateEntity'
              quantity?: number
              unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
              quantityItem?: Array<{
                __typename?: 'DynamicQuantity'
                quantity?: number
                unit?: {
                  __typename?: 'Unit'
                  unitId?: number
                  unitName?: string
                }
              }>
            }
          }>
          saleData?: {
            __typename?: 'PitayaSaleData'
            quantity?: number
            saleOrderId?: number
            salePrice?: number
            saleTotalPrice?: number
          }
          stockQuantity?: Array<{
            __typename?: 'DynamicQuantity'
            quantity?: number
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          }>
        }>
        sourceBill2Data?: {
          __typename?: 'Bill2FetchDataPayload'
          billMainId?: string
          templateId?: string
          totalTransportFees?: number
          billDetailsList?: Array<{
            __typename?: 'PitayaBillDetailPayload'
            billCostData?: string
            billDetailId?: string
            billMainId?: string
            businessItemValue?: string
            costAmount?: number
            costId?: string
            costName?: string
            dictItemId?: string
            note?: string
            paymentType?: number
            ruleCode?: string
            ruleId?: string
            showField?: number
            supplier?: {
              __typename?: 'Supplier'
              supplierId?: number
              supplierName?: string
            }
          }>
        }
      }>
    }>
  }
}

export type SaleInvoiceBadgeQueryVariables = SchemaTypes.Exact<{
  [key: string]: never
}>

export type SaleInvoiceBadgeQuery = {
  saleInvoiceBadge?: {
    __typename?: 'SaleInvoiceBadgePayLoad'
    toBeSubmit?: number
  }
}

export type SaleInvoiceDetailQueryVariables = SchemaTypes.Exact<{
  orderId: SchemaTypes.Scalars['ID']
}>

export type SaleInvoiceDetailQuery = {
  saleInvoiceDetail?: {
    __typename?: 'SaleInvoicePayLoad'
    createTime?: number
    deliveryCount?: number
    deliveryType?: SchemaTypes.DeliveryTypeEnum
    deliveryTypeDesc?: string
    orderCode?: string
    orderId?: string
    orderStatus?: SchemaTypes.SaleStatusEnum
    orderStatusDesc?: string
    orderType?: SchemaTypes.PitayaBusinessTypeEnum
    orderTypeDesc?: string
    payMode?: SchemaTypes.SaleInvoicePayModeEnum
    payModeDesc?: string
    remark?: string
    saleReturnCount?: number
    saleTime?: number
    type?: SchemaTypes.PitayaCustomerType
    saleIncomeId?: string
    belongOrg?: { __typename?: 'PitayaOrg'; orgId?: number; orgName?: string }
    createUser?: {
      __typename?: 'User'
      phoneNum?: string
      userId?: number
      userName?: string
    }
    customer?: {
      __typename?: 'Customer'
      customerId?: number
      customerName?: string
      customerType?: number
      lastLevelId?: number
      lastLevelName?: string
    }
    commodityList?: Array<{
      __typename?: 'SaleInvoiceItemPayload'
      commodityTypeId?: number
      commodityTypeName?: string
      orderId?: string
      orderItemId?: string
      salePrice?: number
      saleTotalPrice?: number
      mark?: SchemaTypes.ApplyMarkEnum
      markName?: string
      index?: number
      batchInfo?: {
        __typename?: 'BatchInfoWithWarehouse'
        batchCode?: string
        batchId?: string
        createTime?: number
        commodityTypeId?: number
        commodityTypeName?: string
        quantity?: number
        warehouse?: {
          __typename?: 'Warehouse'
          warehouseId?: string
          warehouseName?: string
        }
        customer?: {
          __typename?: 'Customer'
          customerId?: number
          customerName?: string
          customerType?: number
          lastLevelId?: number
          lastLevelName?: string
        }
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        quantityItem?: Array<{
          __typename?: 'DynamicQuantity'
          quantity?: number
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
      }
      commoditySku?: {
        __typename?: 'PitayaCommoditySku'
        categoryId?: number
        categoryName?: string
        commodityId?: number
        commodityName?: string
        commoditySkuId?: number
        commoditySkuName?: string
        commoditySpecOptionId?: Array<number>
        commoditySpecOptionName?: Array<string>
        availableSkuQuantity?: Array<{
          __typename?: 'AvailableSkuQuantity'
          conversion?: number
          businessUnit?: {
            __typename?: 'Unit'
            unitId?: number
            unitName?: string
          }
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
        baseUnit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }
      photos?: {
        __typename?: 'PhotoFile'
        fileInfoList?: Array<{
          __typename?: 'FileInfoPayLoad'
          accessType?: SchemaTypes.AccessType
          contentType?: string
          createTime?: number
          fileUrl?: string
          id?: string
          name?: string
          size?: number
          tags?: Array<string>
          updateTime?: number
        }>
      }
      ableSaleQuantity?: Array<{
        __typename?: 'DynamicQuantity'
        quantity?: number
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }>
      dynamicQuantity?: {
        __typename?: 'DynamicQuantityCalculateEntity'
        quantity?: number
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        quantityItem?: Array<{
          __typename?: 'DynamicQuantity'
          quantity?: number
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
      }
    }>
    saleOrderReturnList?: Array<{
      __typename?: 'PitayaReturnDetailPayload'
      createTime?: number
      remark?: string
      returnCode?: string
      returnId?: string
      returnStatus?: SchemaTypes.ReturnStatusEnum
      returnStatusName?: string
      returnTime?: number
      returnType?: SchemaTypes.ReturnTypeEnum
      returnTypeName?: string
      saleOrderCode?: string
      saleOrderId?: string
      saleTime?: number
      differenceOrderType?: SchemaTypes.DifferenceOrderType
      saleReturnWay?: SchemaTypes.SaleReturnWayEnum
      saleReturnWayName?: string
      belongOrg?: { __typename?: 'PitayaOrg'; orgId?: number; orgName?: string }
      createBy?: {
        __typename?: 'User'
        phoneNum?: string
        userId?: number
        userName?: string
      }
      customer?: {
        __typename?: 'Customer'
        customerId?: number
        customerName?: string
        customerType?: number
        lastLevelId?: number
        lastLevelName?: string
      }
      commodities?: Array<{
        __typename?: 'PitayaReturnCommodityDetailPayload'
        commodityType?: number
        commodityTypeName?: string
        returnId?: string
        returnType?: SchemaTypes.ReturnTypeEnum
        returnableQuantity?: number
        amount?: number
        returnableAmount?: number
        mark?: SchemaTypes.ApplyMarkEnum
        markName?: string
        commoditySku?: {
          __typename?: 'PitayaCommoditySku'
          categoryId?: number
          categoryName?: string
          commodityId?: number
          commodityName?: string
          commoditySkuId?: number
          commoditySkuName?: string
          commoditySpecOptionId?: Array<number>
          commoditySpecOptionName?: Array<string>
          availableSkuQuantity?: Array<{
            __typename?: 'AvailableSkuQuantity'
            conversion?: number
            businessUnit?: {
              __typename?: 'Unit'
              unitId?: number
              unitName?: string
            }
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
          }>
          baseUnit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }
        batches?: Array<{
          __typename?: 'PitayaReturnCommodityBatchPayload'
          itemId?: string
          index?: number
          batchInfo?: {
            __typename?: 'BatchInfoWithWarehouse'
            batchCode?: string
            batchId?: string
            createTime?: number
            commodityTypeId?: number
            commodityTypeName?: string
            quantity?: number
            warehouse?: {
              __typename?: 'Warehouse'
              warehouseId?: string
              warehouseName?: string
            }
            customer?: {
              __typename?: 'Customer'
              customerId?: number
              customerName?: string
              customerType?: number
              lastLevelId?: number
              lastLevelName?: string
            }
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
            quantityItem?: Array<{
              __typename?: 'DynamicQuantity'
              quantity?: number
              unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
            }>
          }
          batch?: {
            __typename?: 'StockBatch'
            batchCode?: string
            batchId?: string
            createTime?: number
            quantity?: number
            sourceBatchCode?: string
            sourceBatchId?: string
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
            quantityItem?: Array<{
              __typename?: 'DynamicQuantity'
              quantity?: number
              unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
            }>
          }
          dynamicQuantity?: {
            __typename?: 'DynamicQuantityCalculateEntity'
            quantity?: number
            unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
            quantityItem?: Array<{
              __typename?: 'DynamicQuantity'
              quantity?: number
              unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
            }>
          }
        }>
        saleData?: {
          __typename?: 'PitayaSaleData'
          salePrice?: number
          saleTotalPrice?: number
          quantity?: number
          saleOrderId?: number
        }
        stockQuantity?: Array<{
          __typename?: 'DynamicQuantity'
          quantity?: number
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
        unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }>
      bill2FetchData?: {
        __typename?: 'Bill2FetchDataPayload'
        billMainId?: string
        templateId?: string
        totalTransportFees?: number
        billDetailsList?: Array<{
          __typename?: 'PitayaBillDetailPayload'
          billCostData?: string
          billDetailId?: string
          billMainId?: string
          businessItemValue?: string
          costAmount?: number
          costId?: string
          costName?: string
          dictItemId?: string
          note?: string
          paymentType?: number
          ruleCode?: string
          ruleId?: string
          showField?: number
          supplier?: {
            __typename?: 'Supplier'
            supplierId?: number
            supplierName?: string
          }
        }>
      }
      sourceBill2Data?: {
        __typename?: 'Bill2FetchDataPayload'
        billMainId?: string
        templateId?: string
        totalTransportFees?: number
        billDetailsList?: Array<{
          __typename?: 'PitayaBillDetailPayload'
          billCostData?: string
          billDetailId?: string
          billMainId?: string
          businessItemValue?: string
          costAmount?: number
          costId?: string
          costName?: string
          dictItemId?: string
          note?: string
          paymentType?: number
          ruleCode?: string
          ruleId?: string
          showField?: number
          supplier?: {
            __typename?: 'Supplier'
            supplierId?: number
            supplierName?: string
          }
        }>
      }
    }>
  }
}

export type SaleInvoicePayModeQueryVariables = SchemaTypes.Exact<{
  [key: string]: never
}>

export type SaleInvoicePayModeQuery = {
  saleInvoicePayMode?: Array<{
    __typename?: 'StringOption'
    label?: string
    value?: string
  }>
}

export type SaleInvoiceTimeLimitBadgeQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SaleInvoiceTimeLimitBadgeInput>
}>

export type SaleInvoiceTimeLimitBadgeQuery = {
  saleInvoiceTimeLimitBadge?: {
    __typename?: 'SaleInvoiceBadgeTimeLimitPayLoad'
    toBeProcessed?: number
  }
}

export type CancelSaleInvoiceMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CancelSaleInvoiceInput>
}>

export type CancelSaleInvoiceMutation = { cancelSaleInvoice?: boolean }

export type CreateSaleInvoiceMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreateOrUpdateSaleInvoiceInput>
}>

export type CreateSaleInvoiceMutation = { createSaleInvoice?: string }

export type SubmitSaleInvoiceMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.SubmitSaleInvoiceInput>
}>

export type SubmitSaleInvoiceMutation = { submitSaleInvoice?: boolean }

export type UpdateSaleInvoiceMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreateOrUpdateSaleInvoiceInput>
}>

export type UpdateSaleInvoiceMutation = { updateSaleInvoice?: boolean }

export type VoidSaleInvoiceMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.VoidSaleInvoiceInput>
}>

export type VoidSaleInvoiceMutation = { voidSaleInvoice?: boolean }

export type WithdrawSaleInvoiceMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.WithdrawSaleInvoiceInput>
}>

export type WithdrawSaleInvoiceMutation = { withdrawSaleInvoice?: boolean }

export type OneMoreSaleInvoiceMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.OneMoreSaleInvoiceInput>
}>

export type OneMoreSaleInvoiceMutation = {
  oneMoreSaleInvoice?: {
    __typename?: 'OneMoreSaleInvoicePayload'
    saleOrderId?: string
    outOfStockItems?: Array<{
      __typename?: 'SaleInvoiceOutOfStockItem'
      commoditySku?: {
        __typename?: 'PitayaCommoditySku'
        categoryId?: number
        categoryName?: string
        commodityId?: number
        commodityName?: string
        commoditySkuId?: number
        commoditySkuName?: string
        commoditySpecOptionId?: Array<number>
        commoditySpecOptionName?: Array<string>
        availableSkuQuantity?: Array<{
          __typename?: 'AvailableSkuQuantity'
          conversion?: number
          businessUnit?: {
            __typename?: 'Unit'
            unitId?: number
            unitName?: string
          }
          unit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
        }>
        baseUnit?: { __typename?: 'Unit'; unitId?: number; unitName?: string }
      }
    }>
  }
}

export const ListSaleInvoiceBatchDocument = gql`
  query listSaleInvoiceBatch($input: ListSaleInvoiceBatchInput) {
    listSaleInvoiceBatch(input: $input) {
      commoditySku {
        categoryId
        categoryName
        commodityId
        commodityName
        commoditySkuId
        commoditySkuName
        commoditySpecOptionId
        commoditySpecOptionName
        availableSkuQuantity {
          businessUnit {
            unitId
            unitName
          }
          unit {
            unitId
            unitName
          }
          conversion
        }
        baseUnit {
          unitId
          unitName
        }
      }
      batchCount
      batchItem {
        batchInfo {
          warehouse {
            warehouseId
            warehouseName
          }
          batchCode
          batchId
          createTime
          commodityTypeId
          commodityTypeName
          customer {
            customerId
            customerName
            customerType
            lastLevelId
            lastLevelName
          }
          unit {
            unitId
            unitName
          }
          quantity
          quantityItem {
            unit {
              unitId
              unitName
            }
            quantity
          }
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
          availableSkuQuantity {
            businessUnit {
              unitId
              unitName
            }
            unit {
              unitId
              unitName
            }
            conversion
          }
          baseUnit {
            unitId
            unitName
          }
        }
        customer {
          customerId
          customerName
          customerType
          lastLevelId
          lastLevelName
        }
        commodityTypeDesc
        commodityTypeId
        uniqueMark
        ableSaleQuantity {
          unit {
            unitId
            unitName
          }
          quantity
        }
        inStockTime
      }
    }
  }
`

/**
 * __useListSaleInvoiceBatchQuery__
 *
 * To run a query within a React component, call `useListSaleInvoiceBatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleInvoiceBatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleInvoiceBatchQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListSaleInvoiceBatchQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListSaleInvoiceBatchQuery,
    ListSaleInvoiceBatchQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ListSaleInvoiceBatchQuery,
    ListSaleInvoiceBatchQueryVariables
  >(ListSaleInvoiceBatchDocument, options)
}
export function useListSaleInvoiceBatchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListSaleInvoiceBatchQuery,
    ListSaleInvoiceBatchQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ListSaleInvoiceBatchQuery,
    ListSaleInvoiceBatchQueryVariables
  >(ListSaleInvoiceBatchDocument, options)
}
export type ListSaleInvoiceBatchQueryHookResult = ReturnType<
  typeof useListSaleInvoiceBatchQuery
>
export type ListSaleInvoiceBatchLazyQueryHookResult = ReturnType<
  typeof useListSaleInvoiceBatchLazyQuery
>
export type ListSaleInvoiceBatchQueryResult = Apollo.QueryResult<
  ListSaleInvoiceBatchQuery,
  ListSaleInvoiceBatchQueryVariables
>
export const ListSaleInvoiceCategoryDocument = gql`
  query listSaleInvoiceCategory($input: ListSaleInvoiceCategoryInput) {
    listSaleInvoiceCategory(input: $input) {
      categoryId
      categoryName
    }
  }
`

/**
 * __useListSaleInvoiceCategoryQuery__
 *
 * To run a query within a React component, call `useListSaleInvoiceCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleInvoiceCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleInvoiceCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListSaleInvoiceCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListSaleInvoiceCategoryQuery,
    ListSaleInvoiceCategoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ListSaleInvoiceCategoryQuery,
    ListSaleInvoiceCategoryQueryVariables
  >(ListSaleInvoiceCategoryDocument, options)
}
export function useListSaleInvoiceCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListSaleInvoiceCategoryQuery,
    ListSaleInvoiceCategoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ListSaleInvoiceCategoryQuery,
    ListSaleInvoiceCategoryQueryVariables
  >(ListSaleInvoiceCategoryDocument, options)
}
export type ListSaleInvoiceCategoryQueryHookResult = ReturnType<
  typeof useListSaleInvoiceCategoryQuery
>
export type ListSaleInvoiceCategoryLazyQueryHookResult = ReturnType<
  typeof useListSaleInvoiceCategoryLazyQuery
>
export type ListSaleInvoiceCategoryQueryResult = Apollo.QueryResult<
  ListSaleInvoiceCategoryQuery,
  ListSaleInvoiceCategoryQueryVariables
>
export const ListSaleInvoiceDeliveryDocument = gql`
  query listSaleInvoiceDelivery($orderId: ID!) {
    listSaleInvoiceDelivery(orderId: $orderId) {
      belongOrg {
        orgId
        orgName
      }
      createBy {
        phoneNum
        userId
        userName
      }
      org {
        orgId
        orgName
      }
      belongInfo {
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
      }
      businessUserName
      carNum
      carType
      completeTime
      createTime
      deliveryDate
      deliveryGoodsSource
      deliveryGoodsSourceDesc
      deliveryMode
      deliveryModeDesc
      deliveryOrderFee {
        billDetailsList {
          supplier {
            supplierId
            supplierName
          }
          billCostData
          billDetailId
          billMainId
          businessItemValue
          costAmount
          costId
          costName
          dictItemId
          note
          ruleCode
          ruleId
          showField
          paymentType
        }
        billMainId
        billTemplateId
      }
      deliveryOrderItem {
        customerBelongInfo {
          customerId
          customerName
          customerType
        }
        commodityDetail {
          sku {
            categoryId
            categoryName
            commodityId
            commodityName
            commoditySkuId
            commoditySkuName
            commoditySpecOptionId
            commoditySpecOptionName
            availableSkuQuantity {
              businessUnit {
                unitId
                unitName
              }
              unit {
                unitId
                unitName
              }
              conversion
            }
            baseUnit {
              unitId
              unitName
            }
          }
          commodityTypeId
          commodityTypeName
          deliveryOutItemId
          differenceReason
          itemId
          saleOrderItemId
          warehouse {
            address
            belongId
            belongType
            houseNumber
            id
            locationList
            name
            orgId
            remark
            status
            typeId
          }
          stockBatchInfo {
            customerBelongInfo {
              customerId
              customerName
              customerType
            }
            batchCode
            batchId
            createTime
            unit {
              unitId
              unitName
            }
            lockQuantity
            lockQuantityItem {
              unit {
                unitId
                unitName
              }
              quantity
            }
            quantity
            quantityItem {
              unit {
                unitId
                unitName
              }
              quantity
            }
          }
          unit {
            unitId
            unitName
          }
          actualQuantity
          deliverableQuantity
          deliveredQuantity
          differenceQuantity
          markList
          outQuantity
          quantity
          quantityItem {
            unit {
              unitId
              unitName
            }
            quantity
          }
          returnQuantity
        }
        itemId
        orderId
        outOrderId
        saleDeliveryOrderType
        sourceOrderCode
        sourceOrderId
        sourceOrderSaleDate
      }
      deliveryRequirement
      deliveryRequirementDesc
      deliveryReturnOrderCount
      driverContact
      driverName
      orderCode
      orderId
      orderStatus
      orderStatusDesc
      saleOrderDate
      statusNote
      supplementalOrderCount
      auditUser {
        phoneNum
        userId
        userName
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
    }
  }
`

/**
 * __useListSaleInvoiceDeliveryQuery__
 *
 * To run a query within a React component, call `useListSaleInvoiceDeliveryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleInvoiceDeliveryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleInvoiceDeliveryQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useListSaleInvoiceDeliveryQuery(
  baseOptions: Apollo.QueryHookOptions<
    ListSaleInvoiceDeliveryQuery,
    ListSaleInvoiceDeliveryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ListSaleInvoiceDeliveryQuery,
    ListSaleInvoiceDeliveryQueryVariables
  >(ListSaleInvoiceDeliveryDocument, options)
}
export function useListSaleInvoiceDeliveryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListSaleInvoiceDeliveryQuery,
    ListSaleInvoiceDeliveryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ListSaleInvoiceDeliveryQuery,
    ListSaleInvoiceDeliveryQueryVariables
  >(ListSaleInvoiceDeliveryDocument, options)
}
export type ListSaleInvoiceDeliveryQueryHookResult = ReturnType<
  typeof useListSaleInvoiceDeliveryQuery
>
export type ListSaleInvoiceDeliveryLazyQueryHookResult = ReturnType<
  typeof useListSaleInvoiceDeliveryLazyQuery
>
export type ListSaleInvoiceDeliveryQueryResult = Apollo.QueryResult<
  ListSaleInvoiceDeliveryQuery,
  ListSaleInvoiceDeliveryQueryVariables
>
export const ListSaleInvoiceSkuByNameDocument = gql`
  query listSaleInvoiceSkuByName($input: ListSaleInvoiceSkuByNameInput) {
    listSaleInvoiceSkuByName(input: $input) {
      commoditySku {
        categoryId
        categoryName
        commodityId
        commodityName
        commoditySkuId
        commoditySkuName
        commoditySpecOptionId
        commoditySpecOptionName
        availableSkuQuantity {
          businessUnit {
            unitId
            unitName
          }
          unit {
            unitId
            unitName
          }
          conversion
        }
        baseUnit {
          unitId
          unitName
        }
      }
    }
  }
`

/**
 * __useListSaleInvoiceSkuByNameQuery__
 *
 * To run a query within a React component, call `useListSaleInvoiceSkuByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleInvoiceSkuByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleInvoiceSkuByNameQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListSaleInvoiceSkuByNameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListSaleInvoiceSkuByNameQuery,
    ListSaleInvoiceSkuByNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ListSaleInvoiceSkuByNameQuery,
    ListSaleInvoiceSkuByNameQueryVariables
  >(ListSaleInvoiceSkuByNameDocument, options)
}
export function useListSaleInvoiceSkuByNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListSaleInvoiceSkuByNameQuery,
    ListSaleInvoiceSkuByNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ListSaleInvoiceSkuByNameQuery,
    ListSaleInvoiceSkuByNameQueryVariables
  >(ListSaleInvoiceSkuByNameDocument, options)
}
export type ListSaleInvoiceSkuByNameQueryHookResult = ReturnType<
  typeof useListSaleInvoiceSkuByNameQuery
>
export type ListSaleInvoiceSkuByNameLazyQueryHookResult = ReturnType<
  typeof useListSaleInvoiceSkuByNameLazyQuery
>
export type ListSaleInvoiceSkuByNameQueryResult = Apollo.QueryResult<
  ListSaleInvoiceSkuByNameQuery,
  ListSaleInvoiceSkuByNameQueryVariables
>
export const ListSaleInvoiceSpuAndSkuDocument = gql`
  query listSaleInvoiceSpuAndSku($input: ListSaleInvoiceSpuAndSkuInput) {
    listSaleInvoiceSpuAndSku(input: $input) {
      commodityId
      commodityName
      commoditySkuList {
        commoditySku {
          categoryId
          categoryName
          commodityId
          commodityName
          commoditySkuId
          commoditySkuName
          commoditySpecOptionId
          commoditySpecOptionName
          availableSkuQuantity {
            businessUnit {
              unitId
              unitName
            }
            unit {
              unitId
              unitName
            }
            conversion
          }
          baseUnit {
            unitId
            unitName
          }
        }
      }
    }
  }
`

/**
 * __useListSaleInvoiceSpuAndSkuQuery__
 *
 * To run a query within a React component, call `useListSaleInvoiceSpuAndSkuQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleInvoiceSpuAndSkuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleInvoiceSpuAndSkuQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListSaleInvoiceSpuAndSkuQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListSaleInvoiceSpuAndSkuQuery,
    ListSaleInvoiceSpuAndSkuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ListSaleInvoiceSpuAndSkuQuery,
    ListSaleInvoiceSpuAndSkuQueryVariables
  >(ListSaleInvoiceSpuAndSkuDocument, options)
}
export function useListSaleInvoiceSpuAndSkuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListSaleInvoiceSpuAndSkuQuery,
    ListSaleInvoiceSpuAndSkuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ListSaleInvoiceSpuAndSkuQuery,
    ListSaleInvoiceSpuAndSkuQueryVariables
  >(ListSaleInvoiceSpuAndSkuDocument, options)
}
export type ListSaleInvoiceSpuAndSkuQueryHookResult = ReturnType<
  typeof useListSaleInvoiceSpuAndSkuQuery
>
export type ListSaleInvoiceSpuAndSkuLazyQueryHookResult = ReturnType<
  typeof useListSaleInvoiceSpuAndSkuLazyQuery
>
export type ListSaleInvoiceSpuAndSkuQueryResult = Apollo.QueryResult<
  ListSaleInvoiceSpuAndSkuQuery,
  ListSaleInvoiceSpuAndSkuQueryVariables
>
export const PageSaleInvoiceDocument = gql`
  query pageSaleInvoice($input: PageSaleInvoiceInput, $page: Page) {
    pageSaleInvoice(input: $input, page: $page) {
      pageCurrent
      pageSize
      records {
        belongOrg {
          orgId
          orgName
        }
        createUser {
          phoneNum
          userId
          userName
        }
        customer {
          customerId
          customerName
          customerType
          lastLevelId
          lastLevelName
        }
        commodityList {
          batchInfo {
            warehouse {
              warehouseId
              warehouseName
            }
            batchCode
            batchId
            createTime
            customer {
              customerId
              customerName
              customerType
              lastLevelId
              lastLevelName
            }
            unit {
              unitId
              unitName
            }
            commodityTypeId
            commodityTypeName
            quantity
            quantityItem {
              unit {
                unitId
                unitName
              }
              quantity
            }
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
            availableSkuQuantity {
              businessUnit {
                unitId
                unitName
              }
              unit {
                unitId
                unitName
              }
              conversion
            }
            baseUnit {
              unitId
              unitName
            }
          }
          commodityTypeId
          commodityTypeName
          orderId
          orderItemId
          salePrice
          saleTotalPrice
          ableSaleQuantity {
            unit {
              unitId
              unitName
            }
            quantity
          }
          dynamicQuantity {
            unit {
              unitId
              unitName
            }
            quantity
            quantityItem {
              unit {
                unitId
                unitName
              }
              quantity
            }
          }
          index
          mark
          markName
          photos {
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
          }
        }
        createTime
        orderCode
        orderId
        orderStatus
        orderStatusDesc
        orderType
        orderTypeDesc
        remark
        saleTime
        deliveryType
        deliveryTypeDesc
        deliveryCount
        payMode
        payModeDesc
        saleIncomeId
        saleOrderReturnList {
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
            lastLevelName
          }
          bill2FetchData {
            billDetailsList {
              supplier {
                supplierId
                supplierName
              }
              billCostData
              billDetailId
              billMainId
              businessItemValue
              costAmount
              costId
              costName
              dictItemId
              note
              paymentType
              ruleCode
              ruleId
              showField
            }
            billMainId
            templateId
            totalTransportFees
          }
          commodities {
            commoditySku {
              availableSkuQuantity {
                businessUnit {
                  unitId
                  unitName
                }
                unit {
                  unitId
                  unitName
                }
                conversion
              }
              baseUnit {
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
            }
            unit {
              unitId
              unitName
            }
            amount
            batches {
              batchInfo {
                customer {
                  customerId
                  customerName
                  customerType
                  lastLevelId
                  lastLevelName
                }
                unit {
                  unitId
                  unitName
                }
                warehouse {
                  warehouseId
                  warehouseName
                }
                batchCode
                batchId
                commodityTypeId
                commodityTypeName
                createTime
                quantity
                quantityItem {
                  unit {
                    unitId
                    unitName
                  }
                  quantity
                }
              }
              batch {
                unit {
                  unitId
                  unitName
                }
                batchCode
                batchId
                createTime
                quantity
                quantityItem {
                  unit {
                    unitId
                    unitName
                  }
                  quantity
                }
                sourceBatchCode
                sourceBatchId
              }
              dynamicQuantity {
                unit {
                  unitId
                  unitName
                }
                quantity
                quantityItem {
                  unit {
                    unitId
                    unitName
                  }
                  quantity
                }
              }
              index
              itemId
            }
            commodityType
            commodityTypeName
            mark
            markName
            returnId
            returnType
            returnableAmount
            returnableQuantity
            saleData {
              quantity
              saleOrderId
              salePrice
              saleTotalPrice
            }
            stockQuantity {
              unit {
                unitId
                unitName
              }
              quantity
            }
          }
          createTime
          differenceOrderType
          remark
          returnCode
          returnId
          returnStatus
          returnStatusName
          returnTime
          returnType
          returnTypeName
          saleOrderCode
          saleOrderId
          saleReturnWay
          saleReturnWayName
          saleTime
          sourceBill2Data {
            billDetailsList {
              supplier {
                supplierId
                supplierName
              }
              billCostData
              billDetailId
              billMainId
              businessItemValue
              costAmount
              costId
              costName
              dictItemId
              note
              paymentType
              ruleCode
              ruleId
              showField
            }
            billMainId
            templateId
            totalTransportFees
          }
        }
        saleReturnCount
        type
      }
      totalRecords
    }
  }
`

/**
 * __usePageSaleInvoiceQuery__
 *
 * To run a query within a React component, call `usePageSaleInvoiceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSaleInvoiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSaleInvoiceQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageSaleInvoiceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PageSaleInvoiceQuery,
    PageSaleInvoiceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageSaleInvoiceQuery, PageSaleInvoiceQueryVariables>(
    PageSaleInvoiceDocument,
    options,
  )
}
export function usePageSaleInvoiceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PageSaleInvoiceQuery,
    PageSaleInvoiceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    PageSaleInvoiceQuery,
    PageSaleInvoiceQueryVariables
  >(PageSaleInvoiceDocument, options)
}
export type PageSaleInvoiceQueryHookResult = ReturnType<
  typeof usePageSaleInvoiceQuery
>
export type PageSaleInvoiceLazyQueryHookResult = ReturnType<
  typeof usePageSaleInvoiceLazyQuery
>
export type PageSaleInvoiceQueryResult = Apollo.QueryResult<
  PageSaleInvoiceQuery,
  PageSaleInvoiceQueryVariables
>
export const SaleInvoiceBadgeDocument = gql`
  query saleInvoiceBadge {
    saleInvoiceBadge {
      toBeSubmit
    }
  }
`

/**
 * __useSaleInvoiceBadgeQuery__
 *
 * To run a query within a React component, call `useSaleInvoiceBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleInvoiceBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleInvoiceBadgeQuery({
 *   variables: {
 *   },
 * });
 */
export function useSaleInvoiceBadgeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SaleInvoiceBadgeQuery,
    SaleInvoiceBadgeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SaleInvoiceBadgeQuery, SaleInvoiceBadgeQueryVariables>(
    SaleInvoiceBadgeDocument,
    options,
  )
}
export function useSaleInvoiceBadgeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SaleInvoiceBadgeQuery,
    SaleInvoiceBadgeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SaleInvoiceBadgeQuery,
    SaleInvoiceBadgeQueryVariables
  >(SaleInvoiceBadgeDocument, options)
}
export type SaleInvoiceBadgeQueryHookResult = ReturnType<
  typeof useSaleInvoiceBadgeQuery
>
export type SaleInvoiceBadgeLazyQueryHookResult = ReturnType<
  typeof useSaleInvoiceBadgeLazyQuery
>
export type SaleInvoiceBadgeQueryResult = Apollo.QueryResult<
  SaleInvoiceBadgeQuery,
  SaleInvoiceBadgeQueryVariables
>
export const SaleInvoiceDetailDocument = gql`
  query saleInvoiceDetail($orderId: ID!) {
    saleInvoiceDetail(orderId: $orderId) {
      belongOrg {
        orgId
        orgName
      }
      createUser {
        phoneNum
        userId
        userName
      }
      customer {
        customerId
        customerName
        customerType
        lastLevelId
        lastLevelName
      }
      commodityList {
        batchInfo {
          warehouse {
            warehouseId
            warehouseName
          }
          batchCode
          batchId
          createTime
          commodityTypeId
          commodityTypeName
          customer {
            customerId
            customerName
            customerType
            lastLevelId
            lastLevelName
          }
          unit {
            unitId
            unitName
          }
          quantity
          quantityItem {
            unit {
              unitId
              unitName
            }
            quantity
          }
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
          availableSkuQuantity {
            businessUnit {
              unitId
              unitName
            }
            unit {
              unitId
              unitName
            }
            conversion
          }
          baseUnit {
            unitId
            unitName
          }
        }
        commodityTypeId
        commodityTypeName
        orderId
        orderItemId
        photos {
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
        }
        salePrice
        saleTotalPrice
        ableSaleQuantity {
          unit {
            unitId
            unitName
          }
          quantity
        }
        mark
        markName
        dynamicQuantity {
          unit {
            unitId
            unitName
          }
          quantity
          quantityItem {
            unit {
              unitId
              unitName
            }
            quantity
          }
        }
        index
      }
      createTime
      deliveryCount
      deliveryType
      deliveryTypeDesc
      orderCode
      orderId
      orderStatus
      orderStatusDesc
      orderType
      orderTypeDesc
      payMode
      payModeDesc
      remark
      saleOrderReturnList {
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
          lastLevelName
        }
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
            availableSkuQuantity {
              businessUnit {
                unitId
                unitName
              }
              unit {
                unitId
                unitName
              }
              conversion
            }
            baseUnit {
              unitId
              unitName
            }
          }
          batches {
            batchInfo {
              warehouse {
                warehouseId
                warehouseName
              }
              batchCode
              batchId
              createTime
              commodityTypeId
              commodityTypeName
              customer {
                customerId
                customerName
                customerType
                lastLevelId
                lastLevelName
              }
              unit {
                unitId
                unitName
              }
              quantity
              quantityItem {
                unit {
                  unitId
                  unitName
                }
                quantity
              }
            }
            itemId
            batch {
              unit {
                unitId
                unitName
              }
              batchCode
              batchId
              createTime
              quantity
              quantityItem {
                unit {
                  unitId
                  unitName
                }
                quantity
              }
              sourceBatchCode
              sourceBatchId
            }
            dynamicQuantity {
              unit {
                unitId
                unitName
              }
              quantity
              quantityItem {
                unit {
                  unitId
                  unitName
                }
                quantity
              }
            }
            index
          }
          commodityType
          commodityTypeName
          returnId
          returnType
          returnableQuantity
          saleData {
            salePrice
            saleTotalPrice
            quantity
            saleOrderId
          }
          stockQuantity {
            unit {
              unitId
              unitName
            }
            quantity
          }
          amount
          returnableAmount
          mark
          markName
          unit {
            unitId
            unitName
          }
        }
        createTime
        remark
        returnCode
        returnId
        returnStatus
        returnStatusName
        returnTime
        returnType
        returnTypeName
        saleOrderCode
        saleOrderId
        saleTime
        differenceOrderType
        saleReturnWay
        saleReturnWayName
        bill2FetchData {
          billDetailsList {
            supplier {
              supplierId
              supplierName
            }
            billCostData
            billDetailId
            billMainId
            businessItemValue
            costAmount
            costId
            costName
            dictItemId
            note
            paymentType
            ruleCode
            ruleId
            showField
          }
          billMainId
          templateId
          totalTransportFees
        }
        sourceBill2Data {
          billDetailsList {
            supplier {
              supplierId
              supplierName
            }
            billCostData
            billDetailId
            billMainId
            businessItemValue
            costAmount
            costId
            costName
            dictItemId
            note
            paymentType
            ruleCode
            ruleId
            showField
          }
          billMainId
          templateId
          totalTransportFees
        }
      }
      saleReturnCount
      saleTime
      type
      saleIncomeId
    }
  }
`

/**
 * __useSaleInvoiceDetailQuery__
 *
 * To run a query within a React component, call `useSaleInvoiceDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleInvoiceDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleInvoiceDetailQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useSaleInvoiceDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    SaleInvoiceDetailQuery,
    SaleInvoiceDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    SaleInvoiceDetailQuery,
    SaleInvoiceDetailQueryVariables
  >(SaleInvoiceDetailDocument, options)
}
export function useSaleInvoiceDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SaleInvoiceDetailQuery,
    SaleInvoiceDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SaleInvoiceDetailQuery,
    SaleInvoiceDetailQueryVariables
  >(SaleInvoiceDetailDocument, options)
}
export type SaleInvoiceDetailQueryHookResult = ReturnType<
  typeof useSaleInvoiceDetailQuery
>
export type SaleInvoiceDetailLazyQueryHookResult = ReturnType<
  typeof useSaleInvoiceDetailLazyQuery
>
export type SaleInvoiceDetailQueryResult = Apollo.QueryResult<
  SaleInvoiceDetailQuery,
  SaleInvoiceDetailQueryVariables
>
export const SaleInvoicePayModeDocument = gql`
  query saleInvoicePayMode {
    saleInvoicePayMode {
      label
      value
    }
  }
`

/**
 * __useSaleInvoicePayModeQuery__
 *
 * To run a query within a React component, call `useSaleInvoicePayModeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleInvoicePayModeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleInvoicePayModeQuery({
 *   variables: {
 *   },
 * });
 */
export function useSaleInvoicePayModeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SaleInvoicePayModeQuery,
    SaleInvoicePayModeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    SaleInvoicePayModeQuery,
    SaleInvoicePayModeQueryVariables
  >(SaleInvoicePayModeDocument, options)
}
export function useSaleInvoicePayModeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SaleInvoicePayModeQuery,
    SaleInvoicePayModeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SaleInvoicePayModeQuery,
    SaleInvoicePayModeQueryVariables
  >(SaleInvoicePayModeDocument, options)
}
export type SaleInvoicePayModeQueryHookResult = ReturnType<
  typeof useSaleInvoicePayModeQuery
>
export type SaleInvoicePayModeLazyQueryHookResult = ReturnType<
  typeof useSaleInvoicePayModeLazyQuery
>
export type SaleInvoicePayModeQueryResult = Apollo.QueryResult<
  SaleInvoicePayModeQuery,
  SaleInvoicePayModeQueryVariables
>
export const SaleInvoiceTimeLimitBadgeDocument = gql`
  query saleInvoiceTimeLimitBadge($input: SaleInvoiceTimeLimitBadgeInput) {
    saleInvoiceTimeLimitBadge(input: $input) {
      toBeProcessed
    }
  }
`

/**
 * __useSaleInvoiceTimeLimitBadgeQuery__
 *
 * To run a query within a React component, call `useSaleInvoiceTimeLimitBadgeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleInvoiceTimeLimitBadgeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleInvoiceTimeLimitBadgeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSaleInvoiceTimeLimitBadgeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SaleInvoiceTimeLimitBadgeQuery,
    SaleInvoiceTimeLimitBadgeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    SaleInvoiceTimeLimitBadgeQuery,
    SaleInvoiceTimeLimitBadgeQueryVariables
  >(SaleInvoiceTimeLimitBadgeDocument, options)
}
export function useSaleInvoiceTimeLimitBadgeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SaleInvoiceTimeLimitBadgeQuery,
    SaleInvoiceTimeLimitBadgeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SaleInvoiceTimeLimitBadgeQuery,
    SaleInvoiceTimeLimitBadgeQueryVariables
  >(SaleInvoiceTimeLimitBadgeDocument, options)
}
export type SaleInvoiceTimeLimitBadgeQueryHookResult = ReturnType<
  typeof useSaleInvoiceTimeLimitBadgeQuery
>
export type SaleInvoiceTimeLimitBadgeLazyQueryHookResult = ReturnType<
  typeof useSaleInvoiceTimeLimitBadgeLazyQuery
>
export type SaleInvoiceTimeLimitBadgeQueryResult = Apollo.QueryResult<
  SaleInvoiceTimeLimitBadgeQuery,
  SaleInvoiceTimeLimitBadgeQueryVariables
>
export const CancelSaleInvoiceDocument = gql`
  mutation cancelSaleInvoice($input: CancelSaleInvoiceInput) {
    cancelSaleInvoice(input: $input)
  }
`
export type CancelSaleInvoiceMutationFn = Apollo.MutationFunction<
  CancelSaleInvoiceMutation,
  CancelSaleInvoiceMutationVariables
>

/**
 * __useCancelSaleInvoiceMutation__
 *
 * To run a mutation, you first call `useCancelSaleInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelSaleInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelSaleInvoiceMutation, { data, loading, error }] = useCancelSaleInvoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelSaleInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CancelSaleInvoiceMutation,
    CancelSaleInvoiceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CancelSaleInvoiceMutation,
    CancelSaleInvoiceMutationVariables
  >(CancelSaleInvoiceDocument, options)
}
export type CancelSaleInvoiceMutationHookResult = ReturnType<
  typeof useCancelSaleInvoiceMutation
>
export type CancelSaleInvoiceMutationResult =
  Apollo.MutationResult<CancelSaleInvoiceMutation>
export type CancelSaleInvoiceMutationOptions = Apollo.BaseMutationOptions<
  CancelSaleInvoiceMutation,
  CancelSaleInvoiceMutationVariables
>
export const CreateSaleInvoiceDocument = gql`
  mutation createSaleInvoice($input: CreateOrUpdateSaleInvoiceInput) {
    createSaleInvoice(input: $input)
  }
`
export type CreateSaleInvoiceMutationFn = Apollo.MutationFunction<
  CreateSaleInvoiceMutation,
  CreateSaleInvoiceMutationVariables
>

/**
 * __useCreateSaleInvoiceMutation__
 *
 * To run a mutation, you first call `useCreateSaleInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSaleInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSaleInvoiceMutation, { data, loading, error }] = useCreateSaleInvoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSaleInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSaleInvoiceMutation,
    CreateSaleInvoiceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSaleInvoiceMutation,
    CreateSaleInvoiceMutationVariables
  >(CreateSaleInvoiceDocument, options)
}
export type CreateSaleInvoiceMutationHookResult = ReturnType<
  typeof useCreateSaleInvoiceMutation
>
export type CreateSaleInvoiceMutationResult =
  Apollo.MutationResult<CreateSaleInvoiceMutation>
export type CreateSaleInvoiceMutationOptions = Apollo.BaseMutationOptions<
  CreateSaleInvoiceMutation,
  CreateSaleInvoiceMutationVariables
>
export const SubmitSaleInvoiceDocument = gql`
  mutation submitSaleInvoice($input: SubmitSaleInvoiceInput) {
    submitSaleInvoice(input: $input)
  }
`
export type SubmitSaleInvoiceMutationFn = Apollo.MutationFunction<
  SubmitSaleInvoiceMutation,
  SubmitSaleInvoiceMutationVariables
>

/**
 * __useSubmitSaleInvoiceMutation__
 *
 * To run a mutation, you first call `useSubmitSaleInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitSaleInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitSaleInvoiceMutation, { data, loading, error }] = useSubmitSaleInvoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitSaleInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubmitSaleInvoiceMutation,
    SubmitSaleInvoiceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SubmitSaleInvoiceMutation,
    SubmitSaleInvoiceMutationVariables
  >(SubmitSaleInvoiceDocument, options)
}
export type SubmitSaleInvoiceMutationHookResult = ReturnType<
  typeof useSubmitSaleInvoiceMutation
>
export type SubmitSaleInvoiceMutationResult =
  Apollo.MutationResult<SubmitSaleInvoiceMutation>
export type SubmitSaleInvoiceMutationOptions = Apollo.BaseMutationOptions<
  SubmitSaleInvoiceMutation,
  SubmitSaleInvoiceMutationVariables
>
export const UpdateSaleInvoiceDocument = gql`
  mutation updateSaleInvoice($input: CreateOrUpdateSaleInvoiceInput) {
    updateSaleInvoice(input: $input)
  }
`
export type UpdateSaleInvoiceMutationFn = Apollo.MutationFunction<
  UpdateSaleInvoiceMutation,
  UpdateSaleInvoiceMutationVariables
>

/**
 * __useUpdateSaleInvoiceMutation__
 *
 * To run a mutation, you first call `useUpdateSaleInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSaleInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSaleInvoiceMutation, { data, loading, error }] = useUpdateSaleInvoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSaleInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSaleInvoiceMutation,
    UpdateSaleInvoiceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateSaleInvoiceMutation,
    UpdateSaleInvoiceMutationVariables
  >(UpdateSaleInvoiceDocument, options)
}
export type UpdateSaleInvoiceMutationHookResult = ReturnType<
  typeof useUpdateSaleInvoiceMutation
>
export type UpdateSaleInvoiceMutationResult =
  Apollo.MutationResult<UpdateSaleInvoiceMutation>
export type UpdateSaleInvoiceMutationOptions = Apollo.BaseMutationOptions<
  UpdateSaleInvoiceMutation,
  UpdateSaleInvoiceMutationVariables
>
export const VoidSaleInvoiceDocument = gql`
  mutation voidSaleInvoice($input: VoidSaleInvoiceInput) {
    voidSaleInvoice(input: $input)
  }
`
export type VoidSaleInvoiceMutationFn = Apollo.MutationFunction<
  VoidSaleInvoiceMutation,
  VoidSaleInvoiceMutationVariables
>

/**
 * __useVoidSaleInvoiceMutation__
 *
 * To run a mutation, you first call `useVoidSaleInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoidSaleInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voidSaleInvoiceMutation, { data, loading, error }] = useVoidSaleInvoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVoidSaleInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VoidSaleInvoiceMutation,
    VoidSaleInvoiceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    VoidSaleInvoiceMutation,
    VoidSaleInvoiceMutationVariables
  >(VoidSaleInvoiceDocument, options)
}
export type VoidSaleInvoiceMutationHookResult = ReturnType<
  typeof useVoidSaleInvoiceMutation
>
export type VoidSaleInvoiceMutationResult =
  Apollo.MutationResult<VoidSaleInvoiceMutation>
export type VoidSaleInvoiceMutationOptions = Apollo.BaseMutationOptions<
  VoidSaleInvoiceMutation,
  VoidSaleInvoiceMutationVariables
>
export const WithdrawSaleInvoiceDocument = gql`
  mutation withdrawSaleInvoice($input: WithdrawSaleInvoiceInput) {
    withdrawSaleInvoice(input: $input)
  }
`
export type WithdrawSaleInvoiceMutationFn = Apollo.MutationFunction<
  WithdrawSaleInvoiceMutation,
  WithdrawSaleInvoiceMutationVariables
>

/**
 * __useWithdrawSaleInvoiceMutation__
 *
 * To run a mutation, you first call `useWithdrawSaleInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWithdrawSaleInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [withdrawSaleInvoiceMutation, { data, loading, error }] = useWithdrawSaleInvoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWithdrawSaleInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    WithdrawSaleInvoiceMutation,
    WithdrawSaleInvoiceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    WithdrawSaleInvoiceMutation,
    WithdrawSaleInvoiceMutationVariables
  >(WithdrawSaleInvoiceDocument, options)
}
export type WithdrawSaleInvoiceMutationHookResult = ReturnType<
  typeof useWithdrawSaleInvoiceMutation
>
export type WithdrawSaleInvoiceMutationResult =
  Apollo.MutationResult<WithdrawSaleInvoiceMutation>
export type WithdrawSaleInvoiceMutationOptions = Apollo.BaseMutationOptions<
  WithdrawSaleInvoiceMutation,
  WithdrawSaleInvoiceMutationVariables
>
export const OneMoreSaleInvoiceDocument = gql`
  mutation oneMoreSaleInvoice($input: OneMoreSaleInvoiceInput) {
    oneMoreSaleInvoice(input: $input) {
      outOfStockItems {
        commoditySku {
          categoryId
          categoryName
          commodityId
          commodityName
          commoditySkuId
          commoditySkuName
          commoditySpecOptionId
          commoditySpecOptionName
          availableSkuQuantity {
            businessUnit {
              unitId
              unitName
            }
            unit {
              unitId
              unitName
            }
            conversion
          }
          baseUnit {
            unitId
            unitName
          }
        }
      }
      saleOrderId
    }
  }
`
export type OneMoreSaleInvoiceMutationFn = Apollo.MutationFunction<
  OneMoreSaleInvoiceMutation,
  OneMoreSaleInvoiceMutationVariables
>

/**
 * __useOneMoreSaleInvoiceMutation__
 *
 * To run a mutation, you first call `useOneMoreSaleInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOneMoreSaleInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [oneMoreSaleInvoiceMutation, { data, loading, error }] = useOneMoreSaleInvoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOneMoreSaleInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    OneMoreSaleInvoiceMutation,
    OneMoreSaleInvoiceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    OneMoreSaleInvoiceMutation,
    OneMoreSaleInvoiceMutationVariables
  >(OneMoreSaleInvoiceDocument, options)
}
export type OneMoreSaleInvoiceMutationHookResult = ReturnType<
  typeof useOneMoreSaleInvoiceMutation
>
export type OneMoreSaleInvoiceMutationResult =
  Apollo.MutationResult<OneMoreSaleInvoiceMutation>
export type OneMoreSaleInvoiceMutationOptions = Apollo.BaseMutationOptions<
  OneMoreSaleInvoiceMutation,
  OneMoreSaleInvoiceMutationVariables
>
