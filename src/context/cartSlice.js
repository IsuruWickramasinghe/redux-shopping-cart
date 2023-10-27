import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  price: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_cart: (state,action) => {
      let item = state.data.find(item => item.id === action.payload.id)
      if(item){
        item.qty = item.qty + 1
        return
      }
      item = {...action.payload, qty: 1}
      state.data.push(item)
    },
    remove_cart: (state,action) => {
      state.data = state.data.filter(item => action.payload !== item.id)
    },
    add_qty: (state,action) => {
      const item = state.data.find(item => action.payload === item.id)
      if(item){
        item.qty ++
      }
    },
    remove_qty: (state,action) => {
      const item = state.data.find(item => action.payload === item.id)
      if(item && item.qty > 1){
        item.qty --
      }
    },
    add_subtotal: (state,action) => {
      state.price = action.payload
    }
  }
})

export const {add_cart, remove_cart, add_qty, remove_qty, add_subtotal} = cartSlice.actions
export default cartSlice.reducer