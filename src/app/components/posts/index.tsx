import { useEffect, useState } from "react";
import { Card, Flex, Image, Input } from "antd";
import { IList } from "../../../STORE/types";
import PaginationComponent from "../pagination/Pagination";
import { fetchPosts } from "../../../STORE/slices/posts";
import { useAppDispatch, useAppSelector } from "../../../STORE/hooks";
import "./../../../App.scss";

const Posts = () => {
  const [searchingString, setSearchingString] = useState<string>("");
  const [searchedValue, setSearchedValue] = useState<IList[]>([]);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.posts);
  const fetchData = async (page: number) => {
    dispatch(fetchPosts(page));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPosts(1));
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const searchingData = state.posts.filter((post) => {
      return post.title.includes(searchingString);
    });
    setSearchedValue(() => {
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
          state.posts.map((post: IList) => (
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
        <PaginationComponent fetch={fetchData} />
      </Flex>
    </>
  );
};

export default Posts;
