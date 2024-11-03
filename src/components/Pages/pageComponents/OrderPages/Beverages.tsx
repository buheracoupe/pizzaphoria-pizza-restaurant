import React from 'react'
import { AnimatedMenuWrapper } from './Salads'
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../Redux/hooks';
import { addOrder } from '../../../Redux/OrderSlice';


const beverages = [
    {
        id: "beverage1",
        name: "Coke",
        price: 1.5
    },
    {
        id: "beverage2",
        name: "Pepsi",
        price: 1.5
    },
    {
        id: "beverage3",
        name: "Sprite",
        price: 1.5
    },
    {
        id: "beverage4",
        name: "Fanta",
        price: 1.5
    },
    {
        id: "beverage5",
        name: "Dr Pepper",
        price: 1.7
    },
    {
        id: "beverage6",
        name: "Lemonade",
        price: 2.0
    },
    {
        id: "beverage7",
        name: "Iced Tea",
        price: 2.0
    },
    {
        id: "beverage8",
        name: "Coffee",
        price: 2.5
    },
    {
        id: "beverage9",
        name: "Bottled Water",
        price: 1.0
    }
];

function Beverages() {
    const {reset, register, getValues} = useForm();
    const dispatch = useAppDispatch();
  return (
    <div>
        <AnimatedMenuWrapper className='flex flex-col gap-8 items-center'>
            <div className="bev-container flex flex-col items-center">
                {beverages.map((beverage) => {
                    return (
                        <label key={beverage.id} className="bev-item w-44 odd:bg-slate-100 flex justify-between">
                            <div className='flex gap-2'>
                            <div>{beverage.name}</div>
                            <span>${beverage.price} </span>
                            </div>
                            <input className='accent-naplesYellow' type="checkbox" {...register(beverage.name)} />
                        </label>
                    )
                })}
            </div>
            <button
            onClick={
                (event) => {
                    event.preventDefault();
                    const values = getValues();
                    const selectedBeverages = new Set(Object.keys(values).filter((key) => values[key] === true))
                    const beverageOrders = beverages.filter(beverage => selectedBeverages.has(beverage.name))
                    console.log(beverageOrders)
                    beverageOrders.forEach(beverage => dispatch(addOrder(beverage)))
                    reset();
                }
            }
             className='p-2 bg-naplesYellow hover:bg-naplesYellowDark mt-6'>Add Order</button>
        </AnimatedMenuWrapper>
        </div>
  )
}

export default Beverages