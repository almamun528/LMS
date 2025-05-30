import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authSlice";
import { coursesReducer } from "./Course/courseSlice";
import { blogReducer } from "./Blog/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    blogs: blogReducer,
  },
});
export default store;
