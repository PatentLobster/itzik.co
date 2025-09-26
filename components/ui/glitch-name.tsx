"use client"

import { useState } from "react"

import { Gochi_Hand, Playpen_Sans_Hebrew } from "next/font/google"

import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

// const playpen = Playpen_Sans_Hebrew({ subsets: ["latin"], display: "swap", weight: ["400"] })
const playpen = Playpen_Sans_Hebrew({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-playpen",
  adjustFontFallback: false,
})
const gochi = Gochi_Hand({ subsets: ["latin"], display: "swap", weight: ["400"] })

interface GlitchNameProps {
  /** The English text to display */
  englishText: string
  /** The Hebrew text to display (should match the length of englishText) */
  hebrewText: string
  /** Array of indices indicating which letters should change to Hebrew */
  changeIndices: number[]
  /** Interaction mode: 'hover', 'click', or 'both' */
  mode?: "hover" | "click" | "both"
  /** CSS class for styling */
  className?: string
  /** Font size (Tailwind class) */
  fontSize?: string
  /** English font family */
  englishFont?: string
  /** Hebrew font family */
  hebrewFont?: string
}

export default function GlitchName({
  englishText,
  hebrewText,
  changeIndices,
  mode = "hover",
  className = "",
  fontSize = "text-8xl",
  englishFont = "Gochi Hand",
  hebrewFont = "Playpen Sans Hebrew",
}: GlitchNameProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  // Determine if Hebrew should be shown based on mode
  const showHebrew = () => {
    switch (mode) {
      case "hover":
        return isHovered
      case "click":
        return isClicked
      case "both":
        return isHovered || isClicked
      default:
        return false
    }
  }

  const handleClick = () => {
    if (mode === "click" || mode === "both") {
      setIsClicked(!isClicked)
    }
  }

  const handleMouseEnter = () => {
    if (mode === "hover" || mode === "both") {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (mode === "hover" || mode === "both") {
      setIsHovered(false)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <style jsx global>{`
        .letter-container {
          position: relative;
          display: inline-block;
          width: 0.6ch;
          text-align: center;
        }

        .letter-container.wide {
          width: 0.5ch;
        }
      `}</style>

      <motion.div
        className={`${fontSize} cursor-pointer select-none font-bold ${className}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex">
          {englishText.split("").map((letter, index) => {
            const shouldChange = changeIndices.includes(index)
            const hebrewLetter = hebrewText[index] || letter
            const isWide = ["t"].includes(letter)

            return (
              <div key={index} className={`letter-container ${isWide ? "mr-0.5" : ""}`}>
                <AnimatePresence mode="wait">
                  {!shouldChange || !showHebrew() ? (
                    <motion.span
                      key={`${letter}-en-${index}`}
                      className={cn(
                        "gochi absolute inset-0 flex items-center justify-center",
                        gochi.className
                      )}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {letter}
                    </motion.span>
                  ) : (
                    <motion.span
                      key={`${hebrewLetter}-he-${index}`}
                      className={cn(
                        "playpen absolute inset-0 flex items-center justify-center",
                        playpen.className
                      )}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {hebrewLetter}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
