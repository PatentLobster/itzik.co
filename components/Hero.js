import Image from "next/future/image";
import lobster from "../images/lobster.svg";
import { motion } from "framer-motion";
import { TypeWriter } from "./TypeWriter";
import { Social } from "./Social";
import Element from "react-scroll/modules/components/Element";

export function Hero() {
  const now = new Date().getFullYear();
  const age = now - 1997;
  const experience = age - 12;
  return (
    <>
      <Element id={"home"} className={"h-[100vh]"}>
        <div className={"mx-auto flex w-full flex-col justify-center p-8"}>
          <motion.div
            initial={{ opacity: 0, y: "-1em" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className={
              "inset-shadow mx-auto rounded-lg border border-slate-900/10 bg-white py-8 text-center drop-shadow dark:border-slate-100/10 dark:bg-neutral-800 sm:w-full sm:px-4 md:w-1/2 lg:w-1/2"
            }
          >
            <motion.div
              animate={{ rotate: [5, -5, 5] }}
              transition={{
                type: "linear",
                duration: 3,
                repeat: Infinity,
              }}
              className={"mx-2 inline-block text-5xl"}
            >
              👋
            </motion.div>
            <div className={"inline-block"}>
              <h1 className={"mx-2 text-2xl font-bold"}>Hey, I&apos;m Itzik</h1>
              <span className={"mx-4 text-xs"}> AKA PatentLobster.</span>
            </div>
            <TypeWriter className={"mt-4 py-3 "} />
            <ul className={"px-2 pt-2"}>
              <li>
                I&apos;m {age}, with {experience} years of coding, hacking and
                modding experience.
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "-1em" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Social imgClass={"mx-3 w-8"} />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 45, 0, -45, 0] }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 60,
            repeat: Infinity,
          }}
          className={
            "invisible absolute bottom-10 right-5 md:visible lg:visible xl:visible 2xl:visible"
          }
        >
          <Image
            src={lobster}
            alt={"Lobster"}
            className="h-[35vh] w-auto opacity-25 dark:opacity-20 dark:invert"
          />
        </motion.div>
      </Element>
    </>
  );
}
