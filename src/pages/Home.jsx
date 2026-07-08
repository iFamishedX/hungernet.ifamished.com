import { GlassCard, GlassButton, usePageTitle, Icon, StatPill } from "ifamished-ui"

const highlights = [
  {
    icon: "server",
    title: "High‑Performance Hosting",
    desc: "Fast, reliable infrastructure for Minecraft servers, web apps, and custom projects — optimized for low latency and high uptime.",
  },
  {
    icon: "layers",
    title: "Unified Project Hub",
    desc: "All HungerNet projects — OptiFine for Fabric, Raven Client, New Moon, Hunger SMP, and more — managed in one ecosystem.",
  },
  {
    icon: "shield",
    title: "Secure by Default",
    desc: "Automatic HTTPS, Cloudflare protection, hardened configs, and safe deployment pipelines across every service.",
  },
  {
    icon: "tool",
    title: "Developer‑Focused",
    desc: "Built for creators and engineers — clean APIs, modular systems, and tools designed for rapid iteration.",
  },
]

const techTags = ["Infrastructure", "Hosting", "Projects", "Open-Source", "Security"]

const stats = [
  { value: "Developer", label: "Oriented" },
  { value: "8+", label: "Active Projects" },
  { value: "100%", label: "Open‑Source" },
]

export default function Home() {
  usePageTitle("HungerNet")

  return (
    <div className="page">
      {/* Hero */}
      <section className="section">
        <GlassCard variant="hero" className="hero fade-in-up">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Project & Hosting Network
          </div>

          <h1 className="hero-name">
            <span className="gradient-text">HungerNet</span>
          </h1>

          <p className="hero-subtitle">
            A unified ecosystem powering developers, modders, websites-designers, and creators.
          </p>

          <div
            className="tech-tag-list"
            style={{ justifyContent: "center", marginBottom: "var(--space-4)" }}
          >
            {techTags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <GlassButton to="/tools" variant="primary">
              <Icon name="tool" size={16} />
              View Tools
            </GlassButton>
          </div>

          <div className="stat-pills">
            {stats.map((s) => (
              <StatPill key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="section-header">
          <div className="section-label">What HungerNet provides</div>
          <h2>Your ecosystem for servers, tools, and development.</h2>
          <p>
            HungerNet powers everything from Minecraft infrastructure to web apps and modding tools.
            A single platform for tools, guides, and project management.
          </p>
        </div>

        <div className="overview-grid stagger">
          {highlights.map(({ icon, title, desc }, i) => (
            <GlassCard key={title} className="overview-card" style={{ "--i": i }}>
              <div className="icon-badge">
                <Icon name={icon} size={22} strokeWidth={1.75} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section fade-in-up">
        <h2>Explore the ecosystem</h2>
        <p>Browse projects, use tools, or dive into the docs to learn more.</p>

        <div className="cta-actions">
          <GlassButton to="/tools" variant="primary">
            <Icon name="tool" size={16} />
            Tools
          </GlassButton>
        </div>
      </div>
    </div>
  )
}
