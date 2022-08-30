import axios from "axios";
import Breadcrumb from "components/post/slug/Breadcrumb";
import Comments from "components/post/slug/Comments";
import RelatedPosts from "components/post/slug/RelatedPosts";
import ShareBtns from "components/post/slug/ShareBtns";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { PostType } from "pages";

type DetailPostPropType = {
  post: PostType;
};

const DetailPost: NextPage<DetailPostPropType> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title + " | Blognya Angga"}</title>
        <meta name="description" content={post.body} />
      </Head>

      <Breadcrumb />

      {/* title */}
      <h1 className="text-2xl font-bold my-4">{post.title}</h1>

      {/* date */}
      <p className="text-sm border-b border-gray-300 pb-2 mb-6">
        <a
          href="#"
          className="text-blue-500 hover:text-red-500 hover:underline mr-2"
        >
          Angga
        </a>

        <span className="text-gray-400">| May 13, 2020</span>
      </p>

      {/* content */}
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="whitespace-pre"
      />

      {/* share btns */}
      <ShareBtns />

      {/* related posts */}
      <RelatedPosts />

      {/* comments */}
      <Comments />
    </>
  );
};

export async function getStaticPaths() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const paths = res.data.map((post: PostType) => {
    return { params: { id: `${post.id}` } };
  });

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + params?.id
  );

  return {
    props: {
      post: res.data,
    },
    revalidate: 10,
  };
};

export default DetailPost;
