import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Product from './components/Product'

function App() {

  return (
    <>
      <div>
        
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/shop' element={<Shop></Shop>}> </Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/product/:productId' element={<Product></Product>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App


// npm i appwrite redux @reduxjs/toolkit gsap @gsap/react react-router-dom