import { ArrowUpRight } from "lucide-react";

export default function WorkArrow() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 transition-all duration-500 group-hover:border-[#FF4F31] group-hover:bg-[#FF4F31]">
      <ArrowUpRight 
        size={20} 
        strokeWidth={1.5} 
        className="text-[#12110B] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FDF9F9]" 
      />
    </div>
  );
}
