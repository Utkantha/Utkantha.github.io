import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { SectionHeader, Tag } from './ui'
import { ExternalLink } from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

function ProjectCard({ emoji, image, title, description, tags, links, index }: typeof projects[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group flex flex-col bg-bg-card border border-border hover:border-accent/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow-sm hover:bg-bg-hover relative"
    >
      {/* Project Image */}
      {image && (
        <div className="w-full h-48 overflow-hidden relative border-b border-border">
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Action Links Floating on the middle right */}
      <div className="absolute right-4 top-1/2 mt-12 sm:mt-16 -translate-y-1/2 flex flex-col gap-4 z-20">
        <a 
          href={links.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-bg-primary border border-border text-ink-muted hover:text-ink-primary hover:border-accent/50 hover:bg-accent/10 transition-all shadow-glow-sm"
          title="View Source on GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a 
          href={links.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-bg-primary border border-border text-ink-muted hover:text-accent-light hover:border-accent/50 hover:bg-accent/10 transition-all shadow-glow-sm"
          title="Visit Live Website"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 pr-14 sm:pr-16">
        <div className="flex justify-between items-start mb-4">
          <span className="text-3xl filter drop-shadow-md">{emoji}</span>
        </div>
        <h3 className="text-base font-bold text-ink-primary mb-2 leading-snug">{title}</h3>
        <p className="text-sm text-ink-secondary leading-relaxed mb-6 flex-1">{description}</p>
        
        {/* Bottom section with Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
          {tags.map((tag) => <Tag key={tag} small>{tag}</Tag>)}
        </div>
      </div>
    </motion.div>
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
