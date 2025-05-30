import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogPosts } from "../../assets/assets";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  return blogPosts;
});

 const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const blogReducer = blogSlice.reducer;
