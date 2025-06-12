import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";



function Navbar() {
  return (
    <div className='lg:py-5 py-2 lg:px-[120px]'>
      <nav className='flex items-center'>
        <div className='flex items-center justify-between lg:w-[50%] w-100'>
            <div className='flex items-center'>
                <div className='w-[70px] h-[70px] pb-5'>
                  <img className='w-100 mb-3' src="https://img.freepik.com/premium-vector/orange-logo-design_9999-17660.jpg" alt="Error Image" />
                </div>
                <h2 className='lg:text-4xl ps-5 pb-1'>
                    Orange Shop
                </h2>
            </div>
            <ul className='gap-6 px-4 py-0 hidden lg:flex'>
               <NavLink to={"/"}>
                 <li className='hover:text-orange-600 duration-500 text-xl'>Home</li>
               </NavLink>
                <NavLink to={"/about"}>
                  <li className='hover:text-orange-600 duration-500 text-xl'>About</li>
                </NavLink>
                <NavLink to={"/service"}>
                  <li className='hover:text-orange-600 duration-500 text-xl'>Service</li>
                </NavLink>
                <NavLink to={"/contact"}>
                  <li className='hover:text-orange-600 duration-500 text-xl'>Contact</li>
                </NavLink>
                
            </ul>
        </div>

        <div className='lg:w-[50%] flex justify-between ps-7 items-center w-[100%]'>
            <form action="" className='px-5 hidden md:block lg:block'>
              <div className='flex items-center border border-slate-400 p-2 rounded-lg'>
                  <input type="text" className='outline-0'placeholder='Search....' />
                  <button>Search</button>
              </div>
            </form>
            <div className='hidden lg:flex'>
              <NavLink>
                <div className='flex items-center px-5 gap-2'>
                  <FaUser className='lg:text-2xl'/>
                  <div className='lg:text-xl'>Account</div>
                </div>
              </NavLink>
              <NavLink>
              <div className='flex items-center gap-2 px-2'>
                 <FaCartShopping className='lg:text-2xl' />
                 <div className='lg:text-xl'> Cart</div>
              </div>
              </NavLink>
            </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
