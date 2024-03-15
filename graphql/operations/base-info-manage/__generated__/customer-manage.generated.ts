import type * as SchemaTypes from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PitayaCustomersQueryVariables = SchemaTypes.Exact<{
  customersInput?: SchemaTypes.InputMaybe<SchemaTypes.CustomersInput>;
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>;
}>;


export type PitayaCustomersQuery = { pitayaCustomers?: { __typename?: 'PitayaCustomerPagePayload', pageCurrent?: number, pageSize?: number, totalRecords?: number, records?: Array<{ __typename?: 'CustomerPayload', alias?: string, appId?: number, attribute?: SchemaTypes.CustomerAttribute, belongType?: number, blacklistStatus?: number, channelId?: number, channelName?: string, controlUser?: string, cooperateTypeList?: Array<number>, corporation?: string, createTime?: number, credit?: number, customerId?: number, customerUserId?: number, enable?: number, establishTime?: number, fascAdminId?: string, fascId?: string, financialSystemCode?: string, id?: number, idNumber?: string, infoAuth?: number, initials?: string, introducerId?: number, longCooperation?: number, mail?: string, name?: string, ncCode?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phone?: string, pinyinOfName?: string, realNameAuthStatus?: number, registerAddress?: string, registerCapital?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, remark?: string, sourceType?: number, taxpayerIdentificationNumber?: string, tenantId?: string, type?: SchemaTypes.PitayaCustomerType, userStatus?: SchemaTypes.UserStatus, wechat?: string, belongOrganization?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, addressList?: Array<{ __typename?: 'PitayaAddress', addressName?: string, coordinateList?: Array<number>, country?: string, customerDetailId?: number, deliveryName?: string, id?: number, shortAddress?: string, status?: number, city?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, district?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, province?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, contactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }>, customerAccountList?: Array<{ __typename?: 'PitayaCustomerAccountPayload', accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, customerId?: number, id?: number, updateBy?: number, updateTime?: number, accountName?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerContactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerCooperation?: { __typename?: 'CustomerCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, customerDetailId?: number, cycleCheck?: string, cycleCredit?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, quota?: number, updateBy?: number, updateTime?: number }, customerQualification?: { __typename?: 'PitayaCustomerQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, businessDuration?: SchemaTypes.PitayaCustomerBusinessDurationEnum, businessScale?: SchemaTypes.PitayaCustomerBusinessScale, businessTypesList?: Array<SchemaTypes.PitayaCustomerBusinessTypeEnum>, createBy?: number, createTime?: number, customerId?: number, description?: string, historyAchievement?: string, id?: number, salesChannels?: string, updateBy?: number, updateTime?: number, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, saleTypesList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }> }, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> } };

export type ListCustomerQueryVariables = SchemaTypes.Exact<{
  customerListInput?: SchemaTypes.InputMaybe<SchemaTypes.CustomerListInput>;
}>;


export type ListCustomerQuery = { listCustomer?: Array<{ __typename?: 'CustomerPayload', alias?: string, appId?: number, attribute?: SchemaTypes.CustomerAttribute, belongType?: number, blacklistStatus?: number, channelId?: number, channelName?: string, controlUser?: string, cooperateTypeList?: Array<number>, corporation?: string, createTime?: number, credit?: number, customerId?: number, customerUserId?: number, enable?: number, establishTime?: number, fascAdminId?: string, fascId?: string, financialSystemCode?: string, id?: number, idNumber?: string, infoAuth?: number, initials?: string, introducerId?: number, longCooperation?: number, mail?: string, name?: string, ncCode?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phone?: string, pinyinOfName?: string, realNameAuthStatus?: number, registerAddress?: string, registerCapital?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, remark?: string, sourceType?: number, taxpayerIdentificationNumber?: string, tenantId?: string, type?: SchemaTypes.PitayaCustomerType, userStatus?: SchemaTypes.UserStatus, wechat?: string, belongOrganization?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, addressList?: Array<{ __typename?: 'PitayaAddress', addressName?: string, coordinateList?: Array<number>, country?: string, customerDetailId?: number, deliveryName?: string, id?: number, shortAddress?: string, status?: number, city?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, district?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, province?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, contactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }>, customerAccountList?: Array<{ __typename?: 'PitayaCustomerAccountPayload', accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, customerId?: number, id?: number, updateBy?: number, updateTime?: number, accountName?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerContactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerCooperation?: { __typename?: 'CustomerCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, customerDetailId?: number, cycleCheck?: string, cycleCredit?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, quota?: number, updateBy?: number, updateTime?: number }, customerQualification?: { __typename?: 'PitayaCustomerQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, businessDuration?: SchemaTypes.PitayaCustomerBusinessDurationEnum, businessScale?: SchemaTypes.PitayaCustomerBusinessScale, businessTypesList?: Array<SchemaTypes.PitayaCustomerBusinessTypeEnum>, createBy?: number, createTime?: number, customerId?: number, description?: string, historyAchievement?: string, id?: number, salesChannels?: string, updateBy?: number, updateTime?: number, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, saleTypesList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }> }, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> };

export type PitayaCustomerGroupsQueryVariables = SchemaTypes.Exact<{ [key: string]: never; }>;


export type PitayaCustomerGroupsQuery = { pitayaCustomerGroups?: Array<{ __typename?: 'CustomerGroupPayload', customerGroupId?: number, customerGroupName?: string, customerPayloadList?: Array<{ __typename?: 'CustomerPayload', alias?: string, appId?: number, attribute?: SchemaTypes.CustomerAttribute, belongType?: number, blacklistStatus?: number, channelId?: number, channelName?: string, controlUser?: string, cooperateTypeList?: Array<number>, corporation?: string, createTime?: number, credit?: number, customerId?: number, customerUserId?: number, enable?: number, establishTime?: number, fascAdminId?: string, fascId?: string, financialSystemCode?: string, id?: number, idNumber?: string, infoAuth?: number, initials?: string, introducerId?: number, longCooperation?: number, mail?: string, name?: string, ncCode?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phone?: string, pinyinOfName?: string, realNameAuthStatus?: number, registerAddress?: string, registerCapital?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, remark?: string, sourceType?: number, taxpayerIdentificationNumber?: string, tenantId?: string, type?: SchemaTypes.PitayaCustomerType, userStatus?: SchemaTypes.UserStatus, wechat?: string, belongOrganization?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, addressList?: Array<{ __typename?: 'PitayaAddress', addressName?: string, coordinateList?: Array<number>, country?: string, customerDetailId?: number, deliveryName?: string, id?: number, shortAddress?: string, status?: number, city?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, district?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, province?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, contactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }>, customerAccountList?: Array<{ __typename?: 'PitayaCustomerAccountPayload', accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, customerId?: number, id?: number, updateBy?: number, updateTime?: number, accountName?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerContactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerCooperation?: { __typename?: 'CustomerCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, customerDetailId?: number, cycleCheck?: string, cycleCredit?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, quota?: number, updateBy?: number, updateTime?: number }, customerQualification?: { __typename?: 'PitayaCustomerQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, businessDuration?: SchemaTypes.PitayaCustomerBusinessDurationEnum, businessScale?: SchemaTypes.PitayaCustomerBusinessScale, businessTypesList?: Array<SchemaTypes.PitayaCustomerBusinessTypeEnum>, createBy?: number, createTime?: number, customerId?: number, description?: string, historyAchievement?: string, id?: number, salesChannels?: string, updateBy?: number, updateTime?: number, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, saleTypesList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }> }, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }> };

export type AllListCustomerQueryVariables = SchemaTypes.Exact<{
  customerAllListInput?: SchemaTypes.InputMaybe<SchemaTypes.CustomerAllListInput>;
}>;


export type AllListCustomerQuery = { allListCustomer?: Array<{ __typename?: 'CustomerPayload', alias?: string, appId?: number, attribute?: SchemaTypes.CustomerAttribute, belongType?: number, blacklistStatus?: number, channelId?: number, channelName?: string, controlUser?: string, cooperateTypeList?: Array<number>, corporation?: string, createTime?: number, credit?: number, customerId?: number, customerUserId?: number, enable?: number, establishTime?: number, fascAdminId?: string, fascId?: string, financialSystemCode?: string, id?: number, idNumber?: string, infoAuth?: number, initials?: string, introducerId?: number, longCooperation?: number, mail?: string, name?: string, ncCode?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phone?: string, pinyinOfName?: string, realNameAuthStatus?: number, registerAddress?: string, registerCapital?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, remark?: string, sourceType?: number, taxpayerIdentificationNumber?: string, tenantId?: string, type?: SchemaTypes.PitayaCustomerType, userStatus?: SchemaTypes.UserStatus, wechat?: string, belongOrganization?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, addressList?: Array<{ __typename?: 'PitayaAddress', addressName?: string, coordinateList?: Array<number>, country?: string, customerDetailId?: number, deliveryName?: string, id?: number, shortAddress?: string, status?: number, city?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, district?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, province?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, contactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }>, customerAccountList?: Array<{ __typename?: 'PitayaCustomerAccountPayload', accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, customerId?: number, id?: number, updateBy?: number, updateTime?: number, accountName?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerContactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerCooperation?: { __typename?: 'CustomerCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, customerDetailId?: number, cycleCheck?: string, cycleCredit?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, quota?: number, updateBy?: number, updateTime?: number }, customerQualification?: { __typename?: 'PitayaCustomerQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, businessDuration?: SchemaTypes.PitayaCustomerBusinessDurationEnum, businessScale?: SchemaTypes.PitayaCustomerBusinessScale, businessTypesList?: Array<SchemaTypes.PitayaCustomerBusinessTypeEnum>, createBy?: number, createTime?: number, customerId?: number, description?: string, historyAchievement?: string, id?: number, salesChannels?: string, updateBy?: number, updateTime?: number, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, saleTypesList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }> }, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, orgCustomer?: { __typename?: 'CustomerPayload', alias?: string, appId?: number, attribute?: SchemaTypes.CustomerAttribute, belongType?: number, blacklistStatus?: number, channelId?: number, channelName?: string, controlUser?: string, cooperateTypeList?: Array<number>, corporation?: string, createTime?: number, credit?: number, customerId?: number, customerUserId?: number, enable?: number, establishTime?: number, fascAdminId?: string, fascId?: string, financialSystemCode?: string, id?: number, idNumber?: string, infoAuth?: number, initials?: string, introducerId?: number, longCooperation?: number, mail?: string, name?: string, ncCode?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phone?: string, pinyinOfName?: string, realNameAuthStatus?: number, registerAddress?: string, registerCapital?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, remark?: string, sourceType?: number, taxpayerIdentificationNumber?: string, tenantId?: string, type?: SchemaTypes.PitayaCustomerType, userStatus?: SchemaTypes.UserStatus, wechat?: string, belongOrganization?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, addressList?: Array<{ __typename?: 'PitayaAddress', addressName?: string, coordinateList?: Array<number>, country?: string, customerDetailId?: number, deliveryName?: string, id?: number, shortAddress?: string, status?: number, city?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, district?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, province?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, contactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }>, customerAccountList?: Array<{ __typename?: 'PitayaCustomerAccountPayload', accountName?: string, accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, customerId?: number, id?: number, updateBy?: number, updateTime?: number, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerContactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerCooperation?: { __typename?: 'CustomerCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, customerDetailId?: number, cycleCheck?: string, cycleCredit?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, quota?: number, updateBy?: number, updateTime?: number }, customerQualification?: { __typename?: 'PitayaCustomerQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, businessDuration?: SchemaTypes.PitayaCustomerBusinessDurationEnum, businessScale?: SchemaTypes.PitayaCustomerBusinessScale, businessTypesList?: Array<SchemaTypes.PitayaCustomerBusinessTypeEnum>, createBy?: number, createTime?: number, customerId?: number, description?: string, historyAchievement?: string, id?: number, salesChannels?: string, updateBy?: number, updateTime?: number, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, saleTypesList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }> }, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> } };

export type CreatePitayaCustomerMutationVariables = SchemaTypes.Exact<{
  customerInput?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCustomerInput>;
}>;


export type CreatePitayaCustomerMutation = { createPitayaCustomer?: number };

export type PitayaCustomerQueryVariables = SchemaTypes.Exact<{
  customerId?: SchemaTypes.InputMaybe<SchemaTypes.Scalars['Int']>;
}>;


export type PitayaCustomerQuery = { pitayaCustomer?: { __typename?: 'CustomerPayload', alias?: string, appId?: number, attribute?: SchemaTypes.CustomerAttribute, belongType?: number, blacklistStatus?: number, channelId?: number, channelName?: string, controlUser?: string, cooperateTypeList?: Array<number>, corporation?: string, createTime?: number, credit?: number, customerId?: number, customerUserId?: number, enable?: number, establishTime?: number, fascAdminId?: string, fascId?: string, financialSystemCode?: string, id?: number, idNumber?: string, infoAuth?: number, initials?: string, introducerId?: number, longCooperation?: number, mail?: string, name?: string, ncCode?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phone?: string, pinyinOfName?: string, realNameAuthStatus?: number, registerAddress?: string, registerCapital?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, remark?: string, sourceType?: number, taxpayerIdentificationNumber?: string, tenantId?: string, type?: SchemaTypes.PitayaCustomerType, userStatus?: SchemaTypes.UserStatus, wechat?: string, belongOrganization?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, org?: { __typename?: 'PitayaOrg', orgId?: number, orgName?: string }, addressList?: Array<{ __typename?: 'PitayaAddress', addressName?: string, coordinateList?: Array<number>, country?: string, customerDetailId?: number, deliveryName?: string, id?: number, shortAddress?: string, status?: number, city?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, district?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, province?: { __typename?: 'LocationPayload', firstChar?: string, hasChildren?: boolean, id?: string, locationType?: SchemaTypes.LocationType, name?: string }, contactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> }>, customerAccountList?: Array<{ __typename?: 'PitayaCustomerAccountPayload', accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, customerId?: number, id?: number, updateBy?: number, updateTime?: number, accountName?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerContactList?: Array<{ __typename?: 'PitayaCustomerContact', alias?: string, contactUserId?: number, customerDetailId?: number, id?: number, idNumber?: string, mail?: string, name?: string, otherInfoOfIdCard?: string, phone?: string, remark?: string, userId?: number, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }>, customerCooperation?: { __typename?: 'CustomerCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, customerDetailId?: number, cycleCheck?: string, cycleCredit?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, quota?: number, updateBy?: number, updateTime?: number }, customerQualification?: { __typename?: 'PitayaCustomerQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, businessDuration?: SchemaTypes.PitayaCustomerBusinessDurationEnum, businessScale?: SchemaTypes.PitayaCustomerBusinessScale, businessTypesList?: Array<SchemaTypes.PitayaCustomerBusinessTypeEnum>, createBy?: number, createTime?: number, customerId?: number, description?: string, historyAchievement?: string, id?: number, salesChannels?: string, updateBy?: number, updateTime?: number, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, saleTypesList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }> }, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> } };

export type UpdatePitayaCustomerMutationVariables = SchemaTypes.Exact<{
  customerInput?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCustomerInput>;
}>;


export type UpdatePitayaCustomerMutation = { updatePitayaCustomer?: boolean };

export type CreatePitayaAddressMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreateOrUpdatePitayaAddressInput>;
}>;


export type CreatePitayaAddressMutation = { createPitayaAddress?: number };

export type UpdatePitayaAddressMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreateOrUpdatePitayaAddressInput>;
}>;


export type UpdatePitayaAddressMutation = { updatePitayaAddress?: number };

export type CreatePitayaCustomerContactMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCustomerContactInput>;
}>;


export type CreatePitayaCustomerContactMutation = { createPitayaCustomerContact?: boolean };

export type UpdatePitayaCustomerContactMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PitayaCustomerContactInput>;
}>;


