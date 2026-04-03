"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Autonomous Navigation",
    description:
      "Advanced path planning and obstacle avoidance systems enable precise underwater navigation without human intervention.",
  },
  {
    title: "Underwater Vision",
    description:
      "High-resolution camera systems with real-time image processing for object detection and environment mapping.",
  },
  {
    title: "Sensor Fusion",
    description:
      "Integration of multiple sensor inputs including sonar, IMU, and pressure sensors for accurate localization.",
  },
  {
    title: "Robust Control Systems",
    description:
      "PID-based control architecture ensures stable movement and precise maneuvering in dynamic conditions.",
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
      className={`group p-8 border border-[#1a3a5c] bg-[#041225]/50 hover:border-[#00B4D8]/50 hover:shadow-[0_0_30px_rgba(0,180,216,0.1)] transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Placeholder image */}
      <div className="aspect-video w-full border border-[#1a3a5c]/50 bg-[#020B1C] flex items-center justify-center text-[#00B4D8]/30 text-xs tracking-[0.3em] uppercase mb-6 group-hover:border-[#00B4D8]/30 transition-colors duration-300">
        FEATURE IMAGE
      </div>

      <h3 className="text-xl text-white tracking-[0.05em] mb-4 group-hover:text-[#00B4D8] transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="py-32 bg-[#020B1C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl text-white tracking-[0.05em]">
            System Features
          </h2>
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
