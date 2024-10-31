import React from 'react'
import { NavLink } from 'react-router-dom'
import blackLogo from "../Assets/pizzaphoria-black-text.png"
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  // const menuOpen: string ="nav relative flex-row md:flex font-Quicksand h-24 px-12 p-4 items-center justify-between gap-2"
  const menuOpen: string ="nav fixed flex flex-col border-r-4 items-center gap-4 top-0 left-0 w-3/5 h-full z-50 bg-white opacity-1 transition-all duration-300"

  
  return (
    <>
    { isMenuOpen?
     <IoCloseSharp
      className='md:hidden cursor-pointer absolute text-gray-600 text-4xl right-8 top-8'
      onClick={()=> handleMenuToggle()}
    /> :
      <CiMenuBurger
    onClick={() => handleMenuToggle()}
     className='md:hidden cursor-pointer absolute text-black text-3xl right-8 top-8'/>}
    <div className="h-24 p-4 bg-white px-12">
    <div className={isMenuOpen? menuOpen : "hidden"}>
    <NavLink
          onClick={()=> handleMenuToggle()}
          to="/">
    <img className='h-20 object-contain' src={blackLogo} alt="black pizzaphoria logo" />
    </NavLink>
    <div className="routes flex-col flex items-center md:flex-row gap-8 md:gap-4 text-xl md:text-lg w-full mb-8 md:mb-0 md:w-auto ">
    <NavLink
     className={({ isActive }) =>
        isActive ? 'nav-link active font-bold group md: border-0 border-b-2 border-b-gray-500 w-full text-center' : 'nav-link group text-center md:border-0 border-b-2 border-b-gray-500 w-full'
      }
      onClick={()=> handleMenuToggle()}
     to="/menu">
    Menu
    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-naplesYellowDark'></span>
    </NavLink>
    <NavLink
    className={({ isActive }) =>
    isActive ? 'nav-link active font-bold group md: border-0 border-b-2 border-b-gray-500 w-full text-center' : 'nav-link group text-center md:border-0 border-b-2 border-b-gray-500 w-full'
    }    
    onClick={()=> handleMenuToggle()}    
    to="/ourstory">
    Our Story
    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-naplesYellowDark'></span>
    </NavLink>
    <NavLink
    className={({ isActive }) =>
    isActive ? 'nav-link active font-bold group md: border-0 border-b-2 border-b-gray-500 w-full text-center' : 'nav-link group text-center md:border-0 border-b-2 border-b-gray-500 w-full'
    }     
    onClick={()=> handleMenuToggle()}
    to="/giftcards">
    Gift Cards
    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-naplesYellowDark'></span>
    </NavLink>
    <NavLink  
    className={({ isActive }) =>
    isActive ? 'nav-link active font-bold group md: border-0 border-b-2 border-b-gray-500 w-full text-center' : 'nav-link group text-center md:border-0 border-b-2 border-b-gray-500 w-full'
    } 
    onClick={()=> handleMenuToggle()}
    to="/contact">
    Contact
    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-naplesYellowDark'></span>
    </NavLink>
    </div>
    <button className='font-Flamenco font-semibold p-2 text-xl rounded-lg transition-all duration-300 hover:bg-naplesYellowDark bg-naplesYellow'>Order Online</button>
    <div className=" text-black absolute bottom-8 md:hidden flex gap-7 text-2xl  icons">
        <FaInstagram className='h-6 hover:text-naplesYellow cursor-pointer' />
        <FaFacebook className='h-6 hover:text-naplesYellow cursor-pointer' />
        <FaTwitter className='h-6 hover:text-naplesYellow cursor-pointer' />
    </div>
    </div>
    </div>
    </>
  )
}

export default NavBar