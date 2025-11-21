import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Civil Construction Services | Archik Construction',
  description: 'Complete civil construction services including core construction, site development, and renovation from Archik Construction.',
}

export default function CivilConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Civil <span className="text-amber-400">Construction</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Core construction, site development, and renovation services
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Start Construction Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🏗️ Core Construction</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Civil Work (Brick, RCC, Plastering)</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Fabricated Structures & Structural Steel</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Renovation, Retrofitting & Remodeling</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Foundation & Substructure Work</h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🚧 Site Development</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Earthwork & Land Levelling</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Internal Road Construction & Paving</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Boundary Walls & Security Cabins</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Drainage & Stormwater Systems</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build?</h2>
          <p className="text-slate-300 mb-8">Expert civil construction services for all your building needs.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
              Get Construction Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}