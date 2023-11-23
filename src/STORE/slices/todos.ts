import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../state";

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.push({ ...action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleCheckbox: (state, action) => {
      return state.map((element) => {
        if (action.payload.id === element.id) {
          element = {
            ...element,
            completed: action.payload.completed,
          };
        }
        return element;
      });
    },
  },
});

const { actions, reducer } = todosSlice;
export const { createTask, deleteTask, toggleCheckbox } = actions;
export default reducer;
