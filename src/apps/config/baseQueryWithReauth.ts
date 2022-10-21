import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

import { PATH_API } from '@utils/constants'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
  baseUrl: PATH_API,

  prepareHeaders: (headers, { getState }) => {
    const access_token = (getState() as RootState).auth.access_token
    if (access_token) {
      headers.set('Authorization', `Bearer ${access_token}`)
    }
    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { auth }: any = api.getState()

  if (result.error && result.error.status) {
    switch (result.error.status) {
      case 401:
        // try to get a new token
        if (auth?.access_token) {
          const refreshResult = await baseQuery(
            {
              url: '/refresh',
              method: 'POST',
            },
            api,
            extraOptions,
          )
          if (refreshResult.data) {
            // dispatch set access_token and user to redux
            // set token and user to cookies or localStorage

            // retry the initial query
            result = await baseQuery(args, api, extraOptions)
          } else {
            // logout
            // remove token
            // redirect to login
          }
        } else {
          // logout
          // remove token
          // redirect to login
        }
        break
      case 500:
      case 501:
      case 502:
      case 503:
        console.log('Internal Server Error')
        break
      case 400:
        console.log('bad request')
        break
      case 403:
        console.log('Authorize')
        break
    }
  }
  return result
}
export default baseQueryWithReauth
