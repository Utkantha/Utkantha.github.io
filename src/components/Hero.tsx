import profileImage from '../assets/profile_image.jfif'
import resumePdf from '../assets/sutkanthapdreddy_resume.pdf'
import { meta } from '../data/portfolioData'
import { Button } from './ui'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-14 px-5 sm:px-8 bg-gradient-hero bg-bg-primary overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">

        {/* Photo — top on mobile, right on desktop */}
        <div className="flex justify-center mb-8 md:hidden">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-accent opacity-60 blur-sm" />
            <img
              src={profileImage}
              alt={meta.name}
              className="relative w-36 h-36 rounded-full object-cover object-top border-2 border-bg-primary"
            />
          </div>
        </div>

        {/* Two-column on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] md:gap-16 md:items-center">

          {/* ── Text content ── */}
          <div>
            {/* Status badge */}
            <div className="flex items-center gap-2 mb-5 opacity-0 animate-fade-up delay-100">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80] animate-float shrink-0" />
              <span className="text-xs font-semibold text-emerald-400 tracking-widest uppercase">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-[2.2rem] sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.07] mb-4 opacity-0 animate-fade-up delay-200">
              S Utkantha<br />
              <span className="text-gradient">Priyadarshini Reddy</span>
            </h1>

            {/* Role */}
            <p className="text-ink-secondary text-sm sm:text-base lg:text-lg font-normal mb-4 opacity-0 animate-fade-up delay-300">
              <span className="text-accent-light font-semibold">MCA Candidate</span>
              {' · '}Full-Stack Developer &amp; ML Engineer
            </p>

            {/* Tagline */}
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

          {/* Photo — right on desktop only */}
          <div className="hidden md:flex justify-end opacity-0 animate-fade-up delay-200 shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-accent opacity-60 blur-sm" />
              <img
                src={profileImage}
                alt={meta.name}
                className="relative w-52 h-52 lg:w-60 lg:h-60 rounded-full object-cover object-top border-2 border-bg-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
