// import { store } from "../Store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getProvinceList = createAsyncThunk(
  "/getlist",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
        "",
        { headers: { token: "7acd4626-47f8-11ed-8636-7617f3863de9" } }
      );

      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const getDistrictList = createAsyncThunk(
  "/getdistrictlist",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
        { province_id: parseInt(payload) },
        { headers: { token: "7acd4626-47f8-11ed-8636-7617f3863de9" } }
      );

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
  provinces: [],
  districts: [],
  provinceSelected: null,
  districtsSelected: null,
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: {
    // [getProductList.pending]: (state, { payload }) => {
    //
    //   // state.error = null;
    // },
    [getProvinceList.fulfilled]: (state, { payload }) => {
      state.provinces = payload.data;
    },
    [getDistrictList.fulfilled]: (state, { payload }) => {
      state.districts = payload.data;
    },
  },
});

// export const {} = productSlice.actions;
export default addressSlice.reducer;
