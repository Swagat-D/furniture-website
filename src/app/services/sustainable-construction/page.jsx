import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Sustainable & Green Construction | Archik Construction',
  description: 'Eco-friendly construction services including solar installations, rainwater harvesting, and energy optimization solutions.',
}

export default function SustainableConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 via-green-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sustainable & <span className="text-green-400">Green Construction</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Eco-friendly construction solutions for a sustainable future
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                Go Green Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Sustainable Construction Solutions</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Build responsibly with our comprehensive range of eco-friendly and energy-efficient construction services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Eco Installations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">🌱 Eco Installations</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Solar Panel Installation</h4>
                    <p className="text-slate-600 text-sm">Complete solar energy systems for homes and businesses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Rainwater Harvesting System</h4>
                    <p className="text-slate-600 text-sm">Sustainable water conservation and management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Wind Turbine Installation</h4>
                    <p className="text-slate-600 text-sm">Renewable wind energy solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Urban Greenery */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">🌿 Urban Greenery</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Terrace Gardens</h4>
                    <p className="text-slate-600 text-sm">Beautiful rooftop gardens and green spaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Drip Irrigation (Optional Add-on)</h4>
                    <p className="text-slate-600 text-sm">Efficient water irrigation systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Green Roof Systems</h4>
                    <p className="text-slate-600 text-sm">Living roof installations for insulation and beauty</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Swimming Pool</h4>
                    <p className="text-slate-600 text-sm">Eco-friendly pool systems with natural filtration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy Optimization */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">⚡ Energy Optimization</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Energy Efficiency Audits</h4>
                    <p className="text-slate-600 text-sm">Comprehensive energy consumption analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Passive Cooling & Natural Ventilation</h4>
                    <p className="text-slate-600 text-sm">Natural climate control design solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Smart Energy Monitoring Systems</h4>
                    <p className="text-slate-600 text-sm">Real-time energy usage tracking and optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Benefits of Green Construction</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Cost Savings</h3>
              <p className="text-slate-600">Reduced energy bills and operational costs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Environmental Impact</h3>
              <p className="text-slate-600">Reduced carbon footprint and environmental protection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏡</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Property Value</h3>
              <p className="text-slate-600">Increased property value and marketability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Health & Wellness</h3>
              <p className="text-slate-600">Better indoor air quality and living conditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Build a Sustainable Future
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Join the green construction movement and create environmentally responsible buildings that benefit both you and the planet.
            </p>
            <div className="space-x-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  Start Green Project
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}