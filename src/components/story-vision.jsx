export default function StoryVision() {
  return (
    <section className="section-surface rounded-2xl p-6 md:p-10">
      <div className="mb-8 text-center">
        <p
          className="mx-auto inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wider"
          style={{ borderColor: "color-mix(in oklab, var(--brand) 40%, transparent)", color: "var(--brand)" }}
        >
          Archik Constructions
        </p>
        <h2 className="text-balance mt-3 text-3xl font-extrabold md:text-4xl">Our Story & Vision</h2>
        <p className="text-muted-foreground mx-auto mt-2 max-w-2xl">
          Crafting spaces that feel personal, purposeful, and beautifully enduring.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Story */}
        <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm md:p-8">
          <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand)" }} aria-hidden="true" />
          <div className="flex items-start gap-4">
            <div
              className="mt-1 h-10 w-10 shrink-0 rounded-full"
              style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
            />
            <div>
              <h3 className="text-2xl font-semibold">Our Story</h3>
              <p className="text-muted-foreground mt-3">
                Founded on a belief that great spaces begin with great craftsmanship. From bespoke furniture to complete
                interior transformations, we blend design thinking with precise execution.
              </p>
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl">
            <img
              src="/woodworker-workshop.png"
              alt="Craftsman working in a wood workshop"
              className="h-44 w-full object-cover"
            />
          </div>
        </div>

        {/* Vision */}
        <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm md:p-8">
          <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand)" }} aria-hidden="true" />
          <div className="flex items-start gap-4">
            <div
              className="mt-1 h-10 w-10 shrink-0 rounded-full"
              style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
            />
            <div>
              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p className="text-muted-foreground mt-3">
                To make premium, long-lasting interiors accessible and effortless—delivering beauty, function, and
                comfort without compromise, with sustainability at the core.
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <img
              src="/minimal-wooden-bookshelf-with-decor.jpg"
              alt="Minimal bookshelf with decor"
              className="h-36 w-full rounded-lg object-cover"
            />
            <img
              src="/stylish-living-room-with-wooden-furniture-and-warm.jpg"
              alt="Warm living room with wooden furniture"
              className="h-36 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
