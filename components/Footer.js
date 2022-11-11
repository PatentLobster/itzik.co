import { Social } from "./Social";
import { RandomEmoji } from "./RandomEmoji";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <>
      <div
        className={
          "relative bottom-0  flex w-full flex-col justify-center border-t border-slate-900/20 bg-gradient-to-br from-black/10 py-4 text-center drop-shadow dark:border-slate-50/[0.06] dark:from-white/5 "
        }
      >
        <div className={"my-4 flex max-h-8"}>
          <Social />
        </div>
        <span className={"my-2 mx-auto inline-block flex"}>
          Made with <RandomEmoji className={"ml-0.5"} />, By{" "}
          <Logo className={"my-auto mt-1 ml-1 inline flex text-xl font-bold"} />
          .
        </span>
      </div>
    </>
  );
}
