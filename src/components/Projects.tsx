import { projects } from '../data/portfolioData'
import { SectionHeader, Tag } from './ui'

function ProjectCard({ emoji, title, description, tags, link }: typeof projects[0]) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-bg-card border border-white/[0.06] hover:border-accent/35 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:bg-bg-hover"
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-2xl">{emoji}</span>
        <span className="text-ink-muted text-lg group-hover:text-accent-light transition-colors">↗</span>
      </div>
      <h3 className="text-sm font-bold text-ink-primary mb-2 leading-snug">{title}</h3>
      <p className="text-xs text-ink-secondary leading-relaxed mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => <Tag key={tag} small>{tag}</Tag>)}
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="What I've Built" title="Featured Projects" />
        {/* 1 col on mobile → 2 col on sm → 3 col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
