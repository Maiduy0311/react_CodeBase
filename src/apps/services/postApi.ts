import { createApi } from '@reduxjs/toolkit/query/react'
import baseQueryWithReauth from '@apps/config/baseQueryWithReauth'
import { readAccessToken } from '@utils/localStorage'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['postApi'],
  endpoints: (build) => ({
    getPost: build.query({
      query: (page = 1) => ({
        url: `/post?page=${page}`,
        method: 'GET',
        access_token: readAccessToken(),
      }),
      providesTags: ['postApi'],
    }),
  }),
})

export const { useGetPostQuery } = postApi
