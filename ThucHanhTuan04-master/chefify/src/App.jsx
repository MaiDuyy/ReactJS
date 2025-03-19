import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { CartProvider } from './components/CartContext'
import Recipe from './pages/Recipe'
import SearchNoResult from './pages/SearchNoResult'
import SearchResult from './pages/SearchResult'

function App() {
  return (
    <div>
      <CartProvider>

      <Header />
      <Recipe />
      {/* <SearchResult/> */}
      {/* <SearchNoResult/> */}
      <Footer />
      </CartProvider>
     
    </div>
  )

}

export default App
