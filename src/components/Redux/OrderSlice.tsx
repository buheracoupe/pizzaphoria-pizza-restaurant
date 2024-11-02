import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface Order {
    id?: string;
    name?: string;
    topping?: string;
    price: number;
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
    }



})

export const {addOrder} = OrderSlice.actions;

export default OrderSlice.reducer;