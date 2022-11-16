import dynamic from "next/dynamic";

const Social = dynamic(() => import("./Social" /* webpackChunkName: "Social" */), {ssr: false})
const RandomEmoji = dynamic(() => import("./RandomEmoji" /* webpackChunkName: "RandomEmoji" */), {ssr: false})

import { Logo } from "./Logo";

export function Footer() {
  return (
    <>
      <div
        className={
          "relative bottom-0  flex w-full flex-col justify-center border-t border-slate-900/20 bg-gradient-to-br from-black/10 py-4 text-center drop-shadow dark:border-slate-50/[0.06] dark:from-white/5 "
        }
      >
        <span className={"mx-auto my-2 inline-block flex"}>
          Made with <RandomEmoji className={"mx-1"} />
          By{" "}
          <Logo className={"my-auto mt-1 ml-1 inline flex text-xl font-bold"} />
          .
        </span>
        <div className={"my-1 flex max-h-4"}>
          <Social imgClass={"w-4 mx-1"} />
        </div>
      </div>
    </>
  );
}
