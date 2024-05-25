import { configureStore } from "@reduxjs/toolkit";
import allProductReducer from "./slices/allProductsSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    allProduct: allProductReducer,
    filter: filterReducer,
  },
});

export default store;
