"use client"

import Logo from "@/components/ui/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"

import { HomeIcon, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {Icons} from "@/components/ui/icons"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Dock, DockIcon } from "@/components/ui/dock"
// import GlitchName from "./glitch-name"
import dynamic from "next/dynamic"


const GlitchName = dynamic(
  () => import("@/components/ui/glitch-name").then((mod) => ({ default: mod.GlitchName })),
  {
    ssr: false, // Don't render on server
    loading: () => <Logo className="text-3xl px-2" />, 
  },
)

const navbar = [
  { href: "/", icon: Icons.home, activeIcon: Icons.homeActive, class: "", label: "Home" },
  // { href: "#", icon: Feather, label: "Skills" },
  // { href: "#", icon: Gem, label: "Uses" },
  { href: "/contact", icon: Icons.contact, activeIcon: Icons.contactActive, class: "size-3 mt-0 h-4 w-4 p-0 m-0", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <Dock
      disableMagnification
      direction="middle"
      className="sticky z-50 bottom-8 backdrop-blur transition-colors border-slate-500/50  supports-backdrop-blur:bg-black/5  dark:border-slate-50/6 dark:text-white dark:supports-backdrop-blur:bg-white/5"
    >
          <GlitchName 
              englishText="Itzik"
              hebrewText="קיזיק"
              changeIndices={[0, 1, 3]} // I, t, i positions
              mode="both"
              fontSize="text-3xl px-2"
      />
      
      <Separator orientation="vertical" className="h-full mr-2 opacity-20 dark:opacity-100" />
      {navbar.map((item) => {
        const isActive = pathname === item.href

        return (
          <DockIcon key={item.label} disableMagnification>
            <Link
              href={item.href}
              aria-label={item.label}
              className={cn(
                "flex flex-col justify-center py-2 text-center gap-0.5 h-16 w-16 mx-auto px-1",
                
              )}
            >
              {isActive ? (
                <item.activeIcon
                  className={cn("mx-auto", item.class)}
                  strokeWidth={0.8}
                />
              ) : (
                <item.icon
                  className={cn(" mx-auto", item.class)}
                  strokeWidth={0.8}
                />
              )}
              <span
                className={cn("text-xxs font-medium p-0.5 text-center mx-auto", isActive && "font-bold")}
              >
                {item.label}
              </span>
            </Link>
          </DockIcon>
        )
      })}

      <Separator orientation="vertical" className="h-full py-2 ml-2 opacity-20 dark:opacity-100" />
      <DockIcon>
        <ThemeToggle className="py-2" />
      </DockIcon>
    </Dock>
  )
}
