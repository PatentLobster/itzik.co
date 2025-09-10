"use client"

import type React from "react"

import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Doto } from "next/font/google"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Send, ArrowLeft, Copy, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useConfetti } from "@/hooks/use-confetti";

const inter = Inter({ subsets: ["latin"] })
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

  const throwConfetti = useConfetti();

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ada7cb4b-97e1-4341-81db-62bd1cf2000b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      await throwConfetti();
    }
  }

  return (
    <>

        {/* Header Section */}
        <div className="space-y-2 relative">
          <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
            [HEADER]
          </div>
          <h1 className="text-4xl font-bold tracking-wider">Let&apos;s Connect</h1>
          <h2 className={cn("text-xl font-bold text-muted-foreground", doto.className)}>DROP ME A LINE</h2>
        </div>

        {/* Introduction */}
        <div className="space-y-4 relative">
          <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
            [INTRO]
          </div>
          <p className="text-sm leading-relaxed">
            Got an interesting project in mind? Want to collaborate on something cool? Or just want to chat about code,
            drones, or the latest tech trends? I&apos;d love to hear from you.
          </p>
        </div>

        <Separator className="my-8" />

        {/* Quick Contact Options */}
        <div className="space-y-6 relative">
          <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
            [QUICK]
          </div>
          <h3 className="text-lg font-semibold">Quick Contact</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Email Card */}
            <div className="p-4 border rounded-lg space-y-3 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-sm">Email</span>
              </div>
              <div className="space-y-2">
                <p className="text-xl text-muted-foreground text-center font-mono">contact@itzik.co</p>
                <Button variant="outline" size={"sm"}  onClick={handleCopyEmail} className="w-full text-xs py-2 bg-transparent">
                  {copied ? (
                    <>
                      <CheckCircle className="w-3 h-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy Email
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="p-4 border rounded-lg space-y-3">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium text-sm">Response Time</span>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Usually within 48 hours</p>
                <p className="text-xs text-muted-foreground">Faster for interesting projects 🚀</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Contact Form */}
        <div className="space-y-6 relative">
          <div className="absolute -left-16 top-0 text-xs text-muted-foreground/40 font-mono hidden lg:block">
            [FORM]
          </div>
          <h3 className="text-lg font-semibold">Send a Message</h3>

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
                placeholder="What&apos;s this about?"
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

            <Button type="submit" variant="purple" className="w-full py-4 mt-4">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>


        </div>
    </>
  )
}
