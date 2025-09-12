"use client"

import type { ReactNode } from "react"

import { domAnimation, LazyMotion } from "framer-motion"

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
