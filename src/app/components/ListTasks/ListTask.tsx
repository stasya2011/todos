import { ITask } from "../../../STORE/types";
import ListItem from "../ListItem";
import "./styles.scss";

const ListTask = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <ul className="list">
      <div className="list-col">
        {tasks.map((task: ITask) =>
          task.text && task.completed ? (
            <ListItem
              key={task.id}
              text={task.text}
              id={task.id}
              completed={task.completed}
            />
          ) : null
        )}
      </div>
      <div className="list-col">
        {tasks.map((task: ITask) =>
          task.text && !task.completed ? (
            <ListItem
              key={task.id}
              text={task.text}
              id={task.id}
              completed={task.completed}
            />
          ) : null
        )}
      </div>
    </ul>
  );
};

export default ListTask;
