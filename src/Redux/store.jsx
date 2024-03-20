import {configureStore} from "@reduxjs/toolkit"

import cartReducer from "./CartsSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store