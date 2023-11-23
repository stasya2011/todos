import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Input } from "antd";
import ListTask from "../ListTasks/ListTask";
import { createTask } from "../../../STORE/slices/todos";
import "../../../App.scss";
import { useAppDispatch, useAppSelector } from "../../../STORE/hooks";

function ToDoList() {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.todosReducer);
  const createTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    setTaskTitle(() => e.target.value);
  };
  const addInfo = () => {
    if (taskTitle) {
      dispatch(createTask({ text: taskTitle, id: uuidv4() }));
      setTaskTitle("");
    }
    return;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex" }}>
        <Input
          value={taskTitle}
          onChange={createTaskTitle}
          type="text"
          style={{ marginLeft: 10 }}
        />
        <Button
          onClick={addInfo}
          type="primary"
          style={{
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: "teal",
          }}
        >
          Add task
        </Button>
      </div>
      {tasks.length ? (
        <ListTask tasks={tasks} />
      ) : (
        <h2 style={{ marginLeft: "16px" }}>You haven't had tasks yet.</h2>
      )}
    </div>
  );
}

export default ToDoList;
