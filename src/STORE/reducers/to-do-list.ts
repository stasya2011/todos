import { initialState } from "../state";
import { ITask, Actions } from "./types";

export const todosReducer = (
  state: ITask[] = initialState,
  action: any
): ITask[] => {
  switch (action.type) {
    case Actions.CREATE_TASK:
      const updatedState = [...state];
      if (typeof action.payload === "object") {
        updatedState.push({
          ...action.payload,
          completed: false,
        });
        return updatedState;
      }
      return state;
    case Actions.DELETE_TASK:
      if (typeof action.payload === "string") {
        const stateAfterDeleted = state.filter(
          (task) => task.id !== action.payload
        );
        return stateAfterDeleted;
      }
      return state;
    case Actions.TOGGLE_CHECKBOX:
      if (typeof action.payload === "object") {
        const updatedStateAfterToggling = state.map((element) => {
          if (action.payload.id === element.id) {
            element = {
              ...element,
              completed: action.payload.completed,
            };
          }
          return element;
        });
        return updatedStateAfterToggling;
      }
      return state;
    default:
      return state;
  }
};
