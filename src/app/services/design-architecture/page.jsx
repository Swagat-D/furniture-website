import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Design & Architecture Services | Archik Construction',
  description: 'Professional architectural design, structural engineering, and interior architecture services from Archik Construction.',
}

export default function DesignArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Design & <span className="text-amber-400">Architecture</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Innovative architectural solutions combining creativity, functionality, and structural excellence
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Start Your Design Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Comprehensive Design Services</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              From conceptual design to detailed engineering, we provide end-to-end architectural and design solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Architectural Design */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">Architectural Design</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Conceptual & Detailed Design</h4>
                    <p className="text-slate-600 text-sm">From initial concepts to detailed construction drawings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Space Planning & Utilization</h4>
                    <p className="text-slate-600 text-sm">Optimal space utilization and functional layouts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">3D Rendering & Walkthroughs</h4>
                    <p className="text-slate-600 text-sm">Photorealistic visualizations and virtual tours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Sustainable Architecture & Green Design</h4>
                    <p className="text-slate-600 text-sm">Eco-friendly and energy-efficient design solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Building Information Modeling (BIM)</h4>
                    <p className="text-slate-600 text-sm">Advanced 3D modeling and project coordination</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Façade & Elevation Design</h4>
                    <p className="text-slate-600 text-sm">Stunning exterior designs and building aesthetics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Landscape Architecture</h4>
                    <p className="text-slate-600 text-sm">Integrated landscape and outdoor space design</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Structural Engineering */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">Structural Engineering & RCC Design</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Structural Engineering & Design</h4>
                    <p className="text-slate-600 text-sm">Complete structural analysis and design solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Structural Load Analysis</h4>
                    <p className="text-slate-600 text-sm">Comprehensive load calculations and safety analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">RCC Design (Slabs, Columns, Beams, Foundations)</h4>
                    <p className="text-slate-600 text-sm">Reinforced concrete design for all structural elements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Steel Structure Design</h4>
                    <p className="text-slate-600 text-sm">Modern steel framework and structural solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Seismic & Wind Load Compliance</h4>
                    <p className="text-slate-600 text-sm">Building code compliance for natural forces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Structural Retrofitting</h4>
                    <p className="text-slate-600 text-sm">Strengthening and upgrading existing structures</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interior Architecture */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">Interior Architecture & Space Planning</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Interior Design Consultation</h4>
                    <p className="text-slate-600 text-sm">Expert guidance on interior aesthetics and functionality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Theme-Based Interior Concepts</h4>
                    <p className="text-slate-600 text-sm">Customized design themes matching your style</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Lighting Design & Automation</h4>
                    <p className="text-slate-600 text-sm">Smart lighting integration and automated systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Material & Finish Selection</h4>
                    <p className="text-slate-600 text-sm">Premium materials and finishes selection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Space Optimization & Partition Planning</h4>
                    <p className="text-slate-600 text-sm">Maximizing space efficiency and flow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Design Process</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              A systematic approach ensuring every design meets your vision and requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Consultation</h3>
              <p className="text-slate-600">Understanding your vision, requirements, and constraints</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Conceptual Design</h3>
              <p className="text-slate-600">Creating initial concepts and design alternatives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Detailed Design</h3>
              <p className="text-slate-600">Developing comprehensive drawings and specifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Implementation</h3>
              <p className="text-slate-600">Supporting construction with technical guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Vision Into Reality
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Our expert design team is ready to bring your architectural dreams to life with innovative and practical solutions.
            </p>
            <div className="space-x-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                  Start Your Project
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