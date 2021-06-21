import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/v1/";
const headers = {};

// if (localStorage.token) {
//   headers.Authorization = `Bearer ${localStorage.token}`;
// }

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: headers,
});

export default axiosInstance;
