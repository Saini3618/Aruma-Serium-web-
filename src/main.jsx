import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import SerumsBulk from './pages/SerumsBulk.jsx'
import CandlesBulk from './pages/CandlesBulk.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import IngredientsDetail from './pages/IngredientsDetail.jsx'
import AboutUs from './pages/AboutUs.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bulk/serums" element={<SerumsBulk />} />
        <Route path="/bulk/candles" element={<CandlesBulk />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/ingredients" element={<IngredientsDetail />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
