import { Button, Flex, Image } from "antd";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Flex vertical align="center">
      <Image width={700} alt="Error image" src="./404.jpg" />
      <Button
        style={{
          width: 700,
          height: 80,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Link to={"/"}>Back</Link>
      </Button>
    </Flex>
  );
};

export default ErrorPage;
