import { NavLink } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
import Weather from "../wether";

const HeaderComponent = () => {
  return (
    <Header className={"header"}>
      <span>
        <NavLink
          to={"/posts"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "400",
              color: isActive ? "teal" : "white",
            };
          }}
        >
          Posts
        </NavLink>
        <NavLink to={"/"}>Todos</NavLink>
      </span>
      <Weather />
    </Header>
  );
};

export default HeaderComponent;
