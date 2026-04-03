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
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                <h3 className="text-white text-sm tracking-[0.2em] uppercase mb-3">Email</h3>
                <p className="text-white/60">contact@jalanveshak.com</p>
              </div>
              <div>
                <h3 className="text-white text-sm tracking-[0.2em] uppercase mb-3">Phone</h3>
                <p className="text-white/60">+91 XXXXX XXXXX</p>
              </div>
              <div>
                <h3 className="text-white text-sm tracking-[0.2em] uppercase mb-3">Location</h3>
                <p className="text-white/60">
                  Institute of Technology
                  <br />
                  City, State, India
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm tracking-[0.1em] uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#041225] border border-[#1a3a5c] text-white focus:border-[#00B4D8] focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-sm tracking-[0.1em] uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#041225] border border-[#1a3a5c] text-white focus:border-[#00B4D8] focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-sm tracking-[0.1em] uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#041225] border border-[#1a3a5c] text-white focus:border-[#00B4D8] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button className="w-full px-8 py-4 bg-[#00B4D8] text-[#020B1C] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#00B4D8]/90 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
