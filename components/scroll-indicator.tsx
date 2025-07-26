"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ScrollIndicatorProps {
  targetId?: string
}

export function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  const handleScrollDown = () => {
    if (targetId) {
      // Scroll to specific element
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        return
      }
    }

    // Fallback: scroll by viewport height
    const nextSection = window.innerHeight
    window.scrollTo({
      top: nextSection,
      behavior: "smooth",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-10 cursor-pointer group"
      onClick={handleScrollDown}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleScrollDown()
        }
      }}
      aria-label="Scroll to next section"
    >
      {/* Text */}
      <motion.p
        className="text-sm font-medium text-slate-600 dark:text-slate-400 tracking-wide select-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        Scroll to explore
      </motion.p>

      {/* Animated Arrow */}
      <motion.div
        className="flex flex-col items-center"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="p-2 rounded-full dark:bg-slate-800/80 bg-slate-100/80  backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg group-hover:border-blue-300 dark:group-hover:border-blue-600 group-focus:border-blue-300 dark:group-focus:border-blue-600 transition-colors duration-300"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(59, 130, 246, 0.1)",
          }}
          whileTap={{
            scale: 0.9,
            backgroundColor: "rgba(59, 130, 246, 0.2)",
          }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-focus:text-blue-600 dark:group-focus:text-blue-400 transition-colors duration-300" />
        </motion.div>
      </motion.div>

      {/* Scroll line indicator */}
      <motion.div
        className="w-px h-12 bg-linear-to-b from-slate-300 to-transparent dark:from-slate-600 dark:to-transparent group-hover:from-blue-400 dark:group-hover:from-blue-500 transition-colors duration-300"
        initial={{ height: 0 }}
        animate={{ height: 48 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
    </motion.div>
  )
}
