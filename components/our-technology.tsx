"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

const highlights = [
  { label: "Core Platform", value: "QD LED Systems" },
  { label: "Material Set", value: "InP, CdSe, QDS Perovskite ABX3" },
  { label: "Deployment", value: "R&D to Scalable Manufacturing" },
  { label: "Applications", value: "Displays, AR/VR, Automotive, Signage" },
]

export function OurTechnology() {
  const shouldReduceMotion = useReducedMotion()

  const technologies = [
    {
      title: "QD LED Platform",
      description: "Quantum Dot LED technology delivering brighter, more durable, and color-pure visual systems.",
      specs: ["Enhanced brightness", "High color purity", "Improved durability"],
    },
    {
      title: "Display Integration",
      description: "Engineered for televisions, smartphones, wearables, AR/VR, automotive interfaces, and signage.",
      specs: ["Flexible form factors", "Curved and compact systems", "Scalable product integration"],
    },
    {
      title: "Material Portfolio",
      description: "Next-generation materials including InP, CdSe, and QDS Perovskite ABX3 quantum dots.",
      specs: ["Blue and green QD LED support", "High-efficiency emission", "Tunable material systems"],
    },
    {
      title: "Energy Efficiency",
      description: "Optimized light conversion and lower power demand for high-performance display ecosystems.",
      specs: ["Lower energy consumption", "Long-term reliability", "Performance consistency"],
    },
    {
      title: "Scalable Manufacturing",
      description: "From research validation to production-scale deployment for real-world products.",
      specs: ["Production-ready workflows", "Quality-driven process control", "Industry collaboration"],
    },
    {
      title: "Future Display Design",
      description: "Built for immersive, adaptive, and lifelike visual experiences across next-generation devices.",
      specs: ["Smarter visual systems", "Immersive user experience", "Platform for tomorrow"],
    },
  ]

  return (
    <section id="technology" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
            Innovation Stack
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-display mb-5 text-balance">
            Our <span className="text-gradient-lime">Technology</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our platform combines advanced quantum dot materials with modern display engineering to deliver brighter,
            more immersive, and energy-efficient visual systems built for next-generation products.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full relative rounded-2xl overflow-hidden min-h-[180px] aspect-[21/9]"
        >
          <Image
            src="/Images/IMG_7965.PNG"
            alt="Our technology and QD LED systems"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"
        >
          <div className="lg:col-span-6 relative overflow-hidden rounded-3xl border border-primary/25 bg-background/75 backdrop-blur-sm p-5 sm:p-6">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0" />
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Built for the next display era</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
              QD LED technology enables greater brightness, enhanced durability, and exceptional color purity beyond
              traditional OLED systems. From televisions and smartphones to wearables, AR/VR, automotive interfaces,
              and digital signage, our technology stack is engineered for scalable real-world performance.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-border/70 bg-background/60 p-5"
              >
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{item.label}</p>
                <p className="text-sm sm:text-base font-semibold text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <motion.article
              key={tech.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/70 p-5 sm:p-6 hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0" />
              <div className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary mb-3">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{tech.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-justify">{tech.description}</p>
              <div className="space-y-2">
                {tech.specs.map((spec) => (
                  <div key={spec} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
