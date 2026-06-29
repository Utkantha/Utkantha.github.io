import { certifications } from '../data/portfolioData'
import { SectionHeader } from './ui'

/* ── Badge icons for each issuer ── */
const issuerIcon: Record<string, string> = {
  HackerRank: '🟢',
}

/* ── CertCard — clickable anchor, opens link in new tab ── */
function CertCard({ name, issuer, link }: typeof certifications[0]) {
  const Tag = link ? 'a' : 'div'

  return (
    <Tag
      {...(link
        ? {
            href: link,
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : {})}
      className={[
        'group flex items-center gap-4',
        'bg-bg-card border border-white/[0.06] rounded-2xl p-5',
        'transition-all duration-300',
        link
          ? 'cursor-pointer hover:border-accent/50 hover:bg-bg-hover hover:-translate-y-1 hover:shadow-glow-sm'
          : '',
      ].join(' ')}
    >
      {/* Icon */}
      <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-accent flex items-center justify-center text-lg shadow-glow-sm">
        {issuerIcon[issuer] ?? '🏆'}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-ink-primary leading-snug group-hover:text-white transition-colors">
          {name}
        </p>
        <p className="text-xs text-ink-muted mt-0.5 font-medium">{issuer}</p>
      </div>

      {/* Arrow — only when link exists */}
      {link && (
        <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-white/[0.08] text-ink-muted text-sm group-hover:border-accent/40 group-hover:text-accent-light group-hover:bg-accent/10 transition-all duration-300">
          ↗
        </span>
      )}
    </Tag>
  )
}

/* ── Section ── */
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

        {/* Hint */}
        <p className="mt-6 text-xs text-ink-muted text-center">
          Click any certificate to view it on HackerRank ↗
        </p>
      </div>
    </section>
  )
}
