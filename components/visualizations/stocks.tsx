"use client"

import { m } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { createChart, CandlestickData, CandlestickSeries, Time } from "lightweight-charts"

export function StockTradingViz() {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const [currentPrice, setCurrentPrice] = useState(115.42)
  const [trend, setTrend] = useState<"up" | "down">("up")
  const [volume, setVolume] = useState(1.2)
  const [priceChange, setPriceChange] = useState(0)
  const [momentum, setMomentum] = useState(0)
  const [volatility, setVolatility] = useState(0)
  const [openPrice, setOpenPrice] = useState(115.42)

  useEffect(() => {
    let chart: any = null
    let candlestickSeries: any = null
    let intervalID: NodeJS.Timeout | null = null
    let currentPrice = 100
    let trendDirection = 1 // 1 for up, -1 for down
    let candleCount = 0

    const initChart = async () => {
      if (!chartContainerRef.current) return

      try {
        // Candlestick pattern generators
        const createBullishEngulfing = (price: number, time: number) => {
          const open1 = price
          const close1 = open1 - (Math.random() * 1.5 + 0.5) // Small red candle
          const open2 = close1 - 0.2
          const close2 = open1 + (Math.random() * 2 + 1) // Large green engulfing
          return [
            { time: time as Time, open: open1, high: Math.max(open1, close1) + 0.3, low: Math.min(open1, close1) - 0.3, close: close1 },
            { time: (time + 30) as Time, open: open2, high: close2 + 0.5, low: open2 - 0.2, close: close2 }
          ]
        }

        const createMorningStar = (price: number, time: number) => {
          const open1 = price
          const close1 = open1 - (Math.random() * 2 + 1) // Red candle
          const open2 = close1 - 0.3
          const close2 = open2 + (Math.random() * 0.8 - 0.4) // Small doji-like
          const open3 = close2 + 0.2
          const close3 = open1 + (Math.random() * 2 + 0.5) // Strong green
          return [
            { time: time as Time, open: open1, high: open1 + 0.3, low: close1 - 0.4, close: close1 },
            { time: (time + 30) as Time, open: open2, high: open2 + 0.4, low: open2 - 0.4, close: close2 },
            { time: (time + 60) as Time, open: open3, high: close3 + 0.6, low: open3 - 0.2, close: close3 }
          ]
        }

        const createDoji = (price: number, time: number) => {
          const open = price
          const close = open + (Math.random() * 0.4 - 0.2) // Very small body
          const range = Math.random() * 3 + 1.5
          return {
            time: time as Time,
            open,
            high: Math.max(open, close) + range * 0.7,
            low: Math.min(open, close) - range * 0.7,
            close
          }
        }

        const createHammer = (price: number, time: number) => {
          const low = price - (Math.random() * 3 + 2) // Long lower shadow
          const open = low + (Math.random() * 1 + 2.5)
          const close = open + (Math.random() * 0.8 + 0.5) // Small green body
          return {
            time: time as Time,
            open,
            high: Math.max(open, close) + 0.3,
            low,
            close
          }
        }

        const createShootingStar = (price: number, time: number) => {
          const high = price + (Math.random() * 3 + 2) // Long upper shadow
          const close = high - (Math.random() * 1 + 2.5)
          const open = close + (Math.random() * 0.8 + 0.2) // Small red body
          return {
            time: time as Time,
            open,
            high,
            low: Math.min(open, close) - 0.3,
            close
          }
        }

        const createThreeWhiteSoldiers = (price: number, time: number) => {
          let currentPrice = price
          const candles = []
          for (let i = 0; i < 3; i++) {
            const open = currentPrice
            const close = open + (Math.random() * 2.5 + 1.5) // Strong green candles
            candles.push({
              time: (time + i * 30) as Time,
              open,
              high: close + Math.random() * 0.5,
              low: open - Math.random() * 0.3,
              close
            })
            currentPrice = close
          }
          return candles
        }

        // Generate initial historical data with candlestick patterns
        const generateInitialData = () => {
          const data: CandlestickData[] = []
          let price = 95
          const startTime = Math.floor(Date.now() / 1000) - (25 * 30) // 25 periods of 30 seconds ago
          
          for (let i = 0; i < 25; i++) {
            const time = startTime + i * 30
            
            // 10% chance for special patterns
            const patternRandom = Math.random()
            
            if (patternRandom < 0.02 && i < 23) {
              // Bullish Engulfing (2 candles)
              const pattern = createBullishEngulfing(price, time)
              data.push(...pattern)
              price = pattern[pattern.length - 1].close
              i++ // Skip next iteration since we added 2 candles
            } else if (patternRandom < 0.03 && i < 22) {
              // Morning Star (3 candles)
              const pattern = createMorningStar(price, time)
              data.push(...pattern)
              price = pattern[pattern.length - 1].close
              i += 2 // Skip next 2 iterations
            } else if (patternRandom < 0.05) {
              // Doji
              const pattern = createDoji(price, time)
              data.push(pattern)
              price = pattern.close
            } else if (patternRandom < 0.07) {
              // Hammer
              const pattern = createHammer(price, time)
              data.push(pattern)
              price = pattern.close
            } else if (patternRandom < 0.08) {
              // Shooting Star
              const pattern = createShootingStar(price, time)
              data.push(pattern)
              price = pattern.close
            } else {
              // Regular candles with bigger price ranges for taller candles
              const isUpCandle = Math.random() < 0.8
              
              if (isUpCandle) {
                // Tall green candle
                const open = price
                const change = Math.random() * 4 + 1.5 // 1.5 to 5.5 increase (much taller)
                const close = open + change
                const high = close + Math.random() * 1.2
                const low = open - Math.random() * 0.5
                
                data.push({ time: time as Time, open, high, low, close })
                price = close
              } else {
                // Smaller red candle
                const open = price
                const change = Math.random() * 1.5 + 0.3 // 0.3 to 1.8 decrease
                const close = open - change
                const high = open + Math.random() * 0.5
                const low = close - Math.random() * 0.5
                
                data.push({ time: time as Time, open, high, low, close })
                price = close
              }
            }
          }
          
          return data
        }

        chart = createChart(chartContainerRef.current, {
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
          layout: {
            background: { color: "transparent" },
            textColor: "#d1d5db",
            attributionLogo: false
          },
          grid: {
            vertLines: { color: "rgba(42, 46, 57, 0.3)" },
              horzLines: { color: "rgba(42, 46, 57, 0.3)" },
          },
          crosshair: {
            mode: 0, // Disable crosshair for non-interactive experience
          },
          rightPriceScale: {
            borderColor: "rgba(197, 203, 206, 0.4)",
            visible: false, // Hide price scale for cleaner look
          },
          timeScale: {
            borderColor: "rgba(197, 203, 206, 0.4)",
            timeVisible: false,
            secondsVisible: false,
            visible: false, // Hide time scale for cleaner look
            barSpacing: 6, // Reduce spacing for closer candles
            minBarSpacing: 3, // Minimum spacing between candles
          },
          // Disable all interactions
          handleScroll: false,
          handleScale: false,
          kineticScroll: {
            mouse: false,
            touch: false,
          },
        })

        // Add candlestick series using the correct API
        candlestickSeries = chart.addSeries(CandlestickSeries, {
          upColor: "#10b981",
          downColor: "#ef4444",
          borderDownColor: "#ef4444",
          borderUpColor: "#10b981",
          wickDownColor: "#ef4444",
          wickUpColor: "#10b981",
          priceLineVisible: false, // Remove price line
        })

        const initialData = generateInitialData()
        candlestickSeries.setData(initialData)
        currentPrice = initialData[initialData.length - 1].close
        
        // Set initial opening price for daily change calculation
        setOpenPrice(initialData[0].open)
        setCurrentPrice(currentPrice)
        
        // Fit content and set visible range to show fewer candles for bigger appearance
        chart.timeScale().fitContent()
        chart.timeScale().setVisibleLogicalRange({ from: 5, to: 25 }) // Show only last 20 candles

        // Simple continuous real-time updates
        intervalID = setInterval(() => {
          candleCount++
          
          // Create new candle every 3 updates (simulating 3 price updates per 9-second candle)
          const isNewCandle = candleCount % 3 === 1
          
          if (isNewCandle) {
            // Occasionally create special patterns (5% chance)
            const patternRandom = Math.random()
            const time = Math.floor(Date.now() / 1000)
            
            if (patternRandom < 0.02) {
              // Doji pattern
              const pattern = createDoji(currentPrice, time)
              candlestickSeries.update(pattern)
              const previousPrice = currentPrice
              currentPrice = pattern.close
              
              // Calculate dynamic indicators
              const dailyChange = ((currentPrice - openPrice) / openPrice) * 100
              const momentumValue = ((currentPrice - previousPrice) / previousPrice) * 100 * 5
              const volatilityValue = Math.abs(pattern.high - pattern.low) / currentPrice * 100
              
              // Update UI state
              setCurrentPrice(currentPrice)
              setTrend(currentPrice > pattern.open ? "up" : "down")
              setVolume(Math.random() * 4 + 1)
              setPriceChange(dailyChange)
              setMomentum(momentumValue)
              setVolatility(volatilityValue)
            } else if (patternRandom < 0.03) {
              // Hammer pattern
              const pattern = createHammer(currentPrice, time)
              candlestickSeries.update(pattern)
              const previousPrice = currentPrice
              currentPrice = pattern.close
              
              // Calculate dynamic indicators
              const dailyChange = ((currentPrice - openPrice) / openPrice) * 100
              const momentumValue = ((currentPrice - previousPrice) / previousPrice) * 100 * 5
              const volatilityValue = Math.abs(pattern.high - pattern.low) / currentPrice * 100
              
              // Update UI state
              setCurrentPrice(currentPrice)
              setTrend(currentPrice > pattern.open ? "up" : "down")
              setVolume(Math.random() * 4 + 1)
              setPriceChange(dailyChange)
              setMomentum(momentumValue)
              setVolatility(volatilityValue)
            } else if (patternRandom < 0.035) {
              // Shooting Star pattern
              const pattern = createShootingStar(currentPrice, time)
              candlestickSeries.update(pattern)
              const previousPrice = currentPrice
              currentPrice = pattern.close
              
              // Calculate dynamic indicators
              const dailyChange = ((currentPrice - openPrice) / openPrice) * 100
              const momentumValue = ((currentPrice - previousPrice) / previousPrice) * 100 * 5
              const volatilityValue = Math.abs(pattern.high - pattern.low) / currentPrice * 100
              
              // Update UI state
              setCurrentPrice(currentPrice)
              setTrend(currentPrice > pattern.open ? "up" : "down")
              setVolume(Math.random() * 4 + 1)
              setPriceChange(dailyChange)
              setMomentum(momentumValue)
              setVolatility(volatilityValue)
            } else {
              // Regular candles with much taller bodies
              const shouldGoUp = Math.random() < 0.85
              
              // Less frequent trend reversals to maintain strong uptrend
              if (candleCount % 40 === 0) {
                trendDirection *= -1
              }
              
              const previousPrice = currentPrice
              const open = currentPrice
              let close: number
              
              if (shouldGoUp && trendDirection === 1) {
                // Very tall green candle
                close = open + (Math.random() * 6 + 2) // 2 to 8 increase (much taller)
              } else if (shouldGoUp && trendDirection === -1) {
                // Moderate green candle during brief downtrend
                close = open + (Math.random() * 3 + 0.5) // 0.5 to 3.5 increase
              } else if (!shouldGoUp && trendDirection === 1) {
                // Small red candle during uptrend
                close = open - (Math.random() * 1.5 + 0.2) // 0.2 to 1.7 decrease
              } else {
                // Red candle during brief downtrend
                close = open - (Math.random() * 3 + 0.5) // 0.5 to 3.5 decrease
              }
              
              const high = Math.max(open, close) + Math.random() * 1.5
              const low = Math.min(open, close) - Math.random() * 1.0
              
              const newCandle: CandlestickData = { time: time as Time, open, high, low, close }
              candlestickSeries.update(newCandle)
              currentPrice = close
              
              // Calculate dynamic indicators with enhanced visibility
              const dailyChange = ((close - openPrice) / openPrice) * 100
              const momentumValue = ((close - previousPrice) / previousPrice) * 100 * 5 // Amplify momentum for visibility
              const volatilityValue = Math.abs(high - low) / close * 100
              
              // Update UI state
              setCurrentPrice(close)
              setTrend(close > open ? "up" : "down")
              setVolume(Math.random() * 4 + 1) // 1 to 5M volume for 30s chart
              setPriceChange(dailyChange)
              setMomentum(momentumValue)
              setVolatility(volatilityValue)
            }
            
          } else {
            // Update the current candle (intra-candle movement) with bigger fluctuations
            const previousPrice = currentPrice
            const fluctuation = (Math.random() - 0.5) * 1.5 // Bigger fluctuations for taller candles
            const lastCandle = {
              time: Math.floor(Date.now() / 1000) as Time,
              open: currentPrice,
              high: currentPrice + Math.random() * 1.0 + 0.5, // Taller highs
              low: currentPrice - Math.random() * 1.0 - 0.5, // Lower lows
              close: currentPrice + fluctuation,
            }
            
            candlestickSeries.update(lastCandle)
            currentPrice = lastCandle.close
            
            // Calculate dynamic indicators for intra-candle updates
            const dailyChange = ((currentPrice - openPrice) / openPrice) * 100
            const momentumValue = ((currentPrice - previousPrice) / previousPrice) * 100 * 5 // Amplified
            const volatilityValue = Math.abs(lastCandle.high - lastCandle.low) / currentPrice * 100
            
            setCurrentPrice(lastCandle.close)
            setTrend(lastCandle.close > lastCandle.open ? "up" : "down")
            setVolume(Math.random() * 4 + 1)
            setPriceChange(dailyChange)
            setMomentum(momentumValue)
            setVolatility(volatilityValue)
          }
          
        }, 3000) // Much slower update frequency for smoother, less chaotic experience

        return () => {
          if (intervalID) clearInterval(intervalID)
          if (chart) chart.remove()
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
  }, [trend, volume, priceChange, momentum, volatility])

  return (
    <div className="relative h-52 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-t-lg  p-4 overflow-hidden">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-green-500" />
        <span className="font-mono text-sm">ALGO-TRADE</span>
      </div>

      <div className="absolute top-4 right-4 sm:visible md:hidden">
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
        className="absolute top-12 bottom-8 left-4 right-4 pointer-events-none"
        style={{ userSelect: 'none' }}
      />

      {/* Trading indicators */}
      <div className="absolute bottom-2 left-4 flex gap-2 sm:visible md:hidden">
        <Badge 
          variant="secondary" 
          className={`text-xs font-bold ${priceChange >= 0 ? 'text-green-400 bg-green-900/20 border-green-500/30' : 'text-red-400 bg-red-900/20 border-red-500/30'}`}
        >
          {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
        </Badge>
        <Badge 
          variant="secondary" 
          className={`text-xs `}
        >
          MOM: {momentum >= 0 ? '+' : ''}{momentum.toFixed(1)}%
        </Badge>
        <Badge variant="secondary" className="text-xs">
          Volatility: {volatility.toFixed(1)}%
        </Badge>
        <Badge variant="secondary" className="text-xs">
          Volume: {volume.toFixed(1)}M
        </Badge>
      </div>
    </div>
  )
}
