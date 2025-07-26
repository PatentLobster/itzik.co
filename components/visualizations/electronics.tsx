"use client"

import { m } from "framer-motion"
import { useEffect, useState } from "react"
import { Zap } from "lucide-react"

export function ElectronicsViz() {
  const [voltage, setVoltage] = useState(5.0)
  const [current, setCurrent] = useState(0.5)
  const [power, setPower] = useState(2.5)
  const [currentPosition, setCurrentPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newVoltage = 5.0 + Math.sin(Date.now() / 1000) * 0.5
      const newCurrent = 0.5 + Math.sin(Date.now() / 800) * 0.1
      setVoltage(newVoltage)
      setCurrent(newCurrent)
      setPower(newVoltage * newCurrent)

      // Synchronized current position animation
      setCurrentPosition((prev) => (prev + 1) % 12)
    }, 200) // Faster update for smoother animation

    return () => clearInterval(interval)
  }, [])

  // Define the circuit path points for synchronized animation
  const circuitPath = [
    { x: 28, y: 40 }, // Start after power source
    { x: 68, y: 40 }, // Before resistor
    { x: 92, y: 40 }, // After resistor
    { x: 138, y: 40 }, // Before LED
    { x: 162, y: 40 }, // After LED
    { x: 212, y: 40 }, // Before capacitor
    { x: 228, y: 40 }, // After capacitor
    { x: 280, y: 40 }, // Right side
    { x: 280, y: 70 }, // Bottom right
    { x: 20, y: 70 }, // Bottom left
    { x: 20, y: 48 }, // Left side up
    { x: 28, y: 40 }, // Back to start
  ]

  const currentPos = circuitPath[currentPosition]

  return (
    <div className="relative h-54 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-yellow-500" />
        <span className="font-mono text-sm">Circuit Analysis</span>
      </div>

      <div className="relative h-24 mb-2">
        <svg width="100%" height="100%" viewBox="0 0 300 96">
          {/* Circuit board background */}
          <rect width="300" height="96" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

          {/* Power source */}
          <g transform="translate(20, 40)">
            <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fontSize="8" fill="currentColor">
              V
            </text>
            <line x1="-4" y1="0" x2="4" y2="0" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="currentColor" strokeWidth="1" />
          </g>

          {/* Resistor */}
          <g transform="translate(80, 40)">
            <rect x="-12" y="-4" width="24" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <text x="0" y="-12" textAnchor="middle" fontSize="8" fill="currentColor">
              R1
            </text>
            <text x="0" y="20" textAnchor="middle" fontSize="6" fill="currentColor">
              1kΩ
            </text>
          </g>

          {/* LED */}
          <g transform="translate(150, 40)">
            <polygon points="-6,6 6,0 -6,-6" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="6" y1="-6" x2="6" y2="6" stroke="currentColor" strokeWidth="2" />
            <text x="0" y="-12" textAnchor="middle" fontSize="8" fill="currentColor">
              LED
            </text>
            <m.circle
              cx="0"
              cy="0"
              r="3"
              fill="#10b981"
              opacity={0.8}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
          </g>

          {/* Capacitor */}
          <g transform="translate(220, 40)">
            <line x1="-8" y1="-8" x2="-8" y2="8" stroke="currentColor" strokeWidth="2" />
            <line x1="8" y1="-8" x2="8" y2="8" stroke="currentColor" strokeWidth="2" />
            <text x="0" y="-12" textAnchor="middle" fontSize="8" fill="currentColor">
              C1
            </text>
            <text x="0" y="20" textAnchor="middle" fontSize="6" fill="currentColor">
              100µF
            </text>
          </g>

          {/* Static connecting wires - SYNCHRONIZED */}
          <path
            d="M28 40 L68 40 M92 40 L138 40 M162 40 L212 40 M228 40 L280 40 M280 40 L280 70 L20 70 L20 48"
            stroke="#06b6d4"
            strokeWidth="2"
            fill="none"
          />

          {/* Synchronized current flow animation */}
          <m.circle
            cx={currentPos.x}
            cy={currentPos.y}
            r="3"
            fill="#f59e0b"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Additional current particles for better effect */}
          {[3, 6, 9].map((offset, index) => {
            const pos = circuitPath[(currentPosition + offset) % circuitPath.length]
            return (
              <m.circle
                key={index}
                cx={pos.x}
                cy={pos.y}
                r="2"
                fill="#f59e0b"
                opacity={0.6 - index * 0.2}
                animate={{
                  scale: [0.8, 1, 0.8],
                }}
                transition={{ duration: 0.2 }}
              />
            )
          })}

          {/* Voltage measurement points */}
          <g transform="translate(50, 25)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
            <text x="0" y="-5" textAnchor="middle" fontSize="6" fill="#ef4444">
              +
            </text>
          </g>
          <g transform="translate(190, 25)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
            <text x="0" y="-5" textAnchor="middle" fontSize="6" fill="#ef4444">
              -
            </text>
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs font-mono">
        <div className="bg-background/50 rounded p-2 text-center">
          <div className="text-yellow-500 font-bold">{voltage.toFixed(2)}V</div>
          <div className="text-muted-foreground">Voltage</div>
        </div>
        <div className="bg-background/50 rounded p-2 text-center">
          <div className="text-blue-500 font-bold">{current.toFixed(3)}A</div>
          <div className="text-muted-foreground">Current</div>
        </div>
        <div className="bg-background/50 rounded p-2 pb-4 text-center">
          <div className="text-green-500 font-bold">{power.toFixed(2)}W</div>
          <div className="text-muted-foreground">Power</div>
        </div>
      </div>
    </div>
  )
}
