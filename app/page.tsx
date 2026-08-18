import Link from "next/link"

import { Timeline } from "@/components/homepage/timeline"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"

const links = [
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "GitHub", href: siteConfig.links.github },
  { label: "Twitter", href: siteConfig.links.twitter },
  { label: "YouTube", href: siteConfig.links.youtube },
  { label: "Instagram", href: siteConfig.links.instagram },
]

const skills = [
  "DevOps & Infrastructure",
  "Ethical Hacking",
  "Stock & Algo Trading",
  "Continuous Learning",
]

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Itzik Sokolov</h1>
        <p className="font-mono text-sm text-muted-foreground">@patentlobster</p>
      </div>

      {/* Bio */}
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          I&apos;ve been passionate about code since childhood, building my first HTML website at
          age 9 and launching my first business at 16.
        </p>
        <p>
          By 21, I was working full-time as a Full-Stack Engineer before moving into DevOps, where I
          found my passion for building scalable systems and infrastructure.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll find me exploring music, tinkering with electronics,
          piloting FPV drones, or planning my next road trip.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
          >
            {link.label}
          </a>
        ))}
        <Link
          href="/contact"
          className="text-foreground underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
        >
          Contact
        </Link>
      </div>

      <Separator />

      {/* Work */}
      <div className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Work</h2>
        <Timeline />
      </div>

      <Separator />

      {/* Skills */}
      <div className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Focus</h2>
        <ul className="space-y-2 text-sm">
          {skills.map((skill) => (
            <li key={skill} className="text-foreground">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
