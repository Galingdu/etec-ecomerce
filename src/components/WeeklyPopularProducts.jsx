import React, { useContext } from 'react'
import ProductContext from '../pages/ProductContext'

import { IoMdHeartEmpty } from 'react-icons/io'

function WeeklyPopularProducts() {
  const { products } = useContext(ProductContext)

  return (
    <div className='px-5 py-3 lg:px-[120px] md:pb-10' data-aos="fade-up">
      <h2 className='text-2xl font-bold'>Weekly PopularProducts!</h2>

      <div className='overflow-x-auto py-5 mt-10'>
        <div className='flex gap-5 whitespace-nowrap'>
          {products.map((p, i) => (
            <div
              key={i}
              className='min-w-[250px] md:min-w-[300px] h-[440px] shadow-lg rounded-3xl overflow-hidden relative'
            >
              {/* Image with favorite button */}
              <div className='relative'>
                <img
                  className='w-full h-[250px] object-cover'
                  src={p.image}
                  alt={p.name}
                />
                <button className='absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-all duration-300'>
                  <IoMdHeartEmpty className='text-2xl' />
                </button>
              </div>

              {/* Product Info */}
              <div className='pt-5 px-4 flex justify-between gap-4'>
                <div className='w-[52%]'>
                  <h3 className='text-lg font-bold line-clamp-1'>{p.name}</h3>
                  <p className='line-clamp-2 text-[13px] text-gray-500 my-3'>
                    {p.description}
                  </p>
                  <h3 className='font-medium text-orange-400'>
                    Rating: {p.rating}
                  </h3>
                </div>
                <div className='w-[47%]'>
                  <h3 className='font-medium'>{p.price}$</h3>
                </div>
              </div>

              {/* Add to Cart */}
              <div className='px-4'>
                <button className='border w-full px-5 py-3 rounded-3xl cursor-pointer hover:bg-orange-600 hover:text-white duration-300 mt-3'>
                  Add Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeeklyPopularProducts
