import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { SectionHeader, Tag } from './ui'
import { ExternalLink, BarChart3, Code2 } from 'lucide-react'

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
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        type: "spring",
        stiffness: 150,
        damping: 16,
        delay: index * 0.07 
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 15 }
      }}
      className="group flex flex-col bg-bg-card border border-border hover:border-accent rounded-2xl overflow-hidden transition-colors duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.5)] relative z-10"
    >
      {/* Project Image */}
      {image && (
        <div className="w-full aspect-video overflow-hidden relative border-b border-border bg-bg-primary/40">
          <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-4">
          <span className="text-3xl filter drop-shadow-md">{emoji}</span>
          
          <div className="flex gap-2">
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-bg-primary border border-border text-ink-muted hover:text-ink-primary hover:border-accent/50 hover:bg-accent/10 transition-all shadow-glow-sm"
              title="View Source on GitHub"
            >
              <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            {links.website ? (
              <a 
                href={links.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-bg-primary border border-border text-ink-muted hover:text-accent-light hover:border-accent/50 hover:bg-accent/10 transition-all shadow-glow-sm"
                title="Visit Live Website"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ) : null}
          </div>
        </div>
        <h3 className="text-base font-bold text-ink-primary mb-2 leading-snug group-hover:text-accent-light transition-colors">{title}</h3>
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
  const [activeTab, setActiveTab] = useState<'all' | 'data-analytics' | 'full-stack'>('all')

  const dataAnalyticsProjects = projects.filter((p) => p.category === 'Data Analytics')
  const fullStackProjects = projects.filter((p) => p.category === 'Full-Stack Development')

  const showDataAnalytics = activeTab === 'all' || activeTab === 'data-analytics'
  const showFullStack = activeTab === 'all' || activeTab === 'full-stack'

  return (
    <section id="projects" className="py-16 sm:py-24 px-5 sm:px-8 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader label="What I've Built" title="Featured Projects" />

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-bg-card border border-border rounded-xl self-start md:self-auto mb-10 md:mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-accent text-white shadow-glow-sm'
                  : 'text-ink-secondary hover:text-ink-primary hover:bg-white/5'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab('data-analytics')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'data-analytics'
                  ? 'bg-accent text-white shadow-glow-sm'
                  : 'text-ink-secondary hover:text-ink-primary hover:bg-white/5'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Data Analytics ({dataAnalyticsProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('full-stack')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'full-stack'
                  ? 'bg-accent text-white shadow-glow-sm'
                  : 'text-ink-secondary hover:text-ink-primary hover:bg-white/5'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Full-Stack ({fullStackProjects.length})
            </button>
          </div>
        </div>

        <div className="space-y-16">
          {/* Section 1: Data Analytics Projects */}
          {showDataAnalytics && (
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/80">
                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-ink-primary">
                    Data Analytics Projects
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Exploratory Data Analysis (EDA), Statistical Modeling, Web Scraping & Dashboards
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {dataAnalyticsProjects.map((p, idx) => (
                  <ProjectCard key={p.title} index={idx} {...p} />
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Full-Stack Development Projects */}
          {showFullStack && (
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/80">
                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-ink-primary">
                    Full-Stack Development Projects
                  </h3>
                  <p className="text-xs text-ink-muted">
                    End-to-End Web Applications, Cloud Platforms, REST APIs & Responsive UI
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {fullStackProjects.map((p, idx) => (
                  <ProjectCard key={p.title} index={idx} {...p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
