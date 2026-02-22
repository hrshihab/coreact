"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { useMemo, useState, useEffect } from "react"
import { Particles } from "@/components/ui/particles"

// Generate animated quantum dots
function QuantumDot({
  delay,
  duration,
  size,
}: {
  delay: number
  duration: number
  size: number
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary"
      style={{
        width: size,
        height: size,
        boxShadow: `0 0 ${size * 2}px rgba(206, 255, 0, 0.8)`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
        y: [0, -100, -200],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const headingLine1 = "Engineering the future"
  const headingLine2 = "of quantum dot technology"
  const [typedLine1, setTypedLine1] = useState("")
  const [typedLine2, setTypedLine2] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const line1Complete = typedLine1.length >= headingLine1.length
  const line2Started = typedLine2.length > 0
  const cursorOnLine1 = !line1Complete && !line2Started
  const cursorOnLine2 = line1Complete

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedLine1(headingLine1)
      setTypedLine2(headingLine2)
      return
    }

    setTypedLine1("")
    setTypedLine2("")

    let cancelled = false
    let i = 0
    let j = 0
    const speed = 45
    let typeTimeout: ReturnType<typeof setTimeout> | null = null

    const typeFirstLine = () => {
      if (cancelled) return
      if (i <= headingLine1.length) {
        setTypedLine1(headingLine1.slice(0, i))
        i += 1
        typeTimeout = setTimeout(typeFirstLine, speed)
      } else {
        typeTimeout = setTimeout(typeSecondLine, 180)
      }
    }

    const typeSecondLine = () => {
      if (cancelled) return
      if (j <= headingLine2.length) {
        setTypedLine2(headingLine2.slice(0, j))
        j += 1
        typeTimeout = setTimeout(typeSecondLine, speed)
      }
    }

    const startDelay = setTimeout(typeFirstLine, 250)

    return () => {
      cancelled = true
      clearTimeout(startDelay)
      if (typeTimeout) clearTimeout(typeTimeout)
    }
  }, [shouldReduceMotion, headingLine1, headingLine2])

  useEffect(() => {
    if (shouldReduceMotion) return
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [shouldReduceMotion])

  // Generate random quantum dots only on client to avoid hydration mismatch (Math.random differs on server vs client)
  const quantumDots = useMemo(() => {
    if (!mounted) return []
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 2 + Math.random() * 4,
    }))
  }, [mounted])

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Black dot grid background */}
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, #0a0a0a 0.75px, transparent 0.75px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />
      {/* Particles background */}
      <Particles quantity={50} size={0.8} spread={0.4} attraction={0.006} className="absolute inset-0 z-0" />

      {/* Animated quantum dots background - only render on client to avoid hydration mismatch from Math.random() */}
      {!shouldReduceMotion && mounted && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Top quantum dots */}
          <div className="absolute top-20 left-1/4 w-96 h-96">
            {quantumDots.slice(0, 6).map((dot) => (
              <QuantumDot
                key={`top-${dot.id}`}
                delay={dot.delay}
                duration={dot.duration}
                size={dot.size}
              />
            ))}
          </div>

          {/* Right quantum dots */}
          <div className="absolute top-1/3 right-0 w-96 h-96">
            {quantumDots.slice(6, 12).map((dot) => (
              <QuantumDot
                key={`right-${dot.id}`}
                delay={dot.delay + 1}
                duration={dot.duration}
                size={dot.size}
              />
            ))}
          </div>

          {/* Quantum wave effect */}
          <svg
            className="absolute bottom-0 left-0 w-full opacity-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: "100px" }}
          >
            <defs>
              <linearGradient id="quantum-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(206, 255, 0)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="rgb(206, 255, 0)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="rgb(206, 255, 0)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50"
              stroke="url(#quantum-gradient)"
              strokeWidth="3"
              fill="none"
              animate={{
                d: [
                  "M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50",
                  "M0,50 Q150,80 300,50 T600,50 T900,50 T1200,50",
                  "M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      )}

      <div className="flex-1 flex items-center justify-center pt-28 lg:pt-32 pb-40 sm:pb-32 relative z-10">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={shouldReduceMotion ? {} : fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-display mb-6 leading-[1.1] flex flex-col items-center"
          >
            <span className="text-gradient-lime block font-mono min-h-[1.2em]">
              {typedLine1}
              <span
                className={`inline-block w-[0.6ch] ${cursorOnLine1 && showCursor ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            </span>
            <span className="text-foreground block font-mono min-h-[1.2em]">
              {typedLine2}
              <span
                className={`inline-block w-[0.6ch] ${cursorOnLine2 && showCursor ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? {} : fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed px-2"
          >
            Coreact is pioneering breakthrough quantum dot materials and advanced sensor technologies that transform 
            imaging, displays, and sensing across industries. From next-gen displays to biomedical imaging, we're 
            redefining what's possible.
          </motion.p>



          <motion.div
            initial={shouldReduceMotion ? {} : fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button size="xl" rounded="full" className="gap-2 w-full sm:w-auto">
              Explore Technology
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="xl" rounded="full" className="gap-2 bg-transparent w-full sm:w-auto">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>


    </section>
  )
}
