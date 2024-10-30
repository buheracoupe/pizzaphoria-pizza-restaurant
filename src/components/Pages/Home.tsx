import React from 'react'
import HomeBg from "../../Assets/pexels-fariphotography-905847.jpg"
import Logo from "../../Assets/batch-13---originals-4-high-resolution-logo-transparent.png"


function Home() {
  return (
    <div className='relative flex flex-col items-center'>
        <div className="bgcontainer -z-10 absolute">
        <img src={HomeBg} className='h-[calc(100vh-6rem)] w-screen object-cover' alt="pizza hero background" />
        <div className='absolute w-full h-full bg-black z-10 opacity-65 inset-0'></div>
        </div>
        <img src={Logo} className='h-80 object-contain ' alt="Piizzaphoria Background" />
        <div className=" text-center font-Flamenco text-white text-3xl">A taste of <span className="text-naplesYellow">Utopia</span> at <span className="text-naplesYellow">Pizzaphoria</span></div>
    </div>
  )
}

export default Home