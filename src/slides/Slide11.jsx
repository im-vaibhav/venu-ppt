import EpamLogo from '../components/EpamLogo'
import './Slide11.css'

const OUTCOMES = [
  {
    id: 'mttr',
    number: '01',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
        {/* Clock with down arrow — MTTR going down */}
        <circle cx="26" cy="26" r="19" stroke="#00F6FF" strokeWidth="1.6"
          fill="rgba(0,246,255,0.05)" />
        <circle cx="26" cy="26" r="2.5" fill="#00F6FF" />
        <line x1="26" y1="26" x2="26" y2="13" stroke="#00F6FF" strokeWidth="2"
          strokeLinecap="round" />
        <line x1="26" y1="26" x2="35" y2="26" stroke="#00F6FF" strokeWidth="1.4"
          strokeLinecap="round" strokeOpacity="0.6" />
        {/* Down arrow — improvement */}
        <path d="M38 36 L38 44 M34 40 L38 44 L42 40"
          stroke="#00F6FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Faster MTTR',
    metric: 'Minutes',
    metricSub: 'not hours',
    bullets: [
      'AI correlates signals across metrics, logs & traces simultaneously',
      'Ranked root-cause list eliminates manual hypothesis testing',
      'Time from alert to resolved action measured in minutes',
    ],
    source: 'Typical ops workflow improvement with AI-assisted RCA',
  },
  {
    id: 'toil',
    number: '02',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
        {/* Wrench / manual work crossed with spark */}
        <path d="M14 38 L32 20 M29 17 L35 11 C37 9 41 9 43 11 C45 13 45 17 43 19 L37 25 L29 17Z"
          stroke="#00F6FF" strokeWidth="1.5" strokeLinejoin="round"
          fill="rgba(0,246,255,0.07)" />
        <circle cx="16" cy="36" r="5" stroke="#00F6FF" strokeWidth="1.4"
          fill="rgba(0,246,255,0.07)" />
        {/* Spark — automation */}
        <path d="M8 18 L12 10 L14 16 L20 8"
          stroke="#00F6FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: 'Reduced Toil',
    metric: 'Less',
    metricSub: 'manual investigation',
    bullets: [
      'Periodic digests replace constant dashboard-watching',
      'Automated evidence gathering removes repetitive query work',
      'Engineers focus on architecture, not firefighting',
    ],
    source: 'SRE workload shift: reactive toil → proactive engineering',
  },
  {
    id: 'oncall',
    number: '03',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
        {/* Person + shield — protected on-call */}
        <circle cx="22" cy="14" r="6" stroke="#00F6FF" strokeWidth="1.5"
          fill="rgba(0,246,255,0.07)" />
        <path d="M10 38 C10 30 15 26 22 26 C29 26 34 30 34 38"
          stroke="#00F6FF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Shield badge */}
        <path d="M36 20 L44 23.5 L44 31 C44 35.5 40.5 39 36 40 C31.5 39 28 35.5 28 31 L28 23.5 Z"
          stroke="#00F6FF" strokeWidth="1.4" fill="rgba(0,246,255,0.08)" strokeLinejoin="round" />
        <path d="M33 31 L35.5 33.5 L40 28" stroke="#00F6FF" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Safer On-Call',
    metric: 'AI assists,',
    metricSub: 'human controls',
    bullets: [
      'Context-rich alerts — no more waking up blind',
      'Proposed fix ready before the engineer finishes reading',
      'Human approval required — zero autonomous production changes',
    ],
    source: 'Human-in-the-loop by design: every action gated',
  },
  {
    id: 'reliability',
    number: '04',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
        {/* Upward trend + shield */}
        <polyline points="6,38 16,28 24,32 34,18 46,14"
          stroke="#00F6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="46" cy="14" r="3" fill="#00F6FF" fillOpacity="0.9" />
        {/* Baseline area fill hint */}
        <polyline points="6,38 16,28 24,32 34,18 46,14 46,44 6,44"
          stroke="none" fill="rgba(0,246,255,0.05)" />
        <line x1="6"  y1="44" x2="46" y2="44"
          stroke="#00F6FF" strokeWidth="0.8" strokeOpacity="0.2" />
      </svg>
    ),
    title: 'Better Reliability',
    metric: 'Proactive',
    metricSub: 'issue detection',
    bullets: [
      '5-min health digests catch degradation before users notice',
      'Trend analysis surfaces gradual drift, not just hard failures',
      'Consistent operational posture across all environments',
    ],
    source: 'Shift-left on reliability: detect early, act fast',
  },
]


export default function Slide11() {
  return (
    <div className="s11-root">

      {/* Ambient glow — bottom-centre */}
      <div className="s11-glow" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="s11-header">
        <div className="s11-slide-label">Business Impact</div>
        <EpamLogo height={28} opacity={0.75} />
      </header>

      {/* ── Title block ── */}
      <section className="s11-title-block">
        <div className="s11-title-row">
          <h2 className="s11-title">
            Business <span className="s11-title-accent">Impact</span>
          </h2>
          <div className="s11-title-rule" />
        </div>
        <p className="s11-lead">
          Real outcomes for engineering teams — grounded in operational reality.
        </p>
      </section>

      {/* ── 4 outcome cards ── */}
      <main className="s11-cards">
        {OUTCOMES.map((o) => (
          <article key={o.id} className="s11-card">

            {/* Left accent stripe */}
            <div className="s11-card-stripe" />

            <div className="s11-card-inner">

              {/* ── Card top: number + icon ── */}
              <div className="s11-card-top">
                <span className="s11-number">{o.number}</span>
                <div className="s11-icon">{o.icon}</div>
              </div>

              {/* ── Title ── */}
              <h3 className="s11-card-title">{o.title}</h3>

              {/* ── Metric badge ── */}
              <div className="s11-metric">
                <span className="s11-metric-main">{o.metric}</span>
                <span className="s11-metric-sub">{o.metricSub}</span>
              </div>

              {/* ── Bullets ── */}
              <ul className="s11-bullets">
                {o.bullets.map((b, i) => (
                  <li key={i} className="s11-bullet">
                    <span className="s11-bullet-dot" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* ── Source note ── */}
              <p className="s11-source">{o.source}</p>

            </div>
          </article>
        ))}
      </main>

      {/* ── Footer ── */}
      <footer className="s11-footer">
        <div className="s11-presenter">
          <span className="s11-presenter-name">Venu Kandagatla</span>
          <span className="s11-presenter-sep">|</span>
          <span className="s11-presenter-role">Manager, Talent Development</span>
          <span className="s11-presenter-sep">|</span>
          <span className="s11-presenter-date">May 2026</span>
        </div>
        <span className="s11-page">11</span>
      </footer>

    </div>
  )
}
