import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Layout({children}) {
  return (
    <>
      <nav className='nav-bar'><NavBar/></nav>
      <main className='main'>{children}</main>
      <footer className='footer'><Footer/></footer>
    </>
  )
}
