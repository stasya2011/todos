import { ITask } from "../reducers/types";
import { IPosts } from "../reducers/types";

export const inishialState: ITask[] = [];
export const inishialPostsState: IPosts = {
  isError: false,
  isLoading: false,
  posts: [],
};
