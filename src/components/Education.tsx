import { education } from '../data/portfolioData'
import { SectionHeader } from './ui'

function EduCard({ degree, institution, location, period, bullets }: typeof education[0]) {
  return (
    <div className="relative pl-5 border-l-2 border-accent/25 hover:border-accent transition-colors group">
      {/* Timeline dot */}
      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-bg-primary border-2 border-accent group-hover:bg-accent transition-colors" />

      <div className="bg-bg-card hover:bg-bg-hover border border-white/[0.06] hover:border-accent/30 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:translate-x-1">
        {/* Degree + period — stacked on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-2 mb-1">
          <h3 className="text-sm font-bold text-ink-primary leading-snug">{degree}</h3>
          <span className="self-start text-[0.7rem] font-semibold text-accent-light bg-accent/8 border border-accent/20 px-2.5 py-0.5 rounded-full whitespace-nowrap">
            {period}
          </span>
        </div>
        <p className="text-xs text-ink-muted mb-3">
          {institution} · {location}
        </p>
        <ul className="space-y-1.5">
          {bullets.map((b) => (
            <li key={b} className="text-xs text-ink-secondary flex gap-2">
              <span className="text-accent mt-0.5 shrink-0">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Academic Background" title="Education" />
        <div className="flex flex-col gap-5">
          {education.map((edu) => (
            <EduCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  )
}
