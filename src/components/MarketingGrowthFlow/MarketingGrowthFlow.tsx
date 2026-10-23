'use client';

import React, {
  useEffect,
  useRef,
} from 'react';

import styles from './MarketingGrowthFlow.module.css';

import {
  LEFT_NODES,
  RIGHT_NODES,
  PATHS,
} from './data';

import {
  ContentVideoIcon,
  EngagementIcon,
  CampaignsIcon,
  LeadsIcon,
  CommunityIcon,
  BrandIcon,
} from './NodeIcons';

import type {
  FlowNode,
  ParticleDef,
  PathDef,
} from './types';

// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────

const ACCENT = '#E8420A';

// ─────────────────────────────────────────────────────────────
// ICON MAP
// ─────────────────────────────────────────────────────────────

const ICON_MAP: Record<
  string,
  React.ReactNode
> = {
  'content-video': <ContentVideoIcon />,
  engagement: <EngagementIcon />,
  campaigns: <CampaignsIcon />,

  leads: <LeadsIcon />,
  community: <CommunityIcon />,
  brand: <BrandIcon />,
};

// ─────────────────────────────────────────────────────────────
// FLOAT CLASS MAP
// ─────────────────────────────────────────────────────────────

const FLOAT_CLASS_MAP: Record<
  string,
  string
> = {
  nodeFloat1: styles.nodeFloat1,
  nodeFloat2: styles.nodeFloat2,
  nodeFloat3: styles.nodeFloat3,

  nodeFloat4: styles.nodeFloat4,
  nodeFloat5: styles.nodeFloat5,
  nodeFloat6: styles.nodeFloat6,
};

// ─────────────────────────────────────────────────────────────
// PARTICLE
// ─────────────────────────────────────────────────────────────

function Particle({
  particle,
  pathId,
}: {
  particle: ParticleDef;
  pathId: string;
}) {
  const duration = `${particle.dur}s`;
  const begin = `${particle.begin}s`;

  return (
    <g
      className={styles.particle}
      pointerEvents="none"
    >
      <circle
        r={particle.r}
        className={styles.particleDot}
        opacity={particle.opacity}
      >
        <animateMotion
          dur={duration}
          begin={begin}
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath
            href={`#${pathId}`}
            xlinkHref={`#${pathId}`}
          />
        </animateMotion>

        <animate
          attributeName="opacity"
          values={`0;${particle.opacity};${particle.opacity};0`}
          keyTimes="0;0.12;0.82;1"
          dur={duration}
          begin={begin}
          repeatCount="indefinite"
        />

        {particle.animateR && (
          <animate
            attributeName="r"
            values={`1;${particle.r};${particle.r * 0.8};1`}
            keyTimes="0;0.15;0.8;1"
            dur={duration}
            begin={begin}
            repeatCount="indefinite"
          />
        )}
      </circle>
    </g>
  );
}

// ─────────────────────────────────────────────────────────────
// CONNECTION PATH
// ─────────────────────────────────────────────────────────────

function ConnectionPath({
  path,
}: {
  path: PathDef;
}) {
  return (
    <g>
      {/* Soft base line */}
      <path
        d={path.d}
        className={styles.basePath}
      />

      {/* Glow */}
      <path
        d={path.d}
        className={styles.glowPath}
      />

      {/* Moving pulse */}
      <path
        d={path.d}
        className={styles.pathPulse}
        style={{
          animationDelay: `${path.pulseDelay}s`,
        }}
      />

      {/* Particles */}
      {path.particles.map((particle) => (
        <Particle
          key={particle.id}
          particle={particle}
          pathId={path.id}
        />
      ))}
    </g>
  );
}

// ─────────────────────────────────────────────────────────────
// SVG DEFS
// ─────────────────────────────────────────────────────────────

