import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducer/authSlice";
import productReducer from "../Reducer/productSlice";
import categoryReducer from "../Reducer/categorySlice";
import cartReducer from "../Reducer/cartSlice";
import usersReducer from "../Reducer/userSlice";
import orderReducer from "../Reducer/orderSlice";
import addressReducer from "../Reducer/addressSlice";
const rootReducer = {
  auth: userReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  users: usersReducer,
  order: orderReducer,
  address: addressReducer,
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});
export const dispatch = store.dispatch;
