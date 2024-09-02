import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
//import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as React from 'react'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>,
)
