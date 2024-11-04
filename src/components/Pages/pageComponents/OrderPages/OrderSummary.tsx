import React from 'react'
import { useMediaQuery } from 'usehooks-ts';
import { useTypedSelector } from '../../../Redux/hooks';
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from '../../../Redux/hooks';
import { removeOrder } from '../../../Redux/OrderSlice';

function OrderSummary() {
    const orders = useTypedSelector((state) => state.order.orders)
    const totalPrice = useTypedSelector((state) => state.order.totalPrice);
    const dispatch = useAppDispatch();
    const mobileDesign = useMediaQuery("(max-width: 768px)");
    const cartOpen = useTypedSelector((state) => state.nav.cartOpen)
let div1ClassName
let div2ClassName
// switch statement for mobliecart toggling
if(!mobileDesign){
    div1ClassName = "ordersummary sticky top-8 right-4 justify-between flex flex-col gap-6 font-Quicksand bg-slate-100 p-4 h-[500px] mb-8 rounded-md w-full text-slate-500 font-Flamenco text-center"
    div2ClassName = "ordersummary sticky top-8 right-4 justify-between flex flex-col gap-6 font-Quicksand bg-slate-100 p-4 h-[500px] mb-8 rounded-md w-full"
}else if(mobileDesign && cartOpen){
    div1ClassName = "ordersummary w-80 fixed top-16 right-4 justify-between flex flex-col gap-6 font-Quicksand bg-slate-100 p-4 h-[500px] mb-8 rounded-md w-full text-slate-500 font-Flamenco text-center"
    div2ClassName = "ordersummary w-80 fixed top-16 right-4 justify-between flex flex-col gap-6 font-Quicksand bg-slate-100 p-4 h-[500px] mb-8 rounded-md w-full"
}else{
    div1ClassName = "hidden"
    div2ClassName = "hidden"
 
}


  if (orders.length === 0) {
    return <div 
    onClick={(event) => event.stopPropagation()}
     className={div1ClassName}>No orders Yet, pick your scrumptulous combo!</div>
  }

  return (
  
    <div
    onClick={(event) => event.stopPropagation()}
     className={div2ClassName}>
        <div className="top-container">
    <h1 className='font-Flamenco font-semibold mb-5 text-2xl text-left'>Order Summary</h1>
    <div className="orders">
       {orders.map(order => {
        return (
            <div key={order.name} className="order-item flex justify-between items-center">
              <div className='flex gap-2'>
              <IoMdClose
              onClick={() => {
                 dispatch(removeOrder(order.name))
                 console.log(orders, order.name)
                }
                 }
              className='text-xl cursor-pointer text-gray-400'/>
              <p>{order.name} {order.size ? `(${order.size})` : ''}
              </p>
              </div>
              <p>${order.price}</p>
            </div>
        )
       })}
    </div>
    <div className="price flex font-semibold mt-2 justify-between items-center">
       <p>Total Price:</p>
       <p>${totalPrice.toFixed(2)}</p>
    </div>
    </div>
    {orders.length > 0 && <button className="checkout p-2 font-Flamenco bg-naplesYellow transition-all duration-200 hover:bg-naplesYellowDark">Place Order</button>}
   </div>
  )
}

export default OrderSummary