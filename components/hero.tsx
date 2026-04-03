"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen w-full bg-background flex items-center justify-center overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full border border-border/30 flex items-center justify-center text-muted-foreground/40 text-sm tracking-[0.3em] uppercase">
            HERO IMAGE / VIDEO
          </div>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground font-normal tracking-[0.05em] leading-tight text-balance">
          BUILDING THE FUTURE OF
          <br />
          <span className="text-foreground">DEFENSE TECHNOLOGY</span>
        </h1>

        <p
          className={`mt-8 text-lg md:text-xl text-muted-foreground tracking-[0.2em] uppercase transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Precision. Innovation. Control.
        </p>

        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="px-10 py-4 bg-foreground text-background text-sm tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors duration-300">
            Explore Systems
          </button>
          <button className="px-10 py-4 border border-foreground/50 text-foreground text-sm tracking-[0.2em] uppercase hover:border-foreground hover:bg-foreground/5 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/50 to-foreground animate-pulse" />
      </div>
    </section>
  )
}
