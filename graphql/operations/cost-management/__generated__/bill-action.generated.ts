import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BillStatusGroupCountQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.Bill1StatusGroupCountInput;
  bill2StatusGroupCountInput: SchemaTypes.Bill2StatusGroupCountInput;
  creatorPrivileges?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Boolean']>;
  incomeStatementType: SchemaTypes.BillMainTypeEnum;
  deliveryOrderStatusCountInput?: SchemaTypes.InputMaybe<SchemaTypes.DeliveryOrderStatusCountInput>;
}>;


export type BillStatusGroupCountQuery = { countDeliveryFee?: number, bill1StatusGroupCount?: Array<{ __typename?: 'Bill1StatusCountPayload', bizUnReviewed?: number, complete?: number, fdConfirmed?: number, fdUnReviewed?: number, unConfirmed?: number, unSubmitted?: number, billSource?: SchemaTypes.PitayaBillSourceEnum }>, bill2StatusGroupCount?: Array<{ __typename?: 'Bill2StatusCountPayload', billMainType?: SchemaTypes.BillMainTypeEnum, billStatus?: SchemaTypes.BillStatus, number?: number }>, deliveryBillStatusCount?: { __typename?: 'DeliveryBillStatusCountPayload', unSubmit?: number, unAudit?: number } };

export type GetBill1QueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.GetBill1Input;
}>;


export type GetBill1Query = { getBill1?: { __typename?: 'Bill1DataPayload', billId?: string, billSource?: SchemaTypes.PitayaBillSourceEnum, billSourceDesc?: string, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusDesc?: string, businessId?: string, createTime?: number, refuseNote?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, billPaymentResp?: { __typename?: 'Bill1PaymentPayload', billCode?: string, billNote?: string, totalAmount?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, billPaymentFeeItemRespsList?: Array<{ __typename?: 'Bill1PaymentFeeItemPayload', amount?: number, costUnitPrice?: number, grossUnitQuantity?: number, itemId?: string, sourceBatchId?: string, stockType?: number, totalQuantity?: number, unitPrice?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, businessInfo?: { __typename?: 'BusinessInfoPayload', otherIn?: { __typename?: 'OtherInBillExtendInfo', commodityType?: number, commodityTypeName?: string, inOrderCode?: string, inOrderTypeDesc?: string, remark?: string, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, wmsMarkList?: Array<{ __typename?: 'WmsMark', appId?: number, businessType?: number, labelContent?: string, markId?: string, tenantId?: string }> } }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number }, billOperationLogPayload?: Array<{ __typename?: 'BillOperationLogPayload', createTime?: number, endStatus?: SchemaTypes.PitayaBillStatusEnum, endStatusDesc?: string, note?: string, startStatus?: SchemaTypes.PitayaBillStatusEnum, startStatusDesc?: string, user?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string } }> } };

export type PageBill1QueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PageBill1Input;
  page: SchemaTypes.Page;
}>;


export type PageBill1Query = { pageBill1?: { __typename?: 'PageBill1Payload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'Bill1DataPayload', billId?: string, billSource?: SchemaTypes.PitayaBillSourceEnum, billSourceDesc?: string, billStatus?: SchemaTypes.PitayaBillStatusEnum, billStatusDesc?: string, businessId?: string, createTime?: number, refuseNote?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, billPaymentResp?: { __typename?: 'Bill1PaymentPayload', billCode?: string, billNote?: string, totalAmount?: number, supplier?: { __typename?: 'Supplier', supplierId?: number, supplierName?: string }, billPaymentFeeItemRespsList?: Array<{ __typename?: 'Bill1PaymentFeeItemPayload', amount?: number, costUnitPrice?: number, grossUnitQuantity?: number, itemId?: string, sourceBatchId?: string, stockType?: number, totalQuantity?: number, unitPrice?: number, unitQuantity?: number, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, conversion?: number, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, priceType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, totalType?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unitType?: { __typename?: 'Unit', unitId?: number, unitName?: string } }> }, businessInfo?: { __typename?: 'BusinessInfoPayload', otherIn?: { __typename?: 'OtherInBillExtendInfo', commodityType?: number, commodityTypeName?: string, inOrderCode?: string, inOrderTypeDesc?: string } }, createBy?: { __typename?: 'User', phoneNum?: string, userId?: number, userName?: string }, customerBelongInfo?: { __typename?: 'BelongInfo', customerId?: number, customerName?: string, customerType?: number }, warehouse?: { __typename?: 'WarehouseDataLoaderPayload', address?: string, belongId?: number, belongType?: number, houseNumber?: string, id?: string, locationList?: Array<number>, name?: string, orgId?: number, remark?: string, status?: number, typeId?: number } }> } };

export type SubmitOtherInBillMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.SubmitOtherInBillInput;
}>;


export type SubmitOtherInBillMutation = { submitOtherInBill?: boolean };

export type UpdateOtherInBillInfoMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateOtherInBillInfoInput;
}>;


