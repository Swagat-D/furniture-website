import Products from "@/components/products"
import StatsSection from "@/components/stats-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Explore our comprehensive range of construction and interior solutions designed for modern living and working spaces.
          </p>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="outline" className="mb-6">
            ← Back to Home
          </Button>
        </Link>
      </div>

      {/* Products Content */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">USP Products</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Signature pieces crafted for everyday living, combining functionality with aesthetic appeal.
          </p>
        </div>
        <Products />
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to quality and customer satisfaction.
            </p>
          </div>
          <StatsSection />
        </div>
      </section>

      {/* Product Categories Detail */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Residential</h4>
            <p className="text-slate-600">Custom homes, apartments, and residential complexes designed for comfort and style.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Industrial</h4>
            <p className="text-slate-600">Warehouses, factories, and industrial facilities built for efficiency and safety.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Office Furniture</h4>
            <p className="text-slate-600">Modern office solutions that enhance productivity and create inspiring workspaces.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Products - Archik Constructions",
  description: "Explore our comprehensive range of construction and interior products for residential, commercial, and industrial projects."
}