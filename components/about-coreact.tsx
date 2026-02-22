"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Beaker, Globe2, Lightbulb, Microscope } from "lucide-react"

const capabilities = [
  {
    icon: Beaker,
    title: "Breakthrough Materials",
    description: "High-performance quantum dot materials engineered for imaging, sensing, and advanced display systems.",
    span: "lg:col-span-3",
  },
  {
    icon: Microscope,
    title: "Advanced Sensor Tech",
    description: "Wide-range image sensing capabilities designed to capture more detail across challenging conditions.",
    span: "lg:col-span-3",
  },
  {
    icon: Lightbulb,
    title: "Applied Innovation",
    description: "Research translated into scalable solutions that bridge scientific discovery and real-world impact.",
    span: "lg:col-span-2",
  },
  {
    icon: Globe2,
    title: "Global Collaboration",
    description: "Trusted development partnerships with businesses and academic institutions worldwide.",
    span: "lg:col-span-4",
  },
]

const metrics = [
  { label: "Founded", value: "2021", note: "Built for long-horizon R&D" },
  { label: "Core Focus", value: "Wide-Range Imaging", note: "Beyond conventional perception" },
  { label: "Model", value: "Research + Scale-Up", note: "Lab insight to industrial delivery" },
  { label: "Positioning", value: "Global Innovation Partner", note: "Industry + academic collaboration" },
]

const operatingModel = [
  {
    title: "Discover",
    description: "Explore novel nanomaterial pathways and tune optical properties with deep experimental rigor.",
  },
  {
    title: "Engineer",
    description: "Convert core discoveries into stable, repeatable material systems suitable for product integration.",
  },
  {
    title: "Scale",
    description: "Support partner deployment with manufacturable processes and performance-driven validation.",
  },
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

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Coreact is shaping the future of imaging through breakthrough quantum dot materials and advanced sensor
            technologies. As a pioneering developer and manufacturer in wide-range image sensing, our mission is to
            push beyond conventional vision and enable technologies that see more, understand more, and achieve more.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <article className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-primary/25 bg-background/75 backdrop-blur-sm p-6 sm:p-8">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0" />
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Company Narrative</p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-display text-foreground mb-4 text-balance">
              Engineering the future of sight
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Since our founding in 2021, we have become a trusted innovation partner for businesses and academic
              institutions worldwide. We bridge advanced science and measurable outcomes through rigorous research,
              collaborative development, and focused technology transfer.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              We do not only build materials. We build enabling technologies for next-generation imaging systems with
              a commitment to scientific excellence, responsible innovation, and global partnership.
            </p>

            <div className="rounded-2xl border border-border/70 bg-background/60 p-4 sm:p-5">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">What defines us</p>
              <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed">
                Deep research capability, disciplined engineering, and practical deployment support across the full
                innovation lifecycle.
              </p>
            </div>
          </article>

          <div className="lg:col-span-7 space-y-4">
            {operatingModel.map((item, index) => (
              <motion.article
                key={item.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-background/90 to-background/60 p-5 sm:p-6"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary/0 via-primary/90 to-primary/0" />
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold text-primary">
                    {`0${index + 1}`}
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.06 }}
                  className="rounded-2xl border border-border/70 bg-background/60 p-4"
                >
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground mb-1">{item.value}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`group relative p-5 sm:p-6 rounded-2xl border border-border/70 bg-gradient-to-b from-background/90 to-background/60 hover:border-primary/50 transition-all duration-300 ${capability.span}`}
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
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
