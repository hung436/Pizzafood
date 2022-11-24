// import { store } from "../Store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
export const createProduct = createAsyncThunk(
  "/createProduct",
  async (payload, { rejectWithValue }) => {
    try {
      // console.log(payload);
      const data = await productApi.createProduct(payload);
      console.log("data create", data);
      if (data.success) {
        toast.success("ADD success");
      } else {
        toast.warning(data.message);
      }

      return data;
    } catch (error) {
      toast.error(error.message);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  isLoading: false,
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductList.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getProductList.fulfilled]: (state, { payload }) => {
      state.products = payload.data;
      state.isLoading = false;
    },
    [getProductList.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
