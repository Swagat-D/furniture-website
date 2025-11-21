import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Pre-Construction Services | Archik Construction',
  description: 'Comprehensive pre-construction services including site planning, feasibility studies, and estimation & budgeting from Archik Construction.',
}

export default function PreConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pre-Construction <span className="text-amber-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Comprehensive planning and preparation services to ensure your project starts on solid ground
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Pre-Construction Services</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We provide comprehensive pre-construction services to ensure your project is thoroughly planned and prepared before breaking ground.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Site & Planning Support */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-amber-600">Site & Planning Support</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Feasibility Studies</h4>
                    <p className="text-slate-600 text-sm">Comprehensive analysis of project viability and potential challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Site Surveying & Soil Testing</h4>
                    <p className="text-slate-600 text-sm">Detailed site analysis and soil composition evaluation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Land Development Advisory</h4>
                    <p className="text-slate-600 text-sm">Expert guidance on optimal land development strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Legal & Regulatory Assistance</h4>
                    <p className="text-slate-600 text-sm">Navigation through legal requirements and regulatory compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Environmental Impact Assessment</h4>
                    <p className="text-slate-600 text-sm">For large/commercial projects ensuring environmental compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Zoning & Land Use Consultation</h4>
                    <p className="text-slate-600 text-sm">Especially for urban projects requiring zoning compliance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimation & Budgeting */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Estimation & Budgeting</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Cost Estimation & BOQ (Bill of Quantities)</h4>
                    <p className="text-slate-600 text-sm">Detailed cost breakdown and material quantification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Budget Forecasting & Cash Flow Planning</h4>
                    <p className="text-slate-600 text-sm">Long-term project tracking and financial planning</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                <h4 className="font-bold text-slate-800 mb-3">Why Choose Our Pre-Construction Services?</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-500">✓</span>
                    <span>Comprehensive risk assessment and mitigation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-500">✓</span>
                    <span>Accurate project timeline and cost estimation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-500">✓</span>
                    <span>Regulatory compliance and permit assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-500">✓</span>
                    <span>Professional expertise in site analysis</span>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Let our expert team handle all your pre-construction planning needs. Contact us today for a comprehensive consultation.
            </p>
            <div className="space-x-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                  Get Free Consultation
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