import { ITask } from "../../../STORE/reducers/types";
import ListItem from "../ListItem";
const ListTask = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <ul>
      {tasks.length &&
        tasks.map(
          (task: ITask) =>
            task.text && <ListItem text={task.text} id={task.id} />
        )}
    </ul>
  );
};

export default ListTask;
