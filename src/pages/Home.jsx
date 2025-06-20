import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import Hero from '../components/Hero';
import ShopCategory from '../components/ShopCategory';
import BestDealProducts from '../components/BestDealProducts';
import DiscountPage from '../components/DiscountPage';
import WeeklyPopularProducts from '../components/WeeklyPopularProducts';
import HeroTwo from '../components/HeroTwo';
import TodayBestDeal from '../components/TodayBestDeal';
import Get50pcBack from '../components/Get50pcBack';
import TrendingProducts from '../components/TrendingProducts';
import CardSekeleton from '../components/CardSekeleton';

function Home() {  
  

  return(
    <div>
      <Hero/>
      <div className='container mx-auto'>
        <ShopCategory/>
        <BestDealProducts/>
        <DiscountPage/>
        <div className='lg:mt-10'>
            <WeeklyPopularProducts/>
        </div>
       
      </div>
       <HeroTwo/>
       <div className='container mx-auto'>
        <TodayBestDeal/>
       </div>
       <div>
            <TrendingProducts/>
        </div>
        <Get50pcBack/>
    
        
    </div>
  )
 

}

export default Home;