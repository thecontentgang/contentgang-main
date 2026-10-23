"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceItem } from "./servicesData";

type Props = {
  service: ServiceItem;
};

export default function SEOCard({ service }: Props) {
  return (
    <Link href={service.href} className={`block h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-[#FF4F31] rounded-[24px] ${service.colSpan} col-span-12`}>
      <motion.div
        className="group relative flex flex-col w-full h-full min-h-[280px] md:min-h-[320px] rounded-[24px] overflow-hidden bg-[#12110B] shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        whileHover={{ y: -6 }}
      >
        {/* Animated Rotating Border */}
        <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 overflow-hidden rounded-[24px]">
          <div className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_75%,#FF4F31_100%)]" />
        </div>

        {/* Card Background Layer */}
        <div className="absolute inset-[1px] z-0 rounded-[23px] bg-[#12110B]" />

        {/* Atmospheric Glow (SEO Specific - Bottom Right Center) */}
        <div className="absolute bottom-0 right-1/4 w-80 h-40 bg-[#FF4F31]/10 blur-[100px] rounded-full transition-opacity duration-500 group-hover:bg-[#FF4F31]/20 pointer-events-none z-10" />

        {/* ──────── REDUCED, FULLY VISIBLE IMAGE ──────── */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-[55%] h-[45%] md:w-[40%] md:h-[55%] z-10 pointer-events-none">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-contain object-right-bottom transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Content Area */}
        <div className="relative z-20 flex flex-col h-full p-6 md:p-8 w-full md:w-[60%]">
          <div className="mb-auto max-w-sm">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
              {service.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
              {service.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              {service.description}
            </p>
          </div>

          <div className="mt-8 flex items-center">
            {/* Learn More Button */}
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white shadow-sm transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20 w-fit">
              Learn more
            </div>
          </div>
        </div>

      </motion.div>
    </Link>
  );
}