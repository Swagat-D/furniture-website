'use client'

const teamMembers = [
  {
    name: "Er. Nirmal Mohapatra",
    role: "Executive Director (ED)",
    image: "/team/Nirmala Mohapatra.jpg",
    quote: "Every home we build carries a promise — of safety, quality, and lasting beauty. For me, it's not just about constructing spaces, but about creating environments where families feel secure, comfortable, and truly at home. Every corner, every detail, every brick matters, because we are shaping lives, not just buildings. Seeing the joy and excitement on our clients' faces when they step into their new spaces is the most rewarding part of what I do. I strive to ensure that every project meets the highest standards, blending care, precision, and reliability."
  },
  {
    name: "Bhabani Sankar Mohapatra",
    role: "Managing Director (MD)",
    image: "/team/Bhabani sankar mohapatra.jpg",
    quote: "Building Archik has always been about more than constructing homes — it's about creating legacies of trust, care, and excellence. Each project is personal to us, because behind every home are families, memories, and dreams. Leading a team that shares this passion inspires me every day. I focus on ensuring that every home reflects our commitment to quality, innovation, and timeless design. There is nothing more fulfilling than seeing our clients thrive in the spaces we help create."
  },
  {
    name: "Aparna Tripathy",
    role: "Head of Operations",
    image: "/team/Aparna.jpg",
    quote: "I see every project as a journey, where every detail, process, and decision matters. I work quietly behind the scenes to ensure operations run smoothly and that every client feels supported throughout their experience. Being part of each step — from understanding dreams to seeing them come alive — is what inspires me every day. Knowing that our work creates spaces where families will live, grow, and make memories makes every challenge worthwhile. Turning ideas into homes is not just my role; it's my privilege."
  },
  {
    name: "Pratyush Kumar Rath",
    role: "Creative Head",
    image: "/team/Pratyush.jpg",
    quote: "Every home is a story waiting to be told. I bring my creativity, passion, and attention to detail to each project, ensuring that the design reflects the personality and dreams of those who will live there. Crafting spaces that inspire, comfort, and delight is not just my work — it's my purpose. I take pride in blending imagination with precision, making each home exceptional, timeless, and deeply meaningful."
  },
  {
    name: "Biswajit Nayak",
    role: "Marketing Head",
    image: "/team/Biswajit.jpg",
    quote: "Our work is about understanding people and translating their dreams into spaces that truly feel alive. I take pride in showcasing how design, technology, and lifestyle come together in every home. Seeing our clients' happiness reflected in every corner, every detail, and every moment they spend in these spaces is incredibly fulfilling. For me, it's about telling the story of each home and the life it nurtures."
  }
]

export default function Team() {
  return (
    <section className="section-surface rounded-2xl p-6 md:p-8">
      <div className="mb-6 text-center">
        <p
          className="mx-auto inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wider"
          style={{ borderColor: "color-mix(in oklab, var(--brand) 40%, transparent)", color: "var(--brand)" }}
        >
          Leadership Team
        </p>
        <h2 className="text-balance mt-3 text-3xl font-extrabold md:text-4xl">Our Core Team</h2>
        <p className="text-muted-foreground mx-auto mt-2 max-w-2xl">
          Meet the passionate professionals who bring your dreams to life with expertise, care, and dedication.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 opacity-0 animate-fadeInUp"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards'
            }}
          >
            <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--brand)" }} aria-hidden="true" />
            
            {/* Profile Photo */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 shrink-0 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--brand)" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="h-full w-full rounded-full hidden items-center justify-center text-white font-bold text-lg"
                  style={{ background: "var(--brand)" }}
                >
                  {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                <p className="text-sm font-medium" style={{ color: "var(--brand)" }}>{member.role}</p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative">
              <div className="text-4xl font-serif" style={{ color: "var(--brand)", opacity: 0.3 }} aria-hidden="true">"</div>
              <p className="text-muted-foreground text-sm leading-relaxed -mt-2 relative z-10">
                {member.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}