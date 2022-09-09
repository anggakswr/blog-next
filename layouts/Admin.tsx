import Header from "components/admin/Header";
import Sidebar from "components/admin/Sidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import pathToTitle from "helpers/pathToTitle";

type AdminPropType = {
  children: React.ReactNode;
};

const Admin = ({ children }: AdminPropType) => {
  // /admin/post/add
  const { asPath } = useRouter();
  const title = pathToTitle(asPath);

  return (
    <div>
      <Head>
        <title>
          {/* Add | Post | Admin | Blognya Angga */}
          {title + " | Blognya Angga"}
        </title>

        <meta name="description" content="Admin dashboard CMS" />
      </Head>

      {/* header */}
      <Header />

      <main className="flex min-h-screen mt-[56px]">
        <Sidebar />

        <section className="flex-1 bg-white p-6">
          {/* main content of the page */}
          {children}
        </section>
      </main>
    </div>
  );
};

export default Admin;
