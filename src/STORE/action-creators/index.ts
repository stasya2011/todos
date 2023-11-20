import { Dispatch } from "react";
import { Actions } from "../reducers/types";
import { AnyAction } from "@reduxjs/toolkit";

export const CreateTaskAction = (newTask: any) => {
  return {
    type: Actions.CREATE_TASK,
    payload: newTask,
  };
};

export const DeleteTaskAction =
  (id: string) => async (dispatch: Dispatch<AnyAction>) => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    // const res = await data.json();
    // console.log(res);
    dispatch({
      type: Actions.DELETE_TASK,
      payload: id,
    });
  };

export const ToggleCheckboxAction = (payload: {
  id: string;
  completed: boolean;
}) => {
  return {
    type: Actions.TOGGLE_CHECKBOX,
    payload,
  };
};
