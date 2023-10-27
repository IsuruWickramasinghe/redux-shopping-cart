import React, {useEffect, useState} from 'react'
import '../styles/nav-bar.css'
import { Link } from 'react-router-dom'

import {BsCart2} from 'react-icons/bs'
import { useSelector } from 'react-redux'

export default function NavBar() {

  const [itemCount, setItemCount] = useState(0)

  const cart_items = useSelector(state => state.cart)

  useEffect(()=>{
    let count = 0
    cart_items.forEach(item => {
      count += item.qty
    })
    setItemCount(count)
  },[cart_items])

  return (
    <>
    <div className="logo-wrapper">
      <Link to={'/'} className='logo'>Redux Shop</Link>
    </div>
      <Link to={'/cart'} className='nav-cart-wrapper' >
      <p className="nav-cart-count">{itemCount}</p>
      <BsCart2 />
    </Link>
    </>
  )
}
