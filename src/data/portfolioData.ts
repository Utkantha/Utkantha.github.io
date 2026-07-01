// ─────────────────────────────────────────────────────────────
// portfolioData.ts
//
// Thin typed wrapper around src/config/portfolio.json.
// All content lives in the JSON file — edit that to update
// anything on the portfolio. This file only adds TypeScript
// types so components get full autocomplete and safety.
// ─────────────────────────────────────────────────────────────

import config from '../config/portfolio.json'

// ── Types ──────────────────────────────────────────────────────

export interface Meta {
  name: string
  shortName: string
  role: string
  tagline: string
  location: string
  email: string
  phone: string
  links: {
    github: string
    linkedin: string
    leetcode: string
  }
}

export interface NavLink {
  label: string
  href: string
}

export interface SkillGroup {
  label: string
  tags: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  bullets: string[]
}

export interface Project {
  emoji: string
  image?: string
  title: string
  description: string
  tags: string[]
  link: string
}

export interface Certification {
  name: string
  issuer: string
  link?: string
}

// ── Typed exports (sourced entirely from portfolio.json) ────────

export const meta           = config.meta           as Meta
export const navLinks       = config.navLinks        as NavLink[]
export const skillGroups    = config.skillGroups     as SkillGroup[]
export const education      = config.education       as Education[]
export const projects       = config.projects        as Project[]
export const certifications = config.certifications  as Certification[]
