import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/styles.css'
import App from './App.jsx'
import Appp from './Appp.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <App /> */}
    <Appp/>
  </StrictMode>,
)
