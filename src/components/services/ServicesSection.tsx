"use client";

import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

export default function ServicesSection() {
  return (
    <section
      className="relative w-full bg-[#FDF9F9] py-20 md:py-32 overflow-clip border-t border-white/5"
      id="services"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center">
        <ServicesHeader />
        <ServicesGrid />
      </div>

    </section>
  );
}
