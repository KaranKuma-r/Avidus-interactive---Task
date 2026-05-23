import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user");

const token =
  localStorage.getItem("token");

const initialState = {
  user: user
    ? JSON.parse(user)
    : null,

  token: token || null,

  isLoading: false,

  isError: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    loginStart: (state) => {
      state.isLoading = true;

      state.isError = false;
    },

    loginSuccess: (
      state,
      action
    ) => {
      state.isLoading = false;

      state.user =
        action.payload.user;

      state.token =
        action.payload.token;

      localStorage.setItem(
        "user",
        JSON.stringify(
          action.payload.user
        )
      );

      localStorage.setItem(
        "token",
        action.payload.token
      );
    },

    loginFailure: (state) => {
      state.isLoading = false;

      state.isError = true;
    },

    logout: (state) => {
      state.user = null;

      state.token = null;

      localStorage.removeItem(
        "user"
      );

      localStorage.removeItem(
        "token"
      );
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;