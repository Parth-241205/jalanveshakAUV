"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Autonomous Systems",
    description:
      "Next-generation autonomous platforms designed for precision operations in complex environments. Engineered for reliability.",
  },
  {
    title: "Advanced Sensors",
    description:
      "State-of-the-art sensor fusion technology delivering unparalleled situational awareness across all domains.",
  },
  {
    title: "AI Integration",
    description:
      "Machine learning algorithms optimized for real-time decision making and adaptive response capabilities.",
  },
  {
    title: "Secure Networks",
    description:
      "Encrypted communication systems ensuring operational integrity and data protection at every level.",
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: { title: string; description: string }
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group p-8 border border-border bg-card hover:border-foreground/30 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Placeholder image */}
      <div className="aspect-video w-full border border-border/50 flex items-center justify-center text-muted-foreground/40 text-xs tracking-[0.3em] uppercase mb-6 group-hover:border-foreground/20 transition-colors duration-300">
        FEATURE IMAGE
      </div>

      <h3 className="text-xl text-foreground tracking-[0.1em] mb-4">{feature.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
    </div>
  )
}

export function Features() {
  return (
    <section id="technology" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl text-foreground tracking-[0.1em] mb-4">TECHNOLOGY</h2>
          <p className="text-muted-foreground tracking-[0.15em] uppercase text-sm">
            Engineered for the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
