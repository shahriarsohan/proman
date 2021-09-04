import axios from "axios";

const baseUrl =
  "http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/v1/";
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
