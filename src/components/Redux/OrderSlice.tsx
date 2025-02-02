import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface Order {
    id?: string;
    name: string;
    price: number;
    size?: string;
    // later fix the order arrays to be consistent, have an id, name and price.
}


interface State {
    orders: Order[];
    totalPrice: number;
}

const initialState: State = {
    orders: [],
    totalPrice: 0
}

const OrderSlice = createSlice({
    name: "Order",
    initialState,
    reducers: {
       addOrder: (state, action: PayloadAction<Order>) => {
        state.orders.push(action.payload)
        state.totalPrice += action.payload.price
       },
       removeOrder: (state, action: PayloadAction<string>) => {
       const orderToRemove = state.orders.findIndex((order: Order) => order.name === action.payload)
       if(orderToRemove > -1){
           state.totalPrice -= state.orders[orderToRemove].price
        state.orders.splice(orderToRemove, 1)
       }
    },
}



})

export const {addOrder, removeOrder} = OrderSlice.actions;

export default OrderSlice.reducer;