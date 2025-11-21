import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhyArchikPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ⭐ Why Archik Construction is the Ultimate Choice
          </h1>
          <p className="text-xl text-slate-200 max-w-4xl mx-auto">
            For Modern Construction, Luxury Interiors & Premium Turnkey Projects
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

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="text-xl text-slate-700 leading-relaxed">
              In today's fast-evolving world of architecture, construction, and interior transformation, clients demand more than just buildings — they expect quality, innovation, timely execution, and spaces that resonate with their personality and purpose. Archik Construction was built on this philosophy. We don't just construct; we conceptualize, design, engineer, refine, and deliver complete lifestyle experiences.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-lg text-slate-700 mb-6">
              From homes that feel warm and inspiring, to commercial spaces that boost productivity and brand presence, Archik Construction stands as a trusted partner for anyone seeking high-value, detail-oriented, long-lasting construction and interior solutions. Our approach integrates technology, craftsmanship, precision, and an unwavering client-first mindset.
            </p>
          </div>

          {/* Section 1 */}
          <div className="bg-slate-50 p-8 rounded-lg mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">1. Engineering with Precision: Our Commitment to On-Time Delivery</h2>
            
            <p className="text-lg text-slate-700 mb-4">
              Time is one of the most valuable resources in construction — and the primary fear of most clients is project delay. At Archik Construction, we have mastered the art of timeline management through advanced planning systems, efficient execution, and real-time tracking.
            </p>

            <p className="text-lg text-slate-700 mb-6">
              Unlike typical contractors who simply "begin and adjust later," our workflow follows a highly structured process:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                <h4 className="font-semibold text-slate-800">📋 Detailed planning before execution</h4>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <h4 className="font-semibold text-slate-800">📊 Weekly milestone charts</h4>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h4 className="font-semibold text-slate-800">🔧 Expert coordination between teams</h4>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h4 className="font-semibold text-slate-800">📈 Real-time reporting systems</h4>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h4 className="font-semibold text-slate-800">👷 Backup labor resources</h4>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h4 className="font-semibold text-slate-800">💬 Clear client communication</h4>
              </div>
            </div>

            <p className="text-lg text-slate-700">
              This ensures that from the first blueprint to the last polishing touch, every task aligns with the planned timeline. We understand that a home or commercial space is not just a project — it's an emotional and financial investment. That's why delivering on time is not just a promise for us; it is our identity.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-blue-50 p-8 rounded-lg mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">2. Recognized by Government, Corporate, and Premium Private Clients</h2>
            
            <p className="text-lg text-slate-700 mb-4">
              One of the strongest indicators of reliability is who trusts your work. Archik Construction has consistently delivered high-quality projects for a range of sectors, including:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                  </svg>
                </div>
                <h4 className="font-semibold">Government Institutions</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                  </svg>
                </div>
                <h4 className="font-semibold">Corporate Offices</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="font-semibold">Premium Homes</h4>
              </div>
            </div>

            <p className="text-lg text-slate-700">
              This recognition is not accidental — it is earned through consistent compliance with regulations, use of certified materials, transparent operations, strong documentation practices, and delivering exactly what we promise.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-green-50 p-8 rounded-lg mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">3. End-to-End Turnkey Execution: Everything Under One Roof</h2>
            
            <p className="text-lg text-slate-700 mb-6">
              Today's clients prefer convenience, cost control, and single-point accountability. Managing 10 different vendors for civil work, interiors, furniture, décor, automation, and landscaping often leads to project delays, design mismatches, quality inconsistency, budget overruns, and stress.
            </p>

            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Archik Construction eliminates all of this through our integrated approach:</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
                  <span>We design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
                  <span>We plan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
                  <span>We source materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
                  <span>We construct</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
                  <span>We execute interiors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
                  <span>We build furniture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
                  <span>We style the décor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
                  <span>We install automation</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-700">
              Clients simply share their vision — and we deliver a fully finished, high-quality, ready-to-use space. This makes Archik Construction not just a construction company, but a complete lifestyle and space transformation partner.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-amber-50 p-8 rounded-lg mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">4. Superior Materials, World-Class Craftsmanship & Long-Term Durability</h2>
            
            <p className="text-lg text-slate-700 mb-6">
              Every building and interior crafted by Archik Construction stands as a symbol of quality, strength, and elegance. We believe that premium outcomes require premium inputs — which is why we never compromise on materials or craftsmanship.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Our Materials Promise:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Certified structural materials</li>
                  <li>• High-grade cement and steel</li>
                  <li>• Moisture-resistant and termite-proof wood</li>
                  <li>• Premium laminates, veneers, marbles, and tiles</li>
                  <li>• International-standard electrical fittings</li>
                  <li>• Weather-resistant paints and coatings</li>
                  <li>• Fire-rated materials for safety</li>
                  <li>• Sustainable, eco-friendly options</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Our Craftsmanship Standards:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Skilled civil engineers</li>
                  <li>• Experienced architects</li>
                  <li>• Master carpenters and fabricators</li>
                  <li>• Expert painters and finishing professionals</li>
                  <li>• Dedicated modular furniture teams</li>
                  <li>• Skilled interior designers and decorators</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-slate-700">
              Every detail is executed with obsessive precision — from tile alignment and wood polish to lighting layout and space optimization. Clients consistently say that our finishing quality is one of the biggest reasons they choose us again for additional work.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-purple-50 p-8 rounded-lg mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">5. Client-First Approach: Transparent Communication & Dedicated Support</h2>
            
            <p className="text-lg text-slate-700 mb-6">
              Construction can feel overwhelming. Clients often worry about what's happening on-site, whether materials are being used properly, if the design is being executed correctly, and what if problems arise later.
            </p>

            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">This is why Archik Construction follows a complete transparency model:</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded">
                  <h4 className="font-semibold text-slate-800">📅 Weekly progress updates</h4>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <h4 className="font-semibold text-slate-800">📸 Photo and video documentation</h4>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <h4 className="font-semibold text-slate-800">💰 Transparent billing</h4>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <h4 className="font-semibold text-slate-800">📊 Material usage reports</h4>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <h4 className="font-semibold text-slate-800">⚡ Timely response to queries</h4>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <h4 className="font-semibold text-slate-800">🔍 Continuous site monitoring</h4>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-700">
              Our communication is not limited to meetings — it is a continuous partnership. Client concerns are always addressed immediately. No hidden charges, no vague explanations, no surprises.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-indigo-50 p-8 rounded-lg mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">6. Decades of Expertise & A Team That Delivers</h2>
            
            <p className="text-lg text-slate-700 mb-6">
              The backbone of Archik Construction is its highly experienced team. We are proud of our multidisciplinary expertise that ensures every project is not only aesthetically beautiful but structurally sound, functionally perfect, and built for long-term use.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm">Innovation</h4>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm">Quality</h4>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm">Timeliness</h4>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm">Excellence</h4>
              </div>
            </div>

            <p className="text-lg text-slate-700">
              Our experience allows us to solve complex construction challenges, design better, optimize budgets, avoid common industry mistakes, execute faster, ensure premium finishing, and deliver long-lasting results.
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8 rounded-lg mb-10">
            <h2 className="text-3xl font-bold mb-6">⭐ What Truly Sets Archik Construction Apart?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-amber-500 text-white rounded w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold">Innovation in Every Step</h4>
                    <p className="text-slate-200 text-sm">We blend modern design thinking with engineering intelligence.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-amber-500 text-white rounded w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold">Ultra-Premium Detailing</h4>
                    <p className="text-slate-200 text-sm">Every inch of space is treated with care and precision.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-amber-500 text-white rounded w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold">Sustainability & Safety</h4>
                    <p className="text-slate-200 text-sm">We follow eco-friendly practices and international safety standards.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-amber-500 text-white rounded w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold">Value Optimization</h4>
                    <p className="text-slate-200 text-sm">We maximize quality without unnecessary cost inflation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-amber-500 text-white rounded w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold">Design + Build Model</h4>
                    <p className="text-slate-200 text-sm">One team handles both design and execution — ensuring 100% accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-amber-500 text-white rounded w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold">Life-Long Relationship</h4>
                    <p className="text-slate-200 text-sm">Many clients return to us repeatedly, trusting us like family.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-amber-50 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">⭐ Conclusion: A Partner You Can Trust with Your Vision</h2>
            
            <p className="text-lg text-slate-700 mb-6">
              Archik Construction is more than a service provider — we are creators of lasting spaces. Whether it's a luxurious home, a modern office, a commercial establishment, or a government-approved project, we bring dedication, precision, creativity, and passion to every square foot we build.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800">✔ Excellence</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800">✔ Durability</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800">✔ Premium Finishing</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800">✔ Professionalism</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800">✔ Trust</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800">✔ Long-term Value</h4>
              </div>
            </div>

            <div className="text-xl font-semibold text-slate-800 mb-6">
              <p>Your space deserves the best.</p>
              <p>Your vision deserves expertise.</p>
              <p>Your investment deserves reliability.</p>
            </div>

            <Link href="/#contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg">
                Start Your Project Today
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Why Choose Archik Construction - The Ultimate Choice for Modern Construction",
  description: "Discover why Archik Construction is the ultimate choice for modern construction, luxury interiors, and premium turnkey projects."
}