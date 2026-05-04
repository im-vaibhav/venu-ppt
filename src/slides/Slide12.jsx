import NetworkMotif from '../components/NetworkMotif'
import EpamLogo from '../components/EpamLogo'
import './Slide12.css'

export default function Slide12() {
  return (
    <div className="s12-root">

      {/* Reuse the network motif from title slide — bookend effect */}
      <NetworkMotif opacity={0.05} />

      {/* Radial hero glow — centred */}
      <div className="s12-glow-centre" aria-hidden="true" />
      {/* Corner accent glows */}
      <div className="s12-glow-tl" aria-hidden="true" />
      <div className="s12-glow-br" aria-hidden="true" />

      {/* ── Main centred content ── */}
      <main className="s12-main">

        {/* epam-logo.webp — large centred */}
        <div className="s12-logo-wrap">
          <EpamLogo height={72} opacity={0.9} className="s12-logo" />
        </div>

        {/* Accent rule */}
        <div className="s12-rule" />

        {/* Closing headline */}
        <h2 className="s12-headline">
          EdgeFabric <span className="s12-headline-accent">+</span> Agentic Ops
        </h2>

        {/* Tagline */}
        <p className="s12-tagline">
          Intelligent infrastructure that observes, understands and acts —
          <br />
          always with a human in control.
        </p>

        {/* Key message pill */}
        <div className="s12-pill">
          <span className="s12-pill-dot" aria-hidden="true" />
          Your cache explains itself
        </div>

        {/* Three closing pillars */}
        <div className="s12-pillars">
          {[
            { label: 'Production-Grade', sub: 'Distributed Cache' },
            { label: 'AI-Powered Ops', sub: 'Agentic Intelligence' },
            { label: 'Human-in-the-Loop', sub: 'Safe by Design' },
          ].map((p) => (
            <div key={p.label} className="s12-pillar">
              <span className="s12-pillar-dot" aria-hidden="true" />
              <div className="s12-pillar-text">
                <span className="s12-pillar-label">{p.label}</span>
                <span className="s12-pillar-sub">{p.sub}</span>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* ── Footer — presenter + thank you ── */}
      <footer className="s12-footer">
        <div className="s12-footer-left">
          <span className="s12-presenter-name">Venu Kandagatla</span>
          <span className="s12-presenter-sep">|</span>
          <span className="s12-presenter-role">Manager, Talent Development</span>
          <span className="s12-presenter-sep">|</span>
          <span className="s12-presenter-date">May 2026</span>
        </div>
        <div className="s12-footer-right">
          <span className="s12-thank">Thank you</span>
        </div>
      </footer>

    </div>
  )
}
