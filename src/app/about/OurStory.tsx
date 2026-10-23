import React from 'react';

const OurStory = () => {
  return (
    <section className="w-full bg-[#F4EFEA] py-24 md:py-32 px-6 md:px-12 box-border">
      
      {/* Centered Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <span className="text-sm md:text-base font-bold tracking-wider text-[#FF4F31] uppercase mb-4 block">
          Our Story
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12110B] leading-tight tracking-tight">
          Built Small. Think Big.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-[#12110B]/70 font-medium">
          The Content Gang was built with a simple belief.
        </p>
      </div>

      {/* Premium SaaS Bento Box Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Core Philosophy (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-[#FDF9F9] rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-200/50 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
          <h3 className="text-3xl md:text-4xl font-bold text-[#12110B] leading-tight mb-6">
            Great brands don&apos;t need more noise. <br className="hidden md:block" />
            <span className="text-[#FF4F31]">They need better ideas.</span>
          </h3>
          <p className="text-[#12110B]/80 text-lg md:text-xl font-medium leading-relaxed">
            Social media has become one of the most crowded spaces in the world. Every brand is competing for attention, and simply being present isn&apos;t enough anymore. That&apos;s where we come in. We help brands figure out <strong className="text-[#12110B]">what they should say, how they should say it, and how to make people care.</strong>
          </p>
        </div>

        {/* Card 2: The Quote / Impact (Dark Accent Card) */}
        <div className="lg:col-span-1 bg-[#12110B] rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col justify-center relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
          {/* Decorative SaaS-style glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FF4F31] rounded-full blur-[4rem] opacity-40"></div>
          
          <svg className="w-10 h-10 text-[#FF4F31] mb-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl md:text-3xl font-bold text-[#FDF9F9] leading-snug relative z-10">
            We don&apos;t see ourselves as an agency sitting outside your business. We become part of the team.
          </p>
        </div>

        {/* Card 3: Execution (Orange Accent Card) */}
        <div className="lg:col-span-1 bg-[#FF4F31] rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
          <h4 className="text-2xl font-bold text-[#FDF9F9] mb-4">One Team. One Direction.</h4>
          <p className="text-[#FDF9F9]/90 text-lg font-medium leading-relaxed">
            From strategy and creative direction to content production and consistent execution, we work closely with brands to build a presence that feels distinctive, relevant, and impossible to scroll past.
          </p>
        </div>

        {/* Card 4: The Team & Bullet Points (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-[#FDF9F9] rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-200/50 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
          <p className="text-[#12110B]/80 text-lg md:text-xl font-medium leading-relaxed mb-8">
            We&apos;re intentionally a <strong className="text-[#12110B]">small and closely connected team</strong>. That means fewer layers, faster communication, quicker decisions, and direct access to the people actually working on your brand.
          </p>

          {/* Premium styled feature list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              "No middlemen.",
              "No unnecessary handovers.",
              "No ideas getting lost."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#F4EFEA] p-4 rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-[#12110B] flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-4 h-4 text-[#FDF9F9]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#12110B] font-bold text-sm md:text-base">{text}</span>
              </div>
            ))}
          </div>

          <p className="text-2xl text-[#12110B] font-bold">
            Just smart thinking, great creative, and consistent execution.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurStory;