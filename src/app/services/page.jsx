import ServicesGrid from "@/components/services-grid"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Comprehensive construction and design services tailored to meet your unique requirements and exceed your expectations.
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

      {/* Services Content */}
      <section>
        <ServicesGrid />
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Let's discuss your vision and create something extraordinary together. Contact us today for a free consultation.
        </p>
        <Link href="/#contact">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3">
            Get Free Consultation
          </Button>
        </Link>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Services - Archik Constructions",
  description: "Comprehensive construction, design, and interior services for residential, commercial, and industrial projects."
}