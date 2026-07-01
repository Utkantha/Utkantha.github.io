import { motion } from 'framer-motion'
import { certifications } from '../data/portfolioData'
import { SectionHeader } from './ui'

function CertCard({ name, issuer, link, index }: typeof certifications[0] & { index: number }) {
  const hasLink = Boolean(link)

  const content = (
    <>
      {/* Top row: icon + text */}
      <div className="flex items-start gap-4">
        {/* Gradient icon */}
        <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-2xl shadow-inner">
          🏆
        </div>

        {/* Name & issuer */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-ink-primary leading-snug group-hover:text-accent-light transition-colors">
            {name}
          </p>
          <div className="flex items-center gap-1.5 mt-1.5">
            {/* HackerRank green dot */}
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] inline-block shrink-0" />
            <p className="text-xs text-ink-muted font-medium">{issuer}</p>
          </div>
        </div>
      </div>

      {/* Bottom: always-visible "View Certificate" link */}
      <div className="flex items-center justify-between pt-4 mt-2 border-t border-border">
        <span className="text-xs font-semibold text-accent-light group-hover:text-ink-primary transition-colors">
          View Certificate
        </span>
        <span className="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center text-accent-light group-hover:bg-accent group-hover:border-accent group-hover:text-ink-primary transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </div>
    </>
  )

  const sharedClassName = 'group flex flex-col justify-between gap-4 bg-bg-card border border-border rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-accent/50 hover:bg-bg-hover hover:shadow-glow-sm block'

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, delay: index * 0.1 },
    whileHover: { scale: 1.03 }
  }

  if (!hasLink) {
    return <motion.div {...motionProps} className={sharedClassName}>{content}</motion.div>
  }

  return (
    <motion.a
      href={link!}
      target="_blank"
      rel="noopener noreferrer"
      className={sharedClassName}
      {...motionProps}
    >
      {content}
    </motion.a>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader label="Credentials" title="Certifications" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8">
          {certifications.map((c, idx) => (
            <CertCard key={c.name} index={idx} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}