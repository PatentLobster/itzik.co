"use client";

import { Inter } from "@next/font/google";

import { Intro } from "@/components/homepage/intro";
import { Skills } from "@/components/homepage/skills";
import { Projects } from "@/components/homepage/projects";
import { Contact } from "@/components/homepage/contact";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

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
