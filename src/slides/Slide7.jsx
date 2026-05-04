import EpamLogo from '../components/EpamLogo'
import './Slide7.css'

const MODES = [
  {
    id: 'periodic',
    number: '01',
    mode: 'Periodic',
    cadence: 'Every 5 minutes',
    tagPill: 'Scheduled',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
        {/* Clock face */}
        <circle cx="26" cy="26" r="20" stroke="#00F6FF" strokeWidth="1.6" fill="rgba(0,246,255,0.04)" />
        <circle cx="26" cy="26" r="2.5" fill="#00F6FF" />
        {/* Hour hand — pointing up */}
        <line x1="26" y1="26" x2="26" y2="12" stroke="#00F6FF" strokeWidth="2" strokeLinecap="round" />
        {/* Minute hand — pointing right */}
        <line x1="26" y1="26" x2="38" y2="26" stroke="#00F6FF" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.6" />
        {/* Tick marks */}
        <line x1="26" y1="7"  x2="26" y2="10" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35" />
        <line x1="26" y1="42" x2="26" y2="45" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35" />
        <line x1="7"  y1="26" x2="10" y2="26" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35" />
        <line x1="42" y1="26" x2="45" y2="26" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35" />
      </svg>
    ),
    headline: '5-Min Health Digests',
    bullets: [
      'Cluster health score surfaced every 5 minutes',
      'Proactive awareness before issues escalate',
      'Trend deltas — not just snapshots',
      'Zero noise: digest only when something changed',
    ],
    footerNote: 'Stay ahead, not behind',
  },
  {
    id: 'alert',
    number: '02',
    mode: 'Alert-Driven',
    cadence: 'On incident',
    tagPill: 'Reactive',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
        {/* Bell */}
        <path d="M26 5 C18 5 13 11 13 18 L13 30 L8 35 L44 35 L39 30 L39 18 C39 11 34 5 26 5Z"
          stroke="#00F6FF" strokeWidth="1.6" strokeLinejoin="round" fill="rgba(0,246,255,0.04)" />
        <path d="M21 35 C21 38.3 23.25 41 26 41 C28.75 41 31 38.3 31 35"
          stroke="#00F6FF" strokeWidth="1.6" fill="none" />
        {/* Alert spark top-right */}
        <circle cx="39" cy="11" r="5" fill="#00F6FF" fillOpacity="0.15" stroke="#00F6FF" strokeWidth="1.3" />
        <line x1="39" y1="8.5" x2="39" y2="12.5" stroke="#00F6FF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="39" cy="14" r="0.9" fill="#00F6FF" />
      </svg>
    ),
    headline: 'Automated Root-Cause Analysis',
    bullets: [
      'Triggered the instant an alert fires',
      'AI correlates metrics, logs & traces simultaneously',
      'Ranked solutions with confidence scores',
      'From alert to diagnosis in under 60 seconds',
    ],
    footerNote: 'Resolve faster, escalate smarter',
  },
  {
    id: 'query',
    number: '03',
    mode: 'Manual Query',
    cadence: 'On demand',
    tagPill: 'Interactive',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
        {/* Chat bubble */}
        <rect x="6" y="8" width="36" height="26" rx="5" stroke="#00F6FF" strokeWidth="1.6" fill="rgba(0,246,255,0.04)" />
        <path d="M14 34 L10 44 L22 36" stroke="#00F6FF" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
        {/* Text lines inside bubble */}
        <line x1="13" y1="18" x2="35" y2="18" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="13" y1="24" x2="28" y2="24" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.55" />
        {/* Cursor blink */}
        <line x1="30" y1="22" x2="30" y2="27" stroke="#00F6FF" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.8" />
      </svg>
    ),
    headline: 'Natural Language Queries',
    bullets: [
      '"Why is hit rate dropping on node-3?"',
      '"What changed in the last 30 minutes?"',
      'Plain-language answers, no PromQL needed',
      'Instant — no dashboard hunting required',
    ],
    footerNote: 'Ask anything, get answers',
  },
]

