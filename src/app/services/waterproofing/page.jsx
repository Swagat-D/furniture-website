import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Waterproofing & Structural Repairs | Archik Construction',
  description: 'Professional waterproofing and structural repair services including surface waterproofing, structural maintenance, and wet area solutions.',
}

export default function WaterproofingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Waterproofing & <span className="text-amber-400">Structural Repairs</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Comprehensive waterproofing solutions and structural repair services to protect your investment
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Get Waterproofing Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Complete Waterproofing Solutions</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Expert waterproofing and structural repair services to ensure long-lasting protection for your property.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Surface Waterproofing */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🏠 Surface Waterproofing</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Roof Waterproofing & Grading</h4>
                    <p className="text-slate-600 text-sm">Complete roof protection with proper water drainage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">APP Membrane Application</h4>
                    <p className="text-slate-600 text-sm">Advanced polymer membrane waterproofing systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Exterior Wall Waterproofing</h4>
                    <p className="text-slate-600 text-sm">Weather-resistant external wall protection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Structural Maintenance */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🔧 Structural Maintenance</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Epoxy Routing for Strengthening</h4>
                    <p className="text-slate-600 text-sm">Structural strengthening with epoxy injection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Crack Repair & Concrete Jacketing</h4>
                    <p className="text-slate-600 text-sm">Professional crack repair and concrete strengthening</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Basement Waterproofing</h4>
                    <p className="text-slate-600 text-sm">Complete basement moisture protection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wet Area Solutions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">💧 Wet Area Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Toilet Waterproofing</h4>
                    <p className="text-slate-600 text-sm">Specialized bathroom waterproofing systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Kitchen & Balcony Waterproofing</h4>
                    <p className="text-slate-600 text-sm">Moisture protection for high-use areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Sunken Slab Protection</h4>
                    <p className="text-slate-600 text-sm">Specialized waterproofing for sunken areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Our Waterproofing Services?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Long-lasting Protection</h3>
              <p className="text-slate-600">Durable waterproofing solutions with extended warranties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Advanced Materials</h3>
              <p className="text-slate-600">Premium waterproofing membranes and sealants</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👷</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Expert Team</h3>
              <p className="text-slate-600">Certified waterproofing specialists</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Quality Assurance</h3>
              <p className="text-slate-600">Comprehensive testing and quality checks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Protect Your Property Today
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Don't let water damage compromise your investment. Get professional waterproofing solutions from our expert team.
            </p>
            <div className="space-x-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                  Get Free Assessment
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}