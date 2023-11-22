import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./reducers/todos";
import { postsReducer } from "./reducers/posts";

const rootReducer = { todosReducer, posts: postsReducer };

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
