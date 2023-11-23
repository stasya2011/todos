import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todos";
import postsReducer from "./slices/posts";

const rootReducer = { todosReducer, posts: postsReducer };

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
