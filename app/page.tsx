import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Showcase } from "@/components/showcase"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020B1C]">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Showcase />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
