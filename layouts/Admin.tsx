import Header from "components/admin/Header";
import Sidebar from "components/admin/Sidebar";
import Head from "next/head";
import React from "react";

type AdminPropType = {
  children: React.ReactNode;
};

const Admin = ({ children }: AdminPropType) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
