import React, {useEffect, useState} from 'react'
import '../styles/subtotal.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { add_subtotal } from '../context/cartSlice'

export default function SubTotal({cart_items}) {

  const dispatch = useDispatch()
  const total_price = useSelector(state => state.cart.price)

  const [subTotalPrice, setSubTotalPrice] = useState(0)

  useEffect(()=>{
    let count = 0;
    cart_items.forEach(item => {
      count += item.price*item.qty
    })
    dispatch(add_subtotal(count))
  },[cart_items])

  if(total_price === 0 ){
    return (
      <div className='subtotal'>
        <h1>Cart</h1>
        <h3>Empty Cart..<AiOutlineShoppingCart/></h3>
      </div>
    )
  }

  return (
    <div className='subtotal'>
      <h1>Cart</h1>
      <div className="invoice">
        <p className="total">total</p>
        <p className="price">${total_price.toFixed(2)}</p>
      </div>
      <div className="buy-btn">
        <input type="button" value="PAY NOW" />
      </div>
    </div>
  )
}
