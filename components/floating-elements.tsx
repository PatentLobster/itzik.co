"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* DevOps Monitoring Card */}
      <motion.div
        initial={{ opacity: 0, y: 290, rotate: -15, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
          rotate: [-5, -3, -5],
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 1,
          stiffness: 100,
          damping: 15,
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          rotate: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-[8rem] left-10 w-80 h-48 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-cyan-500/30 p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-mono text-sm font-semibold text-slate-700 dark:text-cyan-400">system@devops:~$</h3>
          <motion.div
            className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-slate-400">{"> uptime"}</span>
            <span className="text-green-600 dark:text-green-400">99.9%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-slate-400">{"> deployments"}</span>
            <span className="text-cyan-600 dark:text-cyan-400">247 this month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-slate-400">{"> cpu usage"}</span>
            <span className="text-yellow-600 dark:text-yellow-400">23%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1">
            <motion.div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "23%" }}
              transition={{ duration: 2, delay: 2 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Speed Score Card */}
      <motion.div
        initial={{ opacity: 0, y: -150, rotate: 20}}
        animate={{
          opacity: 1,
          y: [0, -6, 0],
          rotate: [8, 10, 8],
        }}
        transition={{
          duration: 1.4,
          delay: 1.2,
          stiffness: 120,
          damping: 12,
          y: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          },
          rotate: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          },
        }}
        className="absolute top-32 right-16 w-64 h-40 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-emerald-500/30 p-6"
      >
        <div className="text-center">
          <div
            className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-2"
          >
            98
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">PageSpeed Score</div>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-8 bg-gradient-to-t from-emerald-500 to-green-400 rounded-full"
                initial={{ height: 0 }}
                animate={{ height: "2rem" }}
                transition={{
                  duration: 0.5,
                  delay: 1.5 + i * 0.1,
                  stiffness: 200,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Terminal/Hacking Card */}
      <motion.div
        initial={{ opacity: 0, x: -200, rotate: -15, scale: 0.6 }}
        animate={{
          opacity: 1,
          x: [0, 5, 0],
          y: [0, -10, 0],
          rotate: [-3, -1, -3],
          scale: 1,
        }}
        transition={{
          duration: 1.6,
          delay: 1.4,
          stiffness: 80,
          damping: 20,
          x: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          },
          y: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          },
          rotate: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
        className="absolute bottom-32 left-20 w-72 h-44 bg-slate-900 dark:bg-black rounded-2xl shadow-2xl border border-slate-600 dark:border-green-500/30 p-4"
      >
        <div className="flex items-center mb-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <span className="ml-3 text-xs text-slate-400 dark:text-gray-400 font-mono">terminal</span>
        </div>
        <div className="font-mono text-xs space-y-1">
          <div className="text-green-400">
            <span className="text-slate-500 dark:text-gray-500">$</span> nmap -sS target.com
          </div>
          <div className="text-slate-300 dark:text-gray-300">Starting Nmap scan...</div>
          <div className="text-cyan-400">22/tcp open ssh</div>
          <div className="text-cyan-400">80/tcp open http</div>
          <div className="text-cyan-400">443/tcp open https</div>
          <div className="flex items-center">
            <span className="text-green-400">$</span>
            <motion.div
              className="w-2 h-4 bg-green-400 ml-1"
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Electronics/IoT Card */}
      <motion.div
        initial={{ opacity: 0, x: 200, rotate: 25, scale: 0.5 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -7, 0],
          rotate: [5, 7, 5],
          scale: [1, 1],
        }}
        transition={{
          duration: 1.8,
          delay: 1.6,
          stiffness: 90,
          damping: 18,
          y: {
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          },
          rotate: {
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          },
          scale: {
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          },
        }}
        className="absolute bottom-20 right-12 w-60 h-36 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-blue-500/30 p-6"
      >
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full mr-2"
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <span className="text-green-600 dark:text-green-400 font-mono text-xs">Arduino</span>
          </div>
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent mb-1"
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            23.5°C
          </motion.div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">Temperature Sensor</div>
          <div className="flex justify-center space-x-2">
            <div className="text-xs text-green-600 dark:text-green-400">WiFi: ●</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">BLE: ●</div>
            <div className="text-xs text-purple-600 dark:text-purple-400">I2C: ●</div>
          </div>
        </div>
      </motion.div>
  </div>
  )
}
