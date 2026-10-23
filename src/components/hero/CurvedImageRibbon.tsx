"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export interface RibbonItem {
  id: string;
  title: string;
  category?: string;
  image: string;
  alt: string;
}

// 22 Curated, ultra-aesthetic visuals matching high-fashion, 3D art, luxury products, and creative agency motion
export const RIBBON_ITEMS: RibbonItem[] = [
  {
    id: "item-1",
    title: "Vibrant Spheres",
    category: "3D Motion",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    alt: "Vibrant 3D abstract shapes and fluid spheres",
  },
  {
    id: "item-2",
    title: "Optical Lines",
    category: "Creative Art",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80",
    alt: "Abstract color striped gradient pattern",
  },
  {
    id: "item-3",
    title: "Cyber Vision",
    category: "Fashion Tech",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
    alt: "Editorial model with futuristic blue sunglasses",
  },
  {
    id: "item-4",
    title: "Luxury Essence",
    category: "Product Studio",
    image: "https://images.unsplash.com/photo-1608248597359-5770020db246?auto=format&fit=crop&w=600&q=80",
    alt: "Luxury cosmetic perfume bottle with water splashes",
  },
  {
    id: "item-5",
    title: "Minimal Footwear",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    alt: "White leather designer loafers on green grass",
  },
  {
    id: "item-6",
    title: "Porcelain Bag",
    category: "Luxury Fashion",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    alt: "Blue and white ceramic porcelain patterned handbag",
  },
  {
    id: "item-7",
    title: "Urban Athletics",
    category: "Streetwear",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    alt: "Vibrant yellow streetwear athletic bag",
  },
  {
    id: "item-8",
    title: "Glass Skin",
    category: "Beauty Editorial",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    alt: "Futuristic glossy beauty editorial portrait",
  },
  {
    id: "item-9",
    title: "Iridescent Silk",
    category: "3D Concept",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80",
    alt: "Iridescent metallic sphere on draping satin fabric",
  },
  {
    id: "item-10",
    title: "Velvet Bloom",
    category: "High Fashion",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    alt: "Sculptural designer heels with red rose accents",
  },
  {
    id: "item-11",
    title: "Midnight Roses",
    category: "Floral Arts",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    alt: "Deep velvety red roses in dramatic editorial lighting",
  },
  {
    id: "item-12",
    title: "Cobalt Patent",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    alt: "Glossy royal blue patent leather luxury handbag",
  },
  {
    id: "item-13",
    title: "Golden Trail",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600&q=80",
    alt: "Night runner with golden light trails in motion",
  },
  {
    id: "item-14",
    title: "High Leap",
    category: "Athletics",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    alt: "Dynamic athlete leaping across open landscape",
  },
  {
    id: "item-15",
    title: "Crimson Ghost",
    category: "Artistic Film",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    alt: "Red neon cinematic silhouette in motion blur",
  },
  {
    id: "item-16",
    title: "Editorial Shades",
    category: "Menswear",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    alt: "Male editorial portrait in blue jacket with statement sunglasses",
  },
  {
    id: "item-17",
    title: "Warm Sculpture",
    category: "Visual Arts",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
    alt: "Sculptural hands in warm golden hour sunlight",
  },
  {
    id: "item-18",
    title: "Desert Sprint",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    alt: "Athletic runner shoe in desert sand with sharp shadows",
  },
  {
    id: "item-19",
    title: "Chronograph Gold",
    category: "Horology",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    alt: "Luxury gold chronograph watch with fluted bezel",
  },
  {
    id: "item-20",
    title: "City Velocity",
    category: "Motion Lifestyle",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80",
    alt: "Road cyclist racing through night neon lights",
  },
  {
    id: "item-21",
    title: "Amber Silhouette",
    category: "Campaign",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    alt: "Fashion model in high-contrast amber lighting",
  },
  {
    id: "item-22",
    title: "Neo Hologram",
    category: "Digital 3D",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    alt: "Futuristic iridescent fluid digital artwork",
  },
];

// Deterministic per-card variation so the ribbon looks like a loose, overlapping collage
const VARIANTS = RIBBON_ITEMS.map(() => ({ w: 1, h: 1, rot: 0, y: 0 }));

interface CurvedImageRibbonProps {
  className?: string;
  speed?: number; // pixels per frame at 60fps
}

