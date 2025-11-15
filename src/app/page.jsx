import { Hero } from "@/components/hero"
import StoryVision from "@/components/story-vision"
import Team from "@/components/team"
import Timeline from "@/components/timeline"
import Products from "@/components/products"
import StatsSection from "@/components/stats-section"
import ServicesGrid from "@/components/services-grid"
import QuickCalculator from "@/components/quick-calculator"
import ContactSection from "@/components/contact-section"
import { CtaBanner } from "@/components/cta-banner"
import { WhyChooseUs } from "@/components/why-choose-us"
import ChatPopup from "@/components/chat-popup"
import FloatingActionButtons from "@/components/floating-action-buttons"

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="story" className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
        <StoryVision />
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
      </section>

      <section id="products" className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">USP Products</h2>
          <p className="text-muted-foreground mt-2 mx-auto max-w-prose">Signature pieces crafted for everyday living.</p>
        </div>
        <Products />
      </section>

      <section id="stats" className="bg-slate-50 border-y py-8 md:py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          <StatsSection />
        </div>
      </section>

      <section id="services" className="animate-fade-in-up">
        <ServicesGrid />
      </section>

      <section id="quick-estimate" className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">Project Cost Calculator</h2>
          <p className="text-muted-foreground mt-2 mx-auto max-w-prose">
            Answer a few questions to get an accurate estimate for your construction project in just 2 minutes.
          </p>
        </div>
        <QuickCalculator />
      </section>

      <section id="contact" className="container mx-auto px-4 py-8 md:py-12 animate-fade-in-up">
        <ContactSection />
      </section>

      <CtaBanner />
      <WhyChooseUs />
      <ChatPopup />
      <FloatingActionButtons />
    </>
  )
}