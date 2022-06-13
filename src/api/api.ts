import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.response.use((value) =>
  value.data?.data ? value.data.data : value.data
);

export default api;
