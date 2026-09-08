// Reusable UI primitives — Badge, SectionHeader, Tag, Button

import type { ReactNode } from 'react'

/* ── Badge ──────────────────────────────────────────────────── */
interface BadgeProps { children: ReactNode }

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/8 text-accent-light text-xs font-semibold tracking-wider uppercase">
      {children}
    </span>
  )
}

import { motion } from 'framer-motion'

/* ── SectionHeader ──────────────────────────────────────────── */
interface SectionHeaderProps {
  label: string
  title: string
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="text-accent-light text-xs font-semibold tracking-widest uppercase mb-1.5">
        {label}
      </p>
      <h2 className="text-gradient text-3xl sm:text-4xl font-extrabold tracking-tight">
        {title}
      </h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-3 h-0.5 bg-gradient-accent rounded-full" 
      />
    </motion.div>
  )
}

/* ── Tag ────────────────────────────────────────────────────── */
interface TagProps { children: ReactNode; small?: boolean }

export function Tag({ children, small }: TagProps) {
  return (
    <span
      className={`inline-block font-mono rounded-full border border-border bg-accent/8 text-ink-muted
        transition-colors hover:border-accent/40 hover:bg-accent/15
        ${small ? 'px-2 py-0.5 text-[0.68rem]' : 'px-3 py-1 text-xs'}`}
    >
      {children}
    </span>
  )
}

/* ── Button ─────────────────────────────────────────────────── */
interface ButtonProps {
  href: string
  variant?: 'primary' | 'outline'
  download?: string
  children: ReactNode
  external?: boolean
}

export function Button({ href, variant = 'primary', download, children, external }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200'
  const styles = {
    primary: 'bg-gradient-accent text-white shadow-glow-sm hover:-translate-y-0.5 hover:shadow-glow', // keep text-white since it's a solid gradient button
    outline: 'border border-accent/40 text-ink-primary hover:bg-accent/8 hover:border-accent-light hover:-translate-y-0.5',
  }

  return (
    <a
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </a>
  )
}
