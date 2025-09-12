"use client"

import { useEffect, useState } from "react"

import { m } from "framer-motion"
import { Shield } from "lucide-react"

const terminalCommands = [
  "nmap -sS 192.168.1.0/24",
  "sqlmap -u 'http://target.com' --dbs",
  "hydra -l admin -P passwords.txt ssh://target",
  "metasploit > use exploit/multi/handler",
  "john --wordlist=rockyou.txt hashes.txt",
  "aircrack-ng -w wordlist.cap capture.cap",
]

export function HackingViz() {
  const [commands, setCommands] = useState<string[]>([])

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
    <div className="relative h-52 rounded-t-lg bg-gradient-to-br from-red-500/10 to-pink-500/10 p-4">
      <div className="mb-4 flex items-center gap-2">
        <Shield className="h-5 w-5 text-red-500" />
        <span className="font-mono text-sm">Penetration Testing</span>
      </div>

      <div className="h-38 overflow-hidden rounded bg-black/80 p-3 font-mono text-xs">
        <div className="mb-2 text-green-400">root@pwned:~#</div>
        {commands.map((cmd, index) => (
          <m.div
            key={index}
            className="mb-1 text-green-300"
            initial={{ opacity: 1, x: 10 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-red-400">$</span> {cmd}
          </m.div>
        ))}
        <m.div
          className="inline-block h-4 w-2 bg-green-400 pb-4"
          animate={{ opacity: [1, 0, 1] }}
          initial={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </div>
  )
}
