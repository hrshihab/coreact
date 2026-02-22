"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

export function MessageFromDirector() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="message-director" lang="en" className="relative pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-3xl border border-primary/25 bg-background/70 backdrop-blur-sm p-6 sm:p-8 md:p-10"
      >
        <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-8 order-2 lg:order-1">
            <span className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-primary tracking-wide uppercase mb-4">
              Director & Vice President
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-display mb-6 leading-tight">
              Message from <span className="text-gradient-lime">Mr. Masum Parvez</span>
            </h2>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed hyphens-auto text-justify">
                We are living in an era where change moves faster than ever and only those who dare to lead will
                define what comes next. At Coreact, we are not simply managing operations, we are shaping future-ready
                infrastructure powered by advanced quantum dots technology.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed hyphens-auto text-justify">
                We believe every space and system can influence ideas, performance, and human progress. Our ambition
                is to transform environments into intelligent, sustainable ecosystems that empower people and
                organizations to achieve more than they thought possible.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed hyphens-auto text-justify">
                We challenge convention, embrace innovation, and move forward with purpose. Together with our clients,
                partners, and team, we are building a new standard where operational brilliance, sustainability, and
                human potential create extraordinary outcomes.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed hyphens-auto">
                The future is not something we wait for. It is something we create together.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80">
              <p className="font-semibold text-foreground">Mr. Masum Parvez</p>
              <p className="text-sm text-muted-foreground">Director & Vice President, Coreact</p>
            </div>
          </div>

          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-border/70 bg-background/60 aspect-[4/5] min-h-[380px]">
              <Image
                src="/coreact-team-headshot.png"
                alt="Mr. Masum Parvez, Director and Vice President"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
