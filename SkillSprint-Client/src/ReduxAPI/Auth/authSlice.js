import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {app} from '../../Firebase/firebase.config'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider(); //for google login

//! ========== Thunks ========== //

// Register user with email and password
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  }
);
// Login user with email and password
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  }
);
// Login user with google account
export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
});

// Logout user
export const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
  await signOut(auth);
});

//! ========== Slice ========== //
//========= define the user-state ===========//
const initialState = {
  user: null,
  loading: false,
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // registration
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //   google Login
      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Log Out user

      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
      });
  },
});
// Export actions and reducer
export const { setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
