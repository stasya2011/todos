import { Pagination } from "antd";
import "./pagination.scss";

const PaginationComponent = ({
  fetch,
}: {
  fetch: (page: number) => Promise<void>;
}) => {
  return (
    <Pagination
      className="pagination"
      onChange={(e) => fetch(e)}
      defaultCurrent={1}
      total={50}
    />
  );
};

export default PaginationComponent;
