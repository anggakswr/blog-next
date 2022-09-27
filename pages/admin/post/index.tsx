import axios from "axios";
import Header from "components/admin/crud/Header";
import TblRowSkeleton from "components/admin/post/TblRowSkeleton";
import limitChar from "helpers/limitChar";
import { NextPage } from "next";
import Link from "next/link";
import { PostType } from "pages";
import { useState } from "react";
import { FaSort } from "react-icons/fa";
import useSWR from "swr";
import DeletePopup from "./index/DeletePopup";

const fetcher = async () => {
  const res = await axios.get("/posts");
  return res.data.slice(0, 5);
};

const AdminPost: NextPage = () => {
  const { data, error } = useSWR("/posts", fetcher);
  const [postId, setPostId] = useState<null | number>(null);

  return (
    <>
      <Header />

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
        data.map((post: PostType, index: number) => (
          <div
            key={"admin-post-" + post.id}
            className={`grid grid-cols-3 border-y p-4 text-sm items-center ${
              index % 2 === 0 ? "bg-gray-100" : ""
            }`}
          >
            <Link href={"/post/" + post.id}>
              <a className="underline hover:text-red-500">
                {limitChar(post.title, 20)}
              </a>
            </Link>

            <p>{limitChar(post.body, 20)}</p>

            <div className="box-equal gap-x-2">
              <Link href={"/admin/post/edit/" + post.id}>
                <a className="admin-btn">Edit</a>
              </Link>

              <button
                className="admin-delete-btn"
                onClick={() => setPostId(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* delete popup */}
      {postId ? <DeletePopup postId={postId} setPostId={setPostId} /> : null}
    </>
  );
};

export default AdminPost;
