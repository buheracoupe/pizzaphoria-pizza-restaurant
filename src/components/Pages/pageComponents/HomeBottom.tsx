import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import palatablepizza from "../../../Assets/palatable-pizza.jpg"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import ourStoryImg from "../../../Assets/our-story.jpg"

const strings: (string| number)[] = ["Craving a Pizza?", 1500, "A palatable and unforgettable pizza?",1500, "Checkout our renowned Menus Below!"]   

function HomeBottom() {
    const imgRef = useRef<HTMLImageElement>(null)
    const secondImgRef = useRef<HTMLImageElement>(null)
    const inView = useInView(imgRef)
    const secondInView = useInView(secondImgRef)

  return ( 
<div className='bottom-container '>
<div className="middlecontainer h-screen grid place-content-center grid-cols-2">
<motion.img
ref = {imgRef}
className='h-screen object-cover w-full'
animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
transition={{duration: 2}}
src={palatablepizza}
alt="palatable pizza" />
<div className="right flex flex-col justify-center items-center gap-8">
<TypeAnimation
sequence={strings}
 speed={30}
 deletionSpeed={20}
 wrapper='span'
 className='text-2xl font-Flamenco'
/>
<h1 className='text-5xl font-semibold font-Abel'>Menus</h1>
<Link to="/menu">
<motion.button
animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 400 }}
transition={{duration: 1}}
 className='border-2 border-gray-500 p-2 font-medium font-Flamenco w-36 transition-all duration-300 hover:bg-naplesYellow'>
    VIEW MENUS</motion.button>
 </Link>
</div>
</div>
<div className='grid grid-cols-2 h-[50vh] relative overflow-hidden'>
    <div className="right items-center mt-16 flex flex-col gap-8">
    <h1 className='font-Abel font-semibold text-5xl'>Our Story</h1>
    <Link to="/ourstory">
    <button className='border-2 font-Flamenco border-gray-500 p-2 w-36  transition-all font-medium duration-300 hover:bg-naplesYellow'>LEARN MORE</button>
    </Link>
    </div>
    <motion.img
    ref={secondImgRef}
    animate={secondInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
    transition={{duration: 2}}
    className='h-[100vh] w-full object-cover object-center'
    src={ourStoryImg}
    alt="girl walking and contemplating" />
</div>
</div> 
 )
}

export default HomeBottom