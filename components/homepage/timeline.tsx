import type React from "react"

import Link from "next/link"

import { Brain } from "lucide-react"

interface TimelineItem {
  id: string
  title: string
  dateRange: string
  icon: React.ReactNode
  isActive?: boolean
}

const timelineData: TimelineItem[] = [
  {
    id: "netsokolov",
    title: "Net.Sokolov",
    dateRange: "2013 - 2019",
    icon: (
      <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>user laptop</title>
        <g fill="#737373">
          <path
            d="M14.925 16.25H8.75L10.618 12.047C10.698 11.866 10.877 11.75 11.075 11.75H16.481C16.843 11.75 17.085 12.122 16.938 12.453L15.382 15.953C15.302 16.134 15.123 16.25 14.925 16.25Z"
            fill="#737373"
            fillOpacity="0.3"
            stroke="none"
          />
          <path
            d="M8 9.25C10.0711 9.25 11.75 7.57107 11.75 5.5C11.75 3.42893 10.0711 1.75 8 1.75C5.92893 1.75 4.25 3.42893 4.25 5.5C4.25 7.57107 5.92893 9.25 8 9.25Z"
            fill="none"
            stroke="#737373"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            d="M1.953 15C3.251 13.042 5.475 11.75 8 11.75"
            fill="none"
            stroke="#737373"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            d="M14.925 16.25H8.75L10.618 12.047C10.698 11.866 10.877 11.75 11.075 11.75H16.481C16.843 11.75 17.085 12.122 16.938 12.453L15.382 15.953C15.302 16.134 15.123 16.25 14.925 16.25Z"
            fill="none"
            stroke="#737373"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            d="M8.75 16.25H5.75"
            fill="none"
            stroke="#737373"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </svg>
    ),
  },
  {
    id: "rank",
    title: "Rank",
    dateRange: "2019 - 2021",
    icon: <span className="font-medium opacity-40">R</span>,
  },
  {
    id: "brainpop",
    title: "BrainPOP",
    dateRange: "2021 - 2025",
    icon: (
      <span>
        <Brain className="h-4 font-medium opacity-40" />
      </span>
    ),
    // <span className="font-medium opacity-40">S</span>,
  },
  {
    id: "zenity",
    title: "Zenity",
    dateRange: "2025 - Now",
    isActive: true,
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 128 128"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65.1558 63.7135C78.2115 63.433 90.6314 58.3892 99.7587 49.6593C108.887 40.9295 113.999 29.2072 114 17H38.9997L14 63.7406H62.6016V63.7731C49.59 64.1121 37.2323 69.1801 28.1563 77.9028C19.0803 86.6255 14.0016 98.3136 14 110.481H88.9999L114 63.7406H65.1558V63.7135Z"
          fill="url(#paint0_linear_4673_3536)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4673_3536"
            x1="100.365"
            y1="29.3078"
            x2="28.5919"
            y2="101.402"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.150166" stopColor="currentColor" />
            <stop offset="1" stopColor="currentColor" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
]

export function Timeline() {
  return (
    <div className="relative flex w-full">
      {/* Main timeline container */}
      <div className="relative flex w-full">
        {/* Horizontal connecting line */}
        <div className="absolute left-3 top-1 h-px w-[calc(100%-60px)] translate-y-[-0.5px] bg-border opacity-40" />

        {/* Timeline items */}
        <div className="flex w-full justify-between">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative flex pt-6">
              {/* Timeline dot and connecting elements */}
              <div className="absolute left-0 top-0">
                {item.isActive && (
                  <>
                    {/* Active gradient line */}
                    <div className="absolute -left-16 top-1 h-px w-20 bg-gradient-to-r from-transparent to-foreground sm:-left-24 sm:w-28" />
                    {/* Active dot */}
                    <div className="relative z-10 ml-2 h-2 w-2 rounded-full bg-foreground" />
                    {/* Animated ping effect */}
                    <div className="absolute -left-0.5 -top-0.5 z-10 ml-2 h-3 w-3 animate-ping rounded-full bg-foreground opacity-50" />
                  </>
                )}
                {!item.isActive && (
                  /* Inactive dot */
                  <div className="relative z-10 ml-2 h-2 w-2 rounded-full bg-border" />
                )}
                {/* Background circle */}
                <div className="absolute -left-1.5 -top-1.5 ml-2 h-5 w-5 rounded-full bg-background" />
              </div>

              {/* Content */}
              <div className="flex flex-col sm:gap-2">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                  {/* Icon */}
                  <div className="h-6 w-6 overflow-hidden rounded-md border">
                    <div className="flex h-6 w-6 items-center justify-center bg-gradient-to-br from-accent to-transparent text-xs">
                      <span className="-ml-[3px] -mt-[3px] text-lg">{item.icon}</span>
                    </div>
                  </div>
                  {/* Title */}
                  <span
                    className={`text-xs font-medium sm:text-sm ${item.isActive ? "text-foreground" : "text-muted-foreground opacity-60"}`}
                  >
                    {item.title}
                  </span>
                </div>
                {/* Date range */}
                <span className="font-mono text-[8px] text-muted-foreground sm:text-xs">
                  {item.dateRange}
                </span>
              </div>
            </div>
          ))}

          {/* ALL link */}
          {/*  TODO: Add work page */}
          {/* <div className="relative flex pt-6">
            <div className="absolute -top-1 left-0 flex w-full justify-end">
              <Link href="/work">
                <span className="font-mono flex gap-1 text-xs font-medium text-muted-foreground duration-200 hover:text-foreground">
                  <span>ALL</span>
                  <svg height="1em" width="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>share all right</title>
                    <g fill="currentColor">
                      <path
                        d="m2.5,15s.974-3.5,5.5-3.5v3.5s4.5-5,4.5-5l-4.5-5v3.5c-5.5,0-5.5,6.5-5.5,6.5Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="m13,15l4.5-5-4.5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </span>
              </Link>
            </div>
            */}
        </div>
      </div>
    </div>
  )
}
