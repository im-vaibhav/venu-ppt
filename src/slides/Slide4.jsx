import EpamLogo from '../components/EpamLogo'
import './Slide4.css'

const PROBLEMS = [
  {
    id: 'fatigue',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Bell */}
        <path d="M18 4 C12 4 9 9 9 14 L9 22 L6 25 L30 25 L27 22 L27 14 C27 9 24 4 18 4Z"
          stroke="rgba(255,255,255,0.35)" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
        <path d="M15 25 C15 26.65 16.35 28 18 28 C19.65 28 21 26.65 21 25"
          stroke="rgba(255,255,255,0.35)" strokeWidth="1.6" fill="none" />
        {/* Three alert lines — noise */}
        <line x1="5"  y1="10" x2="2"  y2="8"  stroke="#00F6FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4"  y1="15" x2="1"  y2="15" stroke="#00F6FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="31" y1="10" x2="34" y2="8"  stroke="#00F6FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="15" x2="35" y2="15" stroke="#00F6FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Alert Fatigue',
    detail: 'Hundreds of low-signal notifications drown the critical ones — on-call engineers stop trusting their pager.',
  },
  {
    id: 'rca',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Magnifying glass */}
        <circle cx="15" cy="15" r="9" stroke="rgba(255,255,255,0.35)" strokeWidth="1.6" />
        <line x1="22" y1="22" x2="30" y2="30" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
        {/* Question mark inside */}
        <text x="15" y="20" textAnchor="middle" fill="#00F6FF"
          fontFamily="'Segoe UI',sans-serif" fontWeight="700" fontSize="11">?</text>
      </svg>
    ),
    label: 'Slow Root-Cause Analysis',
    detail: 'Scattered metrics across silos force engineers to manually correlate logs, traces and dashboards under pressure.',
  },
  {
    id: 'firefighting',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Clock face */}
        <circle cx="18" cy="18" r="13" stroke="rgba(255,255,255,0.35)" strokeWidth="1.6" />
        {/* Hands pointing to ~3 AM */}
        <line x1="18" y1="18" x2="18" y2="9"  stroke="#00F6FF" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="18" y1="18" x2="27" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" />
        {/* "ZZZ" tired */}
        <text x="5" y="11" fill="#00F6FF" fontFamily="'Segoe UI',sans-serif"
          fontWeight="700" fontSize="7" opacity="0.8">ZZZ</text>
      </svg>
    ),
    label: '3 AM Manual Firefighting',
    detail: 'Without automated remediation, every incident demands human intervention — regardless of the hour.',
  },
  {
    id: 'dashboards',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Four stacked dashboard panels — overloaded */}
        <rect x="3"  y="4"  width="30" height="6"  rx="1.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" fill="none" />
        <rect x="3"  y="13" width="30" height="6"  rx="1.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" fill="none" />
        <rect x="3"  y="22" width="13" height="10" rx="1.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" fill="none" />
        <rect x="20" y="22" width="13" height="10" rx="1.5" stroke="#00F6FF" strokeWidth="1.4" fill="none" strokeDasharray="3 2" />
        {/* Overload indicator */}
        <line x1="24" y1="25" x2="30" y2="25" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="24" y1="28" x2="28" y2="28" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: 'Dashboard Overload',
    detail: 'Dozens of Grafana boards with no clear owner — context is buried, actionable insight is missing.',
  },
]

export default function Slide4() {
  return (
    <div className="s4-root">

      {/* Ambient glow — top-left */}
      <div className="s4-glow" aria-hidden="true" />

      {/* Header */}
      <header className="s4-header">
        <div className="s4-slide-label">The Operations Gap</div>
        <EpamLogo height={28} opacity={0.75} />
      </header>

      {/* Title */}
      <section className="s4-title-block">
        <h2 className="s4-title">
          Even Great Systems Need
          <span className="s4-title-accent"> Great Operations</span>
        </h2>
        <div className="s4-title-rule" />
      </section>

      {/* ── Two-column body ── */}
      <main className="s4-body">

        {/* LEFT — problem list */}
        <div className="s4-problems">
          {PROBLEMS.map((p) => (
            <div key={p.id} className="s4-problem-row">
              <div className="s4-problem-icon">{p.icon}</div>
              <div className="s4-problem-text">
                <span className="s4-problem-label">{p.label}</span>
                <span className="s4-problem-detail">{p.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="s4-col-divider" aria-hidden="true" />

        {/* RIGHT — stats */}
        <div className="s4-stats">

          <div className="s4-stat-card s4-stat-mttr">
            {/* Gauge arc visual */}
            <svg className="s4-gauge" viewBox="0 0 140 80" fill="none" aria-hidden="true">
              {/* Track arc */}
              <path d="M15 75 A55 55 0 0 1 125 75"
                stroke="rgba(255,255,255,0.08)" strokeWidth="10" strokeLinecap="round" fill="none" />
              {/* Filled arc — representing "hours, not minutes" — nearly full */}
              <path d="M15 75 A55 55 0 0 1 125 75"
                stroke="#00F6FF" strokeWidth="10" strokeLinecap="round" fill="none"
                strokeDasharray="172" strokeDashoffset="30"
                opacity="0.85"
              />
              {/* Needle marker at ~85% */}
              <circle cx="112" cy="30" r="5" fill="#00F6FF" opacity="0.9" />
            </svg>
            <div className="s4-stat-value">
              <span className="s4-stat-number">4 <span className="s4-stat-unit">hrs</span></span>
              <span className="s4-stat-caption">avg. MTTR</span>
            </div>
            <p className="s4-stat-note">Mean time to recovery measured in <strong>hours</strong>, not minutes</p>
          </div>

          <div className="s4-stat-card s4-stat-noise">
            {/* Noise bar visual */}
            <div className="s4-noise-bar-wrap" aria-hidden="true">
              <div className="s4-noise-bar-track">
                {/* Noise portion — 40% */}
                <div className="s4-noise-bar-fill" />
                {/* Signal portion — 60% */}
                <div className="s4-noise-bar-signal" />
              </div>
              <div className="s4-noise-legend">
                <span className="s4-noise-legend-noise">
                  <span className="s4-noise-dot s4-noise-dot--noise" />
                  Noise
                </span>
                <span className="s4-noise-legend-signal">
                  <span className="s4-noise-dot s4-noise-dot--signal" />
                  Signal
                </span>
              </div>
            </div>
            <div className="s4-stat-value">
              <span className="s4-stat-number">40<span className="s4-stat-unit">%</span></span>
              <span className="s4-stat-caption">alerts are noise</span>
            </div>
            <p className="s4-stat-note">2 in 5 pages require <strong>no action</strong> — pure engineer burnout</p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="s4-footer">
        <div className="s4-presenter">
          <span className="s4-presenter-name">Venu Kandagatla</span>
          <span className="s4-presenter-sep">|</span>
          <span className="s4-presenter-role">Manager, Talent Development</span>
          <span className="s4-presenter-sep">|</span>
          <span className="s4-presenter-date">May 2026</span>
        </div>
        <span className="s4-page">04</span>
      </footer>

    </div>
  )
}
