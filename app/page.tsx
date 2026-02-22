import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutCoreact } from "@/components/about-coreact"
import { WhatAreQuantumDots } from "@/components/what-are-quantum-dots"
import { WhoWeAre } from "@/components/who-we-are"
import { MessagesSectionTitle } from "@/components/messages-section-title"
import { MessageFromDirector } from "@/components/message-from-director"
import { MessageFromCEO } from "@/components/message-from-ceo"
import { MissionVision } from "@/components/mission-vision"
import { OurTechnology } from "@/components/our-technology"
import { OurTeam } from "@/components/our-team"
import { QuantumDotTechnology } from "@/components/quantum-dot-technology"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative z-0 min-h-screen bg-background overflow-x-hidden">
      <div
        className="absolute top-0 right-0 w-[1500px] h-[1500px] -z-10 bg-primary pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse 50% 50% at 100% 0%, rgb(0 0 0 / 0.75), transparent)",
        }}
      >
        <div className="absolute inset-0 bg-cover bg-right-top" style={{ backgroundImage: "url('/grade.png')" }} />
      </div>

      <Navbar />

      <Hero />
      <AboutCoreact />
      <WhatAreQuantumDots />
      <WhoWeAre />
      <MessagesSectionTitle />
      <MessageFromDirector />
      <MessageFromCEO />
      <MissionVision />
      <OurTechnology />
      <OurTeam />
      <QuantumDotTechnology />
      <ContactSection />
      <Footer />
    </main>
  )
}
