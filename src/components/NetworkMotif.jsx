/* Network motif SVG component for slide backgrounds */
export default function NetworkMotif({ opacity = 0.07 }) {
  // Static node positions (normalized 0-1)
  const nodes = [
    [0.05, 0.12], [0.18, 0.28], [0.08, 0.52], [0.22, 0.72], [0.12, 0.88],
    [0.35, 0.08], [0.42, 0.35], [0.38, 0.62], [0.45, 0.82], [0.55, 0.15],
    [0.65, 0.38], [0.58, 0.68], [0.72, 0.10], [0.78, 0.30], [0.88, 0.55],
    [0.70, 0.75], [0.82, 0.88], [0.92, 0.20], [0.95, 0.70], [0.50, 0.50],
    [0.28, 0.45], [0.62, 0.52], [0.15, 0.42], [0.85, 0.42], [0.48, 0.22],
  ]

  // Edges: pairs of node indices (hand-picked for natural look)
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[1,5],[5,6],[6,7],[7,8],[5,9],
    [9,12],[12,13],[13,17],[13,14],[14,18],[6,10],[10,11],[11,15],
    [15,16],[10,21],[21,19],[19,20],[20,22],[19,24],[24,6],[9,17],
    [0,22],[3,20],[7,11],[14,23],[23,17],[1,6],[2,20],[8,15],
  ]

  return (
    <svg
      viewBox="0 0 1 1"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity,
        pointerEvents: 'none',
      }}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="white"
          strokeWidth="0.002"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x} cy={y} r="0.006"
          fill="white"
        />
      ))}
    </svg>
  )
}
