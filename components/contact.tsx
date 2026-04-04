"use client"

import { useEffect, useRef, useState } from "react"

export function Contact() {
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
    <section id="contact" className="py-32 bg-[#020B1C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="text-center mb-16">
            <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl text-white tracking-[0.05em]">
              Contact Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white text-sm tracking-[0.2em] uppercase mb-3">Contact Email</h3>
                <p className="text-white/60">jalanveshak2.0@gmail.com</p>
              </div>
              <div>
                <h3 className="text-white text-sm tracking-[0.2em] uppercase mb-3">Phone</h3>
                <p className="text-white/60">+91 63541 10120</p>
              </div>
              <div>
                <h3 className="text-white text-sm tracking-[0.2em] uppercase mb-3">Location</h3>
                <p className="text-white/60">
                  CHARUSAT
                  <br />
                  Anand, Gujarat, India
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
