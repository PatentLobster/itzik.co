"use client"

import {Gochi_Hand} from "@next/font/google";
import {cn} from "@/lib/utils";
import * as React from "react";


const gochi = Gochi_Hand({subsets: ['latin'], display: "swap", weight: ['400']})

export interface LogoProps
  extends React.HTMLAttributes<HTMLElement> {}


// eslint-disable-next-line react/display-name
const Logo = React.forwardRef<HTMLElement, LogoProps>(({ className, ...props }) =>{
  return (
      <>
        <h1 className={cn("font-extrabold", className, gochi.className)} {...props}>
          Itzik
        </h1>
      </>
  )
})

export default Logo