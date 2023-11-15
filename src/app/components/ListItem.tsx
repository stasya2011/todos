import { Button, Checkbox } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Card } from "antd";

const ListItem = ({ id, text }: { id: string; text: string }) => {
  const dispatch = useDispatch();
  return (
    <Card style={{ marginTop: 16 }}>
      <li key={id} style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Checkbox checked={true} />
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
