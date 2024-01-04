import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/api/apiSlice";
import authSliceReducer from "./services/auth/authSlice";
import counterSlice from "./services/counter/counterSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    counter: counterSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
