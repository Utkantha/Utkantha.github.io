import { meta, skillGroups } from '../data/portfolioData'
import { SectionHeader, Tag } from './ui'

/* ── InfoRow — reused for each personal detail ── */
function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="min-w-[72px] text-ink-muted font-medium">{label}</span>
      <span className="text-ink-secondary">{children}</span>
    </div>
  )
}

/* ── SkillGroup — reused for each skill category ── */
function SkillGroup({ label, tags }: { label: string; tags: string[] }) {
  return (
    <div className="mb-4">
      <p className="text-[0.7rem] font-semibold tracking-widest uppercase text-ink-muted mb-2">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
    </div>
  )
}

/* ── About ── */
export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Who I am" title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Bio + info */}
          <div className="space-y-4">
            <p className="text-ink-secondary text-sm leading-relaxed">
              I'm an MCA candidate at BPUT with a deep passion for software engineering and
              artificial intelligence. I enjoy crafting clean, performant web applications
              and training ML models that solve real-world problems.
            </p>
            <p className="text-ink-secondary text-sm leading-relaxed">
              My journey spans from a Physics background to full-stack development and deep
              learning — giving me a unique analytical perspective when approaching
              engineering challenges.
            </p>

            <div className="pt-2 space-y-2.5">
              <InfoRow label="Location">{meta.location}</InfoRow>
              <InfoRow label="Email">
                <a href={`mailto:${meta.email}`} className="text-accent-light hover:underline">
                  {meta.email}
                </a>
              </InfoRow>
              <InfoRow label="Phone">{meta.phone}</InfoRow>
              <InfoRow label="GitHub">
                <a href={meta.links.github} target="_blank" rel="noopener noreferrer" className="text-accent-light hover:underline">
                  github.com/Utkantha
                </a>
              </InfoRow>
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <p className="text-sm font-semibold text-ink-primary mb-4">Technical Skills</p>
            {skillGroups.map((g) => (
              <SkillGroup key={g.label} label={g.label} tags={g.tags} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
