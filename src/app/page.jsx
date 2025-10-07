import { Hero } from "@/components/hero"
import StoryVision from "@/components/story-vision"
import Timeline from "@/components/timeline"
import Products from "@/components/products"
import ServicesScroller from "@/components/services-scroller"
import QuickCalculator from "@/components/quick-calculator"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="story" className="container mx-auto px-4 py-12 md:py-16 animate-fade-in">
        <StoryVision />
      </section>

      <section id="timeline" className="container mx-auto px-4 py-12 md:py-16 animate-fade-in-up">
        <div className="mb-6 md:mb-10 text-center">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">Our Journey</h2>
          <p className="text-muted-foreground mt-2 mx-auto max-w-prose">Where we started and how we're growing.</p>
        </div>
        <Timeline />
      </section>

      <section id="products" className="container mx-auto px-4 py-12 md:py-16 animate-fade-in">
        <div className="mb-6 md:mb-10 text-center">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">USP Products</h2>
          <p className="text-muted-foreground mt-2 mx-auto max-w-prose">Signature pieces crafted for everyday living.</p>
        </div>
        <Products />
      </section>

      <section id="services" className="border-y animate-fade-in-up">
        <div className="container mx-auto px-4">
          <ServicesScroller />
        </div>
      </section>

      <section id="quick-estimate" className="container mx-auto px-4 py-12 md:py-16 animate-fade-in">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">Interior Price Calculator</h2>
          <p className="text-muted-foreground mt-2 mx-auto max-w-prose">
            Get a quick estimate now or head to the full calculator.
          </p>
        </div>
        <QuickCalculator />
      </section>

      <section id="contact" className="container mx-auto px-4 py-12 md:py-16 animate-fade-in-up">
        <ContactSection />
      </section>
    </>
  )
}