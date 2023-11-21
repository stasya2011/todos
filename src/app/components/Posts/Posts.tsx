import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPosts } from "../../../STORE/reducers/types";

const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: { posts: IPosts }) => state.posts);

  useEffect(() => {
    const fn = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const res = await data.json();
      return res;
    };

    const posts = fn();
    dispatch({ type: "FETCHING_DATA", payload: posts });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export default Posts;
