import Logo from "@/components/logo";

export function SiteFooter() {
  return (
    <footer>
      <div
        className={
          "flex w-full relative bottom-0 py-8 bg-white/5 mx-auto justify-center"
        }
      >
        <span>
          Made with ☘️, By <Logo className={"inline-block text-2xl"} />
        </span>
      </div>
    </footer>
  );
}
