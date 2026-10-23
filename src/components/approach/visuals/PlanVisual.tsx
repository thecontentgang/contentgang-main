'use client';

interface Props {
  isActive?: boolean;
}

export default function PlanVisual({ isActive = true }: Props) {
  return (
    <svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" className="w-[90%] h-[90%] overflow-visible">
      <defs>
        <linearGradient id="p-line" x1="40" y1="0" x2="265" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#12110B" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FF4F31" />
        </linearGradient>
        <radialGradient id="p-target" cx="38%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#FF8A6C" />
          <stop offset="55%" stopColor="#FF4F31" />
          <stop offset="100%" stopColor="#C93217" />
        </radialGradient>
        <filter id="p-shadow" x="-40%" y="-60%" width="180%" height="260%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#12110B" floodOpacity="0.14" />
        </filter>
      </defs>
      <style>
        {`
          /* --- Path Drawing Animations --- */
          .plan-spine {
            stroke: url(#p-line);
            stroke-width: 2.4;
            fill: none;
            stroke-linecap: round;
            stroke-dasharray: 225;
            animation: animSpine 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
          }
          .plan-branch-out {
            stroke: url(#p-line);
            stroke-width: 1.8;
            fill: none;
            stroke-linecap: round;
            stroke-dasharray: 80;
            animation: animBranchOut 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
          }
          .plan-branch-in {
            stroke: url(#p-line);
            stroke-width: 1.8;
            fill: none;
            stroke-linecap: round;
            stroke-dasharray: 70;
            animation: animBranchIn 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Synchronized draw timing to match horizontal distance */
          @keyframes animSpine {
            0% { stroke-dashoffset: 225; opacity: 0; }
            10% { stroke-dashoffset: 225; opacity: 1; }
            60% { stroke-dashoffset: 0; opacity: 1; }
            85% { stroke-dashoffset: 0; opacity: 1; }
            95%, 100% { stroke-dashoffset: 225; opacity: 0; }
          }
          @keyframes animBranchOut {
            0%, 28% { stroke-dashoffset: 80; opacity: 0; }
            29% { stroke-dashoffset: 80; opacity: 1; }
            40% { stroke-dashoffset: 0; opacity: 1; }
            85% { stroke-dashoffset: 0; opacity: 1; }
            95%, 100% { stroke-dashoffset: 80; opacity: 0; }
          }
          @keyframes animBranchIn {
            0%, 40% { stroke-dashoffset: 70; opacity: 0; }
            41% { stroke-dashoffset: 70; opacity: 1; }
            52% { stroke-dashoffset: 0; opacity: 1; }
            85% { stroke-dashoffset: 0; opacity: 1; }
            95%, 100% { stroke-dashoffset: 70; opacity: 0; }
          }

          /* --- Node Pop Animations --- */
          .pop-1 { animation: pop1 4s infinite; }
          .pop-2 { animation: pop2 4s infinite; }
          .pop-3 { animation: pop3 4s infinite; }
          .pop-4 { animation: pop4 4s infinite; }
          .pop-5 { animation: pop5 4s infinite; }

          /* Nodes pop in perfectly as the line reaches their X-coordinate */
          @keyframes pop1 { /* Start (T=10%) */
            0%, 5% { opacity: 0; transform: scale(0.5); }
            10% { opacity: 1; transform: scale(1.1); }
            15%, 85% { opacity: 1; transform: scale(1); }
            95%, 100% { opacity: 0; transform: scale(0.5); }
          }
          @keyframes pop2 { /* Goals (T=28%) */
            0%, 23% { opacity: 0; transform: scale(0.5); }
            28% { opacity: 1; transform: scale(1.1); }
            33%, 85% { opacity: 1; transform: scale(1); }
            95%, 100% { opacity: 0; transform: scale(0.5); }
          }
          @keyframes pop3 { /* Strategies (T=40%) */
            0%, 35% { opacity: 0; transform: scale(0.5); }
            40% { opacity: 1; transform: scale(1.1); }
            45%, 85% { opacity: 1; transform: scale(1); }
            95%, 100% { opacity: 0; transform: scale(0.5); }
          }
          @keyframes pop4 { /* Channels (T=52%) */
            0%, 47% { opacity: 0; transform: scale(0.5); }
            52% { opacity: 1; transform: scale(1.1); }
            57%, 85% { opacity: 1; transform: scale(1); }
            95%, 100% { opacity: 0; transform: scale(0.5); }
          }
          @keyframes pop5 { /* Target (T=60%) */
            0%, 55% { opacity: 0; transform: scale(0.5); }
            60% { opacity: 1; transform: scale(1.1); }
            65%, 85% { opacity: 1; transform: scale(1); }
            95%, 100% { opacity: 0; transform: scale(0.5); }
          }

          /* --- Target Rings & Arrow --- */
          .target-ring-1 {
            animation: ringPulse1 4s infinite;
            transform-origin: 265px 130px;
          }
          .target-ring-2 {
            animation: ringPulse2 4s infinite;
            transform-origin: 265px 130px;
          }
          @keyframes ringPulse1 {
            0%, 60% { opacity: 0; transform: scale(0.5); }
            65% { opacity: 0.5; transform: scale(1.1); }
            70%, 85% { opacity: 0.2; transform: scale(1); }
            95%, 100% { opacity: 0; transform: scale(0.5); }
          }
          @keyframes ringPulse2 {
            0%, 62% { opacity: 0; transform: scale(0.5); }
            67% { opacity: 0.3; transform: scale(1.1); }
            72%, 85% { opacity: 0.1; transform: scale(1); }
            95%, 100% { opacity: 0; transform: scale(0.5); }
          }
          
          .anim-arrow {
            animation: arrowPop 4s infinite;
            transform-origin: 265px 130px;
          }
          @keyframes arrowPop {
            0%, 60% { opacity: 0; transform: translateX(-10px); }
            65%, 85% { opacity: 1; transform: translateX(0); }
            95%, 100% { opacity: 0; transform: translateX(10px); }
          }

          /* --- Start Calendar Block --- */
          .cal-block {
            animation: calFade 4s infinite;
          }
          @keyframes calFade {
            0%, 5% { opacity: 0; transform: translateY(4px); }
            10%, 85% { opacity: 1; transform: translateY(0); }
            95%, 100% { opacity: 0; transform: translateY(-4px); }
          }
        `}
      </style>

      {/* Faint track behind the animated path */}
      <line x1="40" y1="130" x2="265" y2="130" stroke="#12110B" strokeOpacity="0.07" strokeWidth="2.4" strokeLinecap="round" />

      {/* Main timeline paths */}
      <line className="plan-spine" x1="40" y1="130" x2="265" y2="130" />
      <path className="plan-branch-out" d="M120,130 Q140,80 175,72" />
      <path className="plan-branch-out" d="M120,130 Q140,178 175,188" />
      <path className="plan-branch-in" d="M175,72 Q205,72 230,130" />
      <path className="plan-branch-in" d="M175,188 Q205,188 230,130" />

      {/* 1. Start */}
      <g className="cal-block">
        <Chip x={50} y={106} label="kickoff" />
      </g>
      <g style={{ transformOrigin: '40px 130px' }} className="pop-1">
        <Dot cx={40} cy={130} r={6} />
      </g>

      {/* 2. Goals */}
      <g style={{ transformOrigin: '120px 130px' }} className="pop-2">
        <Chip x={120} y={106} label="goals" accent />
        <Dot cx={120} cy={130} r={6.5} accent />
      </g>

      {/* 3. Strategy branches */}
      <g style={{ transformOrigin: '175px 72px' }} className="pop-3">
        <Chip x={175} y={50} label="content" />
        <Dot cx={175} cy={72} r={5.5} />
      </g>
      <g style={{ transformOrigin: '175px 188px' }} className="pop-3">
        <Chip x={175} y={210} label="campaigns" />
        <Dot cx={175} cy={188} r={5.5} />
      </g>

      {/* 4. Channels */}
      <g style={{ transformOrigin: '230px 130px' }} className="pop-4">
        <Chip x={228} y={106} label="channels" />
        <Dot cx={230} cy={130} r={5.5} />
      </g>

      {/* 5. Target */}
      <circle cx="265" cy="130" r="14" stroke="#FF4F31" strokeWidth="1.5" fill="none" className="target-ring-1" />
      <circle cx="265" cy="130" r="23" stroke="#FF4F31" strokeWidth="1" fill="none" className="target-ring-2" />
      <g className="pop-5" style={{ transformOrigin: '265px 130px' }}>
        <circle cx="265" cy="130" r="9" fill="url(#p-target)" filter="url(#p-shadow)" />
        <circle cx="265" cy="130" r="3.2" fill="#FFFFFF" />
      </g>
      <g className="anim-arrow">
        <line stroke="#FF4F31" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" x1="252" y1="123" x2="258" y2="130" />
        <line stroke="#FF4F31" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" x1="252" y1="137" x2="258" y2="130" />
      </g>
    </svg>
  );
}

