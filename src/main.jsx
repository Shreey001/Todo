import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx' 
// import { Practices } from './practices' 
// import Profile from './components/profile'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
    {/* <Practices /> */}
{/* <Profile />  */}
  </StrictMode>,
)
