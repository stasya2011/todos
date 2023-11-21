import {
  Route,
  Routes,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import Posts from "./app/components/Posts/Posts";
import Todos from "./app/components/Todos/Todos";
import "./App.scss";

function App() {
  return (
    <Layout className={"wrapper"}>
      <Router>
        <Header className={"header"}>
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
        </Header>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<h2>Error...</h2>} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
