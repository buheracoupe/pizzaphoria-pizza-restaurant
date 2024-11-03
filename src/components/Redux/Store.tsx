import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./OrderSlice"
import navReducer from "./NavSlice"

const store = configureStore({
    reducer: {
        order: orderReducer,
        nav: navReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;