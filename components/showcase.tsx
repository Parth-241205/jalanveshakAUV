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
    <section className="relative bg-[#020B1C]">
      <div
        ref={ref}
        className={`relative h-[70vh] w-full transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Full-width placeholder image */}
        <div className="absolute inset-0 border-y border-[#1a3a5c] bg-gradient-to-b from-[#041225] to-[#020B1C] flex items-center justify-center text-[#00B4D8]/30 text-sm tracking-[0.3em] uppercase">
          UNDERWATER MISSION VISUAL
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#020B1C]/60" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-white tracking-[0.05em] leading-tight text-balance">
              Engineered for Depth.
              <br />
              <span className="text-[#00B4D8]">Designed for Discovery.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
