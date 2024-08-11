import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations.js";

const initialState = {
  campers: null,
  isLoading: false,
  isError: false,
};

export const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state, _action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
      })
      .addCase(getCampers.rejected, (state, _action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const campersReducer = campersSlice.reducer;
