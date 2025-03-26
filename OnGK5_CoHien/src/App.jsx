import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer';
import BookDetaill from './components/BookDetaill';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/book/:id" element={<BookDetaill />} />
          </Routes>
        <Footer/>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
