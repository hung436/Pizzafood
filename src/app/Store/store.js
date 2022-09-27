import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducer/authSlice";
const rootReducer = {
  user: userReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
export const dispatch = store.dispatch;