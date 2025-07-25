"use client";

import { Inter } from "@next/font/google";

import { Intro } from "@/components/homepage/intro";
// import { Skills } from "@/components/homepage/skills";
// import { Projects } from "@/components/homepage/projects";
// import { Contact } from "@/components/homepage/contact";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic"


const Skills = dynamic(
  () => import("@/components/homepage/skills").then((mod) => ({ default: mod.Skills })),
  {
    ssr: false, // Don't render on server
    loading: () => null, // No loading state needed
  },
)


const Projects = dynamic(
  () => import("@/components/homepage/projects").then((mod) => ({ default: mod.Projects })),
  {
    ssr: false, // Don't render on server
    loading: () => null, // No loading state needed
  },
)

const Contact = dynamic(
  () => import("@/components/homepage/contact").then((mod) => ({ default: mod.Contact })),
  {
    ssr: false, // Don't render on server
    loading: () => null, // No loading state needed
  },
)


export default function Home() {

  return (
    <main className={cn("block", inter.className)}>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
