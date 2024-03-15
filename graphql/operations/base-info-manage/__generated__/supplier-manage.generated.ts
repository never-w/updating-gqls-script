import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PitayaAllSuppliersQueryVariables = SchemaTypes.Exact<{
  supplierCondition?: SchemaTypes.InputMaybe<SchemaTypes.SupplierConditionInput>;
}>;


export type PitayaAllSuppliersQuery = { pitayaAllSuppliers?: Array<{ __typename?: 'PitayaSupplierPayload', attributeEnum?: SchemaTypes.SupplierAttribute, commodityTypeId?: number, commodityTypeName?: string, controlUser?: string, createTime?: number, enable?: number, financialSystemCode?: string, houseNum?: string, householdRegistration?: string, idCard?: string, landlineNum?: string, legalPerson?: string, longCooperation?: number, mail?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phoneNum?: string, recordDate?: number, registerAddress?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, registeredCapital?: string, remark?: string, supplierAddress?: string, supplierBaseType?: SchemaTypes.SupplierBaseType, supplierDetailId?: number, supplierId?: number, supplierName?: string, supplierShortName?: string, supplierSubType?: Array<SchemaTypes.SupplierSubType>, supplierTypeId?: number, tfn?: string, wechat?: string, payTaxesTypeName?: string, registerStatusName?: string, supplierSubTypeName?: Array<string>, supplierBaseTypeName?: string, typeName?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, addressIds?: { __typename?: 'PitayaAddress', addressName?: string, coordinateList?: Array<number>, country?: string, customerDetailId?: number, deliveryName?: string, id?: number, shortAddress?: string, status?: number, city?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, district?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, province?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, contactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, idNumber?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }, bankAccounts?: Array<{ __typename?: 'PitayaSupplierBankAccountPayload', accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, id?: number, note?: string, accountTypeName?: string, supplierId?: number, accountName?: string, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, contacts?: Array<{ __typename?: 'PitayaContactPersonPayload', alias?: string, contactUserId?: number, id?: number, mail?: string, name?: string, note?: string, otherInfoOfIdCard?: string, phone?: string, supplierDetailId?: number, wechat?: string, idCard?: string, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, invoiceSubject?: Array<{ __typename?: 'PitayaSupplierInvoiceSubjectPayload', id?: number, name?: string, supplierDetailId?: number, supplierId?: number, type?: number }>, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, supplierCooperation?: { __typename?: 'PitayaSupplierCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, cycleBalance?: string, cycleCheck?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, invoiceType?: SchemaTypes.InvoiceType, note?: string, quota?: number, rate?: number, supplierDetailId?: number, balanceModeName?: string, invoiceTypeName?: string }, supplierQualification?: { __typename?: 'PitayaSupplierQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, description?: string, historyAchievement?: string, id?: number, note?: string, supplierId?: number, goodsSource?: string, mainSale?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }>, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> } }> };

export type PitayaSupplierQueryVariables = SchemaTypes.Exact<{
  getSupplierInput?: SchemaTypes.InputMaybe<SchemaTypes.GetSupplierInput>;
}>;


export type PitayaSupplierQuery = { pitayaSupplier?: { __typename?: 'PitayaSupplierPayload', attributeEnum?: SchemaTypes.SupplierAttribute, commodityTypeId?: number, commodityTypeName?: string, controlUser?: string, createTime?: number, enable?: number, financialSystemCode?: string, houseNum?: string, householdRegistration?: string, idCard?: string, landlineNum?: string, legalPerson?: string, longCooperation?: number, mail?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phoneNum?: string, recordDate?: number, registerAddress?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, registeredCapital?: string, remark?: string, supplierAddress?: string, supplierBaseType?: SchemaTypes.SupplierBaseType, supplierDetailId?: number, supplierId?: number, supplierName?: string, supplierShortName?: string, supplierSubType?: Array<SchemaTypes.SupplierSubType>, supplierTypeId?: number, tfn?: string, wechat?: string, payTaxesTypeName?: string, registerStatusName?: string, supplierSubTypeName?: Array<string>, supplierBaseTypeName?: string, typeName?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, addressIds?: { __typename?: 'PitayaAddress', addressName?: string, coordinateList?: Array<number>, country?: string, customerDetailId?: number, deliveryName?: string, id?: number, shortAddress?: string, status?: number, city?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, district?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, province?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, contactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, idNumber?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }, bankAccounts?: Array<{ __typename?: 'PitayaSupplierBankAccountPayload', accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, id?: number, note?: string, accountTypeName?: string, supplierId?: number, accountName?: string, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, contacts?: Array<{ __typename?: 'PitayaContactPersonPayload', alias?: string, contactUserId?: number, id?: number, mail?: string, name?: string, note?: string, otherInfoOfIdCard?: string, phone?: string, supplierDetailId?: number, wechat?: string, idCard?: string, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, invoiceSubject?: Array<{ __typename?: 'PitayaSupplierInvoiceSubjectPayload', id?: number, name?: string, supplierDetailId?: number, supplierId?: number, type?: number }>, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, supplierCooperation?: { __typename?: 'PitayaSupplierCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, cycleBalance?: string, cycleCheck?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, invoiceType?: SchemaTypes.InvoiceType, note?: string, quota?: number, rate?: number, supplierDetailId?: number, balanceModeName?: string, invoiceTypeName?: string }, supplierQualification?: { __typename?: 'PitayaSupplierQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, description?: string, historyAchievement?: string, id?: number, note?: string, supplierId?: number, goodsSource?: string, mainSale?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }>, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> } } };

export type PitayaSupplierPagesQueryVariables = SchemaTypes.Exact<{
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
  supplierCondition?: SchemaTypes.InputMaybe<SchemaTypes.SupplierConditionInput>;
}>;


export type PitayaSupplierPagesQuery = { pitayaSupplierPages?: { __typename?: 'SupplierPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'PitayaSupplierPayload', attributeEnum?: SchemaTypes.SupplierAttribute, commodityTypeId?: number, commodityTypeName?: string, controlUser?: string, createTime?: number, enable?: number, financialSystemCode?: string, houseNum?: string, householdRegistration?: string, idCard?: string, landlineNum?: string, legalPerson?: string, longCooperation?: number, mail?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phoneNum?: string, recordDate?: number, registerAddress?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, registeredCapital?: string, remark?: string, supplierAddress?: string, supplierBaseType?: SchemaTypes.SupplierBaseType, supplierDetailId?: number, supplierId?: number, supplierName?: string, supplierShortName?: string, supplierSubType?: Array<SchemaTypes.SupplierSubType>, supplierTypeId?: number, tfn?: string, wechat?: string, payTaxesTypeName?: string, registerStatusName?: string, supplierSubTypeName?: Array<string>, supplierBaseTypeName?: string, typeName?: string, belongOrg?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, addressIds?: { __typename?: 'PitayaAddress', addressName?: string, coordinateList?: Array<number>, country?: string, customerDetailId?: number, deliveryName?: string, id?: number, shortAddress?: string, status?: number, city?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, district?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, province?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, contactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, idNumber?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }, bankAccounts?: Array<{ __typename?: 'PitayaSupplierBankAccountPayload', accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, id?: number, note?: string, accountTypeName?: string, supplierId?: number, accountName?: string, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, contacts?: Array<{ __typename?: 'PitayaContactPersonPayload', alias?: string, contactUserId?: number, id?: number, mail?: string, name?: string, note?: string, otherInfoOfIdCard?: string, phone?: string, supplierDetailId?: number, wechat?: string, idCard?: string, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, invoiceSubject?: Array<{ __typename?: 'PitayaSupplierInvoiceSubjectPayload', id?: number, name?: string, supplierDetailId?: number, supplierId?: number, type?: number }>, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, supplierCooperation?: { __typename?: 'PitayaSupplierCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, cycleBalance?: string, cycleCheck?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, invoiceType?: SchemaTypes.InvoiceType, note?: string, quota?: number, rate?: number, supplierDetailId?: number, balanceModeName?: string, invoiceTypeName?: string }, supplierQualification?: { __typename?: 'PitayaSupplierQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, description?: string, historyAchievement?: string, id?: number, note?: string, supplierId?: number, goodsSource?: string, mainSale?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }>, pics?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> } }> } };

export type CreatePitayaSupplierMutationVariables = SchemaTypes.Exact<{
  supplierInput?: SchemaTypes.InputMaybe<SchemaTypes.PitayaSupplierInput>;
}>;


export type CreatePitayaSupplierMutation = { createPitayaSupplier?: number };

export type CreatePitayaSupplierAccountMutationVariables = SchemaTypes.Exact<{
  createPitayaSupplierAccountInput?: SchemaTypes.InputMaybe<SchemaTypes.CreatePitayaSupplierAccountInput>;
}>;


export type CreatePitayaSupplierAccountMutation = { createPitayaSupplierAccount?: number };

export type CreatePitayaSupplierContactMutationVariables = SchemaTypes.Exact<{
  pitayaCreateSupplierContactInput?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCreateSupplierContactInput>;
}>;


export type CreatePitayaSupplierContactMutation = { createPitayaSupplierContact?: number };

export type CreatePitayaSupplierContractMutationVariables = SchemaTypes.Exact<{
  createPitayaSupplierContractInput?: SchemaTypes.InputMaybe<SchemaTypes.CreatePitayaSupplierContractInput>;
}>;


export type CreatePitayaSupplierContractMutation = { createPitayaSupplierContract?: number };

export type CreatePitayaSupplierCooperationMutationVariables = SchemaTypes.Exact<{
  createPitayaSupplierCooperationInput?: SchemaTypes.InputMaybe<SchemaTypes.CreatePitayaSupplierCooperationInput>;
}>;


export type CreatePitayaSupplierCooperationMutation = { createPitayaSupplierCooperation?: number };

export type CreatePitayaSupplierQualificationMutationVariables = SchemaTypes.Exact<{
  pitayaCreateQualificationInput: SchemaTypes.PitayaCreateQualificationInput;
}>;


export type CreatePitayaSupplierQualificationMutation = { createPitayaSupplierQualification?: number };

export type DelPitayaSupplierContractMutationVariables = SchemaTypes.Exact<{
  delPitayaSupplierContractInput?: SchemaTypes.InputMaybe<SchemaTypes.DelPitayaSupplierContractInput>;
}>;


export type DelPitayaSupplierContractMutation = { delPitayaSupplierContract?: boolean };

export type DelPtayaSupplierAccountMutationVariables = SchemaTypes.Exact<{
  delPtayaSupplierAccountInput?: SchemaTypes.InputMaybe<SchemaTypes.DelPtayaSupplierAccountInput>;
}>;


export type DelPtayaSupplierAccountMutation = { delPtayaSupplierAccount?: number };

export type UpdatePitayaLongCooperationMutationVariables = SchemaTypes.Exact<{
  updatePitayaLongCooperationInput?: SchemaTypes.InputMaybe<SchemaTypes.UpdatePitayaLongCooperationInput>;
}>;


export type UpdatePitayaLongCooperationMutation = { updatePitayaLongCooperation?: number };

export type UpdatePitayaSupplierMutationVariables = SchemaTypes.Exact<{
  supplierInput?: SchemaTypes.InputMaybe<SchemaTypes.PitayaSupplierInput>;
}>;


export type UpdatePitayaSupplierMutation = { updatePitayaSupplier?: number };

export type UpdatePitayaSupplierContactMutationVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['Int'];
  pitayaCreateSupplierContactInput: SchemaTypes.PitayaCreateSupplierContactInput;
}>;


export type UpdatePitayaSupplierContactMutation = { updatePitayaSupplierContact?: number };

export type UpdatePitayaSupplierCooperationMutationVariables = SchemaTypes.Exact<{
  createPitayaSupplierCooperationInput: SchemaTypes.CreatePitayaSupplierCooperationInput;
  id: SchemaTypes.Scalars['Int'];
}>;


export type UpdatePitayaSupplierCooperationMutation = { updatePitayaSupplierCooperation?: number };

export type UpdatePitayaSupplierQualificationMutationVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['Int'];
  pitayaCreateQualificationInput: SchemaTypes.PitayaCreateQualificationInput;
}>;


export type UpdatePitayaSupplierQualificationMutation = { updatePitayaSupplierQualification?: number };

export type UpdatePtayaSupplierAccountMutationVariables = SchemaTypes.Exact<{
  createPitayaSupplierAccountInput: SchemaTypes.CreatePitayaSupplierAccountInput;
  id: SchemaTypes.Scalars['Int'];
}>;


export type UpdatePtayaSupplierAccountMutation = { updatePtayaSupplierAccount?: number };

export type SupplierTypesQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type SupplierTypesQuery = { supplierTypes?: Array<{ __typename?: 'SupplierType', supplierType?: number, typeName?: string }> };

export type GetSupplierBaseQueryVariables = SchemaTypes.Exact<{
  getSupplierBaseInput: SchemaTypes.GetSupplierBaseInput;
}>;


export type GetSupplierBaseQuery = { getSupplierBase?: { __typename?: 'PitayaSupplierBasePayload', attribute?: number, belongOrgId?: number, belongTenantId?: number, businessLicenseType?: number, cityId?: number, controlUser?: string, country?: string, countyId?: number, createBy?: number, createTime?: number, deleted?: number, houseNum?: string, id?: number, idCard?: string, infoAuth?: number, isAssociated?: boolean, landlineNum?: string, legalPerson?: string, mail?: string, name?: string, operateAddress?: string, operateRange?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, payTaxesTypeName?: string, phoneNum?: string, provinceId?: number, recordDate?: number, registerStatus?: SchemaTypes.CorpRegisterStatus, registerStatusName?: string, registeredCapital?: string, supplierAddress?: string, supplierBaseType?: SchemaTypes.SupplierBaseType, supplierBaseTypeName?: string, tfn?: string, wechat?: string, fileRecordsList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> } };


export const PitayaAllSuppliersDocument = gql`
    query pitayaAllSuppliers($supplierCondition: SupplierConditionInput) {
  pitayaAllSuppliers(supplierCondition: $supplierCondition) {
    belongOrg {
      orgId
      orgName
    }
    org {
      orgId
      orgName
    }
    addressIds {
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
            fileId
            fileName
            fileUploadTime
            fileUrl
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
          }
          fileType
        }
        id
        mail
        name
        otherInfoOfIdCard
        phone
        remark
        userId
        wechat
        idNumber
      }
      coordinateList
      country
      customerDetailId
      deliveryName
      id
      shortAddress
      status
    }
    attributeEnum
    bankAccounts {
      accountType
      bankCardNo
      bankCityName
      bankName
      bankProvinceName
      id
      note
      pics {
        beginTime
        endTime
        fileList {
          fileId
          fileName
          fileUploadTime
          fileUrl
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
        }
        fileType
      }
      accountTypeName
      supplierId
      accountName
    }
    commodityTypeId
    commodityTypeName
    contacts {
      alias
      contactUserId
      id
      mail
      name
      note
      otherInfoOfIdCard
      phone
      pics {
        beginTime
        endTime
        fileList {
          fileId
          fileName
          fileUploadTime
          fileUrl
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
        }
        fileType
      }
      supplierDetailId
      wechat
      idCard
    }
    controlUser
    createTime
    enable
    financialSystemCode
    houseNum
    householdRegistration
    idCard
    invoiceSubject {
      id
      name
      supplierDetailId
      supplierId
      type
    }
    landlineNum
    legalPerson
    longCooperation
    mail
    operateAddress
    payTaxesType
    phoneNum
    pics {
      beginTime
      endTime
      fileList {
        fileId
        fileName
        fileUploadTime
        fileUrl
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
      }
      fileType
    }
    recordDate
    registerAddress
    registerStatus
    registeredCapital
    remark
    supplierAddress
    supplierBaseType
    supplierCooperation {
      balanceMode
      cycleBalance
      cycleCheck
      cycleInvoicing
      cyclePay
      id
      invoiceType
      note
      quota
      rate
      supplierDetailId
      balanceModeName
      invoiceTypeName
    }
    supplierDetailId
    supplierId
    supplierName
    supplierQualification {
      assetOther
      assetProperty
      assetVehicle
      description
      historyAchievement
      id
      mainSale {
        categoryId
        categoryName
      }
      note
      pics {
        beginTime
        endTime
        fileList {
          fileId
          fileName
          fileUploadTime
          fileUrl
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
        }
        fileType
      }
      supplierId
      goodsSource
    }
    supplierShortName
    supplierSubType
    supplierTypeId
    tfn
    wechat
    payTaxesTypeName
    registerStatusName
    supplierSubTypeName
    supplierBaseTypeName
    typeName
  }
}
    `;

/**
 * __usePitayaAllSuppliersQuery__
 *
 * To run a query within a React component, call `usePitayaAllSuppliersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaAllSuppliersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaAllSuppliersQuery({
 *   variables: {
 *      supplierCondition: // value for 'supplierCondition'
 *   },
 * });
 */
export function usePitayaAllSuppliersQuery(baseOptions?: Apollo.QueryHookOptions<PitayaAllSuppliersQuery, PitayaAllSuppliersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaAllSuppliersQuery, PitayaAllSuppliersQueryVariables>(PitayaAllSuppliersDocument, options);
      }
export function usePitayaAllSuppliersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaAllSuppliersQuery, PitayaAllSuppliersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaAllSuppliersQuery, PitayaAllSuppliersQueryVariables>(PitayaAllSuppliersDocument, options);
        }
export type PitayaAllSuppliersQueryHookResult = ReturnType<typeof usePitayaAllSuppliersQuery>;
export type PitayaAllSuppliersLazyQueryHookResult = ReturnType<typeof usePitayaAllSuppliersLazyQuery>;
export type PitayaAllSuppliersQueryResult = Apollo.QueryResult<PitayaAllSuppliersQuery, PitayaAllSuppliersQueryVariables>;
export const PitayaSupplierDocument = gql`
    query pitayaSupplier($getSupplierInput: GetSupplierInput) {
  pitayaSupplier(getSupplierInput: $getSupplierInput) {
    belongOrg {
      orgId
      orgName
    }
    org {
      orgId
      orgName
    }
    addressIds {
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
            fileId
            fileName
            fileUploadTime
            fileUrl
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
          }
          fileType
        }
        id
        mail
        name
        otherInfoOfIdCard
        phone
        remark
        userId
        wechat
        idNumber
      }
      coordinateList
      country
      customerDetailId
      deliveryName
      id
      shortAddress
      status
    }
    attributeEnum
    bankAccounts {
      accountType
      bankCardNo
      bankCityName
      bankName
      bankProvinceName
      id
      note
      pics {
        beginTime
        endTime
        fileList {
          fileId
          fileName
          fileUploadTime
          fileUrl
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
        }
        fileType
      }
      accountTypeName
      supplierId
      accountName
    }
    commodityTypeId
    commodityTypeName
    contacts {
      alias
      contactUserId
      id
      mail
      name
      note
      otherInfoOfIdCard
      phone
      pics {
        beginTime
        endTime
        fileList {
          fileId
          fileName
          fileUploadTime
          fileUrl
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
        }
        fileType
      }
      supplierDetailId
      wechat
      idCard
    }
    controlUser
    createTime
    enable
    financialSystemCode
    houseNum
    householdRegistration
    idCard
    invoiceSubject {
      id
      name
      supplierDetailId
      supplierId
      type
    }
    landlineNum
    legalPerson
    longCooperation
    mail
    operateAddress
    payTaxesType
    phoneNum
    pics {
      beginTime
      endTime
      fileList {
        fileId
        fileName
        fileUploadTime
        fileUrl
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
      }
      fileType
    }
    recordDate
    registerAddress
    registerStatus
    registeredCapital
    remark
    supplierAddress
    supplierBaseType
    supplierCooperation {
      balanceMode
      cycleBalance
      cycleCheck
      cycleInvoicing
      cyclePay
      id
      invoiceType
      note
      quota
      rate
      supplierDetailId
      balanceModeName
      invoiceTypeName
    }
    supplierDetailId
    supplierId
    supplierName
    supplierQualification {
      assetOther
      assetProperty
      assetVehicle
      description
      historyAchievement
      id
      mainSale {
        categoryId
        categoryName
      }
      note
      pics {
        beginTime
        endTime
        fileList {
          fileId
          fileName
          fileUploadTime
          fileUrl
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
        }
        fileType
      }
      supplierId
      goodsSource
    }
    supplierShortName
    supplierSubType
    supplierTypeId
    tfn
    wechat
    payTaxesTypeName
    registerStatusName
    supplierSubTypeName
    supplierBaseTypeName
    typeName
  }
}
    `;

/**
 * __usePitayaSupplierQuery__
 *
 * To run a query within a React component, call `usePitayaSupplierQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaSupplierQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaSupplierQuery({
 *   variables: {
 *      getSupplierInput: // value for 'getSupplierInput'
 *   },
 * });
 */
export function usePitayaSupplierQuery(baseOptions?: Apollo.QueryHookOptions<PitayaSupplierQuery, PitayaSupplierQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaSupplierQuery, PitayaSupplierQueryVariables>(PitayaSupplierDocument, options);
      }
export function usePitayaSupplierLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaSupplierQuery, PitayaSupplierQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaSupplierQuery, PitayaSupplierQueryVariables>(PitayaSupplierDocument, options);
        }
