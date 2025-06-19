import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      once: true       // only animate once on scroll
    });
  }, []);
 
  return (
    <div className='inter'>
      <header>
          <Header/>
      </header>
      <main>
        <Outlet/>
        
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
