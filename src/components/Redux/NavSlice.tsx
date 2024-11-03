import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
    name: "nav",
    initialState: {
        cartOpen: false
    },
    reducers: {
        toggleCartOpen: (state) => {
            state.cartOpen =!state.cartOpen;
        },
        closeCart: (state) => {
            state.cartOpen = false;
        }
    }
})

export const { toggleCartOpen, closeCart} = NavSlice.actions;

export default NavSlice.reducer;