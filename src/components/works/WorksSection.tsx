"use client";

import WorksHeader from "./WorksHeader";
import WorksIntro from "./WorksIntro";
import FeaturedWork from "./FeaturedWork";
import WorkGrid from "./WorkGrid";

import { worksData } from "./worksData";

export default function WorksSection() {
  return (
    <section
      className="relative w-full bg-[#FDF9F9] text-[#12110B] overflow-hidden"
      id="work"
    >
      {/* 
        Optional warm surface block for visual texture, 
        but leaving it minimal per instructions.
      */}
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 xl:px-16 pt-32 pb-16">

        <WorksHeader />

        <WorksIntro />

        {/* We use the first project as the featured project */}
        {worksData.length > 0 && (
          <div className="flex justify-center w-full">
            <FeaturedWork project={worksData[0]} />
          </div>
        )}

        <WorkGrid />



      </div>
    </section>
  );
}
