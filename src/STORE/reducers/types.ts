export interface ITask {
  id: string;
  text: string;
  completed: boolean;
  createdAt?: string;
  completedAt?: string;
}

export interface IAddTaskAction {
  type: string;
  payload: IPayload;
}

export interface IDeleteTaskAction {
  type: string;
  payload: string;
}

export type IAction = IAddTaskAction | IDeleteTaskAction;

export type IPayload = Exclude<ITask, "completed">;
