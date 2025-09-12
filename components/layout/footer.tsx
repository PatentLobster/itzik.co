import Link from "next/link"

import Logo from "@/components/ui/logo"

import { Separator } from "../ui/separator"

export function SiteFooter() {
  const now = new Date().getFullYear()
  return (
    <footer>
      <div className="relative space-y-2 py-8">
        <div className="absolute -left-16 top-8 hidden font-mono text-xs text-muted-foreground/40 lg:block">
          [FOOTER]
        </div>
        <Separator />
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Made with ☘️, By <Logo className={"my-auto inline-block px-1 pt-0.5 text-2xl"} />
          </p>
          <p className="text-xs text-muted-foreground">&copy; 2017-{now}</p>
        </div>
      </div>
    </footer>
  )
}
