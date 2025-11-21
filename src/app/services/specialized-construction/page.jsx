import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Specialized Construction Services | Archik Construction',
  description: 'Specialized construction services including industrial, institutional, and commercial fit-outs from Archik Construction.',
}

export default function SpecializedConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Specialized <span className="text-amber-400">Construction Services</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Expert construction solutions for industrial, institutional, and commercial projects
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🏭 Industrial Construction</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Factory & Warehouse Construction</h4>
                    <p className="text-slate-600 text-sm">Large-scale industrial facility construction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">PEB (Pre-Engineered Building) Solutions</h4>
                    <p className="text-slate-600 text-sm">Efficient pre-engineered building systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Cold Storage & Utility Sheds</h4>
                    <p className="text-slate-600 text-sm">Specialized storage and utility buildings</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🏛️ Institutional Construction</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Hospital & Healthcare Facility Construction</h4>
                    <p className="text-slate-600 text-sm">Specialized healthcare infrastructure development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Educational Campuses & Hostels</h4>
                    <p className="text-slate-600 text-sm">Complete educational facility construction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Government/NGO Infrastructure</h4>
                    <p className="text-slate-600 text-sm">Public sector and NGO facility development</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🏢 Commercial Fit-Outs</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Retail & Showroom Design-Build</h4>
                    <p className="text-slate-600 text-sm">Complete retail space construction and fit-out</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Office Interiors & Smart Workspace Planning</h4>
                    <p className="text-slate-600 text-sm">Modern office design and smart workspace solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Café, Salon & Boutique Setups</h4>
                    <p className="text-slate-600 text-sm">Specialized commercial establishment fit-outs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}