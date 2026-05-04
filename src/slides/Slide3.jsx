import EpamLogo from '../components/EpamLogo'
import './Slide3.css'

const PILLARS = [
  {
    id: 'quorum',
    number: '01',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Three nodes in a quorum triangle */}
        <circle cx="24" cy="9"  r="4.5" stroke="#00F6FF" strokeWidth="1.8" />
        <circle cx="9"  cy="36" r="4.5" stroke="#00F6FF" strokeWidth="1.8" />
        <circle cx="39" cy="36" r="4.5" stroke="#00F6FF" strokeWidth="1.8" />
        {/* Solid consensus lines */}
        <line x1="20" y1="13" x2="12" y2="32" stroke="#00F6FF" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="28" y1="13" x2="36" y2="32" stroke="#00F6FF" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="14" y1="36" x2="34" y2="36" stroke="#00F6FF" strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Check mark — consensus reached */}
        <path d="M20 24 L23 27 L28 21" stroke="#00F6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Quorum Consistency',
    body: 'Majority-vote writes guarantee every read reflects the latest committed state — no stale data, no split-brain.',
  },
  {
    id: 'swim',
    number: '02',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Radar / ping rings */}
        <circle cx="24" cy="24" r="6"  stroke="#00F6FF" strokeWidth="1.8" />
        <circle cx="24" cy="24" r="13" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="24" cy="24" r="20" stroke="#00F6FF" strokeWidth="0.8" strokeOpacity="0.2" />
        {/* Radar sweep line */}
        <line x1="24" y1="24" x2="37" y2="12" stroke="#00F6FF" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
        {/* Centre dot */}
        <circle cx="24" cy="24" r="2.2" fill="#00F6FF" />
      </svg>
    ),
    title: 'SWIM Failure Detection',
    body: 'Scalable Weakly-consistent Infection-style Membership detects node failures in seconds without centralised co-ordination.',
  },
  {
    id: 'keys',
    number: '03',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Consistent hash ring */}
        <circle cx="24" cy="24" r="16" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        {/* Nodes on ring */}
        <circle cx="24" cy="8"  r="3" fill="#00F6FF" fillOpacity="0.9" />
        <circle cx="38" cy="30" r="3" fill="#00F6FF" fillOpacity="0.9" />
        <circle cx="12" cy="35" r="3" fill="#00F6FF" fillOpacity="0.9" />
        {/* Key icon in centre */}
        <circle cx="24" cy="24" r="4" stroke="#00F6FF" strokeWidth="1.6" />
        <line   x1="27.8" y1="24" x2="34" y2="24" stroke="#00F6FF" strokeWidth="1.6" strokeLinecap="round" />
        <line   x1="32"   y1="24" x2="32" y2="27"  stroke="#00F6FF" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Smart Key Distribution',
    body: 'Consistent hashing with virtual nodes balances load evenly and minimises key remapping during topology changes.',
  },
  {
    id: 'observability',
    number: '04',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Chart bars */}
        <rect x="7"  y="28" width="7" height="13" rx="1.5" fill="#00F6FF" fillOpacity="0.25" stroke="#00F6FF" strokeWidth="1.4" />
        <rect x="18" y="18" width="7" height="23" rx="1.5" fill="#00F6FF" fillOpacity="0.4"  stroke="#00F6FF" strokeWidth="1.4" />
        <rect x="29" y="22" width="7" height="19" rx="1.5" fill="#00F6FF" fillOpacity="0.25" stroke="#00F6FF" strokeWidth="1.4" />
        {/* Trend line */}
        <polyline
          points="10.5,27 21.5,17 32.5,21 40,12"
          stroke="#00F6FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          fill="none"
        />
        <circle cx="40" cy="12" r="2.2" fill="#00F6FF" />
      </svg>
    ),
    title: 'Built-in Observability',
    body: 'Prometheus metrics, structured logs and distributed traces ship out-of-the-box — zero instrumentation overhead.',
  },
]

export default function Slide3() {
  return (
    <div className="s3-root">

      {/* Ambient glow — bottom-left for contrast with slide 2 */}
      <div className="s3-glow" aria-hidden="true" />

      {/* Header: slide label + EPAM wordmark */}
      <header className="s3-header">
        <div className="s3-slide-label">The Solution</div>
        <EpamLogo height={28} opacity={0.75} />
      </header>

      {/* Title + one-liner */}
      <section className="s3-title-block">
        <div className="s3-title-row">
          <h2 className="s3-title">
            Meet <span className="s3-title-accent">EdgeFabric</span>
          </h2>
          <div className="s3-title-rule" />
        </div>
        <p className="s3-oneliner">
          Production-grade distributed cache — built for consistency, resilience and scale.
        </p>
      </section>

      {/* 4 pillars */}
      <main className="s3-pillars">
        {PILLARS.map((p) => (
          <article key={p.id} className="s3-pillar">
            {/* Left accent stripe */}
            <div className="s3-pillar-stripe" />

            <div className="s3-pillar-inner">
              {/* Top: number + icon */}
              <div className="s3-pillar-top">
                <span className="s3-pillar-number">{p.number}</span>
                <div className="s3-pillar-icon">{p.icon}</div>
              </div>
              <h3 className="s3-pillar-title">{p.title}</h3>
              <p className="s3-pillar-body">{p.body}</p>
            </div>
          </article>
        ))}
      </main>

      {/* Footer */}
      <footer className="s3-footer">
        <div className="s3-presenter">
          <span className="s3-presenter-name">Venu Kandagatla</span>
          <span className="s3-presenter-sep">|</span>
          <span className="s3-presenter-role">Manager, Talent Development</span>
          <span className="s3-presenter-sep">|</span>
          <span className="s3-presenter-date">May 2026</span>
        </div>
        <span className="s3-page">03</span>
      </footer>

    </div>
  )
}
