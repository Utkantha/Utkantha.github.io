import { certifications } from '../data/portfolioData'
import { SectionHeader } from './ui'

function CertCard({ name, issuer, link }: typeof certifications[0]) {
  const hasLink = Boolean(link)

  const content = (
    <>
      {/* Top row: icon + text */}
      <div className="flex items-start gap-4">
        {/* Gradient icon */}
        <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-accent flex items-center justify-center text-xl">
          🏆
        </div>

        {/* Name & issuer */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-ink-primary leading-snug group-hover:text-white transition-colors">
            {name}
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            {/* HackerRank green dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shrink-0" />
            <p className="text-xs text-ink-muted font-medium">{issuer}</p>
          </div>
        </div>
      </div>

      {/* Bottom: always-visible "View Certificate" link */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
        <span className="text-xs font-semibold text-accent-light group-hover:text-white transition-colors">
          View Certificate
        </span>
        <span className="w-7 h-7 rounded-full border border-accent/30 flex items-center justify-center text-accent-light group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </div>
    </>
  )

  const sharedClassName =
    'group flex flex-col justify-between gap-4 bg-bg-card border border-white/[0.06] rounded-2xl p-5 transition-all duration-300 hover:border-accent/50 hover:bg-bg-hover hover:-translate-y-1.5 hover:shadow-glow-sm'

  if (!hasLink) {
    return <div className={sharedClassName}>{content}</div>
  }

  return (
    <a
      href={link!}
      target="_blank"
      rel="noopener noreferrer"
      className={sharedClassName}
    >
      {content}
    </a>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Credentials" title="Certifications" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c) => (
            <CertCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}