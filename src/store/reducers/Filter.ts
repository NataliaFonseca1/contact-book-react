import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ListState = {
  term?: string
}
const initialState: ListState = {
  term: ''
}
export const FilterContactSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})
export const { searchTerm } = FilterContactSlice.actions
export default FilterContactSlice.reducer