export type PitayaSupplierQueryHookResult = ReturnType<typeof usePitayaSupplierQuery>;
export type PitayaSupplierLazyQueryHookResult = ReturnType<typeof usePitayaSupplierLazyQuery>;
export type PitayaSupplierQueryResult = Apollo.QueryResult<PitayaSupplierQuery, PitayaSupplierQueryVariables>;
export const PitayaSupplierPagesDocument = gql`
    query pitayaSupplierPages($page: Page, $supplierCondition: SupplierConditionInput) {
  pitayaSupplierPages(page: $page, supplierCondition: $supplierCondition) {
    pageCurrent
    pageSize
    records {
      belongOrg {
        orgId
        orgName
      }
      org {
        orgId
        orgName
      }
      addressIds {
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
              fileId
              fileName
              fileUploadTime
              fileUrl
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
            }
            fileType
          }
          id
          mail
          name
          otherInfoOfIdCard
          phone
          remark
          userId
          wechat
          idNumber
        }
        coordinateList
        country
        customerDetailId
        deliveryName
        id
        shortAddress
        status
      }
      attributeEnum
      bankAccounts {
        accountType
        bankCardNo
        bankCityName
        bankName
        bankProvinceName
        id
        note
        pics {
          beginTime
          endTime
          fileList {
            fileId
            fileName
            fileUploadTime
            fileUrl
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
          }
          fileType
        }
        accountTypeName
        supplierId
        accountName
      }
      commodityTypeId
      commodityTypeName
      contacts {
        alias
        contactUserId
        id
        mail
        name
        note
        otherInfoOfIdCard
        phone
        pics {
          beginTime
          endTime
          fileList {
            fileId
            fileName
            fileUploadTime
            fileUrl
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
          }
          fileType
        }
        supplierDetailId
        wechat
        idCard
      }
      controlUser
      createTime
      enable
      financialSystemCode
      houseNum
      householdRegistration
      idCard
      invoiceSubject {
        id
        name
        supplierDetailId
        supplierId
        type
      }
      landlineNum
      legalPerson
      longCooperation
      mail
      operateAddress
      payTaxesType
      phoneNum
      pics {
        beginTime
        endTime
        fileList {
          fileId
          fileName
          fileUploadTime
          fileUrl
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
        }
        fileType
      }
      recordDate
      registerAddress
      registerStatus
      registeredCapital
      remark
      supplierAddress
      supplierBaseType
      supplierCooperation {
        balanceMode
        cycleBalance
        cycleCheck
        cycleInvoicing
        cyclePay
        id
        invoiceType
        note
        quota
        rate
        supplierDetailId
        balanceModeName
        invoiceTypeName
      }
      supplierDetailId
      supplierId
      supplierName
      supplierQualification {
        assetOther
        assetProperty
        assetVehicle
        description
        historyAchievement
        id
        mainSale {
          categoryId
          categoryName
        }
        note
        pics {
          beginTime
          endTime
          fileList {
            fileId
            fileName
            fileUploadTime
            fileUrl
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
          }
          fileType
        }
        supplierId
        goodsSource
      }
      supplierShortName
      supplierSubType
      supplierTypeId
      tfn
      wechat
      payTaxesTypeName
      registerStatusName
      supplierSubTypeName
      supplierBaseTypeName
      typeName
    }
    totalRecords
  }
}
    `;

