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
      query: ({ brands, colors, minPrice, maxPrice, sort }) => {
        let filterParams = '';
        if (brands) {
          filterParams += `filter.query=variants.attributes.designer.key:${brands}&`;
        }
        if (colors) {
          filterParams += `filter.query=variants.attributes.color.key:${colors}&`;
        }
        if (minPrice || maxPrice) {
          const searchMinPrice = minPrice ? Number(minPrice) * 100 : '*';
          const searchMaxPrice = maxPrice ? Number(maxPrice) * 100 : '*';
          filterParams += `filter.query=variants.price.centAmount:range (${searchMinPrice} to ${searchMaxPrice})&`;
        }
        let sortParams = '';
        switch (sort) {
          case 'nameAsc':
            sortParams += 'sort=name.en asc&';
            break;
          case 'nameDesc':
            sortParams += 'sort=name.en desc&';
            break;
          case 'priceAsc':
            sortParams += 'sort=price asc&';
            break;
          case 'priceDesc':
            sortParams += 'sort=price desc&';
            break;
        }
        const facet =
          'facet=variants.attributes.designer.key&facet=variants.attributes.color.key&facet=variants.price.centAmount&';

        const searchParams = `${filterParams}${sortParams}${facet}`;
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
