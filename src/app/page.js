import ThemeToggle from "./theme-toggle";

const projects = [
  {
    number: "01",
    name: "PaperPilot",
    type: "Research discovery workspace",
    description:
      "A research workspace for discovering academic papers, organizing a personal library, and keeping reading notes together.",
    details: [
      "Search scholarly works through the OpenAlex catalog",
      "Save papers, collections, reading status, tags, and private notes with Supabase",
      "Review phrase-based research-gap and future-work clues from abstracts or PDFs",
    ],
    technologies: ["React", "Vite", "JavaScript", "Supabase", "OpenAlex API"],
    live: "https://paper-pilot-kappa.vercel.app",
    repository: "https://github.com/ChowdhuryShakilHasan/PaperPilot",
  },
  {
    number: "02",
    name: "EasyShop",
    type: "E-commerce admin dashboard",
    description:
      "A responsive dashboard for products, orders, customers, staff, inventory, and business analytics.",
    details: [
      "Product search, filtering, pagination, and stock management",
      "Role-based Admin and Staff access",
      "Analytics, reports, and CSV export",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Redux Toolkit", "RTK Query", "Zod"],
    live: "https://easy-shop-beta-taupe.vercel.app",
    repository: "https://github.com/ChowdhuryShakilHasan/EasyShop",
  },
  {
    number: "03",
    name: "Product Management System",
    type: "Role-based marketplace",
    description:
      "A marketplace with separate seller and customer experiences, Firebase authentication, and cloud-backed product and order data.",
    details: [
      "Seller and customer dashboards with role-based access",
      "Firebase Authentication and Cloud Firestore",
      "Seller sales visualisation and responsive layouts",
    ],
    technologies: ["Next.js", "Firebase", "Cloud Firestore", "Redux Toolkit", "Recharts"],
    live: "https://product-management-system-gamma-three.vercel.app",
    repository: "https://github.com/ChowdhuryShakilHasan/product-management-system",
  },
];

const experienceHighlights = [
  "Completed three end-to-end web application projects and delivered them through GitHub and Vercel.",
  "Built responsive applications with React, Next.js, TypeScript, and Tailwind CSS.",
  "Worked with Redux Toolkit, RTK Query, React Hook Form, and Zod across application workflows.",
  "Collaborated through Git-based development, code review, QA fixes, reusable components, and debugging.",
];

const publications = [
  {
    number: "01",
    title: "Risk-Aware Drone Routing with Stochastic Wind Fields",
    venue: "ICCIT 2025 · Published",
    date: "DEC 2025",
    description:
      "Co-authored research on a hybrid ACO–PSO–NN approach to UAV path planning under stochastic wind conditions, evaluated through simulation.",
  },
  {
    number: "02",
    title: "Vertical Wind-Profile Driven 3D UAV Routing",
    venue: "QPAIN 2026 · Published",
    date: "APR 2026",
    description:
      "Co-authored research into altitude-dependent wind modelling and CVaR-based risk optimisation for three-dimensional UAV routing.",
  },
];

const skillGroups = [
  { label: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"] },
  { label: "Backend", skills: ["Java", "Spring Boot", "Spring Security", "REST APIs", "JWT"] },
  { label: "Data & tools", skills: ["MySQL", "Firebase", "Firestore", "Git", "Vercel"] },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <nav className="navbar shell" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="Shakil Hasan, home">
            SH<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-tools">
            <ThemeToggle />
            <a className="nav-cv" href="/chowdhury-shakil-hasan-cv.pdf" target="_blank" rel="noreferrer">
              View CV <Arrow />
            </a>
          </div>
        </nav>
      </header>

      <section className="hero shell" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> SOFTWARE DEVELOPER · DHAKA, BANGLADESH</p>
          <h1 id="hero-title">Chowdhury<br />Shakil <span>Hasan.</span></h1>
          <p className="hero-summary">
            Computer science and engineering, focused on information systems.
            I build thoughtful web applications and explore intelligent systems.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">Explore selected work <Arrow /></a>
            <a className="text-link" href="mailto:chowdhuryshakilhasan@gmail.com">Get in touch <Arrow /></a>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Portfolio overview">
          <div className="aside-stamp" aria-hidden="true">SH</div>
          <p className="aside-kicker">A QUICK INTRODUCTION</p>
          <dl className="profile-facts">
            <div><dt>Focus</dt><dd>Full-stack web development</dd></div>
            <div><dt>Study</dt><dd>Computer Science & Engineering</dd></div>
            <div><dt>Major</dt><dd>Information Systems</dd></div>
            <div><dt>Based in</dt><dd>Dhaka, Bangladesh</dd></div>
          </dl>
          <div className="aside-bottom"><span>PORTFOLIO</span><span>2026&nbsp; / &nbsp;01</span></div>
        </aside>
        <div className="hero-index" aria-hidden="true"><span>SCROLL TO EXPLORE</span><span>↓</span></div>
      </section>

      <section className="experience section-band" id="experience" aria-labelledby="experience-title">
        <div className="shell section-layout">
          <div className="section-rail">
            <p className="eyebrow">01 / EXPERIENCE</p>
            <span className="rail-line" aria-hidden="true" />
          </div>
          <div className="section-content">
            <div className="section-heading">
              <h2 id="experience-title">Learning by<br />building <span>in teams.</span></h2>
              <p>Industry experience, practical delivery, and the small decisions that make software work well.</p>
            </div>
            <article className="experience-card">
              <div className="experience-meta">
                <span>JULY — AUGUST 2026</span>
                <span className="experience-dot" aria-hidden="true" />
              </div>
              <div className="experience-main">
                <h3>Software Developer Intern</h3>
                <p className="company">SweetiTech Limited <span>·</span> Development Team</p>
                <ul className="highlight-list">
                  {experienceHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
              <p className="experience-location">MOHAMMADPUR, DHAKA<br />BANGLADESH</p>
            </article>
          </div>
        </div>
      </section>

      <section className="projects section-band" id="projects" aria-labelledby="projects-title">
        <div className="shell section-layout">
          <div className="section-rail">
            <p className="eyebrow">02 / SELECTED WORK</p>
            <span className="rail-line" aria-hidden="true" />
          </div>
          <div className="section-content">
            <div className="section-heading">
              <h2 id="projects-title">A few things<br />I’ve <span>put to work.</span></h2>
              <p>Product-focused web applications, shaped through hands-on development.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-header">
                    <span className="project-number">{project.number}</span>
                    <span className="project-type">{project.type}</span>
                    <a className="project-open" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live demo`}><Arrow /></a>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-details">
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                  <div className="project-footer">
                    <ul className="tags" aria-label={`${project.name} technologies`}>
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <a className="repository-link" href={project.repository} target="_blank" rel="noreferrer">
                      Source on GitHub <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about section-band" id="about" aria-labelledby="about-title">
        <div className="shell section-layout">
          <div className="section-rail">
            <p className="eyebrow">03 / PROFILE</p>
            <span className="rail-line" aria-hidden="true" />
          </div>
          <div className="section-content about-grid">
            <div>
              <div className="section-heading about-heading">
                <h2 id="about-title">Curious about<br /><span>how systems fit.</span></h2>
              </div>
              <p className="about-copy">
                I studied Computer Science & Engineering at American International University–Bangladesh,
                majoring in Information Systems. I enjoy working across the product
                journey—from responsive interfaces and application state to APIs,
                data, and the details that make a feature dependable.
              </p>
              <div className="education-note">
                <span className="education-symbol" aria-hidden="true">+</span>
                <div><p>EDUCATION</p><h3>B.Sc. in Computer Science & Engineering</h3><span>Information Systems · CGPA 3.19 / 4.00</span><span>American International University–Bangladesh</span></div>
              </div>
            </div>
            <div className="skills-panel">
              <p className="eyebrow">TOOLS I’VE WORKED WITH</p>
              {skillGroups.map((group, index) => (
                <div className="skill-group" key={group.label}>
                  <span className="skill-index">0{index + 1}</span>
                  <div><h3>{group.label}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="research section-band" id="research" aria-labelledby="research-title">
        <div className="shell section-layout">
          <div className="section-rail">
            <p className="eyebrow">04 / RESEARCH</p>
            <span className="rail-line" aria-hidden="true" />
          </div>
          <div className="section-content">
            <div className="section-heading">
              <h2 id="research-title">Research with<br /><span>a sense of direction.</span></h2>
              <p>Co-authored conference papers on UAV routing, wind modelling, and risk-aware planning.</p>
            </div>
            <div className="publication-list">
              {publications.map((paper) => (
                <article className="publication" key={paper.number}>
                  <span className="publication-number">{paper.number}</span>
                  <div className="publication-main">
                    <p className="publication-venue">{paper.venue}</p>
                    <h3>{paper.title}</h3>
                    <p>{paper.description}</p>
                  </div>
                  <time>{paper.date}</time>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact" aria-labelledby="contact-title">
        <div className="contact-stamp" aria-hidden="true">LET’S<br />TALK</div>
        <p className="eyebrow">05 / CONTACT</p>
        <h2 id="contact-title">Have something<br />good to <span>build?</span></h2>
        <p className="contact-copy">I’m always glad to connect about software, product ideas, and meaningful engineering work.</p>
        <div className="contact-links">
          <a href="mailto:chowdhuryshakilhasan@gmail.com">Email <Arrow /></a>
          <a href="https://www.linkedin.com/in/chowdhury-shakil-hasan/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://github.com/ChowdhuryShakilHasan" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="/chowdhury-shakil-hasan-cv.pdf" target="_blank" rel="noreferrer">Download CV <Arrow /></a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="wordmark" href="#home" aria-label="Back to top">SH<span>.</span></a>
        <p>Thoughtful work, built with care.</p>
        <span>© {new Date().getFullYear()} CHOWDHURY SHAKIL HASAN</span>
      </footer>
    </main>
  );
}

