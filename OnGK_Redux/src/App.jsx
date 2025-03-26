import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './page/Cart'
import Card from './component/Card'
import Home from './page/Home'

function App() {


  return (
      <BrowserRouter>
        <Routes>
       
          <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>

        </Routes>
        
      </BrowserRouter>
  )
}

export default App
