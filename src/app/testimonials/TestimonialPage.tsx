"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ReviewType = 'google' | 'video' | 'message' | 'classic';

interface Testimonial {
  id: string;
  type: ReviewType;
  name: string;
  role?: string;
  content?: string;
  imageSrc?: string;
  videoSrc?: string; 
  date?: string;
}

// ==========================================
// MOCK DATA: Expanded with Hyderabad-based clients
// ==========================================
const testimonials: Testimonial[] = [
  {
    id: "1",
    type: "google",
    name: "Sneha Reddy",
    role: "Owner, Zari Boutique (Banjara Hills)",
    content: "The Content Gang is hands down the best agency in Hyderabad! They completely transformed our online presence and our foot traffic doubled after they took over our social media. Highly recommend!",
    date: "3 days ago",
  },
  {
    id: "2",
    type: "video",
    name: "Arvind Rao",
    role: "CEO, Nexus Tech (HITEC City)",
    videoSrc: "/images/test-video-1.jpg", 
  },
  {
    id: "3",
    type: "message",
    name: "Tariq M.",
    role: "Client via WhatsApp",
    content: "Anna, the new cafe reel just crossed 500k views! My phone hasn't stopped ringing for table reservations today 🔥 You guys are magic.",
    date: "Today at 10:42 AM",
  },
  {
    id: "4",
    type: "classic",
    name: "Priya Sharma",
    role: "Marketing Director, Urban Spaces",
    content: "We needed an agency that understood the fast-paced real estate crowd in Gachibowli. The Content Gang didn't just understand it—they elevated our brand. The ROI on our recent campaign has been phenomenal.",
    imageSrc: "/images/test-profile-1.jpg",
  },
  {
    id: "5",
    type: "google",
    name: "Dr. Ananya Kiran",
    role: "Founder, Kiran Skin Clinic (Jubilee Hills)",
    content: "Incredible team. They handled our local SEO and content creation. If anyone searches for clinics in Jubilee Hills now, we show up first. We literally have patients walking in saying they saw our Instagram. 5 stars!",
    date: "2 weeks ago",
  },
  {
    id: "6",
    type: "message",
    name: "Varun D.",
    role: "Client via Slack",
    content: "The T-Hub event coverage photos are approved! Everyone on the board loved the new direction. Thanks for turning this around so quickly.",
    date: "Yesterday",
  },
  {
    id: "7",
    type: "classic",
    name: "Robert Fox",
    role: "VP of Sales, TechFlow",
    content: "Their lead generation campaigns are incredibly precise. We stopped wasting money on empty clicks and started having real conversations with qualified B2B buyers across India.",
    imageSrc: "/images/test-profile-2.jpg",
  },
  {
    id: "8",
    type: "video",
    name: "Aisha Patel",
    role: "Founder, Glow Beauty Studio",
    videoSrc: "/images/test-video-2.jpg", 
  },
  {
    id: "9",
    type: "google",
    name: "Karthik S.",
    role: "Co-Founder, Hyderabadi Cloud Kitchens",
    content: "We launched 3 new cloud kitchens in Madhapur and relied entirely on The Content Gang for the launch strategy. The Meta ads were so perfectly targeted that we sold out on opening weekend.",
    date: "1 month ago",
  },
  {
    id: "10",
    type: "message",
    name: "Neha V.",
    role: "Client via WhatsApp",
    content: "Just saw the new billboard designs for the Kondapur project. Absolutely stunning work. Print it! 🚀",
    date: "Today at 2:15 PM",
  },
  {
    id: "11",
    type: "classic",
    name: "Vikram Desai",
    role: "Managing Director, Desai Infra",
    content: "Construction marketing is usually boring, but this team found a way to make our projects look like cinematic masterpieces. They are the only agency in Hyderabad I trust with my brand.",
    imageSrc: "/images/test-profile-3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#F4EFEA] min-h-screen">
      
      {/* ========================================== */}
      {/* HERO SECTION                               */}
      {/* ========================================== */}
      <div className="w-full pt-20 md:pt-32 pb-16 px-4 sm:px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#FF4F31]/10 text-[#FF4F31] text-sm font-bold tracking-wider uppercase mb-6 border border-[#FF4F31]/20">
            Client Stories
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#12110B] mb-6 leading-tight tracking-tight">
            Don&apos;t Just Take <br /> Our Word For It.
          </h1>
          <p className="text-lg md:text-xl text-[#12110B]/70 font-medium leading-relaxed mb-8">
            We measure our success by the growth of our clients. Here is what happens when strategy, creativity, and execution come together.
          </p>
          
          {/* Trust Metrics Badge */}
          <div className="inline-flex items-center gap-4 bg-[#FDF9F9] px-6 py-3 rounded-2xl shadow-sm border border-[#12110B]/5">
            <div className="flex text-[#FF4F31]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-[#12110B] font-bold text-sm md:text-base">
              4.9/5 Average Rating from 50+ Clients
            </span>
          </div>
        </motion.div>
      </div>

      {/* ========================================== */}
      {/* MASONRY GRID ("Wall of Love")              */}
      {/* ========================================== */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
              className="break-inside-avoid"
            >
              
              {/* TYPE 1: GOOGLE REVIEW */}
              {test.type === 'google' && (
                <div className="bg-[#FDF9F9] p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-[#12110B]/5 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="font-bold text-[#12110B] text-lg">{test.name}</span>
                      <span className="text-[#12110B]/50 text-sm font-medium">{test.date}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center p-1.5">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex text-[#FF4F31]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-[#12110B]/80 font-medium leading-relaxed">&quot;{test.content}&quot;</p>
                </div>
              )}

              {/* TYPE 2: VIDEO TESTIMONIAL */}
              {test.type === 'video' && (
                <div className="group relative w-full h-[350px] rounded-[1.5rem] overflow-hidden bg-[#12110B] cursor-pointer">
                  {test.videoSrc && (
                    <Image src={test.videoSrc} alt={`Video from ${test.name}`} fill className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#FF4F31] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold text-lg">{test.name}</p>
                    <p className="text-white/70 text-sm font-medium">{test.role}</p>
                  </div>
                </div>
              )}

              {/* TYPE 3: MESSAGE (WhatsApp/Slack style) */}
              {test.type === 'message' && (
                <div className="bg-[#EAF3EB] p-6 rounded-[1.5rem] rounded-tl-none shadow-sm flex flex-col gap-3 relative">
                  <p className="text-[#12110B]/90 font-medium leading-relaxed">
                    {test.content}
                  </p>
                  <div className="flex justify-between items-end mt-2">
                    <div className="flex flex-col">
                      <span className="font-bold text-[#12110B] text-sm">{test.name}</span>
                      <span className="text-[#12110B]/50 text-xs font-medium">{test.role}</span>
                    </div>
                    <span className="text-[#12110B]/40 text-xs font-bold">{test.date}</span>
                  </div>
                </div>
              )}

              {/* TYPE 4: CLASSIC TEXT WITH AVATAR */}
              {test.type === 'classic' && (
                <div className="bg-[#FDF9F9] p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-[#12110B]/5 flex flex-col gap-6">
                  <svg className="w-8 h-8 text-[#FF4F31]/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-[#12110B]/80 font-medium leading-relaxed italic">
                    &quot;{test.content}&quot;
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 relative">
                      {test.imageSrc && (
                        <Image src={test.imageSrc} alt={test.name} fill className="object-cover" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#12110B]">{test.name}</span>
                      <span className="text-[#12110B]/50 text-sm font-medium">{test.role}</span>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          ))}
          
        </div>
      </div>

      {/* ========================================= */}
      {/* FINAL CENTERED & COMPACT CTA              */}
      {/* ========================================= */}
      <div className="w-full px-4 sm:px-6 md:px-12 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
          style={{
            backgroundImage: 'url("/images/tes-cta-bg.png")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#12110B' 
          }}
        >
          {/* Uncomment this if your text is hard to read against the image! */}
          {/* <div className="absolute inset-0 bg-[#12110B]/90 backdrop-blur-sm"></div> */}

          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            
            <h3 className="text-xl md:text-2xl font-bold text-[#FF4F31] mb-2 uppercase tracking-wider">
              Ready To Grow?
            </h3>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#FDF9F9] mb-4 leading-tight">
              Let&apos;s Build Your <br className="hidden sm:block"/> 
              <span className="text-[#FF4F31]">Success Story.</span>
            </h2>
            
            <p className="text-base md:text-lg text-[#FDF9F9]/90 font-medium leading-relaxed mb-8">
              Don&apos;t leave growth to chance. Let&apos;s build a strategy that gets real results.
            </p>
            
            <Link 
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-[#FF4F31] text-[#FDF9F9] font-bold text-base md:text-lg rounded-xl hover:scale-105 hover:bg-[#C72C27] transition-all duration-300 shadow-lg shadow-orange-500/20 whitespace-nowrap"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Testimonials;