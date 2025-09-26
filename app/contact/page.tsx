"use client"

import type React from "react"
import { useState } from "react"

import { Doto, Figtree } from "next/font/google"
import Link from "next/link"

import {
  ArrowLeft,
  CheckCircle,
  Copy,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/config/site"
import { useConfetti } from "@/hooks/use-confetti"
import { cn } from "@/lib/utils"

const figtree = Figtree({ subsets: ["latin"] })
const doto = Doto({ subsets: ["latin"], display: "swap", weight: ["700"] })

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("contact@itzik.co")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const throwConfetti = useConfetti()

  async function handleSubmit(event: any) {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_FORMS_KEY ?? "")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
    const result = await response.json()
    if (result.success) {
      await throwConfetti()
    }
  }

  return (
    <>
      {/* Header Section */}
      <div className={cn("relative space-y-2", figtree.className)}>
        <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
          [HEADER]
        </div>
        <h1 className="text-4xl font-bold tracking-wider">Let&apos;s Connect</h1>
        <h2 className={cn("text-xl font-bold text-foreground", doto.className)}>DROP ME A LINE</h2>
      </div>

      {/* Introduction */}
      <div className="relative space-y-4">
        <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
          [INTRO]
        </div>
        <p className="text-sm leading-relaxed">
          Got an interesting project in mind? Want to collaborate on something cool? Or just want to
          chat about code, drones, or the latest tech trends? I&apos;d love to hear from you.
        </p>
      </div>

      <Separator className="my-8" />

      {/* Quick Contact Options */}
      <div className="relative space-y-6">
        <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
          [QUICK]
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email Card */}
          <div className="space-y-3 rounded-lg border p-4 transition-colors hover:bg-muted/50">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Email</span>
            </div>
            <div className="space-y-2">
              <p className="text-center font-mono text-xl text-muted-foreground">
                contact@itzik.co
              </p>
              <Button
                variant="outline"
                size={"sm"}
                onClick={handleCopyEmail}
                className="w-full bg-transparent py-2 text-xs"
              >
                {copied ? (
                  <>
                    <CheckCircle className="h-3 w-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-3 rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">DM</span>
            </div>
            <div className="grid grid-cols-3 gap-3 py-2">
              <Button
                variant="inversedblue"
                size="sm"
                className="text-xs"
                href={siteConfig.links.linkedin}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3 w-3" />
              </Button>
              <Button
                variant="purple"
                size="sm"
                className="text-xs"
                href={siteConfig.links.discord}
                aria-label="Discord"
              >
                <Icons.discord className="h-3 w-3" />
              </Button>
              <Button
                variant="rose"
                size="sm"
                className="text-xs"
                href={siteConfig.links.instagram}
                aria-label="Instagram"
              >
                <Instagram className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Contact Form */}
      <div className="relative space-y-6">
        <div className="absolute -left-16 top-0 hidden font-mono text-xs text-muted-foreground/40 lg:block">
          [FORM]
        </div>

        <form onSubmit={handleSubmit} name={"contact"} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              required
            />
          </div>

          <div className="space-y-4 pb-4">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project, idea, or just say hello..."
              rows={6}
              required
            />
          </div>

          <Button type="submit" variant="purple" className="mt-4 w-full py-4">
            <Send className="h-4 w-4" />
            Send Message
          </Button>
        </form>
      </div>
    </>
  )
}
