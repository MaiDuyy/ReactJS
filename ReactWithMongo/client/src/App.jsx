import { useState } from 'react'

import './App.css'
import GetProduct from './getProduct/GetProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './component/AddProduct'
import UpdateProduct from './component/UpdateProduct'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetProduct/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
