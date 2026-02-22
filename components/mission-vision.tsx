"use client"

import { motion, useReducedMotion } from "framer-motion"

const missionPoints = [
  "Extend imaging beyond the visible spectrum",
  "Enable intelligent machine perception",
  "Convert hidden signals into actionable intelligence",
]

const visionPoints = [
  "Embed advanced vision into everyday systems",
  "Power safer mobility and smarter infrastructure",
  "Build a future where technology does not just observe, it understands",
]

export function MissionVision() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="mission-vision" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(206,255,0,0.16), transparent 34%), radial-gradient(circle at 82% 80%, rgba(206,255,0,0.12), transparent 30%)",
        }}
        aria-hidden
      />

      <div className="space-y-10 md:space-y-12">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Strategic Direction
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-display mb-5 text-balance">
            Our <span className="text-gradient-lime">Mission & Vision</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We are building a new visual era where quantum dot innovation and advanced sensing technology redefine how
            machines perceive, interpret, and act on the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.article
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl border border-primary/25 bg-background/75 backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0" />
            <h3 className="text-3xl sm:text-4xl font-bold tracking-display mb-4">
              Our <span className="text-gradient-lime">Mission</span>
            </h3>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
                Human vision was never meant to be the limit. Our mission is to create a new frontier in imaging where
                quantum dot innovation and advanced silicon sensing converge to redefine how machines perceive reality.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
                By integrating quantum dot materials into next-generation sensors, we expand perception across
                infrared, ultraviolet, and high-energy spectrums, transforming invisible signals into actionable
                intelligence.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-border/70 bg-background/60 p-5">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {missionPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.article
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-primary/25 bg-background/75 backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0" />
            <h3 className="text-3xl sm:text-4xl font-bold tracking-display mb-4">
              Our <span className="text-gradient-lime">Vision</span>
            </h3>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
                We envision a future where advanced vision is embedded everywhere. Devices will no longer simply
                observe the world, they will interpret it with unprecedented clarity, depth, and awareness.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
                Our commitment is relentless exploration and bold innovation. We are building the foundation for a new
                visual era where imaging technology transforms how humanity sees, learns, and advances.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-border/70 bg-background/60 p-5">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {visionPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
