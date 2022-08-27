import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import BlueBox from "components/BlueBox";

function MyApp({ Component, pageProps }: AppProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-[1024px] mx-auto bg-white">
      <Header />
      <Navbar />

      <main className="flex min-h-screen">
        {/* main content of the page */}
        <section className="flex-1 border-r border-gray-300 p-4">
          <Component {...pageProps} />
        </section>

        {/* sidebar */}
        <Sidebar />
      </main>

      <BlueBox />

      <footer className="bg-gray-300 text-center py-8">
        Copyright &copy; {currentYear} Blognya Angga. All rights reserved.
      </footer>
    </div>
  );
}

export default MyApp;
