import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './page/Cart'
import Home from './page/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Detail from './page/Detail'
function App() {


  return (
      <BrowserRouter>
      <Header/>
        <Routes>
       
          <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<Detail/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
