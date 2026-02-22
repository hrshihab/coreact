"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

export function WhatAreQuantumDots() {
  const shouldReduceMotion = useReducedMotion()

  const features = [
    {
      title: "Tunable Wavelength",
      description: "By controlling size, shape, and composition, quantum dots can be tuned to emit exact wavelengths.",
      image: "/Images/IMG_7963.PNG",
    },
    {
      title: "Pure, Precise Color",
      description: "When excited by light or electricity, quantum dots emit highly pure colors with exceptional control.",
      image: "/Images/IMG_7965.PNG",
    },
    {
      title: "Nanoscale Advantage",
      description: "Operating at nanoscale unlocks optical and electrical behavior not seen in conventional materials.",
      image: "/Images/IMG_7964.PNG",
    },
    {
      title: "Energy-Efficient Performance",
      description: "Quantum-dot systems can improve brightness, efficiency, and performance across applications.",
      image: "/Images/IMG_7968.PNG",
    },
    {
      title: "Cross-Industry Impact",
      description: "From displays and sensors to biomedical imaging and energy devices, use cases are rapidly expanding.",
      image: "/Images/IMG_7966.PNG",
    },
    {
      title: "Platform for Innovation",
      description: "Quantum dots bridge physics, chemistry, and engineering to enable the next wave of technology design.",
      image: "/Images/IMG_7967.PNG",
    },
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
            Quantum Dot Fundamentals
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-display mb-5 text-balance">
            What Are <span className="text-gradient-lime">Quantum Dots</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Quantum dots are nanoscale semiconductor particles that let us engineer light with extraordinary precision
            for displays, sensing, imaging, and energy systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.article
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 relative overflow-hidden rounded-3xl border border-primary/25 bg-background/75 backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0" />
            <h3 className="text-2xl sm:text-3xl font-bold tracking-display text-foreground mb-4">
              Tiny particles, massive capability
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Thousands of times smaller than a human hair, quantum dots behave differently at the nanoscale. That
              behavior enables optical and electrical properties conventional materials cannot easily match.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              More than a scientific milestone, quantum dots provide an engineering platform for creating brighter
              displays, more sensitive sensors, and smarter systems that interpret the world with greater fidelity.
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>Size-defined light emission and spectral control</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>High color purity with efficiency gains</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>Scalable impact across electronics, healthcare, and energy</span>
              </li>
            </ul>
          </motion.article>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-background/90 to-background/60 hover:border-primary/45 transition-colors"
            >
              <div className="relative aspect-[16/10] bg-background/60">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-background/80 text-[11px] font-semibold text-primary">
                  {`0${index + 1}`}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
