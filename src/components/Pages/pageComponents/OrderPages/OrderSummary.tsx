import React from 'react'
import { useTypedSelector } from '../../../Redux/hooks'

function OrderSummary() {
const orders = useTypedSelector((state) => state.order.orders)
const totalPrice = useTypedSelector((state) => state.order.totalPrice);

  if (orders.length === 0) {
    return <div className="text-center text-lg text-slate-500 bg-slate-100 p-4 h-80 rounded-md w-full font-Flamenco">No orders Yet, pick your scrumptulous combo!</div>
  }

  return (
  
    <div className="ordersummary relative font-Quicksand bg-slate-100 p-4 h-80 rounded-md w-full">
    <h1 className='font-Flamenco text-xl text-left'>Order Summary</h1>
    <div className="orders">
       {orders.map(order => {
        return (
            <div key={order.id} className="order-item flex justify-between items-center">
              <p>{order.topping}{order.name}</p>
              <p>${order.price}</p>
            </div>
        )
       })}
    </div>
    <div className="price flex font-semibold mt-2 justify-between items-center">
       <p>Total Price:</p>
       <p>${totalPrice.toFixed(2)}</p>
    </div>
    {orders.length > 0 && <button className="checkout p-2 font-Flamenco absolute bottom-4 left-1/2 -translate-x-1/2 bg-naplesYellow transition-all duration-200 hover:bg-naplesYellowDark">Place Order</button>}
   </div>
  )
}

export default OrderSummary