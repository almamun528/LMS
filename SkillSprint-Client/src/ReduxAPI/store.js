import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authSlice";
import { coursesReducer } from "./Course/CourseSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
  },
});
export default store;
