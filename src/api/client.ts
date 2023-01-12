import axios from "axios";
import { BASE_URL } from "../constants/api";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken && config.headers) {
    // config.headers["Authorization"] = accessToken;
    config.headers = {
        Authorization : `${accessToken}`
    }
  }
  return config;
},
(err)=>{
    localStorage.clear()
    alert("세션이 만료되었습니다. 다시 로그인 해주세요.")
}
);
