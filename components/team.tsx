"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const teamMembers = [
  {
    name: "Parthiv Bhatt",
    role: "Team Lead, Control Systems",
    image: "/images/parthiv_bhatt.jpeg",
  },
  {
    name: "Hussain Sathaliya",
    role: "Software Developer",
    image: "/images/hussain_sathaliya.jpg",
  },
  {
    name: "Diya Thakkar",
    role: "Managing Lead, Embedded Architecture",
    image: "/images/diya_thakkar.jpeg",
  },
]

function TeamCard({
  member,
  index,
}: {
  member: { name: string; role: string; image: string }
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
      <div className="relative aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-full border-2 border-[#1a3a5c] bg-[#041225] mb-4 group-hover:border-[#00B4D8]/50 shadow-[0_0_24px_rgba(0,180,216,0.12)] transition-all duration-300">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 50vw, 200px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
