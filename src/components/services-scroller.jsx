import { Leaf, Home, Ruler, Hammer, Lamp } from "lucide-react"

const services = [
  {
    title: "Landscaping",
    desc: "Sustainable outdoor spaces with greenery, comfort, and aesthetic appeal.",
    Icon: Leaf,
  },
  {
    title: "Smart Homes",
    desc: "Integration of technology and AI for smart, energy-efficient living.",
    Icon: Home,
  },
  {
    title: "Architecture",
    desc: "Creative, innovative, and sustainable architectural designs for the future.",
    Icon: Ruler,
  },
  {
    title: "Construction",
    desc: "High-quality residential and commercial construction with precision and safety.",
    Icon: Hammer,
  },
  {
    title: "Interior Design",
    desc: "Modern, elegant, and functional designs tailored to your lifestyle.",
    Icon: Lamp,
  },
]

function ServiceCard({ title, desc, Icon }) {
  return (
    <div className="mx-4 w-[280px] shrink-0 rounded-2xl border bg-card p-5 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-amber-300">
      <div className="mb-3 flex items-center gap-2">
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
          style={{ background: "color-mix(in oklab, var(--brand) 12%, white)" }}
        >
          <Icon className="h-5 w-5 transition-all duration-300" style={{ color: "var(--brand)" }} aria-hidden="true" />
        </span>
        <h3 className="text-lg font-extrabold transition-colors duration-300" style={{ color: "var(--brand)" }}>
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

export default function ServicesScroller() {
  // duplicate list for seamless marquee
  const list = [...services, ...services]

  return (
    <section className="section-surface overflow-hidden py-10">
      <div className="mx-auto mb-6 max-w-5xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Our Basic Services</h2>
      </div>
      <div className="w-full overflow-hidden" role="region" aria-label="Auto-scrolling list of services">
        <div className="marquee-track">
          {list.map((s, i) => (
            <ServiceCard key={`${s.title}-${i}`} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
