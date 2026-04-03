import Link from "next/link"

const footerLinks = {
  company: [
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
  ],
  technology: [
    { name: "Systems", href: "#systems" },
    { name: "Research", href: "#research" },
    { name: "Innovation", href: "#innovation" },
  ],
  legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Security", href: "#security" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="text-foreground text-2xl tracking-[0.2em]">
              NEXUS
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Advancing the frontier of defense technology through precision engineering and innovation.
            </p>
          </div>

          <div>
            <h4 className="text-foreground text-sm tracking-[0.2em] uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-sm tracking-[0.2em] uppercase mb-6">Technology</h4>
            <ul className="space-y-3">
              {footerLinks.technology.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-sm tracking-[0.2em] uppercase mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} NEXUS. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs tracking-[0.2em] uppercase">
            Precision. Innovation. Control.
          </p>
        </div>
      </div>
    </footer>
  )
}
