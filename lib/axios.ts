import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API,
});

export default axiosInstance;
