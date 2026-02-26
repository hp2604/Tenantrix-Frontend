import axios from "axios";
import { BASE_URL } from "../config";
import { getToken } from "./Token";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;