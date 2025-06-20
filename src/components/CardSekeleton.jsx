import React from 'react'

function CardSekeleton() {
  return (
    <div className="min-w-[250px] md:min-w-[300px] h-[440px] shadow-lg rounded-3xl overflow-hidden bg-white animate-pulse">
      {/* Image placeholder */}
      <div className="relative">
        <div className="w-full h-[250px] bg-gray-300" />
        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
          <div className="w-5 h-5 bg-gray-300 rounded-full" />
        </div>
      </div>

      {/* Text content */}
      <div className="pt-5 px-4 flex justify-between gap-4">
        <div className="w-[52%] space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
        <div className="w-[47%]">
          <div className="h-4 bg-gray-300 rounded w-3/4" />
        </div>
      </div>

      {/* Add to cart button */}
      <div className="px-4 mt-4">
        <div className="h-[45px] bg-gray-200 rounded-3xl w-full" />
      </div>
    </div>
  )
}

export default CardSekeleton
