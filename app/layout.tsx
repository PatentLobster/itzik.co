import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Analytics } from "@/components/analytics";
import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

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
  authors: [{ name: "Itzik" },{ name: "PatentLobster" }],
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
          className={
            "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-stone-900 dark:text-slate-50"
          }
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex  min-h-screen flex-col">
              <SiteHeader />
              <div className={"w-full -mb-20"}>{children}</div>
              <SiteFooter />
            </div>

            <TailwindIndicator />
          </ThemeProvider>
          <Analytics />
          <GoogleTagManager gtmId="GTM-WSSDZ2SB" />
        </body>
      </html>
    </>
  );
}
