import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/products/ProductSlice";
import cartReducer from "../features/cart/cartSlice"
const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: ProductReducer,
    }
});

export default store;