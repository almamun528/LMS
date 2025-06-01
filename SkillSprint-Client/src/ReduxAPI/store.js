import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authSlice";
import { coursesReducer } from "./Course/courseSlice";
import { blogReducer } from "./Blog/blogSlice";
import { enrolledCoursesReducer } from "./EnrolledCourses/enrolledCourse";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    blogs: blogReducer,
    enrolledCourses: enrolledCoursesReducer,
  },
});
export default store;
