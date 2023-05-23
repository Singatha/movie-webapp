import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import mediaReducer from './features/media/mediaSlice'
import { mediaApi } from './services/media'

export const store = configureStore({
  reducer: {
    media: mediaReducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mediaApi.middleware),
})

setupListeners(store.dispatch)
