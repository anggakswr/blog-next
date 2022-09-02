import axios from "axios";
import Breadcrumb from "components/post/slug/Breadcrumb";
import Comments from "components/post/slug/Comments";
import RelatedPosts from "components/post/slug/RelatedPosts";
import ShareBtns from "components/post/slug/ShareBtns";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { PostType } from "pages";

export type CommentType = {
  id: number;
  email: string;
  body: string;
};

type DetailPostPropType = {
  post: PostType;
  comments: CommentType[];
  error: boolean;
};

const DetailPost: NextPage<DetailPostPropType> = ({
  post,
  comments,
  error,
}) => {
  if (error) {
    return (
      <>
        <Head>
          <title>Error | Blognya Angga</title>
          <meta name="description" content="Sorry, an error occurred" />
        </Head>

        <p className="text-red-500">An error occurred</p>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title + " | Blognya Angga"}</title>
        <meta name="description" content={post.body} />
      </Head>

      <Breadcrumb title={post.title} />

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
      <Comments comments={comments} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await axios.get("/postsa");
    const paths = res.data.slice(0, 10).map((post: PostType) => {
      return { params: { id: `${post.id}` } };
    });

    return {
      paths,
      fallback: "blocking",
    };
  } catch {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const [post, comments] = await Promise.all([
      axios.get("/posts/" + params?.id),
      axios.get(`/posts/${params?.id}/comments`),
    ]);

    return {
      props: {
        post: post.data,
        comments: comments.data,
      },
      revalidate: 10,
    };
  } catch {
    return {
      props: {
        error: true,
      },
      revalidate: 10,
    };
  }
};

export default DetailPost;
