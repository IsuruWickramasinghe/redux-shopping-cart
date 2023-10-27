import React from 'react'
import '../styles/cart.css'

import { useDispatch, useSelector } from 'react-redux'

import {IoMdRemoveCircleOutline} from 'react-icons/io'

import '../styles/cart.css'
import { add_qty, remove_cart, remove_qty } from '../context/cartSlice'
import SubTotal from './SubTotal'

export default function Cart() {

  const dispatch = useDispatch()

  const cart_items = useSelector(state => state.cart)

  const removeCart = (id) => {
    dispatch(remove_cart(id))
  }
  const removeQty = (id) => {
    dispatch(remove_qty(id))
  }
  const addQty = (id) => {
    dispatch(add_qty(id))
  }

  return (
    <section className='cart'>
      <div className="subtotal-wrapper"><SubTotal cart_items={cart_items}/></div>
      <div className="cart-items-wrapper">
        {cart_items && cart_items.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-img" >
              <img src={item.image} alt="img" height={100}/>
            </div>
            <div className="cart-item-desc">
              <p className="cart-item-header">{item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title}</p>
              <p className="cart-item-price">${item.price}</p>
              <div className="cart-item-count">
                <input type="button" value="-" disabled={(item.qty<2)} onClick={()=> removeQty(item.id)}/>
                <input type="text" value={item.qty} readOnly/>
                <input type="button" value="+" onClick={()=> addQty(item.id)}/>
              </div>
              <div className="cart-remove">
                <IoMdRemoveCircleOutline className='remove-btn' onClick={()=> removeCart(item.id)}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
