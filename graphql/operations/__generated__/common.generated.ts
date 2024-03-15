import type * as SchemaTypes from '../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CommodityListQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type CommodityListQuery = { commodityList?: Array<{ __typename?: 'Option', label?: string, value?: number }> };

export type CommodityCategoriesQueryVariables = SchemaTypes.Exact<{
  listCommodityCategoryInput?: SchemaTypes.InputMaybe<SchemaTypes.ListCommodityCategoryInput>;
}>;


export type CommodityCategoriesQuery = { commodityCategories?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }> };

export type CommoditiesQueryVariables = SchemaTypes.Exact<{
  listCommodityInput?: SchemaTypes.InputMaybe<SchemaTypes.ListCommodityInput>;
}>;


export type CommoditiesQuery = { commodities?: Array<{ __typename?: 'CommodityPayload', commodityId?: number, commodityName?: string, commodityTypeId?: number, commodityTypeName?: string, commodityCategoryId?: number, commodityCategoryName?: string, commodityVarietyId?: number, commodityVarietyName?: string, commodityPlaceOriginId?: number, commodityPlaceOriginName?: string }> };

export type CommoditySpecListAndSkuListQueryVariables = SchemaTypes.Exact<{
  commoditySkuesInput?: SchemaTypes.InputMaybe<SchemaTypes.CommoditySkuesInput>;
  listCommoditySpecInput?: SchemaTypes.InputMaybe<SchemaTypes.ListCommoditySpecInput>;
}>;


export type CommoditySpecListAndSkuListQuery = { commoditySkues?: Array<{ __typename?: 'CommoditySkuesPayload', index?: string, stockBatchCode?: string, stockBatchId?: string, commodityTypeId?: number, commodityTypeName?: string, commoditySku?: { __typename?: 'PitayaCommoditySku', categoryId?: number, categoryName?: string, commodityId?: number, commodityName?: string, commoditySkuId?: number, commoditySkuName?: string, commoditySpecOptionId?: Array<number>, commoditySpecOptionName?: Array<string>, availableSkuQuantity?: Array<{ __typename?: 'AvailableSkuQuantity', conversion?: number, businessUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string }, unit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }>, baseUnit?: { __typename?: 'Unit', unitId?: number, unitName?: string } }, customer?: { __typename?: 'Customer', customerId?: number, customerName?: string, customerType?: number, lastLevelId?: number, lastLevelName?: string } }>, commoditySpecs?: Array<{ __typename?: 'PitayaCommoditySpecPayload', commodityId?: number, commoditySpecId?: number, commoditySpecName?: string, commoditySpecSort?: number, commoditySpecOption?: Array<{ __typename?: 'PitayaCommoditySpecOptionPayload', commoditySpecOptionId?: number, commoditySpecOptionName?: string }> }> };

export type ListCommodityOptionByCategoryIdQueryVariables = SchemaTypes.Exact<{
  categoryId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']>;
}>;


export type ListCommodityOptionByCategoryIdQuery = { listCommodityOptionByCategoryId?: Array<{ __typename?: 'CommodityPayload', commodityId?: number, commodityName?: string }> };

export type ListCommoditySpecAndOptionQueryVariables = SchemaTypes.Exact<{
  commodityId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']>;
}>;


export type ListCommoditySpecAndOptionQuery = { listCommoditySpecAndOption?: Array<{ __typename?: 'PitayaCommoditySpecPayload', commoditySpecId?: number, commoditySpecName?: string, commoditySpecSort?: number, commoditySpecOption?: Array<{ __typename?: 'PitayaCommoditySpecOptionPayload', commoditySpecOptionId?: number, commoditySpecOptionName?: string }> }> };

export type ListCommoditySkuAndUnitQueryVariables = SchemaTypes.Exact<{
  commodityId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']>;
}>;


export type ListCommoditySkuAndUnitQuery = { listCommoditySkuAndUnit?: Array<{ __typename?: 'CommoditySkuAndUnitPayload', commodityName?: string, commoditySkuId?: number, commoditySpecOptionId?: Array<number>, skuTextDescription?: Array<string>, unitQuantity?: number, unitType?: number, unitTypeName?: string, totalType?: number, totalTypeName?: string, commodityBomId?: number }> };

export type ListProductLeaderQueryVariables = SchemaTypes.Exact<{
  productInput: SchemaTypes.ProductInput;
}>;


export type ListProductLeaderQuery = { listProductLeader?: Array<{ __typename?: 'Option', label?: string, value?: number }> };

export type SupplierCommodityListQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type SupplierCommodityListQuery = { supplierCommodityList?: Array<{ __typename?: 'Option', label?: string, value?: number }> };

export type GetVersionQueryVariables = SchemaTypes.Exact<{
  devicePlatformInput?: SchemaTypes.InputMaybe<SchemaTypes.DevicePlatformInput>;
}>;


export type GetVersionQuery = { getVersion?: { __typename?: 'AppVersionPayload', upgradeStrategy?: number, platform?: number, version?: number, versionCode?: string, updateInfo?: string, downloadUrl?: string, appleId?: string, releaseAt?: number, createAt?: number, nowData?: number } };

export type InsertAppExceptionMutationVariables = SchemaTypes.Exact<{
  appExceptionDTO?: SchemaTypes.InputMaybe<SchemaTypes.AppExceptionInput>;
}>;


export type InsertAppExceptionMutation = { insertAppException?: boolean };

export type PitayaOrgTreeQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['String']>;
}>;


export type PitayaOrgTreeQuery = { pitayaOrgTree?: string };

export type PayModesQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type PayModesQuery = { payModes?: Array<{ __typename?: 'PitayaPayMode', code?: number, message?: string }> };

export type FreightTypesQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListFreightTypeInput;
}>;


export type FreightTypesQuery = { freightTypes?: Array<{ __typename?: 'FreightType', value?: number, label?: string }> };

export type PagePitayaUserQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PagePitayaUserInput;
  page: SchemaTypes.Page;
}>;


