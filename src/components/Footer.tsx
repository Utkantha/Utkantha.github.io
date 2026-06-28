import { meta } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/[0.05] py-5 px-5 sm:px-8 text-center text-xs text-ink-muted">
      Designed & built by{' '}
      <a
        href={meta.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-light hover:underline"
      >
        {meta.name}
      </a>
      {' · '}
      {new Date().getFullYear()}
    </footer>
  )
}
