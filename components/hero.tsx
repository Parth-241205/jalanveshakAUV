"use client"

import { useEffect, useState } from "react"

function Bubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#00B4D8]/10 animate-float"
          style={{
            width: `${Math.random() * 20 + 5}px`,
            height: `${Math.random() * 20 + 5}px`,
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 20}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#020B1C] to-[#041225]">
        {/* Placeholder for video/image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full border border-[#1a3a5c]/30 flex items-center justify-center text-[#00B4D8]/40 text-sm tracking-[0.3em] uppercase">
            UNDERWATER VEHICLE IMAGE / VIDEO
          </div>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#020B1C]/50" />
      </div>

      {/* Floating bubbles animation */}
      <Bubbles />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-normal tracking-[0.05em] leading-tight text-balance">
          JalAnveshak
        </h1>

        <p
          className={`mt-6 text-xl md:text-2xl text-[#00B4D8] tracking-[0.1em] transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Autonomous Underwater Exploration System
        </p>

        <p
          className={`mt-4 text-lg text-white/60 tracking-[0.2em] uppercase transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Precision beneath the surface.
        </p>

        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="px-10 py-4 bg-[#00B4D8] text-[#020B1C] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#00B4D8]/90 transition-colors duration-300">
            Explore System
          </button>
          <button className="px-10 py-4 border border-[#00B4D8]/50 text-white text-sm tracking-[0.2em] uppercase hover:border-[#00B4D8] hover:bg-[#00B4D8]/10 transition-all duration-300">
            View Mission
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#00B4D8]/50 to-[#00B4D8] animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  )
}
