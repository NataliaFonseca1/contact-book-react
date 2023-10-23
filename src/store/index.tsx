import { configureStore } from '@reduxjs/toolkit'
import { ListContactSlice } from './reducers/ListContact'
import { FilterContactSlice } from './reducers/Filter'

export const store = configureStore({
  reducer: {
    dados: ListContactSlice.reducer,
    filter: FilterContactSlice.reducer
  }
})
export type RootReducer = ReturnType<typeof store.getState>
