import EpamLogo from '../components/EpamLogo'
import './Slide2.css'

const PAIN_POINTS = [
  {
    id: 'consistency',
    number: '01',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Three nodes */}
        <circle cx="24" cy="10" r="5" stroke="#00F6FF" strokeWidth="2" />
        <circle cx="10" cy="36" r="5" stroke="#00F6FF" strokeWidth="2" />
        <circle cx="38" cy="36" r="5" stroke="#00F6FF" strokeWidth="2" />
        {/* Connecting lines — broken / inconsistent */}
        <line x1="19" y1="14" x2="13" y2="32" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="29" y1="14" x2="35" y2="32" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="15" y1="36" x2="33" y2="36" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Conflict symbol on centre line */}
        <path d="M22 23 L26 27 M26 23 L22 27" stroke="#00F6FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Data Consistency\nAcross Nodes',
    body: 'Stale reads, write conflicts and split-brain scenarios degrade user experience and business logic correctness.',
  },
  {
    id: 'recovery',
    number: '02',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Server stack */}
        <rect x="10" y="8"  width="28" height="8"  rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" />
        <rect x="10" y="20" width="28" height="8"  rx="2" stroke="#00F6FF" strokeWidth="1.8" strokeDasharray="4 2" />
        <rect x="10" y="32" width="28" height="8"  rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" />
        {/* Alert icon on middle row */}
        <path d="M24 22.5 L24 26.5" stroke="#00F6FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="28.5" r="0.8" fill="#00F6FF" />
      </svg>
    ),
    title: 'Unpredictable\nFailure Recovery',
    body: 'Node crashes trigger manual interventions, cascading timeouts and unplanned downtime that erode SLA commitments.',
  },
  {
    id: 'complexity',
    number: '03',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Gear outline */}
        <path
          d="M24 16 a8 8 0 1 1 0 16 a8 8 0 0 1 0-16z"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.8"
        />
        {/* Gear teeth */}
        <path
          d="M24 8v4 M24 36v4 M8 24h4 M36 24h4
             M12.7 12.7l2.8 2.8 M32.5 32.5l2.8 2.8
             M12.7 35.3l2.8-2.8 M32.5 15.5l2.8-2.8"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Overload arrows */}
        <path d="M20 24 H28" stroke="#00F6FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 21 L28 24 L25 27" stroke="#00F6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Operational Complexity\nat Scale',
    body: 'Config drift, topology changes and observability gaps multiply toil as cluster size grows beyond hundreds of nodes.',
  },
]

export default function Slide2() {
  return (
    <div className="s2-root">
      {/* Subtle ambient glow top-right */}
      <div className="s2-glow" aria-hidden="true" />

      {/* Header */}
      <header className="s2-header">
        <div className="s2-slide-label">The Challenge</div>
        <EpamLogo height={28} opacity={0.75} />
      </header>

      {/* Title block */}
      <section className="s2-title-block">
        <h2 className="s2-title">
          The Distributed Caching
          <span className="s2-title-accent"> Challenge</span>
        </h2>
        <div className="s2-title-rule" />
        <p className="s2-lead">
          Scaling a cache layer beyond a single node exposes three fundamental problems
          that compound at production scale.
        </p>
      </section>

      {/* Pain-point cards */}
      <main className="s2-cards">
        {PAIN_POINTS.map((p) => (
          <article key={p.id} className="s2-card">
            <div className="s2-card-top">
              <span className="s2-card-number">{p.number}</span>
              <div className="s2-card-icon">{p.icon}</div>
            </div>
            <h3 className="s2-card-title">
              {p.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h3>
            <p className="s2-card-body">{p.body}</p>
            <div className="s2-card-bar" />
          </article>
        ))}
      </main>

      {/* Footer */}
      <footer className="s2-footer">
        <div className="s2-presenter">
          <span className="s2-presenter-name">Venu Kandagatla</span>
          <span className="s2-presenter-sep">|</span>
          <span className="s2-presenter-role">Manager, Talent Development</span>
          <span className="s2-presenter-sep">|</span>
          <span className="s2-presenter-date">May 2026</span>
        </div>
        <span className="s2-page">02</span>
      </footer>
    </div>
  )
}
