// import { store } from "../Store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import productApi from "../../api/Product";
import { StorageKeys } from "../../constant/storage-key";
import { useDispatch } from "react-redux";

export const getProductList = createAsyncThunk(
  "/getproductlist",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);
      const data = await productApi.getProductList();
      console.log("data", data);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductList.pending]: (state) => {
      state.loading = true;
      // state.error = null;
    },
    [getProductList.fulfilled]: (state, { payload }) => {
      const { name, email, role, avartar } = payload.data;
      const user = {
        Name: name,
        RoleId: role,
        Avatar: avartar,
        Email: email,
      };
      state.loading = false;
      state.userInfo = user;
    },
  },
});

export const { logout, change, refreshToken, addAddressId, getUserSuccess } =
  productSlice.actions;
export default productSlice.reducer;