export type UpdateOtherInBillInfoMutation = { updateOtherInBillInfo?: boolean };

export type UpdateBillSupplierMutationVariables = SchemaTypes.Exact<{
  updateBillSupplierInput: SchemaTypes.UpdateBillSupplierInput;
}>;


export type UpdateBillSupplierMutation = { updateBillSupplier?: boolean };

export type UpdateOtherOutBillInfoMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.UpdateOtherOutBillInfoInput;
}>;


export type UpdateOtherOutBillInfoMutation = { updateOtherOutBillInfo?: string };

export type UpdateBillMainInfoMutationVariables = SchemaTypes.Exact<{
  updateBillMainInfoInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdateBillMainInfoInput>;
}>;


export type UpdateBillMainInfoMutation = { updateBillMainInfo?: boolean };


export const BillStatusGroupCountDocument = gql`
    query billStatusGroupCount($input: Bill1StatusGroupCountInput!, $bill2StatusGroupCountInput: Bill2StatusGroupCountInput!, $creatorPrivileges: Boolean, $incomeStatementType: BillMainTypeEnum!, $deliveryOrderStatusCountInput: DeliveryOrderStatusCountInput) {
  bill1StatusGroupCount(input: $input) {
    bizUnReviewed
    complete
    fdConfirmed
    fdUnReviewed
    unConfirmed
    unSubmitted
    billSource
  }
  bill2StatusGroupCount(input: $bill2StatusGroupCountInput) {
    billMainType
    billStatus
    number
  }
  countDeliveryFee(
    creatorPrivileges: $creatorPrivileges
    incomeStatementType: $incomeStatementType
  )
  deliveryBillStatusCount(
    deliveryOrderStatusCountInput: $deliveryOrderStatusCountInput
  ) {
    unSubmit
    unAudit
  }
}
    `;

/**
 * __useBillStatusGroupCountQuery__
 *
 * To run a query within a React component, call `useBillStatusGroupCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useBillStatusGroupCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBillStatusGroupCountQuery({
 *   variables: {
 *      input: // value for 'input'
 *      bill2StatusGroupCountInput: // value for 'bill2StatusGroupCountInput'
 *      creatorPrivileges: // value for 'creatorPrivileges'
 *      incomeStatementType: // value for 'incomeStatementType'
 *      deliveryOrderStatusCountInput: // value for 'deliveryOrderStatusCountInput'
 *   },
 * });
 */
export function useBillStatusGroupCountQuery(baseOptions: Apollo.QueryHookOptions<BillStatusGroupCountQuery, BillStatusGroupCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BillStatusGroupCountQuery, BillStatusGroupCountQueryVariables>(BillStatusGroupCountDocument, options);
      }
export function useBillStatusGroupCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BillStatusGroupCountQuery, BillStatusGroupCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BillStatusGroupCountQuery, BillStatusGroupCountQueryVariables>(BillStatusGroupCountDocument, options);
        }
export type BillStatusGroupCountQueryHookResult = ReturnType<typeof useBillStatusGroupCountQuery>;
export type BillStatusGroupCountLazyQueryHookResult = ReturnType<typeof useBillStatusGroupCountLazyQuery>;
export type BillStatusGroupCountQueryResult = Apollo.QueryResult<BillStatusGroupCountQuery, BillStatusGroupCountQueryVariables>;
export const GetBill1Document = gql`
    query getBill1($input: GetBill1Input!) {
  getBill1(input: $input) {
    belongOrg {
      orgId
      orgName
    }
    billId
    billPaymentResp {
      billCode
      supplier {
        supplierId
        supplierName
      }
      billNote
      billPaymentFeeItemRespsList {
        amount
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
        costUnitPrice
        grossUnitQuantity
        itemId
        priceType {
          unitId
          unitName
        }
        sourceBatchId
        stockType
        totalQuantity
        totalType {
          unitId
          unitName
        }
        unitPrice
        unitQuantity
        unitType {
          unitId
          unitName
        }
      }
      totalAmount
    }
    billSource
    billSourceDesc
    billStatus
    billStatusDesc
    businessId
    businessInfo {
      otherIn {
        commodityType
        commodityTypeName
        inOrderCode
        inOrderTypeDesc
        supplier {
          supplierId
          supplierName
        }
        wmsMarkList {
          appId
          businessType
          labelContent
          markId
          tenantId
        }
        remark
      }
    }
    createBy {
      phoneNum
      userId
      userName
    }
    createTime
    customerBelongInfo {
      customerId
      customerName
      customerType
    }
    refuseNote
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
    billOperationLogPayload {
      user {
        phoneNum
        userId
        userName
      }
      createTime
      endStatus
      endStatusDesc
      note
      startStatus
      startStatusDesc
    }
  }
}
    `;

