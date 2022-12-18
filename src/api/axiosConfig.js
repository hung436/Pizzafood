// import { refresh } from "../app/Reducer/authSlice";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { getInfor, refresh } from "../app/Reducer/authSlice";

import { StorageKeys } from "../constant/storage-key";
import { getInforUser } from "./Auth";
let store;
export const injectStore = (_store) => {
  store = _store;
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_BE,
  //   headers: { 'X-Custom-Header': 'foobar' },
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
instance.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    const URLS = [
      "/users/infor",
      "/users",
      "/users/update",
      "/auth/logout",
      "/general",
    ];
    const dynamicURL = ["/users/findbyid/", "/product/", "/order"];
    const dynamicURLNeedToken = dynamicURL.some((item) => {
      return config.url.includes(item);
    });
    if (URLS.includes(config.url) || dynamicURLNeedToken) {
      const token = localStorage.getItem(StorageKeys.ACCESSTOKEN);
      config.headers.Authorization = token ? `Bearer ${token}` : "";
    }
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);

// Thêm một bộ đón chặn response

instance.interceptors.response.use(
  function (response) {
    const { data } = response;
    return data;
  },
  async (error) => {
    const originalRequest = error.config;
    const { config, status } = error?.response;
    axios.interceptors.response.eject();
    console.log("hung", originalRequest.url);
    if (status === 401 && originalRequest.url === "/auth/refresh") {
      return Promise.reject(error);
    }

    if (status === 401 && (!config._retry || config._retry !== true)) {
      config._retry = true;

      return store
        .dispatch(refresh())
        .then((response) => {
          console.log("payload", response);
          if (response.payload.success) store.dispatch(getInfor());
          return Promise.reject(error);
        })
        .catch((error2) => {
          console.log("error2", error2);
          return Promise.reject(error2);
        });
    }
    return Promise.reject(error);
  }
);

export default instance;
