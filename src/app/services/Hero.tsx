import React from 'react';

const ServicesHero = () => {
  return (
    <section className="w-full min-h-screen p-0 lg:pt-12 lg:px-12 lg:pb-12 box-border bg-[#F4EFEA]">
      
      {/* 
        The Hero Card 
      */}
      <div 
        className="relative w-full h-[100dvh] lg:h-[85vh] rounded-none lg:rounded-[3rem] overflow-hidden shadow-none lg:shadow-2xl flex items-center justify-center text-center px-4 sm:px-6 md:px-12"
        style={{
          backgroundImage: 'url("/images/service-hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#FDF9F9' 
        }}
      >
        
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#FDF9F9]/60"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto pt-10">
          
          
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold mb-8 leading-[1.05] tracking-tight text-[#12110B]">
            We Don&apos;t Just Do Digital. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#FF4F31] to-[#c74026] bg-clip-text text-transparent">
              We Make It Work.
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-2xl text-[#12110B]/80 mb-6 leading-relaxed font-medium max-w-3xl">
            Your brand doesn&apos;t need more marketing for the sake of marketing. 
          </p>
          
          <p className="text-lg md:text-xl text-[#12110B]/90 mb-12 leading-relaxed font-medium max-w-3xl">
            It needs the <strong className="text-[#FF4F31] font-bold">right idea, the right content, the right audience, and the right strategy</strong> working together. That&apos;s what we do.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#FF4F31] text-[#FDF9F9] text-base md:text-lg font-bold rounded-xl hover:scale-105 hover:bg-[#C72C27] transition-all duration-300 ease-out shadow-lg shadow-orange-500/30">
              Explore Services
            </button>
            
            {/* UPDATED: Let's Talk Button - Hover fills with dark background and white text */}
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-[#12110B] text-[#12110B] text-base md:text-lg font-bold rounded-xl hover:bg-[#12110B] hover:text-[#FDF9F9] transition-all duration-300 ease-out backdrop-blur-sm">
              Let&apos;s Talk
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;