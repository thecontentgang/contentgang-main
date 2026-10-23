// ─────────────────────────────────────────────────────────────
// data.ts
// Structured marketing flow configuration
// ─────────────────────────────────────────────────────────────

import type { FlowNode, PathDef } from './types';

// ─────────────────────────────────────────────────────────────
// LEFT INPUT NODES
// ─────────────────────────────────────────────────────────────

export const LEFT_NODES: FlowNode[] = [
  {
    id: 'content-video',
    label: 'Content',
    floatClass: 'nodeFloat1',
    transform: 'translate(115, 110)',
    side: 'left',
  },
  {
    id: 'engagement',
    label: 'Engagement',
    floatClass: 'nodeFloat2',
    transform: 'translate(115, 230)',
    side: 'left',
  },
  {
    id: 'campaigns',
    label: 'Campaigns',
    floatClass: 'nodeFloat3',
    transform: 'translate(115, 350)',
    side: 'left',
  },
];

export const RIGHT_NODES: FlowNode[] = [
  {
    id: 'leads',
    label: 'Leads',
    floatClass: 'nodeFloat4',
    transform: 'translate(885, 110)',
    side: 'right',
  },
  {
    id: 'community',
    label: 'Community',
    floatClass: 'nodeFloat5',
    transform: 'translate(885, 230)',
    side: 'right',
  },
  {
    id: 'brand',
    label: 'Brand',
    floatClass: 'nodeFloat6',
    transform: 'translate(885, 350)',
    side: 'right',
  },
];

// ─────────────────────────────────────────────────────────────
// STRUCTURED PATHS
//
// The geometry intentionally creates:
//
// LEFT
//
//  ●──────────╲
//              ╲
//               ● CENTER
//              ╱
//  ●──────────╱
//
//  ●──────────╱
//
// CENTER
//
//               ●──────────╲
//                           ● RIGHT
//
//               ●──────────╱
//                           ● RIGHT
//
// No random curves.
// Every line has a deliberate destination.
// ─────────────────────────────────────────────────────────────

export const PATHS: PathDef[] = [
  {
    id: 'mgf-pathL1',
    d: 'M 150 110 C 300 110, 350 230, 490 230',
    pulseDelay: 0,
    particles: [
      {
        id: 'l1p1',
        r: 3,
        opacity: 0.9,
        dur: 2.4,
        begin: 0,
        animateR: true,
      },
      {
        id: 'l1p2',
        r: 2,
        opacity: 0.65,
        dur: 2.4,
        begin: 0.6,
      },
      {
        id: 'l1p3',
        r: 1.5,
        opacity: 0.4,
        dur: 2.4,
        begin: 1.2,
      },
    ],
  },

  {
    id: 'mgf-pathL2',
    d: 'M 150 230 C 300 230, 350 230, 490 230',
    pulseDelay: 0.8,
    particles: [
      {
        id: 'l2p1',
        r: 3,
        opacity: 0.9,
        dur: 2.2,
        begin: 0.3,
        animateR: true,
      },
      {
        id: 'l2p2',
        r: 2,
        opacity: 0.65,
        dur: 2.2,
        begin: 0.9,
      },
      {
        id: 'l2p3',
        r: 1.5,
        opacity: 0.4,
        dur: 2.2,
        begin: 1.5,
      },
    ],
  },

  {
    id: 'mgf-pathL3',
    d: 'M 150 350 C 300 350, 350 230, 490 230',
    pulseDelay: 1.6,
    particles: [
      {
        id: 'l3p1',
        r: 3,
        opacity: 0.9,
        dur: 2.5,
        begin: 0.7,
        animateR: true,
      },
      {
        id: 'l3p2',
        r: 2,
        opacity: 0.65,
        dur: 2.5,
        begin: 1.3,
      },
      {
        id: 'l3p3',
        r: 1.5,
        opacity: 0.4,
        dur: 2.5,
        begin: 1.9,
      },
    ],
  },

  {
    id: 'mgf-pathR1',
    d: 'M 510 230 C 650 230, 700 110, 850 110',
    pulseDelay: 0.3,
    particles: [
      {
        id: 'r1p1',
        r: 3,
        opacity: 0.9,
        dur: 2.4,
        begin: 0.2,
        animateR: true,
      },
      {
        id: 'r1p2',
        r: 2,
        opacity: 0.65,
        dur: 2.4,
        begin: 0.7,
      },
      {
        id: 'r1p3',
        r: 1.5,
        opacity: 0.4,
        dur: 2.4,
        begin: 1.3,
      },
    ],
  },

  {
    id: 'mgf-pathR2',
    d: 'M 510 230 C 650 230, 700 230, 850 230',
    pulseDelay: 1,
    particles: [
      {
        id: 'r2p1',
        r: 3,
        opacity: 0.9,
        dur: 2.2,
        begin: 0.5,
        animateR: true,
      },
      {
        id: 'r2p2',
        r: 2,
        opacity: 0.65,
        dur: 2.2,
        begin: 1,
      },
      {
        id: 'r2p3',
        r: 1.5,
        opacity: 0.4,
        dur: 2.2,
        begin: 1.6,
      },
    ],
  },

  {
    id: 'mgf-pathR3',
    d: 'M 510 230 C 650 230, 700 350, 850 350',
    pulseDelay: 1.7,
    particles: [
      {
        id: 'r3p1',
        r: 3,
        opacity: 0.9,
        dur: 2.5,
        begin: 0.9,
        animateR: true,
      },
      {
        id: 'r3p2',
        r: 2,
        opacity: 0.65,
        dur: 2.5,
        begin: 1.4,
      },
      {
        id: 'r3p3',
        r: 1.5,
        opacity: 0.4,
        dur: 2.5,
        begin: 2,
      },
    ],
  },
];