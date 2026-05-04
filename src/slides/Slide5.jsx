import EpamLogo from '../components/EpamLogo'
import './Slide5.css'

/* ── Observability inputs (left spokes) ── */
const INPUTS = [
  {
    id: 'metrics',
    label: 'Metrics',
    sub: 'Prometheus / StatsD',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3"  y="18" width="5" height="11" rx="1.2" fill="#00F6FF" fillOpacity="0.25" stroke="#00F6FF" strokeWidth="1.3" />
        <rect x="11" y="11" width="5" height="18" rx="1.2" fill="#00F6FF" fillOpacity="0.4"  stroke="#00F6FF" strokeWidth="1.3" />
        <rect x="19" y="14" width="5" height="15" rx="1.2" fill="#00F6FF" fillOpacity="0.25" stroke="#00F6FF" strokeWidth="1.3" />
        <polyline points="5.5,17 13.5,10 21.5,13 28,6" stroke="#00F6FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="28" cy="6" r="2" fill="#00F6FF" />
      </svg>
    ),
  },
  {
    id: 'logs',
    label: 'Logs',
    sub: 'Structured / Loki',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="4" width="22" height="24" rx="2.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" fill="none" />
        <line x1="9"  y1="10" x2="23" y2="10" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="9"  y1="15" x2="23" y2="15" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
        <line x1="9"  y1="20" x2="18" y2="20" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      </svg>
    ),
  },
  {
    id: 'traces',
    label: 'Traces',
    sub: 'OpenTelemetry',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="6"  cy="8"  r="3" stroke="#00F6FF" strokeWidth="1.4" />
        <circle cx="16" cy="16" r="3" stroke="#00F6FF" strokeWidth="1.4" />
        <circle cx="26" cy="12" r="3" stroke="#00F6FF" strokeWidth="1.4" />
        <circle cx="26" cy="24" r="3" stroke="#00F6FF" strokeWidth="1.4" />
        <line x1="9"  y1="9"  x2="13" y2="14" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.5" />
        <line x1="19" y1="14" x2="23" y2="12" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.5" />
        <line x1="19" y1="17" x2="23" y2="23" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.5" />
      </svg>
    ),
  },
]

