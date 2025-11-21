import ContactSection from "@/components/contact-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our team for expert consultation and personalized solutions.
          </p>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="outline" className="mb-6">
            ← Back to Home
          </Button>
        </Link>
      </div>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <ContactSection />
      </section>
    </div>
  )
}

export const metadata = {
  title: "Contact - Archik Constructions",
  description: "Get in touch with Archik Constructions for expert consultation and personalized construction solutions."
}