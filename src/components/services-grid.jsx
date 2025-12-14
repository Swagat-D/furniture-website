"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Star, ChevronRight, Users, Building, Factory, Wrench } from "lucide-react"

const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'industrial', name: 'Industrial' },
  { id: 'mep', name: 'MEP Services' },
]

const services = [
  {
    id: 1,
    title: "Pre-Construction Services",
    image: "/Pre-Construction Services.png",
    category: "residential",
    rating: 4.9,
    reviews: 156,
    price: "Starting ₹2,50,000",
    description: "Comprehensive planning and feasibility solutions for your construction project",
    features: ["Site Analysis", "Feasibility Studies", "Budget Planning"],
    link: "/services/pre-construction",
    subServices: [
      {
        category: "Site & Planning Support",
        items: [
          "Feasibility Studies",
          "Site Surveying & Soil Testing",
          "Land Development Advisory",
          "Legal & Regulatory Assistance",
          "Environmental Impact Assessment(for large/commercial projects)",
          "Zoning & Land Use Consultation (especially for urban projects)"
        ]
      },
      {
        category: "Estimation & Budgeting",
        items: [
          "Cost Estimation & BOQ (Bill of Quantities)",
          "Budget Forecasting & Cash Flow Planning (For long-term project tracking)"
        ]
      }
    ],
    included: ["Site visit & analysis", "Detailed feasibility report", "Cost estimation", "Timeline planning"]
  },
  {
    id: 2,
    title: "Design & Architecture",
    image: "/Design & Architecture.jpg",
    category: "residential", 
    rating: 4.8,
    reviews: 203,
    price: "Starting ₹5,00,000",
    description: "Creative and technical design solutions for modern living spaces",
    features: ["3D Rendering", "BIM Modeling", "Sustainable Design"],
    link: "/services/design-architecture",
    subServices: [
      {
        category: "Architectural Design",
        items: [
          "Conceptual & Detailed Design",
          "Space Planning & Utilization",
          "3D Rendering & Walkthroughs",
          "Sustainable Architecture & Green Design",
          "Building Information Modeling (BIM)",
          "Façade & Elevation Design",
          "Landscape Architecture"
        ]
      },
      {
        category: "Structural Engineering & RCC Design",
        items: [
          "Structural Engineering & Design",
          "Structural Load Analysis",
          "RCC Design (Slabs, Columns, Beams, Foundations)",
          "Steel Structure Design",
          "Seismic & Wind Load Compliance",
          "Structural Retrofitting (if needed)"
        ]
      },
      {
        category: "Interior Architecture & Space Planning",
        items: [
          "Interior Design Consultation",
          "Theme-Based Interior Concepts",
          "Lighting Design & Automation (Smart Integration)",
          "Material & Finish Selection",
          "Space Optimization & Partition Planning",
          "Theme-Based Interior Concepts"
        ]
      }
    ],
    included: ["Architectural drawings", "3D renderings", "Structural calculations", "Interior planning"]
  },
  {
    id: 3,
    title: "Civil Construction",
    image: "/Civil Construction.png",
    category: "industrial",
    rating: 4.7,
    reviews: 89,
    price: "Starting ₹15,00,000",
    description: "Core construction and site development services",
    features: ["RCC Work", "Steel Structure", "Site Development"],
    link: "/services/civil-construction",
    subServices: [
      {
        category: "Core Construction",
        items: [
          "Civil Work (Brick, RCC, Plastering)",
          "Fabricated Structures & Structural Steel(Pillars, Steel, PEB, MS Frames)",
          "Renovation, Retrofitting & Remodeling",
          "Foundation & Substructure Work"
        ]
      },
      {
        category: "Site Development", 
        items: [
          "Earthwork(Land Clearing, Grading) & Land Levelling",
          "Internal Road Construction & Paving(Paver and Concrete roads)",
          "Boundary Walls",
          "Drainage & Stormwater Systems",
          "Compound Gates & Entry Structures",
          "Security Cabins"
        ]
      }
    ],
    included: ["Material supply", "Labor management", "Quality testing", "Site supervision"]
  },
  {
    id: 4,
    title: "MEP (Mechanical, Electrical & Plumbing)",
    image: "/MEP (Mechanical, Electrical & Plumbing).png",
    category: "mep",
    rating: 4.9,
    reviews: 167,
    price: "Starting ₹8,00,000",
    description: "Mechanical, Electrical & Plumbing solutions",
    features: ["Smart Systems", "Energy Efficient", "Safety Compliant"],
    link: "/services/mep",
    subServices: [
      {
        category: "Electrical Works",
        items: [
          "Wiring, Lighting & Panels",
          "Generator/Inverter Setup",
          "Smart Lighting & Home Automation Solutions",
          "LT/HT Panel Installation",
          "Earthing & Lightning Arrestor Systems",
          "Transformer Installation",
          "HVAC Systems (Heating, Ventilation, Air Conditioning)"
        ]
      },
      {
        category: "Mechanical Works",
        items: [
          "Fabricated Structures & Structural Steel(Pillars, Steel, PEB, MS Frames)",
          "Elevators & Escalators",
          "Firefighting Systems(Hydrants, Sprinklers, Pumps)",
          "Ducting & Ventilation"
        ]
      },
      {
        category: "Plumbing Works",
        items: [
          "Water Supply & Drainage Systems",
          "Sanitary Fittings",
          "STP(Sewage Treatment Plant)/ETP Installation((Effluent Treatment Plant)",
          "Rainwater Harvesting & Stormwater Drainage Network"
        ]
      }
    ],
    included: ["Electrical installation", "Plumbing setup", "HVAC systems", "Safety certifications"]
  },
  {
    id: 5,
    title: "Waterproofing & Structural Repairs",
    image: "/Waterproofing & Structural Repairs.png",
    category: "residential",
    rating: 4.6,
    reviews: 134,
    price: "Starting ₹1,50,000",
    description: "Comprehensive waterproofing and structural maintenance",
    features: ["Leak Protection", "Structural Repair", "Long-term Warranty"],
    link: "/services/waterproofing",
    subServices: [
      {
        category: "Surface Waterproofing",
        items: [
          "Roof Waterproofing & Grading",
          "APP Membrane Application",
          "Exterior Wall Waterproofing"
        ]
      },
      {
        category: "Structural Maintenance",
        items: [
          "Epoxy Routing for Strengthening",
          "Crack Repair & Concrete Jacketing & Strengthening",
          "Basement Waterproofing"
        ]
      },
      {
        category: "Wet Area Solutions",
        items: [
          "Toilet Waterproofing",
          "Kitchen & Balcony Waterproofing",
          "Sunken Slab Protection"
        ]
      }
    ],
    included: ["Material warranty", "Leak-proof guarantee", "Post-service maintenance", "Quality inspection"]
  },
  {
    id: 6,
    title: "Sustainable & Green Construction",
    image: "/Sustainable & Green Construction.png",
    category: "commercial", 
    rating: 4.8,
    reviews: 92,
    price: "Starting ₹12,00,000",
    description: "Eco-friendly and sustainable building solutions",
    features: ["Solar Integration", "Green Technology", "Energy Efficient"],
    link: "/services/sustainable-construction",
    subServices: [
      {
        category: "Eco Installations",
        items: [
          "Solar Panel Installation",
          "Rainwater Harvesting System",
          "Wind Turbine Installation"
        ]
      },
      {
        category: "Urban Greenery",
        items: [
          "Terrace Gardens",
          "Drip Irrigation (Optional Add-on)",
          "Green Roof Systems",
          "Swimming Pool"
        ]
      },
      {
        category: "Energy Optimization",
        items: [
          "Energy Efficiency Audits",
          "Passive Cooling & Natural Ventilation Design",
          "Smart Energy Monitoring Systems"
        ]
      }
    ],
    included: ["Solar installation", "Green certifications", "Energy audits", "Maintenance support"]
  },
  {
    id: 7,
    title: "Interior Works & Furnishing",
    image: "/Interior Works & Furnishing.png",
    category: "residential",
    rating: 4.9,
    reviews: 278,
    price: "Starting ₹6,00,000",
    description: "Complete interior solutions and furnishing",
    features: ["Modular Design", "Custom Furniture", "Designer Lighting"],
    link: "/services/interior-works",
    subServices: [
      {
        category: "Modular Installations", 
        items: [
          "Modular Kitchens",
          "TV Units & Wall Panels",
          "Cupboards (Hinged & Sliding)",
          "Walk-in Closets"
        ]
      },
      {
        category: "Furniture & Fixtures",
        items: [
          "Sofa, Dining, Beds",
          "Dressing Tables",
          "Study Desks"
        ]
      },
      {
        category: "False Ceiling & Lighting",
        items: [
          "PVC, Wooden & Gypsum Ceilings",
          "Designer Lighting Setup",
          "Cove & Recessed Lighting"
        ]
      },
      {
        category: "Flooring Solutions",
        items: [
          "Tiles, Marble, Granite Installation",
          "Vinyl, Wooden & SPC Flooring",
          "Industrial Flooring (Epoxy, PU Coating, Concrete Polish)",
          "Anti-skid / Safety Flooring"
        ]
      },
      {
        category: "Painting & Surface Finishing",
        items: [
          "Interior & Exterior Painting",
          "Texture Finishes & Designer Walls",
          "Wall Putty & POP Work",
          "Water-based / Eco Paints"
        ]
      }
    ],
    included: ["Interior design consultation", "Custom furniture", "Installation service", "1-year warranty"]
  },
  {
    id: 8,
    title: "Outdoor & Hardscaping Works",
    image: "/Outdoor & Hardscaping Works.png",
    category: "commercial",
    rating: 4.7,
    reviews: 156,
    price: "Starting ₹10,00,000",
    description: "External construction and landscaping solutions",
    features: ["Paving Solutions", "Landscape Design", "Outdoor Lighting"],
    link: "/services/outdoor-hardscaping",
    subServices: [
      {
        category: "Paving & Pathways",
        items: [
          "Paver Block Road",
          "Interlocking Tiles",
          "Concrete Roads"
        ]
      },
      {
        category: "External Additions",
        items: [
          "Compound Walls & Entry Gates",
          "Pergolas & Outdoor Lighting & Seating",
          "Green Landscaping & Pathways",
          "Lighting, Benches & Street Fixtures"
        ]
      }
    ],
    included: ["Design consultation", "Material supply", "Installation", "Landscaping"]
  },
  {
    id: 9,
    title: "Project Management & Turnkey Solutions",
    image: "/Project Management & Turnkey Solutions.png",
    category: "commercial",
    rating: 4.6,
    reviews: 67,
    price: "Starting ₹25,00,000",
    description: "Comprehensive project management and turnkey solutions",
    features: ["EPC Model", "Single Point Execution", "End-to-End Delivery"],
    link: "/services/project-management",
    subServices: [
      {
        category: "Turnkey Contracting",
        items: [
          "Design to Delivery Model",
          "Single Point of Execution",
          "EPC((Engineering-Procurement-Construction) Model"
        ]
      },
      {
        category: "Procurement & Scheduling",
        items: [
          "Material Procurement & Logistics",
          "Construction Scheduling",
          "Budget & Timeline Control"
        ]
      }
    ],
    included: ["End-to-end project management", "Quality assurance", "Timeline adherence", "Budget control"]
  },
  {
    id: 10,
    title: "Post-Construction Services",
    image: "/Post-Construction Services.png",
    category: "commercial",
    rating: 4.8,
    reviews: 189,
    price: "Starting ₹3,00,000",
    description: "Ongoing maintenance and compliance services",
    features: ["AMC Services", "Safety Compliance", "Facility Management"],
    link: "/services/post-construction",
    subServices: [
      {
        category: "Maintenance & Facility Management",
        items: [
          "AMC (Annual Maintenance Contracts)",
          "Plumbing, HVAC & Electrical AMC",
          "Lift & Fire System AMC (Addition)"
        ]
      },
      {
        category: "Inspection & Compliance",
        items: [
          "Annual Structural Safety Inspections",
          "Waterproofing Health Checks",
          "Fire NOC & Building Code Compliance",
          "Retrofitting & Structural Audits",
          "Green Building Certification (Optional)"
        ]
      },
      {
        category: "Site Safety & Risk Control",
        items: [
          "Site Safety Audits",
          "Safety Equipment Deployment",
          "Emergency Exit & Fire Drill Planning"
        ]
      }
    ],
    included: ["Maintenance contracts", "Safety certifications", "Compliance reports", "Emergency support"]
  },
  {
    id: 11,
    title: "Health, Safety & Compliance",
    image: "/wooden-dining-chair-set-modern-kitchen.jpg",
    category: "industrial",
    rating: 4.7,
    reviews: 134,
    price: "Starting ₹2,00,000",
    description: "Safety protocols and regulatory compliance",
    features: ["Safety Audits", "PPE Compliance", "Legal Support"],
    link: "/services/health-safety",
    subServices: [
      {
        category: "Site Safety",
        items: [
          "Site Safety Audits & Reports",
          "Labour & Equipment Safety Compliance",
          "PPE (Safety Belts, Helmet, Gloves, Boots) Enforcement"
        ]
      },
      {
        category: "Environmental & Legal",
        items: [
          "Waste Disposal Management",
          "Fire & Building Code Compliance"
        ]
      }
    ],
    included: ["Safety audit reports", "Compliance documentation", "PPE supply", "Training programs"]
  },
  {
    id: 12,
    title: "Digital & Smart Home Solutions",
    image: "/Digital & Smart Home Solutions.png",
    category: "residential",
    rating: 4.9,
    reviews: 245,
    price: "Starting ₹4,00,000",
    description: "Digital automation and smart technology integration",
    features: ["Home Automation", "Smart Security", "Energy Management"],
    link: "/services/smart-solutions",
    subServices: [
      {
        category: "Home Automation",
        items: [
          "Smart Lighting & Appliance Control",
          "Voice, App & Motion Sensor Integration",
          "Scene-Based Home Setting"
        ]
      },
      {
        category: "Security & Monitoring",
        items: [
          "CCTV, DVR/NVR Surveillance",
          "Smart Locks & Door Sensors",
          "Intrusion Detection & Motion Sensors"
        ]
      },
      {
        category: "Green Efficiency",
        items: [
          "Solar Energy Monitoring",
          "Energy-Saving Systems(Smart Thermostats & Energy Meters)",
          "Load Optimization Controllers"
        ]
      }
    ],
    included: ["Smart device installation", "Mobile app setup", "Training & support", "Maintenance package"]
  },
  {
    id: 13,
    title: "Specialized Construction Services",
    image: "/Specialized Construction Services.png",
    category: "industrial",
    rating: 4.6,
    reviews: 89,
    price: "Starting ₹50,00,000",
    description: "Industry-specific construction solutions",
    features: ["Industrial Construction", "Institutional Projects", "Commercial Fit-Outs"],
    link: "/services/specialized-construction",
    subServices: [
      {
        category: "Industrial Construction (Factories, Warehouses)",
        items: [
          "Factory & Warehouse Construction",
          "PEB (Pre-Engineered Building) Solutions",
          "Cold Storage & Utility Sheds (Addition)"
        ]
      },
      {
        category: "Institutional Construction",
        items: [
          "Hospital & Healthcare Facility Construction",
          "Educational Campuses & Hostels",
          "Government/NGO Infrastructure"
        ]
      },
      {
        category: "Commercial Fit-Outs",
        items: [
          "Retail & Showroom Design-Build",
          "Office Interiors & Smart Workspace Planning",
          "Café, Salon & Boutique Setups"
        ]
      }
    ],
    included: ["Specialized engineering", "Industry compliance", "Custom solutions", "Large-scale project management"]
  }
]

