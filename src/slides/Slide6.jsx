import EpamLogo from '../components/EpamLogo'
import './Slide6.css'

/* ── MCP Observe items ── */
const OBSERVE_ITEMS = [
  {
    id: 'metrics',
    label: 'Metrics',
    detail: 'Real-time hit/miss ratios, latency percentiles, memory pressure — read-only scrape.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3"  y="18" width="5" height="11" rx="1.2" fill="#00F6FF" fillOpacity="0.2" stroke="#00F6FF" strokeWidth="1.3" />
        <rect x="11" y="11" width="5" height="18" rx="1.2" fill="#00F6FF" fillOpacity="0.35" stroke="#00F6FF" strokeWidth="1.3" />
        <rect x="19" y="14" width="5" height="15" rx="1.2" fill="#00F6FF" fillOpacity="0.2" stroke="#00F6FF" strokeWidth="1.3" />
        <polyline points="5.5,17 13.5,10 21.5,13 28,6"
          stroke="#00F6FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="28" cy="6" r="2" fill="#00F6FF" />
      </svg>
    ),
  },
  {
    id: 'logs',
    label: 'Logs',
    detail: 'Structured event streams surfaced and correlated — no writes, no side-effects.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="4" width="22" height="24" rx="2.5" stroke="#00F6FF" strokeWidth="1.3" strokeOpacity="0.5" fill="none" />
        <line x1="9"  y1="10" x2="23" y2="10" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="9"  y1="15" x2="23" y2="15" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
        <line x1="9"  y1="20" x2="18" y2="20" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      </svg>
    ),
  },
  {
    id: 'health',
    label: 'Health Checks',
    detail: 'Cluster topology, node liveness and replication lag polled passively on a schedule.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* Heart-beat line */}
        <polyline
          points="2,17 7,17 10,9 13,25 16,14 19,20 22,17 30,17"
          stroke="#00F6FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </svg>
    ),
  },
]

