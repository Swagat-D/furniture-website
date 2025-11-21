import { Hero } from "@/components/hero"
import StoryVision from "@/components/story-vision"
import Team from "@/components/team"
import Timeline from "@/components/timeline"
import StatsSection from "@/components/stats-section"
import ServicesScroller from "@/components/services-scroller"

import ArchikHomes from "@/components/archik-homes"
import QuickCalculator from "@/components/quick-calculator"
import ContactSection from "@/components/contact-section"
import { CtaBanner } from "@/components/cta-banner"
import { WhyChooseUs } from "@/components/why-choose-us"
import ChatPopup from "@/components/chat-popup"
import FloatingActionButtons from "@/components/floating-action-buttons"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="story" className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
        <StoryVision />
        <div className="text-center mt-8">
          <Link href="/our-story">
            <Button variant="outline" className="px-8 py-3">
              Learn More About Our Story →
            </Button>
          </Link>
        </div>
      </section>

      <section id="team" className="container mx-auto px-4 py-8 md:py-12 animate-fade-in-up">
        <Team />
      </section>

      <section id="timeline" className="container mx-auto px-4 py-8 md:py-12 animate-fade-in-up">
        <div className="mb-6 md:mb-10 text-center">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">Our Journey</h2>
          <p className="text-muted-foreground mt-2 mx-auto max-w-prose">Where we started and how we're growing.</p>
        </div>
        <Timeline />
        <div className="text-center mt-8">
          <Link href="/timeline">
            <Button variant="outline" className="px-8 py-3">
              View Complete Timeline →
            </Button>
          </Link>
        </div>
      </section>



      <section id="stats" className="bg-slate-50 border-y py-8 md:py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          <StatsSection />
        </div>
      </section>

      <ServicesScroller />



      <section id="quick-estimate" className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">Project Cost Calculator</h2>
          <p className="text-muted-foreground mt-2 mx-auto max-w-prose">
            Answer a few questions to get an accurate estimate for your construction project in just 2 minutes.
          </p>
        </div>
        <QuickCalculator />
      </section>

      <ArchikHomes />

      <section id="contact" className="container mx-auto px-4 py-8 md:py-12 animate-fade-in-up">
        <ContactSection />
        <div className="text-center mt-8">
          <Link href="/contact">
            <Button variant="outline" className="px-8 py-3">
              More Contact Options →
            </Button>
          </Link>
        </div>
      </section>

      <CtaBanner />
      <WhyChooseUs />
      
      {/* Why Archik Construction Button */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            ⭐ Discover Why Archik Construction is the Ultimate Choice
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-6">
            For Modern Construction, Luxury Interiors & Premium Turnkey Projects. 
            Learn about our commitment to excellence, quality, and client satisfaction in this comprehensive guide.
          </p>
          <Link href="/why-archik">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Read Full Article →
            </Button>
          </Link>
        </div>
      </section>
      
      <ChatPopup />
      <FloatingActionButtons />
    </>
  )
}