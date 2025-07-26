"use client"

import { m } from "framer-motion"
import { useEffect, useState } from "react"
import { Cpu } from "lucide-react"

export function HardwareViz() {
  const [cpuTemp, setCpuTemp] = useState(45)
  const [gpuUsage, setGpuUsage] = useState(67)

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuTemp((prev) => 45 + Math.sin(Date.now() / 2000) * 10)
      setGpuUsage((prev) => 67 + Math.sin(Date.now() / 1500) * 20)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-52 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Cpu className="w-5 h-5 text-purple-500" />
        <span className="font-mono text-sm">Hardware Monitor</span>
      </div>

      <div className="grid grid-cols-2 gap-4 h-32">
        <div className="bg-background/50 rounded p-3">
          <div className="text-2xl font-bold text-orange-500">{cpuTemp.toFixed(0)}°C</div>
          <div className="text-xs text-muted-foreground">CPU Temperature</div>

          {/* Temperature gauge */}
          <div className="mt-2 w-full h-2 bg-muted rounded-full overflow-hidden">
            <m.div
              className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"
              animate={{ width: `${(cpuTemp / 80) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="bg-background/50 rounded p-3">
          <div className="text-2xl font-bold text-blue-500">{gpuUsage.toFixed(0)}%</div>
          <div className="text-xs text-muted-foreground">GPU Usage</div>

          {/* Usage bars */}
          <div className="mt-2 space-y-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <m.div
                key={i}
                className="w-full h-1 bg-muted rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: Math.max(0, (gpuUsage - i * 20) / 100) }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-full bg-blue-500 rounded" />
              </m.div>
            ))}
          </div>
        </div>
      </div>

      {/* System architecture diagram */}
      <div className="absolute bottom-8 right-2 opacity-30">
        <svg width="60" height="40" viewBox="0 0 60 40">
          <rect x="10" y="10" width="15" height="8" fill="currentColor" rx="1" />
          <rect x="30" y="10" width="15" height="8" fill="currentColor" rx="1" />
          <rect x="10" y="25" width="15" height="8" fill="currentColor" rx="1" />
          <rect x="30" y="25" width="15" height="8" fill="currentColor" rx="1" />
          <path d="M25 14 L30 14 M25 29 L30 29 M17 18 L17 25 M37 18 L37 25" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </div>
  )
}
