"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import type { ReactNode } from "react"

interface LazyMotionWrapperProps {
  children: ReactNode
}

export function LazyMotionWrapper({ children }: LazyMotionWrapperProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
