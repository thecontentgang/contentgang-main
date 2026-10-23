import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { WorkProject } from "./worksData";
import WorkArrow from "./WorkArrow";

type FeaturedWorkProps = {
  project: WorkProject;
};

export default function FeaturedWork({ project }: FeaturedWorkProps) {
  return (
    <motion.div 
      className="group relative flex flex-col w-full max-w-5xl mx-auto mb-20 md:mb-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link href={project.href} className="flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4F31] rounded-3xl">
        <div className="relative w-full overflow-hidden rounded-3xl bg-[#12110B]/5 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/9]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        
        <div className="flex flex-col items-center text-center pt-8 md:pt-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-xs sm:text-sm font-semibold text-[#FF4F31]">{project.id}</span>
            <span className="h-px w-8 bg-black/10 transition-all duration-500 group-hover:w-12 group-hover:bg-[#FF4F31]/50" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#12110B]">{project.category}</span>
          </div>
          
          <h3 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#12110B] display-heading transition-transform duration-500 group-hover:-translate-y-1">
            {project.title}
          </h3>
          
          <p className="mb-8 max-w-2xl text-base sm:text-lg leading-relaxed text-[#555]">
            {project.description}
          </p>

          <div className="flex items-center justify-center gap-4 mt-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#12110B] transition-colors duration-300 group-hover:text-[#FF4F31]">
              View Case Study
            </span>
            <WorkArrow />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
