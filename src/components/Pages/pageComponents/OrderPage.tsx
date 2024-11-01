import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { FaPizzaSlice, FaWineBottle } from "react-icons/fa";
import { LuSalad } from "react-icons/lu";
import { GiSodaCan } from "react-icons/gi";

type Sections = "pizza" | "salads" | "wine" | "beverages"

interface Pizza {
    id: string,
    name: string,
    price: number,
}
const pizzas: Pizza[] =[
        {id: "1", name: "Classic Margherita", price: 15.99},
        {id: "2", name: "Straciatella", price: 17.20},
        {id: "3", name: "Mushroom Risotto", price: 18.65},
        {id: "4", name: "Pepperoni", price: 16.99},
        {id: "5", name: "La Diavola", price: 18}, 
        {id: "6", name:"Lorraine", price:16.50}, 
        {id: "7", name:"Quattro Formaggi", price:16}, 
        {id: "8", name:"Calzone", price:15}, 
        {id: "9", name:"Market Pizza ", price:18},
        {id: "10", name:"Pizzazzo", price:18},
        {id: "11", name:"Sicilian", price:16},
        {id: "12", name:"Veggie", price:16},
        {id: "13", name:"Tiramisu", price:18},
        {id: "14", name:"Cannoli", price:16},
    ]
const toppings: {topping: string, price: number}[] = [
    {topping: "Garlic Butter Prawns and Chilli", price: 3},
    {topping: "Chorizzo", price: 1},
    {topping: "Extra Cheese", price: 2},
    {topping: "Egg Florentine", price: 2},
    {topping: "Olives", price: 1},
    {topping: "Pineapple", price: 1},
    {topping: "Roasted Capicsum", price: 2}
]
const orderArr: {item: string, price: number}[] = []

function OrderPage() {
    const { register, handleSubmit, reset } = useForm();
    const [activeSection, setActiveSection] = useState<Sections>("pizza")

    function updateSection(section: Sections){
        setActiveSection(section)
    }

  return (
    <form className='rounded-md grid grid-cols-[3fr_1fr] mx-20 gap-4' action="">
        <div className="customerorder">
        <div className="ordersection justify-center flex gap-5 font-Flamenco text-2xl">
            <h1
            className='flex gap-2 items-center hover:text-naplesYellowDark cursor-pointer'
            onClick={()=> updateSection("pizza")}>Pizzas<FaPizzaSlice className='text-naplesYellowDark'/></h1>
            <h1
            className='flex gap-2 items-center hover:text-naplesYellowDark cursor-pointer'
            onClick={()=> updateSection("salads")}>Salads<LuSalad className='text-naplesYellowDark'/></h1>
            <h1
            className='flex gap-2 items-center hover:text-naplesYellowDark cursor-pointer'
            onClick={()=> updateSection("wine")}>Wine <FaWineBottle className='text-naplesYellowDark'/></h1>
            <h1
            className='flex gap-2 items-center hover:text-naplesYellowDark cursor-pointer'
            onClick={()=> updateSection("beverages")}>Beverages<GiSodaCan className='text-naplesYellowDark'/></h1>
        </div>
        <div className="sections font-Quicksand">
            <div className="section1 flex relative flex-col gap-6 items-center m-4">
        <div className="pizzas-section grid gap-y-4 gap-x-8 grid-cols-2">
        {pizzas.map(pizza => {
            return (
            <div key={pizza.id} className="pizza-item flex gap-2 items-center bg-slate-50 justify-between w-[300px] hover:bg-naplesYellow cursor-pointer">
                <label htmlFor={pizza.id} className="label flex flex-row gap-2 items-center">
                <p>{pizza.name}</p>
                <p>${pizza.price}</p>
                </label>
                <input className='accent-naplesYellowDark' id={pizza.id} {...register(pizza.name)} type="radio" name='pizzaoption' />
            </div>
            )
        })}
        </div>
        <div className="selectsize rounded-md p-2 bg-slate-50">
            <label htmlFor="size" className="label flex flex-row gap-2 items-center">
            <p className='font-Flamenco font-semibold text-xl'> Pie Size</p>
            <select className='accent-naplesYellowDark focus:outline-naplesYellowDark' id="size" {...register('size')}>
                <option className='' value="small">Small</option>
                <option className='' selected value="medium">Medium</option>
                <option className='' value="large">Large</option>
                <option className='' value="extra-large">Extra Large</option>
            </select>
            </label>
        </div>
        <div className="toppings">
        {toppings.map(topping => {
            return (
            <div key={topping.topping} className="topping-item flex gap-2 odd:bg-slate-100 items-center justify-between w-[300px] hover:bg-naplesYellow cursor-pointer">
                <label htmlFor={topping.topping} className="label flex flex-row gap-2 items-center">
                <p>{topping.topping}</p>
                <p>${topping.price}</p>
                </label>
                <input className='accent-naplesYellowDark' id={topping.topping} {...register(topping.topping)} type="checkbox" />
            </div>
            )
        })}
        </div>
        <button className='rounded-md p-2 right-12 bottom-0 bg-naplesYellow hover:bg-naplesYellowDark'>Add Order</button>
        </div>

        </div>
        </div>
       <div className="ordersummary bg-slate-100 p-4 h-80 rounded-md w-full">
        <h1 className='font-Flamenco text-xl text-left'>Order Summary</h1>
       </div>
    </form>
  )
}

export default OrderPage