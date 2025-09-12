"use client";

import { cn } from "@/lib/utils";

import dynamic from "next/dynamic"
import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { siteConfig } from "@/config/site"
import Link from "next/link";

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, FileText, MessageSquare, Facebook, Instagram, Youtube } from "lucide-react"
import { Icons } from "@/components/ui/icons";
import { Timeline } from "@/components/homepage/timeline";

import {Doto} from "next/font/google";
const doto = Doto({subsets: ['latin'], display: "swap", weight: ['700']})

const Skills = dynamic(
  () => import("@/components/homepage/skills-intro").then((mod) => ({ default: mod.Skills })),
  {
    ssr: false, // Don't render on server
    loading: () => <SkeletonLoader height="672px" className="bg-muted/30" />, // No loading state needed
  },
)



export default function Home() {
  return (
    <>
        <div className="space-y-2 relative">
          <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
            [HEADER]
          </div>
          <h1 className="text-4xl font-bold tracking-wider">Itzik Sokolov</h1>

          <h2 className={cn("text-xl font-bold", doto.className)}> @PATENTLOBSTER</h2>
        </div>

        {/* Introduction Section */}
        <div className="flex justify-between items-start gap-8 relative">
          <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
            [BIO]
          </div>
          <div className="flex-1 space-y-4 text-sm leading-relaxed">
            <p>
              I&apos;ve been passionate about code since childhood, building my first HTML website{" "}
              <span className="font-semibold">at age 9</span> and launching my first{" "}
              <span className="font-semibold">business at 16</span>.
            </p>
            <p>
              By 21, I was working full-time as a <span className="font-semibold">Full-Stack Engineer</span> before
              transitioning to <span className="font-semibold">DevOps</span>, where I discovered my passion for building{" "}
              <span className="font-semibold">scalable systems</span> and infrastructure.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring music, tinkering with electronics, piloting FPV
              drones, or planning my next road trip adventure.
            </p>
          </div>
        </div>


        <div className="space-y-6 relative">
          <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
            [LINKS]
          </div>
          {/* Professional & Code */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Professional & Code
              </span>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            <div className="flex justify-center gap-3 flex-wrap">
              <Button variant="inversedblue"  size="sm" className="text-xs" href={siteConfig.links.linkedin} >
                <Linkedin className="w-3 h-3" /> LinkedIn
              </Button>
              <Button variant="inversed"  size="sm" className="text-xs" href={siteConfig.links.github} >
                <Github className="w-3 h-3"  /> GitHub
              </Button>
              <Button variant="red"  size="sm" className="text-xs" href={siteConfig.links.codewars} >
                <Icons.codeWars className="w-3 h-3" /> Codewars
              </Button>
              <Link href={"/contact"} >
              <Button variant="pink"  size="sm" className="text-xs" >
                <Mail className="w-3 h-3" /> Contact
              </Button>
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Social</span>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            <div className="flex justify-center gap-3 flex-wrap">
              <Button variant="inversedblue" size="sm" className="text-xs" href={siteConfig.links.facebook} >
                <Facebook className="w-3 h-3" /> Facebook
              </Button>
              <Button variant="blue" size="sm" className="text-xs" href={siteConfig.links.twitter} >
                <Twitter className="w-3 h-3" /> Twitter
              </Button>
              <Button variant="rose" size="sm" className="text-xs" href={siteConfig.links.instagram} >
                <Instagram className="w-3 h-3" /> Instagram
              </Button>
            </div>
          </div>

          {/* Play */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Play</span>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            <div className="flex justify-center gap-3 flex-wrap">
              <Button variant="inversedblue" size="sm" className="text-xs" href={siteConfig.links.steam} >
                <Icons.steam className="w-3 h-3" /> Steam
              </Button>
              <Button variant="purple" size="sm" className="text-xs"  href={siteConfig.links.discord} >
                <Icons.discord className="w-3 h-3"/> Discord
              </Button>
              <Button variant="red" size="sm" className="text-xs" href={siteConfig.links.youtube} >
                <Youtube className="w-3 h-3" /> YouTube
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mt-8 mb-0" />

        
        <div className="space-y-6 relative">
          <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
            [work]
          </div>
            <Timeline />
        </div>
        
        <Separator className="mt-8 mb-0" />

        <div className="space-y-6 relative">
          <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
            [skills]
          </div>
            <Skills />
        </div>
      </>
  )
}