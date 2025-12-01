"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    alt: "Civil construction and building work",
    category: "Civil Construction"
  },
  {
    src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920&q=80",
    alt: "Waterproofing and structural repair services",
    category: "Waterproofing & Repairs"
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80",
    alt: "Modern furniture and interior design",
    category: "Furniture & Interiors"
  },
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80",
    alt: "Landscaping and outdoor living spaces",
    category: "Landscaping"
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
    alt: "Post-construction cleaning and finishing",
    category: "Post-Construction"
  },
  {
    src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80",
    alt: "Smart home automation and technology",
    category: "Smart Technology"
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % slides.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-label="Hero" className="relative">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-white text-sm font-medium">{slide.category}</p>
            </div>
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" aria-hidden="true" />
        
        <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-semibold text-balance leading-tight">
              Building Homes, One Detail at a Time!
            </h1>
            <p className="mt-3 md:mt-4 text-white/90 text-lg">
              Civil precision, curated interiors, landscaped living, smart technology, and exquisite furniture - all thoughtfully designed around you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get estimate in 2 mins
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
        
        {/* Slideshow indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Hero }