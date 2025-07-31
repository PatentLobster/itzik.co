"use client";

import { motion } from "framer-motion";
import {  HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import ReactMarkdown from "react-markdown";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
}

const Card = ({ title, description, demo, large, className }: CardProps) => (
  <>
    <motion.div
      initial={{ opacity: 0, y: "-1em" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className={cn(
        "relative col-span-1  inset-shadow rounded-lg border border-slate-900/10 bg-white drop-shadow dark:border-slate-100/10 dark:bg-neutral-800",
        large ? "md:col-span-2" : "",
        className
      )}
    >
      <div className="flex h-52  relative items-center justify-center">
        {demo}
      </div>
      <div className="mx-auto mt-2 max-w-md text-center">
        <h2 className="bg-linear-to-br from-black to-stone-500 dark:from-white dark:to-slate-400 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm mt-2 pb-4 leading-normal text-gray-500 md:prose">
          <Balancer>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                    className="font-medium text-gray-800 underline transition-colors"
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    {...props}
                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                    inline="true"
                    className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </Balancer>
        </div>
      </div>
    </motion.div>
  </>
);

export default Card;
