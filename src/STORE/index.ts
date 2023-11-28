import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todos";
import postsReducer from "./slices/posts";

const rootReducer = combineReducers({ todosReducer, posts: postsReducer });
const a = "test";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
