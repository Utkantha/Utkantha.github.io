import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'
import { SectionHeader } from './ui'
import { Briefcase, MapPin, ExternalLink, Award, FileText } from 'lucide-react'

function ExperienceCard({
  company,
  role,
  period,
  location,
  certificateLink,
  recommendationLink,
  bullets,
  index
}: typeof experience[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-6 md:pl-8 border-l-2 border-accent/25 hover:border-accent transition-colors group"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[7px] top-4 w-3 h-3 rounded-full bg-bg-primary border-2 border-accent group-hover:bg-accent group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(167,139,250,0.8)] transition-all duration-300" />

      <div className="bg-bg-card hover:bg-bg-hover border border-border hover:border-accent/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:translate-x-2 hover:shadow-glow-sm">
        {/* Top: Role & Period */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-2">
          <div>
            <h3 className="text-lg font-bold text-ink-primary leading-snug flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent-light shrink-0" />
              {role}
            </h3>
            <p className="text-base font-semibold text-accent-light mt-0.5">{company}</p>
          </div>
          <span className="self-start text-xs font-semibold text-accent-light bg-accent/10 border border-accent/20 px-3 py-1 rounded-full whitespace-nowrap">
            {period}
          </span>
        </div>

        {/* Location & verification credentials */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs text-ink-muted">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {location}
          </span>

          {certificateLink && (
            <a
              href={certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent-light hover:underline font-semibold bg-accent/8 border border-accent/20 px-2.5 py-1 rounded-lg transition-colors hover:bg-accent/15"
            >
              <Award className="w-3.5 h-3.5" />
              Certificate of Completion
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {recommendationLink && (
            <a
              href={recommendationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent-light hover:underline font-semibold bg-accent/8 border border-accent/20 px-2.5 py-1 rounded-lg transition-colors hover:bg-accent/15"
            >
              <FileText className="w-3.5 h-3.5" />
              Recommendation Letter
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mt-4 pt-4 border-t border-border">
          {bullets.map((b) => (
            <li key={b} className="text-sm text-ink-secondary flex gap-2.5 leading-relaxed">
              <span className="text-accent mt-0.5 shrink-0 text-lg leading-none">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  if (!experience || experience.length === 0) return null

  return (
    <section id="experience" className="py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader label="Professional Journey" title="Experience" />

        <div className="flex flex-col gap-8 mt-12">
          {experience.map((exp, idx) => (
            <ExperienceCard key={`${exp.company}-${idx}`} index={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
