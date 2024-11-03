import React from 'react'
import pizzaTable from "../../Assets/open-pizza-on-table.jpg"

function Contact() {
  return (
    <div className="contact-wrapper w-full">
      <div className='relative h-auto'>
        <img className='h-60 w-screen object-cover' src={pizzaTable} alt="pizza on table top" />
        <div className="overlay absolute top-0 left-0 bg-black opacity-50 w-[calc(100vw-17px)] h-60"></div>
        <p className='text-white flex flex-col gap-3 items-center absolute top-1/2 font-semibold -translate-y-1/2 left-1/2 -translate-x-1/2 text-5xl font-Flamenco'>Contact Us
         <span className='text-gray-300 text-2xl '>We Love To Hear From You!</span></p>
      </div>
      <form className='flex flex-col w-auto mx-auto p-8 items-center gap-2' action="">
        <div className='top flex gap-2'>
          <input placeholder='Your Name' className='bg-slate-300 w-[300px] h-12 rounded-sm p-2 focus:outline-naplesYellow' type="text" />
          <input placeholder='Email Address' className='bg-slate-300 w-[300px] h-12 rounded-sm p-2 focus:outline-naplesYellow' type="email" />
        </div>
        <div className='middle flex gap-2'>
          <input placeholder='Your Phone Number' className='bg-slate-300 w-[300px] h-12 rounded-sm p-2 focus:outline-naplesYellow' type="number" />
          <input placeholder='Subject' className='bg-slate-300 w-[300px] h-12 rounded-sm p-2 focus:outline-naplesYellow' type="text" />
        </div>
        <textarea className='bg-slate-300 h-[300px] w-[608px] p-2 focus:outline-naplesYellow' placeholder='Write a message to us here....' />
        <button className='bg-naplesYellow hover:bg-naplesYellowDark text-lg rounded-sm font-Flamenco p-2 w-32 h-12'>Send Message</button>
      </form>
    </div>

  )
}

export default Contact