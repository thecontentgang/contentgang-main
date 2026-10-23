'use client';

interface Props {
  isActive?: boolean;
}

const BASE = 210;
const BAR_W = 30;
const R = 6;

const bars = [
  { x: 74, top: 155, delay: '0s' },
  { x: 119, top: 115, delay: '0.2s' },
  { x: 164, top: 82, delay: '0.4s' },
  { x: 209, top: 52, delay: '0.6s', accent: true },
];

const dataPoints = [
  { cx: 89, cy: 183, delay: '0.4s' },
  { cx: 134, cy: 155, delay: '0.6s' },
  { cx: 179, cy: 116, delay: '0.8s' },
  { cx: 224, cy: 81, delay: '1.0s' },
];

// Bar with rounded top corners only, so the base sits flat on the axis.
const barPath = (x: number, top: number) =>
  `M${x},${BASE} L${x},${top + R} Q${x},${top} ${x + R},${top} L${x + BAR_W - R},${top} Q${x + BAR_W},${top} ${x + BAR_W},${top + R} L${x + BAR_W},${BASE} Z`;

export default function GrowVisual({ isActive = true }: Props) {
  return (
    <svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" className="w-[90%] h-[90%] overflow-visible">
      <defs>
        <linearGradient id="g-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#12110B" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#12110B" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="g-bar-accent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF4F31" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FF4F31" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="g-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF4F31" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FF4F31" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g-line" x1="89" y1="0" x2="224" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF8A6C" />
          <stop offset="100%" stopColor="#FF4F31" />
        </linearGradient>
        <filter id="g-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="g-shadow" x="-30%" y="-40%" width="160%" height="220%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#FF4F31" floodOpacity="0.25" />
        </filter>
      </defs>

      <style>
        {`
          .anim-bar {
            animation: growBar 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
            transform: scaleY(0);
          }
          @keyframes growBar {
            0%, 5% { transform: scaleY(0); }
            15%, 85% { transform: scaleY(1); }
            95%, 100% { transform: scaleY(0); }
          }

          .anim-line-grow {
            stroke-dasharray: 200;
            animation: drawLine 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
          }
          @keyframes drawLine {
            0%, 20% { stroke-dashoffset: 200; opacity: 0; }
            25% { opacity: 1; }
            45%, 85% { stroke-dashoffset: 0; opacity: 1; }
            95%, 100% { stroke-dashoffset: -200; opacity: 0; }
          }

          .anim-area {
            animation: fadeArea 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
          }
          @keyframes fadeArea {
            0%, 30% { opacity: 0; }
            50%, 85% { opacity: 1; }
            95%, 100% { opacity: 0; }
          }

          .anim-dp {
            animation: popDot 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
            transform: scale(0);
            opacity: 0;
          }
          @keyframes popDot {
            0%, 15% { transform: scale(0); opacity: 0; }
            20% { transform: scale(1.3); opacity: 1; }
            25%, 85% { transform: scale(1); opacity: 1; }
            95%, 100% { transform: scale(0); opacity: 0; }
          }

          .anim-badge {
            animation: popBadge 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
          }
          @keyframes popBadge {
            0%, 30% { transform: translate(-5px, 5px); opacity: 0; }
            35%, 85% { transform: translate(0px, 0px); opacity: 1; }
            95%, 100% { transform: translate(5px, -5px); opacity: 0; }
          }
        `}
      </style>

      {/* Guides */}
      {[55, 95, 135, 175].map((y) => (
        <line key={y} x1="56" y1={y} x2="270" y2={y} stroke="#12110B" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="2 5" />
      ))}
      <line x1="56" y1={BASE} x2="270" y2={BASE} stroke="#12110B" strokeOpacity="0.18" strokeWidth="1.2" strokeLinecap="round" />

      {/* Bars */}
      {bars.map((bar, i) => (
        <path
          key={i}
          d={barPath(bar.x, bar.top)}
          fill={bar.accent ? 'url(#g-bar-accent)' : 'url(#g-bar)'}
          className="anim-bar"
          style={{ transformOrigin: `${bar.x + BAR_W / 2}px ${BASE}px`, animationDelay: bar.delay }}
        />
      ))}

      {/* Area under the curve */}
      <path d="M89,183 Q134,155 179,116 Q210,90 224,81 L224,210 L89,210 Z" fill="url(#g-area)" className="anim-area" />

      {/* Rising curve */}
      <path
        d="M89,183 Q134,155 179,116 Q210,90 224,81"
        stroke="url(#g-line)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#g-glow)"
        className="anim-line-grow"
      />

      {/* Data points */}
      {dataPoints.map((pt, i) => (
        <g
          key={i}
          className="anim-dp"
          style={{ transformOrigin: `${pt.cx}px ${pt.cy}px`, animationDelay: pt.delay }}
        >
          <circle cx={pt.cx} cy={pt.cy} r="8" fill="#FF4F31" fillOpacity="0.14" />
          <circle cx={pt.cx} cy={pt.cy} r="4.2" fill="#FFFFFF" stroke="#FF4F31" strokeWidth="2.2" />
        </g>
      ))}

      {/* Upward arrow at the tip */}
      <g className="anim-badge" style={{ animationDelay: '1.1s' }}>
        <line x1="228" y1="77" x2="246" y2="59" stroke="#FF4F31" strokeWidth="2.5" strokeLinecap="round" />
        <polyline points="236,59 246,59 246,69" fill="none" stroke="#FF4F31" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Growth badge */}
      <g className="anim-badge" style={{ animationDelay: '1.2s' }}>
        <rect x="196" y="22" width="68" height="22" rx="11" fill="#FF4F31" filter="url(#g-shadow)" />
        <text
          x="230"
          y="36.4"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="700"
          style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          +growth
        </text>
      </g>
    </svg>
  );
}
