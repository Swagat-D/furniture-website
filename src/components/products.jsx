"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { useCart } from "./cart-context"
import { useAuth } from "./auth-context"
import { Eye, Star, ShoppingCart, X } from "lucide-react"

const segments = [
  { id: 'all', name: 'All Products' },
  { id: 'residential', name: 'Residential' },
  { id: 'office', name: 'Office Furniture' },
  { id: 'industrial', name: 'Industrial' },
]

const products = [
  { 
    id: 1, 
    name: "Sectional Sofa", 
    price: "₹65,000", 
    originalPrice: "₹1,80,000",
    image: "/beige-fabric-sofa-three-seater-modern-interior.jpg",
    segment: 'residential',
    rating: 4.8,
    reviews: 127,
    features: ["Premium Fabric", "Modular Design", "5-Year Warranty"],
    description: "Experience ultimate comfort with our premium sectional sofa featuring modular design and premium fabric upholstery. Perfect for modern living rooms with customizable configurations.",
    specifications: {
      "Dimensions": "210cm x 90cm x 85cm",
      "Material": "Premium Fabric, Hardwood Frame",
      "Color": "Beige, Cream, Charcoal",
      "Weight Capacity": "300kg",
      "Assembly": "Professional assembly included"
    },
    included: ["Free delivery & Installation", "5-year comprehensive warranty", "Professional assembly service", "Customization options available"]
  },
  { 
    id: 2, 
    name: "Luxury Armchair", 
    price: "₹25,000", 
    originalPrice: "₹65,000",
    image: "/modern-oak-lounge-chair-in-cozy-living-room.jpg",
    segment: 'residential',
    rating: 4.6,
    reviews: 89,
    features: ["Ergonomic Design", "Premium Leather", "360° Swivel"],
    description: "Indulge in luxury with our premium armchair featuring ergonomic design and finest leather upholstery. Perfect companion for your reading corner or office space.",
    specifications: {
      "Dimensions": "75cm x 80cm x 85cm",
      "Material": "Premium Leather, Steel Frame",
      "Color": "Brown, Black, Tan",
      "Weight Capacity": "150kg",
      "Features": "360° swivel, adjustable height"
    },
    included: ["Free delivery & Installation", "3-year warranty", "Leather care kit", "Professional setup"]
  },
  { 
    id: 3, 
    name: "Modern Coffee Table", 
    price: "₹15,000", 
    originalPrice: "₹45,000",
    image: "/walnut-coffee-table-with-decor.jpg",
    segment: 'residential',
    rating: 4.8,
    reviews: 156,
    features: ["Solid Wood", "Contemporary Design", "Storage Drawer"],
    description: "Elevate your living space with our modern coffee table crafted from premium walnut wood. Features hidden storage and contemporary design elements.",
    specifications: {
      "Dimensions": "120cm x 60cm x 45cm",
      "Material": "Solid Walnut Wood, Tempered Glass",
      "Color": "Natural Walnut, Dark Oak",
      "Storage": "Hidden drawer compartment",
      "Finish": "Premium wood polish"
    },
    included: ["Free delivery & Installation", "2-year warranty", "Wood care instructions", "Assembly service"]
  },
  { 
    id: 4, 
    name: "Executive Office Desk", 
    price: "₹45,000", 
    originalPrice: "₹85,000",
    image: "/modern-sideboard-console-oak-finish.jpg",
    segment: 'office',
    rating: 4.7,
    reviews: 67,
    features: ["Cable Management", "Spacious Storage", "Ergonomic Height"],
    description: "Professional executive desk designed for productivity and style. Features built-in cable management, spacious drawers, and ergonomic design for long work hours.",
    specifications: {
      "Dimensions": "160cm x 80cm x 75cm",
      "Material": "Oak Veneer, Steel Frame",
      "Color": "Oak, Mahogany, Walnut",
      "Storage": "3 drawers, 2 cabinets",
      "Features": "Cable management, soft-close drawers"
    },
    included: ["Free office delivery", "3-year warranty", "Cable management kit", "Professional installation"]
  },
  { 
    id: 5, 
    name: "Dining Chair Set", 
    price: "₹18,000", 
    originalPrice: "₹35,000",
    image: "/wooden-dining-chair-set-modern-kitchen.jpg",
    segment: 'residential',
    rating: 4.5,
    reviews: 92,
    features: ["Set of 4", "Ergonomic Design", "Stackable"],
    description: "Complete your dining experience with our elegant chair set. Crafted for comfort and style, perfect for family gatherings and dinner parties.",
    specifications: {
      "Dimensions": "45cm x 50cm x 80cm (each)",
      "Material": "Solid Beech Wood",
      "Color": "Natural, White, Black",
      "Quantity": "Set of 4 chairs",
      "Features": "Stackable, lightweight design"
    },
    included: ["Set of 4 chairs", "2-year warranty", "Assembly instructions", "Delivery included"]
  },
  { 
    id: 6, 
    name: "Bedside Table", 
    price: "₹8,500", 
    originalPrice: "₹18,000",
    image: "/oak-bedside-table-with-lamp.jpg",
    segment: 'residential',
    rating: 4.6,
    reviews: 78,
    features: ["Soft-Close Drawer", "Cable Management", "Matching Lamp"],
    description: "Complete your bedroom setup with our elegant bedside table featuring soft-close drawer and built-in cable management. Includes matching designer lamp.",
    specifications: {
      "Dimensions": "45cm x 35cm x 65cm",
      "Material": "Solid Oak Wood",
      "Color": "Natural Oak, White Oak",
      "Storage": "1 drawer, 1 open shelf",
      "Extras": "Matching table lamp included"
    },
    included: ["Matching table lamp", "2-year warranty", "Assembly service", "Cable management"]
  },
  { 
    id: 7, 
    name: "Industrial Storage Unit", 
    price: "₹35,000", 
    originalPrice: "₹68,000",
    image: "/minimal-wooden-bookshelf-with-decor.jpg",
    segment: 'industrial',
    rating: 4.4,
    reviews: 43,
    features: ["Heavy Duty", "Modular System", "Steel Frame"],
    description: "Robust industrial storage solution perfect for warehouses, workshops, and commercial spaces. Modular design allows for easy customization and expansion.",
    specifications: {
      "Dimensions": "200cm x 50cm x 180cm",
      "Material": "Steel Frame, Wood Shelves",
      "Color": "Black, Gray, Industrial Blue",
      "Capacity": "500kg total weight",
      "Features": "Adjustable shelves, bolt-together assembly"
    },
    included: ["Heavy-duty hardware", "5-year structural warranty", "Installation guide", "Expansion compatibility"]
  },
  { 
    id: 8, 
    name: "Ergonomic Office Chair", 
    price: "₹22,000", 
    originalPrice: "₹45,000",
    image: "/stylish-living-room-with-wooden-furniture-and-warm.jpg",
    segment: 'office',
    rating: 4.7,
    reviews: 134,
    features: ["Lumbar Support", "Adjustable Height", "Mesh Back"],
    description: "Ultimate comfort for your workspace with our ergonomic office chair. Features advanced lumbar support, breathable mesh back, and full adjustability for all-day comfort.",
    specifications: {
      "Dimensions": "65cm x 65cm x 100-115cm",
      "Material": "Mesh, Steel Frame, Foam Padding",
      "Color": "Black, Gray, Blue",
      "Adjustments": "Height, armrests, tilt tension",
      "Weight Capacity": "120kg"
    },
    included: ["Professional assembly", "3-year warranty", "Adjustment instructions", "Free delivery to office"]
  },
  { 
    id: 9, 
    name: "Modern Floor Lamp", 
    price: "₹12,000", 
    originalPrice: "₹25,000",
    image: "/minimal-floor-lamp-next-to-sofa.jpg",
    segment: 'residential',
    rating: 4.5,
    reviews: 67,
    features: ["LED Compatible", "Adjustable Height", "Touch Control"],
    description: "Illuminate your space with style using our modern floor lamp. Features touch controls, adjustable height, and LED compatibility for energy-efficient lighting.",
    specifications: {
      "Dimensions": "40cm base x 150-180cm height",
      "Material": "Steel, Fabric Shade",
      "Color": "Brass, Black, Chrome",
      "Bulb": "LED compatible, E27 socket",
      "Features": "Touch control, dimmer switch"
    },
    included: ["LED bulb included", "2-year warranty", "Touch control unit", "Assembly instructions"]
  }
]

