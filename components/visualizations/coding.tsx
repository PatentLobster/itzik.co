"use client"

import { m } from "framer-motion"
import { useEffect, useState } from "react"
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
    <div className="relative h-52 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-5 h-5 text-blue-500" />
        <span className="font-mono text-sm">Development Activity</span>
      </div>

      <div className="grid grid-cols-2 gap-4 h-32">
        <div className="bg-background/50 rounded p-3">
          <m.div
            className="text-2xl font-bold text-blue-500"
          >
            {linesOfCode.toLocaleString()}
          </m.div>
          <div className="text-xs text-muted-foreground">Lines of Code</div>

          {/* Code syntax highlighting simulation */}
          <div className="mt-2 space-y-1">
            <div className="flex gap-1">
              <div className="w-8 h-1 bg-purple-500 rounded"></div>
              <div className="w-12 h-1 bg-blue-500 rounded"></div>
              <div className="w-6 h-1 bg-green-500 rounded"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-4 h-1 bg-orange-500 rounded"></div>
              <div className="w-16 h-1 bg-red-500 rounded"></div>
            </div>
          </div>
        </div>

        <div className="bg-background/50 rounded p-3">
          <m.div className="text-2xl font-bold text-green-500" animate={{ scale: commits > 89 ? [1, 1.2, 1] : 1 }}>
            {commits}
          </m.div>
          <div className="text-xs text-muted-foreground">Commits</div>

          {/* Git activity visualization */}
          <div className="mt-2 flex gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <m.div
                key={i}
                className="w-3 h-3 bg-green-500/30 rounded-sm"
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
