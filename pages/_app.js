import React from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Component {...pageProps} />;
}

export default MyApp;
