import axios from 'axios';

/**
 * @description This is a axios instance with base url form environement variable
 * we define a response interceptor for formating data
 *
 * ```
 * import axios from "axios";
 *
 * const api = axios.create({
 * baseUrl: process.env.REACT_APP_API_BASE_URL
 * })
 *
 * api.interceptor.response.use((value) => value.data?.data ? value.data.data : value.data)
 * ```
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.response.use((value) =>
  value.data?.data ? value.data.data : value.data
);

export default api;
