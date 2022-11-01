// import { store } from "../Store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import productApi from "../../api/Product";
import { StorageKeys } from "../../constant/storage-key";

export const getProductList = createAsyncThunk(
  "/getproductlist",
  async (payload, { rejectWithValue }) => {
    try {
      // console.log(payload);
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
    // [getProductList.pending]: (state, { payload }) => {
    //
    //   // state.error = null;
    // },
    [getProductList.fulfilled]: (state, { payload }) => {
      state.products = payload.data;
    },
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
