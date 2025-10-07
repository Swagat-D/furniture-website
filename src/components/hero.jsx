"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const slides = [
  "/stylish-living-room-with-wooden-furniture-and-warm.jpg",
  "/modern-oak-lounge-chair-in-cozy-living-room.jpg",
  "/beige-fabric-sofa-three-seater-modern-interior.jpg",
  "/wooden-dining-chair-set-modern-kitchen.jpg",
  "/walnut-coffee-table-with-decor.jpg",
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % slides.length), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-label="Hero" className="relative">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src || "/placeholder.svg"}
            alt="Showcase furniture and interiors"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-semibold text-balance">Crafting Homes, One Detail at a Time</h1>
            <p className="mt-3 md:mt-4 text-white/90">
              Premium furniture and interior design tailored to your lifestyle.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/estimate">
                <Button size="lg" className="bg-primary text-primary-foreground">
                  Get estimate in 2 mins
                </Button>
              </Link>
              <a href="#products">
                <Button size="lg" variant="outline" className="bg-background/80">
                  Browse products
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
