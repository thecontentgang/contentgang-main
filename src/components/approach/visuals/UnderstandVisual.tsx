'use client';

interface Props {
  isActive?: boolean;
}

const CX = 150;
const CY = 130;

// Inputs we gather before anything else: each one is drawn into the core.
const nodes = [
  { label: 'audience', x: 62, y: 52, delay: '0s' },
  { label: 'brand', x: 238, y: 62, delay: '0.6s' },
  { label: 'goals', x: 44, y: 150, delay: '1.2s' },
  { label: 'market', x: 252, y: 168, delay: '1.8s' },
  { label: 'problem', x: 106, y: 216, delay: '2.4s' },
  { label: 'vision', x: 204, y: 214, delay: '3.0s' },
];

export default function UnderstandVisual({ isActive = true }: Props) {
  return (
    <svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" className="w-[90%] h-[90%] overflow-visible">
      <defs>
        <radialGradient id="u-core" cx="38%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#FF8A6C" />
          <stop offset="45%" stopColor="#FF4F31" />
          <stop offset="100%" stopColor="#B72A12" />
        </radialGradient>
        <radialGradient id="u-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF4F31" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#FF4F31" stopOpacity="0" />
        </radialGradient>
        <filter id="u-shadow" x="-30%" y="-40%" width="160%" height="220%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#12110B" floodOpacity="0.12" />
        </filter>
      </defs>

      <style>
        {`
          .u-node {
            animation: uSuckIn 3.6s infinite cubic-bezier(0.5, 0, 0.2, 1) both;
          }
          .u-line {
            stroke: rgba(255, 79, 49, 0.35);
            stroke-width: 1.2;
            stroke-linecap: round;
            stroke-dasharray: 2 7;
            animation: uDash 1s linear infinite;
          }
          .u-core {
            animation: uPulse 2.4s infinite alternate ease-in-out;
          }
          .u-ring {
            transform-origin: ${CX}px ${CY}px;
            animation: uRing 3.6s infinite ease-out;
          }

          @keyframes uSuckIn {
            0% { transform: translate(0px, 0px) scale(0.4); opacity: 0; }
            12% { transform: translate(0px, 0px) scale(1); opacity: 1; }
            50% { transform: translate(0px, 0px) scale(1); opacity: 1; }
            100% { transform: translate(var(--tx), var(--ty)) scale(0.15); opacity: 0; }
          }
          @keyframes uDash { to { stroke-dashoffset: -18; } }
          @keyframes uPulse {
            0% { transform: scale(0.96); }
            100% { transform: scale(1.06); }
          }
          @keyframes uRing {
            0% { transform: scale(0.6); opacity: 0.5; }
            100% { transform: scale(1.8); opacity: 0; }
          }
        `}
      </style>

      {/* Soft halo behind the core */}
      <circle cx={CX} cy={CY} r="86" fill="url(#u-halo)" />

      {/* Orbit guides */}
      <circle cx={CX} cy={CY} r="52" fill="none" stroke="#12110B" strokeOpacity="0.07" strokeWidth="1" strokeDasharray="2 5" />
      <circle cx={CX} cy={CY} r="96" fill="none" stroke="#12110B" strokeOpacity="0.05" strokeWidth="1" />

      {/* Streams flowing into the core */}
      {nodes.map((n) => (
        <line key={`l-${n.label}`} className="u-line" x1={n.x} y1={n.y} x2={CX} y2={CY} />
      ))}

      {/* Input chips */}
      {nodes.map((n) => {
        const w = n.label.length * 6.3 + 26;
        return (
          <g
            key={n.label}
            className="u-node"
            style={
              {
                '--tx': `${CX - n.x}px`,
                '--ty': `${CY - n.y}px`,
                animationDelay: n.delay,
                transformOrigin: `${n.x}px ${n.y}px`,
              } as React.CSSProperties
            }
          >
            <g transform={`translate(${n.x} ${n.y})`}>
              <rect x={-w / 2} y="-11" width={w} height="22" rx="11" fill="#FFFFFF" stroke="#12110B" strokeOpacity="0.08" filter="url(#u-shadow)" />
              <circle cx={-w / 2 + 11} cy="0" r="2.6" fill="#FF4F31" />
              <text
                x={-w / 2 + 19}
                y="3.6"
                fill="#12110B"
                fillOpacity="0.78"
                fontSize="9.5"
                fontWeight="600"
                style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                {n.label}
              </text>
            </g>
          </g>
        );
      })}

      {/* Expanding ripples as inputs land */}
      <circle cx={CX} cy={CY} r="26" fill="none" stroke="#FF4F31" strokeOpacity="0.5" strokeWidth="1.2" className="u-ring" />
      <circle cx={CX} cy={CY} r="26" fill="none" stroke="#FF4F31" strokeOpacity="0.5" strokeWidth="1.2" className="u-ring" style={{ animationDelay: '1.8s' }} />

      {/* Core */}
      <g style={{ transformOrigin: `${CX}px ${CY}px` }} className="u-core">
        <circle cx={CX} cy={CY} r="26" fill="#FF4F31" fillOpacity="0.12" />
        <circle cx={CX} cy={CY} r="19" fill="url(#u-core)" filter="url(#u-shadow)" />
        <ellipse cx={CX - 6} cy={CY - 8} rx="7" ry="4" fill="#FFFFFF" fillOpacity="0.35" />
      </g>
    </svg>
  );
}
