"use client";

import { motion } from "framer-motion";
import { approachSteps } from "./approachData";
import ApproachCard from "./ApproachCard";
import SmokeType from "../ui/smoke-type";

export default function ApproachSection() {
  return (
    <section
      className="relative w-full bg-[#FDF9F9] py-20 md:py-32 overflow-hidden"
      id="approach"
    >
      {/* Background subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF4F31]/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Header */}
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-0 mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6 md:mb-8 w-full"
          >
            <div className="hidden sm:block w-8 h-px bg-black/20" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#12110B]/60">
              Our Approach
            </span>
            <div className="hidden sm:block w-8 h-px bg-black/20" />
          </motion.div>
          <SmokeType
            as="h2"
            className="text-[#12110B] leading-[1.05] tracking-tight mb-6 sm:mb-8 display-heading"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6.5rem)", fontWeight: 500 }}
            lines={[
              [{ text: "Good ideas." }],
              [{ text: "Clear process.", color: "#FF4F31" }],
            ]}
          />
          <p className="max-w-2xl text-base md:text-lg text-[#12110B]/70 leading-relaxed font-light">
            We keep things simple. We understand your business, build a clear plan, create the work, launch it, and keep improving it based on what actually works.
          </p>
        </div>

        {/* 4-Column Grid for Vertical Cards */}
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {approachSteps.map((step) => (
              <ApproachCard key={step.number} step={step} />
            ))}
          </div>
        </div>

        {/* Outro */}
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-0 mt-20 md:mt-32 text-center">
          <h3 className="display-heading text-3xl md:text-5xl lg:text-6xl leading-tight flex flex-wrap justify-center gap-x-3 md:gap-x-5 mb-6 text-[#12110B]/20">
            {["Think.", "Create.", "Launch.", "Learn.", "Grow."].map((word, i) => (
              <motion.span
                key={word}
                className={word === "Grow." ? "text-[#FF4F31]" : "text-[#12110B]"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                {word}
              </motion.span>
            ))}
          </h3>
          <p className="text-[#12110B]/60 text-lg md:text-xl font-light tracking-wide">
            That&apos;s how we move brands forward.
          </p>
        </div>
      </div>
    </section>
  );
}