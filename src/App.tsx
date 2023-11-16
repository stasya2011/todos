import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { ITask } from "./STORE/reducers/types";
import { Button, Input, Layout } from "antd";
import ListTask from "./app/components/ListTasks/ListTask";
import "./App.scss";

function App() {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const tasks: ITask[] = useSelector((state: ITask[]): ITask[] => state);
  const dispatch = useDispatch();

  const createTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    setTaskTitle(() => e.target.value);
  };
  const addInfo = () => {
    if (taskTitle) {
      dispatch({
        type: "CREATE_TASK",
        payload: { text: taskTitle, id: uuidv4() },
      });

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
      <Layout className={"wrapper"}>
        <div style={{ display: "flex" }}>
          <Input
            value={taskTitle}
            onChange={createTaskTitle}
            type="text"
            style={{ marginLeft: 10 }}
          />
          <Button onClick={addInfo} type="primary" style={{ marginLeft: 10 }}>
            Add task
          </Button>
        </div>
        {tasks.length ? (
          <ListTask tasks={tasks} />
        ) : (
          <h2>You haven't had tasks yet.</h2>
        )}
      </Layout>
    </div>
  );
}

export default App;
