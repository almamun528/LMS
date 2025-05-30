import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyCourses } from "../../assets/assets";

// function for fetch course data
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    return dummyCourses;
  }
);
// function to calculate average rating of course.
export const calculateRating = (course) => {
  if (course.courseRatings.length === 0) {
    return 0;
  }
  let totalRating = 0;
  course.courseRatings.forEach((rating) => {
    totalRating += rating.rating;
  });
  return totalRating / course.courseRatings.length;
};
// function to calculate chapter time
// const calculateChapterTime=(chapter)=>{
//   let time =0;
//   chapter.chapterContent.map()
// }
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
