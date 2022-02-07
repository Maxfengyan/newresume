import Axios from "axios";
// import app from "@/main.js";
// 创建axios
const service = Axios.create({
  baseURL: ".",
  withCredentials: true,
});

/* service.interceptors.request.use(
  (config) => {
    app.config.globalProperties.$loading.show("加载中...");
    config.headers["X-Token"] = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
); */

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
