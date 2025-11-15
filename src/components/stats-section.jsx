"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    number: 12,
    suffix: "+",
    label: "Years in Business",
    description: "Established excellence"
  },
  {
    number: 2256,
    suffix: "+", 
    label: "Projects Done",
    description: "Successful completions"
  },
  {
    number: 3109,
    suffix: "",
    label: "Happy Clients",
    description: "Satisfied customers"
  },
  {
    number: 11,
    suffix: "K+",
    label: "Great Ideas",
    description: "Creative solutions"
  }
]

function Counter({ number, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const increment = number / (duration / 16) // 60fps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, number, duration])

  return <span ref={counterRef}>{count}</span>
}

export default function StatsSection() {
  return (
    <section 
      className="py-16 px-4"
      style={{ background: "color-mix(in oklab, var(--brand) 8%, #f8f4e6)" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p 
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm uppercase tracking-wider font-medium mb-4"
            style={{ borderColor: "color-mix(in oklab, var(--brand) 40%, transparent)", color: "var(--brand)" }}
          >
            The Metrics
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Few Numbers
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our journey of excellence reflected in numbers that matter - years of dedication, successful projects, and countless satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              
              <div className="space-y-2">
                <div 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                  style={{ color: "var(--brand)" }}
                >
                  <Counter number={stat.number} />
                  {stat.suffix}
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 uppercase tracking-wide">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Decorative line */}
              <div 
                className="w-16 h-1 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--brand)" }}
              />
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-12">
          <div 
            className="inline-block px-6 py-3 rounded-full text-sm font-medium"
            style={{ 
              background: "color-mix(in oklab, var(--brand) 12%, white)", 
              color: "var(--brand)" 
            }}
          >
            ✨ Building trust since 2012 ✨
          </div>
        </div>
      </div>
    </section>
  )
}