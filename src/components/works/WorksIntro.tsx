import Link from "next/link";
import { motion } from "framer-motion";
import WorkArrow from "./WorkArrow";

export default function WorksIntro() {
  return (
    <div className="flex flex-col items-center text-center gap-8 mb-16 md:mb-24 w-full">
      {/* Headline */}
      <div className="w-full">
        <motion.h2 
          className="text-[#12110B] leading-[1.05] tracking-tight display-heading"
          style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 800 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Work That<br />
          <span className="text-[#FF4F31]">moves Brands.</span>
        </motion.h2>
      </div>

      {/* Description & Link */}
      <motion.div 
        className="w-full max-w-2xl flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <p className="text-[#555] text-base md:text-lg leading-relaxed mb-8 px-4">
          From compelling content to full-scale campaigns, we create work that gets noticed, builds connection and drives real results.
        </p>
        
        <Link href="/case-studies" className="group inline-flex items-center gap-4 w-max focus-visible:outline-none bg-black/5 hover:bg-black/10 px-6 py-3 rounded-full transition-colors duration-300">
          <span className="text-sm font-bold uppercase tracking-[0.1em] text-[#12110B] transition-colors duration-300 group-hover:text-[#FF4F31]">
            View All Work
          </span>
          <WorkArrow />
        </Link>
      </motion.div>
    </div>
  );
}
