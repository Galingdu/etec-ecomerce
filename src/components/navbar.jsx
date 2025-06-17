import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoClose, IoMenu } from 'react-icons/io5';



function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleTab(){
    setMenuOpen(false);
  }

  return (
    <div className='lg:py-5 py-2 lg:px-[120px]'>
      <nav className='flex items-center'>
        <div className='flex items-center justify-between lg:w-[50%] w-[100%]'>
            <div className='flex items-center'>
                <div className='w-[70px] h-[70px] pb-5'>
                  <img className='w-100 mb-3' src="https://img.freepik.com/premium-vector/orange-logo-design_9999-17660.jpg" alt="Error Image" />
                </div>
                <h2 className='md:text-4xl md:ps-5 ps-2 font-bold text-2xl pb-1'>
                    OrangeShop
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
        <button className='block lg:hidden mx-2' onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen ?  <IoClose className='text-3xl'/> :  <IoMenu className='text-3xl'/>}
           
        </button>

         <div className={` ${menuOpen ? 'opacity-100 translate-y-16 pointer-events-auto' : 'opacity-0 -translate-y-14 pointer-events-none' }
              w-[90%] lg:hidden
              absolute duration-200
              left-1/2 transform -translate-x-1/2 p-4 
              border rounded-box
              pb-10
              bg-white
               mt-50
              `}>

              <ul className='gap-6 px-4 py-0 flex flex-col'>
               <NavLink to={"/"}>
                 <li className='hover:text-orange-600 duration-500 text-xl border-b' onClick={handleTab}>Home</li>
               </NavLink>
                <NavLink to={"/about"}>
                  <li className='hover:text-orange-600 duration-500 text-xl border-b' onClick={handleTab}>About</li>
                </NavLink>
                <NavLink to={"/service"}>
                  <li className='hover:text-orange-600 duration-500 text-xl border-b' onClick={handleTab}>Service</li>
                </NavLink>
                <NavLink to={"/contact"}>
                  <li className='hover:text-orange-600 duration-500 text-xl border-b' onClick={handleTab}>Contact</li>
                </NavLink>
                
            </ul>
        </div>
    

        

        

      </nav>
    </div>
  )
}

export default Navbar