function SvgDefs() {
  return (
    <defs>
      {/* ─────────────────────────────────────────────
          PATH GLOW
      ───────────────────────────────────────────── */}

      <filter
        id="pathGlow"
        x="-30%"
        y="-30%"
        width="160%"
        height="160%"
      >
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="2.5"
          result="blur"
        />

        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* ─────────────────────────────────────────────
          NODE GLOW
      ───────────────────────────────────────────── */}

      <filter
        id="nodeGlow"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="5"
          result="blur"
        />

        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* ─────────────────────────────────────────────
          PARTICLE GLOW
      ───────────────────────────────────────────── */}

      <filter
        id="particleGlow"
        x="-300%"
        y="-300%"
        width="600%"
        height="600%"
      >
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="2"
          result="blur"
        />

        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* ─────────────────────────────────────────────
          CENTER GLOW
      ───────────────────────────────────────────── */}

      <radialGradient
        id="centerGlow"
        cx="50%"
        cy="50%"
        r="50%"
      >
        <stop
          offset="0%"
          stopColor={ACCENT}
          stopOpacity="0.12"
        />

        <stop
          offset="100%"
          stopColor={ACCENT}
          stopOpacity="0"
        />
      </radialGradient>

      {/* ─────────────────────────────────────────────
          BACKGROUND GRADIENT
      ───────────────────────────────────────────── */}

      <radialGradient
        id="bgGlow"
        cx="50%"
        cy="50%"
        r="50%"
      >
        <stop
          offset="0%"
          stopColor={ACCENT}
          stopOpacity="0.035"
        />

        <stop
          offset="100%"
          stopColor={ACCENT}
          stopOpacity="0"
        />
      </radialGradient>

      {/* ─────────────────────────────────────────────
          PATH REFERENCES
      ───────────────────────────────────────────── */}

      {PATHS.map((path) => (
        <path
          key={path.id}
          id={path.id}
          d={path.d}
          fill="none"
        />
      ))}
    </defs>
  );
}

// ─────────────────────────────────────────────────────────────
// CENTER HUB
// ─────────────────────────────────────────────────────────────

function CenterHub() {
  return (
    <g className={styles.centerCard}>
      {/* Outer glow */}
      <ellipse
        cx="500"
        cy="230"
        rx="125"
        ry="70"
        fill="url(#centerGlow)"
      />

      {/* Shadow */}
      <rect
        x="435"
        y="205"
        width="130"
        height="48"
        rx="5"
        fill="#2C2A28"
        transform="translate(3 4)"
        opacity="0.18"
      />

      {/* Main card */}
      <rect
        x="435"
        y="205"
        width="130"
        height="48"
        rx="5"
        fill="#EC4429"
        stroke="#2C2A28"
        strokeWidth="1.5"
      />

      {/* Inner highlight */}
      <rect
        x="438"
        y="208"
        width="124"
        height="42"
        rx="3"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
      />

      {/* Brand */}
      <text
        x="500"
        y="235"
        className={styles.centerBrand}
      >
        TCG
      </text>
    </g>
  );
}

// ─────────────────────────────────────────────────────────────
// NODE
// ─────────────────────────────────────────────────────────────

