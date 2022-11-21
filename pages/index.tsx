import axios from "axios";
import Post from "components/index/Post";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export type PostType = {
  id: number;
  title: string;
  body: string;
};

type HomePropType = {
  posts: PostType[];
  nextPage: number;
};

const Home: NextPage<HomePropType> = ({ posts, nextPage }) => {
  const vShare = () => {
    void (async () => {
      await navigator.share({
        url: "https://primaku.page.link/ParenthoodInstitute",
        text: "Parenthood Institute",
        title: "Parenthood Institute",
      });
    })();
  };

  return (
    <>
      <Head>
        <title>Home | Blognya Angga</title>
        <meta name="description" content="Isinya tentang Angga" />
      </Head>

      {posts.map((post) => (
        <Post key={"post-in-index-" + post.id} post={post} />
      ))}

      <div onClick={vShare}>asd</div>

      {/* pagination */}
      <div className="box-between text-sm">
        <Link href="/">
          <a className="text-blue-500 hover:underline hover:text-red-500">
            Home
          </a>
        </Link>

        <Link href={{ pathname: "/", query: { page: nextPage } }}>
          <a className="text-blue-500 hover:underline hover:text-red-500">
            Older Posts
          </a>
        </Link>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { page } = query;
    const res = await axios.get("/posts", {
      params: {
        page,
      },
    });

    return {
      props: {
        posts: res.data.slice(0, 10),
        nextPage: page ? parseInt(page as string) + 1 : 2,
      },
    };
  } catch {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  }
};

export default Home;
