import React from 'react'
import HomeBg from "../../Assets/pexels-fariphotography-905847.jpg"
import Logo from "../../Assets/batch-13---originals-4-high-resolution-logo-transparent.png"
import HomeBottom from './pageComponents/HomeBottom'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRef } from 'react';
import { motion } from 'framer-motion';

function Home() {

const HomeButtonRef = useRef<HTMLDivElement>(null)


    const scrollToBottom = () => {
        if(HomeButtonRef.current){
            HomeButtonRef.current.scrollIntoView({ behavior:'smooth' });
        }
    }

  return (
    <>
     <div className='relative flex flex-col h-[calc(100vh-5rem)] items-center'>
        <div className="bgcontainer -z-10 absolute">
        <img src={HomeBg} className='h-[calc(100vh-5rem)] w-screen object-cover' alt="pizza hero background" />
        <div className='absolute w-full h-full bg-black z-10 opacity-65 inset-0'></div>
        </div>
        <img src={Logo} className='h-80 object-contain ' alt="Piizzaphoria Background" />
        <div className=" text-center font-Flamenco text-white text-3xl">A taste of <span className="text-naplesYellow">Utopia</span> at <span className="text-naplesYellow">Pizzaphoria</span></div>
        <MdKeyboardDoubleArrowDown
        onClick={scrollToBottom}
         className="text-6xl text-white transition-all duration-300 hover:text-naplesYellowDark hover:scale-125 absolute bottom-8 left-1/2 -translate-x-1/2"/>
    </div>
    <div ref={HomeButtonRef} className="homecontainer">
    <HomeBottom />
    </div>
    </>
   
  )
}

export default Home