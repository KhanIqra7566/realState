import React, { useEffect, useState } from 'react'
// import assets from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return()=>{
       document.body.style.overflow = 'auto'
    };
  },[showMobileMenu])
  return (
    <div className="absolute top-0 z-10 w-full left-0 bg-transparent">
      <div className="flex items-center justify-between px-6 py-3 pb-1 bg-white">
        <img src='/logo.png' alt="Logo" className="h-20" />

        <ul className="flex space-x-6 hidden md:flex gap-7 text-black">
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
          <li><a href="#About" className="cursor-pointer hover:text-gray-400">About Us</a></li>
          <li><a href="#Service" className="cursor-pointer hover:text-gray-400">Service</a></li>
          <li><a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a></li>
        </ul>

        <button className="hidden md:block bg-black text-white px-8 py-2 rounded-full shadow-md">
          Sign Up
        </button>
        <img  onClick={()=>setShowMobileMenu(true)} src='/menu_icon.svg' className='md:hidden w-7' alt="" />
      </div>

      {/* -----------Mobile menu==== */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img  onClick={()=>setShowMobileMenu(false)} src="/cross_icon.svg" className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
        <a onClick={()=>setShowMobileMenu(false)} href="" className='px-4 py2 rounded-full inline-block'>Home</a>
        <a onClick={()=>setShowMobileMenu(false)} href="" className='px-4 py2 rounded-full inline-block'>About U</a>
        <a onClick={()=>setShowMobileMenu(false)} href="" className='px-4 py2 rounded-full inline-block'>Service</a>
        <a onClick={()=>setShowMobileMenu(false)} href="" className='px-4 py2 rounded-full inline-block'>Testimonials</a>
      </ul></div>
    </div>
  )
}

export default Navbar;