export type PagePitayaUserQuery = { pagePitayaUser?: { __typename?: 'PagePitayaUserPayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PitayaUserPayload', teamId?: number, userId?: number, userName?: string, userPhoneNum?: string, landlineNum?: string, createTime?: string, organizationName?: string, organizationId?: number, idNum?: string, status?: SchemaTypes.UserStatus, tenantId?: string, tenantName?: string, positions?: Array<{ __typename?: 'PositionPayload', positionId?: number, positionName?: string }>, stores?: Array<{ __typename?: 'UserStorePayload', userId?: number, storehouseId?: string, storehouseName?: string }> }> } };

export type LocationInformationQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.LocationInput>;
}>;


export type LocationInformationQuery = { locationInformation?: { __typename?: 'ListLocationPayload', records?: Array<{ __typename?: 'LocationPayload', id?: string, name?: string, firstChar?: string }> } };

export type LocationSearchQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.LocationSearchInput>;
}>;


export type LocationSearchQuery = { locationSearch?: { __typename?: 'ListSearchedLocationPayload', records?: Array<{ __typename?: 'SearchedLocationPayload', id: string, name: string, detailName: string, location?: Array<number> }> } };

export type TreeNodeFragment = { __typename?: 'CustomerTreePayload', belongType: number, belongId: number, belongName?: string, visible?: boolean, optional?: boolean };

export type CustomerTreeQueryVariables = SchemaTypes.Exact<{
  customerTreeInput?: SchemaTypes.InputMaybe<SchemaTypes.CustomerTreeInput>;
}>;


export type CustomerTreeQuery = { customerTree?: Array<{ __typename?: 'CustomerTreePayload', belongType: number, belongId: number, belongName?: string, visible?: boolean, optional?: boolean, parent?: { __typename?: 'CustomerTreePayload', belongType: number, belongId: number, belongName?: string, visible?: boolean, optional?: boolean }, children?: Array<{ __typename?: 'CustomerTreePayload', belongType: number, belongId: number, belongName?: string, visible?: boolean, optional?: boolean, parent?: { __typename?: 'CustomerTreePayload', belongType: number, belongId: number, belongName?: string, visible?: boolean, optional?: boolean }, children?: Array<{ __typename?: 'CustomerTreePayload', belongType: number, belongId: number, belongName?: string, visible?: boolean, optional?: boolean, parent?: { __typename?: 'CustomerTreePayload', belongType: number, belongId: number, belongName?: string, visible?: boolean, optional?: boolean } }> }> }> };

export type OrgCustomerQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type OrgCustomerQuery = { orgCustomer?: { __typename?: 'CustomerPayload', customerId?: number, name?: string } };

export type ListBelongOrgQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.ListBelongOrgInput>;
}>;


export type ListBelongOrgQuery = { listBelongOrg?: Array<{ __typename?: 'BelongOrgPayload', orgId?: number, orgName?: string, labelId?: number, labelName?: string }> };

export type GetSopOrResultQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.GetSopOrResultInput>;
}>;


export type GetSopOrResultQuery = { getSopOrResult?: { __typename?: 'SopDetailResultPayload', enabled?: SchemaTypes.EnabledEnum, enabledName?: string, sopId?: string, templateDesc?: string, templateName?: string, universal?: boolean, key?: string, category?: { __typename?: 'CommodityCategoryEntity', categoryName?: string, id?: number }, sopCheckItems?: Array<{ __typename?: 'SopCheckItemResultPayload', enabled?: SchemaTypes.EnabledEnum, enabledName?: string, inputTextRule?: SchemaTypes.InputTextRule, isRemark?: boolean, name?: string, nameLocale?: any, remarkRequired?: boolean, remarks?: string, required?: boolean, snapshotId?: string, sopDetailId?: string, sopId?: string, sort?: number, type?: SchemaTypes.SopCheckItemEnum, typeName?: string, options?: Array<{ __typename?: 'SopOptionPayload', isRemark?: boolean, name?: string, nameLocale?: any, remarkRequired?: boolean, remarks?: string, sort?: number, value?: string }>, sopResult?: { __typename?: 'SopOrResultPayload', businessId?: string, cacheEnabled?: boolean, checkResult?: any, checkResultType?: SchemaTypes.SopCheckItemEnum, fileLink?: any, remark?: string, sopDetailId?: string, sopId?: string, sopResultId?: string, userId?: number, createTime?: number } }> } };

export type CacheAnswerMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CacheAnswerInput>;
}>;


export type CacheAnswerMutation = { cacheAnswer?: boolean };

export type GetFileByUrlQueryVariables = SchemaTypes.Exact<{
  url?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['String']>;
}>;


export type GetFileByUrlQuery = { getFileByUrl?: { __typename?: 'DurianFilePayload', fileId?: string, fileUrl?: string, fileUploadTime?: number, filename?: string, externalInfo?: { __typename?: 'FileExternalPayload', watermarkText?: string } } };

export type ListCategoryQueryVariables = SchemaTypes.Exact<{
  filter?: SchemaTypes.InputMaybe<SchemaTypes.CategoryFilterInput>;
}>;


export type ListCategoryQuery = { listCategory?: Array<{ __typename?: 'Category', categoryId?: number, categoryName?: string, categorySort?: number, commodityTypeId?: number, commodityTypeName?: string, nameLocale?: Array<{ __typename?: 'NamePayload', locale?: string, name?: string }> }> };

export type ListSaleReturnCustomersQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListSaleReturnCommodityInput;
}>;


