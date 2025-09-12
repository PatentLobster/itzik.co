"use client"

import dynamic from "next/dynamic"
import { Doto } from "next/font/google"
import Link from "next/link"

import {
  Facebook,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Twitter,
  Youtube,
} from "lucide-react"

import { Timeline } from "@/components/homepage/timeline"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Separator } from "@/components/ui/separator"
import { SkeletonLoader } from "@/components/ui/skeleton-loader"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const doto = Doto({ subsets: ["latin"], display: "swap", weight: ["700"] })

const Skills = dynamic(
  () => import("@/components/homepage/skills-intro").then((mod) => ({ default: mod.Skills })),
  {
    ssr: false, // Don't render on server
    loading: () => <SkeletonLoader height="672px" className="bg-muted/30" />, // No loading state needed
  }
)

export default function Home() {
  return (
    <>
      <div className="relative space-y-2">
        <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
          [HEADER]
        </div>
        <h1 className="text-4xl font-bold tracking-wider">Itzik Sokolov</h1>

        <h2 className={cn("text-xl font-bold", doto.className)}> @PATENTLOBSTER</h2>
      </div>

      {/* Introduction Section */}
      <div className="relative flex items-start justify-between gap-8">
        <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
          [BIO]
        </div>
        <div className="flex-1 space-y-4 text-sm leading-relaxed">
          <p>
            I&apos;ve been passionate about code since childhood, building my first HTML website{" "}
            <span className="font-semibold">at age 9</span> and launching my first{" "}
            <span className="font-semibold">business at 16</span>.
          </p>
          <p>
            By 21, I was working full-time as a{" "}
            <span className="font-semibold">Full-Stack Engineer</span> before transitioning to{" "}
            <span className="font-semibold">DevOps</span>, where I discovered my passion for
            building <span className="font-semibold">scalable systems</span> and infrastructure.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring music, tinkering with
            electronics, piloting FPV drones, or planning my next road trip adventure.
          </p>
        </div>
      </div>

      <div className="relative space-y-6">
        <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
          [LINKS]
        </div>
        {/* Professional & Code */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Professional & Code
            </span>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="inversedblue"
              size="sm"
              className="text-xs"
              href={siteConfig.links.linkedin}
            >
              <Linkedin className="h-3 w-3" /> LinkedIn
            </Button>
            <Button variant="inversed" size="sm" className="text-xs" href={siteConfig.links.github}>
              <Github className="h-3 w-3" /> GitHub
            </Button>
            <Button variant="red" size="sm" className="text-xs" href={siteConfig.links.codewars}>
              <Icons.codeWars className="h-3 w-3" /> Codewars
            </Button>
            <Link href={"/contact"}>
              <Button variant="pink" size="sm" className="text-xs">
                <Mail className="h-3 w-3" /> Contact
              </Button>
            </Link>
          </div>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Social
            </span>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="inversedblue"
              size="sm"
              className="text-xs"
              href={siteConfig.links.facebook}
            >
              <Facebook className="h-3 w-3" /> Facebook
            </Button>
            <Button variant="blue" size="sm" className="text-xs" href={siteConfig.links.twitter}>
              <Twitter className="h-3 w-3" /> Twitter
            </Button>
            <Button variant="rose" size="sm" className="text-xs" href={siteConfig.links.instagram}>
              <Instagram className="h-3 w-3" /> Instagram
            </Button>
          </div>
        </div>

        {/* Play */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Play
            </span>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="inversedblue"
              size="sm"
              className="text-xs"
              href={siteConfig.links.steam}
            >
              <Icons.steam className="h-3 w-3" /> Steam
            </Button>
            <Button variant="purple" size="sm" className="text-xs" href={siteConfig.links.discord}>
              <Icons.discord className="h-3 w-3" /> Discord
            </Button>
            <Button variant="red" size="sm" className="text-xs" href={siteConfig.links.youtube}>
              <Youtube className="h-3 w-3" /> YouTube
            </Button>
          </div>
        </div>
      </div>

      <Separator className="mb-0 mt-8" />

      <div className="relative space-y-6">
        <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
          [work]
        </div>
        <Timeline />
      </div>

      <Separator className="mb-0 mt-8" />

      <div className="relative space-y-6">
        <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
          [skills]
        </div>
        <Skills />
      </div>
    </>
  )
}
