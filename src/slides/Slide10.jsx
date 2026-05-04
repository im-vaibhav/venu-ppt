import EpamLogo from '../components/EpamLogo'
import './Slide10.css'

/* ── Before: pain points ── */
const BEFORE_ITEMS = [
  {
    id: 'dashboards',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2"  y="3"  width="11" height="8"  rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" fill="none" />
        <rect x="15" y="3"  width="11" height="8"  rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" fill="none" />
        <rect x="2"  y="14" width="11" height="8"  rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" fill="none" />
        <rect x="15" y="14" width="11" height="8"  rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" fill="none" />
        {/* overload X on bottom-right */}
        <path d="M19 17 L23 21 M23 17 L19 21" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    text: 'Multiple dashboards to juggle',
  },
  {
    id: 'query',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="22" height="16" rx="2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" fill="none" />
        <line x1="7" y1="11" x2="21" y2="11" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="7" y1="15" x2="16" y2="15" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" />
        {/* blinking cursor pain */}
        <text x="14" y="22" fill="rgba(255,255,255,0.35)"
          fontFamily="monospace" fontSize="7">rate(…)[5m]</text>
      </svg>
    ),
    text: 'Complex PromQL & log queries',
  },
  {
    id: 'switch',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* Two windows with switch arrows */}
        <rect x="2"  y="5"  width="10" height="8" rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" fill="none" />
        <rect x="16" y="5"  width="10" height="8" rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" fill="none" />
        <path d="M13 8 L16 8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M14.5 6.5 L16 8 L14.5 9.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Pain label */}
        <line x1="4"  y1="19" x2="24" y2="19" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round" />
        <line x1="4"  y1="22" x2="18" y2="22" stroke="rgba(255,255,255,0.1)"  strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    text: 'Constant context switching',
  },
  {
    id: 'time',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" fill="none" />
        <line x1="14" y1="14" x2="14" y2="7"  stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="14" x2="19" y2="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" strokeLinecap="round" />
        {/* crossed out */}
        <path d="M5 5 L23 23" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    text: 'Hours lost to manual correlation',
  },
]

/* ── After: chat exchange ── */
const CHAT = [
  {
    role: 'user',
    text: 'Why is latency high on node-3 right now?',
  },
  {
    role: 'agent',
    text: 'Root cause identified:',
    evidence: [
      { icon: '📊', label: 'Metric', detail: 'p99 latency spiked to 840ms at 14:32 — 3× baseline' },
      { icon: '📄', label: 'Log', detail: 'GC pause of 620ms detected on node-3 (heap 91% full)' },
      { icon: '🔗', label: 'Trace', detail: 'Downstream cache miss rate rose to 62% in the same window' },
    ],
    conclusion: 'Heap exhaustion on node-3 is causing GC pressure → elevated latency. Recommend increasing heap to 4 GB or triggering targeted eviction.',
    confidence: 94,
  },
  {
    role: 'user',
    text: 'Show me the proposed fix.',
  },
  {
    role: 'agent',
    text: 'Proposed action ready for your approval:',
    action: {
      type: 'Cache Eviction',
      scope: 'node-3 · LRU keys > 1h TTL',
      impact: 'Est. heap reduction: −28% · latency recovery: < 2 min',
      gate: 'Awaiting approval',
    },
  },
]

