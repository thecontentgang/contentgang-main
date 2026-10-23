"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceItem {
  num: string;
  title: string;
  sub1: string;
  sub2: string;
  description: string;
  highlight?: string;
  linkText: string;
  href: string;
  imageSrc: string;
}

const servicesData: ServiceItem[] = [
  {
    num: "01",
    title: "Content Creation",
    sub1: "Make Them Stop.",
    sub2: "Make Them Remember.",
    description: "Your audience is scrolling fast. We create the kind of content that makes them slow down. We turn your ideas into social-first videos, photography, and strategies people actually want to consume.",
    highlight: "Instagram. YouTube. LinkedIn. Photography. Video. Scripts. Strategy.",
    linkText: "Explore Content Creation",
    href: "/services/content-creation",
    imageSrc: "/images/content-creation.png"
  },
  {
    num: "02",
    title: "Social Media Management",
    sub1: "Don't Just Be Present.",
    sub2: "Be Impossible to Ignore.",
    description: "Posting isn't a strategy. We build and manage a social media presence that gives your brand a personality, a voice, and a reason to be followed while focusing on community and long-term growth.",
    highlight: "Because your social media shouldn't just exist. It should do something.",
    linkText: "Explore Social Media",
    href: "/services/social-media-management",
    imageSrc: "/images/social-media-management.png"
  },
  {
    num: "03",
    title: "Lead Generation",
    sub1: "Attention Is Great.",
    sub2: "Leads Are Better.",
    description: "Getting noticed is only the beginning. We build performance-driven campaigns designed to turn attention into enquiries, conversations, and customers across Meta Ads, Google Ads, and performance marketing.",
    highlight: "Because traffic without action is just traffic.",
    linkText: "Explore Lead Generation",
    href: "/services/lead-generation",
    imageSrc: "/images/lead-generation.png"
  },
  {
    num: "04",
    title: "Influencer Marketing",
    sub1: "Borrow Attention.",
    sub2: "Build Influence.",
    description: "People trust people. We help brands find the right creators, build the right collaborations, and turn influencer attention into genuine recommendations that your audience actually remembers.",
    highlight: "The right creator can change how people see your brand.",
    linkText: "Explore Influencer Marketing",
    href: "/services/influencer-marketing",
    imageSrc: "/images/influencer-marketing.png"
  },
  {
    num: "05",
    title: "Web Design & Dev",
    sub1: "Your Website Has",
    sub2: "One Job.",
    description: "Make people want to stay, then make them take action. We design and develop digital experiences that look sharp, feel effortless, and work hard behind the scenes to earn their place in your business.",
    highlight: "Because a website shouldn't just look good. It should convert.",
    linkText: "Explore Web Design",
    href: "/services/web-design-development",
    imageSrc: "/images/web-dev-des.png"
  },
  {
    num: "06",
    title: "SEO",
    sub1: "Be Found.",
    sub2: "Before They Are.",
    description: "The best website in the world doesn't matter if nobody finds it. We help brands become more visible through smarter search strategies, local SEO, and consistent on-page optimisation.",
    highlight: "No shortcuts. No magic tricks. Just consistent optimisation.",
    linkText: "Explore SEO",
    href: "/services/seo",
    imageSrc: "/images/seo.png"
  },
  {
    num: "07",
    title: "Digital Marketing",
    sub1: "Your Marketing",
    sub2: "Should Talk to Each Other.",
    description: "Your marketing shouldn't live in isolated corners. We bring your digital channels together to create an ecosystem where strategy, content, search, and performance support one united brand direction.",
    highlight: "Strategy. Content. Social. Search. Performance. Digital.",
    linkText: "Explore Digital Marketing",
    href: "/services/digital-marketing",
    imageSrc: "/images/digital-marketing.png"
  },
];

