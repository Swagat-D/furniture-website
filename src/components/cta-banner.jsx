import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-10 md:py-14 grid items-center gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-pretty text-2xl md:text-3xl font-semibold">Redesign your living room</h3>
          <p className="text-sm md:text-base opacity-90 mt-2 max-w-prose">
            Save 15% on curated sets for a limited time. Mix and match seating, tables, and storage.
          </p>
        </div>
        <div className="md:justify-self-end">
          <Button asChild variant="secondary">
            <Link href="#shop">Shop sets</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
