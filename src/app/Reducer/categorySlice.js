// import { store } from "../Store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../../api/Category";

import { StorageKeys } from "../../constant/storage-key";

export const getCategoryList = createAsyncThunk(
  "/getcategorylist",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await categoryApi.getCategoryList();

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
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    // [getProductList.pending]: (state, { payload }) => {
    //
    //   // state.error = null;
    // },
    [getCategoryList.fulfilled]: (state, { payload }) => {
      state.categories = payload.data;
    },
  },
});

// export const {} = productSlice.actions;
export default categorySlice.reducer;