export type UpdatePitayaCustomerContactMutation = { updatePitayaCustomerContact?: boolean };

export type GetPitayaCustomerQualificationQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.GetPitayaCustomerQualificationInput;
}>;


export type GetPitayaCustomerQualificationQuery = { getPitayaCustomerQualification?: { __typename?: 'PitayaCustomerQualificationPayload', assetOther?: string, assetProperty?: string, assetVehicle?: string, businessDuration?: SchemaTypes.PitayaCustomerBusinessDurationEnum, businessScale?: SchemaTypes.PitayaCustomerBusinessScale, businessTypesList?: Array<SchemaTypes.PitayaCustomerBusinessTypeEnum>, createBy?: number, createTime?: number, customerId?: number, description?: string, historyAchievement?: string, id?: number, salesChannels?: string, updateBy?: number, updateTime?: number, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }>, saleTypesList?: Array<{ __typename?: 'CommodityCategoryPayload', categoryId?: number, categoryName?: string }> } };

export type CreatePitayaCustomerQualificationMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreateOrUpdatePitayaQualificationInput>;
}>;


export type CreatePitayaCustomerQualificationMutation = { createPitayaCustomerQualification?: number };

export type UpdatePitayaCustomerQualificationMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreateOrUpdatePitayaQualificationInput>;
}>;


