import axios from "axios";
import Header from "components/admin/crud/Header";
import TblRowSkeleton from "components/admin/post/TblRowSkeleton";
import limitChar from "helpers/limitChar";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { PostType } from "pages";
import { FaSort } from "react-icons/fa";
import useSWR from "swr";

const fetcher = async () => {
  const res = await axios.get("/posts");
  return res.data.slice(0, 5);
};

const AdminPost: NextPage = () => {
  const { data, error } = useSWR("/posts", fetcher);

  return (
    <>
      <Head>
        <title>Post | Admin | Blognya Angga</title>
        <meta name="description" content="CRUD Post" />
      </Head>

      <Header addBtnUrl={"/admin/post/add"} />

      {/* tbl header */}
      <div className="grid grid-cols-3 border-y p-4 text-sm mt-8 font-bold">
        <button className="box-equal gap-x-2">
          Title <FaSort />
        </button>

        <button className="box-equal gap-x-2">
          Content <FaSort />
        </button>

        <p>Actions</p>
      </div>

      {error ? (
        <p className="text-red-500">An error occurred</p>
      ) : !data ? (
        <TblRowSkeleton />
      ) : (
        // tbl rows
        data.map((post: PostType) => (
          <div
            key={"admin-post-" + post.id}
            className="grid grid-cols-3 border-y p-4 text-sm items-center"
          >
            <p>{limitChar(post.title, 20)}</p>
            <p>{limitChar(post.body, 20)}</p>

            <div className="box-equal gap-x-2">
              <Link href={"/admin/post/edit/" + post.id}>
                <a className="admin-btn">Edit</a>
              </Link>
              <button className="admin-delete-btn">Delete</button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default AdminPost;
