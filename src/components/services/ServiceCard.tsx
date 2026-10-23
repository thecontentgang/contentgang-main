"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";
import { ServiceItem } from "./servicesData";

type Props = {
  service: ServiceItem;
};

export default function ServiceCard({ service }: Props) {
  return (
    <Link href={service.href} className="block w-full h-full outline-none focus-visible:ring-2 focus-visible:ring-[#FF4F31] rounded-[32px]">
      <motion.div
        className="group relative flex flex-col justify-between w-full min-h-[480px] md:min-h-[560px] lg:min-h-[440px] xl:min-h-[480px] rounded-[32px] overflow-hidden bg-[#12110B] p-8 md:p-12 lg:p-10 xl:p-12 shadow-2xl border border-white/[0.02]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle hover gradient / background effect (optional but premium) */}
        <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,79,49,0.05),transparent_60%)] pointer-events-none" />

        {/* Top: Huge Typography */}
        <div className="relative z-10 w-full mb-8 lg:mb-6 mt-4 md:mt-8 lg:mt-2">
          <h2 className="text-5xl sm:text-6xl md:text-[80px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-[-0.03em] font-medium">
            <span className="block text-white">{service.titleLight}</span>
            <span className="block text-[#8F8E89]">{service.titleDark}</span>
          </h2>
        </div>

        {/* Bottom: Tags and Description */}
        <div className="relative z-10 w-full mt-auto flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-12">
          
          <div className="flex-1 flex flex-col gap-8 max-w-3xl">
            {/* Tags / Pills */}
            <div className="flex flex-wrap gap-3">
              {service.tags.map((tag, idx) => (
                <div key={idx} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-sm md:text-base font-medium text-white/70 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                  {tag}
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="flex items-start gap-4">
              <Asterisk className="w-8 h-8 md:w-10 md:h-10 text-[#FF4F31] shrink-0 mt-0.5 md:mt-0 opacity-80 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" strokeWidth={1.2} />
              <p className="text-lg md:text-2xl lg:text-xl text-white/80 leading-relaxed font-light tracking-wide max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-500 group-hover:bg-[#FF4F31] group-hover:border-[#FF4F31] group-hover:rotate-45 shadow-lg">
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

        </div>
      </motion.div>
    </Link>
  );
}
