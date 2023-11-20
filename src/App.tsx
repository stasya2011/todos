import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "./STORE/reducers/types";
import { Button, Input, Layout } from "antd";
import ListTask from "./app/components/ListTasks/ListTask";
import { CreateTaskAction } from "./STORE/action-creators";
import "./App.scss";
import { Header } from "antd/es/layout/layout";

function App() {
  return (
    <Layout className={"wrapper"}>
      <Router>
        <Header className={"header"}>
          <NavLink
            to={"/posts"}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "400",
                color: isActive ? "blue" : "white",
              };
            }}
          >
            Posts
          </NavLink>
          <NavLink to={"/"}>Todos</NavLink>
        </Header>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/posts" element={<h2>posts...</h2>} />
          <Route path="*" element={<h2>Error...</h2>} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;

function Todos() {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const tasks: ITask[] = useSelector((state: ITask[]): ITask[] => state);
  const dispatch = useDispatch();

  const createTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    setTaskTitle(() => e.target.value);
  };
  const addInfo = () => {
    if (taskTitle) {
      dispatch(CreateTaskAction({ text: taskTitle, id: uuidv4() }));

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
      {/* <Layout className={"wrapper"}> */}
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
        <Button
          onClick={() => console.log("+++")}
          type="primary"
          style={{ marginLeft: 10 }}
        >
          FetchData
        </Button>
      </div>
      {tasks.length ? (
        <ListTask tasks={tasks} />
      ) : (
        <h2>You haven't had tasks yet.</h2>
      )}
      {/* </Layout> */}
    </div>
  );
}
