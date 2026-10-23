import WorkCard from "./WorkCard";
import { worksData } from "./worksData";

export default function WorkGrid() {
  const projects = worksData.slice(1);
  
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-24 md:mb-32">
      {projects.map((project, idx) => {
        // Keep a uniform aspect ratio since we are centering everything
        const aspectRatio = "aspect-[4/3]";
        
        return (
          <div key={project.id} className="w-full flex justify-center text-center">
            <div className="w-full max-w-[500px]">
              <WorkCard 
                project={project} 
                aspectRatio={aspectRatio}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
