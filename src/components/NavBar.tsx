import React from 'react'
import { NavLink } from 'react-router-dom'
import blackLogo from "../Assets/pizzaphoria-black-text.png"

function NavBar() {
  return (
    <div className="nav flex font-Quicksand h-24 px-12 p-4 items-center justify-between gap-2">
    <NavLink to="/">
    <img className='h-20 object-contain' src={blackLogo} alt="black pizzaphoria logo" />
    </NavLink>
    <div className="routes flex gap-4 text-lg">
    <NavLink
     className={({ isActive }) =>
        isActive ? 'nav-link active font-bold group' : 'nav-link group'
      }
     to="/menu">
    Menu
    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-naplesYellowDark'></span>
    </NavLink>
    <NavLink
    className={({ isActive }) =>
    isActive ? 'nav-link active font-bold group' : 'nav-link group'
    }    
    to="/ourstory">
    Our Story
    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-naplesYellowDark'></span>
    </NavLink>
    <NavLink
    className={({ isActive }) =>
    isActive ? 'nav-link active font-bold group' : 'nav-link group'
    }     
    to="/giftcards">
    Gift Cards
    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-naplesYellowDark'></span>
    </NavLink>
    <NavLink  
    className={({ isActive }) =>
    isActive ? 'nav-link active font-bold group' : 'nav-link group'
    }     to="/contact">
    Contact
    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-naplesYellowDark'></span>
    </NavLink>
    </div>
    <button className='font-Flamenco font-semibold p-2 rounded-lg hover:bg-naplesYellowDark bg-naplesYellow'>Order Online</button>
    </div>
    
  )
}

export default NavBar