import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- 1. L'import
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. On enveloppe l'application pour activer le Routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)