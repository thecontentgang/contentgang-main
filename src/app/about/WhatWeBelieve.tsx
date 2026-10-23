import React from 'react';

const WhatWeBelieve = () => {
  const beliefs = [
    {
      id: "01",
      title: "We Create To Stop The Scroll",
      description: "Your audience is exposed to thousands of messages every day. We create content designed to make people pause, look twice, watch, read, share, and remember."
    },
    {
      id: "02",
      title: "Grow Brands, Not Just Follower Counts",
      description: "Followers are only one part of the equation. We focus on building meaningful audiences, increasing brand awareness, creating demand, and turning attention into opportunities."
    },
    {
      id: "03",
      title: "We Think Beyond Content",
      description: "A beautiful post means very little if it doesn't contribute to the bigger picture. Every creative idea should have a purpose. We connect content with your business goals."
    },
    {
      id: "04",
      title: "We Keep It Human",
      description: "We're serious about the work—but we're also genuinely easy to work with. The best ideas come from open conversations, honest feedback, and teams that enjoy working together."
    },
    {
      id: "05",
      title: "We Move Fast",
      description: "Culture changes quickly. Trends change quickly. Audiences change quickly. Our lean team allows us to react, experiment, learn, and improve without unnecessary layers."
    },
    {
      id: "06",
      title: "We're In It With You",
      description: "We don't want to simply deliver content and disappear. We want to understand your business, care about your goals, and work alongside you to find the next opportunity for growth."
    }
  ];

  return (
    // Bright section background using your lightest beige/gray
    <section className="w-full bg-[#F4EFEA] py-20 md:py-32 px-4 sm:px-6 md:px-12 box-border">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Header with bright orange accent */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#FF4F31]/10 text-[#FF4F31] text-sm md:text-base font-bold tracking-wider uppercase mb-6">
            What We Believe
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12110B] leading-tight tracking-tight">
            Content Should Do More <br className="hidden sm:block" />
            <span className="text-[#12110B]/40">Than Look Good.</span>
          </h2>
        </div>

        {/* 
          Highly Responsive Grid: 
          1 column on mobile, 2 on tablet (sm), 3 on desktop (lg) 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {beliefs.map((belief, index) => (
            <div 
              key={index} 
              // Bright white cards with soft shadows and interactive borders
              className="group bg-[#FDF9F9] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 hover:border-[#FF4F31]/50 hover:shadow-2xl transition-all duration-300 ease-out flex flex-col h-full hover:-translate-y-1"
            >
              
              {/* Bright Orange Number Badge */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#FF4F31]/10 group-hover:bg-[#FF4F31] transition-colors duration-300 flex items-center justify-center mb-6 md:mb-8">
                <span className="text-2xl md:text-3xl font-black text-[#FF4F31] group-hover:text-[#FDF9F9] transition-colors duration-300">
                  {belief.id}
                </span>
              </div>
              
              {/* Card Content */}
              <h3 className="text-xl md:text-2xl font-bold text-[#12110B] mb-4 leading-snug">
                {belief.title}
              </h3>
              
              {/* Flex-grow ensures the text pushes the bottom spacing naturally if cards are uneven */}
              <p className="text-[#12110B]/70 font-medium leading-relaxed text-base flex-grow">
                {belief.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;