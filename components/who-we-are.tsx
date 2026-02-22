"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Beaker, Lightbulb, Microscope } from "lucide-react"

export function WhoWeAre() {
  const shouldReduceMotion = useReducedMotion()
  const narrativeCards = [
    {
      icon: Beaker,
      title: "Built on Deep Materials Science",
      description:
        "At Coreact, we engineer quantum dot materials that turn scientific precision into practical technologies for advanced displays, lighting, solar energy, biomedical imaging, and next-generation electronics.",
    },
    {
      icon: Microscope,
      title: "Engineered by Scientists and Applied by Industry",
      description:
        "Our team combines nanotechnology expertise with rigorous research workflows to build materials that improve color performance, increase energy efficiency, and raise imaging quality across demanding environments.",
    },
    {
      icon: Lightbulb,
      title: "From Laboratory Discovery to Real-World Impact",
      description:
        "We bridge discovery and deployment by creating quantum dot solutions that inspire new product categories, unlock higher system performance, and push the boundaries of what imaging and sensing can achieve.",
    },
  ]

  const highlights = [
    { label: "Core Capability", value: "Quantum Dot Engineering" },
    { label: "Delivery Model", value: "Research + Manufacturing" },
    { label: "Application Reach", value: "Displays to Bioimaging" },
    { label: "Operating Mindset", value: "Innovation at Scale" },
  ]

  const focusAreas = [
    "High-color-gamut LED displays",
    "Energy-efficient optoelectronics",
    "Solar performance enhancement",
    "High-resolution biomedical imaging",
  ]

  const companyNarrative = [
    "At Coreact, we don't just make materials - we engineer the future. As a leading Quantum Dots manufacturer, we transform light, color, and technology into solutions that power innovation across displays, lighting, solar energy, biomedical imaging, and next-generation electronics. What we create embodies precision, performance, and the promise of smarter, brighter, and more sustainable technologies.",
    "Through the expertise of our world-class scientists, we are developing Quantum Dots that set new industry standards. By combining advanced nanotechnology with deep research experience, our team creates materials that enhance LED displays with richer colors, improve energy efficiency in lighting, boost solar cell performance, enable high-resolution biomedical imaging, and unlock breakthroughs in electronic devices.",
    "Our innovation is bold, transformative, and uncompromising because the future demands materials that perform beyond expectations. At Coreact, innovation is not just what we do - it's who we are.",
    "From cutting-edge research to real-world applications, we create Quantum Dot solutions that inspire creativity, elevate performance, and redefine what's possible. Coreact: engineering the future.",
  ]

  return (
    <section id="who-we-are" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 18%, rgba(206,255,0,0.16), transparent 35%), radial-gradient(circle at 82% 78%, rgba(206,255,0,0.12), transparent 32%)",
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
            Company Profile
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-display mb-5 text-balance">
            Who <span className="text-gradient-lime">We Are</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            We engineer the future through quantum dot materials that power innovation across displays, lighting, solar energy, biomedical imaging, and next-generation electronics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <motion.aside
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-4 lg:sticky lg:top-24 relative overflow-hidden rounded-3xl border border-primary/25 bg-background/75 backdrop-blur-sm p-6"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0" />
            <h3 className="text-2xl sm:text-3xl font-bold tracking-display mb-3 text-foreground">Coreact at a glance</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed ">
              We are a materials innovation company focused on turning quantum dot research into scalable performance
              gains for high-impact industries.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/70 bg-background/60 p-4">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground leading-snug">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border/70 bg-background/60 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Primary focus areas</p>
              <ul className="space-y-2.5">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>

          <div className="lg:col-span-8 space-y-4">
            <motion.article
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-border/70 bg-background/70 p-5 sm:p-6 md:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-3">
                Engineering the future
              </h3>
              <ul className="space-y-3 text-left">
                {companyNarrative.map((paragraph, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed text-justify">
                    <span className="text-justify">{paragraph}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            {narrativeCards.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-b from-background/90 to-background/60 p-5 sm:p-6 md:p-8 hover:border-primary/45 transition-colors"
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary/0 via-primary/85 to-primary/0" />
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                    <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold text-primary">
                        {`0${index + 1}`}
                      </span>
                      <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed text-justify">{item.description}</p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
