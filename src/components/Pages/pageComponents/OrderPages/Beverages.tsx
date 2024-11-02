import React from 'react'
import { AnimatedMenuWrapper, Props } from './Salads'

const beverages = [
    {
        id: "beverage1",
        name: "Coke",
        price: 1.5,
    },
    {
        id: "beverage2",
        name: "Pepsi",
        price: 1.5,
    },
    {
        id: "beverage3",
        name: "Sprite",
        price: 1.5,
    },
    {
        id: "beverage4",
        name: "Fanta",
        price: 1.5,
    },
    {
        id: "beverage5",
        name: "Dr Pepper",
        price: 1.7,
    },
    {
        id: "beverage6",
        name: "Mountain Dew",
        price: 1.5,
    },
    {
        id: "beverage7",
        name: "7UP",
        price: 1.5,
    },
];

function Beverages({formFunctions}: Props) {
    const {reset, getValues, register} = formFunctions
  return (
    <div>
        <AnimatedMenuWrapper>
            
        </AnimatedMenuWrapper>
        </div>
  )
}

export default Beverages