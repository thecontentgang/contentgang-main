"use client";

import React from 'react';
import { motion } from 'framer-motion';

const IndustriesHero = () => {
  return (
    <section className="w-full p-0 lg:pt-12 lg:px-12 lg:pb-12 box-border bg-[#F4EFEA]">
      
      <div 
        className="relative w-full py-20 md:py-28 rounded-none lg:rounded-[3rem] overflow-hidden shadow-none lg:shadow-2xl flex items-center justify-center text-center px-4 sm:px-6 md:px-12"
        style={{
          backgroundImage: 'url("/images/Ind-hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#12110B' // Changed fallback to dark
        }}
      >
        
        {/* DARK OVERLAY: Ensures white text is always readable over the image */}
        <div className="absolute inset-0 bg-[#12110B]/60"></div>

        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF4F31] rounded-full blur-[10rem] opacity-[0.15] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#FF4F31] rounded-full blur-[8rem] opacity-[0.15] pointer-events-none"></div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
        >
          
         
          
          {/* Main Headline - Changed text to white/off-white */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-[#FDF9F9]">
            We Know Your Industry. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#FF4F31] to-[#C72C27] bg-clip-text text-transparent">
              We Know How to Make It Grow.
            </span>
          </h1>
          
          {/* Subtext - Changed text to white/off-white with 80% opacity */}
          <p className="text-lg md:text-xl text-[#FDF9F9]/80 mb-4 leading-relaxed font-medium max-w-3xl">
            Every business has a story. But the way you tell that story depends on <strong className="text-white font-bold">what you sell, who you sell it to, and what makes your industry different.</strong>
          </p>
          
          <p className="text-base md:text-lg text-[#FDF9F9]/80 mb-8 leading-relaxed font-medium max-w-3xl">
            That&apos;s why we don&apos;t believe in one-size-fits-all marketing. We get into your world, understand your customers, and create the <strong className="text-[#FF4F31] font-bold">content, marketing, and digital strategy</strong> that makes sense for you.
          </p>
          
          {/* Call to Action Button - Made it vibrant orange so it pops on the dark background */}
          <button 
            onClick={() => {
              document.getElementById('industries-list')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-[#FF4F31] text-[#FDF9F9] text-base font-bold rounded-xl hover:scale-105 hover:bg-[#C72C27] transition-all duration-300 ease-out shadow-lg shadow-orange-500/20"
          >
            Find Your Industry
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform duration-300" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesHero;