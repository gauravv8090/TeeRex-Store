import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Product from '../Pages/Product'

export default function AllRoutes() {
  return <Routes>
    <Route path='/' element={<Product/>} ></Route>
    <Route path='/cart' element={<Cart/>} ></Route>
  </Routes>
}
