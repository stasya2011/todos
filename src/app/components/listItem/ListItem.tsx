import { useState } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Card } from "antd";
import { CloseCircleTwoTone } from "@ant-design/icons";
import { deleteTask, toggleCheckbox } from "../../../STORE/slices/todos";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { IAction, ITask } from "../../../STORE/types";
import "./listitem.scss";

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

  return (
    <Card loading={false} style={{ marginTop: 16 }}>
      <li key={id} style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Checkbox
            onChange={() => {
              setIsCompleted(!isCompleted);
              dispatch(toggleCheckbox({ id, completed: !isCompleted }));
            }}
            checked={isCompleted}
            style={{ marginRight: 10 }}
          />
          <p className="text-wrap">{text}</p>
        </div>
        <CloseCircleTwoTone
          twoToneColor={"#eb2f96"}
          style={{ fontSize: 25 }}
          onClick={() => dispatch(deleteTask(id))}
        />
        {/* <h3>date of creation: {}</h3> */}
      </li>
    </Card>
  );
};

export default ListItem;