/**
 * __usePitayaSupplierPagesQuery__
 *
 * To run a query within a React component, call `usePitayaSupplierPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaSupplierPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaSupplierPagesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      supplierCondition: // value for 'supplierCondition'
 *   },
 * });
 */
export function usePitayaSupplierPagesQuery(baseOptions?: Apollo.QueryHookOptions<PitayaSupplierPagesQuery, PitayaSupplierPagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaSupplierPagesQuery, PitayaSupplierPagesQueryVariables>(PitayaSupplierPagesDocument, options);
      }
export function usePitayaSupplierPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaSupplierPagesQuery, PitayaSupplierPagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaSupplierPagesQuery, PitayaSupplierPagesQueryVariables>(PitayaSupplierPagesDocument, options);
        }
export type PitayaSupplierPagesQueryHookResult = ReturnType<typeof usePitayaSupplierPagesQuery>;
export type PitayaSupplierPagesLazyQueryHookResult = ReturnType<typeof usePitayaSupplierPagesLazyQuery>;
export type PitayaSupplierPagesQueryResult = Apollo.QueryResult<PitayaSupplierPagesQuery, PitayaSupplierPagesQueryVariables>;
export const CreatePitayaSupplierDocument = gql`
    mutation createPitayaSupplier($supplierInput: PitayaSupplierInput) {
  createPitayaSupplier(supplierInput: $supplierInput)
}
    `;
