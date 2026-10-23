import React from 'react';

const AboutHero = () => {
  return (
    // Pushed padded layout to lg: (desktop). Mobile/Tablet will be edge-to-edge (p-0).
    <section className="w-full min-h-screen p-0 lg:pt-12 lg:px-12 lg:pb-12 box-border bg-[#F4EFEA]">
      
      {/* 
        The Card Container
        Mobile & Tablet: Full height (100dvh). Desktop (lg): 85vh floating card.
      */}
      <div className="relative w-full h-[100dvh] lg:h-[85vh] rounded-none lg:rounded-[2.5rem] overflow-hidden shadow-none lg:shadow-2xl bg-[#FDF9F9]">
        
        {/* ========================================= */}
        {/* DESKTOP BACKGROUND IMAGE (Hidden on mobile & tablet) */}
        {/* ========================================= */}
        <div className="hidden lg:block absolute inset-0 bg-[url('/images/about-hero.png')] bg-cover bg-center bg-no-repeat"></div>
        
        {/* ========================================= */}
        {/* MOBILE/TABLET BACKGROUND IMAGE (Anchored to bottom)*/}
        {/* ========================================= */}
        <div 
          className="lg:hidden absolute bottom-0 left-0 w-full h-[55%] bg-[url('/images/about-hero-mobile.png')] bg-cover bg-bottom bg-no-repeat"
        >
          {/* Subtle gradient to smoothly blend the top edge of the image into the white background */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#FDF9F9] to-transparent"></div>
        </div>

        {/* ========================================= */}
        {/* CONTENT CONTAINER                         */}
        {/* ========================================= */}
        <div className="relative z-10 w-full lg:w-[55%] p-6 pt-[15vh] lg:p-16 flex flex-col items-center lg:items-start text-center lg:text-left justify-start lg:justify-center h-full">
          
          {/* Accent subtitle */}
          <span className="text-sm md:text-base font-bold tracking-wider text-[#FF4F31] uppercase mb-4">
            About The Content Gang
          </span>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold mb-6 leading-[1.05] tracking-tight text-[#12110B]">
            <span className="bg-gradient-to-b from-[#FF4F31] via-[#c74026] to-[#12110B] bg-clip-text text-transparent pb-1">
              We make brands
            </span>
            <br className="hidden lg:block" />
            <span className="text-[#12110B]"> impossible to ignore.</span>
          </h1>
          
          {/* Paragraph */}
          <p className="text-lg md:text-xl text-[#12110B] mb-10 max-w-xl leading-relaxed font-medium">
            The Content Gang is a creative content and social media growth team built for brands that want to be seen, remembered, and chosen.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            
            <button className="px-8 py-3.5 bg-[#FF4F31] text-[#FDF9F9] font-semibold rounded-xl hover:scale-105 hover:bg-[#C72C27] transition-all duration-300 ease-out shadow-lg shadow-orange-500/30">
              Work With Us
            </button>
            
            <button className="px-8 py-3.5 bg-transparent border-2 border-[#12110B] text-[#12110B] font-semibold rounded-xl hover:bg-[#12110B] hover:text-[#FDF9F9] transition-all duration-300 ease-out">
              Meet The Gang
            </button>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;