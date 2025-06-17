import React from 'react'

function Footer() {
  return (
      <div className="bg-orange-900 text-gray-300 py-1 text-center opacity-90 text-[12px]">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
  )
}

export default Footer
