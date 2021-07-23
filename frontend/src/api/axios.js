import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/v1/";
const headers = {};

// if (localStorage.Token) {
//   headers.Authorization = `Token ${localStorage.Token}`;
// }

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: headers,
});

export default axiosInstance;
