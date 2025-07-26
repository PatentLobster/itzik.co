"use client"

interface SkeletonLoaderProps {
  className?: string
  variant?: "card" | "text" | "circular" | "rectangular"
  width?: string | number
  height?: string | number
}

export function SkeletonLoader({
  className = "",
  variant = "rectangular",
  width = "100%",
  height = "auto",
}: SkeletonLoaderProps) {
  const baseClasses = "animate-pulse bg-muted/50"

  const variantClasses = {
    card: "rounded-lg",
    text: "rounded h-4",
    circular: "rounded-full",
    rectangular: "rounded",
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
      aria-label="Loading..."
    />
  )
}
