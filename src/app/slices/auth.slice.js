import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTHAPI } from "../api/auth.api";

export const getAdmin = createAsyncThunk("admin/getAdmin", async () => {
  const response = await AUTHAPI.getAdmin();
  return response.data;
});

export const register = createAsyncThunk("admin/register", async (admin) => {
  const response = await AUTHAPI.register(admin);
  return response.data;
});

export const login = createAsyncThunk(
  "admin/login",
  async (userCredentials) => {
    const response = await AUTHAPI.login(userCredentials);
    return response.data;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: null,
    loginStatus: false,
    status: "success",
  },
  reducers: {
    logout: (state) => {
      window.location.href = "/signin";
      localStorage.removeItem("x-auth-token");
      state.admin = null;
      state.loginStatus = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAdmin.fulfilled, (state, action) => {
      state.admin = action.payload;
      state.loginStatus = true;
      state.status = "success";
    });
    builder.addCase(register.fulfilled, (state, action) => {
        state.loginStatus = true;
        localStorage.setItem('x-auth-token', action.payload.token);
        window.location.href = '/';
    });
    builder.addCase(login.fulfilled, (state, action) => {
        state.loginStatus = true;
        localStorage.setItem('x-auth-token', action.payload.token);
        window.location.href = '/';
    });
  },
});

export const {logout} = adminSlice.actions;

export default adminSlice.reducer;
