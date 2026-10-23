"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SmokeType from "../ui/smoke-type";
import LightTunnel from "../ui/light-tunnel";
import FrameBorder from "../ui/frame-border";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CTASection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    // Small, even gap above the footer card (pulls the footer's cream top padding up).
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative z-10 -mb-4 w-full bg-[#FDF9F9] px-4 pt-8 sm:px-6 md:-mb-8 md:px-12 md:pt-10"
    >
      <FrameBorder>
      <div className="relative flex w-full flex-col items-center bg-[#12110B] px-6 py-10 text-center md:py-14">
        {/* WebGL light tunnel, in the brand's orange and deep red */}
        <LightTunnel
          aria-hidden="true"
          className="!absolute inset-0"
          cableColor="#F4EFEA"
          pulseColor="#FF4F31"
          tunnelColor="#C72C27"
          tunnelOpacity={0.14}
          cableCount={56}
          pulseDensity={0.5}
          flowDirection="inward"
          size={1.3}
          fadeNear={0.6}
          brightness={0.9}
          mouseInteraction
          clickSurge
        />

        {/* Keeps the centre calm so the text stays readable over the light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_42%,rgba(18,17,11,0.88)_0%,rgba(18,17,11,0.55)_55%,rgba(18,17,11,0)_100%)]"
        />

        <div className="relative z-10 flex max-w-4xl flex-col items-center">
          <motion.p
            {...fadeUp(0)}
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF4F31] sm:text-xs md:mb-4"
          >
            Make some noise
          </motion.p>

          <SmokeType
            as="h2"
            id="cta-heading"
            color="#FDF9F9"
            className="display-heading text-[#FDF9F9]"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4.25rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
            }}
            lines={[
              [{ text: "We make your" }],
              [{ text: "brand roar.", color: "#FF4F31" }],
            ]}
          />

          <motion.p
            {...fadeUp(0.2)}
            className="mt-3 max-w-xl text-balance text-[15px] leading-relaxed text-[#FDF9F9]/75 sm:text-base md:mt-4"
          >
            Bold ideas. Unforgettable brands. Growth that speaks for itself.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-5 md:mt-6">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FDF9F9] py-3 pl-6 pr-3 text-sm font-semibold text-[#12110B] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#FF4F31] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4F31] sm:py-3.5 sm:pl-7 sm:text-base"
            >
              <span>Let&apos;s make noise</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF4F31] text-white transition-colors duration-300 group-hover:bg-[#12110B] sm:h-9 sm:w-9">
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
      </FrameBorder>
    </section>
  );
}
