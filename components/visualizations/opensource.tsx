"use client"

import { useState } from "react"

import { m } from "framer-motion"
import { GitBranch } from "lucide-react"

export function OpenSourceViz() {
  const [contributions, setContributions] = useState(234)
  const [stars, setStars] = useState(1.2)

  return (
    <div className="relative h-52 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-4">
      <div className="mb-4 flex items-center gap-2">
        <GitBranch className="h-5 w-5 text-green-500" />
        <span className="font-mono text-sm">Open Source</span>
      </div>

      <div className="h-38 grid grid-cols-2 gap-4">
        <div className="rounded bg-background/50 p-3">
          <div className="text-2xl font-bold text-green-500">{contributions}</div>
          <div className="text-xs text-muted-foreground">Contributions</div>

          {/* Contribution graph */}
          <div className="mt-2 grid grid-cols-10 gap-1">
            {Array.from({ length: 50 }).map((_, i) => (
              <m.div
                key={i}
                className="h-1 w-1 rounded-sm"
                style={{
                  backgroundColor:
                    Math.random() > 0.7 ? "#10b981" : Math.random() > 0.4 ? "#059669" : "#065f46",
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.02 }}
              />
            ))}
          </div>
        </div>

        <div className="rounded bg-background/50 px-3 py-2">
          <div className="text-2xl font-bold text-yellow-500">{stars}k</div>
          <div className="text-xs text-muted-foreground">GitHub Stars</div>

          {/* Repository languages */}
          <div className="mt-2 grid grid-cols-2 gap-2 space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-xs">Go 25%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <span className="text-xs">Rust 20%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-xs">TypeScript 18%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <span className="text-xs">Python 15%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-stone-600"></div>
              <span className="text-xs">Bash 12%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span className="text-xs">HCL 10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
