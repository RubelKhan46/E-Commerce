import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { TbMenuDeep } from "react-icons/tb";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible,setVisible] = useState(false);

    const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center  justify-around py-6 font-medium bg-slate-950'>

        <Link to='/'><h1 className='font-bold font-serif text-4xl text-white'>STYLEFORGE</h1></Link>

        <ul className='hidden sm:flex gap-6 text-lg text-white'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-nome h-[1.5px] bg-red-700 hidden' />
            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>Collection</p>
                <hr className='w-2/4 border-nome h-[1.5px] bg-red-700 hidden' />
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-nome h-[1.5px] bg-red-700 hidden' />
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr className='w-2/4 border-nome h-[1.5px] bg-red-700 hidden'/>
            </NavLink>
            
        </ul>
        
        <div className='flex items-center gap-10'>
            <IoSearch onClick={()=>setShowSearch(true)} className='text-white size-8 cursor-pointer' alt="" />
            
            <div className='group relative'>
               <Link to='/login'><CgProfile  className='text-white size-7 cursor-pointer' alt="" /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>Myprofile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>

                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
              <BiShoppingBag  className='text-white size-7 cursor-pointer' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <TbMenuDeep onClick={()=>setVisible(true)}  className='text-white size-7 cursor-pointer sm:hidden' alt="" />
        </div>

        
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden z-50 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <MdKeyboardArrowLeft className='h-4' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='z-50 py-2 pl-6 border' to='/collection'>Collection</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='z-50 py-2 pl-6 border' to='/contact'>Contact</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='z-50 py-2 pl-6 border' to='/about'>About</NavLink>
                </div>

         </div>


    </div>
  )
}

export default Navbar