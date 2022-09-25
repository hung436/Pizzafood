import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register, loginFB } from "../../api/Auth";
import { StorageKeys } from "../../constant/storage-key";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload) => {
    const data = await register(payload);
    return data;
  }
);
export const LoginFacebook = createAsyncThunk(
  "/loginFacebook",
  async (payload) => {
    let data = await loginFB(payload);
    console.log("data", data);
    return data;
  }
);
export const loginUser = createAsyncThunk("/login", async (payload) => {
  console.log(payload);
  const data = await login(payload);

  if (data.error === 0) {
    const user = {
      name: data.username,
      id: data.userID,
      access_token: data.accessToken,
      addressId: null,
      refreshToken: data.refreshToken,
    };
    //save data to local storage
    // await localStorage.setItem(StorageKeys.TOKEN, data.accessToken);
    // await localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
  }
  return data;
});

const initialState = {
  isLogin: false,
  current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.current = null;
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
    },
    change: (state, action) => {
      state.current = action.payload;
      localStorage.setItem(StorageKeys.USER, JSON.stringify(action.payload));
    },
    refreshToken: (state, action) => {
      alert(action.payload);
      state.current.access_token = action.payload;
      localStorage.setItem(StorageKeys.USER, JSON.stringify(action.payload));
    },
    //
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      if (action.payload.error === 0) {
        let user = {
          name: action.payload.username,
          id: action.payload.userID,
          access_token: action.payload.accessToken,
        };

        state.current = user;
      }
    },
  },
});

export const { logout, change, refreshToken, addAddressId } = userSlice.actions;

export default userSlice.reducer;
