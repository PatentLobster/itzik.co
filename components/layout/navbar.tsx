"use client"

// import GlitchName from "./glitch-name"
import dynamic from "next/dynamic"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Dock, DockIcon } from "@/components/ui/dock"
import { Icons } from "@/components/ui/icons"
import Logo from "@/components/ui/logo"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

const GlitchName = dynamic(
  () => import("@/components/ui/glitch-name").then((mod) => ({ default: mod.default })),
  {
    ssr: false, // Don't render on server
    loading: () => <Logo className="px-2 text-3xl" />,
  }
)

const navbar = [
  { href: "/", icon: Icons.home, activeIcon: Icons.homeActive, class: "", label: "Home" },
  // { href: "#", icon: Feather, label: "Skills" },
  // { href: "#", icon: Gem, label: "Uses" },
  {
    href: "/contact",
    icon: Icons.contact,
    activeIcon: Icons.contactActive,
    class: "size-3 mt-0 h-4 w-4 p-0 m-0",
    label: "Contact",
  },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <Dock
      disableMagnification
      direction="middle"
      className="dark:border-slate-50/6 sticky bottom-8 z-50 border-slate-500/50 backdrop-blur transition-colors supports-backdrop-blur:bg-black/5 dark:text-white dark:supports-backdrop-blur:bg-white/5"
    >
      <GlitchName
        englishText="Itzik"
        hebrewText="קיזיק"
        changeIndices={[0, 1, 3]} // I, t, i positions
        mode="both"
        fontSize="text-3xl px-2"
      />

      <Separator orientation="vertical" className="mr-2 h-full opacity-20 dark:opacity-100" />
      {navbar.map((item) => {
        const isActive = pathname === item.href

        return (
          <DockIcon key={item.label} disableMagnification>
            <Link
              href={item.href}
              aria-label={item.label}
              className={cn(
                "mx-auto flex h-16 w-16 flex-col justify-center gap-0.5 px-1 py-2 text-center"
              )}
            >
              {isActive ? (
                <item.activeIcon className={cn("mx-auto", item.class)} strokeWidth={0.8} />
              ) : (
                <item.icon className={cn("mx-auto", item.class)} strokeWidth={0.8} />
              )}
              <span
                className={cn(
                  "mx-auto p-0.5 text-center text-xxs font-medium",
                  isActive && "font-bold"
                )}
              >
                {item.label}
              </span>
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
