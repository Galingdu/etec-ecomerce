import React from 'react'

function DiscountPage() {
     return (
    <div className='w-full'>
        <div className="px-4 lg:px-[120px] mx-auto">
            <h1 className='text-2xl font-bold mb-5'>Get Up to 70% off</h1>

            <div className="flex flex-wrap justify-between">
                <div className='my-3 sm:w-[48%] lg:w-[24%] bg-yellow-100 rounded-xl overflow-hidden'>
                    <div className='p-8'>  
                        <p className='text-3xl font-bold mb-3'>Save</p>
                        <p className='text-5xl font-bold text-yellow-500'><sup>$</sup>100</p>
                        <p className='text-xl mt-3'>Explore Our Furniture & Home Furnishing Range</p>
                    </div>
                    <div className='w-full h-[200px] overflow-hidden'>
                        <img src="https://cdn.mos.cms.futurecdn.net/3ks5VXaHepUgZSfFArN8rU.jpg" alt="" className='w-full h-full object-cover bg-green-400 hover:scale-105 duration-300'/>
                    </div>
                </div>

                <div className='my-3 sm:w-[48%] lg:w-[24%] bg-red-100 rounded-xl overflow-hidden'>
                    <div className='p-8'>  
                        <p className='text-3xl font-bold mb-3'>Save</p>
                        <p className='text-5xl font-bold text-red-500'><sup>$</sup>29</p>
                        <p className='text-xl mt-3'>Explore Our Furniture & Home Furnishing Range</p>
                    </div>
                    <div className='w-full h-[200px] overflow-hidden'>
                        <img src="https://cdn.mos.cms.futurecdn.net/9vvsKLN4WyueSMsnAdWq6T-1200-80.jpg" alt="" className='w-full h-full object-cover bg-green-400 hover:scale-105 duration-300'/>
                    </div>
                </div>

                <div className='my-3 sm:w-[48%] lg:w-[24%] bg-pink-100 rounded-xl overflow-hidden'>
                    <div className='p-8'>  
                        <p className='text-3xl font-bold mb-3'>Save</p>
                        <p className='text-5xl font-bold text-pink-500'><sup>$</sup>50</p>
                        <p className='text-xl mt-3'>Explore Our Furniture & Home Furnishing Range</p>
                    </div>
                    <div className='w-full h-[200px] overflow-hidden'>
                        <img src="https://mechanicalkeyboards.com/cdn/shop/files/preview_images/DSC05423.jpg?v=1709331307&width=750" alt="" className='w-full h-full object-cover bg-green-400 hover:scale-105 duration-300'/>
                    </div>
                </div>

                <div className='my-3 sm:w-[48%] lg:w-[24%] bg-blue-100 rounded-xl overflow-hidden'>
                    <div className='p-8'>  
                        <p className='text-3xl font-bold mb-3'>Save</p>
                        <p className='text-5xl font-bold text-blue-500'><sup>$</sup>79</p>
                        <p className='text-xl mt-3'>Explore Our Furniture & Home Furnishing Range</p>
                    </div>
                    <div className='w-full h-[200px] overflow-hidden'>
                        <img src="https://media.istockphoto.com/id/1183889081/photo/russia-oktober-24-2019-ps4-console-background-playstation-4-controllers-sony-gaming-console.jpg?s=612x612&w=0&k=20&c=Tw227AKE7cM7Z2gAZM7yzUtK0S0W1zA1h2IN0jZto50=" alt="" className='w-full h-full object-cover bg-green-400 hover:scale-105 duration-300'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiscountPage
