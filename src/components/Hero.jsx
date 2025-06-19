import Typing from './Typing'
import React from 'react'

function Hero() {
  return ( 
    <div className='hero-bg lg:px-[120px]' >
        <div className='p-5 w-[85%] lg:w-[40%] md:w-[55%] py-30 lg:py-45'>
          <h2 className='text-4xl font-bold text-white md:text-6xl'><Typing /></h2>
          <p className='text-gray-200 my-10'>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
           <button className='lg:text-2xl font-medium btn bg-orange-600 text-white rounded-4xl border-0 px-8 py-6 lg:px-10 lg:py-7 hover:bg-orange-700'>Learn More</button>
        </div>
    </div>
  )
}

export default Hero
