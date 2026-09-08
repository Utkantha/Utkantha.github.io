import { certifications } from '../data/portfolioData'
import { SectionHeader } from './ui'

/* ── CertCard ── */
function CertCard({ name, issuer }: typeof certifications[0]) {
  return (
    <div className="flex items-center gap-4 bg-bg-card border border-white/[0.06] hover:border-accent/30 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-bg-hover">
      <div className="w-9 h-9 rounded-full bg-gradient-accent flex items-center justify-center text-sm shrink-0">
        🏆
      </div>
      <div>
        <p className="text-sm font-semibold text-ink-primary leading-tight">{name}</p>
        <p className="text-xs text-ink-muted mt-0.5">{issuer}</p>
      </div>
    </div>
  )
}

/* ── Certifications ── */
export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Credentials" title="Certifications" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((c) => (
            <CertCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
