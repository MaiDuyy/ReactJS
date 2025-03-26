import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home'
import Cart from './page/Cart'
import Header from './component/Header'
import Footer from './component/Footer'
import Detail from './component/Detail'
import { CartProvider } from './context/CartContext';
import NotFound from './page/NotFound';
function App() {


  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='/product/:id' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  )
}

export default App