export type ListSaleReturnCustomersQuery = { listSaleReturnCustomers?: Array<{ __typename?: 'CustomerPayload', alias?: string, appId?: number, attribute?: SchemaTypes.CustomerAttribute, belongType?: number, blacklistStatus?: number, channelId?: number, channelName?: string, controlUser?: string, cooperateTypeList?: Array<number>, corporation?: string, createTime?: number, credit?: number, customerId?: number, customerUserId?: number, enable?: number, establishTime?: number, fascAdminId?: string, fascId?: string, financialSystemCode?: string, id?: number, idNumber?: string, infoAuth?: number, initials?: string, introducerId?: number, longCooperation?: number, mail?: string, name?: string, ncCode?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phone?: string, pinyinOfName?: string, realNameAuthStatus?: number, registerAddress?: string, registerCapital?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, remark?: string, sourceType?: number, taxpayerIdentificationNumber?: string, tenantId?: string, type?: SchemaTypes.PitayaCustomerType, userStatus?: SchemaTypes.UserStatus, wechat?: string, belongOrganization?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, addressList?: Array<{ __typename?: 'PitayaAddress', addressName?: string, coordinateList?: Array<number>, country?: string, customerDetailId?: number, deliveryName?: string, id?: number, shortAddress?: string, status?: number, city?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, district?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, province?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, contactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }>, customerAccountList?: Array<{ __typename?: 'PitayaCustomerAccountPayload', accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, customerId?: number, id?: number, updateBy?: number, updateTime?: number, accountName?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerContactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerCooperation?: { __typename?: 'CustomerCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, customerDetailId?: number, cycleCheck?: string, cycleCredit?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, quota?: number, updateBy?: number, updateTime?: number }, customerQualification?: { __typename?: 'PitayaCustomerQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, businessDuration?: SchemaTypes.PitayaCustomerBusinessDurationEnum, businessScale?: SchemaTypes.PitayaCustomerBusinessScale, businessTypesList?: Array<SchemaTypes.PitayaCustomerBusinessTypeEnum>, createBy?: number, createTime?: number, customerId?: number, description?: string, historyAchievement?: string, id?: number, salesChannels?: string, updateBy?: number, updateTime?: number, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, saleTypesList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }> }, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> };

export const TreeNodeFragmentDoc = gql`
    fragment TreeNode on CustomerTreePayload {
  belongType
  belongId
  belongName
  visible
  optional
}
    `;
export const CommodityListDocument = gql`
    query commodityList {
  commodityList {
    label
    value
  }
}
    `;

/**
 * __useCommodityListQuery__
 *
 * To run a query within a React component, call `useCommodityListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommodityListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommodityListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCommodityListQuery(baseOptions?: Apollo.QueryHookOptions<CommodityListQuery, CommodityListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommodityListQuery, CommodityListQueryVariables>(CommodityListDocument, options);
      }
export function useCommodityListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommodityListQuery, CommodityListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommodityListQuery, CommodityListQueryVariables>(CommodityListDocument, options);
        }
export type CommodityListQueryHookResult = ReturnType<typeof useCommodityListQuery>;
export type CommodityListLazyQueryHookResult = ReturnType<typeof useCommodityListLazyQuery>;
export type CommodityListQueryResult = Apollo.QueryResult<CommodityListQuery, CommodityListQueryVariables>;
export const CommodityCategoriesDocument = gql`
    query commodityCategories($listCommodityCategoryInput: ListCommodityCategoryInput) {
  commodityCategories(listCommodityCategoryInput: $listCommodityCategoryInput) {
    categoryId
    categoryName
  }
}
    `;

/**
 * __useCommodityCategoriesQuery__
 *
 * To run a query within a React component, call `useCommodityCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommodityCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommodityCategoriesQuery({
 *   variables: {
 *      listCommodityCategoryInput: // value for 'listCommodityCategoryInput'
 *   },
 * });
 */
export function useCommodityCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CommodityCategoriesQuery, CommodityCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommodityCategoriesQuery, CommodityCategoriesQueryVariables>(CommodityCategoriesDocument, options);
      }
export function useCommodityCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommodityCategoriesQuery, CommodityCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommodityCategoriesQuery, CommodityCategoriesQueryVariables>(CommodityCategoriesDocument, options);
        }
export type CommodityCategoriesQueryHookResult = ReturnType<typeof useCommodityCategoriesQuery>;
export type CommodityCategoriesLazyQueryHookResult = ReturnType<typeof useCommodityCategoriesLazyQuery>;
export type CommodityCategoriesQueryResult = Apollo.QueryResult<CommodityCategoriesQuery, CommodityCategoriesQueryVariables>;
export const CommoditiesDocument = gql`
    query commodities($listCommodityInput: ListCommodityInput) {
  commodities(listCommodityInput: $listCommodityInput) {
    commodityId
    commodityName
    commodityTypeId
    commodityTypeName
    commodityCategoryId
    commodityCategoryName
    commodityVarietyId
    commodityVarietyName
    commodityPlaceOriginId
    commodityPlaceOriginName
  }
}
    `;

/**
 * __useCommoditiesQuery__
 *
 * To run a query within a React component, call `useCommoditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommoditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommoditiesQuery({
 *   variables: {
 *      listCommodityInput: // value for 'listCommodityInput'
 *   },
 * });
 */
export function useCommoditiesQuery(baseOptions?: Apollo.QueryHookOptions<CommoditiesQuery, CommoditiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommoditiesQuery, CommoditiesQueryVariables>(CommoditiesDocument, options);
      }
export function useCommoditiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommoditiesQuery, CommoditiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommoditiesQuery, CommoditiesQueryVariables>(CommoditiesDocument, options);
        }
export type CommoditiesQueryHookResult = ReturnType<typeof useCommoditiesQuery>;
export type CommoditiesLazyQueryHookResult = ReturnType<typeof useCommoditiesLazyQuery>;
export type CommoditiesQueryResult = Apollo.QueryResult<CommoditiesQuery, CommoditiesQueryVariables>;
export const CommoditySpecListAndSkuListDocument = gql`
    query commoditySpecListAndSkuList($commoditySkuesInput: CommoditySkuesInput, $listCommoditySpecInput: ListCommoditySpecInput) {
  commoditySkues(commoditySkuesInput: $commoditySkuesInput) {
    index
    stockBatchCode
    stockBatchId
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
    customer {
      customerId
      customerName
      customerType
      lastLevelId
      lastLevelName
    }
    commodityTypeId
    commodityTypeName
  }
  commoditySpecs(listCommoditySpecInput: $listCommoditySpecInput) {
    commodityId
    commoditySpecId
    commoditySpecName
    commoditySpecSort
    commoditySpecOption {
      commoditySpecOptionId
      commoditySpecOptionName
    }
  }
}
    `;

/**
 * __useCommoditySpecListAndSkuListQuery__
 *
 * To run a query within a React component, call `useCommoditySpecListAndSkuListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommoditySpecListAndSkuListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommoditySpecListAndSkuListQuery({
 *   variables: {
 *      commoditySkuesInput: // value for 'commoditySkuesInput'
 *      listCommoditySpecInput: // value for 'listCommoditySpecInput'
 *   },
 * });
 */
