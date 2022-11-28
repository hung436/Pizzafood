// import { store } from "../Store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import cartApi from "../../api/Cart";
import { StorageKeys } from "../../constant/storage-key";

// export const getCartList = createAsyncThunk(
//   "/getcartlist",
//   async (payload, { rejectWithValue }) => {
//     try {
//       // console.log(payload);
//       const data = await cartApi.getCartList();
//       console.log("data", data);
//       return data;
//     } catch (error) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const getCartNameById = (id) => `cart-${id}`;
const initialState = {
  carts: JSON.parse(localStorage.getItem("cart")) || [],
  totalItems: 0,
  totalCarts: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    changeUserId(state, action) {
      state.userId = action.payload;
      state.cartItems = JSON.parse(localStorage.getItem("cart"));
    },
    addToCart(state, action) {
      const newItem = action.payload;

      if (!state.carts) state.cartItems = [];
      const index = state.carts.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      // if avaiable

      if (index >= 0) state.carts[index].quantity += newItem.quantity;
      else {
        state.carts.push(newItem);
        state.totalItems++;
        state.totalCarts = state.totalCarts + newItem.quantity * newItem.price;
      }

      localStorage.setItem("cart", JSON.stringify(state.carts));
    },
    changeToCart(state, action) {
      const { id, size, quantity } = action.payload;
      const index = state.carts.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (index >= 0) state.carts[index].quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(state.carts));
    },
    deleteItemCart(state, action) {
      const { id, size } = action.payload;
      console.log(action.payload);
      state.carts = state.carts.filter(
        (item) => item.id != id || item.size != size
      );
      localStorage.setItem("cart", JSON.stringify(state.carts));
    },
    logoutCart: (state) => {
      state.userId = null;
      state.cartItems = null;
    },
    paymentSuccess: (state) => {
      state.carts = [];

      localStorage.removeItem("cart");
    },
  },

  extraReducers: {
    // [getCartList.pending]: (state, { payload }) => {
    //
    //   // state.error = null;
    // },
    // [getCartList.fulfilled]: (state, { payload }) => {
    //   state.carts = payload.data;
    // },
  },
});

export const { addToCart, deleteItemCart, changeToCart, paymentSuccess } =
  cartSlice.actions;
export default cartSlice.reducer;
