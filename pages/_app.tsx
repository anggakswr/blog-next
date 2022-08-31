import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import BlueBox from "components/BlueBox";
import BlueBoxSkeleton from "components/BlueBoxSkeleton";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import SidebarSkeleton from "components/SidebarSkeleton";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const fetcher = async () => {
  const res = await axios.get("/posts");
  return res.data.slice(0, 5);
};

function MyApp({ Component, pageProps }: AppProps) {
  const currentYear = new Date().getFullYear();
  const { data, error } = useSWR("/posts", fetcher);

  return (
    <div className="w-[1024px] mx-auto bg-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />

      <main className="flex min-h-screen">
        {/* main content of the page */}
        <section className="flex-1 border-r border-gray-300 p-4">
          <Component {...pageProps} />
        </section>

        {/* sidebar */}
        {error ? (
          <p className="text-red-500">An error occurred</p>
        ) : !data ? (
          <SidebarSkeleton />
        ) : (
          <Sidebar posts={data} />
        )}
      </main>

      {error ? (
        <p className="text-red-500">An error occurred</p>
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
}

export default MyApp;
