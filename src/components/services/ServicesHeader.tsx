"use client";

import { motion } from "framer-motion";
import SmokeType from "../ui/smoke-type";

export default function ServicesHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-16 md:mb-24 w-full relative max-w-5xl mx-auto px-6 sm:px-10 xl:px-0">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-4 mb-6 md:mb-8 w-full"
      >
        <div className="hidden sm:block w-8 h-px bg-black/20" />
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#12110B]/60">
          What We Do
        </span>
        <div className="hidden sm:block w-8 h-px bg-black/20" />
      </motion.div>

      {/* Main Headline */}
      <SmokeType
        as="h2"
        className="text-[#12110B] leading-[1.05] tracking-tight display-heading mb-8 md:mb-10 max-w-4xl"
        style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 500 }}
        lines={[
          [{ text: "Creative work." }],
          [{ text: "Built for " }, { text: "growth.", color: "#FF4F31" }],
        ]}
      />

      {/* Supporting text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-[#12110B]/70 leading-relaxed max-w-2xl font-light mx-auto"
      >
        From content and social to performance and digital experiences, we build the systems that help brands move forward.
      </motion.p>

    </div>
  );
}
