import Card from "@/components/card";
import { motion } from "framer-motion";
import Image from "next/image";

export function Skills() {
  return (
    <div
      className={
        "relative -top-20 flex min-h-screen flex-col border-y border-slate-900/10  bg-gradient-to-br from-pink-50 via-white to-blue-50 text-center dark:border-slate-50/[0.06] dark:bg-slate-900/20  dark:from-white/5 py-24"
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <h3 className={"pt-8 text-3xl font-bold tracking-tight sm:text-4xl"}>
          My Skills
        </h3>
      </motion.div>
      <div className="my-10 grid w-full max-w-screen-xl mx-auto animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 ">
        <Card
          title={"Programming"}
          description={
            "I like to code things from scratch and enjoy bringing ideas to life."
          }
          demo={
            <div className={"max-h-24"}>
              <Image
                src="/imgs/l1.png"
                alt="Deploy with Vercel"
                fill
                className={"object-cover"}
              />
            </div>
          }
        />
        <Card
          title={"Security"}
          description={
            "I love hacking new systems and to find security vulnerabilities and securing them afterwards."
          }
          demo={
            <div className={"max-h-24"}>
              <Image
                src="/imgs/l4.png"
                alt="Deploy with Vercel"
                fill
                className={"object-cover"}
              />
            </div>
          }
        />
        <Card
          title={"Devops"}
          description={
            "Automating all the stuff & Improving developer workflow"
          }
          demo={
            <div className={"max-h-24"}>
              <Image
                src="/imgs/l3.png"
                alt="Deploy with Vercel"
                fill
                className={"object-cover"}
              />
            </div>
          }
        />
        <Card
          title={"Electronics"}
          description={
            "I'm an electronics hobbyist, I love building devices of all kinds and to learn how stuff work in order to make it work better or to add additional functionalities."
          }
          demo={
            <div className={"max-h-24"}>
              <Image
                src="/imgs/l5.png"
                alt="Deploy with Vercel"
                fill
                className={"object-cover"}
              />
            </div>
          }
          large
        />
        <Card
          title={"Drones"}
          description={"Hobbyist FPV drone builder & pilot"}
          demo={
            <div className={"max-h-24"}>
              <Image
                src="/imgs/l6.png"
                alt="Deploy with Vercel"
                fill
                className={"object-cover"}
              />
            </div>
          }
        />
      </div>
    </div>
  );
}
