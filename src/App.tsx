import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

/**
 * Content is intentionally collected here so the portfolio can be updated
 * without hunting through the page markup. Replace placeholder links and
 * numbers with confirmed values before publishing.
 */
const site = {
  name: "MUZAWIL",
  email: "muzawir680@gmail.com",
  whatsapp: "https://wa.me/60175877850",
  linkedin: "https://www.linkedin.com/in/muzawil",
  instagram: "https://www.instagram.com/dawilz_",
  facebook: "https://www.facebook.com/share/1KAr5V92jW/?mibextid=wwXIfr",
  portrait: "/assets/muzawil-profile.jpg",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
];

const skills = [
  {
    title: "Digital Marketing",
    description:
      "Campaign planning, promotion strategy and customer acquisition.",
  },
  {
    title: "Meta Ads",
    description:
      "Facebook & Instagram advertising, creative testing, retargeting and campaign optimization.",
  },
  {
    title: "TikTok Marketing",
    description: "TikTok Ads, organic content strategy and audience growth.",
  },
  {
    title: "Social Media Management",
    description:
      "Managing TikTok, Instagram and Facebook for retail businesses.",
  },
  {
    title: "Website Development",
    description:
      "Building modern business websites using AI, no-code and low-code tools.",
  },
  {
    title: "Creative Design",
    description:
      "Posters, promotional visuals, social media content and branding direction.",
  },
  {
    title: "AI & Automation",
    description:
      "Using AI tools and automation to improve marketing workflows, content creation, research, productivity and business processes.",
  },
  {
    title: "AI-Assisted Research & Productivity",
    description:
      "Using AI to support research, planning, content development, idea generation and more efficient digital workflows.",
  },
];

const projects = [
  {
    number: "01",
    category: "Website / Retail",
    title: "PSP Southern Website",
    description:
      "Modern smartphone retail website created to make it easier for customers to explore product categories, store information and contact the business through WhatsApp.",
    role: "Digital Marketing / Website Planning / UI Direction",
    tags: [
      "Website Planning",
      "UI Direction",
      "Mobile Responsive",
      "WhatsApp Integration",
      "AI-Assisted Web Build",
    ],
    link: "https://pspsouthern.bolt.host",
  },
  {
    number: "02",
    category: "Performance Marketing",
    title: "PSP Group Digital Marketing",
    description:
      "Managed digital marketing activity across multiple smartphone retail outlets including paid advertising, content planning, promotions and campaign performance monitoring.",
    role: "Multi-outlet Marketing Management",
    tags: [
      "Meta Ads",
      "TikTok Ads",
      "Campaign Strategy",
      "Performance Monitoring",
    ],
    visual: "visual-digital",
  },
  {
    number: "03",
    category: "Social Media",
    title: "Campaign & Content",
    description:
      "Promotional campaigns, seasonal content, product videos and lead generation across TikTok, Instagram and Facebook.",
    role: "Instagram · Facebook · TikTok",
    tags: [
      "Content Planning",
      "Promo Campaign",
      "Lead Generation",
      "Social Media",
    ],
    visual: "visual-campaign",
  },
];

const tools = [
  "Meta Ads Manager",
  "TikTok Ads Manager",
  "Canva",
  "CapCut",
  "ChatGPT",
  "Replit",
  "Bolt",
  "Google Analytics",
  "Google Sheets",
  "Looker Studio",
  "Make.com",
];

const experience = {
  role: "Digital Marketing / Marketing Leader",
  industry: "Smartphone Retail Industry",
  description:
    "Responsible for digital strategy, social media, paid advertising, promotions, AI-assisted workflows, website planning and campaign performance monitoring..",
  responsibilities: [
    "Manage multiple social media accounts",
    "Create monthly marketing strategy",
    "Plan advertising campaigns",
    "Monitor campaign performance",
    "Coordinate content team",
    "Develop promotions",
    "Track leads and sales performance",
    "Website and campaign planning",
    "Use AI & automation to support marketing workflows",
  ],
};

