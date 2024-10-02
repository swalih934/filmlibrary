import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import FilmStore from './Store/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={FilmStore}>
    <App />


    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
