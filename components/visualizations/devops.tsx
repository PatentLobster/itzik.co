"use client"

import { m } from "framer-motion"
import { useEffect, useState } from "react"
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
    <div className="relative h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Server className="w-5 h-5 text-blue-500" />
        <span className="font-mono text-sm">CI/CD Pipeline</span>
      </div>

      <div className="relative flex justify-between items-center h-20 mb-4">
        {/* Progress line background */}
        <div className="absolute top-6 left-6 right-6 h-0.5 bg-muted-foreground/20 rounded-full" />

        {/* Animated progress line */}
        <m.div
          className="absolute top-[1.65rem] left-6 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
          animate={{
            width: activeStage === 0 ? "0%" : `calc((100% - 3rem) * ${activeStage / (stages.length - 1)})`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {stages.map((stage, index) => (
          <div key={stage} className="flex flex-col items-center relative z-10">
            <m.div
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
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
                  className="w-3 h-3 bg-green-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
              ) : index === activeStage ? (
                <m.div
                  className="w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                />
              ) : (
                <div className="w-2 h-2 bg-muted-foreground/30 rounded-full" />
              )}
            </m.div>

            <span className="text-xs mt-2 font-mono">{stage}</span>
          </div>
        ))}
      </div>

      {/* Server metrics */}
      <div className="relative grid grid-cols-3 gap-2 -top-[0.75rem] text-xs font-mono">
        <div className="bg-background/50 rounded p-2 text-center">
          <div className="text-green-500 font-bold">45%</div>
          <div className="text-muted-foreground">CPU</div>
        </div>
        <div className="bg-background/50 rounded p-2 text-center">
          <div className="text-blue-500 font-bold">2.1GB</div>
          <div className="text-muted-foreground">Memory</div>
        </div>
        <div className="bg-background/50 rounded p-2 text-center">
          <div className="text-purple-500 font-bold">99.9%</div>
          <div className="text-muted-foreground">Uptime</div>
        </div>
      </div>
    </div>
  )
}
