import { inishialPostsState } from "../state";
import { IPosts } from "./types";

export const postsReducer = (
  state: IPosts = inishialPostsState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        posts: action.payload,
      };
    case "FETCHED_DATA":
      return state;
    default:
      return state;
  }
};
