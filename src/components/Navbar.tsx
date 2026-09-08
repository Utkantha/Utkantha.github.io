import { useState } from 'react'
import { meta, navLinks } from '../data/portfolioData'
import resumePdf from "../assets/sutkanthapdreddy_resume.pdf"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-bg-primary/85 backdrop-blur-xl border-b border-white/[0.06]">
      {/* ── Main bar ── */}
      <div className="flex items-center justify-between h-16 px-5 sm:px-8 max-w-5xl mx-auto w-full">

        {/* Logo */}
        <a href="#hero" className="text-gradient text-lg font-extrabold tracking-tight shrink-0">
          {meta.shortName},
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-ink-secondary hover:text-ink-primary hover:bg-accent/8 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href={resumePdf}
            download="Utkantha_Resume.pdf"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-accent/40 text-accent-light hover:bg-accent/8 hover:border-accent-light transition-all whitespace-nowrap"
          >
            ↓ Resume
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-accent/8 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-ink-secondary transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink-secondary transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink-secondary transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <ul className="flex flex-col px-5 pb-4 gap-1 list-none border-t border-white/[0.05]">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-ink-secondary hover:text-ink-primary hover:bg-accent/8 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
