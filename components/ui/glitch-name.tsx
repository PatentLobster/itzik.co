
"use client"

import { useState, useEffect } from "react"
import { Gochi_Hand, Playpen_Sans_Hebrew } from "next/font/google"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

const playpen = Playpen_Sans_Hebrew({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-playpen",
  adjustFontFallback: false,
})
const gochi = Gochi_Hand({ subsets: ["latin"], display: "swap", weight: ["400"] })

interface GlitchNameProps {
  englishText: string
  hebrewText: string
  changeIndices: number[]
  mode?: "hover" | "click" | "both"
  className?: string
  fontSize?: string
  englishFont?: string
  hebrewFont?: string
  /** Custom delay (ms) for repeat animation */
  repeatDelay?: number
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
  repeatDelay = 2000,
}: GlitchNameProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [autoToggle, setAutoToggle] = useState(false)

  // Ambient loop toggles the effect, but pauses while the user is
  // interacting so intent (hover/click) always wins instead of fighting it.
  const interacting = isHovered || isClicked
  useEffect(() => {
    if (interacting) return
    const interval = setInterval(() => {
      setAutoToggle(prev => !prev)
    }, repeatDelay)
    return () => clearInterval(interval)
  }, [repeatDelay, interacting])

  const showHebrew = () => {
    switch (mode) {
      case "hover":
        return isHovered || autoToggle
      case "click":
        return isClicked || autoToggle
      case "both":
        return isHovered || isClicked || autoToggle
      default:
        return autoToggle
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
          line-height: 1.1;
          text-align: center;
        }

        .letter-container.wide {
          width: 0.5ch;
        }
      `}</style>

      <motion.div
        className={`${fontSize} select-none font-bold ${className}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex">
          {englishText.split("").map((letter, index) => {
            const shouldChange = changeIndices.includes(index)
            const hebrewLetter = hebrewText[index] || letter
            const isWide = ["t"].includes(letter)

            // Stagger by the letter's order within the changing set so the
            // cascade is evenly spaced regardless of gaps in changeIndices.
            const changeOrder = changeIndices.indexOf(index)
            const stagger = (changeOrder < 0 ? 0 : changeOrder) * 0.07
            const transition = { duration: 0.45, delay: stagger, ease: [0.22, 1, 0.36, 1] as const }
            // In-place blur + scale so glyphs morph/dissolve into each other
            // rather than sliding and fading.
            const morph = {
              initial: { opacity: 0, scale: 0.7, filter: "blur(6px)" },
              animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
              exit: { opacity: 0, scale: 1.25, filter: "blur(6px)" },
            }

            return (
              <div key={index} className={`letter-container ${isWide ? "mr-0.5" : ""}`}>
                {/* Invisible in-flow glyph reserves height/width so the
                    absolutely-positioned animated spans don't collapse. */}
                <span aria-hidden className={cn("invisible", gochi.className)}>
                  {letter}
                </span>
                <AnimatePresence initial={false}>
                  {!shouldChange || !showHebrew() ? (
                    <motion.span
                      key={`${letter}-en-${index}`}
                      className={cn(
                        "gochi absolute inset-0 flex items-center justify-center",
                        gochi.className
                      )}
                      initial={morph.initial}
                      animate={morph.animate}
                      exit={morph.exit}
                      transition={transition}
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
                      initial={morph.initial}
                      animate={morph.animate}
                      exit={morph.exit}
                      transition={transition}
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
