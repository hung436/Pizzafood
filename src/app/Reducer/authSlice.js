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
  const data = await login(payload);

  if (data.success) {
    console.log(data.data.refreshToken);
    await localStorage.setItem(StorageKeys.ACCESSTOKEN, data.data.accessToken);
    await localStorage.setItem(
      StorageKeys.REFRESHTOKEN,
      data.data.refreshToken
    );
  }
  return data;
});

const initialState = {
  loading: false,
  isLogin: false,
  isAdmin: false,
  userInfo: null,
  userToken: localStorage.getItem(StorageKeys.ACCESSTOKEN)
    ? localStorage.getItem("userToken")
    : null,
  // current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem(StorageKeys.ACCESSTOKEN);
      state.loading = false;
      state.userToken = null;
      // localStorage.removeItem(StorageKeys.USER);
    },
    change: (state, action) => {
      state.current = action.payload;
      localStorage.setItem(StorageKeys.USER, JSON.stringify(action.payload));
    },
    refreshToken: (state, action) => {
      // alert(action.payload);
      state.current.access_token = action.payload;
      localStorage.setItem(StorageKeys.USER, JSON.stringify(action.payload));
    },

    //
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
      // state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { Name, email, RoleId, avatar, phone } = payload.data;
      const user = {
        Name: Name,
        RoleId: RoleId,
        Avatar: avatar,
        Email: email,
        Phone: phone,
      };
      state.loading = false;
      state.userInfo = user;

      // if (action.payload.error === 0) {
      //   let user = {
      //     name: action.payload.username,
      //     id: action.payload.userID,
      //     access_token: action.payload.accessToken,
      //   };

      //   state.current = user;
      // }
    },
  },
});

export const { logout, change, refreshToken, addAddressId } = userSlice.actions;

export default userSlice.reducer;
