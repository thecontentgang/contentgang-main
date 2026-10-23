import { motion } from "framer-motion";

export default function WorksHeader() {
  return (
    <div className="flex justify-center w-full">
      <motion.div
        className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-1.5 mb-8 md:mb-12"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#FF4F31]" />
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-[#12110B]">
          Selected Work
        </span>
      </motion.div>
    </div>
  );
}
