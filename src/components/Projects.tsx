import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { SectionHeader, Tag } from './ui'

function ProjectCard({ emoji, title, description, tags, link, index }: typeof projects[0] & { index: number }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group flex flex-col bg-bg-card border border-white/[0.06] hover:border-accent/40 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-glow-sm hover:bg-bg-hover"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-3xl filter drop-shadow-md">{emoji}</span>
        <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-ink-muted text-lg group-hover:text-white group-hover:border-accent/50 group-hover:bg-accent/20 transition-all duration-300">↗</span>
      </div>
      <h3 className="text-base font-bold text-white mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-ink-secondary leading-relaxed mb-5 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => <Tag key={tag} small>{tag}</Tag>)}
      </div>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-secondary relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader label="What I've Built" title="Featured Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 mt-8">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} index={idx} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
