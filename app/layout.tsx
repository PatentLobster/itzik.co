import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Analytics } from "@/components/analytics";
import React from "react";
import { motion } from "framer-motion";

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
        </body>
      </html>
    </>
  );
}
