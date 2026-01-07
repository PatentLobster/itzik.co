"use client"

// import GlitchName from "./glitch-name"
import dynamic from "next/dynamic"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Dock, DockIcon } from "@/components/ui/dock"
import Logo from "@/components/ui/logo"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"
import HomeIcon from "@/components/ui/icons/home-icon"
import MessageCircleIcon from "@/components/ui/icons/message-circle-icon"

const GlitchName = dynamic(
  () => import("@/components/ui/glitch-name").then((mod) => ({ default: mod.default })),
  {
    ssr: false, // Don't render on server
    loading: () => <Logo className="px-2 text-3xl" />,
  }
)

const navbar = [
  {
    href: "/",
    icon: HomeIcon,
    activeIcon: HomeIcon,
    class: "",
    label: "Home"
  },
  // { href: "#", icon: Feather, label: "Skills" },
  // { href: "#", icon: Gem, label: "Uses" },
  {
    href: "/contact",
    icon: MessageCircleIcon,
    activeIcon: MessageCircleIcon,
    class: "",
    label: "Contact",
  },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <Dock
      disableMagnification
      iconSize={72}
      direction="middle"
      className="dark:border-slate-50/6 fixed bottom-0 left-0 right-0 z-50 border-slate-500/50 backdrop-blur transition-colors supports-backdrop-blur:bg-black/5 dark:text-white dark:supports-backdrop-blur:bg-white/5 md:sticky md:bottom-8 md:left-auto md:right-auto"
    >
      <GlitchName
        englishText="Itzik"
        hebrewText="קיציא"
        changeIndices={[0, 1, 3]} // I, t, i positions
        mode="both"
        fontSize="text-3xl px-2"
      />

      <Separator orientation="vertical" className="mr-2 h-full opacity-20 dark:opacity-100" />
      {navbar.map((item) => {
        const isActive = pathname === item.href

        return (
          <DockIcon key={item.label} disableMagnification size={72}>
            <Link
              href={item.href}
              aria-label={item.label}
              className="h-[64px]"
            >
              <div className={cn(
                "mx-auto flex h-[64px] flex-col justify-center text-center"
              )}>
                  <item.icon className={cn("mx-auto", item.class)} size={28} strokeWidth={isActive ? 1.8 : 1} />
                <span
                  className={cn(
                    "p-0.5 text-center text-xxs font-medium",
                    isActive && "font-bold"
                  )}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          </DockIcon>
        )
      })}

      <Separator orientation="vertical" className="ml-2 h-full py-2 opacity-20 dark:opacity-100" />
      <DockIcon>
        <ThemeToggle className="py-2" />
      </DockIcon>
    </Dock>
  )
}