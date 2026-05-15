import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['Projects', 'Stack', 'About', 'Contact']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0,0%,4%,0.92)] backdrop-blur-sm border-b border-[hsl(0,0%,13%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Left */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-white text-base tracking-tight">Ronnie Taylor</span>
            <span className="mono text-[10px] text-[hsl(142,72%,50%)] bg-[hsl(142,72%,50%,0.08)] border border-[hsl(142,72%,50%,0.2)] rounded px-1.5 py-0.5">
              Full-Stack Developer
            </span>
        </div>

        {/* Center - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mono text-xs text-[hsl(0,0%,42%)] hover:text-[hsl(142,72%,50%)] transition-colors duration-180"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right - Desktop */}
        <div className="hidden md:block">
          <a
            href="mailto:hello@ronnietaylor.com"
            className="mono text-xs font-semibold text-black bg-[hsl(142,72%,50%)] hover:bg-[hsl(142,76%,38%)] rounded px-3 py-1.5 transition-colors duration-180"
          >
            Hire me &rarr;
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[hsl(0,0%,4%)] border-b border-[hsl(0,0%,13%)] px-6 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="mono text-xs text-[hsl(0,0%,42%)] hover:text-[hsl(142,72%,50%)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="mailto:hello@ronnietaylor.com"
              className="mono text-xs font-semibold text-black bg-[hsl(142,72%,50%)] hover:bg-[hsl(142,76%,38%)] rounded px-3 py-1.5 transition-colors duration-180 text-center mt-1"
              onClick={() => setOpen(false)}
            >
              Hire me &rarr;
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
