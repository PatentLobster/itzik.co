"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useIntersectionObserver } from "../optimized/intersection-observer"
import { SkeletonLoader } from "../optimized/skeleton-loader"
import { LazyMotionWrapper } from "../optimized/lazy-motion"
import { m } from "framer-motion"
import dynamic from "next/dynamic"
import { Suspense, memo } from "react"

// Optimized dynamic imports with better loading states
const StockTradingViz = dynamic(
  () => import("../visualizations/stocks").then((mod) => ({ default: mod.StockTradingViz })),
  {
    loading: () => <SkeletonLoader height="192px" className="bg-gradient-to-br from-green-500/10 to-blue-500/10" />,
    ssr: false,
  },
)

const DevOpsViz = dynamic(() => import("../visualizations/devops").then((mod) => ({ default: mod.DevOpsViz })), {
  loading: () => <SkeletonLoader height="192px" className="bg-gradient-to-br from-blue-500/10 to-purple-500/10" />,
  ssr: false,
})

const SEOViz = dynamic(() => import("../visualizations/seo").then((mod) => ({ default: mod.SEOViz })), {
  loading: () => <SkeletonLoader height="192px" className="bg-gradient-to-br from-orange-500/10 to-red-500/10" />,
  ssr: false,
})

const ElectronicsViz = dynamic(
  () => import("../visualizations/electronics").then((mod) => ({ default: mod.ElectronicsViz })),
  {
    loading: () => <SkeletonLoader height="192px" className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10" />,
    ssr: false,
  },
)

const HackingViz = dynamic(() => import("../visualizations/hacking").then((mod) => ({ default: mod.HackingViz })), {
  loading: () => <SkeletonLoader height="192px" className="bg-gradient-to-br from-red-500/10 to-pink-500/10" />,
  ssr: false,
})

const CodingViz = dynamic(() => import("../visualizations/coding").then((mod) => ({ default: mod.CodingViz })), {
  loading: () => <SkeletonLoader height="192px" className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />,
  ssr: false,
})

const OpenSourceViz = dynamic(
  () => import("../visualizations/opensource").then((mod) => ({ default: mod.OpenSourceViz })),
  {
    loading: () => <SkeletonLoader height="192px" className="bg-gradient-to-br from-green-500/10 to-teal-500/10" />,
    ssr: false,
  },
)

const HardwareViz = dynamic(
  () => import("../visualizations/hardware").then((mod) => ({ default: mod.HardwareViz })),
  {
    loading: () => <SkeletonLoader height="192px" className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10" />,
    ssr: false,
  },
)

const expertiseAreas = [
  {
    title: "Hardware & Systems",
    description: "System architecture, performance optimization, and hardware-software integration.",
    component: HardwareViz,
  },
  {
    title: "DevOps & Infrastructure",
    description: "CI/CD pipelines, containerization, and cloud infrastructure automation at scale.",
    component: DevOpsViz,
  },

  {
    title: "Ethical Hacking",
    description: "Penetration testing, vulnerability assessment, and cybersecurity research.",
    component: HackingViz,
  },
  {
    title: "Software Development",
    description: "Full-stack development with modern frameworks and clean, maintainable code.",
    component: CodingViz,
  },
  {
    title: "Open Source",
    description: "Passionate about open source technologies and learning from community projects.",
    component: OpenSourceViz,
  },
  {
    title: "Electronics & Circuits",
    description: "Circuit design, embedded systems, and hardware prototyping with microcontrollers.",
    component: ElectronicsViz,
  },

  {
    title: "Stock & Algo Trading",
    description: "Algorithmic trading with real-time market analysis and automated execution systems.",
    component: StockTradingViz,
  },
  {
    title: "SEO & Analytics",
    description: "Search engine optimization, keyword research, and comprehensive web analytics.",
    component: SEOViz,
  },

]

// Memoized card component to prevent unnecessary re-renders
const ExpertiseCard = memo(({ area, index }: { area: (typeof expertiseAreas)[0]; index: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "80px",
    triggerOnce: true,
  })

  return (
    <div ref={ref} className="">
      <LazyMotionWrapper>
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            delay: index * 0.1,
            duration: 0.6,
            ease: "easeOut",
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group h-full"
        >
          <Card className="rounded-lg text-card-foreground shadow-2xs h-full border-0 bg-gradient-to-br from-card/80 to-muted/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 ">
            <CardContent className="p-8">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
              </div>

              <div className="rounded-lg overflow-hidden" >
                {hasIntersected ? (
                  <Suspense fallback={<SkeletonLoader height="222px" />}>
                    <area.component />
                  </Suspense>
                ) : (
                  <SkeletonLoader height="222px" />
                )}
              </div>
            </CardContent>
          </Card>
        </m.div>
      </LazyMotionWrapper>
    </div>
  )
})

ExpertiseCard.displayName = "ExpertiseCard"

export function Hobbies() {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "200px",
    triggerOnce: true,
  })

  const now = new Date().getFullYear();

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-muted/30 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-100 py-24 dark:to-indigo-800/10 dark:from-stone-900 border-t border-b border-slate-900/10 dark:border-slate-50/10"
    >
      {/* Simplified background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <LazyMotionWrapper>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Expertise & Hobbies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From algorithmic trading to hardware hacking, I love exploring the intersection of technology and
              creativity. Here&apos;s a live view into my diverse skill set.
            </p>
          </m.div>
        </LazyMotionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 auto-rows-max py-16   gap-4">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={area.title} area={area} index={index} />
          ))}
        </div>

        <LazyMotionWrapper>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r dark:bg-gradient-to-r from-blue-500/10 dark:from-white/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">{now - 1997 - 12} Years of Continuous Learning</h3>
              <p className="text-black dark:text-muted-foreground max-w-2xl mx-auto">
                Each visualization above represents <strong>simulated data and interactive elements</strong> that demonstrate my technical 
                skills and knowledge in these fields. 
                </p>
                <p  className="text-black dark:text-muted-foreground max-w auto">
                From mock trading algorithms that process simulated market data to 
                virtual hardware monitors showing theoretical system performance, these are <strong>demonstrations</strong> that showcase my understanding of these domains.
              </p>
            </div>
          </m.div>
        </LazyMotionWrapper>
      </div>
    </section>
  )
}
