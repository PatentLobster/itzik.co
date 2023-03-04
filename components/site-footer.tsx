import Logo from "@/components/logo";
import {Social} from "@/components/social";

export function SiteFooter() {
  return (
    <footer>
      <div
        className={
          "flex flex-col w-full relative bottom-0 py-8 bg-white/5 mx-auto justify-center"
        }
      >
        <span className={"mx-auto"}>
          Made with ☘️, By <Logo className={"inline-block text-2xl"} />
        </span>
          <div className={"py-2 mx-auto"}>
              <Social />
          </div>
      </div>
    </footer>
  );
}
