import { motion } from "framer-motion";
import { useTypingText } from "@/components/type-writer";
import { Social } from "@/components/social";
import { FloatingElementsIntersection } from "@/components/floating-elements-intersection"
import { ScrollIndicator } from "@/components/scroll-indicator"

export function Intro () {
    const now = new Date().getFullYear();
    const TypeWriter = useTypingText({
        words: [
            " Developer.",
            " Hacker.",
            " Maker.",
            " Gamer.",
            " Pilot.",
            " Gopher.",
            " WebMaster.",
            " Tech-Junkie.",
            " Thinker.",
            " Human.",
            " Freelancer.",
            " 1337.",
            " DevOps Engineer.",
            " Problem Solver.",
            " Tux.",
            " Lobster.",
            "n Advisor.",
        ],
        typingSpeed: 170,
        maxPauseAmount: 1000,
        erasingSpeed: 50,
    });
    return (
          <div
        className="relative flex h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100 py-24 dark:to-indigo-800/10 dark:from-stone-900 justify-center"
      >
        <div className={"mx-auto flex w-full justify-center"}>
          <div className={"mt-8 text-center items-center justify-center "}>
            <motion.div
              animate={{ rotate: [5, -5, 5] }}
              transition={{
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

            <ul className={"px-2 pt-2"}>
              <li className={"mt-2 pt-1.5 pb-3"}>{TypeWriter}</li>
              <li>
                I&apos;m {now - 1997}, with {now - 1997 - 12} years of coding,
                hacking and modding experience.
              </li>
                <li className={"justify-between py-4 flex-row"}>
                    <Social />
                </li>
            </ul>
          </div>
                  <ScrollIndicator />
        </div>
        <FloatingElementsIntersection />

      </div>
    )
}