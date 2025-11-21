import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Health, Safety & Compliance | Archik Construction',
  description: 'Comprehensive health, safety, and compliance services including site safety audits and environmental compliance.',
}

export default function HealthSafetyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <section className="relative py-20 bg-gradient-to-r from-red-900 via-red-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Health, Safety & <span className="text-red-400">Compliance</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Ensuring the highest standards of safety, health, and regulatory compliance in construction
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                Prioritize Safety
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6">🦺 Site Safety</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Site Safety Audits & Reports</h4>
                    <p className="text-slate-600 text-sm">Comprehensive safety assessments and documentation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Labour & Equipment Safety Compliance</h4>
                    <p className="text-slate-600 text-sm">Ensuring all personnel and equipment meet safety standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">PPE (Safety Belts, Helmet, Gloves, Boots) Enforcement</h4>
                    <p className="text-slate-600 text-sm">Personal protective equipment compliance and training</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6">🌍 Environmental & Legal</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Waste Disposal Management</h4>
                    <p className="text-slate-600 text-sm">Responsible waste management and environmental protection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Fire & Building Code Compliance</h4>
                    <p className="text-slate-600 text-sm">Full compliance with fire safety and building regulations</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-bold text-slate-800 mb-3">🚨 Safety First Approach</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✓</span>
                    <span>Zero-accident policy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✓</span>
                    <span>Regular safety training</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✓</span>
                    <span>Emergency response protocols</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✓</span>
                    <span>Compliance documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}