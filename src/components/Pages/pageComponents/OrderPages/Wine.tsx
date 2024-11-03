import React from 'react'
import { AnimatedMenuWrapper} from './Salads'
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../Redux/hooks';
import { addOrder } from '../../../Redux/OrderSlice';



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

function Wine() {
    const { register, handleSubmit, reset, getValues } = useForm();
    const dispatch = useAppDispatch();

  return (
    <div>
        <AnimatedMenuWrapper>
            <div className='flex flex-col items-center gap-2'>
                {wines.map((wine) => {
                    return (
                        <label htmlFor={wine.id} className='flex justify-between items-center odd:bg-slate-100 w-52' key={wine.id}>
                            <div className='flex gap-2 items-center'>
                             <p>{wine.name}</p>
                             <p>${wine.price}</p>
                             </div>
                            <input id={wine.id} className='accent-naplesYellow' type="checkbox" {...register(wine.name)} />
                        </label>
                    )
                })}
                        <button
                        onClick={(event)=>{
                            event.preventDefault();
                            const values = getValues();
                            const selectedWines = new Set(Object.keys(values).filter(value => values[value] === true))
                            const wineOrders = wines.filter((wine) => selectedWines.has(wine.name));
                            wineOrders.forEach((wine)=> dispatch(addOrder(wine)))
                            reset();

                        }}
                         className="p-2 bg-naplesYellow font-Flamenco hover:bg-naplesYellowDark ">Add Order</button>
            </div>
        </AnimatedMenuWrapper>
    </div>
  )
}

export default Wine