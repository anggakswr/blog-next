import Header from "components/admin/crud/Header";
import { NextPage } from "next";
import Head from "next/head";
import { FaSort } from "react-icons/fa";

const AdminPost: NextPage = () => {
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

      {/* tbl row */}
      <div className="grid grid-cols-3 border-y p-4 text-sm items-center">
        <p>Post 1</p>
        <p>Desc 1</p>

        <div className="box-equal gap-x-2">
          <button className="admin-btn">Edit</button>
          <button className="admin-delete-btn">Delete</button>
        </div>
      </div>
    </>
  );
};

export default AdminPost;
