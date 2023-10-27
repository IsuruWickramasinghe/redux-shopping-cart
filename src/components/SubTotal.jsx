import React, {useEffect, useState} from 'react'
import '../styles/subtotal.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function SubTotal({cart_items}) {

  const [subTotalPrice, setSubTotalPrice] = useState(0)

  useEffect(()=>{
    let count = 0;
    cart_items.forEach(item => {
      count += item.price*item.qty
    })
    setSubTotalPrice(count)
  },[cart_items])

  if(cart_items.length === 0 ){
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
        <p className="price">${subTotalPrice.toFixed(2)}</p>
      </div>
      <div className="buy-btn">
        <input type="button" value="PAY NOW" />
      </div>
    </div>
  )
}
