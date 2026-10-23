import WorkArrow from "./WorkArrow";

type WorkMetaProps = {
  id: string;
  category: string;
  title: string;
  description: string;
};

export default function WorkMeta({ id, category, title, description }: WorkMetaProps) {
  return (
    <div className="flex flex-col items-center text-center pt-6">
      <div className="mb-3 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-[#FF4F31]">{id}</span>
          <span className="h-px w-6 bg-black/10 transition-all duration-500 group-hover:w-10 group-hover:bg-[#FF4F31]/50" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#12110B]">{category}</span>
        </div>
      </div>
      
      <h3 className="mb-3 text-2xl md:text-3xl font-medium tracking-tight text-[#12110B] display-heading transition-transform duration-500 group-hover:-translate-y-1">
        {title}
      </h3>
      
      <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#555]">
        {description}
      </p>

      <div className="flex items-center justify-center gap-4 mt-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12110B] transition-colors duration-300 group-hover:text-[#FF4F31]">
          View Case Study
        </span>
        <WorkArrow />
      </div>
    </div>
  );
}