export type CreatePitayaSupplierMutationFn = Apollo.MutationFunction<CreatePitayaSupplierMutation, CreatePitayaSupplierMutationVariables>;

/**
 * __useCreatePitayaSupplierMutation__
 *
 * To run a mutation, you first call `useCreatePitayaSupplierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaSupplierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaSupplierMutation, { data, loading, error }] = useCreatePitayaSupplierMutation({
 *   variables: {
 *      supplierInput: // value for 'supplierInput'
 *   },
 * });
 */
export function useCreatePitayaSupplierMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaSupplierMutation, CreatePitayaSupplierMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaSupplierMutation, CreatePitayaSupplierMutationVariables>(CreatePitayaSupplierDocument, options);
      }
export type CreatePitayaSupplierMutationHookResult = ReturnType<typeof useCreatePitayaSupplierMutation>;
export type CreatePitayaSupplierMutationResult = Apollo.MutationResult<CreatePitayaSupplierMutation>;
export type CreatePitayaSupplierMutationOptions = Apollo.BaseMutationOptions<CreatePitayaSupplierMutation, CreatePitayaSupplierMutationVariables>;
export const CreatePitayaSupplierAccountDocument = gql`
    mutation createPitayaSupplierAccount($createPitayaSupplierAccountInput: CreatePitayaSupplierAccountInput) {
  createPitayaSupplierAccount(
    createPitayaSupplierAccountInput: $createPitayaSupplierAccountInput
  )
}
    `;
