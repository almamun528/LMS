import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dummyCourses } from "../../assets/assets";

// For later: Async request to backend
export const fetchUserEnrollment = createAsyncThunk(
  "enrolledCourses/fetchUserEnrollment",
  async () => {
    // const response = await fetch("/api/enrollment-status");
    // const data = await response.json();
    // return data.enrolledCourses;
    return dummyCourses;
  }
);

// Slice
const enrolledSlice = createSlice({
  name: "enrolledCourses",
  initialState: {
    enrolledCourses: [],
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserEnrollment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserEnrollment.fulfilled, (state, action) => {
        state.loading = false;
        state.enrolledCourses = action.payload;
      })
      .addCase(fetchUserEnrollment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const enrolledCoursesReducer = enrolledSlice.reducer;
