import NetworkMotif from '../components/NetworkMotif'
import EpamLogo from '../components/EpamLogo'
import './Slide1.css'

export default function Slide1() {
  return (
    <div className="s1-root">
      {/* Subtle network motif across full bg */}
      <NetworkMotif opacity={0.06} />

      {/* Top-right logo */}
      <header className="s1-header">
        <EpamLogo height={28} opacity={0.75} className="s1-logo" />
      </header>

      {/* Horizontal hero band — faint radial glow */}
      <div className="s1-hero-band" />

      {/* Centre content */}
      <main className="s1-main">
        <span className="s1-eyebrow">Distributed Systems · Caching Infrastructure</span>

        <h1 className="s1-title">
          EdgeFabric<span className="s1-dash"> —</span>
          <br />
          Distributed Cache Platform
        </h1>

        <div className="s1-divider" />

        <p className="s1-subtitle">
          Where high-performance caching meets 
          &amp; AI-powered operations
        </p>
      </main>

      {/* Bottom presenter strip */}
      <footer className="s1-footer">
        <div className="s1-presenter">
          <span className="s1-presenter-name">Venu Kandagatla</span>
          <span className="s1-presenter-sep">|</span>
          <span className="s1-presenter-role">Manager, Talent Development</span>
          <span className="s1-presenter-sep">|</span>
          <span className="s1-presenter-date">May 2026</span>
        </div>
        <div className="s1-team">
          <span className="s1-team-by">Created by</span>
          <span className="s1-team-name">Team Atlas</span>
        </div>
      </footer>
    </div>
  )
}
