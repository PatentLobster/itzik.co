import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { absoluteUrl } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full flex-none border-b border-slate-900/10 text-slate-900 backdrop-blur transition-colors   duration-500 supports-backdrop-blur:bg-black/5  dark:border-slate-50/6 dark:text-white dark:supports-backdrop-blur:bg-white/5 lg:z-50">
      <div className="relative inset-0">
        <div
          className="absolute inset-0 bg-linear-to-tl from-white/10  mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <nav
        className="my-autos relative mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 pb-4"
        aria-label="Global"
      >
        <div className="flex w-full items-center justify-between">
          <span className={"ml-0"}>
            <a href={absoluteUrl("/")}>
              <Logo className={"pl-4 text-4xl"} />
            </a>
          </span>
          <div className={"mr-0"}>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
