import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'   // <-- IMPORT TAILWIND
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
  </StrictMode>,
)
 