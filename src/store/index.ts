import { configureStore } from '@reduxjs/toolkit'

import menuReducer from './reducers/menu'

import spotifyApi from '../services/spotifyApi'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    [spotifyApi.reducerPath]: spotifyApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
