"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section id="system" className="py-32 bg-gradient-to-b from-[#020B1C] to-[#041225]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Text content */}
          <div>
            <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
              About The System
            </p>
            <h2 className="text-3xl md:text-4xl text-white tracking-[0.05em] mb-8">
              JalAnveshak AUV
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                JalAnveshak is an advanced Autonomous Underwater Vehicle designed for precision exploration and research operations. Built with cutting-edge robotics and sensor technology, it navigates the depths with unparalleled accuracy.
              </p>
              <p>
                Our system combines autonomous navigation, real-time underwater vision processing, and robust sensor fusion to deliver reliable performance in challenging underwater environments.
              </p>
              <p>
                Engineered for depth, designed for discovery - JalAnveshak represents the next generation of underwater exploration technology.
              </p>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-3xl text-[#00B4D8] font-normal">100m+</p>
                <p className="text-white/50 text-sm tracking-[0.1em] uppercase mt-1">Depth Rating</p>
              </div>
              <div>
                <p className="text-3xl text-[#00B4D8] font-normal">6+</p>
                <p className="text-white/50 text-sm tracking-[0.1em] uppercase mt-1">Sensors</p>
              </div>
              <div>
                <p className="text-3xl text-[#00B4D8] font-normal">4hrs</p>
                <p className="text-white/50 text-sm tracking-[0.1em] uppercase mt-1">Runtime</p>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="aspect-[4/3] w-full border border-[#1a3a5c] bg-[#041225] flex items-center justify-center text-[#00B4D8]/40 text-sm tracking-[0.3em] uppercase">
              AUV SYSTEM IMAGE
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
