"use client";

import { useEffect, useRef, useState } from "react";

interface MouseParallaxState {
  rotateX: number;
  rotateY: number;
}

interface UseMouseParallaxOptions {
  maxRotateX?: number; // degrees
  maxRotateY?: number; // degrees
  spring?: number;     // 0–1, lower = smoother
  disabled?: boolean;
}

export function useMouseParallax({
  maxRotateX = 4,
  maxRotateY = 6,
  spring = 0.07,
  disabled = false,
}: UseMouseParallaxOptions = {}): MouseParallaxState {
  const [state, setState] = useState<MouseParallaxState>({ rotateX: 0, rotateY: 0 });
  const current = useRef({ rx: 0, ry: 0 });
  const target = useRef({ rx: 0, ry: 0 });
  const rafRef = useRef<number | null>(null);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (disabled || prefersReduced.current) return;

    function onMouseMove(e: MouseEvent) {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;   // -1 to 1
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;  // -1 to 1
      target.current.ry = nx * maxRotateY;
      target.current.rx = -ny * maxRotateX;
    }

    function onMouseLeave() {
      target.current.rx = 0;
      target.current.ry = 0;
    }

    function tick() {
      const dx = target.current.rx - current.current.rx;
      const dy = target.current.ry - current.current.ry;

      if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) {
        current.current.rx += dx * spring;
        current.current.ry += dy * spring;
        setState({ rotateX: current.current.rx, rotateY: current.current.ry });
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [disabled, maxRotateX, maxRotateY, spring]);

  return state;
}