export function useCommoditySpecListAndSkuListQuery(baseOptions?: Apollo.QueryHookOptions<CommoditySpecListAndSkuListQuery, CommoditySpecListAndSkuListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommoditySpecListAndSkuListQuery, CommoditySpecListAndSkuListQueryVariables>(CommoditySpecListAndSkuListDocument, options);
      }
export function useCommoditySpecListAndSkuListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommoditySpecListAndSkuListQuery, CommoditySpecListAndSkuListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommoditySpecListAndSkuListQuery, CommoditySpecListAndSkuListQueryVariables>(CommoditySpecListAndSkuListDocument, options);
        }
export type CommoditySpecListAndSkuListQueryHookResult = ReturnType<typeof useCommoditySpecListAndSkuListQuery>;
export type CommoditySpecListAndSkuListLazyQueryHookResult = ReturnType<typeof useCommoditySpecListAndSkuListLazyQuery>;
export type CommoditySpecListAndSkuListQueryResult = Apollo.QueryResult<CommoditySpecListAndSkuListQuery, CommoditySpecListAndSkuListQueryVariables>;
export const ListCommodityOptionByCategoryIdDocument = gql`
    query listCommodityOptionByCategoryId($categoryId: Int) {
  listCommodityOptionByCategoryId(categoryId: $categoryId) {
    commodityId
    commodityName
  }
}
    `;

/**
 * __useListCommodityOptionByCategoryIdQuery__
 *
 * To run a query within a React component, call `useListCommodityOptionByCategoryIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCommodityOptionByCategoryIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCommodityOptionByCategoryIdQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useListCommodityOptionByCategoryIdQuery(baseOptions?: Apollo.QueryHookOptions<ListCommodityOptionByCategoryIdQuery, ListCommodityOptionByCategoryIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCommodityOptionByCategoryIdQuery, ListCommodityOptionByCategoryIdQueryVariables>(ListCommodityOptionByCategoryIdDocument, options);
      }
export function useListCommodityOptionByCategoryIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCommodityOptionByCategoryIdQuery, ListCommodityOptionByCategoryIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCommodityOptionByCategoryIdQuery, ListCommodityOptionByCategoryIdQueryVariables>(ListCommodityOptionByCategoryIdDocument, options);
        }
export type ListCommodityOptionByCategoryIdQueryHookResult = ReturnType<typeof useListCommodityOptionByCategoryIdQuery>;
export type ListCommodityOptionByCategoryIdLazyQueryHookResult = ReturnType<typeof useListCommodityOptionByCategoryIdLazyQuery>;
export type ListCommodityOptionByCategoryIdQueryResult = Apollo.QueryResult<ListCommodityOptionByCategoryIdQuery, ListCommodityOptionByCategoryIdQueryVariables>;
export const ListCommoditySpecAndOptionDocument = gql`
    query listCommoditySpecAndOption($commodityId: Int) {
  listCommoditySpecAndOption(commodityId: $commodityId) {
    commoditySpecId
    commoditySpecName
    commoditySpecOption {
      commoditySpecOptionId
      commoditySpecOptionName
    }
    commoditySpecSort
  }
}
    `;

/**
 * __useListCommoditySpecAndOptionQuery__
 *
 * To run a query within a React component, call `useListCommoditySpecAndOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCommoditySpecAndOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCommoditySpecAndOptionQuery({
 *   variables: {
 *      commodityId: // value for 'commodityId'
 *   },
 * });
 */
export function useListCommoditySpecAndOptionQuery(baseOptions?: Apollo.QueryHookOptions<ListCommoditySpecAndOptionQuery, ListCommoditySpecAndOptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCommoditySpecAndOptionQuery, ListCommoditySpecAndOptionQueryVariables>(ListCommoditySpecAndOptionDocument, options);
      }
export function useListCommoditySpecAndOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCommoditySpecAndOptionQuery, ListCommoditySpecAndOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCommoditySpecAndOptionQuery, ListCommoditySpecAndOptionQueryVariables>(ListCommoditySpecAndOptionDocument, options);
        }
export type ListCommoditySpecAndOptionQueryHookResult = ReturnType<typeof useListCommoditySpecAndOptionQuery>;
export type ListCommoditySpecAndOptionLazyQueryHookResult = ReturnType<typeof useListCommoditySpecAndOptionLazyQuery>;
export type ListCommoditySpecAndOptionQueryResult = Apollo.QueryResult<ListCommoditySpecAndOptionQuery, ListCommoditySpecAndOptionQueryVariables>;
export const ListCommoditySkuAndUnitDocument = gql`
    query listCommoditySkuAndUnit($commodityId: Int) {
  listCommoditySkuAndUnit(commodityId: $commodityId) {
    commodityName
    commoditySkuId
    commoditySpecOptionId
    skuTextDescription
    unitQuantity
    unitType
    unitTypeName
    totalType
    totalTypeName
    commodityBomId
  }
}
    `;

/**
 * __useListCommoditySkuAndUnitQuery__
 *
 * To run a query within a React component, call `useListCommoditySkuAndUnitQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCommoditySkuAndUnitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCommoditySkuAndUnitQuery({
 *   variables: {
 *      commodityId: // value for 'commodityId'
 *   },
 * });
 */
export function useListCommoditySkuAndUnitQuery(baseOptions?: Apollo.QueryHookOptions<ListCommoditySkuAndUnitQuery, ListCommoditySkuAndUnitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCommoditySkuAndUnitQuery, ListCommoditySkuAndUnitQueryVariables>(ListCommoditySkuAndUnitDocument, options);
      }
export function useListCommoditySkuAndUnitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCommoditySkuAndUnitQuery, ListCommoditySkuAndUnitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCommoditySkuAndUnitQuery, ListCommoditySkuAndUnitQueryVariables>(ListCommoditySkuAndUnitDocument, options);
        }
export type ListCommoditySkuAndUnitQueryHookResult = ReturnType<typeof useListCommoditySkuAndUnitQuery>;
export type ListCommoditySkuAndUnitLazyQueryHookResult = ReturnType<typeof useListCommoditySkuAndUnitLazyQuery>;
export type ListCommoditySkuAndUnitQueryResult = Apollo.QueryResult<ListCommoditySkuAndUnitQuery, ListCommoditySkuAndUnitQueryVariables>;
export const ListProductLeaderDocument = gql`
    query listProductLeader($productInput: ProductInput!) {
  listProductLeader(productInput: $productInput) {
    label
    value
  }
}
    `;

