import { Pagination } from "antd";

const PaginationComponent = ({
  fetch,
}: {
  fetch: (page: number) => Promise<void>;
}) => {
  return (
    <Pagination onChange={(e) => fetch(e)} defaultCurrent={1} total={50} />
  );
};

export default PaginationComponent;
