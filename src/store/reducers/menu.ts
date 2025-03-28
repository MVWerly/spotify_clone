import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MenusState = {
  menus: Record<string, boolean>
}

const initialState: MenusState = {
  menus: {
    menu1: false,
    menu2: false
  }
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        const menuId = action.payload
        state.menus[menuId] = !state.menus[menuId]
      }
    }
  }
})

export const { toggle } = menuSlice.actions

export default menuSlice.reducer
