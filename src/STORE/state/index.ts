import { ITask } from "../reducers/types";
import { IPosts } from "../reducers/types";

export const initialState: ITask[] = [];
export const inishialPostsState: IPosts = {
  isError: false,
  isLoading: false,
  posts: [],
};
