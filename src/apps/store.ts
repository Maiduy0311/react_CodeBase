import { configureStore } from '@reduxjs/toolkit'
import { postApi } from './services/postApi'
import authSliceReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
