import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
   <>
    <Navigation/>
    <Outlet/>
    <Footer/>
   </>
  )
}
