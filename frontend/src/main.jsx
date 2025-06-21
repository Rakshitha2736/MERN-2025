import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './hooks/UserContext.jsx'
import { UserProvider1 } from './hooks/UserContext1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
 <UserProvider>
 <UserProvider1>
    <App />
    </UserProvider1>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
