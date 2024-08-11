import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetCampers } from "../../api/api.js";

export const getCampers = createAsyncThunk(
  "campers/get",
  async (_, thunkApi) => {
    try {
      return await apiGetCampers();
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
