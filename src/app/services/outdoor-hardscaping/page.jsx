import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Outdoor & Hardscaping Works | Archik Construction',
  description: 'Professional outdoor construction and hardscaping services including paving, pathways, and landscaping.',
}

export default function OutdoorHardscapingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Outdoor & <span className="text-amber-400">Hardscaping Works</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Transform your outdoor spaces with professional hardscaping and landscaping solutions
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Transform Your Outdoors
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🛤️ Paving & Pathways</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Paver Block Road</h4>
                    <p className="text-slate-600 text-sm">Durable interlocking paver installations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Interlocking Tiles</h4>
                    <p className="text-slate-600 text-sm">Decorative and functional tile patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Concrete Roads</h4>
                    <p className="text-slate-600 text-sm">Heavy-duty concrete pathway construction</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🏡 External Additions</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Compound Walls & Entry Gates</h4>
                    <p className="text-slate-600 text-sm">Secure and attractive boundary structures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Pergolas & Outdoor Seating</h4>
                    <p className="text-slate-600 text-sm">Beautiful outdoor living structures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Green Landscaping & Pathways</h4>
                    <p className="text-slate-600 text-sm">Professional landscape design and installation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Outdoor Lighting & Street Fixtures</h4>
                    <p className="text-slate-600 text-sm">Complete outdoor illumination solutions</p>
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