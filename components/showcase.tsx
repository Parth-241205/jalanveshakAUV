"use client"

import { useEffect, useRef, useState } from "react"

export function Showcase() {
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
    <section id="projects" className="relative bg-background">
      <div
        ref={ref}
        className={`relative h-[70vh] w-full transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Full-width placeholder image */}
        <div className="absolute inset-0 border-y border-border flex items-center justify-center text-muted-foreground/40 text-sm tracking-[0.3em] uppercase">
          FULL-WIDTH SHOWCASE IMAGE
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/70" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`max-w-3xl mx-auto px-6 text-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-6">
              Featured Project
            </p>
            <h2 className="text-3xl md:text-5xl text-foreground tracking-[0.05em] mb-8 text-balance">
              REDEFINING OPERATIONAL CAPABILITY
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Our flagship autonomous platform represents a paradigm shift in defense technology. 
              Designed for precision, built for endurance.
            </p>
            <button className="px-10 py-4 border border-foreground/50 text-foreground text-sm tracking-[0.2em] uppercase hover:border-foreground hover:bg-foreground/5 transition-all duration-300">
              View Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
