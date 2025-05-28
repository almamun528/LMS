import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyCourses } from "../../assets/assets";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    return dummyCourses;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const coursesReducer = coursesSlice.reducer;
