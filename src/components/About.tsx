import { motion } from 'framer-motion'
import { meta, skillGroups } from '../data/portfolioData'
import { SectionHeader } from './ui'
import { Code2, Database, Wrench, Settings, Briefcase } from 'lucide-react'

const groupIcons: Record<string, any> = {
  'Languages': Code2,
  'Databases': Database,
  'Dev Tools': Wrench,
  'OS / Others': Settings,
  'Productivity': Briefcase,
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="min-w-[72px] text-ink-muted font-medium shrink-0">{label}</span>
      <span className="text-ink-secondary break-all">{children}</span>
    </div>
  )
}

function SkillGroup({ label, tags, delay }: { label: string; tags: string[], delay: number }) {
  const Icon = groupIcons[label] || Code2;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="mb-6 bg-bg-card/50 border border-border p-4 rounded-xl"
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-accent-light" />
        <p className="text-xs font-bold tracking-widest uppercase text-ink-primary">
          {label}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs font-medium bg-black/5 dark:bg-white/5 border border-border text-ink-secondary py-1.5 px-3 rounded-lg hover:bg-black/10 hover:dark:bg-white/10 hover:text-ink-primary transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  return (
    <section id="about" className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-secondary/60 backdrop-blur-sm relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Who I am" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          {/* Bio + contact info */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              show: { transition: { staggerChildren: 0.15 } }
            }}
            className="space-y-6"
          >
            <motion.p variants={textVariants} className="text-ink-primary text-base sm:text-lg leading-relaxed font-medium">
              I'm an <span className="text-ink-primary font-semibold">MCA candidate at BPUT</span> with a deep passion for software engineering and application development. I enjoy crafting clean, performant web applications and backend systems that solve real-world problems.
            </motion.p>
            <motion.p variants={textVariants} className="text-ink-secondary text-sm sm:text-base leading-relaxed">
              My journey spans from a Physics background to full-stack development — giving me a unique analytical perspective when approaching engineering challenges. I thrive in environments where I can build scalable architectures and interactive user experiences.
            </motion.p>

            <motion.div variants={textVariants} className="pt-4 space-y-3 bg-bg-primary/50 border border-border p-5 rounded-2xl">
              <InfoRow label="Location">{meta.location}</InfoRow>
              <InfoRow label="Email">
                <a href={`mailto:${meta.email}`} className="text-accent-light hover:underline font-medium">
                  {meta.email}
                </a>
              </InfoRow>
              <InfoRow label="Phone">{meta.phone}</InfoRow>
              <InfoRow label="GitHub">
                <a href={meta.links.github} target="_blank" rel="noopener noreferrer" className="text-accent-light hover:underline font-medium">
                  github.com/Utkantha
                </a>
              </InfoRow>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-bold text-ink-primary mb-6 flex items-center gap-2"
            >
              Technical Arsenal
            </motion.p>
            {skillGroups.map((g, index) => (
              <SkillGroup key={g.label} label={g.label} tags={g.tags} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
