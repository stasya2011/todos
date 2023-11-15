import { inishialState } from "../state";
import { ITask, IAction } from "./types";

export const rootReducer = (
  state: ITask[] = inishialState,
  action: IAction
): ITask[] => {
  switch (action.type) {
    case "CREATE_TASK":
      const updatedState = [...state];

      if (typeof action.payload === "object") {
        updatedState.push({
          ...action.payload,
          completed: false,
        });

        return updatedState;
      }

      return state;

    case "DELETE_TASK":
      if (typeof action.payload === "string") {
        const stateAfterDeleted = state.filter(
          (task) => task.id !== action.payload
        );

        return stateAfterDeleted;
      }

      return state;
    default:
      return state;
  }
};
