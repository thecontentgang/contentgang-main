import React from 'react';

const MeetTheGang = () => {
  // Founder Data
  const founder = {
    name: "Bhanu Prakash",
    role: "Founder / Creative Director",
    description: "The person behind the vision, creative direction, and big ideas that keep brands moving forward. Turning business goals into content strategies that build awareness, create demand, and generate opportunities.",
    image: "/images/founder.jpg"
  };

  // Remaining 5 Team Members Data
 const team = [
    {
      name: "Ammarah",
      role: "Strategy & Growth Manager",
      description: "Turns business goals into scroll-stopping strategies that drive real growth and demand.",
      image: "/images/team-2.jpg"
    },
    {
      name: "Uday Kiran",
      role: "Creative / Content Lead",
      description: "Transforms raw ideas into engaging campaigns and content that demand attention.",
      image: "/images/team-3.jpg"
    },
    {
      name: "Karthik Sai",
      role: "Full Stack Developer",
      description: "Builds robust, high-performance web experiences with clean code and seamless functionality.",
      image: "/images/team-4.jpg"
    },
    {
      name: "Selvi",
      role: "Client Catcher",
      description: "Connects the agency with ambitious brands, turning first conversations into lasting partnerships.",
      image: "/images/team-5.jpg"
    },
    {
      name: "Praneeth",
      role: "Video Editor",
      description: "Crafts dynamic, fast-paced visual stories that keep audiences hooked from the first frame.",
      image: "/images/team-6.jpg"
    }
  ];

  return (
    <section id="gang" className="w-full bg-[#FDF9F9] py-20 md:py-32 px-4 sm:px-6 md:px-12 box-border">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <div>
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#FF4F31]/10 text-[#FF4F31] text-sm md:text-base font-bold tracking-wider uppercase mb-6">
              Meet The Content Gang
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12110B] leading-tight tracking-tight mb-6">
              Small Team. <br />
              <span className="text-[#FF4F31]">Big Ideas.</span>
            </h2>
            <div className="flex flex-col gap-2 mt-8 border-l-4 border-[#12110B] pl-5">
              <span className="text-lg font-bold text-[#12110B]">No layers. No middlemen.</span>
              <span className="text-xl font-black text-[#FF4F31] mt-1">Just The Gang.</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 text-lg md:text-xl text-[#12110B]/80 font-medium leading-relaxed">
            <p>
              Behind every piece of content is a team of people who care about making your brand better. We&apos;re a <strong className="text-[#12110B]">small, multidisciplinary team of strategists, creatives, content creators, designers, and growth thinkers</strong> working together to turn ideas into impact.
            </p>
          </div>
        </div>

        {/* ========================================= */}
        {/* FOUNDER SPOTLIGHT BLOCK                   */}
        {/* ========================================= */}
        <div className="w-full bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col lg:flex-row items-center gap-10 md:gap-16 mb-24 transition-transform hover:-translate-y-1 duration-500">
          
          {/* Founder Image (Left) */}
          <div className="w-full lg:w-5/12 aspect-[4/5] sm:aspect-square bg-[#F4EFEA] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-inner">
            {/* Fallback Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-[#12110B]/10">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          {/* Founder Info (Right) */}
          <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#FF4F31]"></span>
              <span className="text-sm font-bold text-[#FF4F31] uppercase tracking-wider">
                {founder.role}
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-[#12110B] mb-6">
              {founder.name}
            </h3>
            
            <p className="text-lg md:text-2xl text-[#12110B]/70 font-medium leading-relaxed mb-8">
              &quot;{founder.description}&quot;
            </p>
          </div>
        </div>

        {/* Section Divider */}
        <div className="w-full flex items-center justify-center mb-16">
          <div className="h-px bg-gray-200 flex-grow max-w-[100px]"></div>
          <span className="px-6 text-xl font-bold text-[#12110B]">The Gang</span>
          <div className="h-px bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>

        {/* ========================================= */}
        {/* THE GANG (5 MEMBERS)                      */}
        {/* ========================================= */}
        {/* Flex layout with wrap & center ensures the bottom 2 items are perfectly centered on desktop */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 mb-24">
          {team.map((member, index) => (
            // Width calc: 100% on mobile, 50% minus gap on tablet, 33.3% minus gap on desktop
            <div key={index} className="group flex flex-col w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] max-w-[400px]">
              
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/5] bg-[#F4EFEA] rounded-[2rem] mb-6 overflow-hidden relative shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-[#FF4F31]/30 border border-transparent">
                
                <div className="absolute inset-0 flex items-center justify-center text-[#12110B]/10 group-hover:bg-[#FF4F31]/5 transition-colors duration-300">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>

              {/* Text Info */}
              <h4 className="text-2xl font-bold text-[#12110B] mb-1">{member.name}</h4>
              <span className="text-xs font-bold text-[#FF4F31] uppercase tracking-wider mb-3 block">
                {member.role}
              </span>
              <p className="text-[#12110B]/70 font-medium leading-relaxed text-sm md:text-base">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================= */}
        {/* CLOSING BLOCK                             */}
        {/* ========================================= */}
        <div className="bg-[#12110B] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[#FF4F31] rounded-[100%] blur-[6rem] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-[#FDF9F9] mb-6">One Team. One Direction.</h3>
            <p className="text-lg md:text-2xl text-[#FDF9F9]/80 font-medium leading-relaxed mb-8">
              The biggest advantage of working with a small team? <strong className="text-white">You know exactly who&apos;s working on your brand.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[#FDF9F9] font-bold text-lg md:text-xl">
              <span>Close to the work.</span>
              <span className="hidden sm:inline text-[#FF4F31]">•</span>
              <span>Close to our clients.</span>
              <span className="hidden sm:inline text-[#FF4F31]">•</span>
              <span>Close to the results.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetTheGang;