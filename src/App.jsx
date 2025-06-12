import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import FetchAPI from './pages/FetchAPI'

function App() {
  return (
    <div className='inter'>
      <header>
          <Header/>
      </header>
      <main>
        <Outlet/>
        <FetchAPI/>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App
