import React from 'react'

import Navbar from './navbar'
function Header() {
  return (
//     <div className="navbar bg-base-100 shadow-sm">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         <li><NavLink to="/">
//               <h1>Home</h1>
//           </NavLink></li>
//         <li>   <NavLink to="/about">
//         <h1>About</h1>
//     </NavLink></li>
//         <li><NavLink to="/contact">
//         <h1>Contact</h1>
//     </NavLink></li>
//         <li><NavLink to="/view">
//         <h1>View</h1>
//     </NavLink></li>
//         <li> <NavLink to="/service">
//         <h1>Service</h1>
//     </NavLink></li>
//       </ul>
//     </div>
//   </div>
//   <div className="navbar-center">
//     <a className="btn btn-ghost text-xl">CHENG LYHENG</a>
//   </div>
//   <div className="navbar-end">
//     <button className="btn btn-ghost btn-circle">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
//     </button>
//     <button className="btn btn-ghost btn-circle">
//       <div className="indicator">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
//         <span className="badge badge-xs badge-primary indicator-item"></span>
//       </div>
//     </button>
//   </div>
// </div>
<header>
  
<div className='m-auto container-fluid'>
    <div className='py-1 lg:px-[120px] bg-orange-600 text-gray-50 flex justify-between'>
        <p>+885 9628 61 601</p>
        <p className='hidden lg:block'>Get 50% 0ff on Selected Items &emsp;| &emsp; Shop Now</p>
        <div>
          <select name="" id="" className='pe-3 bg-orange-600 outline-0 border-0'>
            <option value="">EN</option>
            <option value="">KH</option>
          </select>
          <select name="" id="" className='pe-3 ps-3 bg-orange-600 outline-0 border-0'>
            <option value="">Cambodia</option>
            <option value="">China</option>
          </select>
        </div>
    </div>
</div>
<Navbar/>
</header>



  )
}

export default Header