const selectedNumbers = [
  { value: "10K+", label: "Social Media Followers" },
  { value: "3+", label: "Brands / Companies Managed" },
  { value: "7+", label: "Retail Locations" },
  { value: "100+", label: "Marketing Creatives & Campaigns" },
];

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a
      className="brand"
      href="#top"
      onClick={onClick}
      aria-label="MUZAWIL home"
      data-testid="link-brand-home"
    >
      <span className="brand-mark" aria-hidden="true" />
      <span>{site.name}</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portraitMissing, setPortraitMissing] = useState(false);

  useEffect(() => {
    document.title = "MUZAWIL — Digital Marketer & Creative";
    const description =
      "MUZAWIL is a digital marketer, social media manager, and web & creative partner for brands that want to communicate clearly.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    const openGraph = [
      ["og:title", document.title],
      ["og:description", description],
      ["og:type", "website"],
    ];
    openGraph.forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio" id="top">
      <header className="site-nav">
        <div className="container">
          <div className="nav-inner">
            <Brand onClick={closeMenu} />
            <nav className="desktop-links" aria-label="Primary navigation">
              {navItems.map((item) => (
                <a
                  className="nav-link"
                  href={item.href}
                  key={item.href}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="nav-talk" href="#contact" data-testid="link-nav-talk">
              Let&apos;s Talk{" "}
              <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              data-testid="button-menu-toggle"
            >
              {menuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
          {menuOpen && (
            <nav className="mobile-menu" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  className="mobile-link"
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mobile-link"
                href="#contact"
                onClick={closeMenu}
                data-testid="link-mobile-talk"
              >
                Let&apos;s Talk <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </nav>
          )}
        </div>
      </header>

      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-grid">
            <Reveal className="hero-copy">
              <p className="eyebrow" data-testid="text-hero-eyebrow">
                MUZAWIL — PORTFOLIO 2026
              </p>
              <h1
                className="display hero-title"
                id="hero-title"
                data-testid="text-hero-title"
              >
                <span>DIGITAL</span>
                <span className="outline-word">MARKETER</span>
                <span>AI &amp; CREATIVE</span>
              </h1>
              <p className="hero-intro" data-testid="text-hero-intro">
                I help businesses grow through digital marketing, AI-powered
                workflows, paid advertising, content strategy, social media,
                automation, and modern websites.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="#work"
                  data-testid="link-hero-work"
                >
                  View My Work <ArrowDownRight size={16} aria-hidden="true" />
                </a>
                <a
                  className="button button-quiet"
                  href="#contact"
                  data-testid="link-hero-contact"
                >
                  Contact Me <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
              <p className="hero-note">
                Digital Marketer
                <span aria-hidden="true"> · </span>
                AI &amp; Automation
                <span aria-hidden="true"> · </span>
                Web &amp; Creative
              </p>
            </Reveal>

            <Reveal className="portrait-wrap">
              <div className="portrait-stamp" aria-hidden="true">
                Here to
                <br />
                make it
                <br />
                clear
              </div>
              <div className="portrait-frame">
                {portraitMissing ? (
                  <div
                    className="portrait-fallback"
                    aria-label="Portrait placeholder for Muzawil"
                  >
                    <span>MU</span>
                  </div>
                ) : (
                  <img
                    className="portrait-image"
                    src={site.portrait}
                    alt="Portrait of Muzawil, digital marketer and creative"
                    onError={() => setPortraitMissing(true)}
                    data-testid="img-muzawil-portrait"
                  />
                )}
              </div>
              <div className="portrait-index" aria-hidden="true">
                01 / 01
              </div>
            </Reveal>
          </div>
        </section>

        <div
          className="marquee"
          aria-label="Digital marketing, AI, automation, content, web and creative"
        >
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-line" key={copy} aria-hidden={copy === 1}>
                <span>META ADS</span>
                <i />
                <span>TIKTOK ADS</span>
                <i />
                <span>CONTENT STRATEGY</span>
                <i />
                <span>SOCIAL MEDIA</span>
                <i />
                <span>AI &amp; AUTOMATION</span>
                <i />
                <span>AI TOOLS &amp; WORKFLOW</span>
                <i />
                <span>WEBSITE DEVELOPMENT</span>
                <i />
                <span>CREATIVE DESIGN</span>
                <i />
                <span>ANALYTICS</span>
                <i />
              </div>
            ))}
          </div>
        </div>

        <section
          className="section container"
          id="about"
          aria-labelledby="about-title"
        >
          <Reveal>
            <div className="section-header">
              <p className="section-kicker">01 / About</p>
              <h2 className="display section-title" id="about-title">
                I build marketing systems that look good — and work.
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="about-layout">
              <div className="about-aside">
                <p>
                  Digital work should earn attention, then turn that attention
                  into action.
                </p>
                <p className="micro-label">
                  Strategy
                  <br />
                  Paid ads
                  <br />
                  AI &amp; Automation
                  <br />
                  Content
                  <br />
                  Web
                </p>
              </div>
              <p className="about-copy">
                Saya seorang Digital Marketer yang mempunyai pengalaman mengurus
                pemasaran untuk beberapa bisnes retail smartphone. Fokus saya
                ialah menggabungkan{" "}
                <strong>
                  strategy, paid ads, AI-powered workflows, automation, content,
                  website dan analytics
                </strong>{" "}
                untuk membantu bisnes mendapatkan lebih banyak attention,
                traffic, leads dan sales.
              </p>
            </div>
            <div className="about-pills" aria-label="Core skills">
              {[
                "Meta Ads",
                "TikTok Ads",
                "Social Media",
                "Web",
                "Creative",
                "Analytics",
              ].map((pill) => (
                <span className="tag light-tag" key={pill}>
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          className="section container"
          id="skills"
          aria-labelledby="skills-title"
        >
          <Reveal>
            <div className="section-header">
              <p className="section-kicker">02 / Skills</p>
              <h2 className="display section-title" id="skills-title">
                What I Do
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="skills-layout">
              <p className="skills-intro">
                I combine strategic thinking with hands-on execution, from
                campaign planning to the final creative.
              </p>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div
                    className="skill-row"
                    key={skill.title}
                    data-testid={`row-skill-${index}`}
                  >
                    <span className="skill-number">0{index + 1}</span>
                    <div>
                      <span className="skill-name">{skill.title}</span>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                    <span className="skill-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section
          className="section projects-section"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="container">
            <Reveal>
              <div className="section-header">
                <p className="section-kicker">03 / Selected projects</p>
                <h2 className="display section-title" id="work-title">
                  A few things I&apos;ve made.
                </h2>
              </div>
            </Reveal>
            <div className="project-list">
              {projects.map((project) => (
                <Reveal key={project.number}>
                  <article
                    className="project-item"
                    data-testid={`card-project-${project.number}`}
                  >
                    <span className="project-index">{project.number}</span>
                    <div className="project-copy">
                      <p className="project-category">{project.category}</p>
                      <h3 className="project-name">{project.title}</h3>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <p className="project-role">{project.role}</p>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          View Live Website
                        </a>
                      )}
                    </div>
                    <div
                      className={`project-visual ${project.visual}`}
                      aria-label={`${project.title} visual treatment`}
                    >
                      {project.number === "01" && (
                        <>
                          <div className="motion-frame"></div>
                          <div className="motion-orange"></div>
                          <div className="motion-lime"></div>
                          <div className="motion-line"></div>
                          <div className="motion-diamond"></div>
                          <div className="motion-dot"></div>
                        </>
                      )}

                      {project.number === "02" && (
                        <div className="graph-visual">
                          <div className="graph-grid"></div>

                          <div className="graph-bars">
                            <span className="graph-bar bar-1"></span>
                            <span className="graph-bar bar-2"></span>
                            <span className="graph-bar bar-3"></span>
                            <span className="graph-bar bar-4"></span>
                            <span className="graph-bar bar-5"></span>
                            <span className="graph-bar bar-6"></span>
                          </div>

                          <svg
                            className="graph-line-svg"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                          >
                            <path
                              className="graph-line-path"
                              d="M8 82 C18 74,24 70,32 66 S48 54,56 48 S72 34,92 18"
                            />
                          </svg>
                        </div>
                      )}

                      {project.number === "03" && (
                        <div className="social-visual">
                          <div className="social-orbit">
                            <span className="social-orbit-dot social-dot-1"></span>
                            <span className="social-orbit-dot social-dot-2"></span>
                            <span className="social-orbit-dot social-dot-3"></span>
                          </div>

                          <div className="social-center">
                            <div>
                              <strong>
                                SOCIAL
                                <br />
                                MEDIA
                              </strong>

                              <span>CONTENT / CAMPAIGN</span>
                            </div>
                          </div>

                          <div className="social-node social-node-1">IG</div>

                          <div className="social-node social-node-2">FB</div>

                          <div className="social-node social-node-3">TT</div>

                          <div className="social-node social-node-4">ADS</div>

                          <div className="social-chip social-chip-1">
                            CONTENT
                          </div>

                          <div className="social-chip social-chip-2">
                            CAMPAIGN
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section tools-band container"
          aria-labelledby="tools-title"
        >
          <Reveal>
            <div className="tools-layout">
              <div className="tools-heading">
                <p className="section-kicker" id="tools-title">
                  04 / Tools
                </p>
                <h2 className="display section-title tools-title">
                  Tools I Use
                </h2>
              </div>
              <div className="tools-cloud" data-testid="list-tools">
                {tools.map((tool) => (
                  <span className="tool" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section
          className="section container"
          id="experience"
          aria-labelledby="experience-title"
        >
          <Reveal>
            <div className="section-header">
              <p className="section-kicker">05 / Experience</p>
              <h2 className="display section-title" id="experience-title">
                Experience
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="experience-layout">
              <div className="experience-note">
                <p className="experience-role">{experience.role}</p>
                <p>{experience.industry}</p>
                <p>{experience.description}</p>
              </div>
              <div className="timeline">
                <p className="timeline-heading">Responsibilities</p>
                {experience.responsibilities.map((responsibility, index) => (
                  <div
                    className="timeline-item"
                    key={responsibility}
                    data-testid={`row-experience-${index}`}
                  >
                    <span className="timeline-date">0{index + 1}</span>
                    <div>
                      <p className="timeline-role">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section
          className="section numbers-section container"
          aria-labelledby="numbers-title"
        >
          <Reveal>
            <div className="numbers-heading">
              <p className="section-kicker" id="numbers-title">
                06 / Results
              </p>
              <p className="numbers-note">
                Figures shown should only be used if they accurately reflect
                real experience.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="numbers-grid" data-testid="list-selected-numbers">
              {selectedNumbers.map((item) => (
                <div className="number-item" key={item.value}>
                  <p className="number-value">{item.value}</p>
                  <p className="number-label">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container">
            <Reveal>
              <div className="contact-layout">
                <p className="section-kicker">07 / Contact</p>
                <div>
                  <h2 className="display contact-title" id="contact-title">
                    LET&apos;S BUILD
                    <br />
                    SOMETHING
                    <br />
                    GOOD.
                  </h2>
                  <p className="contact-copy">
                    Have a project or business you want to grow? Let&apos;s talk
                    about marketing, content, paid ads or a new website.
                  </p>
                  <div className="contact-buttons">
                    <a
                      className="contact-link"
                      href={`mailto:${site.email}`}
                      data-testid="link-contact-email"
                    >
                      Email <ArrowUpRight size={20} aria-hidden="true" />
                    </a>
                    <a
                      className="contact-link"
                      href={site.whatsapp}
                      data-testid="link-contact-whatsapp"
                    >
                      WhatsApp <ArrowUpRight size={20} aria-hidden="true" />
                    </a>
                    <a
                      className="contact-link"
                      href={site.linkedin}
                      data-testid="link-contact-linkedin"
                    >
                      LinkedIn <ArrowUpRight size={20} aria-hidden="true" />
                    </a>
                    <a
                      className="contact-link"
                      href={site.instagram}
                      data-testid="link-contact-instagram"
                    >
                      Instagram <ArrowUpRight size={20} aria-hidden="true" />
                    </a>
                    <a
                      className="contact-link"
                      href={site.facebook}
                      data-testid="link-contact-facebook"
                    >
                      Facebook <ArrowUpRight size={20} aria-hidden="true" />
                    </a>
                  </div>
                  <div className="contact-meta">
                    <span>
                      Replace the placeholder links above with your real contact
                      details.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Brand />
          <span className="footer-copy">
            © 2026 Muzawil — Digital Marketer &amp; Creative Technologist.
          </span>
          <a className="footer-top" href="#top" data-testid="link-back-to-top">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
