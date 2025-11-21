import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Interior Works & Furnishing | Archik Construction',
  description: 'Complete interior works including modular installations, furniture, and designer solutions.',
}

export default function InteriorWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Interior Works & <span className="text-amber-400">Furnishing</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Complete interior solutions from modular installations to custom furniture
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-amber-600 mb-4">🏗️ Modular Installations</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Modular Kitchens</li>
                <li>• TV Units & Wall Panels</li>
                <li>• Cupboards (Hinged & Sliding)</li>
                <li>• Walk-in Closets</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-amber-600 mb-4">🛋️ Furniture & Fixtures</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Sofa, Dining, Beds</li>
                <li>• Dressing Tables</li>
                <li>• Study Desks</li>
                <li>• Custom Storage Solutions</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-amber-600 mb-4">💡 False Ceiling & Lighting</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• PVC, Wooden & Gypsum Ceilings</li>
                <li>• Designer Lighting Setup</li>
                <li>• Cove & Recessed Lighting</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-amber-600 mb-4">🎨 Flooring & Finishing</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Tiles, Marble, Granite</li>
                <li>• Vinyl, Wooden & SPC Flooring</li>
                <li>• Painting & Texture Finishes</li>
                <li>• Industrial Flooring Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}