export default function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory)

  const getServiceLink = (service) => {
    if (service.link) return service.link
    
    // Generate link from title if no explicit link
    const slug = service.title.toLowerCase()
      .replace(/[&()]/g, '')
      .replace(/\s+/g, '-')
      .replace(/,/g, '')
    return `/services/${slug}`
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
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">Our Comprehensive Services</h2>
          <p className="text-muted-foreground mt-2 mx-auto max-w-prose">
            From pre-construction planning to post-construction maintenance, we provide end-to-end construction solutions.
          </p>
        </div>

        <div className="space-y-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-xl transition-all ${
              selectedCategory === category.id 
                ? 'bg-slate-700 text-white shadow-lg' 
                : 'border-gray-300 hover:border-slate-400 hover:bg-gray-50'
            }`}
          >
            <span className="font-medium">{category.name}</span>
          </Button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredServices.map((service, index) => (
          <Card 
            key={service.id} 
            className="group overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white opacity-0 animate-fadeInUp"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards'
            }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img 
                src={service.image || "/placeholder-logo.png"} 
                alt={service.title} 
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              
              {/* View Service Button */}
              <Link href={getServiceLink(service)}>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-slate-100">
                  <Eye className="w-5 h-5 text-slate-600" />
                </button>
              </Link>

              {/* Popular Badge */}
              {service.reviews > 150 && (
                <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-500">
                  Popular
                </Badge>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {renderStars(service.rating)}
                <span className="text-sm text-gray-600">({service.reviews})</span>
              </div>
              
              <h3 className="font-bold text-lg text-slate-800 mb-2">{service.title}</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold text-blue-600">{service.price}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {service.features.slice(0, 2).map((feature, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
              
              <Link href={getServiceLink(service)}>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Details
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>


        </div>
      </div>
    </div>
  )
}