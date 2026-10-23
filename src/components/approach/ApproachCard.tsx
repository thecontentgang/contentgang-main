"use client";

import { motion } from "framer-motion";
import { ApproachStepType } from "./index";
import UnderstandVisual from "./visuals/UnderstandVisual";
import PlanVisual from "./visuals/PlanVisual";
import CreateVisual from "./visuals/CreateVisual";
import GrowVisual from "./visuals/GrowVisual";

type Props = {
  step: ApproachStepType;
};

export default function ApproachCard({ step }: Props) {
  const getVisual = () => {
    switch (step.visual) {
      case "understand": return <UnderstandVisual />;
      case "plan": return <PlanVisual isActive={true} />;
      case "create": return <CreateVisual isActive={true} />;
      case "grow": return <GrowVisual isActive={true} />;
      default: return null;
    }
  };

  return (
    <motion.div
      className="group relative flex flex-col w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      {/* Animated Subtle Border on Hover */}
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 overflow-hidden rounded-[24px]">
        <div className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_80%,rgba(255,79,49,0.3)_100%)]" />
      </div>

      {/* Card Background Layer to mask the spinning border */}
      <div className="absolute inset-[1px] z-0 rounded-[23px] bg-white transition-colors duration-500 group-hover:bg-[#FCFAFA]" />

      {/* Atmospheric Glow (Bottom) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[#FF4F31]/5 blur-[60px] rounded-full transition-opacity duration-500 group-hover:bg-[#FF4F31]/10 pointer-events-none z-10" />

      {/* Top: Content Area */}
      <div className="relative z-20 flex flex-col p-6 md:p-8 shrink-0">
        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF4F31] mb-4">
          {step.number} — {step.label}
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#12110B] mb-4 leading-tight">
          {step.title.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h3>
        <p className="text-sm text-[#12110B]/60 leading-relaxed font-light">
          {step.description}
        </p>
      </div>

      {/* Bottom: Visual Component Area */}
      <div className="relative z-10 mt-auto flex-1 w-full flex items-center justify-center p-6 pb-12">
        {/* Changed -translate-y-6 to -translate-y-12 to push the visual even higher */}
        <div className="w-full h-full relative flex items-center justify-center -translate-y-12 opacity-80 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-105 origin-center">
          {getVisual()}
        </div>
      </div>
    </motion.div>
  );
}