import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import dynamic from "next/dynamic"
// import { HackingViz } from "../visualizations/hacking";

const DevOpsViz = dynamic(() => import("../visualizations/devops").then((mod) => ({ default: mod.DevOpsViz })), {
    loading: () => <Skeleton />,
    ssr: false,
  });
  const HackingViz = dynamic(() => import("../visualizations/hacking").then((mod) => ({ default: mod.HackingViz })), {
    loading: () => <Skeleton />,
    ssr: false,
  })

  const StockTradingViz = dynamic(
    () => import("../visualizations/stocks").then((mod) => ({ default: mod.StockTradingViz })),
    {
      loading: () => <Skeleton />,
      ssr: false,
    },
  )

  const LearningViz = dynamic(
    () => import("../visualizations/learning").then((mod) => ({ default: mod.LearningViz })),
    {
      loading: () => <Skeleton />,
      ssr: false,
    },
  )

export function Skills() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "DevOps & Infrastructure",
    description: "CI/CD pipelines, containerization, and cloud infrastructure automation at scale.",
    header: <DevOpsViz />,
    className: "md:col-span-2 pb-2",
  },
  {
    title: "Continuous Learning",
    description: "Curious about everything. Love exploring new tools, languages & ideas.",
    header: <LearningViz />,
    className: "md:col-span-1",
  },
  {
    title: "Stock & Algo Trading",
    description: "Realtime market analysis & execution systems.",
    header: <StockTradingViz />,
    className: "md:col-span-1 ",
  },
  {
    title: "Ethical Hacking",
    description:
      "Penetration testing, vulnerability assessment, and cybersecurity research.",
    header: <HackingViz />,
    className: "md:col-span-2",
  },
];