export default function Products() {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const [loadingStates, setLoadingStates] = useState({})
  const [selectedSegment, setSelectedSegment] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toNumber = (s) => Number(String(s).replace(/[^\d.]/g, "")) || 0

  const filteredProducts = selectedSegment === 'all' 
    ? products 
    : products.filter(p => p.segment === selectedSegment)

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

  const openProductModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <div className="space-y-8">
      {/* Segment Filters */}
      <div className="flex flex-wrap gap-4 justify-center">
        {segments.map((segment) => (
          <Button
            key={segment.id}
            variant={selectedSegment === segment.id ? "default" : "outline"}
            onClick={() => setSelectedSegment(segment.id)}
            className={`px-6 py-3 rounded-xl transition-all ${
              selectedSegment === segment.id 
                ? 'bg-slate-700 text-white shadow-lg' 
                : 'border-gray-300 hover:border-slate-400 hover:bg-gray-50'
            }`}
          >
            <span className="font-medium">{segment.name}</span>
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <Card 
            key={product.id} 
            className="group overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white opacity-0 animate-fadeInUp"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards'
            }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img 
                src={product.image || "/placeholder-logo.png"} 
                alt={product.name} 
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              
              {/* Eye Button */}
              <button
                onClick={() => openProductModal(product)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-slate-100"
              >
                <Eye className="w-5 h-5 text-slate-600" />
              </button>

              {/* Popular Badge */}
              {product.reviews > 100 && (
                <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-500">
                  Popular
                </Badge>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-600">({product.reviews})</span>
              </div>
              
              <h3 className="font-bold text-lg text-slate-800 mb-2">{product.name}</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                )}
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {product.features.slice(0, 2).map((feature, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
              
              <Button
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 flex items-center gap-2"
                disabled={loadingStates[product.id]}
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="w-4 h-4" />
                {loadingStates[product.id] ? 'Adding...' : 'Get Custom Quote'}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Product Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent 
          className="p-0 gap-0" 
          style={{
            width: '70vw',
            maxWidth: 'none',
            height: '80vh',
            maxHeight: '90vh',
            overflowY: 'hidden'
          }}
        >
          {selectedProduct && (
            <div className="h-full flex flex-col">
              {/* Simple Header */}
              <div className="p-4 border-b bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <DialogTitle className="text-2xl font-bold text-gray-900">{selectedProduct.name}</DialogTitle>
                    <div className="flex items-center gap-2 mt-1">
                      {renderStars(selectedProduct.rating)}
                      <span className="text-sm text-gray-600">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{selectedProduct.price}</div>
                    {selectedProduct.originalPrice && (
                      <div className="text-lg text-gray-500 line-through">{selectedProduct.originalPrice}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                  {/* Left: Product Image */}
                  <div className="flex flex-col">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Right: Product Details */}
                  <div className="flex flex-col space-y-6">
                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Premium Features</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-orange-100 text-orange-800">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* What's Included */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">What's Included</h3>
                      <ul className="space-y-2">
                        {selectedProduct.included.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Product Description</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedProduct.description}</p>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Specifications</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 px-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-600 font-medium">{key}:</span>
                            <span className="text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="border-t p-4 bg-white">
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3"
                    onClick={() => handleAddToCart(selectedProduct)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Get Custom Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    className="px-6 border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