/**
 * __useGetBill1Query__
 *
 * To run a query within a React component, call `useGetBill1Query` and pass it any options that fit your needs.
 * When your component renders, `useGetBill1Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBill1Query({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetBill1Query(baseOptions: Apollo.QueryHookOptions<GetBill1Query, GetBill1QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBill1Query, GetBill1QueryVariables>(GetBill1Document, options);
      }
export function useGetBill1LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBill1Query, GetBill1QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBill1Query, GetBill1QueryVariables>(GetBill1Document, options);
        }
export type GetBill1QueryHookResult = ReturnType<typeof useGetBill1Query>;
export type GetBill1LazyQueryHookResult = ReturnType<typeof useGetBill1LazyQuery>;
export type GetBill1QueryResult = Apollo.QueryResult<GetBill1Query, GetBill1QueryVariables>;
export const PageBill1Document = gql`
    query pageBill1($input: PageBill1Input!, $page: Page!) {
  pageBill1(input: $input, page: $page) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      billId
      billPaymentResp {
        billCode
        supplier {
          supplierId
          supplierName
        }
        billNote
        billPaymentFeeItemRespsList {
          amount
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
          costUnitPrice
          grossUnitQuantity
          itemId
          priceType {
            unitId
            unitName
          }
          sourceBatchId
          stockType
          totalQuantity
          totalType {
            unitId
            unitName
          }
          unitPrice
          unitQuantity
          unitType {
            unitId
            unitName
          }
        }
        totalAmount
      }
      billSource
      billSourceDesc
      billStatus
      billStatusDesc
      businessId
      businessInfo {
        otherIn {
          commodityType
          commodityTypeName
          inOrderCode
          inOrderTypeDesc
        }
      }
      createBy {
        phoneNum
        userId
        userName
      }
      createTime
      customerBelongInfo {
        customerId
        customerName
        customerType
      }
      refuseNote
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
    }
    totalRecords
  }
}
    `;

/**
 * __usePageBill1Query__
 *
 * To run a query within a React component, call `usePageBill1Query` and pass it any options that fit your needs.
 * When your component renders, `usePageBill1Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageBill1Query({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageBill1Query(baseOptions: Apollo.QueryHookOptions<PageBill1Query, PageBill1QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageBill1Query, PageBill1QueryVariables>(PageBill1Document, options);
      }
export function usePageBill1LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageBill1Query, PageBill1QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageBill1Query, PageBill1QueryVariables>(PageBill1Document, options);
        }
export type PageBill1QueryHookResult = ReturnType<typeof usePageBill1Query>;
export type PageBill1LazyQueryHookResult = ReturnType<typeof usePageBill1LazyQuery>;
export type PageBill1QueryResult = Apollo.QueryResult<PageBill1Query, PageBill1QueryVariables>;
export const SubmitOtherInBillDocument = gql`
    mutation submitOtherInBill($input: SubmitOtherInBillInput!) {
  submitOtherInBill(input: $input)
}
    `;
export type SubmitOtherInBillMutationFn = Apollo.MutationFunction<SubmitOtherInBillMutation, SubmitOtherInBillMutationVariables>;

/**
 * __useSubmitOtherInBillMutation__
 *
 * To run a mutation, you first call `useSubmitOtherInBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitOtherInBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitOtherInBillMutation, { data, loading, error }] = useSubmitOtherInBillMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitOtherInBillMutation(baseOptions?: Apollo.MutationHookOptions<SubmitOtherInBillMutation, SubmitOtherInBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitOtherInBillMutation, SubmitOtherInBillMutationVariables>(SubmitOtherInBillDocument, options);
      }
export type SubmitOtherInBillMutationHookResult = ReturnType<typeof useSubmitOtherInBillMutation>;
export type SubmitOtherInBillMutationResult = Apollo.MutationResult<SubmitOtherInBillMutation>;
export type SubmitOtherInBillMutationOptions = Apollo.BaseMutationOptions<SubmitOtherInBillMutation, SubmitOtherInBillMutationVariables>;
export const UpdateOtherInBillInfoDocument = gql`
    mutation updateOtherInBillInfo($input: UpdateOtherInBillInfoInput!) {
  updateOtherInBillInfo(input: $input)
}
    `;
export type UpdateOtherInBillInfoMutationFn = Apollo.MutationFunction<UpdateOtherInBillInfoMutation, UpdateOtherInBillInfoMutationVariables>;

/**
 * __useUpdateOtherInBillInfoMutation__
 *
 * To run a mutation, you first call `useUpdateOtherInBillInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOtherInBillInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOtherInBillInfoMutation, { data, loading, error }] = useUpdateOtherInBillInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOtherInBillInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOtherInBillInfoMutation, UpdateOtherInBillInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOtherInBillInfoMutation, UpdateOtherInBillInfoMutationVariables>(UpdateOtherInBillInfoDocument, options);
      }
export type UpdateOtherInBillInfoMutationHookResult = ReturnType<typeof useUpdateOtherInBillInfoMutation>;
export type UpdateOtherInBillInfoMutationResult = Apollo.MutationResult<UpdateOtherInBillInfoMutation>;
export type UpdateOtherInBillInfoMutationOptions = Apollo.BaseMutationOptions<UpdateOtherInBillInfoMutation, UpdateOtherInBillInfoMutationVariables>;
export const UpdateBillSupplierDocument = gql`
    mutation updateBillSupplier($updateBillSupplierInput: UpdateBillSupplierInput!) {
  updateBillSupplier(updateBillSupplierInput: $updateBillSupplierInput)
}
    `;
export type UpdateBillSupplierMutationFn = Apollo.MutationFunction<UpdateBillSupplierMutation, UpdateBillSupplierMutationVariables>;

/**
 * __useUpdateBillSupplierMutation__
 *
 * To run a mutation, you first call `useUpdateBillSupplierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBillSupplierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBillSupplierMutation, { data, loading, error }] = useUpdateBillSupplierMutation({
 *   variables: {
 *      updateBillSupplierInput: // value for 'updateBillSupplierInput'
 *   },
 * });
 */
