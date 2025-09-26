import React from "react"

import type { Metadata } from "next"
import { Figtree } from "next/font/google"

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

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["300"],
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  title: "Itzik",
  description:
    "I'm Itzik, a DevOps engineer with 16 years of experience building scalable applications and solving real-world problems.",
  keywords: [
    "developer",
    "devops",
    "full-stack",
    "react",
    "next.js",
    "typescript",
    "node.js",
    "Terraform",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "DevOps",
    "Cloud",
    "Infrastructure",
    "Cloud Native",
    "Cloud Computing",
    "Cloud Architecture",
    "Cloud Engineering",
    "Cloud Development",
    "Cloud Operations",
    "Cloud Management",
    "Cloud Automation",
    "Cloud Monitoring",
    "Cloud Logging",
    "Cloud Security",
    "Cloud Networking",
    "Cloud Storage",
    "Cloud Database",
    "Cloud Migration",
    "Cloud Optimization",
    "Cloud Cost Optimization",
    "Cloud Cost Management",
    "Cloud Cost Analysis",
    "FPV",
    "SSH",
    "kwad",
    "Raspberry Pi",
    "Github",
    "GitLab",
    "AI",
    "10x",
    "1337",
    "Lobster",
    "PatentLobster",
  ],
  authors: [{ name: "Itzik" }, { name: "PatentLobster" }],
  creator: "Itzik",
  openGraph: {
    images: "https://itzik.co/og.png",
    type: "website",
    locale: "en_US",
    url: "https://itzik.co",
    title: "Itzik",
    description:
      "I'm Itzik, a DevOps engineer with 16 years of experience building scalable applications and solving real-world problems.",
    siteName: "Itzik.co",
  },
  twitter: {
    images: "https://itzik.co/og.png",
    card: "summary_large_image",
    title: "Itzik",
    description:
      "I'm Itzik, a DevOps engineer with 16 years of experience building scalable applications and solving real-world problems.",
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
              <div className={"w-full px-8 md:px-0"}>
                <main className={cn("mt-16 block")}>
                  <div className="mx-auto min-h-screen max-w-2xl space-y-8">
                    {children}
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
