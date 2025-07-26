"use client"

import { m } from "framer-motion"
import { useEffect, useState } from "react"
import { Shield } from "lucide-react"

export function HackingViz() {
  const [commands, setCommands] = useState<string[]>([])
  const terminalCommands = [
    "nmap -sS 192.168.1.0/24",
    "sqlmap -u 'http://target.com' --dbs",
    "hydra -l admin -P passwords.txt ssh://target",
    "metasploit > use exploit/multi/handler",
    "john --wordlist=rockyou.txt hashes.txt",
    "aircrack-ng -w wordlist.cap capture.cap",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCommands((prev) => {
        const newCommand = terminalCommands[Math.floor(Math.random() * terminalCommands.length)]
        return [...prev.slice(-2), newCommand]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-52 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-5 h-5 text-red-500" />
        <span className="font-mono text-sm">Penetration Testing</span>
      </div>

      <div className="bg-black/80 rounded p-3 h-38 overflow-hidden font-mono text-xs">
        <div className="text-green-400 mb-2">root@kali:~#</div>
        {commands.map((cmd, index) => (
          <m.div
            key={index}
            className="text-green-300 mb-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-red-400">$</span> {cmd}
          </m.div>
        ))}
        <m.div
          className="w-2 h-4 bg-green-400 inline-block pb-4"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </div>
  )
}
