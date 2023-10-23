import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import ContactClass from '../../models'

type ListState = {
  items: ContactClass[]
}
const initialState: ListState = {
  items: []
}
export const ListContactSlice = createSlice({
  name: 'dados',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ContactClass>) => {
      const item = action.payload
      if (state.items.some((e) => e.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(item)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      const dado = action.payload
      state.items = state.items.filter((e) => e.id !== dado)
    },
    atualizar: (state, action: PayloadAction<ContactClass>) => {
      const itemUpdate = action.payload
      const index = state.items.findIndex((e) => e.id == itemUpdate.id)
      if (index !== -1) {
        state.items[index] = itemUpdate
      }
    }
  }
})
export const { adicionar, remover, atualizar } = ListContactSlice.actions
export default ListContactSlice.reducer
