import axios from "axios";

const baseUrl = "http://192.168.0.8:8000/api/v1/";
const headers = {};

// if (localStorage.Token) {
//   headers.Authorization = `Token ${localStorage.Token}`;
// }

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: headers,
});

export default axiosInstance;
