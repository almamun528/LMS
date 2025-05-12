import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../ReduxAPI/features/Auth/User/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
export default store;
