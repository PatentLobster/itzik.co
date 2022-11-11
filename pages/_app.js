import React from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Component {...pageProps} />;
}

export default MyApp;
