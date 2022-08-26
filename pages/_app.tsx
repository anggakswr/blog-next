import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/Header";
import Navbar from "components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-[1024px] mx-auto bg-white">
      <Header />
      <Navbar />

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
