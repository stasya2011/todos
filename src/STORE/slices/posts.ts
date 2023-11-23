import { createSlice } from "@reduxjs/toolkit";
import { initialPostsState } from "../state";

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
      state.isError = false;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
    setIsFeatching: (state, action) => {
      state.posts = action.payload;
    },
  },
});

const { reducer, actions } = postsSlice;
export default reducer;
export const { setIsError, setIsLoading, setIsFeatching } = actions;
