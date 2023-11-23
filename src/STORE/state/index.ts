import { ITask } from "../types";
import { IPosts } from "../types";

export const initialState: ITask[] = [];
export const initialPostsState: IPosts = {
  isError: false,
  isLoading: false,
  posts: [],
};
