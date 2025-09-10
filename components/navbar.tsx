"use client"

import Logo from "@/components/logo"
import { AnimatedThemeToggler } from "@/components/animated-theme-toggler"

import { HomeIcon, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Dock, DockIcon } from "@/components/dock"


const navbar = [
  { href: "/", icon: HomeIcon, label: "Home" },
  // { href: "#", icon: Feather, label: "Skills" },
  // { href: "#", icon: Gem, label: "Uses" },
  { href: "/contact", icon: Mail, label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <Dock
      disableMagnification
      direction="middle"
      className="sticky z-50 bottom-8 backdrop-blur transition-colors  supports-backdrop-blur:bg-black/5  dark:border-slate-50/6 dark:text-white dark:supports-backdrop-blur:bg-white/5"
    >
      <Logo className="text-3xl px-2" />
      <Separator orientation="vertical" className="h-full mr-2" />
      {navbar.map((item) => {
        const isActive = pathname === item.href

        return (
          <DockIcon key={item.label} disableMagnification>
            <Link
              href={item.href}
              aria-label={item.label}
              className={cn(
                "flex flex-col justify-center py-2 text-center gap-0.5 mx-auto px-1",
                isActive && "text-blue-500",
              )}
            >
              <item.icon
                className={cn("size-5 mx-auto mt-1.5")}
                strokeWidth={0.8}
              />
              <span
                className={cn("text-xxs font-medium mb-0 pt-1.5 text-center mx-auto")}
              >
                {item.label}
              </span>
            </Link>
          </DockIcon>
        )
      })}

      <Separator orientation="vertical" className="h-full py-2 ml-2" />
      <DockIcon>
        <AnimatedThemeToggler className="py-2" />
      </DockIcon>
    </Dock>
  )
}
