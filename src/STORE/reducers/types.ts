export interface ITask {
  id: string;
  text: string;
  completed: boolean;
  createdAt?: string;
  completedAt?: string;
}

export interface IAddTaskAction {
  type: Actions.CREATE_TASK;
  payload: IPayload;
}

export interface IDeleteTaskAction {
  type: Actions.DELETE_TASK;
  payload: string;
}

export interface IToggleCheckbox {
  type: string;
  payload: { id: string; completed: boolean };
}

export type IAction = IAddTaskAction | IDeleteTaskAction | IToggleCheckbox;
export type IPayload = Exclude<ITask, "completed">;
export enum Actions {
  CREATE_TASK = "CREATE_TASK",
  DELETE_TASK = "DELETE_TASK",
  TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX",
}

//! posts:
export interface IPosts {
  isError: boolean;
  isLoading: boolean;
  posts: IList[];
}

export interface IList {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
