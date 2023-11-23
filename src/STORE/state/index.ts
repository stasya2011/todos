import { ITask } from "../reducers/types";
import { IPosts } from "../reducers/types";

export const initialState: ITask[] = [];
export const initialPostsState: IPosts = {
  isError: false,
  isLoading: false,
  posts: [],
};
