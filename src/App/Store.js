import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/products/ProductSlice";
const store = configureStore({
    reducer:{
        products: ProductReducer,
    }
});

export default store;