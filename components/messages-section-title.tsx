"use client"

import { motion, useReducedMotion } from "framer-motion"

export function MessagesSectionTitle() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="leadership-messages" className="relative pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary tracking-wide uppercase mb-4">
          Leadership Voice
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-display mb-5 text-balance">
          Message from <span className="text-gradient-lime">Our Leadership</span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Shared perspectives from our executive leadership on innovation, impact, and the future we are building.
        </p>
      </motion.div>
    </section>
  )
}
