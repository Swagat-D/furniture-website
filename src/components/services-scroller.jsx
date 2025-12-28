'use client'
import Link from 'next/link'
import { Button } from './ui/button'

export default function ServicesScroller() {
  const services = [
    {
      title: "Pre-Construction Services",
      image: "/Pre-Construction Services.jpg",
      subServices: [
        "Site & Planning Support",
        "Feasibility Studies", 
        "Estimation & Budgeting",
        "Legal & Regulatory Assistance"
      ],
      link: "/services/pre-construction"
    },
    {
      title: "Design & Architecture", 
      image: "/Design & Architecture.jpg",
      subServices: [
        "Architectural Design",
        "Structural Engineering & RCC Design",
        "Interior Architecture & Space Planning",
        "3D Rendering & Walkthroughs"
      ],
      link: "/services/design-architecture"
    },
    {
      title: "Civil Construction",
      image: "/Civil Construction.jpg",
      subServices: [
        "Core Construction",
        "Site Development",
        "Renovation & Retrofitting",
        "Foundation & Substructure Work"
      ],
      link: "/services/civil-construction"
    },
    {
      title: "MEP (Mechanical, Electrical & Plumbing)",
      image: "/MEP (Mechanical, Electrical & Plumbing).jpg",
      subServices: [
        "Electrical Works",
        "Mechanical Works", 
        "Plumbing Works",
        "HVAC Systems"
      ],
      link: "/services/mep"
    },
    {
      title: "Waterproofing & Structural Repairs",
      image: "/Waterproofing & Structural Repairs.jpg",
      subServices: [
        "Surface Waterproofing",
        "Structural Maintenance",
        "Wet Area Solutions",
        "Crack Repair & Strengthening"
      ],
      link: "/services/waterproofing"
    },
    {
      title: "Sustainable & Green Construction", 
      image: "/Sustainable & Green Construction.jpg",
      subServices: [
        "Solar Panel Installation",
        "Rainwater Harvesting",
        "Energy Efficiency Audits",
        "Green Roof Systems"
      ],
      link: "/services/sustainable-construction"
    },
    {
      title: "Interior Works & Furnishing",
      image: "/Interior Works & Furnishing.png",
      subServices: [
        "Modular Installations",
        "Furniture & Fixtures",
        "False Ceiling & Lighting",
        "Flooring Solutions"
      ],
      link: "/services/interior-works"
    },
    {
      title: "Outdoor & Hardscaping Works",
      image: "/Outdoor & Hardscaping Works.jpg",
      subServices: [
        "Paving & Pathways",
        "External Additions",
        "Green Landscaping",
        "Compound Walls & Gates"
      ],
      link: "/services/outdoor-hardscaping"
    },
    {
      title: "Project Management & Turnkey Solutions",
      image: "/Project Management & Turnkey Solutions.jpg",
      subServices: [
        "Turnkey Contracting",
        "EPC Model",
        "Budget & Timeline Control",
        "Single Point Execution"
      ],
      link: "/services/project-management"
    },
    {
      title: "Post-Construction Services",
      image: "/Post-Construction Services.jpg",
      subServices: [
        "AMC Contracts",
        "Structural Safety Inspections",
        "Facility Management",
        "Compliance Audits"
      ],
      link: "/services/post-construction"
    },
    {
      title: "Health, Safety & Compliance",
      image: "/Health, Safety & Compliance.jpg",
      subServices: [
        "Site Safety Audits",
        "Environmental Compliance",
        "Risk Management",
        "Safety Equipment Deployment"
      ],
      link: "/services/health-safety"
    },
    {
      title: "Digital & Smart Home Solutions",
      image: "/Digital & Smart Home Solutions.jpg",
      subServices: [
        "Home Automation",
        "Security & Monitoring",
        "Smart Energy Systems",
        "IoT Integration"
      ],
      link: "/services/smart-solutions"
    },
    {
      title: "Specialized Construction Services",
      image: "/Specialized Construction Services.jpg",
      subServices: [
        "Industrial Construction",
        "Institutional Buildings",
        "Commercial Fit-Outs",
        "Healthcare Facilities"
      ],
      link: "/services/specialized-construction"
    }
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Horizontal Scrolling Services */}
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 w-max">
            {services.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  
                  {/* Sub-services */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Services:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {service.subServices.map((subService, subIndex) => (
                        <li key={subIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                          {subService}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={service.link}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
