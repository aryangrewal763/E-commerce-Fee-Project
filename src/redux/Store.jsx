import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./CartSlice";
import logSlice from "./LogSlice"

export const store=configureStore({
    reducer:{
        cart:CartSlice.reducer,
        log:logSlice,
    },
})