export default function CurvedImageRibbon({
  className = "",
  speed = 0.85,
}: CurvedImageRibbonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Dimensions state (updated on resize)
  const [dimensions, setDimensions] = useState({
    width: 1400,
    height: 440,
    cardWidth: 180,
    cardHeight: 240,
    cardGap: 22,
    amplitude: 70,
    baseY: 210,
  });

  // Animation refs to avoid React re-renders during high-frequency loop
  const offsetRef = useRef<number>(0);
  const currentSpeedRef = useRef<number>(speed);
  const targetSpeedRef = useRef<number>(speed);
  const isHoveredRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartOffsetRef = useRef<number>(0);
  const lastDragTimeRef = useRef<number>(0);
  const dragVelocityRef = useRef<number>(0);
  const [activeItem, setActiveItem] = useState<RibbonItem | null>(null);

  // Responsive sizing calculation
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.clientWidth || window.innerWidth;

    // Fluid sizing: every card shares one size that scales with the viewport
    const cardW = Math.round(Math.min(200, Math.max(100, w * 0.2)));
    const cardH = Math.round(cardW * 1.32);
    const gap = Math.round(cardW * 0.12);

    // Wave scales with the card so the curve looks the same on every device,
    // and the container always fits the lowest card so nothing is clipped.
    const amp = Math.round(cardH * (w < 640 ? 0.36 : 0.45));
    const pad = w < 640 ? 24 : 50;
    const baseY = amp + pad;
    const containerH = Math.round(baseY + amp + cardH + 30);

    setDimensions({
      width: w,
      height: containerH,
      cardWidth: cardW,
      cardHeight: cardH,
      cardGap: gap,
      amplitude: amp,
      baseY,
    });
  }, []);

  useEffect(() => {
    updateDimensions();
    const ro = new ResizeObserver(() => {
      updateDimensions();
    });
    if (containerRef.current) {
      ro.observe(containerRef.current);
    }
    window.addEventListener("resize", updateDimensions);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, [updateDimensions]);

  // Main 60-120fps animation loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    let visible = true;

    const totalCards = RIBBON_ITEMS.length;

    const animate = (time: number) => {
      // Skip all work while the ribbon is scrolled out of view
      if (!visible) return;
      const dt = Math.min((time - lastTime) / 16.667, 2.5); // normalize to ~1 at 60fps
      lastTime = time;

      const { width, cardWidth, amplitude, baseY } = dimensions;
      // Each card covers 40% of the previous one, so no gaps show while the
      // cards rotate along the curve
      const step = cardWidth * 0.6;
      const totalTrackW = totalCards * step;

      // Smooth acceleration / deceleration
      if (!isDraggingRef.current) {
        // Smoothly interpolate current speed towards target speed (smooth pause on hover)
        const lerpFactor = isHoveredRef.current ? 0.08 : 0.05;
        currentSpeedRef.current +=
          (targetSpeedRef.current - currentSpeedRef.current) * lerpFactor;

        // Apply drag inertia decay if any
        if (Math.abs(dragVelocityRef.current) > 0.01) {
          offsetRef.current += dragVelocityRef.current * dt;
          dragVelocityRef.current *= 0.92;
        }

        // Left to right movement: offset increases
        offsetRef.current += currentSpeedRef.current * dt;
      }

      // Keep offset bounded to prevent floating precision loss
      if (offsetRef.current > totalTrackW * 10) {
        offsetRef.current %= totalTrackW;
      } else if (offsetRef.current < -totalTrackW * 10) {
        offsetRef.current = (offsetRef.current % totalTrackW) + totalTrackW;
      }

      // Update positions of all cards directly via transform for maximum performance
      for (let i = 0; i < totalCards; i++) {
        const el = cardElementsRef.current[i];
        if (!el) continue;

        // Base X position with infinite wrap
        const rawX = i * step + offsetRef.current;
        // Wrap smoothly around totalTrackW so it covers both off-screen left and right
        let screenX = ((rawX % totalTrackW) + totalTrackW) % totalTrackW;

        // Center the track relative to the container viewport
        // Shift by buffer so cards enter on left and exit on right seamlessly
        if (screenX > width + step * 2) {
          screenX -= totalTrackW;
        }

        // Normalized X: -1 at left edge, 0 at center, +1 at right edge
        const normX = (screenX - width / 2) / (width / 2);

        // Wave measured from the card centre: trough under the headline,
        // crests at roughly ±30% of the width, dipping again toward the edges.
        // Period is relative to the viewport so the curve stays visible and
        // smooth on phones, tablets and desktops alike.
        const period = width * (width < 640 ? 1.1 : width < 1024 ? 0.85 : 0.65);
        const centerX = screenX + (cardWidth * VARIANTS[i].w) / 2;
        const curveAngle = (2 * Math.PI * (centerX - width / 2)) / period;
        const v = VARIANTS[i];
        const curveY = baseY + amplitude * Math.cos(curveAngle) + v.y;

        // Derivative (slope) for card rotation angle
        const slope = -((2 * Math.PI * amplitude) / period) * Math.sin(curveAngle);
        const rotDegRaw = Math.atan(slope) * (180 / Math.PI);
        const rotDeg = Math.max(-22, Math.min(22, rotDegRaw)) + v.rot;

        // Depth & subtle scale based on proximity to center dip
        const distFromCenter = Math.min(1, Math.abs(normX));
        const scale = 1 - distFromCenter * 0.08; // slightly larger towards center

        // Apply GPU transform
        el.style.transform = `translate3d(${screenX}px, ${curveY}px, 0px) rotate(${rotDeg.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    const container = containerRef.current;
    const io = container
      ? new IntersectionObserver(([entry]) => {
          const next = entry.isIntersecting;
          if (next && !visible) {
            lastTime = performance.now();
            animId = requestAnimationFrame(animate);
          }
          visible = next;
        })
      : null;
    if (container) io?.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      io?.disconnect();
    };
  }, [dimensions, speed]);

  // Mouse hover handlers: stop on hover, resume on leave
  // Only hovering a card pauses the ribbon, not the whole component
  const handleCardEnter = () => {
    isHoveredRef.current = true;
    targetSpeedRef.current = 0;
  };

  const handleCardLeave = () => {
    isHoveredRef.current = false;
    targetSpeedRef.current = speed;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    handleCardLeave();
  };

  // Drag / touch interaction for scrub & swipe
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    lastDragTimeRef.current = performance.now();
    dragVelocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastDragTimeRef.current);
    const deltaX = e.clientX - dragStartXRef.current;
    offsetRef.current = dragStartOffsetRef.current + deltaX;

    // Estimate velocity for momentum release
    dragVelocityRef.current = (deltaX / dt) * 8;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    lastDragTimeRef.current = now;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none touch-pan-y ${className}`}
      style={{
        height: `${dimensions.height}px`,
        cursor: isDraggingRef.current ? "grabbing" : "grab",
      }}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Cards container */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        {RIBBON_ITEMS.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              cardElementsRef.current[index] = el;
            }}
            className="group absolute top-0 left-0 will-change-transform transition-[box-shadow,border-color] duration-300"
            style={{
              width: `${dimensions.cardWidth * VARIANTS[index].w}px`,
              height: `${dimensions.cardHeight * VARIANTS[index].h}px`,
              zIndex: index,
              // Initial position before first frame
              transform: `translate3d(${index * dimensions.cardWidth * 0.6}px, ${dimensions.baseY}px, 0)`,
            }}
            onMouseEnter={handleCardEnter}
            onMouseLeave={handleCardLeave}
            onClick={() => setActiveItem(item)}
          >
            {/* Card inner wrapper */}
            <div className="relative w-full h-full rounded-2xl md:rounded-[1.25rem] overflow-hidden border border-black/10 group-hover:border-[#FF4F31]/80 shadow-[0_10px_25px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_45px_rgba(255,79,49,0.25)] transition-all duration-300 transform-gpu group-hover:-translate-y-2 group-hover:scale-[1.04]">
              {/* Image */}
              <img
                src={item.image.replace(
                  "w=600",
                  `w=${dimensions.cardWidth <= 130 ? 280 : dimensions.cardWidth <= 170 ? 360 : 480}`
                )}
                alt={item.alt}
                loading={index < 8 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Glossy gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Subtle category tag on hover */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-white/90 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                  {item.category || "Creative"}
                </span>
                <span className="w-5 h-5 rounded-full bg-[#FF4F31] flex items-center justify-center text-white">
                  <svg
                    className="w-2.5 h-2.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
