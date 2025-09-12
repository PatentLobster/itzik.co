"use client"

import { useEffect, useState } from "react"

export function useIsDesktop(width: number = 768) {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= width) // md breakpoint
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
