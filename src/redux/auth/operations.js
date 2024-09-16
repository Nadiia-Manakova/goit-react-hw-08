import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log("Auth Header Set:", axios.defaults.headers.common.Authorization);
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
  console.log(
    "Auth Header Cleared:",
    axios.defaults.headers.common.Authorization
  );
};

export const saveToken = (token) => {
  localStorage.setItem("authToken", token);
};

export const clearToken = () => {
  localStorage.removeItem("authToken");
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      saveToken(res.data.token);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      saveToken(res.data.token);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");

    clearAuthHeader();
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data.message || error.message
    );
  }
});

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken =
//       state.auth.token || localStorage.getItem("authToken");

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue("Unable to fetch user");
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const res = await axios.get("/users/me");
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken =
      state.auth.token || localStorage.getItem("authToken");

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/me");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
