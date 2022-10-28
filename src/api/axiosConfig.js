import axios from "axios";
import { StorageKeys } from "../constant/storage-key";
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
    const URLS = ["/users/infor"];
    // const dynamicURL = ["/user/favorites/"];
    // const dynamicURLNeedToken = dynamicURL.some((item) => {
    //   return config.url.includes(item);
    // });
    if (URLS.includes(config.url)) {
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
    //     const { config, status } = error.response;
    // console.log(error)_;
    //     if (status === 401 && !config._retry) {
    //       config._retry = true;
    //       try {
    //       } catch (err) {
    //         return Promise.reject(err);
    //       }
    //     }

    return Promise.reject(error);
  }
);
export default instance;
