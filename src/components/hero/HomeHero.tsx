
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CurvedImageRibbon from "./CurvedImageRibbon";
import SmokeType from "../ui/smoke-type";

export default function HomeHero() {
  return (
    <section
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-[#FDF9F9] pt-28 pb-12 text-[#12110B] sm:pt-32 sm:pb-16 lg:pt-36"
    >


      {/* WARM BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 z-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 79, 49, 0.08) 0%, rgba(255, 79, 49, 0.01) 50%, transparent 70%)",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 text-center sm:px-6 lg:px-10">
        {/* HEADLINE */}
        <SmokeType
          as="h1"
          trigger="mount"
          className="relative z-20 mb-6 text-[#12110B] leading-[1.05] tracking-tight display-heading sm:mb-8"
          style={{
            fontSize: "clamp(2.75rem, 7vw, 6.5rem)",
            fontWeight: 500,
          }}
          lines={[
            [{ text: "Turn Content" }],
            [{ text: "Into " }, { text: "Real Results.", color: "#FF4F31" }],
          ]}
        />

        {/* SUBTITLE */}
        <motion.p
          className="mx-auto mb-7 max-w-2xl text-sm font-light leading-relaxed text-[#12110B]/70 sm:mb-8 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
        >
          We build scroll-stopping creative, high-velocity campaigns, and
          data-backed marketing engines that turn attention into compounding
          revenue.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          className="relative z-20 mb-6 flex w-full flex-row items-center justify-center gap-3 px-2 sm:mb-8 sm:gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          {/* PRIMARY CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#EC4429] px-5 py-3 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(236,68,41,0.3)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#111015] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-sm"
          >
            <span>Get Started</span>

            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-white/25 sm:h-7 sm:w-7">
              <svg
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4"
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

          {/* SECONDARY CTA */}
          <button
            type="button"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-black/15 bg-white/80 px-5 py-3 text-xs font-semibold text-[#111015] shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-black/5 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-sm"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/5 transition-colors duration-300 group-hover:bg-black/10 sm:h-7 sm:w-7">
              <svg
                className="ml-0.5 h-3 w-3 fill-current text-[#111015]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polygon points="6,4 20,12 6,20" />
              </svg>
            </span>

            <span>Watch Showreel</span>
          </button>
        </motion.div>
      </div>

      {/* INTERACTIVE CURVED IMAGE RIBBON */}
      {/*
        Negative margin moves the ribbon upward.
        The ribbon remains in document flow, so the
        stats and trusted brands follow it.
      */}
      <motion.div
        className="relative z-0 -mt-10 w-full sm:-mt-16 lg:-mt-40"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.8, delay: 0.38 },
          y: { duration: 0.8, delay: 0.38, ease: "easeOut" },
        }}
      >
        <CurvedImageRibbon speed={1} />
      </motion.div>

      {/* STATS BANNER — AFTER THE RIBBON */}
      <motion.div
        className="relative z-10 mx-auto -mt-4 w-full max-w-5xl px-4 sm:-mt-8 sm:px-6 lg:-mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1B1A20] via-[#111015] to-[#2A1510] shadow-[0_30px_60px_-20px_rgba(17,16,21,0.5)] ring-1 ring-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "70", label: "Brands Empowered" },
              { value: "13M", label: "Content Views" },
              { value: "50", label: "Campaigns Launched" },
              { value: "10cr", label: "Revenue Generated" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`px-5 py-7 text-center sm:px-6 sm:py-9 md:text-left ${i % 2 === 1 ? "border-l border-white/10" : ""
                  } ${i >= 2 ? "border-t border-white/10 md:border-t-0" : ""} ${i > 0 ? "md:border-l md:border-white/10" : ""
                  }`}
              >
                <span className="block font-display text-4xl font-semibold leading-none tracking-tight text-white sm:text-5xl">
                  {stat.value}
                  <span className="text-[#FF4F31]">+</span>
                </span>

                <span className="mt-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 sm:text-[11px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* TRUSTED BRANDS — AFTER THE STATS */}
      <motion.div
        className="relative z-10 mt-12 w-full pt-8 sm:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 sm:px-6 lg:px-10">
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#888] sm:text-[11px]">
            Trusted by fast-growing brands
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 opacity-75 transition-opacity duration-300 hover:opacity-100 sm:gap-6 md:gap-10 lg:gap-14">
            {[
              "Handover Expert",
              "Zencraft",
              "Krimmy Thickshakes",
              "Bright Arena",
              "Apple Interiors",
              "Studio Origin",
            ].map((brand) => (
              <div
                key={brand}
                className="flex items-center gap-2 rounded-lg border border-black/5 bg-white/60 px-3 py-1.5 shadow-sm"
              >
                <div className="h-2 w-2 rounded-full bg-[#FF4F31]" />

                <span className="whitespace-nowrap text-xs font-semibold tracking-wide text-[#12110B] sm:text-sm">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
