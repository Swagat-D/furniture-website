import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Post-Construction Services | Archik Construction',
  description: 'Comprehensive post-construction services including maintenance, facility management, and compliance inspections.',
}

export default function PostConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Post-Construction <span className="text-amber-400">Services</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Complete post-construction support including maintenance, inspections, and facility management
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Get Maintenance Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🔧 Maintenance & Facility Management</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">AMC (Annual Maintenance Contracts)</h4>
                    <p className="text-slate-600 text-sm">Comprehensive annual maintenance packages</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Plumbing, HVAC & Electrical AMC</h4>
                    <p className="text-slate-600 text-sm">Specialized system maintenance contracts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Lift & Fire System AMC</h4>
                    <p className="text-slate-600 text-sm">Critical safety system maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🔍 Inspection & Compliance</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Annual Structural Safety Inspections</h4>
                    <p className="text-slate-600 text-sm">Comprehensive structural health assessments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Waterproofing Health Checks</h4>
                    <p className="text-slate-600 text-sm">Regular waterproofing system evaluations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Fire NOC & Building Code Compliance</h4>
                    <p className="text-slate-600 text-sm">Safety certification and compliance audits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Retrofitting & Structural Audits</h4>
                    <p className="text-slate-600 text-sm">Building upgrades and structural assessments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Green Building Certification (Optional)</h4>
                    <p className="text-slate-600 text-sm">Sustainable building certifications</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🛡️ Site Safety & Risk Control</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Site Safety Audits</h4>
                    <p className="text-slate-600 text-sm">Regular safety assessments and improvements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Safety Equipment Deployment</h4>
                    <p className="text-slate-600 text-sm">Installation and maintenance of safety systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Emergency Exit & Fire Drill Planning</h4>
                    <p className="text-slate-600 text-sm">Emergency preparedness and safety protocols</p>
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