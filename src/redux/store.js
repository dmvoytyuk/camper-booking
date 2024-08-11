import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice.js";
// import { filterReducer } from "./filters/slice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    // filters: filterReducer,
  },
});
