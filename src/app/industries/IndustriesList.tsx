"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 1. Simplified TypeScript Interface (removed highlights to save space)
interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  href: string;
  imageSrc: string;
}

// 2. Condensed Data: Descriptions reduced to 1-2 punchy sentences
const industriesData: IndustryItem[] = [
  {
    id: "interiors",
    title: "Interiors & Design",
    subtitle: "Beautiful Spaces Deserve Better Stories.",
    description: "Turn beautiful spaces into bookings and enquiries through high-end visual storytelling and targeted digital marketing.",
    linkText: "Explore Interiors",
    href: "/industries/interiors",
    imageSrc: "/images/ind-interiors.jpg"
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Don't Just Sell Square Feet.",
    description: "Build visibility and generate qualified enquiries throughout the entire modern property buying journey.",
    linkText: "Explore Real Estate",
    href: "/industries/real-estate",
    imageSrc: "/images/ind-real-estate.jpg"
  },
  {
    id: "home-inspection",
    title: "Home Inspection",
    subtitle: "Make Trust Your Strongest Asset.",
    description: "Build credibility and turn local homeowners into consistent enquiries by simplifying complex inspection services.",
    linkText: "Explore Home Inspection",
    href: "/industries/home-inspection",
    imageSrc: "/images/ind-inspection.jpg"
  },
  {
    id: "restaurants",
    title: "Restaurants",
    subtitle: "Make Them Hungry Before They Arrive.",
    description: "Turn attention into tables with social-first content that makes people crave your food before they've even visited.",
    linkText: "Explore Restaurants",
    href: "/industries/restaurants",
    imageSrc: "/images/ind-restaurants.jpg"
  },
  {
    id: "fnb",
    title: "Food & Beverage",
    subtitle: "Make Your Product Impossible to Forget.",
    description: "Build communities, launch products, and stand out in a crowded market with a compelling, visual brand story.",
    linkText: "Explore Food & Beverage",
    href: "/industries/food-beverage",
    imageSrc: "/images/ind-fnb.jpg"
  },
  {
    id: "cafes",
    title: "Cafés",
    subtitle: "More Than Coffee. It's an Experience.",
    description: "Make your café the place people talk about with scroll-stopping content and highly targeted local discovery campaigns.",
    linkText: "Explore Cafés",
    href: "/industries/cafes",
    imageSrc: "/images/ind-cafes.jpg"
  },
  {
    id: "salons",
    title: "Salons & Beauty",
    subtitle: "Make Your Brand The One They Choose.",
    description: "Showcase your work and build authentic trust to turn online followers into loyal, booked appointments.",
    linkText: "Explore Salons",
    href: "/industries/salons",
    imageSrc: "/images/ind-salons.jpg"
  },
  {
    id: "home-theatre",
    title: "Home Theatre",
    subtitle: "Don't Just Show What You Build.",
    description: "Showcase premium installations and build high-end positioning to generate highly qualified luxury enquiries.",
    linkText: "Explore Home Theatre",
    href: "/industries/home-theatre",
    imageSrc: "/images/ind-theatre.jpg"
  },
  {
    id: "products",
    title: "Product Brands",
    subtitle: "Great Products Need Great Attention.",
    description: "Help your products move fast with launch campaigns, influencer collaborations, and ongoing digital growth strategies.",
    linkText: "Explore Product Brands",
    href: "/industries/product-brands",
    imageSrc: "/images/ind-products.jpg"
  },
  {
    id: "jewellery",
    title: "Jewellery",
    subtitle: "Don't Just Show The Jewellery.",
    description: "Capture emotion and craftsmanship with visual content that makes your brand as inherently valuable as what you sell.",
    linkText: "Explore Jewellery",
    href: "/industries/jewellery",
    imageSrc: "/images/ind-jewellery.jpg"
  },
  {
    id: "construction",
    title: "Construction",
    subtitle: "Big Projects. Bigger Stories.",
    description: "Turn projects and expertise into content that builds iron-clad credibility with developers, architects, and homeowners.",
    linkText: "Explore Construction",
    href: "/industries/construction",
    imageSrc: "/images/ind-construction.jpg"
  },
  {
    id: "suppliers",
    title: "Suppliers & B2B",
    subtitle: "We'll Help The Industry Notice You.",
    description: "Communicate your expertise and generate high-value B2B leads to become the supplier your industry remembers.",
    linkText: "Explore Suppliers",
    href: "/industries/suppliers",
    imageSrc: "/images/ind-suppliers.jpg"
  }
];

