import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My first Next app</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
