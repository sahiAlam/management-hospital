import { createSlice } from "@reduxjs/toolkit";

export interface AuthType {
  loading: boolean;
  userInfo: {};
  error: Error | null;
}

const initialState: AuthType = {
  loading: false,
  userInfo: {},
  error: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    createAccountStart: (state, action) => {
      state.loading = true;
    },
    createAccountSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    createAccountFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    loginAccountStart: (state, action) => {
      state.loading = true;
    },
    loginAccountSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    loginAccountFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  createAccountStart,
  createAccountSuccess,
  createAccountFailure,
  loginAccountStart,
  loginAccountSuccess,
  loginAccountFailure,
} = authSlice.actions;

export default authSlice.reducer;
