import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialPostsState } from "../state";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (page: number = 1) => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=9&_page=${page}`
    );
    return await data.json();
  }
);
//
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = postsSlice;
export default reducer;
export const { setIsError, setIsLoading } = actions;