/**
 * __useListProductLeaderQuery__
 *
 * To run a query within a React component, call `useListProductLeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProductLeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProductLeaderQuery({
 *   variables: {
 *      productInput: // value for 'productInput'
 *   },
 * });
 */
export function useListProductLeaderQuery(baseOptions: Apollo.QueryHookOptions<ListProductLeaderQuery, ListProductLeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProductLeaderQuery, ListProductLeaderQueryVariables>(ListProductLeaderDocument, options);
      }
export function useListProductLeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProductLeaderQuery, ListProductLeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProductLeaderQuery, ListProductLeaderQueryVariables>(ListProductLeaderDocument, options);
        }
export type ListProductLeaderQueryHookResult = ReturnType<typeof useListProductLeaderQuery>;
export type ListProductLeaderLazyQueryHookResult = ReturnType<typeof useListProductLeaderLazyQuery>;
export type ListProductLeaderQueryResult = Apollo.QueryResult<ListProductLeaderQuery, ListProductLeaderQueryVariables>;
export const SupplierCommodityListDocument = gql`
    query supplierCommodityList {
  supplierCommodityList {
    label
    value
  }
}
    `;

/**
 * __useSupplierCommodityListQuery__
 *
 * To run a query within a React component, call `useSupplierCommodityListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupplierCommodityListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupplierCommodityListQuery({
 *   variables: {
 *   },
 * });
 */
export function useSupplierCommodityListQuery(baseOptions?: Apollo.QueryHookOptions<SupplierCommodityListQuery, SupplierCommodityListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SupplierCommodityListQuery, SupplierCommodityListQueryVariables>(SupplierCommodityListDocument, options);
      }
export function useSupplierCommodityListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SupplierCommodityListQuery, SupplierCommodityListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SupplierCommodityListQuery, SupplierCommodityListQueryVariables>(SupplierCommodityListDocument, options);
        }
export type SupplierCommodityListQueryHookResult = ReturnType<typeof useSupplierCommodityListQuery>;
export type SupplierCommodityListLazyQueryHookResult = ReturnType<typeof useSupplierCommodityListLazyQuery>;
export type SupplierCommodityListQueryResult = Apollo.QueryResult<SupplierCommodityListQuery, SupplierCommodityListQueryVariables>;
export const GetVersionDocument = gql`
    query getVersion($devicePlatformInput: DevicePlatformInput) {
  getVersion(devicePlatformInput: $devicePlatformInput) {
    upgradeStrategy
    platform
    version
    versionCode
    updateInfo
    downloadUrl
    appleId
    releaseAt
    createAt
    nowData
  }
}
    `;

/**
 * __useGetVersionQuery__
 *
 * To run a query within a React component, call `useGetVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVersionQuery({
 *   variables: {
 *      devicePlatformInput: // value for 'devicePlatformInput'
 *   },
 * });
 */
export function useGetVersionQuery(baseOptions?: Apollo.QueryHookOptions<GetVersionQuery, GetVersionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVersionQuery, GetVersionQueryVariables>(GetVersionDocument, options);
      }
export function useGetVersionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVersionQuery, GetVersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVersionQuery, GetVersionQueryVariables>(GetVersionDocument, options);
        }
export type GetVersionQueryHookResult = ReturnType<typeof useGetVersionQuery>;
export type GetVersionLazyQueryHookResult = ReturnType<typeof useGetVersionLazyQuery>;
export type GetVersionQueryResult = Apollo.QueryResult<GetVersionQuery, GetVersionQueryVariables>;
export const InsertAppExceptionDocument = gql`
    mutation insertAppException($appExceptionDTO: AppExceptionInput) {
  insertAppException(appExceptionDTO: $appExceptionDTO)
}
    `;
export type InsertAppExceptionMutationFn = Apollo.MutationFunction<InsertAppExceptionMutation, InsertAppExceptionMutationVariables>;

/**
 * __useInsertAppExceptionMutation__
 *
 * To run a mutation, you first call `useInsertAppExceptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAppExceptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAppExceptionMutation, { data, loading, error }] = useInsertAppExceptionMutation({
 *   variables: {
 *      appExceptionDTO: // value for 'appExceptionDTO'
 *   },
 * });
 */
export function useInsertAppExceptionMutation(baseOptions?: Apollo.MutationHookOptions<InsertAppExceptionMutation, InsertAppExceptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertAppExceptionMutation, InsertAppExceptionMutationVariables>(InsertAppExceptionDocument, options);
      }
export type InsertAppExceptionMutationHookResult = ReturnType<typeof useInsertAppExceptionMutation>;
export type InsertAppExceptionMutationResult = Apollo.MutationResult<InsertAppExceptionMutation>;
export type InsertAppExceptionMutationOptions = Apollo.BaseMutationOptions<InsertAppExceptionMutation, InsertAppExceptionMutationVariables>;
export const PitayaOrgTreeDocument = gql`
    query pitayaOrgTree($input: String) {
  pitayaOrgTree(input: $input)
}
    `;

