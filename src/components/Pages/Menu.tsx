import React from 'react'
import { useState } from 'react'

type Options = "pizza" |"salad" | "wine"

function Menu() {
const [showingMenu, setShowingMenu] = useState<Options>("pizza")

  function changeMenu(menu: Options){
 setShowingMenu(menu)
  }

  return (
<div className="menu w-full flex flex-col items-center relative">
<div className="menubar flex gap-8 cursor-pointer font-Flamenco text-2xl">
  <h1
  onClick={()=> changeMenu("pizza")}
  className={showingMenu === "pizza"?
   "hover:text-naplesYellowDark hover:-translate-y-1 transition-all duration-300 font-bold cursor-pointer" :
    "hover:text-naplesYellowDark hover:-translate-y-1 transition-all duration-300 cursor-pointer"}>Pizza Palace</h1>
  <h1
  onClick={()=> changeMenu("salad")}
  className={showingMenu === "salad"?
   "hover:text-naplesYellowDark hover:-translate-y-1 transition-all duration-300 font-bold cursor-pointer" :
    "hover:text-naplesYellowDark hover:-translate-y-1 transition-all duration-300 cursor-pointer" }>Salad Bar</h1>
  <h1
  onClick={()=> changeMenu("wine")}
  className={showingMenu === "wine"?
   "hover:text-naplesYellowDark hover:-translate-y-1 transition-all duration-300 font-bold cursor-pointer" :
    "hover:text-naplesYellowDark hover:-translate-y-1 transition-all duration-300 cursor-pointer"}>Wine</h1>
</div>
<div className="menudisplay transition-all duration-300 ease-in-out">
  {showingMenu === "pizza"? <PizzaMenu /> : showingMenu === "salad"? <SaladMenu /> : <WineMenu />}
</div>
</div>
  )
}

export default Menu


 export function PizzaMenu() {

  return(
    <div className="pizzaMenu">
      <div className="title font-Quicksand text-center text-lg m-4 flex flex-col gap-4 max-w-[800px]">
        <p>All our pizzas naturally leavened using heritage turkey wheat from our friends over at Heartland Mill.
           We are a cross between Neapolitan/Hearth Baked pizzas. Our pies are about 11inches and will have beautiful char spots from our wood oven.
           All ingredients are sourced from millers, salami makers, cheese mongers and local produce farmers. </p>
            <p>We offer a variety of sizes: Small (12 inches), Medium (14 inches), and Large (16 inches). </p>
            <p>We also offer a variety of crusts: Thin Crust, Thick Crust, and Deep Dish. </p>
            <p>Thank you for your support and hope to see you soon at <span className='font-Flamenco font-bold text-2xl'>Pizzaphoria!</span></p>
            <p>Head Chef, Charmaine Chanza</p>
      <div className="pizzas grid divide-x-2 divide-dashed divide-orange-300 grid-cols-2">
        <div className="left flex flex-col gap-5 p-4">
          <div className="pizza1">
            <h2 className="font-Flamenco font-semibold text-2xl">Classic Margherita</h2>
            <p>Our famous pizza with fresh mozzarella, basil, olive oil, and extra cheese.</p>
            <p className='font-semibold'> $15.99</p>
          </div>
          <div className="pizza2">
            <h2 className="font-Flamenco font-semibold text-2xl">Straciattella</h2>
            <p>Mortadella, tomato estratto, shaved garlic & finished with our pulled stracciatella</p>
            <p className='font-semibold'> $17.20</p>
          </div>
          <div className="pizza3">
            <h2 className="font-Flamenco font-semibold text-2xl">Mushroom Risotto</h2>
            <p>Our homemade risotto with fresh mozzarella, basil, olive oil, mushrooms, and extra cheese.</p>
            <p className='font-semibold'> $18.65</p>
          </div>
          <div className="pizza4">
            <h2 className="font-Flamenco font-semibold text-2xl">Pepperoni</h2>
            <p>pepperoni, mozzarella, marinara & flowering oregano</p>
            <p className='font-semibold'> $16.99</p>
            </div>
            <div className="pizza5">
            <h2 className="font-Flamenco font-semibold text-2xl">La Diavola</h2>
            <p>calabrese sausage, soppressata, calabrian chilies marinara & mozzarella</p>      
           <p className='font-semibold'> $18</p>
            </div>
        </div>
        <div className="right flex flex-col gap-5 p-4">
        <div className="pizza5">
            <h2 className="font-Flamenco font-semibold text-2xl">Lorraine</h2>
            <p>meatball, ricotta, calabrian chilies, marinara & mozz.</p>      
           <p className='font-semibold'> $16.50</p>
            </div>
            <div className="pizza5">
            <h2 className="font-Flamenco font-semibold text-2xl">Quattro Formaggi</h2>
            <p>[white pie] four cheeses & guanciale</p>      
           <p className='font-semibold'> $16</p>
            </div>
            <div className="pizza5">
            <h2 className="font-Flamenco font-semibold text-2xl">Calzone</h2>
            <p>[for two] salumi, meatball, calabrian chilies, ricotta, mozzarella & marinara</p>      
           <p className='font-semibold'> $15</p>
            </div>
            <div className="pizza5">
            <h2 className="font-Flamenco font-semibold text-2xl">Market Pizza</h2>
            <p>Storey Farms Duck Confit, Chiogga di Marina Pumpkin, Maitake mushrooms & black peppers creme fraiche.</p>      
           <p className='font-semibold'> $18</p>
            </div>
            <div className="pizza5">
            <h2 className="font-Flamenco font-semibold text-2xl">Pizzazzo</h2>
            <p>Prosciutto, meatball, mozzarella, basil, olive oil, garlic, rosemary, thyme & oregano</p>      
           <p className='font-semibold'> $18</p>
           </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export function SaladMenu(){
  return(
    <div className="saladMenu font-Quicksand text-center text-lg m-4 flex flex-col gap-4 max-w-[800px] divide-y-2 divide-orange-300 divide-dotted">
      <div className="salad1 mt-4 p-3">
        <h2 className="font-Flamenco font-semibold text-2xl">Fresh Basil Salad</h2>
        <p>Cucumber, cherry tomatoes, basil, olive oil, corn, bell peppers, fresh parsley, and cherry tomatoes</p>
        <p>Suggested dressing: Creamy Bleu Cheese</p>
        <p className='font-semibold'> $7</p>
    </div>
      <div className="salad2 mt-4 p-3">
        <h2 className="font-Flamenco font-semibold text-2xl">Classic Caesar</h2>
        <p>crisp bread, sicilian olives & classic caesar dressing</p>
        <p>Suggested dressing: green goddess</p>
        <p className='font-semibold'> $8</p>
        </div>
        <div className="salad3 mt-4 p-3">
        <h2 className="font-Flamenco font-semibold text-2xl">Veggie Fresh</h2>
        <p>supergreens lettuce blend, roasted turkey, roasted butternut squash, roasted brussels sprouts, smoky bacon, red grapes, feta cheese</p>
        <p>Suggested dressing: balsamic viniagrette</p>
        <p className='font-semibold'> $10</p>
        </div>
        <div className="salad4 mt-4 p-3">
        <h2 className="font-Flamenco font-semibold text-2xl">Veggie Delight</h2>
        <p>tomatoes, cucumber, red onion, roasted red peppers, spinach, cherry tomatoes, olives, basil, and fresh parsley</p>
        <p>Suggested dressing: basil pesto</p>
        <p className='font-semibold'>$8</p>
        </div>
      
    </div>
  )
}

export function WineMenu(){
  return(
    <div className="wineMenu">Wines</div>
  )
}