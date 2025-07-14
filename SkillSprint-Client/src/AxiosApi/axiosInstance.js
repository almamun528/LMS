import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lms-server-sepia-ten.vercel.app",
  // localhost --> http://localhost:3000
  
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  optionSuccessStatus: 200,
});

export default axiosInstance;