/**
 * __usePitayaOrgTreeQuery__
 *
 * To run a query within a React component, call `usePitayaOrgTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaOrgTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaOrgTreeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePitayaOrgTreeQuery(baseOptions?: Apollo.QueryHookOptions<PitayaOrgTreeQuery, PitayaOrgTreeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaOrgTreeQuery, PitayaOrgTreeQueryVariables>(PitayaOrgTreeDocument, options);
      }
export function usePitayaOrgTreeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaOrgTreeQuery, PitayaOrgTreeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaOrgTreeQuery, PitayaOrgTreeQueryVariables>(PitayaOrgTreeDocument, options);
        }
export type PitayaOrgTreeQueryHookResult = ReturnType<typeof usePitayaOrgTreeQuery>;
export type PitayaOrgTreeLazyQueryHookResult = ReturnType<typeof usePitayaOrgTreeLazyQuery>;
export type PitayaOrgTreeQueryResult = Apollo.QueryResult<PitayaOrgTreeQuery, PitayaOrgTreeQueryVariables>;
export const PayModesDocument = gql`
    query payModes {
  payModes {
    code
    message
  }
}
    `;

/**
 * __usePayModesQuery__
 *
 * To run a query within a React component, call `usePayModesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePayModesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePayModesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePayModesQuery(baseOptions?: Apollo.QueryHookOptions<PayModesQuery, PayModesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PayModesQuery, PayModesQueryVariables>(PayModesDocument, options);
      }
export function usePayModesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PayModesQuery, PayModesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PayModesQuery, PayModesQueryVariables>(PayModesDocument, options);
        }
export type PayModesQueryHookResult = ReturnType<typeof usePayModesQuery>;
export type PayModesLazyQueryHookResult = ReturnType<typeof usePayModesLazyQuery>;
export type PayModesQueryResult = Apollo.QueryResult<PayModesQuery, PayModesQueryVariables>;
export const FreightTypesDocument = gql`
    query freightTypes($input: ListFreightTypeInput!) {
  freightTypes(input: $input) {
    value: freightId
    label: freightName
  }
}
    `;

/**
 * __useFreightTypesQuery__
 *
 * To run a query within a React component, call `useFreightTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFreightTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFreightTypesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFreightTypesQuery(baseOptions: Apollo.QueryHookOptions<FreightTypesQuery, FreightTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FreightTypesQuery, FreightTypesQueryVariables>(FreightTypesDocument, options);
      }
export function useFreightTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FreightTypesQuery, FreightTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FreightTypesQuery, FreightTypesQueryVariables>(FreightTypesDocument, options);
        }
export type FreightTypesQueryHookResult = ReturnType<typeof useFreightTypesQuery>;
export type FreightTypesLazyQueryHookResult = ReturnType<typeof useFreightTypesLazyQuery>;
export type FreightTypesQueryResult = Apollo.QueryResult<FreightTypesQuery, FreightTypesQueryVariables>;
export const PagePitayaUserDocument = gql`
    query pagePitayaUser($input: PagePitayaUserInput!, $page: Page!) {
  pagePitayaUser(input: $input, page: $page) {
    records {
      teamId
      userId
      userName
      userPhoneNum
      landlineNum
      createTime
      organizationName
      organizationId
      positions {
        positionId
        positionName
      }
      stores {
        userId
        storehouseId
        storehouseName
      }
      idNum
      status
      tenantId
      tenantName
    }
    pageCurrent
    pageSize
    totalRecords
  }
}
    `;

/**
 * __usePagePitayaUserQuery__
 *
 * To run a query within a React component, call `usePagePitayaUserQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagePitayaUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagePitayaUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePagePitayaUserQuery(baseOptions: Apollo.QueryHookOptions<PagePitayaUserQuery, PagePitayaUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagePitayaUserQuery, PagePitayaUserQueryVariables>(PagePitayaUserDocument, options);
      }
export function usePagePitayaUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagePitayaUserQuery, PagePitayaUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagePitayaUserQuery, PagePitayaUserQueryVariables>(PagePitayaUserDocument, options);
        }
export type PagePitayaUserQueryHookResult = ReturnType<typeof usePagePitayaUserQuery>;
export type PagePitayaUserLazyQueryHookResult = ReturnType<typeof usePagePitayaUserLazyQuery>;
export type PagePitayaUserQueryResult = Apollo.QueryResult<PagePitayaUserQuery, PagePitayaUserQueryVariables>;
export const LocationInformationDocument = gql`
    query locationInformation($input: LocationInput) {
  locationInformation(input: $input) {
    records {
      id
      name
      firstChar
    }
  }
}
    `;

/**
 * __useLocationInformationQuery__
 *
 * To run a query within a React component, call `useLocationInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationInformationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLocationInformationQuery(baseOptions?: Apollo.QueryHookOptions<LocationInformationQuery, LocationInformationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationInformationQuery, LocationInformationQueryVariables>(LocationInformationDocument, options);
      }
export function useLocationInformationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationInformationQuery, LocationInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationInformationQuery, LocationInformationQueryVariables>(LocationInformationDocument, options);
        }
export type LocationInformationQueryHookResult = ReturnType<typeof useLocationInformationQuery>;
export type LocationInformationLazyQueryHookResult = ReturnType<typeof useLocationInformationLazyQuery>;
export type LocationInformationQueryResult = Apollo.QueryResult<LocationInformationQuery, LocationInformationQueryVariables>;
export const LocationSearchDocument = gql`
    query locationSearch($input: LocationSearchInput) {
  locationSearch(input: $input) {
    records {
      id
      name
      detailName
      location
    }
  }
}
    `;

/**
 * __useLocationSearchQuery__
 *
 * To run a query within a React component, call `useLocationSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationSearchQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLocationSearchQuery(baseOptions?: Apollo.QueryHookOptions<LocationSearchQuery, LocationSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationSearchQuery, LocationSearchQueryVariables>(LocationSearchDocument, options);
      }
export function useLocationSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationSearchQuery, LocationSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationSearchQuery, LocationSearchQueryVariables>(LocationSearchDocument, options);
        }
export type LocationSearchQueryHookResult = ReturnType<typeof useLocationSearchQuery>;
export type LocationSearchLazyQueryHookResult = ReturnType<typeof useLocationSearchLazyQuery>;
export type LocationSearchQueryResult = Apollo.QueryResult<LocationSearchQuery, LocationSearchQueryVariables>;
export const CustomerTreeDocument = gql`
    query customerTree($customerTreeInput: CustomerTreeInput) {
  customerTree(customerTreeInput: $customerTreeInput) {
    belongType
    belongId
    belongName
    visible
    optional
    parent {
      ...TreeNode
    }
    children {
      ...TreeNode
      parent {
        ...TreeNode
      }
      children {
        ...TreeNode
        parent {
          ...TreeNode
        }
      }
    }
  }
}
    ${TreeNodeFragmentDoc}`;

/**
 * __useCustomerTreeQuery__
 *
 * To run a query within a React component, call `useCustomerTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerTreeQuery({
 *   variables: {
 *      customerTreeInput: // value for 'customerTreeInput'
 *   },
 * });
 */