/* ── MCP Act items ── */
const ACT_ITEMS = [
  {
    id: 'evict',
    label: 'Cache Eviction',
    detail: 'Targeted key eviction triggered only after human approval via gated playbook.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* Bin / delete */}
        <rect x="8" y="10" width="16" height="18" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" fill="none" />
        <line x1="5" y1="7" x2="27" y2="7" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="13" y1="4" x2="19" y2="4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="13" y1="14" x2="13" y2="24" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="19" y1="14" x2="19" y2="24" stroke="#00F6FF" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'rebalance',
    label: 'Node Rebalancing',
    detail: 'Slot migration and shard redistribution executed under strict change-control gates.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* Two nodes with arrows */}
        <circle cx="8"  cy="16" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" fill="none" />
        <circle cx="24" cy="16" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" fill="none" />
        <path d="M13 13 L19 13" stroke="#00F6FF" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17 11 L19 13 L17 15" stroke="#00F6FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 19 L13 19" stroke="#00F6FF" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M15 17 L13 19 L15 21" stroke="#00F6FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'config',
    label: 'Config Updates',
    detail: 'TTL, eviction policy and thread-pool tuning applied only on explicit operator sign-off.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        {/* Gear */}
        <circle cx="16" cy="16" r="5.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" fill="none" />
        <path d="M16 4 L16 7 M16 25 L16 28 M4 16 L7 16 M25 16 L28 16
                 M7.5 7.5 L9.6 9.6 M22.4 22.4 L24.5 24.5
                 M7.5 24.5 L9.6 22.4 M22.4 9.6 L24.5 7.5"
          stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" strokeLinecap="round" />
        {/* Approval check */}
        <path d="M12.5 16 L15 18.5 L20 13" stroke="#00F6FF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Slide6() {
  return (
    <div className="s6-root">

      {/* Ambient glow — bottom-right */}
      <div className="s6-glow" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="s6-header">
        <div className="s6-slide-label">Safety Model</div>
        <EpamLogo height={28} opacity={0.75} />
      </header>

      {/* ── Title block ── */}
      <section className="s6-title-block">
        <h2 className="s6-title">
          Safe by Design:&nbsp;
          <span className="s6-title-accent">Observe</span>
          <span className="s6-title-vs"> vs </span>
          <span className="s6-title-act">Act</span>
        </h2>
        <div className="s6-title-rule" />
      </section>

      {/* ── Two-column body ── */}
      <main className="s6-columns">

        {/* ── LEFT — MCP Observe ── */}
        <div className="s6-col s6-col--observe">

          {/* Column header badge */}
          <div className="s6-col-header">
            <div className="s6-col-badge s6-col-badge--observe">
              {/* Eye icon */}
              <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <ellipse cx="11" cy="11" rx="9" ry="6" stroke="#00F6FF" strokeWidth="1.5" fill="none" />
                <circle cx="11" cy="11" r="3" fill="#00F6FF" fillOpacity="0.9" />
                <circle cx="11" cy="11" r="1.2" fill="#060606" />
              </svg>
            </div>
            <div className="s6-col-title-group">
              <span className="s6-col-title">MCP Observe</span>
              <span className="s6-col-mode s6-col-mode--observe">Read-only</span>
            </div>
          </div>

          {/* Items */}
          <div className="s6-items">
            {OBSERVE_ITEMS.map((item) => (
              <div key={item.id} className="s6-item s6-item--observe">
                <div className="s6-item-icon">{item.icon}</div>
                <div className="s6-item-text">
                  <span className="s6-item-label">{item.label}</span>
                  <span className="s6-item-detail">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Read-only stamp */}
          <div className="s6-stamp s6-stamp--observe">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6.5" stroke="#00F6FF" strokeWidth="1.2" strokeOpacity="0.5" />
              <path d="M5 8 L7.5 10.5 L12 5.5" stroke="#00F6FF" strokeWidth="1.4"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            No side-effects · Always safe
          </div>
        </div>

        {/* ── CENTRE divider ── */}
        <div className="s6-divider" aria-hidden="true">
          <div className="s6-divider-line" />
          <div className="s6-divider-badge">
            {/* Shield icon */}
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 3 L24 7 L24 15 C24 20.5 19.5 25 14 26 C8.5 25 4 20.5 4 15 L4 7 Z"
                stroke="#00F6FF" strokeWidth="1.5" fill="rgba(0,246,255,0.07)" strokeLinejoin="round" />
              <path d="M10 14 L13 17 L18 11" stroke="#00F6FF" strokeWidth="1.7"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="s6-divider-line" />
        </div>

        {/* ── RIGHT — MCP Act ── */}
        <div className="s6-col s6-col--act">

          {/* Column header badge */}
          <div className="s6-col-header">
            <div className="s6-col-badge s6-col-badge--act">
              {/* Bolt / action icon */}
              <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M13 3 L7 13 L11 13 L9 20 L16 10 L12 10 Z"
                  stroke="#00F6FF" strokeWidth="1.5" strokeLinejoin="round"
                  fill="rgba(0,246,255,0.15)" />
              </svg>
            </div>
            <div className="s6-col-title-group">
              <span className="s6-col-title">MCP Act</span>
              <span className="s6-col-mode s6-col-mode--act">Approval-gated</span>
            </div>
          </div>

          {/* Items */}
          <div className="s6-items">
            {ACT_ITEMS.map((item) => (
              <div key={item.id} className="s6-item s6-item--act">
                <div className="s6-item-icon">{item.icon}</div>
                <div className="s6-item-text">
                  <span className="s6-item-label">{item.label}</span>
                  <span className="s6-item-detail">{item.detail}</span>
                </div>
                {/* Gate lock pill */}
                <div className="s6-gate-pill" aria-label="requires approval">
                  <svg viewBox="0 0 12 14" fill="none" aria-hidden="true">
                    <rect x="1" y="6" width="10" height="7" rx="1.5"
                      stroke="#00F6FF" strokeWidth="1.1" fill="rgba(0,246,255,0.1)" />
                    <path d="M3.5 6 L3.5 4 A2.5 2.5 0 0 1 8.5 4 L8.5 6"
                      stroke="#00F6FF" strokeWidth="1.1" strokeLinecap="round" fill="none" />
                  </svg>
                  Approval
                </div>
              </div>
            ))}
          </div>

          {/* Gated stamp */}
          <div className="s6-stamp s6-stamp--act">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="4" y="8" width="8" height="6" rx="1.2"
                stroke="#00F6FF" strokeWidth="1.1" strokeOpacity="0.5" fill="none" />
              <path d="M5.5 8 L5.5 6 A2.5 2.5 0 0 1 10.5 6 L10.5 8"
                stroke="#00F6FF" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.5" fill="none" />
            </svg>
            Always requires human approval
          </div>
        </div>

      </main>

      {/* ── Key message banner ── */}
      <div className="s6-key-message">
        <svg className="s6-quote-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 10 C3 6.5 5.5 4 9 4 L9 7 C7.5 7 6 8.2 6 10 L6 10 L9 10 L9 16 L3 16 Z"
            fill="#00F6FF" fillOpacity="0.6" />
          <path d="M13 10 C13 6.5 15.5 4 19 4 L19 7 C17.5 7 16 8.2 16 10 L16 10 L19 10 L19 16 L13 16 Z"
            fill="#00F6FF" fillOpacity="0.6" />
        </svg>
        <span className="s6-key-text">
          Intelligence without&nbsp;<span className="s6-key-accent">risk</span>
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
      <footer className="s6-footer">
        <div className="s6-presenter">
          <span className="s6-presenter-name">Venu Kandagatla</span>
          <span className="s6-presenter-sep">|</span>
          <span className="s6-presenter-role">Manager, Talent Development</span>
          <span className="s6-presenter-sep">|</span>
          <span className="s6-presenter-date">May 2026</span>
        </div>
        <span className="s6-page">06</span>
      </footer>

    </div>
  )
}
