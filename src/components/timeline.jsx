const items = [
  {
    year: "2014",
    title: "Conceptualized",
    desc: "Archik was envisioned to blend modern architecture with sustainability.",
  },
  {
    year: "2018",
    title: "First Workshop",
    desc: "Our boutique workshop launched, focusing on handcrafted wooden pieces.",
  },
  {
    year: "2022",
    title: "Expansion",
    desc: "Scaled into full residential and commercial projects, elevating innovation.",
  },
  {
    year: "2024",
    title: "Founded Officially",
    desc: "Trust, credibility, and sustainable sourcing became our foundation.",
  },
]

export default function Timeline() {
  return (
    <section className="relative">
      {/* central line */}
      <div
        className="pointer-events-none timeline-line absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-400 to-amber-600"
        aria-hidden="true"
      />

      <ul className="relative mx-auto max-w-5xl space-y-10">
        {items.map((it, i) => {
          const left = i % 2 === 0
          return (
            <li key={it.year} className="relative grid items-start gap-6 md:grid-cols-2 md:gap-10 opacity-0 animate-fadeInUp" style={{animationDelay: `${i * 0.2}s`, animationFillMode: 'forwards'}}>
              {/* side A */}
              <div
                className={`${left ? "order-1 md:order-1" : "order-1 md:order-2"} ${left ? "md:pr-10" : "md:pl-10"}`}
              >
                <div className="rounded-2xl border bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <span className="timeline-year text-2xl font-extrabold text-amber-600">{it.year}</span>
                    <span className="font-semibold text-slate-800">{it.title}</span>
                  </div>
                  <p className="text-slate-600 mt-3">{it.desc}</p>
                </div>
              </div>

              {/* milestone dot */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2" aria-hidden="true">
                <span className="timeline-dot block h-6 w-6 rounded-full bg-amber-500 shadow-lg animate-pulse" />
              </div>

              {/* spacer for opposite side */}
              <div className={`${left ? "order-2 md:order-2" : "order-2 md:order-1"}`} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
