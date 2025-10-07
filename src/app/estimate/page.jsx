"use client"

import QuickCalculator from "@/components/quick-calculator"
import Link from "next/link"

export default function EstimatePage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">Estimate in 2 Minutes</h1>
        <p className="text-muted-foreground mt-3">
          Choose your area, rooms, and finishes to get an instant estimate for interiors and furniture.
        </p>
      </div>
      <div className="mt-8">
        <QuickCalculator />
      </div>
      <div className="mt-8">
        <Link href="/" className="underline underline-offset-4 text-primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
