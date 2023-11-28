import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { StepBackwardOutlined } from "@ant-design/icons";
import "./pageById.scss";
// import Loading from "../loading";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostById = () => {
  const [post, setPost] = useState({ title: "", body: "", id: 0, userId: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigator = useNavigate();
  const fetchPost = async (id: string, fn: (post: IPost) => void) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    console.log(data);
    fn(data);
  };
  useEffect(() => {
    if (id) {
      setIsLoading(true);
      setTimeout(() => {
        fetchPost(id, setPost);
        setIsLoading(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pageById">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p className="post-content">{post.body}</p>
          <Button size="large" style={{ alignSelf: "baseline" }}>
            <StepBackwardOutlined onClick={() => navigator("/posts")} />
          </Button>
        </>
      )}
    </div>
  );
};

export default PostById;
