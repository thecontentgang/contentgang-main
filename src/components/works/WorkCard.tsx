import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import WorkMeta from "./WorkMeta";
import { WorkProject } from "./worksData";

type WorkCardProps = {
  project: WorkProject;
  aspectRatio?: string; // allow customizing the image aspect ratio
  className?: string;
  imagePriority?: boolean;
};

export default function WorkCard({ project, aspectRatio = "aspect-[4/3]", className = "", imagePriority = false }: WorkCardProps) {
  return (
    <motion.div 
      className={`group flex flex-col ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href={project.href} className="flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4F31] rounded-2xl">
        <div className={`relative w-full overflow-hidden rounded-2xl bg-[#12110B]/5 ${aspectRatio}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={imagePriority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <WorkMeta 
          id={project.id}
          category={project.category}
          title={project.title}
          description={project.description}
        />
      </Link>
    </motion.div>
  );
}
