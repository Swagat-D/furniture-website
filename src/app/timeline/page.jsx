import Timeline from "@/components/timeline"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TimelinePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Follow our growth from 2012 to 2025 and see the milestones that shaped Archik Constructions into the company it is today.
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

      {/* Timeline Content */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Milestones & Achievements</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Each milestone represents our commitment to excellence, innovation, and client satisfaction in the construction industry.
          </p>
        </div>
        <Timeline />
      </section>
    </div>
  )
}

export const metadata = {
  title: "Timeline - Archik Constructions",
  description: "Explore the journey and milestones of Archik Constructions from 2012 to 2025."
}