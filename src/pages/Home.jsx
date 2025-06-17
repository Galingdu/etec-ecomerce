import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import Hero from '../components/Hero';
import ShopCategory from '../components/ShopCategory';

function Home() {  
  

  return(
    <div>
      <Hero/>
      <ShopCategory/>
    </div>
  )
 

}

export default Home;