// Milestone label: white pill with a hairline border and soft shadow.
function Chip({ x, y, label, accent = false }: { x: number; y: number; label: string; accent?: boolean }) {
  const w = label.length * 6.1 + 22;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x={-w / 2}
        y="-10"
        width={w}
        height="20"
        rx="10"
        fill={accent ? '#FF4F31' : '#FFFFFF'}
        stroke="#12110B"
        strokeOpacity={accent ? 0 : 0.08}
        filter="url(#p-shadow)"
      />
      <text
        x="0"
        y="3.4"
        textAnchor="middle"
        fill={accent ? '#FFFFFF' : '#12110B'}
        fillOpacity={accent ? 1 : 0.78}
        fontSize="9"
        fontWeight="600"
        style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
      >
        {label}
      </text>
    </g>
  );
}

// Milestone node: white core with a coloured ring.
function Dot({ cx, cy, r, accent = false }: { cx: number; cy: number; r: number; accent?: boolean }) {
  return (
    <g filter="url(#p-shadow)">
      <circle cx={cx} cy={cy} r={r} fill="#FFFFFF" stroke={accent ? '#FF4F31' : '#12110B'} strokeWidth="2.4" />
      <circle cx={cx} cy={cy} r={r - 4} fill={accent ? '#FF4F31' : '#12110B'} />
    </g>
  );
}
