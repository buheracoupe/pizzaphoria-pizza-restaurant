import React from 'react'
import { AnimatedMenuWrapper, Props } from './Salads'



const wines = [
    {
        id: "wine1",
        name: "Montelliana",
        price: 36,
    },
    {
        id: "wine2",
        name: "Coronello",
        price: 42,
    },
    {
        id: "wine3",
        name: "Oxford Landing",
        price: 39,
    },
    {
        id: "wine4",
        name: "Clean Slate Riesling",
        price: 42,
    },
    {
        id: "wine5",
        name: "Chardonnay",
        price: 48,
    },
];

function Wine({formFunctions}: Props) {
    const {register, reset, getValues} = formFunctions
  return (
    <div>
        <AnimatedMenuWrapper>
            <div className='flex flex-col gap-2'>
                {wines.map((wine) => {
                    return (
                        <label htmlFor={wine.id} className='flex justify-between items-center w-44' key={wine.id}>
                            <div className='flex gap-2 items-center'>
                             <p>{wine.name}</p>
                             <p>${wine.price}</p>
                             </div>
                            <input id={wine.id} className='accent-naplesYellow' type="checkbox" {...register(wine.name)} />

                        </label>
                    )
                })}
                
            </div>
        </AnimatedMenuWrapper>
    </div>
  )
}

export default Wine