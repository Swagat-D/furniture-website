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

      <div className="grid gap-8 lg:grid-cols-2">
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
              <div className="text-muted-foreground mt-3 space-y-3">
                <p>
                  In 2012, we set out with a simple dream — to build something of our own. What started as a vision became Archik, driven by passion, hard work, and the belief that together we could create something meaningful. Backed by 14+ years of experience, we bring expertise, trust, and reliability to every project.
                </p>
                <p>
                  We've proudly served over 2000 customers across government and private sectors. Every project strengthens our journey, builds lasting relationships, and reflects our dedication to quality and excellence. Delivering premium furniture quickly and efficiently is one example of the trust our clients place in us.
                </p>
                <p>
                  For us, a home is where life unfolds — where families grow, memories are made, and dreams take shape. From civil construction and aesthetic interiors to landscaped gardens, smart homes, and premium furniture, every detail matters. This isn't just a business; it's a commitment to creating spaces that resonate with the people who live in them.
                </p>
                <p className="font-medium text-slate-800">
                  A home is more than walls — it's where dreams grow, laughter echoes, and love thrives. That's the story we're proud to write, one home at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="space-y-6">
          {/* Mission */}
          <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm md:p-8">
            <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand)" }} aria-hidden="true" />
            <div className="flex items-start gap-4">
              <div
                className="mt-1 h-10 w-10 shrink-0 rounded-full"
                style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
              />
              <div>
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground mt-3">
                  To create homes and spaces that combine thoughtful design with precise execution, reflecting the lifestyle, aspirations, and personalities of those who live in them. From civil construction and interiors to landscaped gardens, smart homes, and premium furniture, we are committed to delivering quality, functionality, and beauty in every project, making premium living accessible, effortless, and meaningful.
                </p>
              </div>
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
                  To be a trusted and admired brand in construction and interiors, recognized for our ability to merge creative design thinking with flawless execution. We envision homes and spaces that inspire, delight, and elevate everyday living, delivering beauty, comfort, and lasting value without compromise, with sustainability at the core.
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
      </div>
    </section>
  )
}
