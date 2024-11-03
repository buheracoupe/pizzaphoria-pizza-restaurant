import React from 'react'
import {UseFormRegister, FieldValues } from 'react-hook-form'
import { useAppDispatch } from '../../../Redux/hooks';
import { motion} from 'framer-motion';
import { useForm } from 'react-hook-form';
import { addOrder } from '../../../Redux/OrderSlice';

interface animatedMenuWrapperProps{
    children: React.ReactNode;
    className?: string;
}


export function AnimatedMenuWrapper({children, className}: animatedMenuWrapperProps){

    return (
        <motion.div
         initial={{ opacity: 0, y: 200 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }} 
         className={className}
         exit={{opacity:0, y:200}}>
            {children}
        </motion.div>
    )
}

const salads = [
    {
        id: "salad1",
        name: "Fresh Basil Salad",
        price: 7,
    },
    {
        id: "salad2",
        name: "Classic Caesar",
        price: 8,
    },
    {
        id: "salad3",
        name: "Veggie Fresh",
        price: 10,
    },
    {
        id: "salad4",
        name: "Veggie Delight",
        price: 8,
    },
];




function Salads(){
const {register, getValues, handleSubmit} = useForm();
const dispatch = useAppDispatch();
  return (
            
    <div className='flex flex-col gap-12 items-center'>
        <AnimatedMenuWrapper className="flex flex-col gap-4 items-center">
        <div className="container flex flex-col gap-3 items-center">
    {salads.map((salad) =>{
        return(
            <label htmlFor={salad.id} className='flex cursor-pointer justify-between odd:bg-slate-100 p-2 w-44' key={salad.id}>
                <div >{salad.name}</div>
                <p>${salad.price}</p>
                <input className='accent-naplesYellow' type="checkbox" id={salad.id} {...register(salad.name)} />
            </label>
        )
    })}
    </div>
    <button 
            onClick={(event) => {
                event.preventDefault();
                const values = getValues()

                // learnt a more efficient way to run the check logic with Set and the has method
               const selectedSalads = new Set(Object.keys(values).filter((value) => {
                    return values[value] === true
                }))

                const saladOrders = salads.filter((salad) => selectedSalads.has(salad.name))
                console.log(saladOrders)
                saladOrders.forEach((salad)=> dispatch(addOrder(salad)))

            }}
            className="bg-naplesYellow hover:bg-naplesYellowDark p-2 font-Flamenco">Add Order</button>
    </AnimatedMenuWrapper>
    </div>
    
  )
}

export default Salads