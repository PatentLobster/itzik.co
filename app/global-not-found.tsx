import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";
import React from "react";
import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"
import { GoogleTagManager } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import FrontendObservability from "@/components/layout/frontend-observability"
import { Figtree, Doto } from "next/font/google";

const doto    = Doto({ subsets: ['latin'], display: "swap", weight: ['700'] })
const figtree = Figtree({ subsets: ['latin'], display: "swap", weight: ['300'] })
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
  authors: [{ name: "Itzik" }, { name: "PatentLobster" }],
  creator: "Itzik",
  openGraph: {
    images: "https://itzik.co/og.png",
    type: "website",
    locale: "en_US",
    url: "https://itzik.co",
    title: "Itzik - Page not found",
    description:
      "404",
    siteName: "Itzik.co",
  },
  twitter: {
    images: "https://itzik.co/og.png",
    card: "summary_large_image",
    title: "Itzik - Page not found",
    description:
      "404",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            " bg-background text-slate-900 antialiased dark:text-slate-50",
            figtree.className
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
            <div className={cn("flex flex-col", figtree.className)}>
            
              <div className={"w-full sm:px-8 md:px-0"}>
              <main className={cn("block  mt-16")}>
                <div className="max-w-2xl mx-auto min-h-[95vh] space-y-8">
                <div className="space-y-2 relative">
                  <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
                    [HEADER]
                  </div>
                  <h1 className="text-4xl font-bold tracking-wider">404</h1>

                  <h2 className={cn("text-xl font-bold", doto.className)}> PAGE NOT FOUND </h2>
                </div>
                  
                <div className="flex justify-between items-start gap-8 relative">
          <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
            [DOGE]
          </div>
          <div className="flex-1 grid mt-5 justify-center space-y-4 text-sm leading-relaxed text-center">
          <Image
      src="/imgs/doge.png"
      width={500}
      height={500}
      alt="Doge"
      className=""
    />
          <p>
            wow, such empty.
          </p>
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
  );
}
