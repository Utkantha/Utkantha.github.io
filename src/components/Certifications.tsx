import { useState } from 'react'
import { certifications } from '../data/portfolioData'
import { SectionHeader } from './ui'

/* ── Certificate Modal ── */
function CertModal({ name, link, onClose }: { name: string; link: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-bg-card border border-accent/30 shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08]">
          <p className="text-sm font-semibold text-ink-primary truncate">{name}</p>
          <button
            onClick={onClose}
            className="ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-ink-muted hover:text-ink-primary hover:bg-white/10 transition-colors text-lg"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Certificate iframe */}
        <div className="w-full" style={{ height: '500px' }}>
          <iframe
            src={link}
            title={name}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.08]">
          <span className="text-xs text-ink-muted">Issued by HackerRank</span>
          <a
            href={link.replace('/iframe/', '/')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-accent-light hover:text-white hover:underline transition-colors"
          >
            Open in HackerRank ↗
          </a>
        </div>
      </div>
    </div>
  )
}

/* ── CertCard ── */
function CertCard({
  name,
  issuer,
  link,
  onClick,
}: typeof certifications[0] & { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left group flex items-center gap-4 bg-bg-card border border-white/[0.06] hover:border-accent/40 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-bg-hover hover:shadow-glow-sm cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-base shrink-0">
        🏆
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-ink-primary leading-tight">{name}</p>
        <p className="text-xs text-ink-muted mt-0.5">{issuer}</p>
      </div>
      {link && (
        <span className="text-ink-muted text-sm shrink-0 group-hover:text-accent-light transition-colors">
          👁 View
        </span>
      )}
    </button>
  )
}

/* ── Certifications Section ── */
export default function Certifications() {
  const [active, setActive] = useState<(typeof certifications)[0] | null>(null)

  return (
    <section id="certifications" className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Credentials" title="Certifications" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((c) => (
            <CertCard
              key={c.name}
              {...c}
              onClick={c.link ? () => setActive(c) : undefined}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {active?.link && (
        <CertModal
          name={active.name}
          link={active.link}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  )
}
