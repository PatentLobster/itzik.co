"use client"

import { m } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

export function StockTradingViz() {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const [currentPrice, setCurrentPrice] = useState(115.42)
  const [trend, setTrend] = useState<"up" | "down">("up")
  const [volume, setVolume] = useState(1.2)

  useEffect(() => {
    let chart: any = null
    let candlestickSeries: any = null
    let volumeSeries: any = null

    const initChart = async () => {
      if (!chartContainerRef.current) return

      try {
        // Dynamically import the lightweight-charts library
        const { createChart } = await import("lightweight-charts")

        chart = createChart(chartContainerRef.current, {
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight + 30,
          layout: {
            background: { color: "transparent" },
            textColor: "#d1d5db",
            attributionLogo: false,
          },
          grid: {
            vertLines: { color: "rgba(42, 46, 57, 0.5)" },
            horzLines: { color: "rgba(42, 46, 57, 0.5)" },
          },
          crosshair: {
            mode: 1,
          },
          rightPriceScale: {
            borderColor: "rgba(197, 203, 206, 0.4)",
            PriceScaleMode: "auto"
          },
          timeScale: {
            borderColor: "rgba(197, 203, 206, 0.4)",
            timeVisible: true,
            secondsVisible: false,
          },
        })

        // Add candlestick series
        candlestickSeries = chart.addCandlestickSeries({
          upColor: "#10b981",
          downColor: "#ef4444",
          borderDownColor: "#ef4444",
          borderUpColor: "#10b981",
          wickDownColor: "#ef4444",
          wickUpColor: "#10b981",
        })

       chart.timeScale().setVisibleLogicalRange({ from: 90, to: 100 })
        


        // Generate initial data
        const generateData = () => {
          const data = []
          const volumeData = []
          let basePrice = 100
          const now = Math.floor(Date.now() / 1000)

          for (let i = 0; i < 100; i++) {
            const time = now - (100 - i) * 60 // 1 minute intervals
            const change = (Math.random() - 0.5) * 4
            const open = basePrice
            const close = basePrice + change
            const high = Math.max(open, close) + Math.random() * 2
            const low = Math.min(open, close) - Math.random() * 2

            data.push({
              time,
              open,
              high,
              low,
              close,
            })

            volumeData.push({
              time,
              value: Math.random() * 1000000 + 500000,
              color: close > open ? "#10b981" : "#ef4444",
            })

            basePrice = close
          }

          return { data, volumeData }
        }

        const { data, volumeData } = generateData()
        candlestickSeries.setData(data)
   //     volumeSeries.setData(volumeData)

        // Update data periodically
        const interval = setInterval(() => {
          const lastCandle = data[data.length - 1]
          const change = (Math.random() - 0.5) * 2
          const newPrice = lastCandle.close + change

          setCurrentPrice(newPrice)
          setTrend(newPrice > lastCandle.close ? "up" : "down")
          setVolume(Math.random() * 2 + 0.5)

          const newTime = Math.floor(Date.now() / 1000)
          const newCandle = {
            time: newTime,
            open: lastCandle.close,
            high: Math.max(lastCandle.close, newPrice) + Math.random(),
            low: Math.min(lastCandle.close, newPrice) - Math.random(),
            close: newPrice,
          }

          const newVolumeData = {
            time: newTime,
            value: Math.random() * 1000000 + 500000,
            color: newPrice > lastCandle.close ? "#10b981" : "#ef4444",
          }

          data.push(newCandle)
          volumeData.push(newVolumeData)

          // Keep only last 50 candles
          if (data.length > 100) {
            data.shift()
            volumeData.shift()
          }

          candlestickSeries.setData(data)
          //volumeSeries.setData(volumeData)
        }, 2000)

        return () => {
          clearInterval(interval)
          if (chart) {
            chart.remove()
          }
        }
      } catch (error) {
        console.error("Failed to load trading chart:", error)
      }
    }

    const cleanup = initChart()

    return () => {
      if (cleanup) {
        cleanup.then((fn) => fn && fn())
      }
    }
  }, [])

  return (
    <div className="relative h-48 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg p-4 overflow-hidden">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-green-500" />
        <span className="font-mono text-sm">ALGO-TRADE</span>
      </div>

      <div className="absolute top-4 right-4">
        <m.div
          className={`text-lg font-mono ${trend === "up" ? "text-green-500" : "text-red-500"}`}
          animate={{ scale: trend === "up" ? [1, 1.1, 1] : [1, 0.9, 1] }}
          transition={{ duration: 0.3 }}
        >
          ${currentPrice.toFixed(2)}
        </m.div>
      </div>

      {/* TradingView Chart Container */}
      <div
        ref={chartContainerRef}
        className="absolute top-8 bottom-4 mt-4 left-6 right-6 h-20 rounded"
      />

      {/* Trading indicators */}
      <div className="absolute bottom-0 left-4 flex gap-2">
        <Badge variant="secondary" className="text-xs">
          RSI: 67
        </Badge>
        <Badge variant="secondary" className="text-xs">
          MACD: +2.3
        </Badge>
        <Badge variant="secondary" className="text-xs">
          Vol: {volume.toFixed(1)}M
        </Badge>
      </div>
    </div>
  )
}