export type CreatePitayaSupplierAccountMutationFn = Apollo.MutationFunction<CreatePitayaSupplierAccountMutation, CreatePitayaSupplierAccountMutationVariables>;

/**
 * __useCreatePitayaSupplierAccountMutation__
 *
 * To run a mutation, you first call `useCreatePitayaSupplierAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaSupplierAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaSupplierAccountMutation, { data, loading, error }] = useCreatePitayaSupplierAccountMutation({
 *   variables: {
 *      createPitayaSupplierAccountInput: // value for 'createPitayaSupplierAccountInput'
 *   },
 * });
 */
export function useCreatePitayaSupplierAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaSupplierAccountMutation, CreatePitayaSupplierAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaSupplierAccountMutation, CreatePitayaSupplierAccountMutationVariables>(CreatePitayaSupplierAccountDocument, options);
      }
export type CreatePitayaSupplierAccountMutationHookResult = ReturnType<typeof useCreatePitayaSupplierAccountMutation>;
export type CreatePitayaSupplierAccountMutationResult = Apollo.MutationResult<CreatePitayaSupplierAccountMutation>;
export type CreatePitayaSupplierAccountMutationOptions = Apollo.BaseMutationOptions<CreatePitayaSupplierAccountMutation, CreatePitayaSupplierAccountMutationVariables>;
export const CreatePitayaSupplierContactDocument = gql`
    mutation createPitayaSupplierContact($pitayaCreateSupplierContactInput: PitayaCreateSupplierContactInput) {
  createPitayaSupplierContact(
    pitayaCreateSupplierContactInput: $pitayaCreateSupplierContactInput
  )
}
    `;
export type CreatePitayaSupplierContactMutationFn = Apollo.MutationFunction<CreatePitayaSupplierContactMutation, CreatePitayaSupplierContactMutationVariables>;

/**
 * __useCreatePitayaSupplierContactMutation__
 *
 * To run a mutation, you first call `useCreatePitayaSupplierContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaSupplierContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaSupplierContactMutation, { data, loading, error }] = useCreatePitayaSupplierContactMutation({
 *   variables: {
 *      pitayaCreateSupplierContactInput: // value for 'pitayaCreateSupplierContactInput'
 *   },
 * });
 */
export function useCreatePitayaSupplierContactMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaSupplierContactMutation, CreatePitayaSupplierContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaSupplierContactMutation, CreatePitayaSupplierContactMutationVariables>(CreatePitayaSupplierContactDocument, options);
      }
export type CreatePitayaSupplierContactMutationHookResult = ReturnType<typeof useCreatePitayaSupplierContactMutation>;
export type CreatePitayaSupplierContactMutationResult = Apollo.MutationResult<CreatePitayaSupplierContactMutation>;
export type CreatePitayaSupplierContactMutationOptions = Apollo.BaseMutationOptions<CreatePitayaSupplierContactMutation, CreatePitayaSupplierContactMutationVariables>;
export const CreatePitayaSupplierContractDocument = gql`
    mutation createPitayaSupplierContract($createPitayaSupplierContractInput: CreatePitayaSupplierContractInput) {
  createPitayaSupplierContract(
    createPitayaSupplierContractInput: $createPitayaSupplierContractInput
  )
}
    `;
export type CreatePitayaSupplierContractMutationFn = Apollo.MutationFunction<CreatePitayaSupplierContractMutation, CreatePitayaSupplierContractMutationVariables>;

/**
 * __useCreatePitayaSupplierContractMutation__
 *
 * To run a mutation, you first call `useCreatePitayaSupplierContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaSupplierContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaSupplierContractMutation, { data, loading, error }] = useCreatePitayaSupplierContractMutation({
 *   variables: {
 *      createPitayaSupplierContractInput: // value for 'createPitayaSupplierContractInput'
 *   },
 * });
 */
export function useCreatePitayaSupplierContractMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaSupplierContractMutation, CreatePitayaSupplierContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaSupplierContractMutation, CreatePitayaSupplierContractMutationVariables>(CreatePitayaSupplierContractDocument, options);
      }
