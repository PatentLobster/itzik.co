"use client"

import { useEffect, useState } from "react"

import { m } from "framer-motion"
import { Code } from "lucide-react"

export function CodingViz() {
  const [linesOfCode, setLinesOfCode] = useState(1242847)
  const [commits, setCommits] = useState(89)

  useEffect(() => {
    const interval = setInterval(() => {
      setLinesOfCode((prev) => prev + Math.floor(Math.random() * 25))
      setCommits((prev) => prev + 1)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-52 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-4">
      <div className="mb-4 flex items-center gap-2">
        <Code className="h-5 w-5 text-blue-500" />
        <span className="font-mono text-sm">Development Activity</span>
      </div>

      <div className="grid h-32 grid-cols-2 gap-4">
        <div className="rounded bg-background/50 p-3">
          <m.div className="text-2xl font-bold text-blue-500">{linesOfCode.toLocaleString()}</m.div>
          <div className="text-xs text-muted-foreground">Lines of Code</div>

          {/* Code syntax highlighting simulation */}
          <div className="mt-2 space-y-1">
            <div className="flex gap-1">
              <div className="h-1 w-8 rounded bg-purple-500"></div>
              <div className="h-1 w-12 rounded bg-blue-500"></div>
              <div className="h-1 w-6 rounded bg-green-500"></div>
            </div>
            <div className="flex gap-1">
              <div className="h-1 w-4 rounded bg-orange-500"></div>
              <div className="h-1 w-16 rounded bg-red-500"></div>
            </div>
          </div>
        </div>

        <div className="rounded bg-background/50 p-3">
          <m.div
            className="text-2xl font-bold text-green-500"
            animate={{ scale: commits > 89 ? [1, 1.2, 1] : 1 }}
          >
            {commits}
          </m.div>
          <div className="text-xs text-muted-foreground">Commits</div>

          {/* Git activity visualization */}
          <div className="mt-2 flex gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <m.div
                key={i}
                className="h-3 w-3 rounded-sm bg-green-500/30"
                animate={{
                  backgroundColor: Math.random() > 0.5 ? "#10b981" : "#10b98130",
                }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
