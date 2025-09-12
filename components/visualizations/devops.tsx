"use client"

import { useEffect, useState } from "react"

import { m, motion } from "framer-motion"
import { Server } from "lucide-react"

export function DevOpsViz() {
  const [activeStage, setActiveStage] = useState(0)
  const stages = ["Code", "Build", "Test", "Deploy", "Monitor"]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [stages.length])

  return (
    <div className="relative h-48 rounded-t-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4">
      <div className="mb-4 flex items-center gap-2">
        <Server className="h-5 w-5 text-blue-500" />
        <span className="font-mono text-sm">CI/CD Pipeline</span>
      </div>

      <div className="relative z-50 mb-4 flex h-20 items-center justify-between">
        {/* Progress line background */}
        <div className="absolute left-6 right-6 top-6 h-0.5 rounded-full bg-muted-foreground/20" />

        {/* Animated progress line */}
        <motion.div
          className="absolute left-6 top-[1.65rem] h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
          animate={{
            width: `calc((100% - 3rem) * ${activeStage / (stages.length - 1)})`,
          }}
          initial={{ width: "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {stages.map((stage, index) => (
          <div key={stage} className="relative z-10 flex flex-col items-center">
            <m.div
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                index <= activeStage
                  ? index === activeStage
                    ? "border-blue-500 bg-blue-500/20"
                    : "border-green-500 bg-green-500/20"
                  : "border-muted-foreground/30 bg-background"
              }`}
              animate={{
                scale: index === activeStage ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {index < activeStage ? (
                <m.div
                  className="h-3 w-3 rounded-full bg-green-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
              ) : index === activeStage ? (
                <m.div
                  className="h-2 w-2 rounded-full bg-blue-500"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                />
              ) : (
                <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
              )}
            </m.div>

            <span className="mt-2 font-mono text-xs">{stage}</span>
          </div>
        ))}
      </div>

      {/* Server metrics */}
      <div className="relative -top-[0.75rem] grid grid-cols-3 gap-2 font-mono text-xs">
        <div className="rounded bg-background/50 p-2 text-center">
          <div className="font-bold text-green-500">45%</div>
          <div className="text-muted-foreground">CPU</div>
        </div>
        <div className="rounded bg-background/50 p-2 text-center">
          <div className="font-bold text-blue-500">2.1GB</div>
          <div className="text-muted-foreground">Memory</div>
        </div>
        <div className="rounded bg-background/50 p-2 text-center">
          <div className="font-bold text-purple-500">99.9%</div>
          <div className="text-muted-foreground">Uptime</div>
        </div>
      </div>
    </div>
  )
}
