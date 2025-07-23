"use client"

import { useState, useEffect } from "react"

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768) // md breakpoint
      setIsLoaded(true)
    }

    // Check on mount
    checkIsDesktop()

    // Check on resize
    window.addEventListener("resize", checkIsDesktop)

    return () => window.removeEventListener("resize", checkIsDesktop)
  }, [])

  return { isDesktop, isLoaded }
}
