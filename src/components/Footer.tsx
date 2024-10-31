import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
const sequenceArray: (string | number)[] = [
     "Subscribe to our Newsletter for updates!", 1500,
     "Subscribe to our Newsletter for discounts!", 1500,
     "Subscribe to our Newsletter for exclusive promotions!"
    ]

function Footer() {
  return (
<div className="footer mt-auto relative h-auto p-4 text-lg flex flex-col items-center bg-black text-white font-Flamenco">
<div className="subscribe flex w-[400px] flex-col items-center gap-2">
    <TypeAnimation
    sequence={sequenceArray}
    wrapper='span'
    speed={30}
    deletionSpeed={20}
    />
    <div className=''>
    <input type="email" className=' rounded-l-md placeholder:text-gray-400 p-1 focus:outline-none text-black' placeholder="Enter your email" />
    <button className='p-1 bg-naplesYellow hover:bg-naplesYellowDark text-black text-xl rounded-l-none rounded-md'>Subscribe</button>
    </div>
</div>
<div className="bottom-footer flex justify-between w-full m-4 p-4 text-lg">
    <div className=" text-white flex gap-4 text-xl  icons">
        <FaInstagram className='h-6 hover:text-naplesYellow' />
        <FaFacebook className='h-6 hover:text-naplesYellow' />
        <FaTwitter className='h-6 hover:text-naplesYellow' />
    </div>
    <div className="right flex gap-4">
        <p className='hover:text-naplesYellow'>Loyalty Programs</p>
        <p className='hover:text-naplesYellow'>Employment Opportunities</p>


    </div>
</div>
</div>
)
}

export default Footer