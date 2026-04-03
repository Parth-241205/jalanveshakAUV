"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "System", href: "#system" },
  { name: "Features", href: "#features" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#020B1C]/90 backdrop-blur-md border-b border-[#1a3a5c]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-white text-2xl tracking-[0.1em] font-normal">
            JalAnveshak
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-[#00B4D8] text-sm tracking-[0.1em] uppercase transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00B4D8] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
