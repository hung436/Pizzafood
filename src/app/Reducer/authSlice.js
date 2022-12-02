import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  login,
  register,
  loginFB,
  getInforUser,
  refreshTK,
} from "../../api/Auth";
import { StorageKeys } from "../../constant/storage-key";

import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload) => {
    try {
      const data = await register(payload);

      if (data.success) {
        await localStorage.setItem(
          StorageKeys.ACCESSTOKEN,
          data.data.accessToken
        );
        toast.success("Đăng nhập thành công");
      } else toast.warn(data.message);
      return data;
    } catch (error) {
      toast.error(error.message);
    }
  }
);
export const loginUser = createAsyncThunk("auth/login", async (payload) => {
  try {
    const data = await login(payload);

    if (data.success) {
      await localStorage.setItem(
        StorageKeys.ACCESSTOKEN,
        data.data.accessToken
      );
      toast.success("Đăng nhập thành công");
    } else toast.warn(data.message);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
});
export const LoginFacebook = createAsyncThunk(
  "auth/loginfacebook",
  async (payload) => {
    const data = await loginFB(payload);

    if (data.success) {
      await localStorage.setItem(
        StorageKeys.ACCESSTOKEN,
        data.data.accessToken
      );
    }

    return data;
  }
);
export const getInfor = createAsyncThunk(
  "/getinfor",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getInforUser();

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
export const refresh = createAsyncThunk(
  "/refreshtoken",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await refreshTK();
      console.log("data refeh", data);
      await localStorage.setItem(
        StorageKeys.ACCESSTOKEN,
        data.data.accessToken
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
      state.isAdmin = false;
      state.isLogin = false;
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
      const { name, email, role, avartar, phone, address } = payload.data;
      const user = {
        Name: name,
        RoleId: role,
        Avatar: avartar,
        Email: email,
        Phone: phone,
        Address: address,
      };
      state.isLogin = true;
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
      state.loading = false;
      const { name, email, role, avartar, phone, address } = payload;
      const user = {
        Name: name,
        RoleId: role,
        Avatar: avartar,
        Email: email,
        Phone: phone,
        Address: address,
      };
      state.isLogin = true;

      if (role === "admin") {
        state.isAdmin = true;
      }

      state.userInfo = user;
    },
    [getInfor.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isAdmin = false;
      state.isLogin = false;
      state.userInfo = null;
    },
    [refresh.fulfilled]: (state, { payload }) => {
      state.userToken = payload;
    },
  },
});

export const { logout, change, refreshToken, addAddressId, getUserSuccess } =
  userSlice.actions;
export default userSlice.reducer;
