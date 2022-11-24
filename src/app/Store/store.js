import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducer/authSlice";
import productReducer from "../Reducer/productSlice";
import categoryReducer from "../Reducer/categorySlice";
import cartReducer from "../Reducer/cartSlice";
import usersReducer from "../Reducer/userSlice";
const rootReducer = {
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  users: usersReducer,
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: true,
});
export const dispatch = store.dispatch;
