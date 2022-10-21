import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { readAccessToken } from '../../utils/localStorage'
import { authType, userType } from '../../utils/types'

const authSliceReducer = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    access_token: readAccessToken() || null,
  } as authType,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { access_token, user },
      }: PayloadAction<{ access_token: string; user: userType }>,
    ) => {
      state.access_token = access_token
      state.user = user
    },
    logout: (state) => {
      state.user = null
      state.access_token = null
    },
  },
})
export const { setCredentials, logout } = authSliceReducer.actions
export default authSliceReducer.reducer
