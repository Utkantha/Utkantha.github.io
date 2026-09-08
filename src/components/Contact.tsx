import { meta } from '../data/portfolioData'
import resumePdf from '../assets/sutkanthapdreddy_resume.pdf'
import { SectionHeader, Button } from './ui'

function SocialChip({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card text-ink-secondary text-sm font-medium hover:border-accent/35 hover:text-ink-primary hover:bg-accent/8 transition-all hover:-translate-y-0.5"
    >
      {children}
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Get In Touch" title="Let's Work Together" />

        <div className="max-w-xl">
          <p className="text-ink-secondary text-sm leading-relaxed mb-6">
            I'm currently open to software engineering and data science opportunities.
            Whether you have a project, a role, or just want to say hello — feel free to reach out!
          </p>

          <a
            href={`mailto:${meta.email}`}
            className="text-accent-light text-sm font-medium border-b border-dashed border-accent/40 pb-px hover:text-ink-primary hover:border-ink-primary transition-colors break-all"
          >
            {meta.email}
          </a>

          {/* CTA buttons — stack on mobile */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
            <Button href={`mailto:${meta.email}`}>✉️ Send a Message</Button>
            <Button href={resumePdf} variant="outline" download="Utkantha_Resume.pdf">
              ↓ Download Resume
            </Button>
          </div>

          {/* Social links — wrap on mobile */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            <SocialChip href={meta.links.github}>
              <GithubIcon /> GitHub
            </SocialChip>
            <SocialChip href={meta.links.linkedin}>
              <LinkedinIcon /> LinkedIn
            </SocialChip>
            <SocialChip href={meta.links.leetcode}>
              <LeetcodeIcon /> LeetCode
            </SocialChip>
          </div>
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function LeetcodeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  )
}
