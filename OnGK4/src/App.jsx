import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
