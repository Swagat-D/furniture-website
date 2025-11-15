const items = [
  {
    year: "2012",
    title: "Archik Founded",
    desc: "Began with premium government civil construction projects, quickly gaining recognition for quality, reliability, and trustworthiness.",
  },
  {
    year: "2015",
    title: "Expansion into Private Sector",
    desc: "Expanded into private residential and commercial projects. Added interior design services, blending civil expertise with design innovation while maintaining affordability and quality.",
  },
  {
    year: "2017",
    title: "Smart Home Integration",
    desc: "Executed first smart home integration project and launched turnkey solutions. Solidified reputation for delivering premium, functional, and elegant spaces across sectors.",
  },
  {
    year: "2019",
    title: "Archik Homes Launched",
    desc: "Launched Archik Homes with own furniture manufacturing unit, offering Pattachitra art, custom furniture, and premium home décor, providing clients complete lifestyle solutions under one roof.",
  },
  {
    year: "2022",
    title: "Hospitality & Institutional Projects",
    desc: "Expanded into hospitality and institutional projects. Enhanced premium offerings including custom furniture, landscaped gardens, and smart home automation, while keeping services accessible and client-centric.",
  },
  {
    year: "2025",
    title: "Most Trusted Full-Service Brand",
    desc: "Archik Construction & Homes becomes a most trusted, full-service brand, delivering civil construction, interiors, furniture, smart homes, landscaping, and turnkey solutions, recognized for premium quality, sustainability, and affordability.",
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
            <li key={it.year} className={`relative grid items-start gap-6 md:grid-cols-2 md:gap-10 opacity-0 ${left ? 'animate-slideInLeft' : 'animate-slideInRight'}`} style={{animationDelay: `${i * 0.3}s`, animationFillMode: 'forwards'}}>
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
