'use client';

interface Props {
  isActive?: boolean;
}

const flashRays = [0, 45, 90, 135, 180, 225, 270, 315];

export default function CreateVisual({ isActive = true }: Props) {
  return (
    <svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" className="w-[90%] h-[90%] overflow-visible">
      <defs>
        <linearGradient id="c-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34333B" />
          <stop offset="100%" stopColor="#12110B" />
        </linearGradient>
        <linearGradient id="c-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A6C" />
          <stop offset="55%" stopColor="#FF4F31" />
          <stop offset="100%" stopColor="#C93217" />
        </linearGradient>
        <radialGradient id="c-lens" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#7A6A78" />
          <stop offset="40%" stopColor="#25222B" />
          <stop offset="100%" stopColor="#07070A" />
        </radialGradient>
        <linearGradient id="c-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="c-blur" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="c-shadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#12110B" floodOpacity="0.22" />
        </filter>
      </defs>

      <style>
        {`
          .item-seq {
            transform-origin: 150px 130px;
            animation: popSequence 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
          }
          @keyframes popSequence {
            0%, 5% { transform: scale(0.2) translateY(20px); opacity: 0; }
            12% { transform: scale(1.05) translateY(-5px); opacity: 1; }
            15% { transform: scale(1) translateY(0); opacity: 1; }
            38% { transform: scale(1) translateY(0); opacity: 1; }
            43%, 100% { transform: scale(0.9) translateY(-20px); opacity: 0; }
          }

          .flash-burst {
            transform-origin: 150px 130px;
            animation: burstAnim 4s infinite cubic-bezier(0.2, 0, 0, 1);
          }
          @keyframes burstAnim {
            0%, 14% { opacity: 0; transform: scale(0.2) rotate(-20deg); }
            15% { opacity: 1; transform: scale(1) rotate(0deg); }
            24%, 100% { opacity: 0; transform: scale(1.3) rotate(15deg); }
          }

          .flash-ring {
            fill: none;
            stroke: #FF4F31;
            transform-origin: 150px 130px;
            animation: flashRingAnim 4s infinite cubic-bezier(0.2, 0, 0, 1);
          }
          @keyframes flashRingAnim {
            0%, 14% { transform: scale(0.3); opacity: 0; stroke-width: 10; }
            15% { opacity: 0.8; stroke-width: 10; }
            28%, 100% { transform: scale(2.5); opacity: 0; stroke-width: 1; }
          }

          .flash-bg {
            fill: #FF4F31;
            transform-origin: 150px 130px;
            animation: flashBgAnim 4s infinite;
          }
          @keyframes flashBgAnim {
            0%, 14% { opacity: 0; transform: scale(0.3); }
            15% { opacity: 0.16; transform: scale(1); }
            28%, 100% { opacity: 0; transform: scale(1.5); }
          }

          .rec-dot { animation: recBlink 1s infinite steps(1); }
          @keyframes recBlink { 50% { opacity: 0.2; } }
        `}
      </style>

      {/* Viewfinder corner marks */}
      {[
        'M 96 76 L 80 76 L 80 92',
        'M 204 76 L 220 76 L 220 92',
        'M 96 184 L 80 184 L 80 168',
        'M 204 184 L 220 184 L 220 168',
      ].map((d) => (
        <path key={d} d={d} fill="none" stroke="#FF4F31" strokeWidth="2" opacity="0.45" strokeLinecap="round" strokeLinejoin="round" />
      ))}

      {/* =========================================
          ITEM 1: CAMERA (delay 0s)
          ========================================= */}
      <g className="item-seq" style={{ animationDelay: '0s' }}>
        <ellipse cx="150" cy="170" rx="40" ry="5" fill="#12110B" opacity="0.18" filter="url(#c-blur)" />
        <g transform="translate(150, 130)" filter="url(#c-shadow)">
          {/* Top plate + flash window */}
          <rect x="-24" y="-30" width="16" height="8" rx="2.5" fill="#12110B" />
          <rect x="-4" y="-32" width="28" height="10" rx="3" fill="url(#c-body)" />
          <rect x="1" y="-29" width="18" height="4" rx="2" fill="#FFE3DB" opacity="0.85" />
          {/* Body */}
          <rect x="-34" y="-24" width="68" height="46" rx="10" fill="url(#c-body)" />
          <rect x="-34" y="-24" width="68" height="23" rx="10" fill="url(#c-sheen)" />
          <rect x="-33.5" y="-23.5" width="67" height="45" rx="9.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.1" />
          {/* Shutter + indicator */}
          <circle cx="-24" cy="-14" r="2.6" fill="#FF4F31" />
          <rect x="22" y="-18" width="6" height="3" rx="1.5" fill="#FFFFFF" opacity="0.35" />
          {/* Lens */}
          <circle cx="0" cy="0" r="17" fill="#07070A" stroke="#4A4953" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="12.5" fill="url(#c-lens)" stroke="#FF4F31" strokeOpacity="0.55" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="5" fill="#07070A" opacity="0.8" />
          <ellipse cx="-4" cy="-5" rx="4.5" ry="2.6" fill="#FFFFFF" opacity="0.55" transform="rotate(-30 -4 -5)" />
          <circle cx="4" cy="4" r="1.4" fill="#FF8A6C" opacity="0.8" />
        </g>
      </g>

      {/* Camera flash */}
      <circle cx="150" cy="130" r="50" className="flash-bg" style={{ animationDelay: '0s' }} />
      <circle cx="150" cy="130" r="25" className="flash-ring" style={{ animationDelay: '0s' }} />
      <g className="flash-burst" style={{ animationDelay: '0s' }}>
        {flashRays.map((deg) => (
          <line key={`cam-flash-${deg}`} x1="150" y1="92" x2="150" y2="72" stroke="#FF4F31" strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${deg} 150 130)`} />
        ))}
      </g>

      {/* =========================================
          ITEM 2: MOBILE (delay 2s)
          ========================================= */}
      <g className="item-seq" style={{ animationDelay: '2s' }}>
        <ellipse cx="150" cy="176" rx="30" ry="5" fill="#12110B" opacity="0.18" filter="url(#c-blur)" />
        <g transform="translate(150, 130)" filter="url(#c-shadow)">
          {/* Phone body */}
          <rect x="-25" y="-44" width="50" height="88" rx="11" fill="url(#c-body)" />
          <rect x="-24.5" y="-43.5" width="49" height="87" rx="10.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.12" />
          {/* Screen */}
          <rect x="-20" y="-39" width="40" height="78" rx="7" fill="url(#c-screen)" />
          <rect x="-20" y="-39" width="40" height="39" rx="7" fill="url(#c-sheen)" />
          {/* Island + REC */}
          <rect x="-7" y="-36" width="14" height="4.5" rx="2.25" fill="#12110B" />
          <circle cx="-13" cy="-24" r="1.8" fill="#FFFFFF" className="rec-dot" />
          <text x="-9" y="-21.6" fill="#FFFFFF" fontSize="5.5" fontWeight="700" opacity="0.9" style={{ letterSpacing: '0.1em' }}>REC</text>
          {/* Play button */}
          <circle cx="0" cy="4" r="11.5" fill="#FFFFFF" fillOpacity="0.22" />
          <circle cx="0" cy="4" r="11.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1.2" />
          <polygon points="-3,-1 -3,9 6,4" fill="#FFFFFF" />
          {/* Timeline */}
          <rect x="-14" y="28" width="28" height="2.2" rx="1.1" fill="#FFFFFF" opacity="0.3" />
          <rect x="-14" y="28" width="16" height="2.2" rx="1.1" fill="#FFFFFF" />
        </g>
      </g>

      {/* Phone flash */}
      <circle cx="150" cy="130" r="50" className="flash-bg" style={{ animationDelay: '2s' }} />
      <circle cx="150" cy="130" r="25" className="flash-ring" style={{ animationDelay: '2s' }} />
      <g className="flash-burst" style={{ animationDelay: '2s' }}>
        {flashRays.map((deg) => (
          <line key={`mob-flash-${deg}`} x1="150" y1="92" x2="150" y2="72" stroke="#FF4F31" strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${deg} 150 130)`} />
        ))}
      </g>
    </svg>
  );
}
