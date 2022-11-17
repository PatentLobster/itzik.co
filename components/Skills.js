import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";


import Element from "react-scroll/modules/components/Element";

import {SliderDynamic as Slider} from "./Slider.dynamic";

export function Skills() {
  const skills = [
    ["Hacking", "Securing"],
    ["Backend", "Frontend"],
    ["UX", "UI"],
    ["Hardware", "Software"],
    ["Idea", "Reality"],
  ];

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `-0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  const ctrls = useAnimation();
  useEffect(() => {
    const intervalId = setInterval(
      () => {
        ctrls.start("hidden");
        setTimeout(() => {
          setPlaying(ctrls.start("visible"));
          setIndex((index) => (index + 1 >= skills.length ? 0 : index + 1));
        }, 550);
      },
      3000 // every 3 seconds
    );
    if (playing) {
    }
    if (!playing) {
    }
    return () => clearTimeout(intervalId);
  }, [ctrls, index, playing,skills]);

  return (
    <>
      <Element id={"skills"} className={"relative"}>
        <div
          className={
            "flex min-h-[85vh] flex-col border-y border-slate-900/10 bg-stone-50 bg-gradient-to-br from-black/10 text-center dark:border-slate-50/[0.06] dark:bg-slate-900/20  dark:from-white/5 py-24"
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <h3
              className={"pt-8 text-3xl font-bold tracking-tight sm:text-4xl"}
            >
              My Skills
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-1em" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={
              "inset-shadow mx-auto my-8 grid w-64 rounded-lg border border-slate-900/10 bg-white/40 py-5 px-10 text-xl font-bold drop-shadow dark:border-slate-100/10  dark:bg-white/10"
            }
          >
            <motion.span
              initial="hidden"
              className={""}
              animate={ctrls}
              variants={characterAnimation}
            >
              {skills[index ?? 0][0]}
            </motion.span>
            <span className={"font-gochi"}> To </span>
            <motion.span
              initial="hidden"
              animate={ctrls}
              variants={characterAnimation}
            >
              {skills[index ?? 0][1]}
            </motion.span>
          </motion.div>
        </div>
        <Slider />
      </Element>
    </>
  );
}
