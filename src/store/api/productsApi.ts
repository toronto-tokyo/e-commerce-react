import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPagedQueryResult } from 'types/api';
import getTokens from 'utils/authentication/getTokens';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_CTP_API_URL}/${process.env.REACT_APP_CTP_PROJECT_KEY}/`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IPagedQueryResult, ''>({
      query: () => ({
        url: 'product-projections/search',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getTokens().accessToken}`,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
