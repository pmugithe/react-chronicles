import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Wrapping the App component with StrictMode to highlight potential problems in an application.
  // It activates additional checks and warnings,usually during development and unused in production.
  <StrictMode>
    <App />
  </StrictMode>
)
