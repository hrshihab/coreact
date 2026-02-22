"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Beaker, Globe2, Lightbulb, Microscope } from "lucide-react"

const capabilities = [
  {
    icon: Beaker,
    title: "Breakthrough Materials",
    description: "High-performance quantum dot materials engineered for imaging, sensing, and advanced display systems.",
  },
  {
    icon: Microscope,
    title: "Advanced Sensor Tech",
    description: "Wide-range image sensing capabilities designed to capture more detail across challenging conditions.",
  },
  {
    icon: Lightbulb,
    title: "Applied Innovation",
    description: "Research translated into scalable solutions that bridge scientific discovery and real-world impact.",
  },
  {
    icon: Globe2,
    title: "Global Collaboration",
    description: "Trusted development partnerships with businesses and academic institutions worldwide.",
  },
]

const highlights = [
  { label: "Founded", value: "2021" },
  { label: "Core Focus", value: "Wide-Range Image Sensing" },
  { label: "Role", value: "Developer and Manufacturer" },
  { label: "Positioning", value: "Global Innovation Partner" },
]

const commitments = [
  "Push beyond conventional vision with breakthrough quantum dot and sensor technologies.",
  "Deliver practical outcomes by connecting scientific discovery to real-world use cases.",
  "Build trusted collaborations with businesses and academic institutions worldwide.",
  "Advance next-generation imaging systems with scientific excellence and global cooperation.",
]

export function AboutCoreact() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 18%, rgba(206,255,0,0.16), transparent 35%), radial-gradient(circle at 82% 78%, rgba(206,255,0,0.12), transparent 32%)",
        }}
        aria-hidden
      />

      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary tracking-wide uppercase mb-4">
            About Coreact
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-display mb-5 text-balance">
            <span className="text-gradient-lime">About the Company</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Coreact is shaping the future of imaging through breakthrough quantum dot materials and advanced sensor
            technologies.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
        >
          <article className="lg:col-span-8 rounded-3xl border border-border/70 bg-background/70 p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Coreact at a glance</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              At Coreact, we are shaping the future of imaging through breakthrough quantum dot materials and advanced
              sensor technologies. As a pioneering developer and manufacturer in the field of wide-range image
              sensing, our mission is to push beyond the boundaries of conventional vision and enable technologies
              that see more, understand more, and achieve more.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Since our founding in 2021, we have rapidly grown into a trusted innovation partner for businesses and
              academic institutions worldwide. Through strong collaborations and relentless research, we deliver
              cutting-edge solutions that bridge scientific discovery with real-world impact.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Driven by a vision of a smarter, more perceptive future, we are building foundational technologies that
              empower next-generation imaging systems across industries. Our commitment to innovation, scientific
              excellence, and global collaboration positions Coreact at the forefront of a new era where quantum dot
              technology transforms how the world captures and interprets visual information. We are not simply
              developing materials; we are engineering the future of sight.
            </p>
          </article>

          <div className="lg:col-span-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-border/70 bg-background/70 p-4"
                >
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/70 p-5">
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3">Strategic Commitments</h4>
              <ul className="space-y-2.5">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl border border-border/70 bg-background/70"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
