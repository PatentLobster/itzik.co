"use client"

import { useEffect, useState } from "react"

import { m } from "framer-motion"
import { Shield } from "lucide-react"

const terminalCommands = [
  "nmap -sS 192.168.1.0/24",
  "nmap -sV -sC -O target.com",
  "nmap -p- --min-rate 1000 target.com",
  "masscan -p1-65535 192.168.1.0/24 --rate=1000",
  "nmap --script vuln target.com",
  "rustscan -a target.com -- -sC -sV",
  
  "sqlmap -u 'http://target.com' --dbs",
  "sqlmap -u 'http://target.com/login' --forms --batch",
  "ffuf -w common.txt -u http://target.com/FUZZ",
  "nikto -h http://target.com",
  "wpscan --url http://target.com --enumerate u,p,t",
  "burpsuite --config-file=burp.json",
  "zaproxy -cmd -quickurl http://target.com",
  "subfinder -d target.com | httpx -silent",
  
  "hydra -l admin -P passwords.txt ssh://target",
  "john --wordlist=rockyou.txt hashes.txt",
  "hashcat -m 0 hashes.txt rockyou.txt",
  
  "aircrack-ng -w wordlist.cap capture.cap",
  "airodump-ng wlan0mon",
  "aireplay-ng -0 10 -a 00:11:22:33:44:55 wlan0mon",
  "reaver -i wlan0mon -b 00:11:22:33:44:55 -vv",
  "wifite --kill",
  
  "metasploit > use exploit/multi/handler",
  "enum4linux -a target.com",
  "smbclient -L //target.com -N",
  "rpcclient -U '' -N target.com",
  
  "whoami && id",
  "uname -a && cat /etc/os-release",
  "ps aux | grep root",
  "netstat -tulpn",
  "ss -tulpn",
  "cat /etc/passwd | grep bash",
  "find / -perm -4000 2>/dev/null",
  "sudo -l",
  "crontab -l",
  "cat /etc/shadow",
  
  "sudo -u#-1 /bin/bash",
  "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
  "./pspy64 -pf -i 1000",
  
  "tcpdump -i eth0 -w capture.pcap",
  "wireshark -i eth0 -k",
  "bettercap -iface eth0",
  "responder -I eth0 -rdw",
  
  "dnsrecon -d target.com",
  "dnsenum target.com",
  "fierce -dns target.com",
  "amass enum -d target.com",
  "assetfinder target.com",
  
  "sslscan target.com:443",
  "testssl.sh target.com",
  "sslyze --regular target.com:443",
  
  "setoolkit",
  "gophish --config config.json",
  "theharvester -d target.com -b google",
  
  "volatility -f memory.dump imageinfo",
  "binwalk firmware.bin",
  "strings malware.exe | grep -i password",
  "hexdump -C suspicious_file | head -20",
  
  "radare2 binary",
  "objdump -d binary",
  "gdb ./binary",
  "ltrace ./binary",
  "strace ./binary",
  
  "aws s3 ls s3://bucket-name --no-sign-request",
  "kubectl get pods --all-namespaces",
  "docker ps && docker images",
  

  "history -c && history -w",
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
    <div className="relative h-48 rounded-t-lg bg-gradient-to-br from-red-500/10 to-pink-500/10 p-4">
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
