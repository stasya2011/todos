import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Flex, Image, Input } from "antd";
import { IPosts } from "../../../STORE/reducers/types";
import "./../../../App.scss";

const Posts = () => {
  const [searchingString, setSearchingString] = useState<string>("");
  const [searchedValue, setSearchedValue] = useState<IPosts[]>([]);
  const dispatch = useDispatch();
  const state = useSelector((state: { posts: IPosts }) => state.posts);

  const fetchPosts = async () => {
    try {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=9"
      );
      const res = await data.json();
      dispatch({ type: "FETCHING_DATA", payload: res });
    } catch (error) {
      dispatch({ type: "SET_IS_ERROR", payload: true });
    }
  };

  useEffect(() => {
    dispatch({ type: "SET_IS_LOADING", payload: true });

    setTimeout(() => {
      fetchPosts();
      dispatch({ type: "SET_IS_LOADING", payload: false });
    }, 5000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const searchingData = state.posts.filter((post) => {
      return post.title.includes(searchingString);
    });
    setSearchedValue((prev) => {
      return [...searchingData];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchingString]);

  return (
    <>
      <Flex
        style={{
          padding: "10px 20px",
          marginBottom: 30,
          backgroundColor: "teal",
        }}
      >
        <Input
          style={{ marginRight: 10 }}
          value={searchingString}
          onChange={(e) => setSearchingString(e.target.value)}
        />
        <Button onClick={() => console.log("+++ click +++ ")}>Search</Button>
      </Flex>
      <Flex wrap="wrap" gap={20} justify="center">
        {state.isLoading ? (
          <Image className="animated-box rotate" src="loading.svg" />
        ) : !searchingString ? (
          state.posts.map((post) => (
            <Card style={{ width: 300, height: 200 }}>
              <h2>{post.title}</h2>
            </Card>
          ))
        ) : searchedValue.length ? (
          searchedValue.map((post: any) => (
            <Card style={{ width: 300, height: 200 }}>
              <h2>{post.title}</h2>
            </Card>
          ))
        ) : (
          <h2>According to you, Nothing was found</h2>
        )}
      </Flex>
    </>
  );
};

export default Posts;
