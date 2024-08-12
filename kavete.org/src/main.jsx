import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google"
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import JobContextProvider from './Context/JobContext.jsx'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='643795674692-nlan5drobvlkelkkolebeeviooj6ea7f.apps.googleusercontent.com'>
  <StrictMode>
    <BrowserRouter>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </BrowserRouter> 
  </StrictMode>,
  </GoogleOAuthProvider>
)