export type CreatePitayaSupplierContractMutationHookResult = ReturnType<typeof useCreatePitayaSupplierContractMutation>;
export type CreatePitayaSupplierContractMutationResult = Apollo.MutationResult<CreatePitayaSupplierContractMutation>;
export type CreatePitayaSupplierContractMutationOptions = Apollo.BaseMutationOptions<CreatePitayaSupplierContractMutation, CreatePitayaSupplierContractMutationVariables>;
export const CreatePitayaSupplierCooperationDocument = gql`
    mutation createPitayaSupplierCooperation($createPitayaSupplierCooperationInput: CreatePitayaSupplierCooperationInput) {
  createPitayaSupplierCooperation(
    createPitayaSupplierCooperationInput: $createPitayaSupplierCooperationInput
  )
}
    `;
export type CreatePitayaSupplierCooperationMutationFn = Apollo.MutationFunction<CreatePitayaSupplierCooperationMutation, CreatePitayaSupplierCooperationMutationVariables>;

/**
 * __useCreatePitayaSupplierCooperationMutation__
 *
 * To run a mutation, you first call `useCreatePitayaSupplierCooperationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaSupplierCooperationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaSupplierCooperationMutation, { data, loading, error }] = useCreatePitayaSupplierCooperationMutation({
 *   variables: {
 *      createPitayaSupplierCooperationInput: // value for 'createPitayaSupplierCooperationInput'
 *   },
 * });
 */
export function useCreatePitayaSupplierCooperationMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaSupplierCooperationMutation, CreatePitayaSupplierCooperationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaSupplierCooperationMutation, CreatePitayaSupplierCooperationMutationVariables>(CreatePitayaSupplierCooperationDocument, options);
      }
export type CreatePitayaSupplierCooperationMutationHookResult = ReturnType<typeof useCreatePitayaSupplierCooperationMutation>;
export type CreatePitayaSupplierCooperationMutationResult = Apollo.MutationResult<CreatePitayaSupplierCooperationMutation>;
export type CreatePitayaSupplierCooperationMutationOptions = Apollo.BaseMutationOptions<CreatePitayaSupplierCooperationMutation, CreatePitayaSupplierCooperationMutationVariables>;
export const CreatePitayaSupplierQualificationDocument = gql`
    mutation createPitayaSupplierQualification($pitayaCreateQualificationInput: PitayaCreateQualificationInput!) {
  createPitayaSupplierQualification(
    pitayaCreateQualificationInput: $pitayaCreateQualificationInput
  )
}
    `;
export type CreatePitayaSupplierQualificationMutationFn = Apollo.MutationFunction<CreatePitayaSupplierQualificationMutation, CreatePitayaSupplierQualificationMutationVariables>;

/**
 * __useCreatePitayaSupplierQualificationMutation__
 *
 * To run a mutation, you first call `useCreatePitayaSupplierQualificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaSupplierQualificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaSupplierQualificationMutation, { data, loading, error }] = useCreatePitayaSupplierQualificationMutation({
 *   variables: {
 *      pitayaCreateQualificationInput: // value for 'pitayaCreateQualificationInput'
 *   },
 * });
 */
export function useCreatePitayaSupplierQualificationMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaSupplierQualificationMutation, CreatePitayaSupplierQualificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaSupplierQualificationMutation, CreatePitayaSupplierQualificationMutationVariables>(CreatePitayaSupplierQualificationDocument, options);
      }
export type CreatePitayaSupplierQualificationMutationHookResult = ReturnType<typeof useCreatePitayaSupplierQualificationMutation>;
export type CreatePitayaSupplierQualificationMutationResult = Apollo.MutationResult<CreatePitayaSupplierQualificationMutation>;
export type CreatePitayaSupplierQualificationMutationOptions = Apollo.BaseMutationOptions<CreatePitayaSupplierQualificationMutation, CreatePitayaSupplierQualificationMutationVariables>;
export const DelPitayaSupplierContractDocument = gql`
    mutation delPitayaSupplierContract($delPitayaSupplierContractInput: DelPitayaSupplierContractInput) {
  delPitayaSupplierContract(
    delPitayaSupplierContractInput: $delPitayaSupplierContractInput
  )
}
    `;
export type DelPitayaSupplierContractMutationFn = Apollo.MutationFunction<DelPitayaSupplierContractMutation, DelPitayaSupplierContractMutationVariables>;

/**
 * __useDelPitayaSupplierContractMutation__
 *
 * To run a mutation, you first call `useDelPitayaSupplierContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelPitayaSupplierContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delPitayaSupplierContractMutation, { data, loading, error }] = useDelPitayaSupplierContractMutation({
 *   variables: {
 *      delPitayaSupplierContractInput: // value for 'delPitayaSupplierContractInput'
 *   },
 * });
 */
export function useDelPitayaSupplierContractMutation(baseOptions?: Apollo.MutationHookOptions<DelPitayaSupplierContractMutation, DelPitayaSupplierContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DelPitayaSupplierContractMutation, DelPitayaSupplierContractMutationVariables>(DelPitayaSupplierContractDocument, options);
      }
export type DelPitayaSupplierContractMutationHookResult = ReturnType<typeof useDelPitayaSupplierContractMutation>;
export type DelPitayaSupplierContractMutationResult = Apollo.MutationResult<DelPitayaSupplierContractMutation>;
export type DelPitayaSupplierContractMutationOptions = Apollo.BaseMutationOptions<DelPitayaSupplierContractMutation, DelPitayaSupplierContractMutationVariables>;
export const DelPtayaSupplierAccountDocument = gql`
    mutation delPtayaSupplierAccount($delPtayaSupplierAccountInput: DelPtayaSupplierAccountInput) {
  delPtayaSupplierAccount(
    delPtayaSupplierAccountInput: $delPtayaSupplierAccountInput
  )
}
    `;
export type DelPtayaSupplierAccountMutationFn = Apollo.MutationFunction<DelPtayaSupplierAccountMutation, DelPtayaSupplierAccountMutationVariables>;

/**
 * __useDelPtayaSupplierAccountMutation__
 *
 * To run a mutation, you first call `useDelPtayaSupplierAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelPtayaSupplierAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delPtayaSupplierAccountMutation, { data, loading, error }] = useDelPtayaSupplierAccountMutation({
 *   variables: {
 *      delPtayaSupplierAccountInput: // value for 'delPtayaSupplierAccountInput'
 *   },
 * });
 */
export function useDelPtayaSupplierAccountMutation(baseOptions?: Apollo.MutationHookOptions<DelPtayaSupplierAccountMutation, DelPtayaSupplierAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DelPtayaSupplierAccountMutation, DelPtayaSupplierAccountMutationVariables>(DelPtayaSupplierAccountDocument, options);
      }
