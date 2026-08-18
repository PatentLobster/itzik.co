"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

import Logo from "@/components/ui/logo"

const GlitchName = dynamic(() => import("@/components/ui/glitch-name"), {
  ssr: false,
  loading: () => <Logo className="text-7xl md:text-9xl" />,
})

export function Hero() {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center gap-10 text-center">
      <h1 className="sr-only">Itzik</h1>

      <GlitchName
        englishText="Itzik"
        hebrewText="קיציא"
        changeIndices={[0, 1, 3]}
        mode="both"
        fontSize="text-7xl md:text-9xl"
        className="font-extrabold"
        repeatDelay={2600}
      />

      <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
        DevOps engineer by trade, tinkerer by nature. I&apos;ve been shipping code since I was nine,
        breaking things (mostly on purpose) ever since, and I still get a little too excited about
        clean infrastructure, fast networks, and the occasional FPV drone.
      </p>

      <div className="flex items-center gap-6 text-sm">
        <Link
          href="/contact"
          className="text-foreground underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
        >
          Contact
        </Link>
        <a
          href="mailto:contact@itzik.co"
          className="text-foreground underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
        >
          Email
        </a>
      </div>
    </section>
  )
}
