import React from 'react'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from '../Home'
import Cart from '../Cart';
import Products from '../Products';



const Routerrename = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path='/cart' element={<Cart />}></Route>
    <Route path='/Products' element={<Products/ >}></Route>
   </Routes>
  )
}

export default Routerrename