"use client"

import { m } from "framer-motion"
import { useEffect, useState } from "react"
import { Database, Globe, Terminal, Book, Brain } from "lucide-react"

const dataSources = [
  { name: "StackOverflow", icon: Globe, color: "text-blue-500" },
  { name: "Google", icon: Database, color: "text-green-500" },
  { name: "man", icon: Terminal, color: "text-purple-500" },
]

export function LearningViz() {
  const [mouthOpen, setMouthOpen] = useState(true)
  const [binaryStreams, setBinaryStreams] = useState<
    Array<{ id: number; x: number; y: number; source: number; char: string }>
  >([])

  useEffect(() => {
    const mouthInterval = setInterval(() => {
      setMouthOpen((prev) => !prev)
    }, 300)

    return () => clearInterval(mouthInterval)
  }, [])

  useEffect(() => {
    const streamInterval = setInterval(() => {
      setBinaryStreams((prev) => {
        // Remove streams that reached Pacman
        const filtered = prev.filter((stream) => stream.x > 80)

        // Add new binary digits from each source
        const newStreams = dataSources.map((_, sourceIndex) => ({
          id: Date.now() + sourceIndex,
          x: 280,
          y: 60 + sourceIndex * 30,
          source: sourceIndex,
          char: Math.random() > 0.5 ? "1" : "0",
        }))

        return [...filtered, ...newStreams]
      })
    }, 400)

    return () => clearInterval(streamInterval)
  }, [])

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setBinaryStreams((prev) =>
        prev.map((stream) => ({
          ...stream,
          x: stream.x - 3,
          y:
            stream.x > 150
              ? stream.y
              : 60 + stream.source * 30 + ((150 - stream.x) * (75 - (60 + stream.source * 30))) / 70,
        })),
      )
    }, 50)

    return () => clearInterval(moveInterval)
  }, [])
  return (
    <div className="relative h-48 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-green-500/10  rounded-t-lg p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <Brain className="w-5 h-5 text-yellow-600" />
        <span className="font-mono text-sm">Self Educated</span>
      </div>

      <div className="relative h-48 mb-5 sm:mt-0 md:-mt-8 overflow-hidden ">
        <div className="absolute left-6 top-14">
          <m.div className="w-12 h-12 relative">
            {mouthOpen ? (
              <svg width="48" height="48" viewBox="0 0 568 568" className="absolute z-40">
                <path fill="#FCD34D" stroke="#F59E0B" strokeWidth="18" d="M535.441,412.339A280.868,280.868 0 1,1 536.186,161.733L284.493,286.29Z"/>
                <circle cx="340" cy="140" r="20" fill="#000" />
              </svg>
            ) : (
            <svg width="48" height="48" viewBox="0 0 568 568" className="absolute z-40">
                <circle cx="284" cy="284" r="282" fill="#FCD34D" stroke="#F59E0B" strokeWidth="18" />
                <circle cx="340" cy="140" r="20" fill="#000" />
              </svg>
            )}
          </m.div>
        </div>

        {dataSources.map((source, index) => {
          const Icon = source.icon
          return (
            <div
              key={source.name}
              className="absolute right-8 flex items-center gap-2 z-10 md:hidden"
              style={{ top: 50 + index * 30 }}
            >
              <Icon className={`w-5 h-5 ${source.color}`} />
              <span className="text-xs font-mono text-muted-foreground">{source.name}</span>
            </div>
          )
        })}

        {binaryStreams.map((stream) => (
          <m.div
            key={stream.id}
            className={`absolute font-mono text-sm font-bold ${dataSources[stream.source].color}`}
            style={{
              left: stream.x,
              top: stream.y,
            }}
            animate={{
              opacity: stream.x < 80 ? [1, 0] : 1,
              scale: stream.x < 80 ? [1, 0.5] : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {stream.char}
          </m.div>
        ))}

        {dataSources.map((_, index) => (
          <svg key={`curve-${index}`} className="absolute inset-0 pointer-events-none" width="100%" height="100%">
            <path
              d={`M 240 ${65 + index * 30} Q 160 ${65 + index * 30} 75 85`}
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3,3"
              fill="none"
              className="text-muted-foreground/30"
            />
          </svg>
        ))}
      </div>

    </div>
  )
}
