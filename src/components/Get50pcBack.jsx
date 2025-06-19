import React from 'react'

function Get50pcBack() {
  return (
    <div className='flex justify-between items-center bg-orange-300 ps-2 py-5 lg:px-[200px] md:py-20' data-aos="fade-up">
        <div>
            <h2 className='lg:text-5xl text-[18px] font-bold'>Get 5% Cash Back</h2>
            <p className='font-semibold lg:my-8 my-4 md:text-1xl text-[12px]'>On OrangeShop.com</p>
           <button className='font-medium btn bg-orange-600 text-white rounded-3xl border-0 px-4 py-2 lg:px-8 lg:py-6 hover:bg-orange-700'>Learn More</button>
        </div>
        <div className='w-[200px] md:w-[300px] lg:w-[400px]'>
            <img src="https://www.ababank.com/fileadmin/user_upload/Payment_Cards/Credit_Cards/ABA_Visa_Platinum_Credit_Lite.png" alt="Cashback Offer" className='w-full h-auto rounded-3xl'/>
        </div>
      
    </div>
  )
}

export default Get50pcBack
