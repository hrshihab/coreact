"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

export function MessageFromCEO() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="message-ceo" lang="en" className="relative pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-3xl border border-primary/25 bg-background/70 backdrop-blur-sm p-6 sm:p-8 md:p-10"
      >
        <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden border border-border/70 bg-background/60 aspect-[4/5] min-h-[380px]">
              <Image
                src="/Images/IMG_7984.PNG"
                alt="Mr. Avishek Mittal, Managing Director and CEO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <span className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-primary tracking-wide uppercase mb-4">
              Managing Director & CEO
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-display mb-6 leading-tight">
              Message from <span className="text-gradient-lime">Mr. Avishek Mittal</span>
            </h2>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed hyphens-auto text-justify">
                Excellence is never accidental. It is the result of vision, discipline, and an unwavering commitment to
                quality. At Coreact, every environment and system we develop reflects precision, innovation, and high
                standards of service.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed hyphens-auto text-justify">
                Our purpose is to build solutions that operate flawlessly, inspire confidence, and support lasting
                success. We continue to invest in forward-thinking technologies, sustainable practices, and world-class
                expertise to deliver measurable excellence every day.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed hyphens-auto text-justify">
                Our journey is defined by trust and partnership. With clients and teams, we are setting a benchmark
                where performance, innovation, and integrity work seamlessly together to create long-term impact.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <p className="font-semibold text-foreground">Mr. Avishek Mittal</p>
              <p className="text-sm text-muted-foreground">Managing Director & CEO, Coreact</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
