import React from 'react';

const Culture = () => {
  return (
    <section className="w-full bg-[#F4EFEA] py-20 md:py-32 px-4 sm:px-6 md:px-12 box-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#FF4F31]/10 text-[#FF4F31] text-sm md:text-base font-bold tracking-wider uppercase mb-6">
            Culture
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12110B] leading-tight tracking-tight max-w-4xl">
            Serious About Growth. <br className="hidden md:block" />
            <span className="text-[#12110B]/40">Easy to Work With.</span>
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* Top Left: The Philosophy */}
          <div className="lg:col-span-7 bg-[#FDF9F9] rounded-[2rem] p-8 md:p-12 shadow-sm border border-black/5 flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-[#12110B] font-bold leading-snug mb-6">
              We believe great work doesn&apos;t have to come from a stiff corporate environment.
            </p>
            <p className="text-lg md:text-xl text-[#12110B]/70 font-medium leading-relaxed">
              Our culture is built around <strong className="text-[#12110B]">curiosity, collaboration, creativity, and a healthy obsession with making things better.</strong> We&apos;re the kind of team that can sit down with you, understand your business, throw around crazy ideas, turn the best ones into content, and then watch them go out into the world.
            </p>
          </div>

          {/* Top Right: The Challenge Block (Dark) */}
          <div className="lg:col-span-5 bg-[#12110B] rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col justify-center relative overflow-hidden group">
            {/* Subtle hover glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF4F31] rounded-full blur-[5rem] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col gap-4 text-2xl md:text-3xl font-bold text-[#FDF9F9]">
              <span className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[#FF4F31]"></span>
                We challenge each other.
              </span>
              <span className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[#FF4F31]"></span>
                We challenge our clients.
              </span>
              <span className="flex items-center gap-4 text-[#FDF9F9]/50">
                <span className="w-2 h-2 rounded-full bg-[#FF4F31]/50"></span>
                We challenge what&apos;s already been done.
              </span>
            </div>
            
            <p className="relative z-10 mt-10 text-lg text-[#FF4F31] font-semibold">
              Because sometimes the best idea isn&apos;t the safest one.
            </p>
          </div>

          {/* Bottom Left: When it works (Orange Accent) */}
          <div className="lg:col-span-6 bg-[#FF4F31] rounded-[2rem] p-8 md:p-12 shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
            <span className="text-[#FDF9F9]/80 font-bold uppercase tracking-wider text-sm mb-4 block">
              The Outcome
            </span>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#FDF9F9] mb-2">
                And when something works?
              </h3>
              <p className="text-2xl text-[#12110B] font-black uppercase tracking-tight">
                We do more of it.
              </p>
            </div>
          </div>

          {/* Bottom Right: When it doesn't */}
          <div className="lg:col-span-6 bg-[#FDF9F9] rounded-[2rem] p-8 md:p-12 shadow-sm border border-black/5 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
            <span className="text-[#12110B]/40 font-bold uppercase tracking-wider text-sm mb-4 block">
              The Process
            </span>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#12110B] mb-2">
                When it doesn&apos;t?
              </h3>
              <p className="text-2xl text-[#FF4F31] font-black uppercase tracking-tight">
                We learn, adapt, and make it better.
              </p>
            </div>
          </div>

          {/* Full Width Bottom: The Conclusion */}
          <div className="lg:col-span-12 flex flex-col items-center text-center mt-6 p-8">
            <p className="text-xl md:text-2xl text-[#12110B]/80 font-medium leading-relaxed max-w-4xl">
              Because we&apos;re not interested in doing things simply because that&apos;s how they&apos;ve always been done. <br className="hidden md:block" />
              <strong className="text-[#12110B] font-bold">We&apos;re interested in finding what works.</strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Culture;