export type UpdatePitayaCustomerQualificationMutation = { updatePitayaCustomerQualification?: boolean };

export type GetCustomerCooperationQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.GetPitayaCustomerCooperationInput;
}>;


export type GetCustomerCooperationQuery = { getCustomerCooperation?: { __typename?: 'PitayaCustomerCooperationPayload', balanceMode?: SchemaTypes.PitayaSettlementMethodType, customerDetailId?: number, cycleCheck?: string, cycleCredit?: string, cycleInvoicing?: string, cyclePay?: string, id?: number, quota?: number, updateBy?: number, updateTime?: number } };

export type UpdatePitayaCustomerCooperationMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.UpdatePitayaCustomerCooperationInput>;
}>;


export type UpdatePitayaCustomerCooperationMutation = { updatePitayaCustomerCooperation?: boolean };

export type ListPitayaCustomerAccountQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListPitayaCustomerAccountInput;
}>;


export type ListPitayaCustomerAccountQuery = { listPitayaCustomerAccount?: Array<{ __typename?: 'PitayaCustomerAccountPayload', accountType?: SchemaTypes.BankAccountType, bankCardNo?: string, bankCityName?: string, bankName?: string, bankProvinceName?: string, customerId?: number, id?: number, updateBy?: number, updateTime?: number, accountName?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> };

export type CreatePitayaCustomerAccountMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreatePitayaCustomerAccountInput>;
}>;


export type CreatePitayaCustomerAccountMutation = { createPitayaCustomerAccount?: boolean };

export type UpdatePitayaCustomerAccountMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.UpdatePitayaCustomerAccountInput>;
}>;


export type UpdatePitayaCustomerAccountMutation = { updatePitayaCustomerAccount?: boolean };

export type DeletePitayaCustomerAccountMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.DeletePitayaCustomerAccountInput>;
}>;


export type DeletePitayaCustomerAccountMutation = { deletePitayaCustomerAccount?: boolean };

export type UpdatePitayaCustomerDetailMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.UpdatePitayaCustomerDetailInput>;
}>;


export type UpdatePitayaCustomerDetailMutation = { updatePitayaCustomerDetail?: boolean };

export type GetCustomerBaseQueryVariables = SchemaTypes.Exact<{
  getCustomerBaseInput?: SchemaTypes.InputMaybe<SchemaTypes.GetCustomerBaseInput>;
}>;


export type GetCustomerBaseQuery = { getCustomerBase?: { __typename?: 'CustomerBasePayload', attribute?: SchemaTypes.CustomerAttribute, controlUser?: string, corporation?: string, customerUserId?: number, establishTime?: number, id?: number, idNumber?: string, infoAuth?: number, mail?: string, name?: string, ncCode?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, registerAddress?: string, registerCapital?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, tfn?: string, type?: SchemaTypes.PitayaCustomerType, wechat?: string, phone?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileDirection?: SchemaTypes.PitayaFileDirection, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> } };

export type ListPitayaCustomerContractRelQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListPitayaCustomerContractRelInput;
}>;


export type ListPitayaCustomerContractRelQuery = { listPitayaCustomerContractRel?: Array<{ __typename?: 'PitayaCustomerContractRelPayload', customerDetailId?: number, customerId?: number, id?: number, name?: string, type?: SchemaTypes.PitayaCustomerType }> };

export type CreatePitayaCustomerContractRelReqMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CreatePitayaCustomerContractRelInput>;
}>;


export type CreatePitayaCustomerContractRelReqMutation = { createPitayaCustomerContractRelReq?: boolean };

export type DeletePitayaCustomerContractRelReqMutationVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.DeletePitayaCustomerContractRelInput>;
}>;


export type DeletePitayaCustomerContractRelReqMutation = { deletePitayaCustomerContractRelReq?: boolean };

export type ListPitayaCustomerBaseInfoQueryVariables = SchemaTypes.Exact<{
  input: SchemaTypes.ListPitayaCustomerBaseInfoInput;
}>;


