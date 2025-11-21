import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'MEP Services - Mechanical, Electrical & Plumbing | Archik Construction',
  description: 'Complete MEP services including electrical works, mechanical systems, and plumbing solutions from Archik Construction.',
}

export default function MEPPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MEP <span className="text-amber-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-2">
              Mechanical, Electrical & Plumbing
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Complete building systems integration for modern, efficient, and sustainable construction
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Get MEP Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Complete MEP Solutions</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Comprehensive mechanical, electrical, and plumbing services for residential, commercial, and industrial projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Electrical Works */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">⚡ Electrical Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Wiring, Lighting & Panels</h4>
                    <p className="text-slate-600 text-sm">Complete electrical installation and panel setup</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Generator/Inverter Setup</h4>
                    <p className="text-slate-600 text-sm">Backup power solutions and UPS systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Smart Lighting & Home Automation</h4>
                    <p className="text-slate-600 text-sm">Intelligent lighting and automated systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">LT/HT Panel Installation</h4>
                    <p className="text-slate-600 text-sm">Low and high tension electrical panels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Earthing & Lightning Arrestor Systems</h4>
                    <p className="text-slate-600 text-sm">Safety grounding and lightning protection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Transformer Installation</h4>
                    <p className="text-slate-600 text-sm">Power distribution and transformer setup</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">HVAC Systems</h4>
                    <p className="text-slate-600 text-sm">Heating, ventilation, and air conditioning</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mechanical Works */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">⚙️ Mechanical Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Fabricated Structures & Structural Steel</h4>
                    <p className="text-slate-600 text-sm">Pillars, steel, PEB, MS frames installation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Elevators & Escalators</h4>
                    <p className="text-slate-600 text-sm">Vertical transportation systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Firefighting Systems</h4>
                    <p className="text-slate-600 text-sm">Hydrants, sprinklers, and fire pumps</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Ducting & Ventilation</h4>
                    <p className="text-slate-600 text-sm">Air circulation and ventilation systems</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                <h4 className="font-bold text-slate-800 mb-3">🔧 Why Our MEP Services?</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-500">✓</span>
                    <span>Integrated system design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-500">✓</span>
                    <span>Energy efficient solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-500">✓</span>
                    <span>Code compliance assurance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-500">✓</span>
                    <span>24/7 maintenance support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plumbing Works */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🚿 Plumbing Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Water Supply & Drainage Systems</h4>
                    <p className="text-slate-600 text-sm">Complete water supply and sewage systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Sanitary Fittings</h4>
                    <p className="text-slate-600 text-sm">Premium bathroom and kitchen fittings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">STP/ETP Installation</h4>
                    <p className="text-slate-600 text-sm">Sewage and Effluent Treatment Plants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Rainwater Harvesting & Stormwater Drainage</h4>
                    <p className="text-slate-600 text-sm">Sustainable water management networks</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-bold text-slate-800 mb-3">💧 Advanced Features</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Smart water management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Leak detection systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Water quality monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Pressure optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Complete MEP Solutions?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Our certified MEP engineers provide integrated solutions that ensure safety, efficiency, and compliance for your project.
            </p>
            <div className="space-x-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                  Get MEP Quote
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