import Logo from "@/components/logo";
import { Separator } from "./ui/separator";
import Link from "next/link";


export function SiteFooter() {
  const now = new Date().getFullYear();
  return (
    <footer >
      <div className="space-y-2 relative py-8">
        <div className="absolute -left-16 top-8 text-xs text-muted-foreground/40 font-mono hidden lg:block">
          [FOOTER]
        </div>
        <Separator />
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
                Made with ☘️, By <Logo className={"inline-block px-1 pt-0.5 my-auto text-2xl"} /> 
          </p>
          <p className="text-xs text-muted-foreground">
              &copy; 2017-{now}
          </p>
        </div>
      </div>
    </footer>
  );
}
