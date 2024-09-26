// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
import {thunk} from "redux-thunk";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(thunk);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
