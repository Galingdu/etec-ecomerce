import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'



function App() {
  return (
    <div className='inter'>
      <header>
          <Header/>
      </header>
      <main>
        <Outlet/>
        
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App
