import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import BulkOrders from './pages/BulkOrders.jsx'
import SerumsBulk from './pages/SerumsBulk.jsx'
import CandlesBulk from './pages/CandlesBulk.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bulk-orders" element={<BulkOrders />} />
        <Route path="/bulk/serums" element={<SerumsBulk />} />
        <Route path="/bulk/candles" element={<CandlesBulk />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
