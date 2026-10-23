import React from 'react';

const OurApproach = () => {
  const steps = [
    { title: "Stop the Scroll", icon: "01" },
    { title: "Earn the Attention", icon: "02" },
    { title: "Build the Connection", icon: "03" },
    { title: "Create Demand", icon: "04" },
    { title: "Drive Growth", icon: "05" }
  ];

  const outcomes = ["Awareness.", "Demand.", "Trust.", "Customers.", "Growth."];

  return (
    // Switching back to the crisp off-white background
    <section className="w-full bg-[#FDF9F9] py-20 md:py-32 px-4 sm:px-6 md:px-12 box-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#FF4F31]/10 text-[#FF4F31] text-sm md:text-base font-bold tracking-wider uppercase mb-6">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12110B] leading-tight tracking-tight">
            Attention First. <br className="hidden sm:block" />
            <span className="text-[#12110B]/40">Growth Always.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-[#12110B]/70 font-medium">
            We believe the journey starts with attention.
          </p>
        </div>

        {/* The 5-Step Journey Flow */}
        <div className="relative mb-20 md:mb-28">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#FF4F31]/20 via-[#FF4F31]/50 to-[#FF4F31]/20 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-[#F4EFEA] border border-white rounded-[1.5rem] p-6 md:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#FDF9F9] shadow-sm flex items-center justify-center mb-4 text-[#12110B]/30 font-bold group-hover:text-[#FF4F31] group-hover:bg-[#FF4F31]/10 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-[#12110B] font-bold text-lg md:text-xl leading-tight">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative & The "Bigger Picture" Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: The Narrative */}
          <div className="flex flex-col gap-6 text-lg md:text-xl text-[#12110B]/80 font-medium leading-relaxed">
            <p>
              That&apos;s how we approach content.
            </p>
            <p>
              We help brands discover what makes them interesting, turn those ideas into compelling content, build a consistent digital presence, and create social experiences that people actually want to engage with.
            </p>
            <p className="text-[#12110B] font-bold border-l-4 border-[#FF4F31] pl-5 mt-4">
              But we don&apos;t stop at attention. We look at how that attention can contribute to something bigger.
            </p>
          </div>

          {/* Right Side: Dark Outcomes Card */}
          <div className="bg-[#12110B] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Ambient Orange Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF4F31] rounded-full blur-[6rem] opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap gap-4 mb-10">
                {outcomes.map((outcome, index) => (
                  <span 
                    key={index}
                    className="py-2 px-5 rounded-full border border-[#FDF9F9]/20 text-[#FDF9F9] font-semibold text-lg hover:bg-[#FF4F31] hover:border-[#FF4F31] transition-colors cursor-default"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
              
              <div className="pt-8 border-t border-[#FDF9F9]/20">
                <p className="text-[#FDF9F9]/60 text-xl font-medium mb-2">
                  Because content isn&apos;t the end goal.
                </p>
                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4F31] to-[#c74026]">
                  Growth is.
                </h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurApproach;