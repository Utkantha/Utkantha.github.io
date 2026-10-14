import { useState, useEffect, useRef } from 'react'
import { meta, navLinks } from '../data/portfolioData'
import resumeFsdPdf from "../assets/utkanthareddyfsd_resume.pdf"
import resumeDaPdf from "../assets/utkanthareddy_da_resume.pdf"
import { Sun, Moon, ChevronDown, FileDown } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const resumeMenuRef = useRef<HTMLDivElement>(null)

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resumeMenuRef.current && !resumeMenuRef.current.contains(event.target as Node)) {
        setResumeMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-bg-primary/85 backdrop-blur-xl border-b border-border transition-colors duration-300">
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
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg text-ink-secondary hover:text-accent hover:bg-accent/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Dual Resume Dropdown */}
          <div className="relative" ref={resumeMenuRef}>
            <button
              onClick={() => setResumeMenuOpen(!resumeMenuOpen)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-accent/40 text-accent-light hover:bg-accent/10 hover:border-accent transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              Resume
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${resumeMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {resumeMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-bg-card border border-border rounded-xl shadow-2xl p-1.5 z-50">
                <a
                  href={resumeDaPdf}
                  download="Utkantha_Reddy_Data_Analytics_Resume.pdf"
                  onClick={() => setResumeMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-ink-primary hover:bg-accent/10 hover:text-accent-light rounded-lg transition-colors"
                >
                  <span className="text-sm">📊</span>
                  <span>Download Resume (Data Analytics)</span>
                </a>
                <a
                  href={resumeFsdPdf}
                  download="Utkantha_Reddy_Full_Stack_Resume.pdf"
                  onClick={() => setResumeMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-ink-primary hover:bg-accent/10 hover:text-accent-light rounded-lg transition-colors"
                >
                  <span className="text-sm">💻</span>
                  <span>Download Resume (Full Stack Development)</span>
                </a>
              </div>
            )}
          </div>

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
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col px-5 pb-4 gap-1 list-none border-t border-border">
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

          {/* Mobile dual resumes (Data Analytics first, Full Stack second) */}
          <li className="pt-2 mt-2 border-t border-border flex flex-col gap-2">
            <a
              href={resumeDaPdf}
              download="Utkantha_Reddy_Data_Analytics_Resume.pdf"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold border border-accent/30 text-accent-light bg-accent/5 hover:bg-accent/15"
            >
              📊 Download Resume (Data Analytics)
            </a>
            <a
              href={resumeFsdPdf}
              download="Utkantha_Reddy_Full_Stack_Resume.pdf"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold border border-accent/30 text-accent-light bg-accent/5 hover:bg-accent/15"
            >
              💻 Download Resume (Full Stack Development)
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