export function useCustomerTreeQuery(baseOptions?: Apollo.QueryHookOptions<CustomerTreeQuery, CustomerTreeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomerTreeQuery, CustomerTreeQueryVariables>(CustomerTreeDocument, options);
      }
export function useCustomerTreeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomerTreeQuery, CustomerTreeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomerTreeQuery, CustomerTreeQueryVariables>(CustomerTreeDocument, options);
        }
export type CustomerTreeQueryHookResult = ReturnType<typeof useCustomerTreeQuery>;
export type CustomerTreeLazyQueryHookResult = ReturnType<typeof useCustomerTreeLazyQuery>;
export type CustomerTreeQueryResult = Apollo.QueryResult<CustomerTreeQuery, CustomerTreeQueryVariables>;
export const OrgCustomerDocument = gql`
    query orgCustomer {
  orgCustomer {
    customerId
    name
  }
}
    `;

/**
 * __useOrgCustomerQuery__
 *
 * To run a query within a React component, call `useOrgCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrgCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgCustomerQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrgCustomerQuery(baseOptions?: Apollo.QueryHookOptions<OrgCustomerQuery, OrgCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrgCustomerQuery, OrgCustomerQueryVariables>(OrgCustomerDocument, options);
      }
export function useOrgCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrgCustomerQuery, OrgCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrgCustomerQuery, OrgCustomerQueryVariables>(OrgCustomerDocument, options);
        }
export type OrgCustomerQueryHookResult = ReturnType<typeof useOrgCustomerQuery>;
export type OrgCustomerLazyQueryHookResult = ReturnType<typeof useOrgCustomerLazyQuery>;
export type OrgCustomerQueryResult = Apollo.QueryResult<OrgCustomerQuery, OrgCustomerQueryVariables>;
export const ListBelongOrgDocument = gql`
    query listBelongOrg($input: ListBelongOrgInput) {
  listBelongOrg(input: $input) {
    orgId
    orgName
    labelId
    labelName
  }
}
    `;

/**
 * __useListBelongOrgQuery__
 *
 * To run a query within a React component, call `useListBelongOrgQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBelongOrgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBelongOrgQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListBelongOrgQuery(baseOptions?: Apollo.QueryHookOptions<ListBelongOrgQuery, ListBelongOrgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBelongOrgQuery, ListBelongOrgQueryVariables>(ListBelongOrgDocument, options);
      }
export function useListBelongOrgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBelongOrgQuery, ListBelongOrgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBelongOrgQuery, ListBelongOrgQueryVariables>(ListBelongOrgDocument, options);
        }
export type ListBelongOrgQueryHookResult = ReturnType<typeof useListBelongOrgQuery>;
export type ListBelongOrgLazyQueryHookResult = ReturnType<typeof useListBelongOrgLazyQuery>;
export type ListBelongOrgQueryResult = Apollo.QueryResult<ListBelongOrgQuery, ListBelongOrgQueryVariables>;
export const GetSopOrResultDocument = gql`
    query getSopOrResult($input: GetSopOrResultInput) {
  getSopOrResult(input: $input) {
    category {
      categoryName
      id
    }
    enabled
    enabledName
    sopCheckItems {
      enabled
      enabledName
      inputTextRule
      isRemark
      name
      nameLocale
      options {
        isRemark
        name
        nameLocale
        remarkRequired
        remarks
        sort
        value
      }
      remarkRequired
      remarks
      required
      snapshotId
      sopDetailId
      sopId
      sopResult {
        businessId
        cacheEnabled
        checkResult
        checkResultType
        fileLink
        remark
        sopDetailId
        sopId
        sopResultId
        userId
        createTime
      }
      sort
      type
      typeName
    }
    sopId
    templateDesc
    templateName
    universal
    key
  }
}
    `;

/**
 * __useGetSopOrResultQuery__
 *
 * To run a query within a React component, call `useGetSopOrResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSopOrResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSopOrResultQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSopOrResultQuery(baseOptions?: Apollo.QueryHookOptions<GetSopOrResultQuery, GetSopOrResultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSopOrResultQuery, GetSopOrResultQueryVariables>(GetSopOrResultDocument, options);
      }
export function useGetSopOrResultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSopOrResultQuery, GetSopOrResultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSopOrResultQuery, GetSopOrResultQueryVariables>(GetSopOrResultDocument, options);
        }
export type GetSopOrResultQueryHookResult = ReturnType<typeof useGetSopOrResultQuery>;
export type GetSopOrResultLazyQueryHookResult = ReturnType<typeof useGetSopOrResultLazyQuery>;
export type GetSopOrResultQueryResult = Apollo.QueryResult<GetSopOrResultQuery, GetSopOrResultQueryVariables>;
export const CacheAnswerDocument = gql`
    mutation cacheAnswer($input: CacheAnswerInput) {
  cacheAnswer(input: $input)
}
    `;
export type CacheAnswerMutationFn = Apollo.MutationFunction<CacheAnswerMutation, CacheAnswerMutationVariables>;

/**
 * __useCacheAnswerMutation__
 *
 * To run a mutation, you first call `useCacheAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCacheAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cacheAnswerMutation, { data, loading, error }] = useCacheAnswerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCacheAnswerMutation(baseOptions?: Apollo.MutationHookOptions<CacheAnswerMutation, CacheAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CacheAnswerMutation, CacheAnswerMutationVariables>(CacheAnswerDocument, options);
      }
export type CacheAnswerMutationHookResult = ReturnType<typeof useCacheAnswerMutation>;
export type CacheAnswerMutationResult = Apollo.MutationResult<CacheAnswerMutation>;
export type CacheAnswerMutationOptions = Apollo.BaseMutationOptions<CacheAnswerMutation, CacheAnswerMutationVariables>;
export const GetFileByUrlDocument = gql`
    query getFileByUrl($url: String) {
  getFileByUrl(url: $url) {
    externalInfo {
      watermarkText
    }
    fileId
    fileUrl
    fileUploadTime
    filename
  }
}
    `;

/**
 * __useGetFileByUrlQuery__
 *
 * To run a query within a React component, call `useGetFileByUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFileByUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFileByUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGetFileByUrlQuery(baseOptions?: Apollo.QueryHookOptions<GetFileByUrlQuery, GetFileByUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFileByUrlQuery, GetFileByUrlQueryVariables>(GetFileByUrlDocument, options);
      }
export function useGetFileByUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFileByUrlQuery, GetFileByUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFileByUrlQuery, GetFileByUrlQueryVariables>(GetFileByUrlDocument, options);
        }
export type GetFileByUrlQueryHookResult = ReturnType<typeof useGetFileByUrlQuery>;
export type GetFileByUrlLazyQueryHookResult = ReturnType<typeof useGetFileByUrlLazyQuery>;
export type GetFileByUrlQueryResult = Apollo.QueryResult<GetFileByUrlQuery, GetFileByUrlQueryVariables>;
export const ListCategoryDocument = gql`
    query listCategory($filter: CategoryFilterInput) {
  listCategory(filter: $filter) {
    categoryId
    categoryName
    categorySort
    commodityTypeId
    commodityTypeName
    nameLocale {
      locale
      name
    }
  }
}
    `;

/**
 * __useListCategoryQuery__
 *
 * To run a query within a React component, call `useListCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCategoryQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useListCategoryQuery(baseOptions?: Apollo.QueryHookOptions<ListCategoryQuery, ListCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCategoryQuery, ListCategoryQueryVariables>(ListCategoryDocument, options);
      }
export function useListCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCategoryQuery, ListCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCategoryQuery, ListCategoryQueryVariables>(ListCategoryDocument, options);
        }
export type ListCategoryQueryHookResult = ReturnType<typeof useListCategoryQuery>;
export type ListCategoryLazyQueryHookResult = ReturnType<typeof useListCategoryLazyQuery>;
export type ListCategoryQueryResult = Apollo.QueryResult<ListCategoryQuery, ListCategoryQueryVariables>;
export const ListSaleReturnCustomersDocument = gql`
    query listSaleReturnCustomers($input: ListSaleReturnCommodityInput!) {
  listSaleReturnCustomers(input: $input) {
    belongOrganization {
      orgId
      orgName
    }
    org {
      orgId
      orgName
    }
    addressList {
      city {
        firstChar
        hasChildren
        id
        locationType
        name
      }
      district {
        firstChar
        hasChildren
        id
        locationType
        name
      }
      province {
        firstChar
        hasChildren
        id
        locationType
        name
      }
      addressName
      contactList {
        alias
        contactUserId
        customerDetailId
        fileRecordList {
          beginTime
          endTime
          fileList {
            fileInfo {
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
            fileDirection
            fileId
            fileName
            fileUploadTime
            fileUrl
          }
          fileType
        }
        id
        idNumber
        mail
        name
        otherInfoOfIdCard
        phone
        remark
        userId
        wechat
      }
      coordinateList
      country
      customerDetailId
      deliveryName
      id
      shortAddress
      status
    }
    alias
    appId
    attribute
    belongType
    blacklistStatus
    channelId
    channelName
    controlUser
    cooperateTypeList
    corporation
    createTime
    credit
    customerAccountList {
      accountType
      bankCardNo
      bankCityName
      bankName
      bankProvinceName
      customerId
      fileRecordList {
        beginTime
        endTime
        fileList {
          fileInfo {
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
          fileDirection
          fileId
          fileName
          fileUploadTime
          fileUrl
        }
        fileType
      }
      id
      updateBy
      updateTime
      accountName
    }
    customerContactList {
      alias
      contactUserId
      customerDetailId
      fileRecordList {
        beginTime
        endTime
        fileList {
          fileInfo {
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
          fileDirection
          fileId
          fileName
          fileUploadTime
          fileUrl
        }
        fileType
      }
      id
      idNumber
      mail
      name
      otherInfoOfIdCard
      phone
      remark
      userId
      wechat
    }
    customerCooperation {
      balanceMode
      customerDetailId
      cycleCheck
      cycleCredit
      cycleInvoicing
      cyclePay
      id
      quota
      updateBy
      updateTime
    }
    customerId
    customerQualification {
      assetOther
      assetProperty
      assetVehicle
      businessDuration
      businessScale
      businessTypesList
      createBy
      createTime
      customerId
      description
      fileRecordList {
        beginTime
        endTime
        fileList {
          fileInfo {
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
          fileDirection
          fileId
          fileName
          fileUploadTime
          fileUrl
        }
        fileType
      }
      historyAchievement
      id
      saleTypesList {
        categoryId
        categoryName
      }
      salesChannels
      updateBy
      updateTime
    }
    customerUserId
    enable
    establishTime
    fascAdminId
    fascId
    fileRecordList {
      beginTime
      endTime
      fileList {
        fileInfo {
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
        fileDirection
        fileId
        fileName
        fileUploadTime
        fileUrl
      }
      fileType
    }
    financialSystemCode
    id
    idNumber
    infoAuth
    initials
    introducerId
    longCooperation
    mail
    name
    ncCode
    operateAddress
    payTaxesType
    phone
    pinyinOfName
    realNameAuthStatus
    registerAddress
    registerCapital
    registerStatus
    remark
    sourceType
    taxpayerIdentificationNumber
    tenantId
    type
    userStatus
    wechat
  }
}
    `;

/**
 * __useListSaleReturnCustomersQuery__
 *
 * To run a query within a React component, call `useListSaleReturnCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSaleReturnCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSaleReturnCustomersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListSaleReturnCustomersQuery(baseOptions: Apollo.QueryHookOptions<ListSaleReturnCustomersQuery, ListSaleReturnCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSaleReturnCustomersQuery, ListSaleReturnCustomersQueryVariables>(ListSaleReturnCustomersDocument, options);
      }
export function useListSaleReturnCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSaleReturnCustomersQuery, ListSaleReturnCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSaleReturnCustomersQuery, ListSaleReturnCustomersQueryVariables>(ListSaleReturnCustomersDocument, options);
        }
export type ListSaleReturnCustomersQueryHookResult = ReturnType<typeof useListSaleReturnCustomersQuery>;
export type ListSaleReturnCustomersLazyQueryHookResult = ReturnType<typeof useListSaleReturnCustomersLazyQuery>;
export type ListSaleReturnCustomersQueryResult = Apollo.QueryResult<ListSaleReturnCustomersQuery, ListSaleReturnCustomersQueryVariables>;