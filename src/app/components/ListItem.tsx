import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Card } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import {
  DeleteTaskAction,
  ToggleCheckboxAction,
} from "../../STORE/action-creators";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { IAction, ITask } from "../../STORE/reducers/types";

const ListItem = ({
  id,
  text,
  completed,
}: {
  id: string;
  text: string;
  completed: boolean;
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const dispatch = useDispatch<ThunkDispatch<ITask[], undefined, IAction>>();

  const toggleCheckbox = (id: string) => {
    setIsCompleted(!isCompleted);
    dispatch(ToggleCheckboxAction({ id, completed: !isCompleted }));
  };

  return (
    <Card style={{ marginTop: 16 }}>
      <li key={id} style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Checkbox
            onChange={() => {
              toggleCheckbox(id);
            }}
            checked={isCompleted}
            style={{ marginRight: 10 }}
          />
          <div>{text}</div>
        </div>

        <Button
          onClick={() => dispatch(DeleteTaskAction(id))}
          type="primary"
          icon={<DeleteFilled />}
        />
      </li>
    </Card>
  );
};

export default ListItem;
