import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { FaPizzaSlice, FaWineBottle } from "react-icons/fa";
import { LuSalad } from "react-icons/lu";
import { GiSodaCan } from "react-icons/gi";
import OrderSummary from './OrderSummary';
import { useAppDispatch } from '../../../Redux/hooks';
import { addOrder } from '../../../Redux/OrderSlice';
import Salads, { AnimatedMenuWrapper } from "./Salads";
import Beverages from './Beverages';
import Wine from './Wine';

type Sections = "pizza" | "salads" | "wine" | "beverages"

interface Pizza {
    id?: string,
    name: string,
    price: number,
    size?: string;
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
    interface Topping {
        topping: string,
        price: number,
    }
const toppings: Topping[] = [
    {topping: "Garlic Butter Prawns and Chilli", price: 3},
    {topping: "Chorizzo", price: 1},
    {topping: "Extra Cheese", price: 2},
    {topping: "Egg Florentine", price: 2},
    {topping: "Olives", price: 1},
    {topping: "Pineapple", price: 1},
    {topping: "Roasted Capicsum", price: 2}
]
const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};


function OrderPage() {
    const { register, handleSubmit, reset, getValues } = useForm();
    const [activeSection, setActiveSection] = useState<Sections>("pizza")

    function updateSection(section: Sections){
        setActiveSection(section)
    }

    const dispatch = useAppDispatch();

    // Topping typeguard
    function isTopping(order: any): order is Topping{
            return (typeof order === "object" && 
                typeof order.topping === "string" &&
                typeof order.price === "number")
    }
    

  return (
    <form
     className='rounded-md grid grid-cols-[3fr_1fr] mx-20 gap-4' action="">
        <div className="customerorder">
        <div className="ordersection justify-center flex gap-5 font-Flamenco text-2xl">
            <h1
            className={activeSection === "pizza" ? 'flex gap-2 items-center font-bold hover:text-naplesYellowDark cursor-pointer':
                'flex gap-2 items-center hover:text-naplesYellowDark cursor-pointer'
            }
            onClick={()=> updateSection("pizza")}>Pizzas<FaPizzaSlice className='text-naplesYellowDark'/></h1>
            <h1
            className={activeSection === "salads" ? 'flex gap-2 items-center font-bold hover:text-naplesYellowDark cursor-pointer':
                'flex gap-2 items-center hover:text-naplesYellowDark cursor-pointer'
            }
            onClick={()=> updateSection("salads")}>Salads<LuSalad className='text-naplesYellowDark'/></h1>
            <h1
            className={activeSection === "wine" ? 'flex gap-2 items-center font-bold hover:text-naplesYellowDark cursor-pointer':
                'flex gap-2 items-center hover:text-naplesYellowDark cursor-pointer'
            }
            onClick={()=> updateSection("wine")}>Wine <FaWineBottle className='text-naplesYellowDark'/></h1>
            <h1
            className={activeSection === "beverages" ? 'flex gap-2 items-center font-bold hover:text-naplesYellowDark cursor-pointer':
                'flex gap-2 items-center hover:text-naplesYellowDark cursor-pointer'
            }
            onClick={()=> updateSection("beverages")}>Beverages<GiSodaCan className='text-naplesYellowDark'/></h1>
        </div>
        <div className="sections font-Quicksand">
        {activeSection === "pizza" && <AnimatedMenuWrapper><div className="section1 flex relative flex-col gap-6 items-center m-4">

        <div className="pizzas-section m-8 grid gap-y-4 gap-x-8 grid-cols-2">
        {pizzas.map(pizza => {
            return (
            <label htmlFor={pizza.id} key={pizza.id} className="pizza-item flex gap-2 items-center bg-slate-50 justify-between w-[300px] hover:bg-naplesYellow cursor-pointer">
                <div className="label flex flex-row gap-2 items-center">
                <p>{pizza.name}</p>
                <p>${pizza.price}</p>
                </div>
                <input className='accent-naplesYellowDark' id={pizza.id} {...register("pizzaoption")} type="radio" value={pizza.name} />
            </label>
            )
        })}
        </div>
        <div className="selectsize rounded-md p-2 bg-slate-50">
            <label htmlFor="size" className="label flex flex-row gap-2 items-center">
            <p className='font-Flamenco font-semibold text-xl'> Pie Size</p>
            <select defaultValue="large" className='accent-naplesYellowDark focus:outline-naplesYellowDark' id="size" {...register('size')}>
                <option className='' value="small">Small</option>
                <option className='' value="medium">Medium</option>
                <option className='' value="large">Large</option>
                <option className='' value="extra-large">Extra Large</option>
            </select>
            </label>
        </div>
        <div className="toppings">
            <p className="font-Flamenco text-xl text-center p-2 font-semibold">Extra Toppings</p>
        {toppings.map(topping => {
            return (
            <label htmlFor={topping.topping} key={topping.topping} className="topping-item flex gap-2 odd:bg-slate-100 items-center justify-between w-[300px] hover:bg-naplesYellow cursor-pointer">
                <div  className="label flex flex-row gap-2 items-center">
                <p>{topping.topping}</p>
                <p>${topping.price}</p>
                </div>
                <input className='accent-naplesYellowDark' id={topping.topping} {...register(topping.topping)} type="checkbox"/>
            </label>
            )
        })}
        </div>
        <button
        type='submit'
        onClick={
            (event)=> {
                event.preventDefault();
                const values = getValues()
                reset();
                const pizzaChoice = pizzas.find((pizza)=> pizza.name === values.pizzaoption)
                const pieSize = values.size 
                console.log({pizzaChoice, pieSize})
                const extraToppingsArr = Object.keys(values).filter(key=> values[key] === true)
                const extraToppings = extraToppingsArr.map((topping)=> toppings.find((toppingItem)=> toppingItem.topping === topping))
                console.log(extraToppings)
                // now clean this and find a way to update the store
                if(pizzaChoice){
                    pizzaChoice.size = values.size
                    dispatch(addOrder(pizzaChoice))}
                    extraToppings.forEach(extraTopping => {
                        if(isTopping(extraTopping)){
                            dispatch(addOrder(extraTopping))
                        }
                    })
            }
        }
         className='rounded-md  p-2 right-12 bottom-0 bg-naplesYellow hover:bg-naplesYellowDark'>Add Order</button>
       
        
        </div></AnimatedMenuWrapper>}
        {activeSection === "salads" && <Salads />}
        {activeSection === "wine" && <Wine />}
        {activeSection === "beverages" && <Beverages />}
        </div>
        </div>
       <OrderSummary />

    </form>
  )
}

export default OrderPage