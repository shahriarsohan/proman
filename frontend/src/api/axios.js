import axios from "axios";

const baseUrl = "https://proman.com.bd/api/v1/";
const headers = {};

const ISSERVER = typeof window === "undefined";
if (!ISSERVER) {
  //console.log("ISSERVER");
  var token = localStorage.getItem("access_token");
}

console.log("token", token);
console.log("headers", headers);

if (token) {
  headers.Authorization = `Token ${token}`;
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: headers,
});

export default axiosInstance;
