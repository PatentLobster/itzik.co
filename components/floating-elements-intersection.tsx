"use client"

import dynamic from "next/dynamic"
import { useIsDesktop } from "../hooks/use-is-desktop"

// Dynamically import FloatingElements only when needed
const FloatingElements = dynamic(
  () => import("./floating-elements").then((mod) => ({ default: mod.FloatingElements })),
  {
    ssr: false, // Don't render on server
    loading: () => null, // No loading state needed
  },
)

export function FloatingElementsIntersection() {
  const { isDesktop, isLoaded } = useIsDesktop()

  // Don't render anything until we know the screen size
  if (!isLoaded) return null

  // Only render on desktop
  if (!isDesktop) return null

  return <FloatingElements />
}
