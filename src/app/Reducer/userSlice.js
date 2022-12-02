// import { store } from "../Store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/User";

export const getUserList = createAsyncThunk(
  "/getuserlist",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await userApi.getUserList();

      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const getUserById = createAsyncThunk(
  "/getuserbyid",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userApi.getUserById(payload);

      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateUser = createAsyncThunk(
  "/updateUser",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userApi.updateUser(payload);

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
  users: [],
  userSelected: null,
  totalUser: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserList.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getUserList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.totalUser = payload?.totalCountItem;
      state.users = payload;
    },
    [getUserList.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [getUserById.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getUserById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.userSelected = payload;
    },
    [getUserById.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [updateUser.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
