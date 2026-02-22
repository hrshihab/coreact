"use client"

import { motion, useReducedMotion } from "framer-motion"

const teamNarrative = [
  "Innovation is powered by people and our team is built to push the boundaries of what is possible. We are a multidisciplinary group of world-class scientists, engineers, and innovators united by a shared mission to redefine the future of advanced materials and imaging technology. Our expertise spans chemistry, nanotechnology, materials science, chemical engineering, and optoelectronic device engineering, bringing together deep scientific knowledge with practical industry experience. Our team combines strong foundations in research and development with strategic business insight, allowing us to transform breakthrough discoveries into real-world technological impact.",
  "Our scientists and professionals come from different nations and backgrounds, creating a dynamic environment where perspectives converge and ideas evolve into groundbreaking solutions. We are more than a team, we are a collective of pioneers dedicated to advancing science and transforming vision into reality. Through curiosity, collaboration, and relentless exploration, we are building the technologies that will define the next era of innovation.",
]

export function OurTeam() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="team" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(206,255,0,0.16), transparent 34%), radial-gradient(circle at 82% 80%, rgba(206,255,0,0.12), transparent 30%)",
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
            Team Collective
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-display mb-5 text-balance">
            Our <span className="text-gradient-lime">Team</span>
          </h2>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative overflow-hidden rounded-3xl border border-primary/25 bg-background/75 backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0" />
          <div className="space-y-4">
            {teamNarrative.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
