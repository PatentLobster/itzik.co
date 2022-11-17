import Head from "next/head";

import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { FooterDynamic as Footer } from "../components/Footer.dynamic";
import { ContactDynamic as Contact } from "../components/Contact.dynamic";
import { SkillsDynamic as Skills } from "../components/Skills.dynamic";

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
