//mport ReactDOM from 'react-dom/client'
//import App from './App.tsx'
//import * as ReactDOM from 'react-dom'
//import * as React from 'react'
import './index.css'
import App from './App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)


// Fixing a bug, but left the original here:
/*
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/