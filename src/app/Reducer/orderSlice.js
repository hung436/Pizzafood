// import { store } from "../Store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderApi from "../../api/Order";

export const getOrderList = createAsyncThunk(
  "/getorderlist",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await orderApi.getOrderList(payload);

      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateStatus = createAsyncThunk(
  "/updateStatus",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await orderApi.updateStatus(payload.id, payload.data);

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
  totalOrders: 0,
  orderSelected: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderSelected(state, { payload }) {
      state.orderSelected = payload;
    },
  },
  extraReducers: {
    [getOrderList.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getOrderList.fulfilled]: (state, { payload }) => {
      state.orders = payload.data;
      state.isLoading = false;
    },
    [getOrderList.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [updateStatus.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [updateStatus.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [updateStatus.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const { getOrderSelected } = orderSlice.actions;
export default orderSlice.reducer;
