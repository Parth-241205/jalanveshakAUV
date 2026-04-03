"use client"

import { useEffect, useRef, useState } from "react"

const teamMembers = [
  {
    name: "Parthiv Bhatt",
    role: "Team Lead, Control Systems",
  },
  {
    name: "Hussain Sathaliya",
    role: "Software Developer",
  },
  {
    name: "Diya Thakkar",
    role: "Managing Lead, Embedded Architecture",
  },

]

function TeamCard({
  member,
  index,
}: {
  member: { name: string; role: string }
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
      className={`group text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Profile image placeholder */}
      <div className="aspect-square w-full max-w-[200px] mx-auto border border-[#1a3a5c] bg-[#041225] flex items-center justify-center text-[#00B4D8]/30 text-xs tracking-[0.2em] uppercase mb-4 group-hover:border-[#00B4D8]/50 transition-colors duration-300">
        PROFILE
      </div>

      <h3 className="text-lg text-white tracking-[0.05em] mb-1">{member.name}</h3>
      <p className="text-[#00B4D8]/70 text-sm tracking-[0.1em]">{member.role}</p>
    </div>
  )
}

export function Team() {
  return (
    <section id="team" className="py-32 bg-gradient-to-b from-[#020B1C] to-[#041225]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl text-white tracking-[0.05em]">
            Meet The Crew
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