export default function Slide7() {
  return (
    <div className="s7-root">

      {/* Ambient glow — top-left */}
      <div className="s7-glow" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="s7-header">
        <div className="s7-slide-label">Operating Modes</div>
        <EpamLogo height={28} opacity={0.75} />
      </header>

      {/* ── Title block ── */}
      <section className="s7-title-block">
        <h2 className="s7-title">
          Three <span className="s7-title-accent">Intelligent</span> Operating Modes
        </h2>
        <div className="s7-title-rule" />
        <p className="s7-lead">
          EdgeFabric adapts to the moment — scheduled awareness, reactive diagnosis, or on-demand conversation.
        </p>
      </section>

      {/* ── Three cards ── */}
      <main className="s7-cards">
        {MODES.map((m, i) => (
          <article key={m.id} className={`s7-card s7-card--${m.id}`}>

            {/* Top bar accent */}
            <div className="s7-card-topbar" />

            {/* Card head */}
            <div className="s7-card-head">
              <div className="s7-card-meta">
                <span className="s7-card-number">{m.number}</span>
                <div className="s7-card-pills">
                  <span className="s7-pill s7-pill--mode">{m.mode}</span>
                  <span className="s7-pill s7-pill--cadence">{m.tagPill}</span>
                </div>
              </div>
              <div className="s7-card-icon">{m.icon}</div>
            </div>

            {/* Divider */}
            <div className="s7-card-divider" />

            {/* Headline */}
            <h3 className="s7-card-headline">{m.headline}</h3>

            {/* Cadence badge */}
            <span className="s7-cadence">{m.cadence}</span>

            {/* Bullets */}
            <ul className="s7-bullets">
              {m.bullets.map((b, bi) => (
                <li key={bi} className="s7-bullet">
                  <span className="s7-bullet-dot" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Footer note */}
            <div className="s7-card-footer-note">
              <span className="s7-footer-dash">—</span>
              {m.footerNote}
            </div>

          </article>
        ))}
      </main>

      {/* ── Tagline banner ── */}
      <div className="s7-tagline">
        <svg className="s7-quote-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 10 C3 6.5 5.5 4 9 4 L9 7 C7.5 7 6 8.2 6 10 L9 10 L9 16 L3 16 Z"
            fill="#00F6FF" fillOpacity="0.55" />
          <path d="M13 10 C13 6.5 15.5 4 19 4 L19 7 C17.5 7 16 8.2 16 10 L19 10 L19 16 L13 16 Z"
            fill="#00F6FF" fillOpacity="0.55" />
        </svg>
        <span className="s7-tagline-text">
          Right mode for <span className="s7-tagline-accent">every moment</span>
        </span>
        <svg
  className="s5-quote-icon"
  viewBox="0 0 24 24"
  fill="none"
  aria-hidden="true"
  style={{ transform: "scaleX(-1)" }}  // 👈 flip for closing quotes
>
  <path d="M3 10 C3 6.5 5.5 4 9 4 L9 7 C7.5 7 6 8.2 6 10 L6 10 L9 10 L9 16 L3 16 Z"
    fill="#00F6FF" fillOpacity="0.6" />
  <path d="M13 10 C13 6.5 15.5 4 19 4 L19 7 C17.5 7 16 8.2 16 10 L16 10 L19 10 L19 16 L13 16 Z"
    fill="#00F6FF" fillOpacity="0.6" />
</svg>
      </div>

      {/* ── Footer ── */}
      <footer className="s7-footer">
        <div className="s7-presenter">
          <span className="s7-presenter-name">Venu Kandagatla</span>
          <span className="s7-presenter-sep">|</span>
          <span className="s7-presenter-role">Manager, Talent Development</span>
          <span className="s7-presenter-sep">|</span>
          <span className="s7-presenter-date">May 2026</span>
        </div>
        <span className="s7-page">07</span>
      </footer>

    </div>
  )
}
