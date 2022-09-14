import Header from "components/admin/Header";
import Sidebar from "components/admin/Sidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import pathToTitle from "helpers/pathToTitle";
import Snackbar from "components/admin/Snackbar";

type AdminPropType = {
  children: React.ReactNode;
};

const Admin = ({ children }: AdminPropType) => {
  // /admin/post/add
  const { asPath } = useRouter();
  const title = pathToTitle(asPath);

  return (
    <div className="admin-layout">
      <Head>
        <title>
          {/* Add | Post | Admin | Blognya Angga */}
          {title + " | Blognya Angga"}
        </title>

        <meta name="description" content="Admin dashboard CMS" />
      </Head>

      {/* header */}
      <Header />

      <main className="flex min-h-screen mt-[52px]">
        <Sidebar />

        <section className="flex-1 bg-white p-6">
          {/* main content of the page */}
          {children}

          <Snackbar />
        </section>
      </main>
    </div>
  );
};

export default Admin;