export type DelPtayaSupplierAccountMutationHookResult = ReturnType<typeof useDelPtayaSupplierAccountMutation>;
export type DelPtayaSupplierAccountMutationResult = Apollo.MutationResult<DelPtayaSupplierAccountMutation>;
export type DelPtayaSupplierAccountMutationOptions = Apollo.BaseMutationOptions<DelPtayaSupplierAccountMutation, DelPtayaSupplierAccountMutationVariables>;
export const UpdatePitayaLongCooperationDocument = gql`
    mutation updatePitayaLongCooperation($updatePitayaLongCooperationInput: UpdatePitayaLongCooperationInput) {
  updatePitayaLongCooperation(
    updatePitayaLongCooperationInput: $updatePitayaLongCooperationInput
  )
}
    `;
export type UpdatePitayaLongCooperationMutationFn = Apollo.MutationFunction<UpdatePitayaLongCooperationMutation, UpdatePitayaLongCooperationMutationVariables>;

/**
 * __useUpdatePitayaLongCooperationMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaLongCooperationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaLongCooperationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaLongCooperationMutation, { data, loading, error }] = useUpdatePitayaLongCooperationMutation({
 *   variables: {
 *      updatePitayaLongCooperationInput: // value for 'updatePitayaLongCooperationInput'
 *   },
 * });
 */
export function useUpdatePitayaLongCooperationMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaLongCooperationMutation, UpdatePitayaLongCooperationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaLongCooperationMutation, UpdatePitayaLongCooperationMutationVariables>(UpdatePitayaLongCooperationDocument, options);
      }
export type UpdatePitayaLongCooperationMutationHookResult = ReturnType<typeof useUpdatePitayaLongCooperationMutation>;
export type UpdatePitayaLongCooperationMutationResult = Apollo.MutationResult<UpdatePitayaLongCooperationMutation>;
export type UpdatePitayaLongCooperationMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaLongCooperationMutation, UpdatePitayaLongCooperationMutationVariables>;
export const UpdatePitayaSupplierDocument = gql`
    mutation updatePitayaSupplier($supplierInput: PitayaSupplierInput) {
  updatePitayaSupplier(supplierInput: $supplierInput)
}
    `;
export type UpdatePitayaSupplierMutationFn = Apollo.MutationFunction<UpdatePitayaSupplierMutation, UpdatePitayaSupplierMutationVariables>;

/**
 * __useUpdatePitayaSupplierMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaSupplierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaSupplierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaSupplierMutation, { data, loading, error }] = useUpdatePitayaSupplierMutation({
 *   variables: {
 *      supplierInput: // value for 'supplierInput'
 *   },
 * });
 */
export function useUpdatePitayaSupplierMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaSupplierMutation, UpdatePitayaSupplierMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaSupplierMutation, UpdatePitayaSupplierMutationVariables>(UpdatePitayaSupplierDocument, options);
      }
export type UpdatePitayaSupplierMutationHookResult = ReturnType<typeof useUpdatePitayaSupplierMutation>;
export type UpdatePitayaSupplierMutationResult = Apollo.MutationResult<UpdatePitayaSupplierMutation>;
export type UpdatePitayaSupplierMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaSupplierMutation, UpdatePitayaSupplierMutationVariables>;
export const UpdatePitayaSupplierContactDocument = gql`
    mutation updatePitayaSupplierContact($id: Int!, $pitayaCreateSupplierContactInput: PitayaCreateSupplierContactInput!) {
  updatePitayaSupplierContact(
    id: $id
    pitayaCreateSupplierContactInput: $pitayaCreateSupplierContactInput
  )
}
    `;
export type UpdatePitayaSupplierContactMutationFn = Apollo.MutationFunction<UpdatePitayaSupplierContactMutation, UpdatePitayaSupplierContactMutationVariables>;

/**
 * __useUpdatePitayaSupplierContactMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaSupplierContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaSupplierContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaSupplierContactMutation, { data, loading, error }] = useUpdatePitayaSupplierContactMutation({
 *   variables: {
 *      id: // value for 'id'
 *      pitayaCreateSupplierContactInput: // value for 'pitayaCreateSupplierContactInput'
 *   },
 * });
 */
export function useUpdatePitayaSupplierContactMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaSupplierContactMutation, UpdatePitayaSupplierContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaSupplierContactMutation, UpdatePitayaSupplierContactMutationVariables>(UpdatePitayaSupplierContactDocument, options);
      }
export type UpdatePitayaSupplierContactMutationHookResult = ReturnType<typeof useUpdatePitayaSupplierContactMutation>;
export type UpdatePitayaSupplierContactMutationResult = Apollo.MutationResult<UpdatePitayaSupplierContactMutation>;
export type UpdatePitayaSupplierContactMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaSupplierContactMutation, UpdatePitayaSupplierContactMutationVariables>;
export const UpdatePitayaSupplierCooperationDocument = gql`
    mutation updatePitayaSupplierCooperation($createPitayaSupplierCooperationInput: CreatePitayaSupplierCooperationInput!, $id: Int!) {
  updatePitayaSupplierCooperation(
    createPitayaSupplierCooperationInput: $createPitayaSupplierCooperationInput
    id: $id
  )
}
    `;
export type UpdatePitayaSupplierCooperationMutationFn = Apollo.MutationFunction<UpdatePitayaSupplierCooperationMutation, UpdatePitayaSupplierCooperationMutationVariables>;

