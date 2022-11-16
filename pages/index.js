import Head from "next/head";
import dynamic from "next/dynamic";

import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

const Contact = dynamic(() => import("../components/Contact" /* webpackChunkName: "Contact" */), {ssr: false})
const Skills = dynamic(() => import("../components/Skills" /* webpackChunkName: "Skills" */), {ssr: false})

export default function Home() {
  return (
    <>
      <Head>
        <title>Itzik</title>
        <meta name="description" content="Hey, I'm Itzik, AKA PatentLobster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div
        className={
          "top-0 mb-0 -mt-24 flex h-full flex-col flex-col overflow-x-hidden pt-20"
        }
      >
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
