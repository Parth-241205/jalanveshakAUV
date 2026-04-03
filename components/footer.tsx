import Link from "next/link"

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "System", href: "#system" },
    { name: "Features", href: "#features" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#linkedin" },
    { name: "GitHub", href: "#github" },
    { name: "Instagram", href: "#instagram" },
    { name: "YouTube", href: "#youtube" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#1a3a5c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="text-white text-2xl tracking-[0.1em]">
              JalAnveshak
            </Link>
            <p className="mt-4 text-white/50 text-sm leading-relaxed">
              Autonomous Underwater Exploration System. Precision beneath the surface.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#00B4D8] text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6">Social</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#00B4D8] text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a3a5c] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} JalAnveshak Team. All rights reserved.
          </p>
          <p className="text-[#00B4D8]/60 text-xs tracking-[0.2em] uppercase">
            Precision beneath the surface.
          </p>
        </div>
      </div>
    </footer>
  )
}
