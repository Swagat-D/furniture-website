import StoryVision from "@/components/story-vision"
import Team from "@/components/team"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Discover the journey of Archik Constructions - from humble beginnings to becoming a trusted name in construction and design.
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

      {/* Story Content */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <StoryVision />
      </section>

      {/* Team Section */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The talented professionals behind every successful project at Archik Constructions.
            </p>
          </div>
          <Team />
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Our Story - Archik Constructions",
  description: "Learn about Archik Constructions' journey, mission, vision, and the dedicated team behind our success."
}