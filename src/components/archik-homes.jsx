'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import { useCart } from './cart-context'
import { useAuth } from './auth-context'
import { useState } from 'react'

export default function ArchikHomes() {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const [loadingStates, setLoadingStates] = useState({})

  const toNumber = (s) => Number(String(s).replace(/[^\d.]/g, "")) || 0

  const handleAddToCart = async (product) => {
    setLoadingStates(prev => ({ ...prev, [product.id]: true }))
    
    try {
      await addToCart({ 
        id: String(product.id), 
        name: product.name, 
        image: product.image, 
        priceNumber: toNumber(product.price),
        price: toNumber(product.price),
        quantity: 1
      })
      
      setTimeout(() => {
        setLoadingStates(prev => ({ ...prev, [product.id]: false }))
      }, 500)
      
    } catch (error) {
      console.error('Error adding to cart:', error)
      setLoadingStates(prev => ({ ...prev, [product.id]: false }))
      alert('Failed to add item to cart. Please try again.')
    }
  }

  return (
    <section id="archik-homes" className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Archik <span className="text-amber-600">Homes</span>
            </h2>
            <p className="text-xl text-slate-700 mb-4">
              A specialized branch of Archik Construction focused entirely on Furniture & Interiors
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              From custom furniture manufacturing to complete interior solutions, Archik Homes transforms spaces into extraordinary experiences with bespoke designs tailored to your unique needs.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Furniture & Interior Creation for:
                </h3>
                <div className="grid gap-4">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Residential</h4>
                      <p className="text-slate-600 text-sm">Custom furniture for homes and apartments</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Industrial</h4>
                      <p className="text-slate-600 text-sm">Durable solutions for industrial spaces</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Office Furniture</h4>
                      <p className="text-slate-600 text-sm">Professional workspace solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  Specializing in Custom Furniture
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <div className="flex items-center">
                    <span className="text-amber-600 mr-2">•</span>
                    Living Room Sets
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-600 mr-2">•</span>
                    Bedroom Furniture
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-600 mr-2">•</span>
                    Modular Kitchens
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-600 mr-2">•</span>
                    Office Workstations
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-600 mr-2">•</span>
                    Storage Solutions
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-600 mr-2">•</span>
                    Display Units
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl p-8 text-center min-h-[400px] flex items-center justify-center">
                <img 
                  src="/stylish-living-room-with-wooden-furniture-and-warm.jpg" 
                  alt="Archik Homes - Custom Furniture & Interiors"
                  className="rounded-xl shadow-lg max-w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">500+</div>
                  <div className="text-sm text-slate-600">Custom Projects</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Featured <span className="text-amber-600">Products</span>
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Discover our handcrafted furniture and interior solutions
              </p>
            </div>

            {/* Horizontal Product Scroller */}
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-6 w-max">
                {[
                  {
                    id: 'ah-001',
                    name: "Sectional Sofa",
                    price: "₹65,000",
                    originalPrice: "₹1,80,000",
                    image: "/beige-fabric-sofa-three-seater-modern-interior.jpg",
                    features: ["Premium Fabric", "Modular Design", "5-Year Warranty"]
                  },
                  {
                    id: 'ah-002',
                    name: "Luxury Armchair",
                    price: "₹25,000",
                    originalPrice: "₹65,000",
                    image: "/modern-oak-lounge-chair-in-cozy-living-room.jpg",
                    features: ["Ergonomic Design", "Premium Leather", "360° Swivel"]
                  },
                  {
                    id: 'ah-003',
                    name: "Designer Bedroom Set",
                    price: "₹85,000",
                    originalPrice: "₹2,50,000",
                    image: "/design-mode/Designer-Bedroom-Furniture-UH-ROYAL-0016.jpg",
                    features: ["Royal Design", "Premium Wood", "Complete Set"]
                  },
                  {
                    id: 'ah-004',
                    name: "Italian Luxury Furniture",
                    price: "₹1,25,000",
                    originalPrice: "₹3,50,000",
                    image: "/design-mode/Italian-luxury-furniture-Minotti.jpg",
                    features: ["Italian Design", "Premium Materials", "Exclusive Collection"]
                  },
                  {
                    id: 'ah-005',
                    name: "Modern Coffee Table",
                    price: "₹15,000",
                    originalPrice: "₹45,000",
                    image: "/walnut-coffee-table-with-decor.jpg",
                    features: ["Solid Wood", "Contemporary Design", "Storage Drawer"]
                  },
                  {
                    id: 'ah-006',
                    name: "Fendi Casa Collection",
                    price: "₹2,50,000",
                    originalPrice: "₹5,00,000",
                    image: "/design-mode/fendi-casa_expensive-furniture.jpg",
                    features: ["Luxury Brand", "Premium Quality", "Designer Collection"]
                  },
                  {
                    id: 'ah-007',
                    name: "Luxury Bedroom Suite",
                    price: "₹95,000",
                    originalPrice: "₹2,75,000",
                    image: "/design-mode/luxury-bedroom-with-furniture-premium-photo_124907-1084.jpg",
                    features: ["Premium Suite", "Complete Bedroom", "Luxury Finish"]
                  }
                ].map((product, index) => (
                  <div key={index} className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h4>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl font-bold text-amber-600">{product.price}</span>
                        <span className="text-sm text-slate-500 line-through">{product.originalPrice}</span>
                      </div>

                      <div className="mb-4">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded mr-2 mb-1">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        size="sm"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                        disabled={loadingStates[product.id]}
                        onClick={() => handleAddToCart(product)}
                      >
                        {loadingStates[product.id] ? 'Adding...' : 'Add to Cart'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-slate-600 mb-6">
                Discover our complete furniture and interior solutions designed specifically for your needs.
              </p>
              <div className="space-x-4">
                <Link href="/products">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                    View All Products
                  </Button>
                </Link>
                <Link href="/archik-homes">
                  <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3">
                    Explore Archik Homes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}