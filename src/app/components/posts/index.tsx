import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Flex, Image, Input } from "antd";
import { IPosts } from "../../../STORE/reducers/types";
import PaginationComponent from "../pagination/Pagination";
import {
  setIsError,
  setIsLoading,
  setIsFeatching,
} from "../../../STORE/slices/posts";
import "./../../../App.scss";

const Posts = () => {
  const [searchingString, setSearchingString] = useState<string>("");
  const [searchedValue, setSearchedValue] = useState<IPosts[]>([]);
  const dispatch = useDispatch();
  const state = useSelector((state: { posts: IPosts }) => state.posts);
  const fetchPosts = async (page: number = 1) => {
    try {
      dispatch(setIsLoading(true));
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=9&_page=${page}`
      );
      const res = await data.json();
      dispatch(setIsFeatching(res));
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsError(true));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchPosts();
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const searchingData = state.posts.filter((post): void => {
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
          <h2>According to you, Nothing was found.</h2>
        )}
      </Flex>
      <Flex justify="center">
        <PaginationComponent fetch={fetchPosts} />
      </Flex>
    </>
  );
};

export default Posts;
