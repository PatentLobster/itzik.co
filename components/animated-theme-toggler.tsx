"use client";
import * as React from "react";


import { Moon, Sun } from "lucide-react";
import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme, resolvedTheme } = useTheme();

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const changeTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        switch (theme) {
          case "light":
              setTheme("dark")
              break
          case "dark":
              setTheme("light")
              break
          
          default:
          case "system":
            resolvedTheme == "dark" ? setTheme("light") : setTheme("dark")
            break
        }
          
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
      setMounted(true);
    }, []);
  
  if (!mounted) {
    return (
      <button ref={buttonRef} onClick={changeTheme} className={cn("focus-none",className)}>
        <Moon strokeWidth={0.8}/>
      </button>
    );
  }
  return (
    <button ref={buttonRef} onClick={changeTheme} className={cn("focus-none",className)}>
      {theme == "light" ? <Sun strokeWidth={1.5} /> : <Moon strokeWidth={0.8}/>}
    </button>
  );
};
