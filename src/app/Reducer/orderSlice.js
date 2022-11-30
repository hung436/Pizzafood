// import { store } from "../Store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderApi from "../../api/Order";

export const getOrderList = createAsyncThunk(
  "/getorderlist",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await orderApi.getOrderList();

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
  isLoading: false,
  orders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrderList.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getOrderList.fulfilled]: (state, { payload }) => {
      state.categories = payload.data;
      state.isLoading = false;
    },
    [getOrderList.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

// export const {} = productSlice.actions;
export default orderSlice.reducer;
