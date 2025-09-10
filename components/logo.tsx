"use client"


import {cn} from "@/lib/utils";
import * as React from "react";

import {Gochi_Hand} from "next/font/google";
const gochi = Gochi_Hand({subsets: ['latin'], display: "swap", weight: ['400']})

export interface LogoProps
  extends React.HTMLAttributes<HTMLElement> {}


// eslint-disable-next-line react/display-name
const Logo = ({ className, ...props }: LogoProps) =>{
  return (
      <>
        <span className={cn("font-extrabold", className, gochi.className)} {...props}>
          Itzik
        </span>
      </>
  )
}

export default Logo