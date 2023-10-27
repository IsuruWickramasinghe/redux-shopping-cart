import React, { useEffect, useState } from 'react'
import '../styles/products.css'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getProducts } from '../context/productsSlice'

import { add_cart } from '../context/cartSlice'

import {AiFillStar} from 'react-icons/ai'
import {BiCartAdd} from 'react-icons/bi'

export default function Products() {

  const dispatch = useDispatch()
  const productsList = useSelector(state => state.products.data)
  const categoryList = useSelector(state => state.products.categories)
  const [cat,setCat] = useState("")
  const [range,setRange] = useState(1000)
  
  useEffect(()=>{
    getCategories(dispatch)
  },[])
  
  useEffect(()=>{
    getProducts(dispatch,cat)
  },[cat])

  const addCart = (item) => {
    dispatch(add_cart(item))
  }

  const filteredList = productsList.filter(item => item.price < range)

  return (
    <section className='products-container'>

      <div className="products-filters-wrapper">
        <div className="filter-by-category">
          <select onInput={e => setCat(e.target.value)}>
            <option value="">all</option>
            {categoryList && categoryList.map(category => (
              <option value={`category/${category}`} key={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="filter-by-price">
          <input type="text" placeholder={`$${range}`} onInput={e => setRange(e.target.value)}/>
          <input type="range" max={2000} value={range} onInput={e => setRange(e.target.value)}/>
        </div>
      </div>

      <div className="products-wrapper">
        {filteredList && filteredList.map((product) => (
          <div className="product" key={product.id}>
            <Link className="product-img" to={`item/${product.id}`}>
              <img src={product.image} alt={`item-${product.id}`} height={100} />
            </Link>
            <div className="product-desc">
              <h4 className="product-title">
                {product.title.length > 15 ? product.title.substring(0, 15) + '...' : product.title}
              </h4>
              <p className="product-price">${product.price}</p>
            </div>
            <div className="product-rating">
              <p className="product-count">{product.rating.count}</p>
              <p className="product-rate">
                {product.rating.rate} <AiFillStar />
              </p>
            </div>
            <BiCartAdd className="add-cart" onClick={() => { addCart(product) }} />
          </div>
        ))}
      </div>


    </section>
  )
}
