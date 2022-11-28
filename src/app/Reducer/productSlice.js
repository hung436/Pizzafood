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
      console.log(payload);
      const data = await productApi.getProductList(payload);
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
        throw Error(data.message);
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
export const updateProduct = createAsyncThunk(
  "/updateproduct",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await productApi.updateProduct(payload.id, payload.data);
      console.log("data create", data);
      if (data.success) {
        toast.success("Cập nhật thành công");
      } else {
        toast.warning(data.message);
        throw Error(data.message);
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

export const deleteProduct = createAsyncThunk(
  "/deleteproduct",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await productApi.deleteProduct(payload);
      console.log("data create", data);
      if (data.success) {
        toast.success("Xóa thành công");
      } else {
        toast.warning(data.message);
        throw Error(data.message);
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
export const SearchResult = createAsyncThunk(
  "/seachproduct",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await productApi.getProductList({ searchText: payload });
      console.log("data create", data);
      if (data.success) {
      } else {
        toast.warning(data.message);
        throw Error(data.message);
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
  searchResult: [],
  totalProducts: 0,
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
      state.totalProducts = payload?.totalCountItem;
    },
    [getProductList.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [SearchResult.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [SearchResult.fulfilled]: (state, { payload }) => {
      state.searchResult = payload.data;
      state.isLoading = false;
    },
    [SearchResult.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
