import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Products from '@/components/products'

export const metadata = {
  title: 'Archik Homes - Furniture & Interiors | Archik Construction',
  description: 'Archik Homes is our specialized branch dedicated to furniture and interior manufacturing. Custom furniture solutions for residential, industrial, and office spaces.',
  keywords: 'archik homes, furniture manufacturing, interior design, custom furniture, modular kitchens, office furniture, residential furniture'
}

export default function ArchikHomesPage() {
  const furnitureTypes = [
    {
      category: "Living Room",
      items: ["Sofas", "TV Units", "Coffee Tables", "Bookshelves"],
      image: "/beige-fabric-sofa-three-seater-modern-interior.jpg"
    },
    {
      category: "Bedroom", 
      items: ["Beds", "Side Tables", "Wardrobes", "Dressing Units", "TV Panels"],
      image: "/design-mode/Designer-Bedroom-Furniture-UH-ROYAL-0016.jpg"
    },
    {
      category: "Kitchen & Dining",
      items: ["Modular Kitchens", "Dining Tables", "Crockery Units"],
      image: "/wooden-dining-chair-set-modern-kitchen.jpg"
    },
    {
      category: "Office Furniture",
      items: ["Desks", "Storage Units", "Meeting Tables", "Workstations"],
      image: "/modern-sideboard-console-oak-finish.jpg"
    },
    {
      category: "Retail & Display",
      items: ["Counters", "Racks", "Product Display Units"],
      image: "/minimal-wooden-bookshelf-with-decor.jpg"
    },
    {
      category: "Storage Solutions",
      items: ["Modular Shelves", "Hidden Storage", "Multi-functional Units"],
      image: "/design-mode/luxury-bedroom-with-furniture-premium-photo_124907-1084.jpg"
    }
  ]

  const specializations = [
    {
      title: "Residential",
      description: "Custom furniture solutions for homes, apartments, and residential complexes",
      icon: "🏠"
    },
    {
      title: "Industrial", 
      description: "Durable furniture for factories, warehouses, and industrial facilities",
      icon: "🏭"
    },
    {
      title: "Office Furniture",
      description: "Professional workspace solutions for corporate and commercial environments", 
      icon: "🏢"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Archik <span className="text-amber-400">Homes</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-slate-200">
              A specialized branch of Archik Construction focused entirely on Furniture & Interiors
            </p>
            <p className="text-lg lg:text-xl mb-12 text-slate-300 max-w-3xl mx-auto">
              From concept to creation, we craft bespoke furniture solutions that transform spaces into extraordinary experiences. Our dedicated team specializes in custom furniture manufacturing and interior design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                View Our Furniture Gallery
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3">
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Furniture Types Carousel */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Types of Custom Furniture
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive range of custom furniture solutions designed to meet your specific needs
            </p>
          </div>

          {/* Scrolling Carousel */}
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 w-max">
              {furnitureTypes.map((type, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={type.image} 
                    alt={type.category}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{type.category}</h3>
                    <ul className="space-y-2">
                      {type.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-slate-600">
                          <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section (Moved from Landing Page) */}
      <Products />

      {/* Why Choose Archik Homes */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Why Choose <span className="text-amber-400">Archik Homes</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-bold mb-2">Custom Design Expertise</h3>
                    <p className="text-slate-300">Tailored furniture solutions designed to match your unique style and space requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-bold mb-2">Premium Materials</h3>
                    <p className="text-slate-300">Only the finest materials sourced from trusted suppliers for lasting durability and beauty.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-bold mb-2">Expert Craftsmanship</h3>
                    <p className="text-slate-300">Skilled artisans with years of experience in furniture manufacturing and interior design.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-bold mb-2">End-to-End Service</h3>
                    <p className="text-slate-300">From initial consultation to final installation and after-sales support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-bold mb-2">Competitive Pricing</h3>
                    <p className="text-slate-300">Fair and transparent pricing with no hidden costs or surprises.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-bold mb-2">Timely Delivery</h3>
                    <p className="text-slate-300">Committed to delivering your furniture on schedule without compromising quality.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                <Link href="/contact">
                  Start Your Furniture Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}