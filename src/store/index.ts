import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import menuReducer from './reducers/menu'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
