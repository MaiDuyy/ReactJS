import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import BookTable from './components/BookTable';
import { BookingProvider } from './contexts/BookingContext';

function App() {
  return (
    <BrowserRouter><BookingProvider>
    
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-table" element={<BookTable />} />
          </Routes>
        </main>
        <Footer />
      </div>

  </BookingProvider></BrowserRouter>
  );
}

export default App;
