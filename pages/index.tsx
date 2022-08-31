import axios from "axios";
import Post from "components/index/Post";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

export type PostType = {
  id: number;
  title: string;
  body: string;
};

type HomePropType = {
  posts: PostType[];
};

const Home: NextPage<HomePropType> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Home | Blognya Angga</title>
        <meta name="description" content="Isinya tentang Angga" />
      </Head>

      {posts.map((post) => (
        <Post key={"post-in-index-" + post.id} post={post} />
      ))}

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

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get("/posts");

  return {
    props: {
      posts: res.data.slice(0, 10),
    },
    revalidate: 10,
  };
};

export default Home;
