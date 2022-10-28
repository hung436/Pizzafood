import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducer/authSlice";
const rootReducer = {
  user: userReducer,
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
