import EpamLogo from '../components/EpamLogo'
import './Slide8.css'

const SAFETY_FEATURES = [
  {
    id: 'approval',
    step: '01',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
        {/* Shield */}
        <path
          d="M22 4 L36 10 L36 22 C36 30 29.5 37 22 39 C14.5 37 8 30 8 22 L8 10 Z"
          stroke="#00F6FF" strokeWidth="1.6" fill="rgba(0,246,255,0.06)" strokeLinejoin="round"
        />
        {/* Checkmark */}
        <path d="M15 22 L19.5 26.5 L29 17" stroke="#00F6FF" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Approval Gate',
    value: 'Every Action',
    detail: 'Zero autonomous execution. Every AI-proposed action is held until an authorised operator explicitly approves.',
  },
  {
    id: 'dryrun',
    step: '02',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
        {/* Document with eye */}
        <rect x="8" y="5" width="22" height="30" rx="3" stroke="#00F6FF" strokeWidth="1.6"
          fill="rgba(0,246,255,0.06)" strokeDasharray="0" />
        <rect x="8" y="5" width="22" height="30" rx="3" stroke="rgba(0,246,255,0.25)"
          strokeWidth="1.6" fill="none" strokeDasharray="4 2" />
        <line x1="13" y1="14" x2="25" y2="14" stroke="#00F6FF" strokeWidth="1.3"
          strokeLinecap="round" strokeOpacity="0.5" />
        <line x1="13" y1="19" x2="25" y2="19" stroke="#00F6FF" strokeWidth="1.3"
          strokeLinecap="round" strokeOpacity="0.3" />
        <line x1="13" y1="24" x2="20" y2="24" stroke="#00F6FF" strokeWidth="1.3"
          strokeLinecap="round" strokeOpacity="0.2" />
        {/* Eye badge bottom-right */}
        <circle cx="31" cy="34" r="8" fill="#060606" stroke="#00F6FF" strokeWidth="1.4" />
        <ellipse cx="31" cy="34" rx="5" ry="3.2" stroke="#00F6FF" strokeWidth="1.2" fill="none" />
        <circle cx="31" cy="34" r="1.8" fill="#00F6FF" fillOpacity="0.9" />
      </svg>
    ),
    label: 'Dry-Run Default',
    value: 'Preview First',
    detail: 'All proposals simulate impact before touching live data — operators see exactly what will change and what will not.',
  },
  {
    id: 'expiry',
    step: '03',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
        {/* Clock */}
        <circle cx="22" cy="22" r="16" stroke="#00F6FF" strokeWidth="1.6"
          fill="rgba(0,246,255,0.06)" />
        <circle cx="22" cy="22" r="2" fill="#00F6FF" />
        <line x1="22" y1="22" x2="22" y2="11" stroke="#00F6FF" strokeWidth="2"
          strokeLinecap="round" />
        <line x1="22" y1="22" x2="31" y2="22" stroke="#00F6FF" strokeWidth="1.4"
          strokeLinecap="round" strokeOpacity="0.55" />
        {/* Expiry arc — top-right quarter fading */}
        <path d="M22 6 A16 16 0 0 1 38 22"
          stroke="#00F6FF" strokeWidth="2.5" strokeLinecap="round"
          fill="none" strokeOpacity="0.35" strokeDasharray="3 3" />
        {/* X mark small */}
        <path d="M33 10 L37 14 M37 10 L33 14" stroke="#00F6FF" strokeWidth="1.5"
          strokeLinecap="round" strokeOpacity="0.7" />
      </svg>
    ),
    label: 'Proposal Expiry',
    value: '30 Minutes',
    detail: 'Stale approvals are a risk vector. Unacted proposals auto-expire after 30 minutes — forcing deliberate, timely decisions.',
  },
  {
    id: 'verify',
    step: '04',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
        {/* Checkmark in circle — post-verify */}
        <circle cx="22" cy="22" r="16" stroke="#00F6FF" strokeWidth="1.6"
          fill="rgba(0,246,255,0.06)" />
        {/* Pulse ring */}
        <circle cx="22" cy="22" r="20" stroke="#00F6FF" strokeWidth="0.8"
          fill="none" strokeOpacity="0.2" strokeDasharray="3 3" />
        <path d="M14 22 L19 27 L30 16" stroke="#00F6FF" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Post-Action Verification',
    value: '60 Seconds',
    detail: 'After every execution, the agent monitors cluster state for 60 seconds and auto-reverts if metrics deviate from baseline.',
  },
]

export default function Slide8() {
  return (
    <div className="s8-root">

      {/* Ambient glow — bottom left */}
      <div className="s8-glow" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="s8-header">
        <div className="s8-slide-label">Safety Architecture</div>
        <EpamLogo height={28} opacity={0.75} />
      </header>

      {/* ── Title block ── */}
      <section className="s8-title-block">
        <h2 className="s8-title">
          Human-in-the-Loop <span className="s8-title-accent">Control</span>
        </h2>
        <div className="s8-title-rule" />
        <p className="s8-lead">
          Every action passes through four safety checkpoints — no exceptions.
        </p>
      </section>

      {/* ── Body: 4 feature cards + flow spine ── */}
      <main className="s8-body">

        {/* Vertical flow spine */}
        <div className="s8-spine" aria-hidden="true">
          <div className="s8-spine-line" />
        </div>

        {/* Cards grid */}
        <div className="s8-cards">
          {SAFETY_FEATURES.map((f) => (
            <article key={f.id} className="s8-card">

              {/* Step bubble on spine */}
              <div className="s8-step-bubble" aria-hidden="true">
                <span className="s8-step-num">{f.step}</span>
              </div>

              {/* Card inner */}
              <div className="s8-card-inner">

                {/* Top row: icon + value badge */}
                <div className="s8-card-top">
                  <div className="s8-card-icon">{f.icon}</div>
                  <div className="s8-value-badge">
                    <span className="s8-value">{f.value}</span>
                  </div>
                </div>

                {/* Label */}
                <h3 className="s8-card-label">{f.label}</h3>

                {/* Detail */}
                <p className="s8-card-detail">{f.detail}</p>

                {/* Bottom accent bar */}
                <div className="s8-card-bar" />

              </div>
            </article>
          ))}
        </div>

      </main>

      {/* ── Key message banner ── */}
      <div className="s8-key-message">
        <svg className="s8-quote-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 10 C3 6.5 5.5 4 9 4 L9 7 C7.5 7 6 8.2 6 10 L9 10 L9 16 L3 16 Z"
            fill="#00F6FF" fillOpacity="0.55" />
          <path d="M13 10 C13 6.5 15.5 4 19 4 L19 7 C17.5 7 16 8.2 16 10 L19 10 L19 16 L13 16 Z"
            fill="#00F6FF" fillOpacity="0.55" />
        </svg>
        <span className="s8-key-text">
          AI proposes,&nbsp;
          <span className="s8-key-accent">human decides</span>
        </span>
      </div>

      {/* ── Footer ── */}
      <footer className="s8-footer">
        <div className="s8-presenter">
          <span className="s8-presenter-name">Venu Kandagatla</span>
          <span className="s8-presenter-sep">|</span>
          <span className="s8-presenter-role">Manager, Talent Development</span>
          <span className="s8-presenter-sep">|</span>
          <span className="s8-presenter-date">May 2026</span>
        </div>
        <span className="s8-page">08</span>
      </footer>

    </div>
  )
}
