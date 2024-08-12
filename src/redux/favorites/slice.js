import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      if (state.favorites.includes(action.payload.id)) {
        console.log("already favorites");
        state.favorites = state.favorites.filter(
          (favorite) => !favorite.includes(action.payload.id),
        );
      } else {
        state.favorites.push(action.payload.id);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
