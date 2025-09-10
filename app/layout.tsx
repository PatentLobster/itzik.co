import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import React from "react";
import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"
import { GoogleTagManager } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import FrontendObservability from "@/components/frontend-observability"
import { Figtree } from "next/font/google";
const figtree = Figtree({ subsets: ['latin'], display: "swap", weight: ['300'] })

export const metadata: Metadata = {
  title: "Itzik",
  description:
    "I'm Itzik, a DevOps engineer with 16 years of experience building scalable applications and solving real-world problems.",
  keywords: [
    "developer", "devops", "full-stack", "react", "next.js",
    "typescript", "node.js", "Terraform", "AWS", "Azure", "GCP",
    "Docker", "Kubernetes", "CI/CD", "DevOps", "Cloud", "Infrastructure",
    "Cloud Native", "Cloud Computing", "Cloud Architecture", "Cloud Engineering",
    "Cloud Development", "Cloud Operations", "Cloud Management", "Cloud Automation",
    "Cloud Monitoring", "Cloud Logging", "Cloud Security", "Cloud Networking", "Cloud Storage",
    "Cloud Database", "Cloud Migration", "Cloud Optimization", "Cloud Cost Optimization",
    "Cloud Cost Management", "Cloud Cost Analysis", "FPV", "SSH", "kwad", "Raspberry Pi",
    "Github", "GitLab", "AI", "10x", "1337", "Lobster", "PatentLobster"
  ],
  authors: [{ name: "Itzik" }, { name: "PatentLobster" }],
  creator: "Itzik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itzik.co",
    title: "Itzik",
    description:
      "I'm Itzik, a DevOps engineer with 16 years of experience building scalable applications and solving real-world problems.",
    siteName: "Itzik.co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Itzik",
    description:
      "I'm Itzik, a DevOps engineer with 16 years of experience building scalable applications and solving real-world problems.",
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
                <div className="max-w-2xl mx-auto space-y-8">
                  {children}
                  <SiteFooter />
                </div>
              </main>
              </div>
              
              <Navbar />

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
