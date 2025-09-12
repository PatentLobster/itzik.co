"use client"

import { useEffect, useState } from "react"

import { m } from "framer-motion"
import { Search } from "lucide-react"

export function SEOViz() {
  const [metrics, setMetrics] = useState({
    organic: 1250,
    keywords: 89,
    backlinks: 342,
    ranking: 3.2,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        organic: prev.organic + Math.floor(Math.random() * 10 - 5),
        keywords: prev.keywords + Math.floor(Math.random() * 3 - 1),
        backlinks: prev.backlinks + Math.floor(Math.random() * 5 - 2),
        ranking: Math.max(1, prev.ranking + (Math.random() - 0.5) * 0.2),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-54 relative rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 p-4">
      <div className="mb-2 flex items-center gap-2">
        <Search className="h-5 w-5 text-orange-500" />
        <span className="font-mono text-sm">SEO Analytics</span>
      </div>

      <div className="-py-1 grid grid-cols-2 gap-3">
        <m.div className="rounded bg-background/50 p-3" whileHover={{ scale: 1.05 }}>
          <div className="text-l font-bold text-green-500">{metrics.organic}</div>
          <div className="text-xs text-muted-foreground">Organic Traffic</div>
          <m.div
            className="mt-2 h-1 w-full rounded bg-muted"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="h-full rounded bg-green-500" style={{ width: "75%" }} />
          </m.div>
        </m.div>

        <m.div className="rounded bg-background/50 p-3" whileHover={{ scale: 1.05 }}>
          <div className="text-l font-bold text-blue-500">{metrics.keywords}</div>
          <div className="text-xs text-muted-foreground">Top 10 Keywords</div>
          <m.div
            className="mt-2 h-1 w-full rounded bg-muted"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="h-full rounded bg-blue-500" style={{ width: "60%" }} />
          </m.div>
        </m.div>

        <m.div className="rounded bg-background/50 p-3" whileHover={{ scale: 1.05 }}>
          <div className="text-l font-bold text-purple-500">{metrics.backlinks}</div>
          <div className="text-xs text-muted-foreground">Quality Backlinks</div>
          <m.div
            className="mt-2 h-1 w-full rounded bg-muted"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="h-full rounded bg-purple-500" style={{ width: "85%" }} />
          </m.div>
        </m.div>

        <m.div className="rounded bg-background/50 p-3" whileHover={{ scale: 1.05 }}>
          <div className="text-l font-bold text-orange-500">{metrics.ranking.toFixed(1)}</div>
          <div className="text-xs text-muted-foreground">Avg. Position</div>
          <m.div
            className="mt-2 h-1 w-full rounded bg-muted"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="h-full rounded bg-orange-500" style={{ width: "70%" }} />
          </m.div>
        </m.div>
      </div>
    </div>
  )
}