/* ── Action outputs (right spokes) ── */
const OUTPUTS = [
  {
    id: 'diagnose',
    label: 'Root-Cause Diagnosis',
    sub: 'Instant, plain-language',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" />
        <line x1="21" y1="21" x2="28" y2="28" stroke="rgba(255,255,255,0.25)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M11 14 L13.5 16.5 L18 11" stroke="#00F6FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'heal',
    label: 'Auto-Remediation',
    sub: 'Self-healing playbooks',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* Refresh / heal arrow */}
        <path d="M24 8 A10 10 0 1 0 27 17" stroke="rgba(255,255,255,0.25)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <polyline points="24,4 24,9 29,9" stroke="#00F6FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="16" cy="17" r="3" fill="#00F6FF" fillOpacity="0.3" stroke="#00F6FF" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    id: 'alert',
    label: 'Smart Alerting',
    sub: 'Signal, not noise',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 3 C11 3 8 7.5 8 12 L8 19 L5 22 L27 22 L24 19 L24 12 C24 7.5 21 3 16 3Z"
          stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        <path d="M13 22 C13 23.65 14.35 25 16 25 C17.65 25 19 23.65 19 22"
          stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" fill="none" />
        <path d="M13 13 L15.5 15.5 L20 10" stroke="#00F6FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Slide5() {
  return (
    <div className="s5-root">

      {/* Deep central glow behind agent node */}
      <div className="s5-glow-center" aria-hidden="true" />
      {/* Corner glow top-right */}
      <div className="s5-glow-corner" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="s5-header">
        <div className="s5-slide-label">The Differentiator</div>
        <EpamLogo height={28} opacity={0.75} />
      </header>

      {/* ── Title block ── */}
      <section className="s5-title-block">
        <h2 className="s5-title">
          Introducing <span className="s5-title-accent">Agentic Ops</span>
        </h2>
        <div className="s5-title-rule" />
        <p className="s5-subtitle">
          Not just monitoring — <em>understanding</em>.&nbsp; EdgeFabric's AI-powered operations layer.
        </p>
      </section>

      {/* ── Hub-and-spoke diagram ── */}
      <main className="s5-diagram">

        {/* LEFT column — observability inputs */}
        <div className="s5-spokes s5-spokes--left">
          <p className="s5-spoke-group-label">Observability</p>
          {INPUTS.map((n) => (
            <div key={n.id} className="s5-spoke-node">
              <div className="s5-spoke-icon">{n.icon}</div>
              <div className="s5-spoke-text">
                <span className="s5-spoke-label">{n.label}</span>
                <span className="s5-spoke-sub">{n.sub}</span>
              </div>
              {/* Connector line drawn in CSS via ::after */}
              <div className="s5-connector s5-connector--right" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* CENTRE — Ops Agent hub */}
        <div className="s5-hub-wrap">
          {/* Pulse rings */}
          <div className="s5-pulse s5-pulse--1" aria-hidden="true" />
          <div className="s5-pulse s5-pulse--2" aria-hidden="true" />

          <div className="s5-hub">
            {/* Brain / AI icon */}
            <svg className="s5-hub-icon" viewBox="0 0 56 56" fill="none" aria-hidden="true">
              {/* Outer hexagon — agent boundary */}
              <polygon
                points="28,4 50,16 50,40 28,52 6,40 6,16"
                stroke="#00F6FF" strokeWidth="1.6" fill="rgba(0,246,255,0.04)"
              />
              {/* Inner circuit paths */}
              <circle cx="28" cy="28" r="10" stroke="#00F6FF" strokeWidth="1.4" fill="rgba(0,246,255,0.08)" />
              <line x1="28" y1="18" x2="28" y2="12" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.6" />
              <line x1="28" y1="38" x2="28" y2="44" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.6" />
              <line x1="18" y1="28" x2="12" y2="28" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.6" />
              <line x1="38" y1="28" x2="44" y2="28" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.6" />
              {/* Spark dots at tips */}
              <circle cx="28" cy="11"  r="2" fill="#00F6FF" />
              <circle cx="28" cy="45"  r="2" fill="#00F6FF" />
              <circle cx="11" cy="28"  r="2" fill="#00F6FF" />
              <circle cx="45" cy="28"  r="2" fill="#00F6FF" />
              {/* Centre AI dot */}
              <circle cx="28" cy="28" r="4" fill="#00F6FF" fillOpacity="0.9" />
            </svg>

            <span className="s5-hub-label">Ops Agent</span>
            <span className="s5-hub-sub">AI-powered</span>
          </div>
        </div>

        {/* RIGHT column — action outputs */}
        <div className="s5-spokes s5-spokes--right">
          <p className="s5-spoke-group-label s5-spoke-group-label--right">Actions</p>
          {OUTPUTS.map((n) => (
            <div key={n.id} className="s5-spoke-node s5-spoke-node--right">
              {/* Connector line */}
              <div className="s5-connector s5-connector--left" aria-hidden="true" />
              <div className="s5-spoke-icon">{n.icon}</div>
              <div className="s5-spoke-text">
                <span className="s5-spoke-label">{n.label}</span>
                <span className="s5-spoke-sub">{n.sub}</span>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* ── Key message banner ── */}
      <div className="s5-key-message">
       <svg className="s5-quote-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M3 10 C3 6.5 5.5 4 9 4 L9 7 C7.5 7 6 8.2 6 10 L6 10 L9 10 L9 16 L3 16 Z"
    fill="#00F6FF" fillOpacity="0.6" />
  <path d="M13 10 C13 6.5 15.5 4 19 4 L19 7 C17.5 7 16 8.2 16 10 L16 10 L19 10 L19 16 L13 16 Z"
    fill="#00F6FF" fillOpacity="0.6" />
</svg>

<span className="s5-key-text">
  Your cache <span className="s5-key-accent">explains itself</span>
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
      <footer className="s5-footer">
        <div className="s5-presenter">
          <span className="s5-presenter-name">Venu Kandagatla</span>
          <span className="s5-presenter-sep">|</span>
          <span className="s5-presenter-role">Manager, Talent Development</span>
          <span className="s5-presenter-sep">|</span>
          <span className="s5-presenter-date">May 2026</span>
        </div>
        <span className="s5-page">05</span>
      </footer>

    </div>
  )
}
