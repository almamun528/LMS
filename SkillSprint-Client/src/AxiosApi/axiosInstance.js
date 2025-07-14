import axios from "axios";

const axiosInstance = axios.create({
  baseURL: " https://lms-backend-mu-lac.vercel.app",
  // local host ; http://localhost:3000/
  // vercel backend Links

  // https://lms-backend-mu-lac.vercel.app/
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
