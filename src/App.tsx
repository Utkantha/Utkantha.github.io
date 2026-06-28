import './App.css'
import profileImage from './assets/profile_image.jfif'
import resumePdf from './assets/sutkanthapdr_resume.pdf'

/* ── Data ─────────────────────────────────────────────────── */

const skillGroups = [
  {
    label: 'Languages',
    tags: ['Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks & Libraries',
    tags: ['Flask', 'Keras', 'TensorFlow', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    label: 'ML / AI',
    tags: ['Deep Learning', 'CNN', 'LSTM', 'BiGRU', 'Self-Attention', 'Feature Engineering', 'Time Series', 'Regression', 'SVM'],
  },
  {
    label: 'Databases & Tools',
    tags: ['MySQL', 'MongoDB', 'Oracle DB', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
]

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Biju Pattnaik University of Technology (BPUT) · Rourkela, Odisha',
    period: 'Sep 2024 – Jul 2026',
    bullets: [
      'Focus on software development, data structures, algorithms, ML, and emerging tech.',
      'Building projects in deep learning, full-stack web development, and AI-powered applications.',
    ],
  },
  {
    degree: 'Bachelor of Education (B.Ed.)',
    institution: 'Dr. B.R. Ambedkar University · Etcherla, Andhra Pradesh',
    period: 'Sep 2022 – Aug 2024',
    bullets: [
      'Graduated with 8.3 CGPA.',
      'Strong competencies in analytical thinking, structured communication, and instructional design.',
    ],
  },
  {
    degree: 'Bachelor of Science (B.Sc.) – Physics & Physical Science',
    institution: 'Berhampur University · Berhampur, Odisha',
    period: 'Jul 2019 – Jul 2022',
    bullets: [
      'Graduated with 9.4 CGPA — secured First Position in the batch.',
      'Strong foundation in analytical problem-solving and quantitative reasoning.',
    ],
  },
]

const projects = [
  {
    icon: '⚡',
    title: 'Electricity Consumption Prediction',
    description:
      'End-to-end time series forecasting using a hybrid CNN-BiGRU-Self Attention deep learning architecture. Features MIC-based feature selection, MinMax normalisation, and a Flask REST API with admin-authenticated web interface for real-time predictions.',
    tags: ['Python', 'Keras', 'CNN', 'BiGRU', 'Flask', 'scikit-learn'],
    link: 'https://github.com/Utkantha',
  },
  {
    icon: '📚',
    title: 'EduLearn – E-Learning Platform',
    description:
      'Fully responsive e-learning web application built with HTML5, CSS3, and vanilla JavaScript. Deployed on Vercel with CI/CD via GitHub Actions. Mobile-first design with interactive UI/UX components.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Actions', 'Vercel'],
    link: 'https://github.com/Utkantha',
  },
  {
    icon: '🛒',
    title: 'Yamazone – E-Commerce Demo',
    description:
      'Full-stack e-commerce app inspired by Amazon. Python Flask backend with HTML/CSS/JS frontend. Features product catalog API, Add-to-Cart, Buy Now simulation, Quick View modal, and personalised recommendations.',
    tags: ['Python', 'Flask', 'HTML5', 'CSS3', 'JavaScript', 'REST API'],
    link: 'https://github.com/Utkantha',
  },
]

const certifications = [
  { icon: '🏆', name: 'SQL (Basic) Certificate', issuer: 'HackerRank' },
  { icon: '🏆', name: 'SQL (Intermediate) Certificate', issuer: 'HackerRank' },
  { icon: '🏆', name: 'Python (Basic) Certificate', issuer: 'HackerRank' },
]

/* ── Component ────────────────────────────────────────────── */

function App() {
  return (
    <div className="app">

      {/* ── Navbar ── */}
      <nav className="navbar">
        <a href="#hero" className="nav-logo">Utkantha.</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href={resumePdf} download="Utkantha_Resume.pdf" className="nav-resume-btn">
          ↓ Resume
        </a>
      </nav>

      {/* ── Hero ── */}
      <section id="hero" className="hero">
        <div className="hero-inner">

          {/* Left: text */}
          <div>
            <div className="hero-badge fade-up d1">
              <span className="dot" />
              Available for opportunities
            </div>

            <h1 className="hero-name fade-up d2">
              S Utkantha<br />
              <span className="gradient-text">Priyadarshini Reddy</span>
            </h1>

            <p className="hero-role fade-up d3">
              <strong>MCA Candidate</strong> · Full-Stack Developer & ML Engineer
            </p>

            <p className="hero-summary fade-up d4">
              Results-driven developer with hands-on experience in full-stack web development,
              machine learning, and deep learning. Passionate about building end-to-end
              AI-powered software solutions.
            </p>

            <div className="hero-cta fade-up d5">
              <a href="#projects" className="btn btn-primary">View Projects →</a>
              <a href={resumePdf} download="Utkantha_Resume.pdf" className="btn btn-outline">
                ↓ Download Resume
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="hero-photo-wrap fade-up d2">
            <img
              src={profileImage}
              alt="S Utkantha Priyadarshini Reddy"
              className="hero-photo"
            />
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="section about">
        <div className="container">
          <p className="section-label">Who I am</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />

          <div className="about-grid">
            {/* Left: bio + info */}
            <div className="about-text">
              <p>
                I'm an MCA candidate at BPUT with a deep passion for software engineering and
                artificial intelligence. I enjoy crafting clean, performant web applications
                and training ML models that solve real-world problems.
              </p>
              <p>
                My journey spans from a Physics background to full-stack development and deep
                learning — giving me a unique analytical perspective when approaching engineering
                challenges.
              </p>

              <div className="about-info">
                <div className="info-row">
                  <span className="info-label">Location</span>
                  <span className="info-value">Berhampur, Ganjam, Odisha, India</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Email</span>
                  <span className="info-value">
                    <a href="mailto:sutkanthapdreddy@gmail.com">sutkanthapdreddy@gmail.com</a>
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91-8917445015</span>
                </div>
                <div className="info-row">
                  <span className="info-label">GitHub</span>
                  <span className="info-value">
                    <a href="https://github.com/Utkantha" target="_blank" rel="noopener noreferrer">
                      github.com/Utkantha
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: skills */}
            <div>
              <p className="skills-section-title">Technical Skills</p>
              {skillGroups.map((group) => (
                <div className="skills-group" key={group.label}>
                  <p className="skills-group-label">{group.label}</p>
                  <div className="tags">
                    {group.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="section education">
        <div className="container">
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />

          <div className="edu-timeline">
            {education.map((edu) => (
              <div className="edu-card" key={edu.degree}>
                <div className="edu-header">
                  <span className="edu-degree">{edu.degree}</span>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <p className="edu-institution">{edu.institution}</p>
                <ul className="edu-bullets">
                  {edu.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="section projects">
        <div className="container">
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />

          <div className="projects-grid">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                className="project-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-top">
                  <span className="project-icon">{p.icon}</span>
                  <span className="project-link-icon">↗</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" className="section certifications">
        <div className="container">
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider" />

          <div className="cert-grid">
            {certifications.map((c) => (
              <div className="cert-card" key={c.name}>
                <div className="cert-badge">{c.icon}</div>
                <div>
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-issuer">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="contact-inner">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's Work Together</h2>
            <div className="section-divider" style={{ margin: '1rem auto 2rem' }} />
            <p>
              I'm currently open to software engineering and data science opportunities.
              Whether you have a project, a role, or just want to say hello — feel free to reach out!
            </p>
            <a href="mailto:sutkanthapdreddy@gmail.com" className="contact-email">
              sutkanthapdreddy@gmail.com
            </a>

            <div className="contact-cta">
              <a href="mailto:sutkanthapdreddy@gmail.com" className="btn btn-primary">
                ✉️ Send a Message
              </a>
              <a href={resumePdf} download="Utkantha_Resume.pdf" className="btn btn-outline">
                ↓ Download Resume
              </a>
            </div>

            <div className="social-row">
              <a href="https://github.com/Utkantha" target="_blank" rel="noopener noreferrer" className="social-chip">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/Utkantha" target="_blank" rel="noopener noreferrer" className="social-chip">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://leetcode.com/Utkantha" target="_blank" rel="noopener noreferrer" className="social-chip">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        Designed & built by{' '}
        <a href="https://github.com/Utkantha" target="_blank" rel="noopener noreferrer">
          S Utkantha Priyadarshini Reddy
        </a>{' '}
        · {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