export default function Slide10() {
  return (
    <div className="s10-root">

      {/* Ambient glow — top-right */}
      <div className="s10-glow" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="s10-header">
        <div className="s10-slide-label">Natural Language Interface</div>
        <EpamLogo height={28} opacity={0.75} />
      </header>

      {/* ── Title ── */}
      <section className="s10-title-block">
        <h2 className="s10-title">
          Plain-English <span className="s10-title-accent">System Health</span>
        </h2>
        <div className="s10-title-rule" />
      </section>

      {/* ── Before / After body ── */}
      <main className="s10-body">

        {/* ── BEFORE column ── */}
        <div className="s10-col s10-col--before">

          <div className="s10-col-header">
            <span className="s10-col-badge s10-col-badge--before">Before</span>
            <h3 className="s10-col-title">Traditional Monitoring</h3>
          </div>

          {/* Pain-point rows */}
          <div className="s10-before-items">
            {BEFORE_ITEMS.map((item) => (
              <div key={item.id} className="s10-before-row">
                <div className="s10-before-icon">{item.icon}</div>
                <span className="s10-before-text">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Engineer frustration visual */}
          <div className="s10-frustration">
            <div className="s10-frustration-screen">
              <div className="s10-frust-bar s10-frust-bar--1" />
              <div className="s10-frust-bar s10-frust-bar--2" />
              <div className="s10-frust-bar s10-frust-bar--3" />
              <div className="s10-frust-bar s10-frust-bar--4" />
              <div className="s10-frust-tabs">
                <span>Grafana</span>
                <span>Loki</span>
                <span>Jaeger</span>
                <span>+6</span>
              </div>
            </div>
            <p className="s10-frustration-caption">Multiple tools, no single answer</p>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="s10-divider" aria-hidden="true">
          <div className="s10-divider-line" />
          <div className="s10-divider-vs">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 4 L28 10 L28 22 C28 27 22.5 31 16 32 C9.5 31 4 27 4 22 L4 10 Z"
                stroke="#00F6FF" strokeWidth="1.4" fill="rgba(0,246,255,0.07)" strokeLinejoin="round" />
              <path d="M11 16 L14.5 19.5 L21 13" stroke="#00F6FF" strokeWidth="1.7"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="s10-divider-line" />
        </div>

        {/* ── AFTER column ── */}
        <div className="s10-col s10-col--after">

          <div className="s10-col-header">
            <span className="s10-col-badge s10-col-badge--after">After</span>
            <h3 className="s10-col-title">EdgeFabric Agentic Ops</h3>
          </div>

          {/* Chat interface mockup */}
          <div className="s10-chat">

            {CHAT.map((msg, i) => (
              <div key={i} className={`s10-msg s10-msg--${msg.role}`}>

                {/* Avatar */}
                <div className="s10-avatar">
                  {msg.role === 'user' ? (
                    <svg viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="7" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" />
                      <path d="M3 19 C3 14.6 6.1 12 10 12 C13.9 12 17 14.6 17 19"
                        stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 20 20" fill="none">
                      <polygon points="10,2 17,6 17,14 10,18 3,14 3,6"
                        stroke="#00F6FF" strokeWidth="1.2" fill="rgba(0,246,255,0.1)" />
                      <circle cx="10" cy="10" r="3" fill="#00F6FF" fillOpacity="0.8" />
                    </svg>
                  )}
                </div>

                {/* Bubble */}
                <div className="s10-bubble">
                  <p className="s10-bubble-text">{msg.text}</p>

                  {/* Evidence cards */}
                  {msg.evidence && (
                    <div className="s10-evidence">
                      {msg.evidence.map((e, ei) => (
                        <div key={ei} className="s10-evidence-row">
                          <span className="s10-evidence-icon">{e.icon}</span>
                          <span className="s10-evidence-label">{e.label}</span>
                          <span className="s10-evidence-detail">{e.detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Conclusion */}
                  {msg.conclusion && (
                    <p className="s10-conclusion">{msg.conclusion}</p>
                  )}

                  {/* Confidence bar */}
                  {msg.confidence && (
                    <div className="s10-confidence">
                      <span className="s10-confidence-label">Confidence</span>
                      <div className="s10-confidence-track">
                        <div
                          className="s10-confidence-fill"
                          style={{ width: `${msg.confidence}%` }}
                        />
                      </div>
                      <span className="s10-confidence-value">{msg.confidence}%</span>
                    </div>
                  )}

                  {/* Proposed action card */}
                  {msg.action && (
                    <div className="s10-action-card">
                      <div className="s10-action-header">
                        <svg viewBox="0 0 16 16" fill="none">
                          <path d="M8 2 L13 5 L13 10 C13 13 10.5 15.2 8 16 C5.5 15.2 3 13 3 10 L3 5 Z"
                            stroke="#00F6FF" strokeWidth="1.2" fill="rgba(0,246,255,0.1)" strokeLinejoin="round" />
                          <path d="M5.5 8.5 L7 10 L10.5 6.5" stroke="#00F6FF" strokeWidth="1.3"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="s10-action-type">{msg.action.type}</span>
                        <span className="s10-action-gate">{msg.action.gate}</span>
                      </div>
                      <div className="s10-action-rows">
                        <div className="s10-action-row">
                          <span className="s10-action-key">Scope</span>
                          <span className="s10-action-val">{msg.action.scope}</span>
                        </div>
                        <div className="s10-action-row">
                          <span className="s10-action-key">Impact</span>
                          <span className="s10-action-val">{msg.action.impact}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Input bar */}
            <div className="s10-input-bar">
              <span className="s10-input-placeholder">Ask about your cache…</span>
              <div className="s10-input-send">
                <svg viewBox="0 0 18 18" fill="none">
                  <path d="M2 9 L16 9 M11 4 L16 9 L11 14"
                    stroke="#00F6FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* ── Footer ── */}
      <footer className="s10-footer">
        <div className="s10-presenter">
          <span className="s10-presenter-name">Venu Kandagatla</span>
          <span className="s10-presenter-sep">|</span>
          <span className="s10-presenter-role">Manager, Talent Development</span>
          <span className="s10-presenter-sep">|</span>
          <span className="s10-presenter-date">May 2026</span>
        </div>
        <span className="s10-page">10</span>
      </footer>

    </div>
  )
}