const IndustriesList = () => {
  return (
    <section id="industries-list" className="w-full bg-[#F4EFEA] px-4 sm:px-6 md:px-12 py-16 md:py-20 flex flex-col gap-16">
      
      {/* COMPACT 3-COLUMN GRID */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industriesData.map((ind, index) => (
          <motion.div 
            key={ind.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            className="group bg-[#FDF9F9] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#12110B]/5 flex flex-col h-full"
          >
            {/* Reduced Image Height to 160px for a tighter card */}
            <div className="relative w-full h-[160px] overflow-hidden bg-[#12110B]/5">
              <Image 
                src={ind.imageSrc}
                alt={ind.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Tightened Padding inside the card */}
            <div className="p-5 md:p-6 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-black text-[#12110B] mb-1">{ind.title}</h3>
              <h4 className="text-sm md:text-base font-bold text-[#FF4F31] leading-snug mb-3">{ind.subtitle}</h4>
              <p className="text-[#12110B]/70 font-medium text-sm md:text-base leading-relaxed mb-6">
                {ind.description}
              </p>
              
             <Link 
                href={ind.href}
                className="mt-auto group inline-flex items-center self-start px-5 py-2.5 bg-[#12110B] text-[#FDF9F9] text-sm font-bold rounded-xl hover:bg-[#FF4F31] hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-orange-500/20"
              >
                {ind.linkText}
                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ========================================= */}
      {/* SMALL BIZ TO BIG BIZ FEATURE BLOCK        */}
      {/* ========================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto bg-[#FDF9F9] rounded-[2rem] shadow-xl p-8 md:p-12 border border-[#12110B]/5 flex flex-col lg:flex-row gap-12"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#FF4F31]/10 text-[#FF4F31] text-xs font-bold tracking-wider uppercase mb-5 self-start border border-[#FF4F31]/20">
            Business Scale
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#12110B] mb-4 leading-tight">
            Your Size Doesn&apos;t Decide Your Potential.
          </h2>
          <p className="text-base md:text-lg text-[#12110B]/70 font-medium leading-relaxed mb-6">
            We work with businesses at different stages. The strategy changes. The ambition doesn&apos;t.
          </p>
          <p className="text-base text-[#12110B]/80 font-bold leading-relaxed border-l-4 border-[#FF4F31] pl-4">
            We meet businesses where they are, understand where they want to go, and build the marketing and content needed to get there.
          </p>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#F4EFEA] p-5 rounded-2xl flex flex-col justify-center">
            <h4 className="text-[#FF4F31] font-black text-lg mb-1.5">Local Vendor</h4>
            <p className="text-[#12110B]/80 font-medium text-xs">Looking for their first hundred customers.</p>
          </div>
          <div className="bg-[#F4EFEA] p-5 rounded-2xl flex flex-col justify-center">
            <h4 className="text-[#FF4F31] font-black text-lg mb-1.5">Growing Business</h4>
            <p className="text-[#12110B]/80 font-medium text-xs">Trying to build a recognisable brand.</p>
          </div>
          <div className="bg-[#F4EFEA] p-5 rounded-2xl flex flex-col justify-center">
            <h4 className="text-[#FF4F31] font-black text-lg mb-1.5">Established Company</h4>
            <p className="text-[#12110B]/80 font-medium text-xs">Looking to modernise its marketing.</p>
          </div>
          <div className="bg-[#12110B] p-5 rounded-2xl flex flex-col justify-center">
            <h4 className="text-[#FDF9F9] font-black text-lg mb-1.5">Large Organisation</h4>
            <p className="text-[#FDF9F9]/70 font-medium text-xs">Ready to scale what already works.</p>
          </div>
        </div>
      </motion.div>

     
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        // Reduced max-width and padding for a compact feel
        className="w-full max-w-5xl mx-auto rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/ind-cta-bg.png")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#12110B' 
        }}
      >
        {/* <div className="absolute inset-0 bg-[#12110B]/90 backdrop-blur-sm"></div> */}

        {/* Centered single-column layout */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          
          <h3 className="text-xl md:text-2xl font-bold text-[#FF4F31] mb-3 uppercase tracking-wider">
            Your Industry. Our Gang.
          </h3>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#FDF9F9] mb-5 leading-tight">
            We Understand What <br className="hidden sm:block"/> 
            <span className="text-[#FF4F31]">Makes Businesses Grow.</span>
          </h2>
          
          <p className="text-base md:text-lg text-[#FDF9F9]/80 font-medium leading-relaxed mb-8">
            Whether you&apos;re a small local business or building the next big brand—we&apos;d love to hear what you&apos;re building.
          </p>
          
          <Link 
            href="/contact"
            className="group inline-flex items-center px-8 py-3.5 bg-[#FF4F31] text-[#FDF9F9] font-bold text-base rounded-xl hover:scale-105 hover:bg-[#C72C27] transition-all duration-300 shadow-lg shadow-orange-500/20"
          >
            Start a Conversation
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

        </div>
      </motion.div>
      
    </section>
  );
};

export default IndustriesList;