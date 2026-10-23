"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import SmokeType from "./smoke-type";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

// Real client feedback, shared with the Testimonials page.
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sneha Reddy",
    role: "Owner, Zari Boutique",
    quote:
      "The Content Gang is hands down the best agency in Hyderabad! They completely transformed our online presence and our foot traffic doubled after they took over our social media. Highly recommend!",
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Marketing Director, Urban Spaces",
    quote:
      "We needed an agency that understood the fast-paced real estate crowd in Gachibowli. The Content Gang didn't just understand it—they elevated our brand. The ROI on our recent campaign has been phenomenal.",
  },
  {
    id: "3",
    name: "Tariq M.",
    role: "Client via WhatsApp",
    quote:
      "The new cafe reel just crossed 500k views! My phone hasn't stopped ringing for table reservations today. You guys are magic.",
  },
  {
    id: "4",
    name: "Dr. Ananya Kiran",
    role: "Founder, Kiran Skin Clinic",
    quote:
      "Incredible team. They handled our local SEO and content creation. If anyone searches for clinics in Jubilee Hills now, we show up first. We literally have patients walking in saying they saw our Instagram. 5 stars!",
  },
  {
    id: "5",
    name: "Robert Fox",
    role: "VP of Sales, TechFlow",
    quote:
      "Their lead generation campaigns are incredibly precise. We stopped wasting money on empty clicks and started having real conversations with qualified B2B buyers across India.",
  },
  {
    id: "6",
    name: "Varun D.",
    role: "Client via Slack",
    quote:
      "The T-Hub event coverage photos are approved! Everyone on the board loved the new direction. Thanks for turning this around so quickly.",
  },
  {
    id: "7",
    name: "Karthik S.",
    role: "Co-Founder, Hyderabadi Cloud Kitchens",
    quote:
      "We launched 3 new cloud kitchens in Madhapur and relied entirely on The Content Gang for the launch strategy. The Meta ads were so perfectly targeted that we sold out on opening weekend.",
  },
  {
    id: "8",
    name: "Neha V.",
    role: "Client via WhatsApp",
    quote:
      "Just saw the new billboard designs for the Kondapur project. Absolutely stunning work. Print it!",
  },
  {
    id: "9",
    name: "Vikram Desai",
    role: "Managing Director, Desai Infra",
    quote:
      "Construction marketing is usually boring, but this team found a way to make our projects look like cinematic masterpieces. They are the only agency in Hyderabad I trust with my brand.",
  },
];

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s+/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Testimonial2() {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const reduceMotion = useReducedMotion();

  // Split testimonials into 3 rows for visual variance
  const rows = [testimonials.slice(0, 3), testimonials.slice(3, 6), testimonials.slice(6, 9)];

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full overflow-hidden py-16 text-[#12110B] [--color-primary:#FF4F31] md:py-24"
      // Continues the peach glow at the bottom of the Manifesto section into the page off-white
      style={{ background: "linear-gradient(180deg, #F9D9C8 0%, #FDF9F9 14%)" }}
    >
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center md:mb-12">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C72C27] sm:text-xs">
          Client stories
        </p>
        <SmokeType
          as="h2"
          id="testimonials-heading"
          className="display-heading text-[#12110B]"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1, letterSpacing: "-0.025em" }}
          lines={[[{ text: "Trusted by the brands we grow." }]]}
        />
      </div>

      {/* Main container acting as the viewport for background and fades */}
      <div className="relative w-full">
        {/* Shaded background */}
        <div className="pointer-events-none absolute inset-0 z-0 border-y border-[#12110B] bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] opacity-10" />

        {/* Edge fades */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-[#FDF9F9] to-transparent md:w-40" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-[#FDF9F9] to-transparent md:w-40" />

        {/* Content rows */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 overflow-hidden py-10 md:gap-8 md:py-12">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex min-w-max items-center"
              animate={
                reduceMotion
                  ? undefined
                  : { x: rowIndex % 2 === 0 ? ["0%", "-25%"] : ["-25%", "0%"] }
              }
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {/* Each repeat is exactly 25% of the track, so the loop is seamless */}
              {[...row, ...row, ...row, ...row].map((testimonial, i) => (
                <div key={`${testimonial.id}-${i}`} className="pr-6" aria-hidden={i >= row.length}>
                  <Capsule
                    testimonial={testimonial}
                    onClick={() => setSelected(testimonial)}
                    focusable={i < row.length}
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-[#12110B]/40 backdrop-blur-md"
            />

            {/* Modal card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Testimonial from ${selected.name}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-50 w-full max-w-lg rounded-2xl border-2 border-(--color-primary) bg-[#12110B] p-8 text-[#FDF9F9] shadow-2xl md:p-12"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close testimonial"
                autoFocus
                className="absolute right-4 top-4 rounded-full p-2 text-[#FDF9F9]/60 transition-colors hover:text-[#FDF9F9] focus-visible:outline-2 focus-visible:outline-(--color-primary)"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <p className="mb-8 text-lg font-medium leading-relaxed md:text-xl">
                  &ldquo;{selected.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <Avatar name={selected.name} className="h-12 w-12 text-sm" />
                  <div className="text-left">
                    <h3 className="text-base font-bold text-[#FDF9F9]">{selected.name}</h3>
                    <p className="text-sm text-[#FDF9F9]/60">{selected.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Avatar({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-full border-2 border-(--color-primary) bg-[#F4EFEA] font-bold text-[#C72C27] ${className}`}
    >
      {initials(name)}
    </span>
  );
}

function Capsule({
  testimonial,
  onClick,
  focusable,
}: {
  testimonial: Testimonial;
  onClick: () => void;
  focusable: boolean;
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      tabIndex={focusable ? 0 : -1}
      className="group flex cursor-pointer items-center gap-4 rounded-full border border-neutral-300 bg-white p-2 pr-8 text-left shadow-sm transition-all hover:border-dashed hover:border-(--color-primary) hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
    >
      <Avatar name={testimonial.name} className="h-12 w-12 text-sm md:h-14 md:w-14 md:text-base" />
      <span className="flex max-w-[190px] flex-col items-start leading-tight md:max-w-[240px]">
        <span className="text-sm font-bold text-[#12110B]">{testimonial.name}</span>
        <span className="w-full truncate text-xs text-[#12110B]/60">{testimonial.role}</span>
      </span>
    </motion.button>
  );
}