// Animated wave background — rendered once, reused across all cards
const WaveBackground = () => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1200 300"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>{`
      @media (prefers-reduced-motion: no-preference) {
        .wave1 { animation: waveRise1 7s ease-in-out infinite; }
        .wave2 { animation: waveRise2 9s ease-in-out infinite 0.8s; }
        .wave3 { animation: waveRise3 8s ease-in-out infinite 1.6s; }
        .wave4 { animation: waveRise4 10s ease-in-out infinite 0.4s; }
        .wave5 { animation: waveRise1 12s ease-in-out infinite 2.2s; }
      }

      @keyframes waveRise1 {
        0%, 100% { d: path("M-100 80 C150 30, 350 130, 600 75 S900 20, 1300 90"); }
        50%       { d: path("M-100 110 C150 60, 350 10, 600 105 S900 160, 1300 60"); }
      }
      @keyframes waveRise2 {
        0%, 100% { d: path("M-100 130 C150 80, 350 175, 600 120 S900 65, 1300 140"); }
        50%       { d: path("M-100 155 C150 110, 350 50, 600 145 S900 210, 1300 115"); }
      }
      @keyframes waveRise3 {
        0%, 100% { d: path("M-100 185 C150 135, 350 230, 600 175 S900 120, 1300 195"); }
        50%       { d: path("M-100 205 C150 160, 350 105, 600 200 S900 260, 1300 170"); }
      }
      @keyframes waveRise4 {
        0%, 100% { d: path("M-100 235 C150 185, 350 280, 600 225 S900 170, 1300 245"); }
        50%       { d: path("M-100 255 C150 210, 350 155, 600 250 S900 310, 1300 220"); }
      }
    `}</style>

    {/* Wave 1 — strongest orange, front */}
    <path
      className="wave1"
      d="M-100 80 C150 30, 350 130, 600 75 S900 20, 1300 90"
      stroke="#FF4F31"
      strokeWidth="1.4"
      opacity="0.13"
    />
    {/* Wave 2 — medium orange */}
    <path
      className="wave2"
      d="M-100 130 C150 80, 350 175, 600 120 S900 65, 1300 140"
      stroke="#FF4F31"
      strokeWidth="1.1"
      opacity="0.10"
    />
    {/* Wave 3 — dark, receding */}
    <path
      className="wave3"
      d="M-100 185 C150 135, 350 230, 600 175 S900 120, 1300 195"
      stroke="#12110B"
      strokeWidth="0.9"
      opacity="0.07"
    />
    {/* Wave 4 — dark, furthest back */}
    <path
      className="wave4"
      d="M-100 235 C150 185, 350 280, 600 225 S900 170, 1300 245"
      stroke="#12110B"
      strokeWidth="0.8"
      opacity="0.06"
    />
    {/* Wave 5 — faint orange, wide sweep */}
    <path
      className="wave5"
      d="M-100 40 C200 -10, 400 90, 650 35 S950 -20, 1300 50"
      stroke="#FF4F31"
      strokeWidth="0.8"
      opacity="0.07"
    />
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const ServicesList = () => {
  return (
    <section className="w-full bg-[#F4EFEA] px-4 sm:px-6 md:px-12 py-12 md:py-24 flex flex-col gap-6 md:gap-10">

      {servicesData.map((service) => (
        <motion.div
          key={service.num}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="relative w-full max-w-7xl mx-auto bg-[#FDF9F9] rounded-[1.5rem] md:rounded-[2rem] shadow-md hover:shadow-xl transition-shadow duration-500 p-5 sm:p-6 md:p-10 border border-[#12110B]/5 flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 lg:gap-12 overflow-hidden"
        >
          {/* Wave background — sits behind all card content */}
          <WaveBackground />

          {/* LEFT COLUMN */}
          <div className="relative w-full lg:w-1/2 flex flex-col min-w-0">

            <div className="mb-4 md:mb-6">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="px-3 py-1 bg-[#FF4F31]/10 text-[#FF4F31] text-xs md:text-sm font-bold rounded-full border border-[#FF4F31]/20 shrink-0">
                  {service.num}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#12110B] mb-1 md:mb-2 leading-tight tracking-tight">
                {service.title}
              </h2>
              <h3 className="text-base sm:text-lg md:text-2xl font-bold text-[#12110B]/40 leading-snug">
                {service.sub1} {service.sub2}
              </h3>
            </div>

            <div className="relative w-full flex-grow min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden group">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative w-full lg:w-1/2 flex flex-col justify-between py-0 md:py-2 min-w-0">

            <div className="flex flex-col gap-4 md:gap-6">
              <p className="text-base sm:text-lg md:text-xl text-[#12110B]/80 font-medium leading-relaxed">
                {service.description}
              </p>

              {service.highlight && (
                <div className="p-4 md:p-5 bg-[#F4EFEA] rounded-xl border-l-4 border-[#FF4F31]">
                  <p className="text-sm sm:text-base md:text-lg text-[#12110B] font-bold leading-relaxed">
                    {service.highlight}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 lg:mt-auto">
              <Link
                href={service.href}
                className="group inline-flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-[#FF4F31] text-[#FDF9F9] font-bold text-base md:text-lg rounded-xl hover:scale-105 hover:bg-[#C72C27] transition-all duration-300 shadow-lg shadow-orange-500/30"
              >
                {service.linkText}
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

          </div>

        </motion.div>
      ))}

      {/* FINAL CTA BLOCK */}
      <motion.div
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="w-full max-w-7xl mx-auto rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-16 shadow-2xl mt-4 md:mt-8 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/service-cta-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#12110B',
        }}
      >
        <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#FF4F31] rounded-full blur-[6rem] md:blur-[8rem] opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#FF4F31] rounded-full blur-[6rem] md:blur-[8rem] opacity-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FDF9F9] mb-1 md:mb-2 leading-tight">One Gang.</h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF4F31] mb-4 md:mb-6 leading-tight">Many Ways to Grow.</h2>
            <p className="text-base md:text-lg text-[#FDF9F9]/80 font-medium leading-relaxed mb-3 md:mb-4">
              You might come to us for content. You might stay because we found three other things that could transform your marketing.
            </p>
            <p className="text-base md:text-lg text-[#FDF9F9]/80 font-medium leading-relaxed">
              That&apos;s the advantage of having strategy, creativity, performance, technology, and growth thinking under one roof.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FDF9F9]/60 mb-1 md:mb-2">Different problems.</h3>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FDF9F9]/60 mb-1 md:mb-2">One team.</h3>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FDF9F9]/60 mb-5 md:mb-8">One goal.</h3>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FDF9F9] mb-5 md:mb-8">Your Growth.</h2>
            <p className="text-[#FDF9F9] font-bold mb-3 md:mb-4 text-base md:text-lg">Have something you&apos;re trying to solve?</p>

            <Link
              href="/contact"
              className="group inline-flex items-center px-6 md:px-8 py-3.5 md:py-4 bg-[#FF4F31] text-[#FDF9F9] font-bold rounded-xl hover:scale-105 hover:bg-[#C72C27] transition-all duration-300 shadow-lg shadow-orange-500/20 text-base md:text-lg"
            >
              Let&apos;s Talk
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default ServicesList;