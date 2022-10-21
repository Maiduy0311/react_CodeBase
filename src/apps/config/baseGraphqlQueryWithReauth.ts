/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { PATH_API } from '@utils/constants'
import { toast } from 'react-toastify'

const graphqlBaseQuery = graphqlRequestBaseQuery({
  url: PATH_API,
  prepareHeaders: async (headers: any) => {
    const access_token = null
    if (access_token) {
      headers.set('Authorization', `Bearer ${access_token}`)
    }

    return headers
  },
})

const baseGraphqlQueryWithReauth = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  const result: any = await graphqlBaseQuery(args, api, extraOptions)

  if (result.error && result.meta.response.status) {
    switch (result.meta.response.status) {
      case 200:
      case 400:
        const getDetailError = result.meta.response.errors[0].message
        const getListError =
          result.meta.response.errors[0].extensions.validation

        if (!getListError) {
          toast.error(getDetailError)
        } else {
          const getError: any = Object.values(getListError)[0]
          toast.error(getError.toString())
        }
        break
      case 401:
        console.log('400', result.error)
        break
      case 403:
        console.log('403', result.error.message)
        break
      case 404:
        console.log('404', result.error.message)
        break
    }
  }
  return result
}

export default baseGraphqlQueryWithReauth