export type ListPitayaCustomerBaseInfoQuery = { listPitayaCustomerBaseInfo?: Array<{ __typename?: 'CustomerBasePayload', attribute?: SchemaTypes.CustomerAttribute, controlUser?: string, corporation?: string, customerUserId?: number, establishTime?: number, id?: number, idNumber?: string, infoAuth?: number, mail?: string, name?: string, ncCode?: string, operateAddress?: string, payTaxesType?: SchemaTypes.TaxpayerClassEnum, phone?: string, registerAddress?: string, registerCapital?: string, registerStatus?: SchemaTypes.CorpRegisterStatus, tfn?: string, type?: SchemaTypes.PitayaCustomerType, wechat?: string, fileRecordList?: Array<{ __typename?: 'PitayaFileRecordPayload', beginTime?: number, endTime?: number, fileType?: SchemaTypes.PitayaFileTypeEnum, fileList?: Array<{ __typename?: 'PitayaFilePayload', fileDirection?: SchemaTypes.PitayaFileDirection, fileId?: string, fileName?: string, fileUploadTime?: number, fileUrl?: string, fileInfo?: { __typename?: 'FileInfoPayLoad', accessType?: SchemaTypes.AccessType, contentType?: string, createTime?: number, fileUrl?: string, id?: string, name?: string, size?: number, tags?: Array<string>, updateTime?: number } }> }> }> };


export const PitayaCustomersDocument = gql`
    query pitayaCustomers($customersInput: CustomersInput, $page: Page) {
  pitayaCustomers(customersInput: $customersInput, page: $page) {
    pageCurrent
    pageSize
    records {
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
    totalRecords
  }
}
    `;

/**
 * __usePitayaCustomersQuery__
 *
 * To run a query within a React component, call `usePitayaCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaCustomersQuery({
 *   variables: {
 *      customersInput: // value for 'customersInput'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePitayaCustomersQuery(baseOptions?: Apollo.QueryHookOptions<PitayaCustomersQuery, PitayaCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaCustomersQuery, PitayaCustomersQueryVariables>(PitayaCustomersDocument, options);
      }
export function usePitayaCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaCustomersQuery, PitayaCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaCustomersQuery, PitayaCustomersQueryVariables>(PitayaCustomersDocument, options);
        }
export type PitayaCustomersQueryHookResult = ReturnType<typeof usePitayaCustomersQuery>;
export type PitayaCustomersLazyQueryHookResult = ReturnType<typeof usePitayaCustomersLazyQuery>;
export type PitayaCustomersQueryResult = Apollo.QueryResult<PitayaCustomersQuery, PitayaCustomersQueryVariables>;
export const ListCustomerDocument = gql`
    query listCustomer($customerListInput: CustomerListInput) {
  listCustomer(customerListInput: $customerListInput) {
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
 * __useListCustomerQuery__
 *
 * To run a query within a React component, call `useListCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCustomerQuery({
 *   variables: {
 *      customerListInput: // value for 'customerListInput'
 *   },
 * });
 */
export function useListCustomerQuery(baseOptions?: Apollo.QueryHookOptions<ListCustomerQuery, ListCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCustomerQuery, ListCustomerQueryVariables>(ListCustomerDocument, options);
      }
export function useListCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCustomerQuery, ListCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCustomerQuery, ListCustomerQueryVariables>(ListCustomerDocument, options);
        }
export type ListCustomerQueryHookResult = ReturnType<typeof useListCustomerQuery>;
export type ListCustomerLazyQueryHookResult = ReturnType<typeof useListCustomerLazyQuery>;
export type ListCustomerQueryResult = Apollo.QueryResult<ListCustomerQuery, ListCustomerQueryVariables>;
export const PitayaCustomerGroupsDocument = gql`
    query pitayaCustomerGroups {
  pitayaCustomerGroups {
    customerGroupId
    customerGroupName
    customerPayloadList {
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
}
    `;

/**
 * __usePitayaCustomerGroupsQuery__
 *
 * To run a query within a React component, call `usePitayaCustomerGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaCustomerGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaCustomerGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePitayaCustomerGroupsQuery(baseOptions?: Apollo.QueryHookOptions<PitayaCustomerGroupsQuery, PitayaCustomerGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaCustomerGroupsQuery, PitayaCustomerGroupsQueryVariables>(PitayaCustomerGroupsDocument, options);
      }
export function usePitayaCustomerGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaCustomerGroupsQuery, PitayaCustomerGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaCustomerGroupsQuery, PitayaCustomerGroupsQueryVariables>(PitayaCustomerGroupsDocument, options);
        }
export type PitayaCustomerGroupsQueryHookResult = ReturnType<typeof usePitayaCustomerGroupsQuery>;
export type PitayaCustomerGroupsLazyQueryHookResult = ReturnType<typeof usePitayaCustomerGroupsLazyQuery>;
export type PitayaCustomerGroupsQueryResult = Apollo.QueryResult<PitayaCustomerGroupsQuery, PitayaCustomerGroupsQueryVariables>;
export const AllListCustomerDocument = gql`
    query allListCustomer($customerAllListInput: CustomerAllListInput) {
  allListCustomer(customerAllListInput: $customerAllListInput) {
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
  orgCustomer {
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
      accountName
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
 * __useAllListCustomerQuery__
 *
 * To run a query within a React component, call `useAllListCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllListCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllListCustomerQuery({
 *   variables: {
 *      customerAllListInput: // value for 'customerAllListInput'
 *   },
 * });
 */
export function useAllListCustomerQuery(baseOptions?: Apollo.QueryHookOptions<AllListCustomerQuery, AllListCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllListCustomerQuery, AllListCustomerQueryVariables>(AllListCustomerDocument, options);
      }
export function useAllListCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllListCustomerQuery, AllListCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllListCustomerQuery, AllListCustomerQueryVariables>(AllListCustomerDocument, options);
        }
export type AllListCustomerQueryHookResult = ReturnType<typeof useAllListCustomerQuery>;
export type AllListCustomerLazyQueryHookResult = ReturnType<typeof useAllListCustomerLazyQuery>;
export type AllListCustomerQueryResult = Apollo.QueryResult<AllListCustomerQuery, AllListCustomerQueryVariables>;
export const CreatePitayaCustomerDocument = gql`
    mutation createPitayaCustomer($customerInput: PitayaCustomerInput) {
  createPitayaCustomer(customerInput: $customerInput)
}
    `;
export type CreatePitayaCustomerMutationFn = Apollo.MutationFunction<CreatePitayaCustomerMutation, CreatePitayaCustomerMutationVariables>;

/**
 * __useCreatePitayaCustomerMutation__
 *
 * To run a mutation, you first call `useCreatePitayaCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaCustomerMutation, { data, loading, error }] = useCreatePitayaCustomerMutation({
 *   variables: {
 *      customerInput: // value for 'customerInput'
 *   },
 * });
 */
export function useCreatePitayaCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaCustomerMutation, CreatePitayaCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaCustomerMutation, CreatePitayaCustomerMutationVariables>(CreatePitayaCustomerDocument, options);
      }
