import { Dispatch } from "react";
import { Actions } from "../reducers/types";
import { AnyAction, createAction } from "@reduxjs/toolkit";

export const CreateTaskAction = createAction(
  Actions.CREATE_TASK,
  (payload) => ({ payload })
);

export const DeleteTaskAction =
  (id: string) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: Actions.DELETE_TASK,
      payload: id,
    });
  };

export const ToggleCheckboxAction = createAction(
  Actions.TOGGLE_CHECKBOX,
  (payload) => ({ payload })
);
