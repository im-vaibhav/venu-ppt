/* EPAM logo — uses the official epam-logo.webp asset */
import epamLogo from '../assets/epam-logo.webp'

/**
 * EpamLogo
 * @param {number}  height    - rendered height in px (width scales proportionally)
 * @param {number}  opacity   - overall opacity, useful for watermark/footer usage
 * @param {string}  className - optional extra CSS class
 */
export default function EpamLogo({ height = 28, opacity = 0.75, className = '' }) {
  return (
    <img
      src={epamLogo}
      alt="EPAM"
      height={height}
      style={{ opacity, display: 'block', width: 'auto' }}
      className={className}
    />
  )
}
