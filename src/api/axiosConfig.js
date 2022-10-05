import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_BE + "/api/v1",
  //   headers: { 'X-Custom-Header': 'foobar' },
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    const URLS = ["/getaddress"];
    const dynamicURL = ["/user/favorites/"];
    const dynamicURLNeedToken = dynamicURL.some((item) => {
      return config.url.includes(item);
    });
    if (URLS.includes(config.url) || dynamicURLNeedToken) {
      const token = localStorage.getItem("token");
      config.headers.authorization = token ? `Bearer ${token}` : "";
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

    if (status === 401 && !config._retry) {
      config._retry = true;
      try {
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
export default instance;
