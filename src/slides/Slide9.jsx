import EpamLogo from '../components/EpamLogo'
import './Slide9.css'

/* ── 8-step workflow ── */
const STEPS = [
  {
    id: 'alert',
    phase: 'trigger',
    label: 'Prometheus\nAlert',
    time: '0s',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 4 C12 4 8 8.5 8 13 L8 22 L5 26 L31 26 L28 22 L28 13 C28 8.5 24 4 18 4Z"
          stroke="#00F6FF" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(0,246,255,0.08)" />
        <path d="M14 26 C14 28.2 15.8 30 18 30 C20.2 30 22 28.2 22 26"
          stroke="#00F6FF" strokeWidth="1.5" fill="none" />
        <circle cx="27" cy="8" r="4.5" fill="#00F6FF" fillOpacity="0.2" stroke="#00F6FF" strokeWidth="1.2" />
        <line x1="27" y1="6" x2="27" y2="9" stroke="#00F6FF" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="27" cy="10.5" r="0.8" fill="#00F6FF" />
      </svg>
    ),
  },
  {
    id: 'agent',
    phase: 'ai',
    label: 'Ops Agent\nActivates',
    time: '~5s',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <polygon points="18,3 31,10 31,26 18,33 5,26 5,10"
          stroke="#00F6FF" strokeWidth="1.4" fill="rgba(0,246,255,0.07)" />
        <circle cx="18" cy="18" r="6" stroke="#00F6FF" strokeWidth="1.3" fill="rgba(0,246,255,0.1)" />
        <circle cx="18" cy="18" r="2.5" fill="#00F6FF" fillOpacity="0.9" />
        <line x1="18" y1="12" x2="18" y2="9"  stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="18" y1="24" x2="18" y2="27" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="12" y1="18" x2="9"  y2="18" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="24" y1="18" x2="27" y2="18" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'evidence',
    phase: 'ai',
    label: 'Evidence\nGathering',
    time: '~20s',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="15" cy="15" r="9" stroke="#00F6FF" strokeWidth="1.4" fill="rgba(0,246,255,0.07)" />
        <line x1="22" y1="22" x2="30" y2="30" stroke="#00F6FF" strokeWidth="2" strokeLinecap="round" />
        <line x1="11" y1="12" x2="19" y2="12" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.7" />
        <line x1="11" y1="15" x2="19" y2="15" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
        <line x1="11" y1="18" x2="16" y2="18" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35" />
      </svg>
    ),
  },
  {
    id: 'rca',
    phase: 'ai',
    label: 'RCA\nGenerated',
    time: '~45s',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="26" height="26" rx="4" stroke="#00F6FF" strokeWidth="1.4"
          fill="rgba(0,246,255,0.07)" />
        <line x1="10" y1="12" x2="26" y2="12" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="10" y1="17" x2="22" y2="17" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="10" y1="22" x2="18" y2="22" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35" />
        {/* Checkmark overlay */}
        <circle cx="26" cy="26" r="7" fill="#060606" stroke="#00F6FF" strokeWidth="1.2" />
        <path d="M22.5 26 L25 28.5 L29.5 23" stroke="#00F6FF" strokeWidth="1.4"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'proposal',
    phase: 'ai',
    label: 'Action\nProposed',
    time: '~60s',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        {/* Lightbulb */}
        <path d="M18 6 C13 6 10 10 10 14 C10 17.5 12 20 14 22 L14 26 L22 26 L22 22 C24 20 26 17.5 26 14 C26 10 23 6 18 6Z"
          stroke="#00F6FF" strokeWidth="1.4" fill="rgba(0,246,255,0.08)" strokeLinejoin="round" />
        <line x1="14" y1="28" x2="22" y2="28" stroke="#00F6FF" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="15" y1="30.5" x2="21" y2="30.5" stroke="#00F6FF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="18" y1="11" x2="18" y2="19" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'approve',
    phase: 'human',
    label: 'Human\nApproves',
    time: 'Manual',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        {/* Person silhouette */}
        <circle cx="18" cy="11" r="5" stroke="#00F6FF" strokeWidth="1.4" fill="rgba(0,246,255,0.08)" />
        <path d="M8 30 C8 24 12 20 18 20 C24 20 28 24 28 30"
          stroke="#00F6FF" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        {/* Check badge */}
        <circle cx="27" cy="10" r="6" fill="#060606" stroke="#00F6FF" strokeWidth="1.2" />
        <path d="M24 10 L26.5 12.5 L30.5 7.5" stroke="#00F6FF" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'execute',
    phase: 'action',
    label: 'Action\nExecuted',
    time: '+5s',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        {/* Play / execute arrow */}
        <circle cx="18" cy="18" r="13" stroke="#00F6FF" strokeWidth="1.4" fill="rgba(0,246,255,0.07)" />
        <path d="M14 12 L26 18 L14 24 Z" stroke="#00F6FF" strokeWidth="1.3"
          fill="rgba(0,246,255,0.2)" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'verified',
    phase: 'done',
    label: 'Verified\n& Resolved',
    time: '+60s',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        {/* Shield check — resolved */}
        <path d="M18 3 L30 8 L30 19 C30 25.5 24.5 31 18 33 C11.5 31 6 25.5 6 19 L6 8 Z"
          stroke="#00F6FF" strokeWidth="1.4" fill="rgba(0,246,255,0.1)" strokeLinejoin="round" />
        <path d="M12 18 L16 22 L24 14" stroke="#00F6FF" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

/* Phase config — colour + label for phase badges */
const PHASE_META = {
  trigger: { label: 'Trigger',  color: 'rgba(255,255,255,0.3)' },
  ai:      { label: 'AI',       color: '#00F6FF'                },
  human:   { label: 'Human',    color: 'rgba(255,255,255,0.7)'  },
  action:  { label: 'Execute',  color: '#00F6FF'                },
  done:    { label: 'Done',     color: '#00F6FF'                },
}

export default function Slide9() {
  return (
    <div className="s9-root">

      {/* Ambient glow — centre-right */}
      <div className="s9-glow" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="s9-header">
        <div className="s9-slide-label">Incident Workflow</div>
        <EpamLogo height={28} opacity={0.75} />
      </header>

      {/* ── Title block ── */}
      <section className="s9-title-block">
        <h2 className="s9-title">
          From Alert to <span className="s9-title-accent">Resolution</span>
        </h2>
        <div className="s9-title-rule" />
        <p className="s9-lead">
          Eight steps. One agent. Minutes — not hours.
        </p>
      </section>

      {/* ── Time comparison strip ── */}
      <div className="s9-time-strip">
        <div className="s9-time-before">
          <span className="s9-time-label">Traditional</span>
          <span className="s9-time-value s9-time-value--bad">2 – 4 hrs</span>
        </div>
        <div className="s9-time-arrow" aria-hidden="true">
          <svg viewBox="0 0 40 14" fill="none">
            <line x1="0" y1="7" x2="32" y2="7" stroke="#00F6FF" strokeWidth="1.5" strokeOpacity="0.5" />
            <path d="M28 3 L36 7 L28 11" stroke="#00F6FF" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="s9-time-arrow-label">EdgeFabric</span>
        </div>
        <div className="s9-time-after">
          <span className="s9-time-label">With Agentic Ops</span>
          <span className="s9-time-value s9-time-value--good">&lt; 5 min</span>
        </div>
      </div>

      {/* ── Workflow pipeline ── */}
      <main className="s9-pipeline">

        {/* Horizontal rail line */}
        <div className="s9-rail" aria-hidden="true" />

        {/* Step nodes */}
        {STEPS.map((step, i) => (
          <div key={step.id} className={`s9-step s9-step--${step.phase}`}>

            {/* Connector arrow between steps */}
            {i > 0 && (
              <div className="s9-connector" aria-hidden="true">
                <svg viewBox="0 0 24 10" fill="none">
                  <path d="M0 5 L18 5" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="3 2" />
                  <path d="M15 2 L20 5 L15 8" stroke="#00F6FF" strokeWidth="1.2"
                    strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}

            {/* Node card */}
            <div className="s9-node">

              {/* Phase badge */}
              <span
                className="s9-phase-badge"
                style={{ '--phase-color': PHASE_META[step.phase].color }}
              >
                {PHASE_META[step.phase].label}
              </span>

              {/* Icon */}
              <div className="s9-node-icon">{step.icon}</div>

              {/* Label */}
              <div className="s9-node-label">
                {step.label.split('\n').map((line, li) => (
                  <span key={li}>{line}</span>
                ))}
              </div>

              {/* Time badge */}
              <div className={`s9-time-badge s9-time-badge--${step.phase}`}>
                {step.time}
              </div>

            </div>
          </div>
        ))}

      </main>

      {/* ── Key message banner ── */}
      <div className="s9-key-message">
        <svg className="s9-quote-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 10 C3 6.5 5.5 4 9 4 L9 7 C7.5 7 6 8.2 6 10 L9 10 L9 16 L3 16 Z"
            fill="#00F6FF" fillOpacity="0.55" />
          <path d="M13 10 C13 6.5 15.5 4 19 4 L19 7 C17.5 7 16 8.2 16 10 L19 10 L19 16 L13 16 Z"
            fill="#00F6FF" fillOpacity="0.55" />
        </svg>
        <span className="s9-key-text">
          Minutes, <span className="s9-key-accent">not hours</span>
          <span className="s9-key-sep"> — </span>
          every time, with full human oversight
        </span>
      </div>

      {/* ── Footer ── */}
      <footer className="s9-footer">
        <div className="s9-presenter">
          <span className="s9-presenter-name">Venu Kandagatla</span>
          <span className="s9-presenter-sep">|</span>
          <span className="s9-presenter-role">Manager, Talent Development</span>
          <span className="s9-presenter-sep">|</span>
          <span className="s9-presenter-date">May 2026</span>
        </div>
        <span className="s9-page">09</span>
      </footer>

    </div>
  )
}
