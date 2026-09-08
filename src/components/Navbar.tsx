import { meta, navLinks } from '../data/portfolioData'
import resumePdf from '../assets/sutkanthapdr_resume.pdf'

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between h-16 px-6 md:px-8 bg-bg-primary/80 backdrop-blur-xl border-b border-white/[0.06]">
      {/* Logo */}
      <a href="#hero" className="text-gradient text-lg font-extrabold tracking-tight">
        {meta.shortName}.
      </a>

      {/* Links — hidden on mobile */}
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

      {/* Resume CTA */}
      <a
        href={resumePdf}
        download="Utkantha_Resume.pdf"
        className="text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-accent/40 text-accent-light hover:bg-accent/8 hover:border-accent-light transition-all"
      >
        ↓ Resume
      </a>
    </nav>
  )
}
