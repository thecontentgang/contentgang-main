// ─────────────────────────────────────────────────────────────
// types.ts
// ─────────────────────────────────────────────────────────────

export interface FlowNode {
  id: string;
  label: string;
  floatClass: string;
  transform: string;
  side: 'left' | 'right';
}

export interface PathDef {
  id: string;
  d: string;
  pulseDelay: number;
  particles: ParticleDef[];
}

export interface ParticleDef {
  id: string;
  r: number;
  opacity: number;
  dur: number;
  begin: number;
  animateR?: boolean;
}