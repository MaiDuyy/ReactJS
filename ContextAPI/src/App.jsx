import { useState } from 'react'

import './App.css'
import { CartProvider } from './contexts/CartContext'
import ProductList from './ProductList'
import Cart from './Cart'

function App() {
 

  return (
    <>
     <CartProvider> 
      <div style={{ padding: "20px" }}> 
        <h1> Shopping Cart</h1> 
        <ProductList /> 
        <Cart /> 
      </div> 
    </CartProvider>
    </>
  )
}

export default App
