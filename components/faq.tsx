"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Coreact's quantum dots unique?",
    answer:
      "Our quantum dots feature precise size control, exceptional color purity, and highly tunable emission wavelengths from 400nm to 4000nm. Combined with our proprietary synthesis methods, we deliver superior performance and stability compared to conventional materials.",
  },
  {
    question: "Which industries benefit from quantum dot technology?",
    answer:
      "Quantum dots transform displays (QD-OLED, QD-LED), advanced imaging, solar cells, biomedical diagnostics, automotive systems, and machine vision applications. Our materials enable breakthrough capabilities in color reproduction, efficiency, and spectral range.",
  },
  {
    question: "How do I source quantum dots for my application?",
    answer:
      "We offer both standard quantum dot products and custom synthesis solutions. Contact our sales team to discuss your specific requirements, volume needs, and integration timeline. We provide technical support throughout deployment.",
  },
  {
    question: "What synthesis methods does Coreact use?",
    answer:
      "We employ chemical, physical, and biological synthesis methods to produce diverse quantum dot compositions including CdSe, InP, and our proprietary QDS Perovskite® ABX3 materials. Each method is optimized for specific application requirements.",
  },
  {
    question: "Are Coreact quantum dots biocompatible?",
    answer:
      "Yes! Our InP-based and certain Ag/InZnS quantum dots are non-toxic and biocompatible, making them ideal for medical imaging and diagnostic applications. We provide full characterization data and safety documentation.",
  },
]

export function FAQ() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-display mb-4">
            Frequently asked <span className="text-gradient-lime">questions</span>
          </h2>
          <p className="text-muted-foreground">Everything you need to know about Coreact quantum dots</p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
