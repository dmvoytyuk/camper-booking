import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice.js";
// import { filterReducer } from "./filters/slice.js";
import { favoritesReducer } from "./favorites/slice.js";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: persistReducer(persistConfig, favoritesReducer),
    // filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
