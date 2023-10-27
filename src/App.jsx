import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import Product from './components/Product'
import Cart from './components/Cart'

function App() {

  return (
    <Routes>
      <Route exact path={'/'} element={<Products/> } />
      <Route exact path={'/cart'} element={<Cart/>} />
      <Route exact path={'item/:itemId'} element={<Product/>} />
    </Routes>
  )
}

export default App