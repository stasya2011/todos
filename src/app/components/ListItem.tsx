import { Button, Checkbox } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Card } from "antd";
import { useState } from "react";

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
  const dispatch = useDispatch();
  const toggleCheckbox = (id: string) => {
    setIsCompleted(!isCompleted);
    dispatch({
      type: "TOGGLE_CHECKBOX",
      payload: { id, completed: !isCompleted },
    });
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
          onClick={() => dispatch({ type: "DELETE_TASK", payload: id })}
          type="primary"
          icon={<DeleteFilled />}
        />
      </li>
    </Card>
  );
};

export default ListItem;
