import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lms-backend-mu-lac.vercel.app",
  // localhost --> http://localhost:3000
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
