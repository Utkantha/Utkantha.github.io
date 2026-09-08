import profileImage from '../assets/profile_image.jfif'
import resumePdf from '../assets/sutkanthapdr_resume.pdf'
import { meta } from '../data/portfolioData'
import { Button } from './ui'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 pb-16 px-6 bg-gradient-hero bg-bg-primary overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">

        {/* ── Left: Text ── */}
        <div>
          {/* Status badge */}
          <div className="flex items-center gap-2 mb-5 opacity-0 animate-fade-up delay-100">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80] animate-float" />
            <span className="text-xs font-semibold text-emerald-400 tracking-widest uppercase">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.07] mb-4 opacity-0 animate-fade-up delay-200">
            S Utkantha<br />
            <span className="text-gradient">Priyadarshini Reddy</span>
          </h1>

          {/* Role */}
          <p className="text-ink-secondary text-base sm:text-lg font-normal mb-4 opacity-0 animate-fade-up delay-300">
            <span className="text-accent-light font-semibold">MCA Candidate</span>
            {' · '}Full-Stack Developer & ML Engineer
          </p>

          {/* Summary */}
          <p className="text-ink-secondary text-sm sm:text-base leading-relaxed max-w-lg mb-8 opacity-0 animate-fade-up delay-400">
            {meta.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up delay-500">
            <Button href="#projects">View Projects →</Button>
            <Button href={resumePdf} variant="outline" download="Utkantha_Resume.pdf">
              ↓ Download Resume
            </Button>
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="flex justify-center md:justify-end opacity-0 animate-fade-up delay-200">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-accent opacity-60 blur-sm" />
            <img
              src={profileImage}
              alt={meta.name}
              className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover object-top border-2 border-bg-primary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