export type CreatePitayaCustomerMutationHookResult = ReturnType<typeof useCreatePitayaCustomerMutation>;
export type CreatePitayaCustomerMutationResult = Apollo.MutationResult<CreatePitayaCustomerMutation>;
export type CreatePitayaCustomerMutationOptions = Apollo.BaseMutationOptions<CreatePitayaCustomerMutation, CreatePitayaCustomerMutationVariables>;
export const PitayaCustomerDocument = gql`
    query pitayaCustomer($customerId: Int) {
  pitayaCustomer(customerId: $customerId) {
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
 * __usePitayaCustomerQuery__
 *
 * To run a query within a React component, call `usePitayaCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitayaCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitayaCustomerQuery({
 *   variables: {
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function usePitayaCustomerQuery(baseOptions?: Apollo.QueryHookOptions<PitayaCustomerQuery, PitayaCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PitayaCustomerQuery, PitayaCustomerQueryVariables>(PitayaCustomerDocument, options);
      }
export function usePitayaCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PitayaCustomerQuery, PitayaCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PitayaCustomerQuery, PitayaCustomerQueryVariables>(PitayaCustomerDocument, options);
        }
export type PitayaCustomerQueryHookResult = ReturnType<typeof usePitayaCustomerQuery>;
export type PitayaCustomerLazyQueryHookResult = ReturnType<typeof usePitayaCustomerLazyQuery>;
export type PitayaCustomerQueryResult = Apollo.QueryResult<PitayaCustomerQuery, PitayaCustomerQueryVariables>;
export const UpdatePitayaCustomerDocument = gql`
    mutation updatePitayaCustomer($customerInput: PitayaCustomerInput) {
  updatePitayaCustomer(customerInput: $customerInput)
}
    `;
export type UpdatePitayaCustomerMutationFn = Apollo.MutationFunction<UpdatePitayaCustomerMutation, UpdatePitayaCustomerMutationVariables>;

/**
 * __useUpdatePitayaCustomerMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaCustomerMutation, { data, loading, error }] = useUpdatePitayaCustomerMutation({
 *   variables: {
 *      customerInput: // value for 'customerInput'
 *   },
 * });
 */
export function useUpdatePitayaCustomerMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaCustomerMutation, UpdatePitayaCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaCustomerMutation, UpdatePitayaCustomerMutationVariables>(UpdatePitayaCustomerDocument, options);
      }
export type UpdatePitayaCustomerMutationHookResult = ReturnType<typeof useUpdatePitayaCustomerMutation>;
export type UpdatePitayaCustomerMutationResult = Apollo.MutationResult<UpdatePitayaCustomerMutation>;
export type UpdatePitayaCustomerMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaCustomerMutation, UpdatePitayaCustomerMutationVariables>;
export const CreatePitayaAddressDocument = gql`
    mutation createPitayaAddress($input: CreateOrUpdatePitayaAddressInput) {
  createPitayaAddress(input: $input)
}
    `;
export type CreatePitayaAddressMutationFn = Apollo.MutationFunction<CreatePitayaAddressMutation, CreatePitayaAddressMutationVariables>;

/**
 * __useCreatePitayaAddressMutation__
 *
 * To run a mutation, you first call `useCreatePitayaAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaAddressMutation, { data, loading, error }] = useCreatePitayaAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePitayaAddressMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaAddressMutation, CreatePitayaAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaAddressMutation, CreatePitayaAddressMutationVariables>(CreatePitayaAddressDocument, options);
      }
export type CreatePitayaAddressMutationHookResult = ReturnType<typeof useCreatePitayaAddressMutation>;
export type CreatePitayaAddressMutationResult = Apollo.MutationResult<CreatePitayaAddressMutation>;
export type CreatePitayaAddressMutationOptions = Apollo.BaseMutationOptions<CreatePitayaAddressMutation, CreatePitayaAddressMutationVariables>;
export const UpdatePitayaAddressDocument = gql`
    mutation updatePitayaAddress($input: CreateOrUpdatePitayaAddressInput) {
  updatePitayaAddress(input: $input)
}
    `;
export type UpdatePitayaAddressMutationFn = Apollo.MutationFunction<UpdatePitayaAddressMutation, UpdatePitayaAddressMutationVariables>;

/**
 * __useUpdatePitayaAddressMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaAddressMutation, { data, loading, error }] = useUpdatePitayaAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaAddressMutation, UpdatePitayaAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaAddressMutation, UpdatePitayaAddressMutationVariables>(UpdatePitayaAddressDocument, options);
      }
export type UpdatePitayaAddressMutationHookResult = ReturnType<typeof useUpdatePitayaAddressMutation>;
export type UpdatePitayaAddressMutationResult = Apollo.MutationResult<UpdatePitayaAddressMutation>;
export type UpdatePitayaAddressMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaAddressMutation, UpdatePitayaAddressMutationVariables>;
export const CreatePitayaCustomerContactDocument = gql`
    mutation createPitayaCustomerContact($input: PitayaCustomerContactInput) {
  createPitayaCustomerContact(input: $input)
}
    `;
export type CreatePitayaCustomerContactMutationFn = Apollo.MutationFunction<CreatePitayaCustomerContactMutation, CreatePitayaCustomerContactMutationVariables>;

/**
 * __useCreatePitayaCustomerContactMutation__
 *
 * To run a mutation, you first call `useCreatePitayaCustomerContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaCustomerContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaCustomerContactMutation, { data, loading, error }] = useCreatePitayaCustomerContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePitayaCustomerContactMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaCustomerContactMutation, CreatePitayaCustomerContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaCustomerContactMutation, CreatePitayaCustomerContactMutationVariables>(CreatePitayaCustomerContactDocument, options);
      }
export type CreatePitayaCustomerContactMutationHookResult = ReturnType<typeof useCreatePitayaCustomerContactMutation>;
export type CreatePitayaCustomerContactMutationResult = Apollo.MutationResult<CreatePitayaCustomerContactMutation>;
export type CreatePitayaCustomerContactMutationOptions = Apollo.BaseMutationOptions<CreatePitayaCustomerContactMutation, CreatePitayaCustomerContactMutationVariables>;
export const UpdatePitayaCustomerContactDocument = gql`
    mutation updatePitayaCustomerContact($input: PitayaCustomerContactInput) {
  updatePitayaCustomerContact(input: $input)
}
    `;
export type UpdatePitayaCustomerContactMutationFn = Apollo.MutationFunction<UpdatePitayaCustomerContactMutation, UpdatePitayaCustomerContactMutationVariables>;

/**
 * __useUpdatePitayaCustomerContactMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaCustomerContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaCustomerContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaCustomerContactMutation, { data, loading, error }] = useUpdatePitayaCustomerContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaCustomerContactMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaCustomerContactMutation, UpdatePitayaCustomerContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaCustomerContactMutation, UpdatePitayaCustomerContactMutationVariables>(UpdatePitayaCustomerContactDocument, options);
      }
export type UpdatePitayaCustomerContactMutationHookResult = ReturnType<typeof useUpdatePitayaCustomerContactMutation>;
export type UpdatePitayaCustomerContactMutationResult = Apollo.MutationResult<UpdatePitayaCustomerContactMutation>;
export type UpdatePitayaCustomerContactMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaCustomerContactMutation, UpdatePitayaCustomerContactMutationVariables>;
export const GetPitayaCustomerQualificationDocument = gql`
    query getPitayaCustomerQualification($input: GetPitayaCustomerQualificationInput!) {
  getPitayaCustomerQualification(input: $input) {
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
}
    `;

/**
 * __useGetPitayaCustomerQualificationQuery__
 *
 * To run a query within a React component, call `useGetPitayaCustomerQualificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPitayaCustomerQualificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPitayaCustomerQualificationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPitayaCustomerQualificationQuery(baseOptions: Apollo.QueryHookOptions<GetPitayaCustomerQualificationQuery, GetPitayaCustomerQualificationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPitayaCustomerQualificationQuery, GetPitayaCustomerQualificationQueryVariables>(GetPitayaCustomerQualificationDocument, options);
      }
export function useGetPitayaCustomerQualificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPitayaCustomerQualificationQuery, GetPitayaCustomerQualificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPitayaCustomerQualificationQuery, GetPitayaCustomerQualificationQueryVariables>(GetPitayaCustomerQualificationDocument, options);
        }
export type GetPitayaCustomerQualificationQueryHookResult = ReturnType<typeof useGetPitayaCustomerQualificationQuery>;
export type GetPitayaCustomerQualificationLazyQueryHookResult = ReturnType<typeof useGetPitayaCustomerQualificationLazyQuery>;
export type GetPitayaCustomerQualificationQueryResult = Apollo.QueryResult<GetPitayaCustomerQualificationQuery, GetPitayaCustomerQualificationQueryVariables>;
export const CreatePitayaCustomerQualificationDocument = gql`
    mutation createPitayaCustomerQualification($input: CreateOrUpdatePitayaQualificationInput) {
  createPitayaCustomerQualification(input: $input)
}
    `;
export type CreatePitayaCustomerQualificationMutationFn = Apollo.MutationFunction<CreatePitayaCustomerQualificationMutation, CreatePitayaCustomerQualificationMutationVariables>;

/**
 * __useCreatePitayaCustomerQualificationMutation__
 *
 * To run a mutation, you first call `useCreatePitayaCustomerQualificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaCustomerQualificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaCustomerQualificationMutation, { data, loading, error }] = useCreatePitayaCustomerQualificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePitayaCustomerQualificationMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaCustomerQualificationMutation, CreatePitayaCustomerQualificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaCustomerQualificationMutation, CreatePitayaCustomerQualificationMutationVariables>(CreatePitayaCustomerQualificationDocument, options);
      }
export type CreatePitayaCustomerQualificationMutationHookResult = ReturnType<typeof useCreatePitayaCustomerQualificationMutation>;
export type CreatePitayaCustomerQualificationMutationResult = Apollo.MutationResult<CreatePitayaCustomerQualificationMutation>;
export type CreatePitayaCustomerQualificationMutationOptions = Apollo.BaseMutationOptions<CreatePitayaCustomerQualificationMutation, CreatePitayaCustomerQualificationMutationVariables>;
export const UpdatePitayaCustomerQualificationDocument = gql`
    mutation updatePitayaCustomerQualification($input: CreateOrUpdatePitayaQualificationInput) {
  updatePitayaCustomerQualification(input: $input)
}
    `;
export type UpdatePitayaCustomerQualificationMutationFn = Apollo.MutationFunction<UpdatePitayaCustomerQualificationMutation, UpdatePitayaCustomerQualificationMutationVariables>;

/**
 * __useUpdatePitayaCustomerQualificationMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaCustomerQualificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaCustomerQualificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaCustomerQualificationMutation, { data, loading, error }] = useUpdatePitayaCustomerQualificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaCustomerQualificationMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaCustomerQualificationMutation, UpdatePitayaCustomerQualificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaCustomerQualificationMutation, UpdatePitayaCustomerQualificationMutationVariables>(UpdatePitayaCustomerQualificationDocument, options);
      }
export type UpdatePitayaCustomerQualificationMutationHookResult = ReturnType<typeof useUpdatePitayaCustomerQualificationMutation>;
export type UpdatePitayaCustomerQualificationMutationResult = Apollo.MutationResult<UpdatePitayaCustomerQualificationMutation>;
export type UpdatePitayaCustomerQualificationMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaCustomerQualificationMutation, UpdatePitayaCustomerQualificationMutationVariables>;
export const GetCustomerCooperationDocument = gql`
    query getCustomerCooperation($input: GetPitayaCustomerCooperationInput!) {
  getCustomerCooperation(input: $input) {
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
}
    `;

/**
 * __useGetCustomerCooperationQuery__
 *
 * To run a query within a React component, call `useGetCustomerCooperationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerCooperationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerCooperationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCustomerCooperationQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerCooperationQuery, GetCustomerCooperationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerCooperationQuery, GetCustomerCooperationQueryVariables>(GetCustomerCooperationDocument, options);
      }
export function useGetCustomerCooperationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerCooperationQuery, GetCustomerCooperationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerCooperationQuery, GetCustomerCooperationQueryVariables>(GetCustomerCooperationDocument, options);
        }
export type GetCustomerCooperationQueryHookResult = ReturnType<typeof useGetCustomerCooperationQuery>;
export type GetCustomerCooperationLazyQueryHookResult = ReturnType<typeof useGetCustomerCooperationLazyQuery>;
export type GetCustomerCooperationQueryResult = Apollo.QueryResult<GetCustomerCooperationQuery, GetCustomerCooperationQueryVariables>;
export const UpdatePitayaCustomerCooperationDocument = gql`
    mutation updatePitayaCustomerCooperation($input: UpdatePitayaCustomerCooperationInput) {
  updatePitayaCustomerCooperation(input: $input)
}
    `;
export type UpdatePitayaCustomerCooperationMutationFn = Apollo.MutationFunction<UpdatePitayaCustomerCooperationMutation, UpdatePitayaCustomerCooperationMutationVariables>;

/**
 * __useUpdatePitayaCustomerCooperationMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaCustomerCooperationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaCustomerCooperationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaCustomerCooperationMutation, { data, loading, error }] = useUpdatePitayaCustomerCooperationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaCustomerCooperationMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaCustomerCooperationMutation, UpdatePitayaCustomerCooperationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaCustomerCooperationMutation, UpdatePitayaCustomerCooperationMutationVariables>(UpdatePitayaCustomerCooperationDocument, options);
      }
export type UpdatePitayaCustomerCooperationMutationHookResult = ReturnType<typeof useUpdatePitayaCustomerCooperationMutation>;
export type UpdatePitayaCustomerCooperationMutationResult = Apollo.MutationResult<UpdatePitayaCustomerCooperationMutation>;
export type UpdatePitayaCustomerCooperationMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaCustomerCooperationMutation, UpdatePitayaCustomerCooperationMutationVariables>;
export const ListPitayaCustomerAccountDocument = gql`
    query listPitayaCustomerAccount($input: ListPitayaCustomerAccountInput!) {
  listPitayaCustomerAccount(input: $input) {
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
    updateBy
    updateTime
    accountName
  }
}
    `;

/**
 * __useListPitayaCustomerAccountQuery__
 *
 * To run a query within a React component, call `useListPitayaCustomerAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPitayaCustomerAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPitayaCustomerAccountQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListPitayaCustomerAccountQuery(baseOptions: Apollo.QueryHookOptions<ListPitayaCustomerAccountQuery, ListPitayaCustomerAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPitayaCustomerAccountQuery, ListPitayaCustomerAccountQueryVariables>(ListPitayaCustomerAccountDocument, options);
      }
export function useListPitayaCustomerAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPitayaCustomerAccountQuery, ListPitayaCustomerAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPitayaCustomerAccountQuery, ListPitayaCustomerAccountQueryVariables>(ListPitayaCustomerAccountDocument, options);
        }
export type ListPitayaCustomerAccountQueryHookResult = ReturnType<typeof useListPitayaCustomerAccountQuery>;
export type ListPitayaCustomerAccountLazyQueryHookResult = ReturnType<typeof useListPitayaCustomerAccountLazyQuery>;
export type ListPitayaCustomerAccountQueryResult = Apollo.QueryResult<ListPitayaCustomerAccountQuery, ListPitayaCustomerAccountQueryVariables>;
export const CreatePitayaCustomerAccountDocument = gql`
    mutation createPitayaCustomerAccount($input: CreatePitayaCustomerAccountInput) {
  createPitayaCustomerAccount(input: $input)
}
    `;
export type CreatePitayaCustomerAccountMutationFn = Apollo.MutationFunction<CreatePitayaCustomerAccountMutation, CreatePitayaCustomerAccountMutationVariables>;

/**
 * __useCreatePitayaCustomerAccountMutation__
 *
 * To run a mutation, you first call `useCreatePitayaCustomerAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaCustomerAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaCustomerAccountMutation, { data, loading, error }] = useCreatePitayaCustomerAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePitayaCustomerAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaCustomerAccountMutation, CreatePitayaCustomerAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaCustomerAccountMutation, CreatePitayaCustomerAccountMutationVariables>(CreatePitayaCustomerAccountDocument, options);
      }
export type CreatePitayaCustomerAccountMutationHookResult = ReturnType<typeof useCreatePitayaCustomerAccountMutation>;
export type CreatePitayaCustomerAccountMutationResult = Apollo.MutationResult<CreatePitayaCustomerAccountMutation>;
export type CreatePitayaCustomerAccountMutationOptions = Apollo.BaseMutationOptions<CreatePitayaCustomerAccountMutation, CreatePitayaCustomerAccountMutationVariables>;
export const UpdatePitayaCustomerAccountDocument = gql`
    mutation updatePitayaCustomerAccount($input: UpdatePitayaCustomerAccountInput) {
  updatePitayaCustomerAccount(input: $input)
}
    `;
export type UpdatePitayaCustomerAccountMutationFn = Apollo.MutationFunction<UpdatePitayaCustomerAccountMutation, UpdatePitayaCustomerAccountMutationVariables>;

/**
 * __useUpdatePitayaCustomerAccountMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaCustomerAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaCustomerAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaCustomerAccountMutation, { data, loading, error }] = useUpdatePitayaCustomerAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaCustomerAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaCustomerAccountMutation, UpdatePitayaCustomerAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaCustomerAccountMutation, UpdatePitayaCustomerAccountMutationVariables>(UpdatePitayaCustomerAccountDocument, options);
      }
export type UpdatePitayaCustomerAccountMutationHookResult = ReturnType<typeof useUpdatePitayaCustomerAccountMutation>;
export type UpdatePitayaCustomerAccountMutationResult = Apollo.MutationResult<UpdatePitayaCustomerAccountMutation>;
export type UpdatePitayaCustomerAccountMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaCustomerAccountMutation, UpdatePitayaCustomerAccountMutationVariables>;
export const DeletePitayaCustomerAccountDocument = gql`
    mutation deletePitayaCustomerAccount($input: DeletePitayaCustomerAccountInput) {
  deletePitayaCustomerAccount(input: $input)
}
    `;
export type DeletePitayaCustomerAccountMutationFn = Apollo.MutationFunction<DeletePitayaCustomerAccountMutation, DeletePitayaCustomerAccountMutationVariables>;

/**
 * __useDeletePitayaCustomerAccountMutation__
 *
 * To run a mutation, you first call `useDeletePitayaCustomerAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePitayaCustomerAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePitayaCustomerAccountMutation, { data, loading, error }] = useDeletePitayaCustomerAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePitayaCustomerAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeletePitayaCustomerAccountMutation, DeletePitayaCustomerAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePitayaCustomerAccountMutation, DeletePitayaCustomerAccountMutationVariables>(DeletePitayaCustomerAccountDocument, options);
      }
export type DeletePitayaCustomerAccountMutationHookResult = ReturnType<typeof useDeletePitayaCustomerAccountMutation>;
export type DeletePitayaCustomerAccountMutationResult = Apollo.MutationResult<DeletePitayaCustomerAccountMutation>;
export type DeletePitayaCustomerAccountMutationOptions = Apollo.BaseMutationOptions<DeletePitayaCustomerAccountMutation, DeletePitayaCustomerAccountMutationVariables>;
export const UpdatePitayaCustomerDetailDocument = gql`
    mutation updatePitayaCustomerDetail($input: UpdatePitayaCustomerDetailInput) {
  updatePitayaCustomerDetail(input: $input)
}
    `;
export type UpdatePitayaCustomerDetailMutationFn = Apollo.MutationFunction<UpdatePitayaCustomerDetailMutation, UpdatePitayaCustomerDetailMutationVariables>;

/**
 * __useUpdatePitayaCustomerDetailMutation__
 *
 * To run a mutation, you first call `useUpdatePitayaCustomerDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePitayaCustomerDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePitayaCustomerDetailMutation, { data, loading, error }] = useUpdatePitayaCustomerDetailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePitayaCustomerDetailMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePitayaCustomerDetailMutation, UpdatePitayaCustomerDetailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePitayaCustomerDetailMutation, UpdatePitayaCustomerDetailMutationVariables>(UpdatePitayaCustomerDetailDocument, options);
      }
export type UpdatePitayaCustomerDetailMutationHookResult = ReturnType<typeof useUpdatePitayaCustomerDetailMutation>;
export type UpdatePitayaCustomerDetailMutationResult = Apollo.MutationResult<UpdatePitayaCustomerDetailMutation>;
export type UpdatePitayaCustomerDetailMutationOptions = Apollo.BaseMutationOptions<UpdatePitayaCustomerDetailMutation, UpdatePitayaCustomerDetailMutationVariables>;
export const GetCustomerBaseDocument = gql`
    query getCustomerBase($getCustomerBaseInput: GetCustomerBaseInput) {
  getCustomerBase(getCustomerBaseInput: $getCustomerBaseInput) {
    attribute
    controlUser
    corporation
    customerUserId
    establishTime
    id
    idNumber
    infoAuth
    mail
    name
    ncCode
    operateAddress
    payTaxesType
    registerAddress
    registerCapital
    registerStatus
    tfn
    type
    wechat
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
        fileId
        fileName
        fileUploadTime
        fileUrl
        fileDirection
      }
      fileType
    }
    phone
  }
}
    `;

/**
 * __useGetCustomerBaseQuery__
 *
 * To run a query within a React component, call `useGetCustomerBaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerBaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerBaseQuery({
 *   variables: {
 *      getCustomerBaseInput: // value for 'getCustomerBaseInput'
 *   },
 * });
 */
export function useGetCustomerBaseQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomerBaseQuery, GetCustomerBaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerBaseQuery, GetCustomerBaseQueryVariables>(GetCustomerBaseDocument, options);
      }
