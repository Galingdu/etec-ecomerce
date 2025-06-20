import React from 'react'

function TrendingProducts() {
  return (
    <div className='px-5 py-3 lg:px-[120px] md:pt-10' data-aos="fade-up">
      <h2 className='text-2xl font-bold'>Trending Products For You !</h2>
      <div className='flex flex-wrap justify-between items-center lg:my-8 mt-5 lg:gap-0 gap-8'>
        <div className='lg:w-[49%] w-full'>
            <div className='w-full lg:h-[300px] h-[200px] bg-amber-300 rounded-2xl overflow-hidden' >
                <img src="https://png.pngtree.com/thumb_back/fw800/background/20230718/pngtree-d-rendered-notebook-laptop-computer-placed-on-white-tabletop-with-bokeh-image_3903100.jpg" className='w-full h-full object-cover' alt="" />
            </div>
            <div className='px-5'>
                <h3 className='mt-5 text-[20px] font-bold'>Furniture Village</h3>
                <p className='mb-5 my-2 font-semibold'>Delivery with in 24 hours</p>
                <button className='font-medium btn bg-orange-600 text-white rounded-3xl border-0 px-4 py-2 lg:px-8 lg:py-6 hover:bg-orange-700'>
                  Shop Now</button>
            </div>
        </div>

        <div className='lg:w-[49%] w-full'> 
            <div className='w-full lg:h-[300px] h-[200px] bg-amber-300 rounded-2xl overflow-hidden' >
                <img src="https://robots.net/wp-content/uploads/2023/09/how-to-download-via-keyboard-1695774173.jpg" className='w-full h-full object-cover' alt="" />
            </div>
            <div className='px-5 pb-3'>
                <h3 className='mt-5 text-[20px] font-bold'>Red Heart</h3>
                <p className='mb-5 my-2 font-semibold'>Delivery with in 24 hours</p>
                <button className='font-medium btn bg-orange-600 text-white rounded-3xl border-0 px-4 py-2 lg:px-8 lg:py-6 hover:bg-orange-700'>
                  Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingProducts
