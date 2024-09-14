import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (_, thunkAPI) => {}
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {}
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (contactId, thunkAPI) => {}
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (contactId, thunkAPI) => {}
);
