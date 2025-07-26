"use client"

import { m } from "framer-motion"
import { useState } from "react"
import { GitBranch } from "lucide-react"

export function OpenSourceViz() {
  const [contributions, setContributions] = useState(234)
  const [stars, setStars] = useState(1.2)

  return (
    <div className="relative h-52 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <GitBranch className="w-5 h-5 text-green-500" />
        <span className="font-mono text-sm">Open Source</span>
      </div>

      <div className="grid grid-cols-2 gap-4 h-38">
        <div className="bg-background/50 rounded p-3">
          <div className="text-2xl font-bold text-green-500">{contributions}</div>
          <div className="text-xs text-muted-foreground">Contributions</div>

          {/* Contribution graph */}
          <div className="mt-2 grid grid-cols-10 gap-1">
            {Array.from({ length: 50 }).map((_, i) => (
              <m.div
                key={i}
                className="w-1 h-1 rounded-sm"
                style={{
                  backgroundColor: Math.random() > 0.7 ? "#10b981" : Math.random() > 0.4 ? "#059669" : "#065f46",
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.02 }}
              />
            ))}
          </div>
        </div>

        <div className="bg-background/50 rounded  py-2 px-3 ">
          <div className="text-2xl font-bold text-yellow-500">{stars}k</div>
          <div className="text-xs text-muted-foreground">GitHub Stars</div>

          {/* Repository languages */}
          <div className="mt-2 space-y-1 grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs">Go 25%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-xs">Rust 20%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs">TypeScript 18%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-xs">Python 15%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-stone-600 rounded-full"></div>
              <span className="text-xs">Bash 12%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs">HCL 10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
