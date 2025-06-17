import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import View from './pages/View.jsx'
import { ProductProvider } from './pages/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
              <Route path="/" element={<Home/>} />
              <Route path="/service" element={<Service/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/view" element={<View/>} />
          </Route>
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    </BrowserRouter>
    </ProductProvider>
  </StrictMode>,
)
