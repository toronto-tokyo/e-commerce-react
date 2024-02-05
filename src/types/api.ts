export interface IAuthFlowData {
  access_token: string;
  expires_in: number;
  scope: string;
  refresh_token: string;
  token_type: string;
}

export interface ISuccessfulLoginData {
  customer: {
    addresses: [];
    email: string;
    firstName: string;
    id: string;
    isEmailVerified: false;
    lastName: string;
    password: string;
    version: number;
    createdAt: string;
    lastModifiedAt: string;
    authenticationMode: string;
  };
}

export interface IPagedQueryResult {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: IProduct[];
  facets: IFacetResult;
}

export interface IProduct {
  id: string;
  version: number;
  key: string;
  productType: IProductTypeReference;
  published: boolean;
  hasStagedChanges: boolean;
  name: ILocalizedString;
  categories: ICategory[];
  masterVariant: IProductVariant;
  slug: ILocalizedString;
  searchKeywords: ISearchKeywords;
  createdAt: string;
  lastModifiedAt: string;
}

interface IProductVariant {
  id: string;
  key?: string;
  sku?: string;
  prices?: IPrice[];
  attributes?: IAttribute;
  images: IImage[];
}

interface IAttribute {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

interface IImage {
  url: string;
  dimensions: IImageDimensions;
  label?: string;
}

interface IImageDimensions {
  w: number;
  h: number;
}

interface IPrice {
  id: string;
  value: ITypedMoney;
  discounted?: IDiscountedPrice;
}

interface IDiscountedPrice {
  value: ITypedMoney;
  discount: IProductDiscount;
}

interface ITypedMoney {
  centAmount: number;
  currencyCode: string;
  type: IMoneyType;
  fractionDigits: number;
}

type IMoneyType = 'centPrecision' | 'highPrecision';

interface IProductDiscount {
  id: string;
  typeId: string;
}

interface IProductTypeReference {
  id: string;
  typeId: string;
}

interface ILocalizedString {
  de: string;
  en: string;
}

interface ICategory {
  id: string;
  typeId: string;
}

interface ISearchKeywords {}

interface IFacetResult {}

export interface IProductTypePagedQueryResponse {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: IProductType[];
}

export interface IProductType {
  id: string;
  version: number;
  name: string;
  description: string;
  attributes: IAttributeDefinition[];
}

export interface IAttributeDefinition {
  type: IAttributeType;
  name: string;
  label: string;
  isRequired: boolean;
}

export type IAttributeType =
  | IAttributeBooleanType
  | IAttributeTextType
  | IAttributeLocalizableTextType
  | IAttributeEnumType;

interface IAttributeBooleanType {
  name: 'boolean';
}

interface IAttributeTextType {
  name: 'text';
}

interface IAttributeLocalizableTextType {
  name: 'ltext';
}

interface IAttributeEnumType {
  name: 'enum';
  values: IAttributePlainEnumValue[];
}

interface IAttributePlainEnumValue {
  key: string;
  label: string;
}

export interface IProductsRequestParams {
  brands: string | null;
}
