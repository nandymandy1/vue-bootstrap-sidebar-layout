import ax from "axios";
import { baseURL } from "../Constants";

const api = ax.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    // To Extend the time of the session
    await sessionStorage.setItem("loginTime", new Date());
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
