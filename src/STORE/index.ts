import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/posts";
import todosReducer from "./slices/todos";

const rootReducer = { todosReducer, posts: postsReducer };

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
