import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import Posts from "./app/components/Posts/Posts";
import Todos from "./app/components/Todos/Todos";
import HeaderComponent from "./app/components/header";
import ErrorPage from "./app/components/Error/Error";
import "./App.scss";

function App() {
  return (
    <Layout className={"wrapper"}>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
