"use client";

import { useEffect, useRef, type ReactNode } from "react";

export interface TumbleItem {
  id: string;
  /** Classes for the circular tile (background, text colour, border). */
  className: string;
  /** The icon or content drawn inside the tile. */
  children: ReactNode;
}

interface TumbleWallProps {
  items: TumbleItem[];
  /** Drawn behind the tiles (e.g. a big wordmark). Ignores the pointer. */
  background?: ReactNode;
  /** Height of the wall; the tiles pile up on its floor. */
  className?: string;
  /** Tile diameter as a fraction of the wall width, clamped to [minSize, maxSize]. */
  sizeRatio?: number;
  minSize?: number;
  maxSize?: number;
}

type Body = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  spin: number;
  r: number;
  held: boolean;
  on: boolean;
  /** Has been fully inside the wall once, so the ceiling now applies. */
  entered: boolean;
  el: HTMLDivElement | null;
};

const GRAVITY = 2000;
const BOUNCE = 0.32;
const MAX_THROW = 2400;

// A pile of tiles that rains down when scrolled into view and can be grabbed and thrown.
// Small custom physics (circles, gravity, walls, collisions): no physics library needed.
export default function TumbleWall({
  items,
  background,
  className = "h-[220px] sm:h-[260px] md:h-[300px]",
  sizeRatio = 0.065,
  minSize = 44,
  maxSize = 72,
}: TumbleWallProps) {
  const wallRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wall = wallRef.current;
    if (!wall) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = wall.clientWidth;
    let h = wall.clientHeight;
    let size = 0;
    const bodies: Body[] = items.map((_, i) => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      angle: 0,
      spin: 0,
      r: 0,
      held: false,
      on: true,
      entered: false,
      el: tileRefs.current[i],
    }));

    let raf = 0;
    let started = false;
    let visible = true;
    let last = 0;
    let calm = 0;

    const measure = () => {
      w = wall.clientWidth;
      h = wall.clientHeight;
      size = Math.min(maxSize, Math.max(minSize, w * sizeRatio));
      // Only as many tiles as fill about 36% of the wall, so small screens do not overflow
      const want = Math.min(items.length, Math.max(6, Math.floor((0.36 * w * h) / (Math.PI * (size / 2) ** 2))));
      bodies.forEach((b, i) => {
        const on = i < want;
        if (on && !b.on) {
          b.y = -size - (i % 6) * size * 0.8;
          b.vy = 0;
          b.entered = false;
        }
        b.on = on;
        if (b.el) b.el.style.display = on ? "" : "none";
        // Slight, deterministic size variation so the pile feels natural
        b.r = (size * (0.86 + ((i * 37) % 100) / 100 * 0.28)) / 2;
        if (b.el) {
          b.el.style.width = `${b.r * 2}px`;
          b.el.style.height = `${b.r * 2}px`;
        }
        b.x = Math.min(Math.max(b.x, b.r), Math.max(b.r, w - b.r));
        b.y = Math.min(b.y, h - b.r);
      });
    };

    const place = () => {
      for (const b of bodies) {
        if (b.on && b.el) b.el.style.transform = `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0) rotate(${b.angle}rad)`;
      }
    };

    const step = (dt: number) => {
      for (const b of bodies) {
        if (!b.on || b.held) continue;
        b.vy += GRAVITY * dt;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.angle += b.spin * dt;

        if (b.x - b.r < 0) {
          b.x = b.r;
          b.vx = Math.abs(b.vx) * BOUNCE;
        } else if (b.x + b.r > w) {
          b.x = w - b.r;
          b.vx = -Math.abs(b.vx) * BOUNCE;
        }
        // Ceiling, only once a tile has dropped in, so thrown tiles stay on the wall
        if (b.y - b.r >= 0) b.entered = true;
        if (b.entered && b.y - b.r < 0) {
          b.y = b.r;
          b.vy = Math.abs(b.vy) * BOUNCE;
        }
        if (b.y + b.r > h) {
          b.y = h - b.r;
          b.vy = b.vy > 60 ? -b.vy * BOUNCE : 0;
          b.vx *= 0.985; // floor friction
          b.spin += (b.vx / b.r - b.spin) * 0.25; // roll
        }
        b.spin *= 0.995;
      }

      // Circle collisions, a few passes so the pile settles instead of jittering
      for (let pass = 0; pass < 3; pass++) {
        for (let i = 0; i < bodies.length; i++) {
          for (let j = i + 1; j < bodies.length; j++) {
            const a = bodies[i];
            const c = bodies[j];
            if (!a.on || !c.on) continue;
            const dx = c.x - a.x;
            const dy = c.y - a.y;
            const min = a.r + c.r;
            const d2 = dx * dx + dy * dy;
            if (d2 >= min * min || d2 === 0) continue;
            const d = Math.sqrt(d2);
            const nx = dx / d;
            const ny = dy / d;
            const overlap = min - d;
            // Held tiles act as immovable; otherwise weight follows area
            const ma = a.held ? 0 : a.r * a.r;
            const mc = c.held ? 0 : c.r * c.r;
            const total = ma + mc;
            if (total === 0) continue;
            a.x -= nx * overlap * (ma / total);
            a.y -= ny * overlap * (ma / total);
            c.x += nx * overlap * (mc / total);
            c.y += ny * overlap * (mc / total);
            const rv = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny;
            if (rv < 0) {
              const imp = (-(1 + BOUNCE) * rv) / (1 / (ma || 1e9) + 1 / (mc || 1e9));
              if (ma) {
                a.vx -= (imp * nx) / ma;
                a.vy -= (imp * ny) / ma;
              }
              if (mc) {
                c.vx += (imp * nx) / mc;
                c.vy += (imp * ny) / mc;
              }
              // A little spin from the glancing contact
              const tangent = (c.vx - a.vx) * -ny + (c.vy - a.vy) * nx;
              a.spin -= (tangent / a.r) * 0.05;
              c.spin -= (tangent / c.r) * 0.05;
            }
          }
        }
      }
    };

    const frame = (now: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      const dt = Math.min((now - last) / 1000, 1 / 30) || 1 / 60;
      last = now;
      step(dt / 2);
      step(dt / 2);
      place();

      const moving = bodies.some((b) => b.on && (b.held || Math.abs(b.vx) > 6 || Math.abs(b.vy) > 6 || b.y + b.r < h - 1));
      calm = moving ? 0 : calm + dt;
      if (calm < 0.6) raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      calm = 0;
      if (!raf && started && visible && !document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    // Start above the wall, staggered, so the tiles rain in one after another
    const spawn = () => {
      bodies.forEach((b, i) => {
        b.x = b.r + ((i * 0.61803) % 1) * Math.max(0, w - b.r * 2);
        b.y = -b.r - i * size * 0.75;
        b.entered = false;
        b.vx = ((i % 5) - 2) * 14;
        b.vy = 0;
        b.angle = (i * 1.7) % 6.28;
        b.spin = ((i % 3) - 1) * 1.2;
      });
    };

    measure();
    spawn();
    place();

    const start = () => {
      if (started) return;
      started = true;
      wall.dataset.ready = "true";
      if (reduce) {
        // No rain: settle the pile instantly and leave it still
        for (let n = 0; n < 900; n++) step(1 / 60);
        place();
      } else {
        wake();
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries.some((e) => e.isIntersecting);
        if (visible) {
          start();
          wake();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(wall);

    const ro = new ResizeObserver(() => {
      measure();
      place();
      wake();
    });
    ro.observe(wall);

    // Grab and throw
    let held: Body | null = null;
    let grabX = 0;
    let grabY = 0;
    let prevT = 0;

    const pointerPos = (e: PointerEvent) => {
      const rect = wall.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMove = (e: PointerEvent) => {
      if (!held) return;
      const p = pointerPos(e);
      const tx = Math.min(Math.max(p.x - grabX, held.r), w - held.r);
      const ty = Math.min(Math.max(p.y - grabY, held.r), h - held.r);
      const now = performance.now();
      const dt = Math.max((now - prevT) / 1000, 0.008);
      prevT = now;
      // Smoothed velocity so a quick flick throws the tile
      held.vx = held.vx * 0.5 + ((tx - held.x) / dt) * 0.5;
      held.vy = held.vy * 0.5 + ((ty - held.y) / dt) * 0.5;
      held.x = tx;
      held.y = ty;
      wake();
    };

    const onUp = () => {
      if (!held) return;
      held.held = false;
      held.vx = Math.max(-MAX_THROW, Math.min(MAX_THROW, held.vx));
      held.vy = Math.max(-MAX_THROW, Math.min(MAX_THROW, held.vy));
      held.spin = held.vx / held.r;
      held = null;
      wake();
    };

    const downHandlers = bodies.map((b) => (e: PointerEvent) => {
      e.preventDefault();
      held = b;
      b.held = true;
      b.vx = 0;
      b.vy = 0;
      const p = pointerPos(e);
      grabX = p.x - b.x;
      grabY = p.y - b.y;
      prevT = performance.now();
      wake();
    });
    bodies.forEach((b, i) => b.el?.addEventListener("pointerdown", downHandlers[i]));
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    const onVisibility = () => wake();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      bodies.forEach((b, i) => b.el?.removeEventListener("pointerdown", downHandlers[i]));
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [items, sizeRatio, minSize, maxSize]);

  return (
    <div
      ref={wallRef}
      aria-hidden="true"
      className={`relative w-full overflow-hidden ${className}`}
    >
      {background && (
        <div className="pointer-events-none absolute inset-0 select-none">{background}</div>
      )}
      {items.map((item, i) => (
        <div
          key={item.id}
          ref={(el) => {
            tileRefs.current[i] = el;
          }}
          className={`absolute left-0 top-0 flex cursor-grab touch-none select-none items-center justify-center rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.35)] will-change-transform active:cursor-grabbing ${item.className}`}
          style={{ transform: "translate3d(0, -300px, 0)" }}
        >
          {item.children}
        </div>
      ))}
    </div>
  );
}
