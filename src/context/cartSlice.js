import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_cart: (state,action) => {
      let item = state.find(item => item.id === action.payload.id)
      if(item){
        item.qty = item.qty + 1
        return
      }
      item = {...action.payload, qty: 1}
      state.push(item)
    },
    remove_cart: (state,action) => {
      return state.filter(item => action.payload !== item.id)
    },
    add_qty: (state,action) => {
      const item = state.find(item => action.payload === item.id)
      if(item){
        item.qty ++
      }
    },
    remove_qty: (state,action) => {
      const item = state.find(item => action.payload === item.id)
      if(item && item.qty > 1){
        item.qty --
      }
    }
  }
})

export const {add_cart, remove_cart, add_qty, remove_qty} = cartSlice.actions
export default cartSlice.reducer