export function useGetCustomerBaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerBaseQuery, GetCustomerBaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerBaseQuery, GetCustomerBaseQueryVariables>(GetCustomerBaseDocument, options);
        }
export type GetCustomerBaseQueryHookResult = ReturnType<typeof useGetCustomerBaseQuery>;
export type GetCustomerBaseLazyQueryHookResult = ReturnType<typeof useGetCustomerBaseLazyQuery>;
export type GetCustomerBaseQueryResult = Apollo.QueryResult<GetCustomerBaseQuery, GetCustomerBaseQueryVariables>;
export const ListPitayaCustomerContractRelDocument = gql`
    query listPitayaCustomerContractRel($input: ListPitayaCustomerContractRelInput!) {
  listPitayaCustomerContractRel(input: $input) {
    customerDetailId
    customerId
    id
    name
    type
  }
}
    `;

/**
 * __useListPitayaCustomerContractRelQuery__
 *
 * To run a query within a React component, call `useListPitayaCustomerContractRelQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPitayaCustomerContractRelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPitayaCustomerContractRelQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListPitayaCustomerContractRelQuery(baseOptions: Apollo.QueryHookOptions<ListPitayaCustomerContractRelQuery, ListPitayaCustomerContractRelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPitayaCustomerContractRelQuery, ListPitayaCustomerContractRelQueryVariables>(ListPitayaCustomerContractRelDocument, options);
      }
export function useListPitayaCustomerContractRelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPitayaCustomerContractRelQuery, ListPitayaCustomerContractRelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPitayaCustomerContractRelQuery, ListPitayaCustomerContractRelQueryVariables>(ListPitayaCustomerContractRelDocument, options);
        }
export type ListPitayaCustomerContractRelQueryHookResult = ReturnType<typeof useListPitayaCustomerContractRelQuery>;
export type ListPitayaCustomerContractRelLazyQueryHookResult = ReturnType<typeof useListPitayaCustomerContractRelLazyQuery>;
export type ListPitayaCustomerContractRelQueryResult = Apollo.QueryResult<ListPitayaCustomerContractRelQuery, ListPitayaCustomerContractRelQueryVariables>;
export const CreatePitayaCustomerContractRelReqDocument = gql`
    mutation createPitayaCustomerContractRelReq($input: CreatePitayaCustomerContractRelInput) {
  createPitayaCustomerContractRelReq(input: $input)
}
    `;
export type CreatePitayaCustomerContractRelReqMutationFn = Apollo.MutationFunction<CreatePitayaCustomerContractRelReqMutation, CreatePitayaCustomerContractRelReqMutationVariables>;

/**
 * __useCreatePitayaCustomerContractRelReqMutation__
 *
 * To run a mutation, you first call `useCreatePitayaCustomerContractRelReqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePitayaCustomerContractRelReqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPitayaCustomerContractRelReqMutation, { data, loading, error }] = useCreatePitayaCustomerContractRelReqMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePitayaCustomerContractRelReqMutation(baseOptions?: Apollo.MutationHookOptions<CreatePitayaCustomerContractRelReqMutation, CreatePitayaCustomerContractRelReqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePitayaCustomerContractRelReqMutation, CreatePitayaCustomerContractRelReqMutationVariables>(CreatePitayaCustomerContractRelReqDocument, options);
      }
export type CreatePitayaCustomerContractRelReqMutationHookResult = ReturnType<typeof useCreatePitayaCustomerContractRelReqMutation>;
export type CreatePitayaCustomerContractRelReqMutationResult = Apollo.MutationResult<CreatePitayaCustomerContractRelReqMutation>;
export type CreatePitayaCustomerContractRelReqMutationOptions = Apollo.BaseMutationOptions<CreatePitayaCustomerContractRelReqMutation, CreatePitayaCustomerContractRelReqMutationVariables>;
export const DeletePitayaCustomerContractRelReqDocument = gql`
    mutation deletePitayaCustomerContractRelReq($input: DeletePitayaCustomerContractRelInput) {
  deletePitayaCustomerContractRelReq(input: $input)
}
    `;
export type DeletePitayaCustomerContractRelReqMutationFn = Apollo.MutationFunction<DeletePitayaCustomerContractRelReqMutation, DeletePitayaCustomerContractRelReqMutationVariables>;

/**
 * __useDeletePitayaCustomerContractRelReqMutation__
 *
 * To run a mutation, you first call `useDeletePitayaCustomerContractRelReqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePitayaCustomerContractRelReqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePitayaCustomerContractRelReqMutation, { data, loading, error }] = useDeletePitayaCustomerContractRelReqMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePitayaCustomerContractRelReqMutation(baseOptions?: Apollo.MutationHookOptions<DeletePitayaCustomerContractRelReqMutation, DeletePitayaCustomerContractRelReqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePitayaCustomerContractRelReqMutation, DeletePitayaCustomerContractRelReqMutationVariables>(DeletePitayaCustomerContractRelReqDocument, options);
      }
export type DeletePitayaCustomerContractRelReqMutationHookResult = ReturnType<typeof useDeletePitayaCustomerContractRelReqMutation>;
export type DeletePitayaCustomerContractRelReqMutationResult = Apollo.MutationResult<DeletePitayaCustomerContractRelReqMutation>;
export type DeletePitayaCustomerContractRelReqMutationOptions = Apollo.BaseMutationOptions<DeletePitayaCustomerContractRelReqMutation, DeletePitayaCustomerContractRelReqMutationVariables>;
export const ListPitayaCustomerBaseInfoDocument = gql`
    query listPitayaCustomerBaseInfo($input: ListPitayaCustomerBaseInfoInput!) {
  listPitayaCustomerBaseInfo(input: $input) {
    attribute
    controlUser
    corporation
    customerUserId
    establishTime
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
    infoAuth
    mail
    name
    ncCode
    operateAddress
    payTaxesType
    phone
    registerAddress
    registerCapital
    registerStatus
    tfn
    type
    wechat
  }
}
    `;

/**
 * __useListPitayaCustomerBaseInfoQuery__
 *
 * To run a query within a React component, call `useListPitayaCustomerBaseInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPitayaCustomerBaseInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPitayaCustomerBaseInfoQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListPitayaCustomerBaseInfoQuery(baseOptions: Apollo.QueryHookOptions<ListPitayaCustomerBaseInfoQuery, ListPitayaCustomerBaseInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPitayaCustomerBaseInfoQuery, ListPitayaCustomerBaseInfoQueryVariables>(ListPitayaCustomerBaseInfoDocument, options);
      }
export function useListPitayaCustomerBaseInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPitayaCustomerBaseInfoQuery, ListPitayaCustomerBaseInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPitayaCustomerBaseInfoQuery, ListPitayaCustomerBaseInfoQueryVariables>(ListPitayaCustomerBaseInfoDocument, options);
        }
export type ListPitayaCustomerBaseInfoQueryHookResult = ReturnType<typeof useListPitayaCustomerBaseInfoQuery>;
export type ListPitayaCustomerBaseInfoLazyQueryHookResult = ReturnType<typeof useListPitayaCustomerBaseInfoLazyQuery>;
export type ListPitayaCustomerBaseInfoQueryResult = Apollo.QueryResult<ListPitayaCustomerBaseInfoQuery, ListPitayaCustomerBaseInfoQueryVariables>;