function FlowNodeComponent({
  node,
  side,
  nodeRef,
}: {
  node: FlowNode;
  side: 'left' | 'right';
  nodeRef: (element: SVGGElement | null) => void;
}) {
  const icon = ICON_MAP[node.id];
  const isLeft = side === 'left';

  return (
    <g transform={node.transform}>
      <g className={FLOAT_CLASS_MAP[node.floatClass]}>
        <g ref={nodeRef}>
          {/* Connector line */}
          <line
            x1={isLeft ? 30 : -30}
            y1="0"
            x2={isLeft ? 35 : -35}
            y2="0"
            stroke="#E8420A"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Connector dot */}
          <circle
            cx={isLeft ? 35 : -35}
            cy="0"
            r="3"
            fill="#E8420A"
          />

          {/* CARD */}
          <g className={styles.nodeCard}>
            <rect
              x="-30"
              y="-30"
              width="60"
              height="60"
              rx="16"
              className={styles.nodeBackground}
            />

            {/* ICON */}
            <g aria-hidden="true">
              {icon}
            </g>
          </g>

          {/* LABEL */}
          <text
            x={isLeft ? -42 : 42}
            y="4"
            className={styles.nodeLabel}
            textAnchor={isLeft ? 'end' : 'start'}
          >
            {node.label}
          </text>
        </g>
      </g>
    </g>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

export default function MarketingGrowthFlow({
  className = '',
}: {
  className?: string;
}) {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const rafRef =
    useRef<number | null>(null);

  const mouseRef =
    useRef({
      x: 0,
      y: 0,
    });

  const currentRef =
    useRef({
      x: 0,
      y: 0,
    });

  const nodeElsRef =
    useRef<Map<string, SVGGElement>>(
      new Map()
    );

  const centerElRef =
    useRef<SVGGElement | null>(null);

  // ─────────────────────────────────────────────
  // MOUSE PARALLAX
  // ─────────────────────────────────────────────

  useEffect(() => {
    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      );

    if (reducedMotion.matches) {
      return;
    }

    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    let active = true;

    const lerp = (
      current: number,
      target: number,
      amount: number
    ) => {
      return (
        current +
        (target - current) *
        amount
      );
    };

    const onMouseMove = (
      event: MouseEvent
    ) => {
      const rect =
        section.getBoundingClientRect();

      if (
        rect.width === 0 ||
        rect.height === 0
      ) {
        return;
      }

      mouseRef.current.x =
        (event.clientX -
          rect.left -
          rect.width / 2) /
        (rect.width / 2);

      mouseRef.current.y =
        (event.clientY -
          rect.top -
          rect.height / 2) /
        (rect.height / 2);
    };

    const onMouseLeave = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    const tick = () => {
      if (!active) {
        return;
      }

      currentRef.current.x =
        lerp(
          currentRef.current.x,
          mouseRef.current.x,
          0.055
        );

      currentRef.current.y =
        lerp(
          currentRef.current.y,
          mouseRef.current.y,
          0.055
        );

      const x =
        currentRef.current.x;

      const y =
        currentRef.current.y;

      let index = 0;

      nodeElsRef.current.forEach(
        (element) => {
          const horizontal =
            index % 2 === 0
              ? x * 2.5
              : x * -2.5;

          const vertical =
            index % 2 === 0
              ? y * 1.5
              : y * -1.5;

          element.style.transform =
            `translate(${horizontal}px, ${vertical}px)`;

          index++;
        }
      );

      if (centerElRef.current) {
        centerElRef.current.style.transform =
          `translate(${x * 1.2}px, ${y * 1.2}px)`;
      }

      rafRef.current =
        requestAnimationFrame(tick);
    };

    section.addEventListener(
      'mousemove',
      onMouseMove,
      {
        passive: true,
      }
    );

    section.addEventListener(
      'mouseleave',
      onMouseLeave,
      {
        passive: true,
      }
    );

    rafRef.current =
      requestAnimationFrame(tick);

    return () => {
      active = false;

      section.removeEventListener(
        'mousemove',
        onMouseMove
      );

      section.removeEventListener(
        'mouseleave',
        onMouseLeave
      );

      if (
        rafRef.current !== null
      ) {
        cancelAnimationFrame(
          rafRef.current
        );

        rafRef.current = null;
      }
    };
  }, []);

  // ─────────────────────────────────────────────
  // NODE REF
  // ─────────────────────────────────────────────

  const createNodeRef =
    (id: string) =>
      (element: SVGGElement | null) => {
        if (element) {
          nodeElsRef.current.set(
            id,
            element
          );
        } else {
          nodeElsRef.current.delete(
            id
          );
        }
      };

  // ─────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${className}`}
      aria-label="Content Gang marketing growth flow"
    >
      <svg
        className={styles.svg}
        viewBox="0 0 1000 460"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <SvgDefs />

        {/* ─────────────────────────────
            SOFT BACKGROUND
        ───────────────────────────── */}

        <ellipse
          cx="500"
          cy="230"
          rx="390"
          ry="210"
          fill="url(#bgGlow)"
        />

        {/* ─────────────────────────────
            CONNECTION SYSTEM
        ───────────────────────────── */}

        <g
          aria-hidden="true"
          pointerEvents="none"
        >
          {PATHS.map((path) => (
            <ConnectionPath
              key={path.id}
              path={path}
            />
          ))}
        </g>

        {/* ─────────────────────────────
            LEFT NODES
        ───────────────────────────── */}

        <g
          aria-hidden="true"
        >
          {LEFT_NODES.map((node) => (
            <FlowNodeComponent
              key={node.id}
              node={node}
              side="left"
              nodeRef={createNodeRef(
                node.id
              )}
            />
          ))}
        </g>

        {/* ─────────────────────────────
            CENTER
        ───────────────────────────── */}

        <g
          ref={centerElRef}
          aria-hidden="true"
        >
          <CenterHub />
        </g>

        {/* ─────────────────────────────
            RIGHT NODES
        ───────────────────────────── */}

        <g
          aria-hidden="true"
        >
          {RIGHT_NODES.map((node) => (
            <FlowNodeComponent
              key={node.id}
              node={node}
              side="right"
              nodeRef={createNodeRef(
                node.id
              )}
            />
          ))}
        </g>
      </svg>
    </section>
  );
}