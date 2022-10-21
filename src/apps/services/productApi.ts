import { createApi } from '@reduxjs/toolkit/query/react'
import baseGraphqlQueryWithReauth from '@apps/config/baseGraphqlQueryWithReauth'
import { getProductsDocument } from '@apps/documents/ProductDocument'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseGraphqlQueryWithReauth,
  tagTypes: ['productApi'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        document: getProductsDocument(),
      }),
      providesTags: ['productApi'],
    }),
  }),
})

export const { useGetProductsQuery } = productApi
