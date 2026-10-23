import React from 'react';

const CallToAction = () => {
  return (
    // Outer wrapper uses the off-white background to blend with the previous section
    <section className="w-full bg-[#FDF9F9] py-16 md:py-24 px-4 sm:px-6 md:px-12 box-border">

  <div
    className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl flex flex-col items-center text-center"
    style={{
      backgroundImage: 'url("/images/cta-bg.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-[#12110B]/65 z-0"></div>

    {/* Optional subtle red gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#12110B]/20 via-transparent to-[#C72C27]/20 z-0"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center mx-auto max-w-3xl">

      {/* Eyebrow */}
      <span className="inline-block py-1.5 px-4 rounded-full bg-[#FDF9F9]/10 text-[#FDF9F9] text-sm md:text-base font-bold tracking-wider uppercase mb-6 border border-[#FDF9F9]/20 backdrop-blur-sm">
        Ready to Meet The Gang?
      </span>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FDF9F9] leading-tight tracking-tight mb-10">
        Let&apos;s build something <br className="hidden sm:block" />
        <span className="text-[#FF4F31]">
          people stop scrolling for.
        </span>
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">

        <button className="w-full sm:w-auto px-8 md:px-10 py-4 bg-[#FF4F31] text-[#FDF9F9] text-base md:text-lg font-bold rounded-xl hover:scale-105 hover:bg-[#C72C27] transition-all duration-300 ease-out shadow-lg shadow-orange-500/20">
          Start a Project
        </button>

        <button className="w-full sm:w-auto px-8 md:px-10 py-4 bg-transparent border-2 border-[#FDF9F9]/50 text-[#FDF9F9] text-base md:text-lg font-bold rounded-xl hover:bg-[#FDF9F9] hover:text-[#12110B] transition-all duration-300 ease-out backdrop-blur-sm">
          Call Us Directly
        </button>

      </div>

    </div>
  </div>

</section>
  );
};

export default CallToAction;