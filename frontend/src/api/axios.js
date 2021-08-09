import axios from "axios";

const baseUrl = "http://192.168.0.8:8000/api/v1/";
const headers = {};

const ISSERVER = typeof window === "undefined";
if (!ISSERVER) {
  var token = localStorage.getItem("access_token");
  if (token) {
    headers.Authorization = `Token ${token}`;
  }
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: headers,
});

export default axiosInstance;
