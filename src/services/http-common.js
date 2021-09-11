import { useContext } from "react";
import axios from "axios";
import { UserContext } from "../Store";

const axInstance = axios.create({
  // baseURL: "https://0mtu5.sse.codesandbox.io/",
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
  },
});

axInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    const [user, setUser] = useContext(UserContext);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 403) {
      console.log("before", user);
      setUser({ authed: false });
      console.log("after", user);
    }
    return Promise.reject(error);
  }
);

export default axInstance;
