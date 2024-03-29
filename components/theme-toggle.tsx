"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Icons } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import {cn} from "@/lib/utils";

export function ThemeToggle() {
   const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={
            "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent"
          }
        >
          <Icons.sun className={cn("hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100", theme !== "system" ? "text-blue-400" : "" )} />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Icons.sun className={cn("mr-2 h-4 w-4", theme === "light" ? "text-blue-400" : "" )} />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Icons.moon className={cn("mr-2 h-4 w-4", theme === "dark" ? "text-blue-400" : "" )} />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Icons.laptop className={cn("mr-2 h-4 w-4", theme === "system" ? "text-blue-400" : "" )} />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
