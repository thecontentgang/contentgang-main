import type { ReactNode } from "react";

interface FrameBorderProps {
  children: ReactNode;
  /** Sets corner radius and border thickness via CSS variables, e.g. "[--fr:1rem] [--fb:4px]". */
  className?: string;
  /** Soft glow around the frame. */
  glow?: boolean;
}

// A crisp, glowing glass border that frames its content, in the brand palette:
// a light sweep of orange, cream and deep red travels around a frosted ring.
// Defaults: 2rem corners (3rem from md up) and a 5px ring. Override with className.
export default function FrameBorder({ children, className = "", glow = true }: FrameBorderProps) {
  return (
    <div
      className={`relative isolate rounded-[var(--fr)] [--fb:5px] [--fr:2rem] md:[--fr:3rem] ${className}`}
    >
      {/* Soft outer glow */}
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1 -z-10 rounded-[var(--fr)] bg-[conic-gradient(from_0deg,rgba(255,79,49,0.55),rgba(199,44,39,0.15),rgba(244,239,234,0.35),rgba(199,44,39,0.15),rgba(255,79,49,0.55))] opacity-60 blur-xl"
        />
      )}

      {/* Glass ring: a frosted pane over a travelling light sweep */}
      <div className="relative overflow-hidden rounded-[var(--fr)] p-[var(--fb)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_30px_-12px_rgba(18,17,11,0.45)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2 animate-[spin_9s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(199,44,39,0.35)_0%,rgba(255,79,49,0.95)_18%,rgba(253,249,249,0.95)_26%,rgba(255,79,49,0.95)_34%,rgba(199,44,39,0.35)_50%,rgba(199,44,39,0.35)_100%)] motion-reduce:animate-none"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[var(--fr)] bg-gradient-to-br from-white/35 via-white/10 to-white/25 backdrop-blur-md"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[var(--fr)] ring-1 ring-inset ring-white/40"
        />

        {/* Content */}
        <div className="relative overflow-hidden rounded-[calc(var(--fr)-var(--fb))] ring-1 ring-black/40">
          {children}
        </div>
      </div>
    </div>
  );
}
