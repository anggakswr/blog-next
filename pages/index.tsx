import Post from "components/index/Post";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Post />
      <Post />
      <Post />

      <div className="box-between text-sm">
        <a
          href="#"
          className="text-blue-500 hover:underline hover:text-red-500"
        >
          Home
        </a>

        <a
          href="#"
          className="text-blue-500 hover:underline hover:text-red-500"
        >
          Older Posts
        </a>
      </div>
    </>
  );
};

export default Home;
