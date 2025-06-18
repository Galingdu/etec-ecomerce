import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import Hero from '../components/Hero';
import ShopCategory from '../components/ShopCategory';
import BestDealProducts from '../components/BestDealProducts';
import DiscountPage from '../components/DiscountPage';
import WeeklyPopularProducts from '../components/WeeklyPopularProducts';
import HeroTwo from '../components/HeroTwo';

function Home() {  
  

  return(
    <div>
      <Hero/>
      <div className='container mx-auto'>
        <ShopCategory/>
        <BestDealProducts/>
        <DiscountPage/>
        <div className='mt-10'>
            <WeeklyPopularProducts/>
        </div>
       
      </div>
       <HeroTwo/>
    </div>
  )
 

}

export default Home;