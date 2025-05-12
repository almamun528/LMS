import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../ReduxAPI/features/Auth/User/postsSlice";
import Spinner from "./Spinner";

const Home = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section className="w-10/12 mx-auto py-2 bg-gray-300 flex items-center justify-center">
      <main>
        {isLoading && <Spinner/>}
        {error && <h3>{error}</h3>}
        {posts?.map((post) => {
          return (
            <div key={post?.id}>
              <h2>Post title : {post?.title} </h2>
              <br />
              <p>Body : {post?.body}</p>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Home;
