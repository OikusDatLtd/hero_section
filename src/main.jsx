import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NewApp from './newApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewApp />
  </StrictMode>,
)
