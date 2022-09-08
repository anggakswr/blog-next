import axios from "axios";
import BlueBox from "components/BlueBox";
import BlueBoxSkeleton from "components/BlueBoxSkeleton";
import Header from "components/Header";
import MainPageSkeleton from "components/MainPageSkeleton";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import SidebarSkeleton from "components/SidebarSkeleton";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

type DefaultPropType = {
  children: React.ReactNode;
};

const fetcher = async () => {
  const res = await axios.get("/posts");
  return res.data.slice(0, 5);
};

const Default = ({ children }: DefaultPropType) => {
  const currentYear = new Date().getFullYear();
  const { data, error } = useSWR("/posts", fetcher);

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <div className="w-[1024px] min-w-[1024px] max-w-[1024px] mx-auto bg-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />

      <main className="flex min-h-screen">
        {/* main content of the page */}
        {loading ? (
          <MainPageSkeleton />
        ) : (
          <section className="flex-1 border-r border-gray-300 p-4">
            {children}
          </section>
        )}

        {/* sidebar */}
        {error ? (
          <nav className="w-[350px] min-w-[350px] max-w-[350px] p-4">
            <p className="text-red-500">An error occurred</p>
          </nav>
        ) : !data ? (
          <SidebarSkeleton />
        ) : (
          <Sidebar posts={data} />
        )}
      </main>

      {/* bluebox */}
      {error ? (
        <nav className="bg-blue-500 text-white p-8">
          <p className="text-white">An error occurred</p>
        </nav>
      ) : !data ? (
        <BlueBoxSkeleton />
      ) : (
        <BlueBox posts={data} />
      )}

      <footer className="bg-gray-300 text-center py-8">
        Copyright &copy; {currentYear} Blognya Angga. All rights reserved.
      </footer>
    </div>
  );
};

export default Default;