/**
 * __useUpdatePitayaSupplierCooperationMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaSupplierCooperationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaSupplierCooperationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaSupplierCooperationMutation, { data, loading, error }] = useUpdatePitayaSupplierCooperationMutation({
 *   variables: {
 *      createPitayaSupplierCooperationInput: // value for 'createPitayaSupplierCooperationInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdatePitayaSupplierCooperationMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaSupplierCooperationMutation, UpdatePitayaSupplierCooperationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaSupplierCooperationMutation, UpdatePitayaSupplierCooperationMutationVariables>(UpdatePitayaSupplierCooperationDocument, options);
      }
export type UpdatePitayaSupplierCooperationMutationHookResult = ReturnType<typeof useUpdatePitayaSupplierCooperationMutation>;
export type UpdatePitayaSupplierCooperationMutationResult = Apollo.MutationResult<UpdatePitayaSupplierCooperationMutation>;
export type UpdatePitayaSupplierCooperationMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaSupplierCooperationMutation, UpdatePitayaSupplierCooperationMutationVariables>;
export const UpdatePitayaSupplierQualificationDocument = gql`
    mutation updatePitayaSupplierQualification($id: Int!, $pitayaCreateQualificationInput: PitayaCreateQualificationInput!) {
  updatePitayaSupplierQualification(
    id: $id
    pitayaCreateQualificationInput: $pitayaCreateQualificationInput
  )
}
    `;
export type UpdatePitayaSupplierQualificationMutationFn = Apollo.MutationFunction<UpdatePitayaSupplierQualificationMutation, UpdatePitayaSupplierQualificationMutationVariables>;

/**
 * __useUpdatePitayaSupplierQualificationMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaSupplierQualificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaSupplierQualificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaSupplierQualificationMutation, { data, loading, error }] = useUpdatePitayaSupplierQualificationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      pitayaCreateQualificationInput: // value for 'pitayaCreateQualificationInput'
 *   },
 * });
 */
export function useUpdatePitayaSupplierQualificationMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaSupplierQualificationMutation, UpdatePitayaSupplierQualificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaSupplierQualificationMutation, UpdatePitayaSupplierQualificationMutationVariables>(UpdatePitayaSupplierQualificationDocument, options);
      }
export type UpdatePitayaSupplierQualificationMutationHookResult = ReturnType<typeof useUpdatePitayaSupplierQualificationMutation>;
export type UpdatePitayaSupplierQualificationMutationResult = Apollo.MutationResult<UpdatePitayaSupplierQualificationMutation>;
export type UpdatePitayaSupplierQualificationMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaSupplierQualificationMutation, UpdatePitayaSupplierQualificationMutationVariables>;
export const UpdatePtayaSupplierAccountDocument = gql`
    mutation updatePtayaSupplierAccount($createPitayaSupplierAccountInput: CreatePitayaSupplierAccountInput!, $id: Int!) {
  updatePtayaSupplierAccount(
    createPitayaSupplierAccountInput: $createPitayaSupplierAccountInput
    id: $id
  )
}
    `;
export type UpdatePtayaSupplierAccountMutationFn = Apollo.MutationFunction<UpdatePtayaSupplierAccountMutation, UpdatePtayaSupplierAccountMutationVariables>;

/**
 * __useUpdatePtayaSupplierAccountMutation__
 *
 * To run a mutation, you first call `useUpdatePtayaSupplierAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePtayaSupplierAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePtayaSupplierAccountMutation, { data, loading, error }] = useUpdatePtayaSupplierAccountMutation({
 *   variables: {
 *      createPitayaSupplierAccountInput: // value for 'createPitayaSupplierAccountInput'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdatePtayaSupplierAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePtayaSupplierAccountMutation, UpdatePtayaSupplierAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePtayaSupplierAccountMutation, UpdatePtayaSupplierAccountMutationVariables>(UpdatePtayaSupplierAccountDocument, options);
      }
export type UpdatePtayaSupplierAccountMutationHookResult = ReturnType<typeof useUpdatePtayaSupplierAccountMutation>;
export type UpdatePtayaSupplierAccountMutationResult = Apollo.MutationResult<UpdatePtayaSupplierAccountMutation>;
export type UpdatePtayaSupplierAccountMutationOptions = Apollo.BaseMutationOptions<UpdatePtayaSupplierAccountMutation, UpdatePtayaSupplierAccountMutationVariables>;
export const SupplierTypesDocument = gql`
    query supplierTypes {
  supplierTypes {
    supplierType
    typeName
  }
}
    `;

/**
 * __useSupplierTypesQuery__
 *
 * To run a query within a React component, call `useSupplierTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupplierTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupplierTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSupplierTypesQuery(baseOptions?: Apollo.QueryHookOptions<SupplierTypesQuery, SupplierTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SupplierTypesQuery, SupplierTypesQueryVariables>(SupplierTypesDocument, options);
      }
export function useSupplierTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SupplierTypesQuery, SupplierTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SupplierTypesQuery, SupplierTypesQueryVariables>(SupplierTypesDocument, options);
        }
export type SupplierTypesQueryHookResult = ReturnType<typeof useSupplierTypesQuery>;
export type SupplierTypesLazyQueryHookResult = ReturnType<typeof useSupplierTypesLazyQuery>;
export type SupplierTypesQueryResult = Apollo.QueryResult<SupplierTypesQuery, SupplierTypesQueryVariables>;
export const GetSupplierBaseDocument = gql`
    query getSupplierBase($getSupplierBaseInput: GetSupplierBaseInput!) {
  getSupplierBase(getSupplierBaseInput: $getSupplierBaseInput) {
    attribute
    belongOrgId
    belongTenantId
    businessLicenseType
    cityId
    controlUser
    country
    countyId
    createBy
    createTime
    deleted
    fileRecordsList {
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
    houseNum
    id
    idCard
    infoAuth
    isAssociated
    landlineNum
    legalPerson
    mail
    name
    operateAddress
    operateRange
    payTaxesType
    payTaxesTypeName
    phoneNum
    provinceId
    recordDate
    registerStatus
    registerStatusName
    registeredCapital
    supplierAddress
    supplierBaseType
    supplierBaseTypeName
    tfn
    wechat
  }
}
    `;

/**
 * __useGetSupplierBaseQuery__
 *
 * To run a query within a React component, call `useGetSupplierBaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupplierBaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupplierBaseQuery({
 *   variables: {
 *      getSupplierBaseInput: // value for 'getSupplierBaseInput'
 *   },
 * });
 */
export function useGetSupplierBaseQuery(baseOptions: Apollo.QueryHookOptions<GetSupplierBaseQuery, GetSupplierBaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSupplierBaseQuery, GetSupplierBaseQueryVariables>(GetSupplierBaseDocument, options);
      }
export function useGetSupplierBaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSupplierBaseQuery, GetSupplierBaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSupplierBaseQuery, GetSupplierBaseQueryVariables>(GetSupplierBaseDocument, options);
        }
export type GetSupplierBaseQueryHookResult = ReturnType<typeof useGetSupplierBaseQuery>;
export type GetSupplierBaseLazyQueryHookResult = ReturnType<typeof useGetSupplierBaseLazyQuery>;
export type GetSupplierBaseQueryResult = Apollo.QueryResult<GetSupplierBaseQuery, GetSupplierBaseQueryVariables>;