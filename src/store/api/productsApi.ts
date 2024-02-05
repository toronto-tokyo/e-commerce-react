import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IPagedQueryResult,
  IProductTypePagedQueryResponse,
  IProductsRequestParams,
} from 'types/api';
import getTokens from 'utils/authentication/getTokens';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_CTP_API_URL}/${process.env.REACT_APP_CTP_PROJECT_KEY}/`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IPagedQueryResult, IProductsRequestParams>({
      query: ({ brands, colors }) => {
        let filterParams = '';
        if (brands) {
          filterParams += `filter.query=variants.attributes.designer.key:${brands}&`;
        }
        if (colors) {
          filterParams += `filter.query=variants.attributes.color.key:${colors}&`;
        }
        const facet =
          'facet=variants.attributes.designer.key&facet=variants.attributes.color.key';

        const searchParams = `${filterParams}${facet}`;
        return {
          url: `product-projections/search?${searchParams}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getTokens().accessToken}`,
          },
        };
      },
    }),
    getProductTypes: builder.query<IProductTypePagedQueryResponse, ''>({
      query: () => ({
        url: '/product-types',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getTokens().accessToken}`,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductTypesQuery } = productsApi;
