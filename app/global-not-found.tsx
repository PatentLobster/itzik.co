import React from "react"

import type { Metadata } from "next"
import { Doto, Figtree } from "next/font/google"
import Image from "next/image"

import { GoogleTagManager } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { SiteFooter } from "@/components/layout/footer"
import FrontendObservability from "@/components/layout/frontend-observability"
import { Navbar } from "@/components/layout/navbar"
import { TailwindIndicator } from "@/components/layout/tailwind-indicator"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { cn } from "@/lib/utils"

import "./globals.css"

const doto = Doto({ subsets: ["latin"], display: "swap", weight: ["700"] })
const figtree = Figtree({ subsets: ["latin"], display: "swap", weight: ["300"] })

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
  authors: [{ name: "Itzik" }, { name: "PatentLobster" }],
  creator: "Itzik",
  openGraph: {
    images: "https://itzik.co/og.png",
    type: "website",
    locale: "en_US",
    url: "https://itzik.co",
    title: "Itzik - Page not found",
    description: "404",
    siteName: "Itzik.co",
  },
  twitter: {
    images: "https://itzik.co/og.png",
    card: "summary_large_image",
    title: "Itzik - Page not found",
    description: "404",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background text-slate-900 antialiased dark:text-slate-50",
            figtree.className
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className={cn("flex flex-col", figtree.className)}>
              <div className={"w-full sm:px-8 md:px-0"}>
                <main className={cn("mt-16 block")}>
                  <div className="mx-auto min-h-[95vh] max-w-2xl space-y-8">
                    <div className="relative space-y-2">
                      <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
                        [HEADER]
                      </div>
                      <h1 className="text-4xl font-bold tracking-wider">404</h1>

                      <h2 className={cn("text-xl font-bold", doto.className)}> PAGE NOT FOUND </h2>
                    </div>

                    <div className="relative flex items-start justify-between gap-8">
                      <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
                        [DOGE]
                      </div>
                      <div className="mt-5 grid flex-1 justify-center space-y-4 text-center text-sm leading-relaxed">
                        <Image
                          src="/imgs/doge.png"
                          width={500}
                          height={500}
                          alt="Doge"
                          className=""
                        />
                        <p>wow, such empty.</p>
                      </div>
                    </div>
                    <SiteFooter />
                  </div>
                </main>

                <Navbar />
              </div>
            </div>

            <TailwindIndicator />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
          <GoogleTagManager gtmId="GTM-WSSDZ2SB" />
          <FrontendObservability />
        </body>
      </html>
    </>
  )
}
