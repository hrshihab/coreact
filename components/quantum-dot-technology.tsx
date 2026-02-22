"use client"

import { motion, useReducedMotion } from "framer-motion"

export function QuantumDotTechnology() {
  const shouldReduceMotion = useReducedMotion()

  const steps = [
    {
      number: "01",
      title: "Energy Excitation",
      description:
        "When energy is applied, electrons in a quantum dot move to higher states and release light as they return.",
    },
    {
      number: "02",
      title: "Size-Controlled Emission",
      description:
        "By tuning nanoscale size and composition, emitted light can be engineered across visible, infrared, and ultraviolet ranges.",
    },
    {
      number: "03",
      title: "Spectral Precision",
      description:
        "Quantum dots enable highly controlled wavelengths that improve sensing, display quality, and machine perception.",
    },
    {
      number: "04",
      title: "System Integration",
      description:
        "These materials integrate into displays, medical imaging, energy systems, and intelligent sensors for real-world impact.",
    },
  ]

  const applications = [
    { name: "Ultra-Vivid Displays", benefit: "High brightness and precise color reproduction" },
    { name: "Machine Vision", benefit: "Extended spectral perception for smarter automation" },
    { name: "Medical Diagnostics", benefit: "Enhanced imaging and safer biological use cases" },
    { name: "Energy & Sensors", benefit: "Efficient light conversion and advanced detection" },
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-display mb-6">
          How Quantum Dot <span className="text-gradient-lime">Technology</span> Works
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Quantum dot technology is a revolution in how we manipulate light, perceive the world, and power next-generation devices. It combines nanoscale physics with practical engineering to create capabilities that conventional materials cannot deliver.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0">
              <div className="text-4xl font-bold text-gradient-lime">{step.number}</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-lg p-8"
      >
        <h3 className="text-2xl font-semibold text-foreground mb-6">Transformative Advantages</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{app.name}</h4>
                <p className="text-sm text-muted-foreground">{app.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