export function useUpdateBillSupplierMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBillSupplierMutation, UpdateBillSupplierMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBillSupplierMutation, UpdateBillSupplierMutationVariables>(UpdateBillSupplierDocument, options);
      }
export type UpdateBillSupplierMutationHookResult = ReturnType<typeof useUpdateBillSupplierMutation>;
export type UpdateBillSupplierMutationResult = Apollo.MutationResult<UpdateBillSupplierMutation>;
export type UpdateBillSupplierMutationOptions = Apollo.BaseMutationOptions<UpdateBillSupplierMutation, UpdateBillSupplierMutationVariables>;
export const UpdateOtherOutBillInfoDocument = gql`
    mutation updateOtherOutBillInfo($input: UpdateOtherOutBillInfoInput!) {
  updateOtherOutBillInfo(input: $input)
}
    `;
export type UpdateOtherOutBillInfoMutationFn = Apollo.MutationFunction<UpdateOtherOutBillInfoMutation, UpdateOtherOutBillInfoMutationVariables>;

/**
 * __useUpdateOtherOutBillInfoMutation__
 *
 * To run a mutation, you first call `useUpdateOtherOutBillInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOtherOutBillInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOtherOutBillInfoMutation, { data, loading, error }] = useUpdateOtherOutBillInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOtherOutBillInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOtherOutBillInfoMutation, UpdateOtherOutBillInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOtherOutBillInfoMutation, UpdateOtherOutBillInfoMutationVariables>(UpdateOtherOutBillInfoDocument, options);
      }
export type UpdateOtherOutBillInfoMutationHookResult = ReturnType<typeof useUpdateOtherOutBillInfoMutation>;
export type UpdateOtherOutBillInfoMutationResult = Apollo.MutationResult<UpdateOtherOutBillInfoMutation>;
export type UpdateOtherOutBillInfoMutationOptions = Apollo.BaseMutationOptions<UpdateOtherOutBillInfoMutation, UpdateOtherOutBillInfoMutationVariables>;
export const UpdateBillMainInfoDocument = gql`
    mutation updateBillMainInfo($updateBillMainInfoInput: UpdateBillMainInfoInput) {
  updateBillMainInfo(updateBillMainInfoInput: $updateBillMainInfoInput)
}
    `;
export type UpdateBillMainInfoMutationFn = Apollo.MutationFunction<UpdateBillMainInfoMutation, UpdateBillMainInfoMutationVariables>;

/**
 * __useUpdateBillMainInfoMutation__
 *
 * To run a mutation, you first call `useUpdateBillMainInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBillMainInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBillMainInfoMutation, { data, loading, error }] = useUpdateBillMainInfoMutation({
 *   variables: {
 *      updateBillMainInfoInput: // value for 'updateBillMainInfoInput'
 *   },
 * });
 */
export function useUpdateBillMainInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBillMainInfoMutation, UpdateBillMainInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBillMainInfoMutation, UpdateBillMainInfoMutationVariables>(UpdateBillMainInfoDocument, options);
      }
export type UpdateBillMainInfoMutationHookResult = ReturnType<typeof useUpdateBillMainInfoMutation>;
export type UpdateBillMainInfoMutationResult = Apollo.MutationResult<UpdateBillMainInfoMutation>;
export type UpdateBillMainInfoMutationOptions = Apollo.BaseMutationOptions<UpdateBillMainInfoMutation, UpdateBillMainInfoMutationVariables>;