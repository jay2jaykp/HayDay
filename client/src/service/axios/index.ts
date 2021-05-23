import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:5000/hayday",
};

export const api: AxiosInstance = axios.create(axiosConfig);
