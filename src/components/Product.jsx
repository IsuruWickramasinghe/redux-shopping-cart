import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProducts } from '../context/productsSlice'
import {AiFillStar} from 'react-icons/ai'
import { add_cart } from '../context/cartSlice'

import '../styles/product.css'

export default function Product({}) {

  const dispatch = useDispatch()
  useEffect(()=>{
    getProducts(dispatch)
  },[])

  const addCart = (item) => {
    dispatch(add_cart(item))
  }

  const {itemId} = useParams()
  const item = useSelector(state => state.products.data.find(item => item.id == itemId))

  return (
    <div className='product-container'>
      <h1 className="header">Product</h1>
      <div className="sp-wrapper">
        <div className="sp-img">
          <img src={item?.image} alt="img"/>
        </div>
        <div className="sp-details">
          <p className="sp-title">{item?.title}</p>
          <p className="sp-desc">{item?.description}</p>
          <p className="sp-price">price: ${item?.price} / </p>
          <p className="sp-rate">{item?.rating.rate}<AiFillStar/></p>
          <div className="add-btn">
            <input type="button" value="Add to Cart" onClick={() => addCart(item)}/>
          </div>
        </div>
      </div>
    </div>
  )
}
