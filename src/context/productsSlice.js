import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  categories: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state,action) => {
      state.data = action.payload
    },
    fetchCategories: (state,action) => {
      state.categories = action.payload
    }
  }
})

export const {fetchProducts, fetchCategories} = productsSlice.actions
export default productsSlice.reducer

export const getProducts = async (dispatch,cat="") => {
  try {
    const products = await fetch(`https://fakestoreapi.com/products/${cat}`)
    const result_p = await products.json()

    dispatch(fetchProducts(result_p))
  } catch (error) {
    console.log("+++++++++++++++",error)
  }
}

export const getCategories = async (dispatch) => {
  try{
    const data = await  fetch('https://fakestoreapi.com/products/categories')
    const result = await data.json()

    dispatch(fetchCategories(result))
  } catch (error){
    console.log("+++++++++++++++",error)
  }
}