import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import OilsBulk from './pages/OilsBulk.jsx'
import CandlesBulk from './pages/CandlesBulk.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import IngredientsDetail from './pages/IngredientsDetail.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Disclaimer from './pages/Disclaimer.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import NotFound from './pages/NotFound.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bulk/oils" element={<OilsBulk />} />
        <Route path="/bulk/serums" element={<Navigate to="/bulk/oils" replace />} />
        <Route path="/bulk/candles" element={<CandlesBulk />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/ingredients" element={<IngredientsDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
