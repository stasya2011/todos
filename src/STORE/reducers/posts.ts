import { initialPostsState } from "../state";
import { IPosts } from "./types";

export const postsReducer = (
  state: IPosts = initialPostsState,
  action: any
): IPosts => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return { ...state, isError: false, isLoading: action.payload };
    case "FETCHING_DATA":
      return {
        ...state,
        posts: action.payload,
      };
    case "SET_IS_ERROR":
      return { ...state, isLoading: false, isError: action.payload };
    default:
      return state;
  }
};
