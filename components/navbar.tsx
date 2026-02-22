"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#leadership-messages", label: "Leadership" },
  { href: "#mission-vision", label: "Mission & Vision" },
  { href: "#technology", label: "Technology" },
  { href: "#team", label: "Team" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-2 sm:px-4 lg:px-8 py-4" aria-label="Main navigation">
        <div className="flex h-14 items-center bg-background/60 backdrop-blur-xl border border-border/50 rounded-full px-4 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Coreact home">
            <Image
              src="/logo.png"
              alt=""
              width={120}
              height={36}
              className="h-8 w-auto sm:h-9"
              priority
            />
            <span
              className="font-[family-name:var(--font-pt-mono)] font-bold text-base sm:text-lg text-foreground"
              style={{ letterSpacing: "-0.05em" }}
            >
              Coreact
            </span>
          </Link>

          {/* Desktop Navigation - centered */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
            {sectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA button (desktop) + Mobile Menu Button - right on mobile */}
          <div className="ml-auto lg:ml-0 flex shrink-0 items-center gap-2">
            <Button
              asChild
              size="default"
              rounded="full"
              className="hidden lg:inline-flex"
            >
              <Link href="#contact" className="gap-2">
                Contact us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <button
            type="button"
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
          </div>
        </div>

        {/* Mobile Menu - visible below lg */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-0 left-0 w-dvw h-dvh bg-background z-40 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-background border-b border-border/50">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt=""
                    width={100}
                    height={30}
                    className="h-8 w-auto"
                  />
                  <span
                    className="font-[family-name:var(--font-pt-mono)] font-bold text-base text-foreground"
                    style={{ letterSpacing: "-0.05em" }}
                  >
                    Coreact
                  </span>
                </Link>
                <button
                  type="button"
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pt-4 pb-4">
                {sectionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild size="default" rounded="full" className="w-full">
                    <Link href="#contact" className="gap-2" onClick={() => setMobileMenuOpen(false)}>
                      Contact us
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
