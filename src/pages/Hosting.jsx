import { GlassCard, GlassButton, usePageTitle, Icon } from "ifamished-ui"

const hostingFeatures = [
  {
    icon: "zap",
    title: "Insane Performance",
    desc: "SparkedHost uses top‑tier hardware with blazing‑fast CPUs and NVMe storage. Your server launches instantly and runs smoothly even under heavy load.",
  },
  {
    icon: "clock",
    title: "Instant Setup",
    desc: "Pay → Provision → Play. Your Minecraft server is online in under 5 minutes with zero hassle.",
  },
  {
    icon: "shield",
    title: "Reliable & Secure",
    desc: "DDoS protection, automatic backups, and a modern control panel keep your server safe and stable.",
  },
  {
    icon: "cpu",
    title: "Modded or Vanilla",
    desc: "Run Fabric, Forge, Paper, Purpur, Folia, or any modpack with one‑click installers and optimized performance.",
  },
  {
    icon: "users",
    title: "Perfect for Communities",
    desc: "Whether you're hosting a small SMP or a large public server, SparkedHost scales effortlessly.",
  },
  {
    icon: "dollarSign",
    title: "Shockingly Affordable",
    desc: "Plans start as low as $1/month — one of the best price‑to‑performance ratios in the entire hosting industry.",
  },
]

const hostingPlans = [
  {
    name: "Budget Minecraft",
    price: "$1.00 / mo",
    features: [
      "Perfect for small SMPs",
      "Fast NVMe storage",
      "Instant setup",
      "DDoS protection",
    ],
  },
  {
    name: "Premium Minecraft",
    price: "$4.00 / mo",
    features: [
      "High‑end CPUs",
      "Modded server ready",
      "Unlimited player slots",
      "Advanced performance tuning",
    ],
  },
  {
    name: "Enterprise",
    price: "$8.00 / mo",
    features: [
      "Maximum performance",
      "Heavy modpacks",
      "Large communities",
      "Priority support",
    ],
  },
]

export default function Hosting() {
  usePageTitle("HungerNet | Hosting")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Minecraft Hosting</h1>
        <p>High‑performance servers powered by SparkedHost — fast, reliable, and insanely affordable.</p>
      </div>

      {/* Feature cards */}
      <section className="section">
        <div className="features-grid stagger">
          {hostingFeatures.map(({ icon, title, desc }, i) => (
            <GlassCard key={title} className="feature-card" style={{ "--i": i }}>
              <div className="icon-badge">
                <Icon name={icon} size={22} strokeWidth={1.75} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="section">
        <div className="section-header">
          <div className="section-label">Choose your plan</div>
          <h2>Hosting Plans</h2>
          <p>Pick the perfect plan for your server — all powered by SparkedHost.</p>
        </div>

        <div className="projects-grid stagger">
          {hostingPlans.map((p, i) => (
            <GlassCard key={p.name} className="project-card" style={{ "--i": i }}>
              <h3 className="project-title">{p.name}</h3>
              <p className="project-desc">{p.price}</p>

              <ul className="project-list">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="project-links">
                <GlassButton
                  href="https://billing.sparkedhost.com/aff.php?aff=3222"
                  size="sm"
                  variant="primary"
                >
                  <Icon name="arrowRight" size={16} />
                  Get Hosting
                </GlassButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section fade-in-up">
        <h2>Ready to start your server?</h2>
        <p>Launch your Minecraft server today with SparkedHost — fast, reliable, and affordable.</p>

        <div className="cta-actions">
          <GlassButton
            href="https://billing.sparkedhost.com/aff.php?aff=3222"
            variant="primary"
          >
            <Icon name="server" size={16} />
            Get Hosting Now
          </GlassButton>

          <GlassButton to="/tools/srv-generator" variant="ghost">
            <Icon name="settings" size={16} />
            SRV Generator
          </GlassButton>

          <GlassButton to="/tools/email" variant="ghost">
            <Icon name="mail" size={16} />
            Email Setup Guide
          </GlassButton>
        </div>
      </div>
    </div>
  )
}
