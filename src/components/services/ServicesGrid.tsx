"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { servicesData } from "./servicesData";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Clear refs on every render to avoid stale elements in React Strict Mode
  cardsRef.current = new Array(servicesData.length).fill(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const outerWrappers = gsap.utils.toArray<HTMLElement>(".card-sticky-wrapper");
      // Filter out any null values just in case
      const innerCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      if (outerWrappers.length === 0 || innerCards.length === 0) return;

      innerCards.forEach((inner, index) => {
        // Skip animating the very last card
        if (index === innerCards.length - 1) return;

        // Calculate dynamic depth properties
        const remainingCards = innerCards.length - 1 - index;
        const targetScale = 1 - remainingCards * 0.04;
        const targetY = -(remainingCards * 20);

        gsap.to(inner, {
          scale: targetScale,
          y: targetY,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: outerWrappers[index],
            start: "top 140px",
            endTrigger: outerWrappers[outerWrappers.length - 1],
            end: "top 140px",
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 xl:px-0">
      {/* Ensure enough padding at the bottom so the last card has room to scroll */}
      <div className="flex flex-col gap-16 md:gap-24 pb-[30vh]">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="card-sticky-wrapper sticky top-[140px] w-full"
            // Ensure later cards overlap the earlier ones
            style={{ zIndex: index }}
          >
            <div
              ref={(el) => { cardsRef.current[index] = el; }}
              className="w-full origin-top will-change-transform"
            >
              <ServiceCard service={service} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}