import React from 'react'
import cook from "../../Assets/cook-in-kitchen.jpg"
import amishFarm from "../../Assets/amish-farm.jpg"
import { NavLink } from 'react-router-dom'

function OurStory() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="top flex">
      <img className='w-[calc((100vw-17px)/2)] object-cover' src={amishFarm} alt="amish Farm" />
      <p className='p-8 text-lg font-Quicksand place-content-center leading-loose'>Nestled in the charming town of Annville, Pennsylvania, our pizza restaurant is not just a place to enjoy delicious food; it is a heartfelt tribute to our family's legacy.
         Built on the cherished grounds of our heirloom land, where generations have gathered to celebrate life’s moments, we infuse every pizza with the warmth of tradition and the love of family.
          Each ingredient is carefully selected from the renowned Stoltzfus Farms, a beloved local source known for its exceptional quality and freshness. 
        This commitment to sourcing locally reflects our dedication to supporting our community and enhancing the rich flavors of our pizzas</p>
        </div>
        <div className="bottom flex">
      <div className='p-8 text-lg font-Quicksand place-content-center leading-loose flex items-center flex-col gap-4'>
      <p className=''>From the moment you step through our doors, you’re welcomed into our
         home—where the aroma of freshly baked dough and simmering sauces beckon you to create new memories with those you love.
         Join us as we honor our past and craft a future filled with joy, laughter, and of course, the perfect slice of pizza.</p>
         <NavLink to="/menu"><button
 className='border-2 border-gray-500 p-2 font-medium font-Flamenco w-36 transition-all duration-300 hover:bg-naplesYellow'>
    VIEW MENUS</button>
        </NavLink>
      </div>
      <img className='object-cover object-right-top md:object-center w-[calc((100vw-17px)/2)]' src={cook} alt="pizza chef in kitchen" />
      </div>
    </div>
  )
}

export default OurStory