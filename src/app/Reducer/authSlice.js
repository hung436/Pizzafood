// import { store } from "../Store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { login, register, loginFB, getInforUser } from "../../api/Auth";
import { StorageKeys } from "../../constant/storage-key";
import { useDispatch } from "react-redux";
export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload) => {
    const data = await register(payload);
    return data;
  }
);

export const loginUser = createAsyncThunk("auth/login", async (payload) => {
  const data = await login(payload);

  if (data.success) {
    await localStorage.setItem(StorageKeys.ACCESSTOKEN, data.data.accessToken);
  }

  return data;
});
export const LoginFacebook = createAsyncThunk(
  "auth/loginfacebook",
  async (payload) => {
    const data = await loginFB(payload);
    console.log("data fb lg", data);
    if (data.success) {
      await localStorage.setItem(
        StorageKeys.ACCESSTOKEN,
        data.data.accessToken
      );
    }
    console.log(data);
    return data;
  }
);
export const getInfor = createAsyncThunk(
  "/getinfor",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getInforUser();
      console.log("data", data);
      return data;
      // const dispatch = useDispatch();
      // const { name, email, role, avartar } = data;

      // userSlice.actions.getUserSuccess("HUNG");
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
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
    getUserSuccess: (state, action) => {
      console.log("payload", action.payload);
      state.userInfo = action.payload;
      // localStorage.setItem(StorageKeys.USER, JSON.stringify(action.payload));
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
      const { name, email, role, avartar } = payload.data;
      const user = {
        Name: name,
        RoleId: role,
        Avatar: avartar,
        Email: email,
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
    [LoginFacebook.pending]: (state) => {
      state.loading = true;
    },
    [LoginFacebook.fulfilled]: (state, { payload }) => {
      const { name, email, role, avartar } = payload.data;
      const user = {
        Name: name,
        RoleId: role,
        Avatar: avartar,
        Email: email,
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
    [getInfor.pending]: (state) => {
      state.loading = true;
    },
    [getInfor.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.userInfo = payload;
    },
  },
});

export const { logout, change, refreshToken, addAddressId, getUserSuccess } =
  userSlice.actions;
export default userSlice.reducer;
