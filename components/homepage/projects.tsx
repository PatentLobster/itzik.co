import { motion } from "framer-motion";
import { Gochi_Hand } from "next/font/google";
import { cn } from "@/lib/utils";

const gochi = Gochi_Hand({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
export function Projects() {
  return (
    <>
      <div
        id={"projects"}
        className={
          "relative  -top-20 flex min-h-[100vh] flex-col border-y border-slate-900/10 bg-white bg-gradient-to-br from-cyan-800/20 text-center dark:border-slate-50/[0.06]  dark:bg-purple-900/5 dark:from-white/5 py-24"
        }
      >
        <div
          className={
            "absolute inset-0 bottom-0 z-10 bg-slate-50 bg-bottom bg-no-repeat dark:bg-[#0B1120]"
          }
        >
          <div
            className="absolute inset-0 z-10 bg-[bottom_1px_center] bg-grid-slate-900/[0.04] dark:border-b dark:border-slate-100/5 dark:bg-bottom dark:bg-grid-slate-100/5"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
            }}
          />
        </div>
        <div className={"z-30"}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h3
              className={"text-3xl font-bold tracking-tight sm:text-4xl py-8"}
            >
              My Projects
            </h3>
          </motion.div>
          <div
            className={
              "z-20 grid grid-cols-2 gap-8 lg:px-24 max-md:px-4 md:px-8 py-8 max-md:grid-cols-1"
            }
          >
            <a href={"https://github.com/PatentLobster/Stinker"}>
              <motion.div
                initial={{ opacity: 0, y: "-1em" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={
                  "z-30 rounded-xl border border-slate-900/10 bg-slate-50/5 bg-linear-to-br from-cyan-100/5 to-slate-50/5 p-8 drop-shadow hover:bg-white/20 dark:border-slate-700/5 dark:from-white/25 hover:dark:from-white/30"
                }
              >
                <div
                  className={
                    "mx-auto flex h-16 w-16 justify-center rounded-xl bg-black drop-shadow"
                  }
                >
                  <span
                    className={cn(
                      "m-auto pb-1  text-5xl font-extrabold text-white",
                      gochi.className
                    )}
                  >
                    z
                  </span>
                </div>
                <h4
                  className={
                    "py-4 text-2xl font-bold tracking-tight sm:text-3xl"
                  }
                >
                  Stinker
                </h4>
                <div className={"text-left"}>
                  <p>
                    Stinker is an app for developers that work with the Laravel
                    PHP framework.
                  </p>
                  <p>
                    An IDE wrapped around tinker, heavily inspired by
                    Tinkerwell.
                  </p>
                </div>
              </motion.div>
            </a>
            <a href={"https://github.com/PatentLobster/dotfiles"}>
              <motion.div
                initial={{ opacity: 0, y: "-1em" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={
                  "z-30 rounded-xl border border-slate-900/10 bg-slate-50/5 bg-linear-to-br from-cyan-100/5 to-slate-50/5 p-8 drop-shadow hover:bg-white/20 dark:border-slate-700/5 dark:from-white/25 hover:dark:from-white/30"
                }
              >
                <div
                  className={
                    "mx-auto flex h-16 w-16 justify-center rounded-xl bg-black drop-shadow"
                  }
                >
                  <span
                    className={cn(
                      "m-auto pb-1  text-xl font-extrabold text-white",
                      gochi.className
                    )}
                  >
                    .har
                  </span>
                </div>
                <h4
                  className={
                    "py-4 text-2xl font-bold tracking-tight sm:text-3xl"
                  }
                >
                  daphar
                </h4>
                <div className={"text-left"}>
                  <p>App Dat Parsers HAR files</p>
                  <p>Programmatically manipulate HTTP Archives.</p>
                </div>
              </motion.div>
            </a>
            <a href={"https://github.com/PatentLobster/vork"}>
              <motion.div
                initial={{ opacity: 0, y: "-1em" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={
                  "z-30 rounded-xl border border-slate-900/10 bg-slate-50/5 bg-linear-to-br from-cyan-100/5 to-slate-50/5 p-8 drop-shadow hover:bg-white/20 dark:border-slate-700/5 dark:from-white/25 hover:dark:from-white/30"
                }
              >
                <div
                  className={
                    "mx-auto flex h-16 w-16 justify-center rounded-xl bg-black drop-shadow"
                  }
                >
                  <span
                    className={
                      "font-sans m-auto pb-1 text-5xl font-bold text-white"
                    }
                  >
                    v
                  </span>
                </div>
                <h4
                  className={
                    "py-4 text-2xl font-bold tracking-tight sm:text-3xl"
                  }
                >
                  Vork
                </h4>
                <div className={"text-left"}>
                  <p>
                    Vork is a calendar application that logs every login and
                    logout of the computer.
                  </p>
                  <p>
                    Every time you login the application will greet you with a
                    random quote.
                  </p>
                </div>
              </motion.div>
            </a>
            <a href={"#"}>
              <motion.div
                initial={{ opacity: 0, y: "-1em" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={
                  "z-30 rounded-xl border border-slate-900/10 bg-slate-50/5 bg-linear-to-br from-cyan-100/5 to-slate-50/5 p-8 drop-shadow hover:bg-white/20 dark:border-slate-700/5 dark:from-white/25 hover:dark:from-white/30"
                }
              >
                <div
                  className={
                    "mx-auto flex h-16 w-16 justify-center rounded-xl bg-black drop-shadow"
                  }
                >
                  <span
                    className={cn(
                      "m-auto pb-1  text-4xl font-bold text-white",
                      gochi.className
                    )}
                  >
                    .to
                  </span>
                </div>
                <h4
                  className={
                    "py-4 text-2xl font-bold tracking-tight sm:text-3xl"
                  }
                >
                  itz.to
                </h4>
                <div className={"text-left"}>
                  <p>Forever free terraform link shortener.</p>
                  <p>Closed for world right now, under development.</p>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
