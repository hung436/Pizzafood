// import { refresh } from "../app/Reducer/authSlice";
import axios from "axios";
import { refresh } from "../app/Reducer/authSlice";

import { StorageKeys } from "../constant/storage-key";
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
});
instance.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    const URLS = ["/users/infor", "/users"];
    const dynamicURL = ["/users/findbyid/", "/product/"];
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
  function (error) {
    const { config, status } = error.response;
    // console.log(error);
    if (status === 401 && !config._retry) {
      config._retry = true;
      try {
        // store.dispatch(refresh());
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
export default instance;
